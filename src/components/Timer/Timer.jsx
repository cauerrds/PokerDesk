import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentRound } from "../../features/tournament/tournamentSlice";
import useInterval from "../../hooks/useInterval";
import { Blinds, Clock, Container } from "./styles";
import { Textfit } from "react-textfit";
import {FaPlay, FaPause} from "react-icons/fa"



const Timer = ({status, setStatus, continueTournament, setContiueTournament, secondsElapsed, SetSecondsElapsed, minutesElapsed, SetMinutesElapsed})=>{

    const tournament = useSelector((state) => state.tournament)

    const dispatch = useDispatch()
    //const [currentRound, setCurrentRound] = useState(0)
    const isMounted = useRef(false)

    const startRound = (round)=>{   
      if(!round){
        setStatus((status) => "idle")
        console.log("Fim de Torneio");
        return
      }
      const {levelType, duration, smallBlind, bigBlind, ante} = round
      SetMinutesElapsed(duration)
      setStatus((status) => (status === 'running' && continueTournament === false ? 'idle' : 'running'));

    }

    const playTournament = (tournament)=>{
      setContiueTournament(true)
      const countdownRound = tournament.rounds[tournament.currentRound]
      startRound(countdownRound)
    }

    useEffect(() => {
      if (isMounted.current) {
        if(continueTournament){
          playTournament(tournament);
        }
      } else {
        isMounted.current = true;
      }
    }, [tournament.currentRound]);


    
    useInterval(
      () => {
        if(secondsElapsed > 0){
          SetSecondsElapsed((secondsElapsed) => secondsElapsed - 1);
        } else if(minutesElapsed > 0) {
          SetMinutesElapsed((minutesElapsed) => minutesElapsed - 1);
          SetSecondsElapsed(() => 59);
        } else {
          dispatch(setCurrentRound(tournament.currentRound + 1))
          playTournament(tournament)
        }
      },
      status === 'running' ? 1000 : null
    );

    let controls = (
      <FaPlay onClick={()=>playTournament(tournament)}>Start</FaPlay>
    )
    if(continueTournament){
      controls = (
          (status == "running") ?
          (<FaPause onClick={()=>setStatus((status) => "idle")}>Pause</FaPause>) :
          (<FaPlay onClick={()=>setStatus((status) => "running")}>Continue</FaPlay>)
      )
    }

    return(
        <Container className="ClockScreen">
          <Textfit  mode="single" className="title">
              {tournament.name }
          </Textfit>
          <Clock className="Clock">
            <Textfit  className="fit" mode="single">{
              (minutesElapsed < 10) ? (`0${minutesElapsed}`) : 
              (minutesElapsed)}:{(secondsElapsed < 10) ? 
              (`0${secondsElapsed}`) : (secondsElapsed)}
            </Textfit>
          </Clock>
          {/* <button onClick={()=>playTournament(tournament)}>Start</button>
          <button onClick={()=>setStatus((status) => "idle")}>Pause</button>
          <button onClick={()=>setStatus((status) => "running")}>unPause</button> */}
          <Blinds >
            <div className="fitContainer">
            <Textfit  className="fit" mode="single"><span>{tournament.rounds[tournament.currentRound].smallBlind}</span>/<span>{tournament.rounds[tournament.currentRound].bigBlind}</span></Textfit>
            </div>
            <div className="fitContainer">
            <Textfit  className="fit" mode="single">Ante: {tournament.rounds[tournament.currentRound].ante}</Textfit>
            </div>
            <div className="fitContainer round">
            <Textfit  className="fit level" mode="single">Round: {tournament.currentRound}</Textfit>
            </div>  
            {controls}
        </Blinds>
        </Container>
    )
}

export {Timer}
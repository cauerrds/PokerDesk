import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentRound } from "../../features/tournament/tournamentSlice";
import useInterval from "../../hooks/useInterval";
import { Blinds, Clock, Container } from "./styles";
import * as Speech from 'expo-speech';

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

    let renderCountdown = (
      <div className="onCountdown">
        <p>To Start</p>
        <button onClick={()=>playTournament(tournament)}>Start</button>
      </div>
 
    )

    if(tournament.currentRound > 0){
      renderCountdown = (
        <Blinds>
        <div><span>{tournament.rounds[tournament.currentRound].smallBlind}</span>/<span>{tournament.rounds[tournament.currentRound].bigBlind}</span></div>
        <div>Ante: {tournament.rounds[tournament.currentRound].ante}</div>
        <div className="level">Round: {tournament.currentRound}</div>
        <button onClick={()=>playTournament(tournament)}>Start</button>
      </Blinds>
       )
    }


    const speak = () => {
      const thingToSay = 'Next blind';
      Speech.speak(thingToSay);
    };


    return(
        <Container className="ClockScreen">
          <Clock className="Clock">
          <Button title="Press to hear some words" onPress={speak} />
          <div>{minutesElapsed < 10 ? `0${minutesElapsed}` : minutesElapsed}:{secondsElapsed < 10 ? `0${secondsElapsed}` : secondsElapsed}</div>
          </Clock>
          {/* <button onClick={()=>playTournament(tournament)}>Start</button>
          <button onClick={()=>setStatus((status) => "idle")}>Pause</button>
          <button onClick={()=>setStatus((status) => "running")}>unPause</button> */}
          {renderCountdown}
        </Container>
    )
}

export {Timer}
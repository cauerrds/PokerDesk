import { useEffect, useState } from "react";
import { Timer } from "./components/Timer/Timer";
import { BlindsTable } from "./components/BlindsTable/BlindsTable";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import { Lading } from "./components/Lading/Lading";
import { Slider } from "./components/Sliders/Slider";

const App = () => {

  const [secondsElapsed, SetSecondsElapsed] = useState(0)
  const [minutesElapsed, SetMinutesElapsed] = useState(0)
  const [status, setStatus] = useState('idle')
  const [continueTournament, setContiueTournament] = useState(false)

  const tournament = useSelector((state) => state.tournament)



  return (

      <Slider>
          <Lading/> 
          <div>
            <Header title={"PokerDesk"}/>
            <BlindsTable
            setStatus={setStatus}
            status={status}
            SetMinutesElapsed={SetMinutesElapsed}
            SetSecondsElapsed={SetSecondsElapsed}
            />
          </div>
          <div>
              <Header title={tournament.name}/>
              <Timer
               continueTournament={continueTournament}
               status={status}
               secondsElapsed={secondsElapsed}
               minutesElapsed={minutesElapsed}
               SetSecondsElapsed={SetSecondsElapsed}
               SetMinutesElapsed={SetMinutesElapsed}
               setStatus={setStatus}
               setContiueTournament={setContiueTournament}
              />
          </div>     
      </Slider>
    
  );
};

export default App;

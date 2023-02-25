import { useState } from "react";
import { Timer } from "./components/Timer/Timer";
import { Config } from "./components/Confing/Config";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import { Fullpage, FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";

const App = () => {

  const [secondsElapsed, SetSecondsElapsed] = useState(0)
  const [minutesElapsed, SetMinutesElapsed] = useState(0)
  const [status, setStatus] = useState('idle')
  const [continueTournament, setContiueTournament] = useState(false)

  const tournament = useSelector((state) => state.tournament)


  return (
    <div className="App">
        <Fullpage>
            <FullPageSections>
                <FullpageSection className="fullPage" >
                    <Header title={"PokerDesk"}/>
                    <Config
                    setStatus={setStatus}
                    status={status}
                    SetMinutesElapsed={SetMinutesElapsed}
                    SetSecondsElapsed={SetSecondsElapsed}
                    />
                    <Footer/>
                </FullpageSection>
                <FullpageSection className="fullPage" >
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
                    <Footer/>
                </FullpageSection>
            </FullPageSections>     
        </Fullpage>
    </div>
  );
};

export default App;

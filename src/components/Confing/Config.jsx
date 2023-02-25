import { useDispatch, useSelector } from "react-redux"
import { editLevel, setCurrentRound } from "../../features/tournament/tournamentSlice"
import { Footer } from "../Footer/Footer"
import { Container, Content, Table, TableContainer } from "./styles"

const Config = ({status, setStatus, SetMinutesElapsed, SetSecondsElapsed})=>{
    const tournament = useSelector((state) => state.tournament)

    const dispatch = useDispatch()


    const handleChange = async (event, levelId, prop)=>{
        const value = event.target.value    

        dispatch(editLevel({levelId, prop, value}))

        if(tournament.currentRound == levelId){
            setStatus((status) => "idle")
            SetMinutesElapsed(value)
            SetSecondsElapsed(0)
            setTimeout(()=>{
                setStatus((status) => "running")
            }, 1000)
        }
    }


    const rederTableContent = (tournamentData)=>{

        const renderedData = tournamentData.map((level, i)=>{
            if(level.levelType == "blindLevel"){
                return (
                    <tr key={i}>
                        <td>
                            <select id="levelType" name="levelType" defaultValue={level.levelType == "blindLevel" ? "blindLevel" : "break"} onBlur={(e)=>handleChange(e,i,"levelType")}>
                                    <option value="blindLevel">{`Round ${i}`}</option>
                                    <option value="break">Break</option>
                            </select>
                        </td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"duration")} placeholder={level.duration}/></td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"smallBlind")} placeholder={level.smallBlind}/></td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"bigBlind")} placeholder={level.bigBlind}/></td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"ante")} placeholder={level.ante}/></td>
                    </tr>
                )
            } else if(level.levelType == "break"){
                return (
                    <tr key={i}>
                    <td>
                        <select id="levelType" name="levelType" defaultValue={level.levelType == "blindLevel" ? "blindLevel" : "break"} onBlur={(e)=>handleChange(e,i,"levelType")}>
                                <option value="blindLevel">Round</option>
                                <option value="break">Break</option>
                        </select>
                    </td>
                    <td><input type="number" onBlur={(e)=>handleChange(e,i,"duration")} placeholder={level.duration}/></td>
                    <td><input disabled type="number" onBlur={(e)=>handleChange(e,i,"smallBlind")} placeholder="-"/></td>
                    <td><input disabled type="number" onBlur={(e)=>handleChange(e,i,"bigBlind")} placeholder="-"/></td>
                    <td><input disabled type="number" onBlur={(e)=>handleChange(e,i,"ante")} placeholder="-"/></td>
                </tr>
                )
            } else if(level.levelType == "countdown"){
                return (
                    <tr key={i}>
                    <td>
                        <input disabled value="Countdown" />
                    </td>
                    <td><input onBlur={(e)=>handleChange(e,i,"duration")} placeholder={level.duration}/></td>
                    <td><input disabled onBlur={(e)=>handleChange(e,i,"smallBlind")} placeholder="-"/></td>
                    <td><input disabled onBlur={(e)=>handleChange(e,i,"bigBlind")} placeholder="-"/></td>
                    <td><input disabled onBlur={(e)=>handleChange(e,i,"ante")} placeholder="-"/></td>
                </tr>
                )
            }
        })

        return renderedData
    }

    return (

        <Container>
            <Content>
                <TableContainer>
                    <h1>Blinds Schedule</h1>
                    <Table border-collapse>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Level</th>
                                <th>Duration</th>
                                <th>Small Blind</th>
                                <th>Big Blind</th>
                                <th>Ante</th>
                            </tr>
                             {rederTableContent(tournament.rounds)}              
                        </tbody>
                    </Table>
                </TableContainer>    
            </Content>
        <Footer/>
        </Container>
    )

}

export {Config}
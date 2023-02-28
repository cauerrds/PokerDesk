import { useDispatch, useSelector } from "react-redux"
import { addRow, editLevel, insertBreak, removeRow, setCurrentRound } from "../../features/tournament/tournamentSlice"
import {FaPlay} from "react-icons/fa"
import { Container, Content, Table, TableContainer } from "./styles"
import {RiCloseFill} from "react-icons/ri"
import {HiPlusSm} from "react-icons/hi"

const BlindsTable = ({status, setStatus, SetMinutesElapsed, SetSecondsElapsed})=>{
    const tournament = useSelector((state) => state.tournament)

    const dispatch = useDispatch()


    const handleChange = async (event, levelId, prop)=>{
        let value = event.target.value 
        if(prop == "smallBlind" || prop == "bigBlind"){
            value = Math.floor(value / 100) * 100 + (value % 100 < 50 ? 0 : 100)
        }

        dispatch(editLevel({levelId, prop, value}))

        if(tournament.currentRound == levelId){
            if(prop == "duration"){
                setStatus((status) => "idle")
                SetMinutesElapsed(value)
                SetSecondsElapsed(0)
                setTimeout(()=>{
                    setStatus((status) => "running")
                }, 1000)
            }
        }
    }

    const setAsCurrentLClick=(levelId)=>{
        setStatus((status) => "idle")
        dispatch(setCurrentRound(levelId))
        SetMinutesElapsed(tournament.rounds[levelId].duration)
        SetSecondsElapsed(0)
        setTimeout(()=>{
            setStatus((status) => "running")
        }, 1000)
    }

    const handlePlusClick = (id)=>{
        setStatus((status) => "idle")
        dispatch(addRow(id))
        setTimeout(()=>{
            setStatus((status) => "running")
        }, 100)
    }

    const handleRemoveClick = (id)=>{
        setStatus((status) => "idle")
        dispatch(removeRow(id))
        setTimeout(()=>{
            setStatus((status) => "running")
        }, 100)
    }

    const handleSelectChange=(id)=>{
        setStatus((status) => "idle")
        dispatch(insertBreak(id))
        setTimeout(()=>{
            setStatus((status) => "running")
        }, 100)
    }


    const rederTableContent = (tournamentData)=>{

        const renderedData = tournamentData.map((level, i)=>{
            if(level.levelType == "blindLevel"){
                return (
                    <tr key={i} className="levelRow">
                        <td><FaPlay onClick={()=>setAsCurrentLClick(i)} className="playIcon"/></td>
                        <td>
                            <select id="levelType" name="levelType" defaultValue={level.levelType == "blindLevel" ? "blindLevel" : "break"} onChange={(e)=>handleSelectChange(i)}>
                                    <option value="blindLevel">{i}</option>
                                    <option value="break">BRK</option>
                            </select>
                        </td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"duration")} placeholder={level.duration}/></td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"smallBlind")} placeholder={(level.smallBlind>=1000)?((level.smallBlind/1000).toFixed(1) + "K"):(level.smallBlind.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))}/></td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"bigBlind")} placeholder={(level.bigBlind>=1000)?((level.bigBlind/1000) + "K"):(level.bigBlind.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))}/></td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"ante")} placeholder={(level.ante>=1000)?((level.ante/1000) + "K"):(level.ante.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))}/></td>
                        <td className="closedIcon"><HiPlusSm onClick={()=>handlePlusClick(i)}/></td>
                        <td className="closedIcon"><RiCloseFill className="deleteIcon" onClick={()=> handleRemoveClick(i)}/></td>
                    </tr>
                )
            } else if(level.levelType == "break"){
                return (
                    <tr key={i} className="breakRow">
                        <td><FaPlay onClick={()=>setAsCurrentLClick(i)} className="playIcon"/></td>
                        <td><input disabled value="BRK" /></td>
                        <td><input type="number" onBlur={(e)=>handleChange(e,i,"duration")} placeholder={level.duration}/></td>
                        <td><input disabled type="number" onBlur={(e)=>handleChange(e,i,"smallBlind")} placeholder="-"/></td>
                        <td><input disabled type="number" onBlur={(e)=>handleChange(e,i,"bigBlind")} placeholder="-"/></td>
                        <td><input disabled type="number" onBlur={(e)=>handleChange(e,i,"ante")} placeholder="-"/></td>
                        <td className="closedIcon"><HiPlusSm onClick={()=>handlePlusClick(i)}/></td>
                        <td className="closedIcon"><RiCloseFill className="deleteIcon" onClick={()=> handleRemoveClick(i)}/></td>
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
                                <th>Play</th>
                                <th>Level</th>
                                <th>Minutes</th>
                                <th>Small Blind</th>
                                <th>Big Blind</th>
                                <th>Ante</th>
                                <th></th>
                            </tr>
                             {rederTableContent(tournament.rounds)}              
                        </tbody>
                    </Table>
                </TableContainer>    
            </Content>
        </Container>
    )

}

export {BlindsTable}
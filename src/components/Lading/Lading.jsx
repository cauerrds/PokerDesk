import { Content, Container, FileInput, InfoContainter, InputContainer, FileOutput } from "./styles";
import { MdOutlineFileUpload, MdOutlineFileDownload} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { addTournament } from "../../features/tournament/tournamentSlice";
import { Header } from "../Header/Header";

const Lading = ()=>{

    const tournament = useSelector((state)=> state.tournament)
    const dispatch = useDispatch()

    const handleChange=(event)=> {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
        // The file's text will be printed here
        const tournamenteFile = JSON.parse(event.target.result)
        dispatch(addTournament(tournamenteFile))
        };   
        reader.readAsText(file);
    } 

    const handleExportClick=()=>{  
        const tournamentData = JSON.stringify(tournament);
        const blob = new Blob([tournamentData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = `${tournament.name}.json`;
        link.href = url;
        link.click()
    }

    return (
        <Container>
            <Header/>
            <Content>
                <InputContainer>
                    <FileInput>
                        <input type="file" onChange={(e)=> handleChange(e)}/>
                        <MdOutlineFileUpload/> 
                        <h1>Upload Tournament</h1>
                    </FileInput>
                    <FileOutput onClick={handleExportClick}>
                        <MdOutlineFileDownload />
                        <h1>Download Tournament</h1>
                    </FileOutput>
                </InputContainer>
                <InfoContainter>
                    <h1>{tournament.name}</h1>
                    <div>
                        <h2>Rounds: {tournament.rounds.length}</h2>                   
                        <h2>Stack Inicial: {(tournament.stack>1000)?(tournament.stack/1000 + "K"): tournament.stack}</h2>                   
                    </div>
                </InfoContainter>
            </Content>
        </Container>
    )

}

export {Lading}
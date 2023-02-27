import { useDispatch, useSelector } from "react-redux"
import { setActivePage } from "../../features/Slider/sliderSlice";
import { Container, SliderControls } from "./styles"
import banner from "../../assets/banner.png"

const Header = ({title})=>{
    const { pages, activePage } = useSelector((state)=> state.slider)
    const dispatch = useDispatch()
    const handlePageChange = (pageNum) => {
        dispatch(setActivePage(pageNum))
      };
    return(
        <Container>
              <h1><span className="FirstChat">P</span>oker<span>Desk</span></h1>
            <SliderControls>
            {Array.from({ length: pages }, (_, i) => i).map((pageNum) => (
              <button key={pageNum} className={`slider-control ${pageNum === activePage ? 'active' : ''}`} onClick={() => handlePageChange(pageNum)}>
                {(pageNum == 0)?("Home"):(pageNum == 1)?("Schedule"):("Tournament")}
              </button>
            ))}
            </SliderControls>
        </Container>
    )
}
export { Header }
import { useDispatch, useSelector } from "react-redux"
import { setActivePage } from "../../features/Slider/sliderSlice";
import { Container, Content, SliderControls } from "./styles"

const Header = ()=>{
    const { pages, activePage } = useSelector((state)=> state.slider)
    const dispatch = useDispatch()
    const handlePageChange = (pageNum) => {
        dispatch(setActivePage(pageNum))
      };
    return(
        <Container>
          <Content>
              <h1><span className="FirstChat">P</span>oker<span>Desk</span></h1>
            <SliderControls>
            {Array.from({ length: pages }, (_, i) => i).map((pageNum) => (
              <button key={pageNum} className={`slider-control ${pageNum === activePage ? 'active' : ''}`} onClick={() => handlePageChange(pageNum)}>
                {(pageNum == 0)?("Home"):(pageNum == 1)?("Schedule"):("Tournament")}
              </button>
            ))}
            </SliderControls>
          </Content>
        </Container>
    )
}
export { Header }
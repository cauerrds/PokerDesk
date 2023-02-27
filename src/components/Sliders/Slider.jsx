import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setPages } from "../../features/Slider/sliderSlice";
import { Container } from "./styles";


const Slider = ({ children })=>{
    const { pages, activePage } = useSelector((state)=> state.slider)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(setPages(children.length))
    },[pages])

  
  

    return (
        <Container bottom={activePage}>
          <div className="slider-pages" style={{ transform: `translateY(-${activePage * 100}%)` }}>
            {children.map((child, index) => (
              <div key={index} className="page">
                {child}
              </div>
            ))}
          </div>
        </Container>
      );
}

export  {Slider}
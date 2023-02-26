import { useState } from "react";
import { Container } from "./styles";


const Slider = ({ children })=>{
    const [activePage, setActivePage] = useState(0);
    const numPages = children.length;
  
    const handlePageChange = (pageNum) => {
      setActivePage(pageNum);
    };

    return (
        <Container>
          <div className="slider-pages" style={{ transform: `translateY(-${activePage * 100}%)` }}>
            {children.map((child, index) => (
              <div key={index} className="page">
                {child}
              </div>
            ))}
          </div>
          <div>
          <div className="slider-controls">
            {Array.from({ length: numPages }, (_, i) => i).map((pageNum) => (
              <button key={pageNum} className={`slider-control ${pageNum === activePage ? 'active' : ''}`} onClick={() => handlePageChange(pageNum)}>
                {(pageNum == 0)?("Home"):(pageNum == 1)?("Schedule"):("Tournament")}
              </button>
            ))}
          </div>
          </div>
        </Container>
      );
}

export  {Slider}
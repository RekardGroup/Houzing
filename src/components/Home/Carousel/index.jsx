import React, { useRef } from "react";
import {
  Container,
  Wrapper,
  Img,
  Info,
  Detailes,
  Icon,
  Position,
} from "./style";
import home1 from "../../../assets/imgs/home1.png";
import home2 from "../../../assets/imgs/home2.png";
import home3 from "../../../assets/imgs/home3.png";
import home4 from "../../../assets/imgs/home4.png";
import home5 from "../../../assets/imgs/home5.png";
import Button from "../../Generic/Button";

const Corusel = () => {
  const slider = useRef("click");
  return (
    <Wrapper>
      <Icon.Left onClick={() => slider.current.prev()} />
      <Icon.Right onClick={() => slider.current.next()} />
      <div className="katta">
        <Position>
          <h1 className="title">Skyper Pool Partment</h1>
          <h2 className="sub-title">112 Glenwood Ave Hyde Park, Boston, MA</h2>
          <Info>
            <Detailes>
              <Icon.Beds />
              <p className="small-description"> 4 Beds</p>
            </Detailes>
            <Detailes>
              <Icon.Baths />
              <p className="small-description">5 Baths</p>
            </Detailes>
            <Detailes>
              <Icon.Garage />
              <p className="small-description">1 Garage</p>
            </Detailes>
            <Detailes>
              <Icon.SqFt />
              <p className="small-description">1200 Sq Ft</p>
            </Detailes>
          </Info>
          <h1 className="title-small">$5,250/mo</h1>
          <Button className="button" mt={10} width={"180px"}>
            Read more
          </Button>
        </Position>
      </div>
      <Container autoplay ref={slider}>
        <Img src={home1} />
        <Img src={home2} />
        <Img src={home3} />
        <Img src={home4} />
        <Img src={home5} />
      </Container>
    </Wrapper>
  );
};
export default Corusel;

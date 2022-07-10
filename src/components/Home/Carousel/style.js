import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as LeftArrow } from '../../../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/rightArrow.svg'
import { ReactComponent as SqFt } from "../../../assets/icons/ruler.svg";
import { ReactComponent as Garage } from "../../../assets/icons/car.svg";
import { ReactComponent as Baths } from "../../../assets/icons/bath.svg";
import { ReactComponent as Beds } from "../../../assets/icons/bed.svg";

const Wrapper = styled.div`
  -webkit-user-select: none;
  position: relative;
  .katta {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 200px;
    @media (max-width: 934px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 250px;
    }
  }
`;

const Container = styled(Carousel)``;

const Img = styled.img`
  width: 100%;
  height: 571px;
  filter: brightness(45%);
  object-fit: cover;
`;
const Icon = styled.div``;
Icon.SqFt = styled(SqFt)``;
Icon.Garage = styled(Garage)``;
Icon.Baths = styled(Baths)``;
Icon.Beds = styled(Beds)``;

Icon.Left = styled(LeftArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	left: 0px;
	transform: translate(100%, -50%);
	width: 45px;
	height: 45px;
	padding: 12px;
	background: white;
	opacity: 0.3;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
	:hover {
		opacity: 0.5;
	}
	& path {
		fill: #0d263b;
	}
`;
Icon.Right = styled(RightArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translate(-100%, -40%);
	width: 45px;
	height: 45px;
	padding: 12px;
	background: white;
	padding: 12px;
	opacity: 0.3;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
	:hover {
		opacity: 0.5;
	}
	& path {
		fill: #0d263b;
	}
`;

const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 7;
  /* left: 32%; */
  /* display: none; */
  .title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-top: 130px;
    -webkit-user-select: none;
    @media (max-width: 935px) {
      margin-top: 30px;
    }
    @media (max-width: 935px) {
      font-size: 28px;
    }
  }
  .sub-title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin-top: 5px;
    -webkit-user-select: none;
  }
  .title-small {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-top: 10px;
    -webkit-user-select: none;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 24px;
  margin-top: 10px;
`;

const Detailes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .small-description {
    color: #ffffff;
    -webkit-user-select: none;
  }
`;



export {
  Wrapper,
  Container,
  Img,
  Position,
  Info,
  Detailes,
  Icon,
};

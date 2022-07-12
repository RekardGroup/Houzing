import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 64px 0;
  flex-direction: column;
  width: 580px;
  height: fit-content;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  gap: 20px;
  span {
    color: var(--activeColor);
    text-decoration: underline;
    font-size: 16px;
    cursor: pointer;
  }
`;
export { Container, Wrapper };

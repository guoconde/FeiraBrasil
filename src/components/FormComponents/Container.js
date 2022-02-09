import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(./bg.png);
  height: 100vh;

  img{
    margin-top: 65px;
  }


  @media screen and (min-width: 800px) {
    img{
      margin-top: 100px;
    }
  }
`;

export default Container;
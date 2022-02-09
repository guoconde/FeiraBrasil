import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap:12px;

  background: #fff;
  padding: 50px 30px 40px;

  >div{
    display:flex;
    justify-content: space-between;
    width:100%;
    margin:20px 0;
  }
  span{
    font-size: 14px;
    line-height: 17px;

    color: #1A202C;
    width:100%;
    align-self:center;
    display:flex;
    justify-content:center;
  }
`;

export default Form;
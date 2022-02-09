import styled from "styled-components";

const Button = styled.button`
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-bottom:20px;
  
  cursor: pointer;
  pointer-events: ${({disabled}) => disabled ? "none" : "all"};
  opacity: ${({disabled}) => disabled ? 0.7 : 1};
  
  
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  
  background:  ${({color}) => color};
  color: #FFFFFF;
`;

export default Button;
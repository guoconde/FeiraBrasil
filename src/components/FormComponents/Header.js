import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    height: 150px;

    padding: 0 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #FFBE0B;

    font-size: 22px;

    .wellcome {

        .btn {
            display: flex;
            gap: 20px;
        }
        
        .links {
            display: flex;
            gap: 20px;

            margin-top: 15px;

            font-size: 14px;
        }
    }
        
`;

export default Header;
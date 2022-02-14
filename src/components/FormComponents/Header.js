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

    .navigate,
    ion-icon {
        cursor: pointer;
    }
    
    .wellcome {
        position: relative;
        margin-right: 40px;

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

        .log-out {
            position: absolute;
            right: 0;
            top: -15px;
        }
       
    }

    .cart {
        width: 50px;
        height: 50px;
        border-radius: 51%;

        background-color: #FB5607;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;

        position: absolute;
        right: 20px;
        top: 50px;

        cursor: pointer;
    }

        
`;

export default Header;
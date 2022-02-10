import styled from "styled-components";

const Main = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    div.fixed {
        width: 100%;
        position: fixed;
    }

    nav {
        width: 100%;
        height: 80px;

        padding: 0 50px;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;

        background-color: #F2D278;
        
        font-size: 22px;
        font-weight: bold;

        ion-icon {
            font-size: 40px;
            --ionicon-stroke-width: 40px;
        }
    }
`;

export default Main;
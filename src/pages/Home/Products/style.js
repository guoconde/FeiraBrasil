import styled from "styled-components"

export const Product = styled.div`
    width: 200px;
    height: 250px;

    border: 5px solid #3A86FF;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

    padding: 15px 0;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;

    img {
        width: 180px;
        height: 130px;
        margin-bottom: 10px;
    }

    .product-name {
        font-size: 20px;
        font-weight: 600;
    }

    .product-resume {
        text-align: center;
    }

    .product-price {
        font-weight: 600;
    }
`
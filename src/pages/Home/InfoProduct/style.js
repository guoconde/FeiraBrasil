import styled from "styled-components"

export const DivProduct = styled.div`
    width: 100%;
    height: 89.8vh;

    border-top: 3px solid #FB5607;

    display: flex;
    justify-content: space-between;

    .to-cart {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        padding: 30px;
        background-color: #F2D278;

        img {
            border: 3px solid #3A86FF;
            border-radius: 5px;
            width: 200px;
        }

        button {
            width: 200px;
            height: 50px;
            
            background-color: #3A86FF;
            
            :active {
                background-color: #2559ac;
            }
        }
        
        .quantity {
            display: flex;
            align-items: center;
            gap: 30px;
            
            input {
                all: unset;
                
                width: 100px;
                height: 40px;
                text-align: center;
                
                background-color: rgba(255, 255, 255, 0.5)
            }
        }
    }
    
    .info-product {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        position: relative;
        padding: 30px;
        
        font-size: 18px;
        line-height: 30px;
        
        .name {
            align-self: center;
            
            font-size: 22px;
            font-weight: 600;
            
            margin-bottom: 30px;
        }
        
        ion-icon {
            position: absolute;
            right: 30px;
            top: 30px;
            
            cursor: pointer;

            font-size: 30px;
            color: red;
        }
    }
    
`
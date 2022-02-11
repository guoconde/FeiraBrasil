import { ContinueButton, DeliverType, Options, UserAdress, UserData } from "../style";

export default function UserInfos({userInfo, setStage}){
    return(
        <>
            <UserData>
                <h3>DADOS</h3>
                <h6>Nome</h6>
                <p>{userInfo.username}</p>
                <h6>E-mail</h6>
                <p>{userInfo.email}</p>
                <h6>cpf</h6>
                <p>{userInfo.info.cpf}</p>
                <h6>CEP</h6>
                <p>{userInfo.info.cep}</p>
            </UserData>
            <UserAdress>
                <h3>ENDEREÇO DE ENTREGA</h3>
                <Options>
                    <input id="adress" type="radio"></input>
                    <label htmlFor="adress">{userInfo.info.adress}</label>
                </Options>
            </UserAdress>
            <DeliverType>
                <h3>ESCOLHA O TIPO DE ENTREGA</h3>
                <Options>
                    <input id="deliver" type="radio"></input>
                    <label htmlFor="deliver">Normal - 1 dia útil (Frete Grátis)</label>
                </Options>
            </DeliverType>
            <ContinueButton onClick={()=>setStage("payment")}>Seguir para o pagamento</ContinueButton>
        </>
    )
}
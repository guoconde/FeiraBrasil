import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../context/session";
import { UserContext } from "../../context/user";
import useApi from "../../hooks/useApi";
import HeaderComplete from "../Header";
import { HistoricContainer, HistoricInfos, HistoricTable, Purchase } from "./styled";

export default function Hiatoric(){
    const api = useApi()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    const [historic, setHistoric] = useState([])
    let headers = ""
    if(user) headers = { headers: { Authorization: `Bearer ${user.token}` }}
    else if(session)headers = { headers: { Authorization: `Bearer ${session.token}` }}
    

    useEffect(()=>{
        async function getHistoric(){
            try {
                const res = await api.user.getHistoric(headers)
                setHistoric(res.data)
            } catch (error) {
                console.log(error.response)
            }
        }
        getHistoric()
        //eslint-disable-next-line
    },[])

    return(
        <>
            <HeaderComplete></HeaderComplete>
            <HistoricContainer>
                <h2>MEUS PEDIDOS</h2>
                {historic.length 
                ?   <HistoricTable>
                        <HistoricInfos>
                            <div>ID do pedido</div>
                            <div>Data</div>
                            <div>Valor</div>
                            <div>Forma de pagamento</div>
                        </HistoricInfos>
                        {historic.map((purchase,i)=>
                            <Purchase key={i}>
                                <span>{(purchase._id).toString()}</span>
                                <span>{(purchase.date)}</span>
                                <span>R$ {(purchase.total / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                                <span>{(purchase.purchaseInfo)}</span>
                            </Purchase>
                        )}
                    </HistoricTable>
                :   <h2>Você ainda não realizou nenhuma compra</h2>
                }
                
            </HistoricContainer>
        </>
    )
}
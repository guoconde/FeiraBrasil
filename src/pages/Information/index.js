import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { Button, Container, Form, Input, Lable, Title } from "../../components/FormComponents";
import { SessionContext } from "../../context/session";
import { UserContext } from "../../context/user";
import useApi from "../../hooks/useApi";
import { fireAlert } from "../../utils/alerts";

export default function Information(){
    const [formData, setFormData] = useState({ adress: '', cep: '', cpf: ''     });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const api = useApi()
    const { user } = useContext(UserContext)
    const { session } = useContext(SessionContext)
    let headers = ""
    if(user) headers = { headers: { Authorization: `Bearer ${user.token}` }}
    else if(session) headers = { headers: { Authorization: `Bearer ${session.token}` }}

    function handleChange(e) {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
    
        try {
          await api.user.saveInfo(formData, headers)
          setIsLoading(false);
          navigate("/pagamento")
        } catch (error) {
          setIsLoading(false);
          fireAlert(error.response.data)
        }
      }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Forneça suas informações</Title>
                <Lable htmlFor="cpf">CPF</Lable>
                <Input
                    type="text"
                    id="cpf"
                    onChange={handleChange}
                    value={formData.cpf}
                    disabled={isLoading}
                    required    
                />
                <Lable htmlFor="cep">CEP</Lable>
                <Input
                    type="text"
                    id="cep"
                    onChange={handleChange}
                    value={formData.cep}
                    disabled={isLoading}
                    required
                />
                <Lable htmlFor="adress">Endereço</Lable>
                <Input
                    type="text"
                    id="adress"
                    onChange={handleChange}
                    value={formData.adress}
                    disabled={isLoading}
                    required
                />
                <Button type="submit" disabled={isLoading} color="#FFBE0B">
                {
                    isLoading
                    ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                    : "Salvar"
                }
                </Button>
            </Form>

        </Container>
    )
}
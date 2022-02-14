import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Container, Form, Input, Button, StyledLink, Title, Lable, RememberMe } from "../../components/FormComponents";
import useApi from "../../hooks/useApi";
import { fireAlert } from "../../utils/alerts";
import { UserContext } from "../../context/user";
import { SessionContext } from "../../context/session";

export default function SignIn() {
  const navigate = useNavigate();
  const api = useApi()
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(UserContext)
  const { setSession } = useContext(SessionContext)
  const [remember, setRemember] = useState(false)

  useEffect(() => {
    if (user) navigate("/")
    //eslint-disable-next-line
  }, [])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await api.user.signIn(formData)
      setIsLoading(false);
      if (remember) setUser({ token: data.token, username: data.username, userId: data.userId })
      else setSession({ token: data.token, username: data.username, userId: data.userId })
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      fireAlert(error.response.data)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Faça login na sua conta</Title>
        <Lable htmlFor="email">E-mail</Lable>
        <Input
          type="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Lable htmlFor="password">Senha</Lable>
        <Input
          type="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />
        <div>
          <RememberMe>
            <input id="RememberMe" type="checkbox" value="Lembre de mim" onChange={e => setRemember(e.target.checked)} />
            <label htmlFor="RememberMe">Lembre de mim</label>
          </RememberMe>
        </div>
        <Button type="submit" disabled={isLoading} color="#FFBE0B">
          {
            isLoading
              ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
              : "Entrar"
          }
        </Button>
        <span>
          Não tem uma conta?
          <StyledLink to="/cadastrar">
            Cadastre-se
          </StyledLink>
        </span>
      </Form>

    </Container>
  );
} 
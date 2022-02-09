import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Container, Form, Input, Button, StyledLink, Title, Lable } from "../../components/FormComponents";
import useApi from "../../hooks/useApi";
import { fireAlert } from "../../utils/alerts";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', passwordConfirm: '' });
  const [isLoading, setIsLoading] = useState(false);

  const api = useApi()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if(formData.password !== formData.passwordConfirm) {
      setIsLoading(false);
      return await fireAlert("As senhas devem ser iguais")
    }

    try {
      const {name, email, password} = formData
      await api.user.signUp({name, email, password})
      setIsLoading(false);
      navigate("/entrar");
    } catch (error) {
      setIsLoading(false);
      fireAlert(error.response.data)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Faça o cadastro</Title>
        <Lable htmlFor="name">Nome</Lable>
        <Input
        type="text"
        id="name"
        onChange={handleChange}
        value={formData.name}
        disabled={isLoading}
        required    
        />
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
        <Lable htmlFor="passwordConfirm">Confirme a senha</Lable>
        <Input
          type="password"
          id="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
          disabled={isLoading}
          required
        />
        <Button type="submit" disabled={isLoading} color="#FFBE0B">
          {
            isLoading
              ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
              : "Cadastrar"
          }
        </Button>
        <span>
          Já tem uma conta? 
          <StyledLink to="/">
            Entre agora!
          </StyledLink>
        </span>
      </Form>

    </Container>
  );
} 
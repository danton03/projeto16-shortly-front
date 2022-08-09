import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import { getApiUrl } from "../../utils/apiUtils";
import { ButtonForm, Form } from "./AuthFormStyles";

export default function SignupForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const API_URL = getApiUrl('signup');
    if(!password.trim() || !confirmPassword.trim() || !name.trim() || !email.trim()){
      toast.error("Preencha todos os campos!");
      return;
    }
    if(password !== confirmPassword){
      toast.error("A senha e a confirmação de senha precisam ser iguais!");
      return;
    }
    if(password.length > 30){
      toast.error("A senha deve ter no máximo 30 caracteres!");
      return;
    }
    if(name.length > 30){
      toast.error("O nome deve ter no máximo 30 caracteres!");
      return;
    }
    const userData = {
      name,
      email,
      password,
      confirmPassword
    }
    const promise = axios.post(API_URL, userData);
    promise.then((res) => {
      const { token } = res.data
      setUser({ token });
      localStorage.setItem("token", token);
      navigate("/login");
    });
    toast.promise(
      promise,
      {
        pending: 'Carregando...',
        success: 'Cadastro realizado com sucesso!',
        error: {
          render({ data }) {
            const code = data.response.status;
            if (code === 409) {
              return 'Usuário já cadastrado';
            }
            if (code === 422) {
              return 'Preencha todos os campos corretamente';
            }
            else {
              return "Ops, tivemos uma falha interna";
            }
          }
        }
      }
    );
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        placeholder='nome (max: 30 caracteres)'
        value={name}
        required
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder='email'
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder='senha (min: 4 e max: 30 caracteres)'
        value={password}
        required
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder='confirme a senha'
        value={confirmPassword}
        required
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <ButtonForm type="submit">Cadastrar</ButtonForm>
    </Form>
  );
}
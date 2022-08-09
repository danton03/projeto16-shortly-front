import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import { getApiUrl } from "../../utils/apiUtils";
import { ButtonForm, Form } from "./AuthFormStyles";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const{ user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(!password.trim() || !email.trim()){
      toast.error("Preencha todos os campos!");
      return;
    }
    const API_URL = getApiUrl("signin");
    const userData = {
      email, 
      password
    }

    const promise = axios.post(API_URL, userData);
    promise.then((res)=>{
      const { token } = res.data
      setUser({...user, token});
      localStorage.setItem("token", token);
      navigate("/home");
    });
    toast.promise(
      promise,
      {
        pending: 'Carregando...',
        error: {
          render({ data }) {
            const code = data.response.status;
            if (code === 401) {
              return 'Usuário/senha inválida';
            }
            if (code === 422) {
              return 'Preencha todos os campos';
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
        type="email" 
        placeholder='email' 
        value={email}
        required 
        onChange={e => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder='senha' 
        value={password}
        required 
        onChange={e => setPassword(e.target.value)}
      />
      <ButtonForm type="submit">Entrar</ButtonForm>
    </Form>
  );
}
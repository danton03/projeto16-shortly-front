import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import { getApiUrl, getConfig } from "../../utils/apiUtils";
import { ButtonForm, Form } from "./ShortenUrlStyles";

export default function ShortenUrl({setUserData}) {
  const [url, setUrl] = useState('');
  const { user } = useContext(UserContext);
  
  function handleSubmit(e) {
    e.preventDefault();
    if(!url.trim()){
      toast.error("Insira o link para encurtar");
      return;
    }
    const API_URL = getApiUrl("urls/shorten");
    const config = getConfig(user.token);

    const promise = axios.post(API_URL, { url }, config);
    promise.then(()=>{
      updateLinks();
    });
    toast.promise(
      promise,
      {
        pending: 'Carregando...',
        success: 'Link encurtado com sucesso!',
        error: "Ops, tivemos uma falha interna. Se persistir, contate o suporte."
      }
    );
  }

  function updateLinks() {
    const API_URL = getApiUrl("users/me");
    const config = getConfig(user.token);
    const promise = axios.get(API_URL, config);
    promise.then((res)=>{
      const responseData = res.data;
      setUserData(responseData);
    });
    promise.catch(() => {
      toast.error("Erro ao tentar atualizar os links.")
    });
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <input 
        type="text" 
        placeholder='Links que cabem no bolso' 
        value={url}
        required 
        onChange={e => setUrl(e.target.value)}
      />
      <ButtonForm type="submit">Encurtar</ButtonForm>
    </Form>
  );
}

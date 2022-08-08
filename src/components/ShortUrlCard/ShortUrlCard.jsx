import { UrlCard } from "./ShortUrlCardStryles";
import TrashImg from "../../assets/images/lixeira.svg";
import { getApiUrl, getConfig } from "../../utils/apiUtils";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function ShortUrlCard({urlData, setUserData}) {
  const { id, shortUrl, url, visitCount } = urlData;
  const { user } = useContext(UserContext);
  
  function handleDelete() {
    const config = getConfig(user.token);
    const API_URL = getApiUrl(`urls/${id}`);
    const promise = axios.delete(API_URL, config);
    promise.then(()=>{
      updateLinks();
    });

    toast.promise(
      promise,
      {
        pending: 'Deletando Link...',
        success: 'Link Deletado!',
        error: "Ops, tivemos uma falha interna."
      }
    );
  }

  function handleVisit() {
    console.log("clicou");
    console.log(shortUrl);
    const API_URL = getApiUrl(`urls/open/${shortUrl}`);
    const promise = axios.get(API_URL);
    promise.then((res) => {
      const urlData = res.data;
      const url = urlData.split('to ')[1]; 
      window.open(url, '_blank');
      updateLinks();
    })
  }

  function updateLinks() {
    const config = getConfig(user.token);
    const API_URL = getApiUrl("users/me");
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
    <UrlCard urlData={urlData} >
      <div onClick={() => handleVisit()} >
        <span className="url" title={url} >{url}</span>
        <span className="shortUrl" title={shortUrl} >{shortUrl}</span>
        <span className="visitCount">{visitCount}</span>
      </div>

      <button type="button" onClick={() => handleDelete()}>
        <img src={TrashImg} alt="Excluir Link" />
      </button>
    </UrlCard>
  );
}
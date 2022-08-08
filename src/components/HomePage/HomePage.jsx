import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import { getApiUrl, getConfig } from "../../utils/apiUtils";
import { Container } from "../ContainerPage/ContainerPage";
import { Header } from "../Header/Header";
import Logo from "../Logo/Logo";
import ShortenUrl from "../ShortenUrl/ShortenUrl";
import ShortUrlCard from "../ShortUrlCard/ShortUrlCard";
import { ShortUrlsPanel } from "./HomePageStyles";

export default function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    const API_URL = getApiUrl("users/me");
    const config = getConfig(user.token);
    const promise = axios.get(API_URL, config);
    promise.then((res)=>{
      const responseData = res.data;
      setUserData(responseData);
      setUser({...user, name: responseData.name});
    });

    toast.promise(
      promise,
      {
        pending: 'Carregando Links...',
        success: 'Links carregados!',
        error: {
          render({ data }) {
            const code = data.response.status;
            if (code === 401) {
              navigate("/");
              return 'Houve um erro na requisição. Contate o suporte do site';
            }
            if (code === 404) {
              navigate("/");
              return 'Usuário não encontrado';
            }
            else {
              return "Ops, tivemos uma falha interna";
            }
          }
        }
      }
    );
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  function renderShortUrls() {
    const { shortenedUrls } = userData;
    return(
      shortenedUrls.map((urlData, index) => {
        return(
          <ShortUrlCard 
            key={index} 
            urlData={urlData} 
            setUserData={setUserData}
          />
        )
      })
    );
  }

  return (
    <Container>
      <Header page="home" />
      <Logo />
      <ShortenUrl setUserData={setUserData} />
      <ShortUrlsPanel>
        {
          userData.shortenedUrls ?
          renderShortUrls() 
          : ''
        }
      </ShortUrlsPanel>
    </Container>
  );
}
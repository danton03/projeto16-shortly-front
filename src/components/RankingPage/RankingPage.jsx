import { Container } from "../ContainerPage/ContainerPage";
import { Header } from "../Header/Header";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Logo from "../Logo/Logo";
import TrofeuImg from "../../assets/images/trofeu.svg";
import { RankingPanel, Title } from "./RankingPageStyles";
import { getApiUrl } from "../../utils/apiUtils";
import { toast } from "react-toastify";
import axios from "axios";

export default function RankingPage() {
  const{ user } = useContext(UserContext);
  const [ranking, setRanking] = useState({});

  useEffect(() => {
      const API_URL = getApiUrl("ranking");
      const promise = axios.get(API_URL);
      promise.then((res)=>{
        const rankingData = res.data
        setRanking(rankingData);
      });
      toast.promise(
        promise,
        {
          pending: 'Carregando...',
          success: 'Bem-vindo ao Ranking!',
          error: 'Erro ao tentar carregar o ranking. Tente novamente'
        }
      );
    },
    []
  );

  function renderRanking() {
    return(
      ranking.map((linkData, index) => {
        const {name, linksCount, visitCount} = linkData;
        return(
          <li key={index}>
            {`${index+1}. ${name} - ${linksCount}  links - ${visitCount} visualizações`}
          </li>
        );
      })
    );
  }

  return (
    <Container>
      <Header page="ranking"/>
      <Logo />
      <Title>
        <img src={TrofeuImg} alt="Imagem de Trofeu"/>
        Ranking
      </Title>
      <RankingPanel>
        {ranking.length ? renderRanking() : ''}
      </RankingPanel>
      {user.length ? 
        ""
        : 
        <Title>
          Crie sua conta para usar nosso serviço!
        </Title>
      }
    </Container>
  );
}


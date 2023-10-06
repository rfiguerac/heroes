
import Container from "@mui/material/Container"
import { useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import HeroCard from "../components/HeroCard";
import { useMemo } from "react";

export const HeroesPage = () => {

    const {id} = useParams();
    const hero = useMemo( () => getHeroById(id), [id]);

  return (
    <>
      <Container maxWidth="xl" className=" animate__animated animate__fadeInRight">
      {
        (hero) 
        ? 
          (<HeroCard key={hero.id}
          id={hero.id} 
          superhero={hero.superhero} 
          publisher={hero.publisher} 
          alter_ego={hero.alter_ego} 
          first_appearance={hero.first_appearance} 
          characters={hero.characters} />)
          : null
      }
      </Container> 
    </>
  )
}

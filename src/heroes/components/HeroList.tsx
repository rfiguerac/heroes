import { Container, Grid } from "@mui/material";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";
import { useMemo } from "react";

interface Props{
    publisher: string
}

export const HeroList = ({publisher}:Props) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]); ;
  return (
    <Container maxWidth="xl" className=" animate__animated animate__fadeIn">
      <Grid container spacing={2} >
       { heroes.map( (hero) => (
            <HeroCard key={hero.id}
                id={hero.id} 
                superhero={hero.superhero} 
                publisher={hero.publisher} 
                alter_ego={hero.alter_ego} 
                first_appearance={hero.first_appearance} 
                characters={hero.characters} />
        ))
        
      }
      </Grid>
      </Container>
       
  )
}

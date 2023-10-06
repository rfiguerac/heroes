import { Link } from "react-router-dom";
import '../css/HeroCard.css'
import { Box, Grid } from "@mui/material";

interface Props {
    id: string,
    superhero: string,
    publisher: string,
    alter_ego: string,
    first_appearance: string,
    characters: string
    xs?:number,
    sm?:number,
    md?:number,
    xl?:number,   
}

const HeroCard = 
    ({ id, 
        superhero, 
        publisher, 
        alter_ego, 
        first_appearance, 
        characters,
        xs = 12,
        sm = 6,
        md = 4,
        xl = 3
    }: Props) => {


    return (
        <Grid item xs={xs} sm={sm} md={md} xl={xl} sx={{mt:2}}>
            
                <Link to={`../heroes/${id}`} className="my-card">
                    <img src={`../assets/heroes/${id}.jpg`} className="img img-responsive" alt={superhero} />
                    <Box className="profile-name">{superhero}</Box>
                    <Box className="profile-position">{alter_ego}</Box>
                    <Box className="profile-overview">
                        <Box className="profile-overview">
                            <Box className="row">
                                <Box className="col-ms-4">
                                    <h3>{publisher}</h3>
                                    <p>Primera aparición: <br />{first_appearance}</p>
                                    {
                                        (alter_ego !== characters)
                                        && <p>{characters}</p>
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>
           
        </Grid>
    );
};

export default HeroCard;
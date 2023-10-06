import { Button, Container, TextField, FormControl, Grid, Typography, Divider, Alert } from "@mui/material";
import queryString from "query-string";

import SearchIcon from '@mui/icons-material/Search';
import { useForm } from "../hook/useForm";
import { getHeroByName } from "../helpers/getHeroByName";
import { useLocation, useNavigate } from "react-router-dom";
import HeroCard from "../components/HeroCard";

interface Props {
    id: string,
    superhero: string,
    publisher: string,
    alter_ego: string,
    first_appearance: string,
    characters: string
}

export const SearchPage = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    //yarn add query-string

    let hero: Props[];
    hero = getHeroByName("" + q)!;

    const { search, onInputChange } = useForm({
        search: q
    });

    const handlerSearch = (event: any) => {
        event.preventDefault();
        navigate(`?q=${search}`);
        console.log(hero);
    }
    return (
        <>
            <Container maxWidth={"xl"}>
                <Grid container spacing={3} mt={2}>
                    <Grid item xl={3} md={4} xs={12} >
                        <Grid >
                            <Typography variant="h4">
                                Search
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <form onSubmit={handlerSearch}>
                            <FormControl fullWidth>
                                    <TextField
                                        id="search"
                                        name='search'
                                        label="Buscar SuperHeroe"
                                        type="search"
                                        value={search}
                                        onChange={onInputChange}
                                        fullWidth
                                    />

                                    <Button
                                        variant="contained"
                                        sx={{ mt: 2 }}
                                        startIcon={<SearchIcon />}
                                        onClick={(event) => handlerSearch(event)}
                                    >
                                        Buscar
                                    </Button>
                                </FormControl>
                            </form>
                        </Grid>

                    </Grid>
                    <Grid item xl={9} xs={12} md={8}>

                        <Grid>

                            <Typography variant="h4">
                                Result
                            </Typography>
                            <Divider sx={{ mb: 2 }} />

                            {
                                (q === '') 
                                ? <Alert severity="info" sx={{ m: 2 }}> Aun no buscas nada</Alert>
                                : (hero.length === 0 ) 
                                &&  <Alert severity="error" sx={{ m: 2 }}>no hay heroes que coincidan con {q}</Alert>
                            }
                           
                            
                        </Grid>


                        <Grid container spacing={2} >
                            {(hero != undefined)
                                ?
                                hero.map(hero => (
                                    <HeroCard
                                        key={hero.id}
                                        {...hero}
                                        xl={4} xs={12} md={6} sm={6}
                                    />
                                ))
                                : null
                            }

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

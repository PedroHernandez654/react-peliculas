import { useEffect, useState } from "react";
import { landingPageDTO, pelicula } from "./Peliculas/Peliculas-Model";
import Button from "./Utils/Button";
import ListadoPeliculas from "./Peliculas/ListadoPeliculas";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1,
                        titulo: 'Spider-Man: Far from Home',
                        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
                    },
                    {
                        id: 2,
                        titulo: 'Moana',
                        poster: 'https://m.media-amazon.com/images/I/91R8UTUu7FL._AC_UF894,1000_QL80_.jpg'
                    },
                    {
                        id: 3,
                        titulo: 'Possesor',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMjBlYTlhMDctNTQ3ZC00MjM4LWIxNjctNDI4NjA3NDc3Yzc5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
                    },
                    {
                        id: 4,
                        titulo: 'Worlds 2023 LOL',
                        poster: 'https://ggscore.com/media/tournament/e7365.png'
                    }
                ],
                proximosEstrenos: [
                    {
                        id: 1,
                        titulo: 'Five Nights at Freddys',
                        poster: 'https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'
                    },
                    {
                        id: 2,
                        titulo: 'Soul',
                        poster: 'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0,0,648,972'
                    },
                    {
                        id: 3,
                        titulo: 'DeadPool',
                        poster: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg'
                    },
                    {
                        id: 4,
                        titulo: 'Scream',
                        poster: 'https://musicart.xboxlive.com/7/03205200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
                    }
                ]
            })
        }, 1000);

        return () => clearTimeout(timerId);
    })

    /*const peliculasEnCartelera: pelicula[] = [
      {
        id:1,
        titulo:'Spider-Man: Far from Home',
        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
      },
      {
        id:2,
        titulo:'Moana',
        poster: 'https://m.media-amazon.com/images/I/91R8UTUu7FL._AC_UF894,1000_QL80_.jpg'
      },
      {
        id:3,
        titulo:'Possesor',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjBlYTlhMDctNTQ3ZC00MjM4LWIxNjctNDI4NjA3NDc3Yzc5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
      },
      {
        id:4,
        titulo:'Worlds 2023 LOL',
        poster: 'https://ggscore.com/media/tournament/e7365.png'
      }
    ]
  
    const peliculasProximosEstrenos: pelicula[] = [
      {
        id:1,
        titulo:'Five Nights at Freddys',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'
      },
      {
        id:2,
        titulo:'Soul',
        poster: 'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0,0,648,972'
      },
      {
        id:3,
        titulo:'DeadPool',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg'
      },
      {
        id:4,
        titulo:'Scream',
        poster: 'https://musicart.xboxlive.com/7/03205200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
      }
    ]*/

    const peliculaPrueba: pelicula = {
        id: 1,
        titulo: 'Spider-Man: Far from Home',
        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
    }

    return (
        <>
            <Button>Mi componente Botón</Button>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera}/>

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
    );
}
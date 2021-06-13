import React from 'react'
import {Container, Content, Wrap} from './MoviesStyle'
import {selectMovies} from '../../../features/Movie/MovieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Movies = () => {

    const movies = useSelector(selectMovies)
    
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                { movies &&
                    movies.map((movie, index)=>(
                        <Wrap key={index}>
                            <Link to={`/detail/${movie.id}`} >
                                <img src={movie.cardImg} alt={movie.title}/>
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Movies
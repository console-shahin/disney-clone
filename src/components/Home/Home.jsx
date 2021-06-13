import React from 'react'
import {Container} from './HomeStyle'
import ImageSlider from './ImageSlider/ImageSlider'
import Viewers from './Viewers/Viewers'
import Movies from './Movies/Movies'
import { useEffect } from 'react'
import db from '../../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../../features/Movie/MovieSlice'


const Home = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            dispatch(
                setMovies(tempMovies)
            );
        })
    }, [])
    
    return (
        <Container>
            <ImageSlider/>
            <Viewers />
            <Movies/>
        </Container>
    )
}

export default Home
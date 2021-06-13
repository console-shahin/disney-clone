import React, {useEffect, useState} from 'react'
import {
    Container,
    Background,
    ImageTitle,
    Controls,
    PlayButton,
    TrailerButton,
    AddButton,
    GroupWatchButton,
    SubTitle,
    Description,
} from './DetailStyle'
import {useParams} from 'react-router-dom'
import db from '../../../firebase'
import {useHistory} from 'react-router-dom'

const Detail = () => {

    const { id } = useParams();
    const history = useHistory();
    const [ movie, setMovie ] = useState();

    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists) {
                setMovie(doc.data());
                console.log(doc.data());
            } else {
                history.push('/')
            }
        })
    }, [id])
        
    return (
        <>
            <Container>
                {
                    movie && (
                        <>
                            <Background>
                                <img src={movie.backgroundImg} alt="" />
                                </Background>
                                <ImageTitle>
                                    <img src={movie.titleImg} alt="" />
                                </ImageTitle>
                                <Controls>
                                    <PlayButton>
                                        <img src="/images/play-icon-black.png" alt="" />
                                        <span>PLAY</span>
                                    </PlayButton>
                                    <TrailerButton>
                                        <img src="/images/play-icon-white.png" alt="" />
                                        <span>Trailer</span>
                                    </TrailerButton>
                                    <AddButton>
                                        <span>+</span>
                                    </AddButton>
                                    <GroupWatchButton>
                                        <img src="/images/group-icon.png" alt="" />
                                    </GroupWatchButton>
                                </Controls>
                                <SubTitle>
                                    { movie.subTitle}
                                </SubTitle>
                                <Description>
                                    { movie.description}
                                </Description>
                        </>
                    )
                }
            </Container>
        </>
    )
}

export default Detail

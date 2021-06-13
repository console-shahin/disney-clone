import React from 'react'
import {Container, Wrap} from './ViewersStyle'
import {
    //image
    viewersDisney,
    viewersPixar,
    viewersMarvel,
    viewersStarwars,
    viewersNational,
    // video
    disney,
    pixar,
    marvel,
    starWars,
    nationalGeographic
} from './utils'

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src={viewersDisney} alt="" />
                <video autoPlay loop muted>
                    <source src={disney} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersPixar} alt="" />
                <video autoPlay loop muted>
                    <source src={pixar} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersMarvel} alt="" />
                <video autoPlay loop muted>
                    <source src={marvel} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersStarwars} alt="" />
                <video autoPlay loop muted>
                    <source src={starWars} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersNational} alt="" />
                <video autoPlay loop muted>
                    <source src={nationalGeographic} type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

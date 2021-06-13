import styled from 'styled-components'

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    padding: 30px 0 26px;
`

const Wrap = styled.div`
    border: 3px solid rgba(259, 259, 259, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background:  #040714;
        border-radius: 7px;
    }
    img:hover{
        background: transparent;
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1000000;
        position: absolute;
        border-radius: 10px;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

export {
    Container,
    Wrap,
}
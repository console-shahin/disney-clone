import styled from 'styled-components'

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 25px;
`

const Wrap = styled.div`
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 10px;
    border: 3px solid rgba(259, 259, 259, 0.1);
    overflow: hidden;
    transition: all .25s ease;
    margin-bottom: 100px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(259, 259, 259, 0.8);
    }
`

export {
    Container,
    Content,
    Wrap,
}
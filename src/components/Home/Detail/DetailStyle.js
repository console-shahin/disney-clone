import styled from 'styled-components'

const Container = styled.div`
    min-height: calc(100vh - 164px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    opacity: .8;
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 270px;
    min-width: 200px;
    margin: 80px 0 30px 0;
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(259, 259, 259);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: all .2s ease;
    &:hover{
        background-color: rgb(189, 189, 198);
    }
`
const TrailerButton = styled( PlayButton )`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(259, 259, 259);
    color: rgb(259, 259, 259);
    text-transform: uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid rgb(259, 259, 259);
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    span{
        font-size: 30px;
        color: #fff;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: #000;
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 900px;
`
export {
    Container,
    Background,
    ImageTitle,
    Controls,
    PlayButton,
    TrailerButton,
    AddButton,
    GroupWatchButton,
    SubTitle,
    Description
}
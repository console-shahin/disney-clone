import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: calc(100vh - 64px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: url('/images/login-background.jpg');
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        opacity: .8;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const CTALogoOne = styled.img``
const SignUp = styled.a`
    width: 100%;
    background-color: #0063ef;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all .1s ease;
    letter-spacing: 1.5px;
    margin: 8px 0 12px;
    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled(CTALogoOne)``

export {
    Container,
    CTA,
    CTALogoOne,
    SignUp,
    Description,
    CTALogoTwo
}
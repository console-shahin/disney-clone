import styled from 'styled-components'

const Nav = styled.nav`
    height: 64px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    h3{
        margin-left: 10px;
    }
`
const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    .Nav{
        text-decoration: none;
        span{
            color: #fff;
        }
    }
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            margin-left: 6px;
            &:after{
                content: '';
                height: 2px;
                background-color: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all .4s ease;
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all .3s ease;
    position: absolute;
    top: 12px;
    right: 30px;
    &:hover{
        background-color: #ddd;
        color: #000;
    }
`

export {
    Nav,
    Logo,
    NavMenu,
    UserImg,
    Login,
}
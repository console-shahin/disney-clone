import React, {useEffect} from 'react'
import { auth, provider } from '../../firebase'
import {useHistory} from 'react-router-dom'
import {
    Nav,
    Logo,
    NavMenu,
    UserImg,
    Login,
} from './HeaderStyle'
import {NavLink} from "react-router-dom";
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut,
} from '../../features/User/UserSlice'
import {useSelector, useDispatch} from 'react-redux'
import {
    logo,
    homeIcon,
    searchIcon,
    watchlist,
    original,
    movieIcon,
    seriesIcon,
} from './utils'


const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector( selectUserPhoto )
    console.log(userName);
    console.log(userPhoto);
    useEffect( () => {
        auth.onAuthStateChanged( async (user) => {
            if ( user ) {
                dispatch( setUserLogin( {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                } ) )
                history.push('/')
            }
        })
    }, [])
    
    const signIn = () => {
        auth.signInWithPopup( provider )
            .then( result => {
                let user = result.user
                dispatch( setUserLogin( {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                } ) )
                history.push( '/' )
            })
    }

    const signOut = () => {
        auth.signOut()
            .then( () => {
                dispatch( setSignOut() )
                history.push('/login')
            })
    }
    
    return (
        <Nav>
            {
                !userName ? (
                    <>
                        <Logo src={logo}/>
                        <Login onClick={signIn}>LOGIN</Login>
                    </>
                )
                :
                (
                    <>
                        <NavLink exact to="/">
                            <Logo src={logo}/>
                        </NavLink>
                        <NavMenu>
                            <NavLink className="Nav" exact to="/">
                                <img src={homeIcon} alt="" />
                                <span>HOME</span>
                            </NavLink>
                            <a>
                                <img src={searchIcon}  alt="" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src={watchlist} alt="" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src={original} alt="" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src={movieIcon} alt="" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src={seriesIcon} alt="" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                            <UserImg onClick={ signOut } src={ userPhoto }/>
                            <h3>{ userName.split(' ')[0] }</h3>
                    </>
                )
            }
        </Nav>
    )
}

export default Header

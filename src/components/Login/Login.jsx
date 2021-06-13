import React from 'react'
import {Container, CTA, CTALogoOne, SignUp, Description, CTALogoTwo} from './LoginStyle'
import logInImgOne from '../../images/cta-logo-one.svg'
import logInImgTwo from '../../images/cta-logo-two.png'

const Login = () => {
    return (
        <>
            <Container>
                <CTA>
                    <CTALogoOne src={ logInImgOne }/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src={logInImgTwo}/>
                </CTA>
            </Container>
        </>
    )
}
export default Login

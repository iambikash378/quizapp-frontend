import styled from "styled-components";
import NavBar from "../landingPage/components/navbar";
import { FaApple, FaFacebook, FaGoogle, MdEmail } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";



const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: rgb(245 245 245);
    height: 100vh;
    width: 100vw;
`
const LoginBoxContainer = styled.div`
    height: 70%;
    width: 25%;
    min-width: 300px;
    min-height: 400px;
    height:500px;
    box-shadow: 10px 10px 7px gray;
    border-radius: 20px;
    border: 2px solid gray;
    margin: auto auto auto auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`;

const ILearnLogo = styled.h1`
    cursor: pointer;
`;

const SignIn = styled.h2`

`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
`;

const EmailInput = styled.input`
    border-radius:10px;
    height: 30px;
    min-width: 100px;
    margin-bottom: 10px;
    padding-left: 30px;
`;

const PasswordInput = styled.input`
    border-radius:10px;
    height: 30px;
    min-width: 100px;
    padding-left: 30px;

`;

const SignInButton = styled.button`
    background-color:#0056d2;
    color:#ffffff;
    border-radius: 10px;
    height: 30px;
    margin-top: 50px;
    cursor:pointer;
    font-weight: bold;
`;

const ForgotPassword = styled.div`
    color:gray;
    font-size: 0.8em;
    text-align: right;
    margin-top:2px;
    cursor: pointer;
`;

const SignInWithOthers = styled.div `
    margin-top: 15px;
`

const SignInWithOthersText = styled.span`
    display:inline-block;
    font-size: 0.8em;
`;

const Dots = styled.span`
    color:gray;
`;

const GoogleFacebookApple = styled.div`
    display:flex;
    justify-content: space-around;
    margin-top: 10px;
    width:200px;
`;

const GoogleBox = styled.div`
    border: 1px solid #0056d2;
    box-shadow: 2px 2px 0 #0056d2;
    width: 50px;
    height: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    background-color:;

`;

const FacebookBox = styled.div`
    border: 1px solid #0056d2;
    box-shadow: 2px 2px 0 #0056d2;
    width: 50px;
    height: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
`;

const AppleBox = styled.div`
    border: 1px solid #0056d2;
    box-shadow: 2px 2px 0 #0056d2;
    width: 50px;
    height: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
`;


const Image = styled.img`

`;

const InputContainer = styled.div`
    display:flex;
    align-items:center;
    position:relative;
`;

const NewToiLearn = styled.div`
    margin-top: 50px;
    font-size: 0.9em;
`

export default function LoginPageNew(){

    const Navigate = useNavigate();
    
    return(
        <LoginPageContainer>
            <LoginBoxContainer>
                    {/* <ILearnLogo src="/ilearn_logo.png" alt="logo"/>  */}
                    <ILearnLogo onClick={()=> Navigate('/')}>i<span style={{color:'#0056d2'}}>Learn</span></ILearnLogo>
                    <SignIn> <span style={{color:'#0056d2'}}>  Sign</span>In</SignIn>
                    <Form>
                        <InputContainer>
                            <IoMail style={{position:'absolute', left: '5px', top:'10px'}} />
                            <EmailInput type="text" for="email" name="email" placeholder='Email'/>
                        </InputContainer>

                        <InputContainer>
                            <RiLockPasswordFill style={{position:'absolute', left: '5px', top:'10px'}} />
                            <PasswordInput type="password" for="password" name="password" placeholder='Password'/>
                        </InputContainer>

                        <ForgotPassword> Forgot password ?</ForgotPassword>
                        <SignInButton> Sign In</SignInButton>
                    </Form>

                    <SignInWithOthers>
                       {/* <Dots>...........</Dots> */}  <SignInWithOthersText> Or sign in with </SignInWithOthersText> {/*<Dots>...........</Dots> */}
                    </SignInWithOthers>

                    <GoogleFacebookApple>
                        <GoogleBox>
                            <FaGoogle />
                        </GoogleBox>
                        <FacebookBox>
                            <FaFacebook />
                        </FacebookBox>

                        <AppleBox>
                            <FaApple />
                        </AppleBox>

                    </GoogleFacebookApple>

                    <NewToiLearn>
                        New to iLearn? <span style={{color:'#0056d2', cursor:'pointer'}} onClick={()=>Navigate('/signuppagenew')} > Sign Up</span>
                    </NewToiLearn>

            </LoginBoxContainer>
        </LoginPageContainer>
    )
}
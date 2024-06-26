// Style your elements here
import styled from 'styled-components'

export const PasswordValidatorMainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
background-color:#24263c;
`
export const PasswordValidatorContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
background-color:#383a4e;
padding:20px;
box-shadow:0px 4px 16px 0px #434451;
border-radius:10px;
`

export const PasswordValidatorHeading = styled.h1`
padding-bottom:0px;
margin-bottom:0px;
color:#ffffff;
font-family:Roboto;
`

export const PasswordValidatorPara = styled.p`
color:#f8fafc;
font-family:Roboto;
`

export const PasswordInput = styled.input`
width:100%;
background-color: #edeeff;
padding:10px 10px 10px 10px;
border-width:0px;
border-radius:5px;
outline:none;
margin-top:40px;
`

export const PasswordError = styled.p`
color:#ef4444;
font-size:14px;
font-family:Roboto;
`

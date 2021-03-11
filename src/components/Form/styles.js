import styled from "styled-components";

export const Wrapper = styled.View`
	width: 90%;
	height: 100%;

	align-items: center;
	align-self: center;
`;

export const Header = styled.Text`
	margin-top: 20px;
	font: italic normal bold 35px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
`;

export const Card = styled.View`
	height: auto;
	margin-top: 20px;
	background: #ffffff 0% 0% no-repeat padding-box;
	width: 100%;
	box-shadow: 0px 3px 25px #00000014;
	border: 1px solid #dddddd;
	border-radius: 14px;
	min-height: 100px;
`;

export const SignUp = styled.TouchableOpacity`
	margin-top: 45px;
`;

export const SignUpText = styled.Text`
	font: italic normal bold 35px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
`;

export const BackButton = styled.TouchableOpacity`
	margin-top: 45px;
`;

export const BackText = styled.Text`
	font: italic normal bold 35px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
`;

export const LoginButton = styled.TouchableOpacity`
	padding-left: 96px;
	margin-bottom: 43px;
	margin-top: 45px;
`;

export const LoginText = styled.Text`
	font: italic normal bold 35px "sans-serif";
	letter-spacing: 0px;
	color: #b5c401;
`;

export const SendLinkButton = styled.TouchableOpacity`
	padding-left: 76px;
	margin-bottom: 43px;
	margin-top: 45px;
`;

export const SendLinkText = styled.Text`
	font: italic normal bold 35px "sans-serif";
	letter-spacing: 0px;
	color: #b5c401;
`;

export const RegisterButton = styled.TouchableOpacity`
	padding-left: 76px;
	margin-bottom: 43px;
	margin-top: 45px;
`;

export const RegisterButtonText = styled.Text`
	font: italic normal bold 35px "sans-serif";
	letter-spacing: 0px;
	color: #b5c401;
`;

export const ForgotButton = styled.TouchableOpacity`
	margin-left: 126px;
	margin-top: 16px;
`;

export const ForgotText = styled.Text`
	font: italic normal normal 17px "sans-serif";
	letter-spacing: 0px;
	color: #c1c1c1;
`;

export const ShowPasswordButton = styled.TouchableOpacity`
	margin-left: 250px;
	margin-top: -40px;
`;

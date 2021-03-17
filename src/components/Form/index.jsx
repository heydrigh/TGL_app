import React, { useState, useCallback, useEffect } from "react";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { authRequest } from "../../store/actions/auth/actions";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as S from "./styles";

const Form = () => {
	const [currentMethod, setcurrentMethod] = useState("signIn");
	const [hidePassword, setHidePassword] = useState(true);
	const { register, handleSubmit, setValue } = useForm();
	const dispatch = useDispatch();

	useEffect(() => {
		register("username");
		register("email");
		register("password");
	}, [register]);

	const handleMethodChanger = useCallback((method) => {
		setcurrentMethod(method);
	}, []);

	const handleShowPassword = () => {
		setHidePassword(!hidePassword);
	};

	const handleLogin = (data) => {
		dispatch(authRequest(data.email, data.password));
	};

	const handleSignUp = async (data) => {
		const submitedData = {
			...data,
			password_confirmation: data.password,
		};
		try {
			const response = await api.post("/users", submitedData);
			setcurrentMethod("signIn");
			alert("Sua conta foi criado com sucesso! Faça login e comece a jogar");
			return response;
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<S.Wrapper>
			{currentMethod === "signIn" ? (
				<>
					<S.Header>Authentication</S.Header>
					<S.Card>
						<Input
							name="email"
							label={"Email"}
							onChangeText={(text) => {
								setValue("email", text);
							}}
						/>
						<Input
							secureTextEntry={hidePassword}
							name="password"
							label={"Password"}
							onChangeText={(text) => {
								setValue("password", text);
							}}
						/>
						<S.ShowPasswordButton onPress={handleShowPassword}>
							{hidePassword ? (
								<Feather name="eye" size={24} color="#c1c1c1" />
							) : (
								<Feather name="eye-off" size={24} color="#c1c1c1" />
							)}
						</S.ShowPasswordButton>
						<S.ForgotButton onPress={() => handleMethodChanger("forgot")}>
							<S.ForgotText>I Forgot my password</S.ForgotText>
						</S.ForgotButton>
						<S.LoginButton onPress={handleSubmit(handleLogin)}>
							<S.LoginText>
								Log In
								<AntDesign name="arrowright" size={28} color="#b5c401" />
							</S.LoginText>
						</S.LoginButton>
					</S.Card>
					<S.SignUp onPress={() => handleMethodChanger("signUp")}>
						<S.SignUpText>
							Sign Up <AntDesign name="arrowright" size={28} color="#707070" />
						</S.SignUpText>
					</S.SignUp>
				</>
			) : currentMethod === "signUp" ? (
				<>
					<S.Header>Register</S.Header>
					<S.Card>
						<Input
							name="username"
							label={"Name"}
							onChangeText={(text) => {
								setValue("username", text);
							}}
						/>
						<Input
							name="email"
							label={"Email"}
							onChangeText={(text) => {
								setValue("email", text);
							}}
						/>
						<Input
							name="password"
							secureTextEntry={hidePassword}
							label={"Password"}
							onChangeText={(text) => {
								setValue("password", text);
							}}
						/>
						<S.ShowPasswordButton onPress={handleShowPassword}>
							{hidePassword ? (
								<Feather name="eye" size={24} color="#c1c1c1" />
							) : (
								<Feather name="eye-off" size={24} color="#c1c1c1" />
							)}
						</S.ShowPasswordButton>
						<S.RegisterButton onPress={handleSubmit(handleSignUp)}>
							<S.RegisterButtonText>
								Register
								<AntDesign name="arrowright" size={28} color="#b5c401" />
							</S.RegisterButtonText>
						</S.RegisterButton>
					</S.Card>
					<S.BackButton onPress={() => handleMethodChanger("signIn")}>
						<S.BackText>
							<AntDesign name="arrowleft" size={28} color="#707070" /> Back
						</S.BackText>
					</S.BackButton>
				</>
			) : (
				<>
					<S.Header>Reset Password</S.Header>
					<S.Card>
						<Input
							name="email"
							label={"Email"}
							onChangeText={(text) => {
								setValue("email", text);
							}}
						/>

						<S.SendLinkButton>
							<S.SendLinkText>
								Send link
								<AntDesign name="arrowright" size={28} color="#b5c401" />
							</S.SendLinkText>
						</S.SendLinkButton>
					</S.Card>

					<S.BackButton onPress={() => handleMethodChanger("signIn")}>
						<S.BackText>
							<AntDesign name="arrowleft" size={28} color="#707070" /> Back
						</S.BackText>
					</S.BackButton>

					<S.SignUp onPress={() => handleMethodChanger("signUp")}>
						<S.SignUpText>
							Sign Up <AntDesign name="arrowright" size={28} color="#707070" />
						</S.SignUpText>
					</S.SignUp>
				</>
			)}
		</S.Wrapper>
	);
};

export default Form;

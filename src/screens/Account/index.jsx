import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import * as S from "./styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useForm } from "react-hook-form";

const Account = () => {
	const [hidePassword, setHidePassword] = useState(true);
	const { register, handleSubmit, setValue } = useForm();

	useEffect(() => {
		register("username");
		register("email");
		register("password");
	}, [register]);

	const handleShowPassword = () => {
		setHidePassword(!hidePassword);
	};

	const handleLogin = (data) => {
		console.log(data);
	};

	return (
		<S.Wrapper>
			<S.Header>Account</S.Header>
			<S.Card>
				<Input
					name="username"
					label={"Username"}
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
				<Input
					secureTextEntry={hidePassword}
					name="password_confirmation"
					label={"Password Confirmation"}
					onChangeText={(text) => {
						setValue("password_confirmation", text);
					}}
				/>
				<S.ShowPasswordButton onPress={handleShowPassword}>
					{hidePassword ? (
						<Feather name="eye" size={24} color="#c1c1c1" />
					) : (
						<Feather name="eye-off" size={24} color="#c1c1c1" />
					)}
				</S.ShowPasswordButton>

				<S.SaveChangesButton onPress={handleSubmit(handleLogin)}>
					<S.SaveText>
						Save
						<AntDesign name="arrowright" size={28} color="#b5c401" />
					</S.SaveText>
				</S.SaveChangesButton>
			</S.Card>
		</S.Wrapper>
	);
};

export default Account;

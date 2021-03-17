import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useForm } from "react-hook-form";

const Account = () => {
	const auth = useSelector((state) => {
		return {
			user: state.auth.user,
		};
	});
	const [hidePassword, setHidePassword] = useState(true);
	const { register, handleSubmit, setValue } = useForm();

	useEffect(() => {
		register("username");

		register("password");
		register("password_confirmation");
	}, [register]);

	const handleShowPassword = () => {
		setHidePassword(!hidePassword);
	};

	const handleAccount = (data) => {
		console.log(data);
		console.log(auth.user);
	};

	return (
		<S.Wrapper>
			<S.Header>Account</S.Header>
			<S.Card>
				<Input
					placeholder={auth.user.username}
					name="username"
					label={"Username"}
					onChangeText={(text) => {
						setValue("username", text);
					}}
				/>
				<Input
					disabled
					placeholder={auth.user.email}
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

				<S.SaveChangesButton onPress={handleSubmit(handleAccount)}>
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

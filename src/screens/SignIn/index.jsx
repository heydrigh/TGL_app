import React from "react";
import { ScrollView } from "react-native";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import * as S from "./styles";

const SignIn = () => {
	return (
		<S.Wrapper>
			<ScrollView>
				<Logo />
				<Form />
			</ScrollView>
		</S.Wrapper>
	);
};

export default SignIn;

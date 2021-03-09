import React from "react";
import Input from "../../components/Input";

import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";

const Form = () => {
	return (
		<S.Wrapper>
			<S.Header>Authentication</S.Header>
			<S.Card>
				<Input name="Email" label={"Email"} />
				<Input name="Password" label={"Password"} />
			</S.Card>
			<S.SignUp>
				Sign Up <AntDesign name="arrowright" size={28} color="#707070" />
			</S.SignUp>
		</S.Wrapper>
	);
};

export default Form;

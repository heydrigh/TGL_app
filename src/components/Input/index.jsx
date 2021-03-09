import React from "react";

import * as S from "./styles";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Input = ({ name, ...rest }) => {
	return (
		<S.Input
			name={name}
			{...rest}
			borderHeight={2}
			inputStyle={{
				paddingTop: 20,
				paddingLeft: 26,
				fontSize: 17,
				color: "#9D9D9D",
			}}
			labelStyle={{
				marginBottom: 16,
				paddingLeft: 26,
				color: "#9D9D9D",
				fontSize: 18,
			}}
			labelHeight={5}
			iconClass={FontAwesomeIcon}
			iconName={""}
			iconColor={"#9D9D9D"}
			autoCapitalize={"none"}
		/>
	);
};

export default Input;

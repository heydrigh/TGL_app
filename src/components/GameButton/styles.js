import styled, { css } from "styled-components";
import { shade } from "polished";

export const Wrapper = styled.TouchableOpacity`
	width: 101px;
	height: 34px;
	background: #ffffff 0% 0% no-repeat padding-box;
	margin-top: 12px;
	margin-right: 12px;
	border-radius: 100px;

	justify-content: center;
	align-items: center;
	${(props) =>
		props.color &&
		css`
			border: 2px solid ${props.color};
		`}

	${(props) =>
		props.active &&
		css`
			background: ${shade(0.1, `${props.color}`)};
			color: #ffffff;
		`}
`;

export const ButtonText = styled.Text`
	font: italic normal bold 14px "sans-serif";
	letter-spacing: 0px;

	${(props) =>
		props.color &&
		css`
			color: ${props.color};
		`}

	${(props) =>
		props.active &&
		css`
			color: #ffffff;
		`}
`;

export const XIcon = styled.Text`
	position: absolute;
	right: 12px;
	top: 0px;
	font-size: 12px;
	color: #ffffff;
`;

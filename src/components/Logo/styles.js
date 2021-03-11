import styled, { css } from "styled-components";

export const Wrapper = styled.View`
	align-items: center;
`;

export const BottonLine = styled.View`
	border: 4px solid #b5c401;
	border-radius: 10px;
	width: 116px;
	${(props) =>
		props.size === "small" &&
		css`
			width: 82px;
		`};
`;

export const Header = styled.Text`
	font: italic normal bold 60px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
	${(props) =>
		props.size === "small" &&
		css`
			font: italic normal bold 36px "sans-serif";
		`};
`;

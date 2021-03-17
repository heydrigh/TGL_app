import styled from "styled-components";

export const Wrapper = styled.View`
	padding-left: 20px;
	padding-right: 20px;
	flex: 1;
`;

export const Header = styled.Text`
	font: italic normal bold 24px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
	text-transform: uppercase;

	margin-top: 28px;
`;

export const Filters = styled.Text`
	font: italic normal normal 17px "sans-serif";
	letter-spacing: 0px;
	color: #868686;
	margin-top: 20px;
`;

export const ButtonsContainer = styled.View`
	flex-direction: row;
`;

export const GamesContainer = styled.View`
	margin-top: 40px;
	padding-right: 4px;
	margin-left: -10px;
	flex: 1;
`;

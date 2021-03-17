import styled from "styled-components";

export const Wrapper = styled.View`
	padding-left: 8px;
	padding-right: 20px;
	flex: 1;
`;

export const Header = styled.View`
	flex-direction: row;
`;

export const CartText = styled.Text`
	font: italic normal bold 24px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
	text-transform: uppercase;
	margin-top: 70px;
	margin-left: 5px;
`;

export const CloseButton = styled.TouchableOpacity`
	margin-top: 50px;
	left: 90px;
`;

export const CloseText = styled.Text``;

export const BetsContainer = styled.View`
	padding-top: 10px;
	margin-top: 20px;
	margin-bottom: 20px;

	height: 340px;
`;

export const TotalWrapper = styled.View`
	position: absolute;
	top: 470px;
	flex-direction: row;
	padding-left: 22px;
`;

export const Cart = styled.Text`
	font: italic normal bold 24px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
	margin-right: 6px;
`;

export const Total = styled.Text`
	font: normal normal 300 24px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
	margin-right: 40px;
`;

export const Price = styled.Text`
	font: normal normal 300 24px "sans-serif";
	letter-spacing: 0px;
	color: #707070;
`;

export const SaveButton = styled.TouchableOpacity`
	position: absolute;
	height: 120px;
	width: 120%;
	background: #ebebeb;
	align-items: center;
	justify-content: center;
	top: 520px;
`;

export const SaveText = styled.Text`
	font: italic normal bold 35px "sans-serif";
	letter-spacing: 0px;
	color: #b5c401;
`;

import styled from "styled-components";

export const Wrapper = styled.View`
	height: 80px;
	justify-content: flex-start;
	padding-left: 15px;
	margin-bottom: 8px;
	border-radius: 10px;
	flex-direction: row;
`;

export const Sidebar = styled.View`
	width: 6px;
	height: 80px;
	background-color: ${(props) => props.color};
	border-radius: 10px;
`;

export const GameDetails = styled.View`
	justify-content: center;
	margin-left: 8px;
`;

export const Numbers = styled.Text`
	margin-bottom: 6px;
	font: normal normal bold 16px "sans-serif";
	letter-spacing: 0px;
	color: #868686;
`;
export const DateAndCost = styled.Text`
	margin-bottom: 3px;
	font: normal normal normal 14px "sans-serif";
	letter-spacing: 0px;
	color: #868686;
`;
export const GameName = styled.Text`
	font: italic normal bold 20px "sans-serif";
	letter-spacing: 0px;
	color: ${(props) => props.color};
`;

export const NameAndDelete = styled.View`
	flex-direction: row;
`;

export const DeleteButton = styled.TouchableOpacity`
	margin-left: 20px;
`;

export const DeleteIcon = styled.Text``;

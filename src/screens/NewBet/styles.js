import styled, { css } from "styled-components";

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
	margin-top: 26px;
`;

export const ChooseText = styled.Text`
	font: italic normal normal 17px "sans-serif";
	letter-spacing: 0px;
	color: #868686;
	margin-top: 16px;
`;

export const ButtonsContainer = styled.View`
	flex-direction: row;
`;

export const FillBets = styled.Text`
	font: italic normal bold 17px "sans-serif";
	letter-spacing: 0px;
	color: #868686;
	margin-top: 10px;
`;

export const Instructions = styled.Text`
	font: italic normal normal 17px "sans-serif";
	letter-spacing: 0px;
	color: #868686;
`;

export const NumbersWrapper = styled.View`
	margin-top: 8px;
	height: auto;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const Numbers = styled.TouchableOpacity`
	max-width: 60px;
	max-height: 60px;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: #adc0c4;
	border-radius: 50px;
	margin-right: 10px;
`;

export const NumberText = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #ffffff;
`;

export const Ball = styled.TouchableOpacity`
	height: 60px;
	width: 60px;
	border-radius: 30px;
	align-items: center;
	justify-content: center;
	margin-right: 3px;
	background-color: #adc0c4;
	${(props) =>
		props.isActive &&
		css`
			background-color: ${props.color};
		`}
`;

export const BallText = styled.Text`
	font: normal normal bold 20px "sans-serif";
	letter-spacing: 0px;
	color: #ffffff;
`;

export const Controllers = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 6px;
`;

export const CompleteGame = styled.TouchableOpacity`
	width: 100px;
	height: 32px;
	border: 2px solid #b5c401;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
`;

export const CompleteText = styled.Text`
	font: normal normal normal 12px "sans-serif";
	letter-spacing: 0px;
	color: #b5c401;
`;

export const ClearGame = styled.TouchableOpacity`
	width: 100px;
	height: 32px;
	border: 2px solid #b5c401;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
`;

export const ClearText = styled.Text`
	font: normal normal normal 12px "sans-serif";
	letter-spacing: 0px;
	color: #b5c401;
`;

export const AddToCart = styled.TouchableOpacity`
	width: 100px;
	height: 32px;
	border: 2px solid #b5c401;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	background: #b5c401;
`;

export const AddText = styled.Text`
	font: normal normal normal 12px "sans-serif";
	letter-spacing: 0px;
	color: #fff;
`;

export const Separator = styled.View`
	margin-top: 6px;
	width: 36px;
	height: 6px;
	border: 1px solid #c1c1c1;
	border-width: 4px;
	border-radius: 6px;

	margin-left: 40%;
`;

export const SelectedNumbersWrapper = styled.View`
	flex-direction: row;
	margin-top: 10px;
	margin-bottom: 8px;
	flex-wrap: wrap;
`;

export const SelectedBall = styled.TouchableOpacity`
	height: 40px;
	width: 40px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	margin-right: 3px;
	background-color: #adc0c4;
	${(props) =>
		props.color &&
		css`
			background-color: ${props.color};
		`}
`;

export const SelectedBallText = styled.Text`
	font: normal normal normal 14px "sans-serif";
	letter-spacing: 0px;
	color: #ffffff;
`;

export const Xmark = styled.Text`
	position: absolute;
	color: #ffffff;
	top: 0;
	right: 6px;
`;

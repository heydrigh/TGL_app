import React from "react";
import * as S from "./styles";

const GameButton = ({ pressed, color, lotteryName, active, ...rest }) => {
	return (
		<S.Wrapper {...rest} color={color} value={lotteryName} active={active}>
			<S.ButtonText color={color} active={active}>
				{lotteryName}
			</S.ButtonText>
			{active && <S.XIcon>x</S.XIcon>}
		</S.Wrapper>
	);
};

export default GameButton;

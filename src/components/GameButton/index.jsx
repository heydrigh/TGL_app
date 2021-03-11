import React from "react";
import * as S from "./styles";

const GameButton = ({ clicked, color, lotteryName, active }) => {
	return (
		<S.Wrapper
			onClick={clicked}
			color={color}
			value={lotteryName}
			active={active}
		>
			<S.ButtonText color={color} active={active}>
				{lotteryName}
			</S.ButtonText>
			{active && <S.XIcon>x</S.XIcon>}
		</S.Wrapper>
	);
};

export default GameButton;

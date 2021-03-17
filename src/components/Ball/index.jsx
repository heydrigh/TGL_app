import React from "react";
import * as S from "./styles";

const Ball = ({ size, number, clicked, isActive, color, ...rest }) => {
	return (
		<S.Wrapper isActive={isActive} {...rest}>
			<S.Number>{number}</S.Number>
		</S.Wrapper>
	);
};

export default Ball;

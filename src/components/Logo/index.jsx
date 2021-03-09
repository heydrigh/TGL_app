import React from "react";
import * as S from "./styles";

const Logo = ({ size }) => {
	// size = "small";
	return (
		<S.Wrapper>
			<S.Header size={size}>TGL</S.Header>
			<S.BottonLine size={size} />
		</S.Wrapper>
	);
};

export default Logo;

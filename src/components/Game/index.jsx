import React from "react";
import { EvilIcons } from "@expo/vector-icons";

import * as S from "./styles";

const Game = ({ numbers, date, cost, gameName, color, trashcan, onRemove }) => {
	return (
		<S.Wrapper>
			<S.Sidebar color={color} />
			<S.GameDetails>
				<S.Numbers>{numbers}</S.Numbers>
				<S.DateAndCost>
					{date} - R$ {cost}
				</S.DateAndCost>
				<S.NameAndDelete>
					<S.GameName color={color}>{gameName}</S.GameName>
					{trashcan && (
						<S.DeleteButton onPress={onRemove}>
							<S.DeleteIcon>
								<EvilIcons name="trash" size={24} color="#707070" />
							</S.DeleteIcon>
						</S.DeleteButton>
					)}
				</S.NameAndDelete>
			</S.GameDetails>
		</S.Wrapper>
	);
};

export default Game;

import React, { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import * as S from "./styles";
import GameButton from "../../components/GameButton";
import Menu from "../../components/Menu";
import api from "../../services/api";

const Home = () => {
	const [buttonTypes, setButtonTypes] = useState([]);
	const [games, setGames] = useState([]);
	const [loadingGames, setLoadingGames] = useState(false);

	const loadButtons = async () => {
		try {
			const response = await api.get("/types");
			setButtonTypes(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const loadGames = async () => {
		try {
			const response = await api.get("/games");
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		loadButtons();
	}, []);

	return (
		<>
			<Menu />
			<S.Wrapper>
				<S.Header>Recent Games</S.Header>
				<S.Filters>Filters</S.Filters>
				<S.ButtonsContainer>
					{buttonTypes.length > 0 ? (
						buttonTypes.map((button) => (
							<GameButton
								// clicked={() => handleFilter(button.type)}
								key={button.type}
								lotteryName={button.type}
								color={button.color}
								active={false}
							/>
						))
					) : (
						<Text>Erro ao carregar</Text>
					)}
					<S.GamesContainer></S.GamesContainer>
				</S.ButtonsContainer>
			</S.Wrapper>
		</>
	);
};

export default Home;

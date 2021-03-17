import React, { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";
import GameButton from "../../components/GameButton";
import Menu from "../../components/Menu";
import Game from "../../components/Game";
import api from "../../services/api";

const Home = ({ navigation }) => {
	const [buttonTypes, setButtonTypes] = useState([]);
	const [games, setGames] = useState([]);
	const [activeButton, setActiveButton] = useState([]);
	const [displayedGames, setDisplayedGames] = useState([]);
	const [loadingGames, setLoadingGames] = useState(false);

	useEffect(() => {
		loadButtons();
		loadGames();
	}, []);

	const loadButtons = async () => {
		setLoadingGames(true);
		try {
			const response = await api.get("/types");
			setButtonTypes(response.data);
			setLoadingGames(false);
		} catch (error) {
			console.log(error.message);
			setLoadingGames(false);
		}
	};

	const loadGames = async () => {
		setLoadingGames(true);
		try {
			const response = await api.get("/games");
			setGames(response.data);
			setLoadingGames(false);
		} catch (error) {
			console.log(error.message);
			setLoadingGames(false);
		}
	};

	const handleFilter = (gameType) => {
		let activeGames = [...activeButton];

		if (activeGames.some((game) => game === gameType)) {
			activeGames = activeGames.filter((e) => e !== gameType);
			setActiveButton(activeGames);
		} else {
			setActiveButton([...activeButton, gameType]);
		}

		if (activeButton.length > 0) {
			setDisplayedGames(games.filter((game) => game.name === gameType));
		} else {
			setDisplayedGames(games);
		}
	};

	useEffect(() => {
		let filteredGame = [];

		filteredGame = games.filter((item) => activeButton.includes(item.name));

		setDisplayedGames(filteredGame);
	}, [activeButton]);

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
								onPress={() => handleFilter(button.type)}
								key={button.type}
								lotteryName={button.type}
								color={button.color}
								active={activeButton.find((name) => name === button.type)}
							/>
						))
					) : (
						<Text>Erro ao carregar</Text>
					)}
				</S.ButtonsContainer>

				<S.GamesContainer>
					<ScrollView>
						{loadingGames ? (
							<Text>Carregando jogos...</Text>
						) : games.length > 0 && displayedGames.length < 1 ? (
							games.map((game, index) => (
								<Game
									key={index}
									color={game.color}
									gameName={game.name}
									numbers={game.numbers}
									date={game.created_at}
									cost={game.price.toFixed(2)}
								/>
							))
						) : displayedGames.length > 0 ? (
							displayedGames.map((game, index) => (
								<Game
									key={index}
									color={game.color}
									gameName={game.name}
									numbers={game.numbers}
									date={game.created_at}
									cost={game.price.toFixed(2)}
								/>
							))
						) : (
							<S.EmptyGame>
								Você ainda não possui jogos. Aperte no{" "}
								<MaterialIcons
									name="monetization-on"
									size={60}
									color="#B5C401"
								/>{" "}
								para começar a jogar.
							</S.EmptyGame>
						)}
					</ScrollView>
				</S.GamesContainer>
			</S.Wrapper>
		</>
	);
};

export default Home;

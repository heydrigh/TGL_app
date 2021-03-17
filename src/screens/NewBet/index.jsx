import React, { useState, useEffect, useCallback } from "react";
import { Text } from "react-native";
import * as S from "./styles";
import Menu from "../../components/Menu";
import api from "../../services/api";
import GameButton from "../../components/GameButton";
import uuid from "react-uuid";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { addToCart } from "../../store/actions/cart";
import { useDispatch } from "react-redux";

const NewBet = ({ navigation }) => {
	const [selectableNumbers, setSelectableNumbers] = useState([]);
	const [isActive, setIsActive] = useState([]);
	const [selectedNumbers, setSelectedNumbers] = useState([]);
	const [buttonTypes, setButtonTypes] = useState([]);
	const [defaultColor, setDefaultColor] = useState("#ADC0C4");

	const [loadingGames, setLoadingGames] = useState(false);
	const [chosenGame, setChosenGame] = useState("");
	const [instruction, setInstruction] = useState(
		"Escolha um jogo para começar!"
	);
	const [rules, setRules] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		loadButtons();
	}, []);

	const loadButtons = async () => {
		setLoadingGames(true);
		try {
			const response = await api.get("/types");
			setButtonTypes(response.data);
			setRules(buttonTypes[0]);
			setLoadingGames(false);
		} catch (error) {
			console.log(error.message);
			setLoadingGames(false);
		}
	};

	const handleSelectedGame = useCallback(
		(gameRange, gameInstruction, gameName) => {
			let numbers = [];

			for (let i = 1; i <= gameRange; i++) {
				numbers.push(i);
			}
			setSelectableNumbers(numbers);
			handleInstructions(gameInstruction);

			setChosenGame(gameName);

			let filteredGame = buttonTypes.filter((game) => {
				return game.type === gameName;
			});

			if (!loadingGames) {
				setRules(filteredGame[0]);
			}

			if (filteredGame[0] && !loadingGames) {
				setDefaultColor(filteredGame[0].color);
			}

			console.log(buttonTypes[0]);
			clearGameHandler();
		},
		[rules, chosenGame, selectableNumbers]
	);

	const handleInstructions = (gameInstructions) => {
		setInstruction(gameInstructions);
	};

	const handleSelectedNumber = (number) => {
		// if (selectedNumbers.length === rules.max_number) {
		// 	alert("O numero maximo de jogos foi escolhido");
		// 	return;
		// }
		const numbers = [...selectedNumbers];
		const actives = isActive;
		numbers.push(number);
		setSelectedNumbers(numbers);
		actives[number - 1] = !actives[number - 1];
		setIsActive(actives);
	};

	const clearGameHandler = () => {
		const numbers = [];
		setSelectedNumbers([]);
		for (let i = 0; i < 80; i++) {
			numbers.push(false);
		}
		setIsActive(numbers);
	};

	const handleRemoveNumber = (number) => {
		const actives = isActive;
		setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
		actives[number - 1] = !actives[number - 1];
		setIsActive(actives);
	};

	const completeGameHandler = () => {
		let numbers = [];
		let selected = selectedNumbers;

		const actives = isActive;
		for (let i = 1; i <= rules.range; i++) {
			numbers.push(i);
		}

		if (!chosenGame) {
			alert("Escolha um jogo");
			return;
		}
		if (selectedNumbers.length === rules.max_number) {
			alert("Número maximo de números ja escolhido");
		} else {
			while (selected.length < rules.max_number) {
				const filteredNumbers = numbers.filter((item) => {
					return !selected.includes(item);
				});
				let randomNumber =
					filteredNumbers[Math.floor(Math.random() * filteredNumbers.length)];
				selected.push(randomNumber);
				actives[randomNumber - 1] = !actives[randomNumber - 1];
				setIsActive(actives);
			}
			setSelectedNumbers([...selected]);
		}
	};

	const addToCartHandler = () => {
		if (selectedNumbers.length === rules.max_number) {
			const gameDone = {
				...rules,
				selectedNumbers,
				game_id: uuid(),
			};
			gameDone.selectedNumbers.sort();

			dispatch(addToCart(gameDone));
			clearGameHandler();
			alert("Jogo adicionado ao carrinho com sucesso");
		} else {
			alert(
				`Você precisa escolher um total de ${rules.max_number}números para adicionar um jogo ao carrinho`
			);
		}
	};

	return (
		<>
			<Menu displayCart navigation={navigation} />
			<S.Wrapper>
				<S.Header>New Bet for {chosenGame}</S.Header>
				<S.ChooseText>Choose a game</S.ChooseText>
				<S.ButtonsContainer>
					{buttonTypes.length > 0 && !loadingGames ? (
						buttonTypes.map((button) => (
							<GameButton
								onPress={() =>
									handleSelectedGame(
										button.range,
										button.description,
										button.type
									)
								}
								key={button.type}
								lotteryName={button.type}
								color={button.color}
								active={button.type === chosenGame}
							/>
						))
					) : (
						<Text>Erro ao carregar</Text>
					)}
				</S.ButtonsContainer>
				{selectedNumbers.length > 0 ? (
					<>
						<S.SelectedNumbersWrapper>
							{selectedNumbers &&
								selectedNumbers.map((number) => (
									<S.SelectedBall
										key={number}
										onPress={() => handleRemoveNumber(number)}
										color={defaultColor}
									>
										<S.Xmark>x</S.Xmark>
										<S.SelectedBallText>{number}</S.SelectedBallText>
									</S.SelectedBall>
								))}
						</S.SelectedNumbersWrapper>
						<S.Controllers>
							<S.CompleteGame onPress={completeGameHandler}>
								<S.CompleteText>Complete Game</S.CompleteText>
							</S.CompleteGame>

							<S.ClearGame onPress={clearGameHandler}>
								<S.ClearText>Clear Game</S.ClearText>
							</S.ClearGame>

							<S.AddToCart onPress={addToCartHandler}>
								<S.AddText>
									<Ionicons
										name="md-cart-outline"
										size={18}
										color="#fff"
										style={{ marginRight: 10 }}
									/>
									Add to cart
								</S.AddText>
							</S.AddToCart>
						</S.Controllers>
						<S.Separator />
					</>
				) : (
					<>
						<S.FillBets>Fill your bet</S.FillBets>
						<S.Instructions>{instruction}</S.Instructions>
					</>
				)}

				<ScrollView>
					<S.NumbersWrapper>
						{selectableNumbers &&
							selectableNumbers.map((number) => (
								<S.Ball
									isActive={isActive[number - 1]}
									disabled={isActive[number - 1]}
									key={number}
									onPress={() => handleSelectedNumber(number)}
									color={defaultColor}
								>
									<S.BallText>{number}</S.BallText>
								</S.Ball>
							))}
					</S.NumbersWrapper>
				</ScrollView>
			</S.Wrapper>
		</>
	);
};

export default NewBet;

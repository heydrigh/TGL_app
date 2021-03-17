import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../store/actions/cart";
import api from "../../services/api";
import Game from "../Game";
import * as S from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const Cart = ({ navigation }) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.bets);
	console.log(cart);

	const totalInCart = () => {
		const sum = cart.map((bet) => bet.price);

		const total = sum.reduce((acc, total) => {
			return acc + total;
		}, 0);

		return total;
	};

	const handleDeleteItem = (id) => {
		dispatch(removeFromCart(id));
	};

	const handleSavedButton = async () => {
		let game_array = [];
		if (cart.length > 0) {
			cart.map((bet) => {
				const game = {
					type_id: bet.id,
					numbers: bet.selectedNumbers.join(","),
				};
				game_array.push(game);
			});
			try {
				const response = await api.post("/games", game_array);
				alert("Seu jogos foras salvos com sucesso!");
				console.log(response);
				dispatch(clearCart());
				navigation.push("/home");
			} catch (err) {
				console.log(err);
				alert(
					"Ocorreu um erro ao realizar esta ação, tente novamente mais tarde."
				);
			}
		} else {
			toastWarn("Seu carrinho está vazio. Por favor faça ao menos uma aposta.");
		}
	};

	return (
		<S.Wrapper>
			<S.Header>
				<S.CartText>
					<Ionicons name="md-cart-outline" size={40} color="#B5C401" />
					Cart
				</S.CartText>
				<S.CloseButton>
					<S.CloseText
						onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
					>
						<Ionicons name="md-close" size={36} color="#B5C401" />
					</S.CloseText>
				</S.CloseButton>
			</S.Header>

			<S.BetsContainer>
				<ScrollView>
					{cart.length > 0 ? (
						cart.map((bet) => (
							<Game
								key={bet.game_id}
								color={bet.color}
								gameName={bet.type}
								numbers={bet.selectedNumbers.join(",")}
								date={bet.created_at}
								cost={bet.price.toFixed(2)}
								trashcan
								onRemove={() => handleDeleteItem(bet.game_id)}
							/>
						))
					) : (
						<Text>Seu carrinho está vazio</Text>
					)}
				</ScrollView>
			</S.BetsContainer>

			<S.TotalWrapper>
				<S.Cart>Cart</S.Cart>
				<S.Total>Total</S.Total>
				<S.Price>
					R$ {cart.length > 0 ? totalInCart().toFixed(2) : "0,00"}
				</S.Price>
			</S.TotalWrapper>
			<S.SaveButton onPress={handleSavedButton}>
				<S.SaveText>Save</S.SaveText>
			</S.SaveButton>
		</S.Wrapper>
	);
};

export default Cart;

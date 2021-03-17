import React from "react";
import * as S from "./styles";
import Logo from "../Logo";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth/actions";
import { DrawerActions } from "@react-navigation/native";

const Menu = ({ navigation, displayCart }) => {
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logout());
	};

	return (
		<S.Wrapper>
			<Logo size="small" />
			{displayCart && (
				<S.CartButton
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
				>
					<S.CartText>
						<Ionicons name="md-cart-outline" size={35} color="#B5C401" />
					</S.CartText>
				</S.CartButton>
			)}

			<S.LogoutButton onPress={handleLogOut}>
				<Feather name="log-out" size={30} color="#C1C1C1" />
			</S.LogoutButton>
		</S.Wrapper>
	);
};

export default Menu;

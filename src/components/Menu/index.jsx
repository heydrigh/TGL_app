import React from "react";
import * as S from "./styles";
import Logo from "../Logo";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth/actions";

const Menu = () => {
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logout());
	};

	return (
		<S.Wrapper>
			<Logo size="small" />
			<S.LogoutButton onPress={handleLogOut}>
				<Feather name="log-out" size={30} color="#C1C1C1" />
			</S.LogoutButton>
		</S.Wrapper>
	);
};

export default Menu;

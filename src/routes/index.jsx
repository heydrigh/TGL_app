import React from "react";
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useSelector } from "react-redux";

const Routes = () => {
	const auth = useSelector((state) => {
		return {
			isAuth: state.auth.isAuth,
			loading: state.auth.loading,
		};
	});

	if (auth.loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" color="#B5C401" />
			</View>
		);
	}

	return auth.isAuth ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;

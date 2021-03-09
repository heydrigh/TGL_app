import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthRoute from "./src/routes/auth.routes";

export default function App() {
	return (
		<NavigationContainer>
			<View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
				<AuthRoute />
			</View>
		</NavigationContainer>
	);
}

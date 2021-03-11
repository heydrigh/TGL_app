import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";

import Routes from "./src/routes";

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
					<Routes />
				</View>
			</NavigationContainer>
		</Provider>
	);
}

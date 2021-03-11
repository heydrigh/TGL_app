import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

const Auth = createStackNavigator();

const AppRoutes = () => (
	<Auth.Navigator
		screenOptions={{
			headerShown: false,
			cardStyle: { backgroundColor: "#f3f3f3" },
		}}
	>
		<Auth.Screen name="Home" component={Home} />
	</Auth.Navigator>
);

export default AppRoutes;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";

const Auth = createStackNavigator();

const AuthRoutes = () => (
	<Auth.Navigator
		screenOptions={{
			headerShown: false,
			cardStyle: { backgroundColor: "#f3f3f3" },
		}}
	>
		<Auth.Screen name="SignIn" component={SignIn} />
	</Auth.Navigator>
);

export default AuthRoutes;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import {
	FontAwesome,
	SimpleLineIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import { View } from "react-native";
import Home from "../screens/Home";
import Account from "../screens/Account";
import NewBet from "../screens/NewBet";
import Cart from "../components/Cart";

const Auth = createStackNavigator();
const BottomNav = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AppRoutes = () => {
	const cart = useSelector((state) => state.cart.bets);
	const DrawerScreen = () => (
		<Drawer.Navigator
			drawerContent={({ navigation }) => (
				<Cart cart={cart} navigation={navigation} />
			)}
			drawerPosition="right"
		>
			<Drawer.Screen component={NewBet} name={"NewBet"} />
		</Drawer.Navigator>
	);
	const TabScreens = () => (
		<BottomNav.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size, focused }) => {
					switch (route.name) {
						case "Home":
							return (
								<>
									{focused && (
										<View
											style={{
												width: 30,
												height: 4,
												backgroundColor: "#B5C401",
												position: "absolute",
												top: 0,
												borderRadius: 6,
											}}
										/>
									)}
									<SimpleLineIcons
										name="home"
										size={size}
										color={focused ? "#B5C401" : color}
									/>
								</>
							);

						case "Account":
							return (
								<>
									{focused && (
										<View
											style={{
												width: 30,
												height: 4,
												backgroundColor: "#B5C401",
												position: "absolute",
												top: 0,
												borderRadius: 6,
											}}
										/>
									)}
									<FontAwesome
										name={"user-o"}
										size={size}
										color={focused ? "#B5C401" : color}
									/>
								</>
							);

						default:
							return (
								<View
									style={{
										justifyContent: "center",
										alignItems: "center",
										height: 92,
										width: 92,
										backgroundColor: "#fff",
										borderRadius: 50,
										shadowColor: "#000",
										shadowOffset: {
											width: 0,
											height: 7,
										},
										shadowOpacity: 0.43,
										shadowRadius: 9.51,

										elevation: 15,
										marginBottom: 15,
									}}
								>
									<View
										style={{
											justifyContent: "center",
											alignItems: "center",
											height: 80,
											width: 80,
											backgroundColor: "#B5C401",
											borderRadius: 50,
										}}
									>
										<MaterialIcons
											name="monetization-on"
											size={60}
											color="#fff"
										/>
									</View>
								</View>
							);
					}
				},
			})}
			tabBarOptions={{
				activeTintColor: "#707070",
				inactiveTintColor: "#C1C1C1",

				tabStyle: {
					justifyContent: "center",
				},

				labelStyle: {
					fontSize: 14,
					fontStyle: "italic",
					fontWeight: "bold",
					marginBottom: 10,
					marginTop: -10,
				},
				style: {
					height: 71,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					// marginBottom: 40,
				},
			}}
		>
			<BottomNav.Screen name="Home" component={Home} />

			<BottomNav.Screen
				name="NewBet"
				component={DrawerScreen}
				options={{ title: "" }}
			/>

			<BottomNav.Screen name="Account" component={Account} />
		</BottomNav.Navigator>
	);

	return (
		<Auth.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: "#f3f3f3" },
			}}
		>
			<Auth.Screen name="Home" component={TabScreens} />
		</Auth.Navigator>
	);
};

export default AppRoutes;

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import React from "react";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Cart from "./screens/Cart";

import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";

const Routes = {
	Home: {
		name: "Home",
		screen: Home,
	},
	Product: {
		name: "Product",
		screen: Product,
	},
	Cart: {
		name: "Cart",
		screen: Cart,
	},
};

const transition = (
	<Transition.Together>
		<Transition.Out type="slide-left" durationMs={200} interpolation="easeIn" />
		<Transition.In type="fade" durationMs={500} />
	</Transition.Together>
);

// const MainNavigator = createSwitchNavigator(Routes, {
// 	initialRouteName: "Home",
// });

const MainNavigator = createAnimatedSwitchNavigator(Routes, { transition });

export default createAppContainer(MainNavigator);

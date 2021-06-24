import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Cart from "./screens/Cart";

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

const MainNavigator = createSwitchNavigator(Routes, {
	initialRouteName: "Home",
});

export default createAppContainer(MainNavigator);

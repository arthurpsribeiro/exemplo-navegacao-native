import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text>Produto</Text>
			<Button
				title="Ir para Carrinho"
				onPress={() => {
					props.navigation.navigate("Cart");
				}}
			/>
			<Button
				title="Ir para Home"
				onPress={() => {
					props.navigation.navigate("Home");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

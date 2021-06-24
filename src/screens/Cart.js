import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text>Carrinho</Text>
			<Button
				title="Voltar para Produtos"
				onPress={() => {
					props.navigation.navigate("Product");
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

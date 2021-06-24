import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button
				title="Ir para Produto"
				onPress={() => {
					props.navigation.navigate("Product");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

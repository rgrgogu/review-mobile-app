import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  image: { width: 26, height: 26, marginRight: 10 },
  text: { fontFamily: "Poppins_600SemiBold", fontSize: 18 },
});

const Logo = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/heart_logo.png")}
      />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Logo;

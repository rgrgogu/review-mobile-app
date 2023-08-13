import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "../styles/Global";

const FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButton;

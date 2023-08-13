import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../styles/Global";
import Card from "../shared/Card";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../styles/Global";

const ReviewDetails = ({ route, navigation }) => {
  const { title, rating, body, key } = route.params;

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={handlePress} style={globalStyles.back}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Card>
        <Text>{title}</Text>
        <Text>{rating}</Text>
        <Text>{body}</Text>
        <View style={globalStyles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

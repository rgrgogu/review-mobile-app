import React, { useState } from "react";
import {
  View,
  Text,
  Keyboard,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/Card";
import { globalStyles } from "../styles/Global";
import ReviewForm from "./ReviewForm";

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prev) => {
      return [review, ...prev];
    });
    setModalOpen(false);
  };

  // const handlePress = () => {
  //   navigation.navigate("ReviewDetails");
  //   //navigation.push("ReviewDetails");
  // };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{
                ...globalStyles.modalToggle,
                ...globalStyles.modalClose,
              }}
              onPress={() => {
                setModalOpen(false);
              }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => {
          setModalOpen(true);
        }}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ReviewDetails", {
                title: item.title,
                rating: item.rating,
                body: item.body,
                key: item.key,
              })
            }
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          title: "GameZone",
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AboutStack"
        component={About}
        options={{
          title: "About GameZone",
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStackNavigator;

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./HomeStackNavigator";
import AboutStackNavigator from "./AboutStackNavigator";
import HeaderBG from "../shared/HeaderBG";
import Logo from "../shared/Logo";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#444",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: (props) => (
            <Logo
              title={props.children === "Home" ? "GameZone" : "About GameZone"}
            />
          ),
          headerTitleAlign: "center",
          headerBackground: () => <HeaderBG />,
        }}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="About" component={AboutStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;

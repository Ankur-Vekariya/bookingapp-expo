import { StatusBar } from "expo-status-bar";
import Home from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hotels from "./screens/hotels";
import { SafeAreaView, StyleSheet } from "react-native";
import HotelDetail from "./screens/hotelDetails";
import { colors } from "./constants/colors";
import Maps from "./screens/map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer theme={{ colors: { background: colors.accent } }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="hotels" component={Hotels} />
          <Stack.Screen name="hotel-detail" component={HotelDetail} />
          <Stack.Screen name="maps" component={Maps} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

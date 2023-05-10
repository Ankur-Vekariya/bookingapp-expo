import { StatusBar } from "expo-status-bar";
import Home from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hotels from "./screens/hotels";
import { SafeAreaView, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="hotels" component={Hotels} />
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

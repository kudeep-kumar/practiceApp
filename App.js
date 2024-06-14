import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/exercises/Exercise1";
import Exercise2 from "./src/exercises/Exercise2";
import Raugh from "./src/exercises/Raugh";

export default function App() {
  return (
    <>
      {/*<Exercise1 />*/}
      <Exercise2 />
      <Raugh />
    </>
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

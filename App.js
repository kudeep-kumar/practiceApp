import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Excercise1 from "./src/excercises/Excercise1";
import Excercise2 from "./src/excercises/excercise2";

export default function App() {
  return (
    <>
      {/* <Excercise1 /> */}
      <Excercise2 />
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

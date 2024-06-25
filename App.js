import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise10 from "./src/exercises/Exercise10";
import Exercise11 from "./src/exercises/Exercise11";
import Exercise12 from "./src/exercises/Exercise12";
import Exercise13 from "./src/exercises/Exercise13";

export default function App() {
  return (
    <>
      {/* <Exercise1/> */}
      {/* <Exercise2/> */}
      {/* <Exercise3/> */}

      {/* <Exercise10/> */}
      {/* <Exercise11/> */}
      {/* <Exercise12/> */}
      <Exercise13/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

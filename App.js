import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise2 from "./scr/exercises/Exercise2";
import Exercise3 from "./scr/exercises/Exercise3";
import Exercise1 from "./scr/exercises/Exercise1";
import Exercise4 from "./scr/exercises/Exercise4";
import Exercise5 from "./scr/exercises/Exercise5";
import Exercise6 from './scr/exercises/Exercise6';
import Exercise7 from "./scr/exercises/Exercise7";
import Exercise8 from "./scr/exercises/Exercise8";
import Exercise9 from "./scr/exercises/Exercise9";
import Exercise10 from "./scr/exercises/Exercise10";
import Exercise11 from "./scr/exercises/Exercise11";
import Exercise12 from "./scr/exercises/Exercise12";



export default function App() {
  return (
    <>
       {/* <Exercise1 /> */}
       {/* <Exercise2/> */}
       {/*<Exercise3/> */}
       {/*<Exercise4/> */}
       {/*<Exercise5/> */} 
       {/*<Exercise6/> */}
       {/*<Exercise7/> */}
       {/*<Exercise8/> */}
       {/*<Exercise9/> */}
       {/*<Exercise11/> */}
       {/*<Exercise10/> */}
       <Exercise12/>      
            

      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
import { StyleSheet, Text, View } from "react-native";
import React from "react";
// Funtion Declaration code is here
export function yourFuntion(item) {
  let a = 3;
  if (a > 2) {
    console.log("sum", a + item);
  }
}
const Exercise1 = () => {
  // -------------->>>>>>>>>>>>>>>>>Conditional Statements<<<<<<<<<<<<<<<<---------------

  // If condition code is here
  const a = 5;
  if (a < 4) {
    console.log("am here ");
  }
  // if else condition code is here

  if (a > 5) {
    console.log("block one is working");
  } else {
    console.log("block two is working");
  }

  // else if condtion code is here

  if (a > 5) {
    console.log("block one is working ");
  } else if (a > 6) {
    console.log("block two is working");
  } else if (a > 10) {
    console.log("block three is working");
  } else {
    console.log("nothing is working");
  }

  // switch statement code is here

  const abc = "Sunday";

  switch (abc) {
    case "Monday":
      console.log("Monday is here");
      break;
    case "Tuesday":
      console.log("Tuesday is here");
      break;
    case "Wednessday":
      console.log("Wednessday is here");
      break;
    case "Thursday":
      console.log("Thursday is here");
      break;
    case "Friday":
      console.log("Friday is here");
      break;
    case "Saturday":
      console.log("Saturday is here");
      break;
    case "Sunday":
      console.log("Sunday is here");
      break;
    default:
      break;
  }
  //   // -------------->>>>>>>>>>>>>>>>>Looping Statements<<<<<<<<<<<<<<<<---------------

  // for loop code is here

  for (let b = 1; b <= 6; b++) {
    console.log("for execution : ", b);
  }
  // // while loop code is here

  let i = 0;
  while (i < 5) {
    console.log("While execution :", i);
    i++;
  }
  //  // do while loop code is here

  let p = 0;
  do {
    console.log("do while execution :", p);
    p++;
  } while (p < 5);

  // // for in while loop code is here

  const person = {
    name: "John",
    age: 30,
    city: "New York",
    mobileno: 645567498,
    email: "john@gmail.com",
    hobby: "music",
  };

  let ke = 6549879;
  var b = "b or boy";
  const c = "c for cat";
  let y;
  y = "y for yellow";

  const t = false;
  const d = true;
  console.log("sum is here: ", t && d);

  const colors = ["red", "green", "blue"];

  return (
    <View>
      <Text>Exercise1</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({});

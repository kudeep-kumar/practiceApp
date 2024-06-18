import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise3 = () => {
  //------------------>>>>>>>>>>>> Array Creation <<<<<<<<<<<------------------
  let fruits = ["apple", "banana", "cherry", "orange", "kiwi"];

  // Push method adds elements to the end

  // fruits.push("date");

  // Unshift method adds elements to the beginning
  // fruits.unshift("orange");

  // splice method adds elements  at specific position
  //fruits.splice(3, 0, "coconut", "graps");
  //------------------>>>>>>>>>>>> Removing Element <<<<<<<<<<<-----------------

  //Pop method removes the last element

  //fruits.pop(); // ['apple', 'banana']

  // Shift method removes the first element
  // fruits.shift(); // ['banana', 'cherry']

  // Splice method  removes at specific Position

  //fruits.splice(2, 4); // ['banana', 'cherry']

  //console.log("our array", fruits);
  //------------------>>>>>>>>>>>> Updating Element <<<<<<<<<<<-----------------

  // Updating an element

  //fruits[0] = "blueberry"; // ['apple', 'blueberry', 'cherry']

  //console.log("my array is here", fruits);

  //------------------>>>>>>>>>>>> Array Traversal <<<<<<<<<<<-----------------

  // Using forEach to iterate
  fruits.forEach((fruit) => {
    console.log(fruit);
  });

  // Using map to transform elements
  // let uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
  // console.log(uppercasedFruits); // ['APPLE', 'BANANA', 'CHERRY']

  // Using for...of loop
  for (let fruit of fruits) {
    console.log(fruit);
  }

  return (
    <View>
      <Text>Exercise3</Text>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({});

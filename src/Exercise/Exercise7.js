import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise7 = () => {
  return (
    <View style={styles1.container}>
      <View style={styles1.box}>
        <Text style={styles1.text}>Box 1</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "yellow" }]}>
        <Text style={styles1.text}>Box 2</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "pink" }]}>
        <Text style={styles1.text}>Box 3</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "pink" }]}>
        <Text style={styles1.text}>Box 4 </Text>
      </View>
    </View>
  );
};

export default Exercise7;

// -->>>>>>>>>>>  Using flex properties: flex, flexDirection, justifyContent, alignItems <<<<<<<<<<<<<---

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Try changing to 'column' and see the difference
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#46c2ab",
    width: 300,
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopEndRadius: 10,
    borderColor: "white",
    borderWidth: 20,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});

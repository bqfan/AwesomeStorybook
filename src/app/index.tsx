import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "../../global.css"

function App() {
  return (
    <View style={styles.container}>
      <Text className="text-teal-500 text-lg font-bold">Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  AppEntryPoint = require("../../.rnstorybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;

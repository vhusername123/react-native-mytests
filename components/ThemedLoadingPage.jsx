import { View, Text } from "react-native";
import React from "react";
import ThemedView from "./ThemedView";
import ThemedLoader from "./ThemedLoader";

const ThemedLoadingPage = () => {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <ThemedLoader />
    </ThemedView>
  );
};

export default ThemedLoadingPage;

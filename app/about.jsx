import { StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        About
      </ThemedText>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  title: {
    fontVariant: "bold",
    fontSize: 18,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

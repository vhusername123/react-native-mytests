import { Link } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={styles.container}>
      <Text style={{ color: theme.text }}>About</Text>
      <Link href="/" style={[styles.link, { color: theme.text }]}>
        Back Home
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

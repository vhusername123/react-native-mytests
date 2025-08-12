import { StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={styles.container}>
      <ThemedText>Cool Stuff</ThemedText>
      <ThemedLogo />
      <ThemedText title={true} style={styles.title}>
        The Number 1
      </ThemedText>
      <ThemedText>Reading List App</ThemedText>
      <Spacer />
      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>
      <Spacer height={10} />
      <Link href="/register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>
      <Spacer />
      <Link href="/about" style={styles.link}>
        <ThemedText>About</ThemedText>
      </Link>
      <Spacer height={10} />
      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact</ThemedText>
      </Link>
      <Spacer height={10} />
      <Link href="/create" style={styles.link}>
        <ThemedText> test </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontVariant: "bold",
    fontSize: 18,
  },
  link: {
    borderBottomWidth: 1,
  },
});

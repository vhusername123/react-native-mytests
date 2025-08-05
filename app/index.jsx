import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import { Link } from "expo-router";
import img from "../assets/img/tomato.jpg";
import { Colors } from "../constants/Colors";
const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Hojkjkljme ahsajdlkjasd
      </Text>
      <Image source={img} style={styles.image} />
      <Text style={{ color: theme.text }}>Bottom Text</Text>
      <Link href="/about" style={[styles.link, { color: theme.text }]}>
        About
      </Link>
      <Link href="/contact" style={[styles.link, { color: theme.text }]}>
        Contact
      </Link>
    </View>
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
  image: {
    marginVertical: 20,
    maxHeight: "20%",
    maxWidth: "20%",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});

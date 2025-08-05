import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import img from "../assets/img/";
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hojkjkljme ahsajdlkjasd</Text>
      <Image source={img} style={styles.image} />
      <Text>Bottom Text</Text>
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact" style={styles.link}>
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
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});

import { Image, StyleSheet, useColorScheme } from "react-native";
import DarkLogo from "../assets/img/tomato.jpg";
import LightLogo from "../assets/img/tomato.jpg";
const ThemedLogo = () => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;
  return <Image source={logo} style={styles.image} />;
};

export default ThemedLogo;

const styles = StyleSheet.create({
  image: {
    marginVertical: 20,
    maxHeight: "20%",
    maxWidth: "20%",
  },
});

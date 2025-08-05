import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedText = ({ style, title = false, ...props }) => {
  const colorSheme = useColorScheme();
  const theme = Colors[colorSheme] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;
  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;

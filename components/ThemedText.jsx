import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { useLanguage } from "../hooks/useLanguage";
import { Language } from "../constants/Language";

const ThemedText = ({ style, title = false, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;
  const { userLang } = useLanguage();
  const isStringKey = typeof children === "string";

  const text = isStringKey
    ? Language[userLang][children] ?? Language.en[children] ?? children
    : children;

  return (
    <Text style={[style, { color: textColor }]} {...props}>
      {text}
    </Text>
  );
};

export default ThemedText;

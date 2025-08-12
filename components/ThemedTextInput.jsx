import { TextInput, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { useLanguage } from "../hooks/useLanguage";
import { Language } from "../constants/Language";

const ThemedTextInput = ({ style, placeholder, ...props }) => {
  const colorScheme = useColorScheme();
  theme = Colors[colorScheme] ?? Colors.light;
  const { userLang } = useLanguage();
  const isStringKey = typeof placeholder === "string";
  const text = isStringKey
    ? Language[userLang][placeholder] ?? Language.en[placeholder] ?? placeholder
    : placeholder;
  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      placeholder={text}
      {...props}
    />
  );
};

export default ThemedTextInput;

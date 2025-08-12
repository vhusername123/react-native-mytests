import { useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/UserContext";
import { BooksProvider } from "../context/BooksContext";
import { LanguageProvider } from "../context/LanguageContext";
const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <LanguageProvider>
      <UserProvider>
        <BooksProvider>
          <StatusBar value="auto" />
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.navBackground,
              },
              headerTintColor: theme.title,
            }}
          >
            <Stack.Screen
              name="index"
              options={{
                title: "Home",
                headerShown: true,
                headerBackVisible: false,
              }}
            />
            <Stack.Screen name="about" options={{ title: "About" }} />
            <Stack.Screen name="contact" options={{ title: "Contact" }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          </Stack>
        </BooksProvider>
      </UserProvider>
    </LanguageProvider>
  );
};

export default RootLayout;

import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";
import ThemedLoadingPage from "../ThemedLoadingPage";

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace("/profile");
    }
  }, [user, authChecked]);
  if (!authChecked) {
    return <ThemedLoadingPage />;
  }
  return children;
};
export default GuestOnly;

import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </GuestOnly>
  );
};

export default AuthLayout;

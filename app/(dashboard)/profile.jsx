import { StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import { useLanguage } from "../../hooks/useLanguage";

const Profile = () => {
  const [error, setError] = useState("");
  const { logout, user } = useUser();
  const { setLanguage } = useLanguage();
  if (user === null) {
    throw Error("user can't be null here");
  }
  async function logoutattempt() {
    setError(null);
    try {
      await logout();
    } catch (error) {
      setError(error.message);
    }
  }
  function changeLang(lang) {
    setLanguage(lang);
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        {user.email}
      </ThemedText>
      <Spacer />
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />
      <ThemedButton onPress={logoutattempt}>
        <Text style={{ color: "#f2f2f2" }}>logout</Text>
      </ThemedButton>
      <ThemedButton onPress={() => changeLang("en")}>
        <Text style={{ color: "#f2f2f2" }}>English</Text>
      </ThemedButton>
      <ThemedButton onPress={() => changeLang("de")}>
        <Text style={{ color: "#f2f2f2" }}>German</Text>
      </ThemedButton>
      <Spacer />
      {(error && <Text style={styles.error}>{error}</Text>) || <Spacer />}
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});

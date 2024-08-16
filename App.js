import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import AuthNavigator from "./navigators/AuthNavigator";
import ProfileNavigator from "./navigators/ProfileNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  const loggedIn = async () => {
    return await AsyncStorage.getItem("loggedIn");
  };

  const getToken = async () => {
    return await AsyncStorage.getItem("token");
  };

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    if (id) {
      const useId = `${JSON.parse(id)}`;
    }
    try {
      const currentUser = await AsyncStorage.getItem(useId);
      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);

        navigate("Home", parsedData);
      }
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          {!loggedIn ? <AuthNavigator /> : <ProfileNavigator data={userData} />}
        </NavigationContainer>

        <FlashMessage position="bottom" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20px",
  },
});

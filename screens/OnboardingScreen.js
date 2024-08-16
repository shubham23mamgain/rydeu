import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { hp, wp } from "../utils/helper";

import Lottie from "lottie-react-native";
import NewCustomButton from "../components/CustomButton";
const OnBoardingScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Lottie
        source={require("../assets/lotties/LoveGirl.json")}
        style={{ width: wp(90), height: hp(90) }}
        autoPlay
        loop
      />
      <View style={styles.button}>
        <NewCustomButton
          buttonBackgroundColor={colors.newBlack}
          buttonText={"Let's Go"}
          buttonTextColor={colors.newGray}
          onPress={() => navigate("Login")}
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#63effe",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  letsgo: {
    color: "#b6b6b6",
  },
  button: {
    width: wp(80),
    position: "absolute",
    bottom: hp(3),
  },
});

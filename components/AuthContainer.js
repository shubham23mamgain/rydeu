import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../utils/colors";
import { wp, hp } from "../utils/helper";
import { Platform } from "react-native";
import AppHeader from "./AppHeader";
import LottieView from "lottie-react-native";
import BackButton from "./BackButton";

const AuthContainer = ({ title, child, height, lottie }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      // keyboardVerticalOffset={50}
    >
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={[styles.illustrationContainer, { height: hp(height) }]}>
            <AppHeader backbutton={<BackButton showTitle={true} />} />

            <LottieView
              source={lottie}
              style={{ width: wp(80), height: hp(60) }}
              autoPlay
              loop
            />
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.loginHeader}>{title}</Text>

            {child}
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  illustrationContainer: {
    backgroundColor: colors.newGray,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    paddingHorizontal: 20,
  },
  loginHeader: {
    marginTop: hp(2),
    color: colors.newBlack,
    fontSize: hp(4),
    fontWeight: "600",
  },
});

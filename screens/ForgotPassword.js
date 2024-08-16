import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import AuthContainer from "../components/AuthContainer";
import Spacer from "../components/Spacer";
import CustomTextInput from "../components/CustomTextInput";
import NewCustomButton from "../components/CustomButton";

const ForgetPassword = () => {
  return (
    <AuthContainer
      title={"Forgot Your Password ? "}
      child={<ForgetPasswordContainer />}
      height={65}
      lottie={require(`../assets/lotties/Forgot.json`)}
    />
  );
};

const ForgetPasswordContainer = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Spacer />
      <Text style={styles.forgetDesc}>
        Please enter the email address you’d like your password reset
        information sent to
      </Text>
      <Spacer size={5} />

      <CustomTextInput placeholderName={"Email Address/ Mobile Number"} />

      <NewCustomButton
        buttonBackgroundColor={colors.newBlue}
        buttonText={"Submit"}
        buttonTextColor={colors.white}
        disabled={false}
        onPress={() => {
          navigate("OTP");
        }}
      />
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  forgetDesc: {
    marginTop: 10,
    color: colors.newdarkGray,
    marginBottom: 10,
  },
});

import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import AuthContainer from "../components/AuthContainer";
import Spacer from "../components/Spacer";
import CustomTextInput from "../components/CustomTextInput";
import NewCustomButton from "../components/CustomButton";

const ResetPassword = () => {
  return (
    <AuthContainer
      title={"Reset Password ?"}
      child={<ResetPassContainer />}
      height={55}
      lottie={require(`../assets/lotties/ResetPass.json`)}
    />
  );
};

const ResetPassContainer = () => {
  const { navigate } = useNavigation();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [confirmpasswordIsVisible, setConfirmPasswordIsVisible] =
    useState(false);

  const [userInfo, setUserInfo] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name) => {
    return (text) => setUserInfo({ ...userInfo, [name]: text });
  };

  const { password, confirmPassword } = userInfo;
  return (
    <View>
      <Spacer />
      <CustomTextInput
        placeholderName={"New Password"}
        iconName={"lock"}
        value={password}
        onChangeText={handleChange("password")}
        isVisible={passwordIsVisible}
        onPress={() => setPasswordIsVisible(!passwordIsVisible)}
        isPassword={true}
      />
      <Spacer />
      <CustomTextInput
        placeholderName={"Enter Confirm Password"}
        isVisible={confirmpasswordIsVisible}
        value={confirmPassword}
        onChangeText={handleChange("confirmPassword")}
        onPress={() => setConfirmPasswordIsVisible(!confirmpasswordIsVisible)}
        isPassword={true}
        iconName={"lock"}
      />
      <Spacer />
      <NewCustomButton
        buttonBackgroundColor={colors.newBlue}
        buttonText={"Submit"}
        buttonTextColor={colors.white}
        disabled={false}
        onPress={() => {}}
      />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  forgetDesc: {
    marginTop: 10,
    color: colors.newdarkGray,
    marginBottom: 10,
  },
});

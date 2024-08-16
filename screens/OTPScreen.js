import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { hp, wp } from "../utils/helper";
import { useNavigation } from "@react-navigation/native";

import { OtpInput } from "react-native-otp-entry";
import AuthContainer from "../components/AuthContainer";
import Spacer from "../components/Spacer";
import NewCustomButton from "../components/CustomButton";

const OTP = () => {
  return (
    <AuthContainer
      title={"Enter OTP"}
      child={<OTPContainer />}
      height={55}
      lottie={require(`../assets/lotties/OTP.json`)}
    />
  );
};

const OTPContainer = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text style={styles.forgetDesc}>
        Enter 4 digit verification code sent to your registered mobile number.
      </Text>

      <Spacer />

      {/* <CustomTextInput placeholderName={"Enter OTP"} /> */}

      <View style={{ marginVertical: 22, width: wp(80) }}>
        <OtpInput
          numberOfDigits={4}
          focusColor={colors.newBlue}
          focusStickBlinkingDuration={1000}
          theme={{
            pinCodeContainerStyle: {
              backgroundColor: colors.newBlue,
              width: 58,
              height: 58,
              borderRadius: 12,
            },
          }}
        />
      </View>

      <Spacer />

      <NewCustomButton
        buttonBackgroundColor={colors.newBlue}
        buttonText={"Submit"}
        buttonTextColor={colors.white}
        disabled={false}
        onPress={() => {
          navigate("ResetPass");
        }}
      />
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  forgetDesc: {
    marginTop: 10,
    color: colors.newdarkGray,
    marginBottom: 10,
  },
});

import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import { hp, wp } from "../utils/helper";

const NewCustomButton = ({
  buttonBackgroundColor,
  buttonText,
  buttonTextColor,
  disabled,
  onPress,
  logo,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.loginButton, { backgroundColor: buttonBackgroundColor }]}
    >
      {logo ? (
        <View style={styles.buttonWithLogo}>
          <Image
            source={{
              uri: logo,
              width: 20,
              height: 20,
            }}
          />
          <View style={{ width: 30 }} />
          <Text style={[styles.loginButtonText, { color: buttonTextColor }]}>
            {buttonText}
          </Text>
        </View>
      ) : (
        <Text style={[styles.loginButtonText, { color: buttonTextColor }]}>
          {buttonText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default NewCustomButton;

const styles = StyleSheet.create({
  loginButton: {
    padding: wp(4),
    borderRadius: 10,
    marginTop: hp(3),
  },
  loginButtonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonWithLogo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

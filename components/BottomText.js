import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { hp, wp } from "../utils/helper";
import colors from "../utils/colors";

const BottomText = ({ mainText, navigatorText, onPress }) => {
  return (
    <View style={styles.noaccount}>
      <Text style={styles.noaccountText}>{mainText} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signupText}>{navigatorText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomText;

const styles = StyleSheet.create({
  noaccount: {
    display: "flex",
    marginTop: hp(3),
    marginBottom: hp(4),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noaccountText: {
    color: "#d81234",
  },
  signupText: {
    color: colors.newBlue,
    fontSize: hp(2),
  },
});

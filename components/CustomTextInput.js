import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { hp, wp } from "../utils/helper";
import colors from "../utils/colors";
import { Feather } from "expo-vector-icons";

const CustomTextInput = ({
  placeholderName,
  iconName,
  isVisible,
  keyboardType,
  isPassword,
  onPress,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      {iconName && (
        <View style={styles.icon}>
          <Feather name={iconName} size={22} color={colors.newGray} />
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholderName}
        selectionColor={colors.newBlue}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !isVisible}
        placeholderTextColor={colors.newDarkerGray}
      />

      {isPassword && (
        <TouchableOpacity style={styles.passwordVisible} onPress={onPress}>
          <Feather
            name={isVisible ? "eye" : "eye-off"}
            color={colors.newGray}
            size={20}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: wp(90),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: colors.newGray,
  },
  icon: {
    marginRight: 15,
  },
  passwordVisible: {
    position: "absolute",
    right: 0,
  },
});

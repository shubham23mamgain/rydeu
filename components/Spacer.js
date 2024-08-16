import { StyleSheet, View } from "react-native";
import React from "react";

const Spacer = ({ size }) => {
  const defaultValue = 10;

  return (
    <View
      style={{
        height: size ?? defaultValue,
      }}
    />
  );
};

export default Spacer;

const styles = StyleSheet.create({});

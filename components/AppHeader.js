import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AppHeader = ({ backbutton, title }) => {
  const { goBack, canGoBack } = useNavigation();
  return (
    <View
      style={[styles.container, { position: "absolute", top: 5, left: 20 }]}
    >
      {canGoBack() && (
        <View style={styles.appHeader}>
          <Pressable onPress={goBack}>{backbutton}</Pressable>
          <Text style={{ marginLeft: 20, fontSize: 20 }}>{title}</Text>
        </View>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

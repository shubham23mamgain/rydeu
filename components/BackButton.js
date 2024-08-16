// Custom Back Button

import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";

const BackButton = ({ showTitle }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back" size={18} color={colors.newBlack} />
      {showTitle && <Text style={styles.title}>Back</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: colors.newBlack,
    fontSize: 20,
    marginLeft: 10,
  },
});

export default BackButton;

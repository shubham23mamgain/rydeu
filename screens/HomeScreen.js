import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { hp } from "../utils/helper";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "expo-vector-icons";
import NewCustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CalendarComponent from "../components/CalendarComponent";
import { showMessage } from "react-native-flash-message";

const avatar =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1715731200&semt=sph";

const Home = ({ route }) => {
  // console.log("Home Params", route.params);

  const { info } = route.params;

  const { navigate } = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.setItem("token", "");
      await AsyncStorage.setItem("loggedIn", "");
      showMessage({ type: "success", message: "Logout Successful" });
      navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = info.data;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity>
              <View style={styles.avatar}>
                <Image source={{ uri: avatar }} style={styles.avatarImage} />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Hi ,</Text>
          </View>

          <View style={{ height: hp(4) }} />

          <View style={styles.looking}>
            <View style={styles.lookingRow}>
              <Text style={styles.lookingTitle}>Info</Text>
              <TouchableOpacity>
                <AntDesign name="right" size={18} color={colors.newBlack} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text>Email : {user.email} </Text>
            <Text>ID : {user.id}</Text>
            <Text>Account ID : {user.accountId}</Text>
          </View>

          <CalendarComponent />

          <NewCustomButton
            buttonText={"Log Out"}
            buttonTextColor={"white"}
            buttonBackgroundColor={"black"}
            onPress={() => handleLogout()}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#121212",
    marginLeft: 20,
  },
  avatar: {
    position: "relative",
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  lookingRow: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lookingTitle: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: 1.1,
    marginBottom: 12,
  },
  listContents: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "start",
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginLeft: 15,
    backgroundColor: colors.newGray,
    alignItems: "center",
    justifyContent: "center",
  },
  lookingCat: {
    alignItems: "center",
    justifyContent: "center",
  },
  lookingforText: {
    fontSize: 14,
    marginLeft: 15,
    fontWeight: "500",
    color: colors.newDarkerGray,
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../utils/colors";
import { hp } from "../utils/helper";
import { useNavigation } from "@react-navigation/native";

import { signInSchema, yupValidate } from "../utils/validator";
import { showMessage } from "react-native-flash-message";
import { signinUser } from "../api/login";
import Spacer from "../components/Spacer";
import CustomTextInput from "../components/CustomTextInput";
import AuthContainer from "../components/AuthContainer";
import NewCustomButton from "../components/CustomButton";
import BottomText from "../components/BottomText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userAction";

const Login = () => {
  return (
    <AuthContainer
      title={"Login"}
      child={<LoginContainer />}
      height={50}
      lottie={require(`../assets/lotties/Login.json`)}
    />
  );
};

const LoginContainer = () => {
  const { navigate } = useNavigation();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    type: "",
    password: "",
  });

  //  const dispatch = useDispatch();

  //  const { loading, error, message, isAuthenticated, status } = useSelector(
  //    (state) => state.user
  //  );

  // useEffect(() => {
  //   if (message) {
  //     if (message == "login sucessful") {
  //       showMessage({ type: "success", message });
  //       navigate("Home");
  //     } else {
  //       showMessage({ type: "danger", message: message });
  //     }

  //     dispatch({ type: "clearMessage" });
  //   }

  //   if (error) {
  //     showMessage({ type: "danger", message: error });

  //     dispatch({ type: "clearError" });
  //   }
  // }, [error, message, dispatch]);

  const signIn = async (userInfo) => {
    try {
      const { data } = await signinUser(userInfo);

      if (data.status == 200) {
        showMessage({ message: data.message, type: "success" });
        await AsyncStorage.setItem("id", JSON.stringify(data.data.user.id));
        await AsyncStorage.setItem("token", JSON.stringify(data.data.token));
        await AsyncStorage.setItem("loggedIn", JSON.stringify(true));

        navigate("Home", { info: data });
      } else showMessage({ message: data.message, type: "danger" });
    } catch (error) {
      showMessage({ message: error?.message, type: "danger" });
    }
  };

  const handleChange = (name) => {
    return (text) => setUserInfo({ ...userInfo, [name]: text });
  };

  const handleSubmit = async () => {
    try {
      const { values, error } = await yupValidate(signInSchema, userInfo);

      if (error) return showMessage({ message: error, type: "danger" });
      if (values) signIn(values);

      //  if (values) dispatch(login(values.email, values.password, values.type));
    } catch (error) {
      showMessage({ message: error.message, type: "danger" });
    }
  };

  const { email, password, type } = userInfo;
  return (
    <View>
      <Spacer />
      <CustomTextInput
        iconName={"mail"}
        placeholderName={"Email"}
        value={email}
        onChangeText={handleChange("email")}
        keyboardType="email-address"
      />
      <Spacer size={5} />

      <CustomTextInput
        iconName={"mail"}
        placeholderName={"Type"}
        value={type}
        onChangeText={handleChange("type")}
        // keyboardType="email-address"
      />
      <Spacer size={5} />
      <CustomTextInput
        iconName={"lock"}
        placeholderName={"Password"}
        value={password}
        onChangeText={handleChange("password")}
        isVisible={passwordIsVisible}
        onPress={() => setPasswordIsVisible(!passwordIsVisible)}
        isPassword={true}
      />
      <Spacer />

      <TouchableOpacity
        onPress={() => navigate("ForgotPassword")}
        style={styles.forgetPassword}
      >
        <Text style={styles.forgetText}>Forgot Password?</Text>
      </TouchableOpacity>

      <NewCustomButton
        buttonBackgroundColor={colors.newBlue}
        buttonText={"Continue"}
        buttonTextColor={colors.authBackground}
        disabled={false}
        onPress={handleSubmit}
      />

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.orLine} />
      </View>

      <NewCustomButton
        buttonBackgroundColor={colors.newGray}
        buttonText={"Continue with Google"}
        buttonTextColor={colors.newBlack}
        logo={
          "https://banner2.cleanpng.com/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg"
        }
        disabled={true}
        onPress={() => {}}
      />

      <BottomText
        mainText={"Don't have an account ? "}
        navigatorText={"Signup"}
        onPress={() => navigate("SignUp")}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  forgetPassword: {
    alignSelf: "flex-end",
  },
  forgetText: {
    color: colors.newBlue,
    fontSize: hp(2),
  },
  or: {
    textAlign: "center",
    marginTop: hp(2),
    marginLeft: 10,
    marginRight: 10,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  orLine: {
    flex: 1,
    marginTop: hp(2),
    backgroundColor: colors.newGray,
    height: 1,
  },
});

import client from "../../api/client";

export const login = (email, password, type) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const { data } = await client.post(
      `https://new-api-staging.rydeu.com/login`,
      {
        email,
        password,
        type,
      }
    );

    dispatch({
      type: "loginSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    dispatch({ type: "logoutFail" });
  }
};

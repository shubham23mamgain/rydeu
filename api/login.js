import client from "../api/client";

export const signinUser = (user) => {
  return client.post("/login/", user);
};

import * as yup from "yup";

export const yupValidate = async (schema, value) => {
  try {
    const data = await schema.validate(value);
    return { values: data };
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return { error: error.message };
    } else {
      return { error: error.message };
    }
  }
};

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const passwordRegex =
//   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/;

yup.addMethod(yup.string, "email", function validateEmail(message) {
  return this.matches(emailRegex, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

const usernameAndPasswordValidation = {
  email: yup.string().email("Invalid email!").required("Email is missing"),
  password: yup
    .string()
    .required("Password is missing")
    .min(6, "Password should be at least 6 chars long!"),
  // .matches(passwordRegex, "Password is too simple."),
};

export const newUserSchema = yup.object({
  username: yup.string().required("Username is missing"),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  ...usernameAndPasswordValidation,
});

export const signInSchema = yup.object({
  ...usernameAndPasswordValidation,
});

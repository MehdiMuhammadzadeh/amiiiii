export default function Validation(values ) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  const confirmPassword_pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    errors.email = "Email is required!";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email didnt match!";
  }

  if (values.password === "") {
    errors.password = "Password is required!";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password pattern is not right!";
  }
  if (values.confirmPassword === "") {
    errors.confirmPassword = "Confirm Password is required!";
  } else if (!confirmPassword_pattern.test(values.confirmPassword)) {
    errors.confirmPassword = "Passwords do not match!";
  }else if(values.password === values.confirmPassword) {
    errors.confirmPassword = ''
    console.log('hi')
  }

  return errors;
}

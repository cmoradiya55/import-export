import { Metadata } from "next";
import LoginComponent from "./LoginComponent";

export const metadata: Metadata = {
  title: "Login - Import Export",
  description: "Learn more about Login Page export business.",
};

const LoginPage = () => {
  return <LoginComponent />;
};

export default LoginPage;

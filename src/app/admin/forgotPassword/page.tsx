import ForgotPasswordComponent from "./ForgotPasswordComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password - Admin",
  description: "Forgot Password - Admin",
};

const ForgotPasswordPage = () => {
  return <ForgotPasswordComponent />;
};

export default ForgotPasswordPage;

import LoginForm from "@/components/LoginForm";
import CookiesService from "@/services/Cookies";

const LoginPage = () => {
  const cookiesService = new CookiesService();

  console.log(cookiesService.get("userCredentials"));

  return (
    <div className="container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;

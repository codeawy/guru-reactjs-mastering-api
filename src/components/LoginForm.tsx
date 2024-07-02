import apiInstance from "@/config/axios";
import CookiesService from "@/services/Cookies";
import { ChangeEvent, FormEvent, useState } from "react";

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    identifier: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    const cookiesService = new CookiesService();
    e.preventDefault();

    // ** Action => I/O Operations
    try {
      const { data } = await apiInstance.post("/auth/local", userCredentials);
      console.log(data);

      // * 1. Store the token in the cookies
      const expireAt = new Date();
      expireAt.setDate(expireAt.getDate() + 1);

      cookiesService.set("userCredentials", JSON.stringify(data), {
        expires: expireAt,
        path: "/",
        secure: true,
      });

      // * 2. Handle the case when the credentials are invalid or the user is not found
      // * 3. Redirect the user to the dashboard page
    } catch (error) {
      console.error(error);
    }
    // setUserCredentials({ identifier: "", password: "" });
  };
  return (
    <div className="bg-background text-primary-foreground p-4 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="identifier" className="block text-sm font-medium">
            Identifier
          </label>
          <input
            type="text"
            id="identifier"
            name="identifier"
            value={userCredentials.identifier}
            onChange={onChange}
            placeholder="Enter your identifier"
            className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userCredentials.password}
            onChange={onChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
          />
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary-foreground">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

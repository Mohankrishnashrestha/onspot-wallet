import React from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";

const { Title, Text } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    console.log("Login Data:", values);
    message.success("Login Successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 ">
      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Left Side - Form Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <Title level={2} className="text-center mb-2 text-gray-800">
              Welcome Back
            </Title>
            <Text className="block text-center text-gray-500 mb-8">
              Please sign in to continue
            </Text>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleLogin}
              autoComplete="off"
            >
              {/* Email */}
              <Form.Item
                label={<Text className="font-medium">Email</Text>}
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Enter a valid email address!" },
                ]}
              >
                <Input
                  placeholder="Email"
                  className="h-10 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </Form.Item>

              {/* Password */}
              <Form.Item
                label={<Text className="font-medium">Password</Text>}
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  className="h-10 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </Form.Item>

              {/* Remember Me + Forgot Password */}
              <div className="flex justify-between items-center mb-5">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Button
                  type="link"
                  className="p-0 text-blue-600"
                  onClick={() => message.info("Forgot password clicked")}
                >
                  Forgot password?
                </Button>
              </div>

              {/* Submit Button */}
              <Button
                type="primary"
                htmlType="submit"
                block
                className="bg-blue-600 hover:bg-blue-700 rounded-md h-10"
              >
                Login
              </Button>
            </Form>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center p-6">
          <img
            src="images/logo.png"
            alt="Login Illustration"
            className="w-4/5 max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

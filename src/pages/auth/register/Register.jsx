import React from "react";
import { Form, Input, Button } from "antd";

const Register = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 px-4 py-12">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-6">
          <img
            src="/images/logo.png"
            alt="logo"
            className="mx-auto w-14 h-14 rounded-full shadow-md hidden sm:block bg-white"
          />
          <h1 className=" text-3xl font-extrabold text-white mt-4">
            Create your Account
          </h1>
          <p className="text-blue-100 mt-2 text-sm">
            Join onSpotWallet — secure, fast and pay without internet.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 sm:p-10">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="John Doe" size="middle" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input placeholder="example@mail.com" size="middle" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password placeholder="••••••••" size="middle" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="••••••••" size="middle" />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input placeholder="+977 98xxxxxxx" size="middle" />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input placeholder="Street, City" size="middle" />
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Create Account
              </Button>
            </Form.Item>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="text-sm text-gray-400">or sign up with</div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:shadow-md"
                type="default"
              >
                Google
              </Button>
              <Button
                className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:shadow-md"
                type="default"
              >
                Apple
              </Button>
            </div>

            <p className="text-xs text-center text-gray-400 mt-3">
              By creating an account you agree to our Terms and Privacy Policy.
            </p>

            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-600 font-medium">
                Sign in
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;

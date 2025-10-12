import React from "react";
import { Form, Input, Button, DatePicker, Select, Switch } from "antd";

const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-4xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div>
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input placeholder="example@mail.com" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password placeholder="••••••••" />
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
                <Input.Password placeholder="••••••••" />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input placeholder="+977 98xxxxxxx" />
              </Form.Item>
            </div>

            {/* Right Section */}
            <div>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input placeholder="Street, City" />
              </Form.Item>

              <Form.Item
                label="Permanent Residence"
                name="permanentResidence"
                rules={[
                  {
                    required: true,
                    message: "Please enter your permanent residence",
                  },
                ]}
              >
                <Input placeholder="City, Country" />
              </Form.Item>

              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: "Please select your date of birth",
                  },
                ]}
              >
                <DatePicker className="w-full" />
              </Form.Item>

              <Form.Item
                label="Preferred Currency"
                name="currency"
                rules={[
                  {
                    required: true,
                    message: "Please select your preferred currency",
                  },
                ]}
              >
                <Select placeholder="Select currency">
                  <Option value="USD">USD - US Dollar</Option>
                  <Option value="NPR">NPR - Nepalese Rupee</Option>
                  <Option value="EUR">EUR - Euro</Option>
                  <Option value="INR">INR - Indian Rupee</Option>
                </Select>
              </Form.Item>

              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-700">Live in same country?</label>
                <Form.Item name="sameCountry" valuePropName="checked" noStyle>
                  <Switch />
                </Form.Item>
              </div>
            </div>
          </div>

          <Form.Item className="mt-8">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-full h-10 font-medium"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;

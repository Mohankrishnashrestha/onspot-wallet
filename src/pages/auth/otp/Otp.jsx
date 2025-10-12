import React, { useState, useRef } from "react";
import { Button, message, Typography } from "antd";

const { Title, Text } = Typography;

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input automatically
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      message.error("Please enter all 6 digits of the OTP!");
      return;
    }
    console.log("Entered OTP:", enteredOtp);
    message.success("OTP Verified Successfully!");
  };

  const handleResend = () => {
    message.info("OTP Resent!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 ">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <Title level={3} className="text-center mb-4">
          OTP Verification
        </Title>
        <Text className="block text-center text-gray-500 mb-6">
          Please enter the 6-digit code sent to your email or phone.
        </Text>

        <div className="flex justify-center space-x-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className="w-10 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <Button
          type="primary"
          block
          onClick={handleVerify}
          className="mb-3 bg-blue-600 hover:bg-blue-700"
        >
          Verify OTP
        </Button>

        <div className="text-center">
          <Text className="text-gray-500">Didn’t receive the code?</Text>
          <Button
            type="link"
            onClick={handleResend}
            className="p-0 ml-1 text-blue-600"
          >
            Resend OTP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Otp;

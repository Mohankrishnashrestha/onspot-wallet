import React from "react";
import { Button, Carousel, Rate } from "antd";
import { Card, Row, Col } from "antd";
import {
  UserOutlined,
  GlobalOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

const data = [
  {
    id: 1,
    image: "/images/1.png",
    title: "Welcome to Onspot Wallet",
  },
  {
    id: 2,
    image: "/images/2.png",
    title: "No Internet, No Problem!",
  },
  {
    id: 3,
    image: "/images/3.png",
    title: "Your Money, Anytime, Anywhere",
  },
];

const statsData = [
  {
    title: "Happy Users",
    value: "25K+",
    icon: <UserOutlined style={{ fontSize: "2rem", color: "#f59e0b" }} />,
  },
  {
    title: "Total Countries",
    value: "15",
    icon: <GlobalOutlined style={{ fontSize: "2rem", color: "#f59e0b" }} />,
  },
  {
    title: "Currency Supports",
    value: "10+",
    icon: (
      <DollarCircleOutlined style={{ fontSize: "2rem", color: "#f59e0b" }} />
    ),
  },
];

const testimonialsData = [
  {
    id: 1,
    name: "Rajan S.",
    feedback:
      "Onspot Wallet is amazing! I can make payments even without internet, and it’s super easy to use.",
    image: "/images/1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sita K.",
    feedback:
      "The best offline digital wallet I’ve ever used! Super fast and reliable.",
    image: "/images/2.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Bikash M.",
    feedback:
      "Using Onspot Wallet has made transactions so easy even when I’m in remote areas.",
    image: "/images/3.png",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div>
      {/* part 1 */}
      <div className="w-full mt-20">
        <Carousel arrows infinite={true} autoplay>
          {data.map((banner) => (
            <div key={banner.id} className="relative">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <h3 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                  {banner.title}
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* part 2 */}
      <div className="bg-[#1B03A3] p-10">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl border-l-4 border-amber-500 pl-2">
            Description
          </h2>

          <div className=" px-4 py-5 flex flex-col md:flex-row gap-8 ">
            <div className="md:w-1/2">
              <img
                src="/images/2.png"
                alt="Onspot Wallet App"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center shadow-lg px-5 py-2 rounded-xl bg-white">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Onspot Wallet
              </h2>
              <p className="text-gray-600 mb-6">
                A revolutionary digital wallet that works **offline**! Make
                payments, manage transactions, and stay in control even without
                an internet connection. Fast, secure, and reliable — anytime,
                anywhere.
              </p>
              <ul className="text-gray-600 mb-6 list-disc list-inside space-y-2">
                <li>Works without internet</li>
                <li>Instant offline transactions</li>
                <li>Secure and easy-to-use</li>
                <li>Track all your spending</li>
              </ul>
              <Button type="primary">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      {/* part 3 */}
      <div className="relative w-full py-20 ">
        <img
          src="https://coolbackgrounds.imgix.net/2SvDjcgyav5C1DOb79JKXl/d3b06db5bb6bdb4ab237f666b5b4980e/compute-ea4c57a4.png?w=3840&q=60&auto=format,compress"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-0 left-10 lg:left-20 pt-2">
          <h2 className="text-white border-l-4 border-amber-500 pl-2 text-3xl ">
            Trusted Users
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <Row gutter={[16, 16]} justify="center">
            {statsData.map((stat, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  className="text-center py-6"
                  style={{ backgroundColor: "#8A79F2" }}
                >
                  <div className="mb-4">{stat.icon}</div>
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                  <p className="text-gray-800">{stat.title}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      {/* part 4 */}
      <div className="relative w-full py-20 bg-gradient-to-r from-[#7B68EE]/20 via-[#6A5ACD]/20 to-[#5C2EF2]/20">
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            What Our Users Say
          </h2>

          <Carousel autoplay arrows>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="flex justify-center px-4 ">
                <div className="bg-white/20 backdrop-blur-lg p-8  text-center shadow-lg  transform transition duration-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#7B68EE]"
                  />
                  <p className="text-gray-100 italic mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <Rate
                    disabled
                    defaultValue={testimonial.rating}
                    className="mt-2 text-amber-400"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* part 5 */}
    </div>
  );
};

export default Home;

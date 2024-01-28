import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className=" flex justify-center items-center h-10 bg-black">
      <small className=" text-white">
        Made with ❤️ by <a href="https://dhananjaysr.vercel.app">@dhananjay</a>
      </small>
    </div>
  );
};

export default Footer;

import axios from "axios";
import { quickLinks, settingMenu } from "../utils/Constants";
import { useEffect, useState } from "react";

const Footer = () => {
  const [country, setCountry] = useState("India");
  const CountryName = () => {
    useEffect(() => {
      const fetchCountry = async () => {
        try {
          const response = await axios.get("https://geolocation.db.com/json/");
          const { contry_name } = response.data;
          setCountry(contry_name || "India");
        } catch (error) {
          console.error("Error fetching country:", error);
        }
      };

      fetchCountry();
    }, []);
  };
  return (
    <div className="bg-[#f2f2f2] ">
      <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0] ">
        <span className="text-[#70767a] text-[15px] leading-none">
          {country}
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
        <div className="flex justify-center">
          {quickLinks.map((menu, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
            >
              {menu}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          {settingMenu.map((menu, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

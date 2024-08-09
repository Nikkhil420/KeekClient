import React, { useContext, useState } from "react";
import { Mycontext } from "../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import CampaignFilterOptions from "../Filter/CampaignFilterOptions";
import Instagram from "../../Assets/instagram.png";
import Facebook from "../../Assets/Facebook.png";
import X from "../../Assets/X.png";
import YT from "../../Assets/yt.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCircleDot } from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const LiveCampaign = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const campaigns = [
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },

    // Add more campaigns here as needed
  ];

  const campaignDetails = {
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
    compensation: ["Product", "Money"], // Array of compensation types
    targetAudience: ["Men", "Women"], // Array of target audiences
    participants: 10, // Number of participants
    location: ["New Delhi, India", "New Delhi, India", "New Delhi, India"],
  };

  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      bgColor: "#FFEDED",
    },
    {
      name: "X",
      icon: X,
      bgColor: "#E3E3E3",
    },
    {
      name: "Facebook",
      icon: Facebook,
      bgColor: "#E4EFFF",
    },
    {
      name: "Youtube",
      icon: YT,
      bgColor: "#FFE4E1",
    },
  ];

  const itemsPerPage = 5;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = campaigns.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(campaigns.length / itemsPerPage);
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedInfluencers = records.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div
      class={` flex relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="bg-white w-full">
        <div className="flex w-full justify-between items-center p-4 bg-white border-border">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Manage Campaign
            </h1>
            <p className="text-muted-foreground text-sm">
              Easily create new campaign, keep track of live & past campaigns.
            </p>
          </div>
          <Link to={""}>
            <button class="bg-[#06F] h-[40px] w-[175px] text-white px-4 py-2.5 text-primary-foreground flex items-center hover:bg-primary/80  rounded-lg ">
              <span class="mr-2 text-3xl">+</span> Add Campaign
            </button>
          </Link>
        </div>
        <div className="flex border-b border-border">
          <div className="flex space-x-4">
            <Link to="/CampaignManagement">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/CampaignManagement"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Live campaigns
              </button>
            </Link>
            <Link to="/PastCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/PastCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Past campaigns
              </button>
            </Link>
            <Link to="/DraftCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/DraftCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Drafts
              </button>
            </Link>
          </div>
          <div className="relative">
            <span className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-destructive rounded-full w-2.5 h-2.5"></span>
          </div>
        </div>

        {/* searchbar */}
        <div className="mr-4 ml-4 mt-[28px] ">
          <div
            className={` bg-[#F5F5F5] h-[60px] flex items-center rounded-lg justify-between bg-background `}
          >
            <div className="relative flex items-center h-[35px] ml-[18px] w-8/12">
              <CiSearch className="absolute left-4 text-gray-500 top-1/2 transform -translate-y-1/2 size-4" />
              <input
                type="text"
                placeholder="Search Campaigns"
                className="w-full bg-white py-1 px-10 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex items-center mr-[18px] h-[40px] text-gray-500 cursor-pointer justify-between space-x-2">
              <button
                onClick={toggleModal}
                className="flex items-center text-sm space-x-2 bg-white text-gray-500 px-4 py-2 rounded-md"
              >
                <LuFilter className="mr-2 text-base text-gray-500" /> Filter
              </button>

              {isModalVisible && (
                <div className="absolute top-52 right-10 mt-4 z-50">
                  <CampaignFilterOptions
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-4 text-start items-start md:items-center justify-between">
          <table className="w-full ">
            <thead>
              <tr className="border-b-2 h-[91px]">
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  CAMPAIGN ID
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  CAMPAIGN NAME
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  STATUS
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  PLATFORM
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  START DATE
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  END DATE
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((campaign, index) => (
                <React.Fragment key={index}>
                  <tr className="border-b-2 h-[91px]">
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.id}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.name}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal p-2">
                      <span
                        className={`font-body bg-[#E3EEFF] w-[60px] text-[14px] p-1  items-center flex gap-1 rounded-full text-black `}
                      >
                        <FaCircleDot className="w-[10px] ml-1 h-[14px] text-[#0066FF]" />{" "}
                        {campaign.status}
                      </span>
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.platform.length > 1
                        ? `${campaign.platform[0]} +${
                            campaign.platform.length - 1
                          }`
                        : campaign.platform[0]}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.startDate}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.endDate}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      <button className="text-[#000000] flex items-center px-6 py-2  font-body text-[14px] font-normal border border-[#B6B6B6] rounded-lg cursor-pointer">
                        Edit{" "}
                      </button>
                    </td>
                    <td className="border-zinc-300 p-2">
                      <button
                        className="text-[#0066FF] flex items-center font-body text-[14px] font-normal cursor-pointer"
                        onClick={() => toggleDetails(index)}
                      >
                        View more{" "}
                        {openIndex === index ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </button>
                    </td>
                  </tr>
                  {openIndex === index && (
                    <tr className="border-b-2 w-full bg-[#F6F6F6]">
                      <td colSpan="8">
                        <div className="flex flex-col md:flex-row rounded-lg p-2 overflow-hidden">
                          <div className="p-2 mb-4 space-y-4 w-full md:w-1/2">
                            <div>
                              <h2 className="font-body text-[#797A7B] text-[12px] font-normal">
                                ABOUT CAMPAIGN
                              </h2>
                              <p className="font-body text-[16px] font-normal">
                                {campaignDetails.about}
                              </p>
                            </div>
                            <div className="mt-2">
                              <h3 className="font-body text-[#797A7B] text-[12px] font-normal">
                                PLATFORMS:
                              </h3>
                              <div className="flex gap-2 flex-wrap">
                                {platforms.map((platform, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center rounded-md px-1"
                                    style={{
                                      backgroundColor: platform.bgColor,
                                    }}
                                  >
                                    <img
                                      src={platform.icon}
                                      alt={platform.name}
                                    />
                                    <span className="px-2 py-1 rounded-full font-body text-[16px] font-normal">
                                      {platform.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row gap-3 md:w-1/3">
                            <div className="space-y-10 ml-4">
                            <div>
                                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                                  PARTICIPANTS:
                                </span>
                                <p className="font-body text-xl font-normal">
                                  <span className="text-[#0062F5]">
                                    {campaignDetails.participants}/
                                  </span>
                                  100
                                </p>
                              </div>
                              <div>
                                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                                  COMPENSATION:
                                </span>
                                <p className="font-body text-[16px] font-normal">
                                <p className="font-body text-[16px] font-normal">
  {campaignDetails.compensation.join(', ')}
</p>
                                </p>
                              </div>
                            
                            </div>
                            <div className="space-y-10 ml-16">
                             
                              <div>
                                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                                  LOCATION:
                                </span>
                                {campaignDetails.location.map((loc, index) => (
                                  <p
                                    key={index}
                                    className="font-body text-[16px] font-normal"
                                  >
                                    {loc}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 p-3 space-y-2 border-l-2 border-[#D2D3D3]">
                            <Link to={"/manageCampaign"}>
                              <div>
                                <button className="text-[#0066FF] font-body text-[16px] font-normal">
                                  Manage campaign
                                </button>
                              </div>
                            </Link>
                            <div>
                              <button className="text-[#363939] font-body text-[16px] font-normal">
                                Edit campaign
                              </button>
                            </div>
                            <div>
                              <button className="text-[#FA6A5E] font-body text-[16px] font-normal">
                                Stop campaign
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-auto flex justify-end p-8">
            <div className="flex items-center gap-1 text-sm font-normal">
              <button
                onClick={handlePrevClick}
                disabled={currentPage === 1}
                className={`p-2 ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}
              >
                <FaAngleLeft />
              </button>
              <span className="text-[#1f2223]">
                Page {currentPage}
              </span>
              <span className="text-[#797a7b] leading-tight">
                of {totalPages}
              </span>
              <button
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
                className={`p-2 ${currentPage === totalPages ? 'text-gray-400' : 'text-black'}`}
              >
                <FaAngleRight />
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LiveCampaign;

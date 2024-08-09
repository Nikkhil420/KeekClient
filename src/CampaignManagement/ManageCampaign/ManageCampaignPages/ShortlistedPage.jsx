import React, { useContext, useState } from "react";
import Instagram from "../../../Assets/instagram.png";
import Facebook from "../../../Assets/Facebook.png";
import X from "../../../Assets/X.png";
import YT from "../../../Assets/yt.png";
import { Link, useLocation } from "react-router-dom";
import { Mycontext } from "../../../utils/Context";
import ReadMore from "../../Components/ReadMoreComponent";
import { MdChevronRight } from "react-icons/md";
import { LuArrowUpRight, LuFilter } from "react-icons/lu";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const ShortlistedPage = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const currentPath = location.pathname;

  const campaignDetails = {
    about:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam voluptatum nobis id rerum. Sunt, neque. Explicabo cupiditate doloribus iste nesciunt possimus aperiam vero odit velit. Dolores, nisi perferendis eaque libero omnis repellendus! Odit ipsam in impedit aut obcaecati, et fugiat doloribus nam vitae voluptatem eveniet ipsa sunt eius soluta officiis delectus sed reiciendis maxime quas. Aperiam inventore ipsa illum animi ducimus sit, quas vitae! consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const influencers = [
    {
      name: "Gautam Sachdeva",
      niche: ["Travel","Fashion"],
      platforms: {
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "Youtube",
        linkedin: "LinkedIn",
      },
    },
    {
      name: "Gautam Sachdeva",
      niche: ["Travel", "Fashion","Clothes","foods"],
      platforms: {
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "Youtube",
        linkedin: "LinkedIn",
      },
    },
    {
      name: "Gautam Sachdeva",
      niche: ["Travel", "Fashion","Clothes","foods","hjhfjh","hjhf"],
      platforms: {
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "Youtube",
        linkedin: "LinkedIn",
      },
    },
    {
      name: "Gautam Sachdeva",
      niche: ["Travel", "Fashion","Clothes","foods","hhg"],
      platforms: {
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "Youtube",
        linkedin: "LinkedIn",
      },
    },
    {
      name: "Gautam Sachdeva",
      niche: ["Travel", "Fashion","Clothes","foods","ythhfj","hjkrj"],
      platforms: {
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "Youtube",
        linkedin: "LinkedIn",
      },
    },

    // Add more influencers here as needed
  ];

  const itemsPerPage = 4; // Number of influencers to display per page
  const totalPages = Math.ceil(influencers.length / itemsPerPage);

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
  const selectedInfluencers = influencers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div
      class={` flex relative  ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="flex flex-col">
        <div className="flex flex-row p-6 items-center  border-b-2 gap-[3.14px]">
          <Link
            to="/CampaignManagement"
            className={`text-[16px] font-normal flex flex-row ${
              currentPath === "/CampaignManagement"
                ? "text-blue-700"
                : "text-black"
            }`}
          >
            Campaign Management
            <MdChevronRight className="m-1 items-center" size={"15.7px"} />
          </Link>
          <Link className={`text-[16px] font-semibold text-[#2463eb] gap-x-2`}>
            Manage Campaign
          </Link>
        </div>

        <div className="flex flex-col md:flex-row rounded-lg p-2 overflow-hidden">
          <div className="p-2 space-y-4 h-auto w-full md:w-1/2">
            <div>
              <h2 className="font-body text-[#797A7B] text-[12px] font-normal">
                ABOUT CAMPAIGN
              </h2>
              <p className="font-body text-[16px] font-normal">
                <ReadMore text={campaignDetails.about} maxLength={100} />
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
                    style={{ backgroundColor: platform.bgColor }}
                  >
                    <img src={platform.icon} alt={platform.name} />
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
                    {campaignDetails.participants} {""}/
                  </span>{" "}
                  100
                </p>
              </div>

              <div>
                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                  COMPENSATION:
                </span>
                <p className="font-body text-[16px] font-normal">
                  {campaignDetails.compensation.join(", ")}
                </p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="ml-16">
                <span className="font-body text-[#797A7B] text-xs font-normal">
                  LOCATION:
                </span>
                {campaignDetails.location.map((loc, index) => (
                  <p key={index} className="font-body text-[16px] font-normal">
                    {loc}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            className="mt-6 pl-6 flex items-center justify-center border-l-2 border-[#D2D3D3]"
            style={{ height: "100%" }}
          >
            <div>
              <button className="text-[#FA6A5E] font-body text-[16px] font-normal">
                Stop campaign
              </button>
            </div>
          </div>
        </div>

        <div className="flex border-b border-border">
          <div className="flex space-x-4">
            <Link to="/manageCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Interest Received
              </button>
            </Link>
            <Link to="/Shortlisted">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/Shortlisted"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Shortlisted
              </button>
            </Link>
            <Link to="/Approved">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/Approved"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Approved
              </button>
            </Link>
            <Link to="/Rejected">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/Rejected"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Rejected
              </button>
            </Link>
            <Link to="/AIRecommended">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/AIRecommended"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                AI Recommended
              </button>
            </Link>
          </div>
          <div className="relative">
            <span className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-destructive rounded-full w-2.5 h-2.5"></span>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex text-[12px] font-sans font-semibold text-[#797a7b] ml-4">
            <div className="w-[185px]">INFLUENCER NAME</div>
            <div className="w-[230px]">NICHE</div>
            <div className="w-[135px]">INSTAGRAM</div>
            <div className="w-[125px]">FACEBOOK</div>
            <div className="w-[115px]">YOUTUBE</div>
            <div className="">LINKEDIN</div>
          </div>
          <hr className="border-t border-[#d2d3d3] my-3" />

          {selectedInfluencers.map((influencer, index) => (
            <div
              key={index}
              className="h-[99px] py-8 border-b border-[#d2d3d3] flex justify-start items-center ml-4 text-nowrap gap-[69px]"
            >
              <div className="flex justify-start items-center gap-[34px]">
                <div className="flex justify-start items-center gap-[31px]">
                  <div className="flex justify-start items-center gap-[37px]">
                    <div className="w-[138px] h-[22px] text-[#191d23] text-base font-normal font-['Open Sans']">
                      {influencer.name}
                    </div>
                    <div className="text-[#191d23] text-base font-normal w-[210px] text-nowrap font-['Open Sans']">
                      {influencer.niche[0]} <span className={`${influencer.niche[1] ? "inline-block": "hidden" }`}>,</span> {influencer.niche[1] && influencer.niche[1]} <span className={`${influencer.niche[2] ? "inline-block": "hidden" }`}>,</span> <span className={`${influencer.niche.length > 2 ? "inline-block": "hidden" }`}>+</span> {
                        <span className={`${influencer.niche.length <= 2 && 'hidden'} `}>{influencer.niche.length - 2}</span>
                      }
                    </div>
                  </div>
                  <button className="flex justify-start items-center">
                    <a href='https://www.instagram.com/' className="text-[#191d23] flex text-base font-normal font-['Open Sans'] w-[100px]">
                      {influencer.platforms.instagram}
                      <LuArrowUpRight className="ml-1 mt-1 text-[#0066ff]" />
                    </a>
                  </button>
                </div>
                <button className="flex justify-start items-center">
                  <a href="https://www.facebook.com/login/" className="text-[#191d23] flex text-base font-normal font-['Open Sans']">
                    {influencer.platforms.facebook}
                    <LuArrowUpRight className="ml-1 mt-1 text-[#0066ff]" />
                  </a>
                </button>
                <button className="flex justify-start items-center">
                  <a href="https://www.youtube.com/" className="text-[#191d23] text-base flex font-normal font-['Open Sans']">
                    {influencer.platforms.youtube}
                    <LuArrowUpRight className="ml-1 mt-1 text-[#0066ff]" />
                  </a>
                </button>
                <button className="flex justify-start items-center">
                  <a href="https://www.linkedin.com/" className="text-[#191d23] text-base font-normal flex font-['Open Sans']">
                    {influencer.platforms.linkedin}
                    <LuArrowUpRight className="ml-1 mt-1 text-[#0066ff]" />
                  </a>
                </button>
              </div>
              <div className="font-semibold font-['Open Sans']">
                <button className="text-[#e32828] relative w-[10px]">
                  Reject
                </button>
              </div>
              <button>
                <div className="w-[100px] h-[35px] px-4 bg-[#09bf4c] rounded-[10px] border border-[#09bf4c] justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-sm font-semibold font-['Open Sans'] leading-[14px]">
                    Approve
                  </div>
                </div>
              </button>
            </div>
          ))}
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
    </div>
  );
};

export default ShortlistedPage;

import React, { useContext, useState } from 'react'
import { Mycontext } from '../../utils/Context';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import CampaignFilterOptions from "../Filter/CampaignFilterOptions";
import { FaCircleDot } from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";



const DraftCampaign = () => {

  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const campaigns = [
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24"
    }, {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    // Add more campaigns here as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  
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
      class={` flex relative ${!expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
        }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="bg-white w-full">
        <div class="flex w-full justify-between items-center p-4 bg-white border-border">
          <div>
            <h1 class="text-2xl font-bold text-foreground">Manage Campaign</h1>
            <p class="text-muted-foreground text-sm">
              Easily create new campaign, keep track of live & past campaigns.
            </p>
          </div>
          <Link to={""}>
            <button class="bg-[#06F] h-[40px] w-[175px] text-white px-4 py-2.5 text-primary-foreground flex items-center hover:bg-primary/80  rounded-lg ">
              <span class="mr-2 text-3xl">+</span> Add Campaign
            </button>
          </Link>

        </div>
        <div class="flex border-b border-border">
          <div className="flex space-x-4">
            <Link to="/CampaignManagement">
              <button
                className={`py-2 px-4 text-primary  ${location.pathname === '/CampaignManagement'
                    ? ' font-semibold border-b-2 border-blue-500'
                    : ''
                  }`}
              >
                Live campaigns
              </button>
            </Link>
            <Link to="/PastCampaign">
              <button
                className={`py-2 px-4 ${location.pathname === '/PastCampaign'
                    ? 'text-primary border-b-2 border-blue-500 font-semibold'
                    : 'text-muted hover:text-muted-foreground'
                  }`}
              >
                Past campaigns
              </button>
            </Link>
            <Link to="/DraftCampaign">
              <button
                className={`py-2 px-4 ${location.pathname === '/DraftCampaign'
                    ? 'text-primary border-b-2 border-blue-500 font-semibold'
                    : 'text-muted hover:text-muted-foreground'
                  }`}
              >
                Drafts
              </button>
            </Link>
          </div>
          <div class="relative">
            <span class="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-destructive rounded-full w-2.5 h-2.5"></span>
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
              <tr className="border-b-2 h-[91px]  ">
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">CAMPAIGN ID</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">CAMPAIGN NAME</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">STATUS</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">PLATFORM</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">START DATE</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">END DATE</th>
                {/* <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">ACTION</th> */}
              </tr>
            </thead>
            <tbody >
              {records.map((campaign, index) => (
                <tr key={index} className="border-b-2 h-[91px] ">
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.id}</td>
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.name}</td>
                  <td className="border-zinc-300 text-[16px] font-normal p-2">
                  <span className={`font-body bg-[#FFEAB0] w-[68px] text-[14px] p-1  items-center flex gap-1 rounded-full text-black `}>
                        <FaCircleDot className="w-[10px] ml-1 h-[14px] text-[#FACC15]" /> {campaign.status}
                      </span>
                  </td>
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
  {campaign.platform.length > 1 
    ? `${campaign.platform[0]} +${campaign.platform.length - 1}` 
    : campaign.platform[0]}
</td>
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.startDate}</td>
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.endDate}</td>
                  <td className="border-zinc-300 p-2">
                    <button className="text-[#000000] flex items-center px-8 py-2 gap-2 font-body text-[14px] font-normal border border-[#B6B6B6] rounded-lg cursor-pointer">Edit </button>
                  </td>
                </tr>
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

  )
}

export default DraftCampaign
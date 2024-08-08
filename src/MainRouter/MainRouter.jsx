import React from "react";
import { Route, Routes } from "react-router-dom";
import LiveCampaign from "../CampaignManagement/LiveCampaign/LiveCampaign";
import PastCampaign from "../CampaignManagement/PastCampaign/PastCampaign";
import DraftCampaign from "../CampaignManagement/DraftCampaign/DraftCampaign";
import ManageCampaign from "../CampaignManagement/ManageCampaign/ManageCampaign";
import ShortlistedPage from "../CampaignManagement/ManageCampaign/ManageCampaignPages/ShortlistedPage";
import ApprovedPage from "../CampaignManagement/ManageCampaign/ManageCampaignPages/ApprovedPage";
import RejectedPage from "../CampaignManagement/ManageCampaign/ManageCampaignPages/RejectedPage";
import AIRecommendPage from "../CampaignManagement/ManageCampaign/ManageCampaignPages/AIRecommendPage";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Di
            </div>
          }
        />

        <Route
          path="/discoverInfluencers"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              discoverInfluencers
            </div>
          }
        />
        <Route path="/CampaignManagement" element={<LiveCampaign />} />

        <Route
          path="/payments"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Payments
            </div>
          }
        />
        <Route
          path="/viewFavourites"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              viewFavourites
            </div>
          }
        />
        
        <Route path="/manageCampaign" element={<ManageCampaign />}/>
        
        <Route path="/Shortlisted" element={<ShortlistedPage />} />

        <Route path="/Approved" element={<ApprovedPage />} />
        <Route path="/Rejected" element={<RejectedPage />} />

        <Route path="/AIRecommended" element={<AIRecommendPage />} />

        <Route
          path="/influencersBase"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              influencersBase
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Settings
            </div>
          }
        />
        <Route
          path="/liveSupport"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Live Support
            </div>
          }
        />

        <Route path="/PastCampaign" element={<PastCampaign />} />
        <Route path="/DraftCampaign" element={<DraftCampaign />} />

       
      </Routes>
    </>
  );
};

export default MainRouter;

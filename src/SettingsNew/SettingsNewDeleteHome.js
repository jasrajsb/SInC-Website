import React from "react";
import "./SettingsNewDeleteHome.css";
import DeleteSidebar from "./SettingsNewDeleteSidebar";
import DeleteMainbox from "./SettingsNewDeleteMainbox";

function DeleteHome() {
  return (
    <div className="deletehome">
      <DeleteSidebar />
      <DeleteMainbox />
    </div>
  );
}

export default DeleteHome;
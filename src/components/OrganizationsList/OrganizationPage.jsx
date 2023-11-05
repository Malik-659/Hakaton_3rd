import React from "react";
import OrganizationsList from "./OrganizationsList";
import OrganizationManager from "./OrganizationManager";

const OrganizationPage = () => {
  return (
    <div>
      <OrganizationManager />
      <OrganizationsList />
    </div>
  );
};

export default OrganizationPage;

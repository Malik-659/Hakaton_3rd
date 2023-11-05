import React from "react";
import OrganizationSearch from "./OrganizationSearch";
import OrganizationSort from "./OrganizationSort";

const OrganizationManager = () => {
  return (
    <div className="w-1/2 mx-auto">
      <OrganizationSearch />
      <OrganizationSort />
    </div>
  );
};

export default OrganizationManager;

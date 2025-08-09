import React from "react";

const Education = ({ expanded }) => (
  <div>
    <h2 className="text-2xl font-heading font-bold text-accent1 mb-2">Education</h2>
    <p className="text-textSecondary">M.S. Computer Engineering, GWU</p>
    {expanded && (
      <p className="text-textSecondary mt-2">2019 – 2021</p>
    )}
  </div>
);

export default Education;

import React from "react";

const ProfileCard = () => (
  <div className="flex flex-col items-center">
    <img
      src="https://via.placeholder.com/150"
      alt="Profile"
      className="w-32 h-32 rounded-full mb-4 object-cover"
    />
    <h2 className="text-xl font-heading font-semibold">Abhishek Saxena</h2>
  </div>
);

export default ProfileCard;

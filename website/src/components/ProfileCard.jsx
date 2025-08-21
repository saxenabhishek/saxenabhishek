import imgurl from "./../../images/profile-edited.png";

const ProfileCard = () => (
  <img
    src={imgurl}
    alt="Profile"
    className="rounded-lg object-cover bg-blue-50 h-full dark:bg-green-50 transition-colors"
  />
);

export default ProfileCard;

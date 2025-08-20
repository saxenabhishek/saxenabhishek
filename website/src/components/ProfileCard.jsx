import imgurl from "./../../images/profile-edited.png";

const ProfileCard = () => (
  <img
    src={imgurl}
    alt="Profile"
    className="rounded-lg object-cover bg-orange-50"
  />
);

export default ProfileCard;

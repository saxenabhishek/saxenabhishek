import imgurl from "../../images/Profile-edited.webp";

const ProfileCard = () => (
  <img
    src={imgurl}
    alt="Profile picture"
    fetchPriority="high"
    className="rounded-lg object-cover bg-blue-50 dark:bg-green-50 transition-colors"
  />
);

export default ProfileCard;

import { IMG_CDN_URL,RES_DATA_URL } from "../utils/constants";
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-[200] rounded-sm p-2 bg-gray-100 mx-2 mb-4">
      <img className="h-[220] object-cover" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-1">{name}</h2>
      <h3 className="text-xs">{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
export default RestrauntCard;
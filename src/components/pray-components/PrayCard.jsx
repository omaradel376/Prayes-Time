/* -------------------------------------------------------------------------- */
/*                             Pray Card Component                            */
/* -------------------------------------------------------------------------- */

const PrayCard = ({name,time,image}) => {
  
  return (
    <div className="" title={name}>
      <div className="relative flex flex-col rounded-xl bg-white">
        <div className="relative m-0 overflow-hidden rounded">
          <img className="h-[220px] w-full object-cover"
            src={image} alt={name}
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">{name}</h4>
          <h4 className="mt-3 block text-3xl font-bold leading-relaxed text-gray-700 ">
          {time}
            </h4>
        </div>
      </div>
    </div>
  );
};

export default PrayCard;

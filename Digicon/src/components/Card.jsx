import { Link } from "react-router-dom";

const Card = ({service}) => {
  return (
    <div className="w-[306px] h-[400px] shadow-lg flex flex-col rounded-md">
      {/* Image Section */}
      <div className="w-full h-[40%] overflow-hidden">
        <img className="w-full h-full object-cover" src={service[0]} alt="" />
      </div>

      {/* Content Section */}
      <div className="p-2 h-[60%] flex flex-col">
        <h1 className="text-xl font-semibold">{service[1]}</h1>
        <p className="flex-grow">{service[2]}</p>
        <Link className="text-blue-600 font-semibold" to="/">
          <p>Read More</p>
        </Link>
      </div>
    </div>
  );
}

export default Card
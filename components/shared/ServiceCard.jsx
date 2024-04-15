import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className="border py-5 px-3 shadow-md w-[320px] md:w-[350px] rounded-md h-[220px]  flex flex-col items-center justify-around">
      <Image
        src={service.icon}
        alt="image"
        className="lg:h-[28px] h-[25px] w-[25px] lg:w-[28px] object-cover "
      />
      <h1 className="text-lg my-2 font-semibold text-center w-3/4 mx-auto">
        {service.title}
      </h1>
      <p className="text-sm text-center">{service.body}</p>
    </div>
  );
};

export default ServiceCard;

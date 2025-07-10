import Pentagon from "../icons/Pentagon";

function Services() {
  const Services = [
    {
      title: "All Freight Services",
      description:
        "At our auto service garage, we are fully appreciate how difficult occur it is for people to find.",
      img: "https://freightexpress.qodeinteractive.com/wp-content/uploads/2024/06/h3-img-10.png",
    },
    {
      title: "Drone Services",
      description:
        "There are unique and often they differ from one industry to the other. Our logistics expertie..",
      img: "https://freightexpress.qodeinteractive.com/wp-content/uploads/2024/04/h2-blog-list-img-3.jpg",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center text-center">
        <span className="text-l font-semibold text-lime-400">
          Real Solution, Real Fast!
        </span>
        <span className="text-xl mt-2 font-bold text-gray-900">
          BEST GLOBAL LOGISTICS SOLUTIONS
        </span>
      </div>

      <div className="w-full flex flex-wrap my-5 mx-20">
        {Services.map((service, index) => (
          <div
            className="mx-4 my-4 shadow-lg flex flex-row"
            style={{ width: "45%" }}
            key={index}
          >
            <div className="relative h-50 w-50 overflow-hidden">
              <img
                src={service.img}
                className="h-50 w-50 object-cover"
                alt="service"
              />

              <div className="absolute bottom-0 top-41 left-27 w-10 h-10 bg-lime-200 bg-opacity-50 text-white flex items-center justify-center text-sm rounded-full">
                <Pentagon />
              </div>
            </div>

            <div className="h-42 flex flex-col my-3 mx-4">
              <span className="text-xl mt-2 font-bold text-gray-900">
                {service.title}
              </span>
              <p className="text-m mt-4 text-gray-500">{service.description}</p>
              <span className="flex flex-row mt-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-circle-arrow-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
                </svg>
                <p className="text-m ml-2 text-gray-500">Read More</p>
              </span>
            </div>
          </div>
        ))}

        <div
          className="flex flex-row justify-between items-center"
          style={{ width: "90%" }}
        >
          <span className="text-sm mt-2 font-normal text-gray-700">
            Logistic & Transport Solutions Saves Time.{" "}
            <span className="font-semibold">Finds Your Solution</span>
          </span>

          <div className="flex flex-row items-center">
            {Services.map((s, index) => (
              <span
                key={index}
                className="w-3 h-3 rounded-full bg-gray-400 mx-1"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

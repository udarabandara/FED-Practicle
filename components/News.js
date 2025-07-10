import React from "react";

function News() {
  const newsArticles = [
    {
      title: "Global Shipping Faces New Challenges in 2025",
      author: "Admin",
      comments: 12,
      isImportant: true,
      date: "26",
      month: "May",
      img: "https://logi.wpengine.com/wp-content/uploads/2024/07/Main-Footer-Gallery-4.jpg",
      description:
        "The logistics industry is adapting to rising fuel costs, environmental regulations, and increased demand for faster delivery. Here's what it means for global shipping networks.",
    },
    {
      title: "How AI is Revolutionizing Logistics Operations",
      author: "Admin",
      comments: 8,
      isImportant: false,
      date: "22",
      month: "May",
      img: "https://logi.wpengine.com/wp-content/uploads/2024/07/Main-Footer-Gallery-2.jpg",
      description:
        "From route optimization to automated warehouses, AI is reshaping the logistics landscape and driving efficiency across the supply chain.",
    },
    {
      title: "Top 5 Trends in Freight and Transportation",
      author: "Admin",
      comments: 5,
      isImportant: false,
      date: "20",
      month: "May",
      img: "https://logi.wpengine.com/wp-content/uploads/2024/07/Main-Footer-Gallery-9.jpg",
      description:
        "Discover the emerging trends that are setting the pace for freight forwarding, including digital tracking, green shipping, and blockchain integration.",
    },
    {
      title: "Why Last-Mile Delivery Is Becoming a Priority",
      author: "Admin",
      comments: 20,
      isImportant: false,
      date: "15",
      month: "May",
      img: "https://logi.wpengine.com/wp-content/uploads/2024/07/Main-Footer-Gallery-3.jpg",
      description:
        "Customer expectations have changed. Logistics companies are now focusing more on last-mile delivery to enhance speed and satisfaction.",
    },
  ];

  return (
    <div className="w-full mb-16">
      <div className="w-full flex flex-col justify-center text-center">
        <span className="text-xl mt-2 font-bold text-gray-900">
          LATEST NEWS
        </span>
        <div className="flex flex-row items-center justify-center">
          <span className="w-3 h-3 bg-cyan-300"></span>
          <span className="text-sm ml-2 font-bold text-gray-400">
            INTEGER CONGUE ELIT
          </span>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-8 px-20">
        {newsArticles.map((item, index) => (
          <div
            className={`mx-4 my-4 shadow-lg flex flex-row ${
              item.isImportant ? "bg-cyan-300 text-white" : "bg-white"
            }`}
            style={{ width: "47%" }}
            key={index}
          >
            <div className="relative h-50 w-120 overflow-hidden">
              <div
                className={`absolute left-0 w-12 h-12 text-white bg-opacity-50  flex items-center justify-center text-sm ${
                  item.isImportant ? "bg-cyan-300/75" : "bg-gray-500/75"
                }`}
              >
                <div className="flex flex-col items-center leading-tight">
                  <span className="text-xl">{item.date}</span>
                  <span>{item.month}</span>
                </div>
              </div>
              <img
                src={item.img}
                className="h-full w-full object-cover"
                alt="news"
              />
            </div>

            <div className="h-42 flex flex-col my-3 mx-4">
              <span
                className={`text-l mt-2 font-semibold  ${
                  item.isImportant ? "text-white" : "bg-text-gray-900"
                }`}
              >
                {item.title}
              </span>
              <div className="flex flex-row gap-5 items-center mt-2">
                <p
                  className={`text-xs ${
                    item.isImportant ? "text-white" : "bg-text-gray-500"
                  }`}
                >
                  {item.author}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`icon icon-tabler icons-tabler-outline ${
                    item.isImportant ? "text-white" : "text-cyan-300"
                  } icon-tabler-messages `}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>
                <p
                  className={`text-xs ${
                    item.isImportant ? "text-white" : "bg-text-gray-500"
                  }`}
                >
                  {item.comments}
                </p>
              </div>
              <p
                className={`text-m mt-4 ${
                  item.isImportant ? "text-white" : "bg-text-gray-500"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;

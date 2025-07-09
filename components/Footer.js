import SocialMedia from "../icons/SocialMedia";

function Footer() {
  const items = [
    "Support Forums",
    "Communications",
    "FAQS",
    "Privacy Ploicy",
    "Rules $ Condition",
    "Contact Us",
  ];

  const imagePaths = [
    "https://freightexpress.qodeinteractive.com/wp-content/uploads/2024/05/land-img-6.png",
    "https://freightexpress.qodeinteractive.com/wp-content/uploads/2024/04/h2-slider-layer-1.png",
    "https://freightexpress.qodeinteractive.com/wp-content/uploads/2024/04/h5-blog-list-img-2.jpg",
    "https://freightexpress.qodeinteractive.com/wp-content/uploads/2024/06/h3-img-10.png",
    "https://freightexpress.qodeinteractive.com/wp-content/uploads/2024/04/h2-blog-list-img-1.jpg",
    "https://freightexpress.qodeinteractive.com/wp-content/uploads/2024/04/h2-blog-list-img-3.jpg",
  ];

  return (
    <div>
      <footer className="w-full flex p-4 px-20 flex-col items-center justify-center bg-slate-500 text-sm text-gray-50">
        <div className="w-full flex mt-2 mb-12">
          <div className="w-1/2 flex flex-col">
            <span className="text-2xl font-semibold"> Weekly NewsLetter</span>
            <span className="text-m">
              There are many valations of passages of lorem ipsum available
            </span>
          </div>
          <div className="w-1/2 flex flex-row">
            <div className="mb-5 w-1/2">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter you email"
                required
              />
            </div>
            <button
              type="submit"
              className="h-11 ml-2 text-white bg-amber-400 hover:bg-amber-300 focus:ring-1 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="w-full flex mt-4">
          <div className="w-1/4 flex flex-col px-4">
            <span className="text-2xl font-semibold"> About Us</span>
            <hr className="h-px w-12 my-8 bg-amber-400 border-0" />
            <span className="text-m">
              Lorem Ipsum is simply dummy text of the printing
            </span>
          </div>

          <div className="w-1/4 flex flex-col px-4">
            <span className="text-2xl font-semibold"> Latest News</span>
            <hr className="h-px w-12 my-8 bg-amber-400 border-0" />
            <span className="flex flex-col">
              <span className="text-m flex">
                <span className="mr-4">{">"}</span> Lorem Ipsum is simply dummy
                text of the printing
              </span>
              <span className="text-xs ml-5">5 Minutes Ago</span>
            </span>

            <span className="flex flex-col mt-4">
              <span className="text-m flex">
                <span className="mr-4">{">"}</span> Lorem Ipsum is simply dummy
                text of the printing
              </span>
              <span className="text-xs ml-5">5 Minutes Ago</span>
            </span>
          </div>

          <div className="w-1/4 flex flex-col px-4">
            {" "}
            <span className="text-2xl font-semibold"> Customer Service</span>
            <hr className="h-px w-12 my-8 bg-amber-400 border-0" />
            <ul className="list-disc pl-4">
              {items.map((item, index) => (
                <li key={index} className="mb-1 text-gray-50 text-m">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/4 flex flex-col px-4">
            {" "}
            <span className="text-2xl font-semibold"> Customer Service </span>
            <hr className="h-px w-12 my-8 bg-amber-400 border-0" />
            <div className="flex flex-wrap">
              {imagePaths.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-1/3 p-1 object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between mt-6 mb-4">
          <span> Copywright © 2025 All rights reserved. Stite by Xiteb</span>
          <div> <SocialMedia /> </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

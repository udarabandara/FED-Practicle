function Testimonials() {
  const Facts = [
    "readable content of a page when looking at its layout",
    "use Lorem Ipsum as their default model text",
    "uncover many web sites still in their infancy",
    "Lorem Ipsum is not simply random text",
  ];
  return (
    <div className="w-full flex px-20">
      <div className="w-1/2 flex flex-col py-8">
        <span className="text-xl font-bold text-gray-900">
          {" "}
          TRUSTED CLIENTS
        </span>
        <span className="text-l font-semibold text-gray-400">
          Lorem Ipsum is simply dummy text of the printing{" "}
        </span>

        <div className="bg-gray-200 mx-8 mt-6">
          <div className="absolute left-26 w-6 h-8 bg-red-700 bg-opacity-50 text-white flex items-center justify-center text-sm">
            "
          </div>
          <p className="text-xs px-8 ml-3 py-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex flex-col mt-4 items-end mr-8">
          <p className="text-m font-bold text-gray-900">JOHN DOE</p>
          <p className="text-xs font-normal text-gray-400">Managing Director</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col py-8">
        <span className="text-xl font-bold text-gray-900"> WHY CHOOSE US</span>
        <span className="text-l font-semibold text-gray-400">
          Lorem Ipsum is simply dummy text of the printing{" "}
        </span>

        <div className="mt-6">
          <hr className="h-px w-full bg-gray-200 border-0" />

          {Facts.map((Fact, index) => (
            <div key={index}>
              <div className="flex justify-between py-3 px-1">
                <p className="text-gray-400">{Fact} </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                    fill="currentColor"
                    strokeWidth="0"
                  />
                </svg>
              </div>

              <hr className="h-px w-full bg-gray-200 border-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

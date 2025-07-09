function LeftArrow() {
  return (
    <div>
      <svg
        className="w-6 h-6 text-gray-50 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        ></path>
      </svg>
    </div>
  );
}

export default LeftArrow;

interface PaginatorProps {
  page: number;
  lastPage: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const Paginator = ({ page, lastPage, total, onPrev, onNext }: PaginatorProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900 dark:text-white">{page}</span> to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">{lastPage}</span> of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">{total}</span> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={onPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0l4 4M1 5l4-4"
            ></path>
          </svg>
          Prev
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={onNext}
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Paginator;

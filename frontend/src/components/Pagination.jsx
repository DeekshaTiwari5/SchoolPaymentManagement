const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => onPageChange(currentPage - 1);
  const handleNext = () => onPageChange(currentPage + 1);

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-500 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-gray-700 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-500 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

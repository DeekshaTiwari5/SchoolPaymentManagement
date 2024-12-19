const Filter = ({ filters, onFilterChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white dark:bg-gray-700 shadow-md p-4 rounded-lg flex justify-between items-center mb-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">
          Status
        </label>
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full"
        >
          <option value="">All</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default Filter;

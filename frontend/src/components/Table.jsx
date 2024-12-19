const Table = ({ transactions }) => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-700 shadow-lg rounded-lg">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Collect ID</th>
            <th className="p-3 text-left">School ID</th>
            <th className="p-3 text-left">Gateway</th>
            <th className="p-3 text-left">Order Amount</th>
            <th className="p-3 text-left">Transaction Amount</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Custom Order ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-100 dark:hover:bg-gray-600 ${
                index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''
              }`}
            >
              <td className="p-3">{transaction.collect_id}</td>
              <td className="p-3">{transaction.school_id}</td>
              <td className="p-3">{transaction.gateway}</td>
              <td className="p-3">${transaction.order_amount}</td>
              <td className="p-3">${transaction.transaction_amount}</td>
              <td
                className={`p-3 ${
                  transaction.status === 'Success'
                    ? 'text-green-500'
                    : transaction.status === 'Pending'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {transaction.status}
              </td>
              <td className="p-3">{transaction.custom_order_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useState, useEffect } from 'react';
import { getTransactionsBySchool } from '../utils/api';
import Table from '../components/Table';

const SchoolDetails = () => {
  const [schoolId, setSchoolId] = useState('');
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const data = await getTransactionsBySchool(schoolId);
    setTransactions(data);
  };

  useEffect(() => {
    if (schoolId) fetchTransactions();
  }, [schoolId]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-white">
        School Transaction Details
      </h1>
      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          School ID
        </label>
        <input
          type="text"
          value={schoolId}
          onChange={(e) => setSchoolId(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <Table transactions={transactions} />
    </div>
  );
};

export default SchoolDetails;

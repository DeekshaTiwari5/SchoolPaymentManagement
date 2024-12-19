import { useState, useEffect } from 'react';
import { getAllTransactions } from '../utils/api';
import Table from '../components/Table';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [filters, setFilters] = useState({ status: '', date: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Replace with actual total pages from backend response.

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getAllTransactions(filters);
      setTransactions(data);
    };

    fetchTransactions();
  }, [filters, currentPage]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-white">
        Transaction Dashboard
      </h1>
      <Filter filters={filters} onFilterChange={setFilters} />
      <Table transactions={transactions} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;

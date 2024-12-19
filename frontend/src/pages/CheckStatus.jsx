import React, { useState } from 'react';
import { checkTransactionStatus } from '../utils/api';
import Modal from '../components/Modal';

const CheckStatus = () => {
  const [customOrderId, setCustomOrderId] = useState('');
  const [status, setStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckStatus = async () => {
    const response = await checkTransactionStatus(customOrderId);
    setStatus(response);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-white">
        Check Transaction Status
      </h1>
      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Custom Order ID
        </label>
        <input
          type="text"
          value={customOrderId}
          onChange={(e) => setCustomOrderId(e.target.value)}
          className="p-2 border rounded-md w-full mb-4"
        />
        <button
          onClick={handleCheckStatus}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          Check Status
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Transaction Status"
      >
        <p className="text-gray-700 dark:text-gray-300">
          {status ? `Status: ${status}` : 'No status available'}
        </p>
      </Modal>
    </div>
  );
};

export default CheckStatus;

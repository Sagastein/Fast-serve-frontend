import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useParams } from "react-router-dom";
const fetcher = (url) => axios.get(url).then((res) => res.data);
const UserTransactions = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const { data, error, isLoading } = useSWR("/api/transaction/" + id, fetcher);
  if (isLoading) return <div>isloading</div>;
  if (error)
    return (
      <p className="text-center my-5">Error {error.response.data.error} 🚧</p>
    );

  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <main>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b`}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">${item.amount}</td>
                <td className="px-6 py-4">{item.mode}</td>
                <td className="px-6 py-4">{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination my-2 w-4/12 float-right flex gap-4 items-center justify-between">
          <button
            onClick={() => paginate(page - 1)}
            disabled={page === 1}
            className="btn disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`btn ${i + 1 === page ? "btn-active" : ""}`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(page + 1)}
            disabled={page === totalPages}
            className="btn disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default UserTransactions;

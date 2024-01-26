import axios from "axios";
import useSWR from "swr";
import { Spinner } from "@nextui-org/react";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function Recent() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/api/transaction/recent",
    fetcher
  );
  if (isLoading)
    return (
      <div className="my-4 p-12 text-center">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="my-4 py-12 mx-auto">Error connectin to the server</div>
    );

  return (
    <main className="grid bg-transparent space-y-4">
      {data && data.length ? (
        data.map((item) => (
          <section
            key={item.id}
            className="bg-white justify-between  space-y-3.5 p-2 py-2 leading-7  hover:shadow-lg hover:scale-95 cursor-pointer  rounded-md shadow"
          >
            <div className="flex flex-wrap justify-between">
              <h1 className="capitalize font-medium">{item.username}</h1>
              <span className="text-xs font-thin">{item.timeAgo}</span>
            </div>
            <div className="flex flex-wrap justify-between">
              <span className="text-xs font-mono font-medium">
                Bal:{item.accountBalance?.toLocaleString()}
                <code>Rwf</code>
              </span>
              <span className="text-xs font-light capitalize text-gray-500">
                {item.transactionType} {item.amount?.toLocaleString()} Rwf
              </span>
            </div>
          </section>
        ))
      ) : (
        <div className="capitalize text-center border py-8 rounded-md bg-green-700/30 text-green-500">
          no recent data 📄
        </div>
      )}
    </main>
  );
}

export default Recent;

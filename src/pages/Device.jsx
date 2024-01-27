import { Switch } from "@nextui-org/react";
import useSwr from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
export default function DeviceList() {
  const { data, isLoading, error, mutate } = useSwr(
    "https://fastserve.onrender.com/api/device",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleToggleSwitch = async (deviceId) => {
    const options = {
      method: "PATCH",
      url: "https://fastserve.onrender.com/api/device/mode/" + deviceId,
      headers: { "User-Agent": "insomnia/8.4.5" },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        mutate();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((device) => (
        <div
          key={device.id}
          className="bg-white shadow-md rounded-lg p-6 m-4 md:w-1/3"
        >
          <h2 className="text-xl font-bold mb-2">{device.name}</h2>
          <p className="mb-2">
            <strong>Location:</strong> {device.location}
          </p>
          <p className="mb-2">
            <strong>Mode:</strong> {device.mode}
          </p>
          <p className="mb-2">
            <strong>Status:</strong> {device.status}
          </p>
          <div className="mt-4">
            <Switch
              onChange={() => handleToggleSwitch(device.id)}
              defaultSelected
              aria-label="Automatic updates"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

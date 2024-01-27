/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import useSWR from "swr";
const fetcher = (url) => axios.get(url).then((res) => res.data);
var nana;
export const id = () => {
  const { data, error } = useSWR(
    "https://fastserve.onrender.com/api/ca",
    fetcher
  );

  if (error) return (nana = `server error`);

  return (nana = data);
};

import { useState } from "react";
import axios from "axios";
import { useAuthStore } from "../../hooks/AuthStore";

const UserDeposit = () => {
  const { user } = useAuthStore();
  const [err, setErr] = useState("");
  const [amount, setAmount] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    if (isNaN(amount)) {
      setErr("Amount must be a number");
    } else if (amount === "") {
      setErr("Please enter an amount");
    } else if (amount == 0) {
      setErr("Amount cannot be less than 0");
    } else if (!isChecked) {
      setErr("Please verify the amount to be deposited");
    } else {
      const options = {
        method: "POST",
        url: "/api/transaction",
        headers: { "Content-Type": "application/json" },
        data: { Id: user.UserId, amount: amount },
      };

      axios
        .request(options)
        .then(function (response) {
          alert(
            `Transaction Successful, new balance: ${response.data.AccountBalance}`
          );
          setAmount("");
          setIsChecked(false);
          setErr("");
        })
        .catch(function (error) {
          console.error(error.response.data.error);
          setErr(error.response.data.error);
        });
    }
  };

  return (
    <section className="p-4 w-8/12 mx-auto">
      {err && <div className="text-center capitalize text-red-600">{err}</div>}
      <h1 className="text-center underline text-2xl">Deposit</h1>
      <div className="grid gap-2 my-2">
        <label className="font-medium" htmlFor="amount">
          Amount
        </label>
        <input
          value={amount}
          className="border focus:border-primary outline-none p-2 rounded-md"
          type="text"
          name="amount"
          id="amount"
          autoComplete="off"
          required
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <input
          className=" h-4 w-4 mx-4 rounded-md cursor-pointer accent-primary"
          type="checkbox"
          name="verify"
          id="verify"
          autoComplete="off"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label className="" htmlFor="verify">
          Please Verify The Amount To Be Deposited
        </label>
      </div>
      <div className="my-4 flex">
        <button
          onClick={handleSubmit}
          className="p-2 border disabled:bg-gray-300 disabled:text-black bg-slate-800 text-white px-6 rounded-md font-medium mx-auto"
          type="submit"
          disabled={!isChecked || !amount}
        >
          Deposit
        </button>
      </div>
    </section>
  );
};

export default UserDeposit;

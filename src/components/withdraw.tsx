import { useState } from "react";
import { useAccount } from "../lib/balance-state";

export function MoneyC() {
  const [money, setMoney] = useState("");
  const { addTransaction } = useAccount();

  const inser = () => {
    if (money == "") {
      return;
    }

    addTransaction({
      amount: Number(money),
      transactionType: "incoming",
      // category: null,
    });

    setMoney("");
  };

  const withdraw = () => {
    if (money == "") {
      return;
    }

    addTransaction({
      amount: Number(money),
      transactionType: "outgoing",
      // category: null,
    });
  };

  return (
    <div className="mt-6 flex gap-3 ">
      <button onClick={inser} className="btn btn-success w-24">
        Inser
      </button>
      <input
        placeholder="Add czk"
        type="number"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        className="input input-bordered"
      />
      <button onClick={withdraw} className="btn btn-error w-24">
        Withdraw
      </button>
    </div>
  );
}

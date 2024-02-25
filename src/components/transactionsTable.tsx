import { useAccount } from "../lib/balance-state";

export default function TransactionTable() {
  const { account } = useAccount();

  return (
    <div className="flex flex-col gap-3">
      {account.transactions.map((t) => (
        <p
          key={crypto.randomUUID()}
          className={`${t.transactionType == "incoming" ? "text-green-400" : "text-red-400"} border-secondary-content rounded-xl p-1 w-32 flex justify-center`}
        >
          {(t.transactionType == "outgoing" ? "-" : "+") + " "}
          {t.amount}
          {" kč"}
        </p>
      ))}
    </div>
  );
}

import Balance from "./components/balance";
import TransactionTable from "./components/transactionsTable";
import { MoneyC } from "./components/withdraw";
import { useAccount } from "./lib/balance-state";

function App() {
  const { account } = useAccount();

  return (
    <>
      <main className="h-screen pt-48 p-8">
        <div className="flex justify-center items-center flex-col">
          <Balance balance={account.balance} />
          <MoneyC />
          <div className="mt-8" />
          <TransactionTable />
        </div>
      </main>
    </>
  );
}

export default App;

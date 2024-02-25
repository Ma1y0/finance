import { useEffect, useState } from "react";
import { useAccount } from "../lib/balance-state";

export default function Balance({ balance }: { balance: number }) {
  const { conv } = useAccount();

  const [currency, setCurrency] = useState<"eur" | "usd" | "czk">("czk");
  const [displayBalance, setDisplayBalance] = useState("0");

  useEffect(() => {
    if (currency == "czk") {
      setDisplayBalance(balance.toString());
    } else if (currency == "eur") {
      setDisplayBalance((balance * conv.EUR.value).toFixed(2));
    } else if (currency == "usd") {
      setDisplayBalance((balance * conv.USD.value).toFixed(2));
    }
  }, [currency, balance]);

  return (
    <div className="flex flex-col items-center">
      <div>
        <div role="tablist" className="tabs tabs-boxed">
          <a
            role="tab"
            className={`tab ${currency == "czk" ? "tab-active" : ""}`}
            onClick={() => setCurrency("czk")}
          >
            kč
          </a>
          <a
            role="tab"
            className={`tab ${currency == "eur" ? "tab-active" : ""}`}
            onClick={() => setCurrency("eur")}
          >
            €
          </a>
          <a
            role="tab"
            className={`tab ${currency == "usd" ? "tab-active" : ""}`}
            onClick={() => setCurrency("usd")}
          >
            $
          </a>
        </div>
      </div>

      <h1 className="mt-4">
        <span className="text-6xl font-semibold">{displayBalance}</span>
        <span className="text-xl">{currency}</span>
      </h1>
    </div>
  );
}

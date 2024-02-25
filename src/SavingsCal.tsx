import { useState } from "react";

export default function SavingsCalculator() {
  const [initialAmount, setInitialAmount] = useState("");
  const [monthlyDeposit, setMonthlyDeposit] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [durationYears, setDurationYears] = useState("");
  const [futureValue, setFutureValue] = useState("");

  const calculateFutureValue = () => {
    const initial = parseFloat(initialAmount);
    const monthlyRate = parseFloat(annualInterestRate) / 100 / 12;
    const numberOfPayments = parseFloat(durationYears) * 12;
    const contribution = parseFloat(monthlyDeposit);

    const futureValue =
      ((initial * (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) /
        monthlyRate) *
        (1 + monthlyRate) +
      (contribution * (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) /
        monthlyRate;

    setFutureValue(futureValue.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block  text-sm font-medium mb-2">
            Initial Amount
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 input input-bordered rounded-md "
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="blocktext-sm font-medium mb-2">
            Monthly Deposit
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md input input-bordered "
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-medium mb-2">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md input input-bordered "
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-medium mb-2">
            Duration (Years)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md input input-bordered"
            value={durationYears}
            onChange={(e) => setDurationYears(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary px-4 py-2 rounded-md"
          onClick={calculateFutureValue}
        >
          Calculate
        </button>
        {futureValue !== null && (
          <div className="mt-4">
            <p className="text-xl  font-semibold">{futureValue}</p>
          </div>
        )}
      </div>
    </div>
  );
}

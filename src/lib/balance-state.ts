import { create } from "zustand";

type Category = "Food" | "Transport" | "Tax" | null;

interface Transaction {
  amount: number;
  transactionType: "incoming" | "outgoing";
  category: Category;
}

interface Account {
  balance: number;
  transactions: Transaction[];
}

interface Convert {
  EUR: {
    value: number;
  };
  USD: {
    value: number;
  };
}

interface AccountState {
  account: Account;
  conv: Convert;
  addTransaction: (t: Transaction) => void;
  serConv: (c: Convert) => void;
}

export const useAccount = create<AccountState>((set) => ({
  account: { balance: 0, transactions: [] },
  conv: { EUR: { value: 0.0394776039 }, USD: { value: 0.0427339225 } },
  serConv: (c: Convert) => {
    set((state) => ({ ...state, conv: c }));
  },
  addTransaction: (t: Transaction) => {
    set((state) => {
      const newTransactions = [...state.account.transactions, t];

      let newBalance = state.account.balance;
      if (t.transactionType === "incoming") {
        newBalance += t.amount;
      } else {
        newBalance -= t.amount;
      }

      return {
        account: {
          ...state.account,
          balance: newBalance,
          transactions: newTransactions,
        },
      };
    });
  },
}));

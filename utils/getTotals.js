// Created this constants to avoid typos
const EXPENSE = "expense";
const INCOME = "income";

export const getTotals = (data) => {
  const { income, expenses } = data.reduce(
    (totals, curr) => {
      // In case we have an expense type, we add to the expenses total
      if (curr.type === EXPENSE) {
        totals.expenses += curr.amount;
      }

      // In case we have an income type, we add to the incomes total
      if (curr.type === INCOME) {
        totals.income += curr.amount;
      }

      return totals;
    },
    {
      income: 0,
      expenses: 0,
    }
  );

  // We get the balance
  const balance = income - expenses;

  return {
    income,
    expenses,
    balance,
  };
};

export default getTotals;

 let companies = [
    {
        name: "Rustam nosfrush",
        budget: 20000,
        tax: 12,
        expenses: [
            {
                title: "pockets",
                total: 3000,
            },
            {
                title: "rent",
                total: 5000,
            },
            {
                title: "transfer",
                total: 1000,
            },
        ]
    },
    {
        name: "Axror mashennik",
        budget: 100000,
        tax: 7,
        expenses: [
            {
                title: "idea",
                total: 10000,
            },
            {
                title: "rent",
                total: 14000,
            },
            {
                title: "car",
                total: 400,
            },
        ]
    },
    {
        name: "Xojimurod phones",
        budget: 70000,
        tax: 14,
        expenses: [
            {
                title: "goods",
                total: 30000,
            },
            {
                title: "rent",
                total: 2000,
            },
            {
                title: "tools",
                total: 1200,
            },
        ]
    },
    {
        name: "Ruxshod games",
        budget: 50000,
        tax: 14,
        expenses: [
            {
                title: "oborudovaniye",
                total: 13000,
            },
            {
                title: "rent",
                total: 800,
            },
            {
                title: "salary",
                total: 500,
            },
        ]
    },
]



let a = []
let b = [] 

// Высчитать все расходы включая налоги (месяц) и понять компания в плюсе или же в минусе?


for (let i = 0; i < companies.length; i++) {
  let company = companies[i];
  let totalExpenses = 0;

  for (let j = 0; j < company.expenses.length; j++) {
    totalExpenses += company.expenses[j].total;
  }

  let taxAmount = (totalExpenses * company.tax) / 100;
  let netExpenses = totalExpenses + taxAmount;
  let remainingBudget = company.budget - netExpenses;

  if (remainingBudget >= 0) {
    a.push(company.name);
  } else {
    b.push(company.name);
  }
}

console.log("Успеные компании", a);
console.log("Не успешные компании", b);
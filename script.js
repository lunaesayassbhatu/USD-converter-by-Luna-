const exchangeRates = {
    USD: {
      USD: 1,
      EUR: 0.89,
      GBP: 0.78,
      INR: 83.85,
    },
    EUR: {
      USD: 1.12,
      EUR: 1,
      GBP: 0.87,
      INR: 93.97,
    },
    GBP: {
      USD: 1.29,
      EUR: 1.15,
      GBP: 1,
      INR: 108.04,
    },
    INR: {
      USD: 0.012,
      EUR: 0.0106,
      GBP: 0.0093,
      INR: 1,
    },
  };
  
  const convert = document
    .querySelector(".convert")
    .addEventListener("click", () => {
      const input = parseFloat(document.querySelector("input").value);
      const from = document.querySelector("#from").value;
      const to = document.querySelector("#to").value;
  
      if (isNaN(input) || input <= 0) {
        alert("Please enter a valid value");
      }
      const convertedAmount = input * exchangeRates[from][to];
      document.querySelector("p").innerHTML = `${convertedAmount.toFixed(2)} ${to}`;
    });
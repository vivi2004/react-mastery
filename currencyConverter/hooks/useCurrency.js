import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        const roundedData = Object.entries(res[currency] || {}).reduce(
          (acc, [key, value]) => {
            acc[key] = Math.round(value);
            return acc;
          },
          {}
        );
        setData(roundedData);
      })
      .catch(() => setData({}));
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;

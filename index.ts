
interface Language {
  name: string;
  translations: Record<string, string>;
}

interface CurrencyFetch {
  currencyDetails: Array<{
    icon: string;
    id: number;
    name: string;
    tradeId: string;
  }>;
  language: Language;
  lines: Array<{
    chaosEquivalent: number;
    currencyTypeName: string;
    detailsId: string;
    lowConfidencePaySparkLine: {
      data: Array<number>;
      totalChange: number;
    };
    lowConfidenceReceiveSparkLine: {
      data: Array<number>;
      totalChange: number;
    };
    pay: {
      count: number;
      data_point_count: number;
      get_currency_id: number;
      id: number;
      includes_secondary: boolean;
      league_id: number;
      listing_count: number;
      pay_currency_id: number;
      sample_time_utc: string;
      value: number;
    };
    paySparkLine: {
      data: Array<number>;
      totalChange: number;
    };
    receive: {
      count: number;
      data_point_count: number;
      get_currency_id: number;
      id: number;
      includes_secondary: boolean;
      league_id: number;
      listing_count: number;
      pay_currency_id: number;
      sample_time_utc: string;
      value: number;
    };
    receiveSparkLine: {
      data: Array<number>;
      totalChange: number;
    };
  }>
}

async function start() {
  const data = await fetch("http:/poe.ninja/api/data/currencyoverview?league=Sanctum&type=Currency")
    .then((res) => res.json()) as CurrencyFetch;
  console.log(data)
};

start();

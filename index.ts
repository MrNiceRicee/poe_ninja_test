async function start() {
  const data = await fetch("http:/poe.ninja/api/data/currencyoverview?league=Sanctum&type=Currency")
    .then((res) => res.json())
  console.log(data)
};

start();

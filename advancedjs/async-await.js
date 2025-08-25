// Async Await Example
function getNumber() {
  return new Promise(resolve => setTimeout(() => resolve(42), 500));
}

async function showNumber() {
  const num = await getNumber();
  console.log("Number:", num);
}

showNumber();

// A mock function to mimic making an async request for data
export async function fetchRhymes(word = "cool", amountWords = 10) {
  const resp = await fetch(
    `https://api.datamuse.com/words?rel_rhy=${word}&max=${amountWords}`
  );
  const data = await resp.json();
  return data;
}

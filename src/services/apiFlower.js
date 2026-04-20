const BASE_URL = "http://localhost:9000/";
export async function fetchFlower() {
  try {
    const res = await fetch(`${BASE_URL}flowerList`);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

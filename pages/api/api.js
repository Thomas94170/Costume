import axios from "axios";

export async function getAllCostumeTitles() {
  const response = await axios.get("http://localhost:5400/costume");
  const data = response.data.map((costume) => costume.titre);
  console.log(data);
  return data;
}

export async function getCostumeByTitle(titre) {
  const response = await axios.get(
    `http://localhost:5400/costume?titre=${encodeURIComponent(titre)}`
  );
  const data = response.data;
  console.log(data);
  return data;
}

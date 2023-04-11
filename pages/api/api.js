import axios from "axios";

export async function getCostumeByTitle(titre) {
  const response = await axios.get(
    `http://localhost:5500/costume?titre=${encodeURIComponent(titre)}`
  );
  const data = response.data;
  console.log(data);
  return data;
}

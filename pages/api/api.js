export async function getCostumeByTitle(title) {
  const response = await fetch("http://localhost:5500/costume");
  const costumes = await response.json();

  const matchingCostume = costumes.find((costume) => costume.titre === title);

  return matchingCostume;
}

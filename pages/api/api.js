import React from "react";

export async function getCostumeByTitle(title) {
  const response = await fetch(
    `http://localhost:5500/costume?titre=${encodeURIComponent(title)}`
  );
  const data = await response.json();
  return data;
}

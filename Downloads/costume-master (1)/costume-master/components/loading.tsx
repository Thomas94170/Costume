import React from "react";
import { CircleLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div>
      <CircleLoader color="#58644c" loading={true} size={150} />
    </div>
  );
}


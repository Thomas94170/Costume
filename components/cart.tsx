import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



interface CartProps {
  count: number;
}

export default function Cart({ count }: CartProps) {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={ faShoppingCart } />
      <span>{count}</span>
    </div>
  );
}

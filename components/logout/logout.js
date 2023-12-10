"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button type="button"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
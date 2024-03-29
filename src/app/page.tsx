"use client";

import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/prediction/${inputValue}`);
  };

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit} action="">
        <input
        className="text-black"
          type="text"
          value={inputValue}
          placeholder="Type Your Name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button  type="submit">
          Predict Data
        </button>
      </form>
    </div>
  );
}

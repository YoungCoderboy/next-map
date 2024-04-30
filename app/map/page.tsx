import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple page component.</p>
    </div>
  );
};

export default Page;

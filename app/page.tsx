import Image from "next/image";
import Card from "@/components/Card";
import {someAction} from "@/app/actions/something";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-10">
      {/* <Card
        title="Card 1"
        description="Description for Card 1"
      />

      <Card
        title="Card 2"
        description="Description for Card 2"
      />

      <Card
        title="Card 3"
        description="Description for Card 3"
      /> */}
      <h1>
        Hello Words
      </h1>

        <button onClick={someAction} className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>

    </main>
  );
}
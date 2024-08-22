"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [items, setItems] = useState([]);

  const fetchAiData = async () => {
    const result: any = await db.select().from(AIOutput);
    setItems(result);
  };

  useEffect(() => {
    fetchAiData();
  }, []);
  return (
    <div className="bg-white m-5 h-screen">
      <div className="p-4">
        <h1 className="font-bold text-xl">History</h1>
        <p className="text-gray-500">
          Search your previously generate AI Content
        </p>
        <div className="mt-5">
          <table className="bg-gray-200 w-full">
            <thead>
              <tr className="text-left ">
                <th className="pl-3">TEMPLATE</th>
                <th className="pl-3">AI RESP</th>
                <th className="pl-3">DATE</th>
                <th className="pl-3">WORDS</th>
                <th className="pl-3">COPY</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {items.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="py-4 px-3">{item.templateSlug}</td>
                  <td className="">
                    <p className=" w-96 truncate">{item.aiResponse}</p>
                  </td>
                  <td className="py-4 px-3">{item.createdAt}</td>
                  <td className="py-4 px-3"></td>
                  <td className="py-4 px-3">
                    <Button className="border-none bg-transparent outline-none shadow-none hover:bg-transparent">
                      <h1 className="text-primary">Copy</h1>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

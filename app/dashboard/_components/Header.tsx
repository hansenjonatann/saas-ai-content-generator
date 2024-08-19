import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="p-5 border-b-2 shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-2 p-2 border rounded-md max-w-lg">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none " />
      </div>
      <hr className="my-5" />
      <div>
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">
          Join Membership just for $9.99/Month{" "}
        </h2>
      </div>
    </div>
  );
}

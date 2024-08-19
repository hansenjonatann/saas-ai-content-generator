import { Search } from "lucide-react";

export default function SearchSection({ onSearchInput }: any) {
  return (
    <>
      <div className="p-10 bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-600 flex justify-center  items-center text-white flex-col ">
        <h2 className="text-3xl font-bold">Browse All Templates</h2>
        <p>What would you like to create today?</p>
        <div className="w-full flex justify-center">
          <div className="flex w-[50%] gap-2 items-center my-5 p-2 border rounded-md bg-white ">
            <Search className="text-primary" />
            <input
              type="text"
              onChange={(event) => onSearchInput(event.target.value)}
              placeholder="Search"
              className="bg-transparent w-full outline-none text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
}

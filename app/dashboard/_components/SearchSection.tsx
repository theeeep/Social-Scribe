import { Search } from "lucide-react";

function SearchSection({ onSearchInput }: any) {
	return (
		<div className="p-10 bg-gradient-to-br from-pink-400 via-gray-800 to-white flex flex-col justify-center items-center">
			<h2 className="text-3xl font-bold text-white">Browse All Templates</h2>
			<p className="text-white  ">What would you like to create today ?</p>
			<div className="w-full flex justify-center">
				<div className="flex gap-2  items-center p-2 border rounded-full   my-5 w-[50%]">
					<Search />
					<input
						type="text"
						placeholder="Search"
						onChange={(event) => onSearchInput(event.target.value)}
						className="bg-transparent w-full outline-none text-white"
					/>
				</div>
			</div>
		</div>
	);
}

export default SearchSection;

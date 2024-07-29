import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
	return (
		<div className=" flex justify-between items-center p-5  ">
			<div className="flex items-start p-2 gap-2   rounded-2xl max-w-lg">
				<Link href={"/"}>
					<Button className=" text-blue-400">
						<ArrowLeft /> Back
					</Button>
				</Link>
			</div>
			<div className="flex items-start p-2 gap-2 border rounded-2xl max-w-lg">
				<Link href={"/"}>
					{/* <Image src={"/logo.svg"} alt="logo" width={130} height={130} /> */}
					<h2>
						Social <span className="text-blue-500 font-bold">Scribe</span>
					</h2>
				</Link>
			</div>
			<div className="flex gap-2 items-center">
				<h2>Profile</h2>
				<UserButton />
			</div>
		</div>
	);
}

export default Header;

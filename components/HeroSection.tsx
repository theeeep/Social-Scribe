"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
	const words = [
		{
			text: "Smart",
		},
		{
			text: "posts,",
		},
		{
			text: "smarter",
		},
		{
			text: "results",
		},
		{
			text: "with",
		},
		{
			text: "Social Scribe AI.",
			className: "text-blue-500 dark:text-blue-500",
		},
	];
	return (
		<div className="flex flex-col items-center justify-center h-[25rem]  ">
			<p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
				Elevate your feed with AI-driven content
			</p>
			<TypewriterEffectSmooth words={words} />
			<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
				{/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
					Contact Dev
				</button> */}
				<Link href={"/dashboard"}>
					<button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
						Get Started
					</button>
				</Link>
			</div>
		</div>
	);
}

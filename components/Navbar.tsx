import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiGmail } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiX } from "react-icons/si";

export default function Navbar() {
	const socials = [
		{
			link: "https://www.linkedin.com/in/devdeeepak",
			label: "Linkedin",
			icon: SiLinkedin,
		},
		{
			link: "https://github.com/theeeep",
			label: "Github",
			icon: SiGithub,
		},
		{
			link: "https://x.com/dev_deee",
			label: "X",
			icon: SiX,
		},
	];

	return (
		<nav className={cn("p-12 flex justify-center gap-5 items-center")}>
			<h1 className="text-2xl font-extrabold underline underline-offset-8 decoration-blue-500 -rotate-3">
				Developed with 💙 By{" "}
				<span className="text-blue-400">{"< Deepak />"} 👨🏼‍💻</span>
			</h1>
			<div className="flex items-center gap-5 ">
				{socials.map((social, index) => {
					const Icon = social.icon;
					return (
						<Link href={social.link} key={index} aria-label={social.label}>
							<Icon className="size-7 hover:scale-125 hover:text-blue-500 transition-all -rotate-3" />
						</Link>
					);
				})}
			</div>
		</nav>
	);
}

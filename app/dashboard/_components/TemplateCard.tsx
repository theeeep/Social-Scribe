import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { TEMPLATE } from "./TemplatesSection";

function TemplateCard(item: TEMPLATE) {
	return (
		<Link href={`/dashboard/content/${item?.slug}`}>
			<div className="p-5 shadow-md border rounded-s-3xl flex flex-col gap-3 cursor-pointer hover:scale-105 hover:border-blue-500 transition-all">
				<Image src={item.icon} alt="icon" width={50} height={50} />
				<h2 className="font-medium text-lg">{item.name}</h2>
				<p className="text-gray-500 line-clamp-3">{item.desc}</p>
			</div>
		</Link>
	);
}

export default TemplateCard;

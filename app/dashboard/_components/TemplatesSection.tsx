import Templates from "@/app/(data)/Templates";
import { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
	name: string;
	desc: string;
	icon: string;
	category: string;
	slug: string;
	aiPrompt: string;
	form?: FORM[];
}

export interface FORM {
	label: string;
	field: string;
	name: string;
	required?: boolean;
}

function TemplatesSection({ userSearchInput }: any) {
	const [templateList, setTemplateList] = useState(Templates);
	useEffect(() => {
		// console.log(userSearchInput);
		if (userSearchInput) {
			const filterData = Templates.filter((item) =>
				item.name.toLowerCase().includes(userSearchInput.toLowerCase()),
			);
			setTemplateList(filterData);
		} else {
			setTemplateList(Templates);
		}
	}, [userSearchInput]);
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
			{templateList.map((item: TEMPLATE, index: number) => (
				<TemplateCard {...item} key={""} />
			))}
		</div>
	);
}

export default TemplatesSection;

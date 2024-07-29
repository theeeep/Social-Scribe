"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import type { TEMPLATE } from "../../_components/TemplatesSection";

interface PROPS {
	selectedTemplate?: TEMPLATE;
	userForminput: any;
	loading: boolean;
}

function FormSection({ selectedTemplate, userForminput, loading }: PROPS) {
	const [formData, setFormData] = useState<any>();

	const handleInputChange = (event: any) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (e: any) => {
		e.preventDefault();
		userForminput(formData);
	};
	return (
		<div className="p-5 shadow-md border rounded-lg bg-white">
			<Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
			<h2 className="font-semibold text-black text-2xl mb-2">
				{selectedTemplate?.name}
			</h2>
			<p className="text-black text -sm">{selectedTemplate?.desc}</p>
			<form className="mt-6" onSubmit={onSubmit}>
				{selectedTemplate?.form?.map((item, index) => (
					<div key={""} className="my-2 flex flex-col gap-2 text-black mb-7">
						<label className="font-bold text-black ">{item.label}</label>
						{item.field === "input" ? (
							<Input
								name={item.name}
								required={item?.required}
								onChange={handleInputChange}
							/>
						) : item.field === "textarea" ? (
							<Textarea
								className="bg-white text-black"
								name={item.name}
								required={item?.required}
								onChange={handleInputChange}
							/>
						) : null}
					</div>
				))}
				<Button
					type="submit"
					className="w-full py-6 bg-blue-400 hover:text-black"
					disabled={loading}
				>
					{loading && <LoaderCircle className="animate-spin" />}
					Generate Content
				</Button>
			</form>
		</div>
	);
}

export default FormSection;

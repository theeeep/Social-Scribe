"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

function UsageTrack() {
	const { user } = useUser();

	// useEffect(() => {
	// 	result && GetTotalUsage();
	// }, [result && user]);

	const GetData = async () => {
		const result = await db
			.select()
			.from(AIOutput)
			.where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
	};

	// const GetTotalUsage = () => {
	// 	let total: number = 0;

	// 	result.forEach((element) => {
	// 		total = total + Number(element.aiResponse?.length);
	// 	});
	// 	console.log(total);
	// };

	return (
		<div className="p-5">
			<div className="bg-primary p-3 text-white rounded-lg">
				<h2 className="font-medium">Credits</h2>
				<div className="h-2 bg-slate-600 w-full rounded-full mt-3">
					<div
						className="h-2 bg-green-400 rounded-full"
						style={{ width: "35%" }}
					/>
				</div>
				<h2 className="text-sm my-2">350/10,000 Credit Use</h2>
			</div>
			<Button className="w-full my-3 bg-slate-600">Upgrade</Button>
		</div>
	);
}

export default UsageTrack;

import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Button } from "@/components/ui/button";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";

interface PROPS {
	aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
	const editorRef: any = useRef();

	useEffect(() => {
		const editorInstance = editorRef.current.getInstance();
		editorInstance.setMarkdown(aiOutput);
	}, [aiOutput]);

	return (
		<div className="bg-white shadow-lg border rounded-lg">
			<div className="flex justify-between items-center p-5">
				<h2 className="text-bold text-lg text-blue-500 font-medium">
					Your Result
				</h2>
				<Button
					className="p-4 bg-slate-200 text-blue-500 hover:bg-blue-400 hover:text-black rounded-full"
					onClick={() => navigator.clipboard.writeText(aiOutput)}
				>
					<Copy />
				</Button>
			</div>
			<Editor
				ref={editorRef}
				initialValue="Your Result will appear here..."
				height="600px"
				initialEditType="wysiwyg"
				useCommandShortcut={true}
				onChange={() =>
					console.log(editorRef.current.getInstance().getMarkdown())
				}
			/>
		</div>
	);
}

export default OutputSection;

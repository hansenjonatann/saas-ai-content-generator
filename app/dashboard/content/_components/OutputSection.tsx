"use client";
import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";
interface PROPS {
  aiOutput: string;
}
export default function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);
  return (
    <>
      <div className="bg-white shadow-lg border rounded-lg">
        <div className="flex justify-between items-center p-5">
          <h2 className="font-medium text-lg">Your Result</h2>
          <Button className="flex gap-2 ">
            <Copy className="w-4 h-4" /> Copy
          </Button>
        </div>
        <Editor
          ref={editorRef}
          initialValue="Your result apear here"
          initialEditType="wysiwyg"
          height="600px"
          useCommandShortcut={true}
          onChange={() =>
            console.log(editorRef.current.getInstance().getMarkdown())
          }
        />
      </div>
    </>
  );
}

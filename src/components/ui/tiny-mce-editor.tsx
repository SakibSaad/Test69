"use client";

import { useState } from "react";
import { FunctionComponent, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TinyProps {
  initialValue?: string;
  // eslint-disable-next-line no-unused-vars
  setValueTinymceContent: (value: string) => void;
  watchTinymceContentValue: string;
  save_onSavecallback?: () => void;
}

const TinyMceEditor: FunctionComponent<TinyProps> = (props: TinyProps) => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const tinymceScriptSrc = process.env.NEXT_PUBLIC_TINYMCE_SCRIPT_SRC;
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleScriptLoad = () => {
      setEditorLoaded(true);
    };

    const script = document.createElement("script");
    script.src = tinymceScriptSrc;
    script.async = true;
    script.defer = true;
    script.onload = handleScriptLoad;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [tinymceScriptSrc]);

  const handleEditorChange = (newValue: any) => {
    setIsDirty(true);
    props.setValueTinymceContent(newValue);
  };

  return (
    <div className="transition">
      {!editorLoaded && (
        <>LOADING</>
        // <Card>
        //   <Skeleton className="h-[30rem] w-full rounded-md" />
        // </Card>
      )}
      {editorLoaded && (
        <Editor
          id="tiny-mce-editor-monzim-cdn"
          tinymceScriptSrc={tinymceScriptSrc}
          initialValue={props.initialValue || ""}
          value={props.watchTinymceContentValue}
          onEditorChange={handleEditorChange}
          scriptLoading={{ async: true, defer: true }}
          init={{
            height: 500,
            menubar: true,
            skin: "oxide",

            mobile: {
              menubar: true,
              plugins: "autosave lists autolink",
              toolbar: "undo bold italic styles",
            },
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "preview",
              "help",
              "wordcount",
            ],
            toolbar:
              " undo redo | blocks | " +
              "bold italic forecolor link image |  alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
          }}
        />
      )}
    </div>
  );
};

export default TinyMceEditor;

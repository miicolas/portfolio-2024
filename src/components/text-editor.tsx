"use client";


import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Strikethrough, Italic, List, ListOrdered, TextQuote, Code, ArrowBigLeft, Link as LinkIcon,ImagePlus } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import HardBreak from '@tiptap/extension-hard-break';
import CharacterCount from '@tiptap/extension-character-count';
import CodeBlock from '@tiptap/extension-code-block'
import Image from '@tiptap/extension-image'

import Link from '@tiptap/extension-link';
import React, { useCallback } from 'react';


const RichTextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {




  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "min-h-[150px] max-h-[150px] w-full rounded-md rounded-br-none rounded-bl-none border border-input bg-transparent px-3 py-2 border-b-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
        blockquote: {
          HTMLAttributes: {
            class: "pl-4 border-l-4 border-accent border-gray-300",
          },
        },
        
        
      }),
      HardBreak.configure({
        HTMLAttributes: {
          class: "mb-2",
        },
      }),
      Link.configure({
        HTMLAttributes: {
          class: "text-blue-500",
        },
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      CharacterCount.configure(),
      CodeBlock.configure({
        HTMLAttributes: {
          class: "border-gray-300 rounded-md p-2 bg-gray-500 text-white font-code",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-md",
        },
      }),
    ],
    content: value, // Set the initial content with the provided value
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML()); // Call the onChange callback with the updated HTML content
    },
  });

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])



  return (
    <>
      <EditorContent editor={editor} />
      {editor ? <RichTextEditorToolbar editor={editor} setLink={setLink} addImage={addImage} /> : null}
      <div className={`flex flex-row items-center gap-2 text-sms text-gray-500`}>
        

        {editor?.storage.characterCount.characters()} characters
        
      </div>
    </>
  );
};

const RichTextEditorToolbar = ({ editor, setLink, addImage }: { editor: Editor, setLink: () => void, addImage: () => void }) => {
  return (
    <div className="border border-input bg-transparent rounded-br-md rounded-bl-md p-1 flex flex-row items-center gap-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Separator orientation="vertical" className="w-[1px] h-8" />
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("blockquote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <TextQuote className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("codeBlock")}
        onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Code className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("hardBreak")}
        onPressedChange={() => editor.chain().focus().setHardBreak().run()}
      >
        <ArrowBigLeft className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("link")}
        onPressedChange={setLink}
      >
        <LinkIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("image")}
        onPressedChange={addImage}
      >
        <ImagePlus className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default RichTextEditor;

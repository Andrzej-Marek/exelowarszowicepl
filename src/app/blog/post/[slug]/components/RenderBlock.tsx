"use client";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";

import { BlogPost, ColumnsBlock, ImageBlock, RichTextBlock } from "../types";
import { TextNode } from "lexical";
import Image from "next/image";
import { buildCMSUrl } from "@/utils/buildCMSUrl";

type BlogContentProps = {
  blocks: BlogPost["blocks"];
};

const RenderBlock = ({ blocks }: BlogContentProps) => {
  if (!blocks) {
    return null;
  }

  return (
    <div>
      {blocks.map((block) => {
        if (block.blockType === "RichTextBlock") {
          return <RichText block={block} key={block.id} />;
        }

        if (block.blockType === "ImageBlock") {
          return <ImageBlock block={block} key={block.id} />;
        }

        if (block.blockType === "ColumnsBlock") {
          return <ColumnsBlock block={block} key={block.id} />;
        }
        return null;
      })}
    </div>
  );
};

const ColumnsBlock = ({ block }: { block: ColumnsBlock }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <RenderBlock blocks={block.leftColumn} />
      </div>
      <div className="col-md-6">
        <RenderBlock blocks={block.rightColumn} />
      </div>
    </div>
  );
};
const ImageBlock = ({ block }: { block: ImageBlock }) => {
  if (!block.file.url) {
    return null;
  }

  return (
    <div className="details_image">
      <img
        alt={block.file.alt}
        src={buildCMSUrl(block.file.url) ?? ""}
        // width={1786}
        // height={900}
      />
    </div>
  );
};

const RichText = ({ block }: { block: RichTextBlock }) => {
  return (
    <div className="details_content">
      <h3>{block.heading}</h3>
      <LexicalComposer
        initialConfig={{
          namespace: block.blockName ?? "",
          onError: console.log,
          editable: false,
          editorState: JSON.stringify(block.content),
          nodes: [
            HeadingNode,
            QuoteNode,

            ListNode,
            ListItemNode,
            CodeNode,
            TextNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode,
          ],
        }}
      >
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          ErrorBoundary={LexicalErrorBoundary}
          placeholder={null}
        />
      </LexicalComposer>
    </div>
  );
};
export default RenderBlock;

import React, { Component, useEffect, useState } from "react";
import './Personal.css'
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Personal() {
  const file_name = "personal.md";
  let [post, setPost] = useState(" ");
  useEffect(() => {
    import(`../../markdown/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });
  return (
      <>
    <div className="top-main-ps">
        <div className="markdown-js" >
        <ReactMarkdown
        children={post}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                  <div className="code-main">{children}</div>
                
              </code>
            );
          },
        }}
      />
      </div>
    </div>
    </>
  );
}

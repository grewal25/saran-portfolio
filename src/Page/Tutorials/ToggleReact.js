import React, { Component, useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function ToggleReact() {
    const file_name = "toggle.md";
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
      <div className="max-w-4xl m-auto pt-12 px-8 md-px-10 lg-px-0">
          <div className="prose max-w-4xl" >
          <ReactMarkdown
          children={post}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter 
                  children={String(children).replace(/\n$/, "")}
                  language="javascript"
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
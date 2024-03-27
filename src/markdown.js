import React from "react"
import ReactMarkdown from "react-markdown"
import "./App.css"





export default function Markdown() {
    const [markdown, setMarkdown] = React.useState("")
    React.useEffect(() => {
        // Set your default Markdown content here
        const defaultMarkdown = `
# Welcome to markdown previewer

## This is sub heading

**Bolded Text**

There is also link:
[links](https://www.freecodecamp.org)

Inline code: \`console.log("Hello, world!")\`

Code Block:
\`\`\`javascript
function greet() {
    console.log("Hello, world!");
}

greet();
\`\`\`

Make fun with some lists:
- List Item 1
- List Item 2
- List Item 3

> Blockquote: This is a blockquote example.


Embed image here:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)



`;
        setMarkdown(defaultMarkdown);
    }, []);


    return (
        <>
            <div className="markdown-previewer">
                <div className="editor">
                    <div className="editor-heading">Editor</div>
                    <textarea id="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)}>
                        {markdown}

                    </textarea>
                </div>

                <div id="preview">
                    <div className="preview-heading">Preview</div>
                    <ReactMarkdown className="preview">{markdown}</ReactMarkdown></div>
            </div>
        </>
    )
}
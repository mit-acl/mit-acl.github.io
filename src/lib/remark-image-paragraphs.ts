// Remark plugin: wraps a top-level block of raw `<img>` tags in a paragraph,
// as the old site's Markdown renderer (kramdown) did. The theme's JS looks for
// `.single p > img` to center and space out content images.

interface Node {
  type: string;
  value?: string;
  children?: Node[];
}

const ONLY_IMAGES = /^\s*(<img\b[^>]*>\s*)+$/i;

export default function remarkImageParagraphs() {
  return (tree: Node) => {
    tree.children = tree.children?.map((node) =>
      node.type === 'html' && ONLY_IMAGES.test(node.value ?? '') ? { type: 'paragraph', children: [node] } : node,
    );
  };
}

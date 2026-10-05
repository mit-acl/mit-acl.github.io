// Remark plugin: expands `{% reference KEY %}` in Markdown content into the
// formatted citation for that BibTeX key (the jekyll-scholar tag older content
// uses), e.g. inside a `<ul class="papers">` list. Unknown keys render nothing.
import { formatCitation } from './citations';

const TAG = /\{%\s*reference\s+(\S+?)\s*%\}/g;

const cite = (key: string) => {
  const html = formatCitation(key);
  return html ? `<span id="${key}">${html}</span>` : '';
};

interface Node {
  type: string;
  value?: string;
  children?: Node[];
}

export default function remarkReferences() {
  const visit = (node: Node) => {
    if ((node.type === 'html' || node.type === 'text') && node.value?.match(TAG)) {
      // A citation is HTML, so a text node holding the tag becomes raw HTML.
      if (node.type === 'text') {
        node.value = node.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        node.type = 'html';
      }
      node.value = node.value.replace(TAG, (_m, key) => cite(key));
    }
    node.children?.forEach(visit);
  };
  return (tree: Node) => visit(tree);
}

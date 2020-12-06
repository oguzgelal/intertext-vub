/**
 * Simple markdown parser
 * https://github.com/Khan/simple-markdown
 */

import SimpleMarkdown from "simple-markdown";

enum MarkdownValidTypes {
  text = 'text',
  paragraph = 'paragraph'
}

type MarkdownTree = {
  type: MarkdownValidTypes,
  content: string | MarkdownTree[]
}

type MarkdownParsed = MarkdownTree[] | []

const prepare = () => {
  console.log('SimpleMarkdown', SimpleMarkdown);
}


export default (str: string): MarkdownParsed => {
  prepare();
  console.log('str', str);
  return [];
}

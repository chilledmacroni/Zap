/**
 * @file This file contains constants used for the AI prompt and backend logic.
 */

// Defines the working directory within the virtual environment.
export const WORK_DIR = '/home/project';

// The custom XML-like tag name for wrapping file modifications sent to the AI.
export const MODIFICATIONS_TAG_NAME = 'bolt_file_modifications';

// A list of allowed HTML elements for the AI's conversational output.
// This is a security and formatting measure.
export const allowedHTMLElements = [
  'a', 'b', 'blockquote', 'br', 'code', 'dd', 'del', 'details', 'div',
  'dl', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i',
  'ins', 'kbd', 'li', 'ol', 'p', 'pre', 'q', 's', 'span', 'strong',
  'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead',
  'tr', 'ul'
];

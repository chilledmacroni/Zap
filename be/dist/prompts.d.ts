/**
 * This is the primary system prompt for the AI agent. It is designed to make Gemini
 * act as an expert senior software developer within a specific, constrained environment.
 * It understands how to receive file changes and how to output a structured plan of
 * actions (creating files, running commands) using a custom XML-like format.
 *
 * @param {string} [cwd=WORK_DIR] - The current working directory for the project.
 * @returns {string} The fully constructed system prompt.
 */
export declare const getSystemPrompt: (cwd?: string) => string;
export declare const CONTINUE_PROMPT = "Continue your prior response. IMPORTANT: Immediately begin from where you left off without any interruptions. Do not repeat any content, including artifact and action tags.";
//# sourceMappingURL=prompts.d.ts.map
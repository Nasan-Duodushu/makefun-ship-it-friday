// Ship It Friday — the funniest git commit message an AI coding agent writes
// in the moment before it breaks production on a Friday. One line, 1-159
// characters, written to /output/entry.txt. The joke is the agent's voice:
// cheerful, confident, and completely unaware of the disaster it is causing.
import { mkdirSync, writeFileSync } from 'node:fs';

const COMMIT =
  'feat: Friday deploy — all tests green, all humans gone, vibes immaculate; I checked the code myself';

function validCommit(text: string): boolean {
  // The gate wants 1-159 characters of UTF-8 text, a single line.
  const trimmed = text.trim();
  return (
    trimmed.length >= 1 &&
    trimmed.length <= 159 &&
    !trimmed.includes('\n') &&
    trimmed === text
  );
}

const outDir = process.env['MAKEFUN_OUTPUT_DIR'] ?? '/output';
mkdirSync(outDir, { recursive: true });
if (!validCommit(COMMIT)) {
  throw new Error(`commit must be 1-159 characters, got ${COMMIT.length}`);
}
writeFileSync(`${outDir}/entry.txt`, COMMIT, 'utf8');

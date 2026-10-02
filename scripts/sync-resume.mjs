// Copies the resume PDF from /resume (the single source of truth) into /public,
// so every "Download resume" link serves the latest version. Runs before dev and build.
import { copyFileSync, existsSync } from "node:fs";

const src = "resume/Sunanda_Vempati_Resume.pdf";
const dest = "public/Sunanda_Vempati_Resume.pdf";

if (!existsSync(src)) {
  console.error(`sync-resume: ${src} not found — export the resume to PDF first.`);
  process.exit(1);
}
copyFileSync(src, dest);
console.log(`sync-resume: ${src} → ${dest}`);

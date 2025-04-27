import fs from "fs";
import path from "path";
import { glob } from "glob";

const baseDir = "src/lib/components/ui";

function patchContent(content: string) {
  // Add cn calls to class attributes that don't have it
  content = content.replace(/class=(?:"([^"]*)"|{([^}]*)})/g, (match, stringClass, exprClass) => {
    if (match.includes("cn(")) return match;
    if (stringClass) {
      return `class={cn("${stringClass}")}`;
    }
    return `class={cn(${exprClass})}`;
  });

  // Add cn import if missing and used in the file
  if (!content.includes('import { cn } from "$lib/utils.js"') && content.includes("class=")) {
    if (content.includes('<script lang="ts">')) {
      content = content.replace(/<script lang="ts">/, '<script lang="ts">\n\timport { cn } from "$lib/utils.js";');
    } else {
      content = `import { cn } from "$lib/utils.js";\n${content}`;
    }
  }

  return content;
}

function patchIndexImports(content: string) {
  return content.replace(/(const\s+\w+)+\s+=\s+(\w+Primitive\.\w+);/g, "$1: typeof $2 = $2;");
}

function updateFile(filePath: string, type: "index" | "svelte") {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const updatedContent = type === "index" ? patchIndexImports(fileContent) : patchContent(fileContent);
    fs.writeFileSync(filePath, updatedContent, "utf-8");
    console.log(`Updated file: ${filePath}`);
  } catch (err) {
    console.error(`Failed to update file: ${filePath}`, err);
  }
}

glob.sync(path.join(baseDir, "**/index.ts")).forEach((filePath) => updateFile(filePath, "index"));
glob.sync(path.join(baseDir, "**/*.svelte")).forEach((filePath) => updateFile(filePath, "svelte"));

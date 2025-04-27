import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const baseDir = 'src/lib/components/ui';
const filePattern = '**/index.ts';

function updateFile(filePath: string) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const updatedContent = fileContent.replace(/(const\s+\w+)+\s+=\s+(\w+Primitive\.\w+);/g, '$1: typeof $2 = $2;');
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`Updated file: ${filePath}`);
  } catch (err) {
    console.error(`Failed to update file: ${filePath}`, err);
  }
}

const files = glob.sync(path.join(baseDir, filePattern));

files.forEach(updateFile);

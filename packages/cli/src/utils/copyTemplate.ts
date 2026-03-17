import fs from "fs-extra";
import path from "path";

export async function copyTemplate(
  templateDir: string,
  componentsDir: string,
  componentName: string
): Promise<void> {
  // Create component-specific directory
  const componentDir = path.join(componentsDir, componentName);
  fs.ensureDirSync(componentDir);

  // Copy all files from template
  const files = fs.readdirSync(templateDir);
  
  for (const file of files) {
    const src = path.join(templateDir, file);
    const dest = path.join(componentDir, file);
    
    // Skip if file already exists (don't overwrite)
    if (fs.existsSync(dest)) {
      console.log(`  (skipped ${file} - already exists)`);
      continue;
    }

    fs.copySync(src, dest);
  }

  // Create index.ts if it doesn't exist
  const indexPath = path.join(componentDir, "index.ts");
  if (!fs.existsSync(indexPath)) {
    // Capitalize component name for export
    const capitalizedName = componentName
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    const indexContent = `export { default as ${capitalizedName} } from "./${componentName}";
export type { ${capitalizedName}Props } from "./${componentName}";
`;
    fs.writeFileSync(indexPath, indexContent);
  }
}

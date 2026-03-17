import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

export function getProjectRoot(): string {
  return process.cwd();
}

export function ensureInitialized(projectRoot: string): void {
  const configPath = path.join(projectRoot, "shubh-ui.json");
  if (!fs.existsSync(configPath)) {
    console.error(
      chalk.red("Project not initialized. Run 'npx shubh-ui init' first.")
    );
    process.exit(1);
  }
}

export async function createConfigFile(projectRoot: string): Promise<void> {
  const config = {
    $schema: "https://shubh-ui.dev/schema.json",
    style: "default",
    tsx: true,
    aliases: {
      "@": "./src",
      "@/components": "./components",
      "@/utils": "./utils",
      "@/lib": "./lib",
      "@/hooks": "./hooks",
    },
    componentPath: "./components/ui",
  };

  const configPath = path.join(projectRoot, "shubh-ui.json");
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

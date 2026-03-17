import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import { getProjectRoot, createConfigFile } from "../utils/config.js";

export async function initCommand() {
  const projectRoot = getProjectRoot();
  const componentsDir = path.join(projectRoot, "components", "ui");

  const spinner = ora();

  try {
    // Check if already initialized
    const configPath = path.join(projectRoot, "shubh-ui.json");
    if (fs.existsSync(configPath)) {
      console.log(chalk.yellow("⚠ Project already initialized!"));
      return;
    }

    // Create components/ui directory
    spinner.start("Creating components directory...");
    fs.ensureDirSync(componentsDir);
    spinner.succeed("Components directory created");

    // Create shubh-ui.json
    spinner.start("Creating config file...");
    await createConfigFile(projectRoot);
    spinner.succeed("Config file created at shubh-ui.json");

    // Create utils/cn.ts
    spinner.start("Creating utility helpers...");
    const utilsDir = path.join(projectRoot, "utils");
    fs.ensureDirSync(utilsDir);

    const cnFile = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

    fs.writeFileSync(path.join(utilsDir, "cn.ts"), cnFile);
    spinner.succeed("Utility helpers created");

    console.log(
      chalk.green("\n✓ Project initialized successfully!\n")
    );
    console.log(chalk.blue("Next steps:"));
    console.log(chalk.gray("  1. Install dependencies:"));
    console.log(chalk.gray("     npm install clsx tailwind-merge"));
    console.log(chalk.gray("  2. Add your first component:"));
    console.log(chalk.gray("     npx shubh-ui add button"));
    console.log(chalk.gray("  3. Start building!\n"));
  } catch (error) {
    spinner.fail();
    console.error(chalk.red("Error during initialization:"), error);
    process.exit(1);
  }
}

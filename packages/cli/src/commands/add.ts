import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import ora from "ora";
import { getProjectRoot, ensureInitialized } from "../utils/config.js";
import { copyTemplate } from "../utils/copyTemplate.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const VALID_COMPONENTS = [
  "button",
  "input",
  "card",
  "modal",
  "badge",
  "alert",
  "avatar",
  "tabs",
  "dropdown",
  "table",
  "sidebar",
  "navbar",
  "checkbox",
  "radio",
  "switch",
  "select",
  "textarea",
  "pagination",
  "accordion",
  "breadcrumb",
  "calendar",
  "divider",
  "drawer",
  "progress",
  "skeleton",
  "spinner",
  "tag",
  "tooltip",
  "serverdatatable",
];

export async function addCommand(components: string[]) {
  try {
    const projectRoot = getProjectRoot();
    
    // Ensure project is initialized
    ensureInitialized(projectRoot);

    if (!components || components.length === 0) {
      console.error(chalk.red("Please specify at least one component to add"));
      console.log(`${chalk.gray("Available components:")} ${VALID_COMPONENTS.join(", ")}`);
      process.exit(1);
    }

    const invalid = components.filter((c) => !VALID_COMPONENTS.includes(c));
    if (invalid.length > 0) {
      console.error(
        chalk.red(`Invalid components: ${invalid.join(", ")}`)
      );
      console.log(
        `${chalk.gray("Available components:")} ${VALID_COMPONENTS.join(", ")}`
      );
      process.exit(1);
    }

    const spinner = ora();
    const templatesDir = path.join(
      path.dirname(__dirname),
      "..",
      "templates"
    );
    const componentsDir = path.join(projectRoot, "components", "ui");

    for (const component of components) {
      spinner.start(`Adding component: ${component}...`);
      
      const templateDir = path.join(templatesDir, component);
      if (!fs.existsSync(templateDir)) {
        spinner.warn(
          `Template not found for ${component}, skipping...`
        );
        continue;
      }

      await copyTemplate(templateDir, componentsDir, component);
      spinner.succeed(`${chalk.green(component)} added successfully`);
    }

    console.log(chalk.green(`\n✓ All components added!\n`));
  } catch (error) {
    console.error(chalk.red("Error adding components:"), error);
    process.exit(1);
  }
}

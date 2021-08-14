import { loadEnvConfig } from "@next/env";

const setup = async (): Promise<void> => {
  const projectDir = process.cwd();
  console.log("projectDir", projectDir);
  loadEnvConfig(projectDir);
};

export default setup;

import { loadEnvConfig } from "@next/env";

const setup = async (): Promise<void> => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

export default setup;

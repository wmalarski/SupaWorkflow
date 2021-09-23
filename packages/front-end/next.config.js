/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withNextTranspileModules = require("next-transpile-modules")([], {
  resolveSymlinks: true,
  debug: false,
});

/** @type {import('next').NextConfig} */
module.exports = withNextTranspileModules(
  withBundleAnalyzer({
    reactStrictMode: true,
    experimental: {
      externalDir: true,
    },
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  })
);

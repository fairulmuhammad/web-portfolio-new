// Server-side build metadata. Never expose secrets to the browser.
// Read Vercel environment variables here and pass only safe values downstream.

export interface BuildInfo {
  environment: "production" | "development" | "preview";
  commitSha: string;
  commitMessage: string;
  branch: string;
  repository: string;
  deployUrl?: string;
  deployTime?: string;
}

export function getBuildInfo(): BuildInfo {
  const env =
    process.env.VERCEL_ENV === "production" ||
    process.env.VERCEL_ENV === "preview"
      ? process.env.VERCEL_ENV
      : "development";

  const sha =
    process.env.VERCEL_GIT_COMMIT_SHA ?? "local";
  const message =
    process.env.VERCEL_GIT_COMMIT_MESSAGE ?? "local";
  const branch =
    process.env.VERCEL_GIT_COMMIT_REF ?? "local";
  const owner =
    process.env.VERCEL_GIT_REPO_OWNER ?? "fairulmuhammad";
  const slug =
    process.env.VERCEL_GIT_REPO_SLUG ?? "web-portfolio";
  const url = process.env.VERCEL_URL;
  const deployId =
    process.env.VERCEL_DEPLOYMENT_ID;

  return {
    environment: env as BuildInfo["environment"],
    commitSha: sha,
    commitMessage: message,
    branch,
    repository: `${owner}/${slug}`,
    deployUrl: url ? `https://${url}` : undefined,
    deployTime: deployId ? `deploy ${deployId}` : undefined,
  };
}

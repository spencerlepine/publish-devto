import process from 'node:process';
import { push } from '@sinedied/devto-cli';

export async function publishArticles(options) {
  const repo = process.env.GITHUB_REPOSITORY;

  const results = await push([options.filesGlob], {
    devtoKey: options.devtoKey || process.env.DEVTO_TOKEN,
    repo,
    branch: options.branch,
    checkImages: true,
    dryRun: options.dryRun
  });

  if (!results || results.length === 0) {
    return [];
  }

  return results;
}

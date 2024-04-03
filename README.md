# :postbox: publish-devto

[![Build Status](https://github.com/spencerlepine/publish-devto/workflows/build/badge.svg)](https://github.com/spencerlepine/publish-devto/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> GitHub Action to publish markdown files as articles on [dev.to](https://dev.to) platform, with assets hosted on GitHub.

> NOTE: this is a slightly-modified of the original: https://github.com/sinedied/publish-devto

## Usage

```yaml
name: Dev.to Article Publish
# uses: https://github.com/sinedied/publish-devto

on:
  workflow_dispatch:
    inputs:
      folder:
        description: 'Name of article folder: blog/<FOLDER_NAME>/index.md'
        required: true
        type: string

jobs:
  post-to-dev-to:
    name: Post to Dev.to
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Publish articles on dev.to
        uses: spencerlepine/publish-devto@v1.0.0
        with:
          # Your dev.to personal API key to publish and update articles.
          # See https://docs.dev.to/api/#section/Authentication/api_key
          devto_key: ${{ secrets.DEVTO_TOKEN }}
          # Your GitHub personal access token, used to create commits for updated files.
          # If you have a protected branch, you need to use a personal access token
          # with the 'repo' permission.
          # See https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # (Optional) The files to publish. Default is "posts/**/*.md"
          files: 'posts/**/*.md'
          # (Optional) The git branch to use. Default is 'main'.
          branch: main
          # (Optional) Use conventional commit messages. Default is false.
          # See https://www.conventionalcommits.org. 
          conventional_commits: true
          # (Optional) Do not make actual changes on dev.to.
          dry_run: false
```

You can use [this template repository](https://github.com/sinedied/devto-github-template) as an example setup.

## How does it work?

This github action delegates most of the work to the [devto-cli](https://github.com/sinedied/devto-cli) push command.

## Local Development

```sh
$ npm run release
```

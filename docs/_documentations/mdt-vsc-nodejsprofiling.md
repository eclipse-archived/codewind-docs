---
layout: docs
title: Installing and running the Codewind language server for Node.js profiling
description: Installing and running the Codewind language server for Node.js profiling
keywords: Node.js, Codewind, server, language, languages, code, code highlighting, highlighting, profiling, Visual Studio Code, VS Code, JavaScript
duration: 1 minute
permalink: mdt-vsc-nodejsprofiling
type: document
---

# Installing and running the Codewind language server for Node.js profiling
The Codewind language server for Node.js profiling annotates your Node.js code with code highlighting. Code highlighting uses the profiling data gathered through Codewind load testing to highlight and show the relative time that is spent in JavaScript functions.

## Running the extension with Visual Studio Code (VS Code)
1. Open a local project that you created with [Codewind](mdt-vsc-getting-started.html) and profiled by using the [performance test](guide_performance.html) feature. Opening the project creates profiling data in a `load-test/[datestamp]/profiling.json` file in your Codewind project.
2. In VS Code, open a JavaScript file in your project. The extension highlights any lines that it finds in the profiling data and annotates them to show how often they were seen and where they were called from.

## Running the extension with VS Code
1. Clone the [`codewind-node-profiler` repository](https://github.com/eclipse/codewind-node-profiler) locally.
2. Run `npm install` in the cloned `codewind-ls-node-prof` folder. This command installs all necessary npm modules in both the client and server folder.
3. Open the clone of the `codewind-node-profiler` repository in VS Code.
4. Press **Ctrl**+**Shift**+**B** on Windows or **Cmd**+**Shift**+**B** on Mac to compile the client and server.
5. Switch to the **Debug** view.
6. Click **Launch Client** from the menu and click the **Run** icon.
7. If you want to debug the server and use the launch configuration, click **Attach to Server**.

## Testing
To enable testing, run the `npm install` command in the `codewind-ls-node-prof` folder.

Complete the following steps to test in VS Code:
1. Press **Ctrl**+**Shift**+**B** on Windows or **Cmd**+**Shift**+**B** on Mac to compile the client and server.
2. Run `npm run prepare-tests` in the `vscode/client` folder.
3. Switch to the **Debug** view.
4. Click **Language Server E2E Test** from the menu.
5. Run the test configuration.
6. Another editor opens while the tests are run. It automatically closes after the tests are complete.
7. Switch to the **Output** view with **Ctrl**+**Shift**+**U** on Windows or **Cmd**+**Shift**+**U** on Mac to see the test results.

## Building the extension
Complete the following steps to build a `.vsix` extension package that can then be installed and published:
1. Run `npm install` in the `codewind-ls-node-prof` folder.
2. Install the `vsce` package globally with `npm install -g vsce`.
3. Run `vsce package` in the `codewind-ls-node-prof` folder. A `.vsix` file is generated.

## Installing the extension
Complete the following steps to install the extension:
1. Run `code --install-extension <name of generated vsix file>` in the `codewind-ls-node-prof` folder.
2. Restart VS Code. The extension appears in your list of installed extensions.

For more information, see [Publishing Extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code website.
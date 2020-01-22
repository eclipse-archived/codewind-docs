---
layout: news
title: New for Codewind 0.8.0
description: New for Codewind 0.8.0
keywords: news, new, updates, update, version, hybrid
duration: 1 minute
permalink: news07
---

## Codewind 0.8.0
Thursday 23 January 2020

#### ✨ New Features and Highlights for 0.8.0 ✨

**Appsody**
- The `codewind-appsody-extension` supports passing environment options to the Appsody CLI using [`--docker-options`](https://github.com/eclipse/codewind/issues/1401).

**Che**
- The [`codewind-che-plugin` supports Helm 3](https://github.com/eclipse/codewind/issues/1320), and the insecure non-default tiller was removed.

**IDEs (Both Eclipse and VS Code)**
- Detailed project application status and errors are displayed in the UI in [Eclipse](https://github.com/eclipse/codewind-eclipse/issues/236) and [VS Code](https://github.com/eclipse/codewind/issues/1391).

**VS Code**
- Push registry is no longer required unless a [Codewind-style template source is enabled](https://github.com/eclipse/codewind/issues/1469).
- If you [switch push registries, a warning appears](https://github.com/eclipse/codewind/issues/1421) that your namespace will be lost.
- You can [cancel image registry creation during the `namespace` step, and you can use the `Esc` key to cancel the whole process](https://github.com/eclipse/codewind/issues/1621).
- You can navigate the [remote connection settings page with keyboard shortcuts](https://github.com/eclipse/codewind/issues/1562).


#### List of Fixes
- Updated Node.js Express server generator to 4.2.2 in [Eclipse](https://github.com/eclipse/codewind-openapi-eclipse/pull/83) and [VS Code](https://github.com/eclipse/codewind-openapi-vscode/pull/77)
- [Updated Appsody CLI to v0.5.4 for the `codewind-appsopdy-extension`](https://github.com/eclipse/codewind/issues/1666)
- Image Registry Manager push registry buttons are now [toggles](https://github.com/eclipse/codewind/issues/1490).
- In Codewind 0.7.0, an incorrect network error appeared when attempting to connect to an uninstalled or failed remote Codewind instance: `Authentication service unavailable`. However, this [network error is actually a connection error](https://github.com/eclipse/codewind/issues/1547). This inaccuracy is corrected.
- The remote settings page in VS Code is more [responsive when the window is resized](https://github.com/eclipse/codewind-vscode/pull/364).
- [VS Code no longer stores the remote connection in extension data](https://github.com/eclipse/codewind/issues/1641). VS Code now recognizes remote connections created in the Eclipse IDE. 
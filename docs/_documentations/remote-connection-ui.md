---
layout: docs
title: Entering remote connection settings
description: Entering remote connection settings
keywords: Codewind, remote, credentials, settings, connection, source, sources, template, templates, style, styles, manager, managers, registry, registries, image, images
duration: 5 minutes
permalink: remoteconnectionui
type: document
---

### Entering Codewind remote connection settings
1. From the **Codewind** view, click **New Codewind Connection**. From the Codewind connection settings page, enter a connection name, an optional connection description, and Codewind connection credentials. Then, click **Test** to confirm that the Codewind Connection Credentials are correct.
2. Add sources with the Template Source Manager [for Eclipse](mdteclipseworkingwithtemplates.html) or [for VS Code](mdt-vsc-workingwithtemplates.html).
3. If your source uses Codewind style templates, add a push image registry to the [Image Registry Manager](dockerregistry.html).
   - To go to the Image Registry Manager command, click the button in the Remote Connection wizard or right-click your connection in the **Codewind** view.
   - From the Image Registry Manager, click **Add New** and follow the prompts in the windows.
   - You have opportunities to test your credentials if you are using a Codewind style template and need a push registry. To test, you can deploy a Hello World image to the image registry.
4. After you have a template source and, if needed, a push registry, you can establish a remote connection. Click **Save**.
5. To access the Codewind connection settings page again, right-click a remote connection that you created and then click **Remote Connection Settings**.
  - Click **Edit** to edit information on the Codewind connection settings page.
  - Then, click **Save** to save your changes.

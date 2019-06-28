---
layout: docs
title: Importing a project
description: Documents
keywords: import, projects, Git, GitHub, project type, validation, validated, workspace, Microclimate workspace, clone, download, project archive, verify repository
duration: 1 minute
permalink: importingaproject
type: document
order: 3
parent: usingmicroclimate
---

# Importing a project

To import a project into your Microclimate workspace:
1. Click the **Import project** button on the Welcome page. If you have already created or imported a project, in the Microclimate header, click **Projects**, and then click **Import project**.
2. Select the location from which you want to import your project. You can choose from a remote Git repository or a project archive on your machine.
* Complete the following steps to use a remote Git repository:
  * Select the **Git** radio button.
  * Open a new browser tab and navigate to the repository that you want to import.
  * From the repository, click the **Clone or download** button.
  * View the **Clone with HTTPS** window. Click **Use HTTPS** if it doesn't automatically display. Copy the URL.
  * Navigate back to Microclimate and paste the repository location URL into the **Git** text field.
* Complete the following steps to use a project archive:
  * Select the **Project archive** radio button.
  * Click the **Select archive file** button. A **File Upload** window appears.
  * Select the file that you want to upload and click **Open**.
3. Click **Next**.
4. Enter the name and any required information depending on the option you choose in the previous step. Then, click **Next**.
* Choose a unique name. If you choose a name of a project that was recently deleted, you might see the error message, `Verify the repository location and try again`. In this case, the deletion of the project is happening in the background and is not yet complete. If you want to use the same name, wait for the deletion process to complete. To check whether the process is complete, look in the workspace directory to see whether the folder name of the deleted project still exists.
5. The project is validated. One of the following occurs:
* The project matched one of the supported project types, so it is auto-detected and you can click **Import**.
* The project type could not be determined or isn't the correct type for your project, and you must select a project type.
* Validation reports that the project is missing required files. You can select the option to generate the missing files or continue with the import. **Note:** The generated files are likely to be needed to configure your project before you can get the project running.

For more information about imported projects and supported project types, see [Imported projects and supported project types](importedprojects).

## Need help?
If you encounter problems with importing a project, check the [Troubleshooting page](troubleshooting#importing-a-project).

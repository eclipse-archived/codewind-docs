## Publishing
When the Codewind website is ready to go live for the latest release, push the `codewind-docs` repository content to the repo, `https://git.eclipse.org/c/www.eclipse.org/codewind.git/`, where Eclipse hosts the Codewind website.

#### Publishing schedule
The publishing schedule corresponds to the Codewind release schedule. However, updates to the documentation can be added between releases if necessary.

#### Preparing for a release
1. Open an issue to prepare the documentation for the upcoming release.
2. Build the `codewind-docs` repository for local testing.
   1. In your Terminal, go to the `codewind-docs` repo and enter the `git clone git@github.com:eclipse/codewind-docs.git` command.
     1. To ensure that you have the latest content from the `master` branch, don't clone your fork. Instead, enter `git fetch upstream`.
     2. Then, create a new branch based on `master` with the `git checkout -b <branchname> upstream/master` command.
   2. From the `codewind-docs` repository, enter `./build.sh`. This script checks for internal broken links and displays errors if any exist.
     1. If you find broken links, create a new pull request and fix them.
     2. Merge the pull request and then run the `./build.sh` script again.
   - **Note:** You can find the generated files from the `./build.sh` script in `docs/_site`. Don't run these files by calling the `index.html`. The site behaves properly only when it uses the `localhost` URL. Certain reference issues can be resolved only by `localhost` or when the files are published to the website.
3. Test.
   1. Run `./serve.sh`, and a URL is displayed: `Server address: http://0.0.0.0:4321/codewind/`.
   2. Copy the server address URL into your browser to test that the website and its latest changes look good.
   3. After you look at the website, press `ctrl + c` to stop the server. You need to stop the server to restart  it again.
      - If the port is still in use, and you can't access the server, restart your computer.
      - If you restart your computer, and you still can't access the server, you can editthe `./serve.sh` file on your local machine and change all three port numbers to any free port, for example `4322`.
    4. Push the changes to the live site.
     1. If you have not yet cloned the live site repository, clone it with `git clone git://git.eclipse.org/gitroot/www.eclipse.org/codewind.git`.
       - To ensure that you have the latest content from the masterbranch, don't clone your fork.
       - If you have already cloned this repository, enter `git pull` instead  of `git clone`.
     2. Commit directly into the live site `master` branch to see your changes go live. You do not need to create branches, pull requests, or forks because the `codewind-docs` repository contains the versioned changes.
     3. Replace the contents of this cloned repository with the files from `codewind-docs` in the `docs/_site/` directory. Delete all the files except for the hidden folders because they contain `git config`.
       - To prevent confusion with the GitHub `codewind` repo folder on your machine, `https://github.com/eclipse/codewind`, and the live site `codewind`repo, `git://git.eclipse.org/gitroot/www.eclipse.org/codewind.git)`, create a new folder named `codewindweb` in a folder other than the one in which the GitHub `codewind` repo, `https://github.com/eclipse/codewind`, is located.
     4. Commit and push.
       - To view the files that you edited locally, enter `git status`.
       - To add the files to be committed, enter `git add <file path>/<name of file>`.
       - To commit the files, enter `git commit -m "<information about changes>" -s`.
     5. Verify your files on the public Codewind website.
       1. Wait approximately fifteen to thirty minutes for the changes to go live.
          - **Note:** Updates might not appear at the same time for all users and on all devices. For example, if you see the updated site, but a coworker does not, or if you see the updated site on your computer but not your phone, keep waiting until the updates appear.
       2. Go to a new browser window or open a private browser window to check to see if website images are broken, ensure that doc changes are present, that the layout looks good, and the like.
     6. For a major release, create a new branch in the `codewind-docs` repo after you push your changes to `master`. This new branch becomes a snapshot of what is included in the release.

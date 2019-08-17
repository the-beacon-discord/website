# The Beacon
This is a work in progress

## Tutorials
### Before Editing
1. Create a _Microsoft GitHub_ account
    - There should be a `Sign up` button in the top right corner of your screen.
    - [_For those lazy people, here's a link_](https://github.com/join)
2. Install _Microsoft Visual Studio Code_
    - https://code.visualstudio.com/
3. Install `git-scm` for your operating system
    - _Ubuntu_ - `sudo apt install git`
    - _Microsoft Windows_
        1. [Download Git](https://git-scm.com/downloads)
        2. Run the executable
        3. Read the terms of the GNU GPLv2 and agree to the licence
        4. Click next on the installation destination location screen
        5. Click next on the components screen
        6. Click next on the "Start Menu Folder" screen
        7. Click next on the "Adjusting your PATH environment" screen
        8. Select "Checkout as-is, commit Unix-style line endings" on the "line ending" screen
            - Technically you can choose whatever you like, but I will hate you if you upload any files saved with the Windows `\r\n` instead of the Unix `\n`.
        9. Complete the installation.
            - I recommend not reading the `ReleaseNotes.rtf` file.
4. Install _Node.js_ for your operating system
    - [Download here](https://nodejs.org/)
    - If you are running _Microsoft Windows_, don't tick the "Install with Chocolatey" option
        1. After installing, open the _Start_ menu, and type in `cmd` - Right click it and open with Administrator permissions
        2. Type the following command: `npm i -g windows-build-tools`
            - This installs the tools required to build sub-programs that some dependencies use.
        3. Wait for the command to complete, and type the following command: `npm i -g yarn`
        4. Wait for the command to complete, and close the command prompt.
5. Open _Microsoft Visual Studio Code_, clone and open the project
    1. Click the `View` menu at the top, and select the `Command Pallete` option.  
    It should be the first option in the list
    2. Type in `clone` and select `Git: clone`
    3. Enter `https://github.com/7coil/beacon` as the Repository URL
    4. Select a suitable location to download the files
    5. Look at the bottom right hand corner of _Microsoft Visual Studio Code_  
    There should be a little loading animation.  
    After the "cloning" finishes, press the `Open` button in the bottom right hand corner.

### Before Developing
1. Click the `Terminal` menu at the top, and select the `New Terminal` option.  
It should be the first option in the list
2. Inside the terminal, run the `yarn` command
    - This installs the dependencies required for the website to be built
    - If the installation fails, try ask on Discord for help.

### Checking up on what the website looks like while you are editing the website
1. Run the `yarn develop` command
2. With Google's _Google Chrome_, or Mozilla's _Mozilla Firefox_, open:
    - `http://127.0.0.1:8000`
        - The IP address 127.0.0.1, and any other 127.x.x.x addresses all point to the computer you are currently on.
3. You should now be able to see the homepage.

### Adding a podcast
1. In the `/src/posts/podcast` folder, create a new folder with the episode number
2. Create an `index.md` file in the folder, and add something resembling this:
    ```markdown
    ---
    title: MitchiriNeko March
    description: "Mitchiri-Neko" is a cat-like creature. They crowd closely together always everywhere (=´ω｀=)
    date: 2019-08-16 23:19:53 +1
    explicit: true
    youtube: lAIGb1lfpBw
    season: 1
    episode: 23
    ---

    Whatever you want the webpage to show here.
    Maybe add some cool images if you really want to.

    Get some help with Markdown here:
    https://guides.github.com/features/mastering-markdown/
    ```
    - Under NO circumstances should you put the episode number in the title.
        - In the Fair and Democratic People's Republic of The Beacon, this is punishable by infinite pings.
3. Copy an MP3 file into the folder, and rename it as `podcast.mp3`
4. Open _Microsoft Visual Studio Code_
5. In the bar at the bottom, click the "sync" button in the bottom left.
    - This synchronises your folder with the one stored on GitHub.
6. Open the _Source Control_ tab
    1. Look at the left hand side of _Microsoft Visual Studio Code_
        - There should be five icons.
        - Click the icon with:
            - Three circles with some lines connecting together
            - The icon that is above the bug
            - The icon that is below the magnifying glass
7. In the message box, enter a message to explain why you are adding the files listed below.
    - I recommend something like `Adding episode 39 of the podcast`
8. Press the tick above the message box
9. In the bar at the bottom, click the "sync" button in the bottom left.
10. Click Ok.

## Obligitory Badge
[![Netlify Status](https://api.netlify.com/api/v1/badges/f30d476b-5146-4fb9-b205-bca5704d1ce5/deploy-status)](https://app.netlify.com/sites/thebeacon/deploys)

## Licence
This projects code is licenced under the MIT licence.

This project contains some copyrighted material from "The Beacon".  
These include, and are not limited to:
- `/src/posts/podcast/1/podcast.mp3`
- `/src/posts/podcast/2/podcast.mp3`
- `/src/posts/podcast/3/podcast.mp3`

These files are not licenced under the MIT licence.

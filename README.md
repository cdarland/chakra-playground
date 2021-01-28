# SSB Design System Component Sandbox
The only way for two teams to speak the same language is if those two teams are actually writing the same language. So, to help bridge this divide, we created this simple playground repository for SSB designers involved in the design system project to play with our base component library, Chakra UI, in the wild. We hope it helps build a shared understanding of our system as we begin to build the future of SSB's digital products.

## Setting up the repository
1. On your Mac, open up the `terminal` application. You can find this in your Applications folder, or by opening spotlight and searching for "terminal".
2. Confirm that you have `git` installed on your machine by typing `which git` into the terminal app and pressing `enter`. The terminal should return a file path similar to this `/usr/bin/git`. If so, you're in good shape!
3. In your terminal, navigate to your desktop directory. You can do this with the following command: `cd ~/Desktop`
4. Clone the repository onto your computer with the following command : `git clone https://github.com/cdarland/chakra-playground.git`. This will download the playground repo into your desktop.
5. Navigate to the playground repo in your terminal app with the following command: `cd ~/Desktop/chakra-playground`
6. Install all app dependencies with the following command: `yarn install`. This might take a couple minutes. Don't worry. Go grab a coffee.
7. You're all set!

## Install a code editor
There are dozens of code editors out there for you to select from, but the most commonly used editor that comes highly recommended by our React developers is called Visual Studio Code, or "VS Code" for short. You can download a copy [here](https://code.visualstudio.com/). 
If you have a different code editor of choice, have at it! The world is your oyster.

## Running the app locally
1. To run the app locally, make sure you've followed all the setup steps in the previous section
2. In your terminal, navigate to the directory where you installed this repository. If you used the setup steps above you can reach that directory with the following command: `cd ~/Desktop/chakra-playground`
3. Run the command `yarn run dev` in your terminal
4. Open your browser of choice and navigate to the following URL: `http://localhost:3000`. If this is your first time loading the app you should see a simple grid layout with mint and periwinkle blocks.

## Chakra UI Documentation
The base component library that we have chosen for SSB's design system is called [Chakra UI](https://chakra-ui.com/resources). It's a super flexible, battle tested React.js component library that allows us to jumpstart our design system by not forcing us to reinvent the wheel. 
To familiarize yourself with Chakra's components and design patterns check out the documentation [here](https://chakra-ui.com/resources).
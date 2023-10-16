# REACT TRAINING PLAN
### OVERVIEW
A revision of React training plan which focuses on the latest version of React (v17.0.2). It will help trainees learn React fundamentals step by step following the instructions and hands-on practices.

__TIMELINE :__

- Main Concepts and Hooks: 2 weeks

  - At the end of this step, trainees should be able to do React Components

- Advanced Guides: 2 weeks

__PREREQUISITE :__
Supporters should make sure trainees got below prerequisites
- [ES6](https://www.javascripttutorial.net/es6/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- Install [nvm](https://github.com/nvm-sh/nvm#install--update-script) and [Node.js](https://nodejs.org/en/download/)
- Install [pnpm](https://pnpm.io/)

##

__GETTING STARTED :__  

BUILD TOOL  

We use [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) which is a build tool that aims to provide a faster and leaner development experience for modern web projects.  

HELLO WORLD  

If you have pnpm installed already, let’s start your first project using pnpm and vite. You can either choose template as react, or react-ts if you want to init with TypeScript. From your terminal, run: 

- pnpm create vite my-react-app -- --template react-ts
- Install and run on local
- cd my-react-app
- pnpm install
- pnpm dev  

Open your browser at [http://localhost:3000](http://localhost:3000) 

Try modifying your React component and see how it changes.  

If you are using VS Code and Windows Subsystem for Linux (WSL), make sure you installed extension  [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

##

__MAIN CONCEPTS__   

Step by step learning the main concepts. For any examples you found in the documentation, you can try it in your first React app created above.
- [Quick Start](https://react.dev/learn)
- [Intallation](https://react.dev/learn/installation)
- [Describing the UI](https://react.dev/learn/describing-the-ui)
- [Adding Interactivity](https://react.dev/learn/adding-interactivity)

STORYBOOK  

[Storybook](https://storybook.js.org/) is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing and documentation.

Init storybook into your first React app:  
- init storybook:
  - pnpx sb init -s
- install dependencies:
  - pnpm install
- run it
  - pnpm storybook

Try to create a Storybook for your example components.  
[https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/](https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/)  

__PRACTICE__
Apply what you have read to rewrite your previous HTML/CSS practice into React components. 
- Apply Storybook into your practice.  

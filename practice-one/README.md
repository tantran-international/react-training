# (REACT) PRACTICE-ONE

### - Thank you all for taking time visit and review my project ! -

## Description

- Project **"React-Practice-One"**: build a User Information Management website _"User Manager"_. This application will help manage user's informations - using HTML5, CSS3, Typescript, React + Vite, JSON Server, Axios.

  - Link design - demo: [Webix](https://webix.com/demos/user-manager/)

- Time-line:

  - Estimate: 10 days (November 02, 2023 -- November 15, 2023)
  - Actual: 22 days (November 02, 2023 -- December 01, 2023)

## Overview

- Features of User Manager:

  - User Information Management Website with 3 sections:

    - Side bar.
    - Main section contain Search Box, List Navigation and User Manager Table.
    - Display User details when click on any Table Row.
    - Display Editor when click on Edit button.
    - Display Modals when add new or delete users.

  - Allow

    - Read database (JSON Server)
    - Add new User with Full Name
      - New user created with Letter Avatar
    - Edit User
      - Update avatar
      - Update Full Name & Email
      - Update Status (Active || Not Active)
      - Auto update Last visited after click button Save
      - Details (Only show when open Editor)
      - Can return from Editor to User details
    - Delete User (Only in Editor)

  - Store

    - JSON Server

  - Each task contains information such as:

    - Small Avatar
    - Full Name
    - Status
    - Email

- Requirements of User Manager Website:

  - Use Axios to retrieve database.

  - When click on each user's tag, User Details will be displayed on the right side of the screen (User information) in the form of a Card.

  - Table will display a list of users whose names match the keyword entered in Search Box.

- Targets

  - Apply the React, TypeScript: Using the knowledge about React, TypeScript learned in the current sections.

  - Practice analyzing the requirements: Try to analyze the requirements of a project

## Test environments

- Google Chrome - Version 119.0.6045.200 (Official Build) (64-bit)
- Mozilla FireFox - Version 119.0 (64-bit)
- Sidekick - Version 116.54.1.36404 (Official Build) (64-bit)

## Deployment tools

1. Visual Studio Code
2. Node.js -- v16.20.2
3. pnpm -- v8.9.2

## Folder's structure

```
|- src/
  |- assets
      |- fonts/
          |- ...
      |- images/
          |- ...
  |- components/
      |- commons/
          |- Avatar/
          |- Button/
          |- ImageUploader/
          |- ItemNavigation/
          |- ListNavigation/
          |- Modal/
          |- Popper/
          |- SearchBar/
          |- Status/
          |- Switch/
          |- TextArea/
          |- TextField/
      |- parts
          |- CardInformation/
          |- Drawer/
          |- Tab/
              |- ModifyInfoDetails/
              |- TabButton/
          |- Table/
              |- TableCell/
              |- TableHeader/
              |- TableHeaderCell/
              |- TableRow/
              |- TableRowCell/
              |- TableRowItem/
          |- ToolBar/
      |- contants/
          |- ...
      |- helpers/
          |- ...
      |- server/
          |- database.json
      |- services/
          |- ...
      |- types/
          |- ...
      |- App.css
      |- App.tsx
      |- main.css
      |- main.tsx
      |- reset.css
      |- vite-env.d.ts
    |- .eslintrc.cjs
    |- .gitignore
    |- .prettierignore
    |- .prettierrc
    |- index.html
    |- package.json
    |- pnpm-lock.yaml
    |- README.md
    |- tsconfig.json
    |- tsconfig.node.json
    |- vite.config.ts
```

## Getting started

- **Step 01: Clone repository with HTTPS ( Open Git Bash and run: )**

```
git clone https://github.com/tantran-international/react-training.git
```

- **Step 02: Switch to branch feature/big-practice**

```
git checkout feature/practice-one
```

- **Step 03: Navigate to practice-one folder**

```
cd practice-one
```

- **Step 04: Install pnpm packages & dependencies**

```
pnpm install
```

- **Step 05: Run server ( Open new Git Bash + Navigate to practice-one and run: )**

```
 pnpm run server
```

- **Step 06: Run Website ( Open new Git Bash + Navigate to practice-one and run:  )**

```
pnpm run dev
```

- **Step 06: Open in Browsers ( Copy and run in your browsers: )**

```
http://localhost:5173
```

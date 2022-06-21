# My Personal Page

Welcome to my personal website. This is just to present myself and the idea is to also show some of my personal projects. I don't usually have much extra time to work on these, but in the future I will try to make some time to finish some of them and add them here. At the moment, you can see the code for this React website, or visit it [here](https://www.mateofay.com).

If you have any questions or suggestions, feel free to contact me. You can find my contact information in the footer of the page.

## Technologies

This site was made with `ReactJS (Version 17)`, maybe an overkilled technology for such a simple project, but it was chosen just to practice and to show some skills.

It counts with `Cypress tests` that run on a Github check and are required to pass in order to be able to merge new changes to production. This way, I can ensure that new changes won't break existing functionalities.

As most React projects, it has `Webpack` and `BabelJS` installed and configured, as well as `ESLint` and `Prettier`. This comes from a React boilerplate project that I made to easily and quickly start an optimized React app. You can find this boilerplate's repository as a public project in my github account. There is not much difference with using create-react-app with a template, but initially I just started it as a practice for me to understand the role of every dependency and configuration within a React app, and now I just got used to using it as a starter point for new projects.

## Custom commands

In case you are interested in cloning this project and investigate it or play with the source code, here are some useful commands:

- To start the application locally:

```bash
    npm start
```

- To get an optimized build of the app:

```bash
    npm run build
```
> Output: `/dist` folder

- To run tests:

```bash
    npm run test
```
> Run `test:open` to open Cypress UI interface

- To run ESLint checks:

```bash
    npm run lint
```
> Run `lint:fix` option to tell ESLint to automatically fix errors and warnings, when possible

- Finally, to format the code based on Prettier rules, run:

```bash
    npm run format
```
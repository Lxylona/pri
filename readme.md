# Pri

The project from development to release, you may only need one package: `pri`.

## Features

<details>
  <p>
  <summary>Pages are routes.</summary>
  
  Populate `.src/pages/index.tsx` inside your project:

  ```typescript
  export default () => <div>Hello pri!</div>
  ```

  Then, just run `npm start`, this page will be seen in  the automatically opened window.
  </p>

</details>

<details>
  <summary>Automatic code splitting.</summary>
  
  <p>
  
  > As long as there are two or more files under `pages`, the code splitting function will be automatically opened.
  
  We will automatically generate the following routing:

  ```typescript
  const srcPagesIndex = Loadable({
    loader: () => import("..."),
    loading: () => null
  })

  const srcPagesOther = Loadable({
    loader: () => import("..."),
    loading: () => null
  })
  ```
  </p>

</details>

<details>
  <summary>Typescript first.</summary>
  
  <p>
  `Pri` is written by typescript, so it's easy to use in typescript:

  ```typescript
  // pages/index.tsx
  import { React } from "pri"
  ```
  </p>

</details>

<details>
  <summary>TSlint support.</summary>
  
  <p>
  After install `pri`, tslint has been installed, and after run `pri init`, `tslint.json` will be automatic created.
  </p>

</details>

<details>
  <summary>Ensure project files.</summary>
  TODO
</details>

<details>
  <summary>Automatic pick shared module.</summary>
  TODO
</details>

TODO:

- Static file serving.
- PWA support.
- Tree Shaking.
- Scope Hoist.

## Usage

First, create an empty folder:

```shell
mkdir test; cd test
npm init
npm i pri --save
```

Then, init the pri project:

```shell
npx pri init
```

If you haven't `npx` cli, you can copy following npm scripts into `package.json`:

```json
"scripts": {
  "start": "pri dev",
  "build": "pri build",
  "preview": "pri preview"
}
```

All the preparations have been completed!

### npm start

TODO

### npm run preview

TODO

### npm run build

TODO
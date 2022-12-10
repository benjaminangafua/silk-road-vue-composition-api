# SILKROAD

This template should help get you started developing with Vue 3 in Vite.
## Setup
You can use Vue directly from a CDN via a script tag:
html

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
Install [Node.js](https://nodejs.org/) version 16.0 or higher

The below command will install and execute create-vue: 

```sh
> npm init vue@latest
```
Once the project is created, follow the instructions to install dependencies and start the dev server:

```sh
    > cd <your-project-name>
    > npm install
    > npm run dev
```

When you are ready to ship your app to production, run the following:

```sh
  > npm run build
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

> Hint:  in index.js
```js
  const history = createWebHistory(import.meta.env.BASE_URL)
```
> 1. Not correct {process.env.BASE_URL}
>2. Correct {import.meta.env.BASE_URL}

# Vercel

**Setup**

1. Create an account with [vercel](vercel.com)

2. Import your GitHub Repo (Make sure you don't have me50 account activated)

3. Create a file called `vercel.json` and dump this content in it
```json 
{"rewrites": [{ "source": "/:path*", "destination": "/index.html" }]}
```

## Adding Fontawesome
Install latest-3 (3.0.1) of vue-fontawesome, which is compatible with Vue 3, and the icon dependencies:

```sh
  npm i --save @fortawesome/vue-fontawesome@latest-3
  npm i --save @fortawesome/fontawesome-svg-core
  npm i --save @fortawesome/free-solid-svg-icons
```
In main.js, select the icons from @fortawesome/free-solid-svg-icons to load:

```js
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

// Globally register the font-awesome-icon component:

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

// In src/App.vue, use the component like this (note the icon name is phone, not faPhone):

//<!-- explicit style -->
<font-awesome-icon :icon="['fas', 'phone']" />

//<!-- implicit style (fas is assumed) -->
<font-awesome-icon icon="phone" />

```
## Problem
```sh
  error: object file .git/objects/d6/824c60c76dce043bb7a52c77e8f14f8417f4ea is empty
  error: object file .git/objects/d6/824c60c76dce043bb7a52c77e8f14f8417f4ea is empty
  fatal: loose object d6824c60c76dce043bb7a52c77e8f14f8417f4ea (stored in .git/objects/d6/824c60c76dce043bb7a52c77e8f14f8417f4ea) is corrupt
```

```sh

find .git/objects/ -size 0 -exec rm -f {} \;
git fetch origin
```

## Problem 2
I wanted to change the nav bar for every single page. My first approaches were loops and inline conditionals

## Solution
I got it done in the computed function instead of writing inline conditionals or loops
```js

import { ref, onMounted, reactive, computed} from 'vue';
const house_detail = reactive(propertyData)
const router_content = computed(()=>{
    return {
        logged: route == '/logged',
        login: route == '/login',
        register: route == '/register',
        grid_list:route == '/grid' || route == '/list',
        single: route =='/single-property/'+route.split("/")[2]

    }
})
```

## Problem: To reduce the length of a border
```css
  div  {
    position: relative;
    font-size: 1em;

} 
div :after {
  content: "";
  background: #20B2AA;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 90%;
}
```
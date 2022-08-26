# On Page ® Widgets

This project contains a `lib/` folder with the On Page widgets and a `demo/` folder with a simple Vue3 project to try out the lib.

# Usage
Import the minified library into your website
```html
<script src=""></script>
```

## Edit form
This function allows you to open a modal window within your website that allows the user to edit a Thing.
The user will be asked to login, and of course it must already have write access to this project.
```js
OnPage.openEditModal(thing_id, schema_id, resource_id)
```

## Demo

Launch the demo server:

```bash
cd demo
yarn
yarn dev
```

## Build the library for the browser

Build files into `lib/dist/` folder:

```bash
cd lib
yarn
yarn build
```

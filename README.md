# On Page ® Widgets

This project contains a set of Javascript functions that will allow your website users to interact with the data stored in On Page.

# Install

Import the minified library into your website using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/onpage-widgets@1/dist/index.min.js"></script>
```

# Features

This section will describe all the available functions.

## Allow users to edit elements

This function allows you to open a modal window within your website that allows the user to edit a Thing.
The user will be asked to login, and of course it must already have write access to this project.

```js
OnPage.openEditModal(thing_id, schema_id, resource_id);
```

## Demo

Launch the demo server:

```bash
cd demo
yarn
yarn dev
```

## Build the library for the browser

Build files into `dist/` folder:

```bash
yarn
yarn build
```

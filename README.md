# Javascript client for Minutemailer API

`yarn add @minutemailer/api`

## Simple usage

```js
import Minutemailer from "@minutemailer/api";

const token = ""; // Create token at https://app.minutemailer.com/u/settings/api then insert here
const minutemailer = new Minutemailer(token);

// Fetch all contact lists
minutemailer
    .contactList()
    .index()
    .then(console.log)
    .catch(console.error);
```

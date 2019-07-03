# Serverlesstodo

## Steps to create this project from scratch

## Step 1

```sh
  npm install -g @angular/cli
  ng new serverlesstodo
  cd serverlesstodo
```

## Step 2

```sh
  npm i -S aws-amplify aws-amplify-angular
```

## Step 3

```sh
   npm install -g awsmobile-cli
```

## Step 4

Next configure the AWS access, it will create necessary configuration files to communicate with your AWS environment.

```sh
awsmobile configure
```

You will be asked 3 questions:

1. accessKeyId 2) secretAccessKey 3) region

![configure-1](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/awsmobile%20configure-1.PNG)

![configure-1](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/awsmobile%20configure-2.PNG)

![configure-1](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/awsmobile%20configure-3.PNG)

Do this configuration setting once in your computer and you are good to go.

## Step 5. Create Backend App

Initialise Mobile Hub Project.

Login to your AWS account and go to the Mobile Hub service, and create a new project.

Create Project : serverlessdto
Select Platform: JS
![create app](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/create-backend-app.PNG)

![jsplatform](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/js-platform.PNG)

![download configs](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/download%20cloud%20config.PNG)

## Step 6

Now go to your Angular project and run the given `awsmobile init` command.

![Aws Mobile Init](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/awsmobile%20initi%20steps.PNG)

## Step 7. Integrate Amplify with Angular

Add aws config files into the `src\app` folder.

![folder structure](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/folder%20structure.PNG)

Add Script for Global in head section of `index.html`

```html
<script>
  if (global === undefined) {
    var global = window;
  }
</script>
```

📃**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Serverlesstodo</title>
    <base href="/" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script>
      if (global === undefined) {
        var global = window;
      }
    </script>
  </head>

  <body>
    <app-root></app-root>
  </body>
</html>
```

Next go to tsconfig.app.json file and include node for the types in compilerOptions field.

```js
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "types": ["node"] // node is required
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts"
  ]
}

```

App.component.html

```html
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <hr class="my-4" />
  <p class="lead">{{message}}</p>
</div>
```

App.Component.ts

```ts
import { Component, OnInit } from '@angular/core';
import awsmobile from './aws-exports';
import Amplify from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = '';

  ngOnInit() {
    Amplify.configure(awsmobile);
    console.log('Amplify Initialised');
    this.message = 'Amplify Initialised';
  }
}
```

Now run `ng serve -o` you should see Amplify Initialized message.

![app running](https://github.com/rupeshtiwari/serverless-todo/blob/master/docs/app%20running%20with%20amplify%20initialized.PNG)
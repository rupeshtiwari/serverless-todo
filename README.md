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

## Step 5

Initialise Mobile Hub Project.

Login to your AWS account and go to the Mobile Hub service, and create a new project.

Create Project : serverlessdto
Select Platform: JS

## Step 6

Now go to your Angular project and run the given `awsmobile init` command.

![Aws Mobile Init]()

## Step 7

**Integrate Amplify with Angular**

Add Script for Global in angular app

```html
<script>
  if (global === undefined) {
    var global = window
  }
</script>
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

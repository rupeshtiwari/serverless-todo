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

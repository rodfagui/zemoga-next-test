This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the project:

```bash
git clone https://github.com/rodfagui/zemoga-next-test.git
```

Install the required dependencies for the project to work properly:

```bash
yarn install
```

I added cypress to the project, to add some end-to-end tests. To run cypress tests:

```bash
yarn cypress
```

We use MongoDB to persist the result of the votes for each celebrity. Add the .env file sent to your mail to the root of the project. This is used to set the connection to a MongoDB Atlas database.

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the results of the UI test.

## Deploy on Vercel

This project was deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). You can see the production version by visiting [zemoga-next-test.vercel.app](https://zemoga-next-test.vercel.app/).

A Production Deployment will be created each time you push to the "main" branch.
# Midrpoint

A simple webpage to figure out a meeting point for up to 8 of us using the Singapore MRT.

Generated with Next.js, written in React.

Deployed at https://midrpoint.vercel.app/

## Local Setup

```
npm install
npm start
```

## Method
Run Djikstra for each starting point, then calculate mean and standard deviation of each destination.
Sort results (ascending) by mean and then standard deviation.

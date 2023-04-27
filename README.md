# <font color="red">M</font>idp<font color="red">r</font>oin<font color="red">t</font>

A simple webpage to figure out a meeting point for up to 8 of us using the Singapore MRT.

Generated with Next.js, written in React.

Deployed at https://midproint.vercel.app/

## Local Setup

```
npm install
npm start
```

## Method
Given travel time estimates from MRT boards, construct an undirected weighted graph (adjacency list) with travel time as weights. Internal transfers are treated as seperate vertices (i.e. it takes time to transfer between lines).

Run Djikstra for each starting point, then calculate mean and standard deviation of each destination.

Sort results (ascending) by mean and then standard deviation.

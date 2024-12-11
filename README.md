# Next.js Unhandled Runtime Error

This repository demonstrates an example of an unhandled runtime error in a Next.js application and how to solve it using error boundaries.

## Problem

The `pages/about.js` file attempts to access the `age` property of a data object that doesn't contain that property.  This causes a runtime error which crashes the application.

## Solution

The solution involves implementing an error boundary to gracefully handle and render a fallback UI when an error occurs.
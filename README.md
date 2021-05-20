# moVies 
This is the react-native repository for a moVies app.

## Getting started

Create a `.env` at the root of the project.

Add the following:

    API_KEY=[YOUR_API_KEY]
    API_URL=https://api.themoviedb.org/3/search/multi
    POSTER_URL=https://image.tmdb.org/t/p/original/

 Install and then start!

    npm i
    npm run ios

or

    yarn
    yarn ios

# Approach
I favour a 'behavioural' approach to building apps (sometimes called functional) - planning the implementation from the user perspective. 

For this brief, that gave me these AC's: 

> As a user, when I come to your App I want to...
> - be able to search for my favorite movie...
> - be presented with my results...
> - (or get feedback if my search fails)
> - be able to find out more about a search result.

With this criteria I can plan the design & implementation.

It also gives me a spec for what I will need to test:   

    renders the App with a search...
    && the search updates when i type  a query...
    && a query returns a list of items...
    || a query returns an error...
    && clicking a list item takes you to the detail page

Wherever possible I try to avoid too many packages, and opt for web Api's (eg fetch), or default react (eg. context).

`react-native` folder structures can be a bit noisy, so I tend to move the app code into `./src` (also brings developer experience consistency for people coming for `react`).

 

# Documentation
This is a living doc. It details how we're building the front-end / UI. Things will change as we go, but that's OK.

## Stack & Tooling
This project was [built with](https://reactnative.dev/docs/environment-setup) `react-native`.

## Testing
We're using [Jest](https://jestjs.io/) as shipped with `react-native`, with [react-native-testing-library](https://callstack.github.io/react-native-testing-library/).

# Framework
We're all about [React-native](https://reactnative.dev/) with [hooks](https://reactjs.org/docs/hooks-intro.html).

## Syntax
Plain old JS.

## Routing
Keeping it simple with [react-navigation](https://reactnavigation.org/).

## Theming

We've kept it simple, using the light-mode/dark-mode default themes shipped with [react-navigation](https://reactnavigation.org/docs/themes/), otherwise it's plain old css using a [BEM](http://getbem.com/) pattern.

## API Requests
Out the box [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to query [TMDB](https://www.themoviedb.org/).

## Global state
[Context](https://reactjs.org/docs/context.html) does the job here. 
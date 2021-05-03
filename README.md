# Bite Size
Bite Size is a full-flavoured recipe app, that trimmed the fat, and is presented in a bite-sized, easily digestable format. The application uses [Svelte](https://svelte.dev/) and [Sapper](https://sapper.svelte.dev/) in the front-end and [Fastify](https://www.fastify.io/) as the back-end server. We also use [Cloudinary](https://cloudinary.com/) for image hosting and [Fuse.js](https://fusejs.io/) for its powerful search functionality.

This project was developed by [Eppa Lea Turniawan](https://github.com/eppalea), [Evan Quirk](https://github.com/evanquirk) and [Sydney Sisco](https://github.com/sydney-sisco).

## Welcome to Bite Size!
!["Home page"](https://github.com/sydney-sisco/bite-size/blob/main/docs/media/home-page.png?raw=true)

Find your new favourite recipe using keyword search and filters
!["Searching and Filtering"](https://github.com/sydney-sisco/bite-size/blob/main/docs/media/search-and-filters.gif?raw=true)

Recipes are displayed for easy viewing
!["Viewing a recipe"](https://github.com/sydney-sisco/bite-size/blob/main/docs/media/recipe-page.png?raw=true)

Easily add your own recipes! Instructions and ingredients are added using a large `<textarea>` but are broken down into individual items for display
!["Editing a recipe"](https://github.com/sydney-sisco/bite-size/blob/main/docs/media/edit-page.png?raw=true)

## Running the app
This repo includes two seperate apps, a front-end Svelte/Sapper app and a back-end server running Fastify. To get the full application up and running first create a `.env` file in both the `client/` and `server/` directories using the `.env.example` files as a template. Then run these commands:
```sh
# start the front-end
cd client/
npm i
npm run dev
```
and in another terminal:
```sh
# start the server
cd server/
npm i
npm run dev
```
Bite Size should now be live at http://localhost:5000 🎉

## Dependencies
- Svelte
- Sapper
- Attractions
- Fuse.js
- Fastify

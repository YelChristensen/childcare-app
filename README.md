# Childcare-App

![App Screenshot](/src/assets/ScreenshotMain.png)

## An app for finding a nanny for your child.

**Childcare-App** is an online tool for finding childcare in your area. To find a candidate, use dropdown menu to narrow your search or click "See all" to browse profiles. 

Whilst this is a basic app, it is the first project I've built completely on my own from scratch (using create-react-app). The aims of the project were:
- To get coding again
- To test my ability to build an app on my own (well, apart from relying heavily on Google, YouTube and StackOverflow ;))
- To learn React Hooks and Material UI, which I have not used before 
- To try out S3 bucket for storing images which I haven't used before either

### Techologies

- React Hooks
- Node
- PostgreSQL
- Material UI

### Installation and set-up

- clone the repo and run `npm install` to donwload dependencies.
- create a local PostgreSQL database and initialise it by running the query in `database.sql`.
- add the config variables below to your `.env` file.

```
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=
```

- run `npm start` to launch and navigate to localhost:8080 to view in your browser.

The app utilises AWS S3 bucket for storing profile pictures of the nannies, so the following is also required:

```
S3_REGION=
S3_BUCKET=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
```

### How it works

The app fetches all nanny profiles from the database, takes data from "city" and "filter" column, filters it down, so it isn't repeated and populates the dropdown fields. When "Search" button is pressed, an array of search parameters (collected from dropdown) is sent to fetch the relevant profiles and displyed on the page. The child's age filter works by checking that the age selected by the parent falls within "min_child_age" and "max_child_age" provided by the nanny and stored in the database.

### Todos:
+ Deploy to Heroku
+ Fine-tune CSS and responsive design
+ Amend dropdown, allowing to filter by one parameter (rather than requiring all three)
+ Ability to add more profiles
+ Create login routes for nannies and parents
+ Activate the links 
+ Write tests

# Re:Source [Lifesaver](public/lifesaver.png)

## A resource management app for disaster relief teams

Re:Source is a final group project built in one week by a team of 5 developers as part of Enspiral Dev Academy's bootcamp programme.

This is an app to manage essential resources such as food, water, shelter in different disaster centers. A team leader at a location can immediately see the current stock of essential resources and increase or decrease supplies as needed. 

We want to use progressive web app because we want to be able to see stock items in low connectivity situations. 

Stretch goal: it would be great to apply this app to volunteer human resources too (e.g. dispatching medically trained staff to a disaster center).

### To run this app:

Clone down the repo by running the following in your terminal command line:

- `git clone https://github.com/julia-mareike/Re-Source.git` 
- `cd Re-Source`
- `yarn` or `npm install` (this will also run the database migrations)
- `yarn knex seed:run` or `npm run knex seed:run`

Create a file called '.env', copy in line two from the '.env.example' file containing the JWT_SECRET, and save.

- run `yarn start` or `npm run start`, and in your browser navigate to `http://localhost:3000`

If you have trouble installing sodium, you may need to also install the sodium autotools (libtool, autoconf and automake). 

At the login page, you can register a new user which will then take you to the main page. This app still has a few areas to be worked on to be fully functional, and currently works best in Firefox.
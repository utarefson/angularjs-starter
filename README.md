# AngularJS Starter Project

## Used tools

- `bower` and Scripts injection for dependencies
- `gulp` tasks
- Use pure old JavaScript
- Pure `CSS` for styling
- `UI-Roter` module

## Install dependencies

```
yarn install
bower install
``` 

## Development server

Run `gulp serve` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Serving files from `dist`

Run `gulp serve:dist`. This will allow run your application into `distribution` mode.

## Build

Run `gulp build` to build the project. The build artifacts will be stored into `dist/` directory.

## Running unit tests

Run `gulp test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## JsonServer
json-server db/users.json --port 9000

===============================================

[GET] 		http://localhost:9000/users
Url:
http://localhost:9000/users

Response:
{
  "users": [
    {
      "id": 1,
      "username": "roberto.perez@gmail.com",
      "password": "roberto"
    },
    {
      "id": 2,
      "username": "maria.lopez@gmail.com",
      "password": "maria"
    }
  ]
}

===============================================

[GET]		http://localhost:9000/users/<id>
Url:
http://localhost:9000/users/1

Response:
{
  "id": 1,
  "username": "roberto.perez@gmail.com",
  "password": "roberto"
}

===============================================

[POST]		http://localhost:9000/users
Url:
http://localhost:9000/users

Body:
{
  "username": "bruno.mars@gmail.com",
  "password": "bruno"
}

Response:
{
  "username": "bruno.mars@gmail.com",
  "password": "bruno",
  "id": 3
}

===============================================

[PUT] 		http://localhost:9000/users/<id>
Url:
http://localhost:9000/users/3

Body:
{
  "username": "bruno.diaz@gmail.com",
  "password": "bruno"
}

Response:
{
  "username": "bruno.diaz@gmail.com",
  "password": "bruno",
  "id": 1
}

===============================================

[DELETE] 	http://localhost:9000/users/<id>
Url:
http://localhost:9000/users/3

Response:
{}

===============================================

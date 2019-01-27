# React Assesment

This mini project creates by requirement the following : 

    - User can view list of users
    - User can view list of posts of each user
    - User can view list of albums of each user
    - User can view the detail of each post and its comment
    - User can view list of photos from an album
    - User can view the detail of photo
    - User can add, edit and delete post
    - User can add, edit and delete comment

# Features!
  - Create, Read, Update, Delete posting "Post Features".
  - Create, Read, Update, Delete Comments "Comments Features".
  - List View User by Api.
  - List Image and show detail or Zoom image. 
  - Show list comments from user post.

### Tech!
The tech, i used the folowing:

* ReactJS - Modern Javascript for web apps!
* Bootstrap - Css framework.
* Webpack 4 - Web Dev Server.
* Node V8
* npm 3.5.2
* Eslint - Linter the rules for code.
* Jest - Unit Testing React.
* Json Server - Get Fake REST API, i used for CRUD.
* RESTFUL API - Interaction Request GET,POST,PUT,DELETE.
* Babel - bundling javascript code jsx.

### Getting Started
Clone and run application.

```sh
$ cd /{YOUR_PATH_FOLDER}/
$ git clone "https://github.com/adreansyah/eleapps"
$ cd eleapps/
```
Start React Apps
```sh
$ cd eleapps/
$ npm install 
$ npm start
```
Now you can open link http://localhost:8080.

### Start JSON server

Install JSON Server for execution Fake RestFull API.
```sh
npm install -g json-server
```
Create a db.json file with some data
```json
{
  "posts": [
    {
      "title": "Highcharts Stock Demo",
      "body": "lorem ipsum dolor sit amet que zuka dolor",
      "userId": "2",
      "id": 1
    }
  ],
  "comments": [
    {
      "body": "Highcharts Stock Demo",
      "postId": "1",
      "id": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```
Start JSON Server
```sh
json-server --watch db.json
```
Now you can open link http://localhost:3000/post.

### Run Unit Test
If you want to check Unit Test.
```sh
$ cd /{GIT_CLONE_FOLDER}/
$ npm test
```

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/adreansyah/eleapps/)
##### 
## :heart: Star :heart: the repo to support the project or :smile:[Follow Me](https://github.com/kanchan0).Thanks!

# Documentation_Using_swagger
A express app to show to do proper documentation of RESTful APIs using swagger.
Swagger allows you to describe the structure of your APIs so that machines can read them. The ability of APIs
to describe their own structure is the root of all awesomeness in Swagger.
for futher details vist the link https://swagger.io/docs/specification/2-0/what-is-swagger/

#### To get started follow the steps 
##### 1. clone the project `git clone git@github.com:kanchan0/Documentation_Using_swagger.git`
##### 2. Make a folder in root directory named config and a file name keys.js inside it
         This file contains the detail of the database connectivity. Give the details in
         the following format
         
         module.exports={
            MONGO_URI:'Mngodb uri to connect'
         }
         
##### 3. run "npm install" to download all the dependencies
##### 4. Run the project by "nodemon app.js" or "node app.js"
##### 5.open browser and visit "http://localhost:8000/documentation"


#### Understanding the code
##### I am assuming you know how the basic express app works and use of multer for uploading files.

##### Now lets dive into how swagger gives us the beautiful documentation
         DocSwagger.js
         
         const swaggerUi=require('swagger-ui-express');       //This module allows you to serve auto-generated swagger-ui                                                                   //generated API docs from express
         const swaggerJsDoc=require('swagger-jsdoc');         //Allows you to markup routes with jsdoc comments
         
         //option is what you see before the routes start like name,description,baseUrl etc.         
         const Options={
             swagger:'2.0',
             swaggerDefinition:{
                 info:{
                     title:'REST APIs',
                     version:'1.0.0',
                     description:'Swagger for documenting RESTFul apis'
                  },
                 basePath:'/Documentation'
             },
             apis:['endPoints.js']
         }

         const specification=swaggerJsDoc(Options);

         module.exports=(app)=>{

             app.use('/documentation',swaggerUi.serve,swaggerUi.setup(specification));

         }


##### endpoints.js{This is not the whole file just the part that need a bit explaination}
        
             /**
              * @swagger
              * /users:                               #routes
              *      post:                            # type of request {get,post,put,delete}
              *        tags: 
              *        - user                    
              *        summary: create users
              *        description: This operation creates user
              *        consumes:                     # type of data it will take 
              *        - multipart/form-data         # it parts the input into multiple part,it can text as well as file
              *        produces:                     # type of output data
              *        - application/json
              *        - application/xml
              *        parameters:                   
              *        - in: formData                
              *          name: profilePicture
              *          type: file
              *          required: true
              *          description: The file to upload.
              *        - in: formData
              *          name: email
              *          type: string
              *          required: true
              *          description:   email id please 
              *        - in: formData
              *          name: firstName
              *          type: string
              *          required: true
              *          description: first name of the user    
              *        - in: formData
              *          name: lastName
              *          type: string
              *          required: true
              *          description: lastname of the user
              *        responses:
              *            200:
              *              description: successful
              *            400:
              *              description: bad request
              *            500:
              *              description: internal server error
             
             
              #Schema to give idea how data should be passed.Although you can't see the use of it in above route
              # refer to "PUT" in endpoints.js, to know its functionality.
     
              * definitions:               
              *      User:
              *         type: object
              *         properties:
              *              email:
              *                  type: string
              *              firstName:
              *                  type: string
              *              lastName:
              *                  type: string
              */


         


#### Snapshot of the documentation you get.

![MainPage](uploads/home.png)
This is the home page where you can see all the apis you have created and can test by expanding them.
#### .
#### .
#### .

![MainPage](uploads/user.png)
After expanding the api for url 'localhost:8000/users', you will get the above view.
To test it just click on `try it out` and fill the required details and click on execute.
#### .
#### .
#### .

![MainPage](uploads/put.png)
This is for modifying details of the created user by providing details you want to change.




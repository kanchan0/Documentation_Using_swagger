const routes=require('./Routes/route')

const initEndPoint=(app)=>{

   
    /**
     * @swagger
     * /users:
     *      post:
     *        tags:
     *        - user
     *        summary: create users
     *        description: This operation creates user
     *        consumes:
     *        - multipart/form-data
     *        produces:
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
     *     
     *   
     *      get:
     *          tags:
     *          - user
     *          summary: get all users
     *          description: This operation fetched all the users
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters: []
     *          responses:
     *              200:
     *                  description: sucessfull
     *              400:
     *                  description: bad request
     *              500:
     *                  description: internal server error
     *
     * /users/{userId}:
     * 
     *     put:
     *        tags:
     *        - user
     *        summary: Update user
     *        description: This Updates the existing user
     *        consumes:
     *        - application/json
     *        - application/xml
     *        produces:
     *        - application/json
     *        - application/xml
     *        parameters:
     *        - in: path
     *          name: userId
     *          description: id that needs to be updated
     *          required: true
     *          type: string
     *        - in: body
     *          name: body
     *          description: details that you want to change
     *          required: true
     *          schema:
     *            $ref: "#/definitions/User"
     *        responses:
     *            200:
     *              description: successful
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error
     *     
     *     get:
     *          tags:
     *          - user
     *          summary: get users by Id
     *          description: This operation fetches details of the user matching id
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters: 
     *           - in: path
     *             name: userId
     *             description: id that needs to be updated
     *             required: true
     *             type: string
     *          responses:
     *              200:
     *                  description: successful 
     *              400:
     *                  description: bad request
     *              500:
     *                  description: internal server error
     *
     *     delete:
     *        tags:
     *        - user
     *        summary: deletes User
     *        description: This operation delete user using ID
     *        consumes:
     *        - application/json
     *        - application/xml
     *        - string
     *        produces:
     *        - application/json
     *        - application/xml
     *        parameters:
     *        - in: path
     *          name: userId
     *          description: give id of the user to delete
     *          required: true

     *        responses:
     *            200:
     *              description: successful
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error
     * 
     * /users/upload:
     *      post:
     *        tags:
     *        - user
     *        summary: Upload Files
     *        description: This operation upload files
     *        consumes:
     *          - multipart/form-data
     *        produces:
     *        - application/json
     *        - application/xml
     *        parameters:
     *          - in: formData
     *            name: upfile
     *            type: file
     *            required: true
     *            description: The file to upload.
     *          - in: formData
     *            name: upfile2
     *            type: file
     *            required: false
     *          - in: formData
     *            name: upfile3
     *            type: file
     *            required: false
     *        responses:
     *            200:
     *              description: successful
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error
     * 
     * 
     *  
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
     * 
     *   
     *       
     */

app.use('/',routes);

}

module.exports=initEndPoint;
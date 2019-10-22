const swaggerUi=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');

const Options={
    swagger:'2.0',
    swaggerDefinition:{
        info:{
            title:'REST APIs',
            version:'1.0.0',
            description:'Swagger for documenting RESTFul apis'
         },
        basePath:'/'
    },
    apis:['endPoints.js']
}

const specification=swaggerJsDoc(Options);

module.exports=(app)=>{

    app.use('/documentation',swaggerUi.serve,swaggerUi.setup(specification));

}
const multer =require('multer');
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString()+file.originalname);
    }
})

const fileFileter = (req,file,cb)=>{
    //reject file
    if(file.mimetype==='image/jpeg'|| file.mimetype==='image/png'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload = multer({
    storage:storage,
    limits:{
    fileSize:1024*1024*5      
    },
    fileFilter:fileFileter
})

module.exports=upload;
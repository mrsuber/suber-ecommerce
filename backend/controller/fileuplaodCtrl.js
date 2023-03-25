const SingleFile =  require('../models/singleFileUploadModel');
const fileSizeFormater = (bytes,decimal)=>{
  if(bytes===0){
    return '0 Bytes'
  }
  const dm = decimal || 2;
  const sizes = ['Bytes','KB', 'MB', 'GB','TB', 'PB', 'EB', 'YB', 'ZB' ]
  const index = Math.floor(Math.log(bytes) / Math.log(1000))
  return parseFloat((bytes/Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index]
}

exports.fileuplaodCtrl = {

  singlefileupload:async (req, res, next) =>{
    try {
      const file = new SingleFile({
        fileName: req.file.originalname,
        filePath:req.file.path,
        fileType:req.file.mimetype,
        fileSize:fileSizeFormater(req.file.size, 2)
      })
     await file.save()
      res.status(201).send("File Uploaded Successfully")
    } catch (err) {
      res.status(400).send(err.message)
    }
  },
  getSingleFile:async (req,res,next)=>{
    try {
     const file = await SingleFile.find()
     res.status(200).json({
      data:file
     })
    } catch (error) {
      res.status(400).send(err.message)
    }
  }

}  


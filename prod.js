//Winetasting server file
const express = require('express')
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const bodyParser = require('body-parser');
const globalErrorHandler = require('./backend/controller/errorController');
const data = require('./data/Products')

const app = express();

// Limit requests from the same IP
const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again late!'
});
app.use('/api', limiter);

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json());

// Data sanitization against no sq attacks
app.use(mongoSanitize());

// Datata sanitization against XSS vulnerabilities
app.use(xss());

// Serving Static files
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
// app.use(express.static(path.join(__dirname, 'public', 'uploads')));

//on production
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'/client/build')))
  // app.get('/register',(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'))})
  // app.get('/login',(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'))})
  // app.get('/forgotpassword',(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'))})
  // app.get('/reset-password',(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'))})
  // app.get('/verify',(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'))})
  app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'))})
  //LOAD PRODUCTS FORM SERVER
  // app.get('/api/products', (req,res)=>{
  //   res.json(data)
  // })
  //SIGLE PRODUCT FORM SERVER
  // app.get('/api/products/:id', (req,res)=>{
  //   const product = data.find((p) => p._id === req.params.id)
  //   res.json(product)
  // })
}else{
  // on development
  app.use('public/uploads', express.static(path.join(__dirname, 'public/uploads')))
  
  app.get('/backend', (req,res)=>{
    res.send('Hoh Api running');
  })
}


//routes

app.use('/api', require('./backend/routes/authRouter'))
app.use('/api', require('./backend/routes/userRouter'))
app.use('/api', require('./backend/routes/normalgetRoute'))

app.use('/api', require('./backend/routes/productCategoryRoutes'))
app.use('/api', require('./backend/routes/productRoutes'))
// Use Error Handler
app.use(globalErrorHandler);


module.exports = app;
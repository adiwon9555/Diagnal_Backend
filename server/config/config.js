
var env=process.env.NODE_ENV || 'development';
if(env === 'test')
{
    process.env.PORT=3000;
    process.env.MONGODB_URI='mongodb://localhost:27017/DiagnalTest'
}else if(env === 'development')
{
    //dev
    // process.env.PORT=3000;
    //prod
    process.env.PORT=80;   
    process.env.MONGODB_URI='mongodb://localhost:27017/Diagnal'
}
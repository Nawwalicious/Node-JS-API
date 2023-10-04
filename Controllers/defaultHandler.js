//Default Welcome Message
function welcome(req,res)
{
    res.status(200);
    // res.send(JSON.stringify(data));  OR
    res.send("Welcome");
}
//Default Non Existent Page Message
function defaultHandler(req,res)
{
    res.status(404);
    // res.send(JSON.stringify(data));  OR
    res.send("!!! Page Does Not Exist !!!");
}
module.exports={welcome,defaultHandler};
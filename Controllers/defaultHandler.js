//Default Welcome Message
function welcome(req, res) {
    res.status(200).send("Welcome.\n/ for Home Page\n/data for Mobile Data\n/user for User Details");
}
//Default Non Existent Page Message
function defaultHandler(req,res)
{
    res.status(404);
    // res.send(JSON.stringify(data));  OR
    res.send("!!! Page Does Not Exist !!!");
}
module.exports={welcome,defaultHandler};
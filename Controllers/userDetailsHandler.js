const userData =
[
    {
        id:"1",
        name:"Nawwal",
        email:"nawwalahmed01@yahoo.com",
        password:"12345"
    }
]

//API fetching servicer below
function userDetails(req,res)
{
    res.status(200);
    // res.send(JSON.stringify(data));  OR
    res.json(userData);
}

module.exports={userDetails};
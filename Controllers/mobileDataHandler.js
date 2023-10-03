const mobileData =
[
    {
        id:"1",
        brand:"Samsung",
        model:"s23",
        image:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g.jpg",
        price:"799"
    },
    {
        id:"2",
        brand:"Samsung",
        model:"s23-plus",
        image:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-plus-5g.jpg",
        price:"999"
    },
    {
        id:"3",
        brand:"Samsung",
        model:"s23-ultra",
        image:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
        price:"1199"
    },
    {
        id:"4",
        brand:"Apple",
        model:"iPhone-15",
        image:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
        price:"899"
    },
    {
        id:"5",
        brand:"Apple",
        model:"iPhone-15-plus",
        image:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus-.jpg",
        price:"999"
    },
    {
        id:"6",
        brand:"Apple",
        model:"iPhone-15-pro",
        image:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
        price:"1199"
    },
    {
        id:"7",
        brand:"Apple",
        model:"iPhone-15-pro-max",
        image:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
        price:"1499"
    },
    {
        id:"8",
        brand:"Google",
        model:"pixel-7-a",
        image:"https://fdn2.gsmarena.com/vv/bigpic/google-pixel-7a.jpg",
        price:"1499"
    },
    {
        id:"9",
        brand:"Google",
        model:"pixel-7",
        image:"https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-new.jpg",
        price:"1499"
    },
    {
        id:"10",
        brand:"Google",
        model:"pixel-7-pro",
        image:"https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg",
        price:"1499"
    },
    {
        id:"11",
        brand:"OnePlus",
        model:"nord-3",
        image:"https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-3r.jpg",
        price:"399"
    },
    {
        id:"12",
        brand:"OnePlus",
        model:"11",
        image:"https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg",
        price:"649"
    },
    {
        id:"13",
        brand:"OnePlus",
        model:"nord-2",
        image:"https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2-5g-new.jpg",
        price:"349"
    }
]
// Product Detail Data Above


//API fetching servicer below
function dataPrinter(req,res)
{
    res.status(200);
    // res.send(JSON.stringify(data));  OR
    res.json(mobileData);
}

//API specific data printer
function dataPrinterById(req,res)
{
    const getId=req.params.id;
    
    console.log('Payload object is: '+JSON.stringify(req));
    for(let i=0;i<data.length;i++)
    {
        if(data[i].id==getId)
        {
            res.json(mobileData[i]);
            return; // return after sending response
        }
    }
    res.status(404).send('Data not found'); // send a 404 if no data is found
}

//Exporting the functions
module.exports={dataPrinter,dataPrinterById};
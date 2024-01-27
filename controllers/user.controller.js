module.exports={
getAvailableGrocery:getAvailableGrocery,
bookgrocery:bookgrocery
}


function getAvailableGrocery(req,res){
    con.connect((err)=>{
        if(err) throw err;
         let sqlquery = "SELECT * FROM grocerys WHERE stock > 0";
         con.query(sqlquery,(err,result)=>{
            if(err) throw err;
            res.send(result);
         })
    })
}

function bookgrocery(req, res) {
    const { userId, groceryList } = req.body.bookingDetails;

    con.connect((err) => {
        if (err) throw err;

        let sqlquery = "UPDATE user SET bookingItemlist = ? WHERE id = ?";
        
        con.query(sqlquery, [groceryList, userId], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });
}

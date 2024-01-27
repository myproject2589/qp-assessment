 const con = require('../connection')
module.exports={
    addItem:addItem,
    getGrocery:getGrocery,
    removeGrocery:removeGrocery,
    updateItem:updateItem,
}

function addItem(req,res){
    let {itemName,stock,price} =req.body.goceryDetails;
    con.connect((err)=>{
        if(err) throw err;
         let sqlquery = "INSERT INTO grocerys(itemName,stock,price) VALUES('"+itemName+"','"+stock+"','"+price+"')";
         con.query(sqlquery,(err,result)=>{
            if(err) throw err;
            res.send("Grocery added successfully"+result.insertId);
         })
    })

}

function getGrocery(req,res){
    con.connect((err)=>{
        if(err) throw err;
         let sqlquery = "SELECT * FROM grocerys";
         con.query(sqlquery,(err,result)=>{
            if(err) throw err;
            res.send(result);
         })
    })
}
function removeGrocery(req,res){
    const itemId=req.query.itemId;
    con.connect((err)=>{
        if(err) throw err;
         let sqlquery = "DELETE FROM grocerys WHERE ID=?";
         con.query(sqlquery,[itemId],(err,result)=>{
            if(err) throw err;
            res.send("Grocery removed successfully"+result.insertId);
         })
    })
}

function updateItem(req,res){
    let {itemName,price,itemId} =req.body.goceryDetails;
    con.connect((err)=>{
        if(err) throw err;
         let sqlquery = "UPDATE grocerys set itemName=?,price=? WHERE id=?";
         con.query(sqlquery,[itemName,price,itemId],(err,result)=>{
            if(err) throw err;
            res.send("Grocery updated successfully"+result);
         })
    })
}


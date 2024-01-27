# qp-assessment
qp-assessment


List of API 
admin Role
1)addGrocery 
=> post=> localhost:3000/admin/addItem 
,bodyDetails //{itemName:string,stock:int,price:int}

2)getGrocery
=> get=> localhost:3000/admin/getGrocery

3)removeGrocery
=> get=> localhost:3000/admin/removeGrocery/itemId=? 

4)updateItem
=> post=> localhost:3000/admin/updateItem 
,bodyDetails //{itemName:string,price:int,itemId:int}


userRole
1)get Available Grocery
=> get=> localhost:3000/user/getAvailableGrocery

2)book grocery
=> post=> localhost:3000/user/bookgrocery 
,bodyDetails //{userId:int ,groceryList:[{ItemName,quentity}]}

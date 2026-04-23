
const orderModel = require('../models/orderModel')

//create Order - api/v1.order
exports.createOrder = async (req , res, next) =>
{
    //onsole.log(req.body,'DATA');
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item)=>(
       acc + item.product.price * item.qty
    ),0)).toFixed(2); //for avoiding the decimal
    const status = 'pending'
    const order = await orderModel.create({cartItems,amount,status})


    res.json({
        success: true,
        order
    })
}
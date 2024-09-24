import Order from "../Models/Order"
// export const createOrder = async (request, response) => { 
//   const { 
//     _id, 
//     paymentMode, 
//     paymentStatus, 
//     totalPrice, 
//     shippingAddress, 
//   } = request.body; 
//   const order = new Order({ 
//     user: _id, 
//     paymentMode, 
//     paymentStatus, 
//     totalPrice, 
//     shippingAddress, 
//   }); 
//   try { 
//     const savedOrder = await order.save(); 
//     response.status(201).json(savedOrder); 
//   } catch (error) { 
//     response.status(400).json({ message: "Could not place order, try after some time" }); 
//   } 
// }; 
 
// export const fetchOrder = async (request, response) => { 
//   const { 
//     orderId 
//   } = request.body; 
  
//   try { 
//     const orderDetails = await Order.find({ _id: orderId }).populate('user'); 
//     response.status(201).json(orderDetails); 
//   } catch (error) { 
//     console.log(error); 
//     response.status(400).json({ message: "Could not place order, try after some time" }); 
//   } 
// }; 
 
 
 
export const createOrder = async (request, response) => { 
  console.log('createOrder started ') 
  // const { _id, paymentMode, paymentStatus, totalPrice, shippingAddress } =request.body; 
  const data = request.body; 
  // console.log(request.body); 
   
   
  // const order = new Order(data); 
  try { 
    const savedOrder = await Order.create(data) 
    response.status(201).json(savedOrder); 
  } catch (error) { 
    console.log(error) 
    response 
      .status(400) 
      .json({ message: "Could not place order, try after some time" }); 
  } 
}; 
 
export const fetchOrder = async (request, response) => { 
  const { userId } = request.query; 
console.log(userId); 
 
  try { 
    const orderDetails = await Order.find({  userId }).lean() 
    response.status(200).json(orderDetails); 
  } catch (error) { 
    console.log(error); 
    response 
      .status(400) 
      .json({ message: "Could not place order, try after some time" }); 
  } 
};
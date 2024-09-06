import Order from "../Models/order.js";
export const createOrder =async(request,response) =>{
    const {
        _id,
        paymentMode,
        paymentStatus,
        totalPrice,
        shippingAddress,
      } = request.body;
      const order = new Order({
        user: _id,
        paymentMode,
        paymentStatus,
        totalPrice,
        shippingAddress,
      });
      try {
        const savedOrder = await order.save();
        response.status(201).json(savedOrder);
      } catch (error) {
        response.status(400).json({ message: "Could not place order, try after some time" });
      }
    };
    export const fetchOrder = async (request, response) => {
      const {
        orderId
      } = request.body;
     console.log(orderId);
      try {
        const orderDetails = await Order.find({ _id: orderId }).populate('user');
        response.status(201).json(orderDetails);  
      } catch (error) {
        console.log(error);
        response.status(400).json({ message: "Could not place order, try after some time" });
      }
    }; 
    export const fetchUserOrders = async (request, response) => {
      const {
        userId
      } = request.body;
     console.log(userId);
      try {
        const orderDetails = await Order.find({ user: userId }).populate('user');
        response.status(201).json(orderDetails);  
      } catch (error) {
        console.log(error);
        response.status(400).json({ message: "Could not place order, try after some time" });
      }
    }; 
    // 66acad9710490918c822d021
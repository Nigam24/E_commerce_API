import Gym from "../Models/Gym.js";
const createGym = async (req, res) => {
    const { title, price,rating,category,description,discount} = req.body;
    let file = req.file;
    if (!file || !title || !price || !rating || !category ||!description || !discount) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    let image={
      fileName:file.filename,
      fileType:file.mimetype,
      fileContent:file.buffer.toString('base64')
    }
    const newGym = new Gym({ image, title, price,rating,category,description,discount });

    try {
        const savedGym = await newGym.save();
        res.status(201).json(savedGym);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const fetchoneGym = async (request, response) => {
    const {
      orderId
    } = request.body;
    console.log(request)
   
    try {
      const productDetails = await Gym.find({ _id: orderId });
      response.status(201).json(productDetails);
    } catch (error) {
      console.log(error);
      response.status(400).json({ message: "Could not place order, try after some time" });
    }
    
  };
  export const fetchallGym = async (request, response) => {
    const {
      
    } = request.body;
   
    try {
      const productDetails = await Gym.find({})
      response.status(201).json(productDetails);
    } catch (error) {
      console.log(error);
      response.status(400).json({ message: "Could not find product" });
    }
  };

export{createGym}
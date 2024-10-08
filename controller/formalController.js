import Formal from "../Models/Formal.js";
const createFormal = async (req, res) => {
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
    const newFormal = new Formal({ image, title, price,rating,category,description,discount });

    try {
        const savedFormal = await newFormal.save();
        res.status(201).json(savedFormal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const fetchoneFormal = async (request, response) => {
    const {
      orderId
    } = request.body;
    console.log(request)
   
    try {
      const productDetails = await Formal.find({ _id: orderId });
      response.status(201).json(productDetails);
    } catch (error) {
      console.log(error);
      response.status(400).json({ message: "Could not place order, try after some time" });
    }
    
  };
  export const fetchallFormal = async (request, response) => {
    const {
      
    } = request.body;
   
    try {
      const productDetails = await Formal.find({})
      response.status(201).json(productDetails);
    } catch (error) {
      console.log(error);
      response.status(400).json({ message: "Could not find product" });
    }
  };

export{createFormal}
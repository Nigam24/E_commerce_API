import User from "../Models/User.js";

export const registerUser= async (request, response) => {
    const id = request.params.id;
    const { name, email, password } = request.body;
    const user = new User({ name, email, password });
    try {
        const savedUser = await user.save();
        response.status(201).json(savedUser);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }

}

export const registerUserUsingCreate = async (request, response) => {
    const id = request.params.id;
    const { name, email, password } = request.body;
   
    try {
        const userExists = await User.exists({email: email})
        console.log('userExists::', userExists);
        if(userExists) {
            response.status(201).json({message: 'Email already exists!'});
            return;
        }
        const savedUser =  await User.create({ name, email, password });
     //   const savedUser = await user.save();
        response.status(201).json(savedUser);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }

}
export const updateUser = async (request, response) => {
    const id = request.params.id;
    const { name, email, password } = request.body;
   
    try {
        const user = await User.findOne({email: email})
        console.log('userExists::', user);
        if(!user) {
            response.status(201).json({message: 'User does not exists!'});
            return;
        }
        user.name = name;
        const updatedUser = await user.save();
        response.status(201).json(updatedUser);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}
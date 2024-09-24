import Unknown from "../Models/Unknown";
export const admissionUnknown = async (request, response) => {
    const id = request.params.id;
    const { name, email, password } = request.body;
    const user = new Unknown({ name, email, password });
    try {
        const savedUnknown = await Unknown.save();
        response.status(201).json(savedUnknown);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }

}

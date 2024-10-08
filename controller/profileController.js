import Profile from "../Models/profile.js";
import userModel from "../Models/User.js";

// Get User Profile (GET request)
export const getAllProfile = async (req, res) => {
  const userId = req.userId;

  if (!userId) {
    return res.status(404).json({ message: "userId not found" });
  }

  try {
    console.log("getAllProfile-> ", userId);

    const profile = await userModel.findOne({ _id: userId });

    if (!userId) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Profile", error });
  }
};

// Update User Profile (PUT request)
export const updateUserProfile = async (req, res) => {
  const userId = req.userId; // Make sure userId is correctly extracted
  const { name, address, phone, email,gender,age } = req.body;

  try {
    console.log("User ID:", userId); // Debugging: ensure userId is correct
    console.log("Request Body:", req.body); // Debugging: log the request body

    const updatedProfile = await userModel.findOneAndUpdate(
      { _id: userId },
      { name, address, phone, email,gender,age },
      { new: true, runValidators: true },
        );

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.log("Error:", error); // Log the full error object for debugging
    res.status(400).json({ message: "Error updating Profile", error });
  }
};


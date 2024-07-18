import { asyncHandler } from "/Users/suryatejponnapalli/Desktop/BackendProject/src/utils/asynHandler.js";


const registerUser = asyncHandler( async (req, res) => {
    res.status(500).json({
        message: "chai aur code"
    })
} )


export {
    registerUser,
}
export const logout = async (req,res) =>{
    res.clearCookie("logindata");
    res.json({
        message:"ok"
    })
}
import executeQuery from "../../db"

export const getCategories = async (req,res)=> {
    const query = `select * from category`
    const row = executeQuery(query,[])

    res.json({
        row,
        message:"ok"
    }).status(200).end()
}
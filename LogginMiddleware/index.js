import axios from 'axios';


export const logging = async(req)=>{
    const stack=req.stack,level=req.level,pack=req.pack,message=req.message;
    try {
        await axios.post("http://20.244.56.144/evaluation-service/logs",
        {
            "stack":stack,
            "level":level,
            "package":pack,
            "message":message
        }  )
    } catch (error) {
        throw new Error("Something went wrong");
    }
}
exports.register = (req,res) =>{
    
    try{
        //code
        consloe.log("Register Work")
        res.send("Register In Controller")
    }catch(err){
        //err
        console.log(err)
        res.status(500).json({ message: " Server Error"})
    }
    
}


exports.login = (req,res)=>{
    try{
        //code
        consloe.log("Login Work")
        res.send("Login In Controller")
    }catch(err){
        //err
        console.log(err)
        res.status(500).json({ message: " Server Error"})
    }
}


exports.currentUser = async(req,res)=>{
    try {
        //code
        res.send("Hello current User")
    } catch (err) {
        consloe.log(err)
        res.status(500).json({ message: " Server Error From CurrentUser"})
    }
}


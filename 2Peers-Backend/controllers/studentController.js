const {Student} = require('../models/Student')

const addMessage = async (req, res) => {
    debugger 
    let studentId = req.params.id;
    try{
        const newMessage = await Student.addMessage(req.body, studentId);
        // if(req.query.format === 'json'){
            res.status(201).json(newMessage)
       // }
    } catch {
        res.status(404)
    }
}

module.exports = {
    addMessage
}
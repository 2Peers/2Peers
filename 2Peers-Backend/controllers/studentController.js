const {Student} = require('../models/Student')

const addMessage = async (req, res) => {
    let studentId = req.params.id;
    try{
        const newMessage = await Student.newMessage(req.body, studentId);
        if(req.query.format === 'json'){
            res.status(201).json(newMessage)
        }
    } catch {
        res.status(404)
    }
}

module.exports = {
    addMessage
}
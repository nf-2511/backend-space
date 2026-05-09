// 
const router = require('express').Router()
const adminModel = require('../models/admin.model')

router.post('/create', async (req, res) => {
    const { firstname, lastName, phone, password, role, branch } = req.body

    // Validation
    if (!firstname || !password || !phone || !branch) {
        return res.status(400).json({ message: "Fields are required" })
    }

    const checkadmin = adminModel.findOne({ phone })

    if (checkadmin) {
        return res.status(400).json({ message: "Admin already exists" })
    }

    try {
        const newAdmin = await adminModel.create({
            firstname,
            lastName,
            phone,
            password,
            role,
            branch
        })

        res.status(200).json({ message: "Admin created successfully", newAdmin })
    } catch (e) {

    }
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteAdmin = adminModel.findByIdAndDelete(id)
        res.status(200).json({ message: "Admin deleted successfully", deleteAdmin })
    } catch(e) {
        console.log(e)
    }
})
// create admin
// delete admin
// edit admin
// get admin by _id


module.exports = router

// 
const router = require('express').Router()
const adminModel = require('../models/admin.model')

router.post('/create', async (req, res) => {
    const { firstname, lastname, phone, password, role, branch } = req.body

    // Validation
    if (!firstname || !password || !phone || !branch) {
        return res.status(400).json({ message: "Fields are required" })
    }

    try {
        const checkadmin = await adminModel.findOne({ phone })

        if (checkadmin) {
            return res.status(400).json({ message: "Admin already exists" })
        }

        const newAdmin = await adminModel.create({
            firstname,
            lastname,
            phone,
            password,
            role,
            branch
        })

        res.status(200).json({ message: "Admin created successfully", newAdmin })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Server error" })
    }
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteAdmin = await adminModel.findByIdAndDelete(id)
        if (!deleteAdmin) {
            return res.status(404).json({ message: "Admin not found" })
        }
        res.status(200).json({ message: "Admin deleted successfully", deleteAdmin })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Server error" })
    }
})
// create admin
router.get('/all', async (req, res) => {

})

// login
router.post('/login', async (req, res) => {
    try {
        const { phone, password } = req.body
        console.log({phone, password})
        if (!phone || !password) {
            return res.status(400).json({ message: "Fields are required" })
        }

        const admin = await adminModel.findOne({ phone, password })

        if(!admin) {
            return res.status(400).json({ message: "Admin not found" })
        }

        res.status(200).json({ message: "Admin logged in successfully", admin })
    } catch (e) {
        console.log("error:", e)
    }
})
// delete admin

// edit admin
// get admin by _id


module.exports = router

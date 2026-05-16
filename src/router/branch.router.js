const express = require('express')
const branchModel = require('../models/branch.model')

const router = express.Router()

// API LIST
// create branch
router.post('/create', async (req, res) => {
    const { name, address, phone, } = req.body

    // validation
    if (!name || !address || !phone) {
        return res.status(400).json({ error: 'Kerakli malumotlarni to`ldiring' })
    }

    try {
        const newBranch = await branchModel.create({
            name, address, phone,
        })
        res.status(200).json({ message: "Filial muvoffiqiyatli yaratildi", newBranch })
    } catch (error) {
        console.log(error)
    }
})

// all branches
router.get('/all', async (req, res) => {
    try {
        const branches = await branchModel.find()
        res.status(200).json(branches)
    } catch (error) {
        console.log(error)
    }
})
// branch edit by id

// branch delete by id
// http://localhost:3000/api/v1/branch/delete/038912038192083d
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    const deleteBranch = await branchModel.deleteOne({ _id: id })
    // Validation

    if (!deleteBranch) {
        return res.status(400).json({ message: "Filial topilmadi" })
    }

    res.status(200).json({ message: "Filial muvoffiqiyatli o'chirildi", deleteBranch })
})
// branch details by id


module.exports = router

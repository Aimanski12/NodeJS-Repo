const express = require('express')
const multer = require('multer')
const sharp = require('sharp')

const auth = require('../middleware/auth')
const User = require('../models/user')

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({
            user,
            token
        })
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid updates!'
        })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

//sampleapp
// 123456qwerty


// file uploading
const upload = multer({
    // dest: 'images/avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Please upload an image file'))
        }
        cb(undefined, true)
    }
})




// // the key avatar in the single('avatar') is the key name
// // when you upload the image using the postman
// router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
//     req.user.avatar = req.file.buffer
//     await req.user.save()
//     res.send(req.user)
// }, (error, req, res, next) => {
//     res.status(404).send({
//         error: error.message
//     })
// })

// same as above. but this is just to format the image (resize, trim)
router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    // 
    const buffer = await sharp(req.file.buffer).resize({
        width: 150,
        height: 150
    }).png().toBuffer()

    req.user.avatar = buffer
    // await req.user.save()
    // res.send(req.user)
}, (error, req, res, next) => {
    res.status(404).send({
        error: error.message
    })
})




// delete the avatar
// the key avatar in the single('avatar') is the key name
// when you upload the image using the postman
router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send(req.user)
})

router.get('/user/:_id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params._id)
        if (!user || !user.avatar) {
            throw new Error({
                err: 'No user is found'
            })
        }
        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (err) {
        res.status(400).send()
    }
})



module.exports = router
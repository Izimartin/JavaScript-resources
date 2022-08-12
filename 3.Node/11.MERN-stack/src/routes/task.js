const express = require('express')
const Task = require('../model/task')
const router = new express.Router()
const auth = require('../middleware/auth')


router.post('/task/create', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })
  try {
    const savedTask = await task.save()
    if(savedTask) {
      const tasks = await Task.find({ owner: req.user._id })
      res.status(201).send(tasks)
    }
  } catch (err) {
    res.status(400).send({error: err})
  }
})

router.get('/task', auth, async (req, res) => {
  const task = await Task.find({
    owner: req.user._id
  })
  res.status(200).send(task)
})

router.patch('/task/:_id', auth, async (req, res) => {
  try {
    const _id = req.params._id
    const task = await Task.findOne({_id, owner:req.user._id})
    const description = req.body.description
    const completed = req.body.completed
    description ? task.description = description : null
    completed ? task.completed = completed : null
    task.save()
    res.status(202).send(task)
  } catch (err) {
    res.status(400).send({error: err})
  }
})

router.delete('/task/:_id', auth, async (req, res) => {
  try {
    const _id = req.params._id
    const task = await Task.findOneAndDelete({_id, owner:req.user._id})
    if(!task) {
      throw new Error ('No task found')
    }
    res.status(202).send(task)
  } catch (err) {
    res.status(400).send({error: err})
  }
})

module.exports = router
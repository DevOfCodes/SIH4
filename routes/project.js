//jshint esversion:6

const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {Project, validateProject} = require('../models/project');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("Request on route " + req);
    const projects = await Project.find();

    let data = {
        success: true,
        data: projects
    };

    res.send(data);
});


router.post('/', async (req, res) => {
    console.log(req.body);
    const project = new Project(_.pick(req.body, ['name', 'description', 'owner']));
    const result = await project.save();

    let data = {
        success: true,
        data: result
    };

    res.send(JSON.stringify(data));
});

module.exports = router;

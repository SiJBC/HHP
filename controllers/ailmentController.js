const db = require ("../models")

module.exports = {
    findHeadache: function(req,res){
        db.Ailments.find({"Ailment": "Headache"})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findHeadachePharm: function(req,res){
        db.Ailments.find({"Ailment": "Headache"}).find({"Method":"Pharmaceutical"})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findHeadacheNoPharm: function(req,res){
        db.Ailments.find({"Ailment": "Headache"}).find({"Method":"Non-Pharmaceutical"})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findBackpain: function(req,res){
        db.Ailments.find({"Ailment": "Backpain"})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findBackpainPharm: function(req,res){
        db.Ailments.find({"Ailment": "Backpain"}).find({"Method":"Pharmaceutical"})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findBackpainNoPharm: function(req,res){
        db.Ailments.find({"Ailment": "Backpain"}).find({"Method":"Non-Pharmaceutical"})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findAll: function(req, res) {
        db.Ailments.find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findByEmail: function(req, res){
        db.Ailments.find({"email": req.params.email})
        console.log(req.parmas.email)
        .then(dbModel => res.json(dbModel)) 
        .catch(err => res.status(422).json(err))
    },

    create: function(req, res){
      db.Ailments
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))   
    }
   
};
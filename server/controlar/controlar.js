const userDB = require('../model/modal');

// crreate and save new users 
exports.create = (req, res) => {
    // validate request 
    if (!req.body) {
        res.status(400).send({ message: `content can't be empty` });
        return;
    }

    // new user 
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })



    // save user in the database
    user.save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'some error occured'
            })
        })
}

// find user
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        userDB.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: 'user not found' })
                }
                else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: 'error retriving user' });
            })
    }
    else {
        userDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || 'something wrong' });
            })
    }
}

// update user 
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: 'data to be updated can not be empty' })
    }

    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'cna not update user' })
            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'error uddating user' })
        })
}

// delete user
exports.delete = (req, res) => {
    const id = req.params.id;

    userDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'can not delete' })
            }
            else {
                res.send({ message: 'deleted successfully' })
            }

        })
        .catch(err => {
            res.ststus(500)
                .send({ message: 'could not delete' });
        })
}
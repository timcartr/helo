module.exports={
    register: (req, res) => {
        const db = req.app.get('db')
        const {usernameInput, passwordInput} = req.body

        // console.log(req.body)

        db.create_user([usernameInput, passwordInput])
        .then( 
            result => res.send(result[0])
        )
    },
    login: (req, res) => {
        const db = req.app.get('db')
        const {usernameInput, passwordInput} = req.body

        db.select_user([usernameInput, passwordInput])
        .then(
            result => res.send(result[0])
        )
    },
    getAllUserPosts: (req, res) => {
        const db = req.app.get('db')


        db.get_all_posts_from_user(req.params.id)
        .then( results => { res.status(200).send(results)})
    }
}
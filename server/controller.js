module.exports={
    register: (req, res) => {
        const db = req.app.get('db')
        const {usernameInput, passwordInput} = req.body

        db.create_user([usernameInput, passwordInput])
        .then( 
            result => {
                req.session.userid = result[0].userid
                res.send(result[0])
            }
        )
    },
    login: (req, res) => {
        const db = req.app.get('db')
        const {usernameInput, passwordInput} = req.body

        console.log(req.session.id)
        db.select_user([usernameInput, passwordInput])
        .then(
            result => {
                req.session.userid = result[0].id
                res.send(result[0])
            }
        )
    },
    auth: (req, res) => {
        console.log(req.session.id)
    },

    conditionalPosts: (req, res) => {
        // if(req.query.userPosts === true){
            const db = req.app.get('db')
        
            db.get_all_posts()
            .then( results => { res.status(200).send(results)})
        // }
    },




    getAllSearchedPosts: (req, res) => {
        const db = req.app.get('db')
        
        
        db.get_all_search_posts(req.params.id)
        .then( results => { res.status(200).send(results)})
    },
    getAllPostsNotUser: (req, res) => {
        const db = req.app.get('db')
        
        
        db.get_all_posts_not_user(req.params.id)
        .then( results => { res.status(200).send(results)})
    },
    getSearchPostsNotUser: (req, res) => {
        const db = req.app.get('db')
        
        
        db.get_all_search_posts_not_user(req.params.id)
        .then( results => { res.status(200).send(results)})
    },
    getAllPosts: (req, res) => {
        const db = req.app.get('db')
        
        
        db.get_all_posts(req.params.id)
        .then( results => { res.status(200).send(results)})
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('http://localhost:3000/')
    }
}
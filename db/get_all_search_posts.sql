select * from posts
join users on users.id = posts.author_id
where title like $1
var Post = require('../models/post');

exports.blog = function (req, res) {

	Post.find(function (err, posts, count) {
		res.render('blog', {
			title: 'New Blog!!!',
			description: 'Awesome blog',
			posts: posts,
			postCount: count
		});
	});

};
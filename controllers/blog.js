var Post = require('../models/post');

exports.list = function (req, res) {

	Post.find(function (err, posts, count) {
		res.render('blog', {
			title: 'New Blog!!!',
			description: 'Awesome blog',
			posts: posts,
			postCount: count
		});
	});

};

exports.create = function (req, res) {

  new Post({
    content: req.body.content,
    updated: Date.now()
  }).save(function (err, post, count) {
    res.redirect('/blog');
  });

};
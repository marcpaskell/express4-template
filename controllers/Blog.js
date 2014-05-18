var Post = require('../models/Post');


exports.list = function (req, res) {
  Post.find().sort('-updated').exec(function (err, posts, count) {
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

exports.remove = function (req, res) {

  Post.findById(req.params.id, function (err, post) {
    post.remove(function (err, post) {
      res.redirect('/blog');
    });
  });
};
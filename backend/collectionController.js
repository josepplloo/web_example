const Collection = require('./collectionModel');
const provider = new Collection();

exports.index = function (req, res) {
  Collection.get(function (err, collection) {
  if (err) {
    res.json({
    status: "error",
    message: err,
    });
  }
  res.json({
    status: "success",
    message: "data retrieved successfully",
    count: collection.length,
    data: collection
  });
  });
};

exports.view = function (req, res) {
  Collection.findById(req.params.provider_id, function (err, provider) {
  if (err)
    res.send(err);
  res.json({
    message: 'Provider details loading..',
    data: provider
  });
  });
};

exports.new = function (req, res) {
  console.log('este es el body',req.body);
  provider.firstName = req.body.firstName;
  provider.lastName = req.body.lastName;
  provider.middleName = req.body.middleName;
  provider.email = req.body.email;
  
  provider.save(function (err) {
  if (err)
    res.json(err);
  res.json({
    message: 'New Provider created!',
    data: provider
  });
  });
};

exports.update = function (req, res) {
  Collection.findById(req.params.provider_id, function (err, provider) {
    if (err)
      res.send(err);
    provider.firstName = req.body.firstName;
    provider.lastName = req.body.lastName;
    provider.middleName = req.body.middleName;
    provider.email = req.body.email;

    provider.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'provider Info updated',
        data: provider
      });
    });
  });
};

exports.delete = function (req, res) {
  Collection.remove({
    _id: req.params.provider_id
  },function (err, provider) {
      if (err)
        res.send(err);
      res.json({
          status: 'success',
          message: `${provider} deleted`
      });  
  });
}
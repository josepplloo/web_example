const Collection = require('./collectionModel');
const provider = new Collection();

exports.index = getAll;

async function getAll(req, res) {
  const collection = await Collection.find();
  return res.json(collection);

}
/* 
function getAll(req, res) {  
  Collection.get(function (err, collection) {
    if (err) {
      throw res.json({
        status: "error",
        message: err,
      });
    }
    return res.json({
      status: "success",
      message: "data retrieved successfully",
      count: collection.length,
      data: collection
    });
  });
}
 */
exports.view = getOne;
async function getOne(req, res) {
  try {
    const collection = await Collection.findById(req.params.provider_id);
    return res.json(collection);
  } catch (Error) {
    //Error(err)
    throw res.json({
      status: "error",
      message: res,
    });
  }
}
/* function getOne (req, res) {
   Collection.findById(req.params.provider_id, function (err, provider) {
    if(err) {
      throw res.json({
        status: "error",
        message: err,
      });
    }
    return res.json({
      message: 'Provider details loading..',
      data: provider
    });
  });
}
 */
exports.new = createProvider;
function createProvider(req, res) {
  provider.firstName = req.body.firstName;
  provider.lastName = req.body.lastName;
  provider.middleName = req.body.middleName;
  provider.email = req.body.email;
  
  provider.save(function (err) {
    if(err) {
      throw res.json({
        status: "error",
        message: err,
      });
    }  
    return res.json({
      message: 'New Provider created!',
      data: provider
    });
    
  });
}

exports.update = updateProvider;
function updateProvider(req, res) {
  Collection.findById(req.params.provider_id, function (err, provider) {
    if(err) {
      throw res.json({
        status: "error",
        message: err,
      });
    }
    provider.firstName = req.body.firstName;
    provider.lastName = req.body.lastName;
    provider.middleName = req.body.middleName;
    provider.email = req.body.email;  
    
    provider.save(function (err) {
      if(err) {
        throw res.json({
          status: "error",
          message: err,
        });
      }
      return res.json({
          message: 'provider Info updated',
          data: provider
      });
    });
  });
}

exports.delete = eraseProvider;
function eraseProvider(req, res) {
  Collection.deleteOne({ _id: req.params.provider_id },function (err, provider) {
    if (err) {
      throw res.json({
        status: "error",
        message: err,
      });
    }  
    return res.json({
      status: 'success',
      message: `provider ${req.params.provider_id} deleted`
    });  
  });
}
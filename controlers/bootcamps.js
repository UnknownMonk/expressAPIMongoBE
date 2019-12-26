// @dec Get all bootcamps
//@route GET/api/v1/bootcamps
//@access Public

exports.getBootcamps = (req, res, nest) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @dec Get a bootcamp
//@route GET/api/v1/bootcamps/:id
//@access Private

exports.getBootcamp = (req, res, nest) => {
  res.status(200).json({ success: true, msg: `Get bootcamps${req.params.id}` });
};

// @dec Create new bootcamps
//@route POST/api/v1/bootcamps/:id
//@access Private

exports.createBootcamp = (req, res, nest) => {
  res.status(200).json({ success: true, msg: "Create new bootcamps" });
};

// @dec Update bootcamps
//@route PUT/api/v1/bootcamps/:id
//@access Private

exports.updateBootcamp = (req, res, nest) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamps${req.params.id}` });
};

// @dec Delete bootcamps
//@route Delete/api/v1/bootcamps/:id
//@access Private

exports.deleateBootcamp = (req, res, nest) => {
  res
    .status(200)
    .json({ success: true, msg: `Remove bootcamps${req.params.id}` });
};

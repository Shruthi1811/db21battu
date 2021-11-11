var tesla = require('../models/tesla');
// List of all teslas
exports.tesla_list = async function (req, res) {
    try {
        thetesla = await tesla.find();
        res.send(thetesla);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific tesla.
exports.tesla_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: tesla detail: ' + req.params.id);
};
// Handle tesla create on POST.
exports.tesla_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: tesla create POST');
};
// Handle tesla delete form on DELETE.
exports.tesla_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: tesla delete DELETE ' + req.params.id);
};
// Handle tesla update form on PUT.
exports.tesla_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: tesla update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.tesla_view_all_Page = async function (req, res) {
    try {
        theteslas = await tesla.find();
        res.render('tesla', { title: 'tesla Search Results', results: theteslas });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST.
exports.tesla_create_post = async function (req, res) {
    console.log(req.body)
    let document = new tesla();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Model = req.body.Model;
    document.year = req.body.Year;
    document.Price = req.body.Price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
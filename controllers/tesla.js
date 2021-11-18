var tesla = require('../models/tesla'); 
 
// List of all tesla 
exports.tesla_list = async function(req, res){
        try{ 
            let teslaresult= await tesla.find(); 
            res.send(teslaresult); 
        } 
        catch(err){ 
            res.status(500); 
            res.send(`{"error": ${err}}`); 
        }   
}; 
 // VIEWS 
// Handle a show all view 
exports.tesla_view_all_Page = async function(req, res) { 
    try{ 
        let teslaResult = await tesla.find(); 
        res.render('tesla', { title: 'tesla Search Results', results: teslaResult }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific tesla. 
exports.tesla_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await tesla.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle tesla delete on DELETE. 
exports.tesla_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await tesla.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle tesla update form on PUT. 
exports.tesla_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await tesla.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Model)  
               toUpdate.Model = req.body.Model; 
        if(req.body.Price) toUpdate.Price = req.body.Price; 
        if(req.body.Colour) toUpdate.Colour = req.body.Colour; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    }  
}; 
// Handle tesla create on POST. 
exports.tesla_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new tesla(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"tesla_type":"pooch", "price":12, "colour":"white"} 
    document.Model = req.body.Model; 
    document.Price = req.body.Price; 
    document.Colour = req.body.Colour; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

 
 // Handle a show one view with id specified by query 
 exports.tesla_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await tesla.findById( req.query.id) 
        res.render('tesladetail',  
{ title: 'tesla Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 


// Handle building the view for creating a tesla. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.tesla_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('teslacreate', { title: 'tesla Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.tesla_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await tesla.findById(req.query.id) 
        res.render('teslaupdate', { title: 'Tesla Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.tesla_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await tesla.findById(req.query.id) 
        res.render('tesladelete', { title: 'Tesla Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
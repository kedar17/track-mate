const trackingModel = require('../models/trackingModel');

exports.getAllTracking = (req, res) => {
  const data = trackingModel.getAll();
  const { eventId } = req.params;
  // In a real-world scenario, you would look up the event in your database.
  const trackingEvent = {
    id: eventId,
    name: "User Login",
    timestamp: new Date().toISOString()
  };
  console.log(eventId);
  res.json({ status: 'successkedar', data });
};

exports.createTracking = async (req, res) => {
  try {
    // For this example, assume you want to get the event data from req.query.
    const newEvent = req.query;
    // Await the result from the model function
    const createdData = await trackingModel.create(newEvent);
    res.json({ status: 'success', data: createdData });
  } catch (err) {
    console.error('Error in createTracking:', err);
    res.status(500).json({ status: 'error', error: err });
  }
};

//Profile response from model
exports.profileCreation = async (req,res) =>{
  try{
    const profileData = req.body;
    console.log(profileData);
    console.log(req.headers['content-type']);
    const responseData = await trackingModel.profileCreation(profileData);
    res.json({status:'Success', response: responseData});
  }catch(err){
    res.status(500).json({status:'Error', error:err});
  }
}
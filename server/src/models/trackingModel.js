const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dhruvakedar:LlN9ZSfKhJovOPMm@nascluster.hhmccnc.mongodb.net/track_mate?retryWrites=true&w=majority&appName=NasCluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const profileSchema = new mongoose.Schema({}, { strict: false });
const Profile = mongoose.model('Profile',profileSchema);

//Create profile for trackMate
async function createProfile(profileData){
	try{
		await new Profile(profileData).save();
		return{
			id:1,
			status:'Success',
			response:profileData.email
		};
	}catch(err){
		return {
			id: 2,
			status: 'Error',
			response: err,
		  };
	}

}
exports.profileCreation = async (data) =>{
	try{
		const response = await createProfile(data);
		return response;
	}catch(err){
		return { id: 2, status: 'Error', response: err };
	}
}
// End Profile Creation

const Userdata = [];
Profile.find({},{_id:0, __v:0}) 
    .then(profiles => {
	Userdata.push(profiles);
}).catch(err => console.error('Error finding users:', err));
exports.getAll = () => Userdata;

async function insertEvents(eventData) {
	try {
	  await new Profile(eventData).save();
	  return {
		id: 1,
		status: 'ok',
		response: eventData.email,
	  };
	} catch (err) {
	  console.log('Error on Profile creation:', err);
	  return {
		id: 2,
		status: 'Error',
		response: err,
	  };
	  //throw err;
	}
  }


exports.create = async (event) => {
	try {
	  const response = await insertEvents(event);
	  return response;
	} catch (err) {
	  console.error('Insert error:', err);
	  // Optionally return an error object or rethrow the error
	  return { id: 2, status: 'Error', response: err };
	}
  };
  
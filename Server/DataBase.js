const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://localhost:27017';
const dbName = 'boatDB';
const collectionName = 'boats';

//functions to be called 
function getAllBoats(callback) {
	get({}, callback)
}

function deleteBoat(_id,callback){
	del(_id, callback)
}

function addBoat(reqestsBody,callback){
	addShip(reqestsBody, callback)
}

//the functions called above
function get(filter, callback){
    MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if( error ) {
				callback('"connection problem"');
				return;  
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				const cursor = await col.find(filter); //why is named cursor
				const array = await cursor.toArray()
				callback(array);

			} catch(error) {
				console.log('Query error: ' + error.message);
				callback('"ERROR!! Query error"');

			} finally {
				client.close();
			}
        }
		
	)
}

function del(id, callback){
	
	
    MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if( error ) {
				callback('"connection problem"');
				return;  
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				const result = await col.deleteOne( { "_id" : ObjectID(id) } );
				callback({
					result: result.result,
					ops: result.ops
				})
			} catch(error) {
				console.log('Query error: ' + error.message);
				callback('"ERROR!! Query error"');

			} finally {
				client.close();
			}
        }
		
	)
}

function addShip(reqestsBody, callback) {
	const doc = reqestsBody;
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true},
		async (error, client) => {
			if( error ) {
				callback('"connection problem"');
				return;  
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				const result = await col.insertOne(doc);
				callback({
					result: result.result,
					ops: result.ops
				})

			} catch(error) {
				console.error('addHat error: ' + error.message);
				callback('"ERROR!! Query error"');

			} finally {
				client.close();
			}
		}
	)
}


module.exports = {
	getAllBoats, deleteBoat,addBoat
}
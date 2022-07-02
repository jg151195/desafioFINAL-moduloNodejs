import mongodb from 'mongodb';

function getClient(){
    const uri ="mongodb+srv://root:root@igti.ijvmndn.mongodb.net/test"
    return new mongodb.MongoClient(uri);
}

export {getClient}
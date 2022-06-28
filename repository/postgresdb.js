import pg from 'pg'

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString:'postgres://vlmfaedx:zIfhd_S0qEfSdfxHfgCTw63XWI-fiE4r@jelani.db.elephantsql.com/vlmfaedx'
    });

    global.connection = pool;
    return pool.connect();
}

export {connect}
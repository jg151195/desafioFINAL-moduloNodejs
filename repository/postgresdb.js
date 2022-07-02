import pg from 'pg'

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString:'postgres://lfslamgc:386m954WuhxD0GpHukgUzNug5WaySNc_@lallah.db.elephantsql.com/lfslamgc'
    });

    global.connection = pool;
    return pool.connect();
}

export {connect}
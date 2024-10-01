import pg from 'pg';

const pool = new pg.Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'store ',
    password: '123456',
    port: 5432,

})

const query = async (text, params) => {
    try {
        const result = await pool.query (text, params);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}


let cars = [
    { id: 1, brand: 'BMW', model: 'X5', cilinders: 6 },
    { id: 2, brand: 'Audi', model: 'Q7', cilinders: 4 },
    { id: 3, brand: 'Mercedes', model: 'GLE', cilinders: 6 },
]

export {
    cars,
    query
};
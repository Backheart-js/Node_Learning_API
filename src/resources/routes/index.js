import express from 'express';
import productRoutes from './products.js';
const app = express()

const routes = (app) => {
    app.use('/api/products', productRoutes);
}


export default routes;
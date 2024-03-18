import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import mergedTypeDefs from './src/schema/typeDef/index.js';
import mergedResolvers from './src/schema/resolver/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs:mergedTypeDefs,
    resolvers:mergedResolvers,
    plugins:[ApolloServerPluginDrainHttpServer({httpServer})]
});

server.start()
    .then(()=>{
        console.log("Apollo Server Instance Started");
    })
    .catch((error)=>{
        console.log("Apollo Server Instance Error");
    });

app.use('/', 
        cors({
            origin:"*",
            credentials:true
        }), 
        express.json(), 
        expressMiddleware(server),
);

httpServer.listen({port:PORT}, ()=>{
    // connectDB();
    console.log(`||--- 🚀 Server ready at ${PORT} ---||`);
});
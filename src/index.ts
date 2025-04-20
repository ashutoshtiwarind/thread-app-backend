import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';


async function init () {
    const app = express();

    const PORT = Number(process.env.PORT) || 8000
    
    app.use(express.json());

    const gqlServer = new ApolloServer({
      typeDefs: "",
      resolvers: {},
    });
    
    await gqlServer.start();
    
    
    app.get('/', (req, res) => {
        res.json({message: 'server is up and running'})
    });

    app.use(
      "/graphql",
      expressMiddleware(gqlServer)
    );
    
    app.listen(PORT, () => console.log("port is runnig on 8000"))
};

init();

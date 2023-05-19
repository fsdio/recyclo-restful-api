import Hapi from '@hapi/hapi';
import routes from './routes/routes.js';

export const initHapiServer = async () => {
  const hapiServer = Hapi.server({
    port: 8080,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  hapiServer.route(routes);

  await hapiServer.start();

  console.info(`Server is running on ${hapiServer.info.uri}`);
};

void initHapiServer();

import adapter from '@sveltejs/adapter-auto';
import {Server} from 'socket.io';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	//...
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				{
					name: 'sveltekit-socket-io',
					configureServer(server) {
						const io = new Server(server.httpServer);


						//socket.io stuff goes here

						console.log('socketio injected');
					}
				}
			]
		}
	},
};

export default config;

import * as http from 'http';
import * as url from 'url';


/**
 * Handles HTTP requests and provides appropriate responses based on the requested URL.
 *
 * @param {http.IncomingMessage} request - The incoming HTTP request object.
 * @param {http.ServerResponse} response - The HTTP response object to be sent to the client.
 * @returns {void}
 */
const handleRequest = (request: http.IncomingMessage, response: http.ServerResponse): void => {
  console.log(`Request Method: ${request.method}, URL: ${request.url}`);

  // Parse the URL to extract pathname and query parameters
  const parsedUrl = url.parse(request.url || '', true);

  if (parsedUrl.pathname === '/') {
    // Respond with a welcome message for the root page
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Welcome to the root page!');
  } else if (parsedUrl.pathname === '/about') {
    // Dummy JSON with creator information
    const creatorInfo = {
      name: 'Khant Sithu',
      profession: 'Full Stack Developer',
      hobbies: ['coding', 'football', 'watching movies', 'listening music', 'productivity', 'youtube', 'entrepreneurship'],
    };

    // Respond with creator information in JSON format
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(creatorInfo, null, 2));
  } else {
    // Respond with a 404 Not Found message for unrecognized paths
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 Not Found');
  }
};

const port = 3000;
const server = http.createServer(handleRequest);

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Hello World Example

export function onClientRequest(request) {
  request.respondWith(
      200, {},
      '<html><body><h1>Hello World From Akamai EdgeWorkers. Deployed by a GitHub action</h1></body></html>');
}

export function onClientResponse(request, response) {
  response.setHeader('X-Hello-World', 'From Akamai EdgeWorkers');
}

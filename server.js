const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  console.log("Hello World")
  res.send('Hello World');
});

app.get('/hello', (req, res) => {
  console.log("Hello")
  res.send('Hello');
});

app.get('/bye', (req, res) => {
  console.log("Bye")
  res.send('Bye');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

/*
docker build -t rz:1.0 .
docker run -p 5000:8080 -d rz:1.0
*/

/*
Build an image from the Dockerfile in the
current directory and tag the image
docker build -t myimage:1.0 .
List all images that are locally stored with
the Docker Engine
docker image ls
Delete an image from the local image store
docker image rm alpine:3.4

Pull an image from a registry
docker pull myimage:1.0
Retag a local image with a new image name
and tag
docker tag myimage:1.0 myrepo/
myimage:2.0
Push an image to a registry
docker push myrepo/myimage:2.0 

Run a container from the Alpine version 3.9
image, name the running container
“web” and expose port 5000 externally,
mapped to port 80 inside the container.
docker container run --name web -p
5000:80 alpine:3.9
Stop a running container through SIGTERM
docker container stop web
Stop a running container through SIGKILL
docker container kill web
List the networks
docker network ls
Run
List the running containers (add --all to
include stopped containers)
docker container ls
Delete all running and stopped containers
docker container rm -f $(docker ps -aq)
Print the last 100
lines of a container’s logs
docker container
logs --tail 100 web
*/
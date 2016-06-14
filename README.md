#Install the toolbox

https://www.docker.com/products/docker-toolbox

#Launch the docker shell

Launchpad -> docker quickstart terminal ( mac )

#Build the docker file

docker build -f ./Dockerfile .

#take note of the IMAGE "Successfully built <CONTAINER IMAGE> "

#map your local etc/hosts blank.dev -> 192.168.99.100

#start the docker container - replace with your local folder and container identifier
docker run --name blank-app -d -p 8080:80 -v <YOUR LOCAL PROJECT FOLDER>:/var/www <CONTAINER IMAGE>

#Grab the running container ID
docker ps

#Shell to the container
docker exec -it <CONTAINER ID> bash

**You shouldn't need to do this next section
But if a node package fails to install or there is a problem with composer
You may need to do these commands manually**

`cd /var/www`

`npm install`

`gulp`

`cd /var/www/remote/server`

`composer install`

#From your host go to with your browser
blank.dev:8080
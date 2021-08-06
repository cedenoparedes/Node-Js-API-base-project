Node Js API base project

1)First make docker image runing Docker file:

sudo docker build . -t node-api-img

2. Copy image to load to server

docker load -i ./node-api-img

3. run the image on server

docker run -p 3000:4000 -d -name node-api-test node-api-img

# postgres-docker-sequelize-js

Commands: 

For Dockerfile
```
 docker build -t backend-server . 
 docker images
 docker run -p 3000:3000
 docker exec -it image_id/container_id /bin/sh
 docker rmi image_id         
```

For docker-compose.yml

```
docker-compose up -d ( runs in background )
docker-compose down -v 
```

`docker logs --follow container_id`

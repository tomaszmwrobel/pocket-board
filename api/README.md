# Backend 



## Development
### Windows
Run tests
``` 
mvnw.cmd clean test
```

Build jar
```
mvnw.cmd clean package -DskipTests
```

Run application
``` 
mvn.cmd spring-boot:run
```

Build image 
```
mvnw.cmd spring-boot:build-image
```

### Unix 


## Running
docker run -p 8080:8080 docker.io/library/board:0.0.1-SNAPSHOT

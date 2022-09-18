# Backend 

##### Table of Contents
[Development-Unix](#Unix)  
[Development-Windows](#Windows)


## Development
### Unix 
Build image
```
make docker-build
```

Run docker image
```
make docker-run
```

Build and run image
```
make docker-build-and-run
```

Run tests
``` 
make test
```

Build jar
```
make build
```

Run application
``` 
make run-app
```

### Windows

Build image
```
mvnw.cmd spring-boot:build-image
or
docker build -t pocket-board-api:latest .
```

Run docker image
```
docker run --rm --name pocket-board-api -p 8080:8090 pocket-board-api:latest
```

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

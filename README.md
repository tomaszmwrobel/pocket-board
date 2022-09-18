# Pocket-board
Web Application with tools for developers . 

## How to run
Process of building application containers is platform independent it doesn't require installed software like, maven, java etc.

Requirements: 
- Docker
- Docker-Compose

### Unix

Build and run API and GUI services. In main project directory run following command: 
```
make build-and-run-all
```
Visit the URL
```
http://localhost
```
### Windows
1. In 'api' directory run: 
```
docker build -t pocket-board-api:latest .
```

2. In 'gui' directory run:
``` 
docker build -t pocket-board-gui:latest .
```

3. In root directory use run:
``` 
docker-compose up
```

Visit the URL
```
http://localhost
```

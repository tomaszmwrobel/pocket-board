say_hello:
	echo "Hello World"

docker-build:
	docker build -t pocket-board-api:latest .

docker-run:
	docker run --rm --name pocket-board-api -p 8080:8090 pocket-board-api:latest

docker-build-and-run: docker-build docker-run

docker-build-development:
	mvn spring-boot:build-image

test:
	mvn clean test

build:
	mvn clean package -DskipTests

run-app:
	mvn spring-boot:run
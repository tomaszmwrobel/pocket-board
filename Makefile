say_hello:
	echo "Hello World"

start-all:
	docker-compose up

docker-build-gui:
	cd ./gui && make docker-build

docker-build-api:
	cd ./api && make docker-build

docker-build-all: docker-build-api docker-build-gui

build-and-run-all: docker-build-all start-all

clean:
	docker-compose down

test:
	cd ./gui && make test
	cd ./api && make test

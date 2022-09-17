say_hello:
	echo "Hello World"

start-all:
	docker-compose up

docker-build-gui:
	cd ./gui && make docker-build


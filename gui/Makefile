say_hello:
	echo "Hello World"

docker-build:
	docker build -t pocket-board-gui:latest .

docker-run:
	docker run --rm --name pocket-board-gui -p 3000:3000 pocket-board-gui:latest

docker-build-and-run: docker-build docker-run

docker-build-development:
	docker build -f Dockerfile-development -t pocket-board-gui:latest .

test:
	npm test -- --watchAll=false --coverage

test-interactive:
	npm test

run-app:
	npm start
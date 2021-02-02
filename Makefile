path = docker

clean:
	docker system prune -a -f

clear:
	docker image rm react-pokemon

build:
	cd $(path) && docker build -t react-pokemon .

rebuild: clear build

run:
	cd $(path) && docker run --rm -p 82:80 react-pokemon

rerun: rebuild run

compose:
	docker-compose up --build -d
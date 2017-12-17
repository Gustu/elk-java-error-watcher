build:
	cp .env.template .env
	cp watcher/.env.template watcher/.env

run-docker:
	docker-compose up -d

run-watcher:
	cd watcher && npm start

run-all:
	docker-compose -f docker-compose-prod.yml up -d

stop-all:
	docker-compose -f docker-compose-prod.yml stop
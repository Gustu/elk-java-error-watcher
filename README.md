# Error Watcher
Error watcher which sends alerts to Slack

![alt text](https://i.imgur.com/3uyGrCd.jpg)

### Usage

To start copy .env files using command:

`make build`

Set `SLACK_INCOMING_WEBHOOK_URL` variable in `watcher/.env`. [How to get the url?](https://my.slack.com/services/new/incoming-webhook/)

Then run Docker containers:

`make run-all`

### Development

1. `make build` 
2. `make run-docker`
3. `make run-watcher`

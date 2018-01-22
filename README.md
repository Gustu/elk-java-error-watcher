# ELK Error Watcher
Error watcher which sends alerts to Slack.

![alt text](https://i.imgur.com/3uyGrCd.jpg)

Watcher is using ELK stack to read and structure logs.

### Usage

1. Copy .env files using command: `make build`
2. Set `SLACK_INCOMING_WEBHOOK_URL` variable in `watcher/.env`. [How to get the url?](https://my.slack.com/services/new/incoming-webhook/)
3. Set logs dir in the main `.env`
4. Run Docker containers: `make run-all`

### Development

1. `make build` 
2. `make run-docker`
3. `make run-watcher`

### Note

This watcher is configured to consume Java logs with custom timestamp:

```
20180107 12:01:26.346 [pool-48-thread-1] DEBUG com.example.email.EmailPollingManager - Executing mail polling
```
To consume other pattern modify `logstash/config.logstash.yml` and `logstash/config/patterns/time`.

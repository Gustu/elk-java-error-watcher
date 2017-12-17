const elasticWatcher = require("elasticsearch-nodejs-watcher");
const sendMessage = require("./slack");

const connection = {
    host: process.env.ELASTICSEARCH_URL,
    log: process.env.ELASTICSEARCH_LOG_LEVEL
};

const watcher = {
    schedule: "*/30 * * * * *",
    query: {
        index: 'logstash-*',
        body: {
            query: {
                bool: {
                    must: {match: {loglevel: "ERROR WARN"}},
                    filter: {
                        range: {"@timestamp": {gte: "now-30s"}}
                    }
                }
            }
        }
    },
    predicate: ({hits: {total}}) => total > 0,
    action: sendMessage
};

module.exports = () => elasticWatcher.schedule(connection, watcher);

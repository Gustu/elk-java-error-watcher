const request = require('request');

const RED = '#ff0000';
const YELLOW = '#ffdd00';

const sendMessage = (message, channels) => {
    console.log('Sending message to Slack');

    const cb = (err, response, body) => {
        if (err) {
            console.log('Error appeared while sending message', err);
        }
        console.log('Message sent', body);
    };

    const sendRequest = (message) =>
        request({url: process.env.SLACK_INCOMING_WEBHOOK_URL, method: "POST", json: message}, cb);

    if (channels) {
        channels.forEach(channel => {
            message.channel = channel;
            sendRequest(message);
        });
    } else {
        sendRequest(message);
    }
};

const send = (data) => {
    const mapHitToAttachment = (source) => (
        {
            pretext: `*${source.loglevel}* ${source.customTimestamp}`,
            title: `${source.class}`,
            text: `\`\`\`${source.msg}\`\`\``,
            color: source.loglevel === 'WARN' ? YELLOW : RED,
            mrkdwn_in: ['text', 'pretext']
        }
    );

    const message = {
        text: "New errors! Woof!",
        attachments: data.hits.map(hit => mapHitToAttachment(hit._source))
    };


    sendMessage(message);
};

module.exports = send;

/**
 * Copyright 2017 Justin Crawford, All Rights Reserved
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use-strict';

/*
 * Includes
 */
const twilio = require('twilio');
const log4js = require('log4js');
const MessagingResponse = twilio.twiml.MessagingResponse;

const logger = log4js.getLogger("smsServer");
var config = require('../etc/config.json')

function recvMessage(req, res)
{
    logger.debug("Received Message:\nBody:" + req.body.Body
    + "\nMessageSid:" + req.body.MessageSid 
    + "\nAccountSid:" + req.body.accountSid
    + "\nMessagingServiceSid:" + req.body.MessagingServiceSid
    + "\nFrom:" + req.body.From
    + "\nTo:" + req.body.To
    + "\nNumMedia:" + req.body.numMedia);
    const twiml = new MessagingResponse();
    twiml.message("Thanks for your message!");
    res.writeHead(200,{'Content-Type':'text/xml'});
    res.end(twiml.toString());
}



function sendMessage(to, from, msg)
{
    var smsClient  = twilio(config.accountSid, config.authToken);
    logger.debug("SMS Send Request From:" + from + " To:" + to);
    smsClient.messages.create({
        to: to,
        from: from,
        body: msg
    }, function(err, message) {
        logger.debug("Error Message:" + message);
        logger.error(err);
    })
}





logger.level = 'debug';

/**
 * Exports
 */
exports.sendMessage = sendMessage;
exports.recvMessage = recvMessage;
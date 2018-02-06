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
const version = '0.0.9';
const log4js = require('log4js');
const server = require('./src/server');
const requestHandlers = require('./src/requestHandlers');

/*
 * Variables
 */
var logger = log4js.getLogger('index');
logger.level = 'debug';
logger.info("Group Messenger Server v" + version + " Starting");

var handlerMap = [ {path: '/', handler: requestHandlers.index},
                   {path: '/sendMessage', handler: requestHandlers.sendMessage}
                 ];

server.start(handlerMap);


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
const express = require('express');
const log4js = require('log4js');
const path = require('path');

const logger = log4js.getLogger("server");
logger.level = 'debug';
const app = express();
const PORT = process.env.PORT || 8888;

/**
 * Starts server using express
 * @param {*} routeMap 
 */
function start(routeMap)
{
    logger.info("Server Initializing on port " + PORT + "...")
    app.use(log4js.connectLogger(logger, { level: log4js.levels.DEBUG}));
    app.set('views', './views');
    app.set('view engine','pug');
    app.use('/css',express.static(path.join(__dirname, '../views/css')));
    for (var i=0; i < routeMap.length; i++)
    {
        logger.debug("Path:" + routeMap[i].path + " Uses Handler:" + routeMap[i].handler );
        app.get(routeMap[i].path, routeMap[i].handler);
    }
    app.listen(PORT);
    
    logger.info("Initialization Complete. Server listenting on port:" + PORT);

}

/*
 * Exports
 */
exports.start = start;

/**
 * The index function returns a list of calendars associated with the user
 * @param {*} req The HTTP Request from Express
 * @param {*} res The HTTP Response from Express
 */
function index(req, res) 
{
    //Get List of Calendars available to user, then render
    res.render('index');
}

function sendMessage(req, res)
{
    sms = require("./smsServer");
    sms.sendMessage("6238242747", "6028332039", "Hello from GroupMessenger!");
}

exports.index = index;
exports.sendMessage = sendMessage;

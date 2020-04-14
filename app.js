const express = require("express");
const Notification = require("./notifications.js")

const app = express();

app.get("/one-user", function(req, res) {
    // Here you could receive the token id, titulo and mensage, in this case all these params are already hardcoded
    res.send("Sending Notification to One user...");
    const data = {
        tokenId: "fywyt_24WiY:APA91bGeEn4ZdQrX0Qt9QUa2OvO-GQ43mxexMt5drBbw4ifZPDsoH5upY9KH7mC09WhpNiy7JG52K2PyZXdx5EUPY9mWk2UwTUA1YM2tFa-n9t08gX4XE7vgw9yj13s8D1agdsjBCiIO",
        titulo: "Re:codigo",
        mensaje: "Message from Nodejs to One User"
    }
    Notification.sendPushToOneUser(data);
});

app.get("/topic", function(req, res) {
    // Here you could receive the topic id, titulo and mensage, in this case all these params are already hardcoded
    res.send("Sending Notification to a Topic...");
    const data = {
        topic: "test",
        titulo: "Re:codigo",
        mensaje: "Message from Nodejs to Topic test"
    }
    Notification.sendPushToTopic(data);
});

app.get("/", function(req, res) {
    res.send("Success")
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
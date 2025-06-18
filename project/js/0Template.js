"use strict"
class Template {

    userName = "vsked";

    constructor(nameStr) {
        this.userName = nameStr;
    }

    say(str) {
        console.log(this.userName + " say :" + str);
        document.querySelector("#content").innerHTML = document.querySelector("#content").innerHTML + "|" + this.userName + " say :" + str + "<br>";
    }

    static run() {
        console.log("has run ");
        document.querySelector("#content").innerHTML = document.querySelector("#content").innerHTML + "|has run <br>";
    }
}

var curPersion = new Template("sam");
curPersion.say("hello");

Template.run();

console.log("---------|" + curPersion.userName);
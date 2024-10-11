process.stdin.on("data", function(data) {
    console.log("hello, " + data);
    console.log(process.versions.node);
});

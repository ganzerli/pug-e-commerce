const app = require("./server/app");

//difining the PORT
const PORT = process.env.PORT || 5000;

// run the server
app.listen(PORT, console.log(`SERVER RUNNING ON PORT ${PORT}`));

const express = require('express');
// other libs and middleware
const app = express();
// pass the instance of our app to the routes.
require('./routes/index.js')(app);
app.listen(5050);
//# sourceMappingURL=server.js.map
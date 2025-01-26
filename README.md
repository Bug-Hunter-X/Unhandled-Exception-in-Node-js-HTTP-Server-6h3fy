# Node.js HTTP Server Error Handling
This repository demonstrates a common error in Node.js HTTP server development: neglecting error handling within the `server.listen` callback.
The `bug.js` file showcases this issue.  The server starts successfully, but if there's a problem (like port already in use), it crashes silently. 
The `bugSolution.js` file shows the corrected code with robust error handling.
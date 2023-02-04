**Goal:** To know how to render react in html without the help of JSX and build tools.

**Points to remember:**
1. Must load the script tag at last by placing at the end of body tag or using defer attribute while placing the script in head tag.
2. Must use local development server to open html, instead of opening it by directly in browser. This is because of some limitations that occur when opening the file directly in browser. The limitations are as follows,
    a. Unable to make asynchronous requests. <br/>
    b. Unable to include other local files <br/>
    c. If a server-side language is used, then a special server is needed to interpret the code and deliver the results.

**Setting up local server:**
1. Simplest way to setup local server is by using a vscode extension or your respective IDEs extension.
2. If not, you can use python to setup a local server.
3. Install python first.
4. Then, run ```python3 -m http.server```
5. This will create a local server in the directory you ran the command.
6. Python will look for the `index.html` file to serve by default.
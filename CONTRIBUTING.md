# Contributing

When contributing to this repository, please first discuss the change you wish to make via an issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](CODE_OF_CONDUCT.md); please follow it in all your interactions with the project.

## Pull Request Process

1. Fork this repository.
2. Clone the forked repository.
3. Create a new branch to add the feature.
```bash
   git checkout -b <add_new_feature>
```
4. Make your changes.
5. Uncomment the localhost line and comment the nexus-chat line in the following lines of `client/realtime/src/app/Screen.js` before testing. It should look like the following:
```javascript
// const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://nexus-chat.glitch.me/");
```

![1](https://github.com/ShijazKS/OpenTalk/assets/110324374/7476401e-1542-43a0-ae98-9917ba253e68)

6. For testing, start the server first.
```bash
cd server/
```
```bash
npm start
```
7. Then run the client in a new terminal.
```bash
cd client/realtime/
```
```bash
npm run dev
```
8. Make sure you have installed all the dependencies using `npm install`.
9. Before committing changes, make sure to undo the commented lines in `client/realtime/src/app/Screen.js`. It should look like the following:
```javascript
"use client";
import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";

//const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://nexus-chat.glitch.me/");

const Screen = () => {
   ...
}
```
10. Ensure all your changes are committed and push the branch to your fork.
11. Create a pull request with a clear title and description of your changes.
12. Your pull request will be reviewed by the project maintainers, and feedback or requests for changes may be provided.
13. Once your changes are approved, they will be merged into the main repository. Congratulations on your contribution!

## License

By contributing, you agree that your contributions will be licensed under the [LICENSE](LICENSE) of this project.

Thank you for your contribution!
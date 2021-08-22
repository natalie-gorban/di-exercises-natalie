https://microsoft.github.io/react-native-windows/docs/getting-started
0. in powershell (as Administrator / only once): `npm install --global windows-build-tools`
1. (every new project) outside project folder: `npx react-native init first_react_app --template react-native@^0.64.0`
2. (every new project) go inside project folder: `cd first_react_app`
3. (every new project) inside project folder: `npx --ignore-existing react-native-windows-init --overwrite`
4. (every new project) inside project folder: `npx react-native run-windows`
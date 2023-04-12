# Acme

## Prerequties
- node 18


## Development Servers

### Run host
```
npx nx serve host --open
or
npm run start:host
```

The command mentioned above is used to serve the host in development mode, while the remotes are served statically. This means that any changes made to the host will update its bundle, but changes made to the remotes will not be reflected in the served version.

### Run remotes
```
npx nx serve host --open --devRemotes=login,signup,dashboard
or
npm run start:remotes
```

## Production Builds
```sh
npm run build # Build projects
npm run setup # Move builds to the production folder
npm run deploy # Serve production folder
```

## Commands used to generate remote projects
```
npx nx g @nrwl/angular:remote login --host=host
npx nx g @nrwl/angular:remote signup --host=host
npx nx g @nrwl/angular:remote dashboard --host=host

## scratch
For dev server run "npm run start:host" and "npm run start:remotes"
For production build run "npm run build && npm run setup && npm run deploy"
```

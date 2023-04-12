nx g @nrwl/workspace:run-commands \
deploy \
--project=host \
--command="rm -rf production && mkdir production && cp -r dist/apps/host/* production && cp -r dist/apps/{login,signup,dashboard} production && http-server -p 3000 -a localhost production"

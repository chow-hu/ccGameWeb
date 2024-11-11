cd ./Proto
svn update
cd ../
node .\node_modules\protobufjs\bin\pbjs --dependency protobufjs/minimal.js --target static-module --wrap commonjs --keep-case --o ./Proto.js/proto.js ./Proto/*.proto
node .\node_modules\protobufjs\bin\pbts -n ccgame -o ./Proto.js/proto.d.ts ./Proto.js/*.js
copy .\Proto.js\proto.* .\assets\shared\

# fabric-node-svr
provide api to invoke fabric blockchain by fabric-sdk-node

## how to start
```
npm install
npm run dev
```

## how to invoke
```
 curl -H'Content-type: application/json' -d '{"org":"org2","chaincodeVersion":"v0","user":"admin","userpwd":"adminpw","fcn":"invoke","args":["query","b"]}' localhost:18240/execChaincode
```

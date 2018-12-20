This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

```
$ git clone git@github.com:murajun1978/api-gateway-websocket-react.git
$ cd api-gateway-websocket-react
$ yarn install
```

## API Gateway WebSocket

- Deploy sample app
  - FYI: https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:729047367331:applications~simple-websockets-chat-app

- Deploy API Gateway
  - FYI: https://aws.amazon.com/blogs/compute/announcing-websocket-apis-in-amazon-api-gateway/


## Setting WebSocket URL

- Copy env file

```
$ cp .env.sample .env
```

- Modify websocket url

```
REACT_APP_WEBSOCKET_URL='wss://{YOUR-API-ID}.execute-api.{YOUR-REGION}.amazonaws.com/{YOUR-STAGE}'
```

## Run app

```
$ yarn start
```

#!/bin/bash

curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "test2",
      "password": "test",
      "password_confirmation": "test"
    }
  }'

curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "another@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'





    curl --include --request POST http://localhost:3000/sign-in \
      --header "Content-Type: application/json" \
      --data '{
        "credentials": {
          "email": "andrea2@andrea.com",
          "password": "Andrea2"
        }
      }'

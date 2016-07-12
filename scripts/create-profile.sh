7Exug4PhCGfzsq1KKOPAvcqFLimmkwDaM8LMa9Ah4ow=--8CZhrhkRugRPaGVSjJg9MXCUyXOLU8Ci7xrQVk6BBcQ=
curl --include --request POST http://localhost:3000/profiles \
--header "Authorization: Token token=7Exug4PhCGfzsq1KKOPAvcqFLimmkwDaM8LMa9Ah4ow=--8CZhrhkRugRPaGVSjJg9MXCUyXOLU8Ci7xrQVk6BBcQ="   \
--header "Content-Type: application/json"  \
--data '{
    "profile": {
      "username": "AndreaSantarlasci"
    }
}'


curl --include --request POST http://localhost:3000/profiles \
--header "Authorization: Token token=85Sfel/IjKneyDNLFVaHMG2mMwmLhvRaLkxGGsHofOI=--m7xYvs4MrhcXdTNplWo94LGRBVPdFHRN5uKETg153/A="   \
--header "Content-Type: application/json"  \
--data '{
  "profile": {
    "username": "profile2",
    "name": {
      "firstName": "Andrea",
      "lastName": "S"
    },
    "dob": "1986-12-30",
    "gender": "f",
    "city": "Boston",
    "aboutMe": "This is very exciting!!!!"
  }
}'

//show single profile
curl --include --request GET http://localhost:3000/profiles/5785011a14f067be4387d802 \
  --header "Authorization: Token token=2bXnOEbvHc8hB4oPDOvQgPGF6t6SGA7QLv9IMNgtMQk=--pIYQORL7ZI9w8sHgRQ7IVx5314kpo5/JV2KnTGHePNM="

//update profiles
curl --include --request PATCH http://localhost:3000/update-profile/5785011a14f067be4387d802 \
--header "Authorization: Token token=2bXnOEbvHc8hB4oPDOvQgPGF6t6SGA7QLv9IMNgtMQk=--pIYQORL7ZI9w8sHgRQ7IVx5314kpo5/JV2KnTGHePNM="   \
--header "Content-Type: application/json"  \
--data '{
  "profile": {
    "name.firstName": "Person"
  }
}'


  curl --include --request PATCH http://localhost:3000/profiles/5784ee20e231e06e41bd6ee7 \
  --header "Authorization: Token token=8MiB8Cw/LlONmizkB8HBFSHdzcV7eNycFJnrkWixYh0=--mh8WfI2t4G2rxtz+kdTxXBWx3ujLZ/6TOHlMv3SOPac="   \
  --header "Content-Type: application/json"  \
  --data '{
    "profile": {
      "username": "AndreaSantarlasci3",
      "name": {
        "firstName": "Person",
        "lastName": "S"
      },
      "dob": "1986-12-30",
      "gender": "f",
      "city": "Boston",
      "aboutMe": "This is very exciting!!!!"
    }
  }'

  curl --include --request DELETE http://localhost:3000/profiles/5784ee20e231e06e41bd6ee7 \
    --header "Authorization: Token token=8MiB8Cw/LlONmizkB8HBFSHdzcV7eNycFJnrkWixYh0=--mh8WfI2t4G2rxtz+kdTxXBWx3ujLZ/6TOHlMv3SOPac="

lmWrbfrA5l1F5P/+hoPaurmmtj7es4fpNHHbjg4pG5o=--2fNDUwjjkaIF7vs7DBCdiD6bFYJ37I2esPrAarODXpY=

curl --include --request POST http://localhost:3000/buckets \
--header "Authorization: Token token=lmWrbfrA5l1F5P/+hoPaurmmtj7es4fpNHHbjg4pG5o=--2fNDUwjjkaIF7vs7DBCdiD6bFYJ37I2esPrAarODXpY="   \
--header "Content-Type: application/json"  \
--data '{
    "bucket": {
      "title": "Bucket 5",
      "category": "sport",
      "description": "ima bucket item!"
    }
}'

curl --include --request PATCH http://localhost:3000/buckets/57852dc437afa41052a88fe0 \
--header "Authorization: Token token=0nT3YuAzzxNP0wERqupejWGqs4hwU4TFHXX/WsNuqus=--sIPOcQVuFweAPdl1vNgRCOSVsbFA+ud+zUGUML7ZJDg="   \
--header "Content-Type: application/json"  \
--data '{
    "bucket": {
      "title": "Stuff",
      "category": "food"
    }
}'

  curl --include --request DELETE http://localhost:3000/buckets/5785179ab3dd33f354e5f834 \
    --header "Authorization: Token token=xm+P6ntdduyFU4BKBLR80gCc1j5mdk9cAM0wLgSWGZ8=--ucsA1C4ocB65CIglK0DgYUU7UDJ7tcEEY32r7SPr1m0="

k4p79YI/ZDy5hmlIwdma4asLeLvMhoSrnbU2+SBFoUU=--Iv2U84Ni4c7uDp9S2ojgE6mUZh94lUQUxBIKdu/Mwqo=

curl --include --request POST http://localhost:3000/buckets \
--header "Authorization: Token token=k4p79YI/ZDy5hmlIwdma4asLeLvMhoSrnbU2+SBFoUU=--Iv2U84Ni4c7uDp9S2ojgE6mUZh94lUQUxBIKdu/Mwqo="   \
--header "Content-Type: application/json"  \
--data '{
    "bucket": {
      "title": "bucket test #3",
      "category": "food"
    }
}'

curl --include --request GET http://localhost:3000/userbuckets \
 --header "Authorization: Token token=k4p79YI/ZDy5hmlIwdma4asLeLvMhoSrnbU2+SBFoUU=--Iv2U84Ni4c7uDp9S2ojgE6mUZh94lUQUxBIKdu/Mwqo="

curl --include --request PATCH http://localhost:3000/update-bucket/57853c47538760dc57656934 \
--header "Authorization: Token token=85Sfel/IjKneyDNLFVaHMG2mMwmLhvRaLkxGGsHofOI=--m7xYvs4MrhcXdTNplWo94LGRBVPdFHRN5uKETg153/A="   \
--header "Content-Type: application/json"  \
--data '{
    "bucket": {
      "bucketPicture": "http://dlkghls;fkdjfghkjdhgkdhjgkd.png"
    }
}'

  curl --include --request DELETE http://localhost:3000/buckets/5785179ab3dd33f354e5f834 \
    --header "Authorization: Token token=xm+P6ntdduyFU4BKBLR80gCc1j5mdk9cAM0wLgSWGZ8=--ucsA1C4ocB65CIglK0DgYUU7UDJ7tcEEY32r7SPr1m0="

curl --include --request GET http://localhost:3000/buckets

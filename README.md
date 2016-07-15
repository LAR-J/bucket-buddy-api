#README

The Bucket Buddy is a single page application that can be used to
cache user bucket list items.  People dream of things that they want
to do before they expire, and they keep track of them with our application!

Routes:
.root('root#root')
.resources('examples')
.resources('profiles')
.get('/allbuckets', 'buckets#allbuckets')
.get('/userbuckets', 'buckets#userbuckets')
.resources('buckets', { except: 'index'})
.resources('uploads', { only: ['create'] })
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })

Deployed back-end app:
https://bucket-buddy-api.herokuapp.com/

Repo for front-end:
https://github.com/LAR-J/bucket-buddy-client/

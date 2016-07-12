'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')
.resources('profiles', { only: ['index', 'show', 'destroy', 'create'] })
.patch('/update-profile/:id', 'profiles#update')
.patch('/upload-profile-image/:id', 'profiles#uploadimg')

.resources('buckets')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })



// all routes created
;

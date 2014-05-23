Jobney Angular Starter
====

This is just a simple base to prototype apps out. Typically I have been using
the really great plnkr.co, but I need to get back into the tooling more, so here
I stand.

Installing
----

This will install all `node_modules` and `bower_components` needed

`
npm install
`

Rename
----

This will rename all references to the angular module => "jobney.angular-starter"
to whatever is in your package.json "name" property

`
gulp rename
`

Building
----

This will run the concatenation build script and inline all html templates
into the template cache.

`
gulp
`
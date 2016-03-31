Weberia Framework
=================

![Logo](images/logo-weberia.png)

Weberia framework provides components for building pragmatic web systems. As such, it consists of some independent plugins on top of [http://www.hapijs.com](Hapi), integrated with microservices architecture. This pool of components are used as a reference implementation of pragmatic web systems reference architecture (more on this later). Minimnally, the software framework consists of these components:

* Semantic contents management (implemented as [Semantix](semantix/) component).
* Illocutionary force and propositional contents interpreter (implemented as [Speax](speax/) component).
* Rule and business logic engine (implemented as [Rlogix](rlogix/) component).
* Data store (implemented on top of ArangoDB as Foxx application, [Storix](storix/) component).
* Collaborative tools based on goal-oriented discourses between human-to-human as the members of collaborative sessions (implemented as [Collabox](collabox/) component).

## Directory Structure

Inside every component, there are two directories:
* hapi
* plugin
Directory `hapi` is used to showcase each component in a Hapi.js application, while `plugin` is used to store component source code (the Hapi.js plugin).

All of Weberia components track latest version of their dependencies. The showchase (`hapi` dir) uses latest Hapi.js (in package.json: dependencies hapi always use latest version). In component source code (`plugin`), latest Hapi.js version is used as `peerDependencies` in package.json. Unfortunately, npm still consider this as ERR UNMET DEPENDENCIES. This error can be removed using `npm install hapi` but still generate ERR-extraneous package (considered as installed in node_modules but not in package.json). Both are ok, actually.

## Documentation

See [documentation](http://github.com/weberia/documentation)

## License

Copyright © 2016 [Bambang Purnomosidi D. P.](http://bpdp.xyz)

Distributed under the [Apache License - version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

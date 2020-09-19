// Compiled by ClojureScript 1.10.773 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('reitit.core');
goog.require('reitit.coercion');
goog.require('reitit.coercion.spec');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
hello_world.core.routes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:some-id/hello/:another-id",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"some-id","some-id",2059071990),cljs.core.uuid_QMARK_,new cljs.core.Keyword(null,"another-id","another-id",-237155111),cljs.core.uuid_QMARK_], null)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"test-route","test-route",1118699215)], null)], null)], null);
hello_world.core.router = reitit.frontend.router.call(null,hello_world.core.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
hello_world.core.some_id = "fd289f9a-8a0c-4ab1-9aec-9289c4152e35";
hello_world.core.another_id = "579a3556-208c-4670-860d-70c915f97cc8";
cljs.pprint.pprint.call(null,reitit.frontend.match_by_path.call(null,hello_world.core.router,["/",hello_world.core.some_id,"/hello/",hello_world.core.another_id].join('')));

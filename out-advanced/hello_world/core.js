// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('reitit.core');
goog.require('reitit.coercion');
goog.require('reitit.coercion.spec');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
hello_world.core.routes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:some-id/hello/:another-id",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parameters,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$some_DASH_id,cljs.core.uuid_QMARK_,cljs.core.cst$kw$another_DASH_id,cljs.core.uuid_QMARK_], null)], null),cljs.core.cst$kw$name,cljs.core.cst$kw$test_DASH_route], null)], null)], null);
hello_world.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(hello_world.core.routes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$coercion,reitit.coercion.spec.coercion], null)], null));
hello_world.core.some_id = "fd289f9a-8a0c-4ab1-9aec-9289c4152e35";
hello_world.core.another_id = "579a3556-208c-4670-860d-70c915f97cc8";
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_path(hello_world.core.router,["/",hello_world.core.some_id,"/hello/",hello_world.core.another_id].join('')));

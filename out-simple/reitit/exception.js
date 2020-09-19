// Compiled by ClojureScript 1.10.773 {}
goog.provide('reitit.exception');
goog.require('cljs.core');
goog.require('clojure.string');
reitit.exception.fail_BANG_ = (function reitit$exception$fail_BANG_(var_args){
var G__4614 = arguments.length;
switch (G__4614) {
case 1:
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reitit.exception.fail_BANG_.call(null,type,null);
}));

(reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,data){
throw cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));

(reitit.exception.fail_BANG_.cljs$lang$maxFixedArity = 2);

reitit.exception.get_message = (function reitit$exception$get_message(e){
return cljs.core.ex_message.call(null,e);
});
if((typeof reitit !== 'undefined') && (typeof reitit.exception !== 'undefined') && (typeof reitit.exception.format_exception !== 'undefined')){
} else {
reitit.exception.format_exception = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reitit.exception","format-exception"),(function (type,_,___$1){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
reitit.exception.exception = (function reitit$exception$exception(e){
var data = cljs.core.ex_data.call(null,e);
var message = reitit.exception.format_exception.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),reitit.exception.get_message.call(null,e),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data));
return cljs.core.ex_info.call(null,message,cljs.core.assoc.call(null,(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("reitit.exception","cause","reitit.exception/cause",2130128734),e));
});
cljs.core._add_method.call(null,reitit.exception.format_exception,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,message,data){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),(cljs.core.truth_(data)?["\n\n",cljs.core.pr_str.call(null,data)].join(''):null)].join('');
}));
cljs.core._add_method.call(null,reitit.exception.format_exception,new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),(function (_,___$1,conflicts){
var resolve_str = (function reitit$exception$resolve_str(path,route_data){
return [(cljs.core.truth_(new cljs.core.Keyword(null,"conflicting","conflicting",2003828416).cljs$core$IFn$_invoke$arity$1(route_data))?"   ":"-> "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,route_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conflicting","conflicting",2003828416)], null))))].join('');
});
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.call(null,(function (p__4616){
var vec__4617 = p__4616;
var vec__4620 = cljs.core.nth.call(null,vec__4617,(0),null);
var path = cljs.core.nth.call(null,vec__4620,(0),null);
var route_data = cljs.core.nth.call(null,vec__4620,(1),null);
var vals = cljs.core.nth.call(null,vec__4617,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolve_str.call(null,path,route_data)),"\n",clojure.string.join.call(null,"\n",cljs.core.mapv.call(null,(function (p__4627){
var vec__4628 = p__4627;
var path__$1 = cljs.core.nth.call(null,vec__4628,(0),null);
var route_data__$1 = cljs.core.nth.call(null,vec__4628,(1),null);
return resolve_str.call(null,path__$1,route_data__$1);
}),vals)),"\n\n"].join('');
}),conflicts));
}));
cljs.core._add_method.call(null,reitit.exception.format_exception,new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),(function (_,___$1,conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.call(null,(function (p__4631){
var vec__4632 = p__4631;
var name = cljs.core.nth.call(null,vec__4632,(0),null);
var vals = cljs.core.nth.call(null,vec__4632,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals)),"\n"].join('');
}),conflicts));
}));
cljs.core._add_method.call(null,reitit.exception.format_exception,new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),(function (_,___$1,data){
return ["Error merging route-data\n\n",cljs.core.pr_str.call(null,data)].join('');
}));

// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reitit.exception');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
reitit.exception.fail_BANG_ = (function reitit$exception$fail_BANG_(var_args){
var G__1778 = arguments.length;
switch (G__1778) {
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
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$data,data], null));
}));

(reitit.exception.fail_BANG_.cljs$lang$maxFixedArity = 2);

reitit.exception.get_message = (function reitit$exception$get_message(e){
return cljs.core.ex_message(e);
});
if((typeof reitit !== 'undefined') && (typeof reitit.exception !== 'undefined') && (typeof reitit.exception.format_exception !== 'undefined')){
} else {
reitit.exception.format_exception = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1780 = cljs.core.get_global_hierarchy;
return (fexpr__1780.cljs$core$IFn$_invoke$arity$0 ? fexpr__1780.cljs$core$IFn$_invoke$arity$0() : fexpr__1780.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.exception","format-exception"),(function (type,_,___$1){
return type;
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
reitit.exception.exception = (function reitit$exception$exception(e){
var data = cljs.core.ex_data(e);
var message = (function (){var G__1781 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(data);
var G__1782 = reitit.exception.get_message(e);
var G__1783 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(data);
return (reitit.exception.format_exception.cljs$core$IFn$_invoke$arity$3 ? reitit.exception.format_exception.cljs$core$IFn$_invoke$arity$3(G__1781,G__1782,G__1783) : reitit.exception.format_exception.call(null,G__1781,G__1782,G__1783));
})();
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cst$kw$reitit$exception_SLASH_cause,e));
});
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,message,data){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),(cljs.core.truth_(data)?["\n\n",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join(''):null)].join('');
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$path_DASH_conflicts,(function (_,___$1,conflicts){
var resolve_str = (function reitit$exception$resolve_str(path,route_data){
return [(cljs.core.truth_(cljs.core.cst$kw$conflicting.cljs$core$IFn$_invoke$arity$1(route_data))?"   ":"-> "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.not_empty(cljs.core.select_keys(route_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$conflicting], null))))].join('');
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__1784){
var vec__1785 = p__1784;
var vec__1788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1785,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1788,(0),null);
var route_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1788,(1),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1785,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolve_str(path,route_data)),"\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__1795){
var vec__1796 = p__1795;
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1796,(0),null);
var route_data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1796,(1),null);
return resolve_str(path__$1,route_data__$1);
}),vals)),"\n\n"].join('');
}),conflicts));
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$name_DASH_conflicts,(function (_,___$1,conflicts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__1799){
var vec__1800 = p__1799;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1800,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1800,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals)),"\n"].join('');
}),conflicts));
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$reitit$impl_SLASH_merge_DASH_data,(function (_,___$1,data){
return ["Error merging route-data\n\n",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
}));

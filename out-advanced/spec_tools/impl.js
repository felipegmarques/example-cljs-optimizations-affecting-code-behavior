// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.analyzer.api');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.form');
goog.require('clojure.walk');
spec_tools.impl.cljs_sym = (function spec_tools$impl$cljs_sym(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.impl.clj_sym = (function spec_tools$impl$clj_sym(x){
if(cljs.core.var_QMARK_(x)){
var v = x;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.ns().name()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.sym()));
} else {
return x;
}
});
spec_tools.impl.__GT_sym = (function spec_tools$impl$__GT_sym(x){
return spec_tools.impl.cljs_sym(x);
});
spec_tools.impl.unfn = (function spec_tools$impl$unfn(cljs_QMARK_,expr){
if(((cljs.core.seq_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr)))))){
var vec__5318 = cljs.core.rest(expr);
var seq__5319 = cljs.core.seq(vec__5318);
var first__5320 = cljs.core.first(seq__5319);
var seq__5319__$1 = cljs.core.next(seq__5319);
var vec__5321 = first__5320;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5321,(0),null);
var form = seq__5319__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,cljs.core.cst$sym$_PERCENT_]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs_QMARK_)?cljs.core.cst$sym$cljs$core_SLASH_fn:cljs.core.cst$sym$clojure$core_SLASH_fn)], 0));
} else {
return expr;
}
});
spec_tools.impl.polish = (function spec_tools$impl$polish(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.flatten(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,x));
} else {
if((x instanceof cljs.core.Symbol)){
return null;
} else {
return x;

}
}
});
spec_tools.impl.polish_un = (function spec_tools$impl$polish_un(x){
var G__5324 = x;
var G__5324__$1 = (((G__5324 == null))?null:spec_tools.impl.polish(G__5324));
var G__5324__$2 = (((G__5324__$1 == null))?null:cljs.core.name(G__5324__$1));
if((G__5324__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__5324__$2);
}
});
spec_tools.impl.un_key = (function spec_tools$impl$un_key(x){
var G__5325 = x;
var G__5325__$1 = (((G__5325 == null))?null:cljs.core.name(G__5325));
if((G__5325__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__5325__$1);
}
});
spec_tools.impl.with_key__GT_spec = (function spec_tools$impl$with_key__GT_spec(p__5326){
var map__5327 = p__5326;
var map__5327__$1 = (((((!((map__5327 == null))))?(((((map__5327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5327):map__5327);
var data = map__5327__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5327__$1,cljs.core.cst$kw$req);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5327__$1,cljs.core.cst$kw$req_DASH_un);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5327__$1,cljs.core.cst$kw$opt);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5327__$1,cljs.core.cst$kw$opt_DASH_un);
var key__GT_spec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,req)));
var un_key__GT_spec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.un_key,cljs.core.identity),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt_un,req_un)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$key_DASH__GT_spec,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key__GT_spec,un_key__GT_spec], 0)));
});
spec_tools.impl.with_real_keys = (function spec_tools$impl$with_real_keys(p__5329){
var map__5330 = p__5329;
var map__5330__$1 = (((((!((map__5330 == null))))?(((((map__5330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5330):map__5330);
var data = map__5330__$1;
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5330__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5330__$1,cljs.core.cst$kw$opt_DASH_un);
var G__5332 = data;
var G__5332__$1 = (cljs.core.truth_(req_un)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__5332,cljs.core.cst$kw$req_DASH_un,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,spec_tools.impl.un_key)):G__5332);
if(cljs.core.truth_(opt_un)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__5332__$1,cljs.core.cst$kw$opt_DASH_un,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,spec_tools.impl.un_key));
} else {
return G__5332__$1;
}
});
spec_tools.impl.parse_keys = (function spec_tools$impl$parse_keys(form){
var m = (function (){var G__5336 = form;
var G__5336__$1 = (((G__5336 == null))?null:cljs.core.rest(G__5336));
if((G__5336__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__5336__$1);
}
})();
var G__5337 = m;
var G__5337__$1 = (cljs.core.truth_(cljs.core.cst$kw$req.cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__5337,cljs.core.cst$kw$req,(function (p1__5333_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.flatten(p1__5333_SHARP_)));
})):G__5337);
var G__5337__$2 = (cljs.core.truth_(cljs.core.cst$kw$req_DASH_un.cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__5337__$1,cljs.core.cst$kw$req_DASH_un,(function (p1__5334_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.flatten(p1__5334_SHARP_)));
})):G__5337__$1);
var G__5337__$3 = (cljs.core.truth_(cljs.core.cst$kw$opt_DASH_un.cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__5337__$2,cljs.core.cst$kw$opt_DASH_un,(function (p1__5335_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,p1__5335_SHARP_));
})):G__5337__$2);
return spec_tools.impl.with_real_keys(spec_tools.impl.with_key__GT_spec(G__5337__$3));

});
spec_tools.impl.extract_keys = (function spec_tools$impl$extract_keys(form){
var map__5338 = (function (){var G__5339 = form;
var G__5339__$1 = (((G__5339 == null))?null:cljs.core.rest(G__5339));
if((G__5339__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__5339__$1);
}
})();
var map__5338__$1 = (((((!((map__5338 == null))))?(((((map__5338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5338):map__5338);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5338__$1,cljs.core.cst$kw$req);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5338__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5338__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5338__$1,cljs.core.cst$kw$opt_DASH_un);
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req,opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req_un,opt_un], 0))));
});
spec_tools.impl.extract_pred_and_info = (function spec_tools$impl$extract_pred_and_info(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(x),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$spec)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.PersistentArrayMap.EMPTY], null);
}
});
spec_tools.impl.strip_fn_if_needed = (function spec_tools$impl$strip_fn_if_needed(form){
var head = cljs.core.first(form);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$cljs$core_SLASH_fn)))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
} else {
return form;
}
});
spec_tools.impl.normalize_symbol = (function spec_tools$impl$normalize_symbol(kw){
var G__5341 = (((kw instanceof cljs.core.Symbol))?cljs.core.namespace(kw):false);
switch (G__5341) {
case "spec-tools.spec":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(kw));

break;
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(kw));

break;
case "cljs.spec.alpha":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.spec.alpha",cljs.core.name(kw));

break;
default:
return kw;

}
});
spec_tools.impl.extract_form = (function spec_tools$impl$extract_form(spec){
if(cljs.core.seq_QMARK_(spec)){
return spec;
} else {
return cljs.spec.alpha.form(spec);
}
});
spec_tools.impl.qualified_name = (function spec_tools$impl$qualified_name(key){
if((key instanceof cljs.core.Keyword)){
var temp__5733__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5733__auto__)){
var nn = temp__5733__auto__;
return [nn,"/",cljs.core.name(key)].join('');
} else {
return cljs.core.name(key);
}
} else {
return key;
}
});
spec_tools.impl.nilable_spec_QMARK_ = (function spec_tools$impl$nilable_spec_QMARK_(spec){
var form = (function (){var and__4115__auto__ = spec;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.spec.alpha.form(spec);
} else {
return and__4115__auto__;
}
})();
return cljs.core.boolean$(((cljs.core.seq_QMARK_(form))?(function (){var G__5343 = form;
var G__5343__$1 = (((G__5343 == null))?null:cljs.core.seq(G__5343));
var G__5343__$2 = (((G__5343__$1 == null))?null:cljs.core.first(G__5343__$1));
if((G__5343__$2 == null)){
return null;
} else {
var fexpr__5344 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable,null], null), null);
return (fexpr__5344.cljs$core$IFn$_invoke$arity$1 ? fexpr__5344.cljs$core$IFn$_invoke$arity$1(G__5343__$2) : fexpr__5344.call(null,G__5343__$2));
}
})():null));
});
/**
 * Unwrap [x] to x. Asserts that coll has exactly one element.
 */
spec_tools.impl.unwrap = (function spec_tools$impl$unwrap(coll){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coll))){
} else {
throw (new Error("Assert failed: (= 1 (count coll))"));
}

return cljs.core.first(coll);
});
spec_tools.impl.deep_merge = (function spec_tools$impl$deep_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5346 = arguments.length;
var i__4737__auto___5347 = (0);
while(true){
if((i__4737__auto___5347 < len__4736__auto___5346)){
args__4742__auto__.push((arguments[i__4737__auto___5347]));

var G__5348 = (i__4737__auto___5347 + (1));
i__4737__auto___5347 = G__5348;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (values){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,values)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,spec_tools.impl.deep_merge,values);
} else {
if(cljs.core.every_QMARK_(cljs.core.coll_QMARK_,values)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,values);
} else {
return cljs.core.last(values);

}
}
}));

(spec_tools.impl.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(spec_tools.impl.deep_merge.cljs$lang$applyTo = (function (seq5345){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5345));
}));

spec_tools.impl.unlift_keys = (function spec_tools$impl$unlift_keys(data,ns_name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__5349){
var vec__5350 = p__5349;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5350,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
});
spec_tools.impl.register_spec_BANG_ = (function spec_tools$impl$register_spec_BANG_(k,s){
return cljs.spec.alpha.def_impl(k,cljs.spec.alpha.form(s),s);
});
spec_tools.impl.coll_of_spec = (function spec_tools$impl$coll_of_spec(pred,type){
var form = (spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(pred) : spec_tools.form.resolve_form.call(null,pred));
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$into,type,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$into,null,(1),null)),(new cljs.core.List(null,type,null,(1),null))], 0)))),cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,cljs.core.coll_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null], null),null);
});
spec_tools.impl.map_of_spec = (function spec_tools$impl$map_of_spec(kpred,vpred){
var forms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.form.resolve_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
var tuple = cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(forms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,null,(1),null)),forms))),tuple,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$conform_DASH_keys,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (_,v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,null,(1),null)),forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$conform_DASH_keys,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,cljs.core.coll_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null], null),null);
});
spec_tools.impl.keys_spec = (function spec_tools$impl$keys_spec(p__5355){
var map__5356 = p__5355;
var map__5356__$1 = (((((!((map__5356 == null))))?(((((map__5356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5356):map__5356);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5356__$1,cljs.core.cst$kw$req);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5356__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5356__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5356__$1,cljs.core.cst$kw$opt_DASH_un);
var req_specs = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,req_un)));
var opt_specs = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,opt_un)));
var req_keys = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,req),cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish_un,req_un)));
var opt_keys = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish_un,opt_un)));
var pred_exprs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__5353_SHARP_){
return cljs.core.map_QMARK_(p1__5353_SHARP_);
})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return (function (p1__5354_SHARP_){
return cljs.core.contains_QMARK_(p1__5354_SHARP_,x);
});
}),req_keys));
var pred_forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null))], 0))))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))));
}),req_keys));
var keys_pred = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p){
var or__4126__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.reduced(false);
}
}),true,pred_exprs);
});
return cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[req_un,opt_un,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms,opt]));
});
spec_tools.impl.nilable_spec = (function spec_tools$impl$nilable_spec(pred){
var form = (spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(pred) : spec_tools.form.resolve_form.call(null,pred));
return cljs.spec.alpha.nilable_impl(form,pred,null);
});
spec_tools.impl.or_spec = (function spec_tools$impl$or_spec(v){
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v);
var preds = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,v);
var forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.form.resolve_form,preds);
return cljs.spec.alpha.or_spec_impl(ks,forms,preds,null);
});

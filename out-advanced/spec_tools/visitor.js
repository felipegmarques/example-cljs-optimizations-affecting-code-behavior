// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.visitor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
goog.require('spec_tools.form');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form(spec);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown)){
if(cljs.core.seq_QMARK_(form)){
return spec_tools.impl.normalize_symbol(cljs.core.first(form));
} else {
return (spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3(form,accept,options) : spec_tools.visitor.spec_dispatch.call(null,form,accept,options));
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_(spec)){
return cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set;
} else {
if(cljs.core.seq_QMARK_(spec)){
return spec_tools.impl.normalize_symbol(cljs.core.first(spec_tools.impl.strip_fn_if_needed(spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol(spec);
} else {
return spec_tools.impl.normalize_symbol((spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.form.resolve_form.call(null,spec)));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_default], null),cljs.core.cst$kw$hierarchy,(function (){var fexpr__6301 = cljs.core.get_global_hierarchy;
return (fexpr__6301.cljs$core$IFn$_invoke$arity$0 ? fexpr__6301.cljs$core$IFn$_invoke$arity$0() : fexpr__6301.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__6303 = arguments.length;
switch (G__6303) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__6304){
var map__6305 = p__6304;
var map__6305__$1 = (((((!((map__6305 == null))))?(((((map__6305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6305):map__6305);
var options = map__6305__$1;
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6305__$1,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_visited);
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_visited,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return (spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(spec,accept,options__$1) : spec_tools.visitor.visit_spec.call(null,spec,accept,options__$1));
} else {
return (spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(null,accept,options) : spec_tools.visitor.visit_spec.call(null,null,accept,options));
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set,(function (spec,accept,options){
var G__6308 = cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set;
var G__6309 = spec;
var G__6310 = cljs.core.vec((((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form(spec):spec));
var G__6311 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6308,G__6309,G__6310,G__6311) : accept.call(null,G__6308,G__6309,G__6310,G__6311));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys,(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__6313 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys;
var G__6314 = spec;
var G__6315 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6312_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6312_SHARP_,accept,options);
}),keys);
var G__6316 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6313,G__6314,G__6315,G__6316) : accept.call(null,G__6313,G__6314,G__6315,G__6316));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_or,(function (spec,accept,options){
var vec__6318 = spec_tools.impl.extract_form(spec);
var seq__6319 = cljs.core.seq(vec__6318);
var first__6320 = cljs.core.first(seq__6319);
var seq__6319__$1 = cljs.core.next(seq__6319);
var _ = first__6320;
var map__6321 = seq__6319__$1;
var map__6321__$1 = (((((!((map__6321 == null))))?(((((map__6321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6321):map__6321);
var inner_spec_map = map__6321__$1;
var G__6323 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_or;
var G__6324 = spec;
var G__6325 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6317_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6317_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__6326 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6323,G__6324,G__6325,G__6326) : accept.call(null,G__6323,G__6324,G__6325,G__6326));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_and,(function (spec,accept,options){
var vec__6328 = spec_tools.impl.extract_form(spec);
var seq__6329 = cljs.core.seq(vec__6328);
var first__6330 = cljs.core.first(seq__6329);
var seq__6329__$1 = cljs.core.next(seq__6329);
var _ = first__6330;
var inner_specs = seq__6329__$1;
var G__6331 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_and;
var G__6332 = spec;
var G__6333 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6327_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6327_SHARP_,accept,options);
}),inner_specs);
var G__6334 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6331,G__6332,G__6333,G__6334) : accept.call(null,G__6331,G__6332,G__6333,G__6334));
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__6336 = spec_tools.impl.extract_form(spec);
var seq__6337 = cljs.core.seq(vec__6336);
var first__6338 = cljs.core.first(seq__6337);
var seq__6337__$1 = cljs.core.next(seq__6337);
var _ = first__6338;
var inner_specs = seq__6337__$1;
var G__6339 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_merge;
var G__6340 = spec;
var G__6341 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6335_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6335_SHARP_,accept,options);
}),inner_specs);
var G__6342 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6339,G__6340,G__6341,G__6342) : accept.call(null,G__6339,G__6340,G__6341,G__6342));
});
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_merge,(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_merge,(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_every,(function (spec,accept,options){
var vec__6343 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6343,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6343,(1),null);
var G__6346 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_every;
var G__6347 = spec;
var G__6348 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__6349 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6346,G__6347,G__6348,G__6349) : accept.call(null,G__6346,G__6347,G__6348,G__6349));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_every_DASH_kv,(function (spec,accept,options){
var vec__6351 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6351,(0),null);
var inner_spec1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6351,(1),null);
var inner_spec2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6351,(2),null);
var G__6354 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_every_DASH_kv;
var G__6355 = spec;
var G__6356 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6350_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6350_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null));
var G__6357 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6354,G__6355,G__6356,G__6357) : accept.call(null,G__6354,G__6355,G__6356,G__6357));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_coll_DASH_of,(function (spec,accept,options){
var form = spec_tools.impl.extract_form(spec);
var pred = cljs.core.second(form);
var map__6358 = spec_tools.parse.parse_spec(form);
var map__6358__$1 = (((((!((map__6358 == null))))?(((((map__6358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6358):map__6358);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6358__$1,cljs.core.cst$kw$type);
var dispatch = (function (){var G__6360 = type;
var G__6360__$1 = (((G__6360 instanceof cljs.core.Keyword))?G__6360.fqn:null);
switch (G__6360__$1) {
case "map-of":
return cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_map_DASH_of;

break;
case "set":
return cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set_DASH_of;

break;
case "vector":
return cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_vector_DASH_of;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6360__$1)].join('')));

}
})();
var G__6361 = dispatch;
var G__6362 = spec;
var G__6363 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(pred,accept,options)], null);
var G__6364 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6361,G__6362,G__6363,G__6364) : accept.call(null,G__6361,G__6362,G__6363,G__6364));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_map_DASH_of,(function (spec,accept,options){
var vec__6367 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6367,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6367,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6367,(2),null);
var G__6370 = cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_map_DASH_of;
var G__6371 = spec;
var G__6372 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6366_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6366_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var G__6373 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6370,G__6371,G__6372,G__6373) : accept.call(null,G__6370,G__6371,G__6372,G__6373));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__STAR_,(function (spec,accept,options){
var vec__6374 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6374,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6374,(1),null);
var G__6377 = cljs.core.cst$sym$clojure$spec$alpha_SLASH__STAR_;
var G__6378 = spec;
var G__6379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__6380 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6377,G__6378,G__6379,G__6380) : accept.call(null,G__6377,G__6378,G__6379,G__6380));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__PLUS_,(function (spec,accept,options){
var vec__6381 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6381,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6381,(1),null);
var G__6384 = cljs.core.cst$sym$clojure$spec$alpha_SLASH__PLUS_;
var G__6385 = spec;
var G__6386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__6387 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6384,G__6385,G__6386,G__6387) : accept.call(null,G__6384,G__6385,G__6386,G__6387));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__QMARK_,(function (spec,accept,options){
var vec__6388 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6388,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6388,(1),null);
var G__6391 = cljs.core.cst$sym$clojure$spec$alpha_SLASH__QMARK_;
var G__6392 = spec;
var G__6393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__6394 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6391,G__6392,G__6393,G__6394) : accept.call(null,G__6391,G__6392,G__6393,G__6394));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_alt,(function (spec,accept,options){
var vec__6396 = spec_tools.impl.extract_form(spec);
var seq__6397 = cljs.core.seq(vec__6396);
var first__6398 = cljs.core.first(seq__6397);
var seq__6397__$1 = cljs.core.next(seq__6397);
var _ = first__6398;
var map__6399 = seq__6397__$1;
var map__6399__$1 = (((((!((map__6399 == null))))?(((((map__6399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6399):map__6399);
var inner_spec_map = map__6399__$1;
var G__6401 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_alt;
var G__6402 = spec;
var G__6403 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6395_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6395_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__6404 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6401,G__6402,G__6403,G__6404) : accept.call(null,G__6401,G__6402,G__6403,G__6404));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_cat,(function (spec,accept,options){
var vec__6406 = spec_tools.impl.extract_form(spec);
var seq__6407 = cljs.core.seq(vec__6406);
var first__6408 = cljs.core.first(seq__6407);
var seq__6407__$1 = cljs.core.next(seq__6407);
var _ = first__6408;
var map__6409 = seq__6407__$1;
var map__6409__$1 = (((((!((map__6409 == null))))?(((((map__6409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6409):map__6409);
var inner_spec_map = map__6409__$1;
var G__6411 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_cat;
var G__6412 = spec;
var G__6413 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6405_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6405_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__6414 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6411,G__6412,G__6413,G__6414) : accept.call(null,G__6411,G__6412,G__6413,G__6414));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__AMPERSAND_,(function (spec,accept,options){
var vec__6415 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6415,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6415,(1),null);
var G__6418 = cljs.core.cst$sym$clojure$spec$alpha_SLASH__AMPERSAND_;
var G__6419 = spec;
var G__6420 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__6421 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6418,G__6419,G__6420,G__6421) : accept.call(null,G__6418,G__6419,G__6420,G__6421));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_tuple,(function (spec,accept,options){
var vec__6423 = spec_tools.impl.extract_form(spec);
var seq__6424 = cljs.core.seq(vec__6423);
var first__6425 = cljs.core.first(seq__6424);
var seq__6424__$1 = cljs.core.next(seq__6424);
var _ = first__6425;
var inner_specs = seq__6424__$1;
var G__6426 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_tuple;
var G__6427 = spec;
var G__6428 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6422_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6422_SHARP_,accept,options);
}),inner_specs);
var G__6429 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6426,G__6427,G__6428,G__6429) : accept.call(null,G__6426,G__6427,G__6428,G__6429));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys_STAR_,(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__6431 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys_STAR_;
var G__6432 = spec;
var G__6433 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6430_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__6430_SHARP_,accept,options);
}),keys);
var G__6434 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6431,G__6432,G__6433,G__6434) : accept.call(null,G__6431,G__6432,G__6433,G__6434));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable,(function (spec,accept,options){
var vec__6435 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6435,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6435,(1),null);
var G__6438 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable;
var G__6439 = spec;
var G__6440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__6441 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6438,G__6439,G__6440,G__6441) : accept.call(null,G__6438,G__6439,G__6440,G__6441));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_spec,(function (spec,accept,options){
var vec__6442 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6442,(0),null);
var map__6445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6442,(1),null);
var map__6445__$1 = (((((!((map__6445 == null))))?(((((map__6445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6445):map__6445);
var inner_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6445__$1,cljs.core.cst$kw$spec);
var G__6447 = cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_spec;
var G__6448 = spec;
var G__6449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__6450 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6447,G__6448,G__6449,G__6450) : accept.call(null,G__6447,G__6448,G__6449,G__6450));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_default,(function (spec,accept,options){
var G__6451 = spec_tools.visitor.spec_dispatch(spec,accept,options);
var G__6452 = spec;
var G__6453 = null;
var G__6454 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__6451,G__6452,G__6453,G__6454) : accept.call(null,G__6451,G__6452,G__6453,G__6454));
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5733__auto__ = cljs.spec.alpha.get_spec(spec);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref(specs);
}
});
});

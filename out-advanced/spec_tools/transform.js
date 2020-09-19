// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.transform');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Date');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.edn');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
spec_tools.transform.keyword__GT_string = (function spec_tools$transform$keyword__GT_string(_,x){
if((x instanceof cljs.core.Keyword)){
return spec_tools.impl.qualified_name(x);
} else {
return x;
}
});
spec_tools.transform.keyword_or_string__GT_ = (function spec_tools$transform$keyword_or_string__GT_(f){
return (function (spec,x){
if((x instanceof cljs.core.Keyword)){
var G__5410 = spec;
var G__5411 = spec_tools.transform.keyword__GT_string(spec,x);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5410,G__5411) : f.call(null,G__5410,G__5411));
} else {
if(typeof x === 'string'){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(spec,x) : f.call(null,spec,x));
} else {
return x;

}
}
});
});
spec_tools.transform.keyword__GT_ = (function spec_tools$transform$keyword__GT_(f){
return (function (spec,x){
if((x instanceof cljs.core.Keyword)){
var G__5412 = spec;
var G__5413 = spec_tools.transform.keyword__GT_string(spec,x);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5412,G__5413) : f.call(null,G__5412,G__5413));
} else {
return x;

}
});
});
spec_tools.transform.number__GT_string = (function spec_tools$transform$number__GT_string(_,x){
if(typeof x === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.transform.number_or_string__GT_ = (function spec_tools$transform$number_or_string__GT_(f){
return (function (spec,x){
if(typeof x === 'number'){
var G__5414 = spec;
var G__5415 = spec_tools.transform.number__GT_string(spec,x);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5414,G__5415) : f.call(null,G__5414,G__5415));
} else {
if(typeof x === 'string'){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(spec,x) : f.call(null,spec,x));
} else {
return x;

}
}
});
});
spec_tools.transform.string__GT_long = (function spec_tools$transform$string__GT_long(_,x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e5416){if((e5416 instanceof Error)){
var ___$1 = e5416;
return x;
} else {
throw e5416;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_double = (function spec_tools$transform$string__GT_double(_,x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e5417){if((e5417 instanceof Error)){
var ___$1 = e5417;
return x;
} else {
throw e5417;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_keyword = (function spec_tools$transform$string__GT_keyword(_,x){
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.transform.string__GT_boolean = (function spec_tools$transform$string__GT_boolean(_,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",x)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",x)){
return false;
} else {
return x;

}
}
} else {
return x;
}
});
spec_tools.transform.string__GT_uri = (function spec_tools$transform$string__GT_uri(_,x){
if(typeof x === 'string'){
try{return goog.Uri.parse(x);
}catch (e5418){if((e5418 instanceof Error)){
var ___$1 = e5418;
return x;
} else {
throw e5418;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_uuid = (function spec_tools$transform$string__GT_uuid(_,x){
if(typeof x === 'string'){
try{if(cljs.core.truth_(cljs.core.re_find(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,x))){
return cljs.core.uuid(x);
} else {
return x;
}
}catch (e5419){if((e5419 instanceof Error)){
var ___$1 = e5419;
return x;
} else {
throw e5419;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_date = (function spec_tools$transform$string__GT_date(_,x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString(x).getTime()));
}catch (e5420){if((e5420 instanceof Error)){
var ___$1 = e5420;
return x;
} else {
throw e5420;

}
}} else {
return x;
}
});
spec_tools.transform.date__GT_string = (function spec_tools$transform$date__GT_string(_,x){
if(cljs.core.inst_QMARK_(x)){
try{return x.toISOString();
}catch (e5421){if((e5421 instanceof Error)){
var ___$1 = e5421;
return x;
} else {
throw e5421;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_symbol = (function spec_tools$transform$string__GT_symbol(_,x){
if(typeof x === 'string'){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.transform.string__GT_nil = (function spec_tools$transform$string__GT_nil(_,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",x)){
return null;
} else {
return x;
}
});
spec_tools.transform.any__GT_string = (function spec_tools$transform$any__GT_string(_,x){
if((!((x == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
spec_tools.transform.number__GT_double = (function spec_tools$transform$number__GT_double(_,x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
spec_tools.transform.any__GT_any = (function spec_tools$transform$any__GT_any(_,x){
return x;
});
spec_tools.transform.strip_extra_keys = (function spec_tools$transform$strip_extra_keys(p__5422,x){
var map__5423 = p__5422;
var map__5423__$1 = (((((!((map__5423 == null))))?(((((map__5423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5423):map__5423);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5423__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys);
if(cljs.core.truth_((function (){var and__4115__auto__ = keys;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(x);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.select_keys(x,keys);
} else {
return x;
}
});
spec_tools.transform.fail_on_extra_keys = (function spec_tools$transform$fail_on_extra_keys(p__5425,x){
var map__5426 = p__5425;
var map__5426__$1 = (((((!((map__5426 == null))))?(((((map__5426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5426):map__5426);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5426__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys);
if(((cljs.core.map_QMARK_(x)) && ((!(clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(x)),keys)))))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return x;
}
});
spec_tools.transform.strip_extra_values = (function spec_tools$transform$strip_extra_values(p__5428,x){
var map__5429 = p__5428;
var map__5429__$1 = (((((!((map__5429 == null))))?(((((map__5429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5429):map__5429);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5429__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items);
var size = cljs.core.count(items);
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.count(x) > size)))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),size);
} else {
return x;
}
});
spec_tools.transform.json_type_decoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$keyword,spec_tools.transform.string__GT_keyword,cljs.core.cst$kw$uuid,spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_uuid),cljs.core.cst$kw$date,spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_date),cljs.core.cst$kw$symbol,spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_symbol),cljs.core.cst$kw$long,spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_long),cljs.core.cst$kw$double,spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_double),cljs.core.cst$kw$boolean,spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_boolean),cljs.core.cst$kw$string,spec_tools.transform.keyword__GT_string], null)], 0));
spec_tools.transform.string_type_decoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.transform.json_type_decoders,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$long,spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_long),cljs.core.cst$kw$double,spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_double),cljs.core.cst$kw$boolean,spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_boolean)], null)], 0));
spec_tools.transform.strip_extra_keys_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,spec_tools.transform.strip_extra_keys], null);
spec_tools.transform.fail_on_extra_keys_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,spec_tools.transform.fail_on_extra_keys], null);
spec_tools.transform.strip_extra_values_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tuple,spec_tools.transform.strip_extra_values], null);
spec_tools.transform.json_type_encoders = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date,cljs.core.cst$kw$symbol,cljs.core.cst$kw$vector,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bigdec,cljs.core.cst$kw$uri,cljs.core.cst$kw$uuid,cljs.core.cst$kw$set,cljs.core.cst$kw$map],[spec_tools.transform.date__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_any,spec_tools.transform.keyword__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_any,spec_tools.transform.any__GT_any]);
spec_tools.transform.string_type_encoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.transform.json_type_encoders,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$long,spec_tools.transform.any__GT_string,cljs.core.cst$kw$double,spec_tools.transform.any__GT_string], null)], 0));

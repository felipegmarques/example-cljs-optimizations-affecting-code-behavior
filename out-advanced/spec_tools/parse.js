// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.parse');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spec_tools.impl');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.form');
spec_tools.parse.type_dispatch_value = (function spec_tools$parse$type_dispatch_value(type){
var fexpr__5360 = ((cljs.core.sequential_QMARK_(type))?cljs.core.first:cljs.core.identity);
return (fexpr__5360.cljs$core$IFn$_invoke$arity$1 ? fexpr__5360.cljs$core$IFn$_invoke$arity$1(type) : fexpr__5360.call(null,type));
});
spec_tools.parse.collection_type_QMARK_ = (function spec_tools$parse$collection_type_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tuple,null,cljs.core.cst$kw$vector,null,cljs.core.cst$kw$map_DASH_of,null,cljs.core.cst$kw$set,null,cljs.core.cst$kw$map,null], null), null),type);
});
spec_tools.parse.leaf_type_QMARK_ = (function spec_tools$parse$leaf_type_QMARK_(type){
return (!(cljs.core.contains_QMARK_((spec_tools.parse.non_leaf_types.cljs$core$IFn$_invoke$arity$0 ? spec_tools.parse.non_leaf_types.cljs$core$IFn$_invoke$arity$0() : spec_tools.parse.non_leaf_types.call(null)),type)));
});
/**
 * Parses info out of a spec. Spec can be passed as a name, Spec or a form.
 *   Returns either `nil` or a map, with keys `:type` and other extra keys
 *   (like `:keys` for s/keys specs).
 */
spec_tools.parse.parse_spec = (function spec_tools$parse$parse_spec(x){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown,x)){
return null;
} else {
if(cljs.core.qualified_keyword_QMARK_(x)){
var G__5367 = cljs.spec.alpha.form(cljs.spec.alpha.get_spec(x));
x = G__5367;
continue;
} else {
if((x instanceof cljs.core.Symbol)){
var G__5361 = spec_tools.impl.normalize_symbol(x);
var G__5362 = null;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__5361,G__5362) : spec_tools.parse.parse_form.call(null,G__5361,G__5362));
} else {
if(cljs.core.seq_QMARK_(x)){
var G__5363 = spec_tools.impl.normalize_symbol(cljs.core.first(x));
var G__5364 = x;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__5363,G__5364) : spec_tools.parse.parse_form.call(null,G__5363,G__5364));
} else {
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(x))){
var G__5368 = cljs.spec.alpha.form(x);
x = G__5368;
continue;
} else {
if(cljs.core.ifn_QMARK_(x)){
var G__5365 = spec_tools.impl.normalize_symbol((spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(x) : spec_tools.form.resolve_form.call(null,x)));
var G__5366 = null;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__5365,G__5366) : spec_tools.parse.parse_form.call(null,G__5365,G__5366));
} else {
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(x,null) : spec_tools.parse.parse_form.call(null,x,null));

}
}
}
}
}
}
break;
}
});
spec_tools.parse.parse_spec_with_spec_ref = (function spec_tools$parse$parse_spec_with_spec_ref(x){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.parse.parse_spec(x),((cljs.core.qualified_keyword_QMARK_(x))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,x], null):null)], 0));
});
spec_tools.parse.get_keys = (function spec_tools$parse$get_keys(parse_data){
var or__4126__auto__ = cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys.cljs$core$IFn$_invoke$arity$1(parse_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__5369 = parse_data;
var G__5369__$1 = (((G__5369 == null))?null:cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items.cljs$core$IFn$_invoke$arity$1(G__5369));
var G__5369__$2 = (((G__5369__$1 == null))?null:cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.get_keys,G__5369__$1));
var G__5369__$3 = (((G__5369__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,G__5369__$2));
var G__5369__$4 = (((G__5369__$3 == null))?null:cljs.core.seq(G__5369__$3));
if((G__5369__$4 == null)){
return null;
} else {
return cljs.core.set(G__5369__$4);
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.parse !== 'undefined') && (typeof spec_tools.parse.parse_form !== 'undefined')){
} else {
spec_tools.parse.parse_form = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_default], null),cljs.core.cst$kw$hierarchy,(function (){var fexpr__5370 = cljs.core.get_global_hierarchy;
return (fexpr__5370.cljs$core$IFn$_invoke$arity$0 ? fexpr__5370.cljs$core$IFn$_invoke$arity$0() : fexpr__5370.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.parse","parse-form"),(function (dispatch,_){
return dispatch;
}),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_default,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,null], null);
}));
spec_tools.parse.non_leaf_types = (function spec_tools$parse$non_leaf_types(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$or,null,cljs.core.cst$kw$multi_DASH_spec,null,cljs.core.cst$kw$tuple,null,cljs.core.cst$kw$vector,null,cljs.core.cst$kw$map_DASH_of,null,cljs.core.cst$kw$and,null,cljs.core.cst$kw$set,null,cljs.core.cst$kw$map,null,cljs.core.cst$kw$nilable,null], null), null);
});
spec_tools.parse.types = (function spec_tools$parse$types(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [cljs.core.cst$kw$date,null,cljs.core.cst$kw$long,null,cljs.core.cst$kw$double,null,cljs.core.cst$kw$symbol,null,cljs.core.cst$kw$or,null,cljs.core.cst$kw$multi_DASH_spec,null,cljs.core.cst$kw$tuple,null,cljs.core.cst$kw$string,null,cljs.core.cst$kw$vector,null,cljs.core.cst$kw$spec,null,cljs.core.cst$kw$map_DASH_of,null,cljs.core.cst$kw$keyword,null,cljs.core.cst$kw$ratio,null,cljs.core.cst$kw$bigdec,null,cljs.core.cst$kw$and,null,cljs.core.cst$kw$uri,null,cljs.core.cst$kw$uuid,null,cljs.core.cst$kw$set,null,cljs.core.cst$kw$boolean,null,cljs.core.cst$kw$map,null,cljs.core.cst$kw$nilable,null], null), null);
});
spec_tools.parse.type_symbols = (function spec_tools$parse$type_symbols(){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(cljs.core.methods$(spec_tools.parse.parse_form))));
});
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_any_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.any_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_some_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.some_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_number_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.number_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$double], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_integer_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.integer_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_int_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.int_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_pos_DASH_int_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.pos_int_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_neg_DASH_int_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.neg_int_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_nat_DASH_int_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.nat_int_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_float_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.float_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$double], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_double_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.double_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$double], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_boolean_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.boolean_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$boolean], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_string_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.string_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$string], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_ident_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.ident_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_ident_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.simple_ident_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_ident_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.qualified_ident_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_keyword_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.keyword_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_keyword_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.simple_keyword_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_keyword_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.qualified_keyword_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_symbol_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.symbol_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$symbol], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_symbol_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.simple_symbol_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$symbol], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_symbol_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.qualified_symbol_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$symbol], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_uuid_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.uuid_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$uuid], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_inst_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.inst_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$date], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_seqable_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.seqable_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_indexed_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.indexed_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_map_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.map_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_vector_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.vector_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_list_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.list_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_seq_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.seq_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_char_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.char_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_set_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.set_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_nil_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.nil_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_false_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.false_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$boolean], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_true_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.true_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$boolean], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_zero_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.zero_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_coll_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.coll_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_empty_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.empty_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_associative_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.associative_QMARK_,cljs.core.cst$kw$type,null], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_sequential_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.sequential_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$clojure$spec$alpha_SLASH_unknown,(function (_,___$1){
return null;
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys,(function (_,form){
var map__5371 = spec_tools.impl.parse_keys(form);
var map__5371__$1 = (((((!((map__5371 == null))))?(((((map__5371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5371):map__5371);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5371__$1,cljs.core.cst$kw$req);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5371__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5371__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5371__$1,cljs.core.cst$kw$opt_DASH_un);
var key__GT_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5371__$1,cljs.core.cst$kw$key_DASH__GT_spec);
var G__5373 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$map,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_key_DASH__GT_spec,key__GT_spec,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req,opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req_un,opt_un], 0)))], null);
var G__5373__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = req;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return req_un;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__5373,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys_DASH_req,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,req_un))):G__5373);
if(cljs.core.truth_((function (){var or__4126__auto__ = opt;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return opt_un;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__5373__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys_DASH_opt,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,opt_un)));
} else {
return G__5373__$1;
}
}));
/**
 * Given a multi-spec form, call its multi method methods to retrieve
 * its subspecs.
 */
spec_tools.parse.get_multi_spec_sub_specs = (function spec_tools$parse$get_multi_spec_sub_specs(multi_spec_form){
var vec__5374 = multi_spec_form;
var seq__5375 = cljs.core.seq(vec__5374);
var first__5376 = cljs.core.first(seq__5375);
var seq__5375__$1 = cljs.core.next(seq__5375);
var _ = first__5376;
var first__5376__$1 = cljs.core.first(seq__5375__$1);
var seq__5375__$2 = cljs.core.next(seq__5375__$1);
var multi_method_symbol = first__5376__$1;
var ___$1 = seq__5375__$2;
var form = vec__5374;
var temp__5735__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.spec.alpha.form(v));
}),cljs.core.vals(cljs.spec.alpha.registry())));
if(cljs.core.truth_(temp__5735__auto__)){
var spec = temp__5735__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5377){
var vec__5378 = p__5377;
var spec_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5378,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5378,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_k,(method.cljs$core$IFn$_invoke$arity$1 ? method.cljs$core$IFn$_invoke$arity$1(null) : method.call(null,null))], null);
}),cljs.core.methods$(cljs.core.deref(spec.mmvar)));
} else {
return null;
}
});
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_multi_DASH_spec,(function (_,form){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$multi_DASH_spec,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_key,cljs.core.last(form),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_dispatch,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,spec_tools.parse.get_multi_spec_sub_specs(form))], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_or,(function (_,form){
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(form)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$or,cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,specs))))], null),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items,specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_and,(function (_,form){
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,cljs.core.rest(form));
var types = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,specs))));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$and,types], null),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items,specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_merge,(function (_,form){
var type_priority = (function (p1__5381_SHARP_){
var G__5383 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$map,(0),cljs.core.cst$kw$multi_DASH_spec,(1)], null);
var G__5384 = (0);
var fexpr__5382 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__5381_SHARP_);
return (fexpr__5382.cljs$core$IFn$_invoke$arity$2 ? fexpr__5382.cljs$core$IFn$_invoke$arity$2(G__5383,G__5384) : fexpr__5382.call(null,G__5383,G__5384));
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.deep_merge,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(type_priority,cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec,cljs.core.rest(form))));
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_every,(function (_,form){
var map__5385 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),form));
var map__5385__$1 = (((((!((map__5385 == null))))?(((((map__5385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5385):map__5385);
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5385__$1,cljs.core.cst$kw$into);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item,spec_tools.parse.parse_spec(cljs.core.second(form)),cljs.core.cst$kw$type,((cljs.core.map_QMARK_(into))?cljs.core.cst$kw$map_DASH_of:((cljs.core.set_QMARK_(into))?cljs.core.cst$kw$set:cljs.core.cst$kw$vector
))], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_coll_DASH_of,(function (_,form){
var map__5387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),form));
var map__5387__$1 = (((((!((map__5387 == null))))?(((((map__5387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5387):map__5387);
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5387__$1,cljs.core.cst$kw$into);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item,spec_tools.parse.parse_spec_with_spec_ref(cljs.core.second(form)),cljs.core.cst$kw$type,((cljs.core.map_QMARK_(into))?cljs.core.cst$kw$map_DASH_of:((cljs.core.set_QMARK_(into))?cljs.core.cst$kw$set:cljs.core.cst$kw$vector
))], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_map_DASH_of,(function (_,p__5389){
var vec__5390 = p__5389;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5390,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5390,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5390,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$map_DASH_of,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_key,spec_tools.parse.parse_spec_with_spec_ref(k),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_value,spec_tools.parse.parse_spec_with_spec_ref(v)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_spec,(function (_,form){
var parsed = spec_tools.parse.parse_spec(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(cljs.core.last(form)));
if(cljs.core.truth_(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(parsed))){
return parsed;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$spec], null);
}
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_tuple,(function (_,p__5393){
var vec__5394 = p__5393;
var seq__5395 = cljs.core.seq(vec__5394);
var first__5396 = cljs.core.first(seq__5395);
var seq__5395__$1 = cljs.core.next(seq__5395);
var ___$1 = first__5396;
var values = seq__5395__$1;
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,values);
var types = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,specs);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuple,types], null),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items,specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable,(function (_,form){
var spec = spec_tools.parse.parse_spec_with_spec_ref(cljs.core.second(form));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$nilable,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item,spec], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_merge,(function (_,form){
var type_priority = (function (p1__5397_SHARP_){
var G__5399 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$map,(1),cljs.core.cst$kw$multi_DASH_spec,(0)], null);
var fexpr__5398 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__5397_SHARP_);
return (fexpr__5398.cljs$core$IFn$_invoke$arity$1 ? fexpr__5398.cljs$core$IFn$_invoke$arity$1(G__5399) : fexpr__5398.call(null,G__5399));
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.deep_merge,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(type_priority,cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec,cljs.core.rest(form))));
}));

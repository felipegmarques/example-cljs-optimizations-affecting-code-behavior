// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.swagger.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('spec_tools.json_schema');
goog.require('spec_tools.visitor');
goog.require('spec_tools.impl');
goog.require('spec_tools.core');
spec_tools.swagger.core.spec_dispatch = (function spec_tools$swagger$core$spec_dispatch(dispatch,_,___$1,___$2){
return dispatch;
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.accept_spec !== 'undefined')){
} else {
spec_tools.swagger.core.accept_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,(function (){var fexpr__6476 = cljs.core.get_global_hierarchy;
return (fexpr__6476.cljs$core$IFn$_invoke$arity$0 ? fexpr__6476.cljs$core$IFn$_invoke$arity$0() : fexpr__6476.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.swagger.core","accept-spec"),spec_tools.swagger.core.spec_dispatch,cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_float_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$format,"float"], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_double_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$format,"double"], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_nil_QMARK_,(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_or,(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),cljs.core.cst$kw$x_DASH_anyOf,children);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_and,(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),cljs.core.cst$kw$x_DASH_allOf,children);
}));
spec_tools.swagger.core.accept_merge = (function spec_tools$swagger$core$accept_merge(children){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"object",cljs.core.cst$kw$properties,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$properties,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(children,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$x_DASH_anyOf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$x_DASH_allOf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))], 0)))),cljs.core.cst$kw$required,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$required,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x_DASH_anyOf,children),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$x_DASH_allOf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))))))], null);
});
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_merge,(function (_,___$1,children,___$2){
return spec_tools.swagger.core.accept_merge(children);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_merge,(function (_,___$1,children,___$2){
return spec_tools.swagger.core.accept_merge(children);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_alt,(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),cljs.core.cst$kw$x_DASH_anyOf,children);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_cat,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),cljs.core.cst$kw$x_DASH_anyOf,children)], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_tuple,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$x_DASH_items,children], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_sequential_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,cljs.core.PersistentArrayMap.EMPTY], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enum,children,cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable,(function (_,___$1,children,p__6477){
var map__6478 = p__6477;
var map__6478__$1 = (((((!((map__6478 == null))))?(((((map__6478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6478):map__6478);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6478__$1,cljs.core.cst$kw$type);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6478__$1,cljs.core.cst$kw$in);
var k = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$parameter)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in$,cljs.core.cst$kw$body))))?cljs.core.cst$kw$allowEmptyValue:cljs.core.cst$kw$x_DASH_nullable);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec_tools.impl.unwrap(children),k,true);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_spec,(function (dispatch,spec,children,options){
var vec__6480 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6480,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6480,(1),null);
var swagger_meta = spec_tools.impl.unlift_keys(data,"swagger");
var or__4126__auto__ = cljs.core.cst$kw$swagger.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4 ? spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options) : spec_tools.json_schema.accept_spec.call(null,dispatch,spec,children,options)),swagger_meta], 0));
}
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_default,(function (dispatch,spec,children,options){
return (spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4 ? spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options) : spec_tools.json_schema.accept_spec.call(null,dispatch,spec,children,options));
}));
/**
 * Generate Swagger schema matching the given clojure.spec spec.
 * 
 *   Since clojure.spec is more expressive than Swagger schemas, everything that
 *   satisfies the spec should satisfy the resulting schema, but the converse is
 *   not true.
 */
spec_tools.swagger.core.transform = (function spec_tools$swagger$core$transform(var_args){
var G__6484 = arguments.length;
switch (G__6484) {
case 1:
return spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(spec,null);
}));

(spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 = (function (spec,options){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,spec_tools.swagger.core.accept_spec,options);
}));

(spec_tools.swagger.core.transform.cljs$lang$maxFixedArity = 2);

if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.extract_parameter !== 'undefined')){
} else {
spec_tools.swagger.core.extract_parameter = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6486 = cljs.core.get_global_hierarchy;
return (fexpr__6486.cljs$core$IFn$_invoke$arity$0 ? fexpr__6486.cljs$core$IFn$_invoke$arity$0() : fexpr__6486.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.swagger.core","extract-parameter"),(function (in$,_){
return in$;
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.swagger.core.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$body,(function (_,spec){
var schema = spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$in,cljs.core.cst$kw$body,cljs.core.cst$kw$type,cljs.core.cst$kw$parameter], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$in,"body",cljs.core.cst$kw$name,(function (){var or__4126__auto__ = spec_tools.impl.qualified_name(spec_tools.core.spec_name(spec));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "body";
}
})(),cljs.core.cst$kw$description,(function (){var or__4126__auto__ = spec_tools.core.spec_description(spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$required,(!(spec_tools.impl.nilable_spec_QMARK_(spec))),cljs.core.cst$kw$schema,schema], null)], null);
}));
spec_tools.swagger.core.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (in$,spec){
var map__6487 = spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$in,in$,cljs.core.cst$kw$type,cljs.core.cst$kw$parameter], null));
var map__6487__$1 = (((((!((map__6487 == null))))?(((((map__6487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6487):map__6487);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6487__$1,cljs.core.cst$kw$properties);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6487__$1,cljs.core.cst$kw$required);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__6489){
var vec__6490 = p__6489;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6490,(0),null);
var map__6493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6490,(1),null);
var map__6493__$1 = (((((!((map__6493 == null))))?(((((map__6493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6493):map__6493);
var schema = map__6493__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6493__$1,cljs.core.cst$kw$type);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$in,cljs.core.name(in$),cljs.core.cst$kw$name,k,cljs.core.cst$kw$description,(function (){var or__4126__auto__ = spec_tools.core.spec_description(spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$type,type,cljs.core.cst$kw$required,cljs.core.contains_QMARK_(cljs.core.set(required),k)], null),schema], 0));
}),properties);
}));
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.expand !== 'undefined')){
} else {
spec_tools.swagger.core.expand = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6495 = cljs.core.get_global_hierarchy;
return (fexpr__6495.cljs$core$IFn$_invoke$arity$0 ? fexpr__6495.cljs$core$IFn$_invoke$arity$0() : fexpr__6495.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.swagger.core","expand"),(function (k,_,___$1,___$2){
return k;
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.swagger.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_responses,(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$responses,cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = cljs.core.cst$kw$responses.cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4529__auto__ = (function spec_tools$swagger$core$iter__6496(s__6497){
return (new cljs.core.LazySeq(null,(function (){
var s__6497__$1 = s__6497;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6497__$1);
if(temp__5735__auto__){
var s__6497__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6497__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6497__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6499 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6498 = (0);
while(true){
if((i__6498 < size__4528__auto__)){
var vec__6500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6498);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6500,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6500,(1),null);
cljs.core.chunk_append(b__6499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = (cljs.core.truth_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1($))?cljs.core.update.cljs$core$IFn$_invoke$arity$4($,cljs.core.cst$kw$schema,spec_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema], null)):$);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$description,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""));
})()], null));

var G__6506 = (i__6498 + (1));
i__6498 = G__6506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6499),spec_tools$swagger$core$iter__6496(cljs.core.chunk_rest(s__6497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6499),null);
}
} else {
var vec__6503 = cljs.core.first(s__6497__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6503,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6503,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = (cljs.core.truth_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1($))?cljs.core.update.cljs$core$IFn$_invoke$arity$4($,cljs.core.cst$kw$schema,spec_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema], null)):$);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$description,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""));
})()], null),spec_tools$swagger$core$iter__6496(cljs.core.rest(s__6497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(v);
})())], null);
}));
spec_tools.swagger.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_parameters,(function (_,v,acc,___$1){
var old = (function (){var or__4126__auto__ = cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6507){
var vec__6508 = p__6507;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6508,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6508,(1),null);
return (spec_tools.swagger.core.extract_parameter.cljs$core$IFn$_invoke$arity$2 ? spec_tools.swagger.core.extract_parameter.cljs$core$IFn$_invoke$arity$2(in$,spec) : spec_tools.swagger.core.extract_parameter.call(null,in$,spec));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var merged = cljs.core.vec(cljs.core.reverse(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6511,p){
var vec__6512 = p__6511;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6512,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6512,(1),null);
var acc__$1 = vec__6512;
var c = cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,cljs.core.cst$kw$name], null));
if(cljs.core.not((cache.cljs$core$IFn$_invoke$arity$1 ? cache.cljs$core$IFn$_invoke$arity$1(c) : cache.call(null,c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,p),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,c)], null);
} else {
return acc__$1;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parameters,merged], null);
}));
spec_tools.swagger.core.expand_qualified_keywords = (function spec_tools$swagger$core$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set(cljs.core.keys(cljs.core.methods$(spec_tools.swagger.core.expand)));
return clojure.walk.postwalk((function (x__$1){
if(cljs.core.map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : accept_QMARK_.call(null,k)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k),(spec_tools.swagger.core.expand.cljs$core$IFn$_invoke$arity$4 ? spec_tools.swagger.core.expand.cljs$core$IFn$_invoke$arity$4(k,v,acc,options) : spec_tools.swagger.core.expand.call(null,k,v,acc,options))], 0));
} else {
return acc;
}
}),x__$1,x__$1);
} else {
return x__$1;
}
}),x);
});
/**
 * Transforms data into a swagger2 spec. Input data must conform
 *   to the Swagger2 Spec (http://swagger.io/specification/) with a
 *   exception that it can have any qualified keywords that are expanded
 *   with the `spec-tools.swagger.core/expand` multimethod.
 */
spec_tools.swagger.core.swagger_spec = (function spec_tools$swagger$core$swagger_spec(var_args){
var G__6516 = arguments.length;
switch (G__6516) {
case 1:
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return spec_tools.swagger.core.expand_qualified_keywords(x,options);
}));

(spec_tools.swagger.core.swagger_spec.cljs$lang$maxFixedArity = 2);


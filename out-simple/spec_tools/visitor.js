// Compiled by ClojureScript 1.10.773 {}
goog.provide('spec_tools.visitor');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
goog.require('spec_tools.form');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form.call(null,spec);
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))){
if(cljs.core.seq_QMARK_.call(null,form)){
return spec_tools.impl.normalize_symbol.call(null,cljs.core.first.call(null,form));
} else {
return spec_tools.visitor.spec_dispatch.call(null,form,accept,options);
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_.call(null,spec)){
return new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
} else {
if(cljs.core.seq_QMARK_.call(null,spec)){
return spec_tools.impl.normalize_symbol.call(null,cljs.core.first.call(null,spec_tools.impl.strip_fn_if_needed.call(null,spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol.call(null,spec);
} else {
return spec_tools.impl.normalize_symbol.call(null,spec_tools.form.resolve_form.call(null,spec));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
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
var G__5820 = arguments.length;
switch (G__5820) {
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
return spec_tools.visitor.visit.call(null,spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__5821){
var map__5822 = p__5821;
var map__5822__$1 = (((((!((map__5822 == null))))?(((((map__5822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5822):map__5822);
var options = map__5822__$1;
var visited = cljs.core.get.call(null,map__5822__$1,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632));
if(cljs.core.not.call(null,cljs.core.get.call(null,visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.call(null,options,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return spec_tools.visitor.visit_spec.call(null,spec,accept,options__$1);
} else {
return spec_tools.visitor.visit_spec.call(null,null,accept,options);
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (spec,accept,options){
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),spec,cljs.core.vec.call(null,(((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form.call(null,spec):spec)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys.call(null,spec_tools.impl.extract_form.call(null,spec));
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),spec,cljs.core.mapv.call(null,(function (p1__5825_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5825_SHARP_,accept,options);
}),keys),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (spec,accept,options){
var vec__5827 = spec_tools.impl.extract_form.call(null,spec);
var seq__5828 = cljs.core.seq.call(null,vec__5827);
var first__5829 = cljs.core.first.call(null,seq__5828);
var seq__5828__$1 = cljs.core.next.call(null,seq__5828);
var _ = first__5829;
var map__5830 = seq__5828__$1;
var map__5830__$1 = (((((!((map__5830 == null))))?(((((map__5830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5830):map__5830);
var inner_spec_map = map__5830__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),spec,cljs.core.mapv.call(null,(function (p1__5826_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5826_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (spec,accept,options){
var vec__5833 = spec_tools.impl.extract_form.call(null,spec);
var seq__5834 = cljs.core.seq.call(null,vec__5833);
var first__5835 = cljs.core.first.call(null,seq__5834);
var seq__5834__$1 = cljs.core.next.call(null,seq__5834);
var _ = first__5835;
var inner_specs = seq__5834__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),spec,cljs.core.mapv.call(null,(function (p1__5832_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5832_SHARP_,accept,options);
}),inner_specs),options);
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__5837 = spec_tools.impl.extract_form.call(null,spec);
var seq__5838 = cljs.core.seq.call(null,vec__5837);
var first__5839 = cljs.core.first.call(null,seq__5838);
var seq__5838__$1 = cljs.core.next.call(null,seq__5838);
var _ = first__5839;
var inner_specs = seq__5838__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),spec,cljs.core.mapv.call(null,(function (p1__5836_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5836_SHARP_,accept,options);
}),inner_specs),options);
});
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge.call(null,spec,accept,options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge.call(null,spec,accept,options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (spec,accept,options){
var vec__5840 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5840,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__5840,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),(function (spec,accept,options){
var vec__5844 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5844,(0),null);
var inner_spec1 = cljs.core.nth.call(null,vec__5844,(1),null);
var inner_spec2 = cljs.core.nth.call(null,vec__5844,(2),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),spec,cljs.core.mapv.call(null,(function (p1__5843_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5843_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (spec,accept,options){
var form = spec_tools.impl.extract_form.call(null,spec);
var pred = cljs.core.second.call(null,form);
var map__5847 = spec_tools.parse.parse_spec.call(null,form);
var map__5847__$1 = (((((!((map__5847 == null))))?(((((map__5847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5847):map__5847);
var type = cljs.core.get.call(null,map__5847__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch = (function (){var G__5849 = type;
var G__5849__$1 = (((G__5849 instanceof cljs.core.Keyword))?G__5849.fqn:null);
switch (G__5849__$1) {
case "map-of":
return new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);

break;
case "set":
return new cljs.core.Keyword("spec-tools.visitor","set-of","spec-tools.visitor/set-of",983982444);

break;
case "vector":
return new cljs.core.Keyword("spec-tools.visitor","vector-of","spec-tools.visitor/vector-of",-1693991985);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5849__$1)].join('')));

}
})();
return accept.call(null,dispatch,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,pred,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (spec,accept,options){
var vec__5852 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5852,(0),null);
var k = cljs.core.nth.call(null,vec__5852,(1),null);
var v = cljs.core.nth.call(null,vec__5852,(2),null);
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908),spec,cljs.core.mapv.call(null,(function (p1__5851_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5851_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),(function (spec,accept,options){
var vec__5855 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5855,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__5855,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),(function (spec,accept,options){
var vec__5858 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5858,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__5858,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),(function (spec,accept,options){
var vec__5861 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5861,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__5861,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (spec,accept,options){
var vec__5865 = spec_tools.impl.extract_form.call(null,spec);
var seq__5866 = cljs.core.seq.call(null,vec__5865);
var first__5867 = cljs.core.first.call(null,seq__5866);
var seq__5866__$1 = cljs.core.next.call(null,seq__5866);
var _ = first__5867;
var map__5868 = seq__5866__$1;
var map__5868__$1 = (((((!((map__5868 == null))))?(((((map__5868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5868):map__5868);
var inner_spec_map = map__5868__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),spec,cljs.core.mapv.call(null,(function (p1__5864_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5864_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (spec,accept,options){
var vec__5871 = spec_tools.impl.extract_form.call(null,spec);
var seq__5872 = cljs.core.seq.call(null,vec__5871);
var first__5873 = cljs.core.first.call(null,seq__5872);
var seq__5872__$1 = cljs.core.next.call(null,seq__5872);
var _ = first__5873;
var map__5874 = seq__5872__$1;
var map__5874__$1 = (((((!((map__5874 == null))))?(((((map__5874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5874):map__5874);
var inner_spec_map = map__5874__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),spec,cljs.core.mapv.call(null,(function (p1__5870_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5870_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),(function (spec,accept,options){
var vec__5876 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5876,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__5876,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (spec,accept,options){
var vec__5880 = spec_tools.impl.extract_form.call(null,spec);
var seq__5881 = cljs.core.seq.call(null,vec__5880);
var first__5882 = cljs.core.first.call(null,seq__5881);
var seq__5881__$1 = cljs.core.next.call(null,seq__5881);
var _ = first__5882;
var inner_specs = seq__5881__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),spec,cljs.core.mapv.call(null,(function (p1__5879_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5879_SHARP_,accept,options);
}),inner_specs),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys.call(null,spec_tools.impl.extract_form.call(null,spec));
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),spec,cljs.core.mapv.call(null,(function (p1__5883_SHARP_){
return spec_tools.visitor.visit.call(null,p1__5883_SHARP_,accept,options);
}),keys),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (spec,accept,options){
var vec__5884 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5884,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__5884,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (spec,accept,options){
var vec__5887 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__5887,(0),null);
var map__5890 = cljs.core.nth.call(null,vec__5887,(1),null);
var map__5890__$1 = (((((!((map__5890 == null))))?(((((map__5890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5890):map__5890);
var inner_spec = cljs.core.get.call(null,map__5890__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),(function (spec,accept,options){
return accept.call(null,spec_tools.visitor.spec_dispatch.call(null,spec,accept,options),spec,null,options);
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5733__auto__ = cljs.spec.alpha.get_spec.call(null,spec);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return cljs.core.swap_BANG_.call(null,specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref.call(null,specs);
}
});
});

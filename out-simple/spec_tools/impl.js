// Compiled by ClojureScript 1.10.773 {}
goog.provide('spec_tools.impl');
goog.require('cljs.core');
goog.require('cljs.analyzer.api');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.form');
goog.require('clojure.walk');
spec_tools.impl.cljs_sym = (function spec_tools$impl$cljs_sym(x){
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.impl.clj_sym = (function spec_tools$impl$clj_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
var v = x;
return cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.ns().name()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.sym()));
} else {
return x;
}
});
spec_tools.impl.__GT_sym = (function spec_tools$impl$__GT_sym(x){
return spec_tools.impl.cljs_sym.call(null,x);
});
spec_tools.impl.unfn = (function spec_tools$impl$unfn(cljs_QMARK_,expr){
if(((cljs.core.seq_QMARK_.call(null,expr)) && ((cljs.core.first.call(null,expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"fn*",cljs.core.name.call(null,cljs.core.first.call(null,expr)))))){
var vec__3667 = cljs.core.rest.call(null,expr);
var seq__3668 = cljs.core.seq.call(null,vec__3667);
var first__3669 = cljs.core.first.call(null,seq__3668);
var seq__3668__$1 = cljs.core.next.call(null,seq__3668);
var vec__3670 = first__3669;
var s = cljs.core.nth.call(null,vec__3670,(0),null);
var form = seq__3668__$1;
return cljs.core.conj.call(null,clojure.walk.postwalk_replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",-950237169,null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),(cljs.core.truth_(cljs_QMARK_)?new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null):new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null)));
} else {
return expr;
}
});
spec_tools.impl.polish = (function spec_tools$impl$polish(x){
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.flatten.call(null,cljs.core.keep.call(null,spec_tools.impl.polish,x));
} else {
if((x instanceof cljs.core.Symbol)){
return null;
} else {
return x;

}
}
});
spec_tools.impl.polish_un = (function spec_tools$impl$polish_un(x){
var G__3673 = x;
var G__3673__$1 = (((G__3673 == null))?null:spec_tools.impl.polish.call(null,G__3673));
var G__3673__$2 = (((G__3673__$1 == null))?null:cljs.core.name.call(null,G__3673__$1));
if((G__3673__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__3673__$2);
}
});
spec_tools.impl.un_key = (function spec_tools$impl$un_key(x){
var G__3674 = x;
var G__3674__$1 = (((G__3674 == null))?null:cljs.core.name.call(null,G__3674));
if((G__3674__$1 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__3674__$1);
}
});
spec_tools.impl.with_key__GT_spec = (function spec_tools$impl$with_key__GT_spec(p__3675){
var map__3676 = p__3675;
var map__3676__$1 = (((((!((map__3676 == null))))?(((((map__3676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3676):map__3676);
var data = map__3676__$1;
var req = cljs.core.get.call(null,map__3676__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_un = cljs.core.get.call(null,map__3676__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt = cljs.core.get.call(null,map__3676__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var opt_un = cljs.core.get.call(null,map__3676__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var key__GT_spec = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),cljs.core.concat.call(null,opt,req)));
var un_key__GT_spec = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,spec_tools.impl.un_key,cljs.core.identity),cljs.core.concat.call(null,opt_un,req_un)));
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"key->spec","key->spec",1088543019),cljs.core.merge.call(null,key__GT_spec,un_key__GT_spec));
});
spec_tools.impl.with_real_keys = (function spec_tools$impl$with_real_keys(p__3678){
var map__3679 = p__3678;
var map__3679__$1 = (((((!((map__3679 == null))))?(((((map__3679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3679):map__3679);
var data = map__3679__$1;
var req_un = cljs.core.get.call(null,map__3679__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__3679__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var G__3681 = data;
var G__3681__$1 = (cljs.core.truth_(req_un)?cljs.core.update.call(null,G__3681,new cljs.core.Keyword(null,"req-un","req-un",1074571008),cljs.core.partial.call(null,cljs.core.mapv,spec_tools.impl.un_key)):G__3681);
if(cljs.core.truth_(opt_un)){
return cljs.core.update.call(null,G__3681__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),cljs.core.partial.call(null,cljs.core.mapv,spec_tools.impl.un_key));
} else {
return G__3681__$1;
}
});
spec_tools.impl.parse_keys = (function spec_tools$impl$parse_keys(form){
var m = (function (){var G__3685 = form;
var G__3685__$1 = (((G__3685 == null))?null:cljs.core.rest.call(null,G__3685));
if((G__3685__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,G__3685__$1);
}
})();
var G__3686 = m;
var G__3686__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"req","req",-326448303).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.call(null,G__3686,new cljs.core.Keyword(null,"req","req",-326448303),(function (p1__3682_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,spec_tools.impl.polish,cljs.core.flatten.call(null,p1__3682_SHARP_)));
})):G__3686);
var G__3686__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"req-un","req-un",1074571008).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.call(null,G__3686__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008),(function (p1__3683_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,spec_tools.impl.polish,cljs.core.flatten.call(null,p1__3683_SHARP_)));
})):G__3686__$1);
var G__3686__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"opt-un","opt-un",883442496).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.call(null,G__3686__$2,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),(function (p1__3684_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,spec_tools.impl.polish,p1__3684_SHARP_));
})):G__3686__$2);
return spec_tools.impl.with_real_keys.call(null,spec_tools.impl.with_key__GT_spec.call(null,G__3686__$3));

});
spec_tools.impl.extract_keys = (function spec_tools$impl$extract_keys(form){
var map__3687 = (function (){var G__3688 = form;
var G__3688__$1 = (((G__3688 == null))?null:cljs.core.rest.call(null,G__3688));
if((G__3688__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,G__3688__$1);
}
})();
var map__3687__$1 = (((((!((map__3687 == null))))?(((((map__3687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3687):map__3687);
var req = cljs.core.get.call(null,map__3687__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var opt = cljs.core.get.call(null,map__3687__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__3687__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__3687__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
return cljs.core.flatten.call(null,cljs.core.map.call(null,spec_tools.impl.polish,cljs.core.concat.call(null,req,opt,req_un,opt_un)));
});
spec_tools.impl.extract_pred_and_info = (function spec_tools$impl$extract_pred_and_info(x){
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x),cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"spec","spec",347520401))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.PersistentArrayMap.EMPTY], null);
}
});
spec_tools.impl.strip_fn_if_needed = (function spec_tools$impl$strip_fn_if_needed(form){
var head = cljs.core.first.call(null,form);
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(3))) && (cljs.core._EQ_.call(null,head,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null))))){
return cljs.core.nth.call(null,form,(2));
} else {
return form;
}
});
spec_tools.impl.normalize_symbol = (function spec_tools$impl$normalize_symbol(kw){
var G__3690 = (((kw instanceof cljs.core.Symbol))?cljs.core.namespace.call(null,kw):false);
switch (G__3690) {
case "spec-tools.spec":
return cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,kw));

break;
case "cljs.core":
return cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,kw));

break;
case "cljs.spec.alpha":
return cljs.core.symbol.call(null,"clojure.spec.alpha",cljs.core.name.call(null,kw));

break;
default:
return kw;

}
});
spec_tools.impl.extract_form = (function spec_tools$impl$extract_form(spec){
if(cljs.core.seq_QMARK_.call(null,spec)){
return spec;
} else {
return cljs.spec.alpha.form.call(null,spec);
}
});
spec_tools.impl.qualified_name = (function spec_tools$impl$qualified_name(key){
if((key instanceof cljs.core.Keyword)){
var temp__5733__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__5733__auto__)){
var nn = temp__5733__auto__;
return [nn,"/",cljs.core.name.call(null,key)].join('');
} else {
return cljs.core.name.call(null,key);
}
} else {
return key;
}
});
spec_tools.impl.nilable_spec_QMARK_ = (function spec_tools$impl$nilable_spec_QMARK_(spec){
var form = (function (){var and__4115__auto__ = spec;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.spec.alpha.form.call(null,spec);
} else {
return and__4115__auto__;
}
})();
return cljs.core.boolean$.call(null,((cljs.core.seq_QMARK_.call(null,form))?(function (){var G__3692 = form;
var G__3692__$1 = (((G__3692 == null))?null:cljs.core.seq.call(null,G__3692));
var G__3692__$2 = (((G__3692__$1 == null))?null:cljs.core.first.call(null,G__3692__$1));
if((G__3692__$2 == null)){
return null;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),null], null), null).call(null,G__3692__$2);
}
})():null));
});
/**
 * Unwrap [x] to x. Asserts that coll has exactly one element.
 */
spec_tools.impl.unwrap = (function spec_tools$impl$unwrap(coll){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,coll))){
} else {
throw (new Error("Assert failed: (= 1 (count coll))"));
}

return cljs.core.first.call(null,coll);
});
spec_tools.impl.deep_merge = (function spec_tools$impl$deep_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3694 = arguments.length;
var i__4737__auto___3695 = (0);
while(true){
if((i__4737__auto___3695 < len__4736__auto___3694)){
args__4742__auto__.push((arguments[i__4737__auto___3695]));

var G__3696 = (i__4737__auto___3695 + (1));
i__4737__auto___3695 = G__3696;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (values){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,values)){
return cljs.core.apply.call(null,cljs.core.merge_with,spec_tools.impl.deep_merge,values);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.coll_QMARK_,values)){
return cljs.core.reduce.call(null,cljs.core.into,values);
} else {
return cljs.core.last.call(null,values);

}
}
}));

(spec_tools.impl.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(spec_tools.impl.deep_merge.cljs$lang$applyTo = (function (seq3693){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3693));
}));

spec_tools.impl.unlift_keys = (function spec_tools$impl$unlift_keys(data,ns_name){
return cljs.core.reduce.call(null,(function (acc,p__3697){
var vec__3698 = p__3697;
var k = cljs.core.nth.call(null,vec__3698,(0),null);
var v = cljs.core.nth.call(null,vec__3698,(1),null);
if(cljs.core._EQ_.call(null,ns_name,cljs.core.namespace.call(null,k))){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,cljs.core.name.call(null,k)),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
});
spec_tools.impl.register_spec_BANG_ = (function spec_tools$impl$register_spec_BANG_(k,s){
return cljs.spec.alpha.def_impl.call(null,k,cljs.spec.alpha.form.call(null,s),s);
});
spec_tools.impl.coll_of_spec = (function spec_tools$impl$coll_of_spec(pred,type){
var form = spec_tools.form.resolve_form.call(null,pred);
return cljs.spec.alpha.every_impl.call(null,form,pred,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"into","into",-150836029),type,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"into","into",-150836029),null,(1),null)),(new cljs.core.List(null,type,null,(1),null))))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cljs.core.coll_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null], null),null);
});
spec_tools.impl.map_of_spec = (function spec_tools$impl$map_of_spec(kpred,vpred){
var forms = cljs.core.map.call(null,spec_tools.form.resolve_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
var tuple = cljs.spec.alpha.tuple_impl.call(null,forms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
return cljs.spec.alpha.every_impl.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),forms))),tuple,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (_,v){
return cljs.core.nth.call(null,v,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),null,(1),null)),forms,(new cljs.core.List(null,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cljs.core.coll_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null], null),null);
});
spec_tools.impl.keys_spec = (function spec_tools$impl$keys_spec(p__3703){
var map__3704 = p__3703;
var map__3704__$1 = (((((!((map__3704 == null))))?(((((map__3704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3704):map__3704);
var req = cljs.core.get.call(null,map__3704__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var opt = cljs.core.get.call(null,map__3704__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__3704__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__3704__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var req_specs = cljs.core.flatten.call(null,cljs.core.map.call(null,spec_tools.impl.polish,cljs.core.concat.call(null,req,req_un)));
var opt_specs = cljs.core.flatten.call(null,cljs.core.map.call(null,spec_tools.impl.polish,cljs.core.concat.call(null,opt,opt_un)));
var req_keys = cljs.core.flatten.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,spec_tools.impl.polish,req),cljs.core.map.call(null,spec_tools.impl.polish_un,req_un)));
var opt_keys = cljs.core.flatten.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,spec_tools.impl.polish,opt),cljs.core.map.call(null,spec_tools.impl.polish_un,opt_un)));
var pred_exprs = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__3701_SHARP_){
return cljs.core.map_QMARK_.call(null,p1__3701_SHARP_);
})], null),cljs.core.map.call(null,(function (x){
return (function (p1__3702_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__3702_SHARP_,x);
});
}),req_keys));
var pred_forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)))))], null),cljs.core.map.call(null,(function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)))));
}),req_keys));
var keys_pred = (function (x){
return cljs.core.reduce.call(null,(function (_,p){
var or__4126__auto__ = p.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,pred_exprs);
});
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[req_un,opt_un,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms,opt]));
});
spec_tools.impl.nilable_spec = (function spec_tools$impl$nilable_spec(pred){
var form = spec_tools.form.resolve_form.call(null,pred);
return cljs.spec.alpha.nilable_impl.call(null,form,pred,null);
});
spec_tools.impl.or_spec = (function spec_tools$impl$or_spec(v){
var ks = cljs.core.mapv.call(null,cljs.core.first,v);
var preds = cljs.core.mapv.call(null,cljs.core.second,v);
var forms = cljs.core.mapv.call(null,spec_tools.form.resolve_form,preds);
return cljs.spec.alpha.or_spec_impl.call(null,ks,forms,preds,null);
});

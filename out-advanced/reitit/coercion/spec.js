// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reitit.coercion.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.data_spec');
goog.require('spec_tools.swagger.core');
goog.require('reitit.coercion');
goog.require('clojure.set');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer], 0));
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer], 0));
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;
reitit.coercion.spec.no_op_transformer = (function (){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec6798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec6798 = (function (meta6799){
this.meta6799 = meta6799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec6798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6800,meta6799__$1){
var self__ = this;
var _6800__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec6798(meta6799__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec6798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6800){
var self__ = this;
var _6800__$1 = this;
return self__.meta6799;
}));

(reitit.coercion.spec.t_reitit$coercion$spec6798.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec6798.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$reitit$coercion$spec_SLASH_no_DASH_op;
}));

(reitit.coercion.spec.t_reitit$coercion$spec6798.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec6798.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec6798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta6799], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec6798.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec6798.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec6798");

(reitit.coercion.spec.t_reitit$coercion$spec6798.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.coercion.spec/t_reitit$coercion$spec6798");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec6798.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec6798 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec6798(meta6799){
return (new reitit.coercion.spec.t_reitit$coercion$spec6798(meta6799));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec6798(cljs.core.PersistentArrayMap.EMPTY));
})()
;

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

var reitit$coercion$spec$IntoSpec$into_spec$dyn_6801 = (function (this$,name){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4429__auto__.call(null,this$,name));
} else {
var m__4426__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4426__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("IntoSpec.into-spec",this$);
}
}
});
reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
return reitit$coercion$spec$IntoSpec$into_spec$dyn_6801(this$,name);
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__4126__auto__ = _QMARK_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("")));
}
});
(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),cljs.core.cst$kw$name);
}));

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),cljs.core.cst$kw$name);
}));

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),cljs.core.cst$kw$name);
}));

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1);
}));

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"_",true);

goog.object.set(reitit.coercion.spec.into_spec,"_",(function (this$,_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,this$], null));
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"null",true);

goog.object.set(reitit.coercion.spec.into_spec,"null",(function (this$,_){
return null;
}));
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_(pred))?cljs.core.seq(pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$reitit$coercion$spec_SLASH_default], null),cljs.core.cst$kw$hierarchy,(function (){var fexpr__6802 = cljs.core.get_global_hierarchy;
return (fexpr__6802.cljs$core$IFn$_invoke$arity$0 ? fexpr__6802.cljs$core$IFn$_invoke$arity$0() : fexpr__6802.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.spec","coerce-response?"),cljs.core.identity,cljs.core.cst$kw$reitit$coercion$spec_SLASH_default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
reitit.coercion.spec.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$reitit$coercion$spec_SLASH_default,(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$coerce_DASH_response_QMARK_,reitit.coercion.spec.coerce_response_QMARK_,cljs.core.cst$kw$transformers,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default,reitit.coercion.spec.strip_extra_keys_transformer,cljs.core.cst$kw$formats,new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),cljs.core.cst$kw$string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,reitit.coercion.spec.string_transformer], null),cljs.core.cst$kw$response,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,reitit.coercion.spec.no_op_transformer], null)], null)], null);
reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__6805){
var map__6806 = p__6805;
var map__6806__$1 = (((((!((map__6806 == null))))?(((((map__6806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6806):map__6806);
var opts = map__6806__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6806__$1,cljs.core.cst$kw$transformers);
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6806__$1,cljs.core.cst$kw$coerce_DASH_response_QMARK_);
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec6808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec6808 = (function (p__6805,map__6806,opts,transformers,coerce_response_QMARK_,meta6809){
this.p__6805 = p__6805;
this.map__6806 = map__6806;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta6809 = meta6809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6810,meta6809__$1){
var self__ = this;
var _6810__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec6808(self__.p__6805,self__.map__6806,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta6809__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6810){
var self__ = this;
var _6810__$1 = this;
return self__.meta6809;
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (this$,specification,p__6811){
var self__ = this;
var map__6812 = p__6811;
var map__6812__$1 = (((((!((map__6812 == null))))?(((((map__6812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6812):map__6812);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6812__$1,cljs.core.cst$kw$parameters);
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6812__$1,cljs.core.cst$kw$responses);
var this$__$1 = this;
var G__6814 = specification;
var G__6814__$1 = (((G__6814 instanceof cljs.core.Keyword))?G__6814.fqn:null);
switch (G__6814__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_parameters,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(parameters),(function (){var iter__4529__auto__ = (function reitit$coercion$spec$create_$_iter__6815(s__6816){
return (new cljs.core.LazySeq(null,(function (){
var s__6816__$1 = s__6816;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6816__$1);
if(temp__5735__auto__){
var s__6816__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6816__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6816__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6818 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6817 = (0);
while(true){
if((i__6817 < size__4528__auto__)){
var vec__6819 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6817);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6819,(1),null);
cljs.core.chunk_append(b__6818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null));

var G__6838 = (i__6817 + (1));
i__6817 = G__6838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6818),reitit$coercion$spec$create_$_iter__6815(cljs.core.chunk_rest(s__6816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6818),null);
}
} else {
var vec__6822 = cljs.core.first(s__6816__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6822,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null),reitit$coercion$spec$create_$_iter__6815(cljs.core.rest(s__6816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_responses,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__4529__auto__ = (function reitit$coercion$spec$create_$_iter__6825(s__6826){
return (new cljs.core.LazySeq(null,(function (){
var s__6826__$1 = s__6826;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6826__$1);
if(temp__5735__auto__){
var s__6826__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6826__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6826__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6828 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6827 = (0);
while(true){
if((i__6827 < size__4528__auto__)){
var vec__6829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6827);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6829,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6829,(1),null);
cljs.core.chunk_append(b__6828,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,cljs.core.cst$kw$schema], null));
if(cljs.core.truth_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$schema,((function (i__6827,$,$__$1,vec__6829,k,response,c__4527__auto__,size__4528__auto__,b__6828,s__6826__$2,temp__5735__auto__,G__6814,G__6814__$1,this$__$1,map__6812,map__6812__$1,parameters,responses,map__6806,map__6806__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__6803_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__6803_SHARP_,null);
});})(i__6827,$,$__$1,vec__6829,k,response,c__4527__auto__,size__4528__auto__,b__6828,s__6826__$2,temp__5735__auto__,G__6814,G__6814__$1,this$__$1,map__6812,map__6812__$1,parameters,responses,map__6806,map__6806__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null));

var G__6839 = (i__6827 + (1));
i__6827 = G__6839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6828),reitit$coercion$spec$create_$_iter__6825(cljs.core.chunk_rest(s__6826__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6828),null);
}
} else {
var vec__6832 = cljs.core.first(s__6826__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6832,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6832,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,cljs.core.cst$kw$schema], null));
if(cljs.core.truth_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$schema,((function ($,$__$1,vec__6832,k,response,s__6826__$2,temp__5735__auto__,G__6814,G__6814__$1,this$__$1,map__6812,map__6812__$1,parameters,responses,map__6806,map__6806__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__6803_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__6803_SHARP_,null);
});})($,$__$1,vec__6832,k,response,s__6826__$2,temp__5735__auto__,G__6814,G__6814__$1,this$__$1,map__6812,map__6812__$1,parameters,responses,map__6806,map__6806__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$spec$create_$_iter__6825(cljs.core.rest(s__6826__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$specification,specification,cljs.core.cst$kw$coercion,cljs.core.cst$kw$spec], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec(model,name);
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,cljs.core.cst$kw$spec,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.spec.alpha.form)),cljs.core.cst$kw$problems,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6804_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6804_SHARP_,cljs.core.cst$kw$pred,reitit.coercion.spec.stringify_pred);
}),problems));
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (this$,type,spec){
var self__ = this;
var this$__$1 = this;
var spec__$1 = this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,spec,null);
var map__6835 = (self__.transformers.cljs$core$IFn$_invoke$arity$1 ? self__.transformers.cljs$core$IFn$_invoke$arity$1(type) : self__.transformers.call(null,type));
var map__6835__$1 = (((((!((map__6835 == null))))?(((((map__6835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6835):map__6835);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6835__$1,cljs.core.cst$kw$formats);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6835__$1,cljs.core.cst$kw$default);
return (function (value,format){
var temp__5733__auto__ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var transformer = temp__5733__auto__;
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_(transformed)){
var problems = spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,spec__$1,cljs.core.cst$kw$problems,problems], null));
} else {
return cljs.spec.alpha.unform(spec__$1,transformed);
}
}
} else {
return value;
}
});
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : self__.coerce_response_QMARK_.call(null,spec)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null,cljs.core.cst$kw$response,spec);
} else {
return null;
}
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p__6805,cljs.core.cst$sym$map__6806,cljs.core.cst$sym$opts,cljs.core.cst$sym$transformers,cljs.core.cst$sym$coerce_DASH_response_QMARK_,cljs.core.cst$sym$meta6809], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec6808.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec6808.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec6808");

(reitit.coercion.spec.t_reitit$coercion$spec6808.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.coercion.spec/t_reitit$coercion$spec6808");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec6808.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec6808 = (function reitit$coercion$spec$create_$___GT_t_reitit$coercion$spec6808(p__6805__$1,map__6806__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta6809){
return (new reitit.coercion.spec.t_reitit$coercion$spec6808(p__6805__$1,map__6806__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta6809));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec6808(p__6805,map__6806__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$coercion_SLASH_coercion], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create(reitit.coercion.spec.default_options);

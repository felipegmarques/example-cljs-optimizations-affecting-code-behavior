// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.form');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.form !== 'undefined') && (typeof spec_tools.form.resolve_form !== 'undefined')){
} else {
spec_tools.form.resolve_form = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$spec_DASH_tools$form_SLASH_default], null),cljs.core.cst$kw$hierarchy,(function (){var fexpr__1701 = cljs.core.get_global_hierarchy;
return (fexpr__1701.cljs$core$IFn$_invoke$arity$0 ? fexpr__1701.cljs$core$IFn$_invoke$arity$0() : fexpr__1701.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.form","resolve-form"),(function (x){
if(((cljs.core.qualified_keyword_QMARK_(x)) || (cljs.core.seq_QMARK_(x)) || (cljs.core.set_QMARK_(x)))){
return cljs.core.cst$kw$spec_DASH_tools$form_SLASH_identity;
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_(x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.spec.alpha.regex_QMARK_(x);
}
})())){
return cljs.core.cst$kw$spec_DASH_tools$form_SLASH_spec;
} else {
return x;

}
}
}),cljs.core.cst$kw$spec_DASH_tools$form_SLASH_default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$form_SLASH_spec,(function (x){
return cljs.spec.alpha.form(x);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$form_SLASH_identity,(function (x){
return x;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$form_SLASH_default,(function (_){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.any_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.some_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_some_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.number_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.integer_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.int_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.pos_int_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.neg_int_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_neg_DASH_int_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.nat_int_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.float_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_float_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.double_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_double_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.boolean_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.string_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.ident_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_ident_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.simple_ident_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_ident_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.qualified_ident_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_ident_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.keyword_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.simple_keyword_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_keyword_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.qualified_keyword_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.symbol_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.simple_symbol_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_symbol_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.qualified_symbol_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_symbol_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.uuid_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_uuid_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.inst_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_inst_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.seqable_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_seqable_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.indexed_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_indexed_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.map_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.vector_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.list_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.seq_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_seq_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.char_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_char_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.set_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.nil_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.false_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_false_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.true_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_true_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.zero_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_zero_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.coll_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.empty_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_empty_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.associative_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_associative_QMARK_;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.sequential_QMARK_,(function (_){
return cljs.core.cst$sym$cljs$core_SLASH_sequential_QMARK_;
}));

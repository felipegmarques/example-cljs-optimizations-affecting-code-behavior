// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7831){
var map__7832 = p__7831;
var map__7832__$1 = (((((!((map__7832 == null))))?(((((map__7832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7832):map__7832);
var m = map__7832__$1;
var n = cljs.core.get.call(null,map__7832__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7832__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7834_7866 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7835_7867 = null;
var count__7836_7868 = (0);
var i__7837_7869 = (0);
while(true){
if((i__7837_7869 < count__7836_7868)){
var f_7870 = cljs.core._nth.call(null,chunk__7835_7867,i__7837_7869);
cljs.core.println.call(null,"  ",f_7870);


var G__7871 = seq__7834_7866;
var G__7872 = chunk__7835_7867;
var G__7873 = count__7836_7868;
var G__7874 = (i__7837_7869 + (1));
seq__7834_7866 = G__7871;
chunk__7835_7867 = G__7872;
count__7836_7868 = G__7873;
i__7837_7869 = G__7874;
continue;
} else {
var temp__5735__auto___7875 = cljs.core.seq.call(null,seq__7834_7866);
if(temp__5735__auto___7875){
var seq__7834_7876__$1 = temp__5735__auto___7875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7834_7876__$1)){
var c__4556__auto___7877 = cljs.core.chunk_first.call(null,seq__7834_7876__$1);
var G__7878 = cljs.core.chunk_rest.call(null,seq__7834_7876__$1);
var G__7879 = c__4556__auto___7877;
var G__7880 = cljs.core.count.call(null,c__4556__auto___7877);
var G__7881 = (0);
seq__7834_7866 = G__7878;
chunk__7835_7867 = G__7879;
count__7836_7868 = G__7880;
i__7837_7869 = G__7881;
continue;
} else {
var f_7882 = cljs.core.first.call(null,seq__7834_7876__$1);
cljs.core.println.call(null,"  ",f_7882);


var G__7883 = cljs.core.next.call(null,seq__7834_7876__$1);
var G__7884 = null;
var G__7885 = (0);
var G__7886 = (0);
seq__7834_7866 = G__7883;
chunk__7835_7867 = G__7884;
count__7836_7868 = G__7885;
i__7837_7869 = G__7886;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7887 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7887);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7887)))?cljs.core.second.call(null,arglists_7887):arglists_7887));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7838_7888 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7839_7889 = null;
var count__7840_7890 = (0);
var i__7841_7891 = (0);
while(true){
if((i__7841_7891 < count__7840_7890)){
var vec__7852_7892 = cljs.core._nth.call(null,chunk__7839_7889,i__7841_7891);
var name_7893 = cljs.core.nth.call(null,vec__7852_7892,(0),null);
var map__7855_7894 = cljs.core.nth.call(null,vec__7852_7892,(1),null);
var map__7855_7895__$1 = (((((!((map__7855_7894 == null))))?(((((map__7855_7894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7855_7894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7855_7894):map__7855_7894);
var doc_7896 = cljs.core.get.call(null,map__7855_7895__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7897 = cljs.core.get.call(null,map__7855_7895__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7893);

cljs.core.println.call(null," ",arglists_7897);

if(cljs.core.truth_(doc_7896)){
cljs.core.println.call(null," ",doc_7896);
} else {
}


var G__7898 = seq__7838_7888;
var G__7899 = chunk__7839_7889;
var G__7900 = count__7840_7890;
var G__7901 = (i__7841_7891 + (1));
seq__7838_7888 = G__7898;
chunk__7839_7889 = G__7899;
count__7840_7890 = G__7900;
i__7841_7891 = G__7901;
continue;
} else {
var temp__5735__auto___7902 = cljs.core.seq.call(null,seq__7838_7888);
if(temp__5735__auto___7902){
var seq__7838_7903__$1 = temp__5735__auto___7902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7838_7903__$1)){
var c__4556__auto___7904 = cljs.core.chunk_first.call(null,seq__7838_7903__$1);
var G__7905 = cljs.core.chunk_rest.call(null,seq__7838_7903__$1);
var G__7906 = c__4556__auto___7904;
var G__7907 = cljs.core.count.call(null,c__4556__auto___7904);
var G__7908 = (0);
seq__7838_7888 = G__7905;
chunk__7839_7889 = G__7906;
count__7840_7890 = G__7907;
i__7841_7891 = G__7908;
continue;
} else {
var vec__7857_7909 = cljs.core.first.call(null,seq__7838_7903__$1);
var name_7910 = cljs.core.nth.call(null,vec__7857_7909,(0),null);
var map__7860_7911 = cljs.core.nth.call(null,vec__7857_7909,(1),null);
var map__7860_7912__$1 = (((((!((map__7860_7911 == null))))?(((((map__7860_7911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7860_7911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7860_7911):map__7860_7911);
var doc_7913 = cljs.core.get.call(null,map__7860_7912__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7914 = cljs.core.get.call(null,map__7860_7912__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7910);

cljs.core.println.call(null," ",arglists_7914);

if(cljs.core.truth_(doc_7913)){
cljs.core.println.call(null," ",doc_7913);
} else {
}


var G__7915 = cljs.core.next.call(null,seq__7838_7903__$1);
var G__7916 = null;
var G__7917 = (0);
var G__7918 = (0);
seq__7838_7888 = G__7915;
chunk__7839_7889 = G__7916;
count__7840_7890 = G__7917;
i__7841_7891 = G__7918;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__7862 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7863 = null;
var count__7864 = (0);
var i__7865 = (0);
while(true){
if((i__7865 < count__7864)){
var role = cljs.core._nth.call(null,chunk__7863,i__7865);
var temp__5735__auto___7919__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___7919__$1)){
var spec_7920 = temp__5735__auto___7919__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7920));
} else {
}


var G__7921 = seq__7862;
var G__7922 = chunk__7863;
var G__7923 = count__7864;
var G__7924 = (i__7865 + (1));
seq__7862 = G__7921;
chunk__7863 = G__7922;
count__7864 = G__7923;
i__7865 = G__7924;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__7862);
if(temp__5735__auto____$1){
var seq__7862__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7862__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7862__$1);
var G__7925 = cljs.core.chunk_rest.call(null,seq__7862__$1);
var G__7926 = c__4556__auto__;
var G__7927 = cljs.core.count.call(null,c__4556__auto__);
var G__7928 = (0);
seq__7862 = G__7925;
chunk__7863 = G__7926;
count__7864 = G__7927;
i__7865 = G__7928;
continue;
} else {
var role = cljs.core.first.call(null,seq__7862__$1);
var temp__5735__auto___7929__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___7929__$2)){
var spec_7930 = temp__5735__auto___7929__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7930));
} else {
}


var G__7931 = cljs.core.next.call(null,seq__7862__$1);
var G__7932 = null;
var G__7933 = (0);
var G__7934 = (0);
seq__7862 = G__7931;
chunk__7863 = G__7932;
count__7864 = G__7933;
i__7865 = G__7934;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__7935 = cljs.core.conj.call(null,via,t);
var G__7936 = cljs.core.ex_cause.call(null,t);
via = G__7935;
t = G__7936;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__7939 = datafied_throwable;
var map__7939__$1 = (((((!((map__7939 == null))))?(((((map__7939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7939):map__7939);
var via = cljs.core.get.call(null,map__7939__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__7939__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__7939__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__7940 = cljs.core.last.call(null,via);
var map__7940__$1 = (((((!((map__7940 == null))))?(((((map__7940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7940):map__7940);
var type = cljs.core.get.call(null,map__7940__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__7940__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__7940__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__7941 = data;
var map__7941__$1 = (((((!((map__7941 == null))))?(((((map__7941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7941):map__7941);
var problems = cljs.core.get.call(null,map__7941__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__7941__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__7941__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__7942 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__7942__$1 = (((((!((map__7942 == null))))?(((((map__7942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7942):map__7942);
var top_data = map__7942__$1;
var source = cljs.core.get.call(null,map__7942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__7947 = phase;
var G__7947__$1 = (((G__7947 instanceof cljs.core.Keyword))?G__7947.fqn:null);
switch (G__7947__$1) {
case "read-source":
var map__7948 = data;
var map__7948__$1 = (((((!((map__7948 == null))))?(((((map__7948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7948):map__7948);
var line = cljs.core.get.call(null,map__7948__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7948__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__7950 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__7950__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7950,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7950);
var G__7950__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7950__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7950__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7950__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7950__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__7951 = top_data;
var G__7951__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7951,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7951);
var G__7951__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7951__$1);
var G__7951__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7951__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7951__$2);
var G__7951__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7951__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7951__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7951__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7951__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__7952 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7952,(0),null);
var method = cljs.core.nth.call(null,vec__7952,(1),null);
var file = cljs.core.nth.call(null,vec__7952,(2),null);
var line = cljs.core.nth.call(null,vec__7952,(3),null);
var G__7955 = top_data;
var G__7955__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__7955,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__7955);
var G__7955__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__7955__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__7955__$1);
var G__7955__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__7955__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__7955__$2);
var G__7955__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7955__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7955__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7955__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7955__$4;
}

break;
case "execution":
var vec__7956 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7956,(0),null);
var method = cljs.core.nth.call(null,vec__7956,(1),null);
var file = cljs.core.nth.call(null,vec__7956,(2),null);
var line = cljs.core.nth.call(null,vec__7956,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__7938_SHARP_){
var or__4126__auto__ = (p1__7938_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__7938_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__7959 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__7959__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__7959,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__7959);
var G__7959__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7959__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7959__$1);
var G__7959__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__7959__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__7959__$2);
var G__7959__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__7959__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__7959__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7959__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7959__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7947__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__7963){
var map__7964 = p__7963;
var map__7964__$1 = (((((!((map__7964 == null))))?(((((map__7964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7964):map__7964);
var triage_data = map__7964__$1;
var phase = cljs.core.get.call(null,map__7964__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__7964__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__7964__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7964__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__7964__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__7964__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__7964__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__7964__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__7966 = phase;
var G__7966__$1 = (((G__7966 instanceof cljs.core.Keyword))?G__7966.fqn:null);
switch (G__7966__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7967_7976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7968_7977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7969_7978 = true;
var _STAR_print_fn_STAR__temp_val__7970_7979 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7969_7978);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7970_7979);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7961_SHARP_){
return cljs.core.dissoc.call(null,p1__7961_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7968_7977);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7967_7976);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7971_7980 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7972_7981 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7973_7982 = true;
var _STAR_print_fn_STAR__temp_val__7974_7983 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7973_7982);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7974_7983);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7962_SHARP_){
return cljs.core.dissoc.call(null,p1__7962_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7972_7981);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7971_7980);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7966__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

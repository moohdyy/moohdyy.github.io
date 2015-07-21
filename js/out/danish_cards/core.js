// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('danish_cards.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
danish_cards.core.home_page = (function danish_cards$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$ui$page$dimmer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,(cljs.core.truth_(reagent.session.get_BANG_(cljs.core.constant$keyword$dimmer_DASH_on))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$center,"Hello",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$button$circular$ui$icon$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,(function (){
return reagent.session.put_BANG_(cljs.core.constant$keyword$dimmer_DASH_on,false);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$i$icon$remove], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$ui$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,(function (){
return reagent.session.put_BANG_(cljs.core.constant$keyword$dimmer_DASH_on,true);
})], null),"click"], null)], null);
});
danish_cards.core.about_page = (function danish_cards$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"About danish-cards"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"#/"], null),"go to the home page"], null)], null)], null);
});
danish_cards.core.current_page = (function danish_cards$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.constant$keyword$current_DASH_page)], null)], null);
});
secretary.core.set_config_BANG_(cljs.core.constant$keyword$prefix,"#");
var action__10309__auto___10442 = (function (params__10310__auto__){
if(cljs.core.map_QMARK_(params__10310__auto__)){
var map__10440 = params__10310__auto__;
var map__10440__$1 = ((cljs.core.seq_QMARK_(map__10440))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10440):map__10440);
return reagent.session.put_BANG_(cljs.core.constant$keyword$current_DASH_page,new cljs.core.Var(function(){return danish_cards.core.home_page;},new cljs.core.Symbol("danish-cards.core","home-page","danish-cards.core/home-page",820638131,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"danish-cards.core","danish-cards.core",903503600,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/danish_cards/core.cljs",16,1,12,12,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(danish_cards.core.home_page)?danish_cards.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__10310__auto__)){
var vec__10441 = params__10310__auto__;
return reagent.session.put_BANG_(cljs.core.constant$keyword$current_DASH_page,new cljs.core.Var(function(){return danish_cards.core.home_page;},new cljs.core.Symbol("danish-cards.core","home-page","danish-cards.core/home-page",820638131,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"danish-cards.core","danish-cards.core",903503600,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/danish_cards/core.cljs",16,1,12,12,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(danish_cards.core.home_page)?danish_cards.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__10309__auto___10442);

var action__10309__auto___10445 = (function (params__10310__auto__){
if(cljs.core.map_QMARK_(params__10310__auto__)){
var map__10443 = params__10310__auto__;
var map__10443__$1 = ((cljs.core.seq_QMARK_(map__10443))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10443):map__10443);
return reagent.session.put_BANG_(cljs.core.constant$keyword$current_DASH_page,new cljs.core.Var(function(){return danish_cards.core.about_page;},new cljs.core.Symbol("danish-cards.core","about-page","danish-cards.core/about-page",1682157287,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"danish-cards.core","danish-cards.core",903503600,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/danish_cards/core.cljs",17,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(danish_cards.core.about_page)?danish_cards.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__10310__auto__)){
var vec__10444 = params__10310__auto__;
return reagent.session.put_BANG_(cljs.core.constant$keyword$current_DASH_page,new cljs.core.Var(function(){return danish_cards.core.about_page;},new cljs.core.Symbol("danish-cards.core","about-page","danish-cards.core/about-page",1682157287,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"danish-cards.core","danish-cards.core",903503600,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/danish_cards/core.cljs",17,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(danish_cards.core.about_page)?danish_cards.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__10309__auto___10445);

danish_cards.core.hook_browser_navigation_BANG_ = (function danish_cards$core$hook_browser_navigation_BANG_(){
var G__10450 = (new goog.History());
var G__10451_10454 = G__10450;
var G__10452_10455 = goog.history.EventType.NAVIGATE;
var G__10453_10456 = ((function (G__10451_10454,G__10452_10455,G__10450){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__10451_10454,G__10452_10455,G__10450))
;
goog.events.listen(G__10451_10454,G__10452_10455,G__10453_10456);

G__10450.setEnabled(true);

return G__10450;
});
danish_cards.core.mount_root = (function danish_cards$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [danish_cards.core.current_page], null),document.getElementById("app"));
});
danish_cards.core.init_BANG_ = (function danish_cards$core$init_BANG_(){
danish_cards.core.hook_browser_navigation_BANG_();

return danish_cards.core.mount_root();
});

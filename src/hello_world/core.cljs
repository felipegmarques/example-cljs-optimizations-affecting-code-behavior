(ns hello-world.core
  (:require [cljs.pprint]
            [reitit.core :as reitit]
            [reitit.coercion :as coercion]
            [reitit.coercion.spec :as reitit.spec]
            [reitit.frontend :as reitit.frontend]
            [reitit.frontend.easy :as reitit.easy]))

(def routes
  [["/:some-id/hello/:another-id" {:parameters {:path {:some-id    uuid?
                                                       :another-id uuid?}}
                                   :name       :test-route}]])

(def router (reitit.frontend/router routes {:data {:coercion reitit.spec/coercion}}))

(def some-id "fd289f9a-8a0c-4ab1-9aec-9289c4152e35")
(def another-id "579a3556-208c-4670-860d-70c915f97cc8")

(cljs.pprint/pprint (reitit.frontend/match-by-path router (str "/" some-id "/hello/" another-id)))

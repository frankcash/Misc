;; map examples
(= (:b {:a 10, :b 20, :c 30}) ((hash-map :a 10, :b 20, :c 30) :b))
(= {:a 1, :b 2, :c 3} (conj {:a 1} [:b 2] [:c 3]))

;; sequences
(= 3 (second [2 3 4]))
(= [20 30 40] (rest [10 20 30 40]))

;; functions
(= 6 ((fn [x] (* x 2)) 3))
(= 8 ((fn [x] (* x 2)) 4))
(= ((fn [x] (* x 2)) 2) 4)
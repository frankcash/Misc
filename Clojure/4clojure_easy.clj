(= true true)
(= (- 10 (* 2 3)) 4)
(= "HELLO WORLD" (.toUpperCase "hello world")) ;; since clojure uses Java strings one can call Java String methods
;; lists
(= (list ':a :b :c) '(:a :b :c)) ;; simple list
(= '(1 2 3 4) (conj '(2 3 4) 1))
(= '(1 2 3 4) (conj '(3 4) 2 1)) ;; adds 2 to the front -> adds 1 to the front
;; vectors
(= [:a :b :c] (list :a :b :c) (vec '(:a :b :c)) (vector :a :b :c)) ;; vectors can be compared to lists and constructed in many different ways
(= [1 2 3 4] (conj [1 2 3] 4))
(= [1 2 3 4] (conj [1 2] 3 4)) ;; conj adds to the end for vectors
;; sets
(= #{:a :b :c :d} (set '(:a :a :b :c :c :c :c :d :d))) ;; sets only look for unique values
(= #{:a :b :C :d} (clojure.set/union #{:a :b :c} #{:b :c :d}))
(= #{1 2 3 4} (conj #{1 4 3} 2))
;; maps
(= (:b {:a 10, :b 20, :c 30}) ((hash-map :a 10, :b 20, :c 30) :b))
(= (:b {:a 10, :b 20, :c 30}) (:b {:a 10, :b 20, :c 30}))
(= {:a 1, :b 2, :c 3} (conj {:a 1} {:b 2} [:c 3]))
;; sequences
(= 3 (first '(3 2 1)))
(= 3 (second [2 3 4]))
(= 3 (last (list 1 2 3)))
(= [20 30 40] (rest [10 20 30 40]))
;; functions
(= 8 ((fn add-five [x] (+ x 5)) 3))
(= 8 (( fn [x] (+ x 5)) 3))
(= 8 (#(+ % 5) 3))
(= 8 (( partial + 5)3))
(= (* 2 2) 4)
(= '(6 7 8) (map #(+ % 5) '(1 2 3))) ;; map takes a function and a sequence, then applies that function to every element in the sequence -> returns a new sequence
(= '(6 7) (filter #(> % 5) '(3 4 5 6 7))) ;; filter function takes two args: predicate function and sequence -> returns a new sequence with all elements that the fn was true force
;; let
(= 7 (let [x 5] (+ 2 x)))
(= 7 ( let [x 3, y 10] (- y x)))
(= 7 (let [x 21] (let [y 3] (/ x y))))
(= 10 (let [z 1, x 7, y 3] (+ x y)))
(= 4 (let [z 1, x 7, y 3] (+ y z)))
(= 1 (let [z 1, x 7, y 3] z))
;; reduce
(= 0(reduce + []))
(= 15 (reduce + [1 2 3 4 5]))
(= 6 (reduce + 1 [2 3]))
;; recursion in clojure
(= [5, 4, 3, 2, 1] ((fn foo [x] (when (> x 0) (conj (foo (dec x)) x))) 5)) ;; dec returns x - 1 && conj returns an [ ] with the elements added to the send-off
(= 3 (dec 4))

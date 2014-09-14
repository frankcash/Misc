doubleMe x = x + x
doubleUs x y = doubleMe x + doubleMe y
doubleSmallNumber x = if x > 100
											then x
											else x*2 -- else is necessary in haskell
doubleSmallNumber' x = (if x > 100 then x else x*2)+1
conanO'Brien = "It's a-me, Conan O'Brien!" -- functions cannot start with a capital
-- binds each element to x == x <- [1..10]
-- the output is before the pipe (|)
simpleSetComprehension = [ x * 2 | x <- [1..10]]
simpleSetComprehension' = [x * 2 | x <- [1..10], x*2>=12] -- adds a predicate that says must be greater than or equal to 12
mediumSetComprehension = [ x | x <- [50..100], mod x 7 == 3] -- prints all numbers from 50 to 100 that when divided by 7 have a remainder of 3
boomBang xs = [ if x< 10 then "Boom!" else "Bang!" | x <- xs, odd x]

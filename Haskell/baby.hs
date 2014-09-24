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
boomBang xs = [ if x< 10 then "Boom!" else "Bang!" | x <- xs, odd x] -- replaces odd numbers with "Boom!" or "Bang!" based upon whether they are less than or greater than 10
fizzBuzz = [fb x | x <- [1..100]] where fb y | y `mod` 15 ==0 = "FizzBuzz" | y `mod` 3 ==0 = "Fizz" | y `mod` 5 == 0 = "Buzz" | otherwise = show y -- fizzbuzz
rightTriangles' = [ (a, b, c) | c <- [1..10], a<- [1..c], b <- [1..a], a^2 + b^2 == c^2, a+b+c==24] -- right triangles whose perimeter equals 24

factorial :: Integer -> Integer -- make sure to give explicit type declaration 
factorial n = product [1..n]
-- :t <thing to get type of> -- tells you the type of something

--show 5 -- returns 5 as a member of Show
--read "5" - 2 -- takes a [Char] and returns a member of Read

-- returning using type annotations
--read "5" :: Int
--read "5" :: Float
--(read "5" :: Float ) * 4 
--read "[1,2,3,4]" :: [Int] -- this is as a list of Ints
--read "(3, 'a')" :: (Int, Char)


-- Enum members = sequentially ordered types :: use its types in list ranges
-- contains: (), Bool, Char, Ordering, Int, Integer, Float, and Double


--20 :: Int
--20 :: Integer
--20 :: Float
--20 :: Double

lucky :: (Integral a) => a -> String
lucky 7 = "LUCKY NUMBER SEVEN!"
lucky x = "Sorry, you're out of luck, pal!"

sayMe :: (Integral a) => a -> String -- cases run in order of existence 
sayMe 1 = "One!"
sayMe 2 = "Two!"
sayMe 3 = "Three!"
sayMe 4 = "Four!"
sayMe 5 = "Five!"
sayMe x = "Not between 1 and 5"

factorialRe :: (Integral a) => a -> a -- type annotation 
factorialRe 0 = 1 -- when n gets to 0
factorialRe n = n * factorialRe ( n -1 ) -- finds factorial recursively, i.e. 5 = 5 * 4 * 3 * 2 * 1 but haskell reads it as (5 * (4 * ( 3 * ( 2 * ( 1 * 1) ) ) ) )


-- need to make sure to return a catch-all so patterns don't fail

addVectors :: (Num a) => (a, a) -> (a, a) -> (a, a)
addVectors (x1, y1) (x2, y2) = (x1 + x2, y1 + y2)

-- accounting for three element tuples
first :: (a, b, c) -> a
first (x, _, _) = x

second :: (a, b, c) -> b
second (_, y, _) = y

third :: (a, b, c) -> c
third (_,_, z) = z
-- end accounting for three element tuples

head' :: [a] -> a
head' [] = error "Can't call head on an empty list, dummy!"
head' (x:_) = x

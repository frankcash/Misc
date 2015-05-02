-- Frank Cash
-- CIS 194 UPenn
-- Lecture 1


--- uses guards
isEven :: Integer -> Bool
isEven n
	|mod n 2 == 0 = True
	|otherwise 		= False

-- tries pairs
sumPair :: (Int, Int) -> Int
sumPair (0, 0) = 0
sumPair (x, y) = x + y

hailstoneSeq :: Integer -> [Integer]
hailstoneSeq 1 = [1]
hailstoneSeq n = n : hailstoneSeq (hailstone n)

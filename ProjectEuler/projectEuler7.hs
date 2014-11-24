-- Project Euler #7, really inefficient implementation of the Sieve of Eratosthenes
-- http://en.literateprograms.org/Sieve_of_Eratosthenes_%28Haskell%29
-- finds prime numbers
primes:: [Integer]
primes = sieve [2..2000000] where
	sieve (p:xs) = p: sieve[x|x <-xs, x `mod` p > 0]
f = sum primes
result = primes !! 10000 -- because we already start off at 2, so it's actually 10000 + 1
f

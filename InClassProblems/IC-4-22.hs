zip2 :: (a->b->c) -> [a]->[b]->[c]
zip2 _f []     _bs    = []
zip2 _f _as    []     = []
zip2 f  (a:as) (b:bs) = f a b : zip2 f as bs

fibs :: [Integer]
fibs = 0 : 1 : zip2 (+) fibs(tail(fibs))
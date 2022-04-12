sumt :: [Int] -> Int
sumt [] = 0
sumt (x:xs) = x + sumt xs
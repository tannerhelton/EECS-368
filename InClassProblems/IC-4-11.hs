sumdown :: Int -> Int
sumdown x = if x == 1 then 1 else if x == 0 then 0 else x + sumdown(x-1)
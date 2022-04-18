-- Replicate declaration
replicate' :: Int -> a -> [a]
-- Replicate takes an integer and another argument of any type, and it creates a list of integer length with each element being the second argument
replicate' n a = [a | _ <- [0..(n - 1)]]

-- Factors declaration
factors :: Int -> [Int]
-- Factors takes an integer n and returns a list of all of its factors, including 1 and itself
factors n = [x | x <- [1..n], n `mod` x == 0]

-- Perfects declaration
perfects :: Int -> [Int]
-- Perfects takes an integer and it returns all of the perfect numbers up to that integer
perfects n | n >= 3 = [a | a <- [3..n], f a]
            -- This is a catch to ensure the integer is greater than 2
           | otherwise = error "integer must be greater than or equal to 3"
    -- Ensure that a and g a are equal before continuing
    where f a = a == g a
        -- Here wer are taking sum of init of factors and setting them to g
          g = sum . init . factors

-- Find declaration
find :: Eq a => a -> [(a,b)] -> [b]
-- Find takes two inputs, an element and a list and returns the first instance of the element in the list
find k t = [v | (k',v) <- t, k' == k]

-- Positions declaration
positions :: Eq a => a -> [a] -> [Int] 
-- Positions takes an element and a list, it returns a list of the locations that said element in the list
positions a as = find a (zip as [0..n])
    -- Set n to one less than the length of the list
    where n = length as - 1

-- Scalarprodcut declaration
scalarproduct :: [Int] -> [Int] -> Int
-- Scalarprodcut takes two lists of integers and it returns the scalar product (adding the products of each element)
scalarproduct as bs = sum [a * b | (a,b) <- zip as bs]
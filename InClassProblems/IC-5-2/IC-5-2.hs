prop_Index_v4 :: (NonEmptyList Integer) -> Property
prop_Index_v4 (NonEmpty xs) = forAll (choose (0, length xs-1)) $ \n -> xs !! n == head (drop n xs)


xs !! 0 == head (drop 0 xs):
    head(drop 0 xs)
        [1,2,3]
        = 1
    xs !! 0
        [1,2,3]
        = 1

xs !! 1 == head (drop 1 xs):
    head(drop 1 xs)
        [2,3]
        = 2
    xs !! 1
        [1,2,3]
        = 2

xs !! 2 == head (drop 2 xs):
    head(drop 2 xs)
        [3]
        = 3
    xs !! 2
        [1,2,3]
        = 3
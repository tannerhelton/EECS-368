module Main where

import Lib
import Test.QuickCheck

main :: IO ()


prop_Index_v4 :: (NonEmptyList Integer) -> Property
prop_Index_v4 (NonEmpty xs) = forAll (choose (0, length xs-1)) $ \n -> xs !! n == head (drop n xs)

main = prop_Index_v4 ([1,2,3])
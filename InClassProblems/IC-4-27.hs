type Grid             = Matrix Value
type Matrix a         = [Row a]
type Row a            = [a]
type Value            = Char

boxsize               :: Int
boxsize               =  2
values                :: [Value]
values                =  ['1'..'9']
empty                 :: Value -> Bool
empty                 =  (== '.')
single                :: [a] -> Bool
single [_]            =  True
single _              =  False

rows                  :: Matrix a -> [Row a]
rows                  =  id
cols                  :: Matrix a -> [Row a]
cols                  m = transpose m
chop                  :: Int -> [a] -> [[a]]
chop n []             =  []
chop n xs             =  take n xs : chop n (drop n xs)
boxs                  :: Matrix a -> [Row a]
boxs                  =  unpack . map cols . pack
    where
        pack   = split . map split 
        split  = chop boxsize
        unpack = map concat . concat

type Choices          =  [Value]
choices               :: Grid -> Matrix Choices
choices               =  map (map choice) where choice v = if empty v then values else [v]

prune :: Matrix Choices -> Matrix Choices
prune = pruneBy boxes . pruneBy cols . pruneBy rows
         where pruneBy f = f . map reduce . f
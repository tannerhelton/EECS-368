boxsize :: Int
boxsize =  2
type Grid     = Matrix Char
type Matrix a = [Row a]
type Row a    = [a]
rows  :: Matrix a -> [Row a]
rows m = m

cols  :: Matrix a -> [Row a]
cols m = transpose m


boxs :: Matrix a -> [Row a]
boxs =  unpack . map cols . pack where pack   = split . map split
split  = chop boxsize
unpack = map concat . concat
chop :: Int -> [a] -> [[a]]
chop n [] =  []
chop n xs =  take n xs : chop n (drop n xs)
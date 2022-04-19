putStr' :: String -> IO ()
putStr' xs = sequence_ [putChar x | x <- xs]

act :: IO (Char, Char)
act = do
    x <- getChar
    getChar -- Discarded
    y <- getChar
    return (x,y)
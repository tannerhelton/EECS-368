safetail :: [a] -> [a]
safetail (_:xs) =  xs
safetail xs = xs
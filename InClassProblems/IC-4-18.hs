data Tree a = Leaf a | Node (Tree a) (Tree a)
leaves :: Tree a -> Int
leaves Empty = 0
leaves (Node lhs _ rhs) = if lhs == Empty && rhs == Empty then 1 else leaves(lhs) leaves(rhs)

balanced :: Tree a -> Bool
balanced Empty = true
balanced (Node lhs _ rhs) = if leaves(lhs) == leaves(rhs) then true else false
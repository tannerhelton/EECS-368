--Import char for use later in the code
import Data.Char

-- Method to switch between players
nextPlayer :: Int -> Int
nextPlayer 1 = 2 -- When it's player 1 switch to player 2
nextPlayer 2 = 1 -- When it's player 2 switch to player 1

-- Create Board type
type Board = [Int]

-- Create the initial board setup
initial :: Board
initial = [5,4,3,2,1] -- Populate it with 5,4,3,2,1 starts

-- Finished method, used to determine when the game is over
finished :: Board -> Bool
finished = all (== 0)

-- Check to see if the input is valid
valid :: Board -> Int -> Int -> Bool
valid board row num = board !! (row-1) >= num -- Takes in board, row, and num and ensures that you don't enter invalid values while playing the game

-- Move takes in the board, row, and num and executes the move that the player wants
move :: Board -> Int -> Int -> Board
move board row num = [update r n | (r,n) <- zip [1..] board]
   where update r n = if r == row then n-num else n

-- Put row takes in two integers (row and num) and prints out the respective row in the game board
putRow :: Int -> Int -> IO ()
putRow row num = do putStr (show row)
                    putStr ": "
                    putStrLn (concat (replicate num "* "))
 
-- Put board takes in a board (list of rows) and prints out entire board using putRow
putBoard :: Board -> IO ()
putBoard [a,b,c,d,e] = do putRow 1 a
                          putRow 2 b
                          putRow 3 c
                          putRow 4 d
                          putRow 5 e

-- Get digit takes in a prompt and returns the user inputed integer
getDigit :: String -> IO Int
getDigit prompt = do putStr prompt
                     x <- getChar
                     newline
                     if isDigit x then
                        return (digitToInt x)
                     else
                        do putStrLn "ERROR: Invalid digit" -- if the user inputs an invalid digit, it throws and error and reasks for a digit
                           getDigit prompt

-- Simple method to add a newline to the output
newline :: IO ()
newline = putChar '\n'

-- Play is the executive function for the program and it runs everything else
play :: Board -> Int -> IO ()
play board player =
   do newline -- Start with a newline
      putBoard board -- Print the board
      if finished board then -- check if the game is finished, and if it is, add a new line and say which player won
         do newline
            putStr "Player "
            putStr (show (nextPlayer player))
            putStrLn " wins!!"
      else  -- If the game isn't finished
         do newline
            putStr "Player "
            putStrLn (show player)
            row <- getDigit "Enter a row number: " -- Get rownumber from player
            num <- getDigit "Stars to remove : " -- Get number of starts to remove from player
            if valid board row num then -- Check if the use inputs valid integers
               play (move board row num) (nextPlayer player) -- Play the move if valid
            else -- if not valid print a newline and indicate that it is invalid
               do newline
                  putStrLn "ERROR: Invalid move"
                  play board player

-- The actual nim function to execute when running the game
nim :: IO ()
nim = play initial 1

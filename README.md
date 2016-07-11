Description:
This is a simple 4 X 4 boggle solver. You can enter your own game and find all the words.

The words list is taken from https://github.com/jacksonrayhamilton/wordlist-english

The current algorithm first reduces the word list to words that can be made with the letters shown, regardless of their positions on the board. Then with this reduced list, it goes through each word and checks if it can be reached according to Boggle's rules. This method is not fully optimized. It could be sped up further by removing checks for words that include a smaller word that couldn't be found already. An example of this is with the words 'red' and 'redirect'. If the word 'red' isn't there, then 'redirect' couldn't be there either. This could be fixed by converting the word list to a trie and allowing for entire sets of words to be removed from the check by knocking off one branch of the trie. The rest of the path check code could be used. All that would be needed is the initial trie conversion code and the branch removal check during the acceptance test for a smaller prefix word.

NOTE:
- There is no error checking currently for missing letters or non-letters in the letter spaces.
- The case where the words are loaded slowly isn't handled well. Ideally the code for generating the available boggle words should be moved to a backend RESTful API so only the available words were sent in the response. This would significantly decrease the size of the response and allow for faster loads of the first word list. However on each subsequent check, the additional number of requests would decrease the benefit.

FEATURES TO ADD: 
- Click on a word to show how to find it on the board.
- Enter a board as a string of sixteen letters.
- Different board sizes.
- Automatic letter highlighting on click (to allow for easy updating).
- Total word score.
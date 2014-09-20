{-# LANGUAGE OverloadedStrings #-}
import Web.Scotty
import Data.Monoid (mconcat)
import Network.HTTP.Types -- allows custom headers and shit mane
main = scotty 3000 $ do
--  get "/" $ do
--    html "Hello World!"
--		get "/:word" $ do
--			beam <- param "word"
--			html $ mconcat ["<h1>Scotty, ", beam, " me up!</h1>"]
		get "/foo" $ do
			json $ object ["test" .= ("ok" :: String)]
		notFound $ do -- when nothing found, will match to * not found, so be careful on placement
			text "there is no such route."

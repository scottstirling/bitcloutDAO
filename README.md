# BitClout, Twetch and Decentralized Social Network Money Frauds/Scams
Twetch is another ersatz Twitter cryptocurrency scam platform so similar in look and concept to Bitclout that they are indubitably related in some way.

The commonality to these frauds is they both are centralized systems designed for extracting money from users for premium fees to execute useless blockchain transactions (for essentially rudimentary versions of the same features users can better accomplish today with Twitter and Google content storage and indexing, for example, without blockchains or Bitcoin wallets or fees being necessary).

They are fraudulently promoted as decentralized, when in fact they are highly centralized schees using decentralized public blockhains and open source to perpetrate fraud.

Twetch is based on buying and spending Bitcoin SV and micro-fees for transactions, which themselves have fees and require use of software wallets and keys running in your web browser.

BitClout is based on charging Bitcoin fees and additional costs for any and all transactions involving BitClout (which, as on Twetch with BSV coin, is required to be spent and fees paid to spend it for every action in the app) or their Creator Coin token, and also manages keys and wallets in your web browser.

Both sites are released under the auspicious promise of being alpha or beta quality and the hottest new thing being developed too fast and furiously to be stable, secure or usable.  Bluntly, that is bullshit; these are fraudulent scams from tip to toe that completely lack professionalism and security features, protecting the perpetrators and their data, *not you and yours*.

# ![$BitClout](src/assets/img/camelcase_logo.svg)
This project gathers BitClout's code and offers analysis of its APIs, 3rd party integrations and architecture.

BitClout is a pay-to-play social network and game. It is a scam if considered, sold or promoted as a financial investment.  BitClout should be thought more of as a a game or a vending machine that accepts Bitcoin irreversibly in exchange for a game currency called BitClout and a token called Creator Coin.  One can buy a token with BitClout.  One can buy either with Bitcoin.  But it is impossible to refund or withdraw Bitcoin back from the system, nor is there any declaration of intention to ever make it otherwise in the one-pager pdf or the terms of service (linked on the second screen of the Signup flow, avaialable at https://bitclout.com/terms-of-service, in the source code (in main.js) and documented [here](docs/bitclout-terms-of-service-extract.md)).  BitClout is a game and it costs Bitcoin (and a valid phone number) to play.

Completing your profile, at minimum, requires a phone number that can receive text messages for confirmation. Allegedly one can pay ~$60 in Bitcoin as an alternative, but I have not tested that.

All image content posted by users is stored in and accessible via public cloud storage on imgur.com.

Registered users can like and follow each other, post their own and promote other accounts' content, and spend Bitcoin on BitClout, then send BitClout to other wallets on the BitClout network, all of which costs, at minimum, a verified phone number and the price of Bitcoin transaction fees at premium market rates plus a percentage increase (BitClout adds 1.5 * priority fee price currently, 4/23/2021) (once Bitcoin has been used to purchase BitClout).  

Update 4/9/2021: Reclouting /retweeting functionality appeared overnight after some new code was deployed.

The following functions cost *Bitcoin* to get started. The prices are set by the current cost of *Bitcoin* transaction fees:
- posting content
- following an account
- creating and saving or changing a profile image
- creating and saving or updating profile content

All actions are really based on blockcypher.com and other vendors services, technology and APIs, which makes setting up the technology for BitClout primarily an orchestration of services and APIs tied together through a web UI.  All of the strongest technical aspects of BitClout are based on Cloudflare, Angular, blockcypher.com, imgur.com, various 3rd party libraries (see below) and GoDaddy's https://domainsbyproxy.com (who have a subpoena policy posted on their public site) obscuring the owners and creators behind BitClout.

Admittedly, the mastery orchestrating the components of the BitClout "solution" and carrying it off so far is respectable.  

The BitClout one pager / whitepaper (7 pages) is a masterwork of rhetoric: enthymemes and triggers to encourage readers to jump to conclusions, confirm biases and desired outcomes and act on positive emotional response rather than careful analysis.

Partial list of other projects and services referenced and used in BitClout's Angular code:

GitHub projects:
- https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki - Bitcoin BIP "describes the implementation of a mnemonic code or mnemonic sentence -- a group of easy to remember words -- for the generation of deterministic wallets."
- https://github.com/bitcoinjs/bitcoinjs-lib - "A javascript Bitcoin library for node.js and browsers."
- https://github.com/browserify/browserify - "build a bundle you can serve up to the browser in a single <script> tag."
- https://github.com/crypto-browserify/createHmac - "Node style HMACs for use in the browser" (hash-based message authentication codes = HMAC)
- https://github.com/crypto-browserify/browserify-rsa - "RSA private decryption/signing"
- https://github.com/crypto-browserify/crypto-browserify - "A port of node's crypto module to the browser."
- https://github.com/crypto-browserify/parse-asn1 - "utility library for parsing asn1 files for use with browserify-sign."
- https://github.com/crypto-browserify/randombytes - randombytes from Node js for browser apps.
- https://github.com/google/closure-library - "used by many Google web applications, such as Google Search, Gmail, Google Docs, Google+, Google Maps, and others."
- https://github.com/google/libphonenumber - "Google's common Java, C++ and JavaScript library for parsing, formatting, and validating international phone numbers." 
- https://github.com/indutny/bn.js/ - "BigNum in pure javascript"
- https://github.com/indutny/elliptic - "Fast elliptic-curve cryptography in a plain javascript"
- https://github.com/popperjs/popper-core - "Popper will automatically put the tooltip in the right place near the button." (tooltip management)
- https://github.com/sweetalert2/sweetalert2 - "replacement for JavaScript's popup boxes"
- https://github.com/twitter/twemoji - "Twemoji library offers support for 3,304 emojis"

Other products, projects and services used in code and refrenced in code:
- https://amp.bitclout.com - endpoint for gathering analytics about user activity and transactions to send to an Amplitude (https://www.amplitude.com/) account.
- https://api.blockcypher.com/v1/btc/main/addrs/${e}/full?token=... - see blockcypher public api docs
- https://api.blockcypher.com/v1/btc/test3/addrs/${e}/full?token... - test endpoint for ^
- https://bitcoinfees.earn.com/api/v1/fees/recommended - gets the current price for transaction fees transacted on BitClout.
- https://blockchain.info/ticker - api used to obtain exchange rate of Bitcoin in USD every 1 second in the background.
- https://electrum.org - Bitcoin wallet software mentioned and link in UI
- https://iancoleman.io/bip39/ - menomic code converter for Bitcoin BIP 39 ^
- https://twitter.com/intent/tweet?text= ... - for users to click for "Just setting up my bitclout ..." Tweet
- https://wallet.mycelium.com/ - Bitcoin wallet software mentioned and link in UI
- https://api.imgur.com/3/image/ + 8156989fa971a3b Client-ID (header?) to upload to imgur
- https://i.imgur.com/<name.ext> - images and pics posted by users
- https://fontawesome.com/ - fonts and logos
- https://fonts.gstatic.com/, https://fonts.googleapis.com - fonts

Possible source for BitClout's https://explorer.bitclout.com:
- https://github.com/blockcypher/explorer - BlockCypher's open source blockchain explorer project


TODO - other related sites referenced in code:
- https://api.bitclout.green, https://api.bitclout.blue, https://api.bitclout.navy - different API endpoints.
- megamoons.com - unknown TBD
- https://api.bitpop.dev - protected by CloudFlare, seems to be used for logging activity from the UI (?)
- bitpop.cash - unknown use/purpose TBD
- bitclout.fun - unknow use/purpose TBD

Listing of BitClout's APIs as dervived from main.js: see https://github.com/scottstirling/bitclout/issues/20

BitClout Architecture Overview Diagram

![Bitclout Architecture](docs/diagram/bitclout-arch-diagram-2021-04-08.png)

Related work (began as a Reddit thread in r/Bitclout):
https://www.reddit.com/r/BitClout/comments/mhpwjx/reverse_engineering_bitclout/

Increasing awareness of these scams, selected resources:
## BitClout
- https://www.thedailybeast.com/bitclout-is-the-shady-crypto-start-up-selling-shares-in-celebs
- https://www.techtimes.com/articles/258837/20210407/bitclout-removes-singapore-prime-minister-crypto-platform.htm
- https://finance.yahoo.com/news/controversial-crypto-project-bitclout-faces-233043748.html
- https://youtu.be/NBZ4v2-XynU, https://youtu.be/SsERRF39YiM - Coffeezilla Youtube channel episodes on BitClout
- https://en.wikipedia.org/wiki/BitClout

## Twetch 
- https://medium.com/@Austerity_Sucks/i-signed-up-for-bsvs-twetch-social-media-platform-so-you-don-t-have-to-462f0db8b614

## Realted likely scams / extensions of BitClout
- https://withdrawbitclout.com/ 
- https://www.giftclout.com/
- https://bitswap.network
    - https://bitswap.network/whitepaper (proposes exchanging BitClout for Ethereum via escrow, plus gas fees) 

Other analysis and related info on my Twitter: https://twitter.com/scottmstirling

# ![$BitClout](src/assets/img/camelcase_logo.svg)
This project gathers BitClout's code and offers analysis of its APIs, 3rd party integrations and architecture.

BitClout is a pay-to-play social network and game. It is a scam if considered, sold or promoted as a financial investment.  BitClout should be thought more of as a a game or a vending machine that accepts Bitcoin irreversibly in exchange for a game currency called BitClout and a token called Creator Coin.  One can buy a token with BitClout.  One can buy either with Bitcoin.  But it is impossible to refund or withdraw Bitcoin back from the system, nor is there any declaration of intention to ever make it otherwise in the one-pager pdf or the terms of service (avaialable at https://bitclout.com/terms-of-service, in the source code (in main.js) and documented [here](docs/bitclout-terms-of-service-extract.md)).  BitClout is a game and it costs Bitcoin (and a valid phone number) to play.

Completing your profile, at minimum, requires a phone number that can receive text messages for confirmation.

All content posted by users is stored in and accessible via public cloud storage on imgur.com.

Registered users can like and follow each other, post their own and promote other accounts' content, and spend Bitcoin on BitClout, then send BitClout to other wallets on the BitClout network, all of which costs, at minimum, a verified phone number and the price of Bitcoin transaction fees at current market rate (once Bitcoin has been used to purchase BitClout).  

Update 4/9/2021: Reclouting /retweeting functionality appeared overnight after some new code was deployed.

The following functions cost *Bitcoin* to get started. The prices are set by the current cost of *Bitcoin* transaction fees:
- posting content
- following an account
- creating and saving or changing a profile image
- creating and saving or updating profile content

All actions are really based on blockcypher.com and other vendors services, technology and APIs, which makes setting up the technology for BitClout a very low bar.  All of the strongest technical aspects of BitClout are based on Cloudflare, Angular, blockcypher.com, imgur.com, Node js, Nginx, Google Fonts, Bootstrap CSS and GoDaddy's domainsbyproxy.com (who have a subpoena policy posted on their public site) obscuring the owners and creators behind BitClout.

Partial list of other projects referenced and used in BitClout's Angular code:
- https://github.com/twitter/twemoji - "Twemoji library offers support for 3,304 emojis"
- https://github.com/sweetalert2/sweetalert2 - "replacement for JavaScript's popup boxes"
- https://github.com/indutny/elliptic - "Fast elliptic-curve cryptography in a plain javascript"
- https://github.com/crypto-browserify/crypto-browserify - "A port of node's crypto module to the browser."
- https://github.com/google/closure-library - "JavaScript library designed for building complex and scalable web applications. It is used by many Google web applications, such as Google Search, Gmail, Google Docs, Google+, Google Maps, and others."

By the same token, the mastery orchestrating the components of the BitClout "solution" and carrying it off so far is respectable.

Other services used by the BitClout UI:
- https://bitcoinfees.earn.com/api/v1/fees/recommended - gets the current price for transaction fees transacted on BitClout.
- https://api.blockcypher.com/v1/btc/main/addrs/${e}/full?token=... - see blockcypher public api docs
- https://api.blockcypher.com/v1/btc/test3/addrs/${e}/full?token... - test endpoint for ^
- https://i.imgur.com/<name.ext> - images and pics posted by users
- https://api.imgur.com/3/image/ + 8156989fa971a3b Client-ID (header?) to upload to imgur
- https://blockchain.info/ticker - api used to obtain exchange rate of Bitcoin in USD every 1 second in the background.
- https://twitter.com/intent/tweet?text= ... - for users to click for "Just setting up my bitclout ..." Tweet
- https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki - Bitcoin BIP "describes the implementation of a mnemonic code or mnemonic sentence -- a group of easy to remember words -- for the generation of deterministic wallets."
- https://wallet.mycelium.com/ - Bitcoin wallet software
- https://electrum.org - Bitcoin wallet software
- https://iancoleman.io/bip39/ - menomic code converter for Bitcoin BIP 39 ^


Related work (began as a Reddit thread in r/Bitclout):
https://www.reddit.com/r/BitClout/comments/mhpwjx/reverse_engineering_bitclout/

BitClout Architecture Diagram (WIP)

![Bitclout Architecture](docs/diagram/bitclout-arch-diagram-2021-04-08.png)


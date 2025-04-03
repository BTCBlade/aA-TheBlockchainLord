"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Assets", [
      {
        cmcId: 1,
        name: "Bitcoin",
        symbol: "BTC",
        tags: [
          "mineable",
          "pow",
          "sha-256",
          "store-of-value",
          "state-channels",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":30767.063175967978,\\"volume_24h\\":58548933425.68656,\\"percent_change_1h\\":0.84818206,\\"percent_change_24h\\":-4.78060783,\\"percent_change_7d\\":-12.58909059,\\"percent_change_30d\\":13.76310224,\\"market_cap\\":572638887360.8542,\\"last_updated\\":\\"2021-01-27T20:03:02.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1,\\"name\\":\\"Bitcoin\\",\\"symbol\\":\\"BTC\\",\\"category\\":\\"coin\\",\\"description\\":\\"Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,612,225. The last known price of Bitcoin is 30,634.74014009 USD and is down -4.45 over the last 24 hours. It is currently trading on 9324 active market(s) with $61,110,170,950.60 traded over the last 24 hours. More information can be found at https://bitcoin.org/.\\",\\"slug\\":\\"bitcoin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png\\",\\"subreddit\\":\\"bitcoin\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"sha-256\\",\\"store-of-value\\",\\"state-channels\\",\\"coinbase-ventures-portfolio\\",\\"three-arrows-capital-portfolio\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"SHA-256\\",\\"Store of Value\\",\\"State channels\\",\\"Coinbase Ventures Portfolio\\",\\"Three Arrows Capital Portfolio\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://bitcoin.org/\\"],\\"twitter\\":[],\\"message_board\\":[\\"https://bitcointalk.org\\"],\\"chat\\":[],\\"explorer\\":[\\"https://blockchain.coinmarketcap.com/chain/bitcoin\\",\\"https://blockchain.info/\\",\\"https://live.blockcypher.com/btc/\\",\\"https://blockchair.com/bitcoin\\",\\"https://explorer.viabtc.com/btc\\"],\\"reddit\\":[\\"https://reddit.com/r/bitcoin\\"],\\"technical_doc\\":[\\"https://bitcoin.org/bitcoin.pdf\\"],\\"source_code\\":[\\"https://github.com/bitcoin/\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2013-04-28T00:00:00.000Z\\",\\"twitter_username\\":\\"\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1027,
        name: "Ethereum",
        symbol: "ETH",
        tags: [
          "mineable",
          "pow",
          "smart-contracts",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":1269.2821865701787,\\"volume_24h\\":38100865549.33415,\\"percent_change_1h\\":0.93011906,\\"percent_change_24h\\":-5.20533805,\\"percent_change_7d\\":-3.83698003,\\"percent_change_30d\\":72.06434292,\\"market_cap\\":145240312294.3014,\\"last_updated\\":\\"2021-01-27T20:03:02.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"category\\":\\"coin\\",\\"description\\":\\"Ethereum (ETH) is a cryptocurrency . Users are able to generate ETH through the process of mining. Ethereum has a current supply of 114,429,344.8115. The last known price of Ethereum is 1,254.65923307 USD and is down -6.26 over the last 24 hours. It is currently trading on 5679 active market(s) with $38,838,947,286.78 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.\\",\\"slug\\":\\"ethereum\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png\\",\\"subreddit\\":\\"ethereum\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"smart-contracts\\",\\"coinbase-ventures-portfolio\\",\\"three-arrows-capital-portfolio\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"Smart Contracts\\",\\"Coinbase Ventures Portfolio\\",\\"Three Arrows Capital Portfolio\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.ethereum.org/\\"],\\"twitter\\":[\\"https://twitter.com/ethereum\\"],\\"message_board\\":[\\"https://forum.ethereum.org/\\"],\\"chat\\":[\\"https://gitter.im/orgs/ethereum/rooms\\"],\\"explorer\\":[\\"https://etherscan.io/\\",\\"https://ethplorer.io/\\",\\"https://blockchair.com/ethereum\\",\\"https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8\\",\\"https://eth.tokenview.com/en/blocklist\\"],\\"reddit\\":[\\"https://reddit.com/r/ethereum\\"],\\"technical_doc\\":[\\"https://github.com/ethereum/wiki/wiki/White-Paper\\"],\\"source_code\\":[\\"https://github.com/ethereum\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=428589.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2015-08-07T00:00:00.000Z\\",\\"twitter_username\\":\\"ethereum\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 825,
        name: "Tether",
        symbol: "USDT",
        tags: [
          "store-of-value",
          "payments",
          "stablecoin",
          "stablecoin-asset-backed",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":1.00157464163506,\\"volume_24h\\":100402167545.16182,\\"percent_change_1h\\":0.05431465,\\"percent_change_24h\\":0.021877,\\"percent_change_7d\\":0.13689465,\\"percent_change_30d\\":0.27144426,\\"market_cap\\":25236562364.524704,\\"last_updated\\":\\"2021-01-27T20:03:07.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":825,\\"name\\":\\"Tether\\",\\"symbol\\":\\"USDT\\",\\"category\\":\\"token\\",\\"description\\":\\"Tether (USDT) is a cryptocurrency launched in 2015and operates on the Ethereum platform. Tether has a current supply of 25,910,299,178.627888 with 25,196,886,298.285553 in circulation. The last known price of Tether is 1.00212862 USD and is up 0.12 over the last 24 hours. It is currently trading on 9989 active market(s) with $103,919,780,086.98 traded over the last 24 hours. More information can be found at https://tether.to.\\",\\"slug\\":\\"tether\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/825.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"store-of-value\\",\\"payments\\",\\"stablecoin\\",\\"stablecoin-asset-backed\\"],\\"tag-names\\":[\\"Store of Value\\",\\"Payments\\",\\"Stablecoin\\",\\"Stablecoin - Asset-Backed\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://tether.to\\"],\\"twitter\\":[\\"https://twitter.com/tether_to\\"],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://www.omniexplorer.info/asset/31\\",\\"https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7\\",\\"https://algoexplorer.io/asset/312769\\",\\"https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t\\",\\"https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955\\"],\\"reddit\\":[],\\"technical_doc\\":[\\"https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf\\"],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0xdac17f958d2ee523a2206206994597c13d831ec7\\"},\\"date_added\\":\\"2015-02-25T00:00:00.000Z\\",\\"twitter_username\\":\\"tether_to\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 6636,
        name: "Polkadot",
        symbol: "DOT",
        tags: [
          "substrate",
          "polkadot",
          "binance-chain",
          "dot-ecosystem",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":15.44300941105803,\\"volume_24h\\":3008728201.502825,\\"percent_change_1h\\":0.19939654,\\"percent_change_24h\\":-9.04342665,\\"percent_change_7d\\":-6.95905711,\\"percent_change_30d\\":152.1038873,\\"market_cap\\":13974895560.992981,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":6636,\\"name\\":\\"Polkadot\\",\\"symbol\\":\\"DOT\\",\\"category\\":\\"coin\\",\\"description\\":\\"Polkadot (DOT) is a cryptocurrency . Polkadot has a current supply of 1,038,847,485.4081978 with 904,961,063.9889609 in circulation. The last known price of Polkadot is 15.53634279 USD and is down -7.40 over the last 24 hours. It is currently trading on 118 active market(s) with $3,123,223,597.91 traded over the last 24 hours. More information can be found at https://polkadot.network/.\\",\\"slug\\":\\"polkadot-new\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png\\",\\"subreddit\\":\\"dot\\",\\"notice\\":\\"\\",\\"tags\\":[\\"substrate\\",\\"polkadot\\",\\"binance-chain\\",\\"dot-ecosystem\\",\\"three-arrows-capital-portfolio\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Substrate\\",\\"Polkadot\\",\\"Binance Chain\\",\\"DOT Ecosystem\\",\\"Three Arrows Capital Portfolio\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PLATFORM\\",\\"PLATFORM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://polkadot.network/\\"],\\"twitter\\":[\\"https://twitter.com/Polkadot\\"],\\"message_board\\":[\\"https://medium.com/polkadot-network\\"],\\"chat\\":[\\"https://t.me/PolkadotOfficial\\"],\\"explorer\\":[\\"http://polkascan.io/\\",\\"https://polkadot-cc1.subscan.io/\\",\\"https://polkastats.io\\",\\"https://hubble.figment.io/polkadot/chains/polkadot\\",\\"https://bscscan.com/token/0x7083609fce4d1d8dc0c979aab8c869ea2c873402\\"],\\"reddit\\":[\\"https://reddit.com/r/dot\\"],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/w3f\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2020-08-19T00:00:00.000Z\\",\\"twitter_username\\":\\"Polkadot\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 52,
        name: "XRP",
        symbol: "XRP",
        tags: ["medium-of-exchange", "enterprise-solutions", "binance-chain"],
        quote:
          '"{\\"USD\\":{\\"price\\":0.2530103243201,\\"volume_24h\\":2840769530.5531983,\\"percent_change_1h\\":0.5387904,\\"percent_change_24h\\":-5.4850932,\\"percent_change_7d\\":-13.15944612,\\"percent_change_30d\\":-11.01917823,\\"market_cap\\":11487688011.64551,\\"last_updated\\":\\"2021-01-27T20:04:02.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":52,\\"name\\":\\"XRP\\",\\"symbol\\":\\"XRP\\",\\"category\\":\\"coin\\",\\"description\\":\\"XRP (XRP) is a cryptocurrency . XRP has a current supply of 99,990,831,162 with 45,404,028,640 in circulation. The last known price of XRP is 0.25382243 USD and is down -5.00 over the last 24 hours. It is currently trading on 651 active market(s) with $2,928,055,887.90 traded over the last 24 hours. More information can be found at https://ripple.com/xrp/.\\",\\"slug\\":\\"xrp\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/52.png\\",\\"subreddit\\":\\"ripple\\",\\"notice\\":\\"\\",\\"tags\\":[\\"medium-of-exchange\\",\\"enterprise-solutions\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Medium of Exchange\\",\\"Enterprise solutions\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"https://ripple.com/xrp/\\"],\\"twitter\\":[\\"https://twitter.com/Ripple\\"],\\"message_board\\":[\\"http://www.xrpchat.com/\\"],\\"chat\\":[\\"https://t.me/Ripple\\"],\\"explorer\\":[\\"https://xrpcharts.ripple.com/#/graph/\\",\\"https://bithomp.com/explorer/\\",\\"https://xrpscan.com/\\",\\"https://blockchair.com/ripple\\",\\"https://bscscan.com/token/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe\\"],\\"reddit\\":[\\"https://reddit.com/r/ripple\\"],\\"technical_doc\\":[\\"https://ripple.com/files/ripple_consensus_whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/ripple\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2013-08-04T00:00:00.000Z\\",\\"twitter_username\\":\\"Ripple\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2010,
        name: "Cardano",
        symbol: "ADA",
        tags: [
          "mineable",
          "dpos",
          "pos",
          "platform",
          "research",
          "smart-contracts",
          "staking",
          "binance-chain",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":0.31570657561668,\\"volume_24h\\":2527271675.141128,\\"percent_change_1h\\":0.15145235,\\"percent_change_24h\\":-8.22412811,\\"percent_change_7d\\":-11.43577569,\\"percent_change_30d\\":85.40863574,\\"market_cap\\":9822415986.515194,\\"last_updated\\":\\"2021-01-27T20:03:13.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2010,\\"name\\":\\"Cardano\\",\\"symbol\\":\\"ADA\\",\\"category\\":\\"coin\\",\\"description\\":\\"Cardano (ADA) is a cryptocurrency . Users are able to generate ADA through the process of mining. Cardano has a current supply of 45,000,000,000 with 31,112,484,646 in circulation. The last known price of Cardano is 0.31665785 USD and is down -7.59 over the last 24 hours. It is currently trading on 217 active market(s) with $2,616,966,737.57 traded over the last 24 hours. More information can be found at https://www.cardano.org.\\",\\"slug\\":\\"cardano\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png\\",\\"subreddit\\":\\"cardano\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"dpos\\",\\"pos\\",\\"platform\\",\\"research\\",\\"smart-contracts\\",\\"staking\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Mineable\\",\\"DPoS\\",\\"PoS\\",\\"Platform\\",\\"Research\\",\\"Smart Contracts\\",\\"Staking\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"https://www.cardano.org\\"],\\"twitter\\":[\\"https://twitter.com/cardano\\"],\\"message_board\\":[\\"https://medium.com/feed/cardanorss\\",\\"https://forum.cardano.org/\\"],\\"chat\\":[\\"https://t.me/Cardano\\"],\\"explorer\\":[\\"https://cardanoexplorer.com/\\",\\"https://cardanoscan.io/\\",\\"https://blockchair.com/cardano\\",\\"https://bscscan.com/token/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47\\",\\"https://ada.tokenview.com/en\\"],\\"reddit\\":[\\"https://reddit.com/r/cardano\\"],\\"technical_doc\\":[\\"https://docs.cardano.org/en/latest/\\"],\\"source_code\\":[\\"https://cardanoupdates.com/\\"],\\"announcement\\":[\\"https://t.me/CardanoAnnouncements\\"]},\\"platform\\":null,\\"date_added\\":\\"2017-10-01T00:00:00.000Z\\",\\"twitter_username\\":\\"cardano\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1975,
        name: "Chainlink",
        symbol: "LINK",
        tags: [
          "platform",
          "defi",
          "oracles",
          "smart-contracts",
          "substrate",
          "polkadot",
          "dot-ecosystem",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":21.06883292912043,\\"volume_24h\\":3005218439.8017135,\\"percent_change_1h\\":1.03603054,\\"percent_change_24h\\":-8.54219324,\\"percent_change_7d\\":1.62748049,\\"percent_change_30d\\":67.28773349,\\"market_cap\\":8480406596.891681,\\"last_updated\\":\\"2021-01-27T20:03:10.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1975,\\"name\\":\\"Chainlink\\",\\"symbol\\":\\"LINK\\",\\"category\\":\\"token\\",\\"description\\":\\"Chainlink (LINK) is a cryptocurrency and operates on the Ethereum platform. Chainlink has a current supply of 1,000,000,000 with 402,509,556.4344444 in circulation. The last known price of Chainlink is 20.95606053 USD and is down -7.74 over the last 24 hours. It is currently trading on 435 active market(s) with $3,060,936,835.30 traded over the last 24 hours. More information can be found at https://chain.link/.\\",\\"slug\\":\\"chainlink\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png\\",\\"subreddit\\":\\"chainlink\\",\\"notice\\":\\"\\",\\"tags\\":[\\"platform\\",\\"defi\\",\\"oracles\\",\\"smart-contracts\\",\\"substrate\\",\\"polkadot\\",\\"dot-ecosystem\\"],\\"tag-names\\":[\\"Platform\\",\\"DeFi\\",\\"Oracles\\",\\"Smart Contracts\\",\\"Substrate\\",\\"Polkadot\\",\\"DOT Ecosystem\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://chain.link/\\",\\"https://smartcontract.com/\\"],\\"twitter\\":[\\"https://twitter.com/chainlink\\"],\\"message_board\\":[\\"https://medium.com/chainlink\\",\\"https://blog.chain.link/\\"],\\"chat\\":[],\\"explorer\\":[\\"https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca\\",\\"https://ethplorer.io/address/0x514910771af9ca656af840dff83e8264ecf986ca\\",\\"https://blockchair.com/ethereum/erc-20/token/0x514910771af9ca656af840dff83e8264ecf986ca\\",\\"https://eth.tokenview.com/en/token/0x514910771af9ca656af840dff83e8264ecf986ca\\",\\"https://bscscan.com/token/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd\\"],\\"reddit\\":[\\"https://reddit.com/r/chainlink\\"],\\"technical_doc\\":[\\"https://link.smartcontract.com/whitepaper\\"],\\"source_code\\":[\\"https://github.com/smartcontractkit/chainlink\\"],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x514910771af9ca656af840dff83e8264ecf986ca\\"},\\"date_added\\":\\"2017-09-20T00:00:00.000Z\\",\\"twitter_username\\":\\"chainlink\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2,
        name: "Litecoin",
        symbol: "LTC",
        tags: [
          "mineable",
          "pow",
          "scrypt",
          "medium-of-exchange",
          "binance-chain",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":123.02760268901416,\\"volume_24h\\":5982566320.171382,\\"percent_change_1h\\":0.34581907,\\"percent_change_24h\\":-8.55147687,\\"percent_change_7d\\":-16.37233555,\\"percent_change_30d\\":-7.42699797,\\"market_cap\\":8164531832.805718,\\"last_updated\\":\\"2021-01-27T20:04:02.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2,\\"name\\":\\"Litecoin\\",\\"symbol\\":\\"LTC\\",\\"category\\":\\"coin\\",\\"description\\":\\"Litecoin (LTC) is a cryptocurrency . Users are able to generate LTC through the process of mining. Litecoin has a current supply of 66,364,539.83011581. The last known price of Litecoin is 125.06446221 USD and is down -6.52 over the last 24 hours. It is currently trading on 728 active market(s) with $6,179,242,546.32 traded over the last 24 hours. More information can be found at https://litecoin.org/.\\",\\"slug\\":\\"litecoin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2.png\\",\\"subreddit\\":\\"litecoin\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"scrypt\\",\\"medium-of-exchange\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"Scrypt\\",\\"Medium of Exchange\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"https://litecoin.org/\\"],\\"twitter\\":[\\"https://twitter.com/LitecoinProject\\"],\\"message_board\\":[\\"https://litecointalk.io/\\",\\"https://litecoin-foundation.org/\\"],\\"chat\\":[\\"https://telegram.me/litecoin\\"],\\"explorer\\":[\\"https://blockchair.com/litecoin\\",\\"https://chainz.cryptoid.info/ltc/\\",\\"http://explorer.litecoin.net/chain/Litecoin\\",\\"https://ltc.tokenview.com/en\\",\\"https://bscscan.com/token/0x4338665cbb7b2485a8855a139b75d5e34ab0db94\\"],\\"reddit\\":[\\"https://reddit.com/r/litecoin\\"],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/litecoin-project/litecoin\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=47417.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2013-04-28T00:00:00.000Z\\",\\"twitter_username\\":\\"LitecoinProject\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1831,
        name: "Bitcoin Cash",
        symbol: "BCH",
        tags: [
          "mineable",
          "marketplace",
          "enterprise-solutions",
          "binance-chain",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":379.5928414573748,\\"volume_24h\\":6117744829.351216,\\"percent_change_1h\\":1.27566772,\\"percent_change_24h\\":-11.73276801,\\"percent_change_7d\\":-23.15640323,\\"percent_change_30d\\":3.42847301,\\"market_cap\\":7075152680.900458,\\"last_updated\\":\\"2021-01-27T20:03:07.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1831,\\"name\\":\\"Bitcoin Cash\\",\\"symbol\\":\\"BCH\\",\\"category\\":\\"coin\\",\\"description\\":\\"Bitcoin Cash (BCH) is a cryptocurrency . Users are able to generate BCH through the process of mining. Bitcoin Cash has a current supply of 18,638,862.5. The last known price of Bitcoin Cash is 381.07891506 USD and is down -10.13 over the last 24 hours. It is currently trading on 557 active market(s) with $6,403,876,909.93 traded over the last 24 hours. More information can be found at http://bch.info.\\",\\"slug\\":\\"bitcoin-cash\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png\\",\\"subreddit\\":\\"Bitcoincash\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"marketplace\\",\\"enterprise-solutions\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Mineable\\",\\"Marketplace\\",\\"Enterprise solutions\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"OTHER\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"http://bch.info\\"],\\"twitter\\":[],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://explorer.bitcoin.com/bch\\",\\"https://blockchair.com/bitcoin-cash\\",\\"https://bch.tokenview.com/en\\",\\"https://www.oklink.com/bch\\",\\"https://bscscan.com/token/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf\\"],\\"reddit\\":[\\"https://reddit.com/r/Bitcoincash\\"],\\"technical_doc\\":[],\\"source_code\\":[\\"https://gitlab.com/bitcoin-cash-node/\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=2040221.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2017-07-23T00:00:00.000Z\\",\\"twitter_username\\":\\"\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1839,
        name: "Binance Coin",
        symbol: "BNB",
        tags: ["marketplace", "payments"],
        quote:
          '"{\\"USD\\":{\\"price\\":40.70201678889338,\\"volume_24h\\":511632074.85143733,\\"percent_change_1h\\":0.01485168,\\"percent_change_24h\\":-1.35479075,\\"percent_change_7d\\":-3.27702031,\\"percent_change_30d\\":14.51174298,\\"market_cap\\":6289796009.504451,\\"last_updated\\":\\"2021-01-27T20:03:10.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1839,\\"name\\":\\"Binance Coin\\",\\"symbol\\":\\"BNB\\",\\"category\\":\\"coin\\",\\"description\\":\\"Binance Coin (BNB) is a cryptocurrency . Binance Coin has a current supply of 170,532,785 with 154,532,785 in circulation. The last known price of Binance Coin is 41.08752153 USD and is down -0.02 over the last 24 hours. It is currently trading on 454 active market(s) with $558,126,632.89 traded over the last 24 hours. More information can be found at https://www.binance.com/.\\",\\"slug\\":\\"binance-coin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png\\",\\"subreddit\\":\\"binance\\",\\"notice\\":\\"\\",\\"tags\\":[\\"marketplace\\",\\"payments\\"],\\"tag-names\\":[\\"Marketplace\\",\\"Payments\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.binance.com/\\"],\\"twitter\\":[\\"https://twitter.com/binance\\"],\\"message_board\\":[],\\"chat\\":[\\"https://t.me/binanceexchange\\"],\\"explorer\\":[\\"https://explorer.binance.org/\\",\\"https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52\\",\\"https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c\\",\\"https://blockchair.com/ethereum/erc-20/token/0xb8c77482e45f1f44de1745f52c74426c631bdd52\\"],\\"reddit\\":[\\"https://reddit.com/r/binance\\"],\\"technical_doc\\":[\\"https://whitepaper.io/document/10/binance-whitepaper\\"],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2017-07-25T00:00:00.000Z\\",\\"twitter_username\\":\\"binance\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 3408,
        name: "USD Coin",
        symbol: "USDC",
        tags: ["medium-of-exchange", "stablecoin", "stablecoin-asset-backed"],
        quote:
          '"{\\"USD\\":{\\"price\\":1.00003499558253,\\"volume_24h\\":1628562718.5356736,\\"percent_change_1h\\":-0.02265107,\\"percent_change_24h\\":-0.03242557,\\"percent_change_7d\\":0.00332123,\\"percent_change_30d\\":-0.01336119,\\"market_cap\\":5463185983.821497,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":3408,\\"name\\":\\"USD Coin\\",\\"symbol\\":\\"USDC\\",\\"category\\":\\"token\\",\\"description\\":\\"USD Coin (USDC) is a cryptocurrency and operates on the Ethereum platform. USD Coin has a current supply of 5,499,528,719.99955 with 5,465,258,722.577608 in circulation. The last known price of USD Coin is 1.00016634 USD and is up -0.00 over the last 24 hours. It is currently trading on 686 active market(s) with $1,290,448,345.76 traded over the last 24 hours. More information can be found at https://www.centre.io/usdc.\\",\\"slug\\":\\"usd-coin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"medium-of-exchange\\",\\"stablecoin\\",\\"stablecoin-asset-backed\\"],\\"tag-names\\":[\\"Medium of Exchange\\",\\"Stablecoin\\",\\"Stablecoin - Asset-Backed\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.centre.io/usdc\\"],\\"twitter\\":[],\\"message_board\\":[\\"https://medium.com/centre-blog\\"],\\"chat\\":[],\\"explorer\\":[\\"https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48\\",\\"https://ethplorer.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48\\",\\"https://eth.tokenview.com/en/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48\\",\\"https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d\\",\\"https://algoexplorer.io/asset/312769\\"],\\"reddit\\":[],\\"technical_doc\\":[\\"https://www.centre.io/pdfs/centre-whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/centrehq/centre-tokens\\"],\\"announcement\\":[\\"https://blog.circle.com/2018/09/26/introducing-usd-coin/\\"]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48\\"},\\"date_added\\":\\"2018-10-08T00:00:00.000Z\\",\\"twitter_username\\":\\"\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 512,
        name: "Stellar",
        symbol: "XLM",
        tags: [
          "medium-of-exchange",
          "enterprise-solutions",
          "decentralized-exchange",
          "smart-contracts",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":0.24029345339498,\\"volume_24h\\":676530845.2037599,\\"percent_change_1h\\":0.48690925,\\"percent_change_24h\\":-7.4870495,\\"percent_change_7d\\":-17.25655063,\\"percent_change_30d\\":60.4990828,\\"market_cap\\":5309428271.713677,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":512,\\"name\\":\\"Stellar\\",\\"symbol\\":\\"XLM\\",\\"category\\":\\"coin\\",\\"description\\":\\"Stellar (XLM) is a cryptocurrency . Stellar has a current supply of 50,001,803,555.87172 with 22,095,601,010.76227 in circulation. The last known price of Stellar is 0.23917261 USD and is down -7.92 over the last 24 hours. It is currently trading on 328 active market(s) with $660,110,693.09 traded over the last 24 hours. More information can be found at https://www.stellar.org.\\",\\"slug\\":\\"stellar\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/512.png\\",\\"subreddit\\":\\"stellar\\",\\"notice\\":\\"\\",\\"tags\\":[\\"medium-of-exchange\\",\\"enterprise-solutions\\",\\"decentralized-exchange\\",\\"smart-contracts\\"],\\"tag-names\\":[\\"Medium of Exchange\\",\\"Enterprise solutions\\",\\"Decentralized exchange\\",\\"Smart Contracts\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.stellar.org\\"],\\"twitter\\":[\\"https://twitter.com/StellarOrg\\"],\\"message_board\\":[\\"https://stellarcommunity.org/\\",\\"https://galactictalk.org/\\"],\\"chat\\":[\\"http://slack.stellar.org/\\"],\\"explorer\\":[\\"https://dashboard.stellar.org/\\",\\"https://stellar.expert/explorer/public/\\",\\"https://steexp.com/\\",\\"https://blockchair.com/stellar\\"],\\"reddit\\":[\\"https://reddit.com/r/stellar\\"],\\"technical_doc\\":[\\"https://www.stellar.org/papers/stellar-consensus-protocol.pdf\\"],\\"source_code\\":[\\"https://github.com/stellar\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=1428573.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2014-08-05T00:00:00.000Z\\",\\"twitter_username\\":\\"StellarOrg\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 7083,
        name: "Uniswap",
        symbol: "UNI",
        tags: [
          "defi",
          "dao",
          "amm",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":14.98354149954519,\\"volume_24h\\":5873139478.3561535,\\"percent_change_1h\\":2.95662482,\\"percent_change_24h\\":11.49233069,\\"percent_change_7d\\":77.97649125,\\"percent_change_30d\\":294.64785282,\\"market_cap\\":4294024407.031834,\\"last_updated\\":\\"2021-01-27T20:03:08.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":7083,\\"name\\":\\"Uniswap\\",\\"symbol\\":\\"UNI\\",\\"category\\":\\"token\\",\\"description\\":\\"Uniswap (UNI) is a cryptocurrency and operates on the Ethereum platform. Uniswap has a current supply of 1,000,000,000 with 286,591,994.0582322 in circulation. The last known price of Uniswap is 15.34572313 USD and is up 11.89 over the last 24 hours. It is currently trading on 190 active market(s) with $6,580,728,613.45 traded over the last 24 hours. More information can be found at https://uniswap.org/blog/uni/.\\",\\"slug\\":\\"uniswap\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"defi\\",\\"dao\\",\\"amm\\",\\"coinbase-ventures-portfolio\\",\\"three-arrows-capital-portfolio\\"],\\"tag-names\\":[\\"DeFi\\",\\"DAO\\",\\"AMM\\",\\"Coinbase Ventures Portfolio\\",\\"Three Arrows Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://uniswap.org/blog/uni/\\",\\"https://uniswap.org/\\"],\\"twitter\\":[\\"https://twitter.com/UniswapProtocol\\"],\\"message_board\\":[\\"https://uniswap.org/blog/\\"],\\"chat\\":[\\"https://discord.gg/5Wfqau\\"],\\"explorer\\":[\\"https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984\\",\\"https://ethplorer.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984\\",\\"https://bscscan.com/token/0xbf5140a22578168fd562dccf235e5d43a02ce9b1\\"],\\"reddit\\":[],\\"technical_doc\\":[],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984\\"},\\"date_added\\":\\"2020-09-17T00:00:00.000Z\\",\\"twitter_username\\":\\"UniswapProtocol\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 3717,
        name: "Wrapped Bitcoin",
        symbol: "WBTC",
        tags: [
          "medium-of-exchange",
          "defi",
          "stablecoin",
          "stablecoin-asset-backed",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":30743.26623851016,\\"volume_24h\\":241500711.21408027,\\"percent_change_1h\\":0.93184169,\\"percent_change_24h\\":-4.6328099,\\"percent_change_7d\\":-12.38651112,\\"percent_change_30d\\":13.89596437,\\"market_cap\\":3540729957.3348126,\\"last_updated\\":\\"2021-01-27T20:04:06.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":3717,\\"name\\":\\"Wrapped Bitcoin\\",\\"symbol\\":\\"WBTC\\",\\"category\\":\\"token\\",\\"description\\":\\"Wrapped Bitcoin (WBTC) is a cryptocurrency and operates on the Ethereum platform. Wrapped Bitcoin has a current supply of 115,170.91026911. The last known price of Wrapped Bitcoin is 30,640.76805979 USD and is down -4.17 over the last 24 hours. It is currently trading on 103 active market(s) with $214,639,500.22 traded over the last 24 hours. More information can be found at https://wbtc.network.\\",\\"slug\\":\\"wrapped-bitcoin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"medium-of-exchange\\",\\"defi\\",\\"stablecoin\\",\\"stablecoin-asset-backed\\"],\\"tag-names\\":[\\"Medium of Exchange\\",\\"DeFi\\",\\"Stablecoin\\",\\"Stablecoin - Asset-Backed\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://wbtc.network\\"],\\"twitter\\":[],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599\\",\\"https://ethplorer.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599\\",\\"https://enjinx.io/en-GB/eth/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599\\"],\\"reddit\\":[],\\"technical_doc\\":[\\"https://www.wbtc.network/assets/wrapped-tokens-whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/WrappedBTC/bitcoin-token-smart-contracts\\"],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599\\"},\\"date_added\\":\\"2019-01-30T00:00:00.000Z\\",\\"twitter_username\\":\\"\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 7278,
        name: "Aave",
        symbol: "AAVE",
        tags: [
          "defi",
          "dao",
          "yield-farming",
          "three-arrows-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":276.65642720588875,\\"volume_24h\\":1020125537.227515,\\"percent_change_1h\\":0.85908694,\\"percent_change_24h\\":-0.95339142,\\"percent_change_7d\\":50.25671402,\\"percent_change_30d\\":234.65744417,\\"market_cap\\":3399109513.622349,\\"last_updated\\":\\"2021-01-27T20:04:03.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":7278,\\"name\\":\\"Aave\\",\\"symbol\\":\\"AAVE\\",\\"category\\":\\"token\\",\\"description\\":\\"Aave (AAVE) is a cryptocurrency and operates on the Ethereum platform. Aave has a current supply of 16,000,000 with 12,297,163.7889917 in circulation. The last known price of Aave is 285.68588448 USD and is up 5.04 over the last 24 hours. It is currently trading on 145 active market(s) with $1,090,599,873.95 traded over the last 24 hours. More information can be found at https://aave.com/.\\",\\"slug\\":\\"aave\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png\\",\\"subreddit\\":\\"Aave_Official\\",\\"notice\\":\\"[LEND](https://coinmarketcap.com/currencies/aave-old/) has migrated to [AAVE](https://coinmarketcap.com/currencies/aave) at a rate of 100 LEND per 1 AAVE. For more information, please see [Aave\'s announcement]( https://medium.com/aave/migration-and-staking-101-fe8fda3e2a30)\\",\\"tags\\":[\\"defi\\",\\"dao\\",\\"yield-farming\\",\\"three-arrows-capital-portfolio\\"],\\"tag-names\\":[\\"DeFi\\",\\"DAO\\",\\"Yield farming\\",\\"Three Arrows Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://aave.com/\\",\\"https://ethlend.io\\"],\\"twitter\\":[\\"https://twitter.com/AaveAave\\"],\\"message_board\\":[\\"https://medium.com/aave\\"],\\"chat\\":[\\"https://aave.com/discord\\"],\\"explorer\\":[\\"https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9\\",\\"https://ethplorer.io/address/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9\\"],\\"reddit\\":[\\"https://reddit.com/r/Aave_Official\\"],\\"technical_doc\\":[\\"https://github.com/aave/aave-protocol/blob/master/docs/Aave_Protocol_Whitepaper_v1_0.pdf\\"],\\"source_code\\":[\\"https://github.com/aave\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=2090735.0\\"]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9\\"},\\"date_added\\":\\"2020-10-02T00:00:00.000Z\\",\\"twitter_username\\":\\"AaveAave\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 3602,
        name: "Bitcoin SV",
        symbol: "BSV",
        tags: [
          "mineable",
          "pow",
          "sha-256",
          "medium-of-exchange",
          "store-of-value",
          "state-channels",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":161.2957658539142,\\"volume_24h\\":924533163.0015537,\\"percent_change_1h\\":0.4038814,\\"percent_change_24h\\":-7.45703901,\\"percent_change_7d\\":-18.47903804,\\"percent_change_30d\\":-5.17053113,\\"market_cap\\":3006009975.614537,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":3602,\\"name\\":\\"Bitcoin SV\\",\\"symbol\\":\\"BSV\\",\\"category\\":\\"coin\\",\\"description\\":\\"Bitcoin SV (BSV) is a cryptocurrency . Users are able to generate BSV through the process of mining. Bitcoin SV has a current supply of 18,636,889.14423905. The last known price of Bitcoin SV is 161.81714957 USD and is down -6.59 over the last 24 hours. It is currently trading on 214 active market(s) with $956,316,049.75 traded over the last 24 hours. More information can be found at https://bitcoinsv.com/.\\",\\"slug\\":\\"bitcoin-sv\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/3602.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"sha-256\\",\\"medium-of-exchange\\",\\"store-of-value\\",\\"state-channels\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"SHA-256\\",\\"Medium of Exchange\\",\\"Store of Value\\",\\"State channels\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://bitcoinsv.com/\\",\\"https://bitcoinsv.io/\\"],\\"twitter\\":[\\"https://twitter.com/BitcoinAssn\\"],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://blockchair.com/bitcoin-sv\\",\\"https://www.oklink.com/bsv\\",\\"https://bchsv.tokenview.com/en/\\",\\"https://explorer.viabtc.com/bsv\\"],\\"reddit\\":[],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/bitcoin-sv/bitcoin-sv\\"],\\"announcement\\":[\\"https://bitcoinsv.io/news/\\"]},\\"platform\\":null,\\"date_added\\":\\"2018-11-09T00:00:00.000Z\\",\\"twitter_username\\":\\"BitcoinAssn\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1765,
        name: "EOS",
        symbol: "EOS",
        tags: [
          "medium-of-exchange",
          "enterprise-solutions",
          "smart-contracts",
          "binance-chain",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":2.52853216838687,\\"volume_24h\\":1979273922.4691617,\\"percent_change_1h\\":0.46798072,\\"percent_change_24h\\":-3.55282493,\\"percent_change_7d\\":-7.89106232,\\"percent_change_30d\\":-10.7899096,\\"market_cap\\":2376409405.989705,\\"last_updated\\":\\"2021-01-27T20:03:08.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1765,\\"name\\":\\"EOS\\",\\"symbol\\":\\"EOS\\",\\"category\\":\\"coin\\",\\"description\\":\\"EOS (EOS) is a cryptocurrency . EOS has a current supply of 1,026,541,667.8785 with 939,841,656.4471 in circulation. The last known price of EOS is 2.52104634 USD and is down -3.66 over the last 24 hours. It is currently trading on 461 active market(s) with $2,034,428,871.42 traded over the last 24 hours. More information can be found at https://eos.io/.\\",\\"slug\\":\\"eos\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png\\",\\"subreddit\\":\\"EOS\\",\\"notice\\":\\"\\",\\"tags\\":[\\"medium-of-exchange\\",\\"enterprise-solutions\\",\\"smart-contracts\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Medium of Exchange\\",\\"Enterprise solutions\\",\\"Smart Contracts\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"https://eos.io/\\"],\\"twitter\\":[\\"https://twitter.com/block_one_\\"],\\"message_board\\":[],\\"chat\\":[\\"https://t.me/joinchat/AAAAAEQbOeucnaMWN0A9dQ\\"],\\"explorer\\":[\\"https://bloks.io/\\",\\"https://eosflare.io/\\",\\"https://eospark.com/\\",\\"https://www.eosx.io/?partner=coinmarketcap\\",\\"https://bscscan.com/token/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6\\"],\\"reddit\\":[\\"https://reddit.com/r/EOS\\"],\\"technical_doc\\":[\\"https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md\\"],\\"source_code\\":[\\"https://github.com/eosio\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=1904415.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2017-07-01T00:00:00.000Z\\",\\"twitter_username\\":\\"block_one_\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 328,
        name: "Monero",
        symbol: "XMR",
        tags: ["mineable", "pow", "medium-of-exchange", "ringct"],
        quote:
          '"{\\"USD\\":{\\"price\\":129.32275325261247,\\"volume_24h\\":761165093.3000916,\\"percent_change_1h\\":0.3120503,\\"percent_change_24h\\":-6.60809395,\\"percent_change_7d\\":-14.59194256,\\"percent_change_30d\\":-21.32274911,\\"market_cap\\":2305086227.3257246,\\"last_updated\\":\\"2021-01-27T20:04:04.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":328,\\"name\\":\\"Monero\\",\\"symbol\\":\\"XMR\\",\\"category\\":\\"coin\\",\\"description\\":\\"Monero (XMR) is a cryptocurrency . Users are able to generate XMR through the process of mining. Monero has a current supply of 17,824,436.96627386. The last known price of Monero is 127.40242407 USD and is down -6.75 over the last 24 hours. It is currently trading on 176 active market(s) with $885,623,987.04 traded over the last 24 hours. More information can be found at https://ww.getmonero.org/.\\",\\"slug\\":\\"monero\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/328.png\\",\\"subreddit\\":\\"monero\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"medium-of-exchange\\",\\"ringct\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"Medium of Exchange\\",\\"RingCT\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://ww.getmonero.org/\\"],\\"twitter\\":[\\"https://twitter.com/monero\\"],\\"message_board\\":[\\"https://forum.getmonero.org/\\",\\"https://forum.monero.space/\\"],\\"chat\\":[\\"https://telegram.me/monero\\"],\\"explorer\\":[\\"http://moneroblocks.info/\\",\\"http://chainradar.com/xmr/blocks\\",\\"https://xmr.tokenview.com/\\",\\"https://blockchair.com/monero\\"],\\"reddit\\":[\\"https://reddit.com/r/monero\\"],\\"technical_doc\\":[\\"https://github.com/monero-project/research-lab/blob/master/whitepaper/whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/monero-project/monero\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=583449.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2014-05-21T00:00:00.000Z\\",\\"twitter_username\\":\\"monero\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 873,
        name: "NEM",
        symbol: "XEM",
        tags: ["poi", "medium-of-exchange", "payments", "smart-contracts"],
        quote:
          '"{\\"USD\\":{\\"price\\":0.23510875871405,\\"volume_24h\\":162248109.33788872,\\"percent_change_1h\\":1.41866739,\\"percent_change_24h\\":-0.93873994,\\"percent_change_7d\\":0.44204332,\\"percent_change_30d\\":-0.56440922,\\"market_cap\\":2115978828.1913412,\\"last_updated\\":\\"2021-01-27T20:03:07.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":873,\\"name\\":\\"NEM\\",\\"symbol\\":\\"XEM\\",\\"category\\":\\"coin\\",\\"description\\":\\"NEM (XEM) is a cryptocurrency . NEM has a current supply of 8,999,999,999. The last known price of NEM is 0.23110611 USD and is down -3.33 over the last 24 hours. It is currently trading on 97 active market(s) with $164,385,469.62 traded over the last 24 hours. More information can be found at http://nem.io.\\",\\"slug\\":\\"nem\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/873.png\\",\\"subreddit\\":\\"nem\\",\\"notice\\":\\"\\",\\"tags\\":[\\"poi\\",\\"medium-of-exchange\\",\\"payments\\",\\"smart-contracts\\"],\\"tag-names\\":[\\"PoI\\",\\"Medium of Exchange\\",\\"Payments\\",\\"Smart Contracts\\"],\\"tag-groups\\":[\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"http://nem.io\\"],\\"twitter\\":[\\"https://twitter.com/NEMofficial\\"],\\"message_board\\":[\\"https://forum.nem.io/\\"],\\"chat\\":[\\"https://t.me/nemred\\"],\\"explorer\\":[\\"http://chain.nem.ninja/\\",\\"http://explorer.nemtool.com/\\"],\\"reddit\\":[\\"https://reddit.com/r/nem\\"],\\"technical_doc\\":[\\"https://nem.io/wp-content/themes/nem/files/NEM_techRef.pdf\\"],\\"source_code\\":[\\"https://github.com/nemtech\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=654845.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2015-04-01T00:00:00.000Z\\",\\"twitter_username\\":\\"NEMofficial\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2011,
        name: "Tezos",
        symbol: "XTZ",
        tags: [
          "platform",
          "enterprise-solutions",
          "smart-contracts",
          "binance-chain",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":2.77515147751344,\\"volume_24h\\":404839146.1864303,\\"percent_change_1h\\":2.04202504,\\"percent_change_24h\\":-4.16785901,\\"percent_change_7d\\":-1.87673429,\\"percent_change_30d\\":28.78336258,\\"market_cap\\":2103766013.2145388,\\"last_updated\\":\\"2021-01-27T20:03:11.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2011,\\"name\\":\\"Tezos\\",\\"symbol\\":\\"XTZ\\",\\"category\\":\\"coin\\",\\"description\\":\\"Tezos (XTZ) is a cryptocurrency launched in 2018. Tezos has a current supply of 758,072,498.118024. The last known price of Tezos is 2.80136999 USD and is down -3.46 over the last 24 hours. It is currently trading on 155 active market(s) with $420,328,964.97 traded over the last 24 hours. More information can be found at https://www.tezos.com/.\\",\\"slug\\":\\"tezos\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png\\",\\"subreddit\\":\\"tezos\\",\\"notice\\":\\"\\",\\"tags\\":[\\"platform\\",\\"enterprise-solutions\\",\\"smart-contracts\\",\\"binance-chain\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Platform\\",\\"Enterprise solutions\\",\\"Smart Contracts\\",\\"Binance Chain\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.tezos.com/\\"],\\"twitter\\":[\\"https://twitter.com/tezos\\"],\\"message_board\\":[\\"https://forum.tezosagora.org/\\"],\\"chat\\":[\\"https://t.me/tezosplatform\\",\\"https://riot.tzchat.org/\\"],\\"explorer\\":[\\"https://tzstats.com/\\",\\"https://tezblock.io/\\",\\"https://tezos.id/\\",\\"https://tzkt.io/\\",\\"https://bscscan.com/token/0x16939ef78684453bfdfb47825f8a5f714f12623a\\"],\\"reddit\\":[\\"https://reddit.com/r/tezos\\"],\\"technical_doc\\":[\\"https://tezos.gitlab.io/\\"],\\"source_code\\":[\\"https://gitlab.com/tezos/tezos\\"],\\"announcement\\":[\\"https://discord.gg/e6dCF7B\\"]},\\"platform\\":null,\\"date_added\\":\\"2017-10-06T00:00:00.000Z\\",\\"twitter_username\\":\\"tezos\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1958,
        name: "TRON",
        symbol: "TRX",
        tags: ["media", "payments"],
        quote:
          '"{\\"USD\\":{\\"price\\":0.02848806818483,\\"volume_24h\\":1084615251.4766414,\\"percent_change_1h\\":1.0844168,\\"percent_change_24h\\":-3.03934891,\\"percent_change_7d\\":-5.87881081,\\"percent_change_30d\\":-4.22366586,\\"market_cap\\":2041445205.2435868,\\"last_updated\\":\\"2021-01-27T20:03:12.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1958,\\"name\\":\\"TRON\\",\\"symbol\\":\\"TRX\\",\\"category\\":\\"coin\\",\\"description\\":\\"TRON (TRX) is a cryptocurrency . TRON has a current supply of 100,850,743,811.66246 with 71,659,657,369.49 in circulation. The last known price of TRON is 0.0284267 USD and is down -2.50 over the last 24 hours. It is currently trading on 477 active market(s) with $1,134,179,105.19 traded over the last 24 hours. More information can be found at https://tron.network/.\\",\\"slug\\":\\"tron\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png\\",\\"subreddit\\":\\"Tronix\\",\\"notice\\":\\"\\",\\"tags\\":[\\"media\\",\\"payments\\"],\\"tag-names\\":[\\"Media\\",\\"Payments\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://tron.network/\\"],\\"twitter\\":[\\"https://twitter.com/justinsuntron\\"],\\"message_board\\":[\\"https://medium.com/@Tronfoundation\\"],\\"chat\\":[\\"http://t.me/tronnetworkEN\\"],\\"explorer\\":[\\"https://tronscan.org/#/\\",\\"https://www.trxplorer.io/\\",\\"https://trx.tokenview.com/en\\"],\\"reddit\\":[\\"https://reddit.com/r/Tronix\\"],\\"technical_doc\\":[\\"https://developers.tron.network/docs\\"],\\"source_code\\":[\\"https://github.com/tronprotocol\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2017-09-13T00:00:00.000Z\\",\\"twitter_username\\":\\"justinsuntron\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2416,
        name: "THETA",
        symbol: "THETA",
        tags: ["media", "collectibles-nfts", "content-creation", "video"],
        quote:
          '"{\\"USD\\":{\\"price\\":2.02114857136254,\\"volume_24h\\":113799078.13209566,\\"percent_change_1h\\":1.206355,\\"percent_change_24h\\":-10.71907294,\\"percent_change_7d\\":3.99518528,\\"percent_change_30d\\":31.94783071,\\"market_cap\\":2021148571.36254,\\"last_updated\\":\\"2021-01-27T20:04:04.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2416,\\"name\\":\\"THETA\\",\\"symbol\\":\\"THETA\\",\\"category\\":\\"coin\\",\\"description\\":\\"THETA (THETA) is a cryptocurrency . THETA has a current supply of 1,000,000,000. The last known price of THETA is 2.01145054 USD and is down -10.97 over the last 24 hours. It is currently trading on 41 active market(s) with $109,480,838.18 traded over the last 24 hours. More information can be found at https://www.thetatoken.org/.\\",\\"slug\\":\\"theta\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png\\",\\"subreddit\\":\\"theta_network\\",\\"notice\\":\\"\\",\\"tags\\":[\\"media\\",\\"collectibles-nfts\\",\\"content-creation\\",\\"video\\"],\\"tag-names\\":[\\"Media\\",\\"Collectibles & NFTs\\",\\"Content Creation\\",\\"Video\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.thetatoken.org/\\"],\\"twitter\\":[\\"https://twitter.com/Theta_Network\\"],\\"message_board\\":[],\\"chat\\":[\\"https://t.me/joinchat/Gt6mbxJb-2XukwGA_atLjg\\"],\\"explorer\\":[\\"https://explorer.thetatoken.org/\\"],\\"reddit\\":[\\"https://reddit.com/r/theta_network\\"],\\"technical_doc\\":[\\"https://s3.us-east-2.amazonaws.com/assets.thetatoken.org/Theta-white-paper-latest.pdf\\"],\\"source_code\\":[\\"https://github.com/thetatoken\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=2451089.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2018-01-17T00:00:00.000Z\\",\\"twitter_username\\":\\"Theta_Network\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2586,
        name: "Synthetix",
        symbol: "SNX",
        tags: [
          "services",
          "defi",
          "dao",
          "yield-farming",
          "three-arrows-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":15.79826665572141,\\"volume_24h\\":283027235.5607593,\\"percent_change_1h\\":0.40551357,\\"percent_change_24h\\":-3.79677975,\\"percent_change_7d\\":5.22725832,\\"percent_change_30d\\":100.35198348,\\"market_cap\\":1814297161.6750817,\\"last_updated\\":\\"2021-01-27T20:03:06.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2586,\\"name\\":\\"Synthetix\\",\\"symbol\\":\\"SNX\\",\\"category\\":\\"token\\",\\"description\\":\\"Synthetix (SNX) is a cryptocurrency and operates on the Ethereum platform. Synthetix has a current supply of 215,258,834.2449152 with 114,841,533.01197928 in circulation. The last known price of Synthetix is 15.62834649 USD and is down -6.79 over the last 24 hours. It is currently trading on 152 active market(s) with $292,037,568.08 traded over the last 24 hours. More information can be found at https://www.synthetix.io/.\\",\\"slug\\":\\"synthetix-network-token\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2586.png\\",\\"subreddit\\":\\"synthetix_io\\",\\"notice\\":\\"\\",\\"tags\\":[\\"services\\",\\"defi\\",\\"dao\\",\\"yield-farming\\",\\"three-arrows-capital-portfolio\\"],\\"tag-names\\":[\\"Services\\",\\"DeFi\\",\\"DAO\\",\\"Yield farming\\",\\"Three Arrows Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.synthetix.io/\\"],\\"twitter\\":[\\"https://twitter.com/synthetix_io\\"],\\"message_board\\":[\\"https://research.synthetix.io/\\"],\\"chat\\":[\\"https://discord.gg/AEdUHzt\\"],\\"explorer\\":[\\"https://etherscan.io/token/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f\\",\\"https://ethplorer.io/address/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f\\",\\"https://blockchair.com/ethereum/erc-20/token/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f\\",\\"https://eth.tokenview.com/en/token/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f\\"],\\"reddit\\":[\\"https://reddit.com/r/synthetix_io\\"],\\"technical_doc\\":[\\"https://docs.synthetix.io/\\"],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f\\"},\\"date_added\\":\\"2018-03-14T00:00:00.000Z\\",\\"twitter_username\\":\\"synthetix_io\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 3077,
        name: "VeChain",
        symbol: "VET",
        tags: ["logistics", "data-provenance", "smart-contracts"],
        quote:
          '"{\\"USD\\":{\\"price\\":0.02701477384896,\\"volume_24h\\":310633697.384243,\\"percent_change_1h\\":0.86785575,\\"percent_change_24h\\":-8.79081574,\\"percent_change_7d\\":-17.85156615,\\"percent_change_30d\\":42.08129165,\\"market_cap\\":1737470767.3232107,\\"last_updated\\":\\"2021-01-27T20:04:02.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":3077,\\"name\\":\\"VeChain\\",\\"symbol\\":\\"VET\\",\\"category\\":\\"coin\\",\\"description\\":\\"VeChain (VET) is a cryptocurrency . VeChain has a current supply of 86,712,634,466 with 64,315,576,989 in circulation. The last known price of VeChain is 0.02684013 USD and is down -8.10 over the last 24 hours. It is currently trading on 118 active market(s) with $322,668,890.11 traded over the last 24 hours. More information can be found at https://www.vechain.org/.\\",\\"slug\\":\\"vechain\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png\\",\\"subreddit\\":\\"vechain\\",\\"notice\\":\\"\\",\\"tags\\":[\\"logistics\\",\\"data-provenance\\",\\"smart-contracts\\"],\\"tag-names\\":[\\"Logistics\\",\\"Data Provenance\\",\\"Smart Contracts\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.vechain.org/\\",\\"https://www.vechain.com/\\"],\\"twitter\\":[\\"https://twitter.com/vechainofficial\\"],\\"message_board\\":[],\\"chat\\":[\\"https://t.me/vechain_official_english\\",\\"https://t.me/joinchat/GG4BlQwm19czcBGOewv40Q\\"],\\"explorer\\":[\\"http://explore.vechain.org/\\",\\"https://insight.vecha.in\\",\\"https://explorer.vtho.net/\\"],\\"reddit\\":[\\"https://reddit.com/r/vechain\\"],\\"technical_doc\\":[],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2017-08-22T00:00:00.000Z\\",\\"twitter_username\\":\\"vechainofficial\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 4943,
        name: "Dai",
        symbol: "DAI",
        tags: ["defi", "stablecoin"],
        quote:
          '"{\\"USD\\":{\\"price\\":1.00095311269933,\\"volume_24h\\":336788096.2067372,\\"percent_change_1h\\":0.04108754,\\"percent_change_24h\\":-0.03133843,\\"percent_change_7d\\":0.10047432,\\"percent_change_30d\\":-0.2589018,\\"market_cap\\":1603798050.411302,\\"last_updated\\":\\"2021-01-27T20:03:07.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":4943,\\"name\\":\\"Dai\\",\\"symbol\\":\\"DAI\\",\\"category\\":\\"token\\",\\"description\\":\\"Dai (DAI) is a cryptocurrency and operates on the Ethereum platform. Dai has a current supply of 1,606,133,622.367114 with 1,606,133,596.5469692 in circulation. The last known price of Dai is 1.00122278 USD and is up 0.05 over the last 24 hours. It is currently trading on 350 active market(s) with $340,788,504.23 traded over the last 24 hours. More information can be found at http://www.makerdao.com/.\\",\\"slug\\":\\"multi-collateral-dai\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"For details on the upgrade from Single-Collateral Dai (Sai) to Multi-Collateral Dai (Dai), please click [here](https://blog.makerdao.com/single-collateral-dai-to-multi-collateral-dai-upgrade-timeline-and-actions/)\\",\\"tags\\":[\\"defi\\",\\"stablecoin\\"],\\"tag-names\\":[\\"DeFi\\",\\"Stablecoin\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"http://www.makerdao.com/\\"],\\"twitter\\":[],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f\\",\\"https://ethplorer.io/address/0x6b175474e89094c44da98b954eedeac495271d0f\\",\\"https://blockchair.com/ethereum/erc-20/token/0x6b175474e89094c44da98b954eedeac495271d0f\\",\\"https://eth.tokenview.com/en/token/0x6b175474e89094c44da98b954eedeac495271d0f\\"],\\"reddit\\":[],\\"technical_doc\\":[],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x6b175474e89094c44da98b954eedeac495271d0f\\"},\\"date_added\\":\\"2019-11-22T00:00:00.000Z\\",\\"twitter_username\\":\\"\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1376,
        name: "Neo",
        symbol: "NEO",
        tags: ["platform", "enterprise-solutions", "smart-contracts"],
        quote:
          '"{\\"USD\\":{\\"price\\":21.13922873281066,\\"volume_24h\\":621722785.48112,\\"percent_change_1h\\":1.03962819,\\"percent_change_24h\\":-9.632554,\\"percent_change_7d\\":-17.45452239,\\"percent_change_30d\\":33.93704185,\\"market_cap\\":1491136483.0540755,\\"last_updated\\":\\"2021-01-27T20:04:04.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1376,\\"name\\":\\"Neo\\",\\"symbol\\":\\"NEO\\",\\"category\\":\\"coin\\",\\"description\\":\\"Neo (NEO) is a cryptocurrency . Neo has a current supply of 100,000,000 with 70,538,831 in circulation. The last known price of Neo is 20.97047748 USD and is down -9.83 over the last 24 hours. It is currently trading on 267 active market(s) with $647,641,096.83 traded over the last 24 hours. More information can be found at https://neo.org/.\\",\\"slug\\":\\"neo\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1376.png\\",\\"subreddit\\":\\"NEO\\",\\"notice\\":\\"\\",\\"tags\\":[\\"platform\\",\\"enterprise-solutions\\",\\"smart-contracts\\"],\\"tag-names\\":[\\"Platform\\",\\"Enterprise solutions\\",\\"Smart Contracts\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://neo.org/\\"],\\"twitter\\":[\\"https://twitter.com/neo_blockchain\\"],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://neoscan.io/\\",\\"https://explorer.o3.network/\\",\\"https://neo.tokenview.com/\\"],\\"reddit\\":[\\"https://reddit.com/r/NEO\\"],\\"technical_doc\\":[\\"https://docs.neo.org/docs/en-us/index.html\\"],\\"source_code\\":[\\"https://github.com/neo-project\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=2057932.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2016-09-08T00:00:00.000Z\\",\\"twitter_username\\":\\"neo_blockchain\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 3635,
        name: "Crypto.com Coin",
        symbol: "CRO",
        tags: ["medium-of-exchange", "mobile", "payments"],
        quote:
          '"{\\"USD\\":{\\"price\\":0.06504806625361,\\"volume_24h\\":57284195.69858321,\\"percent_change_1h\\":0.77157862,\\"percent_change_24h\\":-6.51219883,\\"percent_change_7d\\":-21.06206894,\\"percent_change_30d\\":8.91605174,\\"market_cap\\":1489571014.807581,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":3635,\\"name\\":\\"Crypto.com Coin\\",\\"symbol\\":\\"CRO\\",\\"category\\":\\"token\\",\\"description\\":\\"Crypto.com Coin (CRO) is a cryptocurrency and operates on the Ethereum platform. Crypto.com Coin has a current supply of 100,000,000,000 with 22,899,543,377.66211 in circulation. The last known price of Crypto.com Coin is 0.06553885 USD and is down -6.72 over the last 24 hours. It is currently trading on 102 active market(s) with $51,820,314.41 traded over the last 24 hours. More information can be found at https://www.crypto.com/en/chain.\\",\\"slug\\":\\"crypto-com-coin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png\\",\\"subreddit\\":\\"Crypto_com\\",\\"notice\\":\\"\\",\\"tags\\":[\\"medium-of-exchange\\",\\"mobile\\",\\"payments\\"],\\"tag-names\\":[\\"Medium of Exchange\\",\\"Mobile\\",\\"Payments\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.crypto.com/en/chain\\"],\\"twitter\\":[\\"https://twitter.com/cryptocom\\"],\\"message_board\\":[\\"https://blog.crypto.com/\\",\\"http://medium.com/@crypto.com\\"],\\"chat\\":[\\"https://t.me/CryptoComOfficial\\",\\"https://discordapp.com/invite/B6cZahJ\\"],\\"explorer\\":[\\"https://etherscan.io/token/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b\\",\\"https://ethplorer.io/address/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b\\",\\"https://blockchair.com/ethereum/erc-20/token/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b\\",\\"https://eth.tokenview.com/en/token/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b\\"],\\"reddit\\":[\\"https://reddit.com/r/Crypto_com\\"],\\"technical_doc\\":[\\"https://www.crypto.com/images/chain_whitepaper.pdf\\"],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b\\"},\\"date_added\\":\\"2018-12-14T00:00:00.000Z\\",\\"twitter_username\\":\\"cryptocom\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 3794,
        name: "Cosmos",
        symbol: "ATOM",
        tags: [
          "platform",
          "content-creation",
          "interoperability",
          "binance-chain",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":7.02080224250015,\\"volume_24h\\":590233009.7103423,\\"percent_change_1h\\":0.94875643,\\"percent_change_24h\\":-9.7187944,\\"percent_change_7d\\":-18.79214015,\\"percent_change_30d\\":32.08008342,\\"market_cap\\":1470594537.727762,\\"last_updated\\":\\"2021-01-27T20:03:06.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":3794,\\"name\\":\\"Cosmos\\",\\"symbol\\":\\"ATOM\\",\\"category\\":\\"coin\\",\\"description\\":\\"Cosmos (ATOM) is a cryptocurrency . Cosmos has a current supply of 267,259,793.642219 with 209,475,190.642219 in circulation. The last known price of Cosmos is 6.89267908 USD and is down -10.95 over the last 24 hours. It is currently trading on 157 active market(s) with $583,261,453.95 traded over the last 24 hours. More information can be found at https://cosmos.network/.\\",\\"slug\\":\\"cosmos\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png\\",\\"subreddit\\":\\"cosmosnetwork\\",\\"notice\\":\\"\\",\\"tags\\":[\\"platform\\",\\"content-creation\\",\\"interoperability\\",\\"binance-chain\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Platform\\",\\"Content Creation\\",\\"Interoperability\\",\\"Binance Chain\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://cosmos.network/\\"],\\"twitter\\":[\\"https://twitter.com/cosmos\\"],\\"message_board\\":[\\"https://blog.cosmos.network/\\",\\"https://forum.cosmos.network/\\"],\\"chat\\":[\\"https://t.me/cosmosproject\\"],\\"explorer\\":[\\"https://www.mintscan.io/\\",\\"https://atomscan.com\\",\\"https://cosmos.bigdipper.live/\\",\\"https://atom.tokenview.com/en\\",\\"https://bscscan.com/token/0x0eb3a705fc54725037cc9e008bdede697f62f335\\"],\\"reddit\\":[\\"https://reddit.com/r/cosmosnetwork\\"],\\"technical_doc\\":[\\"https://cosmos.network/resources/whitepaper\\"],\\"source_code\\":[\\"https://github.com/cosmos\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2019-03-14T00:00:00.000Z\\",\\"twitter_username\\":\\"cosmos\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 4687,
        name: "Binance USD",
        symbol: "BUSD",
        tags: [
          "store-of-value",
          "stablecoin",
          "stablecoin-asset-backed",
          "binance-chain",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":1.0005,\\"volume_24h\\":2554101807.8066597,\\"percent_change_1h\\":0.029994,\\"percent_change_24h\\":0.05,\\"percent_change_7d\\":0.05,\\"percent_change_30d\\":0.05,\\"market_cap\\":1363629851.7887998,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":4687,\\"name\\":\\"Binance USD\\",\\"symbol\\":\\"BUSD\\",\\"category\\":\\"token\\",\\"description\\":\\"Binance USD (BUSD) is a cryptocurrency and operates on the Binance Chain platform. Binance USD has a current supply of 1,364,048,630.75. The last known price of Binance USD is 0.9999 USD and is down -0.05 over the last 24 hours. It is currently trading on 296 active market(s) with $2,658,871,368.12 traded over the last 24 hours. More information can be found at https://www.binance.com/en/busd.\\",\\"slug\\":\\"binance-usd\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"store-of-value\\",\\"stablecoin\\",\\"stablecoin-asset-backed\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Store of Value\\",\\"Stablecoin\\",\\"Stablecoin - Asset-Backed\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"https://www.binance.com/en/busd\\",\\"https://www.paxos.com/busd/\\"],\\"twitter\\":[\\"https://twitter.com/PaxosGlobal\\"],\\"message_board\\":[\\"https://medium.com/Paxos\\"],\\"chat\\":[],\\"explorer\\":[\\"https://etherscan.io/token/0x4Fabb145d64652a948d72533023f6E7A623C7C53\\",\\"https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56\\",\\"https://explorer.binance.org/asset/BUSD-BD1\\"],\\"reddit\\":[],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/paxosglobal/busd-contract\\"],\\"announcement\\":[\\"https://www.binance.com/en/blog/376335367507857408/Binance-Partners-with-Paxos-to-Launch-USDBacked-Stablecoin-BUSD\\"]},\\"platform\\":{\\"id\\":1839,\\"name\\":\\"Binance Chain\\",\\"symbol\\":\\"BNB\\",\\"slug\\":\\"binance-coin\\",\\"token_address\\":\\"BUSD-BD1\\"},\\"date_added\\":\\"2019-09-20T00:00:00.000Z\\",\\"twitter_username\\":\\"PaxosGlobal\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1518,
        name: "Maker",
        symbol: "MKR",
        tags: ["store-of-value", "defi", "dao", "polychain-capital-portfolio"],
        quote:
          '"{\\"USD\\":{\\"price\\":1350.368183251438,\\"volume_24h\\":145039707.7167249,\\"percent_change_1h\\":0.32554858,\\"percent_change_24h\\":-4.81999617,\\"percent_change_7d\\":0.00403037,\\"percent_change_30d\\":129.94955924,\\"market_cap\\":1344550211.027924,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1518,\\"name\\":\\"Maker\\",\\"symbol\\":\\"MKR\\",\\"category\\":\\"token\\",\\"description\\":\\"Maker (MKR) is a cryptocurrency and operates on the Ethereum platform. Maker has a current supply of 995,691.56597758. The last known price of Maker is 1,320.96153911 USD and is down -10.32 over the last 24 hours. It is currently trading on 175 active market(s) with $146,683,909.51 traded over the last 24 hours. More information can be found at https://makerdao.com/.\\",\\"slug\\":\\"maker\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png\\",\\"subreddit\\":\\"MakerDAO\\",\\"notice\\":\\"\\",\\"tags\\":[\\"store-of-value\\",\\"defi\\",\\"dao\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Store of Value\\",\\"DeFi\\",\\"DAO\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://makerdao.com/\\"],\\"twitter\\":[\\"https://twitter.com/MakerDAO\\"],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://etherscan.io/token/Maker\\",\\"https://ethplorer.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2\\",\\"https://blockchair.com/ethereum/erc-20/token/0xda27b988921a0659bceac1abd4b43a295c8296f4\\",\\"https://eth.tokenview.com/en/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2\\"],\\"reddit\\":[\\"https://reddit.com/r/MakerDAO\\"],\\"technical_doc\\":[\\"https://makerdao.com/en/whitepaper/#overview-of-the-dai-stablecoin-system\\"],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2\\"},\\"date_added\\":\\"2017-01-29T00:00:00.000Z\\",\\"twitter_username\\":\\"MakerDAO\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 3957,
        name: "UNUS SED LEO",
        symbol: "LEO",
        tags: ["marketplace", "discount-token", "payments"],
        quote:
          '"{\\"USD\\":{\\"price\\":1.31611500596886,\\"volume_24h\\":17512634.22462609,\\"percent_change_1h\\":0.15055389,\\"percent_change_24h\\":0.0814801,\\"percent_change_7d\\":-1.0228581,\\"percent_change_30d\\":-2.80914548,\\"market_cap\\":1315455491.3949525,\\"last_updated\\":\\"2021-01-27T20:03:07.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":3957,\\"name\\":\\"UNUS SED LEO\\",\\"symbol\\":\\"LEO\\",\\"category\\":\\"token\\",\\"description\\":\\"UNUS SED LEO (LEO) is a cryptocurrency and operates on the Ethereum platform. UNUS SED LEO has a current supply of 999,498,892.9. The last known price of UNUS SED LEO is 1.31689447 USD and is up 0.06 over the last 24 hours. It is currently trading on 25 active market(s) with $18,503,691.88 traded over the last 24 hours. More information can be found at https://www.bitfinex.com/.\\",\\"slug\\":\\"unus-sed-leo\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/3957.png\\",\\"subreddit\\":\\"bitfinex\\",\\"notice\\":\\"\\",\\"tags\\":[\\"marketplace\\",\\"discount-token\\",\\"payments\\"],\\"tag-names\\":[\\"Marketplace\\",\\"Discount token\\",\\"Payments\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.bitfinex.com/\\"],\\"twitter\\":[\\"https://twitter.com/bitfinex\\"],\\"message_board\\":[],\\"chat\\":[\\"https://t.me/bfxtelegram\\"],\\"explorer\\":[\\"https://etherscan.io/token/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3\\",\\"https://ethplorer.io/address/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3\\",\\"https://eospark.com/account/bitfinexleo1\\",\\"https://eosflare.io/account/bitfinexleo1\\",\\"https://blockchair.com/ethereum/erc-20/token/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3\\"],\\"reddit\\":[\\"https://reddit.com/r/bitfinex\\"],\\"technical_doc\\":[\\"https://www.bitfinex.com/wp-2019-05.pdf\\"],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3\\"},\\"date_added\\":\\"2019-05-21T00:00:00.000Z\\",\\"twitter_username\\":\\"bitfinex\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2700,
        name: "Celsius",
        symbol: "CEL",
        tags: null,
        quote:
          '"{\\"USD\\":{\\"price\\":4.73757714504554,\\"volume_24h\\":11002876.11228487,\\"percent_change_1h\\":-0.70598117,\\"percent_change_24h\\":-5.96619777,\\"percent_change_7d\\":5.53111846,\\"percent_change_30d\\":3.62395338,\\"market_cap\\":1131634352.31279,\\"last_updated\\":\\"2021-01-27T20:03:07.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2700,\\"name\\":\\"Celsius\\",\\"symbol\\":\\"CEL\\",\\"category\\":\\"token\\",\\"description\\":\\"Celsius (CEL) is a cryptocurrency and operates on the Ethereum platform. Celsius has a current supply of 695,658,160.967 with 238,863,519.826 in circulation. The last known price of Celsius is 4.81480868 USD and is down -4.39 over the last 24 hours. It is currently trading on 23 active market(s) with $10,674,037.39 traded over the last 24 hours. More information can be found at https://celsius.network/.\\",\\"slug\\":\\"celsius\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2700.png\\",\\"subreddit\\":\\"celsiusnetwork\\",\\"notice\\":\\"Celsius has issued a [statement](https://twitter.com/CelsiusNetwork/status/1265374004161859584) indicating that it is not affiliated with Bilaxy exchange and that it has not listed the $CEL token with them.\\",\\"tags\\":null,\\"tag-names\\":null,\\"tag-groups\\":null,\\"urls\\":{\\"website\\":[\\"https://celsius.network/\\"],\\"twitter\\":[\\"https://twitter.com/celsiusnetwork\\"],\\"message_board\\":[\\"https://celsius.network/blog/\\"],\\"chat\\":[\\"https://t.me/celsiusnetwork\\"],\\"explorer\\":[\\"https://etherscan.io/token/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d\\",\\"https://ethplorer.io/address/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d\\"],\\"reddit\\":[\\"https://reddit.com/r/celsiusnetwork\\"],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/CelsiusNetwork\\"],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d\\"},\\"date_added\\":\\"2018-05-18T00:00:00.000Z\\",\\"twitter_username\\":\\"celsiusnetwork\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1720,
        name: "IOTA",
        symbol: "MIOTA",
        tags: ["dag", "medium-of-exchange", "iot", "sharing-economy"],
        quote:
          '"{\\"USD\\":{\\"price\\":0.39406027310275,\\"volume_24h\\":39859447.19488079,\\"percent_change_1h\\":0.78661157,\\"percent_change_24h\\":-7.62932594,\\"percent_change_7d\\":-15.2080333,\\"percent_change_30d\\":26.89041717,\\"market_cap\\":1095302462.416344,\\"last_updated\\":\\"2021-01-27T20:04:06.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1720,\\"name\\":\\"IOTA\\",\\"symbol\\":\\"MIOTA\\",\\"category\\":\\"coin\\",\\"description\\":\\"IOTA (MIOTA) is a cryptocurrency . IOTA has a current supply of 2,779,530,283. The last known price of IOTA is 0.39251247 USD and is down -9.01 over the last 24 hours. It is currently trading on 64 active market(s) with $39,502,344.21 traded over the last 24 hours. More information can be found at https://www.iota.org/.\\",\\"slug\\":\\"iota\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1720.png\\",\\"subreddit\\":\\"Iota\\",\\"notice\\":\\"\\",\\"tags\\":[\\"dag\\",\\"medium-of-exchange\\",\\"iot\\",\\"sharing-economy\\"],\\"tag-names\\":[\\"DAG\\",\\"Medium of Exchange\\",\\"IoT\\",\\"Sharing Economy\\"],\\"tag-groups\\":[\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.iota.org/\\"],\\"twitter\\":[\\"https://twitter.com/iotatoken\\"],\\"message_board\\":[\\"https://forum.iota.org\\"],\\"chat\\":[\\"https://discord.iota.org/\\"],\\"explorer\\":[\\"https://thetangle.org/\\",\\"http://explorer.iota.org/?\\"],\\"reddit\\":[\\"https://reddit.com/r/Iota\\"],\\"technical_doc\\":[\\"https://iota.org/IOTA_Whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/iotaledger\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=1216479.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2017-06-13T00:00:00.000Z\\",\\"twitter_username\\":\\"iotatoken\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2502,
        name: "Huobi Token",
        symbol: "HT",
        tags: ["marketplace", "discount-token", "payments"],
        quote:
          '"{\\"USD\\":{\\"price\\":5.50857311965311,\\"volume_24h\\":223623061.09036207,\\"percent_change_1h\\":0.28542877,\\"percent_change_24h\\":-2.5582265,\\"percent_change_7d\\":-3.49558002,\\"percent_change_30d\\":30.74120347,\\"market_cap\\":1074690623.2530906,\\"last_updated\\":\\"2021-01-27T20:04:06.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2502,\\"name\\":\\"Huobi Token\\",\\"symbol\\":\\"HT\\",\\"category\\":\\"token\\",\\"description\\":\\"Huobi Token (HT) is a cryptocurrency and operates on the Ethereum platform. Huobi Token has a current supply of 500,000,000 with 195,094,192.2544121 in circulation. The last known price of Huobi Token is 5.47311633 USD and is down -3.69 over the last 24 hours. It is currently trading on 176 active market(s) with $219,155,905.52 traded over the last 24 hours. More information can be found at https://www.hbg.com/.\\",\\"slug\\":\\"huobi-token\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png\\",\\"subreddit\\":\\"HuobiGlobal\\",\\"notice\\":\\"\\",\\"tags\\":[\\"marketplace\\",\\"discount-token\\",\\"payments\\"],\\"tag-names\\":[\\"Marketplace\\",\\"Discount token\\",\\"Payments\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.hbg.com/\\"],\\"twitter\\":[\\"https://twitter.com/HuobiGlobal\\"],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://etherscan.io/token/0x6f259637dcd74c767781e37bc6133cd6a68aa161\\",\\"http://ethplorer.io/address/0x6f259637dcd74c767781e37bc6133cd6a68aa161\\",\\"https://eth.tokenview.com/en/token/0x6f259637dcd74c767781e37bc6133cd6a68aa161\\"],\\"reddit\\":[\\"https://reddit.com/r/HuobiGlobal\\"],\\"technical_doc\\":[],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x6f259637dcd74c767781e37bc6133cd6a68aa161\\"},\\"date_added\\":\\"2018-02-03T00:00:00.000Z\\",\\"twitter_username\\":\\"HuobiGlobal\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 5692,
        name: "Compound",
        symbol: "COMP",
        tags: [
          "defi",
          "dao",
          "yield-farming",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":224.55313780255855,\\"volume_24h\\":303207632.49923015,\\"percent_change_1h\\":-0.20207135,\\"percent_change_24h\\":-2.01602399,\\"percent_change_7d\\":7.49208229,\\"percent_change_30d\\":63.38272113,\\"market_cap\\":1003220238.7017328,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":5692,\\"name\\":\\"Compound\\",\\"symbol\\":\\"COMP\\",\\"category\\":\\"token\\",\\"description\\":\\"Compound (COMP) is a cryptocurrency and operates on the Ethereum platform. Compound has a current supply of 10,000,000 with 4,467,795.45641844 in circulation. The last known price of Compound is 217.48823002 USD and is down -8.35 over the last 24 hours. It is currently trading on 161 active market(s) with $303,146,569.10 traded over the last 24 hours. More information can be found at https://compound.finance/governance/comp.\\",\\"slug\\":\\"compound\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"defi\\",\\"dao\\",\\"yield-farming\\",\\"three-arrows-capital-portfolio\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"DeFi\\",\\"DAO\\",\\"Yield farming\\",\\"Three Arrows Capital Portfolio\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://compound.finance/governance/comp\\"],\\"twitter\\":[\\"https://twitter.com/compoundfinance\\"],\\"message_board\\":[\\"https://medium.com/compound-finance\\"],\\"chat\\":[\\"https://compound.finance/discord\\"],\\"explorer\\":[\\"https://etherscan.io/token/0xc00e94cb662c3520282e6f5717214004a7f26888\\",\\"https://ethplorer.io/address/0xc00e94cb662c3520282e6f5717214004a7f26888\\",\\"https://eth.tokenview.com/en/token/0xc00e94cb662c3520282e6f5717214004a7f26888\\"],\\"reddit\\":[],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/compound-finance/compound-protocol\\"],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0xc00e94cb662c3520282e6f5717214004a7f26888\\"},\\"date_added\\":\\"2020-06-16T00:00:00.000Z\\",\\"twitter_username\\":\\"compoundfinance\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2135,
        name: "Revain",
        symbol: "REV",
        tags: ["platform", "reputation", "smart-contracts"],
        quote:
          '"{\\"USD\\":{\\"price\\":0.01167029887313,\\"volume_24h\\":7452784.77079917,\\"percent_change_1h\\":0.02192619,\\"percent_change_24h\\":-0.03399023,\\"percent_change_7d\\":0.01558974,\\"percent_change_30d\\":0.32478692,\\"market_cap\\":992692960.5928335,\\"last_updated\\":\\"2021-01-27T20:04:03.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2135,\\"name\\":\\"Revain\\",\\"symbol\\":\\"REV\\",\\"category\\":\\"token\\",\\"description\\":\\"Revain (REV) is a cryptocurrency and operates on the Ethereum platform. Revain has a current supply of 85,061,485,689.83401. The last known price of Revain is 0.01166547 USD and is down -0.29 over the last 24 hours. It is currently trading on 21 active market(s) with $7,415,075.50 traded over the last 24 hours. More information can be found at https://revain.org/.\\",\\"slug\\":\\"revain\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2135.png\\",\\"subreddit\\":\\"revain_org\\",\\"notice\\":\\"\\",\\"tags\\":[\\"platform\\",\\"reputation\\",\\"smart-contracts\\"],\\"tag-names\\":[\\"Platform\\",\\"Reputation\\",\\"Smart Contracts\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://revain.org/\\",\\"https://company.revain.org\\"],\\"twitter\\":[\\"https://twitter.com/revain_org\\"],\\"message_board\\":[\\"https://medium.com/revain\\"],\\"chat\\":[\\"https://t.me/joinchat/CzZcC0PCgpJcbBCb3JfNeQ\\"],\\"explorer\\":[\\"https://etherscan.io/token/0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9\\",\\"https://ethplorer.io/address/0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9\\",\\"https://tronscan.org/#/token20/TD4bVgcwj3FRbmAo283HxNvqZvY7T3uD8k\\"],\\"reddit\\":[\\"https://reddit.com/r/revain_org\\"],\\"technical_doc\\":[\\"http://revain.org/pdf/wp/en-wp.pdf\\"],\\"source_code\\":[\\"https://github.com/Revain\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=2064640.0\\"]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9\\"},\\"date_added\\":\\"2017-11-01T00:00:00.000Z\\",\\"twitter_username\\":\\"revain_org\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2280,
        name: "Filecoin",
        symbol: "FIL",
        tags: [
          "mineable",
          "distributed-computing",
          "filesharing",
          "ipfs",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":21.40399018884963,\\"volume_24h\\":223987260.68924123,\\"percent_change_1h\\":-0.56528967,\\"percent_change_24h\\":-3.26233064,\\"percent_change_7d\\":-4.53214117,\\"percent_change_30d\\":-4.49126186,\\"market_cap\\":989166656.6822802,\\"last_updated\\":\\"2021-01-27T20:04:03.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2280,\\"name\\":\\"Filecoin\\",\\"symbol\\":\\"FIL\\",\\"category\\":\\"coin\\",\\"description\\":\\"Filecoin (FIL) is a cryptocurrency launched in 2020. Users are able to generate FIL through the process of mining. Filecoin has a current supply of 46,305,850. The last known price of Filecoin is 21.46193259 USD and is down -3.24 over the last 24 hours. It is currently trading on 86 active market(s) with $226,597,741.23 traded over the last 24 hours. More information can be found at https://filecoin.io/.\\",\\"slug\\":\\"filecoin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"Kindly note that some exchanges are trading IOUs of this asset. Please do your own due diligence.\\",\\"tags\\":[\\"mineable\\",\\"distributed-computing\\",\\"filesharing\\",\\"ipfs\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Mineable\\",\\"Distributed Computing\\",\\"Filesharing\\",\\"IPFS\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"OTHER\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://filecoin.io/\\"],\\"twitter\\":[\\"https://twitter.com/protocollabs\\"],\\"message_board\\":[\\"https://filecoin.io/blog\\"],\\"chat\\":[],\\"explorer\\":[\\"https://filfox.io/en?utm_source=cmc\\"],\\"reddit\\":[],\\"technical_doc\\":[\\"https://docs.filecoin.io/\\"],\\"source_code\\":[],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=2080871.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2017-12-13T00:00:00.000Z\\",\\"twitter_username\\":\\"protocollabs\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 131,
        name: "Dash",
        symbol: "DASH",
        tags: [
          "mineable",
          "hybrid-pow-pos",
          "x11",
          "medium-of-exchange",
          "privacy",
          "masternodes",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":97.71165465555511,\\"volume_24h\\":429041577.90713847,\\"percent_change_1h\\":0.62800316,\\"percent_change_24h\\":-6.42768478,\\"percent_change_7d\\":-17.78432599,\\"percent_change_30d\\":-8.03099809,\\"market_cap\\":971306839.3706774,\\"last_updated\\":\\"2021-01-27T20:04:03.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":131,\\"name\\":\\"Dash\\",\\"symbol\\":\\"DASH\\",\\"category\\":\\"coin\\",\\"description\\":\\"Dash (DASH) is a cryptocurrency . Users are able to generate DASH through the process of mining. Dash has a current supply of 9,940,917.34560896. The last known price of Dash is 95.3813456 USD and is down -9.14 over the last 24 hours. It is currently trading on 353 active market(s) with $509,976,059.06 traded over the last 24 hours. More information can be found at https://www.dash.org/.\\",\\"slug\\":\\"dash\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/131.png\\",\\"subreddit\\":\\"dashpay\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"hybrid-pow-pos\\",\\"x11\\",\\"medium-of-exchange\\",\\"privacy\\",\\"masternodes\\"],\\"tag-names\\":[\\"Mineable\\",\\"Hybrid - PoW & PoS\\",\\"X11\\",\\"Medium of Exchange\\",\\"Privacy\\",\\"Masternodes\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.dash.org/\\",\\"https://newsroom.dash.org/\\"],\\"twitter\\":[\\"https://twitter.com/Dashpay\\"],\\"message_board\\":[\\"https://www.dash.org/forum/\\"],\\"chat\\":[\\"https://t.me/dash_chat\\",\\"https://discord.com/invite/PXbUxJB\\"],\\"explorer\\":[\\"https://explorer.dash.org\\",\\"https://insight.dash.org/insight/\\",\\"https://chainz.cryptoid.info/dash/\\",\\"https://dash.tokenview.com/en\\",\\"https://blockchair.com/dash\\"],\\"reddit\\":[\\"https://reddit.com/r/dashpay\\"],\\"technical_doc\\":[\\"https://docs.dash.org/\\"],\\"source_code\\":[\\"https://github.com/dashpay/dash\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=421615.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2014-02-14T00:00:00.000Z\\",\\"twitter_username\\":\\"Dashpay\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 5426,
        name: "Solana",
        symbol: "SOL",
        tags: ["dpos", "platform"],
        quote:
          '"{\\"USD\\":{\\"price\\":3.69847131586247,\\"volume_24h\\":41911296.22886942,\\"percent_change_1h\\":-0.12006747,\\"percent_change_24h\\":-6.67676804,\\"percent_change_7d\\":2.66283312,\\"percent_change_30d\\":160.88065766,\\"market_cap\\":968630144.4206554,\\"last_updated\\":\\"2021-01-27T20:04:04.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":5426,\\"name\\":\\"Solana\\",\\"symbol\\":\\"SOL\\",\\"category\\":\\"coin\\",\\"description\\":\\"Solana (SOL) is a cryptocurrency . Solana has a current supply of 488,630,611 with 261,900,137.02858052 in circulation. The last known price of Solana is 3.61696357 USD and is down -10.31 over the last 24 hours. It is currently trading on 32 active market(s) with $36,907,298.14 traded over the last 24 hours. More information can be found at https://solana.com.\\",\\"slug\\":\\"solana\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png\\",\\"subreddit\\":\\"solana\\",\\"notice\\":\\"\\",\\"tags\\":[\\"dpos\\",\\"platform\\"],\\"tag-names\\":[\\"DPoS\\",\\"Platform\\"],\\"tag-groups\\":[\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://solana.com\\"],\\"twitter\\":[\\"https://twitter.com/solana\\"],\\"message_board\\":[\\"https://medium.com/solana-labs\\",\\"https://forums.solana.com\\"],\\"chat\\":[\\"https://discord.gg/Rz737rP\\",\\"https://t.me/solanaio\\"],\\"explorer\\":[\\"https://explorer.solana.com\\",\\"https://solanabeach.io\\"],\\"reddit\\":[\\"https://reddit.com/r/solana\\"],\\"technical_doc\\":[\\"https://solana.io/solana-whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/solana-labs\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2020-04-10T00:00:00.000Z\\",\\"twitter_username\\":\\"solana\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 74,
        name: "Dogecoin",
        symbol: "DOGE",
        tags: [
          "mineable",
          "pow",
          "scrypt",
          "medium-of-exchange",
          "memes",
          "payments",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":0.00744051711507,\\"volume_24h\\":192166473.08185306,\\"percent_change_1h\\":-1.15761937,\\"percent_change_24h\\":-10.33939949,\\"percent_change_7d\\":-17.51158341,\\"percent_change_30d\\":61.6145272,\\"market_cap\\":953298143.0076935,\\"last_updated\\":\\"2021-01-27T20:04:03.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":74,\\"name\\":\\"Dogecoin\\",\\"symbol\\":\\"DOGE\\",\\"category\\":\\"coin\\",\\"description\\":\\"Dogecoin (DOGE) is a cryptocurrency . Users are able to generate DOGE through the process of mining. Dogecoin has a current supply of 128,122,565,712.11784. The last known price of Dogecoin is 0.00744791 USD and is down -9.90 over the last 24 hours. It is currently trading on 268 active market(s) with $206,203,489.17 traded over the last 24 hours. More information can be found at http://dogecoin.com/.\\",\\"slug\\":\\"dogecoin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/74.png\\",\\"subreddit\\":\\"dogecoin\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"scrypt\\",\\"medium-of-exchange\\",\\"memes\\",\\"payments\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"Scrypt\\",\\"Medium of Exchange\\",\\"Memes\\",\\"Payments\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"http://dogecoin.com/\\"],\\"twitter\\":[\\"https://twitter.com/dogecoin\\"],\\"message_board\\":[],\\"chat\\":[\\"http://webchat.freenode.net/?nick=Shibe..&channels=%23dogecoin&prompt=1\\"],\\"explorer\\":[\\"https://blockchair.com/dogecoin\\",\\"http://dogechain.info/chain/Dogecoin\\",\\"https://doge.tokenview.com\\",\\"https://explorer.viabtc.com/doge\\"],\\"reddit\\":[\\"https://reddit.com/r/dogecoin\\"],\\"technical_doc\\":[\\"https://github.com/dogecoin/dogecoin/blob/master/README.md\\"],\\"source_code\\":[\\"https://github.com/dogecoin/dogecoin\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=361813.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2013-12-15T00:00:00.000Z\\",\\"twitter_username\\":\\"dogecoin\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 6758,
        name: "SushiSwap",
        symbol: "SUSHI",
        tags: [
          "defi",
          "memes",
          "dao",
          "yield-farming",
          "amm",
          "yearn-partnerships",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":7.39462228997484,\\"volume_24h\\":819528849.9487873,\\"percent_change_1h\\":3.3819812,\\"percent_change_24h\\":-5.45646138,\\"percent_change_7d\\":8.67371116,\\"percent_change_30d\\":172.52909702,\\"market_cap\\":940924594.483233,\\"last_updated\\":\\"2021-01-27T20:03:07.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":6758,\\"name\\":\\"SushiSwap\\",\\"symbol\\":\\"SUSHI\\",\\"category\\":\\"token\\",\\"description\\":\\"SushiSwap (SUSHI) is a cryptocurrency and operates on the Ethereum platform. SushiSwap has a current supply of 189,212,276.7671812 with 127,244,443 in circulation. The last known price of SushiSwap is 7.05676241 USD and is down -12.38 over the last 24 hours. It is currently trading on 134 active market(s) with $809,824,113.46 traded over the last 24 hours. More information can be found at https://sushiswap.org/.\\",\\"slug\\":\\"sushiswap\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png\\",\\"subreddit\\":\\"None\\",\\"notice\\":\\"\\",\\"tags\\":[\\"defi\\",\\"memes\\",\\"dao\\",\\"yield-farming\\",\\"amm\\",\\"yearn-partnerships\\"],\\"tag-names\\":[\\"DeFi\\",\\"Memes\\",\\"DAO\\",\\"Yield farming\\",\\"AMM\\",\\"Yearn Partnerships\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://sushiswap.org/\\"],\\"twitter\\":[\\"https://twitter.com/sushiswap\\"],\\"message_board\\":[],\\"chat\\":[\\"https://discord.gg/hJ2p555\\"],\\"explorer\\":[\\"https://etherscan.io/token/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2\\",\\"https://ethplorer.io/address/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2\\"],\\"reddit\\":[\\"https://reddit.com/r/None\\"],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/sushiswap/sushiswap\\"],\\"announcement\\":[\\"https://medium.com/@sushiswapchef/the-sushiswap-project-dd6eb80c6ba2\\"]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2\\"},\\"date_added\\":\\"2020-08-28T00:00:00.000Z\\",\\"twitter_username\\":\\"sushiswap\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 4195,
        name: "FTX Token",
        symbol: "FTT",
        tags: ["marketplace", "derivatives"],
        quote:
          '"{\\"USD\\":{\\"price\\":9.60974207385713,\\"volume_24h\\":22434574.06402839,\\"percent_change_1h\\":1.02629972,\\"percent_change_24h\\":-3.7639515,\\"percent_change_7d\\":-6.162345,\\"percent_change_30d\\":78.20809206,\\"market_cap\\":906649927.2563843,\\"last_updated\\":\\"2021-01-27T20:04:03.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":4195,\\"name\\":\\"FTX Token\\",\\"symbol\\":\\"FTT\\",\\"category\\":\\"token\\",\\"description\\":\\"FTX Token (FTT) is a cryptocurrency and operates on the Binance Chain platform. FTX Token has a current supply of 345,219,293.59097695 with 94,346,957.5237492 in circulation. The last known price of FTX Token is 9.56352569 USD and is down -6.60 over the last 24 hours. It is currently trading on 38 active market(s) with $57,584,119.56 traded over the last 24 hours. More information can be found at https://ftx.com/.\\",\\"slug\\":\\"ftx-token\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/4195.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"marketplace\\",\\"derivatives\\"],\\"tag-names\\":[\\"Marketplace\\",\\"Derivatives\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://ftx.com/\\",\\"https://help.ftx.com/hc/en-us/sections/360004460952-FTX-Token-FTT\\"],\\"twitter\\":[\\"https://twitter.com/FTX_Official\\"],\\"message_board\\":[\\"https://medium.com/@ftx\\",\\"https://blog.ftx.com/\\"],\\"chat\\":[\\"https://t.me/FTX_Official\\"],\\"explorer\\":[\\"https://etherscan.io/token/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9\\",\\"https://explorer.binance.org/asset/FTT-F11\\",\\"https://blockchair.com/ethereum/erc-20/token/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9\\",\\"https://eth.tokenview.com/en/token/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9\\"],\\"reddit\\":[],\\"technical_doc\\":[\\"https://docs.google.com/document/d/1u5MOkENoWP8PGcjuoKqRkNP5Gl1LLRB9JvAHwffQ7ec/view\\"],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1839,\\"name\\":\\"Binance Chain\\",\\"symbol\\":\\"BNB\\",\\"slug\\":\\"binance-coin\\",\\"token_address\\":\\"FTT-F11\\"},\\"date_added\\":\\"2019-07-31T00:00:00.000Z\\",\\"twitter_username\\":\\"FTX_Official\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1437,
        name: "Zcash",
        symbol: "ZEC",
        tags: [
          "mineable",
          "pow",
          "equihash",
          "medium-of-exchange",
          "zero-knowledge-proofs",
          "binance-chain",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":80.35098709612478,\\"volume_24h\\":825953029.4644779,\\"percent_change_1h\\":0.69360349,\\"percent_change_24h\\":-7.24122774,\\"percent_change_7d\\":-15.50531574,\\"percent_change_30d\\":16.58956533,\\"market_cap\\":884089858.3705965,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1437,\\"name\\":\\"Zcash\\",\\"symbol\\":\\"ZEC\\",\\"category\\":\\"coin\\",\\"description\\":\\"Zcash (ZEC) is a cryptocurrency . Users are able to generate ZEC through the process of mining. Zcash has a current supply of 11,004,631.25. The last known price of Zcash is 77.78232461 USD and is down -10.66 over the last 24 hours. It is currently trading on 264 active market(s) with $866,643,842.39 traded over the last 24 hours. More information can be found at https://z.cash/.\\",\\"slug\\":\\"zcash\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1437.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"equihash\\",\\"medium-of-exchange\\",\\"zero-knowledge-proofs\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"Equihash\\",\\"Medium of Exchange\\",\\"Zero Knowledge Proofs\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"https://z.cash/\\"],\\"twitter\\":[\\"https://twitter.com/electriccoinco\\"],\\"message_board\\":[\\"https://forum.z.cash/\\"],\\"chat\\":[],\\"explorer\\":[\\"https://explorer.zcha.in/\\",\\"https://zcash.tokenview.com/\\",\\"https://blockchair.com/zcash\\",\\"https://bscscan.com/token/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb\\"],\\"reddit\\":[],\\"technical_doc\\":[\\"https://github.com/zcash/zips/blob/master/protocol/protocol.pdf\\"],\\"source_code\\":[\\"https://github.com/zcash/zcash\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2016-10-29T00:00:00.000Z\\",\\"twitter_username\\":\\"electriccoinco\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 5805,
        name: "Avalanche",
        symbol: "AVAX",
        tags: ["polychain-capital-portfolio"],
        quote:
          '"{\\"USD\\":{\\"price\\":11.3302630981997,\\"volume_24h\\":99929972.23399498,\\"percent_change_1h\\":0.9333914,\\"percent_change_24h\\":-8.26342958,\\"percent_change_7d\\":-9.00021233,\\"percent_change_30d\\":278.90528705,\\"market_cap\\":871717078.2831331,\\"last_updated\\":\\"2021-01-27T20:04:06.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":5805,\\"name\\":\\"Avalanche\\",\\"symbol\\":\\"AVAX\\",\\"category\\":\\"coin\\",\\"description\\":\\"Avalanche (AVAX) is a cryptocurrency launched in 2020. Avalanche has a current supply of 360,000,000 with 76,937,055.27646953 in circulation. The last known price of Avalanche is 10.93536666 USD and is down -10.41 over the last 24 hours. It is currently trading on 40 active market(s) with $96,868,672.37 traded over the last 24 hours. More information can be found at https://www.avalabs.org/.\\",\\"slug\\":\\"avalanche\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png\\",\\"subreddit\\":\\"Avax\\",\\"notice\\":\\"\\",\\"tags\\":[\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.avalabs.org/\\",\\"https://info.avax.network/#about\\"],\\"twitter\\":[\\"https://twitter.com/AvalancheAVAX\\"],\\"message_board\\":[],\\"chat\\":[\\"https://t.me/avalancheavax\\",\\"https://chat.avalabs.org/\\"],\\"explorer\\":[\\"https://avascan.info/\\",\\"https://explorer.avax.network/\\"],\\"reddit\\":[\\"https://reddit.com/r/Avax\\"],\\"technical_doc\\":[\\"https://files.avalabs.org/papers/consensus.pdf\\"],\\"source_code\\":[\\"https://github.com/ava-labs\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2020-07-13T00:00:00.000Z\\",\\"twitter_username\\":\\"AvalancheAVAX\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 5864,
        name: "yearn.finance",
        symbol: "YFI",
        tags: [
          "defi",
          "yield-farming",
          "yield-aggregator",
          "yearn-partnerships",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":28330.13261448413,\\"volume_24h\\":374167266.66224974,\\"percent_change_1h\\":0.62492556,\\"percent_change_24h\\":-6.09551109,\\"percent_change_7d\\":-14.17419696,\\"percent_change_30d\\":23.37894797,\\"market_cap\\":849019835.6437001,\\"last_updated\\":\\"2021-01-27T20:03:06.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":5864,\\"name\\":\\"yearn.finance\\",\\"symbol\\":\\"YFI\\",\\"category\\":\\"token\\",\\"description\\":\\"yearn.finance (YFI) is a cryptocurrency and operates on the Ethereum platform. yearn.finance has a current supply of 30,000 with 29,968.7914348 in circulation. The last known price of yearn.finance is 27,729.61762681 USD and is down -8.25 over the last 24 hours. It is currently trading on 227 active market(s) with $375,880,862.51 traded over the last 24 hours. More information can be found at https://yearn.finance/.\\",\\"slug\\":\\"yearn-finance\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/5864.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"defi\\",\\"yield-farming\\",\\"yield-aggregator\\",\\"yearn-partnerships\\",\\"three-arrows-capital-portfolio\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"DeFi\\",\\"Yield farming\\",\\"Yield Aggregator\\",\\"Yearn Partnerships\\",\\"Three Arrows Capital Portfolio\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://yearn.finance/\\"],\\"twitter\\":[\\"https://twitter.com/iearnfinance\\"],\\"message_board\\":[\\"https://medium.com/iearn\\"],\\"chat\\":[\\"https://t.me/iearnfinance\\"],\\"explorer\\":[\\"https://etherscan.io/token/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e\\",\\"https://ethplorer.io/address/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e\\"],\\"reddit\\":[],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/iearn-finance\\"],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e\\"},\\"date_added\\":\\"2020-07-18T00:00:00.000Z\\",\\"twitter_username\\":\\"iearnfinance\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 5034,
        name: "Kusama",
        symbol: "KSM",
        tags: ["substrate", "dot-ecosystem"],
        quote:
          '"{\\"USD\\":{\\"price\\":95.8677376197561,\\"volume_24h\\":92112111.96420641,\\"percent_change_1h\\":1.07478724,\\"percent_change_24h\\":-4.73244685,\\"percent_change_7d\\":-7.66740489,\\"percent_change_30d\\":68.38435823,\\"market_cap\\":812009138.167205,\\"last_updated\\":\\"2021-01-27T20:03:08.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":5034,\\"name\\":\\"Kusama\\",\\"symbol\\":\\"KSM\\",\\"category\\":\\"coin\\",\\"description\\":\\"Kusama (KSM) is a cryptocurrency . Kusama has a current supply of 9,651,217.45126206 with 8,470,098.05726206 in circulation. The last known price of Kusama is 95.42868028 USD and is down -5.80 over the last 24 hours. It is currently trading on 57 active market(s) with $91,271,238.14 traded over the last 24 hours. More information can be found at https://kusama.network/.\\",\\"slug\\":\\"kusama\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/5034.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"substrate\\",\\"dot-ecosystem\\"],\\"tag-names\\":[\\"Substrate\\",\\"DOT Ecosystem\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://kusama.network/\\"],\\"twitter\\":[\\"https://twitter.com/kusamanetwork\\"],\\"message_board\\":[\\"https://forum.kusama.network/\\",\\"https://medium.com/polkadot-network/kusama-network-7446706b8f4c\\"],\\"chat\\":[],\\"explorer\\":[\\"https://polkascan.io/pre/kusama-cc3\\",\\"https://kusama.polkastats.io\\"],\\"reddit\\":[],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/kusamanetwork\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2019-12-12T00:00:00.000Z\\",\\"twitter_username\\":\\"kusamanetwork\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1321,
        name: "Ethereum Classic",
        symbol: "ETC",
        tags: ["mineable", "pow", "ethash", "platform", "smart-contracts"],
        quote:
          '"{\\"USD\\":{\\"price\\":6.96628417709489,\\"volume_24h\\":803350168.2047067,\\"percent_change_1h\\":0.57506189,\\"percent_change_24h\\":-5.40231927,\\"percent_change_7d\\":-9.47200175,\\"percent_change_30d\\":16.65305577,\\"market_cap\\":810271494.4094069,\\"last_updated\\":\\"2021-01-27T20:04:04.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1321,\\"name\\":\\"Ethereum Classic\\",\\"symbol\\":\\"ETC\\",\\"category\\":\\"coin\\",\\"description\\":\\"Ethereum Classic (ETC) is a cryptocurrency . Users are able to generate ETC through the process of mining. Ethereum Classic has a current supply of 116,313,299. The last known price of Ethereum Classic is 6.89128365 USD and is down -7.37 over the last 24 hours. It is currently trading on 280 active market(s) with $819,599,829.90 traded over the last 24 hours. More information can be found at https://ethereumclassic.org/.\\",\\"slug\\":\\"ethereum-classic\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png\\",\\"subreddit\\":\\"EthereumClassic\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"ethash\\",\\"platform\\",\\"smart-contracts\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"Ethash\\",\\"Platform\\",\\"Smart Contracts\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://ethereumclassic.org/\\"],\\"twitter\\":[\\"https://twitter.com/eth_classic\\"],\\"message_board\\":[\\"https://forum.ethereumclassic.org/\\"],\\"chat\\":[\\"https://discord.gg/HW4GckH\\",\\"https://telegram.me/ethclassic\\"],\\"explorer\\":[\\"https://blockscout.com/etc/mainnet/\\",\\"https://expedition.dev/?network=mainnet\\",\\"https://etc.tokenview.com/en\\",\\"https://etcblockexplorer.com/home\\"],\\"reddit\\":[\\"https://reddit.com/r/EthereumClassic\\"],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/ethereumclassic\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=1559630.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2016-07-24T00:00:00.000Z\\",\\"twitter_username\\":\\"eth_classic\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 6892,
        name: "Elrond",
        symbol: "EGLD",
        tags: null,
        quote:
          '"{\\"USD\\":{\\"price\\":47.34680830197387,\\"volume_24h\\":74654452.18153894,\\"percent_change_1h\\":-0.64771235,\\"percent_change_24h\\":-3.68816248,\\"percent_change_7d\\":19.9410964,\\"percent_change_30d\\":86.59174785,\\"market_cap\\":794190690.534861,\\"last_updated\\":\\"2021-01-27T20:03:06.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":6892,\\"name\\":\\"Elrond\\",\\"symbol\\":\\"EGLD\\",\\"category\\":\\"coin\\",\\"description\\":\\"Elrond (EGLD) is a cryptocurrency . Elrond has a current supply of 21,080,742 with 16,773,901.32550395 in circulation. The last known price of Elrond is 55.06241962 USD and is up 13.35 over the last 24 hours. It is currently trading on 28 active market(s) with $143,655,230.13 traded over the last 24 hours. More information can be found at https://elrond.com/.\\",\\"slug\\":\\"elrond-egld\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/6892.png\\",\\"subreddit\\":\\"elrondnetwork\\",\\"notice\\":\\"This page refers to the native Elrond currency called eGold. The old ERD currency underwent a redenomination of 1000 ERD:1 eGLD, and name change from ERD to eGLD, which is short for eGold. The new eGLD is 1000x larger than the old ERD. There is no difference between eGLD and ERD except for their name and denomination. See [Elrond\'s blog post](https://elrond.com/blog/the-elrond-token-swap-begins-on-the-3rd-of-september/) for more information.\\",\\"tags\\":null,\\"tag-names\\":null,\\"tag-groups\\":null,\\"urls\\":{\\"website\\":[\\"https://elrond.com/\\",\\"https://elrond.com/blog\\"],\\"twitter\\":[\\"https://twitter.com/elrondnetwork\\"],\\"message_board\\":[\\"https://elrond.com/blog/\\"],\\"chat\\":[\\"https://t.me/ElrondNetwork\\"],\\"explorer\\":[\\"https://explorer.elrond.com/\\"],\\"reddit\\":[\\"https://reddit.com/r/elrondnetwork\\"],\\"technical_doc\\":[\\"https://elrond.com/assets/files/elrond-whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/ElrondNetwork\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=5173310\\"]},\\"platform\\":null,\\"date_added\\":\\"2020-09-04T00:00:00.000Z\\",\\"twitter_username\\":\\"elrondnetwork\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 1168,
        name: "Decred",
        symbol: "DCR",
        tags: [
          "mineable",
          "hybrid-pow-pos",
          "blake256",
          "medium-of-exchange",
          "store-of-value",
          "privacy",
          "dao",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":59.86554044316815,\\"volume_24h\\":23576467.75009815,\\"percent_change_1h\\":0.19972811,\\"percent_change_24h\\":5.86164045,\\"percent_change_7d\\":4.1898596,\\"percent_change_30d\\":51.45457764,\\"market_cap\\":750389154.8281032,\\"last_updated\\":\\"2021-01-27T20:04:03.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":1168,\\"name\\":\\"Decred\\",\\"symbol\\":\\"DCR\\",\\"category\\":\\"coin\\",\\"description\\":\\"Decred (DCR) is a cryptocurrency . Users are able to generate DCR through the process of mining. Decred has a current supply of 12,535,546.04307471. The last known price of Decred is 60.34752542 USD and is up 4.58 over the last 24 hours. It is currently trading on 54 active market(s) with $28,126,018.04 traded over the last 24 hours. More information can be found at https://www.decred.org/.\\",\\"slug\\":\\"decred\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1168.png\\",\\"subreddit\\":\\"decred\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"hybrid-pow-pos\\",\\"blake256\\",\\"medium-of-exchange\\",\\"store-of-value\\",\\"privacy\\",\\"dao\\"],\\"tag-names\\":[\\"Mineable\\",\\"Hybrid - PoW & PoS\\",\\"BLAKE256\\",\\"Medium of Exchange\\",\\"Store of Value\\",\\"Privacy\\",\\"DAO\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.decred.org/\\",\\"https://proposals.decred.org/\\"],\\"twitter\\":[\\"https://twitter.com/decredproject\\"],\\"message_board\\":[\\"https://medium.com/decred\\",\\"https://forum.decred.org/\\"],\\"chat\\":[\\"https://t.me/decred\\",\\"https://discordapp.com/invite/GJ2GXfz\\"],\\"explorer\\":[\\"https://mainnet.decred.org/\\",\\"https://explorer.dcrdata.org/\\",\\"https://stats.decred.org/\\",\\"https://dcr.tokenview.com/en/\\",\\"https://explore.stakey.net/\\"],\\"reddit\\":[\\"https://reddit.com/r/decred\\"],\\"technical_doc\\":[\\"https://docs.decred.org/\\"],\\"source_code\\":[\\"https://github.com/decred\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=1290358.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2016-02-10T00:00:00.000Z\\",\\"twitter_username\\":\\"decredproject\\",\\"is_hidden\\":0}"',
      },
      {
        cmcId: 2469,
        name: "Zilliqa",
        symbol: "ZIL",
        tags: [
          "mineable",
          "platform",
          "payments",
          "polychain-capital-portfolio",
        ],
        quote:
          '"{\\"USD\\":{\\"price\\":0.0632189444048,\\"volume_24h\\":81797485.48607329,\\"percent_change_1h\\":0.62891904,\\"percent_change_24h\\":-6.92926332,\\"percent_change_7d\\":-12.92949602,\\"percent_change_30d\\":-27.27047301,\\"market_cap\\":688039705.5148342,\\"last_updated\\":\\"2021-01-27T20:04:04.000Z\\"}}"',
        assetDetails:
          '"{\\"id\\":2469,\\"name\\":\\"Zilliqa\\",\\"symbol\\":\\"ZIL\\",\\"category\\":\\"coin\\",\\"description\\":\\"Zilliqa (ZIL) is a cryptocurrency . Users are able to generate ZIL through the process of mining. Zilliqa has a current supply of 14,175,830,767.273481 with 10,884,363,614.273481 in circulation. The last known price of Zilliqa is 0.06253578 USD and is down -7.82 over the last 24 hours. It is currently trading on 109 active market(s) with $78,738,830.72 traded over the last 24 hours. More information can be found at https://www.zilliqa.com/.\\",\\"slug\\":\\"zilliqa\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2469.png\\",\\"subreddit\\":\\"zilliqa\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"platform\\",\\"payments\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Mineable\\",\\"Platform\\",\\"Payments\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"OTHER\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.zilliqa.com/\\"],\\"twitter\\":[\\"https://twitter.com/zilliqa\\"],\\"message_board\\":[],\\"chat\\":[\\"https://t.me/zilliqachat\\"],\\"explorer\\":[\\"https://viewblock.io/zilliqa\\"],\\"reddit\\":[\\"https://reddit.com/r/zilliqa\\"],\\"technical_doc\\":[\\"https://docs.zilliqa.com/whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/Zilliqa/Zilliqa\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2018-01-25T00:00:00.000Z\\",\\"twitter_username\\":\\"zilliqa\\",\\"is_hidden\\":0}"',
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Assets", null, {});
  },
};

// [
//   {
//     cmcId: 1,
//     name: "Bitcoin",
//     symbol: "BTC",
//     tags: [
//       "mineable",
//       "pow",
//       "sha-256",
//       "store-of-value",
//       "state-channels",
//       "coinbase-ventures-portfolio",
//       "three-arrows-capital-portfolio",
//       "polychain-capital-portfolio",
//     ],
//     quote:
//       '"{\\"USD\\":{\\"price\\":30767.063175967978,\\"volume_24h\\":58548933425.68656,\\"percent_change_1h\\":0.84818206,\\"percent_change_24h\\":-4.78060783,\\"percent_change_7d\\":-12.58909059,\\"percent_change_30d\\":13.76310224,\\"market_cap\\":572638887360.8542,\\"last_updated\\":\\"2021-01-27T20:03:02.000Z\\"}}"',
//     assetDetails:
//       '"{\\"id\\":1,\\"name\\":\\"Bitcoin\\",\\"symbol\\":\\"BTC\\",\\"category\\":\\"coin\\",\\"description\\":\\"Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,612,225. The last known price of Bitcoin is 30,634.74014009 USD and is down -4.45 over the last 24 hours. It is currently trading on 9324 active market(s) with $61,110,170,950.60 traded over the last 24 hours. More information can be found at https://bitcoin.org/.\\",\\"slug\\":\\"bitcoin\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png\\",\\"subreddit\\":\\"bitcoin\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"sha-256\\",\\"store-of-value\\",\\"state-channels\\",\\"coinbase-ventures-portfolio\\",\\"three-arrows-capital-portfolio\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"SHA-256\\",\\"Store of Value\\",\\"State channels\\",\\"Coinbase Ventures Portfolio\\",\\"Three Arrows Capital Portfolio\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://bitcoin.org/\\"],\\"twitter\\":[],\\"message_board\\":[\\"https://bitcointalk.org\\"],\\"chat\\":[],\\"explorer\\":[\\"https://blockchain.coinmarketcap.com/chain/bitcoin\\",\\"https://blockchain.info/\\",\\"https://live.blockcypher.com/btc/\\",\\"https://blockchair.com/bitcoin\\",\\"https://explorer.viabtc.com/btc\\"],\\"reddit\\":[\\"https://reddit.com/r/bitcoin\\"],\\"technical_doc\\":[\\"https://bitcoin.org/bitcoin.pdf\\"],\\"source_code\\":[\\"https://github.com/bitcoin/\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2013-04-28T00:00:00.000Z\\",\\"twitter_username\\":\\"\\",\\"is_hidden\\":0}"',
//   },
//   {
//     cmcId: 1027,
//     name: "Ethereum",
//     symbol: "ETH",
//     tags: [
//       "mineable",
//       "pow",
//       "smart-contracts",
//       "coinbase-ventures-portfolio",
//       "three-arrows-capital-portfolio",
//       "polychain-capital-portfolio",
//     ],
//     quote:
//       '"{\\"USD\\":{\\"price\\":1269.2821865701787,\\"volume_24h\\":38100865549.33415,\\"percent_change_1h\\":0.93011906,\\"percent_change_24h\\":-5.20533805,\\"percent_change_7d\\":-3.83698003,\\"percent_change_30d\\":72.06434292,\\"market_cap\\":145240312294.3014,\\"last_updated\\":\\"2021-01-27T20:03:02.000Z\\"}}"',
//     assetDetails:
//       '"{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"category\\":\\"coin\\",\\"description\\":\\"Ethereum (ETH) is a cryptocurrency . Users are able to generate ETH through the process of mining. Ethereum has a current supply of 114,429,344.8115. The last known price of Ethereum is 1,254.65923307 USD and is down -6.26 over the last 24 hours. It is currently trading on 5679 active market(s) with $38,838,947,286.78 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.\\",\\"slug\\":\\"ethereum\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png\\",\\"subreddit\\":\\"ethereum\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"pow\\",\\"smart-contracts\\",\\"coinbase-ventures-portfolio\\",\\"three-arrows-capital-portfolio\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Mineable\\",\\"PoW\\",\\"Smart Contracts\\",\\"Coinbase Ventures Portfolio\\",\\"Three Arrows Capital Portfolio\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://www.ethereum.org/\\"],\\"twitter\\":[\\"https://twitter.com/ethereum\\"],\\"message_board\\":[\\"https://forum.ethereum.org/\\"],\\"chat\\":[\\"https://gitter.im/orgs/ethereum/rooms\\"],\\"explorer\\":[\\"https://etherscan.io/\\",\\"https://ethplorer.io/\\",\\"https://blockchair.com/ethereum\\",\\"https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8\\",\\"https://eth.tokenview.com/en/blocklist\\"],\\"reddit\\":[\\"https://reddit.com/r/ethereum\\"],\\"technical_doc\\":[\\"https://github.com/ethereum/wiki/wiki/White-Paper\\"],\\"source_code\\":[\\"https://github.com/ethereum\\"],\\"announcement\\":[\\"https://bitcointalk.org/index.php?topic=428589.0\\"]},\\"platform\\":null,\\"date_added\\":\\"2015-08-07T00:00:00.000Z\\",\\"twitter_username\\":\\"ethereum\\",\\"is_hidden\\":0}"',
//   },
//   {
//     cmcId: 825,
//     name: "Tether",
//     symbol: "USDT",
//     tags: [
//       "store-of-value",
//       "payments",
//       "stablecoin",
//       "stablecoin-asset-backed",
//     ],
//     quote:
//       '"{\\"USD\\":{\\"price\\":1.00157464163506,\\"volume_24h\\":100402167545.16182,\\"percent_change_1h\\":0.05431465,\\"percent_change_24h\\":0.021877,\\"percent_change_7d\\":0.13689465,\\"percent_change_30d\\":0.27144426,\\"market_cap\\":25236562364.524704,\\"last_updated\\":\\"2021-01-27T20:03:07.000Z\\"}}"',
//     assetDetails:
//       '"{\\"id\\":825,\\"name\\":\\"Tether\\",\\"symbol\\":\\"USDT\\",\\"category\\":\\"token\\",\\"description\\":\\"Tether (USDT) is a cryptocurrency launched in 2015and operates on the Ethereum platform. Tether has a current supply of 25,910,299,178.627888 with 25,196,886,298.285553 in circulation. The last known price of Tether is 1.00212862 USD and is up 0.12 over the last 24 hours. It is currently trading on 9989 active market(s) with $103,919,780,086.98 traded over the last 24 hours. More information can be found at https://tether.to.\\",\\"slug\\":\\"tether\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/825.png\\",\\"subreddit\\":\\"\\",\\"notice\\":\\"\\",\\"tags\\":[\\"store-of-value\\",\\"payments\\",\\"stablecoin\\",\\"stablecoin-asset-backed\\"],\\"tag-names\\":[\\"Store of Value\\",\\"Payments\\",\\"Stablecoin\\",\\"Stablecoin - Asset-Backed\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://tether.to\\"],\\"twitter\\":[\\"https://twitter.com/tether_to\\"],\\"message_board\\":[],\\"chat\\":[],\\"explorer\\":[\\"https://www.omniexplorer.info/asset/31\\",\\"https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7\\",\\"https://algoexplorer.io/asset/312769\\",\\"https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t\\",\\"https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955\\"],\\"reddit\\":[],\\"technical_doc\\":[\\"https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf\\"],\\"source_code\\":[],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0xdac17f958d2ee523a2206206994597c13d831ec7\\"},\\"date_added\\":\\"2015-02-25T00:00:00.000Z\\",\\"twitter_username\\":\\"tether_to\\",\\"is_hidden\\":0}"',
//   },
//   {
//     cmcId: 6636,
//     name: "Polkadot",
//     symbol: "DOT",
//     tags: [
//       "substrate",
//       "polkadot",
//       "binance-chain",
//       "dot-ecosystem",
//       "three-arrows-capital-portfolio",
//       "polychain-capital-portfolio",
//     ],
//     quote:
//       '"{\\"USD\\":{\\"price\\":15.44300941105803,\\"volume_24h\\":3008728201.502825,\\"percent_change_1h\\":0.19939654,\\"percent_change_24h\\":-9.04342665,\\"percent_change_7d\\":-6.95905711,\\"percent_change_30d\\":152.1038873,\\"market_cap\\":13974895560.992981,\\"last_updated\\":\\"2021-01-27T20:04:05.000Z\\"}}"',
//     assetDetails:
//       '"{\\"id\\":6636,\\"name\\":\\"Polkadot\\",\\"symbol\\":\\"DOT\\",\\"category\\":\\"coin\\",\\"description\\":\\"Polkadot (DOT) is a cryptocurrency . Polkadot has a current supply of 1,038,847,485.4081978 with 904,961,063.9889609 in circulation. The last known price of Polkadot is 15.53634279 USD and is down -7.40 over the last 24 hours. It is currently trading on 118 active market(s) with $3,123,223,597.91 traded over the last 24 hours. More information can be found at https://polkadot.network/.\\",\\"slug\\":\\"polkadot-new\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png\\",\\"subreddit\\":\\"dot\\",\\"notice\\":\\"\\",\\"tags\\":[\\"substrate\\",\\"polkadot\\",\\"binance-chain\\",\\"dot-ecosystem\\",\\"three-arrows-capital-portfolio\\",\\"polychain-capital-portfolio\\"],\\"tag-names\\":[\\"Substrate\\",\\"Polkadot\\",\\"Binance Chain\\",\\"DOT Ecosystem\\",\\"Three Arrows Capital Portfolio\\",\\"Polychain Capital Portfolio\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PLATFORM\\",\\"PLATFORM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://polkadot.network/\\"],\\"twitter\\":[\\"https://twitter.com/Polkadot\\"],\\"message_board\\":[\\"https://medium.com/polkadot-network\\"],\\"chat\\":[\\"https://t.me/PolkadotOfficial\\"],\\"explorer\\":[\\"http://polkascan.io/\\",\\"https://polkadot-cc1.subscan.io/\\",\\"https://polkastats.io\\",\\"https://hubble.figment.io/polkadot/chains/polkadot\\",\\"https://bscscan.com/token/0x7083609fce4d1d8dc0c979aab8c869ea2c873402\\"],\\"reddit\\":[\\"https://reddit.com/r/dot\\"],\\"technical_doc\\":[],\\"source_code\\":[\\"https://github.com/w3f\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2020-08-19T00:00:00.000Z\\",\\"twitter_username\\":\\"Polkadot\\",\\"is_hidden\\":0}"',
//   },
//   {
//     cmcId: 52,
//     name: "XRP",
//     symbol: "XRP",
//     tags: ["medium-of-exchange", "enterprise-solutions", "binance-chain"],
//     quote:
//       '"{\\"USD\\":{\\"price\\":0.2530103243201,\\"volume_24h\\":2840769530.5531983,\\"percent_change_1h\\":0.5387904,\\"percent_change_24h\\":-5.4850932,\\"percent_change_7d\\":-13.15944612,\\"percent_change_30d\\":-11.01917823,\\"market_cap\\":11487688011.64551,\\"last_updated\\":\\"2021-01-27T20:04:02.000Z\\"}}"',
//     assetDetails:
//       '"{\\"id\\":52,\\"name\\":\\"XRP\\",\\"symbol\\":\\"XRP\\",\\"category\\":\\"coin\\",\\"description\\":\\"XRP (XRP) is a cryptocurrency . XRP has a current supply of 99,990,831,162 with 45,404,028,640 in circulation. The last known price of XRP is 0.25382243 USD and is down -5.00 over the last 24 hours. It is currently trading on 651 active market(s) with $2,928,055,887.90 traded over the last 24 hours. More information can be found at https://ripple.com/xrp/.\\",\\"slug\\":\\"xrp\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/52.png\\",\\"subreddit\\":\\"ripple\\",\\"notice\\":\\"\\",\\"tags\\":[\\"medium-of-exchange\\",\\"enterprise-solutions\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Medium of Exchange\\",\\"Enterprise solutions\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"https://ripple.com/xrp/\\"],\\"twitter\\":[\\"https://twitter.com/Ripple\\"],\\"message_board\\":[\\"http://www.xrpchat.com/\\"],\\"chat\\":[\\"https://t.me/Ripple\\"],\\"explorer\\":[\\"https://xrpcharts.ripple.com/#/graph/\\",\\"https://bithomp.com/explorer/\\",\\"https://xrpscan.com/\\",\\"https://blockchair.com/ripple\\",\\"https://bscscan.com/token/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe\\"],\\"reddit\\":[\\"https://reddit.com/r/ripple\\"],\\"technical_doc\\":[\\"https://ripple.com/files/ripple_consensus_whitepaper.pdf\\"],\\"source_code\\":[\\"https://github.com/ripple\\"],\\"announcement\\":[]},\\"platform\\":null,\\"date_added\\":\\"2013-08-04T00:00:00.000Z\\",\\"twitter_username\\":\\"Ripple\\",\\"is_hidden\\":0}"',
//   },
//   {
//     cmcId: 2010,
//     name: "Cardano",
//     symbol: "ADA",
//     tags: [
//       "mineable",
//       "dpos",
//       "pos",
//       "platform",
//       "research",
//       "smart-contracts",
//       "staking",
//       "binance-chain",
//     ],
//     quote:
//       '"{\\"USD\\":{\\"price\\":0.31570657561668,\\"volume_24h\\":2527271675.141128,\\"percent_change_1h\\":0.15145235,\\"percent_change_24h\\":-8.22412811,\\"percent_change_7d\\":-11.43577569,\\"percent_change_30d\\":85.40863574,\\"market_cap\\":9822415986.515194,\\"last_updated\\":\\"2021-01-27T20:03:13.000Z\\"}}"',
//     assetDetails:
//       '"{\\"id\\":2010,\\"name\\":\\"Cardano\\",\\"symbol\\":\\"ADA\\",\\"category\\":\\"coin\\",\\"description\\":\\"Cardano (ADA) is a cryptocurrency . Users are able to generate ADA through the process of mining. Cardano has a current supply of 45,000,000,000 with 31,112,484,646 in circulation. The last known price of Cardano is 0.31665785 USD and is down -7.59 over the last 24 hours. It is currently trading on 217 active market(s) with $2,616,966,737.57 traded over the last 24 hours. More information can be found at https://www.cardano.org.\\",\\"slug\\":\\"cardano\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png\\",\\"subreddit\\":\\"cardano\\",\\"notice\\":\\"\\",\\"tags\\":[\\"mineable\\",\\"dpos\\",\\"pos\\",\\"platform\\",\\"research\\",\\"smart-contracts\\",\\"staking\\",\\"binance-chain\\"],\\"tag-names\\":[\\"Mineable\\",\\"DPoS\\",\\"PoS\\",\\"Platform\\",\\"Research\\",\\"Smart Contracts\\",\\"Staking\\",\\"Binance Chain\\"],\\"tag-groups\\":[\\"OTHER\\",\\"CONSENSUS_ALGORITHM\\",\\"CONSENSUS_ALGORITHM\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\"],\\"urls\\":{\\"website\\":[\\"https://www.cardano.org\\"],\\"twitter\\":[\\"https://twitter.com/cardano\\"],\\"message_board\\":[\\"https://medium.com/feed/cardanorss\\",\\"https://forum.cardano.org/\\"],\\"chat\\":[\\"https://t.me/Cardano\\"],\\"explorer\\":[\\"https://cardanoexplorer.com/\\",\\"https://cardanoscan.io/\\",\\"https://blockchair.com/cardano\\",\\"https://bscscan.com/token/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47\\",\\"https://ada.tokenview.com/en\\"],\\"reddit\\":[\\"https://reddit.com/r/cardano\\"],\\"technical_doc\\":[\\"https://docs.cardano.org/en/latest/\\"],\\"source_code\\":[\\"https://cardanoupdates.com/\\"],\\"announcement\\":[\\"https://t.me/CardanoAnnouncements\\"]},\\"platform\\":null,\\"date_added\\":\\"2017-10-01T00:00:00.000Z\\",\\"twitter_username\\":\\"cardano\\",\\"is_hidden\\":0}"',
//   },
//   {
//     cmcId: 1975,
//     name: "Chainlink",
//     symbol: "LINK",
//     tags: [
//       "platform",
//       "defi",
//       "oracles",
//       "smart-contracts",
//       "substrate",
//       "polkadot",
//       "dot-ecosystem",
//     ],
//     quote:
//       '"{\\"USD\\":{\\"price\\":21.06883292912043,\\"volume_24h\\":3005218439.8017135,\\"percent_change_1h\\":1.03603054,\\"percent_change_24h\\":-8.54219324,\\"percent_change_7d\\":1.62748049,\\"percent_change_30d\\":67.28773349,\\"market_cap\\":8480406596.891681,\\"last_updated\\":\\"2021-01-27T20:03:10.000Z\\"}}"',
//     assetDetails:
//       '"{\\"id\\":1975,\\"name\\":\\"Chainlink\\",\\"symbol\\":\\"LINK\\",\\"category\\":\\"token\\",\\"description\\":\\"Chainlink (LINK) is a cryptocurrency and operates on the Ethereum platform. Chainlink has a current supply of 1,000,000,000 with 402,509,556.4344444 in circulation. The last known price of Chainlink is 20.95606053 USD and is down -7.74 over the last 24 hours. It is currently trading on 435 active market(s) with $3,060,936,835.30 traded over the last 24 hours. More information can be found at https://chain.link/.\\",\\"slug\\":\\"chainlink\\",\\"logo\\":\\"https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png\\",\\"subreddit\\":\\"chainlink\\",\\"notice\\":\\"\\",\\"tags\\":[\\"platform\\",\\"defi\\",\\"oracles\\",\\"smart-contracts\\",\\"substrate\\",\\"polkadot\\",\\"dot-ecosystem\\"],\\"tag-names\\":[\\"Platform\\",\\"DeFi\\",\\"Oracles\\",\\"Smart Contracts\\",\\"Substrate\\",\\"Polkadot\\",\\"DOT Ecosystem\\"],\\"tag-groups\\":[\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PROPERTY\\",\\"PLATFORM\\",\\"PROPERTY\\"],\\"urls\\":{\\"website\\":[\\"https://chain.link/\\",\\"https://smartcontract.com/\\"],\\"twitter\\":[\\"https://twitter.com/chainlink\\"],\\"message_board\\":[\\"https://medium.com/chainlink\\",\\"https://blog.chain.link/\\"],\\"chat\\":[],\\"explorer\\":[\\"https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca\\",\\"https://ethplorer.io/address/0x514910771af9ca656af840dff83e8264ecf986ca\\",\\"https://blockchair.com/ethereum/erc-20/token/0x514910771af9ca656af840dff83e8264ecf986ca\\",\\"https://eth.tokenview.com/en/token/0x514910771af9ca656af840dff83e8264ecf986ca\\",\\"https://bscscan.com/token/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd\\"],\\"reddit\\":[\\"https://reddit.com/r/chainlink\\"],\\"technical_doc\\":[\\"https://link.smartcontract.com/whitepaper\\"],\\"source_code\\":[\\"https://github.com/smartcontractkit/chainlink\\"],\\"announcement\\":[]},\\"platform\\":{\\"id\\":1027,\\"name\\":\\"Ethereum\\",\\"symbol\\":\\"ETH\\",\\"slug\\":\\"ethereum\\",\\"token_address\\":\\"0x514910771af9ca656af840dff83e8264ecf986ca\\"},\\"date_added\\":\\"2017-09-20T00:00:00.000Z\\",\\"twitter_username\\":\\"chainlink\\",\\"is_hidden\\":0}"',
//   },
// ]

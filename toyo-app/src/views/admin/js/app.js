MetaMask = {
    isMetaMaskInstalled: function () {
        if (window.ethereum == undefined) {
            return false;
        } else {
            return true;
        }
    },

    connectWallet: function () {
        App.showConnectedWallet(false);
        ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((account) => {
                App.showConnectedWallet(true);
                App.account = account.toString();
                $('.account .wallet-address').html(account);
            }
            )
            .catch((error) => {
                if (error.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    console.log('Please connect to MetaMask.');
                    App.showConnectedWallet(false);
                    App.showErrorAlert('Please connect to MetaMask.');
                    App.hideLoadingText();
                    return;
                } else {
                    App.showErrorAlert(error.message);
                }
            });
    },

    switchNetwork: function () {
        ethereum
            .request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: App.validNetwork.ChainId }],
            }).catch((switchError) => {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    MetaMask.addNetwork();
                }
            })
    },

    addNetwork: function () {
        ethereum
            .request({
                method: 'wallet_addEthereumChain',
                params:
                    [
                        {
                            chainId: App.validNetwork.ChainId,
                            chainName: App.validNetwork.ChainName,
                            nativeCurrency: {
                                name: 'MATIC',
                                symbol: 'MATIC',
                                decimals: 18
                            },
                            rpcUrls: [App.validNetwork.Rpc]
                        }
                    ],
            });
    },

    addToWallet: function () {
        ethereum
            .request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: Contracts.nftTokenAddress,
                        symbol: Contracts.nftTokenContractSymbol,
                        decimals: 0,
                        image: 'https://ipfs.io/ipfs/QmbCZgCm5KkP7KSWLfR67nd4NR1Kt56j6f85ZcGZ4Ur7vS',
                    },
                },
            })
            .then((success) => {
                if (success) {
                    console.log('[wallet_watchAsset] NFT added to wallet!')
                } else {
                    console.log('[wallet_watchAsset] Something went wrong.')
                }
            })
            .catch(console.error)
    },
},

    Networks = {
        Ganache: {
            ChainId: '0x539',
            ChainName: 'Ganache',
            Rpc: 'http://127.0.0.1:8545',
            MaticUsdPriceFeed: '0xab594600376ec9fd91f8e885dadf0ce036862de0'
        },
        PolygonMumbai: {
            ChainId: '0x13881',
            ChainName: 'Polygon Mumbai',
            Rpc: 'https://rpc-mumbai.maticvigil.com',
            MaticUsdPriceFeed: '0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada'
        },
        PolygonMainnet: {
            ChainId: '0x89',
            ChainName: 'Polygon Mainnet',
            Rpc: 'https://rpc-mainnet.maticvigil.com',
            MaticUsdPriceFeed: '0xab594600376ec9fd91f8e885dadf0ce036862de0'
        }
    },

    Contracts = {
        nftTokenAddress: '0x6f4F3141E73e8ABf80B1c728E39BA5264b576F2C',
        nftTokenContractSymbol: 'TOYF9',
        nftTokenCrowdsaleAddress: '0xfDeacfdB76d3d8C6B62A9A518fdFeCE5Ef61851A'
    },

    App = {
        captchaWidget: null,
        web3Provider: null,
        contracts: {},
        account: '0x0',
        loading: false,
        tokensMinted: 0,
        validNetwork: Networks.PolygonMumbai, // [see: https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents]
        //validNetwork: Networks.Ganache,

        tokenRate: {},
        tokenQuantity: {},
        tokenPurchaseCaps: {},
        tokenTypesForSale: ["1", "2"],

        hideMetaMaskButtons() {
            $('#MetaMaskButtons').hide();
        },

        showMetaMaskButtons() {
            $('#MetaMaskButtons').show();
        },

        showConnectedWallet: function (isConnected) {
            if (isConnected) {
                $("#connectButton").hide();
                $("#connectedButton").show();
            } else {
                $("#connectButton").show();
                $("#connectedButton").hide();
            }
        },

        showSuccessAlert(message) {
            $('#successAlert').html(message);
            $('#successAlert').show();
            $('#dangerAlert').hide();
        },

        resetAlerts() {
            $('#successAlert').html('');
            $('#dangerAlert').html('');
            $('#successAlert').hide();
            $('#dangerAlert').hide();
        },

        showErrorAlert(message) {
            $('#dangerAlert').html(message);
            $('#dangerAlert').show();
            $('#successAlert').hide();
        },

        disableBuyButtons() {
            $.each(App.tokenTypesForSale, function (index, typeId) {
                App.disableBuyButton(typeId);
            });
        },

        enableBuyButtons() {
            $.each(App.tokenTypesForSale, function (index, typeId) {
                App.enableBuyButton(typeId);
            });
        },

        enableBuyButton(tokenType) {
            if (!App.captchaResponse) return;

            var quantity = $('[data-token-type="' + tokenType + '"] .quantity');
            var maxPurchaseCap = App.tokenPurchaseCaps[tokenType];
            var canEnable = !(quantity > maxPurchaseCap || quantity <= 0);

            if (canEnable) {
                $('[data-token-type="' + tokenType + '"] .buy').prop('disabled', false);
            }
        },

        disableBuyButton(tokenType) {
            $('[data-token-type="' + tokenType + '"] .buy').prop('disabled', true);
        },

        init: function () {
            console.log("App init...");

            $.ajaxSetup({ cache: false });

            $.each(App.tokenTypesForSale, function (index, typeId) {
                App.initTokenType(typeId);
            });

            return App.initWeb3();
        },

        initTokenType(typeId) {
            console.log('App initTokenType ' + typeId);

            var type = $('[data-token-type="' + typeId + '"]');

            var quantityInput = type.find('.quantity');
            var priceContainer = type.find('.price-container');
            var priceMatic = type.find('.price-matic');

            quantityInput.val(1);
            App.tokenQuantity[typeId] = new Web3.utils.BN(1);

            quantityInput.change(function () {
                var quantity = quantityInput.val();

                if (quantity > App.tokenPurchaseCaps[typeId] || quantity <= 0) {
                    priceContainer.hide();
                    App.disableBuyButton(typeId);
                } else {
                    priceContainer.show();
                    App.enableBuyButton(typeId);
                }

                App.tokenQuantity[typeId] = new web3.utils.BN(quantity);

                priceMatic.html(web3.utils.fromWei(App.tokenRate[typeId].mul(App.tokenQuantity[typeId]), "ether"));

                App.recalculateUsdPrice(typeId);
            });
        },

        refreshMaticUsdPrice() {
            const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
            var addr = App.validNetwork.MaticUsdPriceFeed;
            var priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);
            if (App.validNetwork.ChainId == Networks.Ganache.ChainId) {
                const infura = new Web3("https://polygon-mainnet.infura.io/v3/39180531508b4b659780ef7a36426a86");
                addr = Networks.PolygonMainnet.MaticUsdPriceFeed;
                priceFeed = new infura.eth.Contract(aggregatorV3InterfaceABI, addr);
            }
            priceFeed.methods.latestRoundData().call()
                .then((roundData) => {
                    App.usdRate = roundData.answer / 100000000;
                    App.recalculateUsdPrices();
                });
        },

        recalculateUsdPrices: function () {
            $.each(App.tokenTypesForSale, function (index, typeId) {
                App.recalculateUsdPrice[typeId];
            });
        },

        recalculateUsdPrice: function (typeId) {
            if (App.tokenRate[typeId]) {
                var quantity = App.tokenQuantity[typeId].toNumber();
                var etherPrice = web3.utils.fromWei(App.tokenRate[typeId], "ether");
                var total = quantity * (etherPrice * App.usdRate);

                var tokenType = $('[data-token-type="' + typeId + '"]');
                var priceDolar = tokenType.find('.price-dolar');

                priceDolar.html(total.toFixed(2));
            }
        },

        initWeb3: function () {

            console.log("App initWeb3...");

            if (!MetaMask.isMetaMaskInstalled()) {
                App.showErrorAlert("You must install Metamask into your browser: https://metamask.io/download.html");
                App.hideLoadingText();
                App.hideMetaMaskButtons();
                return;
            }

            ethereum.on('chainChanged', (_chainId) => {
                window.location.reload();
            });

            ethereum.on('accountsChanged', (accounts) => {
                window.location.reload();
            });

            if (typeof web3 !== 'undefined') {
                // If a web3 instance is already provided by Meta Mask.
                App.web3Provider = ethereum;
                web3 = new Web3(ethereum);
            } else {
                // Specify default instance if no web3 instance provided
                App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
                web3 = new Web3(App.web3Provider);
            };

            MetaMask.connectWallet();

            ethereum
                .request({ method: 'eth_chainId' })
                .then((chainId) => {
                    console.log('Connected to chainId: ' + chainId);
                    if (chainId != App.validNetwork.ChainId) {
                        App.showErrorAlert('Wrong network!');
                        MetaMask.switchNetwork();
                        App.hideLoading();
                        $('#content').hide();
                        return;
                    }
                    return App.initContracts();
                }
                );
        },

        initContracts: function () {
            App.refreshMaticUsdPrice();

            $.getJSON("contracts/NftTokenCrowdsale.json", function (nftTokenCrowdsale) {
                App.contracts.NftTokenCrowdsale = TruffleContract(nftTokenCrowdsale);
                App.contracts.NftTokenCrowdsale.setProvider(App.web3Provider);

                if (App.validNetwork.ChainId == Networks.Ganache.ChainId) {
                    Contracts.nftTokenCrowdsalePromise = App.contracts.NftTokenCrowdsale.deployed();
                } else {
                    Contracts.nftTokenCrowdsalePromise = App.contracts.NftTokenCrowdsale
                        .at(Contracts.nftTokenCrowdsaleAddress);
                }

                Contracts.nftTokenCrowdsalePromise
                    .then(function (instance) {
                        Contracts.nftTokenCrowdsaleInstance = instance;
                        Contracts.nftTokenCrowdsaleAddress = instance.address;
                    });

                $('.nft-factory .wallet-address').html(Contracts.nftTokenCrowdsaleAddress);
                $('.nft-factory a').attr('href', 'https://mumbai.polygonscan.com/address/' + Contracts.nftTokenCrowdsaleAddress);

            }).done(function () {
                $.getJSON("contracts/NftToken.json", function (nftToken) {
                    App.contracts.NftToken = TruffleContract(nftToken);
                    App.contracts.NftToken.setProvider(App.web3Provider);

                    if (App.validNetwork.ChainId == Networks.Ganache.ChainId) {
                        Contracts.nftTokenPromise = App.contracts.NftToken.deployed();
                    } else {
                        Contracts.nftTokenPromise = App.contracts.NftToken
                            .at(Contracts.nftTokenAddress);
                    }

                    Contracts.nftTokenPromise
                        .then(function (instance) {
                            Contracts.nftTokenInstance = instance;
                            Contracts.nftTokenAddress = instance.address;
                        });

                    $('.nft-token .wallet-address').html(Contracts.nftTokenAddress);
                    $('.nft-token a').attr('href', 'https://mumbai.polygonscan.com/token/' + Contracts.nftTokenAddress);

                    return App.render();
                });
            })
        },

        showLoading: function () {
            App.loading = true;

            var loader = $('#loader');
            var content = $('#content');

            loader.show();
            content.hide();
        },

        hideLoading: function () {
            App.loading = false;
            App.hideLoadingText();
            var content = $('#content');
            content.show();
        },

        hideLoadingText: function () {
            $('#loader').hide();
        },

        refreshTokenBalance: function () {
            App.getLastPurchaseTime(App.account);

            Contracts.nftTokenPromise
                .then(function (instance) {
                    return instance.balanceOf(App.account);
                }).then(function (balance) {
                    $('.dapp-balance').html(balance.toNumber());
                    App.hideLoading();
                })
        },

        refreshTokenRate: function (typeId) {
            Contracts.nftTokenCrowdsalePromise
                .then(function (instance) {
                    instance.getRate(typeId)
                        .then(function (rate) {
                            App.tokenRate[typeId] = rate;

                            var etherPrice = web3.utils.fromWei(App.tokenRate[typeId], "ether");
                            var tokenType = $('[data-token-type="' + typeId + '"]');
                            var priceMatic = tokenType.find('.price-matic');

                            priceMatic.html(etherPrice);

                            App.recalculateUsdPrice(typeId);
                        });
                });
        },

        refreshTokenRates: function () {
            App.refreshTokenRate(App.tokenTypesForSale[0]);
            App.refreshTokenRate(App.tokenTypesForSale[1]);
        },

        render: function () {
            if (App.loading) return;

            App.showLoading();
            App.refreshTokenRates();
            App.getTotalMinted();

            $.each(App.tokenTypesForSale, function (index, typeId) {
                App.getTotalSupply(typeId);
                App.getMaxSupply(typeId);
                App.getPurchaseCap(typeId);
            });

            App.refreshTokenBalance();
        },

        getTotalMinted: function () {
            Contracts.nftTokenCrowdsalePromise
                .then(function (instance) {
                    instance.getTotalMinted()
                        .then(function (totalMinted) {
                            $('.tokens-sold').html(totalMinted);
                        });
                });
        },

        getTotalSupply: function (typeId) {
            Contracts.nftTokenCrowdsalePromise
                .then(function (instance) {
                    instance.getTotalSupply(typeId)
                        .then(function (totalSupply) {
                            var _tokenType = $('[data-token-type="' + typeId + '"]');
                            var _totalSupply = _tokenType.find('.total-supply');
                            _totalSupply.html(totalSupply.toNumber());
                        });
                });
        },

        getMaxSupply: function (typeId) {
            Contracts.nftTokenCrowdsalePromise
                .then(function (instance) {
                    instance.getMaxSupply(typeId)
                        .then(function (maxSupply) {
                            var _tokenType = $('[data-token-type="' + typeId + '"]');
                            var _maxSupply = _tokenType.find('.max-supply');
                            _maxSupply.html(maxSupply.toNumber());
                        });
                });
        },

        getPurchaseCap: function (typeId) {
            Contracts.nftTokenCrowdsalePromise
                .then(function (instance) {
                    instance.getPurchaseCap(typeId)
                        .then(function (purchaseCap) {
                            var _tokenType = $('[data-token-type="' + typeId + '"]');
                            var _purchaseCap = _tokenType.find('.purchase-cap');
                            var _quantity = _tokenType.find('.quantity');

                            App.tokenPurchaseCaps[typeId] = purchaseCap.toNumber();

                            _quantity.attr('max', purchaseCap)
                            _purchaseCap.html(purchaseCap.toNumber());
                        });
                });
        },

        getPurchaseTimeLock: function () {
            Contracts.nftTokenCrowdsalePromise
                .then(function (instance) {
                    instance.purchaseTimeLock.call()
                        .then(function (purchaseTimeLock) {
                            App.purchaseTimeLock = purchaseTimeLock.toNumber();
                            App.calculateCountdown();
                        });
                });
        },

        getLastPurchaseTime: function (address) {
            Contracts.nftTokenCrowdsalePromise
                .then(function (instance) {
                    instance.getLastPurchaseTime(address)
                        .then(function (lastPurchaseTime) {
                            App.getPurchaseTimeLock();
                            App.lastPurchaseTime = lastPurchaseTime.toNumber();
                            App.calculateCountdown();
                        });
                });
        },

        resetCaptcha: function () {
            grecaptcha.reset(App.captchaWidget);
            App.disableBuyButtons();
            App.captchaResponse = null;
        },

        getTokenQuantity: function (typeId) {
            return App.tokenQuantity[typeId];
        },

        getTokenPrice: function (typeId) {
            return App.tokenRate[typeId].mul(App.tokenQuantity[typeId]);
        },

        calculateGas: function (quantity) {
            const startCost = 90000;
            const mintCost = 180000;
            return startCost + (mintCost * quantity);
        },

        resetForm: function () {
            App.resetAlerts();
            App.resetCaptcha();
            App.hideLoading();
        },

        buyTokens: function (typeId) {
            console.log("App buyTokens...");

            if (!App.captchaResponse) return;

            App.resetAlerts();

            $('#content').hide();
            $('#loader').show();

            Contracts.nftTokenCrowdsalePromise
                .then(function (instance) {
                    var quantity = App.getTokenQuantity(typeId);
                    var quantityBN = new web3.utils.BN(quantity);
                    var price = App.getTokenPrice(typeId);
                    var calculatedGas = App.calculateGas(quantity);

                    App.resetForm();
                    App.showSuccessAlert('Minting...');

                    return instance.buyTokens(App.account, typeId, quantityBN, {
                        from: App.account,
                        value: price,
                        // gas: calculatedGas
                    });

                }).then(function (result) {
                    App.showSuccessAlert('Tokens minted, check your wallet!');
                    App.refreshTokenBalance();
                    App.getTotalSupply(typeId);

                }).catch(function (error) {
                    var startIndex = error.message.indexOf('revert');
                    var endIndex = error.message.indexOf('","code"');

                    if (endIndex > startIndex) {
                        App.showErrorAlert(error.message.substring(startIndex, endIndex));
                    } else {
                        startIndex = 0;
                        endIndex = error.message.indexOf(':\n{\n  "blockHash');
                        if (endIndex > startIndex){
                            App.showErrorAlert(error.message.substring(startIndex, endIndex));
                        } else {
                            App.showErrorAlert(error.message);
                        }
                    }

                    App.hideLoading();
                });
        },

        calculateCountdown: function () {
            if(App.purchaseTimeLock == null) return;

            App.nextPurchase = App.lastPurchaseTime + App.purchaseTimeLock;

            web3.eth.getBlock('latest').then(function (data) {
                var now = data.timestamp;
                var seconds = App.nextPurchase - now;
                
                if (App.timerId != null) return;

                App.countdownSeconds = seconds;
                if (seconds > 0) {
                    App.enableCountdown();
                }
            }); 
        },

        enableCountdown: function () {
            $('#captchaWidget').hide();
            $('.countdownWidget').show();
            App.timerId = setInterval(
                App.doCountdown,
                1000
            )
        },

        disableCountdown: function () {
            clearInterval(App.timerId);
            App.timerId = null;
            $('#captchaWidget').show();
            $('.countdownWidget').hide();
        },

        doCountdown: function () {
            var seconds = App.countdownSeconds--;
            var countdownTimer = $('.countdownTimer');
            countdownTimer.html(seconds);
            if (seconds <= 0) {
                App.disableCountdown();
            }
        },
    },

    $(function () {
        $(window).on('load', function () {
            App.init();
       });
    });
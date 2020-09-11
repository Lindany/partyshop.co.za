  var Currency = {
    rates: {"USD":1.0,"EUR":1.1804,"GBP":1.29984,"CAD":0.760282,"ARS":0.0133861,"AUD":0.727652,"BRL":0.188323,"CLP":0.00130443,"CNY":0.146235,"CYP":0.397899,"CZK":0.0445482,"DKK":0.158646,"EEK":0.0706676,"HKD":0.129025,"HUF":0.0033064,"ISK":0.00711941,"INR":0.013615,"JMD":0.00669274,"JPY":0.00941312,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0467515,"NZD":0.668144,"NOK":0.110924,"PLN":0.265836,"SGD":0.731428,"SKK":21.5517,"SIT":175.439,"ZAR":0.0601685,"KRW":0.000843958,"SEK":0.114366,"CHF":1.09624,"TWD":0.0341238,"UYU":0.0234888,"MYR":0.239707,"BSD":1.0,"CRC":0.0016763,"RON":0.243029,"PHP":0.0205578,"AED":0.272294,"VEB":0.000100125,"IDR":6.75459e-05,"TRY":0.133677,"THB":0.0319856,"TTD":0.147634,"ILS":0.29416,"SYP":0.00195604,"XCD":0.370024,"COP":0.000269145,"RUB":0.0132741,"HRK":0.156746,"KZT":0.00234014,"TZS":0.000430971,"XPT":920.966,"SAR":0.266667,"NIO":0.0287674,"LAK":0.000109987,"OMR":2.60078,"AMD":0.00207641,"CDF":0.000511136,"KPW":0.00111113,"SPL":6.0,"KES":0.0092217,"ZWD":0.00276319,"KHR":0.000243354,"MVR":0.0650185,"GTQ":0.129343,"BZD":0.496142,"BYR":3.81844e-05,"LYD":0.733143,"DZD":0.0077608,"BIF":0.00051745,"GIP":1.29984,"BOB":0.144815,"XOF":0.0017995,"STD":4.80331e-05,"NGN":0.00262483,"PGK":0.287001,"ERN":0.0666667,"MWK":0.00133848,"CUP":0.0377358,"GMD":0.019296,"CVE":0.0107046,"BTN":0.013615,"XAF":0.0017995,"UGX":0.000271075,"MAD":0.108861,"MNT":0.000352628,"LSL":0.0601685,"XAG":26.9968,"TOP":0.440988,"SHP":1.29984,"RSD":0.010039,"HTG":0.00892476,"MGA":0.000259238,"MZN":0.013982,"FKP":1.29984,"BWP":0.0868543,"HNL":0.0405624,"PYG":0.000143041,"JEP":1.29984,"EGP":0.0633278,"LBP":0.00066335,"ANG":0.558659,"WST":0.384478,"TVD":0.727652,"GYD":0.00477789,"GGP":1.29984,"NPR":0.00846968,"KMF":0.00239934,"IRR":2.37516e-05,"XPD":2289.73,"SRD":0.134095,"TMM":5.69815e-05,"SZL":0.0601685,"MOP":0.125267,"BMD":1.0,"XPF":0.00989173,"ETB":0.0273311,"JOD":1.41044,"MDL":0.0601965,"MRO":0.00261486,"YER":0.00399375,"BAM":0.603527,"AWG":0.558659,"PEN":0.282674,"VEF":0.100125,"SLL":9.99888e-05,"KYD":1.21951,"AOA":0.00159825,"TND":0.367595,"TJS":0.096689,"SCR":0.0557505,"LKR":0.00542333,"DJF":0.00562497,"GNF":0.000103438,"VUV":0.0088662,"SDG":0.0180833,"IMP":1.29984,"GEL":0.321853,"FJD":0.471277,"DOP":0.0171215,"XDR":1.41191,"MUR":0.0251793,"MMK":0.000749793,"LRD":0.00501641,"BBD":0.5,"ZMK":5.07356e-05,"XAU":1947.55,"VND":4.31455e-05,"UAH":0.035935,"TMT":0.284908,"IQD":0.0008359,"BGN":0.603527,"KGS":0.0127022,"RWF":0.00103297,"BHD":2.65957,"UZS":9.7332e-05,"PKR":0.00600954,"MKD":0.0191456,"AFN":0.0129923,"NAD":0.0601685,"BDT":0.0117884,"AZN":0.588589,"SOS":0.00173385,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.122651,"ALL":0.00951714,"BND":0.731428,"KWD":3.2682,"GHS":0.172961,"ZMW":0.0507356,"XBT":10270.2,"NTD":0.0337206,"BYN":0.381844,"CNH":0.146319,"MRU":0.0261486,"STN":0.0480331,"VES":2.97347e-06,"MXV":0.30149},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };

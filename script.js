function updateDollarPrice(){
  $.post( 'https://api.idex.market/returnTicker').done(function(data){
    $.get("https://api.coinmarketcap.com/v1/ticker/ethereum/", function(cmcData, status){
       ethPrice = parseFloat(cmcData[0].price_usd)
       $("#lastDUBI_ETH").html(data.ETH_DUBI.high)
       $("#lowDUBI_ETH").html(data.ETH_DUBI.low)
       $("#highDUBI_ETH").html(data.ETH_DUBI.high)
       $("#lastDUBI_Dollar").html("$" + (parseFloat(data.ETH_DUBI.high) * ethPrice).toFixed(2))
       $("#lowDUBI_Dollar").html("$" + (parseFloat(data.ETH_DUBI.low) * ethPrice).toFixed(2))
       $("#highDUBI_Dollar").html("$" + (parseFloat(data.ETH_DUBI.high) * ethPrice).toFixed(2))
       $("#lastPRPS_ETH").html(data.ETH_PRPS.high)
       $("#lowPRPS_ETH").html(data.ETH_PRPS.low)
       $("#highPRPS_ETH").html(data.ETH_PRPS.high)
       $("#lastPRPS_Dollar").html("$" + (parseFloat(data.ETH_PRPS.high) * ethPrice).toFixed(2))
       $("#lowPRPS_Dollar").html("$" + (parseFloat(data.ETH_PRPS.low) * ethPrice).toFixed(2))
       $("#highPRPS_Dollar").html("$" + (parseFloat(data.ETH_PRPS.high) * ethPrice).toFixed(2))
     })
  })
}

$( document ).ready(function() {
  setInterval( updateDollarPrice(), 2000)
});

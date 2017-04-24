
$(function () {
    $('#populationbtn').click(function(e)
 {
     e.preventDefault();
     $('#messagePopulation').slideDown();
     $("#messageGDP").css("display", "none");
     $("#messagePPP").css("display", "none");
     barChartDraw("Population","brown");
     $('.message-wrapper').slideDown();
     
 });
    $('#gdobtn').click(function(e)
 {
      e.preventDefault();
      $('#messageGDP').slideDown();
     $("#messagePopulation").css("display", "none");
     $("#messagePPP").css("display", "none");
     barChartDraw("GDP","orange");
     $('.message-wrapper').slideDown();
 });
    $('#pppbtn').click(function(e)
 {
      e.preventDefault();
      $("#messagePPP").slideDown();
     $("#messagePopulation").css("display", "none");
     $("#messageGDP").css("display", "none");
     barChartDraw("PurchasingPower","blue");
     $('.message-wrapper').slideDown();
 });
    $('#btnAlertTextArea').click(function(m)
    {
        m.preventDefault();
        $('#successMailAlert').slideDown();
        $(".message-wrapper").css("display", "none");
    });
});


















function barChartDraw(path,color)
{
var margin={ top:20, right:20, bottom: 100, left:50},
    width=700 - margin.right-margin.left,
    height=500- margin.top-margin.bottom;
    console.log(width);
    console.log(height);
//define svg
var svg_population=d3.select('#population2013')
        .append('svg')
        .attr({
        "width": width + margin.right + margin.left,
        "height": height + margin.top + margin.bottom
        })
        .append('g')
            .attr("transform", "translate(" + margin.left + ',' + margin.right + ')');
//Scale and Axis
var xScale=d3.scale.ordinal().rangeRoundBands([0,width], 0.1);
var yScale=d3.scale.linear().range([height, 0]);

//define axis
var xAxis=d3.svg.axis()
    .scale(xScale)
    .orient("bottom");
var yAxis=d3.svg.axis()
    .scale(yScale)
    .orient("left");
//Getting JSON data
d3.json("json/"+path+".json", function(error, data){
    if(error) console.log("Error");
    data.forEach(function(d){
        d.value=+ d.value;
        d.country=d.country;
       // console.log(d.popultion2013);
    });
    data.sort(function(a,b){
    return b.value- a.value;
    });
// specify the domains of x and y scales
xScale.domain(data.map(function(d){
    return d.country;
}));
yScale.domain([0, d3.max(data, function(d){
    return d.value;
})]);
//draw the bars
svg_population.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr("height", 0)
    .attr("y", height)
    .attr("fill", color)
    .transition().duration(3000)
    .delay(function(d,i){
        return i*200;
    })
    .attr({
        'x': function(d){
        return xScale(d.country);
        },
        'y': function(d){
        return yScale(d.value);
        },
        "width": xScale.rangeBand(),
        "height": function(d){
        return height-yScale(d.value);
        }
    });


// append x axis and y axis
var xAxisG =svg_population.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll('text')
    .attr("fill","brown")
    .attr("transform", "rotate(-60)")
    .attr("dx","-0.8em")
    .attr("dy", "-0;.25em")
    .style("text-anchor","end")
    .style("font-size", "12px");
    

 var yAxisG=svg_population.append("g")
    .attr("class", "y axis")
    .attr("fill","brown")
    .call(yAxis)
    .style("font-size", "12px");
});
}

 // console.log(populationRBtnId);
 // var gdpRbtnId=document.getElementById("gdpRBtn");
 // var pppRBtnId=document.getElementById("pppRBtn");
 // populationRBtnId.click(){
 //    barChartDraw("Population");
 // }
 // gdpRbtnId.click()=function(){
 //    barChartDraw("GDP");
 // }
 // pppRBtnId.click()=function(){
 //    barChartDraw("PurchasingPower");
 // }
 
 // if(populationRBtnId==true)
 // {
 //    barChartDraw("Population");
 // }
 // else if(gdpRbtnId==true)
 // {
 //    barChartDraw("GDP");
 // }
 // else if(populationRBtnId==true)
 // {
 //    barChartDraw("PurchasingPower");
 // }
 
  
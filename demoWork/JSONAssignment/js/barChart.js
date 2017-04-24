//Defining the D3 margin
barChartDraw("json/population.json","population2013","country");
function barChartDraw(path, value, country)
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
d3.json("path", function(error, data){
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
    .attr("fill", "brown")
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
    
//     var yoffset=55;
//     var xAxisLabel=xAxisG.append("text")
// .style("text-anchor", "middle")
// .attr("transform", "translate( " + (width/2) + ","+ yoffset +")")
// .attr("class", "label")
// .text(xlabelText);

 var yAxisG=svg_population.append("g")
    .attr("class", "y axis")
    .attr("fill","brown")
    .call(yAxis)
    .style("font-size", "12px");
});
}
/* ----------------------------------------------- GDP GRaph-------------------------------------------------------------------------- */
// Define D3 margin
var svg_gdp=d3.select('#gdp2013')
        .append('svg')
        .attr({
        "width": width + margin.right + margin.left,
        "height": height + margin.top + margin.bottom
        })
        .append('g')
            .attr("transform", "translate(" + margin.left + ',' + margin.right + ')');
//Scale and Axis
var xScale=d3.scale.ordinal().rangeRoundBands([0,width], 0.2,0.2);
var yScale=d3.scale.linear().range([height, 0]);
//define axis
var xAxis=d3.svg.axis()
    .scale(xScale)
    .orient("bottom");
var yAxis=d3.svg.axis()
    .scale(yScale)
    .orient("left");
d3.json("json/GDP.json", function(error, data){
    if(error){
    console.log("Error");
    }
    data.forEach(function(d){
        d.GDP2013=+ d.GDP2013;
        d.country=d.country;
        console.log(d.GDP2013);
    });
    data.sort(function(a,b){
    return b.GDP2013- a.GDP2013;
    });
// specify the domains of x and y scales
xScale.domain(data.map(function(d){
    return d.country;
}));
yScale.domain([0, d3.max(data, function(d){
    return d.GDP2013;
})]);
//draw the bars
svg_gdp.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr("height", 0)
    .attr("y", height)
    .attr("fill", "blue")
    .transition()
                 .duration(function(d,i){
                     return 500 * i;
                 })
    .attr({
        'x': function(d){
        return xScale(d.country);
        },
        'y': function(d){
        return yScale(d.GDP2013);
        },
        "width": xScale.rangeBand(),
        "height": function(d){
        return height-yScale(d.GDP2013);
        }
    });
// append x axis and y axis
svg_gdp.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll('text')
    .attr("fill","blue")
    .attr("transform", "rotate(-60)")
    .attr("dx","-0.8em")
    .attr("dy", "-0;.25em")
    .style("text-anchor","end")
    .style("font-size", "12px");
svg_gdp.append("g")
    .attr("class", "y axis")
    .attr("fill","blue")
    .call(yAxis)
    .style("font-size", "12px");
});
/* ----------------------------------------------------- PP Graph------------------------------------------------------------------------------ */
//Define D3 margin
var svg_pp=d3.select('#purchasingpower2013')
        .append('svg')
        .attr({
        "width": width + margin.right + margin.left,
        "height": height + margin.top + margin.bottom
        })
        .append('g')
            .attr("transform", "translate(" + margin.left + ',' + margin.right + ')');
//Scale and Axis
var xScale=d3.scale.ordinal().rangeRoundBands([0,width], 0.2,0.2);
var yScale=d3.scale.linear().range([height, 0]);
//define axis
var xAxis=d3.svg.axis()
    .scale(xScale)
    .orient("bottom");
var yAxis=d3.svg.axis()
    .scale(yScale)
    .orient("left");
d3.json("json/PurchasingPower.json", function(error, data){
    if(error){
    console.log("Error");
    }
    data.forEach(function(d){
        d.PurchasingPower2013=+ d.PurchasingPower2013;
        d.country=d.country;
        console.log(d.PurchasingPower2013);
    });
    data.sort(function(a,b){
    return b.PurchasingPower2013- a.PurchasingPower2013;
    });
// specify the domains of x and y scales
xScale.domain(data.map(function(d){
    return d.country;
}));
yScale.domain([0, d3.max(data, function(d){
    return d.PurchasingPower2013;
})]);
//draw the bars
svg_pp.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr("height", 0)
    .attr("y", height)
    .attr("fill", "orange")
    .transition().duration(3000)
    .delay(function(d,i){
        return i*200;
    })
    .attr({
        'x': function(d){
        return xScale(d.country);
        },
        'y': function(d){
        return yScale(d.PurchasingPower2013);
        },
        "width": xScale.rangeBand(),
        "height": function(d){
        return height-yScale(d.PurchasingPower2013);
        }
    });
// append x axis and y axis
svg_pp.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll('text')
    .attr("fill","orange")
    .attr("transform", "rotate(-60)")
    .attr("dx","-0.8em")
    .attr("dy", "-0;.25em")
    .style("text-anchor","end")
    .style("font-size", "12px");
svg_pp.append("g") // yaxis
    .attr("class", "y axis")
    .attr("fill","orange")
    .call(yAxis)
    .style("font-size", "12px");
});

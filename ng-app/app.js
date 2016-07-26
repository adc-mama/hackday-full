// create module for custom directives
var d3DemoApp = angular.module('d3DemoApp', []);

// controller business logic
// controller business logic
d3DemoApp.controller('AppCtrl', function AppCtrl ($scope, $http) {
	$scope.data = {
		"globalpropIDX": {
   "metadata":{
      "median_price":472707.5,
      "high_price":472707.5,
      "estimate":579092.0,
      "avg_price":481019.498280943
   },
   "histogram":[
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":195970.0,
         "freq":1.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":216882.96666666667,
         "freq":0.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":237795.93333333335,
         "freq":1.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":258708.89999999999,
         "freq":2.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":279621.8666666667,
         "freq":5.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":300534.83333333337,
         "freq":29.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":321447.79999999999,
         "freq":135.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":342360.76666666666,
         "freq":187.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":363273.73333333334,
         "freq":236.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":384186.70000000001,
         "freq":281.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":405099.66666666669,
         "freq":304.0
      },
      {
         "in_inventory":"True",
         "target_property":"True",
         "price":426012.6333333333,
         "freq":396.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":446925.59999999998,
         "freq":374.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":467838.56666666665,
         "freq":359.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":488751.53333333333,
         "freq":341.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":509664.5,
         "freq":293.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":530577.46666666667,
         "freq":213.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":551490.43333333335,
         "freq":213.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":572403.40000000002,
         "freq":206.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":593316.3666666667,
         "freq":149.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":614229.33333333337,
         "freq":119.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":635142.30000000005,
         "freq":101.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":656055.2666666666,
         "freq":49.0
      },
      {
         "in_inventory":"True",
         "target_property":"False",
         "price":676968.2333333334,
         "freq":32.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":697881.19999999995,
         "freq":16.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":718794.16666666674,
         "freq":12.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":739707.1333333333,
         "freq":9.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":760620.09999999998,
         "freq":1.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":781533.06666666665,
         "freq":3.0
      },
      {
         "in_inventory":"False",
         "target_property":"False",
         "price":802446.03333333333,
         "freq":5.0
      }
   ]
}

	};

    $scope.filterData = function() {
        console.log($scope.input);
        if (!$scope.input.state){
            return;
        }
		$scope.data = dataOptions[$scope.input.state];
	};

    $scope.propertyTypes = $scope.propertyCities = ['a', 'b', 'c'];

    $scope.propertyStates = ['CA', 'NY', 'TX'];
});

d3DemoApp.directive('trueHouse', function () {

  // constants
  var margin = 20,
    width = 960,
    height = 500 - .5 - margin,
    color = d3.interpolateRgb("#f77", "#77f");

  return {
    restrict: 'E',
    scope: {
      val: '='
    },
    link: function (scope, element, attrs) {
    	var margin = {top: 40, right: 20, bottom: 100, left: 40},
		    width = 1400 - margin.left - margin.right,
		    height = 550 - margin.top - margin.bottom,
		    legendWidth  = 200,
      		legendHeight = 30;

		var x = d3.scale.ordinal()
		    .rangeRoundBands([0, width], .1);

		var y = d3.scale.linear()
		    .range([height, 0]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");


		var svg = d3.select("body").append("svg")
		    .attr("width", width + margin.left + margin.right + 100)
		    .attr("height", height + margin.top + margin.bottom + 100)
		  .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		var tip = d3.tip()
		.attr('class', 'd3-tip')
		.offset([-10, 0])
		.html(function(d) {
		return "<strong>Frequency:</strong> <span style='color:red'>" + d.freq + "</span>" + "<div></div>"
                + "<strong>Price:</strong> <span style='color:red'>" + d.price + "</span>";
		})
        var valueline = d3.svg.line()
            .x(function(d){ return x(d.price) })
            .y(function(d){ return y(d.freq) })
            .interpolate('basis');

		svg.call(tip);


		var test = function(data) {
			metadata = data.metadata;
			data = data.histogram;
			x.domain(data.map(function(d) { return d.price; }));
			y.domain([0, d3.max(data, function(d) { return d.freq; })]);
            var sortedPrice = [];
            for (var label in metadata)
                  sortedPrice.push([label, metadata[label]]);
            sortedPrice.sort(
                function(a, b) {
                    return a[1] - b[1]
                }
            );
            var lablePosition = {};
            for (i=0; i < sortedPrice.length; i++){
                lablePosition[sortedPrice[i][0]] = i * width/sortedPrice.length;
            }

			svg.append("g")
			  .attr("class", "x axis")
			  .attr("transform", "translate(0," + height + ")")
            //   .attr("transform", "rotate(-90)")
			  .call(xAxis)
              .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", "rotate(-90)");

			svg.append("g")
			  .attr("class", "y axis")
			  .call(yAxis)
			.append("text")
			  .attr("transform", "rotate(-90)")
			  .attr("y", 6)
			  .attr("dy", ".71em")
			  .style("text-anchor", "end")
			  .text("Frequency");

			svg.selectAll(".bar")
			  .data(data)
			.enter().append("rect")
			  .attr("class", function(d) { return d.target_property == "True" ? "bar-red": (d.in_inventory !== 'False')?"bar-blue":"bar-green"})
			  .attr("x", function(d) { return x(d.price); })
			  .attr("width", x.rangeBand())
			  .attr("y", function(d) { return y(d.freq); })
			  .attr("height", function(d) { return height - y(d.freq); })
			  .on('mouseover', tip.show)
			  .on('mouseout', tip.hide);

              svg.append('path')
                .datum(data)
                .attr('d', valueline)
                .attr('class', 'line');


            var legend = svg
			  .append("circle")
	          .attr({
	              r: 10,
	              cx: x(parseInt(metadata.estimate)),
                  cy: height,
	              fill: 'orange'
	          });
            var legend = svg
              .append("circle")
	          .attr({
	              r: 10,
	              cx: x(metadata.avg_price)+x.rangeBand()/2,
                  cy: height,
	              fill: 'grey'
	          });
              var legend = svg
    			  .append("circle")
    	          .attr({
    	              r: 10,
    	              cx: x(metadata.median_price)+x.rangeBand()/2,
                      cy: height,
    	              fill: 'grey'
    	          });
            console.log(x(metadata.median_price)+x.rangeBand()/2);
            console.log(x(metadata.avg_price)+x.rangeBand()/2);
              var legend = svg
                .append("circle")
    	          .attr({
    	              r: 10,
    	              cx: x(metadata.high_price)+x.rangeBand()/2,
                      cy: height,
    	              fill: 'grey'
    	          });
                //Draw the label for median price
                svg.append('foreignObject')
                  .attr({
                      'x': lablePosition.median_price,
                      'y': height +145,
                      'width': 100,
                      'height': 60,
                      'class': 'svg-price-label'
                  })
                  .append('xhtml:div')
                  .append('div')
                  .attr({
                      'class': 'tooltip'
                  })
                  .append('p')
                  .html('Median Price: $' + metadata.median_price);
                svg.append('rect')
                    .attr({
                        'x':lablePosition.median_price,
                        'y': height +140,
                        'width': 100,
                        'height': 60,
                        'fill': '#D8D8D8',
                        'opacity': 0.4,
                    })

                //Draw the label for average price
                svg.append('foreignObject')
                  .attr({
                      'x': lablePosition.avg_price,
                      'y': height +145,
                      'width': 100,
                      'height': 60,
                      'class': 'svg-price-label'
                  })
                  .append('xhtml:div')
                  .append('div')
                  .attr({
                      'class': 'tooltip'
                  })
                  .append('p')
                  .html('Average Price: $' + metadata.avg_price);
                svg.append('rect')
                    .attr({
                        'x': lablePosition.avg_price,
                        'y': height +140,
                        'width': 140,
                        'height': 60,
                        'fill': '#D8D8D8',
                        'opacity': 0.4,
                    })

                //Draw the label for estimate price
                svg.append('foreignObject')
                  .attr({
                      'x': lablePosition.estimate,
                      'y': height +145,
                      'width': 100,
                      'height': 60,
                      'class': 'svg-price-label'
                  })
                  .append('xhtml:div')
                  .append('div')
                  .attr({
                      'class': 'tooltip'
                  })
                  .append('p')
                  .html('Estimated Price: $' + metadata.estimate);
                svg.append('rect')
                    .attr({
                        'x': lablePosition.estimate,
                        'y': height +140,
                        'width': 100,
                        'height': 60,
                        'fill': '#D8D8D8',
                        'opacity': 0.4,
                    })

                //Draw the label for high price
                svg.append('foreignObject')
                  .attr({
                      'x': lablePosition.high_price,
                      'y': height +145,
                      'width': 100,
                      'height': 60,
                      'class': 'svg-price-label'
                  })
                  .append('xhtml:div')
                  .append('div')
                  .attr({
                      'class': 'tooltip'
                  })
                  .append('p')
                  .html('High Price: $' + metadata.high_price);
                svg.append('rect')
                    .attr({
                        'x': lablePosition.high_price,
                        'y': height +140,
                        'width': 100,
                        'height': 60,
                        'fill': '#D8D8D8',
                        'opacity': 0.4,
                    });

                //Link of circle and label for high_price
                svg.append('polyline')
                    .attr({
                        points: (x(metadata.high_price)+x.rangeBand()/2) + ',' + (height+10) + ' '
                                + lablePosition.high_price + ',' + (height+100),
                        fill: 'none',
                        stroke: "blue",
                        width: "2"
                    });

                //Link of circle and label for estimate
                svg.append('polyline')
                    .attr({
                        points: (x(metadata.estimate)+x.rangeBand()/2) + ',' + (height+10) + ' '
                                + lablePosition.estimate + ',' + (height+100),
                        fill: 'none',
                        stroke: "blue",
                        width: "2"
                    });

                //Link of circle and label for high_price
                svg.append('polyline')
                    .attr({
                        points: (x(metadata.median_price)+x.rangeBand()/2) + ',' + (height+10) + ' '
                                + lablePosition.median_price + ',' + (height+100),
                        fill: 'none',
                        stroke: "blue",
                        width: "2"
                    });

                //Link of circle and label for high_price
                svg.append('polyline')
                    .attr({
                        points: (x(metadata.avg_price)+x.rangeBand()/2) + ',' + (height+10) + ' '
                                + lablePosition.avg_price + ',' + (height+100),
                        fill: 'none',
                        stroke: "blue",
                        width: "2"
                    });

		};
		scope.$watch('val', function (newVal, oldVal) {
			svg.selectAll('*').remove();

	        // if 'val' is undefined, exit
	        if (!newVal) {
	          return;
	        }
			test(newVal);
		});
    }
  }
});

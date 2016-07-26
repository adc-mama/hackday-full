// create module for custom directives
var d3DemoApp = angular.module('d3DemoApp', []);

// controller business logic
// controller business logic
d3DemoApp.controller('AppCtrl', function AppCtrl ($scope, $http) {
	$scope.data = {
		"globalpropIDX": {
           "metadata":{
              "median_price":272707.5,
              "high_price":472707.5,
              "estimate":550000,
              "avg_price":681019.498280943
           },
           "histogram":[
              {
                 "in_inventory":"False",
                 "price":195970.0,
                 "freq":1.0
              },
              {
                 "in_inventory":"False",
                 "price":202243.89000000001,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":208517.78,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":214791.67000000001,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":221065.56,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":227339.45000000001,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":233613.34,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":239887.23000000001,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":246161.12,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":252435.01000000001,
                 "freq":1.0
              },
              {
                 "in_inventory":"False",
                 "price":258708.89999999999,
                 "freq":1.0
              },
              {
                 "in_inventory":"False",
                 "price":264982.79000000004,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":271256.67999999999,
                 "freq":1.0
              },
              {
                 "in_inventory":"False",
                 "price":277530.57000000001,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":283804.46000000002,
                 "freq":0.0
              },
              {
                 "in_inventory":"True",
                 "price":290078.34999999998,
                 "freq":3.0
              },
              {
                 "in_inventory":"True",
                 "price":296352.23999999999,
                 "freq":4.0
              },
              {
                 "in_inventory":"False",
                 "price":302626.13,
                 "freq":7.0
              },
              {
                 "in_inventory":"False",
                 "price":308900.02000000002,
                 "freq":10.0
              },
              {
                 "in_inventory":"False",
                 "price":315173.91000000003,
                 "freq":10.0
              },
              {
                 "in_inventory":"False",
                 "price":321447.79999999999,
                 "freq":32.0
              },
              {
                 "in_inventory":"False",
                 "price":327721.69,
                 "freq":40.0
              },
              {
                 "in_inventory":"False",
                 "price":333995.58000000002,
                 "freq":53.0
              },
              {
                 "in_inventory":"False",
                 "price":340269.46999999997,
                 "freq":58.0
              },
              {
                 "in_inventory":"False",
                 "price":346543.35999999999,
                 "freq":43.0
              },
              {
                 "in_inventory":"False",
                 "price":352817.25,
                 "freq":54.0
              },
              {
                 "in_inventory":"False",
                 "price":359091.14000000001,
                 "freq":60.0
              },
              {
                 "in_inventory":"False",
                 "price":365365.03000000003,
                 "freq":66.0
              },
              {
                 "in_inventory":"False",
                 "price":371638.92000000004,
                 "freq":71.0
              },
              {
                 "in_inventory":"False",
                 "price":377912.81,
                 "freq":81.0
              },
              {
                 "in_inventory":"False",
                 "price":384186.70000000001,
                 "freq":78.0
              },
              {
                 "in_inventory":"True",
                 "price":390460.58999999997,
                 "freq":75.0
              },
              {
                 "in_inventory":"False",
                 "price":396734.47999999998,
                 "freq":85.0
              },
              {
                 "in_inventory":"True",
                 "price":403008.37,
                 "freq":92.0
              },
              {
                 "in_inventory":"True",
                 "price":409282.26000000001,
                 "freq":96.0
              },
              {
                 "in_inventory":"True",
                 "price":415556.15000000002,
                 "freq":96.0
              },
              {
                 "in_inventory":"True",
                 "price":421830.04000000004,
                 "freq":106.0
              },
              {
                 "in_inventory":"True",
                 "price":428103.93000000005,
                 "freq":106.0
              },
              {
                 "in_inventory":"True",
                 "price":434377.82000000001,
                 "freq":129.0
              },
              {
                 "in_inventory":"True",
                 "price":440651.71000000002,
                 "freq":118.0
              },
              {
                 "in_inventory":"False",
                 "price":446925.59999999998,
                 "freq":95.0
              },
              {
                 "in_inventory":"True",
                 "price":453199.48999999999,
                 "freq":128.0
              },
              {
                 "in_inventory":"True",
                 "price":459473.38,
                 "freq":114.0
              },
              {
                 "in_inventory":"True",
                 "price":465747.27000000002,
                 "freq":116.0
              },
              {
                 "in_inventory":"True",
                 "price":472021.16000000003,
                 "freq":107.0
              },
              {
                 "in_inventory":"False",
                 "price":478295.04999999999,
                 "freq":105.0
              },
              {
                 "in_inventory":"False",
                 "price":484568.94,
                 "freq":95.0
              },
              {
                 "in_inventory":"True",
                 "price":490842.83000000002,
                 "freq":113.0
              },
              {
                 "in_inventory":"True",
                 "price":497116.72000000003,
                 "freq":100.0
              },
              {
                 "in_inventory":"True",
                 "price":503390.61000000004,
                 "freq":101.0
              },
              {
                 "in_inventory":"False",
                 "price":509664.5,
                 "freq":88.0
              },
              {
                 "in_inventory":"True",
                 "price":515938.39000000001,
                 "freq":97.0
              },
              {
                 "in_inventory":"True",
                 "price":522212.28000000003,
                 "freq":92.0
              },
              {
                 "in_inventory":"False",
                 "price":528486.17000000004,
                 "freq":77.0
              },
              {
                 "in_inventory":"True",
                 "price":534760.06000000006,
                 "freq":64.0
              },
              {
                 "in_inventory":"True",
                 "price":541033.94999999995,
                 "freq":55.0
              },
              {
                 "in_inventory":"True",
                 "price":547307.84000000008,
                 "freq":50.0
              },
              {
                 "in_inventory":"True",
                 "price":553581.72999999998,
                 "freq":71.0
              },
              {
                 "in_inventory":"False",
                 "price":559855.62,
                 "freq":66.0
              },
              {
                 "in_inventory":"False",
                 "price":566129.51000000001,
                 "freq":59.0
              },
              {
                 "in_inventory":"True",
                 "price":572403.40000000002,
                 "freq":71.0
              },
              {
                 "in_inventory":"False",
                 "price":578677.29000000004,
                 "freq":79.0,
                 "target_property": "True"
              },
              {
                 "in_inventory":"True",
                 "price":584951.17999999993,
                 "freq":44.0
              },
              {
                 "in_inventory":"False",
                 "price":591225.07000000007,
                 "freq":41.0
              },
              {
                 "in_inventory":"True",
                 "price":597498.95999999996,
                 "freq":37.0
              },
              {
                 "in_inventory":"False",
                 "price":603772.85000000009,
                 "freq":53.0
              },
              {
                 "in_inventory":"False",
                 "price":610046.73999999999,
                 "freq":46.0
              },
              {
                 "in_inventory":"True",
                 "price":616320.63,
                 "freq":43.0
              },
              {
                 "in_inventory":"True",
                 "price":622594.52000000002,
                 "freq":39.0
              },
              {
                 "in_inventory":"False",
                 "price":628868.41000000003,
                 "freq":21.0
              },
              {
                 "in_inventory":"True",
                 "price":635142.30000000005,
                 "freq":38.0
              },
              {
                 "in_inventory":"False",
                 "price":641416.18999999994,
                 "freq":34.0
              },
              {
                 "in_inventory":"False",
                 "price":647690.08000000007,
                 "freq":24.0
              },
              {
                 "in_inventory":"False",
                 "price":653963.96999999997,
                 "freq":20.0
              },
              {
                 "in_inventory":"False",
                 "price":660237.8600000001,
                 "freq":14.0
              },
              {
                 "in_inventory":"False",
                 "price":666511.75,
                 "freq":10.0
              },
              {
                 "in_inventory":"False",
                 "price":672785.64000000001,
                 "freq":13.0
              },
              {
                 "in_inventory":"False",
                 "price":679059.53000000003,
                 "freq":9.0
              },
              {
                 "in_inventory":"False",
                 "price":685333.42000000004,
                 "freq":12.0
              },
              {
                 "in_inventory":"True",
                 "price":691607.31000000006,
                 "freq":8.0
              },
              {
                 "in_inventory":"False",
                 "price":697881.19999999995,
                 "freq":4.0
              },
              {
                 "in_inventory":"False",
                 "price":704155.09000000008,
                 "freq":7.0
              },
              {
                 "in_inventory":"False",
                 "price":710428.97999999998,
                 "freq":5.0
              },
              {
                 "in_inventory":"False",
                 "price":716702.87000000011,
                 "freq":3.0
              },
              {
                 "in_inventory":"False",
                 "price":722976.76000000001,
                 "freq":3.0
              },
              {
                 "in_inventory":"False",
                 "price":729250.65000000002,
                 "freq":4.0
              },
              {
                 "in_inventory":"False",
                 "price":735524.54000000004,
                 "freq":4.0
              },
              {
                 "in_inventory":"False",
                 "price":741798.43000000005,
                 "freq":3.0
              },
              {
                 "in_inventory":"False",
                 "price":748072.32000000007,
                 "freq":2.0
              },
              {
                 "in_inventory":"False",
                 "price":754346.21000000008,
                 "freq":2.0
              },
              {
                 "in_inventory":"False",
                 "price":760620.09999999998,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":766893.98999999999,
                 "freq":1.0
              },
              {
                 "in_inventory":"False",
                 "price":773167.88,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":779441.77000000002,
                 "freq":2.0
              },
              {
                 "in_inventory":"False",
                 "price":785715.66000000003,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":791989.55000000005,
                 "freq":1.0
              },
              {
                 "in_inventory":"False",
                 "price":798263.44000000006,
                 "freq":1.0
              },
              {
                 "in_inventory":"False",
                 "price":804537.33000000007,
                 "freq":0.0
              },
              {
                 "in_inventory":"False",
                 "price":810811.22000000009,
                 "freq":1.0
              },
              {
                 "in_inventory":"False",
                 "price":817085.10999999999,
                 "freq":3.0
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
    	var margin = {top: 40, right: 20, bottom: 60, left: 40},
		    width = 1400 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom,
		    legendWidth  = 200,
      		legendHeight = 30;

		var x = d3.scale.ordinal()
		    .rangeRoundBands([0, width], .1);

		var y = d3.scale.linear()
		    .range([height, 0]);

        var z = d3.scale.ordinal()
		    .range([0, width], .1);
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
			  .call(xAxis);

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
	              cx: x(metadata.estimate)+x.rangeBand()/2,
                  cy: height,
	              fill: 'grey'
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
                      'y': height +105,
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
                        'y': height +100,
                        'width': 100,
                        'height': 60,
                        'fill': '#D8D8D8',
                        'opacity': 0.4,
                    })

                //Draw the label for average price
                svg.append('foreignObject')
                  .attr({
                      'x': lablePosition.avg_price,
                      'y': height +105,
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
                        'y': height +100,
                        'width': 100,
                        'height': 60,
                        'fill': '#D8D8D8',
                        'opacity': 0.4,
                    })

                //Draw the label for estimate price
                svg.append('foreignObject')
                  .attr({
                      'x': lablePosition.estimate,
                      'y': height +105,
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
                        'y': height +100,
                        'width': 100,
                        'height': 60,
                        'fill': '#D8D8D8',
                        'opacity': 0.4,
                    })

                //Draw the label for high price
                svg.append('foreignObject')
                  .attr({
                      'x': lablePosition.high_price,
                      'y': height +105,
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
                        'y': height +100,
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

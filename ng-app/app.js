// create module for custom directives
var d3DemoApp = angular.module('d3DemoApp', []);

// controller business logic
// controller business logic
d3DemoApp.controller('AppCtrl', function AppCtrl ($scope, $http) {
	$scope.data = [
		{'price': '100K', 'frequency': 167},
		{'price': '400K', 'frequency': 999},
		{'price': '900K', 'frequency': 782}
	];

	var dataOptions = [
		[
			{'price': '100K', 'frequency': 167},
			{'price': '200K', 'frequency': 120},
			{'price': '300K', 'frequency': 82}
		],
		[
			{'price': '100K', 'frequency': 67},
			{'price': '200K', 'frequency': 92},
			{'price': '300K', 'frequency': 82}
		],[
			{'price': '100K', 'frequency': 670},
			{'price': '200K', 'frequency': 492},
			{'price': '300K', 'frequency': 172}
		]
	];

	$scope.randData = function() {
		var min = 0, max = 2;
		var r =  Math.floor(Math.random() * (max - min + 1)) + min;;
		$scope.data = dataOptions[r];
	}

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
      val: '=',
      grouped: '='
    },
    link: function (scope, element, attrs) {
    	var margin = {top: 40, right: 20, bottom: 30, left: 40},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;

		var formatPercent = d3.format(".0%");

		var x = d3.scale.ordinal()
		    .rangeRoundBands([0, width], .1);

		var y = d3.scale.linear()
		    .range([height, 0]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left")
		    .tickFormat(formatPercent);


		var svg = d3.select("body").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		var tip = d3.tip()
		.attr('class', 'd3-tip')
		.offset([-10, 0])
		.html(function(d) {
		return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
		})

		svg.call(tip);
		
		var test = function(data) {

			x.domain(data.map(function(d) { return d.price; }));
			y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

			svg.append("g")
			  .attr("class", "x axis")
			  .attr("transform", "translate(0," + height + ")")
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
			  .attr("class", "bar")
			  .attr("x", function(d) { return x(d.price); })
			  .attr("width", x.rangeBand())
			  .attr("y", function(d) { return y(d.frequency); })
			  .attr("height", function(d) { return height - y(d.frequency); })
			  .on('mouseover', tip.show)
			  .on('mouseout', tip.hide)
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
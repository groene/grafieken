function drawNovelty(element){

const dataset = [{"novelty":0.2926218408,"year":2003,"party":"SP","seats":9.0},{"novelty":0.3080769833,"year":2003,"party":"PvdA","seats":42.0},{"novelty":0.3225479211,"year":2003,"party":"D66","seats":6.0},{"novelty":0.3737329384,"year":2003,"party":"VVD","seats":28.0},{"novelty":0.316785971,"year":2003,"party":"LN","seats":0.0},{"novelty":0.2579538544,"year":2003,"party":"CDA","seats":44.0},{"novelty":0.4146484408,"year":2003,"party":"CU","seats":3.0},{"novelty":0.4091380486,"year":2003,"party":"GL","seats":8.0},{"novelty":0.34010775,"year":2003,"party":"LPF","seats":8.0},{"novelty":0.3607520586,"year":2006,"party":"SP","seats":25.0},{"novelty":0.3783898219,"year":2006,"party":"D66","seats":3.0},{"novelty":0.3513617016,"year":2006,"party":"PvdA","seats":33.0},{"novelty":0.4118311672,"year":2006,"party":"SGP","seats":2.0},{"novelty":0.5737217668,"year":2006,"party":"PvdD","seats":2.0},{"novelty":0.3932757688,"year":2006,"party":"GL","seats":7.0},{"novelty":0.3918259047,"year":2006,"party":"CU","seats":6.0},{"novelty":0.3609405381,"year":2006,"party":"CDA","seats":41.0},{"novelty":0.3354893332,"year":2006,"party":"VVD","seats":22.0},{"novelty":0.4987819893,"year":2006,"party":"PVV","seats":9.0},{"novelty":0.3995973538,"year":2010,"party":"GL","seats":10.0},{"novelty":0.3768294196,"year":2010,"party":"D66","seats":10.0},{"novelty":0.4081474292,"year":2010,"party":"VVD","seats":31.0},{"novelty":0.3609663709,"year":2010,"party":"CDA","seats":21.0},{"novelty":0.3418503368,"year":2010,"party":"CU","seats":5.0},{"novelty":0.4630735205,"year":2010,"party":"PVV","seats":24.0},{"novelty":0.5445293657,"year":2010,"party":"PvdD","seats":2.0},{"novelty":0.4236354604,"year":2010,"party":"SGP","seats":2.0},{"novelty":0.3788427258,"year":2010,"party":"PvdA","seats":30.0},{"novelty":0.3868588848,"year":2010,"party":"SP","seats":15.0},{"novelty":0.3699515515,"year":2012,"party":"SP","seats":15.0},{"novelty":0.3427921823,"year":2012,"party":"D66","seats":12.0},{"novelty":0.3755707409,"year":2012,"party":"VVD","seats":41.0},{"novelty":0.3434877472,"year":2012,"party":"CDA","seats":13.0},{"novelty":0.3343236239,"year":2012,"party":"CU","seats":5.0},{"novelty":0.4928620044,"year":2012,"party":"PVV","seats":15.0},{"novelty":0.4827960031,"year":2012,"party":"PvdD","seats":2.0},{"novelty":0.4155821886,"year":2012,"party":"SGP","seats":3.0},{"novelty":0.3425959113,"year":2012,"party":"PvdA","seats":38.0},{"novelty":0.4601167366,"year":2012,"party":"50PLUS","seats":2.0},{"novelty":0.3640546793,"year":2012,"party":"GL","seats":4.0},{"novelty":0.4396453374,"year":2017,"party":"SP","seats":14.0},{"novelty":0.4401155131,"year":2017,"party":"PvdA","seats":9.0},{"novelty":0.5125080427,"year":2017,"party":"DENK","seats":3.0},{"novelty":0.4180810621,"year":2017,"party":"D66","seats":19.0},{"novelty":0.4401268606,"year":2017,"party":"VVD","seats":33.0},{"novelty":0.4536350954,"year":2017,"party":"CDA","seats":19.0},{"novelty":0.4232332322,"year":2017,"party":"CU","seats":5.0},{"novelty":0.4444736264,"year":2017,"party":"GL","seats":14.0},{"novelty":0.4745209061,"year":2017,"party":"SGP","seats":3.0},{"novelty":0.5455862078,"year":2017,"party":"FVD","seats":2.0},{"novelty":0.4946095257,"year":2017,"party":"50PLUS","seats":4.0},{"novelty":0.4726838053,"year":2017,"party":"PvdD","seats":5.0},{"novelty":0.6624842434,"year":2017,"party":"PVV","seats":20.0},{"novelty":0.4351415527,"year":2021,"party":"GL","seats":8.0},{"novelty":0.4439275616,"year":2021,"party":"SP","seats":9.0},{"novelty":0.476253704,"year":2021,"party":"Volt","seats":3.0},{"novelty":0.4923859277,"year":2021,"party":"Bij1","seats":1.0},{"novelty":0.436404298,"year":2021,"party":"PvdA","seats":9.0},{"novelty":0.4748393148,"year":2021,"party":"DENK","seats":3.0},{"novelty":0.4857238282,"year":2021,"party":"PvdD","seats":6.0},{"novelty":0.4002043788,"year":2021,"party":"CDA","seats":15.0},{"novelty":0.3926957927,"year":2021,"party":"CU","seats":5.0},{"novelty":0.490522024,"year":2021,"party":"PVV","seats":17.0},{"novelty":0.4582320282,"year":2021,"party":"FVD","seats":8.0},{"novelty":0.4360368093,"year":2021,"party":"JA21","seats":3.0},{"novelty":0.4327534996,"year":2021,"party":"BBB","seats":1.0},{"novelty":0.4056866467,"year":2021,"party":"VVD","seats":34.0},{"novelty":0.4031352372,"year":2021,"party":"D66","seats":24.0},{"novelty":0.4322978988,"year":2021,"party":"50PLUS","seats":1.0},{"novelty":0.4699941429,"year":2021,"party":"SGP","seats":3.0},{"novelty":0.3524763681,"year":2023,"party":"Volt","seats":5.0},{"novelty":0.3601499832,"year":2023,"party":"BBB","seats":11.0},{"novelty":0.3808523548,"year":2023,"party":"BVNL","seats":1.0},{"novelty":0.4024582592,"year":2023,"party":"Bij1","seats":1.0},{"novelty":0.360775372,"year":2023,"party":"CDA","seats":4.0},{"novelty":0.338111302,"year":2023,"party":"CU","seats":3.0},{"novelty":0.3194481215,"year":2023,"party":"D66","seats":6.0},{"novelty":0.3633662788,"year":2023,"party":"DENK","seats":3.0},{"novelty":0.3681969034,"year":2023,"party":"FVD","seats":4.0},{"novelty":0.3659553919,"year":2023,"party":"JA21","seats":2.0},{"novelty":0.3423354063,"year":2023,"party":"NSC","seats":27.0},{"novelty":0.423320394,"year":2023,"party":"PVV","seats":19.0},{"novelty":0.4190734087,"year":2023,"party":"PvdD","seats":7.0},{"novelty":0.4315448906,"year":2023,"party":"SGP","seats":3.0},{"novelty":0.3678744761,"year":2023,"party":"SP","seats":5.0},{"novelty":0.3523849987,"year":2023,"party":"VVD","seats":26.0},{"novelty":0.3243760115,"year":2023,"party":"GL\/PvdA","seats":25.0},{"novelty":0.3960708485,"year":2023,"party":"50PLUS","seats":1.0}]

function createAnnotation(svg, xy, xytext, text, maxWidth, xOffset, yOffset) {
  svg.append('defs').append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 10)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', 'black');

  const path = `M${xy[0]},${xy[1]} Q${(xy[0] + xytext[0]) / 2},${xy[1]} ${xytext[0]},${xytext[1]}`;

  svg.append('path')
    .attr('d', path)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', '1px')
    .attr('marker-end', 'url(#arrow)');

  const annotationGroup = svg.append('g');

  const textElement = annotationGroup.append('text')
    .attr('x', xytext[0] )
    .attr('y', xytext[1] + yOffset)
    .attr('text-anchor', 'start')
    .style('font-size', '12px'); // Adjust the font size as needed

  function wrap(textElement, text, width) {
    const words = text.split(/\s+/).reverse();
    let word, line = [], lineNumber = 0, lineHeight = 1.1, // ems
        y = textElement.attr('y'),
        dy = parseFloat(textElement.attr('dy') || 0),
        tspan = textElement.text(null).append('tspan').attr('x', xytext[0]).attr('y', y).attr('dy', dy + 'em');

    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(' '));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        tspan = textElement.append('tspan').attr('x', xytext[0]).attr('y', y).attr('dy', (++lineNumber * lineHeight + dy) + 'em').text(word);
      }
    }
  }

  wrap(textElement, text, maxWidth);
}

let averageByYear = {};
dataset.forEach(d => {
    if (!averageByYear[d.year]) {
        averageByYear[d.year] = { totalNovelty: 0, count: 0 };
    }
    averageByYear[d.year].totalNovelty += d.novelty;
    averageByYear[d.year].count += 1;
});

let averageData = Object.keys(averageByYear).map(year => {
    return {
        year: year,
        averageNovelty: averageByYear[year].totalNovelty / averageByYear[year].count
    };
});

function seededRandom(seed) {
  return function() {
    seed = seed * 16807 % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const myRandom = seededRandom(20); // 1234 is the seed
const chartContainer = d3.select(element);

function drawGraph() {
// Set up SVG and scales
    d3.select(element).select('svg').remove();

const containerWidth = chartContainer.node() ? chartContainer.node().getBoundingClientRect().width : 800;

const tooltip = d3.select(element).append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

const margin = { top: 20, right: 20, bottom: 60, left:20 },
  width = containerWidth - margin.left - margin.right,
  height = 360 - margin.top - margin.bottom;

const x = d3.scaleLinear()
  .domain([2002, 2024])
  .range([0, width]);

const y = d3.scaleLinear()
  .domain([0.27, d3.max(dataset, d => d.novelty)])
  .range([height, 0]);


const svg = d3.select(element).append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

createAnnotation(svg, 
                 [x(2017.3), y(0.662484)], 
                 [x(2018.5), y(0.64)], 
                 "Het A4'tje van PVV in 2017 was statistisch het meest vernieuwend..", 
                 100,
                 10,
                 12); // maxWidth for text

createAnnotation(svg, 
                 [x(2003.15), y(0.257954)], 
                 [x(2004), y(0.28)], 
                 ".. dat van CDA in 2003 het minst", 
                 100,
                  10,
                -15); // maxWidth for text


svg.selectAll('circle')
  .data(dataset)
  .enter().append('circle')
  .attr('cx', d => x(d.year) +  myRandom() * 10 - 5)
  .attr('cy', d => y(d.novelty))
  .attr('r', 5.5)
  .style("opacity", 0.2)
  .style('fill', '#e30b1b');

// AVERAGE LINE 
const uniqueYears = [...new Set(dataset.map(d => d.year))].sort((a, b) => a - b);

uniqueYears.forEach((word) => {
        svg.append("text")
          .attr("x", x(word))
          .attr("y", y(0.19))
          .text(word)
          .style("text-anchor", "middle")
          .style("opacity", 0.5)
          .attr("font-family", "sans-serif")
          .attr("font-size", "20px")
          .attr("fill", "black");
        svg.append("text");
      });


const line = d3.line()
    .x(d => x(d.year))
    .y(d => y(d.averageNovelty))
    .curve(d3.curveCatmullRom);

svg.append('path')
    .datum(averageData)
    .attr('fill', 'none')
    .attr('stroke', '#e30b1b')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 3)
    .attr('d', line);


// ARROWS
    const arrowColors = {
  'arrow-up': '#BE4F00',  // Red color for the upward arrow
  'arrow-down': '#127abf' // Blue color for the downward arrow
};


svg.append('defs').selectAll('marker')
  .data(['arrow-up', 'arrow-down'])
  .enter().append('marker')
    .attr('id', d => d)
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 5)
    .attr('refY', 0)
    .attr('markerWidth', 4)
    .attr('markerHeight', 4)
    .attr('orient', d => d === 'arrow-up' ? 'auto-start-reverse' : 'auto')
  .append('path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', d => arrowColors[d]);

svg.append('line')
  .attr('class', 'y-axis')
  .attr('x1', 0)
  .attr('y1', 0)
  .attr('x2', 0)
  .attr('y2', (height / 2) - 5)  // Halfway minus some offset for the text
  .attr('stroke', '#BE4F00')
  .attr('stroke-width', '1.5')
  .attr('marker-start', 'url(#arrow-up)');

svg.append('line')
  .attr('class', 'y-axis')
  .attr('x1', 0)
  .attr('y1', (height / 2) + 30)  // Halfway plus some offset for the text
  .attr('x2', 0)
  .attr('y2', height + 25)
  .attr('stroke', '#127abf')
  .attr('stroke-width', '1.5')
  .attr('marker-end', 'url(#arrow-down)');

svg.append('text')
  .attr('x', -12)
  .attr('y', -12)
  .attr('text-anchor', 'end')
  .attr('alignment-baseline', 'middle')
  .attr("transform", "rotate(-90)")
  .style("fill", "#BE4F00")
  .text('heel vernieuwend');

svg.append('text')
  .attr('x',-180)
  .attr('y', -12)
  .attr('text-anchor', 'end')
  .attr('alignment-baseline', 'middle')
  .attr("transform", "rotate(-90)")
  .style("fill", "#127abf")
  .text('niet vernieuwend');

svg.selectAll('circle')
  .data(dataset)
    // Increase opacity on mouseover
  .on("mouseover", function(event, d) {
    d3.select(this)
      .style("opacity", 1); 
    tooltip.style("opacity", 1);
    tooltip.html("<strong>" + d.party + "</strong><br/>" + d.year)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseout", function(d) {
        d3.select(this)
      .style("opacity", 0.2); // Reset opacity on mouseout
    tooltip.style("opacity", 0);
  });

}

drawGraph();

let lastWidth = chartContainer.node().getBoundingClientRect().width;
const significantChangeThreshold = chartContainer.node().getBoundingClientRect().width * 0.10; // for 10%

window.addEventListener('resize', () => {
  const newWidth = chartContainer.node().getBoundingClientRect().width;
  if (Math.abs(newWidth - lastWidth) > significantChangeThreshold) {
    lastWidth = newWidth;
    drawGraph(); // Redraw graph with new dimensions
  }
});
};

drawNovelty("#novelty-graph")
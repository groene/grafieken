function drawLines(element){
  const party2col = {
    "PvdA": "#e30b1b",
    "CDA": "#3c9535",
    "VVD": "#ff5501",
    "SP": "#c71617",
    "D66": "#00b72c",
    "GL": "#69ca1f",
    "PVV": "#0d4675",
    "CU": "#00a0ed",
    "SGP": "#f39307",
    "PvdD": "#007124",
    "Overig": "#7f7b7a",
    "DENK": "#BE4F00",
    "FVD": "#a81916",
    "NSC": "#13123b",
    "GL/PvdA": "#00a646",
    "BBB": "#92c01f",
    "JA21": "#232b57",
    "BVNL": "#232b4c",
    "LPF": "#2e498d",
    "Volt": "#502279",
    "50PLUS": "#500051",
    "LN": "#042e62",
    "Bij1": "#000"
  };

  const jsonData = [{"pc_1":-1.3054684029,"year":2002,"party":"CDA","is_visible":true},{"pc_1":-0.5484435511,"year":2002,"party":"CU","is_visible":false},{"pc_1":-0.1176272666,"year":2002,"party":"D66","is_visible":false},{"pc_1":0.5342876991,"year":2002,"party":"GL","is_visible":true},{"pc_1":-1.278793613,"year":2002,"party":"LN","is_visible":false},{"pc_1":-2.0950782396,"year":2002,"party":"LPF","is_visible":false},{"pc_1":-0.3264843569,"year":2002,"party":"PvdA","is_visible":true},{"pc_1":-0.9196586389,"year":2002,"party":"SGP","is_visible":false},{"pc_1":0.6084346563,"year":2002,"party":"SP","is_visible":false},{"pc_1":-2.1717365662,"year":2002,"party":"VVD","is_visible":true},{"pc_1":-1.3054684029,"year":2003,"party":"CDA","is_visible":true},{"pc_1":-1.7299524014,"year":2003,"party":"CU","is_visible":false},{"pc_1":-1.4493007481,"year":2003,"party":"D66","is_visible":false},{"pc_1":-0.5304034091,"year":2003,"party":"GL","is_visible":true},{"pc_1":-1.1017611184,"year":2003,"party":"LN","is_visible":false},{"pc_1":-2.5421690697,"year":2003,"party":"LPF","is_visible":false},{"pc_1":-0.8070934408,"year":2003,"party":"PvdA","is_visible":true},{"pc_1":0.3562802956,"year":2003,"party":"SP","is_visible":false},{"pc_1":-3.2466136416,"year":2003,"party":"VVD","is_visible":true},{"pc_1":-0.9792296536,"year":2006,"party":"CDA","is_visible":true},{"pc_1":-0.6456834008,"year":2006,"party":"CU","is_visible":false},{"pc_1":0.4131356624,"year":2006,"party":"D66","is_visible":false},{"pc_1":1.233940389,"year":2006,"party":"GL","is_visible":true},{"pc_1":-4.236061434,"year":2006,"party":"PVV","is_visible":true},{"pc_1":-0.3519691889,"year":2006,"party":"PvdA","is_visible":true},{"pc_1":1.3681115147,"year":2006,"party":"PvdD","is_visible":false},{"pc_1":-2.2323982756,"year":2006,"party":"SGP","is_visible":false},{"pc_1":0.4156317671,"year":2006,"party":"SP","is_visible":false},{"pc_1":-2.2251918984,"year":2006,"party":"VVD","is_visible":true},{"pc_1":-1.2020529603,"year":2010,"party":"CDA","is_visible":true},{"pc_1":-0.6641803207,"year":2010,"party":"CU","is_visible":false},{"pc_1":0.3135136147,"year":2010,"party":"D66","is_visible":false},{"pc_1":1.3398202271,"year":2010,"party":"GL","is_visible":true},{"pc_1":-3.2975033244,"year":2010,"party":"PVV","is_visible":true},{"pc_1":0.362207067,"year":2010,"party":"PvdA","is_visible":true},{"pc_1":1.7330492536,"year":2010,"party":"PvdD","is_visible":false},{"pc_1":-1.9636654984,"year":2010,"party":"SGP","is_visible":false},{"pc_1":1.3106490939,"year":2010,"party":"SP","is_visible":false},{"pc_1":-3.0549995282,"year":2010,"party":"VVD","is_visible":true},{"pc_1":-0.9328407341,"year":2012,"party":"50PLUS","is_visible":false},{"pc_1":-1.1124175085,"year":2012,"party":"CDA","is_visible":true},{"pc_1":-0.7246260494,"year":2012,"party":"CU","is_visible":false},{"pc_1":-0.6560438644,"year":2012,"party":"D66","is_visible":false},{"pc_1":1.647634212,"year":2012,"party":"GL","is_visible":true},{"pc_1":-3.2987161433,"year":2012,"party":"PVV","is_visible":true},{"pc_1":0.5286119509,"year":2012,"party":"PvdA","is_visible":true},{"pc_1":2.2859826557,"year":2012,"party":"PvdD","is_visible":false},{"pc_1":-2.4256992516,"year":2012,"party":"SGP","is_visible":false},{"pc_1":1.3393549998,"year":2012,"party":"SP","is_visible":false},{"pc_1":-3.0723609894,"year":2012,"party":"VVD","is_visible":true},{"pc_1":1.1002852664,"year":2017,"party":"50PLUS","is_visible":false},{"pc_1":-0.2826799421,"year":2017,"party":"CDA","is_visible":true},{"pc_1":0.162138276,"year":2017,"party":"CU","is_visible":false},{"pc_1":1.9328079502,"year":2017,"party":"D66","is_visible":false},{"pc_1":0.9007840042,"year":2017,"party":"DENK","is_visible":false},{"pc_1":-1.9282204669,"year":2017,"party":"FVD","is_visible":true},{"pc_1":3.0426034474,"year":2017,"party":"GL","is_visible":true},{"pc_1":-3.7039800993,"year":2017,"party":"PVV","is_visible":true},{"pc_1":1.8147348715,"year":2017,"party":"PvdA","is_visible":true},{"pc_1":2.6546686898,"year":2017,"party":"PvdD","is_visible":false},{"pc_1":-2.870627026,"year":2017,"party":"SGP","is_visible":false},{"pc_1":2.2829881468,"year":2017,"party":"SP","is_visible":false},{"pc_1":-1.9390617819,"year":2017,"party":"VVD","is_visible":true},{"pc_1":0.640826108,"year":2021,"party":"50PLUS","is_visible":false},{"pc_1":0.2487987682,"year":2021,"party":"BBB","is_visible":true},{"pc_1":6.3082247014,"year":2021,"party":"Bij1","is_visible":false},{"pc_1":0.0707228093,"year":2021,"party":"CDA","is_visible":true},{"pc_1":1.3454366278,"year":2021,"party":"CU","is_visible":false},{"pc_1":1.5978719649,"year":2021,"party":"D66","is_visible":false},{"pc_1":3.7982616663,"year":2021,"party":"DENK","is_visible":false},{"pc_1":-2.1813724181,"year":2021,"party":"FVD","is_visible":true},{"pc_1":3.3530565341,"year":2021,"party":"GL","is_visible":true},{"pc_1":-2.1332775964,"year":2021,"party":"JA21","is_visible":true},{"pc_1":-2.649969157,"year":2021,"party":"PVV","is_visible":true},{"pc_1":2.3830016385,"year":2021,"party":"PvdA","is_visible":true},{"pc_1":2.9232003345,"year":2021,"party":"PvdD","is_visible":false},{"pc_1":-2.1198117762,"year":2021,"party":"SGP","is_visible":false},{"pc_1":3.3690750549,"year":2021,"party":"SP","is_visible":false},{"pc_1":-0.9007326882,"year":2021,"party":"VVD","is_visible":true},{"pc_1":2.0282986442,"year":2021,"party":"Volt","is_visible":false},{"pc_1":0.253720579,"year":2023,"party":"50PLUS","is_visible":false},{"pc_1":-0.1935324933,"year":2023,"party":"BBB","is_visible":true},{"pc_1":-1.3821529886,"year":2023,"party":"BVNL","is_visible":true},{"pc_1":6.3076678005,"year":2023,"party":"Bij1","is_visible":false},{"pc_1":-0.0065166079,"year":2023,"party":"CDA","is_visible":true},{"pc_1":1.0330119886,"year":2023,"party":"CU","is_visible":false},{"pc_1":1.9405532162,"year":2023,"party":"D66","is_visible":false},{"pc_1":1.8645214544,"year":2023,"party":"DENK","is_visible":false},{"pc_1":-1.1409607504,"year":2023,"party":"FVD","is_visible":true},{"pc_1":2.651506657,"year":2023,"party":"GL\/PvdA","is_visible":true},{"pc_1":-1.7925009591,"year":2023,"party":"JA21","is_visible":true},{"pc_1":-0.0929139928,"year":2023,"party":"NSC","is_visible":true},{"pc_1":-2.0646759296,"year":2023,"party":"PVV","is_visible":true},{"pc_1":2.6580378,"year":2023,"party":"PvdD","is_visible":false},{"pc_1":-1.0800981976,"year":2023,"party":"SGP","is_visible":false},{"pc_1":2.7824943726,"year":2023,"party":"SP","is_visible":false},{"pc_1":-1.010409122,"year":2023,"party":"VVD","is_visible":true},{"pc_1":2.1013202232,"year":2023,"party":"Volt","is_visible":false}]


  const setVisible = {};


  jsonData.forEach(d => {
    setVisible[d.party] = d.is_visible;
  });

  jsonData.forEach((d, i) => {
    if (!d.id) {
      d.id = `${d.party}-${i}`; // Create a unique ID using the party and index
    }
  });

  const controls = d3.select(element).append('div').attr('id', 'controls');
  const chartContainer = d3.select(element);
  const containerWidth = chartContainer.node() ? chartContainer.node().getBoundingClientRect().width : 800;

  const margin = { top: 90, right: 10, bottom: 30, left:10 },
    width = containerWidth - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;


  const x = d3.scaleLinear().domain([d3.min(jsonData, d => d.pc_1 * -1), d3.max(jsonData, d => d.pc_1 * -1)]).range([0, width]);
  const y = d3.scaleLinear().domain(d3.extent(jsonData, d => d.year)).range([height, 0]);

  const valueline = d3.line()
    .x(d => x(d.pc_1 * -1))
    .y(d => y(d.year))
    .curve(d3.curveCatmullRom);

  const svg = chartContainer.append("svg")
    .attr("width", '100%') 
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);


  const xAxis = d3.axisBottom(x);
  const yAxis = d3.axisLeft(y);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  let initialRender = true; // Flag to check if it's the first render

  function drawGraph() {

    const visibleData = jsonData.filter(d => setVisible[d.party]);
    x.domain([d3.min(visibleData, d => d.pc_1 * -1), d3.max(visibleData, d => d.pc_1 * -1)]);

    // Update the x-axis
    if (!initialRender) {
      svg.select(".x.axis").transition().duration(500).call(xAxis);
    } else {
      svg.select(".x.axis").call(xAxis);
    }

    d3.group(jsonData, d => d.party).forEach((value, key) => {
      if (!setVisible[key]) {
        svg.selectAll(".line-" + sanitizeClass(key)).style("display", "none");
        svg.selectAll(".dot-" + sanitizeClass(key)).style("display", "none");
        svg.selectAll(".text-" + sanitizeClass(key)).style("display", "none");
      } else {
        svg.selectAll(".line-" + sanitizeClass(key)).style("display", null);
        svg.selectAll(".dot-" + sanitizeClass(key)).style("display", null);
        svg.selectAll(".text-" + sanitizeClass(key)).style("display", null);
      }
    });


     let vLine = svg.selectAll('.vertical-line')
      .data([0]); // Single data point for x position of the line

   vLine.enter()
    .append('line')
    .attr('class', 'vertical-line')
    .style('stroke', '#000000')
    .style('stroke-width', 2)
    .style('opacity', 0.15)
    .merge(vLine)
    .attr('x1', x(0))
    .attr('x2', x(0))
    .attr('y1', y(y.domain()[0])) 
    .attr('y2', y(y.domain()[0])) 
    .each(function() {
      let totalLength = y(y.domain()[0]) - y(y.domain()[1]) + 50; // Extend the total length to account for the longer line
      
      d3.select(this)
        .attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .duration(500)
        .ease(d3.easeLinear)
        .attr('stroke-dashoffset', 0)
        .attr('y2', y(y.domain()[1] + 30)); // Extend the line to the bottom of the y-axis
    });

    // Remove the line if it's no longer needed
    vLine.exit().remove();

  let vLineLabel = svg.selectAll('.vline-label')
      .data([0]); // Binding the label to the vertical line's x position

  vLineLabel.enter()
      .append('text')
      .attr('class', 'vline-label')
      .style('fill', '#000000') // Set the text color
      .style('text-anchor', 'middle') // Center the text on its x position
      .style('font-weight', "bold")
      .attr('x', x(0)) // Set the initial x position to the left of the vertical line
      .attr('y', y(y.domain()[1]) - 57) // Position the text slightly above the top of the y-axis
      .style('opacity', 0) // Set initial opacity to 0 to make it invisible initially
      .text('het politieke midden') // Set the text for the label
      .merge(vLineLabel) // Merge enter and update selections
      .transition()
      .duration(500)
      .style('opacity', 0.25) // Transition the opacity to make the label appear
      .attr('x', x(0)); // Transition the x position to the right of the vertical line

  // Remove the label if it's no longer needed
  vLineLabel.exit()
      .transition()
      .duration(500)
      .style('opacity', 0) // Transition the opacity to make the label disappear
      .remove();

  const uniqueYears = [...new Set(jsonData.map(d => d.year))].sort((a, b) => a - b);



    const yearLabels = svg.selectAll('.year-label')
      .data(uniqueYears, d => d);

    // Enter + update selection for year labels
    yearLabels.enter()
      .append('text')
        .attr('class', 'year-label')
        .attr("opacity", 0.3)
        // No need to set 'x' and 'y' here, they will be set below
      .merge(yearLabels)
        .attr('x', chartContainer.node().getBoundingClientRect().width -50) 
        .attr('y', d => y(d)) // Update 'y' position based on the y scale
        .text(d => d);

    // Exit selection to remove labels that are no longer needed
    yearLabels.exit().remove();



    // Group the data by party
    const dataNest = d3.group(visibleData, d => d.party);

    // Draw the lines for each party
    dataNest.forEach((value, key) => {   
       let line = svg.selectAll(".line-" + sanitizeClass(key))
      .data([value], d => d.id); // Use a key function for object constancy

     // let line = svg.selectAll(".line-" + sanitizeClass(key))
     //  .data([value], d => d.id); // Use a key function for object constancy

    let lineUpdate = line.enter()
      .append("path")
      .attr("class", "line line-" + sanitizeClass(key))
      .style("stroke", party2col[key] || "#000000")
      .style("stroke-width", 2)
      .style("fill", "none")
      .merge(line); // Merge the entered lines with the existing lines

    // Initial path definition with the new data
    lineUpdate.attr("d", valueline);

    lineUpdate.each(function() {
      let totalLength = this.getTotalLength();

      d3.select(this)
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(500)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    });

    line.exit().remove();
   
   let dots = svg.selectAll(".dot-" + sanitizeClass(key))
    .data(value, d => {
      console.log(`Binding data point with id: ${d.id}`);
      return d.id;
    });
  let dotsEnter = dots.enter()
    .append("circle")
    .attr("class", "dot dot-" + sanitizeClass(key))
    .attr("r", 5.5)
    .style("fill", d => party2col[d.party] || "#000000");

  // Initial position for new dots
  dotsEnter.attr("cx", d => x(d.pc_1 * -1))
    .attr("cy", d => y(d.year));

  // Update existing dots with new positions
  dots.merge(dotsEnter)
    .transition().duration(500)
    .attr("cx", d => x(d.pc_1 * -1))
    .attr("cy", d => y(d.year));

  // Remove dots that are no longer present
  dots.exit().remove();

      let labels = svg.selectAll(".text-" + sanitizeClass(key))
        .data([value[value.length - 1]], d => d.id); // Bind the last data point of the party

      // Enter selection for the new labels
      let labelsEnter = labels.enter()
        .append("text")
        .attr("class", "text text-" + sanitizeClass(key))
          .attr("text-anchor", "end") // Align the text to the end

        .style("fill", party2col[key] || "#000000") // Use party colors
        .attr("x", d => x(d.pc_1 * -1) - 10)
        .attr("y", d => y(d.year))
        .style("font-size", "12px")
        .style("opacity", 0) // New labels are initially transparent
     .attr("transform", function(d) {
      return "rotate(90," + x(d.pc_1 * -1) + "," + y(d.year) + ")";
    });

      // Update selection for the existing labels
      labels.merge(labelsEnter)
        .text(key)
        .transition().duration(500)
        .style("opacity", 1) // Fade in the new labels
          // Apply rotation using CSS transform
        .attr("x", d => x(d.pc_1 * -1) - 10) // Move to the new position
        .attr("y", d => y(d.year)  ) // Move to the new position
          .attr("transform", function(d) {
      return "rotate(90," + x(d.pc_1 * -1) + "," + y(d.year) + ")";
    });


        

      // Remove the labels that are no longer present
      labels.exit()
        .transition().duration(500)
        .style("opacity", 0) // Fade out before removing
        .remove();
    });
    // Update the y-axis
    if (!initialRender) {
      svg.select(".y.axis").transition().duration(1000).call(yAxis);
    } else {
      svg.select(".y.axis").call(yAxis);
    }


     

    initialRender = false; // After first render, set this to false so transitions can occur
  }

  // Remember to define or import the following in your actual code:
  // - jsonData: the original data array
  // - setVisible: an object with boolean values to control visibility
  // - x, y: d3 scale functions for your axes
  // - svg: the svg element selection
  // - xAxis, yAxis: d3 axis functions

  function sanitizeClass(className) {
    return className.replace(/\//g, '_').replace(/\s+/g, '_');
  }



  const partyOrder = ['GL', 'PvdA', 'GL/PvdA', 'D66', 'CDA', 'NSC', 'BBB', 'VVD', 'LPF', 'FVD', 'BVNL', 'JA21', 'PVV', 'Bij1', 'SP', 'Volt', 'DENK', 'PvdD', 'CU', '50PLUS', 'LN', 'SGP']


  // Sort the party data based on the defined order
  const orderedPartyData = Array.from(d3.group(jsonData, d => d.party).keys())
    .sort((a, b) => partyOrder.indexOf(a) - partyOrder.indexOf(b));

  controls.selectAll('button')
    .data(orderedPartyData)
    .enter().append('button')
    .style("background-color", d => party2col[d])
  .attr('class', d => `party-button ${setVisible[d] ? 'active' : 'inactive'}`)
    .html(d => `<span class="party-line" style="background-color: ${party2col[d]}"></span>${d} <span class="close-btn">✕</span>`)
    .on('click', function(event, party) {
      setVisible[party] = !setVisible[party];
      drawGraph();
      d3.select(this)
        .classed('active', setVisible[party])
        .classed('inactive', !setVisible[party]);

      // If you want a transition effect, you can use the transition() method
      d3.select(this)
        .transition()
        
    });

  drawGraph();

  let lastWidth = chartContainer.node().getBoundingClientRect().width;
  const significantChangeThreshold = chartContainer.node().getBoundingClientRect().width * 0.10; // for 10%

  window.addEventListener('resize', () => {
    const newWidth = chartContainer.node().getBoundingClientRect().width;
    if (Math.abs(newWidth - lastWidth) > significantChangeThreshold) {
      lastWidth = newWidth;
      x.range([0, newWidth - margin.left - margin.right]);
      drawGraph();
  }
});
};

drawLines("#battle-graph");
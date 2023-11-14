function drawRightBars(element){

const data = [{"dim":0.5583657733,"label":"Law and order","example":["Daarom is het wenselijk om zeker bij recidive een hogere strafeis op te leggen.","De schade van slachtoffers wordt altijd en zo snel mogelijk verhaald op de dader(s).","Een oplegde straf wordt uitgezeten."]},{"dim":0.4906652091,"label":"Vrijemarkteconomie","example":["Zorginstellingen kunnen van elkaar gaan verschillen in medische aanpak en in kosten.","Laat de markt binnen maatschappelijk aanvaarde kaders zijn werk doen zonder dwang door marktverstorende sturing en regelgeving.","Te veel, te gedetailleerde en tegenstrijdige regels zijn een obstakel voor ondernemerschap."]},{"dim":0.4692711275,"label":"Nationalisme","example":["Stuk voor stuk zijn ze onderdeel van ons verleden, heden en onze toekomst.","Een land dat trots is op zijn eigen identiteit,","Met oog voor de kijk van onze voorouders op de geschiedenis."]},{"dim":0.4672864107,"label":"Inperking verzorgingsstaat","example":["Het PGB kan niet dienen ter dekking van huisvestingskosten.","Het pensioenstelsel wordt hervormd in lijn met het door sociale partners en kabinet uitgewerkte pensioenakkoord, zodat het weer gezond en toekomstbestendig wordt.","Een krimpende beroepsbevolking zal steeds minder kunnen opbrengen om de voorzieningen als goede zorg en goede sociale zekerheid op peil te houden."]},{"dim":0.449200924,"label":"Leger: positief","example":["Onze veteranen verdienen erkenning en waardering voor hun inzet in oorlogsomstandigheden en tijdens missies.","Verlenging van de levensduur van de F16 is mogelijk en heeft onze voorkeur.","Dat respect moet zich mede vertalen in betere zorg voor militairen, een betere beloning, het tegengaan van uitstroom en goede geestelijke zorg."]},{"dim":0.4161795011,"label":"Orthodoxe economie","example":["Een verantwoorde loonkostenontwikkeling is van groot belang om onszelf niet uit de markt te prijzen, de werkgelegenheid te behouden en om loon-opdrijving in de collectieve sector te voor-komen.","Rode draad is de burgers minder te laten betalen en de overheid meer te laten bezuinigen dan in het barre winterakkoord is overeengekomen.","Maar waarom vinden wij 3% tekort in 2013 en de begroting op orde in 2017 dan zo belangrijk?"]},{"dim":0.4141964178,"label":"Multiculturalisme: negatief","example":["Deze totalitaire ideologie schrijft haar aanhangers eeuwigdurende oorlog voor, tot het moment dat de hele wereld islamitisch is.","Er komt een verbod voor gemeenten om statushouders voorrang te geven bij het toewijzen van sociale huurwoningen.","Dubbele nationaliteit stoppen. Wie een andere nationaliteit behoudt, kan geen Nederlander worden"]},{"dim":0.3728995052,"label":"Stimulansen","example":["De VVD wil ondernemers perspectief bieden door de kredietverstrekking weer op gang te brengen.","De investeringsfondsen InvestNL en InvestInternational worden opengesteld voor het midden- en kleinbedrijf en kansrijke start ups en scale ups.","Wij willen: Versoepelen ontslagrecht MKB, zodat ondernemers weer meer mensen aannemen."]},{"dim":0.3116844528,"label":"Efficientie overheid","example":["\u2018Den Haag\u2019 kan kleiner, maar moet vooral beter, toegesneden op een zelfbewuste overheid, die bindend leiding weet te geven.","De overheid dient zich voor hen verregaand te vereenvoudigen en daarbij helpt het stimuleren van een state-of-the-art digitale overheid die op zijn beurt doe-het-zelf gedrag bij burgers en bedrijven bevordert.","De overheid moet veel effici\u00ebnter gaan werken."]},{"dim":0.305480302,"label":"Traditionele normen","example":["In de politiek en de samenleving wordt misschien wat neergekeken op het werk in huishouden en gezin, de SGP vindt dit werk van grote waarde.","Christus Zelf heeft deze spreuk de diepste dimensie gegeven; Hij is niet op deze aarde gekomen om gediend te worden, maar om te dienen.","2. De belastingen meer dan nu gezins- en familievriendelijk zijn."]}]



const barHeight = 20;
const gap =2
const faqHeight = 25;
let chartHeight = data.length * (barHeight + gap);

const container = d3.select(element);
const containerWidth = container.node().getBoundingClientRect().width;
const width = containerWidth;

const chart = container.append('svg').attr('width', width).attr('height', chartHeight);

const x = d3.scaleLinear().domain([0, d3.max(data, d => d.dim)]).range([20, width]);

function wrapText(text, width) {
  text.each(function () {
    let text = d3.select(this);
    let words = text.text().split(/\s+/).reverse();
    let word;
    let line = [];
    let lineNumber = 0;
    let lineHeight = 1.2; // Adjust this value as needed
    let y = text.attr("y");
    let x = text.attr("x"); // Using 'x' from the text element
    let dy = parseFloat(text.attr("dy") || 0); // Ensuring 'dy' has a fallback value
    let tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        // Increment 'dy' by a constant 'lineHeight' each time
        tspan = text.append("tspan").attr("x", x).attr("y", y)
                    .attr("dy", (lineHeight + dy) + "em").text(word);
      }
    }
  });
}
function calculateTextHeight(textElement, lineHeight) {
  const lines = textElement.selectAll('tspan').size();
  return lines * lineHeight ;
}

function updateChart() {
d3.select(element).select('svg').remove();

    const container = d3.select(element);
const containerWidth = container.node().getBoundingClientRect().width;
const width = containerWidth;

const chart = container.append('svg').attr('width', width).attr('height', chartHeight);

const x = d3.scaleLinear().domain([0, d3.max(data, d => d.dim)]).range([20, width]);

  let yOffset = 0;
  chartHeight = data.reduce((acc, d) => {
    let barGroupHeight = barHeight + gap;
    if (d.expanded) {
      const textHeights = d.example.map(text => {
        const dummyText = chart.append('text')
          .style('font', '10px sans-serif')
          .style('opacity', 0)
          .text(text);

        dummyText.call(wrapText, width - 40);
        const textHeight = calculateTextHeight(dummyText, faqHeight);
        dummyText.remove();
        return textHeight;
      });

      barGroupHeight += textHeights.reduce((sum, height) => sum + height + gap, 0);
    }
    yOffset += barGroupHeight;
    return acc + barGroupHeight;
  }, 0);
  chart.attr('height', chartHeight);

  const barGroup = chart.selectAll('.bar-group').data(data, d => d.label).join('g').attr('class', 'bar-group').attr('transform', (d, i) => {
    const y = i === 0 ? 0 : d3.sum(data.slice(0, i), dd => barHeight + gap + (dd.expanded ? (dd.example.length )  * (faqHeight + gap) : 0));
    return `translate(0,${y})`;
  });

  barGroup.selectAll('.bar').data(d => [d]).join('rect').attr('class', 'bar').attr('fill', '#127abf').attr('width', d => x(d.dim) - 20).attr('height', barHeight).attr('x', 20).attr('rx', 5).attr('ry', 5).on('click', function(event, d) {
    d.expanded = !d.expanded;
    updateChart();
  });

  barGroup.selectAll('.label').data(d => [d]).join('text').attr('class', 'label').attr('x', d => x(d.dim) - 10).attr('text-anchor', 'end').attr('y', barHeight / 2).attr('fill', 'white').attr('dy', '.35em').text(d => `${d.label}`).on('click', function(event, d) {
    d.expanded = !d.expanded;
    updateChart();
  });

  barGroup.selectAll('.expand-collapse-symbol').data(d => [d]).join('text').attr('class', 'expand-collapse-symbol').attr('x', 12).attr('y', barHeight / 2).attr('text-anchor', 'end').attr('fill', 'black').style('font-weight', 'bold').attr('fill', '#127abf').text(d => d.expanded ? '-' : '+').on('click', function(event, d) {
    d.expanded = !d.expanded;
    updateChart();
  });


  let totalHeight = barHeight; // Start with the height of the bar itself
  


barGroup.each(function(d, i) {
  const group = d3.select(this);
  const exampleData = d.expanded ? d.example : [];

  // Create background rectangles for each text element
  const bgRects = group.selectAll('.faq-bg')
    .data(exampleData, d => d)
    .join(
      enter => enter.append('rect').attr('class', 'faq-bg'),
      update => update,
      exit => exit.remove()
    )
    .attr('x', 20)
    .attr('width', width -20)
    .attr('fill', '#f0f0f0')
    .attr('rx', 5)
    .attr('ry', 5);

  // Create text elements
  const texts = group.selectAll('.faq-text')
    .data(exampleData, d => d)
    .join(
      enter => enter.append('text')
        .style('font-size', '11px')
          .style("font-style", "italic")
        .attr('class', 'faq-text'),
      update => update,
      exit => exit.remove()
    )
    .attr('x', 30)
    .attr('dy', '.35em')
    .text(d => d);

  // Wrap text and calculate heights
  texts.call(wrapText, width - 40);

  let accumulatedHeight = barHeight + gap; // Start with the height of the bar plus a gap

  texts.each(function(d, index) {
    const textElement = d3.select(this);
    const textHeight = calculateTextHeight(textElement, faqHeight);
    console.log(textHeight)
    // Update positions based on the accumulated height
    textElement.attr('y', accumulatedHeight + faqHeight / 2);
    d3.select(bgRects.nodes()[index])
      .attr('y', accumulatedHeight )
      .attr('height', textHeight); // Adjust the height of the bg rect

    accumulatedHeight += textHeight + gap; // Add the height of this text and a gap to the accumulated height
  });

  // Update the totalHeight for the bar group
  d.totalHeight = accumulatedHeight;
});

// Recalculate the yOffset for spacing between bar groups
data.forEach((d, i) => {
  yOffset += (i === 0 ? 0 : d.totalHeight + gap);
});

// Update the chart height based on the yOffset
chartHeight = yOffset + gap; // Add one more gap for the bottom spacing
chart.attr('height', yOffset / 1.63);


   chart.selectAll('.bar-group').attr('transform', (d, i) => {
    const y = i === 0 ? 0 : d3.sum(data.slice(0, i), dd => dd.totalHeight + gap);
    return `translate(0,${y})`;
  });
}

updateChart();

const chartContainer = d3.select(element);
let lastWidth = chartContainer.node().getBoundingClientRect().width;
const significantChangeThreshold = lastWidth * 0.10; // for 10%

window.addEventListener('resize', () => {
  const newWidth = chartContainer.node().getBoundingClientRect().width;
  if (Math.abs(newWidth - lastWidth) > significantChangeThreshold) {
    lastWidth = newWidth;
    updateChart();
  }
});
};


drawRightBars("#right-container")
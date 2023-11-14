function drawLeftBars(element){
const data = [{"dim":0.6635406943,"label":"Gelijkwaardigheid","example":["De kosten van de zorg, maar ook van wonen leggen een groot beslag op het besteedbaar inkomen van mensen.","Dat is onze keus: opkomen voor de mensen die het meest een steuntje in de rug kunnen gebruiken.","In een vrije samenleving die door diversiteit en veelkleurigheid wordt gekenmerkt, waarin vele geluiden en tegengeluiden hoorbaar zijn en waarin verschillende krachten en tegenkrachten op elkaar inwerken, is de behoefte aan verbinding groot."]},{"dim":0.4476435472,"label":"Arbeidersgroepen","example":["Maar voor mensen die werken als schijnzelfstandige, uitzendkracht of flexwerker betekent werk nu vooral onzekerheid.","Ook de mensen die aan het werk zijn maken zich zorgen.","Maar ook in andere sectoren moet de positie van de individuele werknemer versterkt worden."]},{"dim":0.4469266694,"label":"Progressieve normen","example":["Als de donorvader, zijn partner en wellicht ook de draagmoeder het kind met liefde, zorg en aandacht willen opvoeden, dan verdienen zij de mogelijkheid om dit juridisch te erkennen en te beschermen \u2013 \u00f3\u00f3k in het belang van het ongeboren kind.","De euthanasiewet zorgt dat mensen die uitzichtloos en ondraaglijk lijden regie over hun eigen levenseinde kunnen hebben.","Er wordt duidelijk uitgelegd dat wanneer je niet reageert, er wordt uitgegaan van instemming met orgaandonatie."]},{"dim":0.4428843663,"label":"Leger: negatief","example":["Onder de noemer van terrorismebestrijding treden de Verenigde Staten sinds enige jaren in verschillende delen van de wereld, en in wisselende coalities, militair op.","Er zijn wapens die niet behoren te worden gebruikt.","1 Kernwapens de wereld uit."]},{"dim":0.398609015,"label":"Anti-groeieconomie","example":["Nederland moet inzetten op het beter functioneren van het emissiehandelssysteem.","Nederlanders verbruiken 3,5 keer meer van de grondstoffen van de aarde dan waar zij bij een eerlijke verdeling recht op zouden hebben.","Voedselverspilling op zo veel mogelijk manieren tegengaan"]},{"dim":0.3540588752,"label":"Anti-imperialisme","example":["5 Nederland zet zich actief in voor het corrigeren van koloniaal onrecht dat Nederland de voormalige Nederlandse koloni\u00ebn heeft aangedaan.","Globalisering werkt alleen als iedereen ervan profiteert.","Bovendien dragen deze Westerse landen op dit moment actief bij aan deze conflicten door middel van o.a. de wapenhandel."]},{"dim":0.3534532574,"label":"Nationalisering","example":["Grote vraag voor de toekomst is of de sociale zekerheid verder moet worden geprivatiseerd en daarmee vercommercialiseerd.","Wij bannen de markt uit de basiszorg.","Door de zorg terug te brengen in de handen van de overheid, kan de zorg van iedereen worden."]},{"dim":0.3450120239,"label":"Gecontroleerde economie","example":["Wij willen het aantrekkelijker maken om mensen in vaste dienst te houden of te nemen, bijvoorbeeld met belastingmaatregelen.","Betaalbaarder openbaar vervoer voor kinderen","De inkomens aan de top van de banken worden beperkt en komen onder de cao."]},{"dim":0.3212991913,"label":"Milieubescherming","example":["De veehouderij verkleint de milieudruk door het toepassen van de best beschikbare technieken voor de gecombineerde reductie van fijn stof, ammoniak, stikstof en CO2 door energiebesparing en productie van duurzame energie.","Verder speelt Nederland een rol bij de wijziging van het Europees visserijbeleid.","Transport van levende dieren over grote afstand wordt slechts bij uitzondering toegestaan."]},{"dim":0.320275387,"label":"Marktregulering","example":["De Partij voor de Dieren wil dat banken met nuts- functies in crisistijden overeind blijven, maar dat banken die geen nutsfunctie hebben, niet door de overheid worden gered als zij zichzelf in de problemen hebben gebracht.","De kwaliteit van het taal- en inburgeringsonderwijs wordt gecontroleerd door de Onderwijsinspectie of een andere daartoe gekwalificeerde instantie.","We zetten ons in voor eerlijke handel, zonder privileges voor multinationals en met harde normen voor de bescherming van mens en milieu."]}]



const barHeight = 20;
const gap = 2;
const faqHeight = 25;
let chartHeight = data.length * (barHeight + gap);

const container = d3.select(element);
const containerWidth = container.node().getBoundingClientRect().width;
const width = containerWidth;

const chart = container.append('svg').attr('width', width).attr('height', chartHeight);

const x = d3.scaleLinear().domain([0, d3.max(data, d => d.dim)]).range([width - 20, 20]);

function wrapText(text, width) {
  text.each(function () {
    let text = d3.select(this);
    let words = text.text().split(/\s+/).reverse();
    let word;
    let line = [];
    let lineNumber = 0;
    let lineHeight = 1.2; 
    let y = text.attr("y");
    let x = text.attr("x"); 
    let dy = parseFloat(text.attr("dy") || 0); 
    let tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width - 20) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
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

  const x = d3.scaleLinear().domain([0, d3.max(data, d => d.dim)]).range([width - 20, 20]);

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

  const barGroup = chart.selectAll('.bar-group').data(data, d => d.label).join('g')
    .attr('class', 'bar-group')
    .attr('transform', (d, i) => {
      const y = i === 0 ? 0 : d3.sum(data.slice(0, i), dd => barHeight + gap + (dd.expanded ? (dd.example.length )  * (faqHeight + gap) : 0));
      return `translate(0,${y})`;
    });

  barGroup.selectAll('.bar').data(d => [d]).join('rect')
    .attr('class', 'bar')
    .attr('fill', '#e30b1b')
    .attr('width', d => width - x(d.dim) - 25)
    .attr('height', barHeight)
    .attr('x', d => x(d.dim))
    .attr('rx', 5)
    .attr('ry', 5)
    .on('click', function(event, d) {
      d.expanded = !d.expanded;
      updateChart();
    });

  barGroup.selectAll('.label').data(d => [d]).join('text')
    .attr('class', 'label')
    .attr('x', d => x(d.dim) + 10)
    .attr('text-anchor', 'begin')
    .attr('y', barHeight / 2)
    .attr('fill', 'white')
    .attr('dy', '.35em')
    .text(d => `${d.label}`)
    .on('click', function(event, d) {
      d.expanded = !d.expanded;
      updateChart();
    });

  barGroup.selectAll('.expand-collapse-symbol').data(d => [d]).join('text')
    .attr('class', 'expand-collapse-symbol')
    .attr('x', d => width - 12)
    .attr('y', barHeight / 2)
    .attr('text-anchor', 'end')
    .attr('fill', 'black')
    .style('font-weight', 'bold')
    .attr('fill', '#e30b1b')
    .text(d => d.expanded ? '-' : '+')
    .on('click', function(event, d) {
      d.expanded = !d.expanded;
      updateChart();
    });

  barGroup.each(function(d, i) {
    const group = d3.select(this);
    const exampleData = d.expanded ? d.example : [];

    const bgRects = group.selectAll('.faq-bg')
      .data(exampleData, d => d)
      .join(
        enter => enter.append('rect').attr('class', 'faq-bg'),
        update => update,
        exit => exit.remove()
      )
      .attr('x', 20)
      .attr('width', width - 45)
      .attr('fill', '#f0f0f0')
      .attr('rx', 5)
      .attr('ry', 5);

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

    texts.call(wrapText, width - 40);

    let accumulatedHeight = barHeight + gap;

    texts.each(function(d, index) {
      const textElement = d3.select(this);
      const textHeight = calculateTextHeight(textElement, faqHeight);
      textElement.attr('y', accumulatedHeight + faqHeight / 2);
      d3.select(bgRects.nodes()[index])
        .attr('y', accumulatedHeight )
        .attr('height', textHeight);

      accumulatedHeight += textHeight + gap;
    });

    d.totalHeight = accumulatedHeight;
  });

  data.forEach((d, i) => {
    yOffset += (i === 0 ? 0 : d.totalHeight + gap);
  });

  chartHeight = yOffset + gap;
  chart.attr('height', yOffset / 1.39);

  chart.selectAll('.bar-group').attr('transform', (d, i) => {
    const y = i === 0 ? 0 : d3.sum(data.slice(0, i), dd => dd.totalHeight + gap);
    return `translate(0,${y})`;
  });
}

updateChart();

const chartContainer = d3.select(element);
let lastWidth = chartContainer.node().getBoundingClientRect().width;
const significantChangeThreshold = lastWidth * 0.10;

window.addEventListener('resize', () => {
  const newWidth = chartContainer.node().getBoundingClientRect().width;
  if (Math.abs(newWidth - lastWidth) > significantChangeThreshold) {
    lastWidth = newWidth;
    updateChart();
  }
});
};

drawLeftBars("#left-container");
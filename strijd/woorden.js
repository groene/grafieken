function drawWords(element){

const data = {'CDA': {'Algemeen': {'2006': ['maatschappelijk', 'zorg', 'ver', 'kost', 'waarde'], '2010': ['solidariteit', 'maatschappelijk', 'belang', 'duurzaam', 'verantwoordelijkheid'], '2012': ['maatschappelijk', 'duurzaam', 'zorg', 'aanpak', 'organisatie'], '2017': ['samenleving', 'zorg', 'familie', 'eerlijk', 'gezin'], '2021': ['nieuw', 'jong', 'ruimte', 'generatie', 'samenleving'], '2023': ['gezin', 'rechtvaardig', 'fatsoenlijk', 'recht', 'solidariteit']}, 'Migratie': {'2010': ['omroep', 'samenleving'], '2012': ['samenleving'], '2017': ['integratie', 'nieuwkomer'], '2021': ['toekomst', 'draagvlak', 'migratie', 'goed', 'nieuw'], '2023': ['mens', 'samenleving']}, 'Bestaanszekerheid': {'2006': ['werk'], '2012': ['zorg', 'kwaliteit', 'noodzakelijk', 'vast'], '2017': ['kind', 'probleem', 'zorg', 'mogelijk', 'pensioen'], '2021': ['zorg', 'regeling', 'gezond', 'jong', 'instantie'], '2023': ['gezin', 'ruimte', 'publiek', 'gezond']}, 'Veiligheid': {'2010': ['aanpak', 'veiligheid'], '2012': ['streng'], '2017': ['huidig', 'aanpak', 'burger', 'samenleving', 'lang'], '2021': ['samenleving', 'ondermijning', 'rechtsstaat', 'vorm', 'land'], '2023': ['justitie', 'criminaliteit', 'zwaar', 'crimine']}, 'Milieu': {'2010': ['natuur'], '2012': ['duurzaam'], '2017': ['eerlijk', 'duurzaam', 'economie', 'groei', 'stad'], '2021': ['verduurzaming', 'investering', 'toekomst', 'generatie', 'balans'], '2023': ['gezond', 'bodem', 'duurzaam', 'sector', 'boer']}, 'Economie': {'2010': ['zorg', 'sociaal', 'kwaliteit', 'economie', 'overheid'], '2012': ['financieel', 'organisatie', 'hervorming', 'structureel', 'maatschappelijk'], '2017': ['eerlijk', 'vast', 'contract', 'economie', 'samenleving'], '2021': ['crisis', 'bank', 'eerlijk', 'nieuw', 'productie'], '2023': ['economie', 'eerlijk', 'duurzaam', 'inflatie', 'investering']}, 'Normen': {'2006': ['maatschappelijk', 'vrijheid'], '2010': ['overheid'], '2012': ['organisatie', 'ruimte', 'werk', 'goed'], '2017': ['samenleving', 'familie', 'zorg', 'sterk', 'gezin'], '2021': ['jong', 'samenleving', 'digitaal', 'zorg', 'toekomst'], '2023': ['gezin', 'wijk', 'fatsoenlijk', 'samenleving', 'land']}}, 'VVD': {'Algemeen': {'2006': ['procent', 'provincie', 'euro', 'burgemeester', 'regel'], '2010': ['overheid', 'krijgsmacht', 'euro', 'ondernemer', 'kind'], '2012': ['ondernemer', 'opleiding', 'periode', 'deel', 'belangrijk'], '2017': ['mogelijk', 'makkelijk', 'weg', 'techniek', 'klimaat'], '2021': ['bedrijf', 'ondernemer', 'jaar', 'europees', 'mogelijkheid'], '2023': ['schoon', 'grip', 'fijn', 'veilig', 'vlot']}, 'Migratie': {'2010': ['verblijfsvergunning', 'immigratie'], '2012': ['nederlands', 'migrant'], '2017': ['leven'], '2021': ['europees', 'veilig', 'bijdrage', 'vrij', 'grens'], '2023': ['nodig', 'grip', 'instroom', 'talent', 'arbeidsmigrant']}, 'Bestaanszekerheid': {'2010': ['zorg'], '2012': ['snel', 'kans', 'zorg'], '2017': ['werk', 'pensioen', 'baan', 'uitkering', 'contract'], '2021': ['mens', 'mogelijk', 'digitaal', 'last', 'echt'], '2023': ['kwaliteit', 'leven', 'stijging', 'hard', 'werkend']}, 'Veiligheid': {'2006': ['snel'], '2010': ['krijgsmacht', 'internationaal', 'dader'], '2017': ['veilig', 'veiligheid'], '2021': ['mens', 'bondgenoot', 'aanpak', 'criminaliteit'], '2023': ['veilig', 'vaak', 'online', 'stap', 'advocaat']}, 'Milieu': {'2010': ['schoon', 'brandstof', 'natuur', 'fossiel', 'kans'], '2012': ['mens'], '2017': ['duurzaam', 'economie'], '2021': ['europees', 'uitstoot', 'kernenergie', 'auto', 'bedrijf'], '2023': ['schoon', 'huis', 'manier', 'wijk', 'innovatief']}, 'Economie': {'2010': ['ondernemer', 'economie', 'overheid', 'hoog', 'particulier'], '2012': ['woning', 'overheid', 'ondernemer'], '2017': ['europees', 'land', 'bedrijfsleven', 'leven', 'mogelijk'], '2021': ['klein', 'ondernemer', 'groei', 'risico', 'bedrijf'], '2023': ['rekening', 'ondernemer', 'toekomst', 'leraar', 'huis']}, 'Normen': {'2006': ['kans', 'vrijheid'], '2010': ['overheid', 'manier', 'religie'], '2012': ['goed'], '2017': ['overheid', 'organisatie', 'vrijheid', 'mogelijk', 'zorg'], '2021': ['jaar', 'laag', 'slachtoffer', 'eerlijk', 'mens'], '2023': ['armoede', 'veilig', 'kans', 'contact', 'slachtoffer']}}, 'PVV': {'Algemeen': {'2006': ['misdrijf', 'verbod', 'sterk', 'land', 'jaar'], '2010': ['islamitisch', 'grondwet', 'dier', 'verzorgingsstaat', 'zorginstelling'], '2012': ['partij', 'vrijheid', 'natuurlijk', 'brussels', 'nationaliteit'], '2021': ['islam', 'islamitisch', 'dubbel', 'nationaliteit', 'verschrikkelijk'], '2023': ['islamitisch', 'klas', 'miljard', 'eer', 'stikstofregel']}, 'Migratie': {'2006': ['jaar'], '2010': ['islamitisch', 'mens', 'uitkering'], '2012': ['uitkering', 'nederlands'], '2021': ['islam', 'islamitisch', 'dubbel', 'politiek', 'woning'], '2023': ['islamitisch', 'fors', 'land', 'vaak', 'eigen']}, 'Bestaanszekerheid': {'2012': ['jaar'], '2021': ['energierekening', 'pensioenstelsel', 'ziekenhuis', 'nodig'], '2023': ['risico', 'huur', 'eigen', 'jaar', 'nodig']}, 'Veiligheid': {'2010': ['agent', 'straat', 'politie', 'zwaar'], '2012': ['zwaar'], '2021': ['straat', 'wijk', 'dader', 'openbaar', 'jaar'], '2023': ['hoog', 'land']}, 'Milieu': {'2010': ['dier'], '2021': ['boer', 'natuur'], '2023': ['boer']}, 'Economie': {'2010': ['burger'], '2012': ['laag', 'burger'], '2021': ['coronacrisis', 'jaar'], '2023': ['miljard']}, 'Normen': {'2010': ['recht'], '2012': ['oud']}}, 'FvD': {'Algemeen': {'2017': ['model', 'referendum', 'stem', 'immigrant', 'kiezer'], '2021': ['hoofdstuk', 'stoppen', 'immigratie', 'soevereiniteit', 'nederlands'], '2023': ['euro', 'leerkracht', 'stoppen', 'universiteit', 'belastingvrij']}, 'Migratie': {'2017': ['immigrant'], '2021': ['model', 'immigratie', 'nederlands', 'land'], '2023': ['immigratie', 'internationaal', 'nederlands', 'student']}, 'Bestaanszekerheid': {'2021': ['ziekenhuis', 'huisarts', 'maat', 'bureaucratie', 'vaak'], '2023': ['arbeidvoorwaarde', 'pensioen', 'ziekenhuis', 'zorg']}, 'Veiligheid': {'2021': ['misdrijf', 'strafbaar', 'aanpak', 'ernstig', 'goed'], '2023': ['misdrijf', 'ernstig']}, 'Milieu': {'2021': ['goed', 'nederlands', 'dier', 'natuur'], '2023': ['dier']}, 'Economie': {'2017': ['mkb', 'groot', 'nederlands'], '2021': ['platform', 'ers'], '2023': ['ers']}, 'Normen': {'2021': ['idee', 'wet', 'nederlands', 'vrij'], '2023': ['publiek', 'oud', 'jaar', 'mogelijkheid']}}, 'BBB': {'Algemeen': {'2021': ['platteland', 'boer', 'voedselproductie', 'dier', 'gratis'], '2023': ['platteland', 'hoofdstuk', 'regio', 'agrarisch', 'burger']}, 'Migratie': {'2021': ['mens'], '2023': ['verhaal', 'eerlijk', 'mens', 'politiek', 'trots']}, 'Bestaanszekerheid': {'2021': ['prijs'], '2023': ['lokaal', 'dichtbij', 'modern', 'huisarts', 'woonvorm']}, 'Veiligheid': {'2021': ['politie', 'goed'], '2023': ['krijgsmacht', 'rechtsorde', 'regionaal', 'burger', 'nationaal']}, 'Milieu': {'2021': ['platteland', 'burger', 'kennis', 'dier', 'voedselproductie'], '2023': ['vruchtbaar', 'agrarisch', 'mens', 'lokaal', 'voedselzekerheid']}, 'Economie': {'2023': ['lokaal', 'land', 'belangrijk', 'regelgeving', 'productie']}, 'Normen': {'2021': ['basis', 'afkomst', 'gelijk', 'discriminatie', 'mens'], '2023': ['toegang', 'brandweer', 'maatschappij', 'juist', 'gewoon']}}, 'JA21': {'Algemeen': {'2021': ['procent', 'macht', 'betrokkenheid', 'plaats', 'staat'], '2023': ['verkiezingsprogramma', 'nederlands', 'inzetbaar', 'factor', 'macht']}, 'Migratie': {'2021': ['standbeeld', 'stad', 'belang', 'geschiedenis', 'beleid'], '2023': ['arbeidsmigratie', 'belang']}, 'Bestaanszekerheid': {'2021': ['moment', 'plaats', 'locatie', 'geval', 'tekort'], '2023': ['arts', 'systeem', 'beleid', 'bouw', 'groot']}, 'Veiligheid': {'2021': ['recidivist', 'groep', 'criminaliteit', 'politiek', 'capaciteit'], '2023': ['fors', 'nederlands', 'belang', 'ernstig', 'straat']}, 'Milieu': {'2021': ['landschap', 'leefomgeving', 'biomassa', 'groen', 'klimaat'], '2023': ['nederlands', 'visserij', 'laag', 'groot']}, 'Economie': {'2021': ['procent', 'staat', 'verlaging', 'grens', 'eigendom'], '2023': ['woningmarkt', 'ver', 'markt']}, 'Normen': {'2021': ['staat', 'overheid', 'verbondenheid', 'individu', 'vrijheid'], '2023': ['meningsuiting', 'inkomen', 'vrijheid']}}, 'NSC': {'Algemeen': {'2023': ['bestaanszekerheid', 'uitvoering', 'kamer', 'verkiezingsprogramma', 'bestuur']}, 'Migratie': {'2023': ['migratiesaldo', 'regionaal', 'taal', 'beleid', 'afspraak']}, 'Bestaanszekerheid': {'2023': ['bestaanszekerheid', 'langdurig', 'integraal', 'eenvoudig', 'kindopvang']}, 'Veiligheid': {'2023': ['strafrechtket', 'digitaal', 'criminaliteit', 'dader', 'goed']}, 'Milieu': {'2023': ['materiaal', 'toepassing', 'afspraak', 'onderdeel', 'economie']}, 'Economie': {'2023': ['uitgave', 'fiscaal', 'kritisch', 'digitaal', 'gebied']}, 'Normen': {'2023': ['huishoudens', 'bestaanszekerheid', 'vorm', 'beschikbaar', 'groep']}}, 'BVNL': {'Algemeen': {'2023': ['privacy', 'overheid', 'betaalmiddel', 'aardgas', 'nadruk']}, 'Migratie': {'2023': ['nederlands', 'immigratie', 'vluchteling']}, 'Bestaanszekerheid': {'2023': ['overheid', 'woning', 'werk']}, 'Veiligheid': {'2023': ['keihard', 'overheid']}, 'Milieu': {'2023': ['windmolen', 'milieu', 'hoog']}, 'Economie': {'2023': ['succes', 'belasting', 'financieel', 'bank', 'hard']}, 'Normen': {'2023': ['privacy', 'vrijheid', 'individu', 'digitaal', 'mening']}}}
const parties = Object.keys(data);
const initialParty = parties[0];
const initialPartyTopics = Object.keys(data[initialParty]);


function getWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }


function createOrUpdateLayout(selectedData, svgWidth = lastWidth) {
    d3.select(element).select('svg').remove();
    const chartContainer = d3.select(element);
    const columnWidth = 140;
    const xOffsetIncrement = 10;
    const yOffsetIncrement = 20;
    const labelHeight = 20;
    const labelWidth = 50; // Set according to your actual text width
    const paddingBetweenRows = 30;

    let columnsPerRow = Math.floor(svgWidth / (columnWidth + xOffsetIncrement));
    let totalColumns = Object.keys(selectedData).length;
    let totalRows = Math.ceil(totalColumns / columnsPerRow);
    let maxColumnHeight = 0;

    // Calculate the maximum height of a column
    Object.values(selectedData).forEach(words => {
        let columnHeight = labelHeight + (words.length * yOffsetIncrement);
        if (columnHeight > maxColumnHeight) {
            maxColumnHeight = columnHeight;
        }
    });

    let svgHeight = 10 + maxColumnHeight * totalRows + paddingBetweenRows * (totalRows - 1);

    const svg = chartContainer.append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    let xOffset = 0;
    let yOffset = 0;

    let columnCount = 0;

    Object.keys(selectedData).forEach((year, i) => {
      if ((columnCount + 1) * columnWidth + (columnCount * xOffsetIncrement) > svgWidth) {
        xOffset = 0; // Reset xOffset for new row
        yOffset += 150; // Increase yOffset to start a new row below the previous one
        columnCount = 0; // Reset the column count for the new row
      } else {
        xOffset = columnCount * (columnWidth + xOffsetIncrement); // Increment xOffset for new column
      }

    svg.append("rect")
    .attr("x", xOffset )
    .attr("y", yOffset ) 
    .attr("width", labelWidth)
    .attr("height", labelHeight)
    .attr("rx", 6) 
    .attr("fill", "#black")
    .attr("opacity", 0.5);

    svg.append("text")
    .attr("x", xOffset + 6)
    .attr("y", yOffset + 15) 
    .text(year)
    .attr("font-family", "sans-serif")
    .attr("font-size", "22px")
    .attr("font-weight", "normal")
    .attr("fill", "white");


    selectedData[year].forEach((word) => {
        svg.append("text")
          .attr("x", xOffset + 3)
          .attr("y", (yOffset += yOffsetIncrement) + 20)
          .text(word)
          .attr("font-family", "sans-serif")
          .attr("font-size", "20px")
          .attr("fill", "black");
      });

      columnCount++; 
      yOffset -= selectedData[year].length * yOffsetIncrement; 
    });
  }

  
let currentParty = 'VVD'; // Set initial party to 'VVD'
let currentTopic = 'Migratie'; // Set initial topic to 'Migratie'

// Function to update the topic dropdown options
function updateTopicDropdown(party) {
  const topics = Object.keys(data[party]);
  const topicDropdown = d3.select("#topicDropdown");
  topicDropdown.html(""); // Clear current topics

  topics.forEach(topic => {
    topicDropdown.append("option").text(topic).attr("value", topic);
  });

  // Check if the current topic exists in the new party's topics
  if (topics.includes(currentTopic)) {
    topicDropdown.property("value", currentTopic); // Keep the current topic selected
  } else {
    currentTopic = topics[0]; // Reset to the first topic if not available
    topicDropdown.property("value", currentTopic); // Update the dropdown value
  }
}

// Function to update the displayed data when dropdown selections change
function updateDisplayedData(party, topic) {
  currentParty = party; // Update the current party
  currentTopic = topic; // Update the current topic
  const selectedData = data[party][topic];
  createOrUpdateLayout(selectedData);
}

// Populate dropdowns and set up event listeners
function setupDropdowns() {
  // Party dropdown
  const partyDropdown = d3.select("#partyDropdown");
  parties.forEach(party => {
    partyDropdown.append("option").text(party).attr("value", party);
  });

  // Topic dropdown - initially populate with 'VVD''s topics
  updateTopicDropdown(currentParty);

  // Set the initial selected values for the dropdowns
  partyDropdown.property("value", currentParty);
  d3.select("#topicDropdown").property("value", currentTopic);

  // Event listeners for dropdowns
  partyDropdown.on("change", function() {
    const selectedParty = d3.select(this).property("value");
    updateTopicDropdown(selectedParty);
    updateDisplayedData(selectedParty, currentTopic); // Pass the current topic
  });

  d3.select("#topicDropdown").on("change", function() {
    const selectedTopic = d3.select(this).property("value");
    updateDisplayedData(currentParty, selectedTopic); // Pass the current party
  });
}


const chartContainer = d3.select(element);
let lastWidth = chartContainer.node().getBoundingClientRect().width;
const significantChangeThreshold = lastWidth * 0.10; // for 10%


window.addEventListener('resize', () => {
  const newWidth = chartContainer.node().getBoundingClientRect().width;
  if (Math.abs(newWidth - lastWidth) > significantChangeThreshold) {
    lastWidth = newWidth;
    createOrUpdateLayout(data[currentParty][currentTopic], newWidth);
  }
});

// Initial setup
setupDropdowns();
updateDisplayedData(currentParty, currentTopic);
};

drawWords("#word-graph");
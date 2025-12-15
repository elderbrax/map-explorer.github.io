// Comprehensive fun facts database covering ALL countries and notable towns

const countryFacts: Record<string, string[]> = {
  // Africa
  'Algeria': [
    'Algeria is the largest country in Africa by area.',
    'The Sahara Desert covers more than 80% of Algeria.',
    'Algeria has seven UNESCO World Heritage Sites.',
  ],
  'Angola': [
    'Angola is the second-largest oil producer in Africa.',
    'The country has over 1,600 km of Atlantic coastline.',
    'Angola is home to the Giant Sable Antelope, a national symbol.',
  ],
  'Benin': [
    'Benin was the birthplace of the Vodun (Voodoo) religion.',
    'The Kingdom of Dahomey, famous for its female warriors, was located here.',
    'Benin has one of Africa\'s largest open-air markets in Dantokpa.',
  ],
  'Botswana': [
    'Botswana is home to the largest inland delta in the world, the Okavango Delta.',
    'About 38% of the country is dedicated to national parks and reserves.',
    'Botswana has the highest concentration of elephants in Africa.',
  ],
  'Burkina Faso': [
    'Burkina Faso means "Land of Honest People" in the local languages.',
    'The country hosts Africa\'s largest film festival, FESPACO.',
    'Over 60 different ethnic groups call Burkina Faso home.',
  ],
  'Burundi': [
    'Burundi is one of the smallest countries in Africa.',
    'The country has a tradition of royal drumming recognized by UNESCO.',
    'Lake Tanganyika, one of the deepest lakes in the world, borders Burundi.',
  ],
  'Cabo Verde': [
    'Cabo Verde is a volcanic archipelago of 10 islands.',
    'The country has one of the most stable democracies in Africa.',
    'Morna music from Cabo Verde is a UNESCO Intangible Cultural Heritage.',
  ],
  'Cameroon': [
    'Cameroon is called "Africa in Miniature" due to its geological and cultural diversity.',
    'Mount Cameroon is the highest peak in West Africa.',
    'The country has over 250 distinct ethnic groups.',
  ],
  'Central African Republic': [
    'The country is home to western lowland gorillas and forest elephants.',
    'The Dzanga-Sangha Reserve has one of the highest densities of gorillas.',
    'CAR has vast deposits of diamonds and uranium.',
  ],
  'Chad': [
    'Lake Chad was once one of the largest lakes in Africa.',
    'Chad is home to the Ennedi Plateau with ancient rock art.',
    'The Sahara Desert covers the northern third of Chad.',
  ],
  'Comoros': [
    'Comoros is one of the world\'s largest producers of ylang-ylang perfume essence.',
    'The coelacanth, a prehistoric fish thought to be extinct, was found here.',
    'Mount Karthala is one of the world\'s largest active volcanoes.',
  ],
  'Democratic Republic of the Congo': [
    'DRC has the world\'s second-largest rainforest after the Amazon.',
    'The Congo River is the deepest river in the world.',
    'DRC is home to the okapi, found nowhere else on Earth.',
  ],
  'Republic of the Congo': [
    'Over 65% of the country is covered by rainforest.',
    'The Congo Basin is the second lung of the Earth after the Amazon.',
    'The country has some of the most important wetlands in Central Africa.',
  ],
  'Côte d\'Ivoire': [
    'Côte d\'Ivoire produces about 40% of the world\'s cocoa.',
    'The Basilica of Our Lady of Peace is one of the largest churches in the world.',
    'The country has over 60 ethnic groups.',
  ],
  'Djibouti': [
    'Lake Assal is the lowest point in Africa and the saltiest body of water on Earth.',
    'Djibouti is home to one of only six permanent salt lakes in the world.',
    'The country is smaller than the state of New Hampshire.',
  ],
  'Egypt': [
    'The pyramids of Giza were originally covered in white polished limestone.',
    'Ancient Egyptians invented toothpaste, door locks, and bowling.',
    'The Great Pyramid was the tallest man-made structure for over 3,800 years.',
    'Ancient Egyptians used to shave their eyebrows when their cats died.',
    'The calendar we use today was invented by ancient Egyptians.',
  ],
  'Equatorial Guinea': [
    'Equatorial Guinea is the only African country with Spanish as an official language.',
    'It has one of the highest GDPs per capita in Africa due to oil.',
    'The country consists of a mainland region and five islands.',
  ],
  'Eritrea': [
    'Asmara, the capital, has remarkable Italian colonial architecture.',
    'Eritrea has over 350 species of butterflies.',
    'The Dahlak Archipelago has some of the world\'s most pristine coral reefs.',
  ],
  'Eswatini': [
    'Eswatini is one of the world\'s last remaining absolute monarchies.',
    'The country was formerly known as Swaziland until 2018.',
    'The Incwala ceremony is one of the most important cultural events.',
  ],
  'Ethiopia': [
    'Ethiopia is the only African country never colonized by a European power.',
    'The country uses a calendar that is 7-8 years behind the Gregorian calendar.',
    'Coffee was discovered in Ethiopia by a goat herder named Kaldi.',
    'Ethiopia has its own alphabet with 231 characters.',
    'The source of the Blue Nile is Lake Tana in Ethiopia.',
  ],
  'Gabon': [
    'About 85% of Gabon is covered by rainforest.',
    'Gabon has the highest concentration of forest elephants in Africa.',
    'The country has 13 national parks covering 11% of its territory.',
  ],
  'Gambia': [
    'Gambia is the smallest country on mainland Africa.',
    'The country is almost entirely surrounded by Senegal.',
    'The River Gambia is one of Africa\'s best-preserved river ecosystems.',
  ],
  'Ghana': [
    'Ghana was the first sub-Saharan African country to gain independence.',
    'Lake Volta is one of the largest man-made lakes in the world.',
    'Ghana is one of the world\'s largest producers of gold and cocoa.',
  ],
  'Guinea': [
    'Guinea has almost half of the world\'s bauxite reserves.',
    'The Niger, Senegal, and Gambia rivers all originate in Guinea.',
    'Mount Nimba is a UNESCO World Heritage Site.',
  ],
  'Guinea-Bissau': [
    'The Bijagós Archipelago is a UNESCO Biosphere Reserve.',
    'Guinea-Bissau is one of the world\'s top cashew producers.',
    'The country has a rich tradition of resistance against colonialism.',
  ],
  'Kenya': [
    'Kenya is home to the Great Rift Valley and Mount Kenya.',
    'The Maasai Mara hosts the world\'s most spectacular wildlife migration.',
    'Kenya is a pioneer in mobile money with M-Pesa.',
    'Lake Turkana is the world\'s largest permanent desert lake.',
    'Kenya has won more Olympic medals in athletics than any other African country.',
  ],
  'Lesotho': [
    'Lesotho is the only country entirely above 1,000 meters in elevation.',
    'The country is completely surrounded by South Africa.',
    'Lesotho is sometimes called the "Kingdom in the Sky."',
  ],
  'Liberia': [
    'Liberia was founded by freed American slaves in 1847.',
    'The country\'s capital, Monrovia, is named after US President James Monroe.',
    'Liberia is home to the last significant rainforest in West Africa.',
  ],
  'Libya': [
    'Libya has the largest proven oil reserves in Africa.',
    'The Sahara Desert covers about 90% of Libya.',
    'Leptis Magna is one of the best-preserved Roman cities in the world.',
  ],
  'Madagascar': [
    'About 90% of Madagascar\'s wildlife is found nowhere else on Earth.',
    'Madagascar is the fourth largest island in the world.',
    'Baobab trees, sometimes called upside-down trees, are iconic here.',
    'Lemurs are unique to Madagascar and evolved from ancestors that floated there on vegetation.',
  ],
  'Malawi': [
    'Lake Malawi contains more fish species than any other lake in the world.',
    'Malawi is known as "The Warm Heart of Africa."',
    'The lake makes up about a third of Malawi\'s total area.',
  ],
  'Mali': [
    'Timbuktu was a major center of learning and trade in medieval times.',
    'The Great Mosque of Djenné is the largest mud-brick building in the world.',
    'Mali is home to the ancient Dogon people with remarkable astronomy knowledge.',
  ],
  'Mauritania': [
    'The Eye of the Sahara (Richat Structure) is visible from space.',
    'Mauritania abolished slavery in 1981, the last country to do so.',
    'Ancient Chinguetti was a trading post on caravan routes.',
  ],
  'Mauritius': [
    'Mauritius was home to the now-extinct dodo bird.',
    'The country has the third-largest coral reef system in the world.',
    'Mauritius is one of the most densely populated countries in the world.',
  ],
  'Morocco': [
    'Morocco is home to the world\'s oldest university, the University of Al-Qarawiyyin.',
    'The country has both Atlantic and Mediterranean coastlines.',
    'Moroccan cuisine is ranked among the best in the world.',
    'The Sahara Desert begins in southeastern Morocco.',
  ],
  'Mozambique': [
    'Mozambique has one of the longest coastlines in Africa.',
    'The country is home to the Bazaruto Archipelago marine national park.',
    'Mozambique\'s flag features an AK-47, symbolizing the struggle for independence.',
  ],
  'Namibia': [
    'Namibia has the oldest desert in the world, the Namib Desert.',
    'Fish River Canyon is the second-largest canyon in the world.',
    'Namibia was the first African country to include environmental protection in its constitution.',
  ],
  'Niger': [
    'Niger is named after the Niger River.',
    'The country has some of the largest uranium deposits in the world.',
    'The Ténéré Desert is one of the most extreme environments on Earth.',
  ],
  'Nigeria': [
    'Nigeria is Africa\'s most populous country with over 200 million people.',
    'Nollywood produces more films annually than Hollywood.',
    'Nigeria has over 500 distinct languages and ethnic groups.',
    'The country has the largest economy in Africa.',
  ],
  'Rwanda': [
    'Rwanda is known as "The Land of a Thousand Hills."',
    'The country banned plastic bags in 2008, becoming one of the cleanest in Africa.',
    'Rwanda has the highest percentage of women in parliament in the world.',
  ],
  'São Tomé and Príncipe': [
    'This is the second-smallest African country.',
    'The islands were uninhabited until Portuguese discovery in 1470.',
    'São Tomé is known for its high-quality cocoa production.',
  ],
  'Senegal': [
    'Senegal has never had a military coup.',
    'Lake Retba (Lac Rose) is pink due to algae and high salt content.',
    'The Dakar Rally originally ended in Dakar, Senegal.',
  ],
  'Seychelles': [
    'Seychelles is the smallest African country by population.',
    'The coco de mer palm produces the largest seed in the plant kingdom.',
    'Seychelles has some of the world\'s most beautiful beaches.',
  ],
  'Sierra Leone': [
    'Freetown was founded as a home for freed slaves.',
    'Sierra Leone has some of the largest diamond deposits in the world.',
    'The country\'s beaches are among the most beautiful in West Africa.',
  ],
  'Somalia': [
    'Somalia has the longest coastline in mainland Africa.',
    'Camel milk is a staple food in Somalia.',
    'The ancient port city of Zeila was one of the earliest Islamic settlements in Africa.',
  ],
  'South Africa': [
    'South Africa has three capital cities: Pretoria, Cape Town, and Bloemfontein.',
    'South Africa has 11 official languages.',
    'The first successful heart transplant was performed in Cape Town in 1967.',
    'Table Mountain is one of the oldest mountains in the world at over 600 million years.',
  ],
  'South Sudan': [
    'South Sudan is the world\'s youngest country, gaining independence in 2011.',
    'The Sudd is one of the largest wetlands in the world.',
    'The White Nile flows through South Sudan.',
  ],
  'Sudan': [
    'Sudan has more pyramids than Egypt.',
    'The confluence of the Blue and White Nile is in Khartoum.',
    'Sudan was home to the ancient Kingdom of Kush.',
  ],
  'Tanzania': [
    'Mount Kilimanjaro is Africa\'s highest peak at 5,895 meters.',
    'The Serengeti hosts the largest terrestrial mammal migration.',
    'Zanzibar was once the world\'s leading clove producer.',
    'Tanzania is home to the Ngorongoro Crater, the world\'s largest intact volcanic caldera.',
  ],
  'Togo': [
    'Togo is one of the smallest countries in Africa.',
    'The country has a unique voodoo culture and traditions.',
    'Togo produces high-quality coffee and cocoa.',
  ],
  'Tunisia': [
    'Tunisia has more UNESCO World Heritage Sites than any other African country.',
    'Carthage, the ancient rival of Rome, was located in Tunisia.',
    'Tunisia was the birthplace of the Arab Spring in 2010.',
  ],
  'Uganda': [
    'Uganda is home to half of the world\'s mountain gorilla population.',
    'Lake Victoria, Africa\'s largest lake, is shared with Kenya and Tanzania.',
    'Uganda has the youngest population in the world with a median age of 15.',
    'The source of the Nile River is at Jinja, Uganda.',
  ],
  'Zambia': [
    'Victoria Falls is called "Mosi-oa-Tunya" (The Smoke that Thunders).',
    'Zambia is home to over 20 national parks.',
    'The country has one of the world\'s largest man-made lakes, Lake Kariba.',
  ],
  'Zimbabwe': [
    'Great Zimbabwe ruins are the largest ancient stone structure in sub-Saharan Africa.',
    'Victoria Falls is shared with Zambia.',
    'Zimbabwe has the world\'s largest elephant population in the Hwange National Park.',
  ],

  // Europe
  'Albania': [
    'Albania has over 3,000 bunkers built during the communist era.',
    'Mother Teresa was of Albanian origin.',
    'Albanians shake their head for "yes" and nod for "no."',
  ],
  'Andorra': [
    'Andorra has no airport, seaport, or railway.',
    'The country is only 468 square kilometers.',
    'Andorra has the highest life expectancy in the world.',
  ],
  'Austria': [
    'The oldest zoo in the world, Tiergarten Schönbrunn, is in Vienna.',
    'Austria has produced more Nobel Prize winners per capita than most countries.',
    'The croissant was invented in Vienna to celebrate victory over the Ottomans.',
  ],
  'Belarus': [
    'Belarus has Europe\'s largest remaining primeval forest, Białowieża.',
    'The country is sometimes called "The Lungs of Europe."',
    'Belarus has never changed its Soviet-era flag design.',
  ],
  'Belgium': [
    'Belgium has over 220,000 registered beers.',
    'The saxophone was invented in Belgium.',
    'Belgium produces over 220,000 tons of chocolate per year.',
    'Brussels is home to the headquarters of the European Union.',
  ],
  'Bosnia and Herzegovina': [
    'The assassination of Archduke Franz Ferdinand here sparked World War I.',
    'Sarajevo hosted the 1984 Winter Olympics.',
    'Bosnia has one of the last remaining rainforests in Europe.',
  ],
  'Bulgaria': [
    'Bulgaria is the oldest country in Europe to keep its original name.',
    'Bulgarians invented the Cyrillic alphabet.',
    'The country has produced the world\'s most expensive rose oil.',
  ],
  'Croatia': [
    'The necktie was invented in Croatia.',
    'Croatia has over 1,200 islands.',
    'Dubrovnik was used as a filming location for King\'s Landing in Game of Thrones.',
  ],
  'Cyprus': [
    'Cyprus is the legendary birthplace of Aphrodite, the goddess of love.',
    'The island is divided between Greek and Turkish territories.',
    'Cyprus has been inhabited for over 10,000 years.',
  ],
  'Czech Republic': [
    'The Czech Republic has the highest beer consumption per capita in the world.',
    'Prague Castle is the largest ancient castle complex in the world.',
    'Czechs invented the word "robot" in a 1920 play.',
  ],
  'Denmark': [
    'Denmark has the oldest flag still in use, the Dannebrog.',
    'LEGO was invented in Denmark.',
    'Denmark has over 7,000 kilometers of coastline.',
    'Copenhagen is one of the world\'s most bicycle-friendly cities.',
  ],
  'Estonia': [
    'Estonia was the first country to use online voting in a national election.',
    'Over 50% of Estonia is covered by forest.',
    'Skype was developed by Estonians.',
  ],
  'Finland': [
    'Finland has over 188,000 lakes.',
    'Finland has more saunas than cars.',
    'The Finnish education system consistently ranks among the best in the world.',
    'Finland is the happiest country in the world according to the UN.',
  ],
  'France': [
    'France is the most visited country in the world with over 89 million tourists annually.',
    'The Louvre is the most visited art museum in the world.',
    'France has 12 different time zones, more than any other country.',
    'The French invented the metric system during the French Revolution.',
  ],
  'Germany': [
    'Germany has over 20,000 castles, many dating back to the Middle Ages.',
    'Berlin has more bridges than Venice - about 1,700.',
    'Germany was the first country to adopt Daylight Saving Time in 1916.',
    'The first printed book was produced in Germany by Gutenberg.',
  ],
  'Greece': [
    'Greece has more archaeological museums than any other country.',
    'The Greek language has been spoken for over 3,000 years.',
    'Greece is the birthplace of democracy, Western philosophy, and the Olympic Games.',
    'Greece has over 6,000 islands, of which only 227 are inhabited.',
  ],
  'Hungary': [
    'Hungary has the oldest underground railway in continental Europe.',
    'Hungarians invented the Rubik\'s Cube.',
    'The Hungarian language is not related to any neighboring country\'s language.',
  ],
  'Iceland': [
    'Iceland has no army, navy, or air force.',
    'About 10% of Iceland is covered by glaciers.',
    'Iceland is home to the world\'s oldest parliament, the Althing.',
    'There are no McDonald\'s restaurants in Iceland.',
  ],
  'Ireland': [
    'Ireland was never conquered by the Romans.',
    'The oldest pub in the world is in Ireland, dating back to 900 AD.',
    'Ireland is the only country with a musical instrument as its national symbol.',
    'Halloween originated from the ancient Celtic festival of Samhain in Ireland.',
  ],
  'Italy': [
    'Italy has more UNESCO World Heritage Sites than any other country (58).',
    'The University of Bologna, founded in 1088, is the oldest university still in operation.',
    'Italians invented the piano, thermometer, eyeglasses, and battery.',
    'Italy has a free wine fountain that runs 24/7 in Caldari di Ortona.',
  ],
  'Kosovo': [
    'Kosovo declared independence from Serbia in 2008.',
    'The country has one of the youngest populations in Europe.',
    'Kosovo has remarkable medieval Serbian Orthodox monasteries.',
  ],
  'Latvia': [
    'Latvia has one of the world\'s fastest internet speeds.',
    'Riga\'s Art Nouveau architecture is the finest in Europe.',
    'Latvia was the first country to have a Christmas tree in a public square.',
  ],
  'Liechtenstein': [
    'Liechtenstein is the world\'s largest producer of false teeth.',
    'The country has no airport and no military.',
    'You can rent the entire country for $70,000 per night.',
  ],
  'Lithuania': [
    'Lithuania was the last pagan country in Europe.',
    'Basketball is almost a religion in Lithuania.',
    'The geographical center of Europe is in Lithuania.',
  ],
  'Luxembourg': [
    'Luxembourg is one of the smallest countries in Europe.',
    'The country has three official languages: Luxembourgish, French, and German.',
    'Luxembourg has the highest GDP per capita in the world.',
  ],
  'Malta': [
    'Malta has some of the oldest freestanding structures in the world.',
    'Knights of St. John ruled Malta for over 250 years.',
    'Maltese is the only Semitic language written in Latin script.',
  ],
  'Moldova': [
    'Moldova has the largest wine cellar in the world at Mileștii Mici.',
    'The country is one of the least visited in Europe.',
    'Moldova was part of Romania before World War II.',
  ],
  'Monaco': [
    'Monaco is the second smallest country in the world.',
    'Monaco has no income tax.',
    'The Monaco Grand Prix is one of the most prestigious car races in the world.',
  ],
  'Montenegro': [
    'Montenegro means "Black Mountain."',
    'The Bay of Kotor is sometimes called Europe\'s southernmost fjord.',
    'Montenegro has one of the deepest canyons in Europe.',
  ],
  'Netherlands': [
    'About 26% of the Netherlands is below sea level.',
    'There are more bicycles than people in the Netherlands.',
    'The Dutch are the tallest people in the world on average.',
    'Amsterdam has more than 1,200 bridges.',
  ],
  'North Macedonia': [
    'North Macedonia is one of the oldest countries in the world.',
    'Mother Teresa was born in Skopje.',
    'Lake Ohrid is one of the oldest and deepest lakes in Europe.',
  ],
  'Norway': [
    'Norway has over 50,000 islands along its coast.',
    'The Nobel Peace Prize is awarded in Oslo, Norway.',
    'Norway invented the cheese slicer.',
    'Norway has the world\'s longest road tunnel at 24.5 km.',
  ],
  'Poland': [
    'Poland is home to the world\'s largest castle by land area, Malbork Castle.',
    'Marie Curie, the first woman to win a Nobel Prize, was Polish.',
    'Poland has 17 UNESCO World Heritage Sites.',
  ],
  'Portugal': [
    'Portugal is the oldest nation-state in Europe with the same borders since 1139.',
    'The Portuguese empire was the first global empire in history.',
    'Portugal decriminalized all drugs in 2001 with positive results.',
  ],
  'Romania': [
    'Romania is home to the largest population of brown bears in Europe.',
    'The Danube Delta is Europe\'s best-preserved delta.',
    'Bran Castle is associated with the Dracula legend.',
  ],
  'Russia': [
    'Russia spans 11 time zones, more than any other country.',
    'Lake Baikal contains about 20% of the world\'s unfrozen fresh water.',
    'Russia has a larger surface area than Pluto.',
    'The Trans-Siberian Railway is the longest railway line in the world at 9,289 km.',
  ],
  'San Marino': [
    'San Marino claims to be the world\'s oldest republic, founded in 301 AD.',
    'The country is entirely surrounded by Italy.',
    'San Marino has more cars than people.',
  ],
  'Serbia': [
    'Nikola Tesla was Serbian.',
    'Belgrade is one of the oldest continuously inhabited cities in Europe.',
    'Serbia is one of the largest exporters of raspberries in the world.',
  ],
  'Slovakia': [
    'Slovakia has more castles and chateaux per capita than any other country.',
    'The country is home to the highest wooden altar in the world.',
    'Andy Warhol\'s parents were from Slovakia.',
  ],
  'Slovenia': [
    'Slovenia is one of the most forested countries in Europe.',
    'The word "Slovenia" contains the word "love."',
    'Slovenia has over 10,000 caves.',
  ],
  'Spain': [
    'Spain has the second-highest number of bars per capita in the world.',
    'Spanish is the official language in 21 countries.',
    'La Tomatina festival uses over 150,000 tomatoes each year.',
    'The Sagrada Família has been under construction for over 140 years.',
  ],
  'Sweden': [
    'Sweden has not been at war for over 200 years.',
    'IKEA, H&M, and Spotify are all Swedish companies.',
    'Sweden has over 220,000 islands.',
  ],
  'Switzerland': [
    'Switzerland has not been at war since 1815.',
    'The Swiss consume more chocolate per capita than any other nation.',
    'Switzerland has four national languages.',
  ],
  'Ukraine': [
    'Ukraine is the largest country entirely within Europe.',
    'The deepest metro station in the world is in Kyiv.',
    'Ukraine was the breadbasket of the Soviet Union.',
  ],
  'United Kingdom': [
    'The UK invented the World Wide Web, created by Tim Berners-Lee in 1989.',
    'Big Ben is actually the name of the bell inside the tower, not the clock.',
    'London\'s Underground is the oldest metro system in the world.',
    'Stonehenge is older than the pyramids of Giza.',
  ],
  'Vatican City': [
    'Vatican City is the smallest country in the world.',
    'The Vatican has its own bank, radio station, and post office.',
    'St. Peter\'s Basilica took 120 years to build.',
  ],

  // Asia
  'Afghanistan': [
    'Afghanistan is known for its blue lapis lazuli gemstones.',
    'The country has been continuously inhabited for 50,000 years.',
    'Buzkashi, a game played with a goat carcass, is the national sport.',
  ],
  'Armenia': [
    'Armenia was the first nation to adopt Christianity as a state religion.',
    'The Armenian alphabet has 39 letters.',
    'Mount Ararat, where Noah\'s Ark supposedly landed, is visible from Armenia.',
  ],
  'Azerbaijan': [
    'Azerbaijan is known as the "Land of Fire."',
    'The country has natural eternal flames due to gas seeping from the earth.',
    'Chess is a mandatory subject in Azerbaijani schools.',
  ],
  'Bahrain': [
    'Bahrain was home to the ancient Dilmun civilization.',
    'The country is made up of 33 islands.',
    'The Tree of Life in Bahrain has survived for over 400 years with no water source.',
  ],
  'Bangladesh': [
    'Bangladesh has the world\'s largest river delta, the Sundarbans.',
    'The Royal Bengal Tiger lives in the Sundarbans mangrove forest.',
    'Bangladesh has six seasons instead of four.',
  ],
  'Bhutan': [
    'Bhutan measures success by Gross National Happiness.',
    'Television was not introduced until 1999.',
    'Bhutan is the only carbon-negative country in the world.',
  ],
  'Brunei': [
    'Brunei is one of the wealthiest nations per capita due to oil.',
    'The Sultan of Brunei has one of the world\'s largest car collections.',
    'Education and healthcare are free in Brunei.',
  ],
  'Cambodia': [
    'Angkor Wat is the largest religious monument in the world.',
    'Cambodia has the only flag with a building on it.',
    'The Khmer Empire was once one of the most powerful in Southeast Asia.',
  ],
  'China': [
    'China uses a single time zone despite spanning five geographical time zones.',
    'The Great Wall of China is not visible from space with the naked eye.',
    'Half of all pigs on Earth live in China.',
    'China has the world\'s largest high-speed rail network at over 40,000 km.',
  ],
  'Georgia': [
    'Georgia is one of the oldest wine-producing regions in the world.',
    'The country is home to the deepest cave in the world, Veryovkina Cave.',
    'Georgian is one of the oldest languages still spoken today.',
  ],
  'India': [
    'India has the world\'s largest postal network with over 150,000 post offices.',
    'Chess was invented in India around the 6th century.',
    'The world\'s first university, Takshashila, was established in India around 700 BC.',
    'The Kumbh Mela festival is so large it can be seen from space.',
  ],
  'Indonesia': [
    'Indonesia is the world\'s largest archipelago with over 17,000 islands.',
    'Komodo dragons, the world\'s largest lizards, are found only in Indonesia.',
    'Indonesia has more volcanoes than any other country.',
  ],
  'Iran': [
    'Iran is home to one of the world\'s oldest civilizations.',
    'Persia invented the postal system, algebra, and chess.',
    'Iran has the world\'s largest collection of Persian rugs.',
  ],
  'Iraq': [
    'Iraq is home to ancient Mesopotamia, the "Cradle of Civilization."',
    'Writing was invented in Iraq over 5,000 years ago.',
    'The Hanging Gardens of Babylon, one of the Seven Wonders, was in Iraq.',
  ],
  'Israel': [
    'Israel has more museums per capita than any other country.',
    'The Dead Sea is the lowest point on Earth\'s surface on land.',
    'Israel is a world leader in water recycling and solar energy.',
  ],
  'Japan': [
    'Japan has more than 6,800 islands, though most are uninhabited.',
    'There are more pets than children in Japan.',
    'Japan has the world\'s oldest company, Kongō Gumi, founded in 578 AD.',
    'Japan has over 200 different flavors of Kit Kat.',
  ],
  'Jordan': [
    'Petra, the "Rose City," is carved into pink sandstone cliffs.',
    'The Dead Sea is shared between Jordan and Israel.',
    'Jordan is one of the most water-scarce countries in the world.',
  ],
  'Kazakhstan': [
    'Kazakhstan is the largest landlocked country in the world.',
    'The first man in space, Yuri Gagarin, launched from Kazakhstan.',
    'Apple trees are believed to have originated in Kazakhstan.',
  ],
  'Kuwait': [
    'Kuwait has some of the highest temperatures recorded on Earth.',
    'The country has no rivers or lakes.',
    'Kuwait was the first Gulf state to establish a constitution.',
  ],
  'Kyrgyzstan': [
    'Kyrgyzstan has mountains covering 90% of its territory.',
    'Eagle hunting is a traditional Kyrgyz practice.',
    'Kyrgyzstan is home to the second-largest alpine lake, Issyk-Kul.',
  ],
  'Laos': [
    'Laos is the most heavily bombed country per capita in history.',
    'The country is landlocked but has 4,000 islands.',
    'Plain of Jars contains thousands of mysterious stone jars.',
  ],
  'Lebanon': [
    'Lebanon has the oldest continuously inhabited cities in the world.',
    'The Cedars of God are some of the oldest trees on Earth.',
    'Lebanon has 18 recognized religious groups.',
  ],
  'Malaysia': [
    'Malaysia has the world\'s largest flower, the Rafflesia.',
    'The Petronas Towers were the world\'s tallest buildings from 1998 to 2004.',
    'Malaysia is home to the oldest rainforest in the world.',
  ],
  'Maldives': [
    'Maldives is the lowest country in the world, averaging 1.5 meters above sea level.',
    'The country has the world\'s first underwater cabinet meeting.',
    'Maldives is made up of 1,192 coral islands.',
  ],
  'Mongolia': [
    'Mongolia is the least densely populated country in the world.',
    'Genghis Khan founded the largest contiguous land empire in history.',
    'Mongolians invented the ice cream-like frozen horse milk dessert.',
  ],
  'Myanmar': [
    'Myanmar has the largest book in the world carved on 729 marble slabs.',
    'The country was known as Burma until 1989.',
    'Myanmar has over 2,000 ancient temples in Bagan.',
  ],
  'Nepal': [
    'Nepal is home to eight of the ten highest mountains in the world.',
    'The Nepalese flag is the only non-rectangular national flag.',
    'Nepal has never been colonized.',
  ],
  'North Korea': [
    'North Korea uses a calendar based on the birth year of Kim Il-sung.',
    'The country has its own operating system called Red Star OS.',
    'North Korea has mandatory military service of 10 years for men.',
  ],
  'Oman': [
    'Oman is one of the oldest independent states in the Arab world.',
    'The country has some of the most dramatic landscapes in Arabia.',
    'Frankincense has been traded from Oman for over 5,000 years.',
  ],
  'Pakistan': [
    'Pakistan has the world\'s second-highest peak, K2.',
    'The Indus Valley Civilization, one of the oldest, was in Pakistan.',
    'Pakistan has one of the world\'s largest irrigation systems.',
  ],
  'Palestine': [
    'Bethlehem, the birthplace of Jesus, is in Palestine.',
    'Palestine has been continuously inhabited for over 10,000 years.',
    'The Dead Sea Scrolls were found in the West Bank.',
  ],
  'Philippines': [
    'The Philippines has over 7,000 islands.',
    'It\'s the world\'s top producer of coconuts.',
    'The Philippines has one of the longest Christmas celebrations in the world.',
  ],
  'Qatar': [
    'Qatar has the highest GDP per capita in the world.',
    'The country will host the 2022 FIFA World Cup.',
    'Qatar is smaller than Connecticut but one of the richest countries.',
  ],
  'Saudi Arabia': [
    'Saudi Arabia has no rivers.',
    'The country has the world\'s largest continuous sand desert.',
    'Women were allowed to drive only since 2018.',
  ],
  'Singapore': [
    'Singapore is a city, country, and island all in one.',
    'Chewing gum is banned in Singapore.',
    'Singapore has the world\'s best airport, Changi.',
  ],
  'South Korea': [
    'South Korea has the fastest internet in the world.',
    'Koreans add one year to their age at birth.',
    'K-pop and K-drama have become global phenomena.',
  ],
  'Sri Lanka': [
    'Sri Lanka is known as the "Pearl of the Indian Ocean."',
    'The country produces some of the world\'s finest tea.',
    'Sri Lanka has the oldest living tree planted by humans.',
  ],
  'Syria': [
    'Damascus is one of the oldest continuously inhabited cities.',
    'Syria has six UNESCO World Heritage Sites.',
    'The ancient city of Palmyra was a major trading center.',
  ],
  'Taiwan': [
    'Taiwan has the world\'s tallest building with a occupied floors, Taipei 101.',
    'Taiwan is the world\'s leading producer of semiconductors.',
    'Taiwan has more convenience stores per capita than anywhere else.',
  ],
  'Tajikistan': [
    'Over 90% of Tajikistan is mountainous.',
    'The country has the world\'s highest dam, Nurek Dam.',
    'Tajikistan shares its language with Iran.',
  ],
  'Thailand': [
    'Thailand is the only Southeast Asian country never colonized.',
    'The country was known as Siam until 1939.',
    'Thailand is the world\'s largest producer of rubber.',
  ],
  'Timor-Leste': [
    'Timor-Leste is one of the youngest countries, independent since 2002.',
    'The country has Asia\'s highest peak between the Himalayas and New Guinea.',
    'Portuguese is an official language due to colonial history.',
  ],
  'Turkey': [
    'Turkey straddles two continents, Europe and Asia.',
    'Santa Claus was born in Turkey (St. Nicholas of Myra).',
    'Istanbul has been the capital of three empires.',
  ],
  'Turkmenistan': [
    'Turkmenistan has one of the world\'s largest gas reserves.',
    'The Door to Hell is a burning gas crater that has been on fire for decades.',
    'The country has one of the most unusual governments in the world.',
  ],
  'United Arab Emirates': [
    'Dubai has the world\'s tallest building, the Burj Khalifa.',
    'The UAE has no natural rivers.',
    'Abu Dhabi sits on 10% of the world\'s known oil reserves.',
  ],
  'Uzbekistan': [
    'Uzbekistan is one of only two double-landlocked countries.',
    'The ancient Silk Road cities of Samarkand and Bukhara are here.',
    'Uzbekistan has the fourth-largest gold deposits in the world.',
  ],
  'Vietnam': [
    'Vietnam is the world\'s second-largest coffee producer.',
    'Ha Long Bay has nearly 2,000 limestone islands.',
    'Vietnam has 54 recognized ethnic groups.',
  ],
  'Yemen': [
    'Yemen is known as the "Arabia Felix" or Happy Arabia.',
    'The old city of Sana\'a has buildings over 1,000 years old.',
    'Yemen is the legendary home of the Queen of Sheba.',
  ],

  // North America
  'Antigua and Barbuda': [
    'Antigua has 365 beaches, one for each day of the year.',
    'The country has no rivers.',
    'English Harbour is one of the Caribbean\'s most historic ports.',
  ],
  'Bahamas': [
    'The Bahamas has over 700 islands and cays.',
    'Only about 30 of the islands are inhabited.',
    'The world\'s third-largest barrier reef is here.',
  ],
  'Barbados': [
    'Barbados is the birthplace of rum.',
    'Rihanna is from Barbados.',
    'The country is one of the most densely populated in the world.',
  ],
  'Belize': [
    'Belize has the world\'s second-largest barrier reef.',
    'The country is the only Central American nation with English as its official language.',
    'The Great Blue Hole is a world-famous diving site.',
  ],
  'Canada': [
    'Canada has more lakes than the rest of the world combined.',
    'Canada has the world\'s longest coastline at 202,080 km.',
    'Canada produces 71% of the world\'s maple syrup.',
    'The US-Canada border is the longest international border in the world.',
  ],
  'Costa Rica': [
    'Costa Rica has no army.',
    'About 25% of the country is protected forest.',
    'Costa Rica is home to 5% of the world\'s biodiversity.',
  ],
  'Cuba': [
    'Cuba has the highest doctor-to-patient ratio in the world.',
    'Classic American cars from the 1950s still roam the streets.',
    'Cuba is the largest Caribbean island.',
  ],
  'Dominica': [
    'Dominica has 365 rivers, one for each day of the year.',
    'The island has the world\'s second-largest boiling lake.',
    'Dominica is known as the "Nature Island of the Caribbean."',
  ],
  'Dominican Republic': [
    'The Dominican Republic shares an island with Haiti.',
    'The country has the highest peak in the Caribbean, Pico Duarte.',
    'Baseball is the most popular sport.',
  ],
  'El Salvador': [
    'El Salvador is the smallest country in Central America.',
    'The country has over 20 volcanoes.',
    'El Salvador adopted Bitcoin as legal tender in 2021.',
  ],
  'Grenada': [
    'Grenada is known as the "Spice Island" for its nutmeg production.',
    'The country produces about 20% of the world\'s nutmeg.',
    'Grenada has one of the world\'s largest underwater sculpture parks.',
  ],
  'Guatemala': [
    'Guatemala is the most populous country in Central America.',
    'The ancient Mayan city of Tikal is here.',
    'Guatemala is one of the megadiverse countries of the world.',
  ],
  'Haiti': [
    'Haiti was the first Black republic in the world.',
    'The country was the second in the Americas to gain independence.',
    'Haiti and the Dominican Republic share the island of Hispaniola.',
  ],
  'Honduras': [
    'Honduras is home to the ancient Mayan city of Copán.',
    'The country has the second-largest barrier reef in the world.',
    'Honduras means "depths" in Spanish.',
  ],
  'Jamaica': [
    'Jamaica is the birthplace of reggae music and Bob Marley.',
    'Jamaica was the first Caribbean country to gain independence.',
    'Usain Bolt, the fastest man ever, is Jamaican.',
  ],
  'Mexico': [
    'Mexico City is sinking at a rate of about 50 cm per year.',
    'The Aztecs used cacao beans as currency.',
    'Mexico introduced chocolate, chili peppers, and corn to the world.',
    'The world\'s smallest volcano, Cuexcomate, is in Mexico at just 13 meters tall.',
  ],
  'Nicaragua': [
    'Nicaragua has the only lake in the world with freshwater sharks.',
    'The country is known as the "Land of Lakes and Volcanoes."',
    'Nicaragua is the largest country in Central America.',
  ],
  'Panama': [
    'The Panama Canal connects the Atlantic and Pacific oceans.',
    'Panama is the only place where you can see the sun rise over the Pacific.',
    'Panama hats actually originated in Ecuador.',
  ],
  'Saint Kitts and Nevis': [
    'This is the smallest sovereign state in the Americas.',
    'The islands were the first Caribbean islands colonized by Europeans.',
    'Sugar cane dominated the economy for centuries.',
  ],
  'Saint Lucia': [
    'Saint Lucia is the only country named after a woman.',
    'The Pitons are UNESCO World Heritage volcanic spires.',
    'The country has won two Nobel Prizes.',
  ],
  'Saint Vincent and the Grenadines': [
    'Pirates of the Caribbean was filmed here.',
    'The country has over 30 islands and cays.',
    'Saint Vincent has an active volcano, La Soufrière.',
  ],
  'Trinidad and Tobago': [
    'Trinidad has the world\'s largest natural deposit of asphalt.',
    'The steel drum was invented in Trinidad.',
    'Carnival in Trinidad is one of the world\'s largest.',
  ],
  'United States': [
    'The US has no official language at the federal level.',
    'Alaska is both the westernmost and easternmost state.',
    'Yellowstone was the world\'s first national park, established in 1872.',
    'The US has more tornadoes than any other country in the world.',
  ],

  // South America
  'Argentina': [
    'Argentina has the widest avenue in the world, Avenida 9 de Julio.',
    'Tango originated in Buenos Aires.',
    'Argentina has won the World Cup multiple times.',
  ],
  'Bolivia': [
    'Bolivia has two capitals, La Paz and Sucre.',
    'Salar de Uyuni is the world\'s largest salt flat.',
    'Bolivia is one of the most biodiverse countries in the world.',
  ],
  'Brazil': [
    'Brazil is home to about 60% of the Amazon rainforest.',
    'The Amazon River has no bridges crossing it along its entire length.',
    'Brazil borders every South American country except Chile and Ecuador.',
    'São Paulo has the largest Japanese population outside Japan.',
  ],
  'Chile': [
    'Chile is the longest north-south country in the world.',
    'The Atacama Desert is the driest place on Earth.',
    'Easter Island with its famous Moai statues belongs to Chile.',
  ],
  'Colombia': [
    'Colombia is the only South American country with coasts on both oceans.',
    'Colombia is the world\'s largest emerald producer.',
    'The country has more bird species than any other.',
  ],
  'Ecuador': [
    'Ecuador is named after the equator.',
    'The Galápagos Islands belong to Ecuador.',
    'Ecuador was the first country to grant nature constitutional rights.',
  ],
  'Guyana': [
    'Guyana is the only English-speaking country in South America.',
    'Kaieteur Falls is one of the world\'s most powerful waterfalls.',
    'Over 80% of Guyana is covered by rainforest.',
  ],
  'Paraguay': [
    'Paraguay is one of two landlocked countries in South America.',
    'The Itaipu Dam is one of the largest hydroelectric dams in the world.',
    'Guaraní is widely spoken alongside Spanish.',
  ],
  'Peru': [
    'Machu Picchu is one of the New Seven Wonders of the World.',
    'Peru has 90 different microclimates.',
    'The Amazon River begins in Peru.',
  ],
  'Suriname': [
    'Suriname is the smallest country in South America.',
    'Dutch is the official language.',
    'About 94% of the country is covered by rainforest.',
  ],
  'Uruguay': [
    'Uruguay was the first country to legalize recreational marijuana.',
    'The country hosted the first FIFA World Cup in 1930.',
    'Uruguay has more cattle than people.',
  ],
  'Venezuela': [
    'Angel Falls is the world\'s highest waterfall.',
    'Venezuela has the world\'s largest proven oil reserves.',
    'The country has won more international beauty pageants than any other.',
  ],

  // Oceania
  'Australia': [
    'Australia is wider than the moon (about 600 km wider).',
    'The Great Barrier Reef is the largest living structure on Earth.',
    'Kangaroos and emus cannot walk backward, which is why they\'re on the coat of arms.',
    'Australia has over 10,000 beaches.',
  ],
  'Fiji': [
    'Fiji has over 330 islands, of which about 110 are inhabited.',
    'Kava is the national drink of Fiji.',
    'Fiji was the first Pacific Island nation to win an Olympic medal.',
  ],
  'Kiribati': [
    'Kiribati is the only country in all four hemispheres.',
    'The country is one of the first to see the new day.',
    'Kiribati may disappear due to rising sea levels.',
  ],
  'Marshall Islands': [
    'The Marshall Islands were a US nuclear testing site.',
    'The country has the world\'s largest shark sanctuary.',
    'Marshallese stick charts were early navigation tools.',
  ],
  'Micronesia': [
    'Micronesia consists of over 600 islands.',
    'The country uses the US dollar as its currency.',
    'Ancient stone cities like Nan Madol are here.',
  ],
  'Nauru': [
    'Nauru is the world\'s smallest island nation.',
    'The country was once the richest per capita due to phosphate mining.',
    'Nauru has no official capital city.',
  ],
  'New Zealand': [
    'New Zealand was the first country to give women the right to vote.',
    'There are about 10 sheep for every person in New Zealand.',
    'New Zealand was the last major landmass to be settled by humans.',
  ],
  'Palau': [
    'Palau has some of the world\'s best diving and snorkeling.',
    'The country banned sunscreen harmful to coral reefs.',
    'Palau\'s Jellyfish Lake has millions of harmless jellyfish.',
  ],
  'Papua New Guinea': [
    'Papua New Guinea has over 800 languages, more than any other country.',
    'The country has some of the world\'s most unexplored rainforests.',
    'Birds of paradise are found only here and nearby islands.',
  ],
  'Samoa': [
    'Samoa was the first Polynesian country to gain independence.',
    'Robert Louis Stevenson is buried in Samoa.',
    'The country switched its driving side from right to left in 2009.',
  ],
  'Solomon Islands': [
    'The Solomon Islands has over 900 islands.',
    'The country was a major World War II battleground.',
    'Some islanders have a gene for blond hair.',
  ],
  'Tonga': [
    'Tonga is the only Pacific nation never colonized by a European power.',
    'The country has over 170 islands.',
    'Tonga sits on the International Date Line.',
  ],
  'Tuvalu': [
    'Tuvalu is the fourth smallest country in the world.',
    'The country earns money from its .tv internet domain.',
    'Tuvalu may disappear due to rising sea levels.',
  ],
  'Vanuatu': [
    'Vanuatu has the world\'s most accessible active volcano, Mount Yasur.',
    'Bungee jumping originated from Vanuatu\'s land diving ritual.',
    'The country has over 80 islands.',
  ],

  // Antarctica
  'Antarctica': [
    'Antarctica is the only continent without a time zone.',
    'About 70% of Earth\'s fresh water is frozen in Antarctica.',
    'Antarctica is technically a desert because it receives very little precipitation.',
    'The coldest temperature ever recorded on Earth was -89.2°C in Antarctica.',
  ],
};

// Fun facts for notable towns and cities
const townFacts: Record<string, string[]> = {
  'New York': ['New York City has over 800 languages spoken, making it the most linguistically diverse city in the world.'],
  'New York City': ['New York City\'s subway system has 472 stations, the most of any system in the world.'],
  'Los Angeles': ['Los Angeles has more cars than people.'],
  'Chicago': ['Chicago has the largest collection of Impressionist paintings outside of Paris.'],
  'Paris': ['The Eiffel Tower was supposed to be a temporary installation for the 1889 World\'s Fair.'],
  'London': ['London\'s Big Ben clock tower leans slightly to the northwest, similar to the Leaning Tower of Pisa.'],
  'Tokyo': ['Tokyo has more Michelin-starred restaurants than any other city in the world.'],
  'Dubai': ['Dubai has no address system; buildings are located by landmarks.'],
  'Sydney': ['Sydney Opera House has over 1 million roof tiles.'],
  'Rome': ['Rome has a law that allows cats to live undisturbed in the ruins.'],
  'Venice': ['Venice is built on 118 small islands connected by over 400 bridges.'],
  'Amsterdam': ['Amsterdam has more than 1,200 bridges and more canals than Venice.'],
  'Barcelona': ['Barcelona\'s Sagrada Familia church has been under construction since 1882.'],
  'Moscow': ['Moscow\'s Metro system has stations decorated like palaces.'],
  'Beijing': ['Beijing\'s Forbidden City has 9,999 rooms.'],
  'Shanghai': ['Shanghai has the world\'s longest metro network.'],
  'Hong Kong': ['Hong Kong has more skyscrapers than any other city in the world.'],
  'Singapore': ['Singapore is one of only three surviving city-states in the world.'],
  'Mumbai': ['Mumbai\'s local trains carry over 7.5 million passengers daily.'],
  'Cairo': ['Cairo is the largest city in Africa and the Middle East.'],
  'Istanbul': ['Istanbul is the only city in the world spanning two continents.'],
  'Bangkok': ['Bangkok\'s full ceremonial name has 169 characters.'],
  'Seoul': ['Seoul\'s Gangnam district inspired the song "Gangnam Style."'],
  'Toronto': ['Toronto has the world\'s longest underground shopping complex.'],
  'Rio de Janeiro': ['Christ the Redeemer in Rio was voted one of the New Seven Wonders of the World.'],
  'Buenos Aires': ['Buenos Aires has the widest avenue in the world with 16 lanes.'],
  'Cape Town': ['Cape Town is home to the world\'s largest individual timed cycle race.'],
  'Marrakech': ['Marrakech\'s medina is one of the largest in Morocco.'],
  'Kyoto': ['Kyoto has over 2,000 temples and shrines.'],
  'Vienna': ['Vienna has been ranked the world\'s most livable city multiple times.'],
  'Prague': ['Prague Castle is the largest ancient castle complex in the world.'],
  'Lisbon': ['Lisbon is older than Rome by about 400 years.'],
  'Athens': ['Athens has been continuously inhabited for over 7,000 years.'],
  'Jerusalem': ['Jerusalem is sacred to Judaism, Christianity, and Islam.'],
  'San Francisco': ['San Francisco\'s cable cars are the only mobile National Historic Landmark.'],
  'Las Vegas': ['Las Vegas has more hotel rooms than any other city in the world.'],
  'Miami': ['Miami is the only major US city founded by a woman.'],
  'Reykjavik': ['Reykjavik is the northernmost capital of a sovereign state.'],
  'Havana': ['Havana\'s old town is a UNESCO World Heritage Site.'],
  'Nairobi': ['Nairobi is the only capital city with a national park within it.'],
  'Auckland': ['Auckland is built on 50 volcanoes.'],
  'Edinburgh': ['Edinburgh was the first city to have its own fire brigade.'],
  'Dublin': ['Dublin is home to the world\'s oldest pub, dating back to 900 AD.'],
  'Vancouver': ['Vancouver has been ranked one of the world\'s most livable cities.'],
  'Melbourne': ['Melbourne was ranked the world\'s most livable city for 7 consecutive years.'],
  'Zürich': ['Zürich has the highest density of nightclubs per capita in the world.'],
  'Geneva': ['Geneva hosts more international organizations than any other city.'],
  'Monaco': ['Monaco is smaller than Central Park in New York.'],
  'San Marino': ['San Marino claims to be the oldest surviving republic.'],
  'Vatican': ['Vatican City is the smallest country in the world.'],
};

// Default facts for oceans and unknown locations
const defaultFacts: string[] = [
  'Every location on Earth has a unique combination of latitude and longitude.',
  'The Earth\'s surface is about 71% water and 29% land.',
  'Mount Everest grows about 4 millimeters per year due to tectonic uplift.',
  'The deepest point on Earth is the Challenger Deep at about 11,034 meters below sea level.',
  'The Sahara Desert is roughly the same size as the United States.',
  'The Dead Sea is the lowest point on land at about 430 meters below sea level.',
  'The Pacific Ocean is larger than all the land on Earth combined.',
  'There are more trees on Earth than stars in the Milky Way galaxy.',
  'The Amazon rainforest produces about 6% of the world\'s oxygen.',
  'Iceland is growing about 5 cm per year due to tectonic plates pulling apart.',
  'The Earth is not a perfect sphere - it\'s slightly flattened at the poles.',
  'The longest river system is the Nile at 6,650 km.',
  'Oceans contain about 97% of all water on Earth.',
  'The Mariana Trench could fit Mount Everest with over 2 km to spare.',
  'Earth is the only planet not named after a god or goddess.',
];

const oceanFacts: string[] = [
  'The ocean covers more than 70% of Earth\'s surface.',
  'Less than 5% of the ocean has been explored.',
  'The average depth of the ocean is about 3,688 meters.',
  'The ocean produces over 50% of the world\'s oxygen.',
  'There are more historic artifacts under the sea than in all museums combined.',
  'The loudest sound ever recorded came from an iceberg cracking in the ocean.',
  'The Pacific Ocean is shrinking while the Atlantic Ocean is growing.',
  'There are underwater lakes and rivers in the ocean.',
  'The ocean has an average temperature of about 3.5°C.',
  'Pressure at the deepest point of the ocean is over 1,000 times surface pressure.',
];

export function getRandomFunFact(country: string | null, city?: string | null): string {
  // Check for city-specific facts first
  if (city) {
    const cityFacts = townFacts[city];
    if (cityFacts) {
      return cityFacts[Math.floor(Math.random() * cityFacts.length)];
    }
  }
  
  // Check for country facts
  if (country) {
    // Check for ocean/sea
    if (country.toLowerCase().includes('ocean') || country.toLowerCase().includes('sea')) {
      return oceanFacts[Math.floor(Math.random() * oceanFacts.length)];
    }
    
    const facts = countryFacts[country];
    if (facts) {
      return facts[Math.floor(Math.random() * facts.length)];
    }
  }
  
  // Return default fact
  return defaultFacts[Math.floor(Math.random() * defaultFacts.length)];
}

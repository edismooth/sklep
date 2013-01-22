// Define a product constructor
function product(name, description, price, unit) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.unit = unit;
	this.plu = name.substring(0, 3).toUpperCase() + parseInt(price).toString();
	this.icon = new Image();
	return this;
	}

// Define a category constructor
function category(name, description) {
	this.name = name;
	this.description = description;
	this.prodLine = eval(name);

	var imgDir = "images/" + name.toLowerCase() + "/";
	for (var i = 0; i < this.prodLine.length; i++) {
		this.prodLine[i].icon.src = imgDir + this.prodLine[i].name.toLowerCase() + ".jpg";
		}
	return this; 
	}

// Define a function to generate the products 
// and then assign them to categories
function makeProducts() {
	GU10 = new Array(new product("12LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 17.99	, "each"), 
                   new product("20LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 9.99, "each"),
                   new product("24LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 23.99, "each"),  
                   new product("48LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 13.59, "each"),
                   new product("60LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 15.99, "each"),
                   new product("80LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 17.99, "each")                            
                );

	MR16 = new Array(new product("24LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 9.99, "each"),
                   new product("36LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 20.00, "each"),  
                   new product("45LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 13.69, "each"),
                   new product("60LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 15.99, "each"),
                   new product("80LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 17.99, "each")                            
                );
                
  E27 = new Array(new product("80LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 29.99, "each"),
                  new product("90LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 24.59, "each")                                            
                );   
  
  E14 = new Array(new product("12LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 25.49	, "each"), 
                   new product("20LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 16.99, "each"),
                   new product("24LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 15.45, "each"),  
                   new product("48LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 26.69, "each"),
                   new product("60LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 29.99, "each"),
                   new product("80LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 17.99, "each"),
                   new product("90LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 25.49, "each")                                            
                );   
                
  G9 = new Array(new product("24LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 25.49	, "each"), 
                   new product("30LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 9.49, "each"),
                   new product("48LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 19.49, "each")                                           
                ); 
                
  G4 = new Array(new product("12LED", "Energooszczędna żarówka wykonana w technologii LED, która cechuje się bardzo długą żywotnością oraz energooszczędnością. Zużycie prądu w stosunku do tradycyjnych żarówek jest o ponad 90% niższe.", 15.99	, "each")
                );                                          
                           

	categorySet = new Array(new category("GU10", "Główną zaletą GU10 jest kierunkowe światło. A ponieważ coraz większą popularnością cieszy się oświetlenie dekoracyjne, żarówki GU10 stały się standardem dla każdego typu pomieszczeń."),
					                new category("MR16", "Żarówki MR16 są zbudowane z sześćdziesięciu diod SMD 3528. Dzięki dużej ilości diod na małej powierzchni udało się uzyskać efekt świecenia praktycznie całej płaszczyzny. Jest to odpowiednik około 35W żarówki halogenowej."),
					                new category("E27", "Wysokiej jakości żarówki energooszczędne z trzonkiem E27 i kloszem IP44 zabezpieczającym diody przed wilgocią, parą i bryzgającą wodą."),
					                new category("E14", "Żarówki te posiadają aluminiową obudowę oraz diody SMD schowane za szkiełkiem co zwiększa ich odporność jak również dodaje walorów estetycznych. Poprzez niewielki pobór prądu są stosowane w miejscach, gdzie oświetlenie musi być włączone na stałe. Są używane w ciągach komunikacyjnych, w miejscach użyteczności publicznej, pomieszczeniach mieszkalnych, biurowych."),
					                new category("G9", "Żarówki G9 posiadają niewiarygodny bilans cena/moc świetlna. Przystosowane do użycia w najnowszej generacji żyrandolach i kinkietach. Oparte są na wysokowydajnej diodzie SMD 5050, dzięki czemu ich skuteczność świetlna jest bardzo wysoka - 95lm/W! Niewielkie rozmiary w połączeniu z bardzo silnym strumieniem świetlnym sprawia, że żarówki G9 są jednymi z naszych topowych produktów."),
					                new category("G4", "Żarówki tego typu znajdują szerokie zastosowanie w różnego typu oprawach oświetleniowych służących do oświetlania wnętrz. Obecnie tego typu źródła światła produkowane są w wersji UV-STOP.Specjalne szkło kwarcowe absorbuje zbędną część promieniowania UV, czyniąc wytwarzane światło wolnym od tego szkodliwego dla człowieka i przedmiotów oświetlanych promieniowania. Główne obszarem zastosowania tego typu żarówek jest oświetlenie dekoracyjne, dzięki UV-STOP do oświetlania obiektów w galeriach, muzeach, witrynach sklepowych i do oświetlania stanowisk pracy.")
 					  );
	}		
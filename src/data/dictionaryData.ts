export interface DictionaryTerm {
  id: string;
  category: number;
  slug: string;
  title: {
    en: string;
    cs: string;
    pl: string;
  };
  description: {
    en: string;
    cs: string;
    pl: string;
  };
}

export const dictionaryCategories = {
  1: { en: "Core Trading & Investing", cs: "Základy tradingu a investování", pl: "Podstawy tradingu i inwestowania" },
  2: { en: "Orders & Trade Execution", cs: "Objednávky a exekuce", pl: "Zlecenia i realizacja transakcji" },
  3: { en: "Risk Management", cs: "Risk Management", pl: "Zarządzanie ryzykiem" },
  4: { en: "Technical Analysis", cs: "Technická analýza", pl: "Analiza techniczna" },
  5: { en: "Indicators", cs: "Indikátory", pl: "Wskaźniki" },
  6: { en: "Fundamental Analysis", cs: "Fundamentální analýza", pl: "Analiza fundamentalna" },
  7: { en: "Markets & Asset Classes", cs: "Trhy a třídy aktiv", pl: "Rynki i klasy aktywów" },
  8: { en: "Trading Strategies", cs: "Obchodní strategie", pl: "Strategie tradingowe" },
  9: { en: "Trading Psychology", cs: "Psychologie tradingu", pl: "Psychologia tradingu" },
  10: { en: "Advanced & Professional", cs: "Pokročilé a profesionální termíny", pl: "Zaawansované i profesjonalne terminy" }
};

export const dictionaryData: DictionaryTerm[] = [
  {
    id: "1",
    category: 1,
    slug: "trading",
    title: {
      en: "Trading",
      cs: "Trading",
      pl: "Trading"
    },
    description: {
      en: "Trading means buying and selling assets like stocks, forex, or crypto to make profit from price movements. It is usually short-term and focused on timing the market.",
      cs: "Trading znamená nákup a prodej aktiv, jako jsou akcie, forex nebo krypto, s cílem dosáhnout zisku z cenových pohybů. Obvykle je krátkodobý a zaměřený na časování trhu.",
      pl: "Trading oznacza kupowanie i sprzedawanie aktywów, takich jak akcje, forex lub kryptowaluty, w celu osiągnięcia zysku z ruchów cenowych. Zazwyczaj jest krótkoterminowy i skoncentrowany na wyczuciu rynku."
    }
  },
  {
    id: "2",
    category: 1,
    slug: "investing",
    title: {
      en: "Investing",
      cs: "Investování",
      pl: "Inwestowanie"
    },
    description: {
      en: "Investing is the process of putting money into assets with the expectation of long-term growth. Unlike trading, it focuses on holding assets for months or years.",
      cs: "Investování je proces vkládání peněz do aktiv s očekáváním dlouhodobého růstu. Na rozdíl od tradingu se zaměřuje na držení aktiv po dobu měsíců nebo let.",
      pl: "Inwestowanie to proces lokowania pieniędzy w aktywa z oczekiwaniem długoterminowego wzrostu. W przeciwieństwie do tradingu, koncentruje się na trzymaniu aktywów przez miesiące lub lata."
    }
  },
  {
    id: "3",
    category: 1,
    slug: "asset",
    title: {
      en: "Asset",
      cs: "Aktivum",
      pl: "Aktywo"
    },
    description: {
      en: "An asset is anything that has value and can be traded or owned. This includes stocks, cryptocurrencies, commodities, and real estate.",
      cs: "Aktivum je cokoli, co má hodnotu a lze s tím obchodovat nebo to vlastnit. To zahrnuje akcie, kryptoměny, komodity a nemovitosti.",
      pl: "Aktywo to wszystko, co ma wartość i może być przedmiotem obrotu lub własności. Obejmuje to akcje, kryptowaluty, towary i nieruchomości."
    }
  },
  {
    id: "4",
    category: 1,
    slug: "financial-market",
    title: {
      en: "Financial Market",
      cs: "Finanční trh",
      pl: "Rynek finansowy"
    },
    description: {
      en: "A financial market is a place where buyers and sellers trade assets. Examples include stock markets, forex markets, and crypto exchanges.",
      cs: "Finanční trh je místo, kde kupující a prodávající obchodují s aktivy. Příklady zahrnují akciové trhy, forexové trhy a kryptoburzy.",
      pl: "Rynek finansowy to miejsce, w którym kupujący i sprzedający handlują aktywami. Przykłady obejmują rynki akcji, rynki forex i giełdy kryptowalut."
    }
  },
  {
    id: "5",
    category: 1,
    slug: "bull-market",
    title: {
      en: "Bull Market",
      cs: "Býčí trh (Bull Market)",
      pl: "Rynek byka (Bull Market)"
    },
    description: {
      en: "A bull market is a period when prices are generally rising. It reflects optimism and strong investor confidence.",
      cs: "Býčí trh je období, kdy ceny obecně rostou. Odráží optimismus a silnou důvěru investorů.",
      pl: "Rynek byka to okres, w którym ceny ogólnie rosną. Odzwierciedla optymizm i silne zaufanie inwestorów."
    }
  },
  {
    id: "6",
    category: 1,
    slug: "bear-market",
    title: {
      en: "Bear Market",
      cs: "Medvědí trh (Bear Market)",
      pl: "Rynek niedźwiedzia (Bear Market)"
    },
    description: {
      en: "A bear market is when prices are falling over a longer period. It usually reflects fear and negative sentiment in the market.",
      cs: "Medvědí trh je období, kdy ceny po delší dobu klesají. Obvykle odráží strach a negativní sentiment na trhu.",
      pl: "Rynek niedźwiedzia to okres, w którym ceny spadają przez dłuższy czas. Zazwyczaj odzwierciedla strach i negatywne nastroje na rynku."
    }
  },
  {
    id: "7",
    category: 1,
    slug: "volatility",
    title: {
      en: "Volatility",
      cs: "Volatilita",
      pl: "Woatylność"
    },
    description: {
      en: "Volatility describes how much the price of an asset moves up and down. High volatility means large price swings.",
      cs: "Volatilita popisuje, jak moc se cena aktiva pohybuje nahoru a dolů. Vysoká volatilita znamená velké cenové výkyvy.",
      pl: "Woatylność opisuje, jak bardzo cena aktywa waha się w górę i w dół. Wysoka woatylność oznacza duże wahania cenowe."
    }
  },
  {
    id: "8",
    category: 1,
    slug: "liquidity",
    title: {
      en: "Liquidity",
      cs: "Likvidita",
      pl: "Płynność"
    },
    description: {
      en: "Liquidity refers to how easily an asset can be bought or sold without affecting its price. High liquidity means fast execution.",
      cs: "Likvidita vyjadřuje, jak snadno lze aktivum koupit nebo prodat, aniž by to ovlivnilo jeho cenu. Vysoká likvidita znamená rychlou exekuci.",
      pl: "Płynność odnosi się do tego, jak łatwo można kupić nebo sprzedać aktywo bez wpływu na jego cenę. Wysoka płynność oznacza szybką realizację."
    }
  },
  {
    id: "9",
    category: 1,
    slug: "capital",
    title: {
      en: "Capital",
      cs: "Kapitál",
      pl: "Kapitał"
    },
    description: {
      en: "Capital is the money you use for trading or investing. It represents your starting point in the market.",
      cs: "Kapitál jsou peníze, které používáte k obchodování nebo investování. Představuje váš výchozí bod na trhu.",
      pl: "Kapitał to pieniądze, które wykorzystujesz do tradingu lub inwestowania. Reprezentuje Twój punkt wyjścia na rynku."
    }
  },
  {
    id: "10",
    category: 1,
    slug: "portfolio",
    title: {
      en: "Portfolio",
      cs: "Portfolio",
      pl: "Portfolio"
    },
    description: {
      en: "A portfolio is a collection of all your investments. It can include different types of assets like stocks, crypto, and ETFs.",
      cs: "Portfolio je soubor všech vašich investic. Může zahrnovat různé typy aktiv, jako jsou akcie, kryptoměny a ETF.",
      pl: "Portfolio to zbiór wszystkich Twoich inwestycji. Może obejmować różne rodzaje aktywów, takie jak akcje, kryptowaluty i fundusze ETF."
    }
  },
  {
    id: "11",
    category: 1,
    slug: "roi",
    title: {
      en: "Return on Investment (ROI)",
      cs: "Návratnost investice (ROI)",
      pl: "Zwrot z inwestycji (ROI)"
    },
    description: {
      en: "ROI measures how much profit or loss you make compared to your initial investment. It is usually expressed as a percentage.",
      cs: "ROI měří, jaký zisk nebo ztrátu dosáhnete ve srovnání s vaší počáteční investicí. Obvykle se vyjadřuje v procentech.",
      pl: "ROI mierzy, jak duży zysk lub stratę osiągasz w porównaniu do początkowej inwestycji. Zazwyczaj wyraża się go w procentach."
    }
  },
  {
    id: "12",
    category: 1,
    slug: "profit",
    title: {
      en: "Profit",
      cs: "Zisk",
      pl: "Zysk"
    },
    description: {
      en: "Profit is the money you earn from a successful trade or investment. It occurs when you sell an asset at a higher price than you bought it.",
      cs: "Zisk jsou peníze, které vyděláte z úspěšného obchodu nebo investice. Nastává, když prodáte aktivum za vyšší cenu, než jste ho koupili.",
      pl: "Zysk to pieniądze zarobione na udanej transakcji lub inwestycji. Powstaje, gdy sprzedajesz aktywo po cenie wyższej niż cena zakupu."
    }
  },
  {
    id: "13",
    category: 1,
    slug: "loss",
    title: {
      en: "Loss",
      cs: "Ztráta",
      pl: "Strata"
    },
    description: {
      en: "Loss occurs when you sell an asset for less than you paid for it. Managing losses is essential to protect capital.",
      cs: "Ztráta nastává, když prodáte aktivum za méně, než jste za něj zaplatili. Řízení ztrát je nezbytné pro ochranu kapitálu.",
      pl: "Strata powstaje, gdy sprzedajesz aktywo za kwotę niższą niż zapłacona. Zarządzanie stratami jest niezbędne do ochrony kapitału."
    }
  },
  {
    id: "14",
    category: 1,
    slug: "risk",
    title: {
      en: "Risk",
      cs: "Riziko",
      pl: "Ryzyko"
    },
    description: {
      en: "Risk is the possibility of losing money in a trade or investment. Every financial decision involves some level of risk.",
      cs: "Riziko je možnost ztráty peněz v obchodu nebo investici. Každé finanční rozhodnutí zahrnuje určitou úroveň rizika.",
      pl: "Ryzyko to możliwość utraty pieniędzy w transakcji lub inwestycji. Każda decyzja finansowa wiąże się z pewnym poziomem ryzyka."
    }
  },
  {
    id: "15",
    category: 1,
    slug: "reward",
    title: {
      en: "Reward",
      cs: "Odměna (Reward)",
      pl: "Nagroda (Reward)"
    },
    description: {
      en: "Reward refers to the potential profit from a trade. It is compared against risk to evaluate if a trade is worth taking.",
      cs: "Odměna (Reward) představuje potenciální zisk z obchodu. Porovnává se s rizikem pro posouzení, zda obchod stojí za realizaci.",
      pl: "Nagroda (Reward) odnosi się do potencjalnego zysku z transakcji. Jest porównywana z ryzykiem w celu oceny, czy warto zawrzeć transakcję."
    }
  },
  {
    id: "16",
    category: 1,
    slug: "risk-reward-ratio",
    title: {
      en: "Risk/Reward Ratio",
      cs: "Poměr rizika a zisku (RRR)",
      pl: "Stosunek ryzyka do zysku (RRR)"
    },
    description: {
      en: "This ratio compares how much you can gain versus how much you can lose. A good ratio improves long-term profitability.",
      cs: "Tento poměr porovnává, kolik můžete získat oproti tomu, kolik můžete ztratit. Dobrý poměr zlepšuje dlouhodobou profitabilitu.",
      pl: "Wskaźnik ten porównuje, ile możesz zyskać w stosunku do tego, ile możesz stracić. Dobry stosunek poprawia długoterminową rentowność."
    }
  },
  {
    id: "17",
    category: 1,
    slug: "market-participant",
    title: {
      en: "Market Participant",
      cs: "Účastník trhu",
      pl: "Uczestnik rynku"
    },
    description: {
      en: "A market participant is anyone who trades or invests in the market, including individuals, institutions, and hedge funds.",
      cs: "Účastník trhu je kdokoli, kdo na trhu obchoduje nebo investuje, včetně jednotlivců, institucí a hedgeových fondů.",
      pl: "Uczestnik rynku to każdy, kto handluje lub inwestuje na rynku, w tym osoby fizyczne, instytucje i fundusze hedgingowe."
    }
  },
  {
    id: "18",
    category: 1,
    slug: "exchange",
    title: {
      en: "Exchange",
      cs: "Burza (Exchange)",
      pl: "Giełda (Exchange)"
    },
    description: {
      en: "An exchange is a platform where assets are traded. It connects buyers and sellers in the market.",
      cs: "Burza je platforma, kde se obchoduje s aktivy. Propojuje kupující a prodávající na trhu.",
      pl: "Giełda to platforma, na której odbywa się handel aktywami. Łączy ona kupujących i sprzedających na rynku."
    }
  },
  {
    id: "19",
    category: 1,
    slug: "broker",
    title: {
      en: "Broker",
      cs: "Broker",
      pl: "Broker"
    },
    description: {
      en: "A broker is a company that allows you to access financial markets. It provides tools and platforms for trading.",
      cs: "Broker je společnost, která vám umožňuje přístup na finanční trhy. Poskytuje nástroje a platformy pro obchodování.",
      pl: "Broker to firma, która umożliwia dostęp do rynków finansowych. Dostarcza narzędzia i platformy do tradingu."
    }
  },
  {
    id: "20",
    category: 1,
    slug: "spread",
    title: {
      en: "Spread",
      cs: "Spread",
      pl: "Spread"
    },
    description: {
      en: "Spread is the difference between the buying price and selling price of an asset. It represents a cost of trading.",
      cs: "Spread je rozdíl mezi nákupní a prodejní cenou aktiva. Představuje náklad na obchodování.",
      pl: "Spread to różnica między ceną kupna a ceną sprzedaży aktywa. Reprezentuje koszt transakcyjny."
    }
  },
  {
    id: "21",
    category: 1,
    slug: "bid-price",
    title: {
      en: "Bid Price",
      cs: "Poptávková cena (Bid Price)",
      pl: "Cena kupna (Bid Price)"
    },
    description: {
      en: "The bid price is the highest price a buyer is willing to pay. It is the price at which you can sell an asset.",
      cs: "Bid price je nejvyšší cena, kterou je kupující ochoten zaplatit. Je to cena, za kterou můžete aktivum prodat.",
      pl: "Cena bid to najwyższa cena, jaką kupujący jest gotów zapłacić. Jest to cena, po której możesz sprzedać aktywo."
    }
  },
  {
    id: "22",
    category: 1,
    slug: "ask-price",
    title: {
      en: "Ask Price",
      cs: "Nabídková cena (Ask Price)",
      pl: "Cena sprzedaży (Ask Price)"
    },
    description: {
      en: "The ask price is the lowest price a seller is willing to accept. It is the price at which you can buy an asset.",
      cs: "Ask price je nejnižší cena, kterou je prodávající ochoten akceptovat. Je to cena, za kterou můžete aktivum koupit.",
      pl: "Cena ask to najniższa cena, jaką sprzedający jest gotów zaakceptować. Jest to cena, po której możesz kupić aktywo."
    }
  },
  {
    id: "23",
    category: 1,
    slug: "market-sentiment",
    title: {
      en: "Market Sentiment",
      cs: "Sentiment na trhu",
      pl: "Sentyment rynkowy"
    },
    description: {
      en: "Market sentiment reflects the overall mood of traders and investors. It can be bullish or bearish.",
      cs: "Sentiment na trhu odráží celkovou náladu obchodníků a investorů. Může být býčí nebo medvědí.",
      pl: "Sentyment rynkowy odzwierciedla ogólny nastrój traderów i inwestorów. Może być byczy lub niedźwiedzi."
    }
  },
  {
    id: "24",
    category: 1,
    slug: "speculation",
    title: {
      en: "Speculation",
      cs: "Spekulace",
      pl: "Spekulacja"
    },
    description: {
      en: "Speculation is trading based on expected future price movements. It involves higher risk and uncertainty.",
      cs: "Spekulace je obchodování založené na očekávaných budoucích pohybech cen. Zahrnuje vyšší riziko a nejistotu.",
      pl: "Spekulacja to trading oparty na oczekiwanych przyszłych ruchach cenowych. Wiąże się z wyższym ryzykiem i niepewnością."
    }
  },
  {
    id: "25",
    category: 1,
    slug: "hedging",
    title: {
      en: "Hedging",
      cs: "Hedging (Zajištění)",
      pl: "Hedging (Zabezpieczanie)"
    },
    description: {
      en: "Hedging is a strategy used to reduce risk. It involves opening a position to offset potential losses.",
      cs: "Hedging je strategie používaná ke snížení rizika. Zahrnuje otevření pozice pro kompenzaci potenciálních ztrát.",
      pl: "Hedging to strategia stosowana w celu ograniczenia ryzyka. Polega na otwarciu pozycji w celu zrównoważenia potencjalnych strat."
    }
  },
  {
    id: "26",
    category: 1,
    slug: "diversification",
    title: {
      en: "Diversification",
      cs: "Diverzifikace",
      pl: "Dywersyfikacja"
    },
    description: {
      en: "Diversification means spreading investments across different assets. It reduces risk by not relying on one investment.",
      cs: "Diverzifikace znamená rozložení investic mezi různá aktiva. Snižuje riziko tím, že nespoléhá na jednu investici.",
      pl: "Dywersyfikacja oznacza rozproszenie inwestycji na różne aktywa. Zmniejsza ryzyko, nie polegając na jednej inwestycji."
    }
  },
  {
    id: "27",
    category: 1,
    slug: "inflation",
    title: {
      en: "Inflation",
      cs: "Inflace",
      pl: "Inflacja"
    },
    description: {
      en: "Inflation is the increase in prices over time. It reduces the purchasing power of money.",
      cs: "Inflace je nárůst cen v průběhu času. Snižuje kupní sílu peněz.",
      pl: "Inflacja to wzrost cen w czasie. Zmniejsza siłę nabywczą pieniądza."
    }
  },
  {
    id: "28",
    category: 1,
    slug: "deflation",
    title: {
      en: "Deflation",
      cs: "Deflace",
      pl: "Deflacja"
    },
    description: {
      en: "Deflation is the decrease in prices across the economy. It can slow down economic growth.",
      cs: "Deflace je pokles cen v celé ekonomice. Může zpomalit hospodářský růst.",
      pl: "Deflacja to spadek cen w całej gospodarce. Może spowolnić wzrost gospodarczy."
    }
  },
  {
    id: "29",
    category: 1,
    slug: "interest-rate",
    title: {
      en: "Interest Rate",
      cs: "Úroková sazba",
      pl: "Stopa procentowa"
    },
    description: {
      en: "Interest rates are set by central banks and affect borrowing costs. Higher rates can slow down markets.",
      cs: "Úrokové sazby stanovují centrální banky a ovlivňují náklady na půjčky. Vyšší sazby mohou trhy zpomalit.",
      pl: "Stopy procentowe są ustalane przez banki centralne i wpływają na koszty pożyczek. Wyższe stopy mogą spowolnić rynki."
    }
  },
  {
    id: "30",
    category: 1,
    slug: "economic-cycle",
    title: {
      en: "Economic Cycle",
      cs: "Hospodářský cyklus",
      pl: "Cykl ekonomiczny"
    },
    description: {
      en: "The economic cycle describes the rise and fall of economic activity. It includes expansion, peak, recession, and recovery.",
      cs: "Hospodářský cyklus popisuje vzestup a pád ekonomické aktivity. Zahrnuje expanzi, vrchol, recesi a oživení.",
      pl: "Cykl ekonomiczny opisuje wzrost i spadek aktywności gospodarczej. Obejmuje ekspansję, szczyt, recesję i ożywienie."
    }
  },
  {
    id: "31",
    category: 1,
    slug: "stock",
    title: {
      en: "Stock",
      cs: "Akcie",
      pl: "Akcja"
    },
    description: {
      en: "A stock represents ownership in a company. When you buy a stock, you own a small piece of that business.",
      cs: "Akcie představuje podíl ve společnosti. Když si koupíte akcii, vlastníte malou část daného podniku.",
      pl: "Akcja reprezentuje udział w firmie. Kupując akcję, stajesz się właścicielem niewielkiej części tego biznesu."
    }
  },
  {
    id: "32",
    category: 1,
    slug: "bond",
    title: {
      en: "Bond",
      cs: "Dluhopis",
      pl: "Obligacja"
    },
    description: {
      en: "A bond is a loan you give to a government or company in exchange for regular interest payments.",
      cs: "Dluhopis je půjčka, kterou poskytnete vládě nebo společnosti výměnou za pravidelné úrokové platby.",
      pl: "Obligacja to pożyczka, której udzielasz rządowi lub firmie w zamian za regularne płatności odsetkowe."
    }
  },
  {
    id: "33",
    category: 1,
    slug: "commodity",
    title: {
      en: "Commodity",
      cs: "Komodita",
      pl: "Towar (Commodity)"
    },
    description: {
      en: "Commodities are basic goods like gold, oil, or wheat. They are often traded as a hedge against inflation.",
      cs: "Komodity jsou základní zboží jako zlato, ropa nebo pšenice. Často se s nimi obchoduje jako se zajištěním proti inflaci.",
      pl: "Towary to podstawowe dobra, takie jak złoto, ropa czy pszenica. Często handluje się nimi w celu zabezpieczenia przed inflacją."
    }
  },
  {
    id: "34",
    category: 1,
    slug: "forex",
    title: {
      en: "Forex",
      cs: "Forex",
      pl: "Forex"
    },
    description: {
      en: "Forex (Foreign Exchange) is the market where currencies are traded. It is the largest and most liquid market in the world.",
      cs: "Forex (Foreign Exchange) je trh, kde se obchoduje s měnami. Je to největší a nejlikvidnější trh na světě.",
      pl: "Forex (Foreign Exchange) to rynek, na którym handluje się walutami. Jest to największy i najbardziej płynny rynek na świecie."
    }
  },
  {
    id: "35",
    category: 1,
    slug: "cryptocurrency",
    title: {
      en: "Cryptocurrency",
      cs: "Kryptoměna",
      pl: "Kryptowaluta"
    },
    description: {
      en: "Cryptocurrency is a digital asset secured by cryptography. Bitcoin and Ethereum are the most well-known examples.",
      cs: "Kryptoměna je digitální aktivum zabezpečené kryptografií. Bitcoin a Ethereum jsou nejznámějšími příklady.",
      pl: "Kryptowaluta to cyfrowe aktywo zabezpieczone kryptografią. Bitcoin i Ethereum to najbardziej znane przykłady."
    }
  },
  {
    id: "36",
    category: 1,
    slug: "etf",
    title: {
      en: "ETF (Exchange Traded Fund)",
      cs: "ETF (Exchange Traded Fund)",
      pl: "ETF (Exchange Traded Fund)"
    },
    description: {
      en: "An ETF is a fund that tracks a group of assets, like an index or a sector, and can be traded on an exchange like a stock.",
      cs: "ETF je fond, který sleduje skupinu aktiv, jako je index nebo sektor, a lze s ním obchodovat na burze jako s akcií.",
      pl: "ETF to fundusz, który śledzi grupę aktywów, takich jak indeks lub sektor, i można nim handlować na giełdzie tak jak akcjami."
    }
  },
  {
    id: "37",
    category: 1,
    slug: "index",
    title: {
      en: "Market Index",
      cs: "Tržní index",
      pl: "Indeks rynkowy"
    },
    description: {
      en: "A market index measures the performance of a group of stocks. Examples include the S&P 500 or the Nasdaq 100.",
      cs: "Tržní index měří výkonnost skupiny akcií. Příklady zahrnují S&P 500 nebo Nasdaq 100.",
      pl: "Indeks rynkowy mierzy wyniki grupy akcji. Przykłady obejmują S&P 500 lub Nasdaq 100."
    }
  },
  {
    id: "38",
    category: 1,
    slug: "leverage",
    title: {
      en: "Leverage",
      cs: "Páka (Leverage)",
      pl: "Dźwignia (Leverage)"
    },
    description: {
      en: "Leverage allows you to trade with more money than you have. It amplifies both potential profits and potential losses.",
      cs: "Páka vám umožňuje obchodovat s větším objemem peněz, než kolik máte. Zesiluje jak potenciální zisky, tak potenciální ztráty.",
      pl: "Dźwignia pozwala na handel większą kwotą pieniędzy niż posiadasz. Potęguje zarówno potencjalne zyski, jak i potencjalne straty."
    }
  },
  {
    id: "39",
    category: 1,
    slug: "margin",
    title: {
      en: "Margin",
      cs: "Marže (Margin)",
      pl: "Depozyt zabezpieczający (Margin)"
    },
    description: {
      en: "Margin is the amount of money you need in your account to open a leveraged position.",
      cs: "Marže je množství peněz, které musíte mít na účtu, abyste mohli otevřít pozici s pákou.",
      pl: "Depozyt zabezpieczający to kwota pieniędzy potrzebna na koncie do otwarcia pozycji z dźwignią."
    }
  },
  {
    id: "40",
    category: 1,
    slug: "equity",
    title: {
      en: "Equity",
      cs: "Vlastní kapitál (Equity)",
      pl: "Kapitał własny (Equity)"
    },
    description: {
      en: "Equity represents the actual value of your account, including open profits and losses.",
      cs: "Equity představuje skutečnou hodnotu vašeho účtu, včetně otevřených zisků a ztrát.",
      pl: "Equity reprezentuje rzeczywistą wartość Twojego konta, wliczając w to otwarte zyski i straty."
    }
  },
  {
    id: "41",
    category: 1,
    slug: "balance",
    title: {
      en: "Account Balance",
      cs: "Zůstatek na účtu",
      pl: "Saldo konta"
    },
    description: {
      en: "Balance is the amount of money in your account without including open trades.",
      cs: "Zůstatek je množství peněz na vašem účtu bez započtení otevřených obchodů.",
      pl: "Saldo to kwota pieniędzy na Twoim koncie bez uwzględnienia otwartych transakcji."
    }
  },
  {
    id: "42",
    category: 1,
    slug: "drawdown",
    title: {
      en: "Drawdown",
      cs: "Drawdown (Pokles)",
      pl: "Drawdown (Obsunięcie kapitału)"
    },
    description: {
      en: "Drawdown measures the decline in your account value from its peak. It is a key metric for risk management.",
      cs: "Drawdown měří pokles hodnoty vašeho účtu z jeho vrcholu. Je to klíčová metrika pro řízení rizik.",
      pl: "Drawdown mierzy spadek wartości konta od jego szczytu. Jest to kluczowy wskaźnik zarządzania ryzykiem."
    }
  },
  {
    id: "43",
    category: 1,
    slug: "long-position",
    title: {
      en: "Long Position",
      cs: "Long pozice (Nákup)",
      pl: "Pozycja długa (Long)"
    },
    description: {
      en: "A long position means buying an asset with the expectation that its price will rise.",
      cs: "Long pozice znamená nákup aktiva s očekáváním, že jeho cena poroste.",
      pl: "Pozycja długa oznacza kupno aktywa z oczekiwaniem, że jego cena wzrośnie."
    }
  },
  {
    id: "44",
    category: 1,
    slug: "short-position",
    title: {
      en: "Short Position",
      cs: "Short pozice (Prodej)",
      pl: "Pozycja krótka (Short)"
    },
    description: {
      en: "A short position means selling an asset you don't own to profit from a price decline.",
      cs: "Short pozice znamená prodej aktiva, které nevlastníte, s cílem profitovat z poklesu ceny.",
      pl: "Pozycja krótka oznacza sprzedaż aktywa, którego nie posiadasz, w celu osiągnięcia zysku z jego spadku."
    }
  },
  {
    id: "45",
    category: 1,
    slug: "volatility-index",
    title: {
      en: "VIX (Volatility Index)",
      cs: "VIX (Index volatility)",
      pl: "VIX (Indeks woatylności)"
    },
    description: {
      en: "The VIX measures expected market volatility. It is often called the 'fear gauge' of the stock market.",
      cs: "VIX měří očekávanou volatilitu trhu. Často se mu říká 'ukazatel strachu' na akciovém trhu.",
      pl: "VIX mierzy oczekiwaną woatylność rynku. Często nazywany jest 'wskaźnikiem strachu' na giełdzie."
    }
  },
  {
    id: "46",
    category: 1,
    slug: "safe-haven",
    title: {
      en: "Safe Haven Asset",
      cs: "Bezpečný přístav (Safe Haven)",
      pl: "Bezpieczna przystań (Safe Haven)"
    },
    description: {
      en: "A safe haven is an asset expected to retain or increase in value during market uncertainty, like gold.",
      cs: "Bezpečný přístav je aktivum, u kterého se očekává, že si zachová nebo zvýší hodnotu během nejistoty na trhu, například zlato.",
      pl: "Bezpieczna przystań to aktywo, które ma zachować lub zyskać na wartości w okresach niepewności rynkowej, np. złoto."
    }
  },
  {
    id: "47",
    category: 1,
    slug: "derivative",
    title: {
      en: "Derivative",
      cs: "Derivát",
      pl: "Instrument pochodny (Deratyw)"
    },
    description: {
      en: "A derivative is a contract whose value is based on an underlying asset, like a stock or commodity.",
      cs: "Derivát je smlouva, jejíž hodnota je odvozena od podkladového aktiva, jako je akcie nebo komodita.",
      pl: "Instrument pochodny to kontrakt, którego wartość zależy od aktywa bazowego, takiego jak akcja lub towar."
    }
  },
  {
    id: "48",
    category: 1,
    slug: "options",
    title: {
      en: "Options",
      cs: "Opce",
      pl: "Opcje"
    },
    description: {
      en: "Options are derivatives that give you the right, but not the obligation, to buy or sell an asset at a specific price.",
      cs: "Opce jsou deriváty, které vám dávají právo, nikoli však povinnost, koupit nebo prodat aktivum za určitou cenu.",
      pl: "Opcje to instrumenty pochodne, które dają prawo, ale nie obowiązek, kupna lub sprzedaży aktywa po określonej cenie."
    }
  },
  {
    id: "49",
    category: 1,
    slug: "futures",
    title: {
      en: "Futures",
      cs: "Futures",
      pl: "Kontrakty futures"
    },
    description: {
      en: "Futures are contracts to buy or sell an asset at a predetermined price on a future date.",
      cs: "Futures jsou smlouvy o nákupu nebo prodeji aktiva za předem stanovenou cenu k budoucímu datu.",
      pl: "Kontrakty futures to umowy kupna lub sprzedaży aktywa po z góry określonej cenie w przyszłości."
    }
  },
  {
    id: "50",
    category: 1,
    slug: "liquidation",
    title: {
      en: "Liquidation",
      cs: "Likvidace",
      pl: "Likwidacja"
    },
    description: {
      en: "Liquidation happens when a broker closes your position because you no longer have enough margin to cover losses.",
      cs: "Likvidace nastává, když broker uzavře vaši pozici, protože již nemáte dostatek marže na pokrytí ztrát.",
      pl: "Likwidacja następuje, gdy broker zamyka Twoją pozycję, ponieważ nie masz już wystarczającego depozytu na pokrycie strat."
    }
  },
  {
    id: "51",
    category: 2,
    slug: "market-order",
    title: {
      en: "Market Order",
      cs: "Market objednávka (Tržní)",
      pl: "Zlecenie rynkowe (Market)"
    },
    description: {
      en: "A market order is an instruction to buy or sell an asset immediately at the best available current price.",
      cs: "Market objednávka je pokyn k okamžitému nákupu nebo prodeji aktiva za nejlepší dostupnou aktuální cenu.",
      pl: "Zlecenie rynkowe to instrukcja natychmiastowego kupna lub sprzedaży aktywa po najlepszej dostępnej aktualnie cenie."
    }
  },
  {
    id: "52",
    category: 2,
    slug: "limit-order",
    title: {
      en: "Limit Order",
      cs: "Limitní objednávka",
      pl: "Zlecenie limit"
    },
    description: {
      en: "A limit order is an instruction to buy or sell an asset at a specific price or better.",
      cs: "Limitní objednávka je pokyn k nákupu nebo prodeji aktiva za konkrétní cenu nebo lepší.",
      pl: "Zlecenie limit to instrukcja kupna lub sprzedaży aktywa po określonej cenie lub lepszej."
    }
  },
  {
    id: "53",
    category: 2,
    slug: "stop-order",
    title: {
      en: "Stop Order",
      cs: "Stop objednávka",
      pl: "Zlecenie stop"
    },
    description: {
      en: "A stop order becomes a market order once a specific price level is reached.",
      cs: "Stop objednávka se změní na market objednávku, jakmile je dosaženo konkrétní cenové hladiny.",
      pl: "Zlecenie stop staje się zleceniem rynkowym po osiągnięciu określonego poziomu cenowego."
    }
  },
  {
    id: "54",
    category: 2,
    slug: "stop-loss",
    title: {
      en: "Stop-Loss (SL)",
      cs: "Stop-Loss (SL)",
      pl: "Stop-Loss (SL)"
    },
    description: {
      en: "A stop-loss is an order placed to close a position automatically at a certain price to prevent further losses.",
      cs: "Stop-loss je objednávka zadaná k automatickému uzavření pozice na určité ceně, aby se zabránilo dalším ztrátám.",
      pl: "Stop-loss to zlecenie złożone w celu automatycznego zamknięcia pozycji po określonej cenie, aby zapobiec dalszym stratom."
    }
  },
  {
    id: "55",
    category: 2,
    slug: "take-profit",
    title: {
      en: "Take-Profit (TP)",
      cs: "Take-Profit (TP)",
      pl: "Take-Profit (TP)"
    },
    description: {
      en: "A take-profit is an order used to close a trade automatically once it reaches a target profit level.",
      cs: "Take-profit je objednávka používaná k automatickému uzavření obchodu, jakmile dosáhne cílové úrovně zisku.",
      pl: "Take-profit to zlecenie służące do automatycznego zamknięcia transakcji po osiągnięciu docelowego poziomu zysku."
    }
  },
  {
    id: "56",
    category: 2,
    slug: "slippage",
    title: {
      en: "Slippage",
      cs: "Slippage (Skluz)",
      pl: "Poślizg cenowy (Slippage)"
    },
    description: {
      en: "Slippage is the difference between the expected price of a trade and the price at which it is actually executed.",
      cs: "Slippage je rozdíl mezi očekávanou cenou obchodu a cenou, za kterou je skutečně realizován.",
      pl: "Poślizg cenowy to różnica między oczekiwaną ceną transakcji a ceną, po której została ona faktycznie zrealizowana."
    }
  },
  {
    id: "57",
    category: 2,
    slug: "order-book",
    title: {
      en: "Order Book",
      cs: "Kniha objednávek (Order Book)",
      pl: "Księga zleceń (Order Book)"
    },
    description: {
      en: "The order book lists all current buy and sell orders for a specific asset at different price levels.",
      cs: "Kniha objednávek obsahuje seznam všech aktuálních nákupních a prodejních objednávek pro konkrétní aktivum na různých cenových úrovních.",
      pl: "Księga zleceń zawiera listę wszystkich aktualnych zleceń kupna i sprzedaży danego aktywa na różnych poziomach cenowych."
    }
  },
  {
    id: "58",
    category: 2,
    slug: "market-depth",
    title: {
      en: "Market Depth",
      cs: "Hloubka trhu",
      pl: "Głębokość rynku"
    },
    description: {
      en: "Market depth shows the volume of orders waiting in the order book. It indicates how much the price might move with a large order.",
      cs: "Hloubka trhu ukazuje objem objednávek čekajících v knize objednávek. Indikuje, jak moc se může cena pohnout při velké objednávce.",
      pl: "Głębokość rynku pokazuje wolumen zleceń oczekujących w księdze zleceń. Wskazuje, jak bardzo cena może się zmienić przy dużym zleceniu."
    }
  },
  {
    id: "59",
    category: 2,
    slug: "execution",
    title: {
      en: "Execution",
      cs: "Exekuce (Realizace)",
      pl: "Realizacja (Egzekucja)"
    },
    description: {
      en: "Execution is the completion of a buy or sell order in the market.",
      cs: "Exekuce je dokončení nákupní nebo prodejní objednávky na trhu.",
      pl: "Realizacja to sfinalizowanie zlecenia kupna lub sprzedaży na rynku."
    }
  },
  {
    id: "60",
    category: 2,
    slug: "position",
    title: {
      en: "Position",
      cs: "Pozice",
      pl: "Pozycja"
    },
    description: {
      en: "A position is an active trade that is currently open in your account.",
      cs: "Pozice je aktivní obchod, který je aktuálně otevřený na vašem účtu.",
      pl: "Pozycja to aktywna transakcja, która jest obecnie otwarta na Twoim koncie."
    }
  },
  {
    id: "61",
    category: 2,
    slug: "entry-price",
    title: {
      en: "Entry Price",
      cs: "Vstupní cena",
      pl: "Cena wejścia"
    },
    description: {
      en: "The entry price is the price at which you opened a trade.",
      cs: "Vstupní cena je cena, za kterou jste otevřeli obchod.",
      pl: "Cena wejścia to cena, po której otworzyłeś transakcję."
    }
  },
  {
    id: "62",
    category: 2,
    slug: "exit-price",
    title: {
      en: "Exit Price",
      cs: "Výstupní cena",
      pl: "Cena wyjścia"
    },
    description: {
      en: "The exit price is the price at which you closed a trade.",
      cs: "Výstupní cena je cena, za kterou jste uzavřeli obchod.",
      pl: "Cena wyjścia to cena, po której zamknąłeś transakcję."
    }
  },
  {
    id: "63",
    category: 2,
    slug: "buy-limit",
    title: {
      en: "Buy Limit",
      cs: "Buy Limit",
      pl: "Buy Limit"
    },
    description: {
      en: "A buy limit order is placed below the current market price, expecting the price to bounce back up after hitting it.",
      cs: "Buy limit objednávka se zadává pod aktuální tržní cenu s očekáváním, že se cena po jejím zasažení odrazí zpět nahoru.",
      pl: "Zlecenie buy limit składa się poniżej aktualnej ceny rynkowej, oczekując, że cena odbije w górę po jego osiągnięciu."
    }
  },
  {
    id: "64",
    category: 2,
    slug: "sell-limit",
    title: {
      en: "Sell Limit",
      cs: "Sell Limit",
      pl: "Sell Limit"
    },
    description: {
      en: "A sell limit order is placed above the current market price, expecting the price to drop after hitting it.",
      cs: "Sell limit objednávka se zadává nad aktuální tržní cenu s očekáváním, že cena po jejím zasažení klesne.",
      pl: "Zlecenie sell limit składa się powyżej aktualnej ceny rynkowej, oczekując, że cena spadnie po jego osiągnięciu."
    }
  },
  {
    id: "65",
    category: 2,
    slug: "buy-stop",
    title: {
      en: "Buy Stop",
      cs: "Buy Stop",
      pl: "Buy Stop"
    },
    description: {
      en: "A buy stop order is placed above the current price, expecting the price to continue rising after breaking out.",
      cs: "Buy stop objednávka se zadává nad aktuální cenu s očekáváním, že cena bude po průrazu pokračovat v růstu.",
      pl: "Zlecenie buy stop składa się powyżej aktualnej ceny, oczekując, że cena będzie dalej rosła po przełamaniu poziomu."
    }
  },
  {
    id: "66",
    category: 2,
    slug: "sell-stop",
    title: {
      en: "Sell Stop",
      cs: "Sell Stop",
      pl: "Sell Stop"
    },
    description: {
      en: "A sell stop order is placed below the current price, expecting the price to continue falling after breaking down.",
      cs: "Sell stop objednávka se zadává pod aktuální cenu s očekáváním, že cena bude po průrazu pokračovat v poklesu.",
      pl: "Zlecenie sell stop składa się poniżej aktualnej ceny, oczekując, że cena będzie dalej spadać po przełamaniu poziomu."
    }
  },
  {
    id: "67",
    category: 2,
    slug: "trailing-stop",
    title: {
      en: "Trailing Stop",
      cs: "Trailing Stop",
      pl: "Trailing Stop"
    },
    description: {
      en: "A trailing stop is a stop-loss order that moves automatically as the price goes in your favor, locking in profits.",
      cs: "Trailing stop je stop-loss objednávka, která se automaticky posouvá, jakmile se cena pohybuje ve váš prospěch, čímž uzamyká zisky.",
      pl: "Trailing stop to zlecenie stop-loss, które przesuwa się automatycznie wraz z korzystnym ruchem ceny, zabezpieczając zyski."
    }
  },
  {
    id: "68",
    category: 2,
    slug: "good-till-cancelled",
    title: {
      en: "Good 'Til Cancelled (GTC)",
      cs: "Platí do zrušení (GTC)",
      pl: "Ważne do odwołania (GTC)"
    },
    description: {
      en: "A GTC order remains active until it is either executed or manually cancelled by the trader.",
      cs: "Objednávka GTC zůstává aktivní, dokud není buď zrealizována, nebo ručně zrušena obchodníkem.",
      pl: "Zlecenie GTC pozostaje aktywne do momentu jego realizacji lub ręcznego anulowania przez tradera."
    }
  },
  {
    id: "69",
    category: 2,
    slug: "day-order",
    title: {
      en: "Day Order",
      cs: "Denní objednávka",
      pl: "Zlecenie jednodniowe"
    },
    description: {
      en: "A day order expires automatically at the end of the trading day if it is not executed.",
      cs: "Denní objednávka automaticky vyprší na konci obchodního dne, pokud není zrealizována.",
      pl: "Zlecenie jednodniowe wygasa automatycznie na koniec dnia handlowego, jeśli nie zostanie zrealizowane."
    }
  },
  {
    id: "70",
    category: 2,
    slug: "instant-execution",
    title: {
      en: "Instant Execution",
      cs: "Okamžitá exekuce",
      pl: "Natychmiastowa realizacja"
    },
    description: {
      en: "Instant execution means your trade is opened exactly at the price you see on the screen.",
      cs: "Okamžitá exekuce znamená, že váš obchod je otevřen přesně za cenu, kterou vidíte na obrazovce.",
      pl: "Natychmiastowa realizacja oznacza, że transakcja zostaje otwarta dokładnie po cenie widocznej na ekranie."
    }
  },
  {
    id: "71",
    category: 2,
    slug: "market-execution",
    title: {
      en: "Market Execution",
      cs: "Market exekuce",
      pl: "Realizacja rynkowa"
    },
    description: {
      en: "Market execution means the order is executed at the current market price, which might slightly differ from the requested one.",
      cs: "Market exekuce znamená, že objednávka je realizována za aktuální tržní cenu, která se může mírně lišit od té požadované.",
      pl: "Realizacja rynkowa oznacza, że zlecenie zostaje wykonane po aktualnej cenie rynkowej, która może nieznacznie różnić się od żądanej."
    }
  },
  {
    id: "72",
    category: 2,
    slug: "one-cancels-the-other",
    title: {
      en: "One Cancels the Other (OCO)",
      cs: "Jedna ruší druhou (OCO)",
      pl: "Jedno anuluje drugie (OCO)"
    },
    description: {
      en: "An OCO order consists of two orders; if one is executed, the other is automatically cancelled.",
      cs: "Objednávka OCO se skládá ze dvou objednávek; pokud je jedna zrealizována, druhá je automaticky zrušena.",
      pl: "Zlecenie OCO składa się z dwóch zleceń; jeśli jedno zostanie zrealizowane, drugie zostaje automatycznie anulowane."
    }
  },
  {
    id: "73",
    category: 2,
    slug: "if-done-order",
    title: {
      en: "If-Done Order",
      cs: "If-Done objednávka",
      pl: "Zlecenie If-Done"
    },
    description: {
      en: "An if-done order is a secondary order that becomes active only after the primary order has been executed.",
      cs: "If-done objednávka je sekundární objednávka, která se aktivuje až po realizaci primární objednávky.",
      pl: "Zlecenie if-done to zlecenie pomocnicze, które staje się aktywne dopiero po zrealizowaniu zlecenia głównego."
    }
  },
  {
    id: "74",
    category: 2,
    slug: "immediate-or-cancel",
    title: {
      en: "Immediate or Cancel (IOC)",
      cs: "Ihned nebo zrušit (IOC)",
      pl: "Natychmiast lub anuluj (IOC)"
    },
    description: {
      en: "An IOC order requires all or part of the order to be executed immediately; any part that cannot be filled is cancelled.",
      cs: "Objednávka IOC vyžaduje okamžitou realizaci celé objednávky nebo její části; jakákoli část, kterou nelze vyplnit, je zrušena.",
      pl: "Zlecenie IOC wymaga natychmiastowej realizacji całości lub części zlecenia; każda część, której nie można zrealizować, zostaje anulowana."
    }
  },
  {
    id: "75",
    category: 2,
    slug: "fill-or-kill",
    title: {
      en: "Fill or Kill (FOK)",
      cs: "Vyplnit nebo zrušit (FOK)",
      pl: "Wypełnij lub anuluj (FOK)"
    },
    description: {
      en: "An FOK order must be executed immediately in its entirety or not at all.",
      cs: "Objednávka FOK musí být zrealizována okamžitě a v celém rozsahu, jinak nebude realizována vůbec.",
      pl: "Zlecenie FOK musi zostać zrealizowane natychmiast w całości lub wcale."
    }
  },
  {
    id: "76",
    category: 2,
    slug: "partial-fill",
    title: {
      en: "Partial Fill",
      cs: "Částečné vyplnění",
      pl: "Częściowa realizacja"
    },
    description: {
      en: "A partial fill occurs when only a portion of your order is executed due to a lack of liquidity at your requested price.",
      cs: "Částečné vyplnění nastává, když je realizována pouze část vaší objednávky kvůli nedostatku likvidity na vaší požadované ceně.",
      pl: "Częściowa realizacja następuje, gdy tylko część zlecenia zostaje wykonana z powodu braku płynności po żądanej cenie."
    }
  },
  {
    id: "77",
    category: 2,
    slug: "lot",
    title: {
      en: "Lot",
      cs: "Lot",
      pl: "Lot"
    },
    description: {
      en: "A lot is a standard unit of measure for the size of a trade. In forex, a standard lot is 100,000 units of the base currency.",
      cs: "Lot je standardní měrná jednotka pro velikost obchodu. Na forexu je standardní lot 100 000 jednotek základní měny.",
      pl: "Lot to standardowa jednostka miary wielkości transakcji. Na rynku forex standardowy lot to 100 000 jednostek waluty bazowej."
    }
  },
  {
    id: "78",
    category: 2,
    slug: "mini-lot",
    title: {
      en: "Mini Lot",
      cs: "Mini Lot",
      pl: "Mini Lot"
    },
    description: {
      en: "A mini lot is one-tenth the size of a standard lot (10,000 units).",
      cs: "Mini lot je desetina velikosti standardního lotu (10 000 jednotek).",
      pl: "Mini lot to jedna dziesiąta standardowego lota (10 000 jednostek)."
    }
  },
  {
    id: "79",
    category: 2,
    slug: "micro-lot",
    title: {
      en: "Micro Lot",
      cs: "Micro Lot",
      pl: "Mikro Lot"
    },
    description: {
      en: "A micro lot is one-hundredth the size of a standard lot (1,000 units).",
      cs: "Micro lot je setina velikosti standardního lotu (1 000 jednotek).",
      pl: "Mikro lot to jedna setna standardowego lota (1 000 jednostek)."
    }
  },
  {
    id: "80",
    category: 2,
    slug: "pip",
    title: {
      en: "Pip",
      cs: "Pip",
      pl: "Pips"
    },
    description: {
      en: "A pip is the smallest price movement an exchange rate can make in forex trading.",
      cs: "Pip je nejmenší pohyb ceny, který může měnový kurz na forexu udělat.",
      pl: "Pips to najmniejsza zmiana kursu wymiany, jaką może wykonać para walutowa na rynku forex."
    }
  },
  {
    id: "81",
    category: 2,
    slug: "point",
    title: {
      en: "Point",
      cs: "Bod (Point)",
      pl: "Punkt"
    },
    description: {
      en: "A point is a measure of price movement in stocks or indices, usually representing a change of 1.00.",
      cs: "Bod (Point) je měřítko pohybu ceny u akcií nebo indexů, obvykle představující změnu o 1,00.",
      pl: "Punkt to miara zmiany ceny akcji lub indeksów, zazwyczaj reprezentująca zmianę o 1,00."
    }
  },
  {
    id: "82",
    category: 2,
    slug: "contract-size",
    title: {
      en: "Contract Size",
      cs: "Velikost kontraktu",
      pl: "Wielkość kontraktu"
    },
    description: {
      en: "The contract size is the deliverable amount of an asset underlying a derivative contract.",
      cs: "Velikost kontraktu je množství podkladového aktiva v jednom derivátovém kontraktu.",
      pl: "Wielkość kontraktu to ilość aktywa bazowego przypadająca na jeden kontrakt pochodny."
    }
  },
  {
    id: "83",
    category: 2,
    slug: "hedged-position",
    title: {
      en: "Hedged Position",
      cs: "Zajištěná pozice",
      pl: "Pozycja zabezpieczona (hedgingowa)"
    },
    description: {
      en: "A hedged position involves having both buy and sell orders open for the same asset to minimize risk.",
      cs: "Zajištěná pozice zahrnuje otevření nákupní i prodejní objednávky na stejném aktivu s cílem minimalizovat riziko.",
      pl: "Pozycja zabezpieczona polega na jednoczesnym otwarciu zleceń kupna i sprzedaży tego samego aktywa w celu zminimalizowania ryzyka."
    }
  },
  {
    id: "84",
    category: 2,
    slug: "scalping",
    title: {
      en: "Scalping",
      cs: "Scalping",
      pl: "Scalping"
    },
    description: {
      en: "Scalping is a trading strategy focused on making small profits from many trades within minutes or seconds.",
      cs: "Scalping je obchodní strategie zaměřená na dosahování malých zisků z mnoha obchodů v řádu minut nebo sekund.",
      pl: "Scalping to strategia tradingowa polegająca na osiąganiu niewielkich zysków z wielu transakcji zawieranych w ciągu minut lub sekund."
    }
  },
  {
    id: "85",
    category: 2,
    slug: "day-trading",
    title: {
      en: "Day Trading",
      cs: "Denní obchodování (Day Trading)",
      pl: "Day Trading"
    },
    description: {
      en: "Day trading involves opening and closing all positions within a single trading day.",
      cs: "Denní obchodování zahrnuje otevírání a uzavírání všech pozic v rámci jednoho obchodního dne.",
      pl: "Day trading polega na otwieraniu i zamykaniu wszystkich pozycji w ciągu jednego dnia handlowego."
    }
  },
  {
    id: "86",
    category: 2,
    slug: "swing-trading",
    title: {
      en: "Swing Trading",
      cs: "Swingové obchodování",
      pl: "Swing Trading"
    },
    description: {
      en: "Swing trading is a style that aims to capture price 'swings' over several days or weeks.",
      cs: "Swingové obchodování je styl, jehož cílem je zachytit cenové 'swingy' (výkyvy) v průběhu několika dní nebo týdnů.",
      pl: "Swing trading to styl inwestowania, którego celem jest uchwycenie „swingów” (wahań) cenowych w ciągu kilku dni lub tygodni."
    }
  },
  {
    id: "87",
    category: 2,
    slug: "position-trading",
    title: {
      en: "Position Trading",
      cs: "Poziční obchodování",
      pl: "Trading pozycyjny"
    },
    description: {
      en: "Position trading is a long-term strategy where traders hold positions for months or even years.",
      cs: "Poziční obchodování je dlouhodobá strategie, při které obchodníci drží pozice měsíce nebo dokonce roky.",
      pl: "Trading pozycyjny to strategia długoterminowa, w której traderzy utrzymują pozycje przez miesiące, a nawet lata."
    }
  },
  {
    id: "88",
    category: 2,
    slug: "algorithmic-trading",
    title: {
      en: "Algorithmic Trading",
      cs: "Algoritmické obchodování",
      pl: "Trading algorytmiczny"
    },
    description: {
      en: "Algorithmic trading uses computer programs to execute trades automatically based on predefined rules.",
      cs: "Algoritmické obchodování využívá počítačové programy k automatické realizaci obchodů na základě předem definovaných pravidel.",
      pl: "Trading algorytmiczny wykorzystuje programy komputerowe do automatycznego zawierania transakcji na podstawie z góry określonych reguł."
    }
  },
  {
    id: "89",
    category: 2,
    slug: "high-frequency-trading",
    title: {
      en: "High-Frequency Trading (HFT)",
      cs: "Vysokofrekvenční obchodování (HFT)",
      pl: "Handel wysokich częstotliwości (HFT)"
    },
    description: {
      en: "HFT is a type of algorithmic trading characterized by high speeds and high turnover rates.",
      cs: "HFT je typ algoritmického obchodování charakterizovaný vysokou rychlostí a vysokou frekvencí obchodů.",
      pl: "HFT to rodzaj tradingu algorytmicznego charakteryzujący się bardzo dużą szybkościou i wysokim obrotem."
    }
  },
  {
    id: "90",
    category: 2,
    slug: "retail-trader",
    title: {
      en: "Retail Trader",
      cs: "Retailový obchodník (Maloobchodní)",
      pl: "Trader detaliczny"
    },
    description: {
      en: "A retail trader is an individual who trades with their own money through a broker rather than for an institution.",
      cs: "Retailový obchodník je jednotlivec, který obchoduje s vlastními penězi přes brokera, nikoli pro instituci.",
      pl: "Trader detaliczny to osoba fizyczna handlująca własnymi pieniędzmi za pośrednictwem brokera, a nie dla instytucji."
    }
  },
  {
    id: "91",
    category: 2,
    slug: "institutional-trader",
    title: {
      en: "Institutional Trader",
      cs: "Institucionální obchodník",
      pl: "Trader instytucjonalny"
    },
    description: {
      en: "An institutional trader trades large volumes on behalf of banks, hedge funds, or insurance companies.",
      cs: "Institucionální obchodník obchoduje velké objemy jménem bank, hedgeových fondů nebo pojišťoven.",
      pl: "Trader instytucjonalny handluje dużymi wolumenami w imieniu banków, funduszy hedgingowych lub firm ubezpieczeniowych."
    }
  },
  {
    id: "92",
    category: 2,
    slug: "market-maker",
    title: {
      en: "Market Maker",
      cs: "Tvůrce trhu (Market Maker)",
      pl: "Animator rynku (Market Maker)"
    },
    description: {
      en: "A market maker provides liquidity by constantly quoting both buy and sell prices for an asset.",
      cs: "Market maker poskytuje likviditu tím, že neustále kótuje nákupní i prodejní ceny aktiva.",
      pl: "Animator rynku zapewnia płynność, stale podając ceny kupna i sprzedaży danego aktywa."
    }
  },
  {
    id: "93",
    category: 2,
    slug: "dark-pool",
    title: {
      en: "Dark Pool",
      cs: "Dark Pool",
      pl: "Dark Pool"
    },
    description: {
      en: "A dark pool is a private exchange for trading securities that is not accessible to the public.",
      cs: "Dark pool je soukromá burza pro obchodování s cennými papíry, která není přístupná veřejnosti.",
      pl: "Dark pool to prywatna giełda papierów wartościowych, która nie jest dostępna dla publiczności."
    }
  },
  {
    id: "94",
    category: 2,
    slug: "over-the-counter",
    title: {
      en: "Over-the-Counter (OTC)",
      cs: "Mimoburzovní obchodování (OTC)",
      pl: "Handel pozagiełdowy (OTC)"
    },
    description: {
      en: "OTC trading happens directly between two parties without the supervision of an exchange.",
      cs: "OTC obchodování probíhá přímo mezi dvěma stranami bez dohledu burzy.",
      pl: "Handel OTC odbywa się bezpośrednio między dwiema stronami bez pośrednictwa giełdy."
    }
  },
  {
    id: "95",
    category: 2,
    slug: "re-quote",
    title: {
      en: "Re-quote",
      cs: "Re-kotace",
      pl: "Rekwotowanie"
    },
    description: {
      en: "A re-quote happens when a broker cannot execute your trade at the requested price and offers you a new one.",
      cs: "Re-kotace nastává, když broker nemůže zrealizovat váš obchod za požadovanou cenu a nabídne vám novou.",
      pl: "Rekwotowanie następuje, gdy broker nie może zrealizować transakcji po żądanej cenie i oferuje nowou."
    }
  },
  {
    id: "96",
    category: 2,
    slug: "slippage-tolerance",
    title: {
      en: "Slippage Tolerance",
      cs: "Tolerance skluzu (Slippage)",
      pl: "Tolerancja poślizgu"
    },
    description: {
      en: "Slippage tolerance is a setting that defines the maximum price difference you are willing to accept for an order.",
      cs: "Tolerance skluzu je nastavení, které definuje maximální cenový rozdíl, který jste ochotni u objednávky akceptovat.",
      pl: "Tolerancja poślizgu to ustawienie określające maksymalną różnicę cenową, jaką jesteś gotów zaakceptować przy zleceniu."
    }
  },
  {
    id: "97",
    category: 2,
    slug: "commissions",
    title: {
      en: "Commissions",
      cs: "Komise (Poplatky)",
      pl: "Prowizje"
    },
    description: {
      en: "Commissions are fees charged by a broker for executing a trade.",
      cs: "Komise jsou poplatky účtované brokerem za realizaci obchodu.",
      pl: "Prowizje to opłaty pobierane przez brokera za realizację transakcji."
    }
  },
  {
    id: "98",
    category: 2,
    slug: "swap",
    title: {
      en: "Swap (Rollover)",
      cs: "Swap (Rollover)",
      pl: "Swap (Rollover)"
    },
    description: {
      en: "A swap is the interest paid or earned for holding a position overnight in forex trading.",
      cs: "Swap je úrok zaplacený nebo získaný za držení pozice přes noc při obchodování na forexu.",
      pl: "Swap to odsetki zapłacone lub zarobione za utrzymanie pozycji przez noc na rynku forex."
    }
  },
  {
    id: "99",
    category: 2,
    slug: "margin-call",
    title: {
      en: "Margin Call",
      cs: "Margin Call",
      pl: "Margin Call"
    },
    description: {
      en: "A margin call is a notification from a broker that you must deposit more money to keep your positions open.",
      cs: "Margin call je upozornění od brokera, že musíte vložit více peněz, abyste udrželi své pozice otevřené.",
      pl: "Margin call to powiadomienie od brokera o konieczności wpłaty dodatkowych środków w celu utrzymania otwartych pozycji."
    }
  },
  {
    id: "100",
    category: 2,
    slug: "stop-out",
    title: {
      en: "Stop Out",
      cs: "Stop Out",
      pl: "Stop Out"
    },
    description: {
      en: "A stop out occurs when your margin level drops below a certain point and the broker automatically closes your positions.",
      cs: "Stop out nastává, když úroveň vaší marže klesne pod určitý bod a broker automaticky uzavře vaše pozice.",
      pl: "Stop out następuje, gdy poziom depozytu spadnie poniżej określonego punktu, a broker automatycznie zamyka Twoje pozycje."
    }
  },
  {
    id: "101",
    category: 3,
    slug: "capital-protection",
    title: {
      en: "Capital Protection",
      cs: "Ochrana kapitálu",
      pl: "Ochrona kapitału"
    },
    description: {
      en: "Capital protection is a strategy focused on ensuring that the initial investment is not lost.",
      cs: "Ochrana kapitálu je strategie zaměřená na zajištění toho, aby nebyla ztracena počáteční investice.",
      pl: "Ochrona kapitału to strategia mająca na celu zapewnienie, że początkowa inwestycja nie zostanie utracona."
    }
  },
  {
    id: "102",
    category: 3,
    slug: "drawdown-management",
    title: {
      en: "Drawdown Management",
      cs: "Řízení drawdownu (poklesu)",
      pl: "Zarządzanie drawdownem"
    },
    description: {
      en: "Drawdown management involves techniques to limit the peak-to-trough decline of an investment account.",
      cs: "Řízení drawdownu zahrnuje techniky k omezení poklesu investičního účtu od jeho vrcholu k nejnižšímu bodu.",
      pl: "Zarządzanie drawdownem obejmuje techniki ograniczania spadku wartości konta od szczytu do dołka."
    }
  },
  {
    id: "103",
    category: 3,
    slug: "risk-of-ruin",
    title: {
      en: "Risk of Ruin",
      cs: "Riziko bankrotu (Risk of Ruin)",
      pl: "Ryzyko bankructwa"
    },
    description: {
      en: "Risk of ruin is the probability that a trader will lose all their trading capital.",
      cs: "Riziko bankrotu je pravděpodobnost, že obchodník ztratí veškerý svůj obchodní kapitál.",
      pl: "Ryzyko bankructwa to prawdopodobieństwo, że trader straci cały swój kapitał handlowy."
    }
  },
  {
    id: "104",
    category: 3,
    slug: "position-sizing",
    title: {
      en: "Position Sizing",
      cs: "Určení velikosti pozice",
      pl: "Wielkość pozycji"
    },
    description: {
      en: "Position sizing is the calculation of how much capital should be assigned to a specific trade.",
      cs: "Určení velikosti pozice je výpočet toho, kolik kapitálu by mělo být přiděleno konkrétnímu obchodu.",
      pl: "Wielkość pozycji to kalkulacja ilości kapitału, jaką należy przeznaczyć na konkretną transakcję."
    }
  },
  {
    id: "105",
    category: 3,
    slug: "fixed-fractional-position-sizing",
    title: {
      en: "Fixed Fractional Position Sizing",
      cs: "Fixní frakční pozicování",
      pl: "Stała wielkość frakcyjna"
    },
    description: {
      en: "This method involves risking a fixed percentage of the account balance on each trade.",
      cs: "Tato metoda zahrnuje riskování fixního procenta zůstatku na účtu u každého obchodu.",
      pl: "Metoda ta polega na ryzykowaniu stałego procentu salda konta w każdej transakcji."
    }
  },
  {
    id: "106",
    category: 3,
    slug: "kelly-criterion",
    title: {
      en: "Kelly Criterion",
      cs: "Kellyho kritérium",
      pl: "Kryterium Kelly'ego"
    },
    description: {
      en: "The Kelly Criterion is a mathematical formula used to determine the optimal size of a series of bets.",
      cs: "Kellyho kritérium je matematický vzorec používaný k určení optimální velikosti série sázek (nebo obchodů).",
      pl: "Kryterium Kelly'ego to matematyczny wzór służący do określania optymalnej wielkości serii zakładów (lub transakcji)."
    }
  },
  {
    id: "107",
    category: 3,
    slug: "max-drawdown",
    title: {
      en: "Max Drawdown",
      cs: "Maximální drawdown",
      pl: "Maksymalny drawdown"
    },
    description: {
      en: "Max drawdown is the maximum observed loss from a peak to a trough before a new peak is attained.",
      cs: "Maximální drawdown je největší zaznamenaná ztráta z vrcholu k nejnižšímu bodu před dosažením nového vrcholu.",
      pl: "Maksymalny drawdown to największy odnotowany spadek od szczytu do dołka przed osiągnięciem nowego szczytu."
    }
  },
  {
    id: "108",
    category: 3,
    slug: "value-at-risk",
    title: {
      en: "Value at Risk (VaR)",
      cs: "Value at Risk (VaR)",
      pl: "Value at Risk (VaR)"
    },
    description: {
      en: "VaR is a statistical measure that quantifies the level of financial risk within a firm or portfolio over a specific time frame.",
      cs: "VaR je statistické měřítko, které kvantifikuje úroveň finančního rizika ve firmě nebo portfoliu v určitém časovém rámci.",
      pl: "VaR to miara statystyczna, która kwantyfikuje poziom ryzyka finansowego w firmie lub portfelu w określonym przedziale czasowym."
    }
  },
  {
    id: "109",
    category: 3,
    slug: "correlation",
    title: {
      en: "Correlation",
      cs: "Korelace",
      pl: "Korelacja"
    },
    description: {
      en: "Correlation measures how two assets move in relation to each other. Diversification works best with low correlation.",
      cs: "Korelace měří, jak se dvě aktiva pohybují ve vzájemném vztahu. Diverzifikace funguje nejlépe při nízké korelaci.",
      pl: "Korelacja mierzy, jak dwa aktywa poruszają się względem siebie. Dywersyfikacja działa najlepiej przy niskiej korelacji."
    }
  },
  {
    id: "110",
    category: 3,
    slug: "hedging-strategy",
    title: {
      en: "Hedging Strategy",
      cs: "Strategie hedgingu",
      pl: "Strategia zabezpieczająca (hedging)"
    },
    description: {
      en: "A hedging strategy uses financial instruments to offset the risk of adverse price movements in another asset.",
      cs: "Strategie hedgingu využívá finanční nástroje ke kompenzaci rizika nepříznivých pohybů cen jiného aktiva.",
      pl: "Strategia zabezpieczająca wykorzystuje instrumenty finansowe w celu zrównoważenia ryzyka niekorzystnych zmian cen innego aktywa."
    }
  },
  {
    id: "111",
    category: 3,
    slug: "portfolio-diversification",
    title: {
      en: "Portfolio Diversification",
      cs: "Diverzifikace portfolia",
      pl: "Dywersyfikacja portfela"
    },
    description: {
      en: "Diversification involves holding a variety of investments to reduce the impact of a single asset's poor performance.",
      cs: "Diverzifikace zahrnuje držení různých investic, aby se snížil dopad špatné výkonnosti jednoho aktiva.",
      pl: "Dywersyfikacja polega na posiadaniu różnych inwestycji w celu ograniczenia wpływu słabych wyników pojedynczego aktywa."
    }
  },
  {
    id: "112",
    category: 3,
    slug: "beta",
    title: {
      en: "Beta",
      cs: "Beta",
      pl: "Beta"
    },
    description: {
      en: "Beta measures a stock's volatility in relation to the overall market. A beta above 1 means higher volatility than the market.",
      cs: "Beta měří volatilitu akcie ve vztahu k celému trhu. Beta nad 1 znamená vyšší volatilitu než trh.",
      pl: "Beta mierzy woatylność akcji w stosunku do całego rynku. Beta powyżej 1 oznacza wyższą woatylność niż rynkowa."
    }
  },
  {
    id: "113",
    category: 3,
    slug: "standard-deviation",
    title: {
      en: "Standard Deviation",
      cs: "Směrodatná odchylka",
      pl: "Odchylenie standardowe"
    },
    description: {
      en: "Standard deviation is a statistical measure of market volatility, showing how much prices deviate from the average.",
      cs: "Směrodatná odchylka je statistické měřítko tržní volatility, které ukazuje, jak moc se ceny odchylují od průměru.",
      pl: "Odchylenie standardowe to statystyczna miara woatylności rynku, pokazująca, jak bardzo ceny odbiegają od średniej."
    }
  },
  {
    id: "114",
    category: 3,
    slug: "sharpe-ratio",
    title: {
      en: "Sharpe Ratio",
      cs: "Sharpeho poměr",
      pl: "Wskaźnik Sharpe'a"
    },
    description: {
      en: "The Sharpe ratio measures the risk-adjusted return of an investment portfolio.",
      cs: "Sharpeho poměr měří výnos investičního portfolia očištěný o riziko.",
      pl: "Wskaźnik Sharpe'a mierzy zwrot z portfela inwestycyjnego skorygowany o ryzyko."
    }
  },
  {
    id: "115",
    category: 3,
    slug: "sortino-ratio",
    title: {
      en: "Sortino Ratio",
      cs: "Sortino poměr",
      pl: "Wskaźnik Sortino"
    },
    description: {
      en: "The Sortino ratio is similar to the Sharpe ratio but only considers downside risk (negative volatility).",
      cs: "Sortino poměr je podobný Sharpeho poměru, ale bere v úvahu pouze riziko poklesu (negativní volatilitu).",
      pl: "Wskaźnik Sortino jest podobny do wskaźnika Sharpe'a, ale uwzględnia jedynie ryzyko spadku (negatywną woatylność)."
    }
  },
  {
    id: "116",
    category: 3,
    slug: "expected-return",
    title: {
      en: "Expected Return",
      cs: "Očekávaný výnos",
      pl: "Oczekiwana stopa zwrotu"
    },
    description: {
      en: "Expected return is the profit or loss an investor anticipates on an investment over a period of time.",
      cs: "Očekávaný výnos je zisk nebo ztráta, kterou investor očekává od investice za určité časové období.",
      pl: "Oczekiwany zwrot to zysk lub strata, jakiej inwestor spodziewa się z inwestycji w określonym czasie."
    }
  },
  {
    id: "117",
    category: 3,
    slug: "equity-curve",
    title: {
      en: "Equity Curve",
      cs: "Křivka equity",
      pl: "Krzywa kapitału (Equity Curve)"
    },
    description: {
      en: "The equity curve is a graphical representation of the change in value of a trading account over time.",
      cs: "Křivka equity je grafické znázornění změny hodnoty obchodního účtu v průběhu času.",
      pl: "Krzywa kapitału to graficzne przedstawienie zmiany wartości konta handlowego w czasie."
    }
  },
  {
    id: "118",
    category: 3,
    slug: "overleveraging",
    title: {
      en: "Overleveraging",
      cs: "Přebujelá páka (Overleveraging)",
      pl: "Nadmierna dźwignia"
    },
    description: {
      en: "Overleveraging happens when a trader takes on too much debt or uses too much leverage, increasing the risk of ruin.",
      cs: "Přebujelá páka nastává, když obchodník použije příliš velkou páku, což neúměrně zvyšuje riziko bankrotu.",
      pl: "Nadmierna dźwignia występuje, gdy trader używa zbyt dużej dźwigni finansowej, co drastycznie zwiększa ryzyko bankructwa."
    }
  },
  {
    id: "119",
    category: 3,
    slug: "ruin-probability",
    title: {
      en: "Ruin Probability",
      cs: "Pravděpodobnost ruinování",
      pl: "Prawdopodobieństwo bankructwa"
    },
    description: {
      en: "Ruin probability is the mathematical chance of losing a specific amount of capital based on your strategy's win rate and risk.",
      cs: "Pravděpodobnost ruinování je matematická šance na ztrátu určitého množství kapitálu na základě win-rate a rizika vaší strategie.",
      pl: "Prawdopodobieństwo bankructwa to matematyczna szansa na utratę określonej kwoty kapitału na podstawie skuteczności i ryzyka Twojej strategii."
    }
  },
  {
    id: "120",
    category: 3,
    slug: "volatility-protection",
    title: {
      en: "Volatility Protection",
      cs: "Ochrana proti volatilitě",
      pl: "Ochrona przed woatylnością"
    },
    description: {
      en: "Volatility protection includes tools like guaranteed stops to protect against large price gaps.",
      cs: "Ochrana proti volatilitě zahrnuje nástroje jako garantované stopky, které chrání před velkými cenovými mezerami.",
      pl: "Ochrona przed woatylnością obejmuje narzędzia takie jak gwarantowane stop-lossy, chroniące przed dużymi lukami cenowymi."
    }
  },
  {
    id: "121",
    category: 3,
    slug: "breakeven",
    title: {
      en: "Breakeven",
      cs: "Breakeven (Bod zvratu)",
      pl: "Próg rentowności (Breakeven)"
    },
    description: {
      en: "Breakeven is the point where gains equal losses. Moving a stop-loss to breakeven protects the initial capital.",
      cs: "Breakeven je bod, kde se zisky rovnají ztrátám. Posun stop-lossu na breakeven chrání počáteční kapitál.",
      pl: "Breakeven to punkt, w którym zyski równają się stratom. Przesunięcie stop-lossa na breakeven chroni kapitał początkowy."
    }
  },
  {
    id: "122",
    category: 3,
    slug: "slippage-risk",
    title: {
      en: "Slippage Risk",
      cs: "Riziko skluzu (Slippage)",
      pl: "Ryzyko poślizgu cenowego"
    },
    description: {
      en: "Slippage risk is the risk that a trade is executed at a price different from the expected price during high volatility.",
      cs: "Riziko skluzu je riziko, že obchod bude během vysoké volatility realizován za cenu odlišnou od té očekávané.",
      pl: "Ryzyko poślizgu to ryzyko wykonania transakcji po cenie innej niż oczekiwana podczas wysokiej woatylności."
    }
  },
  {
    id: "123",
    category: 3,
    slug: "liquidity-risk",
    title: {
      en: "Liquidity Risk",
      cs: "Riziko likvidity",
      pl: "Ryzyko płynności"
    },
    description: {
      en: "Liquidity risk is the risk that an asset cannot be sold quickly enough to prevent a loss.",
      cs: "Riziko likvidity je riziko, že aktivum nelze prodat dostatečně rychle, aby se zabránilo ztrátě.",
      pl: "Ryzyko płynności to ryzyko, że aktywa nie mogą zostać sprzedane wystarczająco szybko, aby zapobiec stracie."
    }
  },
  {
    id: "124",
    category: 3,
    slug: "systemic-risk",
    title: {
      en: "Systemic Risk",
      cs: "Systémové riziko",
      pl: "Ryzyko systemowe"
    },
    description: {
      en: "Systemic risk is the risk of collapse of an entire financial system or market.",
      cs: "Systémové riziko je riziko kolapsu celého finančního systému nebo trhu.",
      pl: "Ryzyko systemowe to ryzyko załamania się całego systemu finansowego lub rynku."
    }
  },
  {
    id: "125",
    category: 3,
    slug: "market-neutral",
    title: {
      en: "Market Neutral",
      cs: "Tržně neutrální",
      pl: "Rynkowo neutralny"
    },
    description: {
      en: "A market-neutral strategy aims to profit from both rising and falling prices while avoiding exposure to overall market risk.",
      cs: "Tržně neutrální strategie má za cíl profitovat z rostoucích i klesajících cen a zároveň se vyhnout vystavení celkovému tržnímu riziku.",
      pl: "Strategia rynkowo neutralna ma na celu osiąganie zysków zarówno przy rosnących, jak i spadających cenach, unikając ekspozycji na ogólne ryzyko rynkowe."
    }
  },
  {
    id: "126",
    category: 3,
    slug: "stress-testing",
    title: {
      en: "Stress Testing",
      cs: "Stress testing (Zátěžové testování)",
      pl: "Testy warunków skrajnych (Stress Testing)"
    },
    description: {
      en: "Stress testing involves simulating extreme market conditions to see how a portfolio or strategy would perform.",
      cs: "Zátěžové testování zahrnuje simulaci extrémních tržních podmínek pro zjištění, jak by si vedlo portfolio nebo strategie.",
      pl: "Testy warunków skrajnych polegają na symulowaniu ekstremalnych warunków rynkowych w celu sprawdzenia wyników portfela lub strategii."
    }
  },
  {
    id: "127",
    category: 3,
    slug: "monte-carlo-simulation",
    title: {
      en: "Monte Carlo Simulation",
      cs: "Simulace Monte Carlo",
      pl: "Symulacja Monte Carlo"
    },
    description: {
      en: "A Monte Carlo simulation uses random variables to model the probability of different outcomes in a process that cannot easily be predicted.",
      cs: "Simulace Monte Carlo využívá náhodné proměnné k modelování pravděpodobnosti různých výsledků v procesu, který nelze snadno předpovědět.",
      pl: "Symulacja Monte Carlo wykorzystuje zmienne losowe do modelowania prawdopodobieństwa różnych wyników w procesie, którego nie można łatwo przewidzieć."
    }
  },
  {
    id: "128",
    category: 3,
    slug: "risk-appetite",
    title: {
      en: "Risk Appetite",
      cs: "Apetit pro riziko",
      pl: "Apetyt na ryzyko"
    },
    description: {
      en: "Risk appetite is the level of risk an investor or organization is willing to accept in pursuit of their goals.",
      cs: "Apetit pro riziko je úroveň rizika, kterou je investor nebo organizace ochotna akceptovat při sledování svých cílů.",
      pl: "Apetyt na ryzyko to poziom ryzyka, który inwestor lub organizacja jest gotowa zaakceptować w dążeniu do swoich celów."
    }
  },
  {
    id: "129",
    category: 3,
    slug: "risk-tolerance",
    title: {
      en: "Risk Tolerance",
      cs: "Tolerance k riziku",
      pl: "Tolerancja na ryzyko"
    },
    description: {
      en: "Risk tolerance is an investor's ability and willingness to lose some or all of an original investment in exchange for greater potential returns.",
      cs: "Tolerance k riziku je schopnost a ochota investora ztratit část nebo celou původní investici výměnou za větší potenciální výnosy.",
      pl: "Tolerancja na ryzyko to zdolność i gotowość inwestora do utraty części lub całości pierwotnej inwestycji w zamian za większe potencjalne zyski."
    }
  },
  {
    id: "130",
    category: 3,
    slug: "hedging-ratio",
    title: {
      en: "Hedging Ratio",
      cs: "Poměr zajištění (Hedge Ratio)",
      pl: "Wskaźnik zabezpieczenia (Hedge Ratio)"
    },
    description: {
      en: "The hedging ratio compares the value of a hedge to the value of the underlying asset being protected.",
      cs: "Poměr zajištění porovnává hodnotu hedge (zajištění) k hodnotě podkladového aktiva, které je chráněno.",
      pl: "Wskaźnik zabezpieczenia porównuje wartość zabezpieczenia do wartości chronionego aktywa bazowego."
    }
  },
  {
    id: "131",
    category: 3,
    slug: "tail-risk",
    title: {
      en: "Tail Risk",
      cs: "Riziko 'chvostu' (Tail Risk)",
      pl: "Ryzyko ogona (Tail Risk)"
    },
    description: {
      en: "Tail risk is the probability that an investment will move more than three standard deviations from its current price (black swan events).",
      cs: "Tail risk je pravděpodobnost, že se investice pohne o více než tři směrodatné odchylky od své aktuální ceny (události typu 'černá labuť').",
      pl: "Ryzyko ogona to prawdopodobieństwo, że inwestycja zmieni wartość o więcej niż trzy odchylenia standardowe od obecnej ceny (zdarzenia typu czarny łabędź)."
    }
  },
  {
    id: "132",
    category: 3,
    slug: "ruin-point",
    title: {
      en: "Ruin Point",
      cs: "Bod ruinování",
      pl: "Punkt bankructwa"
    },
    description: {
      en: "The ruin point is the specific account balance at which a trader can no longer continue trading.",
      cs: "Bod ruinování je konkrétní zůstatek na účtu, při kterém obchodník již nemůže pokračovat v obchodování.",
      pl: "Punkt bankructwa to konkretny stan konta, przy którym trader nie może już kontynuować handlu."
    }
  },
  {
    id: "133",
    category: 3,
    slug: "operational-risk",
    title: {
      en: "Operational Risk",
      cs: "Operační riziko",
      pl: "Ryzyko operacyjne"
    },
    description: {
      en: "Operational risk arises from internal failures, such as system crashes, human errors, or fraud.",
      cs: "Operační riziko plyne z vnitřních selhání, jako jsou pády systému, lidské chyby nebo podvody.",
      pl: "Ryzyko operacyjne wynika z awarii wewnętrznych, takich jak awarie systemów, błędy ludzkie lub oszustwa."
    }
  },
  {
    id: "134",
    category: 3,
    slug: "counterparty-risk",
    title: {
      en: "Counterparty Risk",
      cs: "Riziko protistrany",
      pl: "Ryzyko kontrahenta"
    },
    description: {
      en: "Counterparty risk is the risk that the other party in a financial transaction will default on their obligations.",
      cs: "Riziko protistrany je riziko, že druhá strana finanční transakce nesplní své závazky.",
      pl: "Ryzyko kontrahenta to ryzyko, że druga strona transakcji finansowej nie wywiąże się ze swoich zobowiązań."
    }
  },
  {
    id: "135",
    category: 3,
    slug: "sovereign-risk",
    title: {
      en: "Sovereign Risk",
      cs: "Suverénní riziko (Státní)",
      pl: "Ryzyko suwerenne (Państwowe)"
    },
    description: {
      en: "Sovereign risk is the risk that a foreign government will default on its debt or fail to honor its financial agreements.",
      cs: "Suverénní riziko je riziko, že cizí vláda nesplatí svůj dluh nebo nedodrží své finanční dohody.",
      pl: "Ryzyko suwerenne to ryzyko, że zagraniczny rząd nie spłaci swoich długów lub nie wywiąże się z umów finansowych."
    }
  },
  {
    id: "136",
    category: 3,
    slug: "risk-mitigation",
    title: {
      en: "Risk Mitigation",
      cs: "Zmírňování rizik",
      pl: "Łagodzenie ryzyka"
    },
    description: {
      en: "Risk mitigation is the process of developing options and actions to enhance opportunities and reduce threats to project objectives.",
      cs: "Zmírňování rizik je proces vývoje možností a akcí pro posílení příležitostí a snížení hrozeb pro cíle investice.",
      pl: "Łagodzenie ryzyka to proces opracowywania opcji i działań mających na celu zwiększenie szans i ograniczenie zagrożeń dla celów inwestycyjnych."
    }
  },
  {
    id: "137",
    category: 3,
    slug: "safety-margin",
    title: {
      en: "Safety Margin",
      cs: "Bezpečnostní marže",
      pl: "Margines bezpieczeństwa"
    },
    description: {
      en: "In investing, a safety margin is the difference between an asset's intrinsic value and its market price.",
      cs: "Při investování je bezpečnostní marže rozdíl mezi vnitřní hodnotou aktiva a jeho tržní cenou.",
      pl: "W inwestowaniu margines bezpieczeństwa to różnica między wartością wewnętrzną aktywa a jego cenou rynkową."
    }
  },
  {
    id: "138",
    category: 3,
    slug: "protective-put",
    title: {
      en: "Protective Put",
      cs: "Ochranná put opce",
      pl: "Protective Put (Ochronny Put)"
    },
    description: {
      en: "A protective put is a hedging strategy that involves buying a put option to protect against a decline in the value of an underlying asset.",
      cs: "Ochranná put opce je strategie zajištění, která zahrnuje nákup put opce pro ochranu před poklesem hodnoty podkladového aktiva.",
      pl: "Protective put to strategia zabezpieczająca polegająca na kupnie opcji sprzedaży (put) w celu ochrony przed spadkiem wartości aktywa bazowego."
    }
  },
  {
    id: "139",
    category: 3,
    slug: "covered-call",
    title: {
      en: "Covered Call",
      cs: "Krytá call opce",
      pl: "Covered Call (Kryte Call)"
    },
    description: {
      en: "A covered call is a strategy where an investor sells call options on an asset they already own to generate income and limit upside risk.",
      cs: "Krytá call opce je strategie, kdy investor prodává call opce na aktivum, které již vlastní, aby generoval příjem a omezil riziko růstu.",
      pl: "Covered call to strategia, w której inwestor sprzedaje opcje kupna (call) na aktywa, które już posiada, w celu generowania dochodu i ograniczenia ryzyka wzrostu."
    }
  },
  {
    id: "140",
    category: 3,
    slug: "stop-limit-order",
    title: {
      en: "Stop-Limit Order",
      cs: "Stop-Limit objednávka",
      pl: "Zlecenie Stop-Limit"
    },
    description: {
      en: "A stop-limit order is an order to buy or sell that combines the features of a stop order and a limit order.",
      cs: "Stop-limit objednávka je pokyn k nákupu nebo prodeji, který kombinuje vlastnosti stop objednávky a limitní objednávky.",
      pl: "Zlecenie stop-limit to zlecenie kupna lub sprzedaży łączące cechy zlecenia stop i zlecenia limit."
    }
  },
  {
    id: "141",
    category: 3,
    slug: "trailing-stop-loss",
    title: {
      en: "Trailing Stop-Loss",
      cs: "Posuvný stop-loss",
      pl: "Kroczący stop-loss (Trailing)"
    },
    description: {
      en: "A trailing stop-loss is a dynamic stop-loss that adjusts automatically as the market price moves in a favorable direction.",
      cs: "Posuvný stop-loss je dynamický stop-loss, který se automaticky upravuje, jakmile se tržní cena pohybuje příznivým směrem.",
      pl: "Kroczący stop-loss to dynamiczny stop-loss, który dostosowuje się automatycznie, gdy cena rynkowa porusza się w korzystnym kierunku."
    }
  },
  {
    id: "142",
    category: 3,
    slug: "rebalancing",
    title: {
      en: "Portfolio Rebalancing",
      cs: "Rebalancování portfolia",
      pl: "Rebalancing portfela"
    },
    description: {
      en: "Rebalancing is the process of realigning the weightings of a portfolio of assets to maintain the original risk level.",
      cs: "Rebalancování je proces přenastavení vah aktiv v portfoliu pro udržení původní úrovně rizika.",
      pl: "Rebalancing to proces dostosowywania wag aktywów w portfelu w celu utrzymania pierwotnego poziomu ryzyka."
    }
  },
  {
    id: "143",
    category: 3,
    slug: "exposure",
    title: {
      en: "Market Exposure",
      cs: "Tržní expozice",
      pl: "Ekspozycja rynkowa"
    },
    description: {
      en: "Exposure is the amount of money at risk in a particular investment or market.",
      cs: "Expozice je množství peněz vystavených riziku v konkrétní investici nebo trhu.",
      pl: "Ekspozycja to kwota pieniędzy narażona na ryzyko w konkretnej inwestycji lub na rynku."
    }
  },
  {
    id: "144",
    category: 3,
    slug: "concentration-risk",
    title: {
      en: "Concentration Risk",
      cs: "Riziko koncentrace",
      pl: "Ryzyko koncentracji"
    },
    description: {
      en: "Concentration risk is the danger of having too much of your portfolio invested in a single asset or sector.",
      cs: "Riziko koncentrace je nebezpečí plynoucí z příliš velkého podílu portfolia investovaného do jednoho aktiva nebo sektoru.",
      pl: "Ryzyko koncentracji to niebezpieczeństwo wynikające z posiadania zbyt dużej części portfela zainwestowanej w jedno aktywo lub sektor."
    }
  },
  {
    id: "145",
    category: 3,
    slug: "currency-risk",
    title: {
      en: "Currency Risk",
      cs: "Měnové riziko",
      pl: "Ryzyko walutowe"
    },
    description: {
      en: "Currency risk is the risk of loss due to fluctuations in exchange rates between different currencies.",
      cs: "Měnové riziko je riziko ztráty v důsledku kolísání směnných kurzů mezi různými měnami.",
      pl: "Ryzyko walutowe to ryzyko straty wynikające z wahań kursów wymiany między różnymi walutami."
    }
  },
  {
    id: "146",
    category: 3,
    slug: "political-risk",
    title: {
      en: "Political Risk",
      cs: "Politické riziko",
      pl: "Ryzyko polityczne"
    },
    description: {
      en: "Political risk is the danger that political decisions or instability in a country will affect its markets.",
      cs: "Politické riziko je nebezpečí, že politická rozhodnutí nebo nestabilita v zemi ovlivní její trhy.",
      pl: "Ryzyko polityczne to niebezpieczeństwo, że decyzje polityczne lub niestabilność w kraju wpłynou na jego rynki."
    }
  },
  {
    id: "147",
    category: 3,
    slug: "inflation-risk",
    title: {
      en: "Inflation Risk",
      cs: "Inflační riziko",
      pl: "Ryzyko inflacyjne"
    },
    description: {
      en: "Inflation risk is the danger that the purchasing power of an investment's returns will decrease over time.",
      cs: "Inflační riziko je nebezpečí, že se kupní síla výnosů z investice postupem času sníží.",
      pl: "Ryzyko inflacyjne to niebezpieczeństwo, że siła nabywcza zwrotów z inwestycji spadnie w czasie."
    }
  },
  {
    id: "148",
    category: 3,
    slug: "default-risk",
    title: {
      en: "Default Risk",
      cs: "Riziko selhání (Default Risk)",
      pl: "Ryzyko niewypłacalności (Default Risk)"
    },
    description: {
      en: "Default risk is the risk that a borrower will be unable to make the required payments on their debt obligations.",
      cs: "Riziko selhání je riziko, že dlužník nebude schopen provést požadované platby svých dluhových závazků.",
      pl: "Ryzyko niewypłacalności to ryzyko, że dłużnik nie będzie w stanie dokonać wymaganych płatności wynikających z jego zobowiązań dłużnych."
    }
  },
  {
    id: "149",
    category: 3,
    slug: "gap-risk",
    title: {
      en: "Gap Risk",
      cs: "Riziko 'gapu' (Mezery)",
      pl: "Ryzyko luki (Gap Risk)"
    },
    description: {
      en: "Gap risk is the danger that an asset's price will move significantly from one level to another while the market is closed.",
      cs: "Riziko gapu je nebezpečí, že se cena aktiva výrazně posune z jedné úrovně na druhou, zatímco je trh uzavřen.",
      pl: "Ryzyko luki to niebezpieczeństwo, że cena aktywa znacząco zmieni się z jednego poziomu na drugi, gdy rynek jest zamknięty."
    }
  },
  {
    id: "150",
    category: 3,
    slug: "black-swan-event",
    title: {
      en: "Black Swan Event",
      cs: "Událost typu 'černá labuť'",
      pl: "Zdarzenie typu czarny łabędź"
    },
    description: {
      en: "A black swan event is an unpredictable event that is beyond what is normally expected of a situation and has potentially severe consequences.",
      cs: "Černá labuť je nepředvídatelná událost, která přesahuje běžná očekávání a má potenciálně vážné důsledky.",
      pl: "Czarny łabędź to nieprzewidywalne zdarzenie, które wykracza poza normalne oczekiwania i ma potencjalnie poważne konsekwencje."
    }
  },
  {
    id: "151",
    category: 4,
    slug: "technical-analysis",
    title: {
      en: "Technical Analysis",
      cs: "Technická analýza",
      pl: "Analiza techniczna"
    },
    description: {
      en: "Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities by analyzing statistical trends gathered from trading activity.",
      cs: "Technická analýza je disciplína používaná k vyhodnocování investic a identifikaci obchodních příležitostí pomocí analýzy statistických trendů.",
      pl: "Analiza techniczna to dyscyplina służąca do oceny inwestycji i identyfikacji okazji transakcyjnych poprzez analizę trendów statystycznych."
    }
  },
  {
    id: "152",
    category: 4,
    slug: "chart-pattern",
    title: {
      en: "Chart Pattern",
      cs: "Grafický vzorec (Pattern)",
      pl: "Formacja wykresu"
    },
    description: {
      en: "A chart pattern is a distinct formation on a stock chart that creates a trading signal or a sign of future price movements.",
      cs: "Grafický vzorec je specifická formace na cenovém grafu, která vytváří obchodní signál nebo naznačuje budoucí pohyby ceny.",
      pl: "Formacja wykresu to charakterystyczny układ na wykresie cenowym, który generuje sygnał transakcyjny lub zapowiada przyszłe ruchy cen."
    }
  },
  {
    id: "153",
    category: 4,
    slug: "support-level",
    title: {
      en: "Support Level",
      cs: "Úroveň supportu (Podpora)",
      pl: "Poziom wsparcia"
    },
    description: {
      en: "Support is a price level where a downtrend tends to pause due to a concentration of demand.",
      cs: "Support je cenová hladina, kde má klesající trend tendenci se zastavit kvůli koncentraci poptávky.",
      pl: "Wsparcie to poziom cenowy, na którym trend spadkowy ma tendencję do zatrzymania się z powodu koncentracji popytu."
    }
  },
  {
    id: "154",
    category: 4,
    slug: "resistance-level",
    title: {
      en: "Resistance Level",
      cs: "Úroveň rezistence (Odpor)",
      pl: "Poziom oporu"
    },
    description: {
      en: "Resistance is a price level where an uptrend tends to pause due to a concentration of supply.",
      cs: "Rezistence je cenová hladina, kde má rostoucí trend tendenci se zastavit kvůli koncentraci nabídky.",
      pl: "Opór to poziom cenowy, na którym trend wzrostowy ma tendencję do zatrzymania się z powodu koncentracji podaży."
    }
  },
  {
    id: "155",
    category: 4,
    slug: "trendline",
    title: {
      en: "Trendline",
      cs: "Trendová linie",
      pl: "Linia trendu"
    },
    description: {
      en: "A trendline is a line drawn over pivot highs or under pivot lows to show the prevailing direction of price.",
      cs: "Trendová linie je čára nakreslená přes cenová maxima nebo pod cenová minima pro znázornění převládajícího směru ceny.",
      pl: "Linia trendu to linia narysowana nad szczytami lub pod dołkami, pokazująca dominujący kierunek ruchu ceny."
    }
  },
  {
    id: "156",
    category: 4,
    slug: "uptrend",
    title: {
      en: "Uptrend",
      cs: "Rostoucí trend (Uptrend)",
      pl: "Trend wzrostowy"
    },
    description: {
      en: "An uptrend describes the price movement of an asset when the overall direction is upward (higher highs and higher lows).",
      cs: "Uptrend popisuje pohyb ceny aktiva, když je celkový směr vzhůru (vyšší maxima a vyšší minima).",
      pl: "Trend wzrostowy opisuje ruch ceny aktywa, gdy ogólny kierunek jest wzrostowy (wyższe szczyty i wyższe dołki)."
    }
  },
  {
    id: "157",
    category: 4,
    slug: "downtrend",
    title: {
      en: "Downtrend",
      cs: "Klesající trend (Downtrend)",
      pl: "Trend spadkowy"
    },
    description: {
      en: "A downtrend describes the price movement of an asset when the overall direction is downward (lower highs and lower lows).",
      cs: "Downtrend popisuje pohyb ceny aktiva, když je celkový směr dolů (nižší maxima a nižší minima).",
      pl: "Trend spadkowy opisuje ruch ceny aktywa, gdy ogólny kierunek jest spadkowy (niższe szczyty i niższe dołki)."
    }
  },
  {
    id: "158",
    category: 4,
    slug: "sideways-market",
    title: {
      en: "Sideways Market (Range)",
      cs: "Trh do strany (Sideways)",
      pl: "Rynek boczny (Konsolidacja)"
    },
    description: {
      en: "A sideways market occurs when the price of an asset stays within a relatively stable range without forming a clear trend.",
      cs: "Trh do strany nastává, když cena aktiva zůstává v relativně stabilním rozmezí bez vytvoření jasného trendu.",
      pl: "Rynek boczny występuje, gdy cena aktywa pozostaje w stosunkowo stabilnym przedziale bez tworzenia wyraźnego trendu."
    }
  },
  {
    id: "159",
    category: 4,
    slug: "breakout",
    title: {
      en: "Breakout",
      cs: "Breakout (Průraz)",
      pl: "Wybicie (Breakout)"
    },
    description: {
      en: "A breakout refers to when the price of an asset moves above a resistance area or below a support area.",
      cs: "Breakout označuje situaci, kdy se cena aktiva pohne nad oblast rezistence nebo pod oblast supportu.",
      pl: "Wybicie odnosi się do sytuacji, w której cena aktywa porusza się powyżej obszaru oporu lub poniżej obszaru wsparcia."
    }
  },
  {
    id: "160",
    category: 4,
    slug: "fakeout",
    title: {
      en: "Fakeout (False Breakout)",
      cs: "Fakeout (Falešný průraz)",
      pl: "Fałszywe wybicie (Fakeout)"
    },
    description: {
      en: "A fakeout occurs when the price briefly breaks a support or resistance level but then quickly reverses direction.",
      cs: "Fakeout nastává, když cena krátce prorazí úroveň supportu nebo rezistence, ale pak rychle změní směr.",
      pl: "Fałszywe wybicie następuje, gdy cena na krótko przełamuje poziom wsparcia lub oporu, ale potem szybko zawraca."
    }
  },
  {
    id: "161",
    category: 4,
    slug: "retest",
    title: {
      en: "Retest",
      cs: "Retest",
      pl: "Retest"
    },
    description: {
      en: "A retest occurs when the price returns to a previously broken support or resistance level to verify it before continuing.",
      cs: "Retest nastává, když se cena vrátí k dříve proražené úrovni supportu nebo rezistence, aby ji ověřila před dalším pohybem.",
      pl: "Retest następuje, gdy cena powraca do wcześniej przełamanego poziomu wsparcia lub oporu, aby go zweryfikować przed kontynuacją ruchu."
    }
  },
  {
    id: "162",
    category: 4,
    slug: "candlestick-chart",
    title: {
      en: "Candlestick Chart",
      cs: "Svíčkový graf",
      pl: "Wykres świecowy"
    },
    description: {
      en: "A candlestick chart displays the high, low, open, and close prices of an asset for a specific period.",
      cs: "Svíčkový graf zobrazuje nejvyšší, nejnižší, otevírací a uzavírací ceny aktiva za určité období.",
      pl: "Wykres świecowy wyświetla ceny maksymalne, minimalne, otwarcia i zamknięcia aktywa w określonym czasie."
    }
  },
  {
    id: "163",
    category: 4,
    slug: "bullish-candle",
    title: {
      en: "Bullish Candle",
      cs: "Nákupní (Býčí) svíce",
      pl: "Świeca wzrostowa (popytowa)"
    },
    description: {
      en: "A bullish candle indicates that the closing price was higher than the opening price.",
      cs: "Býčí svíce indikuje, že uzavírací cena byla vyšší než otevírací cena.",
      pl: "Świeca wzrostowa wskazuje, że cena zamknięcia była wyższa niż cena otwarcia."
    }
  },
  {
    id: "164",
    category: 4,
    slug: "bearish-candle",
    title: {
      en: "Bearish Candle",
      cs: "Prodejní (Medvědí) svíce",
      pl: "Świeca spadkowa (podażowa)"
    },
    description: {
      en: "A bearish candle indicates that the closing price was lower than the opening price.",
      cs: "Medvědí svíce indikuje, že uzavírací cena byla nižší než otevírací cena.",
      pl: "Świeca spadkowa wskazuje, że cena zamknięcia była niższa niż cena otwarcia."
    }
  },
  {
    id: "165",
    category: 4,
    slug: "wick",
    title: {
      en: "Wick (Shadow)",
      cs: "Stín (Knot)",
      pl: "Cień (Knot)"
    },
    description: {
      en: "A wick is the thin line on a candlestick that shows the price extremes (high and low) during a time period.",
      cs: "Stín (knot) je tenká čára na svíčce, která ukazuje cenové extrémy (maximum a minimum) během časového období.",
      pl: "Cień (knot) to cienka linia na świecy, która pokazuje ekstrema cenowe (maksimum i minimum) w danym przedziale czasowym."
    }
  },
  {
    id: "166",
    category: 4,
    slug: "doji",
    title: {
      en: "Doji",
      cs: "Doji svíce",
      pl: "Świeca Doji"
    },
    description: {
      en: "A Doji is a candlestick pattern that forms when an asset's open and close are virtually equal, signifying indecision.",
      cs: "Doji je vzorec svíčky, který vznikne, když jsou otevírací a uzavírací ceny prakticky stejné, což značí nerozhodnost trhu.",
      pl: "Doji to formacja świecowa, która powstaje, gdy ceny otwarcia i zamknięcia są niemal równe, co oznacza niezdecydowanie rynku."
    }
  },
  {
    id: "167",
    category: 4,
    slug: "moving-average",
    title: {
      en: "Moving Average (MA)",
      cs: "Klouzavý průměr (MA)",
      pl: "Średnia krocząca (MA)"
    },
    description: {
      en: "A moving average is a technical indicator that smooths out price action by filtering out 'noise' from random price fluctuations.",
      cs: "Klouzavý průměr je technický indikátor, který vyhlazuje cenový pohyb filtrováním 'šumu' z náhodných výkyvů cen.",
      pl: "Średnia krocząca to wskaźnik techniczny, który wygładza ruchy cenowe poprzez odfiltrowanie „szumu” wynikającego z przypadkowych wahań."
    }
  },
  {
    id: "168",
    category: 4,
    slug: "simple-moving-average",
    title: {
      en: "Simple Moving Average (SMA)",
      cs: "Prostý klouzavý průměr (SMA)",
      pl: "Prosta średnia krocząca (SMA)"
    },
    description: {
      en: "An SMA is calculated by taking the arithmetic mean of a given set of prices over a specific number of days.",
      cs: "SMA se vypočítá jako aritmetický průměr dané sady cen za určitý počet dní.",
      pl: "SMA oblicza się, wyciągając średnią arytmetyczną z danego zestawu cen w określonej liczbie dni."
    }
  },
  {
    id: "169",
    category: 4,
    slug: "exponential-moving-average",
    title: {
      en: "Exponential Moving Average (EMA)",
      cs: "Exponenciální klouzavý průměr (EMA)",
      pl: "Wykładnicza średnia krocząca (EMA)"
    },
    description: {
      en: "An EMA gives more weight to recent prices, making it more responsive to new information.",
      cs: "EMA přikládá větší váhu nedávným cenám, díky čemuž lépe reaguje na nové informace.",
      pl: "EMA nadaje większą wagę ostatnim cenom, dzięki czemu szybciej reaguje na nowe informacje."
    }
  },
  {
    id: "170",
    category: 4,
    slug: "relative-strength-index",
    title: {
      en: "Relative Strength Index (RSI)",
      cs: "Index relativní síly (RSI)",
      pl: "Wskaźnik siły względnej (RSI)"
    },
    description: {
      en: "RSI is a momentum oscillator that measures the speed and change of price movements, usually between 0 and 100.",
      cs: "RSI je hybný oscilátor, který měří rychlost a změnu pohybu cen, obvykle v rozmezí 0 až 100.",
      pl: "RSI to oscylator momentum, który mierzy szybkość i zmiany ruchów cen, zazwyczaj w zakresie od 0 do 100."
    }
  },
  {
    id: "171",
    category: 4,
    slug: "overbought",
    title: {
      en: "Overbought",
      cs: "Překoupeno",
      pl: "Wykupienie"
    },
    description: {
      en: "An asset is overbought when its price has risen too fast and is likely due for a correction (RSI usually above 70).",
      cs: "Aktivum je překoupené, když jeho cena vzrostla příliš rychle a je pravděpodobná korekce (RSI obvykle nad 70).",
      pl: "Aktywo jest wykupione, gdy jego cena wzrosła zbyt szybko i prawdopodobna jest korekta (RSI zazwyczaj powyżej 70)."
    }
  },
  {
    id: "172",
    category: 4,
    slug: "oversold",
    title: {
      en: "Oversold",
      cs: "Přeprodáno",
      pl: "Wyprzedanie"
    },
    description: {
      en: "An asset is oversold when its price has fallen too fast and is likely due for a bounce (RSI usually below 30).",
      cs: "Aktivum je přeprodané, když jeho cena klesla příliš rychle a je pravděpodobný odraz vzhůru (RSI obvykle pod 30).",
      pl: "Aktywo jest wyprzedane, gdy jego cena spadła zbyt szybko i prawdopodobne jest odbicie (RSI zazwyczaj poniżej 30)."
    }
  },
  {
    id: "173",
    category: 4,
    slug: "bollinger-bands",
    title: {
      en: "Bollinger Bands",
      cs: "Bollingerova pásma",
      pl: "Wstęgi Bollingera"
    },
    description: {
      en: "Bollinger Bands are a volatility indicator consisting of a middle SMA and two outer standard deviation bands.",
      cs: "Bollingerova pásma jsou indikátorem volatility skládajícím se ze středního SMA a dvou vnějších pásem směrodatné odchylky.",
      pl: "Wstęgi Bollingera to wskaźnik woatylności składający się ze środkowej SMA i dwóch zewnętrznych wstęg odchylenia standardowego."
    }
  },
  {
    id: "174",
    category: 4,
    slug: "volume",
    title: {
      en: "Volume",
      cs: "Objem (Volume)",
      pl: "Wolumen"
    },
    description: {
      en: "Volume measures the total amount of an asset traded during a specific period.",
      cs: "Volume měří celkové množství aktiva obchodovaného během určitého období.",
      pl: "Wolumen mierzy całkowitą ilość aktywa będącego przedmiotem obrotu w określonym czasie."
    }
  },
  {
    id: "175",
    category: 4,
    slug: "macd",
    title: {
      en: "MACD",
      cs: "MACD",
      pl: "MACD"
    },
    description: {
      en: "Moving Average Convergence Divergence (MACD) is a trend-following momentum indicator that shows the relationship between two EMAs.",
      cs: "MACD je hybný indikátor sledující trend, který ukazuje vztah mezi dvěma exponenciálními klouzavými průměry (EMA).",
      pl: "MACD to wskaźnik momentum podążający za trendem, který pokazuje relację mezi dwiema średnimi EMA."
    }
  },
  {
    id: "176",
    category: 4,
    slug: "fibonacci-retracement",
    title: {
      en: "Fibonacci Retracement",
      cs: "Fibonacciho návrat (Retracement)",
      pl: "Zniesienia Fibonacciego"
    },
    description: {
      en: "Fibonacci retracement levels are horizontal lines that indicate where support and resistance are likely to occur based on Fibonacci numbers.",
      cs: "Fibonacciho úrovně návratu jsou horizontální linie, které naznačují, kde pravděpodobně nastane support a rezistence.",
      pl: "Poziomy zniesienia Fibonacciego to poziome linie wskazujące miejsca, w których prawdopodobnie wystąpi wsparcie i opór."
    }
  },
  {
    id: "177",
    category: 4,
    slug: "stochastic-oscillator",
    title: {
      en: "Stochastic Oscillator",
      cs: "Stochastický oscilátor",
      pl: "Oscylator stochastyczny"
    },
    description: {
      en: "The stochastic oscillator is a momentum indicator comparing a specific closing price of an asset to a range of its prices over a certain period.",
      cs: "Stochastický oscilátor je hybný indikátor porovnávající konkrétní uzavírací cenu aktiva s rozsahem jeho cen za určité období.",
      pl: "Oscylator stochastyczny to wskaźnik momentum porównujący konkretną cenę zamknięcia aktywa z zakresem jego cen w określonym czasie."
    }
  },
  {
    id: "178",
    category: 4,
    slug: "average-true-range",
    title: {
      en: "Average True Range (ATR)",
      cs: "Průměrný skutečný rozsah (ATR)",
      pl: "Średni rzeczywisty zakres (ATR)"
    },
    description: {
      en: "ATR is a technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period.",
      cs: "ATR je indikátor, který měří tržní volatilitu rozkladem celého cenového rozsahu aktiva za dané období.",
      pl: "ATR to wskaźnik analizy technicznej mierzący woatylność rynku poprzez analizę pełnego zakresu cen aktywa w danym okresie."
    }
  },
  {
    id: "179",
    category: 4,
    slug: "parabolic-sar",
    title: {
      en: "Parabolic SAR",
      cs: "Parabolic SAR",
      pl: "Parabolic SAR"
    },
    description: {
      en: "Parabolic SAR is a technical indicator used to determine the price direction of an asset, as well as draw attention to when the price direction is changing.",
      cs: "Parabolic SAR je indikátor používaný k určení směru ceny a k upozornění na moment, kdy se směr ceny mění.",
      pl: "Parabolic SAR to wskaźnik techniczny służący do określania kierunku ceny aktywa oraz zwracania uwagi na moment zmiany tego kierunku."
    }
  },
  {
    id: "180",
    category: 4,
    slug: "ichimoku-cloud",
    title: {
      en: "Ichimoku Cloud",
      cs: "Ichimoku Cloud (Mrak)",
      pl: "Chmura Ichimoku"
    },
    description: {
      en: "The Ichimoku Cloud is a collection of technical indicators that show support and resistance levels, as well as momentum and trend direction.",
      cs: "Ichimoku Cloud je soubor indikátorů, které ukazují úrovně supportu a rezistence, hybnost a směr trendu.",
      pl: "Chmura Ichimoku to zestaw wskaźników technicznych pokazujących poziomy wsparcia i oporu, a także momentum i kierunek trendu."
    }
  },
  {
    id: "181",
    category: 4,
    slug: "head-and-shoulders",
    title: {
      en: "Head and Shoulders",
      cs: "Hlava a ramena",
      pl: "Głowa i ramiona"
    },
    description: {
      en: "Head and Shoulders is a chart pattern that appears as a baseline with three peaks, where the outside two are close in height and the middle is highest.",
      cs: "Hlava a ramena je grafický vzorec, který se objevuje jako základní linie se třemi vrcholy, přičemž prostřední je nejvyšší.",
      pl: "Głowa i ramiona to formacja wykresu składająca się z linii podstawowej i trzech szczytów, z których środkowy jest najwyższy."
    }
  },
  {
    id: "182",
    category: 4,
    slug: "double-top",
    title: {
      en: "Double Top",
      cs: "Dvojitý vrchol",
      pl: "Podwójny szczyt"
    },
    description: {
      en: "A double top is an extremely bearish technical reversal pattern that forms after an asset reaches a high price two consecutive times.",
      cs: "Dvojitý vrchol je medvědí obratový vzorec, který se tvoří poté, co aktivum dosáhne vysoké ceny dvakrát za sebou.",
      pl: "Podwójny szczyt to niedźwiedzia formacja odwrócenia trendu, która powstaje po dwukrotnym osiągnięciu przez aktywo wysokiej ceny."
    }
  },
  {
    id: "183",
    category: 4,
    slug: "double-bottom",
    title: {
      en: "Double Bottom",
      cs: "Dvojité dno",
      pl: "Podwójne dno"
    },
    description: {
      en: "A double bottom is a bullish reversal pattern that describes the dropping of a stock or index, a rebound, then another drop to the same level.",
      cs: "Dvojité dno je býčí obratový vzorec popisující pokles ceny, odraz a poté další pokles na stejnou úroveň.",
      pl: "Podwójne dno to wzrostowa formacja odwrócenia trendu, opisująca spadek ceny, odbicie, a następnie kolejny spadek do tego samego poziomu."
    }
  },
  {
    id: "184",
    category: 4,
    slug: "triangle-pattern",
    title: {
      en: "Triangle Pattern",
      cs: "Trojúhelníkový vzorec",
      pl: "Formacja trójkąta"
    },
    description: {
      en: "Triangle patterns are chart formations that involve the price moving into a tighter and tighter range over time.",
      cs: "Trojúhelníkové vzorce jsou formace, kdy se cena v průběhu času pohybuje ve stále užším rozmezí.",
      pl: "Formacje trójkąta to układy na wykresie, w których cena porusza się w coraz węższym przedziale."
    }
  },
  {
    id: "185",
    category: 4,
    slug: "wedge-pattern",
    title: {
      en: "Wedge Pattern",
      cs: "Klínový vzorec (Wedge)",
      pl: "Formacja klina"
    },
    description: {
      en: "A wedge pattern is a chart pattern marked by converging trendlines on a price chart.",
      cs: "Klínový vzorec je formace vyznačená sbíhajícími se trendovými liniemi na cenovém grafu.",
      pl: "Formacja klina to układ na wykresie charakteryzujący się zbieżnymi liniami trendu."
    }
  },
  {
    id: "186",
    category: 4,
    slug: "pennant-pattern",
    title: {
      en: "Pennant Pattern",
      cs: "Vlajka (Pennant)",
      pl: "Formacja proporczyka"
    },
    description: {
      en: "A pennant is a type of continuation pattern formed when there is a large movement in an asset followed by a consolidation period.",
      cs: "Pennant (vlajka) je typ pokračovacího vzorce tvořeného po velkém pohybu následovaném obdobím konsolidace.",
      pl: "Proporczyk to rodzaj formacji kontynuacji, powstający po silnym ruchu ceny, po którym następuje okres konsolidacji."
    }
  },
  {
    id: "187",
    category: 4,
    slug: "flag-pattern",
    title: {
      en: "Flag Pattern",
      cs: "Vlajka (Flag)",
      pl: "Formacja flagi"
    },
    description: {
      en: "A flag is a technical chart pattern that looks like a flag on a pole and suggests a continuation of the previous trend.",
      cs: "Vlajka (Flag) je vzorec, který vypadá jako vlajka na stožáru a naznačuje pokračování předchozího trendu.",
      pl: "Flaga to formacja techniczna przypominająca flagę na maszcie, sugerująca kontynuację poprzedniego trendu."
    }
  },
  {
    id: "188",
    category: 4,
    slug: "cup-and-handle",
    title: {
      en: "Cup and Handle",
      cs: "Šálek s ouškem (Cup and Handle)",
      pl: "Filiżanka z uchem"
    },
    description: {
      en: "A cup and handle is a bullish continuation pattern that marks a consolidation period followed by a breakout.",
      cs: "Šálek s ouškem je býčí pokračovací vzorec značící období konsolidace následované breakoutem.",
      pl: "Filiżanka z uchem to wzrostowa formacja kontynuacji trendu, oznaczająca okres konsolidacji, po którym następuje wybicie."
    }
  },
  {
    id: "189",
    category: 4,
    slug: "hammer-candle",
    title: {
      en: "Hammer Candle",
      cs: "Kladivo (Hammer)",
      pl: "Świeca młot"
    },
    description: {
      en: "A hammer is a price pattern in candlestick charting that occurs when a security trades significantly lower than its opening, but rallies within the period.",
      cs: "Kladivo (Hammer) je vzorec, který vzniká, když cena klesne výrazně pod otevírací hodnotu, ale během období se vrátí zpět.",
      pl: "Młot to formacja świecowa powstająca, gdy cena spada znacznie poniżej otwarcia, ale w danym okresie odrabia straty."
    }
  },
  {
    id: "190",
    category: 4,
    slug: "shooting-star",
    title: {
      en: "Shooting Star",
      cs: "Padající hvězda",
      pl: "Spadająca gwiazda"
    },
    description: {
      en: "A shooting star is a bearish candlestick with a long upper shadow, little or no lower shadow, and a small real body near the low of the day.",
      cs: "Padající hvězda je medvědí svíce s dlouhým horním stínem a malým tělem blízko denního minima.",
      pl: "Spadająca gwiazda to niedźwiedzia świeca z długim górnym cieniem, małym korpusem blisko dołu i prawie bez dolnego cienia."
    }
  },
  {
    id: "191",
    category: 4,
    slug: "engulfing-pattern",
    title: {
      en: "Engulfing Pattern",
      cs: "Pohlcující vzorec (Engulfing)",
      pl: "Formacja objęcia"
    },
    description: {
      en: "An engulfing pattern is a reversal pattern that can be bullish or bearish, depending on whether it appears at the end of a downtrend or uptrend.",
      cs: "Pohlcující vzorec (Engulfing) je obratový vzorec, který může být býčí nebo medvědí.",
      pl: "Formacja objęcia to formacja odwrócenia trendu, która może być wzrostowa lub spadkowa."
    }
  },
  {
    id: "192",
    category: 4,
    slug: "morning-star",
    title: {
      en: "Morning Star",
      cs: "Ranní hvězda",
      pl: "Gwiazda poranna"
    },
    description: {
      en: "A morning star is a bullish three-candle reversal pattern that appears at the bottom of a downtrend.",
      cs: "Ranní hvězda je býčí obratový vzorec tvořený třemi svícemi, který se objevuje na konci klesajícího trendu.",
      pl: "Gwiazda poranna to wzrostowa formacja odwrócenia składająca się z trzech świec, pojawiająca się na dole trendu spadkowego."
    }
  },
  {
    id: "193",
    category: 4,
    slug: "evening-star",
    title: {
      en: "Evening Star",
      cs: "Večerní hvězda",
      pl: "Gwiazda wieczorna"
    },
    description: {
      en: "An evening star is a bearish three-candle reversal pattern that appears at the top of an uptrend.",
      cs: "Večerní hvězda je medvědí obratový vzorec tvořený třemi svícemi, který se objevuje na vrcholu rostoucího trendu.",
      pl: "Gwiazda wieczorna to niedźwiedzia formacja odwrócenia składająca się z trzech świec, pojawiająca się na szczycie trendu wzrostowego."
    }
  },
  {
    id: "194",
    category: 4,
    slug: "divergence",
    title: {
      en: "Divergence",
      cs: "Divergence",
      pl: "Dywersja"
    },
    description: {
      en: "Divergence occurs when the price of an asset moves in the opposite direction of a technical indicator.",
      cs: "Divergence nastává, když se cena aktiva pohybuje opačným směrem než technický indikátor.",
      pl: "Dywersja występuje, gdy cena aktywa porusza się w kierunku przeciwnym do wskaźnika technicznego."
    }
  },
  {
    id: "195",
    category: 4,
    slug: "golden-cross",
    title: {
      en: "Golden Cross",
      cs: "Zlatý kříž (Golden Cross)",
      pl: "Złoty krzyż"
    },
    description: {
      en: "A golden cross is a bullish chart pattern formed from a crossing of a short-term moving average over a long-term moving average.",
      cs: "Zlatý kříž je býčí vzorec vytvořený křížením krátkodobého klouzavého průměru přes dlouhodobý.",
      pl: "Złoty krzyż to wzrostowa formacja wykresu powstała z przecięcia krótkoterminowej średniej kroczącej nad długoterminową."
    }
  },
  {
    id: "196",
    category: 4,
    slug: "death-cross",
    title: {
      en: "Death Cross",
      cs: "Kříž smrti (Death Cross)",
      pl: "Krzyż śmierci"
    },
    description: {
      en: "A death cross is a bearish chart pattern formed from a crossing of a short-term moving average under a long-term moving average.",
      cs: "Kříž smrti je medvědí vzorec vytvořený křížením krátkodobého klouzavého průměru pod dlouhodobý.",
      pl: "Krzyż śmierci to niedźwiedzia formacja wykresu powstała z przecięcia krótkoterminowej średniej kroczącej pod długoterminową."
    }
  },
  {
    id: "197",
    category: 4,
    slug: "gap",
    title: {
      en: "Gap",
      cs: "Gap (Mezera)",
      pl: "Luka (Gap)"
    },
    description: {
      en: "A gap is an area on a chart where the price of an asset moves sharply up or down, with little or no trading in between.",
      cs: "Gap je oblast v grafu, kde se cena prudce posune nahoru nebo dolů bez jakéhokoli obchodu mezi těmito úrovněmi.",
      pl: "Luka to obszar na wykresie, w którym cena aktywa gwałtownie rośnie lub spada, bez zawierania transakcji pomiędzy tymi poziomami."
    }
  },
  {
    id: "198",
    category: 4,
    slug: "island-reversal",
    title: {
      en: "Island Reversal",
      cs: "Ostrovní obrat",
      pl: "Formacja wyspy"
    },
    description: {
      en: "An island reversal is a chart pattern that consists of a group of candles separated from the rest of the chart by gaps on both sides.",
      cs: "Ostrovní obrat je vzorec skládající se ze skupiny svící oddělených od zbytku grafu mezerami (gapy) na obou stranách.",
      pl: "Formacja wyspy to układ wykresu składający się z grupy świec oddzielonych od reszty wykresu lukami po obu stronach."
    }
  },
  {
    id: "199",
    category: 4,
    slug: "pivot-point",
    title: {
      en: "Pivot Point",
      cs: "Pivotní bod",
      pl: "Pivot Point (Punkt zwrotu)"
    },
    description: {
      en: "A pivot point is an indicator used to determine the overall trend of the market over different time frames.",
      cs: "Pivotní bod je indikátor používaný k určení celkového trendu trhu v různých časových rámcích.",
      pl: "Pivot Point to wskaźnik służący do określania ogólnego trendu rynkowego w różnych przedziałach czasowych."
    }
  },
  {
    id: "200",
    category: 4,
    slug: "volatility-squeeze",
    title: {
      en: "Volatility Squeeze",
      cs: "Stlačení volatility (Squeeze)",
      pl: "Ściśnięcie woatylności (Squeeze)"
    },
    description: {
      en: "A volatility squeeze occurs when the Bollinger Bands contract, signifying that a large breakout is likely to occur.",
      cs: "Stlačení volatility nastává, když se Bollingerova pásma zúží, což značí, že pravděpodobně dojde k velkému breakoutu.",
      pl: "Ściśnięcie woatylności następuje, gdy wstęgi Bollingera zwężają się, co oznacza, że prawdopodobne jest silne wybicie."
    }
  },
  {
    id: "201",
    category: 5,
    slug: "fundamental-analysis",
    title: {
      en: "Fundamental Analysis",
      cs: "Fundamentální analýza",
      pl: "Analiza fundamentalna"
    },
    description: {
      en: "Fundamental analysis is a method of evaluating an asset by measuring its intrinsic value by examining related economic and financial factors.",
      cs: "Fundamentální analýza je metoda hodnocení aktiva měřením jeho vnitřní hodnoty zkoumáním souvisejících ekonomických a finančních faktorů.",
      pl: "Analiza fundamentalna to metoda oceny aktywa poprzez pomiar jego wartości wewnętrznej na podstawie analizy powiązanych czynników ekonomicznych i finansowych."
    }
  },
  {
    id: "202",
    category: 5,
    slug: "gross-domestic-product",
    title: {
      en: "Gross Domestic Product (GDP)",
      cs: "Hrubý domácí produkt (HDP)",
      pl: "Produkt Krajowy Brutto (PKB)"
    },
    description: {
      en: "GDP is the total monetary value of all finished goods and services produced within a country's borders in a specific time period.",
      cs: "HDP je celková peněžní hodnota všech finálních statků a služeb vyrobených v zemi za určité období.",
      pl: "PKB to całkowita wartość pieniężna wszystkich gotowych dóbr i usług wytworzonych w granicach kraju w określonym czasie."
    }
  },
  {
    id: "203",
    category: 5,
    slug: "inflation-rate",
    title: {
      en: "Inflation Rate",
      cs: "Míra inflace",
      pl: "Stopa inflacji"
    },
    description: {
      en: "The inflation rate is the percentage increase in the price level of goods and services in an economy over a period of time.",
      cs: "Míra inflace je procentuální nárůst cenové hladiny zboží a služeb v ekonomice za určité období.",
      pl: "Stopa inflacji to procentowy wzrost poziomu cen dóbr i usług w gospodarce w określonym czasie."
    }
  },
  {
    id: "204",
    category: 5,
    slug: "consumer-price-index",
    title: {
      en: "Consumer Price Index (CPI)",
      cs: "Index spotřebitelských cen (CPI)",
      pl: "Wskaźnik cen towarów i usług konsumpcyjnych (CPI)"
    },
    description: {
      en: "CPI is a measure that examines the weighted average of prices of a basket of consumer goods and services.",
      cs: "CPI je měřítko, které zkoumá vážený průměr cen koše spotřebního zboží a služeb.",
      pl: "CPI to miara badająca średnią ważoną cen koszyka towarów i usług konsumpcyjnych."
    }
  },
  {
    id: "205",
    category: 5,
    slug: "interest-rate",
    title: {
      en: "Interest Rate",
      cs: "Úroková sazba",
      pl: "Stopa procentowa"
    },
    description: {
      en: "An interest rate is the amount charged by a lender to a borrower for the use of assets, typically expressed as a percentage of the principal.",
      cs: "Úroková sazba je částka účtovaná věřitelem dlužníkovi za použití aktiv, obvykle vyjádřená jako procento z jistiny.",
      pl: "Stopa procentowa to kwota pobierana przez pożyczkodawcę od pożyczkobiorcy za korzystanie z aktywów, zazwyczaj wyrażona jako procent kapitału."
    }
  },
  {
    id: "206",
    category: 5,
    slug: "central-bank",
    title: {
      en: "Central Bank",
      cs: "Centrální banka",
      pl: "Bank Centralny"
    },
    description: {
      en: "A central bank is a national institution that manages a country's currency, money supply, and interest rates.",
      cs: "Centrální banka je národní instituce, která spravuje měnu země, peněžní zásobu a úrokové sazby.",
      pl: "Bank centralny to instytucja krajowa zarządzająca walutą, podażą pieniądza i stopami procentowymi w kraju."
    }
  },
  {
    id: "207",
    category: 5,
    slug: "monetary-policy",
    title: {
      en: "Monetary Policy",
      cs: "Monetární politika",
      pl: "Polityka pieniężna"
    },
    description: {
      en: "Monetary policy is the process by which a central bank manages the money supply and interest rates to achieve specific economic goals.",
      cs: "Monetární politika je proces, kterým centrální banka spravuje peněžní zásobu a úrokové sazby k dosažení ekonomických cílů.",
      pl: "Polityka pieniężna to proces, w którym bank centralny zarządza podażą pieniądza i stopami procentowymi w celu osiągnięcia określonych celów gospodarczych."
    }
  },
  {
    id: "208",
    category: 5,
    slug: "fiscal-policy",
    title: {
      en: "Fiscal Policy",
      cs: "Fiskální politika",
      pl: "Polityka fiskalna"
    },
    description: {
      en: "Fiscal policy is the use of government spending and taxation to influence the economy.",
      cs: "Fiskální politika je využívání vládních výdajů a daní k ovlivňování ekonomiky.",
      pl: "Polityka fiskalna to wykorzystywanie wydatków rządowych i opodatkowania do wpływania na gospodarkę."
    }
  },
  {
    id: "209",
    category: 5,
    slug: "quantitative-easing",
    title: {
      en: "Quantitative Easing (QE)",
      cs: "Kvantitativní uvolňování (QE)",
      pl: "Luzowanie ilościowe (QE)"
    },
    description: {
      en: "QE is a form of monetary policy in which a central bank buys government securities to increase the money supply and encourage lending.",
      cs: "QE je forma měnové politiky, kdy centrální banka nakupuje vládní cenné papíry, aby zvýšila peněžní zásobu a podpořila půjčování.",
      pl: "QE to forma polityki pieniężnej, w której bank centralny skupuje skarbowe papiery wartościowe w celu zwiększenia podaży pieniądza i stymulowania akcji kredytowej."
    }
  },
  {
    id: "210",
    category: 5,
    slug: "hawkish",
    title: {
      en: "Hawkish",
      cs: "Jestřábí (Hawkish)",
      pl: "Jastrzębi (Hawkish)"
    },
    description: {
      en: "Hawkish describes policymakers who favor higher interest rates to keep inflation in check.",
      cs: "Jestřábí postoj označuje tvůrce politik, kteří upřednostňují vyšší úrokové sazby pro udržení inflace pod kontrolou.",
      pl: "Jastrzębi stosunek opisuje decydentów opowiadających się za wyższymi stopami procentowymi w celu utrzymania inflacji w ryzach."
    }
  },
  {
    id: "211",
    category: 5,
    slug: "dovish",
    title: {
      en: "Dovish",
      cs: "Holubičí (Dovish)",
      pl: "Gołębi (Dovish)"
    },
    description: {
      en: "Dovish describes policymakers who favor lower interest rates to stimulate economic growth and employment.",
      cs: "Holubičí postoj označuje tvůrce politik, kteří upřednostňují nižší úrokové sazby pro stimulaci růstu a zaměstnanosti.",
      pl: "Gołębi stosunek opisuje decydentów opowiadających się za niższymi stopami procentowymi w celu stymulowania wzrostu i zatrudnienia."
    }
  },
  {
    id: "212",
    category: 5,
    slug: "unemployment-rate",
    title: {
      en: "Unemployment Rate",
      cs: "Míra nezaměstnanosti",
      pl: "Stopa bezrobocia"
    },
    description: {
      en: "The unemployment rate is the percentage of the total labor force that is jobless and actively seeking employment.",
      cs: "Míra nezaměstnanosti je procento pracovní síly, která je bez práce a aktivně hledá zaměstnání.",
      pl: "Stopa bezrobocia to procent siły roboczej, która pozostaje bez pracy i aktywnie poszukuje zatrudnienia."
    }
  },
  {
    id: "213",
    category: 5,
    slug: "non-farm-payrolls",
    title: {
      en: "Non-Farm Payrolls (NFP)",
      cs: "Non-Farm Payrolls (NFP)",
      pl: "Non-Farm Payrolls (NFP)"
    },
    description: {
      en: "NFP is a key economic indicator for the U.S. economy, representing the total number of paid workers excluding farm employees.",
      cs: "NFP je klíčový ekonomický indikátor pro USA, představující celkový počet placených pracovníků s výjimkou zemědělství.",
      pl: "NFP to kluczowy wskaźnik ekonomiczny dla USA, reprezentujący całkowitą liczbę płatnych pracowników z wyłączeniem rolnictwa."
    }
  },
  {
    id: "214",
    category: 5,
    slug: "earnings-report",
    title: {
      en: "Earnings Report",
      cs: "Výsledková sezóna (Earnings)",
      pl: "Raport o wynikach (Earnings)"
    },
    description: {
      en: "An earnings report is a public filing made by a company to report its financial performance over a specific period.",
      cs: "Earnings report je veřejné oznámení společnosti o její finanční výkonnosti za určité období.",
      pl: "Raport o wynikach to publiczne sprawozdanie spółki dotyczące jej wyników finansowych w określonym czasie."
    }
  },
  {
    id: "215",
    category: 5,
    slug: "price-to-earnings-ratio",
    title: {
      en: "Price-to-Earnings (P/E) Ratio",
      cs: "Poměr P/E (Price-to-Earnings)",
      pl: "Wskaźnik cena/zysk (P/E)"
    },
    description: {
      en: "The P/E ratio is the ratio for valuing a company that measures its current share price relative to its per-share earnings.",
      cs: "Poměr P/E je ukazatel ocenění společnosti, který měří aktuální cenu akcie ve vztahu k zisku na akcii.",
      pl: "Wskaźnik P/E to wskaźnik wyceny spółki mierzący jej aktualnou cenę akcji w stosunku do zysku na akcję."
    }
  },
  {
    id: "216",
    category: 5,
    slug: "dividend-yield",
    title: {
      en: "Dividend Yield",
      cs: "Dividendový výnos",
      pl: "Stopa dywidendy"
    },
    description: {
      en: "Dividend yield is a financial ratio that shows how much a company pays out in dividends each year relative to its stock price.",
      cs: "Dividendový výnos je finanční ukazatel, který ukazuje, kolik společnost vyplácí na dividendách každý rok vzhledem k ceně akcií.",
      pl: "Stopa dywidendy to wskaźnik finansowy pokazujący, ile spółka wypłaca w dywidendach każdego roku w stosunku do ceny akcji."
    }
  },
  {
    id: "217",
    category: 5,
    slug: "market-capitalization",
    title: {
      en: "Market Capitalization",
      cs: "Tržní kapitalizace",
      pl: "Kapitalizacja rynkowa"
    },
    description: {
      en: "Market cap is the total market value of a company's outstanding shares of stock.",
      cs: "Tržní kapitalizace je celková tržní hodnota nesplacených akcií společnosti.",
      pl: "Kapitalizacja rynkowa to całkowita wartość rynkowa wyemitowanych akcji spółki."
    }
  },
  {
    id: "218",
    category: 5,
    slug: "blue-chip-stock",
    title: {
      en: "Blue-Chip Stock",
      cs: "Blue-Chip akcie",
      pl: "Akcje typu blue-chip"
    },
    description: {
      en: "Blue-chip stocks are shares of very large and financially sound companies with a history of reliable performance.",
      cs: "Blue-chip akcie jsou podíly ve velmi velkých a finančně zdravých společnostech s historií spolehlivé výkonnosti.",
      pl: "Akcje typu blue-chip to udziały w bardzo dużych i stabilnych finansowo firmach o ugruntowanej pozycji rynkowej."
    }
  },
  {
    id: "219",
    category: 5,
    slug: "growth-stock",
    title: {
      en: "Growth Stock",
      cs: "Růstová akcie",
      pl: "Akcja wzrostowa"
    },
    description: {
      en: "A growth stock is a company that is expected to grow at a rate significantly above the average growth for the market.",
      cs: "Růstová akcie je společnost, u které se očekává růst výrazně nad průměrným tržním růstem.",
      pl: "Akcja wzrostowa to spółka, od której oczekuje się wzrostu w tempie znacznie przewyższającym średnią rynkowou."
    }
  },
  {
    id: "220",
    category: 5,
    slug: "value-stock",
    title: {
      en: "Value Stock",
      cs: "Hodnotová akcie",
      pl: "Akcja wartościowa"
    },
    description: {
      en: "A value stock is a company that appears to trade at a lower price relative to its fundamentals, such as dividends, earnings, or sales.",
      cs: "Hodnotová akcie je společnost, která se obchoduje za nižší cenu vzhledem ke svým fundamentům.",
      pl: "Akcja wartościowa to spółka, która wydaje się być handlowana po niższej cenie w stosunku do jej fundamentów."
    }
  },
  {
    id: "221",
    category: 5,
    slug: "economic-cycle",
    title: {
      en: "Economic Cycle",
      cs: "Hospodářský cyklus",
      pl: "Cykl koniunkturalny"
    },
    description: {
      en: "The economic cycle is the natural fluctuation of the economy between periods of expansion and contraction.",
      cs: "Hospodářský cyklus je přirozené kolísání ekonomiky mezi obdobími expanze a kontrakce.",
      pl: "Cykl koniunkturalny to naturalne wahania gospodarki między okresami ekspansji i recesji."
    }
  },
  {
    id: "222",
    category: 5,
    slug: "recession",
    title: {
      en: "Recession",
      cs: "Recese",
      pl: "Recesja"
    },
    description: {
      en: "A recession is a significant decline in economic activity across the economy, lasting more than a few months.",
      cs: "Recese je výrazný pokles ekonomické aktivity v celé ekonomice trvající déle než několik měsíců.",
      pl: "Recesja to znaczący spadek aktywności gospodarczej w całym kraju, trwający dłużej niż kilka miesięcy."
    }
  },
  {
    id: "223",
    category: 5,
    slug: "stagflation",
    title: {
      en: "Stagflation",
      cs: "Stagflace",
      pl: "Stagflacja"
    },
    description: {
      en: "Stagflation is a period of slow economic growth and relatively high unemployment accompanied by rising prices (inflation).",
      cs: "Stagflace je období pomalého ekonomického růstu a vysoké nezaměstnanosti doprovázené rostoucími cenami (inflací).",
      pl: "Stagflacja to okres powolnego wzrostu gospodarczego i wysokiego bezrobocia przy jednoczesnym wzroście cen (inflacji)."
    }
  },
  {
    id: "224",
    category: 5,
    slug: "safe-haven-asset",
    title: {
      en: "Safe-Haven Asset",
      cs: "Bezpečný přístav (Safe-Haven)",
      pl: "Bezpieczna przystań (Safe-Haven)"
    },
    description: {
      en: "A safe-haven asset is an investment that is expected to retain or increase its value during times of market turbulence.",
      cs: "Bezpečný přístav je investice, u které se očekává zachování nebo zvýšení hodnoty v době tržních turbulencí.",
      pl: "Bezpieczna przystań to inwestycja, od której oczekuje się zachowania lub wzrostu wartości w okresach zawirowań rynkowych."
    }
  },
  {
    id: "225",
    category: 5,
    slug: "consumer-confidence",
    title: {
      en: "Consumer Confidence",
      cs: "Spotřebitelská důvěra",
      pl: "Zaufanie konsumentów"
    },
    description: {
      en: "Consumer confidence is an economic indicator that measures the degree of optimism that consumers feel about the overall state of the economy.",
      cs: "Spotřebitelská důvěra je ekonomický indikátor, který měří stupeň optimismu spotřebitelů ohledně stavu ekonomiky.",
      pl: "Zaufanie konsumentów to wskaźnik mierzący stopień optymizmu konsumentów co do ogólnego stanu gospodarki."
    }
  },
  {
    id: "226",
    category: 5,
    slug: "retail-sales",
    title: {
      en: "Retail Sales",
      cs: "Maloobchodní tržby",
      pl: "Sprzedaż detaliczna"
    },
    description: {
      en: "Retail sales is an economic indicator that tracks the total dollar value of merchandise sold by retailers.",
      cs: "Maloobchodní tržby jsou ekonomický indikátor, který sleduje celkovou hodnotu zboží prodaného maloobchodníky.",
      pl: "Sprzedaż detaliczna to wskaźnik ekonomiczny śledzący całkowitą wartość towarów sprzedanych przez detalistów."
    }
  },
  {
    id: "227",
    category: 5,
    slug: "trade-balance",
    title: {
      en: "Trade Balance",
      cs: "Obchodní bilance",
      pl: "Bilans handlowy"
    },
    description: {
      en: "The trade balance is the difference between the value of a country's exports and its imports.",
      cs: "Obchodní bilance je rozdíl mezi hodnotou vývozu a dovozu země.",
      pl: "Bilans handlowy to różnica między wartością eksportu a importu kraju."
    }
  },
  {
    id: "228",
    category: 5,
    slug: "current-account",
    title: {
      en: "Current Account",
      cs: "Běžný účet",
      pl: "Rachunek bieżący"
    },
    description: {
      en: "The current account records a country's net income from trade in goods and services and net earnings on cross-border investments.",
      cs: "Běžný účet zaznamenává čistý příjem země z obchodu se zbožím a službami a čisté zisky z přeshraničních investic.",
      pl: "Rachunek bieżący rejestruje dochód netto kraju z handlu towarami i usługami oraz zyski netto z inwestycji zagranicznych."
    }
  },
  {
    id: "229",
    category: 5,
    slug: "debt-to-gdp-ratio",
    title: {
      en: "Debt-to-GDP Ratio",
      cs: "Poměr dluhu k HDP",
      pl: "Wskaźnik długu do PKB"
    },
    description: {
      en: "The debt-to-GDP ratio compares a country's public debt to its gross domestic product (GDP).",
      cs: "Poměr dluhu k HDP porovnává veřejný dluh země s jejím hrubým domácím produktem.",
      pl: "Wskaźnik długu do PKB porównuje dług publiczny kraju z jego produktem krajowym brutto."
    }
  },
  {
    id: "230",
    category: 5,
    slug: "bond-yield",
    title: {
      en: "Bond Yield",
      cs: "Výnos dluhopisu",
      pl: "Rentowność obligacji"
    },
    description: {
      en: "Bond yield is the amount of return an investor realizes on a bond, typically expressed as an annual percentage rate.",
      cs: "Výnos dluhopisu je návratnost, kterou investor realizuje z dluhopisu, obvykle vyjádřená v procentech.",
      pl: "Rentowność obligacji to kwota zwrotu, jaką inwestor uzyskuje z obligacji, zazwyczaj wyrażona jako roczna stopa procentowa."
    }
  },
  {
    id: "231",
    category: 5,
    slug: "yield-curve",
    title: {
      en: "Yield Curve",
      cs: "Výnosová křivka",
      pl: "Krzywa dochodowości"
    },
    description: {
      en: "A yield curve is a line that plots yields (interest rates) of bonds having equal credit quality but differing maturity dates.",
      cs: "Výnosová křivka je graf, který znázorňuje výnosy dluhopisů se stejnou kreditní kvalitou, ale různou dobou splatnosti.",
      pl: "Krzywa dochodowości to linia przedstawiająca rentowność obligacji o tej samej jakości kredytowej, ale o różnych terminach zapadalności."
    }
  },
  {
    id: "232",
    category: 5,
    slug: "inverted-yield-curve",
    title: {
      en: "Inverted Yield Curve",
      cs: "Inverzní výnosová křivka",
      pl: "Odwrócona krzywa dochodowości"
    },
    description: {
      en: "An inverted yield curve occurs when long-term interest rates are lower than short-term rates, often signaling a recession.",
      cs: "Inverzní výnosová křivka nastává, když jsou dlouhodobé sazby nižší než krátkodobé, což často signalizuje recesi.",
      pl: "Odwrócona krzywa dochodowości występuje, gdy długoterminowe stopy procentowe są niższe niż krótkoterminowe, co często sygnalizuje recesję."
    }
  },
  {
    id: "233",
    category: 5,
    slug: "purchasing-managers-index",
    title: {
      en: "Purchasing Managers' Index (PMI)",
      cs: "Index nákupních manažerů (PMI)",
      pl: "Wskaźnik menedżerów logistyki (PMI)"
    },
    description: {
      en: "PMI is an index of the prevailing direction of economic trends in the manufacturing and service sectors.",
      cs: "PMI je index převažujícího směru ekonomických trendů v sektorech výroby a služeb.",
      pl: "PMI to wskaźnik mierzący aktywność gospodarczą w sektorach produkcyjnym i usługowym."
    }
  },
  {
    id: "234",
    category: 5,
    slug: "leading-indicators",
    title: {
      en: "Leading Indicators",
      cs: "Předstihové ukazatele",
      pl: "Wskaźniki wyprzedzające"
    },
    description: {
      en: "Leading indicators are measurable economic factors that change before the economy starts to follow a particular pattern or trend.",
      cs: "Předstihové ukazatele jsou ekonomické faktory, které se mění dříve, než ekonomika začne následovat určitý trend.",
      pl: "Wskaźniki wyprzedzające to czynniki ekonomiczne, które zmieniają się zanim gospodarka zacznie podążać za określonym trendem."
    }
  },
  {
    id: "235",
    category: 5,
    slug: "lagging-indicators",
    title: {
      en: "Lagging Indicators",
      cs: "Zpožděné ukazatele",
      pl: "Wskaźniki opóźnione"
    },
    description: {
      en: "Lagging indicators are economic factors that change after the economy has already begun to follow a particular trend.",
      cs: "Zpožděné ukazatele jsou ekonomické faktory, které se mění poté, co ekonomika již začala následovat určitý trend.",
      pl: "Wskaźniki opóźnione to czynniki ekonomiczne, które zmieniają się po tym, jak gospodarka zaczęła już podążać za określonym trendem."
    }
  },
  {
    id: "236",
    category: 5,
    slug: "housing-starts",
    title: {
      en: "Housing Starts",
      cs: "Zahájené stavby domů",
      pl: "Liczba rozpoczętych budów domów"
    },
    description: {
      en: "Housing starts is an economic indicator that measures the number of new residential construction projects that have begun during a particular month.",
      cs: "Zahájené stavby domů jsou indikátorem, který měří počet nově zahájených projektů rezidenční výstavby.",
      pl: "Liczba rozpoczętych budów domów to wskaźnik mierzący liczbę nowych projektów budownictwa mieszkaniowego rozpoczętych w danym miesiącu."
    }
  },
  {
    id: "237",
    category: 5,
    slug: "industrial-production",
    title: {
      en: "Industrial Production",
      cs: "Průmyslová produkce",
      pl: "Produkcja przemysłowa"
    },
    description: {
      en: "Industrial production is an economic indicator measuring the output of the manufacturing, mining, and utilities sectors.",
      cs: "Průmyslová produkce je ekonomický indikátor měřící výkon sektorů výroby, těžby a veřejných služeb.",
      pl: "Produkcja przemysłowa to wskaźnik ekonomiczny mierzący produkcję w sektorach przetwórstwa, górnictwa i usług użyteczności publicznej."
    }
  },
  {
    id: "238",
    category: 5,
    slug: "capacity-utilization",
    title: {
      en: "Capacity Utilization",
      cs: "Využití kapacit",
      pl: "Wykorzystanie mocy produkcyjnych"
    },
    description: {
      en: "Capacity utilization measures the percentage of an economy's or a company's potential output that is actually being realized.",
      cs: "Využití kapacit měří procento potenciálního výkonu ekonomiky nebo společnosti, které je skutečně realizováno.",
      pl: "Wykorzystanie mocy produkcyjnych mierzy procent potencjalnej produkcji gospodarki lub firmy, który jest faktycznie realizowany."
    }
  },
  {
    id: "239",
    category: 5,
    slug: "money-supply",
    title: {
      en: "Money Supply (M1, M2, M3)",
      cs: "Peněžní zásoba (M1, M2, M3)",
      pl: "Podaż pieniądza (M1, M2, M3)"
    },
    description: {
      en: "Money supply is the total amount of money in circulation in an economy, categorized by liquidity levels.",
      cs: "Peněžní zásoba je celkové množství peněz v oběhu v ekonomice, kategorizované podle úrovně likvidity.",
      pl: "Podaż pieniądza to całkowita ilość pieniędzy w obiegu w gospodarce, podzielona według poziomu płynności."
    }
  },
  {
    id: "240",
    category: 5,
    slug: "velocity-of-money",
    title: {
      en: "Velocity of Money",
      cs: "Rychlost oběhu peněz",
      pl: "Prędkość obiegu pieniądza"
    },
    description: {
      en: "The velocity of money measures the rate at which money is exchanged in an economy.",
      cs: "Rychlost oběhu peněz měří míru, s jakou jsou peníze v ekonomice vyměňovány.",
      pl: "Prędkość obiegu pieniądza mierzy tempo, w jakim pieniądze są wymieniane w gospodarce."
    }
  },
  {
    id: "241",
    category: 5,
    slug: "earnings-per-share",
    title: {
      en: "Earnings Per Share (EPS)",
      cs: "Zisk na akcii (EPS)",
      pl: "Zysk na akcję (EPS)"
    },
    description: {
      en: "EPS is a company's profit divided by the outstanding shares of its common stock.",
      cs: "EPS je zisk společnosti vydělený počtem nesplacených kmenových akcií.",
      pl: "EPS to zysk spółki podzielony przez liczbę wyemitowanych akcji zwykłych."
    }
  },
  {
    id: "242",
    category: 5,
    slug: "return-on-equity",
    title: {
      en: "Return on Equity (ROE)",
      cs: "Návratnost vlastního kapitálu (ROE)",
      pl: "Rentowność kapitału własnego (ROE)"
    },
    description: {
      en: "ROE is a measure of financial performance calculated by dividing net income by shareholders' equity.",
      cs: "ROE je měřítko finanční výkonnosti vypočtené vydělením čistého zisku vlastním kapitálem akcionářů.",
      pl: "ROE to miara wyników finansowych obliczana poprzez podzielenie zysku netto przez kapitał własny akcjonariuszy."
    }
  },
  {
    id: "243",
    category: 5,
    slug: "free-cash-flow",
    title: {
      en: "Free Cash Flow (FCF)",
      cs: "Volné peněžní toky (FCF)",
      pl: "Wolne przepływy pieniężne (FCF)"
    },
    description: {
      en: "Free cash flow is the cash a company generates after accounting for cash outflows to support operations and maintain its capital assets.",
      cs: "Free cash flow je hotovost, kterou společnost vygeneruje po zohlednění odtoků hotovosti na podporu provozu a údržbu aktiv.",
      pl: "Wolne przepływy pieniężne to gotówka, którą firma generuje po uwzględnieniu odpływów gotówki na wsparcie działalności i utrzymanie aktywów."
    }
  },
  {
    id: "244",
    category: 5,
    slug: "price-to-book-ratio",
    title: {
      en: "Price-to-Book (P/B) Ratio",
      cs: "Poměr P/B (Price-to-Book)",
      pl: "Wskaźnik cena do wartości księgowej (P/B)"
    },
    description: {
      en: "The P/B ratio compares a firm's market capitalization to its book value.",
      cs: "Poměr P/B porovnává tržní kapitalizaci firmy s její účetní hodnotou.",
      pl: "Wskaźnik P/B porównuje kapitalizację rynkową firmy z jej wartością księgową."
    }
  },
  {
    id: "245",
    category: 5,
    slug: "ebitda",
    title: {
      en: "EBITDA",
      cs: "EBITDA",
      pl: "EBITDA"
    },
    description: {
      en: "EBITDA is an acronym for Earnings Before Interest, Taxes, Depreciation, and Amortization.",
      cs: "EBITDA je zkratka pro zisk před započtením úroků, daní, odpisů a amortizace.",
      pl: "EBITDA to zysk przed odsetkami, opodatkowaniem, deprecjacją i amortyzacją."
    }
  },
  {
    id: "246",
    category: 5,
    slug: "profit-margin",
    title: {
      en: "Profit Margin",
      cs: "Zisková marže",
      pl: "Marża zysku"
    },
    description: {
      en: "Profit margin is a measure of profitability, representing the percentage of revenue that remains as profit after all expenses are paid.",
      cs: "Zisková marže je měřítko ziskovosti představující procento tržeb, které zůstane jako zisk po zaplacení všech výdajů.",
      pl: "Marża zysku to miara rentowności reprezentująca procent przychodów, który pozostaje jako zysk po opłaceniu wszystkich kosztów."
    }
  },
  {
    id: "247",
    category: 5,
    slug: "operating-leverage",
    title: {
      en: "Operating Leverage",
      cs: "Provozní páka",
      pl: "Dźwignia operacyjna"
    },
    description: {
      en: "Operating leverage measures the degree to which a firm or project can increase operating income by increasing revenue.",
      cs: "Provozní páka měří míru, do jaké může firma zvýšit provozní zisk zvýšením tržeb.",
      pl: "Dźwignia operacyjna mierzy stopień, w jakim firma może zwiększyć dochód operacyjny poprzez zwiększenie przychodów."
    }
  },
  {
    id: "248",
    category: 5,
    slug: "intrinsic-value",
    title: {
      en: "Intrinsic Value",
      cs: "Vnitřní hodnota",
      pl: "Wartość wewnętrzna"
    },
    description: {
      en: "Intrinsic value is the perceived or calculated true value of an asset, as opposed to its current market price.",
      cs: "Vnitřní hodnota je vnímaná nebo vypočtená skutečná hodnota aktiva, na rozdíl od jeho aktuální tržní ceny.",
      pl: "Wartość wewnętrzna to postrzegana lub obliczona rzeczywista wartość aktywa, w przeciwieństwie do jego aktualnej ceny rynkowej."
    }
  },
  {
    id: "249",
    category: 5,
    slug: "fair-value",
    title: {
      en: "Fair Value",
      cs: "Férová hodnota (Fair Value)",
      pl: "Wartość godziwa (Fair Value)"
    },
    description: {
      en: "Fair value is the estimated price at which an asset can be bought or sold in a current transaction between willing parties.",
      cs: "Férová hodnota je odhadovaná cena, za kterou lze aktivum koupit nebo prodat v aktuální transakci mezi ochotnými stranami.",
      pl: "Wartość godziwa to szacunkowa cena, po której aktywo może zostać kupione lub sprzedane w bieżącej transakcji między zainteresowanymi stronami."
    }
  },
  {
    id: "250",
    category: 5,
    slug: "quantitative-analysis",
    title: {
      en: "Quantitative Analysis",
      cs: "Kvantitativní analýza",
      pl: "Analiza ilościowa"
    },
    description: {
      en: "Quantitative analysis is a technique that uses mathematical and statistical modeling, measurement, and research to understand behavior.",
      cs: "Kvantitativní analýza je technika využívající matematické a statistické modelování a výzkum k pochopení chování trhu.",
      pl: "Analiza ilościowa to technika wykorzystująca modelowanie matematyczne i statystyczne oraz badania do zrozumienia zachowań rynku."
    }
  },
  {
    id: "251",
    category: 6,
    slug: "trading-psychology",
    title: {
      en: "Trading Psychology",
      cs: "Psychologie obchodování",
      pl: "Psychologia tradingu"
    },
    description: {
      en: "Trading psychology refers to the emotions and mental state that help to determine success or failure in trading.",
      cs: "Psychologie obchodování se týká emocí a mentálního stavu, které pomáhają určovat úspěch nebo neúspěch v obchodování.",
      pl: "Psychologia tradingu odnosi się do emocji i stanu psychicznego, które pomagają określić sukces lub porażkę w handlu."
    }
  },
  {
    id: "252",
    category: 6,
    slug: "fomo",
    title: {
      en: "FOMO (Fear of Missing Out)",
      cs: "FOMO (Strach z promeškání)",
      pl: "FOMO (Strach przed przegapieniem okazji)"
    },
    description: {
      en: "FOMO is the feeling of anxiety or insecurity over the possibility of missing out on a profitable trading opportunity.",
      cs: "FOMO je pocit úzkosti nebo nejistoty z možnosti promeškání ziskové obchodní příležitosti.",
      pl: "FOMO to uczucie niepokoju lub niepewności co do możliwości przegapienia zyskownej okazji inwestycyjnej."
    }
  },
  {
    id: "253",
    category: 6,
    slug: "revenge-trading",
    title: {
      en: "Revenge Trading",
      cs: "Pomstychtivé obchodování (Revenge Trading)",
      pl: "Handel odwetowy (Revenge Trading)"
    },
    description: {
      en: "Revenge trading occurs when a trader tries to win back losses by taking larger, impulsive trades.",
      cs: "Pomstychtivé obchodování nastává, když se obchodník snaží získat zpět ztráty pomocí větších, impulzivních obchodů.",
      pl: "Handel odwetowy następuje, gdy trader próbuje odrobić straty poprzez zawieranie większych, impulsywnych transakcji."
    }
  },
  {
    id: "254",
    category: 6,
    slug: "overtrading",
    title: {
      en: "Overtrading",
      cs: "Overtrading (Nadměrné obchodování)",
      pl: "Overtrading (Nadmierny handel)"
    },
    description: {
      en: "Overtrading is the excessive buying and selling of stocks, often driven by emotion rather than a clear strategy.",
      cs: "Overtrading je nadměrné nakupování a prodávání, často řízené emocemi spíše než jasnou strategií.",
      pl: "Overtrading to nadmierne kupowanie i sprzedawanie akcji, często napędzane emocjami, a nie jasną strategią."
    }
  },
  {
    id: "255",
    category: 6,
    slug: "trading-plan",
    title: {
      en: "Trading Plan",
      cs: "Obchodní plán",
      pl: "Plan tradingowy"
    },
    description: {
      en: "A trading plan is a systematic method for identifying and trading securities that takes into consideration a number of variables including time, risk, and goals.",
      cs: "Obchodní plán je systematická metoda pro identifikaci a obchodování, která zohledňuje riziko a cíle.",
      pl: "Plan tradingowy to systematyczna metoda identyfikacji i handlu papierami wartościowymi, uwzględniająca ryzyko i cele."
    }
  },
  {
    id: "256",
    category: 6,
    slug: "discipline",
    title: {
      en: "Discipline",
      cs: "Disciplína",
      pl: "Dyscyplina"
    },
    description: {
      en: "Discipline in trading is the ability to stick to your trading plan and rules, even when emotions are high.",
      cs: "Disciplína v obchodování je schopnost držet se svého plánu a pravidel, i když jsou emoce silné.",
      pl: "Dyscyplina w tradingu to umiejętność trzymania się planu i zasad, nawet gdy emocje są silne."
    }
  },
  {
    id: "257",
    category: 6,
    slug: "patience",
    title: {
      en: "Patience",
      cs: "Trpělivost",
      pl: "Cierpliwość"
    },
    description: {
      en: "Patience is the ability to wait for the right setup or signal according to your strategy, rather than forcing trades.",
      cs: "Trpělivost je schopnost čekat na správné nastavení nebo signál podle vaší strategie.",
      pl: "Cierpliwość to umiejętność czekania na odpowiedni sygnał zgodnie ze strategią, zamiast wymuszania transakcji."
    }
  },
  {
    id: "258",
    category: 6,
    slug: "confirmation-bias",
    title: {
      en: "Confirmation Bias",
      cs: "Potvrzovací zkreslení (Confirmation Bias)",
      pl: "Efekt potwierdzenia (Confirmation Bias)"
    },
    description: {
      en: "Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms one's pre-existing beliefs.",
      cs: "Potvrzovací zkreslení je tendence vyhledávat a interpretovat informace tak, aby potvrdily naše stávající přesvědčení.",
      pl: "Efekt potwierdzenia to tendencja do wyszukiwania i interpretowania informacji w sposób potwierdzający wcześniejsze przekonania."
    }
  },
  {
    id: "259",
    category: 6,
    slug: "loss-aversion",
    title: {
      en: "Loss Aversion",
      cs: "Averze ke ztrátě",
      pl: "Awersja do strat"
    },
    description: {
      en: "Loss aversion is a cognitive bias where the pain of losing is psychologically twice as powerful as the joy of gaining.",
      cs: "Averze ke ztrátě je kognitivní zkreslení, kdy bolest ze ztráty je psychologicky silnější než radost ze zisku.",
      pl: "Awersja do strat to błąd poznawczy, w którym ból z powodu straty jest psychologicznie silniejszy niż radość z zysku."
    }
  },
  {
    id: "260",
    category: 6,
    slug: "anchoring-bias",
    title: {
      en: "Anchoring Bias",
      cs: "Efekt ukotvení (Anchoring Bias)",
      pl: "Efekt zakotwiczenia (Anchoring Bias)"
    },
    description: {
      en: "Anchoring bias is the tendency to rely too heavily on the first piece of information encountered (the 'anchor') when making decisions.",
      cs: "Efekt ukotvení je tendence příliš spoléhat na první informaci ('kotvu') při rozhodování.",
      pl: "Efekt zakotwiczenia to tendencja do zbyt silnego polegania na pierwszej uzyskanej informacji przy podejmowaniu decyzji."
    }
  },
  {
    id: "261",
    category: 6,
    slug: "gamblers-fallacy",
    title: {
      en: "Gambler's Fallacy",
      cs: "Hráčský klam (Gambler's Fallacy)",
      pl: "Paradoks hazardzisty"
    },
    description: {
      en: "The gambler's fallacy is the belief that if an event happens more frequently than normal during a given period, it will happen less frequently in the future.",
      cs: "Hráčský klam je víra, že pokud se událost děje častěji než obvykle, bude se v budoucnu dít méně často.",
      pl: "Paradoks hazardzisty to błędne przekonanie, że jeśli jakieś zdarzenie powtarzało się częściej niż zwykle, to w przyszłości będzie występować rzadziej."
    }
  },
  {
    id: "262",
    category: 6,
    slug: "herd-mentality",
    title: {
      en: "Herd Mentality",
      cs: "Stádní mentalita",
      pl: "Owczy pęd"
    },
    description: {
      en: "Herd mentality describes how people can be influenced by their peers to adopt certain behaviors on a largely emotional, rather than rational, basis.",
      cs: "Stádní mentalita popisuje, jak mohou být lidé ovlivněni ostatními k přijetí určitého chování na emocionálním základě.",
      pl: "Owczy pęd opisuje, jak ludzie mogą ulegać wpływom grupy i przyjmować określone zachowania na podstawie emocji."
    }
  },
  {
    id: "263",
    category: 6,
    slug: "trading-journal",
    title: {
      en: "Trading Journal",
      cs: "Obchodní deník",
      pl: "Dziennik tradingowy"
    },
    description: {
      en: "A trading journal is a log that you can use to record your trades and reflect on your performance and decision-making.",
      cs: "Obchodní deník je záznam, který používáte k zapisování svých obchodů a k reflexi své výkonnosti.",
      pl: "Dziennik tradingowy to rejestr służący do zapisywania transakcji oraz analizy własnych wyników i decyzji."
    }
  },
  {
    id: "264",
    category: 6,
    slug: "risk-per-trade",
    title: {
      en: "Risk Per Trade",
      cs: "Riziko na obchod",
      pl: "Ryzyko na transakcję"
    },
    description: {
      en: "Risk per trade is the percentage of your total trading capital that you are willing to lose on a single trade.",
      cs: "Riziko na obchod je procento vašeho celkového kapitálu, které jste ochotni ztratit v jediném obchodu.",
      pl: "Ryzyko na transakcję to procent całkowitego kapitału, który jesteś gotów stracić w jednej transakcji."
    }
  },
  {
    id: "265",
    category: 6,
    slug: "consistency",
    title: {
      en: "Consistency",
      cs: "Konzistence",
      pl: "Konsekwencja"
    },
    description: {
      en: "Consistency in trading is the practice of applying the same rules and logic to every trade, regardless of past outcomes.",
      cs: "Konzistence v obchodování je praxe uplatňování stejných pravidel a logiky na každý obchod.",
      pl: "Konsekwencja w tradingu to stosowanie tych samych zasad i logiki w każdej transakcji, niezależnie od wcześniejszych wyników."
    }
  },
  {
    id: "266",
    category: 6,
    slug: "mental-capital",
    title: {
      en: "Mental Capital",
      cs: "Mentální kapitál",
      pl: "Kapitał psychiczny"
    },
    description: {
      en: "Mental capital refers to a trader's emotional and psychological resources required to withstand the stresses of the market.",
      cs: "Mentální kapitál se týká emocionálních a psychologických zdrojů obchodníka potřebných k odolávání stresu.",
      pl: "Kapitał psychiczny odnosi się do zasobów emocjonalnych i psychicznych tradera niezbędnych do radzenia sobie ze stresem rynkowym."
    }
  },
  {
    id: "267",
    category: 6,
    slug: "drawdown-period",
    title: {
      en: "Drawdown Period",
      cs: "Období drawdownu (Poklesu)",
      pl: "Okres obsunięcia kapitału (Drawdown)"
    },
    description: {
      en: "A drawdown period is a time during which a trader's capital decreases from its peak, testing their emotional resilience.",
      cs: "Období drawdownu je doba, kdy kapitál obchodníka klesá ze svého maxima, což testuje jeho odolnost.",
      pl: "Okres obsunięcia kapitału to czas, w którym kapitał tradera spada z poziomu szczytowego, co wystawia na próbę jego odporność psychiczną."
    }
  },
  {
    id: "268",
    category: 6,
    slug: "expectation-management",
    title: {
      en: "Expectation Management",
      cs: "Řízení očekávání",
      pl: "Zarządzanie oczekiwaniami"
    },
    description: {
      en: "Expectation management involves setting realistic goals for profits and losses to avoid emotional extremes.",
      cs: "Řízení očekávání zahrnuje nastavení realistických cílů pro zisky a ztráty pro vyhnutí se emočním extrémům.",
      pl: "Zarządzanie oczekiwaniami polega na ustalaniu realistycznych celów dotyczących zysków i strat, aby unikać skrajnych emocji."
    }
  },
  {
    id: "269",
    category: 6,
    slug: "trading-routine",
    title: {
      en: "Trading Routine",
      cs: "Obchodní rutina",
      pl: "Rutyna tradingowa"
    },
    description: {
      en: "A trading routine is a structured daily habit of market analysis, trade execution, and review that builds discipline.",
      cs: "Obchodní rutina je strukturovaný denní návyk analýzy trhu, provádění obchodů a revize.",
      pl: "Rutyna tradingowa to ustrukturyzowany dzienny nawyk analizy rynku, zawierania transakcji i ich przeglądu, budujący dyscyplinę."
    }
  },
  {
    id: "270",
    category: 6,
    slug: "intuition-vs-impulse",
    title: {
      en: "Intuition vs. Impulse",
      cs: "Intuice vs. Impulz",
      pl: "Intuicja a impuls"
    },
    description: {
      en: "Distinguishing between trained market intuition and emotional impulses is a key skill for professional traders.",
      cs: "Rozlišení mezi naučenou tržní intuicí a emocionálními impulzy je klíčovou dovedností profesionálů.",
      pl: "Rozróżnianie wyuczonej intuicji rynkowej od impulsów emocjonalnych to kluczowa umiejętność profesjonalnych traderów."
    }
  },
  {
    id: "271",
    category: 6,
    slug: "outcome-independence",
    title: {
      en: "Outcome Independence",
      cs: "Nezávislost na výsledku",
      pl: "Niezależność od wyniku"
    },
    description: {
      en: "Outcome independence is the mental state where a trader is not emotionally affected by the result of a single trade.",
      cs: "Nezávislost na výsledku je mentální stav, kdy obchodník není emocionálně ovlivněn výsledkem jednoho obchodu.",
      pl: "Niezależność od wyniku to stan psychiczny, w którym trader nie jest emocjonalnie związany z wynikiem pojedynczej transakcji."
    }
  },
  {
    id: "272",
    category: 6,
    slug: "overconfidence-bias",
    title: {
      en: "Overconfidence Bias",
      cs: "Přílišná sebevědomost (Overconfidence)",
      pl: "Efekt nadmiernej pewności siebie"
    },
    description: {
      en: "Overconfidence bias leads traders to overestimate their skills and take excessive risks after a winning streak.",
      cs: "Přílišná sebevědomost vede obchodníky k přeceňování dovedností a podstupování nadměrného rizika po sérii výher.",
      pl: "Nadmierna pewność siebie prowadzi traderów do przeceniania swoich umiejętności i podejmowania nadmiernego ryzyka po serii zysków."
    }
  },
  {
    id: "273",
    category: 6,
    slug: "hindsight-bias",
    title: {
      en: "Hindsight Bias",
      cs: "Zpětné ohlédnutí (Hindsight Bias)",
      pl: "Błąd pewności wstecznej"
    },
    description: {
      en: "Hindsight bias makes a trader believe that a past market move was predictable, even if it was not at the time.",
      cs: "Zpětné ohlédnutí vyvolává u obchodníka víru, že minulý pohyb trhu byl předvídatelný, i když tehdy nebyl.",
      pl: "Błąd pewności wstecznej sprawia, że trader wierzy, iż przeszły ruch rynku był przewidywalny, nawet jeśli w danym momencie tak nie było."
    }
  },
  {
    id: "274",
    category: 6,
    slug: "probabilistic-thinking",
    title: {
      en: "Probabilistic Thinking",
      cs: "Pravděpodobnostní myšlení",
      pl: "Myślenie probabilistyczne"
    },
    description: {
      en: "Probabilistic thinking is the ability to view the market in terms of odds and statistics rather than certainty.",
      cs: "Pravděpodobnostní myšlení je schopnost vnímat trh z hlediska šancí a statistiky spíše než jistoty.",
      pl: "Myślenie probabilistyczne to umiejętność postrzegania rynku w kategoriach szans i statystyk, a nie pewności."
    }
  },
  {
    id: "275",
    category: 6,
    slug: "detachment",
    title: {
      en: "Emotional Detachment",
      cs: "Emoční odstup",
      pl: "Dystans emocjonalny"
    },
    description: {
      en: "Detachment is the ability to treat money in a trading account as just a tool for execution, rather than personal wealth.",
      cs: "Emoční odstup je schopnost vnímat peníze na účtu jen jako nástroj k exekuci, nikoli jako osobní majetek.",
      pl: "Dystans emocjonalny to umiejętność traktowania pieniędzy na koncie tradingowym jedynie jako narzędzia, a nie osobistego majątku."
    }
  },
  {
    id: "276",
    category: 6,
    slug: "cognitive-dissonance",
    title: {
      en: "Cognitive Dissonance",
      cs: "Kognitivní disonance",
      pl: "Dysonans poznawczy"
    },
    description: {
      en: "Cognitive dissonance in trading is the mental discomfort experienced when holding conflicting beliefs about a trade or market direction.",
      cs: "Kognitivní disonance je mentální nepohodlí při držení protichůdných přesvědčení o obchodu nebo směru trhu.",
      pl: "Dysonans poznawczy w tradingu to dyskomfort psychiczny wynikający z posiadania sprzecznych przekonań na temat transakcji lub kierunku rynku."
    }
  },
  {
    id: "277",
    category: 6,
    slug: "self-discipline",
    title: {
      en: "Self-Discipline",
      cs: "Sebe-disciplína",
      pl: "Samodyscyplina"
    },
    description: {
      en: "Self-discipline is the internal strength to follow your strategy's exit rules even when it means taking a loss.",
      cs: "Sebe-disciplína je vnitřní síla následovat výstupní pravidla strategie, i když to znamená realizaci ztráty.",
      pl: "Samodyscyplina to wewnętrzna siła do przestrzegania zasad wyjścia ze strategii, nawet jeśli oznacza to poniesienie straty."
    }
  },
  {
    id: "278",
    category: 6,
    slug: "resilience",
    title: {
      en: "Emotional Resilience",
      cs: "Emoční odolnost",
      pl: "Odporność emocjonalna"
    },
    description: {
      en: "Resilience is the ability to recover quickly from trading losses and maintain a professional focus.",
      cs: "Odolnost je schopnost rychle se zotavit z obchodních ztrát a udržet si profesionální soustředění.",
      pl: "Odporność to umiejętność szybkiego podnoszenia się po stratach i utrzymywania profesjonalnego skupienia."
    }
  },
  {
    id: "279",
    category: 6,
    slug: "analysis-paralysis",
    title: {
      en: "Analysis Paralysis",
      cs: "Analytická paralýza",
      pl: "Paraliż analityczny"
    },
    description: {
      en: "Analysis paralysis occurs when a trader over-analyzes the market to the point where they are unable to make a decision or take action.",
      cs: "Analytická paralýza nastává, když obchodník příliš analyzuje trh do bodu, kdy není schopen učinit rozhodnutí.",
      pl: "Paraliż analityczny występuje, gdy trader zbyt szczegółowo analizuje rynek, co uniemożliwia mu podjęcie decyzji lub działania."
    }
  },
  {
    id: "280",
    category: 6,
    slug: "trading-mindset",
    title: {
      en: "Trading Mindset",
      cs: "Obchodní nastavení mysli (Mindset)",
      pl: "Nastawienie tradingowe (Mindset)"
    },
    description: {
      en: "A professional trading mindset focuses on the process and probabilities rather than individual trade outcomes.",
      cs: "Profesionální nastavení mysli se zaměřuje na proces a pravděpodobnosti spíše než na výsledek jednotlivých obchodů.",
      pl: "Profesjonalne nastawienie tradingowe koncentruje się na procesie i prawdopodobieństwie, a nie na wynikach pojedynczych transakcji."
    }
  },
  {
    id: "281",
    category: 6,
    slug: "impulsivity",
    title: {
      en: "Impulsivity",
      cs: "Impulzivnost",
      pl: "Impulsywność"
    },
    description: {
      en: "Impulsivity is the tendency to enter or exit trades without following a predefined plan, often based on sudden emotions.",
      cs: "Impulzivnost je tendence vstupovat do obchodů nebo z nich vystupovat bez plánu, často na základě náhlých emocí.",
      pl: "Impulsywność to tendencja do otwierania lub zamykania transakcji bez planu, często pod wpływem nagłych emocji."
    }
  },
  {
    id: "282",
    category: 6,
    slug: "fear-of-loss",
    title: {
      en: "Fear of Loss",
      cs: "Strach ze ztráty",
      pl: "Strach przed stratą"
    },
    description: {
      en: "Fear of loss can cause traders to hesitate when entering good setups or to hold onto losing trades for too long.",
      cs: "Strach ze ztráty může způsobit váhání u dobrých příležitostí nebo příliš dlouhé držení ztrátových obchodů.",
      pl: "Strach przed stratą może powodować wahanie przy dobrych okazjach lub zbyt długie utrzymywanie stratnych pozycji."
    }
  },
  {
    id: "283",
    category: 6,
    slug: "greed",
    title: {
      en: "Greed",
      cs: "Chamtivost",
      pl: "Chciwość"
    },
    description: {
      en: "Greed in trading is the desire for excessive profits that leads to ignoring risk management or staying in trades too long.",
      cs: "Chamtivost je touha po nadměrném zisku, která vede k ignorování risk managementu.",
      pl: "Chciwość w tradingu to pragnienie nadmiernych zysków, prowadzące do ignorowania zarządzania ryzykiem."
    }
  },
  {
    id: "284",
    category: 6,
    slug: "market-noise-stress",
    title: {
      en: "Market Noise Stress",
      cs: "Stres z tržního šumu",
      pl: "Stres wywołany szumem rynkowym"
    },
    description: {
      en: "Stress caused by focusing on small, insignificant price fluctuations instead of the overall trend.",
      cs: "Stres způsobený soustředěním se na malé, nevýznamné výkyvy cen namísto celkového trendu.",
      pl: "Stres spowodowany skupianiem się na małych, nieistotnych wahaniach cen zamiast na ogólnym trendzie."
    }
  },
  {
    id: "285",
    category: 6,
    slug: "performance-anxiety",
    title: {
      en: "Performance Anxiety",
      cs: "Úzkost z výkonu",
      pl: "Lęk przed wynikami"
    },
    description: {
      en: "Anxiety related to the need to achieve specific financial targets, which can lead to poor decision-making.",
      cs: "Úzkost spojená s potřebou dosáhnout konkrétních finančních cílů, což může vést k špatným rozhodnutím.",
      pl: "Lęk związany z potrzebą osiągnięcia konkretnych celów finansowych, co może prowadzić do błędnych decyzji."
    }
  },
  {
    id: "286",
    category: 6,
    slug: "self-sabotage",
    title: {
      en: "Self-Sabotage",
      cs: "Sebe-sabotáž",
      pl: "Autosabotaż"
    },
    description: {
      en: "Self-sabotage in trading is the unconscious behavior of making errors that prevent success, often due to a fear of wealth or responsibility.",
      cs: "Sebe-sabotáž je nevědomé dělání chyb, které brání úspěchu, často kvůli strachu z odpovědnosti.",
      pl: "Autosabotaż w tradingu to nieświadome popełnianie błędów uniemożliwiających sukces, często ze strachu przed odpowiedzialnością."
    }
  },
  {
    id: "287",
    category: 6,
    slug: "mental-flexibility",
    title: {
      en: "Mental Flexibility",
      cs: "Mentální flexibilita",
      pl: "Elastyczność psychiczna"
    },
    description: {
      en: "The ability to change your market bias quickly when the data proves your current view is wrong.",
      cs: "Schopnost rychle změnit svůj tržní pohled, když data prokáží, že váš aktuální názor je chybný.",
      pl: "Umiejętność szybkiej zmiany nastawienia do rynku, gdy dane udowadniają, że obecny pogląd jest błędny."
    }
  },
  {
    id: "288",
    category: 6,
    slug: "risk-acceptance",
    title: {
      en: "Risk Acceptance",
      cs: "Přijetí rizika",
      pl: "Akceptacja ryzyka"
    },
    description: {
      en: "True risk acceptance means being completely at peace with the potential for loss before entering a trade.",
      cs: "Skutečné přijetí rizika znamená být zcela v klidu s potenciální ztrátou ještě před vstupem do obchodu.",
      pl: "Prawdziwa akceptacja ryzyka oznacza pełny spokój wobec potencjalnej straty jeszcze przed otwarciem transakcji."
    }
  },
  {
    id: "289",
    category: 6,
    slug: "concentration",
    title: {
      en: "Concentration",
      cs: "Soustředění",
      pl: "Koncentracja"
    },
    description: {
      en: "The ability to maintain focus on market signals and your strategy for extended periods without distraction.",
      cs: "Schopnost udržet pozornost na tržní signály a strategii po delší dobu bez rozptylování.",
      pl: "Umiejętność utrzymania skupienia na sygnałach rynkowych i strategii przez dłuższy czas bez rozpraszania się."
    }
  },
  {
    id: "290",
    category: 6,
    slug: "bias-awareness",
    title: {
      en: "Bias Awareness",
      cs: "Uvědomění si zkreslení",
      pl: "Świadomość błędów poznawczych"
    },
    description: {
      en: "Recognizing your own psychological biases and actively working to minimize their impact on your trading.",
      cs: "Rozpoznání vlastních psychologických zkreslení a aktivní snaha o minimalizaci jejich dopadu na obchodování.",
      pl: "Rozpoznawanie własnych błędów poznawczych i aktywna praca nad minimalizacją ich wpływu na trading."
    }
  },
  {
    id: "291",
    category: 6,
    slug: "intuition-development",
    title: {
      en: "Intuition Development",
      cs: "Rozvoj intuice",
      pl: "Rozwój intuicji"
    },
    description: {
      en: "The process of building subconscious pattern recognition through thousands of hours of market observation.",
      cs: "Proces budování podvědomého rozpoznávání vzorců skrze tisíce hodin pozorování trhu.",
      pl: "Rozwój intuicji to proces budowania podświadomego rozpoznawania schematów poprzez tysiące godzin obserwacji rynku."
    }
  },
  {
    id: "292",
    category: 6,
    slug: "emotional-awareness",
    title: {
      en: "Emotional Awareness",
      cs: "Emoční uvědomění",
      pl: "Świadomość emocjonalna"
    },
    description: {
      en: "Being able to identify exactly what emotion you are feeling (e.g., fear, greed, excitement) while trading.",
      cs: "Schopnost přesně identifikovat, jakou emoci pociťujete (např. strach, chamtivost, vzrušení) během obchodování.",
      pl: "Umiejętność precyzyjnego identyfikowania odczuwanych emocji (np. strachu, chciwości, ekscytacji) podczas handlu."
    }
  },
  {
    id: "293",
    category: 6,
    slug: "trading-fatigue",
    title: {
      en: "Trading Fatigue",
      cs: "Obchodní únava",
      pl: "Zmęczenie tradingowe"
    },
    description: {
      en: "Mental exhaustion caused by long periods of market focus, leading to a decline in decision-making quality.",
      cs: "Mentální vyčerpání způsobené dlouhým soustředěním na trh, vedoucí k poklesu kvality rozhodování.",
      pl: "Wyczerpanie psychiczne spowodowane długotrwałym skupieniem na rynku, prowadzące do spadku jakości decyzji."
    }
  },
  {
    id: "294",
    category: 6,
    slug: "burnout-prevention",
    title: {
      en: "Burnout Prevention",
      cs: "Prevence vyhoření",
      pl: "Zapobieganie wypaleniu"
    },
    description: {
      en: "Strategies used to maintain a healthy work-life balance and avoid long-term psychological damage from trading stress.",
      cs: "Strategie používané k udržení rovnováhy mezi prací a životem a k zamezení dlouhodobého poškození ze stresu.",
      pl: "Strategie stosowane w celu utrzymania równowagi między pracą a życiem prywatnym i unikania skutków stresu tradingowego."
    }
  },
  {
    id: "295",
    category: 6,
    slug: "self-reflection",
    title: {
      en: "Self-Reflection",
      cs: "Sebe-reflexe",
      pl: "Autorefleksja"
    },
    description: {
      en: "The practice of reviewing your mental state and decision-making process regularly to identify areas for improvement.",
      cs: "Praxe pravidelné revize mentálního stavu a rozhodovacího procesu pro identifikaci oblastí ke zlepšení.",
      pl: "Praktyka regularnego przeglądania swojego stanu psychicznego i procesu decyzyjnego w celu poprawy wyników."
    }
  },
  {
    id: "296",
    category: 6,
    slug: "accountability",
    title: {
      en: "Accountability",
      cs: "Odpovědnost",
      pl: "Odpowiedzialność"
    },
    description: {
      en: "Taking full ownership of your trading results without blaming the market, the broker, or other external factors.",
      cs: "Přijetí plné odpovědnosti za výsledky bez obviňování trhu, brokera nebo jiných externích faktorů.",
      pl: "Przyjmowanie pełnej odpowiedzialności za wyniki bez obwiniania rynku, brokera czy innych czynników zewnętrznych."
    }
  },
  {
    id: "297",
    category: 6,
    slug: "mindfulness-in-trading",
    title: {
      en: "Mindfulness in Trading",
      cs: "Mindfulness (Všímavost) v tradingu",
      pl: "Uważność (Mindfulness) w tradingu"
    },
    description: {
      en: "The practice of staying present and non-reactive to the ups and downs of the market during the trading session.",
      cs: "Praxe udržování pozornosti v přítomnosti a nereagování na výkyvy trhu během obchodní seance.",
      pl: "Praktyka pozostawania obecnym i nieulegania reakcjom na wahania rynku podczas sesji tradingowej."
    }
  },
  {
    id: "298",
    category: 6,
    slug: "growth-vs-fixed-mindset",
    title: {
      en: "Growth vs. Fixed Mindset",
      cs: "Růstové vs. Fixní nastavení mysli",
      pl: "Nastawienie na rozwój a nastawienie stałe"
    },
    description: {
      en: "A growth mindset views losses as learning opportunities, while a fixed mindset views them as personal failures.",
      cs: "Růstové nastavení vnímá ztráty jako příležitost k učení, zatímco fixní jako osobní selhání.",
      pl: "Nastawienie na rozwój traktuje straty jako okazję do nauki, podczas gdy nastawienie stałe jako osobistą porażkę."
    }
  },
  {
    id: "299",
    category: 6,
    slug: "cognitive-flexibility",
    title: {
      en: "Cognitive Flexibility",
      cs: "Kognitivní flexibilita",
      pl: "Elastyczność poznawcza"
    },
    description: {
      en: "The ability to consider multiple market scenarios and react appropriately to whichever one unfolds.",
      cs: "Schopnost současně zvažovat více tržních scénářů a vhodně reagovat na ten, který se rozvine.",
      pl: "Umiejętność jednoczesnego rozważania wielu scenariuszy rynkowych i odpowiedniego reagowania na ten, który się urzeczywistnia."
    }
  },
  {
    id: "300",
    category: 6,
    slug: "confidence-building",
    title: {
      en: "Confidence Building",
      cs: "Budování sebevědomí",
      pl: "Budowanie pewności siebie"
    },
    description: {
      en: "The gradual process of gaining trust in your strategy and execution through consistent success over time.",
      cs: "Postupný proces získávání důvěry ve svou strategii a exekuci skrze konzistentní úspěch v čase.",
      pl: "Budowanie pewności siebie to stopniowy proces zdobywania zaufania do własnej strategii i egzekucji."
    }
  },
  {
    id: "301",
    category: 7,
    slug: "blockchain",
    title: {
      en: "Blockchain",
      cs: "Blockchain",
      pl: "Blockchain"
    },
    description: {
      en: "Blockchain is a decentralized, distributed ledger technology that records transactions across many computers.",
      cs: "Blockchain je decentralizovaná, distribuovaná technologie účetní knihy, která zaznamenává transakce napříč mnoha počítači.",
      pl: "Blockchain to zdecentralizowana, rozproszona technologia księgi rachunkowej, która rejestruje transakcje na wielu komputerach."
    }
  },
  {
    id: "302",
    category: 7,
    slug: "cryptocurrency",
    title: {
      en: "Cryptocurrency",
      cs: "Kryptoměna",
      pl: "Kryptowaluta"
    },
    description: {
      en: "A cryptocurrency is a digital or virtual currency that is secured by cryptography, making it nearly impossible to counterfeit.",
      cs: "Kryptoměna je digitální nebo virtuální měna zabezpečená kryptografií, což znemožňuje její padělání.",
      pl: "Kryptowaluta to cyfrowa lub wirtualna waluta zabezpieczona kryptografią, co czyni ją niemal niemożliwou do podrobienia."
    }
  },
  {
    id: "303",
    category: 7,
    slug: "bitcoin",
    title: {
      en: "Bitcoin (BTC)",
      cs: "Bitcoin (BTC)",
      pl: "Bitcoin (BTC)"
    },
    description: {
      en: "Bitcoin is the first decentralized cryptocurrency, created in 2009 by an unknown person or group using the name Satoshi Nakamoto.",
      cs: "Bitcoin je první decentralizovaná kryptoměna, vytvořená v roce 2009 pod pseudonymem Satoshi Nakamoto.",
      pl: "Bitcoin to pierwsza zdecentralizowana kryptowaluta, stworzona w 2009 roku przez anonimową osobę lub grupę o pseudonimie Satoshi Nakamoto."
    }
  },
  {
    id: "304",
    category: 7,
    slug: "ethereum",
    title: {
      en: "Ethereum (ETH)",
      cs: "Ethereum (ETH)",
      pl: "Ethereum (ETH)"
    },
    description: {
      en: "Ethereum is a decentralized, open-source blockchain with smart contract functionality.",
      cs: "Ethereum je decentralizovaný, open-source blockchain s funkcí chytrých kontraktů.",
      pl: "Ethereum to zdecentralizowany blockchain typu open-source z funkcjonalnością inteligentnych kontraktów."
    }
  },
  {
    id: "305",
    category: 7,
    slug: "altcoin",
    title: {
      en: "Altcoin",
      cs: "Altcoin",
      pl: "Altcoin"
    },
    description: {
      en: "An altcoin is any cryptocurrency other than Bitcoin.",
      cs: "Altcoin je jakákoli kryptoměna jiná než Bitcoin.",
      pl: "Altcoin to każda kryptowaluta inna niż Bitcoin."
    }
  },
  {
    id: "306",
    category: 7,
    slug: "stablecoin",
    title: {
      en: "Stablecoin",
      cs: "Stablecoin",
      pl: "Stablecoin"
    },
    description: {
      en: "A stablecoin is a type of cryptocurrency that is pegged to another asset, such as a fiat currency or gold, to maintain a stable price.",
      cs: "Stablecoin je typ kryptoměny vázaný na jiné aktivum, například fiat měnu nebo zlato, pro udržení stabilní ceny.",
      pl: "Stablecoin to rodzaj kryptowaluty powiązany z innym aktywem, np. walutą fiducjarną lub złotem, w celu utrzymania stabilnej ceny."
    }
  },
  {
    id: "307",
    category: 7,
    slug: "wallet",
    title: {
      en: "Crypto Wallet",
      cs: "Kryptoměnová peněženka",
      pl: "Portfel kryptowalutowy"
    },
    description: {
      en: "A crypto wallet is a tool that allows users to interact with the blockchain and manage their digital assets.",
      cs: "Kryptoměnová peněženka je nástroj, který umožňuje uživatelům interakci s blockchainem a správu digitálních aktiv.",
      pl: "Portfel kryptowalutowy to narzędzie umożliwiające interakcję z blockchainem i zarządzanie aktywami cyfrowymi."
    }
  },
  {
    id: "308",
    category: 7,
    slug: "private-key",
    title: {
      en: "Private Key",
      cs: "Soukromý klíč (Private Key)",
      pl: "Klucz prywatny"
    },
    description: {
      en: "A private key is a secret code that allows a user to access and manage their cryptocurrency.",
      cs: "Soukromý klíč je tajný kód, který umožňuje uživateli přístup k jeho kryptoměnám a jejich správu.",
      pl: "Klucz prywatny to tajny kod umożliwiający użytkownikowi dostęp do jego kryptowalut i zarządzanie nimi."
    }
  },
  {
    id: "309",
    category: 7,
    slug: "public-key",
    title: {
      en: "Public Key",
      cs: "Veřejný klíč (Public Key)",
      pl: "Klucz publiczny"
    },
    description: {
      en: "A public key is a cryptographic code that allows users to receive cryptocurrency transactions.",
      cs: "Veřejný klíč je kryptografický kód, který umožňuje uživatelům přijímat kryptoměnové transakce.",
      pl: "Klucz publiczny to kod kryptograficzny umożliwiający użytkownikom otrzymywanie transakcji kryptowalutowych."
    }
  },
  {
    id: "310",
    category: 7,
    slug: "decentralization",
    title: {
      en: "Decentralization",
      cs: "Decentralizace",
      pl: "Decentralizacja"
    },
    description: {
      en: "Decentralization refers to the transfer of control and decision-making from a centralized entity to a distributed network.",
      cs: "Decentralizace označuje přenos kontroly a rozhodování z centrálního subjektu na distribuovanou síť.",
      pl: "Decentralizacja to przeniesienie kontroli i uprawnień decyzyjnych ze scentralizowanej jednostki do rozproszonej sieci."
    }
  },
  {
    id: "311",
    category: 7,
    slug: "smart-contract",
    title: {
      en: "Smart Contract",
      cs: "Chytrý kontrakt (Smart Contract)",
      pl: "Inteligentny kontrakt (Smart Contract)"
    },
    description: {
      en: "A smart contract is a self-executing contract with the terms of the agreement directly written into code.",
      cs: "Chytrý kontrakt je samočinně se provádějící kontrakt s podmínkami dohody zapsanými přímo v kódu.",
      pl: "Inteligentny kontrakt to samowykonujący się kontrakt, którego warunki są zapisane bezpośrednio w kodzie."
    }
  },
  {
    id: "312",
    category: 7,
    slug: "decentralized-finance",
    title: {
      en: "DeFi (Decentralized Finance)",
      cs: "DeFi (Decentralizované finance)",
      pl: "DeFi (Zdecentralizowane finanse)"
    },
    description: {
      en: "DeFi is a system of financial services built on top of public blockchains, offering traditional financial tools without intermediaries.",
      cs: "DeFi je systém finančních služeb postavený na veřejných blockchainech, nabízející finanční nástroje bez prostředníků.",
      pl: "DeFi to system usług finansowych oparty na publicznych blockchainach, oferujący narzędzia finansowe bez pośredników."
    }
  },
  {
    id: "313",
    category: 7,
    slug: "nft",
    title: {
      en: "NFT (Non-Fungible Token)",
      cs: "NFT (Nezastupitelný token)",
      pl: "NFT (Niewymienny token)"
    },
    description: {
      en: "An NFT is a unique digital identifier that cannot be copied, substituted, or subdivided, used to certify authenticity and ownership of a digital asset.",
      cs: "NFT je unikátní digitální identifikátor, který nelze kopírovat, používaný k potvrzení vlastnictví digitálního aktiva.",
      pl: "NFT to unikalny cyfrowy identyfikator, którego nie można skopiować, służący do potwierdzania własności aktywa cyfrowego."
    }
  },
  {
    id: "314",
    category: 7,
    slug: "mining",
    title: {
      en: "Mining",
      cs: "Těžba (Mining)",
      pl: "Kopanie (Mining)"
    },
    description: {
      en: "Mining is the process by which new units of a cryptocurrency are created and transactions are verified and added to the blockchain.",
      cs: "Těžba je proces, při kterém vznikají nové jednotky kryptoměny a transakce jsou ověřovány a přidávány do blockchainu.",
      pl: "Kopanie to proces, w którym powstają nowe jednostki kryptowaluty, a transakcje są weryfikowane i dodawane do blockchaina."
    }
  },
  {
    id: "315",
    category: 7,
    slug: "staking",
    title: {
      en: "Staking",
      cs: "Staking",
      pl: "Staking"
    },
    description: {
      en: "Staking is the process of participating in a proof-of-stake (PoS) system to validate transactions and earn rewards by locking up cryptocurrency.",
      cs: "Staking je proces účasti v systému Proof-of-Stake za účelem ověřování transakcí a získávání odměn uzamčením kryptoměny.",
      pl: "Staking to proces uczestnictwa w systemie Proof-of-Stake w celu weryfikacji transakcji i zdobywania nagród poprzez blokowanie kryptowaluty."
    }
  },
  {
    id: "316",
    category: 7,
    slug: "proof-of-work",
    title: {
      en: "Proof of Work (PoW)",
      cs: "Proof of Work (PoW)",
      pl: "Proof of Work (PoW)"
    },
    description: {
      en: "PoW is a consensus mechanism used to secure a blockchain network by requiring miners to solve complex mathematical puzzles.",
      cs: "PoW je mechanismus konsensu vyžadující od těžařů řešení složitých matematických úloh k zabezpečení sítě.",
      pl: "PoW to mechanizm konsensusu wymagający od górników rozwiązywania złożonych zagadek matematycznych w celu zabezpieczenia sieci."
    }
  },
  {
    id: "317",
    category: 7,
    slug: "proof-of-stake",
    title: {
      en: "Proof of Stake (PoS)",
      cs: "Proof of Stake (PoS)",
      pl: "Proof of Stake (PoS)"
    },
    description: {
      en: "PoS is a consensus mechanism used to secure a blockchain network by requiring validators to hold and lock up a certain amount of cryptocurrency.",
      cs: "PoS je mechanismus konsensu vyžadující od validátorů držení a uzamčení určitého množství kryptoměny.",
      pl: "PoS to mechanizm konsensusu wymagający od walidatorów posiadania i blokowania określonej ilości kryptowaluty."
    }
  },
  {
    id: "318",
    category: 7,
    slug: "fiat-currency",
    title: {
      en: "Fiat Currency",
      cs: "Fiat měna",
      pl: "Waluta fiducjarna (fiat)"
    },
    description: {
      en: "Fiat currency is a government-issued currency that is not backed by a physical commodity, such as gold or silver.",
      cs: "Fiat měna je vládní měna, která není podložena fyzickou komoditou, jako je zlato.",
      pl: "Waluta fiducjarna to waluta emitowana przez rząd, która nie ma oparcia w towarach fizycznych, takich jak złoto."
    }
  },
  {
    id: "319",
    category: 7,
    slug: "gas-fee",
    title: {
      en: "Gas Fee",
      cs: "Gas Fee (Poplatek za plyn)",
      pl: "Gas Fee (Opłata za gaz)"
    },
    description: {
      en: "Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on a blockchain.",
      cs: "Gas fees jsou poplatky hrazené uživateli za výpočetní energii potřebnou k provádění transakcí na blockchainu.",
      pl: "Gas fees to opłaty uiszczane przez użytkowników w celu zrekompensowania energii obliczeniowej potrzebnej do procesowania transakcji."
    }
  },
  {
    id: "320",
    category: 7,
    slug: "decentralized-exchange",
    title: {
      en: "DEX (Decentralized Exchange)",
      cs: "DEX (Decentralizovaná burza)",
      pl: "DEX (Zdecentralizowana giełda)"
    },
    description: {
      en: "A DEX is a cryptocurrency exchange that operates without a central authority, allowing peer-to-peer trading.",
      cs: "DEX je kryptoměnová burza, která funguje bez centrální autority a umožňuje peer-to-peer obchodování.",
      pl: "DEX to giełda kryptowalut działająca bez centralnego organu, umożliwiająca handel bezpośrednio między użytkownikami."
    }
  },
  {
    id: "321",
    category: 7,
    slug: "centralized-exchange",
    title: {
      en: "CEX (Centralized Exchange)",
      cs: "CEX (Centralizovaná burza)",
      pl: "CEX (Scentralizowana giełda)"
    },
    description: {
      en: "A CEX is a cryptocurrency exchange that is managed by a central organization.",
      cs: "CEX je kryptoměnová burza spravovaná centrální organizací.",
      pl: "CEX to giełda kryptowalut zarządzana przez scentralizowaną organizację."
    }
  },
  {
    id: "322",
    category: 7,
    slug: "hashing",
    title: {
      en: "Hashing",
      cs: "Hashing",
      pl: "Hashing"
    },
    description: {
      en: "Hashing is the process of converting an input of any length into a fixed-size string of characters, used to secure information on a blockchain.",
      cs: "Hashing je proces převodu vstupu libovolné délky na řetězec fixní délky, používaný k zabezpečení informací.",
      pl: "Hashing to proces przekształcania danych o dowolnej długości w ciąg o stałej długości, służący zabezpieczeniu informacji."
    }
  },
  {
    id: "323",
    category: 7,
    slug: "cold-storage",
    title: {
      en: "Cold Storage",
      cs: "Cold Storage (Studené úložiště)",
      pl: "Cold Storage (Zimny portfel)"
    },
    description: {
      en: "Cold storage is an offline method of storing cryptocurrency to protect it from hacking and unauthorized access.",
      cs: "Cold storage je offline metoda ukládání kryptoměn, která je chrání před hackery.",
      pl: "Cold storage to metoda przechowywania kryptowalut w trybie offline, chroniąca je przed atakami hakerskimi."
    }
  },
  {
    id: "324",
    category: 7,
    slug: "hot-wallet",
    title: {
      en: "Hot Wallet",
      cs: "Hot Wallet (Teplá peněženka)",
      pl: "Hot Wallet (Gorący portfel)"
    },
    description: {
      en: "A hot wallet is a crypto wallet that is connected to the internet, providing easier access for frequent trading.",
      cs: "Hot wallet je kryptoměnová peněženka připojená k internetu, umožňující snadný přístup k obchodování.",
      pl: "Hot wallet to portfel kryptowalutowy podłączony do internetu, zapewniający łatwiejszy dostęp do częstych transakcji."
    }
  },
  {
    id: "325",
    category: 7,
    slug: "ico",
    title: {
      en: "ICO (Initial Coin Offering)",
      cs: "ICO (Initial Coin Offering)",
      pl: "ICO (Initial Coin Offering)"
    },
    description: {
      en: "An ICO is a type of fundraising used by cryptocurrency projects to raise capital by issuing new tokens to investors.",
      cs: "ICO je typ fundraisingu používaný k získání kapitálu vydáním nových tokenů investorům.",
      pl: "ICO to rodzaj zbiórki funduszy przez projekty kryptowalutowe poprzez emisję nowych tokenów dla inwestorów."
    }
  },
  {
    id: "326",
    category: 7,
    slug: "hodl",
    title: {
      en: "HODL",
      cs: "HODL",
      pl: "HODL"
    },
    description: {
      en: "HODL is a term used in the crypto community that means holding onto a cryptocurrency for the long term, regardless of market volatility.",
      cs: "HODL je termín znamenající dlouhodobé držení kryptoměny bez ohledu na volatilitu.",
      pl: "HODL to termin oznaczający długoterminowe trzymanie kryptowaluty niezależnie od zmienności rynku."
    }
  },
  {
    id: "327",
    category: 7,
    slug: "whale",
    title: {
      en: "Whale",
      cs: "Velryba (Whale)",
      pl: "Wieloryb (Whale)"
    },
    description: {
      en: "A whale is an individual or entity that holds a large amount of a specific cryptocurrency, giving them the power to influence its price.",
      cs: "Velryba je subjekt držící velké množství kryptoměny, čímž může ovlivňovat její cenu.",
      pl: "Wieloryb to podmiot posiadający ogromną ilość danej kryptowaluty, co pozwala mu wpływać na jej cenę."
    }
  },
  {
    id: "328",
    category: 7,
    slug: "satoshi",
    title: {
      en: "Satoshi",
      cs: "Satoshi",
      pl: "Satoshi"
    },
    description: {
      en: "A Satoshi is the smallest unit of Bitcoin, equal to one hundred-millionth of a Bitcoin (0.00000001 BTC).",
      cs: "Satoshi je nejmenší jednotka Bitcoinu, rovna jedné stomilióntině (0.00000001 BTC).",
      pl: "Satoshi to najmniejsza jednostka Bitcoina, równa jednej stomilionowej części Bitcoina (0,00000001 BTC)."
    }
  },
  {
    id: "329",
    category: 7,
    slug: "white-paper",
    title: {
      en: "White Paper",
      cs: "White Paper",
      pl: "White Paper"
    },
    description: {
      en: "A white paper is a document that outlines the goals, technology, and roadmap of a cryptocurrency project.",
      cs: "White paper je dokument nastiňující cíle, technologii a plán kryptoměnového projektu.",
      pl: "White paper to dokument przedstawiający cele, technologię i harmonogram projektu kryptowalutowego."
    }
  },
  {
    id: "330",
    category: 7,
    slug: "dao",
    title: {
      en: "DAO (Decentralized Autonomous Organization)",
      cs: "DAO (Decentralizovaná autonomní organizace)",
      pl: "DAO (Zdecentralizowana Autonomiczna Organizacja)"
    },
    description: {
      en: "A DAO is an organization that is managed by smart contracts and governed by its members through a voting process.",
      cs: "DAO je organizace řízená chytrými kontrakty a spravovaná členy skrze hlasování.",
      pl: "DAO to organizacja zarządzana przez inteligentne kontrakty i kierowana przez członków poprzez głosowanie."
    }
  },
  {
    id: "331",
    category: 7,
    slug: "layer-1",
    title: {
      en: "Layer 1",
      cs: "Layer 1 (Vrstva 1)",
      pl: "Layer 1 (Warstwa 1)"
    },
    description: {
      en: "Layer 1 refers to the underlying blockchain architecture, such as Bitcoin or Ethereum.",
      cs: "Layer 1 označuje základní blockchainovou architekturu, jako je Bitcoin nebo Ethereum.",
      pl: "Layer 1 odnosi się do podstawowej architektury blockchaina, takiej jak Bitcoin lub Ethereum."
    }
  },
  {
    id: "332",
    category: 7,
    slug: "layer-2",
    title: {
      en: "Layer 2",
      cs: "Layer 2 (Vrstva 2)",
      pl: "Layer 2 (Warstwa 2)"
    },
    description: {
      en: "Layer 2 refers to a secondary protocol built on top of a Layer 1 blockchain to improve scalability and speed.",
      cs: "Layer 2 je sekundární protokol postavený na Layer 1 pro zlepšení škálovatelnosti a rychlosti.",
      pl: "Layer 2 to drugorzędny protokół zbudowany na blockchainie Layer 1 w celu poprawy skalowalności i szybkości."
    }
  },
  {
    id: "333",
    category: 7,
    slug: "liquidity-pool",
    title: {
      en: "Liquidity Pool",
      cs: "Likviditní pool",
      pl: "Pula płynności (Liquidity Pool)"
    },
    description: {
      en: "A liquidity pool is a collection of funds locked in a smart contract that provides liquidity for trading on a decentralized exchange.",
      cs: "Likviditní pool je sbírka prostředků v chytrém kontraktu poskytující likviditu pro DEX.",
      pl: "Pula płynności to zbiór środków zablokowanych w kontrakcie, zapewniający płynność handlu na DEX."
    }
  },
  {
    id: "334",
    category: 7,
    slug: "yield-farming",
    title: {
      en: "Yield Farming",
      cs: "Yield Farming",
      pl: "Yield Farming"
    },
    description: {
      en: "Yield farming is the process of earning rewards by providing liquidity to a DeFi protocol.",
      cs: "Yield farming je proces získávání odměn poskytováním likvidity do DeFi protokolu.",
      pl: "Yield farming to proces zdobywania nagród poprzez dostarczanie płynności do protokołu DeFi."
    }
  },
  {
    id: "335",
    category: 7,
    slug: "governance-token",
    title: {
      en: "Governance Token",
      cs: "Governanční token",
      pl: "Token zarządzania (Governance Token)"
    },
    description: {
      en: "A governance token is a cryptocurrency that gives holders the right to vote on the direction and management of a project.",
      cs: "Governanční token dává držitelům právo hlasovat o směřování a správě projektu.",
      pl: "Token zarządzania to kryptowaluta dająca posiadaczom prawo do głosowania nad kierunkiem i zarządzaniem projektem."
    }
  },
  {
    id: "336",
    category: 7,
    slug: "airdrops",
    title: {
      en: "Airdrop",
      cs: "Airdrop",
      pl: "Airdrop"
    },
    description: {
      en: "An airdrop is the distribution of free cryptocurrency tokens to a community to promote a new project.",
      cs: "Airdrop je distribuce bezplatných tokenů komunitě k propagaci nového projektu.",
      pl: "Airdrop to dystrybucja darmowych tokenów wśród społeczności w celu promocji nowego projektu."
    }
  },
  {
    id: "337",
    category: 7,
    slug: "tokenomics",
    title: {
      en: "Tokenomics",
      cs: "Tokenomika",
      pl: "Tokenomia"
    },
    description: {
      en: "Tokenomics refers to the economic model and supply mechanics of a cryptocurrency.",
      cs: "Tokenomika označuje ekonomický model a mechaniku nabídky kryptoměny.",
      pl: "Tokenomia odnosi się do modelu ekonomicznego i mechanizmów podaży kryptowaluty."
    }
  },
  {
    id: "338",
    category: 7,
    slug: "burn-mechanism",
    title: {
      en: "Burn Mechanism",
      cs: "Mechanismus pálení (Burn)",
      pl: "Mechanizm spalania (Burn)"
    },
    description: {
      en: "A burn mechanism is the process of permanently removing a portion of a cryptocurrency's supply from circulation.",
      cs: "Mechanismus pálení je proces trvalého odstranění části nabídky kryptoměny z oběhu.",
      pl: "Mechanizm spalania to proces trwałego usuwania części podaży kryptowaluty z obiegu."
    }
  },
  {
    id: "339",
    category: 7,
    slug: "oracle",
    title: {
      en: "Oracle",
      cs: "Oracle (Věštec)",
      pl: "Wyrocznia (Oracle)"
    },
    description: {
      en: "An oracle is a service that provides external data to a blockchain and its smart contracts.",
      cs: "Oracle je služba poskytující externí data blockchainu a jeho chytrým kontraktům.",
      pl: "Wyrocznia to usługa dostarczająca dane zewnętrzne do blockchaina i jego inteligentnych kontraktów."
    }
  },
  {
    id: "340",
    category: 7,
    slug: "bridging",
    title: {
      en: "Bridging",
      cs: "Přemostění (Bridging)",
      pl: "Mostkowanie (Bridging)"
    },
    description: {
      en: "Bridging is the process of transferring digital assets from one blockchain to another.",
      cs: "Bridging je proces převodu digitálních aktiv z jednoho blockchainu na druhý.",
      pl: "Mostkowanie to proces przesyłania aktywów cyfrowych z jednego blockchaina na drugi."
    }
  },
  {
    id: "341",
    category: 7,
    slug: "metamask",
    title: {
      en: "MetaMask",
      cs: "MetaMask",
      pl: "MetaMask"
    },
    description: {
      en: "MetaMask is a popular cryptocurrency wallet and browser extension used to interact with the Ethereum blockchain.",
      cs: "MetaMask je populární kryptoměnová peněženka a prohlížečové rozšíření pro síť Ethereum.",
      pl: "MetaMask to popularny portfel kryptowalutowy i rozszerzenie przeglądarki służące do interakcji z blockchainem Ethereum."
    }
  },
  {
    id: "342",
    category: 7,
    slug: "halving",
    title: {
      en: "Halving",
      cs: "Halving",
      pl: "Halving"
    },
    description: {
      en: "Halving is an event that occurs roughly every four years in Bitcoin, reducing the block reward for miners by half.",
      cs: "Halving je událost (cca každé 4 roky), kdy se odměna za vytěžený blok Bitcoinu snižuje na polovinu.",
      pl: "Halving to zdarzenie występujące co ok. 4 lata w sieci Bitcoin, zmniejszające o połowę nagrodę dla górników za blok."
    }
  },
  {
    id: "343",
    category: 7,
    slug: "total-value-locked",
    title: {
      en: "TVL (Total Value Locked)",
      cs: "TVL (Celková uzamčená hodnota)",
      pl: "TVL (Całkowita wartość zablokowana)"
    },
    description: {
      en: "TVL is a metric used to measure the total value of assets currently held in a DeFi protocol.",
      cs: "TVL je metrika měřící celkovou hodnotu aktiv aktuálně držených v DeFi protokolu.",
      pl: "TVL to wskaźnik mierzący całkowitą wartość aktywów aktualnie znajdujących się w protokole DeFi."
    }
  },
  {
    id: "344",
    category: 7,
    slug: "web3",
    title: {
      en: "Web3",
      cs: "Web3",
      pl: "Web3"
    },
    description: {
      en: "Web3 refers to the third generation of the internet, which is decentralized and powered by blockchain technology.",
      cs: "Web3 označuje třetí generaci internetu, která je decentralizovaná a poháněná blockchainem.",
      pl: "Web3 odnosi się do trzeciej generacji internetu, która jest zdecentralizowana i oparta na technologii blockchain."
    }
  },
  {
    id: "345",
    category: 7,
    slug: "wrapped-token",
    title: {
      en: "Wrapped Token",
      cs: "Wrapped Token (Zabalený token)",
      pl: "Token owinięty (Wrapped Token)"
    },
    description: {
      en: "A wrapped token is a cryptocurrency that is pegged to the value of another asset and can be used on a different blockchain.",
      cs: "Wrapped token je kryptoměna vázaná na hodnotu jiného aktiva, kterou lze použít na jiném blockchainu.",
      pl: "Token owinięty to kryptowaluta powiązana z wartością innego aktywa, która może być używana na innym blockchainie."
    }
  },
  {
    id: "346",
    category: 7,
    slug: "impermanent-loss",
    title: {
      en: "Impermanent Loss",
      cs: "Dočasná ztráta (Impermanent Loss)",
      pl: "Nietrwała strata (Impermanent Loss)"
    },
    description: {
      en: "Impermanent loss is a temporary loss of funds experienced by liquidity providers due to volatility in a liquidity pool.",
      cs: "Impermanent loss je dočasná ztráta prostředků u poskytovatelů likvidity způsobená volatilitou v poolu.",
      pl: "Nietrwała strata to tymczasowa strata środków u dostawców płynności wynikająca ze zmienności cen w puli."
    }
  },
  {
    id: "347",
    category: 7,
    slug: "rug-pull",
    title: {
      en: "Rug Pull",
      cs: "Rug Pull",
      pl: "Rug Pull"
    },
    description: {
      en: "A rug pull is a type of scam where developers abandon a project and run away with investors' funds.",
      cs: "Rug pull je typ podvodu, kdy vývojáři opustí projekt a utečou s prostředky investorů.",
      pl: "Rug pull to rodzaj oszustwa, w którym deweloperzy porzucają projekt i uciekają z funduszami inwestorów."
    }
  },
  {
    id: "348",
    category: 7,
    slug: "consensus-mechanism",
    title: {
      en: "Consensus Mechanism",
      cs: "Mechanismus konsensu",
      pl: "Mechanizm konsensusu"
    },
    description: {
      en: "A consensus mechanism is a process used by a blockchain network to agree on the state of the ledger.",
      cs: "Mechanismus konsensu je proces, kterým se blockchainová síť shoduje na stavu účetní knihy.",
      pl: "Mechanizm konsensusu to proces, za pomocą którego sieć blockchain uzgadnia stan księgi rachunkowej."
    }
  },
  {
    id: "349",
    category: 7,
    slug: "dapp",
    title: {
      en: "dApp (Decentralized Application)",
      cs: "dApp (Decentralizovaná aplikace)",
      pl: "dApp (Zdecentralizowana aplikacja)"
    },
    description: {
      en: "A dApp is a software application that runs on a decentralized network, such as a blockchain.",
      cs: "dApp je softwarová aplikace, která běží na decentralizované síti, jako je blockchain.",
      pl: "dApp to aplikacja działająca w sieci zdecentralizowanej, np. na blockchainie."
    }
  },
  {
    id: "350",
    category: 7,
    slug: "liquidity-provider",
    title: {
      en: "Liquidity Provider (LP)",
      cs: "Poskytovatel likvidity (LP)",
      pl: "Dostawca płynności (LP)"
    },
    description: {
      en: "A liquidity provider is a user who provides assets to a liquidity pool to facilitate trading on a decentralized exchange.",
      cs: "Poskytovatel likvidity je uživatel, který vkládá aktiva do poolu pro umožnění obchodování na DEX.",
      pl: "Dostawca płynności to użytkownik dostarczający aktywa do puli w celu umożliwienia handlu na DEX."
    }
  },
  {
    id: "351",
    category: 8,
    slug: "algorithmic-trading",
    title: {
      en: "Algorithmic Trading",
      cs: "Algoritmické obchodování",
      pl: "Trading algorytmiczny"
    },
    description: {
      en: "Algorithmic trading uses computer programs to execute trades at high speeds and volumes based on predefined criteria.",
      cs: "Algoritmické obchodování využívá počítačové programy k provádění obchodů na základě předem definovaných kritérií.",
      pl: "Trading algorytmiczny wykorzystuje programy komputerowe do zawierania transakcji w oparciu o predefiniowane kryteria."
    }
  },
  {
    id: "352",
    category: 8,
    slug: "arbitrage",
    title: {
      en: "Arbitrage",
      cs: "Arbitráž",
      pl: "Arbitraż"
    },
    description: {
      en: "Arbitrage is the simultaneous purchase and sale of an asset in different markets to exploit price differences.",
      cs: "Arbitráž je současný nákup a prodej aktiva na různých trzích za účelem využití cenových rozdílů.",
      pl: "Arbitraż to jednoczesny zakup i sprzedaż aktywa na różnych rynkach w celu wykorzystania różnic cenowych."
    }
  },
  {
    id: "353",
    category: 8,
    slug: "scalping",
    title: {
      en: "Scalping",
      cs: "Skalpování (Scalping)",
      pl: "Scalping"
    },
    description: {
      en: "Scalping is a trading strategy that aims to profit from small price changes by making many trades throughout the day.",
      cs: "Skalpování je strategie zaměřená na zisk z malých cenových změn prováděním mnoha obchodů během dne.",
      pl: "Scalping to strategia polegająca na osiąganiu zysków z niewielkich zmian cen poprzez zawieranie wielu transakcji w ciągu dnia."
    }
  },
  {
    id: "354",
    category: 8,
    slug: "swing-trading",
    title: {
      en: "Swing Trading",
      cs: "Swingové obchodování",
      pl: "Swing Trading"
    },
    description: {
      en: "Swing trading is a strategy that involves holding positions for several days or weeks to profit from expected price moves.",
      cs: "Swingové obchodování je strategie držení pozic po dobu několika dnů až týdnů za účelem zisku z očekávaných pohybů.",
      pl: "Swing trading to strategia polegająca na utrzymywaniu pozycji przez kilka dni lub tygodni w celu osiągnięcia zysku z oczekiwanych ruchów cen."
    }
  },
  {
    id: "355",
    category: 8,
    slug: "position-trading",
    title: {
      en: "Position Trading",
      cs: "Poziční obchodování",
      pl: "Trading pozycyjny"
    },
    description: {
      en: "Position trading is a long-term strategy where traders hold assets for months or years based on fundamental trends.",
      cs: "Poziční obchodování je dlouhodobá strategie, kdy obchodníci drží aktiva měsíce až roky na základě trendů.",
      pl: "Trading pozycyjny to strategia długoterminowa, w której inwestorzy utrzymują aktywa przez miesiące lub lata w oparciu o trendy."
    }
  },
  {
    id: "356",
    category: 8,
    slug: "high-frequency-trading",
    title: {
      en: "High-Frequency Trading (HFT)",
      cs: "Vysokofrekvenční obchodování (HFT)",
      pl: "Trading wysokich częstotliwości (HFT)"
    },
    description: {
      en: "HFT is a type of algorithmic trading characterized by high speeds, high turnover rates, and high order-to-trade ratios.",
      cs: "HFT je typ algoritmického obchodování s extrémně vysokou rychlostí a objemem příkazů.",
      pl: "HFT to rodzaj tradingu algorytmicznego charakteryzujący się ogromną szybkością i dużą liczbą zleceń."
    }
  },
  {
    id: "357",
    category: 8,
    slug: "trend-following",
    title: {
      en: "Trend Following",
      cs: "Následování trendu",
      pl: "Podążanie za trendem"
    },
    description: {
      en: "Trend following is a strategy that attempts to capture gains through the analysis of an asset's momentum in a particular direction.",
      cs: "Následování trendu je strategie snažící se zachytit zisky analýzou hybnosti aktiva v určitém směru.",
      pl: "Podążanie za trendem to strategia próbująca osiągnąć zyski poprzez analizę pędu aktywa w określonym kierunku."
    }
  },
  {
    id: "358",
    category: 8,
    slug: "mean-reversion",
    title: {
      en: "Mean Reversion",
      cs: "Návrat k průměru (Mean Reversion)",
      pl: "Powrót do średniej (Mean Reversion)"
    },
    description: {
      en: "Mean reversion is a theory that suggests asset prices and historical returns eventually return to their long-term average.",
      cs: "Mean reversion je teorie naznačující, že ceny aktiv se nakonec vrací ke svému dlouhodobému průměru.",
      pl: "Powrót do średniej to teoria sugerująca, że ceny aktywów ostatecznie wracają do swojej długoterminowej średniej."
    }
  },
  {
    id: "359",
    category: 8,
    slug: "carry-trade",
    title: {
      en: "Carry Trade",
      cs: "Carry Trade",
      pl: "Carry Trade"
    },
    description: {
      en: "A carry trade is a strategy that involves borrowing a currency at a low interest rate to invest in another with a higher rate.",
      cs: "Carry trade je strategie půjčování měny s nízkým úrokem pro investici do měny s vyšším úrokem.",
      pl: "Carry trade to strategia polegająca na pożyczaniu waluty o niskim oprocentowaniu w celu zainwestowania w walutę o wyższym oprocentowaniu."
    }
  },
  {
    id: "360",
    category: 8,
    slug: "pairs-trading",
    title: {
      en: "Pairs Trading",
      cs: "Párové obchodování",
      pl: "Handel parami (Pairs Trading)"
    },
    description: {
      en: "Pairs trading is a market-neutral strategy that involves matching a long position with a short position in two highly correlated assets.",
      cs: "Párové obchodování je tržně neutrální strategie zahrnující long pozici v jednom a short v druhém korelovaném aktivu.",
      pl: "Handel parami to strategia rynkowo neutralna, polegająca na zajęciu pozycji długiej i krótkiej w dwóch skorelowanych aktywach."
    }
  },
  {
    id: "361",
    category: 8,
    slug: "grid-trading",
    title: {
      en: "Grid Trading",
      cs: "Grid Trading (Mřížkové obchodování)",
      pl: "Grid Trading"
    },
    description: {
      en: "Grid trading is a technique where multiple buy and sell orders are placed at regular intervals above and below a set price.",
      cs: "Grid trading je technika zadávání více příkazů v pravidelných intervalech nad a pod stanovenou cenu.",
      pl: "Grid trading to technika polegająca na składaniu wielu zleceń kupna i sprzedaży w regularnych odstępach powyżej i poniżej ceny bazowej."
    }
  },
  {
    id: "362",
    category: 8,
    slug: "hedging-strategy",
    title: {
      en: "Hedging Strategy",
      cs: "Hedgingová strategie",
      pl: "Strategia hedgingowa"
    },
    description: {
      en: "A hedging strategy is used to offset potential losses in one investment by making another one.",
      cs: "Hedgingová strategie slouží ke kompenzaci potenciálních ztrát jedné investice provedením jiné.",
      pl: "Strategia hedgingowa służy do kompensowania potencjalnych strat w jednej inwestycji poprzez dokonanie innej."
    }
  },
  {
    id: "363",
    category: 8,
    slug: "automated-trading-system",
    title: {
      en: "Automated Trading System (ATS)",
      cs: "Automatizovaný obchodní systém (AOS)",
      pl: "Zautomatyzowany system transakcyjny (ATS)"
    },
    description: {
      en: "An ATS is a subset of algorithmic trading that uses a computer program to create and automatically submit orders to an exchange.",
      cs: "AOS je program pro automatické vytváření a odesílání obchodních příkazů na burzu.",
      pl: "ATS to program komputerowy służący do automatycznego tworzenia i wysyłania zleceń na giełdę."
    }
  },
  {
    id: "364",
    category: 8,
    slug: "backtesting",
    title: {
      en: "Backtesting",
      cs: "Backtesting",
      pl: "Backtesting"
    },
    description: {
      en: "Backtesting is the process of testing a trading strategy on historical data to see how it would have performed.",
      cs: "Backtesting je proces testování obchodní strategie na historických datech pro zjištění její minulé výkonnosti.",
      pl: "Backtesting to proces testowania strategii na danych historycznych w celu sprawdzenia jej potencjalnych wyników."
    }
  },
  {
    id: "365",
    category: 8,
    slug: "forward-testing",
    title: {
      en: "Forward Testing",
      cs: "Forward Testing",
      pl: "Forward Testing"
    },
    description: {
      en: "Forward testing, or paper trading, is the process of testing a strategy in real-time market conditions without using real money.",
      cs: "Forward testing je testování strategie v reálném čase bez použití skutečných peněz.",
      pl: "Forward testing to proces testowania strategii w warunkach rynkowych w czasie rzeczywistym bez użycia prawdziwych pieniędzy."
    }
  },
  {
    id: "366",
    category: 8,
    slug: "quantitative-strategy",
    title: {
      en: "Quantitative Strategy",
      cs: "Kvantitativní strategie",
      pl: "Strategia ilościowa"
    },
    description: {
      en: "A quantitative strategy uses mathematical models to identify trading opportunities based on statistical patterns.",
      cs: "Kvantitativní strategie využívá matematické modely k identifikaci příležitostí na základě statistických vzorců.",
      pl: "Strategia ilościowa wykorzystuje modele matematyczne do identyfikacji okazji na podstawie schematów statystycznych."
    }
  },
  {
    id: "367",
    category: 8,
    slug: "momentum-trading",
    title: {
      en: "Momentum Trading",
      cs: "Momentové obchodování",
      pl: "Trading momentum"
    },
    description: {
      en: "Momentum trading involves buying assets that are showing an upward price trend and selling those that are trending downward.",
      cs: "Momentové obchodování zahrnuje nákup aktiv vykazujících vzestupný trend a prodej těch v klesajícím trendu.",
      pl: "Trading momentum polega na kupowaniu aktywów wykazujących trend wzrostowy i sprzedaży tych w trendzie spadkowym."
    }
  },
  {
    id: "368",
    category: 8,
    slug: "breakout-strategy",
    title: {
      en: "Breakout Strategy",
      cs: "Strategie Breakoutu",
      pl: "Strategia wybicia (Breakout)"
    },
    description: {
      en: "A breakout strategy involves entering a trade when the price moves above a resistance level or below a support level.",
      cs: "Strategie breakoutu zahrnuje vstup do obchodu, když cena překoná rezistenci nebo podporu.",
      pl: "Strategia wybicia polega na otwarciu transakcji, gdy cena przekroczy poziom oporu lub wsparcia."
    }
  },
  {
    id: "369",
    category: 8,
    slug: "contrarian-investing",
    title: {
      en: "Contrarian Investing",
      cs: "Kontrariánské investování",
      pl: "Inwestowanie kontrariańskie"
    },
    description: {
      en: "Contrarian investing is a strategy that involves going against prevailing market trends or sentiment.",
      cs: "Kontrariánské investování je strategie jít proti převládajícím tržním trendům nebo sentimentu.",
      pl: "Inwestowanie kontrariańskie to strategia polegająca na działaniu wbrew dominującym trendom lub sentymentom rynkowym."
    }
  },
  {
    id: "370",
    category: 8,
    slug: "dark-pool",
    title: {
      en: "Dark Pool",
      cs: "Dark Pool",
      pl: "Dark Pool"
    },
    description: {
      en: "A dark pool is a private financial forum or exchange for trading securities that is not accessible to the investing public.",
      cs: "Dark pool je soukromé fórum pro obchodování s cennými papíry, které není přístupné veřejnosti.",
      pl: "Dark pool to prywatna platforma obrotu papierami wartościowymi, niedostępna dla ogółu inwestorów."
    }
  },
  {
    id: "371",
    category: 8,
    slug: "order-flow-trading",
    title: {
      en: "Order Flow Trading",
      cs: "Obchodování toku objednávek (Order Flow)",
      pl: "Trading oparty na przepływie zleceń (Order Flow)"
    },
    description: {
      en: "Order flow trading is a technique that uses the real-time flow of buy and sell orders to predict price movements.",
      cs: "Obchodování toku objednávek využívá tok příkazů v reálném čase k předpovídání pohybů cen.",
      pl: "Trading oparty na przepływie zleceń wykorzystuje bieżący napływ zleceń do przewidywania ruchów cen."
    }
  },
  {
    id: "362",
    category: 8,
    slug: "tape-reading",
    title: {
      en: "Tape Reading",
      cs: "Tape Reading (Čtení pásky)",
      pl: "Tape Reading"
    },
    description: {
      en: "Tape reading is an old-school technique of analyzing the price and volume of individual transactions to gauge market direction.",
      cs: "Tape reading je technika analýzy ceny a objemu jednotlivých transakcí pro určení směru trhu.",
      pl: "Tape reading to technika analizy ceny i wolumenu poszczególnych transakcji w celu określenia kierunku rynku."
    }
  },
  {
    id: "373",
    category: 8,
    slug: "smart-money-concepts",
    title: {
      en: "Smart Money Concepts (SMC)",
      cs: "Smart Money Concepts (SMC)",
      pl: "Smart Money Concepts (SMC)"
    },
    description: {
      en: "SMC is a trading philosophy that attempts to track the activity of institutional investors to identify high-probability setups.",
      cs: "SMC je filozofie snažící se sledovat aktivitu institucionálních investorů k identifikaci příležitostí.",
      pl: "SMC to filozofia tradingu próbująca śledzić aktywność inwestorów instytucjonalnych w celu znalezienia okazji."
    }
  },
  {
    id: "374",
    category: 8,
    slug: "liquidity-grab",
    title: {
      en: "Liquidity Grab",
      cs: "Liquidity Grab (Výběr likvidity)",
      pl: "Liquidity Grab"
    },
    description: {
      en: "A liquidity grab occurs when price moves to an area of high stop-loss clusters to 'grab' liquidity before reversing.",
      cs: "Liquidity grab nastává, když cena zamíří do oblasti stop-lossů pro 'nabrání' likvidity před otočením.",
      pl: "Liquidity grab następuje, gdy cena przemieszcza się w obszar skupienia zleceń stop-loss, aby 'pobrać' płynność przed zawróceniem."
    }
  },
  {
    id: "375",
    category: 8,
    slug: "market-making",
    title: {
      en: "Market Making",
      cs: "Market Making (Tvorba trhu)",
      pl: "Market Making"
    },
    description: {
      en: "Market making is a strategy where a trader or firm provides liquidity by simultaneously placing buy and sell orders for an asset.",
      cs: "Market making je strategie poskytování likvidity současným zadáváním nákupních a prodejních příkazů.",
      pl: "Market making to strategia dostarczania płynności poprzez jednoczesne wystawianie ofert kupna i sprzedaży aktywa."
    }
  },
  {
    id: "376",
    category: 8,
    slug: "statistical-arbitrage",
    title: {
      en: "Statistical Arbitrage",
      cs: "Statistická arbitráž",
      pl: "Arbitraż statystyczny"
    },
    description: {
      en: "Statistical arbitrage is a class of short-term financial trading strategies that employ mean reversion models involving broad portfolios of securities.",
      cs: "Statistická arbitráž je třída krátkodobých strategií využívajících modely návratu k průměru u portfolií.",
      pl: "Arbitraż statystyczny to klasa krótkoterminowych strategii wykorzystujących modele powrotu do średniej dla portfeli papierów wartościowych."
    }
  },
  {
    id: "377",
    category: 8,
    slug: "black-box-trading",
    title: {
      en: "Black-Box Trading",
      cs: "Black-Box obchodování",
      pl: "Trading typu 'czarna skrzynka' (Black-Box)"
    },
    description: {
      en: "Black-box trading refers to the use of proprietary computer programs with undisclosed logic to execute trades automatically.",
      cs: "Black-box obchodování označuje využívání programů s neveřejnou logikou k automatickému provádění obchodů.",
      pl: "Trading typu 'czarna skrzynka' to wykorzystywanie programów o niejawnej logice do automatycznego zawierania transakcji."
    }
  },
  {
    id: "378",
    category: 8,
    slug: "gray-box-trading",
    title: {
      en: "Gray-Box Trading",
      cs: "Gray-Box obchodování",
      pl: "Trading typu 'szara skrzynka' (Gray-Box)"
    },
    description: {
      en: "Gray-box trading is a system where some of the trading logic is automated, but the trader still makes the final decisions.",
      cs: "Gray-box obchodování je systém, kde je část logiky automatizovaná, ale obchodník činí finální rozhodnutí.",
      pl: "Trading typu 'szara skrzynka' to system, w którym część logiki jest zautomatyzowana, ale trader podejmuje ostateczne decyzje."
    }
  },
  {
    id: "379",
    category: 8,
    slug: "latency-arbitrage",
    title: {
      en: "Latency Arbitrage",
      cs: "Latency Arbitráž",
      pl: "Arbitraż opóźnień (Latency Arbitrage)"
    },
    description: {
      en: "Latency arbitrage is a strategy that exploits small time delays in price feeds between different exchanges.",
      cs: "Latency arbitráž je strategie využívající malé časové prodlevy v cenových feedech mezi různými burzami.",
      pl: "Arbitraż opóźnień to strategia wykorzystująca minimalne opóźnienia w przesyłaniu danych cenowych między giełdami."
    }
  },
  {
    id: "380",
    category: 8,
    slug: "liquidity-provision",
    title: {
      en: "Liquidity Provision",
      cs: "Poskytování likvidity",
      pl: "Dostarczanie płynności"
    },
    description: {
      en: "Liquidity provision is the act of acting as a market maker to ensure that buyers and sellers can trade easily.",
      cs: "Poskytování likvidity je činnost tvůrce trhu zajišťující snadné obchodování pro kupující a prodávající.",
      pl: "Dostarczanie płynności to rola animatora rynku zapewniająca kupującym i sprzedającym możliwość łatwego handlu."
    }
  },
  {
    id: "381",
    category: 8,
    slug: "machine-learning-trading",
    title: {
      en: "Machine Learning Trading",
      cs: "Obchodování s využitím strojového učení",
      pl: "Trading z wykorzystaniem uczenia maszynowego"
    },
    description: {
      en: "Machine learning trading uses artificial intelligence to identify complex patterns and improve trading outcomes over time.",
      cs: "Obchodování s využitím strojového učení využívá AI k identifikaci vzorců a zlepšování výsledků.",
      pl: "Trading z wykorzystaniem uczenia maszynowego wykorzystuje AI do identyfikacji wzorców i optymalizacji wyników."
    }
  },
  {
    id: "382",
    category: 8,
    slug: "neural-network-trading",
    title: {
      en: "Neural Network Trading",
      cs: "Obchodování s neuronovými sítěmi",
      pl: "Trading oparty na sieciach neuronowych"
    },
    description: {
      en: "Neural network trading uses computer models inspired by the human brain to predict market movements.",
      cs: "Obchodování s neuronovými sítěmi využívá modely inspirované lidským mozkem k předpovídání trhu.",
      pl: "Trading oparty na sieciach neuronowych wykorzystuje modele inspirowane ludzkim mózgiem do przewidywania ruchów rynkowych."
    }
  },
  {
    id: "383",
    category: 8,
    slug: "genetic-algorithms",
    title: {
      en: "Genetic Algorithms",
      cs: "Genetické algoritmy",
      pl: "Algorytmy genetyczne"
    },
    description: {
      en: "Genetic algorithms are used to optimize trading strategies by simulating the process of natural selection.",
      cs: "Genetické algoritmy se používají k optimalizaci strategií simulací procesu přirozeného výběru.",
      pl: "Algorytmy genetyczne służą do optymalizacji strategii poprzez symulację procesu doboru naturalnego."
    }
  },
  {
    id: "384",
    category: 8,
    slug: "portfolio-optimization",
    title: {
      en: "Portfolio Optimization",
      cs: "Optimalizace portfolia",
      pl: "Optymalizacja portfela"
    },
    description: {
      en: "Portfolio optimization is the process of selecting the best mix of assets to achieve a desired risk-return profile.",
      cs: "Optimalizace portfolia je proces výběru nejlepšího mixu aktiv pro dosažení požadovaného profilu rizika a výnosu.",
      pl: "Optymalizacja portfela to proces wyboru najlepszego zestawu aktywów w celu osiągnięcia pożądanego profilu ryzyka i zysku."
    }
  },
  {
    id: "385",
    category: 8,
    slug: "risk-parity",
    title: {
      en: "Risk Parity",
      cs: "Risk Parity",
      pl: "Risk Parity"
    },
    description: {
      en: "Risk parity is a portfolio management strategy that allocates capital based on the risk contribution of each asset class.",
      cs: "Risk parity je strategie alokace kapitálu na základě příspěvku k riziku každé třídy aktiv.",
      pl: "Risk parity to strategia zarządzania portfelem alokująca kapitał na podstawie wkładu poszczególnych aktywów w ryzyko."
    }
  },
  {
    id: "386",
    category: 8,
    slug: "smart-beta",
    title: {
      en: "Smart Beta",
      cs: "Smart Beta",
      pl: "Smart Beta"
    },
    description: {
      en: "Smart beta is an investment strategy that uses alternative index weighting schemes to improve returns and reduce risk.",
      cs: "Smart beta je strategie využívající alternativní schémata vážení indexů pro zlepšení výnosů.",
      pl: "Smart beta to strategia inwestycyjna wykorzystująca alternatywne systemy wag w indeksach dla poprawy zysków."
    }
  },
  {
    id: "387",
    category: 8,
    slug: "factor-investing",
    title: {
      en: "Factor Investing",
      cs: "Faktorové investování",
      pl: "Inwestowanie czynnikowe (Factor Investing)"
    },
    description: {
      en: "Factor investing is an approach that targets specific drivers of returns across asset classes, such as value or momentum.",
      cs: "Faktorové investování cílí na konkrétní hybatele výnosů, jako je hodnota nebo hybnost.",
      pl: "Inwestowanie czynnikowe to podejście skupiające się na konkretnych motorach zysków, takich jak wartość czy momentum."
    }
  },
  {
    id: "388",
    category: 8,
    slug: "social-trading",
    title: {
      en: "Social Trading",
      cs: "Sociální obchodování (Social Trading)",
      pl: "Social Trading"
    },
    description: {
      en: "Social trading allows investors to observe and copy the trades of experienced professionals.",
      cs: "Sociální obchodování umožňuje investorům sledovat a kopírovat obchody zkušených profesionálů.",
      pl: "Social trading umożliwia inwestorom obserwowanie i kopiowanie transakcji doświadczonych profesjonalistów."
    }
  },
  {
    id: "389",
    category: 8,
    slug: "copy-trading",
    title: {
      en: "Copy Trading",
      cs: "Kopírování obchodů (Copy Trading)",
      pl: "Copy Trading"
    },
    description: {
      en: "Copy trading is a form of social trading that automatically replicates the trades of another investor in your own account.",
      cs: "Copy trading automaticky replikuje obchody jiného investora na vašem vlastním účtu.",
      pl: "Copy trading to forma social tradingu automatycznie kopiująca transakcje innego inwestora na własnym koncie."
    }
  },
  {
    id: "390",
    category: 8,
    slug: "mirror-trading",
    title: {
      en: "Mirror Trading",
      cs: "Zrcadlové obchodování (Mirror Trading)",
      pl: "Mirror Trading"
    },
    description: {
      en: "Mirror trading is an automated trading method that mirrors specific strategies rather than individual traders.",
      cs: "Zrcadlové obchodování je automatizovaná metoda zrcadlící konkrétní strategie.",
      pl: "Mirror Trading to zautomatyzowana metoda kopiowania konkretnych strategii zamiast pojedynczych traderów."
    }
  },
  {
    id: "391",
    category: 8,
    slug: "dark-liquidity",
    title: {
      en: "Dark Liquidity",
      cs: "Temná likvidita (Dark Liquidity)",
      pl: "Ciemna płynność (Dark Liquidity)"
    },
    description: {
      en: "Dark liquidity refers to the trading volume that occurs in dark pools, hidden from the public order book.",
      cs: "Temná likvidita označuje objem obchodů v dark poolech, skrytý před veřejností.",
      pl: "Ciemna płynność to wolumen handlu odbywający się w dark poolach, ukryty przed arkuszem zleceń."
    }
  },
  {
    id: "392",
    category: 8,
    slug: "iceberg-order",
    title: {
      en: "Iceberg Order",
      cs: "Ledovcový příkaz (Iceberg Order)",
      pl: "Zlecenie typu Iceberg"
    },
    description: {
      en: "An iceberg order is a large order divided into smaller, visible portions to hide the full size of the transaction.",
      cs: "Ledovcový příkaz je velký příkaz rozdělený na menší viditelné části pro skrytí celkové velikosti.",
      pl: "Zlecenie typu Iceberg to duże zlecenie podzielone na mniejsze widoczne części w celu ukrycia jego pełnej skali."
    }
  },
  {
    id: "393",
    category: 8,
    slug: "vwap-trading",
    title: {
      en: "VWAP Trading",
      cs: "Obchodování s využitím VWAP",
      pl: "Trading z wykorzystaniem VWAP"
    },
    description: {
      en: "VWAP trading strategies use the volume-weighted average price as a benchmark for executing large orders.",
      cs: "VWAP strategie využívají objemově váženou průměrnou cenu jako měřítko pro exekuci velkých příkazů.",
      pl: "Strategie VWAP wykorzystują średnią cenę ważoną wolumenem jako punkt odniesienia przy realizacji dużych zleceń."
    }
  },
  {
    id: "394",
    category: 8,
    slug: "twap-trading",
    title: {
      en: "TWAP Trading",
      cs: "Obchodování s využitím TWAP",
      pl: "Trading z wykorzystaniem TWAP"
    },
    description: {
      en: "TWAP (Time-Weighted Average Price) strategies execute orders evenly over a specific time period to minimize market impact.",
      cs: "TWAP strategie provádějí příkazy rovnoměrně v čase pro minimalizaci dopadu na trh.",
      pl: "Strategie TWAP realizują zlecenia równomiernie w czasie, aby zminimalizować wpływ na rynek."
    }
  },
  {
    id: "395",
    category: 8,
    slug: "slippage-control",
    title: {
      en: "Slippage Control",
      cs: "Kontrola skluzu (Slippage)",
      pl: "Kontrola poślizgu cenowego (Slippage)"
    },
    description: {
      en: "Slippage control refers to the techniques used to minimize the difference between the expected and actual price of a trade.",
      cs: "Kontrola skluzu jsou techniky minimalizující rozdíl mezi očekávanou a skutečnou cenou obchodu.",
      pl: "Kontrola poślizgu to techniki minimalizujące różnicę między ceną oczekiwaną a faktyczną ceną transakcji."
    }
  },
  {
    id: "396",
    category: 8,
    slug: "execution-algorithms",
    title: {
      en: "Execution Algorithms",
      cs: "Exekuční algoritmy",
      pl: "Algorytmy egzekucji"
    },
    description: {
      en: "Execution algorithms are computer programs designed to complete large orders in the most efficient and cost-effective manner.",
      cs: "Exekuční algoritmy jsou programy pro co nejefektivnější dokončení velkých objednávek.",
      pl: "Algorytmy egzekucji to programy zaprojektowane do jak najbardziej efektywnej realizacji dużych zleceń."
    }
  },
  {
    id: "397",
    category: 8,
    slug: "direct-market-access",
    title: {
      en: "Direct Market Access (DMA)",
      cs: "Přímý přístup na trh (DMA)",
      pl: "Bezpośredni dostęp do rynku (DMA)"
    },
    description: {
      en: "DMA allows traders to interact directly with an exchange's electronic order book without going through a traditional broker's desk.",
      cs: "DMA umožňuje obchodníkům přímou interakci s knihou objednávek burzy bez prostředníka.",
      pl: "DMA umożliwia bezpośrednią interakcję z arkuszem zleceń giełdy bez pośrednictwa tradycyjnego brokera."
    }
  },
  {
    id: "398",
    category: 8,
    slug: "co-location",
    title: {
      en: "Co-location",
      cs: "Kolokace (Co-location)",
      pl: "Kolokacja"
    },
    description: {
      en: "Co-location is the practice of placing trading servers in the same data center as an exchange's servers to reduce latency.",
      cs: "Kolokace je umístění obchodních serverů do stejného centra jako burza pro snížení latence.",
      pl: "Kolokacja to umieszczenie serwerów transakcyjnych w tym samym centrum danych co giełda w celu redukcji opóźnień."
    }
  },
  {
    id: "399",
    category: 8,
    slug: "smart-order-routing",
    title: {
      en: "Smart Order Routing (SOR)",
      cs: "Chytré směrování objednávek (SOR)",
      pl: "Inteligentne przekazywanie zleceń (SOR)"
    },
    description: {
      en: "SOR is an automated process of scanning multiple markets to find the best available price for a trade.",
      cs: "SOR je automatický proces skenování více trhů pro nalezení nejlepší ceny pro obchod.",
      pl: "SOR to automatyczny proces skanowania wielu rynków w celu znalezienia najlepszej ceny dla transakcji."
    }
  },
  {
    id: "400",
    category: 8,
    slug: "systematic-trading",
    title: {
      en: "Systematic Trading",
      cs: "Systematické obchodování",
      pl: "Trading systematyczny"
    },
    description: {
      en: "Systematic trading relies on a strict set of rules and models to make trading decisions, minimizing human discretion.",
      cs: "Systematické obchodování spoléhá na přísná pravidla a modely, čímž minimalizuje lidský úsudek.",
      pl: "Trading systematyczny opiera się na ścisłym zestawie zasad i modeli, minimalizując uznaniowość tradera."
    }
  },
  {
    id: "401",
    category: 9,
    slug: "options",
    title: {
      en: "Options",
      cs: "Opce",
      pl: "Opcje"
    },
    description: {
      en: "Options are financial derivatives that give buyers the right, but not the obligation, to buy or sell an underlying asset at a specific price.",
      cs: "Opce jsou deriváty dávající kupujícímu právo, nikoli povinnost, koupit nebo prodat aktivum za určitou cenu.",
      pl: "Opcje to instrumenty pochodne dające nabywcy prawo, ale nie obowiązek, kupna lub sprzedaży aktywa po określonej cenie."
    }
  },
  {
    id: "402",
    category: 9,
    slug: "call-option",
    title: {
      en: "Call Option",
      cs: "Call opce (Kupní opce)",
      pl: "Opcja kupna (Call)"
    },
    description: {
      en: "A call option gives the holder the right to buy an underlying asset at a specified strike price within a specific time period.",
      cs: "Call opce dává držiteli právo koupit aktivum za stanovenou realizační cenu v určitém období.",
      pl: "Opcja kupna (call) daje posiadaczowi prawo do zakupu aktywa po określonej cenie wykonania w danym czasie."
    }
  },
  {
    id: "403",
    category: 9,
    slug: "put-option",
    title: {
      en: "Put Option",
      cs: "Put opce (Prodejní opce)",
      pl: "Opcja sprzedaży (Put)"
    },
    description: {
      en: "A put option gives the holder the right to sell an underlying asset at a specified strike price within a specific time period.",
      cs: "Put opce dává držiteli právo prodat aktivum za stanovenou realizační cenu v určitém období.",
      pl: "Opcja sprzedaży (put) daje posiadaczowi prawo do sprzedaży aktywa po określonej cenie wykonania w danym czasie."
    }
  },
  {
    id: "404",
    category: 9,
    slug: "strike-price",
    title: {
      en: "Strike Price",
      cs: "Realizační cena (Strike Price)",
      pl: "Cena wykonania (Strike Price)"
    },
    description: {
      en: "The strike price is the price at which the holder of an option can buy or sell the underlying asset.",
      cs: "Realizační cena je cena, za kterou může držitel opce koupit nebo prodat podkladové aktivum.",
      pl: "Cena wykonania to cena, po której posiadacz opcji może kupić lub sprzedać aktywo bazowe."
    }
  },
  {
    id: "405",
    category: 9,
    slug: "expiration-date",
    title: {
      en: "Expiration Date",
      cs: "Datum expirace",
      pl: "Data wygaśnięcia"
    },
    description: {
      en: "The expiration date is the last day that an option or futures contract is valid.",
      cs: "Datum expirace je poslední den platnosti opce nebo futures kontraktu.",
      pl: "Data wygaśnięcia to ostatni dzień ważności kontraktu opcyjnego lub futures."
    }
  },
  {
    id: "406",
    category: 9,
    slug: "premium",
    title: {
      en: "Option Premium",
      cs: "Opční prémie",
      pl: "Premia opcyjna"
    },
    description: {
      en: "The premium is the income received by the seller of an option and the cost paid by the buyer.",
      cs: "Prémie je příjem prodávajícího a náklad kupujícího opce.",
      pl: "Premia to dochód otrzymany przez sprzedającego opcję i koszt poniesiony przez kupującego."
    }
  },
  {
    id: "407",
    category: 9,
    slug: "in-the-money",
    title: {
      en: "In-the-Money (ITM)",
      cs: "In-the-Money (ITM)",
      pl: "In-the-Money (ITM)"
    },
    description: {
      en: "An option is in-the-money when it has intrinsic value, meaning the strike price is favorable compared to the current market price.",
      cs: "Opce je ITM, pokud má vnitřní hodnotu (realizační cena je výhodnější než tržní).",
      pl: "Opcja jest ITM, gdy posiada wartość wewnętrzną (cena wykonania jest korzystna w stosunku do rynkowej)."
    }
  },
  {
    id: "408",
    category: 9,
    slug: "out-of-the-money",
    title: {
      en: "Out-of-the-Money (OTM)",
      cs: "Out-of-the-Money (OTM)",
      pl: "Out-of-the-Money (OTM)"
    },
    description: {
      en: "An option is out-of-the-money when it has no intrinsic value, meaning the strike price is not favorable compared to the market price.",
      cs: "Opce je OTM, pokud nemá vnitřní hodnotu.",
      pl: "Opcja jest OTM, gdy nie posiada wartości wewnętrznej."
    }
  },
  {
    id: "409",
    category: 9,
    slug: "at-the-money",
    title: {
      en: "At-the-Money (ATM)",
      cs: "At-the-Money (ATM)",
      pl: "At-the-Money (ATM)"
    },
    description: {
      en: "An option is at-the-money when the strike price is equal to the current market price of the underlying asset.",
      cs: "Opce je ATM, když je realizační cena rovna aktuální tržní ceně aktiva.",
      pl: "Opcja jest ATM, gdy cena wykonania jest równa aktualnej cenie rynkowej aktywa bazowego."
    }
  },
  {
    id: "410",
    category: 9,
    slug: "futures-contract",
    title: {
      en: "Futures Contract",
      cs: "Futures kontrakt",
      pl: "Kontrakt futures"
    },
    description: {
      en: "A futures contract is a legal agreement to buy or sell a particular commodity asset or security at a predetermined price at a specified time in the future.",
      cs: "Futures kontrakt je dohoda o nákupu/prodeji aktiva za předem danou cenu v určitý čas v budoucnu.",
      pl: "Kontrakt futures to zobowiązanie do kupna lub sprzedaży aktywa po określonej cenie w określonym terminie w przyszłości."
    }
  },
  {
    id: "411",
    category: 9,
    slug: "forward-contract",
    title: {
      en: "Forward Contract",
      cs: "Forwardový kontrakt",
      pl: "Kontrakt forward"
    },
    description: {
      en: "A forward contract is a customized derivative contract between two parties to buy or sell an asset at a specified price on a future date.",
      cs: "Forwardový kontrakt je přizpůsobený derivát mezi dvěma stranami pro budoucí nákup/prodej za danou cenu.",
      pl: "Kontrakt forward to niestandardowy instrument pochodny między dwiema stronami na zakup lub sprzedaż aktywa w przyszłości po ustalonej cenie."
    }
  },
  {
    id: "412",
    category: 9,
    slug: "swaps",
    title: {
      en: "Swaps",
      cs: "Swapy",
      pl: "Swapy"
    },
    description: {
      en: "A swap is a derivative contract through which two parties exchange the cash flows or liabilities from two different financial instruments.",
      cs: "Swap je derivát, kterým si dvě strany vyměňují peněžní toky nebo závazky ze dvou nástrojů.",
      pl: "Swap to instrument pochodny, w którym dwie strony wymieniają się przepływami pieniężnymi lub zobowiązaniami z dwóch różnych instrumentów."
    }
  },
  {
    id: "413",
    category: 9,
    slug: "implied-volatility",
    title: {
      en: "Implied Volatility (IV)",
      cs: "Implicitní volatilita (IV)",
      pl: "Zmienność implikowana (IV)"
    },
    description: {
      en: "Implied volatility is a metric that reflects the market's expectation of a stock's potential price move.",
      cs: "Implicitní volatilita odráží očekávání trhu ohledně budoucího cenového pohybu akcie.",
      pl: "Zmienność implikowana to wskaźnik odzwierciedlający oczekiwania rynku co do przyszłych ruchów cen akcji."
    }
  },
  {
    id: "414",
    category: 9,
    slug: "delta",
    title: {
      en: "Delta",
      cs: "Delta",
      pl: "Delta"
    },
    description: {
      en: "Delta is an option Greek that measures the change in an option's price relative to a $1 change in the price of the underlying asset.",
      cs: "Delta měří změnu ceny opce vzhledem ke změně ceny podkladového aktiva o 1 jednotku.",
      pl: "Delta mierzy zmianę ceny opcji w stosunku do zmiany ceny aktywa bazowego o jedną jednostkę."
    }
  },
  {
    id: "415",
    category: 9,
    slug: "gamma",
    title: {
      en: "Gamma",
      cs: "Gamma",
      pl: "Gamma"
    },
    description: {
      en: "Gamma is an option Greek that measures the rate of change in an option's delta.",
      cs: "Gamma měří míru změny delty opce.",
      pl: "Gamma mierzy tempo zmian delty opcji."
    }
  },
  {
    id: "416",
    category: 9,
    slug: "theta",
    title: {
      en: "Theta",
      cs: "Theta",
      pl: "Theta"
    },
    description: {
      en: "Theta is an option Greek that measures the rate of time decay in an option's price.",
      cs: "Theta měří míru časového rozpadu ceny opce.",
      pl: "Theta mierzy tempo spadku wartości opcji wraz z upływem czasu (rozpad czasowy)."
    }
  },
  {
    id: "417",
    category: 9,
    slug: "vega",
    title: {
      en: "Vega",
      cs: "Vega",
      pl: "Vega"
    },
    description: {
      en: "Vega is an option Greek that measures an option's sensitivity to changes in implied volatility.",
      cs: "Vega měří citlivost opce na změny implicitní volatility.",
      pl: "Vega mierzy wrażliwość opcji na zmiany zmienności implikowanej."
    }
  },
  {
    id: "418",
    category: 9,
    slug: "rho",
    title: {
      en: "Rho",
      cs: "Rho",
      pl: "Rho"
    },
    description: {
      en: "Rho is an option Greek that measures an option's sensitivity to changes in interest rates.",
      cs: "Rho měří citlivost opce na změny úrokových sazeb.",
      pl: "Rho mierzy wrażliwość ceny opcji na zmiany stóp procentowych."
    }
  },
  {
    id: "419",
    category: 9,
    slug: "intrinsic-value-options",
    title: {
      en: "Intrinsic Value (Options)",
      cs: "Vnitřní hodnota (Opce)",
      pl: "Wartość wewnętrzna (Opcje)"
    },
    description: {
      en: "The intrinsic value of an option is the amount by which it is in-the-money.",
      cs: "Vnitřní hodnota opce je částka, o kterou je opce In-the-Money.",
      pl: "Wartość wewnętrzna opcji to kwota, o którą opcja znajduje się In-the-Money."
    }
  },
  {
    id: "420",
    category: 9,
    slug: "extrinsic-value-options",
    title: {
      en: "Extrinsic Value (Time Value)",
      cs: "Vnější hodnota (Časová hodnota)",
      pl: "Wartość zewnętrzna (Wartość czasowa)"
    },
    description: {
      en: "Extrinsic value is the difference between an option's total premium and its intrinsic value, representing the time remaining until expiration.",
      cs: "Vnější hodnota je rozdíl mezi prémií a vnitřní hodnotou, představující zbývající čas.",
      pl: "Wartość zewnętrzna to różnica między całkowitou premią a wartością wewnętrzną, reprezentująca czas do wygaśnięcia."
    }
  },
  {
    id: "421",
    category: 9,
    slug: "leverage-derivatives",
    title: {
      en: "Leverage (Derivatives)",
      cs: "Pákový efekt (Deriváty)",
      pl: "Dźwignia (Instrumenty pochodne)"
    },
    description: {
      en: "Derivatives allow traders to control a large position with a small amount of capital, amplifying both gains and losses.",
      cs: "Deriváty umožňují ovládat velkou pozici s malým kapitálem, což zesiluje zisky i ztráty.",
      pl: "Instrumenty pochodne pozwalają kontrolować dużą pozycję przy małym kapitale, potęgując zarówno zyski, jak i straty."
    }
  },
  {
    id: "422",
    category: 9,
    slug: "underlying-asset",
    title: {
      en: "Underlying Asset",
      cs: "Podkladové aktivum",
      pl: "Aktywo bazowe"
    },
    description: {
      en: "The underlying asset is the financial instrument upon which a derivative's price is based.",
      cs: "Podkladové aktivum je finanční nástroj, na kterém je založena cena derivátu.",
      pl: "Aktywo bazowe to instrument finansowy, na którym opiera się cena instrumentu pochodnego."
    }
  },
  {
    id: "423",
    category: 9,
    slug: "open-interest",
    title: {
      en: "Open Interest",
      cs: "Open Interest",
      pl: "Open Interest"
    },
    description: {
      en: "Open interest is the total number of outstanding derivative contracts that have not been settled.",
      cs: "Open interest je celkový počet nesplacených derivátových kontraktů.",
      pl: "Open interest to całkowita liczba otwartych kontraktów pochodnych, które nie zostały jeszcze rozliczone."
    }
  },
  {
    id: "424",
    category: 9,
    slug: "covered-call",
    title: {
      en: "Covered Call",
      cs: "Covered Call (Krytý výpis)",
      pl: "Covered Call (Strategia krytej opcji kupna)"
    },
    description: {
      en: "A covered call is an options strategy that involves holding a long position in an asset while selling a call option on that same asset.",
      cs: "Covered call je strategie držení aktiva a současného prodeje call opce na toto aktivum.",
      pl: "Covered call to strategia polegająca na posiadaniu aktywa i jednoczesnej sprzedaży opcji kupna na to samo aktywo."
    }
  },
  {
    id: "425",
    category: 9,
    slug: "protective-put",
    title: {
      en: "Protective Put",
      cs: "Protective Put (Ochranná put opce)",
      pl: "Protective Put (Strategia ochronnej opcji sprzedaży)"
    },
    description: {
      en: "A protective put is an options strategy that involves buying a put option to hedge against a decline in the value of an underlying asset.",
      cs: "Protective put je strategie nákupu put opce k zajištění proti poklesu hodnoty aktiva.",
      pl: "Protective put to strategia polegająca na zakupie opcji sprzedaży w celu zabezpieczenia się przed spadkiem wartości aktywa."
    }
  },
  {
    id: "426",
    category: 9,
    slug: "iron-condor",
    title: {
      en: "Iron Condor",
      cs: "Iron Condor",
      pl: "Iron Condor"
    },
    description: {
      en: "An iron condor is an options strategy that involves selling a put spread and a call spread with the same expiration date.",
      cs: "Iron Condor je opční strategie zahrnující současný prodej put spreadu a call spreadu se stejnou expirací.",
      pl: "Iron Condor to strategia opcyjna polegająca na jednoczesnej sprzedaży spreadu put i spreadu call o tej samej dacie wygaśnięcia."
    }
  },
  {
    id: "427",
    category: 9,
    slug: "straddle",
    title: {
      en: "Straddle",
      cs: "Straddle",
      pl: "Straddle"
    },
    description: {
      en: "A straddle is an options strategy that involves buying both a call and a put option with the same strike price and expiration date.",
      cs: "Straddle je nákup call i put opce se stejnou realizační cenou a expirací.",
      pl: "Straddle to strategia polegająca na kupnie opcji call i put o tej samej cenie wykonania i dacie wygaśnięcia."
    }
  },
  {
    id: "428",
    category: 9,
    slug: "strangle",
    title: {
      en: "Strangle",
      cs: "Strangle",
      pl: "Strangle"
    },
    description: {
      en: "A strangle is an options strategy that involves buying both an out-of-the-money call and an out-of-the-money put option with the same expiration date.",
      cs: "Strangle je nákup OTM call i put opce se stejnou expirací.",
      pl: "Strangle to strategia polegająca na kupnie opcji call i put typu OTM o tej samej dacie wygaśnięcia."
    }
  },
  {
    id: "429",
    category: 9,
    slug: "bull-call-spread",
    title: {
      en: "Bull Call Spread",
      cs: "Bull Call Spread",
      pl: "Bull Call Spread"
    },
    description: {
      en: "A bull call spread is an options strategy that involves buying one call option while simultaneously selling another call option with a higher strike price.",
      cs: "Bull Call Spread zahrnuje nákup call opce a současný prodej jiné call opce s vyšší realizační cenou.",
      pl: "Bull Call Spread to strategia polegająca na kupnie opcji call i jednoczesnej sprzedaży innej opcji call z wyższą ceną wykonania."
    }
  },
  {
    id: "430",
    category: 9,
    slug: "bear-put-spread",
    title: {
      en: "Bear Put Spread",
      cs: "Bear Put Spread",
      pl: "Bear Put Spread"
    },
    description: {
      en: "A bear put spread is an options strategy that involves buying one put option while simultaneously selling another put option with a lower strike price.",
      cs: "Bear Put Spread zahrnuje nákup put opce a současný prodej jiné put opce s nižší realizační cenou.",
      pl: "Bear Put Spread to strategia polegająca na kupnie opcji put i jednoczesnej sprzedaży innej opcji put z niższą ceną wykonania."
    }
  },
  {
    id: "431",
    category: 9,
    slug: "vertical-spread",
    title: {
      en: "Vertical Spread",
      cs: "Vertikální spread",
      pl: "Spread pionowy (Vertical Spread)"
    },
    description: {
      en: "A vertical spread involves buying and selling options of the same type and expiration but different strike prices.",
      cs: "Vertikální spread zahrnuje nákup a prodej opcí stejného typu a expirace, ale různých realizačních cen.",
      pl: "Spread pionowy polega na kupnie i sprzedaży opcji tego samego typu i daty wygaśnięcia, ale o różnych cenach wykonania."
    }
  },
  {
    id: "432",
    category: 9,
    slug: "horizontal-spread",
    title: {
      en: "Horizontal Spread (Calendar Spread)",
      cs: "Horizontální spread (Kalendářní spread)",
      pl: "Spread poziomy (kalendarzowy)"
    },
    description: {
      en: "A horizontal spread involves buying and selling options of the same type and strike price but different expiration dates.",
      cs: "Horizontální spread zahrnuje nákup a prodej opcí stejného typu a ceny, ale různých expirací.",
      pl: "Spread poziomy polega na kupnie i sprzedaży opcji tego samego typu i ceny wykonania, ale o różnych datach wygaśnięcia."
    }
  },
  {
    id: "433",
    category: 9,
    slug: "diagonal-spread",
    title: {
      en: "Diagonal Spread",
      cs: "Diagonální spread",
      pl: "Spread diagonalny"
    },
    description: {
      en: "A diagonal spread involves buying and selling options of the same type but with different strike prices and expiration dates.",
      cs: "Diagonální spread zahrnuje nákup a prodej opcí stejného typu, ale s různými cenami i expiracemi.",
      pl: "Spread diagonalny polega na kupnie i sprzedaży opcji tego samego typu, ale o różnych cenach wykonania i datach wygaśnięcia."
    }
  },
  {
    id: "434",
    category: 9,
    slug: "naked-option",
    title: {
      en: "Naked Option",
      cs: "Nekrytá opce (Naked)",
      pl: "Opcja naga (Naked)"
    },
    description: {
      en: "A naked option is an options position where the seller does not hold a corresponding position in the underlying asset.",
      cs: "Nekrytá opce je pozice, kde prodávající nedrží odpovídající pozici v podkladovém aktivu.",
      pl: "Opcja naga to pozycja, w której wystawca opcji nie posiada zabezpieczenia w postaci aktywa bazowego."
    }
  },
  {
    id: "435",
    category: 9,
    slug: "assignment-options",
    title: {
      en: "Assignment (Options)",
      cs: "Přiřazení (Assignment)",
      pl: "Assignment (Opcje)"
    },
    description: {
      en: "Assignment is the process by which an option seller is required to fulfill their obligation to buy or sell the underlying asset.",
      cs: "Přiřazení je proces, kdy je prodávající opce povinen splnit svůj závazek koupit/prodat aktivum.",
      pl: "Assignment to proces, w którym wystawca opcji zostaje wezwany do realizacji zobowiązania zakupu lub sprzedaży aktywa bazowego."
    }
  },
  {
    id: "436",
    category: 9,
    slug: "exercise-options",
    title: {
      en: "Exercise (Options)",
      cs: "Uplatnění (Exercise)",
      pl: "Wykonanie (Exercise)"
    },
    description: {
      en: "Exercising an option is the act of the holder using their right to buy or sell the underlying asset at the strike price.",
      cs: "Uplatnění opce je akt, kdy držitel využije svého práva koupit/prodat aktivum za realizační cenu.",
      pl: "Wykonanie opcji to skorzystanie przez posiadacza z prawa do kupna lub sprzedaży aktywa bazowego po cenie wykonania."
    }
  },
  {
    id: "437",
    category: 9,
    slug: "butterfly-spread",
    title: {
      en: "Butterfly Spread",
      cs: "Butterfly Spread",
      pl: "Butterfly Spread"
    },
    description: {
      en: "A butterfly spread is a neutral options strategy that combines bull and bear spreads with a fixed risk and capped profit.",
      cs: "Butterfly spread je neutrální strategie kombinující bull a bear spread s omezeným rizikem i ziskem.",
      pl: "Butterfly spread to neutralna strategia opcyjna łącząca spready bull i bear z ograniczonym ryzykiem i zyskiem."
    }
  },
  {
    id: "438",
    category: 9,
    slug: "credit-spread",
    title: {
      en: "Credit Spread (Options)",
      cs: "Kreditní spread (Opce)",
      pl: "Spread kredytowy (Credit Spread)"
    },
    description: {
      en: "A credit spread is an options strategy where the premium received from the sold option is greater than the premium paid for the bought option.",
      cs: "Kreditní spread je strategie, kde obdržená prémie je vyšší než zaplacená prémie.",
      pl: "Spread kredytowy to strategia, w której otrzymana premia ze sprzedaży opcji przewyższa premię zapłaconą za kupno opcji."
    }
  },
  {
    id: "439",
    category: 9,
    slug: "debit-spread",
    title: {
      en: "Debit Spread (Options)",
      cs: "Debetní spread (Opce)",
      pl: "Spread debetowy (Debit Spread)"
    },
    description: {
      en: "A debit spread is an options strategy where the premium paid for the bought option is greater than the premium received from the sold option.",
      cs: "Debetní spread je strategie, kde zaplacená prémie je vyšší než obdržená prémie.",
      pl: "Spread debetowy to strategia, w której zapłacona premia za kupno opcji przewyższa premię otrzymaną z jej sprzedaży."
    }
  },
  {
    id: "440",
    category: 9,
    slug: "binary-options",
    title: {
      en: "Binary Options",
      cs: "Binární opce",
      pl: "Opcje binarne"
    },
    description: {
      en: "Binary options are financial options where the payoff is either a fixed monetary amount or nothing at all.",
      cs: "Binární opce jsou opce, kde je výplata buď fixní částka, nebo vůbec nic.",
      pl: "Opcje binarne to instrumenty, w których wypłata jest stałą kwotą lub zerem, zależnie od wyniku."
    }
  },
  {
    id: "441",
    category: 9,
    slug: "warrant",
    title: {
      en: "Warrant",
      cs: "Warrant",
      pl: "Warrant"
    },
    description: {
      en: "A warrant is a derivative that gives the holder the right to buy the underlying stock at a fixed price directly from the issuing company.",
      cs: "Warrant je derivát dávající právo koupit akcie za fixní cenu přímo od vydávající společnosti.",
      pl: "Warrant to instrument dający prawo do zakupu akcji po ustalonej cenie bezpośrednio od emitenta."
    }
  },
  {
    id: "442",
    category: 9,
    slug: "contract-for-difference",
    title: {
      en: "CFD (Contract for Difference)",
      cs: "CFD (Kontrakt pro vyrovnání rozdílu)",
      pl: "CFD (Kontrakt na różnice kursowe)"
    },
    description: {
      en: "A CFD is a contract between a buyer and a seller that stipulates that the seller will pay the buyer the difference between the current value of an asset and its value at contract time.",
      cs: "CFD je kontrakt, kde prodávající platí kupujícímu rozdíl mezi aktuální hodnotou aktiva a hodnotou při uzavření.",
      pl: "CFD to kontrakt, w którym sprzedający płaci kupującemu różnicę między obecną ceną aktywa a ceną w chwili zawarcia umowy."
    }
  },
  {
    id: "443",
    category: 9,
    slug: "margin-call-derivatives",
    title: {
      en: "Margin Call (Derivatives)",
      cs: "Margin Call (Deriváty)",
      pl: "Margin Call (Instrumenty pochodne)"
    },
    description: {
      en: "A margin call occurs when the value of a trader's account falls below a required level, necessitating a deposit of additional funds.",
      cs: "Margin call nastává, když hodnota účtu klesne pod minimum, což vyžaduje vklad dalších prostředků.",
      pl: "Margin call następuje, gdy wartość konta spada poniżej wymaganego poziomu, wymagając dopłaty środków."
    }
  },
  {
    id: "444",
    category: 9,
    slug: "notional-value",
    title: {
      en: "Notional Value",
      cs: "Nominální hodnota",
      pl: "Wartość nominalna (Notional Value)"
    },
    description: {
      en: "Notional value is the total value of a leveraged position's underlying assets.",
      cs: "Nominální hodnota je celková hodnota podkladových aktiv pákové pozice.",
      pl: "Wartość nominalna to łączna wartość aktywów bazowych pozycji z dźwignią."
    }
  },
  {
    id: "445",
    category: 9,
    slug: "marked-to-market",
    title: {
      en: "Mark-to-Market",
      cs: "Mark-to-Market",
      pl: "Mark-to-Market"
    },
    description: {
      en: "Mark-to-market is the process of valuing assets based on their current market price at the end of each trading day.",
      cs: "Mark-to-market je proces oceňování aktiv na základě jejich aktuální tržní ceny na konci dne.",
      pl: "Mark-to-market to proces wyceny aktywów na podstawie ich bieżącej ceny rynkowej na koniec każdego dnia."
    }
  },
  {
    id: "446",
    category: 9,
    slug: "rollover-futures",
    title: {
      en: "Rollover (Futures)",
      cs: "Rollover (Futures)",
      pl: "Rollover (Kontrakty futures)"
    },
    description: {
      en: "Rollover is the process of closing a near-term futures contract and opening a new position in a longer-term contract.",
      cs: "Rollover je proces uzavření blízkého futures kontraktu a otevření nového s delší splatností.",
      pl: "Rollover to proces zamykania wygasającego kontraktu futures i otwierania nowej pozycji w kontrakcie o dłuższym terminie."
    }
  },
  {
    id: "447",
    category: 9,
    slug: "contango",
    title: {
      en: "Contango",
      cs: "Contango",
      pl: "Contango"
    },
    description: {
      en: "Contango is a market condition where the futures price of an asset is higher than the current spot price.",
      cs: "Contango je stav trhu, kdy je cena futures kontraktu vyšší než aktuální spotová cena.",
      pl: "Contango to sytuacja rynkowa, w której cena kontraktów futures jest wyższa od obecnej ceny spot."
    }
  },
  {
    id: "448",
    category: 9,
    slug: "backwardation",
    title: {
      en: "Backwardation",
      cs: "Backwardation",
      pl: "Backwardation"
    },
    description: {
      en: "Backwardation is a market condition where the futures price of an asset is lower than the current spot price.",
      cs: "Backwardation je stav trhu, kdy je cena futures kontraktu nižší než aktuální spotová cena.",
      pl: "Backwardation to sytuacja rynkowa, w której cena kontraktów futures jest niższa od obecnej ceny spot."
    }
  },
  {
    id: "449",
    category: 9,
    slug: "synthetic-position",
    title: {
      en: "Synthetic Position",
      cs: "Syntetická pozice",
      pl: "Pozycja syntetyczna"
    },
    description: {
      en: "A synthetic position is a strategy that uses options to replicate the risk and reward profile of another asset or position.",
      cs: "Syntetická pozice využívá opce k replikaci rizikového a výnosového profilu jiného aktiva.",
      pl: "Pozycja syntetyczna to strategia wykorzystująca opcje do replikacji profilu ryzyka i zysku innego aktywa."
    }
  },
  {
    id: "450",
    category: 9,
    slug: "delta-neutral",
    title: {
      en: "Delta Neutral",
      cs: "Delta Neutrální",
      pl: "Neutralność delty (Delta Neutral)"
    },
    description: {
      en: "A delta-neutral portfolio is a portfolio of options and underlying assets that is not affected by small price changes in the underlying asset.",
      cs: "Delta neutrální portfolio je portfolio opcí a aktiv, které není ovlivněno malými cenovými změnami podkladového aktiva.",
      pl: "Portfel neutralny pod względem delty to zestaw opcji i aktywów, na który nie wpływają małe zmiany ceny aktywa bazowego."
    }
  },
  {
    id: "451",
    category: 10,
    slug: "hedge-fund",
    title: {
      en: "Hedge Fund",
      cs: "Hedgeový fond",
      pl: "Fundusz hedgingowy"
    },
    description: {
      en: "A hedge fund is an investment fund that pools capital from accredited individuals and institutional investors and invests in a variety of assets.",
      cs: "Hedgeový fond je investiční fond sdružující kapitál od akreditovaných a institucionálních investorů.",
      pl: "Fundusz hedgingowy to fundusz inwestycyjny gromadzący kapitał od akredytowanych osób i inwestorów instytucjonalnych."
    }
  },
  {
    id: "452",
    category: 10,
    slug: "mutual-fund",
    title: {
      en: "Mutual Fund",
      cs: "Podílový fond",
      pl: "Fundusz inwestycyjny (Mutual Fund)"
    },
    description: {
      en: "A mutual fund is a type of investment vehicle consisting of a portfolio of stocks, bonds, or other securities.",
      cs: "Podílový fond je investiční nástroj skládající se z portfolia akcií, dluhopisů nebo jiných cenných papírů.",
      pl: "Fundusz inwestycyjny (mutual fund) to narzędzie inwestycyjne składające się z portfela akcji, obligacji lub innych papierów wartościowych."
    }
  },
  {
    id: "453",
    category: 10,
    slug: "investment-bank",
    title: {
      en: "Investment Bank",
      cs: "Investiční banka",
      pl: "Bank inwestycyjny"
    },
    description: {
      en: "An investment bank is a financial services company that acts as an intermediary in complex financial transactions.",
      cs: "Investiční banka je společnost poskytující finanční služby a působící jako prostředník v komplexních transakcích.",
      pl: "Bank inwestycyjny to instytucja finansowa działająca jako pośrednik w złożonych transakcjach finansowych."
    }
  },
  {
    id: "454",
    category: 10,
    slug: "sovereign-wealth-fund",
    title: {
      en: "Sovereign Wealth Fund (SWF)",
      cs: "Státní investiční fond (SWF)",
      pl: "Państwowy fundusz majątkowy (SWF)"
    },
    description: {
      en: "An SWF is a state-owned investment fund that consists of money generated by the government.",
      cs: "SWF je státem vlastněný investiční fond spravující prostředky generované vládou.",
      pl: "SWF to państwowy fundusz inwestycyjny zarządzający środkami wypracowanými przez państwo."
    }
  },
  {
    id: "455",
    category: 10,
    slug: "central-bank",
    title: {
      en: "Central Bank",
      cs: "Centrální banka",
      pl: "Bank centralny"
    },
    description: {
      en: "A central bank is a national bank that provides financial and banking services for its country's government and commercial banking system.",
      cs: "Centrální banka je národní banka poskytující služby pro vládu a komerční bankovní systém.",
      pl: "Bank centralny to bank narodowy świadczący usługi dla rządu i systemu bankowości komercyjnej."
    }
  },
  {
    id: "456",
    category: 10,
    slug: "pension-fund",
    title: {
      en: "Pension Fund",
      cs: "Penzijní fond",
      pl: "Fundusz emerytalny"
    },
    description: {
      en: "A pension fund is a fund that provides retirement income for employees.",
      cs: "Penzijní fond je fond poskytující důchodový příjem zaměstnancům.",
      pl: "Fundusz emerytalny to fundusz zapewniający dochód na emeryturze dla pracowników."
    }
  },
  {
    id: "457",
    category: 10,
    slug: "asset-management",
    title: {
      en: "Asset Management",
      cs: "Správa aktiv (Asset Management)",
      pl: "Zarządzanie aktywami"
    },
    description: {
      en: "Asset management is the professional management of various securities and assets to meet specified investment goals.",
      cs: "Asset management je profesionální správa cenných papírů a aktiv k dosažení investičních cílů.",
      pl: "Zarządzanie aktywami to profesjonalne administrowanie portfelem papierów wartościowych i innych aktywów."
    }
  },
  {
    id: "458",
    category: 10,
    slug: "institutional-investor",
    title: {
      en: "Institutional Investor",
      cs: "Institucionální investor",
      pl: "Inwestor instytucjonalny"
    },
    description: {
      en: "An institutional investor is a large organization, such as a bank or insurance company, that invests huge sums of money.",
      cs: "Institucionální investor je velká organizace (banka, pojišťovna), která investuje obrovské sumy peněz.",
      pl: "Inwestor instytucjonalny to duża organizacja (bank, firma ubezpieczeniowa) inwestująca znaczne sumy pieniędzy."
    }
  },
  {
    id: "459",
    category: 10,
    slug: "accredited-investor",
    title: {
      en: "Accredited Investor",
      cs: "Akreditovaný investor",
      pl: "Inwestor akredytowany"
    },
    description: {
      en: "An accredited investor is an individual or entity allowed to trade securities that may not be registered with financial authorities.",
      cs: "Akreditovaný investor je osoba nebo subjekt oprávněný obchodovat s cennými papíry, které nemusí být registrované.",
      pl: "Inwestor akredytowany to osoba lub podmiot uprawniony do handlu papierami wartościowymi nierejestrowanymi."
    }
  },
  {
    id: "460",
    category: 10,
    slug: "retail-investor",
    title: {
      en: "Retail Investor",
      cs: "Retailový (Maloobchodní) investor",
      pl: "Inwestor detaliczny"
    },
    description: {
      en: "A retail investor is an individual who purchases securities for their own personal account rather than for an organization.",
      cs: "Retailový investor je jednotlivec, který nakupuje cenné papíry pro vlastní účet, nikoli pro organizaci.",
      pl: "Inwestor detaliczny to osoba fizyczna kupująca papiery wartościowe na własny rachunek, a nie dla organizacji."
    }
  },
  {
    id: "461",
    category: 10,
    slug: "proprietary-trading",
    title: {
      en: "Proprietary Trading (Prop Trading)",
      cs: "Proprietární obchodování (Prop Trading)",
      pl: "Trading własny (Prop Trading)"
    },
    description: {
      en: "Proprietary trading occurs when a financial firm trades stocks, bonds, or other instruments with its own money.",
      cs: "Proprietární obchodování nastává, když firma obchoduje s nástroji s využitím vlastního kapitálu.",
      pl: "Trading własny ma miejsce, gdy firma finansowa handluje instrumentami za własne pieniądze."
    }
  },
  {
    id: "462",
    category: 10,
    slug: "market-maker-institutional",
    title: {
      en: "Market Maker",
      cs: "Market Maker (Tvůrce trhu)",
      pl: "Animator rynku (Market Maker)"
    },
    description: {
      en: "A market maker is an institution that provides liquidity to a market by standing ready to buy and sell securities.",
      cs: "Market maker je instituce poskytující likviditu připraveností nakupovat a prodávat cenné papíry.",
      pl: "Animator rynku to instytucja dostarczająca płynność poprzez gotowość do kupna i sprzedaży papierów wartościowych."
    }
  },
  {
    id: "463",
    category: 10,
    slug: "prime-brokerage",
    title: {
      en: "Prime Brokerage",
      cs: "Prime Brokerage",
      pl: "Prime Brokerage"
    },
    description: {
      en: "Prime brokerage is a suite of services offered by investment banks to hedge funds and other large institutional investors.",
      cs: "Prime brokerage je soubor služeb nabízených investičními bankami hedgeovým fondům a velkým investorům.",
      pl: "Prime brokerage to pakiet usług oferowanych przez banki inwestycyjne funduszom hedgingowym i dużym inwestorom."
    }
  },
  {
    id: "464",
    category: 10,
    slug: "clearing-house",
    title: {
      en: "Clearing House",
      cs: "Clearingový dům",
      pl: "Izba rozliczeniowa (Clearing House)"
    },
    description: {
      en: "A clearing house is an intermediary between buyers and sellers of financial instruments, ensuring that transactions are completed smoothly.",
      cs: "Clearingový dům je prostředník zajišťující hladké dokončení finančních transakcí.",
      pl: "Izba rozliczeniowa to pośrednik między kupującymi a sprzedającymi, dbający o prawidłowe rozliczanie transakcji."
    }
  },
  {
    id: "465",
    category: 10,
    slug: "custodian-bank",
    title: {
      en: "Custodian Bank",
      cs: "Depozitní (Kustodiální) banka",
      pl: "Bank powierniczy (Kustosz)"
    },
    description: {
      en: "A custodian bank is a specialized financial institution that holds and safeguards a customer's assets.",
      cs: "Kustodiální banka je specializovaná instituce držící a chránící majetek klientů.",
      pl: "Bank powierniczy to instytucja finansowa przechowująca i zabezpieczająca aktywa klientów."
    }
  },
  {
    id: "466",
    category: 10,
    slug: "family-office",
    title: {
      en: "Family Office",
      cs: "Family Office",
      pl: "Family Office"
    },
    description: {
      en: "A family office is a private wealth management advisory firm that serves ultra-high-net-worth individuals and families.",
      cs: "Family office je poradenská firma pro správu majetku velmi bohatých jednotlivců a rodin.",
      pl: "Family office to prywatna firma zarządzająca majątkiem najbogatszych osób i rodzin."
    }
  },
  {
    id: "467",
    category: 10,
    slug: "private-equity",
    title: {
      en: "Private Equity",
      cs: "Private Equity",
      pl: "Private Equity"
    },
    description: {
      en: "Private equity is a type of alternative investment that consists of capital that is not listed on a public exchange.",
      cs: "Private equity je typ alternativní investice do společností, které nejsou veřejně obchodované.",
      pl: "Private equity to rodzaj inwestycji alternatywnych w kapitał spółek nienotowanych na giełdzie."
    }
  },
  {
    id: "468",
    category: 10,
    slug: "venture-capital",
    title: {
      en: "Venture Capital (VC)",
      cs: "Venture Capital (Rizikový kapitál)",
      pl: "Venture Capital (VC)"
    },
    description: {
      en: "Venture capital is a form of private equity that provides funding to early-stage, high-potential start-up companies.",
      cs: "Venture capital je forma private equity poskytující financování nadějným start-upům v rané fázi.",
      pl: "Venture capital to forma private equity finansująca start-upy o wysokim potencjale wzrostu we wczesnej fazie."
    }
  },
  {
    id: "469",
    category: 10,
    slug: "global-macro-strategy",
    title: {
      en: "Global Macro Strategy",
      cs: "Global Macro strategie",
      pl: "Strategia Global Macro"
    },
    description: {
      en: "A global macro strategy is an investment strategy that bases its holdings on the overall economic and political views of various countries.",
      cs: "Global Macro strategie zakládá své pozice na celkovém ekonomickém a politickém pohledu na různé země.",
      pl: "Strategia Global Macro to podejście inwestycyjne oparte na ogólnych prognozach ekonomicznych i politycznych dla różnych krajów."
    }
  },
  {
    id: "470",
    category: 10,
    slug: "emerging-markets",
    title: {
      en: "Emerging Markets",
      cs: "Rozvíjející se trhy (Emerging Markets)",
      pl: "Rynki wschodzące"
    },
    description: {
      en: "Emerging markets are nations with some characteristics of a developed market but do not satisfy its standards.",
      cs: "Rozvíjející se trhy jsou země s některými rysy rozvinutých trhů, které však ještě nesplňují jejich standardy.",
      pl: "Rynki wschodzące to kraje o pewnych cechach rynków rozwiniętych, które jednak nie spełniają jeszcze wszystkich ich standardów."
    }
  },
  {
    id: "471",
    category: 10,
    slug: "frontier-markets",
    title: {
      en: "Frontier Markets",
      cs: "Frontier Markets (Hraniční trhy)",
      pl: "Rynki graniczne (Frontier Markets)"
    },
    description: {
      en: "Frontier markets are developing nations that are less advanced than emerging markets.",
      cs: "Frontier markets jsou rozvojové země, které jsou méně pokročilé než rozvíjející se trhy.",
      pl: "Rynki graniczne to kraje rozwijające się, mniej zaawansowane niż rynki wschodzące."
    }
  },
  {
    id: "472",
    category: 10,
    slug: "developed-markets",
    title: {
      en: "Developed Markets",
      cs: "Rozvinuté trhy",
      pl: "Rynki rozwinięte"
    },
    description: {
      en: "Developed markets are countries that have advanced economies and mature capital markets.",
      cs: "Rozvinuté trhy jsou země s vyspělou ekonomikou a zralými kapitálovými trhy.",
      pl: "Rynki rozwinięte to kraje o zaawansowanej gospodarce i dojrzałych rynkach kapitałowych."
    }
  },
  {
    id: "473",
    category: 10,
    slug: "offshore-financial-center",
    title: {
      en: "Offshore Financial Center",
      cs: "Offshore finanční centrum (Daňový ráj)",
      pl: "Centrum finansowe offshore"
    },
    description: {
      en: "An offshore financial center is a country or jurisdiction that offers financial services to non-residents on a scale that is out of proportion to its domestic economy.",
      cs: "Offshore centrum je jurisdikce nabízející finanční služby nerezidentům ve velkém měřítku.",
      pl: "Centrum finansowe offshore to jurysdykcja oferująca usługi finansowe nierezydentom na skalę przekraczającą potrzeby lokalnej gospodarki."
    }
  },
  {
    id: "474",
    category: 10,
    slug: "capital-controls",
    title: {
      en: "Capital Controls",
      cs: "Kapitálové kontroly",
      pl: "Kontrola kapitału"
    },
    description: {
      en: "Capital controls are measures taken by a government or central bank to regulate the flow of foreign capital in and out of the country.",
      cs: "Kapitálové kontroly jsou opatření regulující tok zahraničního kapitálu do a ze země.",
      pl: "Kontrola kapitału to środki podejmowane przez rządy w celu regulacji przepływu kapitału zagranicznego."
    }
  },
  {
    id: "475",
    category: 10,
    slug: "systemic-risk",
    title: {
      en: "Systemic Risk",
      cs: "Systémové riziko",
      pl: "Ryzyko systemowe"
    },
    description: {
      en: "Systemic risk is the possibility that an event at the micro level of an individual company could trigger instability or collapse an entire industry or economy.",
      cs: "Systémové riziko je možnost, že událost na mikro úrovni vyvolá zhroucení celého odvětví nebo ekonomiky.",
      pl: "Ryzyko systemowe to prawdopodobieństwo, że zdarzenie na poziomie mikro wywoła niestabilność lub upadek całej branży lub gospodarki."
    }
  },
  {
    id: "476",
    category: 10,
    slug: "sovereign-risk",
    title: {
      en: "Sovereign Risk",
      cs: "Suverénní riziko",
      pl: "Ryzyko suwerenne"
    },
    description: {
      en: "Sovereign risk is the risk that a foreign government will default on its loan obligations or fail to honor other business commitments.",
      cs: "Suverénní riziko je riziko, že cizí vláda nesplatí své dluhy nebo nedodrží obchodní závazky.",
      pl: "Ryzyko suwerenne to ryzyko, że zagraniczny rząd nie spłaci swoich zobowiązań dłużnych lub nie dotrzyma innych zobowiązań."
    }
  },
  {
    id: "477",
    category: 10,
    slug: "shadow-banking",
    title: {
      en: "Shadow Banking",
      cs: "Stínové bankovnictví",
      pl: "System bankowości cienia (Shadow Banking)"
    },
    description: {
      en: "Shadow banking refers to a system of financial intermediaries that provide services similar to traditional commercial banks but operate outside of normal banking regulations.",
      cs: "Stínové bankovnictví jsou prostředníci poskytující bankovní služby mimo běžnou regulaci.",
      pl: "Bankowość cienia to system pośredników finansowych świadczących usługi podobne do banków, ale działających poza regulacjami."
    }
  },
  {
    id: "478",
    category: 10,
    slug: "money-laundering",
    title: {
      en: "Money Laundering",
      cs: "Praní špinavých peněz",
      pl: "Pranie brudnych pieniędzy"
    },
    description: {
      en: "Money laundering is the process of making large amounts of money generated by criminal activity appear to have come from a legitimate source.",
      cs: "Praní špinavých peněz je proces legalizace výnosů z trestné činnosti.",
      pl: "Pranie brudnych pieniędzy to proces nadawania nielegalnie zdobytym funduszom pozorów legalności."
    }
  },
  {
    id: "479",
    category: 10,
    slug: "know-your-customer",
    title: {
      en: "KYC (Know Your Customer)",
      cs: "KYC (Poznej svého zákazníka)",
      pl: "KYC (Poznaj swojego klienta)"
    },
    description: {
      en: "KYC is a standard in the investment industry that ensures financial advisors have detailed information about their clients' risk tolerance, investment knowledge, and financial position.",
      cs: "KYC je standard vyžadující od poradců informace o rizikové toleranci a situaci klientů.",
      pl: "KYC to standard wymagający od instytucji finansowych posiadania szczegółowych informacji o sytuacji i profilu ryzyka klientów."
    }
  },
  {
    id: "480",
    category: 10,
    slug: "anti-money-laundering",
    title: {
      en: "AML (Anti-Money Laundering)",
      cs: "AML (Proti praní špinavých peněz)",
      pl: "AML (Przeciwdziałanie praniu brudnych pieniędzy)"
    },
    description: {
      en: "AML refers to the laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income.",
      cs: "AML jsou zákony a postupy k zabránění legalizace výnosů z trestné činnosti.",
      pl: "AML to przepisy i procedury mające na celu zapobieganie ukrywaniu nielegalnego pochodzenia środków."
    }
  },
  {
    id: "481",
    category: 10,
    slug: "financial-contagion",
    title: {
      en: "Financial Contagion",
      cs: "Finanční nákaza",
      pl: "Zarażanie finansowe (Financial Contagion)"
    },
    description: {
      en: "Financial contagion is the spread of market disturbances from one country or region to another.",
      cs: "Finanční nákaza je šíření tržních otřesů z jedné země nebo regionu do druhého.",
      pl: "Zarażanie finansowe to rozprzestrzenianie się zakłóceń rynkowych z jednego kraju lub regionu na inne."
    }
  },
  {
    id: "482",
    category: 10,
    slug: "safe-haven-asset",
    title: {
      en: "Safe-Haven Asset",
      cs: "Bezpečný přístav (Safe-Haven)",
      pl: "Aktywo typu 'bezpieczna przystań' (Safe-Haven)"
    },
    description: {
      en: "A safe-haven asset is a financial instrument that is expected to retain or increase its value during periods of market turbulence.",
      cs: "Bezpečný přístav je aktivum, u kterého se očekává udržení hodnoty během turbulencí (např. zlato).",
      pl: "Bezpieczna przystań to aktywo, które powinno zachować lub zwiększyć wartość w czasie turbulencji rynkowych."
    }
  },
  {
    id: "483",
    category: 10,
    slug: "flight-to-quality",
    title: {
      en: "Flight to Quality",
      cs: "Útěk ke kvalitě (Flight to Quality)",
      pl: "Ucieczka do jakości (Flight to Quality)"
    },
    description: {
      en: "Flight to quality is a financial phenomenon where investors sell higher-risk investments and purchase safer assets, such as gold or government bonds, during times of uncertainty.",
      cs: "Útěk ke kvalitě je jev, kdy investoři přecházejí z rizikových do bezpečných aktiv v dobách nejistoty.",
      pl: "Ucieczka do jakości to zjawisko polegające na wycofywaniu się z ryzykownych aktywów na rzecz bezpieczniejszych instrumentów."
    }
  },
  {
    id: "484",
    category: 10,
    slug: "hot-money",
    title: {
      en: "Hot Money",
      cs: "Horké peníze (Hot Money)",
      pl: "Gorący pieniądz (Hot Money)"
    },
    description: {
      en: "Hot money refers to the flow of funds between financial markets in search of the highest short-term interest rates.",
      cs: "Horké peníze označují rychlý tok kapitálu mezi trhy hledající nejvyšší krátkodobé úroky.",
      pl: "Gorący pieniądz to przepływ kapitału między rynkami w poszukiwaniu najwyższych krótkoterminowych stóp zwrotu."
    }
  },
  {
    id: "485",
    category: 10,
    slug: "carry-trade-unwind",
    title: {
      en: "Carry Trade Unwind",
      cs: "Ukončení carry tradu (Unwind)",
      pl: "Likwidacja carry trade (Unwind)"
    },
    description: {
      en: "A carry trade unwind occurs when investors quickly exit carry trade positions, often leading to significant market volatility.",
      cs: "Ukončení carry tradu nastává, když investoři naráz opouštějí tyto pozice, což vyvolává volatilitu.",
      pl: "Likwidacja carry trade następuje, gdy inwestorzy masowo wycofują się z tych pozycji, co wywołuje dużą zmienność."
    }
  },
  {
    id: "486",
    category: 10,
    slug: "moral-hazard",
    title: {
      en: "Moral Hazard",
      cs: "Morální hazard",
      pl: "Pokusa nadużycia (Moral Hazard)"
    },
    description: {
      en: "Moral hazard is a situation where one party takes on excessive risk because they know another party will bear the burden of any potential losses.",
      cs: "Morální hazard je situace, kdy jedna strana podstupuje nadměrné riziko, protože ví, že případné ztráty ponese někdo jiný.",
      pl: "Pokusa nadużycia to sytuacja, w której podmiot podejmuje nadmierne ryzyko, licząc na to, że ktoś inny przejmie koszty ewentualnych strat."
    }
  },
  {
    id: "487",
    category: 10,
    slug: "too-big-to-fail",
    title: {
      en: "Too Big to Fail",
      cs: "Příliš velký na to, aby padl (Too Big to Fail)",
      pl: "Zbyt duzi, by upaść (Too Big to Fail)"
    },
    description: {
      en: "Too big to fail is a theory that certain financial institutions are so large and interconnected that their failure would be disastrous to the greater economy, necessitating a government bailout.",
      cs: "Teorie, že některé instituce jsou tak propojené, že by jejich pád zničil ekonomiku, což vyžaduje státní pomoc.",
      pl: "Teoria, że pewne instytucje są tak duże i powiązane, że ich upadek byłby katastrofą, co wymusza pomoc państwowou."
    }
  },
  {
    id: "488",
    category: 10,
    slug: "bailout",
    title: {
      en: "Bailout",
      cs: "Bailout (Záchranná pomoc)",
      pl: "Bailout (Pomoc finansowa)"
    },
    description: {
      en: "A bailout is the act of a government or other entity providing financial support to a failing company or economy to prevent its collapse.",
      cs: "Bailout je poskytnutí finanční pomoci krachující společnosti nebo ekonomice k zabránění jejího kolapsu.",
      pl: "Bailout to udzielenie pomocy finansowej upadającej firmie lub gospodarce w celu zapobieżenia katastrofie."
    }
  },
  {
    id: "489",
    category: 10,
    slug: "bail-in",
    title: {
      en: "Bail-in",
      cs: "Bail-in",
      pl: "Bail-in"
    },
    description: {
      en: "A bail-in is a rescue mechanism where a failing bank's creditors and depositors are required to bear some of the losses to prevent a taxpayer-funded bailout.",
      cs: "Bail-in je záchranný mechanismus, kdy ztráty krachující banky nesou její věřitelé a vkladatelé.",
      pl: "Bail-in to mechanizm ratunkowy, w którym wierzyciele i depozytariusze upadającego banku ponoszą część strat."
    }
  },
  {
    id: "490",
    category: 10,
    slug: "quantitative-easing-institutional",
    title: {
      en: "Quantitative Easing (QE)",
      cs: "Kvantitativní uvolňování (QE)",
      pl: "Luzowanie ilościowe (QE)"
    },
    description: {
      en: "QE is a monetary policy where a central bank purchases large amounts of financial assets to increase the money supply and encourage lending.",
      cs: "QE je měnová politika nákupu aktiv centrální bankou pro zvýšení peněžní zásoby a podporu půjček.",
      pl: "QE to polityka pieniężna polegająca na skupie aktywów przez bank centralny w celu zwiększenia podaży pieniądza."
    }
  },
  {
    id: "491",
    category: 10,
    slug: "quantitative-tightening-institutional",
    title: {
      en: "Quantitative Tightening (QT)",
      cs: "Kvantitativní utahování (QT)",
      pl: "Zacieśnianie ilościowe (QT)"
    },
    description: {
      en: "QT is a monetary policy where a central bank reduces its balance sheet by selling or letting financial assets expire.",
      cs: "QT je politika snižování rozvahy centrální banky prodejem nebo expirací aktiv.",
      pl: "QT to polityka redukcji bilansu banku centralnego poprzez sprzedaż aktywów lub pozwolenie na ich wygaśnięcie."
    }
  },
  {
    id: "492",
    category: 10,
    slug: "negative-interest-rates",
    title: {
      en: "Negative Interest Rates",
      cs: "Záporné úrokové sazby",
      pl: "Ujemne stopy procentowe"
    },
    description: {
      en: "Negative interest rates occur when a central bank sets its target rate below zero, essentially charging commercial banks to store their excess reserves.",
      cs: "Záporné sazby nastávají, když centrální banka účtuje komerčním bankám poplatek za uložení rezerv.",
      pl: "Ujemne stopy procentowe mają miejsce, gdy bank centralny pobiera opłaty od banków komercyjnych za depozyty."
    }
  },
  {
    id: "493",
    category: 10,
    slug: "liquidity-trap",
    title: {
      en: "Liquidity Trap",
      cs: "Past na likviditu",
      pl: "Pułapka płynności"
    },
    description: {
      en: "A liquidity trap is a situation where monetary policy becomes ineffective because consumers and investors prefer to hold cash rather than invest or spend.",
      cs: "Past na likviditu je situace, kdy je měnová politika neúčinná, protože lidé preferují držení hotovosti.",
      pl: "Pułapka płynności to sytuacja, w której polityka pieniężna jest nieskuteczna, bo podmioty wolą trzymać gotówkę."
    }
  },
  {
    id: "494",
    category: 10,
    slug: "flash-crash",
    title: {
      en: "Flash Crash",
      cs: "Flash Crash (Bleskový propad)",
      pl: "Flash Crash"
    },
    description: {
      en: "A flash crash is a very rapid, deep price decline in a financial market, often triggered by algorithmic trading, followed by a quick recovery.",
      cs: "Flash crash je extrémně rychlý propad trhu (často vyvolaný algoritmy) následovaný rychlým zotavením.",
      pl: "Flash Crash to gwałtowny, głęboki spadek cen na rynku (często wywołany przez algorytmy) i szybkie odbicie."
    }
  },
  {
    id: "495",
    category: 10,
    slug: "circuit-breaker",
    title: {
      en: "Circuit Breaker",
      cs: "Jistič (Circuit Breaker)",
      pl: "Circuit Breaker (Bezpiecznik giełdowy)"
    },
    description: {
      en: "A circuit breaker is a regulatory measure that temporarily halts trading on an exchange to curb panic-selling and extreme volatility.",
      cs: "Jistič je opatření dočasně pozastavující obchodování pro zastavení paniky a extrémní volatility.",
      pl: "Circuit breaker to środek tymczasowo wstrzymujący handel na giełdzie w celu powstrzymania paniki."
    }
  },
  {
    id: "496",
    category: 10,
    slug: "front-running",
    title: {
      en: "Front-Running",
      cs: "Front-Running",
      pl: "Front-Running"
    },
    description: {
      en: "Front-running is an unethical and often illegal practice where a broker enters a trade based on advanced knowledge of a pending large order from a client.",
      cs: "Front-running je neetická praktika, kdy broker vstoupí do obchodu na základě znalosti chystaného velkého příkazu klienta.",
      pl: "Front-running to nieetyczna praktyka zawierania transakcji przez brokera przed realizacją dużego zlecenia klienta."
    }
  },
  {
    id: "497",
    category: 10,
    slug: "insider-trading",
    title: {
      en: "Insider Trading",
      cs: "Insider Trading",
      pl: "Insider Trading"
    },
    description: {
      en: "Insider trading is the illegal practice of trading on a public company's stock by individuals with access to non-public, material information.",
      cs: "Insider trading je nezákonné obchodování na základě neveřejných, významných informací.",
      pl: "Insider trading to nielegalny handel akcjami na podstawie poufnych informacji."
    }
  },
  {
    id: "498",
    category: 10,
    slug: "pump-and-dump",
    title: {
      en: "Pump and Dump",
      cs: "Pump and Dump",
      pl: "Pump and Dump"
    },
    description: {
      en: "A pump and dump is a type of fraud that involves artificially inflating the price of an asset through false or misleading statements to sell it at a profit.",
      cs: "Pump and Dump je podvod umělého navyšování ceny aktiva za účelem jeho následného prodeje se ziskem.",
      pl: "Pump and dump to oszustwo polegające na sztucznym zawyżaniu ceny aktywa w celu jego sprzedaży z zyskiem."
    }
  },
  {
    id: "499",
    category: 10,
    slug: "wash-trading",
    title: {
      en: "Wash Trading",
      cs: "Wash Trading",
      pl: "Wash Trading"
    },
    description: {
      en: "Wash trading is a form of market manipulation where an investor simultaneously buys and sells the same financial instruments to create artificial activity.",
      cs: "Wash trading je manipulace trhu současným nákupem a prodejem stejného nástroje pro vytvoření umělé aktivity.",
      pl: "Wash trading to manipulacja polegająca na jednoczesnym kupnie i sprzedaży tego samego instrumentu dla pozorowania aktywności."
    }
  },
  {
    id: "500",
    category: 10,
    slug: "market-efficiency",
    title: {
      en: "Market Efficiency",
      cs: "Tržní efektivita",
      pl: "Efektywność rynku"
    },
    description: {
      en: "Market efficiency is a theory that suggests that asset prices reflect all available information, making it impossible to consistently outperform the market.",
      cs: "Tržní efektivita je teorie, že ceny aktiv odrážejí všechny dostupné informace, což znemožňuje konzistentně překonávat trh.",
      pl: "Efektywność rynku to teoria mówiąca, że ceny aktywów odzwierciedlają wszystkie informacje, co uniemożliwia stałe osiąganie wyników lepszych od rynku."
    }
  }
];

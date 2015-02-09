var quotes = [
"A set of all sets!", //Reference to Russel's Paradox
"The favicon is a PNG!",
"Black screens save power!",
"A gramme is better than a damn!", //from Aldous Huxely's A Brave New World
"240x300 tested!",
"Lovingly cobbled using an LG G3 Vigor!",
"I'm sorry! Blame Github!",
"Variety is the spice of life!",
"Excuse me, but when is a peso worth five pence?!",
"Now worth [UNDEFINED] US dollars!", //Uninitialized variables are sometimes left as undefined.
"Internet Explorer 11 COULD be considered a modern browser!",
"Guess who?!", //This is an imperative. It should end in a period. That's the joke.
"Help, I'm stuck in a randomly-generated JavaScript phrase factory!",
"...has seen enough hentai to know where this is going!", //Reference to the "Seen Enough Hentai" meme
"Users of IE 9 and under just have to suck it up!",
"Ha ha! Hello!", // Quote from some dumb YouTube video.
"The only catch is, you can only choose one!", //Classic /r9k/ saying
"And to think, all it took was a !DOCTYPE!", //HTML5's !DOCTYPE is simply "<!DOCTYPE html>"
"I could make it XHTML if I wanted to, but XHTML's dead anyway!",
"Oceania has always been at war with Eastasia!", //From another distopian novel, 1984, by George Orwell
"But tonight, it's heavy stuff!", // Direct quote from the song "Slam" from Pendulum.
"It's people! JavaScript is made of people!", //Reference to the infamous "Soylent Green" scene
"Murdertime, funtime!", //Direct quote from Saint's Row 3
"I'm the strongest!", //Reference to Cirno from Touhou
"Work hard, die young, win valuable prizes!", //Direct quote from a monitor in Abe's Oddysee
"I'm your number one fan!",
"Subculture was cooler when it was mixed by Dieselboy and Kaos!",
"ASK ME ABOUT MY WEINAAAA", //I asked a friend if he wanted to add a quote once. Thanks Luke.
"That's what &lt;span&gt; is for!", //<a> is used for links only now.
"Exclamation point!",
"&quot;Anyway, the point is, my opinion is better.&quot; ~The wisdom of c4g!",
"They'll sew their own hands into their beds to keep them Crawlersout!", //Direct quote from the end of Crawlersout by Purity Ring
"EOL'd in Windows format!",
"PHP is easier than I expected!",
"Mmmmmmmm, gulp!", //Quote from Cheat Commandos 2 Part Episode Part 2
"Ooh, 98 SE-tan! Ooh!", //Reference to the Windows-tans and "Ooh, Mister Darcy: A Fantiction".
"Phrases generated while you wait!", //"[Something done] while you wait" is a common service-shop phrase.
"Hola chica, hago videojuegas!", //Old GG2 Forum saying, translated to Spanish.
"Imagine, if you will...!", //Common introductory phrase from The Twilight Zone
"Today is Aug. 5th, 2026!", //Quote from Ray Bradbury's "The Martian Chronicals"
"Tower of Daruga got sequels in Japan and I'm really mad about that!", //This is true! Tower of Daruga spawned a whole series of merch... but only in Japan.
"Bring us the girl, and wipe away the debt!", //ArcWords of Bioshock Infinite
"Check out the &quot;More Phrases&quot; DLC pack available for 12.11 BTC or Dogecoin!", //This is a jab at 1) DLC, and 2) Virtual Currency.
"Hey, I actually <i>liked</i> James Cameron's AVATAR!",
"Who's that man with the three piece suit?!", //Intro line to the theme song for Octodad.
"They don't pay me <i>near</i> enough to call the cops at 3 A.M. and report a tire-jacking by a walrus!",
"Look elsewhere, <a href='http://twitter.com/h00die96'>@h00die96</a>! Maybe I'm not here!",
"Quotes for the quote god! JavaScript for the JavaScript throne!"
];

document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random()*(quotes.length))];

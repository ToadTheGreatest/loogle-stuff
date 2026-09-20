let music = [new Audio("data/music.mp3"),new Audio("data/mario.mp3"),new Audio("data/band.mp3"),new Audio("data/backwards.mp3")];
const layouts = ["oops i accidentally ...","whoops i accidentally ...","what if i accidentally ...","help i accidentally ...","i accidentally ...","i ... and didn't mean to","what if i accidentally ...","i ...","oh no i ...","i ... what do i do","what would happen if i ..."];
const verbs = ["burned ...","summoned ...","built ...","threw up ...","threw away ...","ate ...","drank ...","forgot the purpose of ...","set ... on fire","broke ...","streamed a picture of ... on twitch","ate ... in one bite","ordered ... at a restaurant","had a baby with ...","threw ... at the wall","married ...","sat on ...","farted on ...","laid on ...","made a deal with ...","went to the store with ...","tripped over ...","sang a lullaby to ...","screamed at ...","swore at ...","jumped on ...","sent a birthday card to ...","asked ... if they would be my valentine","asked ... out","kissed ...","bit ...","got rid of ...","walked on ...","stepped on ...","dyed ... green","gave ... a hug","sent ... a dm on discord","killed ...","examined ...'s house","read a book to ...","told ... that i hate them","caused ... to spontaneously disappear","told the grim reaper to kill ...","stuck my finger inside ... and can't get it out","called ... a meanie","bedazzled ...","melted ...","put ... into a burrito","swallowed ...","stared at ... for too long","touched ...","sniffed ...","danced with ... at the school dance","dropped a bomb on ...","painted a picture of ... that got into the news","sang karaoke with ... stuck in my throat","read a bedtime story to ...","erased ... with a pencil","drew on ...","hired ... as a cashier at walmart","sliced ... into pieces","gave ... the flu","sprayed ... all over the room","cut ... from the soccer team","squashed ...","changed ... into ...","gave ... the rights to ...","hid ... under ...","crashed into ...","included ... and ... on my shopping list","put ... in my cereal and milk","barfed on ...","told ... to kill ...","texted a picture of ... to ...","played the official theme song of ...","let down ...","gave up ... for ...","recycled ... because it's good for the environment","sacrificed ... to the gods","squished ...","scared ... away","made eye contact with ...","made it so ... is able to defy gravity","threw a party with ...","licked ...'s toenails","spoke japanese to ...","played chess with ...","dyed ... the color of ...","smiled at ... and it smiled back","reset ... to factory settings","punched a hole in ...","put a hole in my wall and filled it with ...","slapped ...","ran over ... with my car","messed up ...","found out what ... is","voted for ... for president","put ... in the blender","knocked on ...'s door","got outnumbered by clones of ...","dropped ... off the 13th floor","drop-kicked ...","coughed up ...","called ... on the telephone","helped ... destroy the world","made a documentary about ...","returned a book about ... to the library","turned in ... for my school art project","mailed ... to ...","gave ... the deed to my house","asked ai to recreate ...","3d-printed ...","stuck ... to the wall with duct tape","coated ... with sugar","dunked ... into a bucket of water","sent ... to brazil","drew a picture of ...","sent ... to infinity and beyond","buried ... in a pile of potatoes","threw a chair at ...","yeeted ... to canada","yeeted ... to cambodia","crashed out on ...","kept ... as a pet","dressed up as ... for halloween","bought ... for $1000 off amazon","dropped ... onto my nasty basement floor"];
const nouns = ["a lemon", "a jeep", "some shampoo", "elmo", "your mom", "my grandma", "my grandpa", "walterbottle iv", "potatorat", "the ussr", "a train", "an ikea shelf", "a snake", "an hp prodesk computer", "a microsd card", "an sd card", "a camera", "an entire grand piano", "a low taper fade", "mrbeast", "abraham lincoln", "my english teacher", "walter white", "a printer", "a 3d printer", "a .zip file", "an .html file", "a .jpg file", "a .png file", "a .pdf file", "an .mp3 file", "the number 3", "coldplay", "a fortnite skin", "some v-bucks", "fortnite battle pass", "the ground", "gordon ramsay", "the white house", "a google doc", "a powerpoint presentation", "the rizzler", "spiderman", "batman", "superman", "the wall", "the ceiling", "a stick", "a stick of deodorant", "chap-stick", "the concept of time", "a squishmallow", "a marshmallow", "outer space", "central america", "the world health organization", "the atlantic ocean", "a sesame seed", "a fidget spinner", "a minecraft dirt block", "super mario", "princess zelda", "my great-great-grandmother's gravestone", "a d20", "adam sandler", "my birth certificate", "my hair", "sonic the hedgehog", "8 gigabytes of ram", "george washington", "a washing machine", "a cybertruck", "my car", "the toilet", "my past life", "a zombie", "a ghost", "an email", "baldi", "a glue stick", "the flag of germany", "the cereal aisle at whole foods", "the laughing emoji", "elvis presley", "my femur", "my boogers", "an ipad", "my front door", "steve jobs", "a fork", "a bowl of ramen", "an atom of hydrogen", "a drop of water", "the bible", "my dentist", "my tears", "my dead uncle", "the grim reaper", "a soft taco","a vegetarian cookbook","the city pulse newspaper","my bad case of fungal meningitis","the ceo of loogle","rick astley","some peanut butter","a random guy at the store","my $1000 flatscreen tv","the washington monument","the devil","the declaration of independence","the constitution","the library of babel","the english language","an oddly-shaped cookie cutter","a heart-shaped cookie cutter","a slab of butter","a bowl of mashed potatoes","my elementary school playground","my grandma's homemade waffles","some chopsticks","my friend bob","the mona lisa","a bass guitar","a super yummy strawberry smoothie","a c-sharp minor seventh flat five chord","my friend's melodica","a wild bulbasaur","the skeletal system","the respiratory system","my mucus membrane","my local starbucks","my pet rat","some mouse poop","an ai-generated picture of ...","a box of reeses puffs","a 1000-piece jigsaw puzzle of ...","a cubic inch of solid uranium","a king-sized twix bar","macdonald middle school","an optical mouse","a wireless keyboard","a copy of brunswick pro bowling for nintendo wii","a playstation 8","a time-traveler from the year 3000","a can of bbq pringles","big ben","big bird","the world","duo the owl","the grand canyon","a deck of playing cards","yoshi","myself","a postcard from ...","a cat toy","a pair of 3d glasses","dwayne the rock johnson","a battery","a tube of toothpaste","a tuba","a deer","a raccoon","my infinitecraft save file","a sussy baka","albuquerque, new mexico","my cat's hairball","my left eyelid","steve harvey","the diddlycart","my new rug","my report card","the los angeles police department","a chocolate chip muffin","the fbi","the irs","my american express gold card","the month of january","a big bowl of sauerkraut","michigan state university","mojang studios","disney world","the letter s","a brand new pair of shoes","the sahara desert","a bunch of bananas","a nickel","jake from state farm","a big potato","the corn kid","a packet of activated carbon deodorizer","a can of whipped cream that weighs approximately 4.2 kilograms","a programmable led button module","a $25 mystery box i got off ebay","a piece of red bean mochi","a buttered biscuit","a gift card scammer from india","my long-lost twin brother","a seven-segmented display","rainbow road","the limited edition super mario bros. 35th anniversary magnet","an unborn child","my mom and dad","a url","ryan trahan","the windows xp default wallpaper","a can of cat food","my instagram profile pic","a small fish","the beach","jaidenanimations","a pair of bluetooth speakers that don't work","a slug","johnny johnny","the kirby and the forgotten land - nintendo switch 2 edition + star-crossed world game (releasing august 28, 2025 exclusively for the nintendo switch 2 system)","willy wonka","a 34-year-old from new jersey","modern-day rome","a 1:1 scale replica of ...","some moldy bread","jesus christ","a 5-foot cardboard cutout of ...","the year 2000","the percent symbol","one tablespoon of milk","a slice of pizza","a blue stress ball","a pack of haribo goldbears","danny devito","my grandpa's glockenspiel"];
let a1 = [];
let a2 = [];
let a3 = [];
let a4 = [];
let a5 = [];
let f = [];
let keys = [];
let mute = false;
let secret = 0;
let logo = document.getElementById("logo");
logo.addEventListener("mouseenter",() => {
	logo.src="data/logo.gif";
});
logo.addEventListener("mouseleave",() => {
	logo.src="data/logo.png";
});
let s1 = document.createElement("p");
let s2 = document.createElement("p");
let s3 = document.createElement("p");
let s4 = document.createElement("p");
let s5 = document.createElement("p");
let date = document.createElement("h3");
let hour;
let time;
let minute;
let started = false;
function rand(x) {
	return Math.floor(Math.random() * x);
}
function nreplace(x, a) {
	let ret = x;
	for (let i = 0; ret.match(/\.\.\./) != null; i++) {
		a.push(rand(nouns.length));
		ret=ret.replace("...",nouns[a[i+3]]);
	}
	f.push(a);
	return ret;
}
function gen(a) {
	a = [];
	a.push(6);
	a.push(rand(layouts.length));
	a.push(rand(verbs.length));
	return nreplace(layouts[a[1]].replace("...",verbs[a[2]]), a);
}
let loadable = true;
function loadalert() {
	loadable = true;
	let l = prompt("Enter save code:").trim();
	new Audio("data/10.mp3").play();
	let sentence = load(l);
	if (l === null || !loadable) {
		return;
	}
	alert("Your save code translates to:\n"+sentence);
}
function start() {
	let d1 = document.createElement("div");
	let d2 = document.createElement("div");
	let d3 = document.createElement("div");
	let d4 = document.createElement("div");
	let d5 = document.createElement("div");
	d1.setAttribute("id","d1");
	d2.setAttribute("id","d2");
	d3.setAttribute("id","d3");
	d4.setAttribute("id","d4");
	d5.setAttribute("id","d5");
	music[0].loop=true;
	if (secret == 0) {
		music[0].play();
	}
	document.querySelector("button").remove();
	let title = document.createElement("h1");
	title.innerHTML="Your Search History";
	let load = document.createElement("button");
	load.setAttribute("id","reload");
	load.innerHTML = "LOAD SAVE CODE";
	load.addEventListener("click", loadalert);
	reload();
	document.body.appendChild(title);
	document.body.appendChild(date);
	document.body.appendChild(load);
	d1.appendChild(s1);
	d2.appendChild(s2);
	d3.appendChild(s3);
	d4.appendChild(s4);
	d5.appendChild(s5);
	let d1b = document.createElement("button");
	d1b.innerHTML = "SAVE";
	d1.appendChild(d1b)
	d1b.addEventListener("click", () => {
		new Audio("data/10.mp3").play();
		alert("Your save code is: "+sformat(save(f[0])));
	});
	let d2b = document.createElement("button");
	d2b.innerHTML = "SAVE";
	d2.appendChild(d2b)
	d2b.addEventListener("click", () => {
		new Audio("data/10.mp3").play();
		alert("Your save code is: "+sformat(save(f[1])));
	});
	let d3b = document.createElement("button");
	d3b.innerHTML = "SAVE";
	d3.appendChild(d3b)
	d3b.addEventListener("click", () => {
		new Audio("data/10.mp3").play();
		alert("Your save code is: "+sformat(save(f[2])));
	});
	let d4b = document.createElement("button");
	d4b.innerHTML = "SAVE";
	d4.appendChild(d4b)
	d4b.addEventListener("click", () => {
		new Audio("data/10.mp3").play();
		alert("Your save code is: "+sformat(save(f[3])));
	});
	let d5b = document.createElement("button");
	d5b.innerHTML = "SAVE";
	d5.appendChild(d5b)
	d5b.addEventListener("click", () => {
		new Audio("data/10.mp3").play();
		alert("Your save code is: "+sformat(save(f[4])));
	});
	document.body.appendChild(document.createElement("br"));
	let rbutton = document.createElement("div");
	rbutton.setAttribute("class","reload");
	rbutton.innerHTML="<img src='data/rlight.png' width='128px' class='reload'>";
	document.body.appendChild(d1);
	document.body.appendChild(d2);
	document.body.appendChild(d3);
	document.body.appendChild(d4);
	document.body.appendChild(d5);
	document.body.appendChild(rbutton);
	let dbutton = document.createElement("button");
	document.body.appendChild(dbutton);
	dbutton.setAttribute("id","dark");
	dbutton.addEventListener("click",dark);
	rbutton.addEventListener("click", () => {
		reload();
		new Audio("data/3.mp3").play();
	});
	started = true;
}
function reload() {
	let thing = new Date();
	if (thing.getHours() >= 13) {
		hour = thing.getHours()-12;
	} else {
		hour = thing.getHours();
	}
	if (thing.getHours() >= 12) {
		time = " PM";
	} else {
		time = " AM";
	}
	if (String(thing.getMinutes()).length == 1) {
		minute = "0"+thing.getMinutes();
	} else {
		minute = thing.getMinutes();
	}
	date.innerHTML="at "+(thing.getMonth()+1)+"/"+thing.getDate()+"/"+thing.getFullYear()+" "+hour+":"+minute+time;
	f = [];
	let generated = gen(a1);
	s1.innerHTML='<a href="https://google.com/search?q='+generated.replaceAll(" ","+")+'" class="result" target="_blank">'+generated+'</a>';
	generated = gen(a2);
	s2.innerHTML='<a href="https://google.com/search?q='+generated.replaceAll(" ","+")+'" class="result" target="_blank">'+generated+'</a>';
	generated = gen(a3);
	s3.innerHTML='<a href="https://google.com/search?q='+generated.replaceAll(" ","+")+'" class="result" target="_blank">'+generated+'</a>';
	generated = gen(a4);
	s4.innerHTML='<a href="https://google.com/search?q='+generated.replaceAll(" ","+")+'" class="result" target="_blank">'+generated+'</a>';
	generated = gen(a5);
	s5.innerHTML='<a href="https://google.com/search?q='+generated.replaceAll(" ","+")+'" class="result" target="_blank">'+generated+'</a>';
}
function save(a) {
	let acode = [];
	for (let i = 0; i < a.length; i++) {
		acode.push(a[i].toString(36));
	}
	return acode;
}
function sformat(a) {
	let final = ""
	a.forEach((x) => {
		if (x.length == 1) {
			final += "00"+x;
		} else if (x.length == 2) {
			final += "0"+x;
		} else {
			final += x;
		}
	});
	return final;
}
let aload = [];
function load(x) {
	let loaded = "";
	if (x == 0) {
		return "We're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinkin' of\nYou wouldn't get this from any other guy\nI just wanna tell you how I'm feeling\nGotta make you understand\nNever gonna give you up, never gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry, never gonna say goodbye\nNever gonna tell a lie and hurt you\nWe've known each other for so long\nYour heart's been aching, but you're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\nAnd if you ask me how I'm feeling\nDon't tell me you're too blind to see\nNever gonna give you up, never gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry, never gonna say goodbye\nNever gonna tell a lie and hurt you\nNever gonna give you up, never gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry, never gonna say goodbye\nNever gonna tell a lie and hurt you\nWe've known each other for so long\nYour heart's been aching, but you're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\nI just wanna tell you how I'm feeling\nGotta make you understand\nNever gonna give you up, never gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry, never gonna say goodbye\nNever gonna tell a lie and hurt you\nNever gonna give you up, never gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry, never gonna say goodbye\nNever gonna tell a lie and hurt you\nNever gonna give you up, never gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry, never gonna say goodbye\nNever gonna tell a lie and hurt you";
	}
	if (x.substring(0, 3) != "006") {
		if (!confirm("This code was saved in a different version or isn't formatted right and may not work. Do you still want to continue?")) {
			loadable = false;
			return;
		}
	}
	aload = [];
	for (let i = 0; i < x.length/3; i++) {
		aload.push(parseInt(x.substring(i*3, i*3+3), 36))
	}
	loaded += layouts[aload[1]];
	loaded = loaded.replace("...",verbs[aload[2]]);
	for (i = 3; i < aload.length; i++) {
		loaded = loaded.replace("...", nouns[aload[i]]);
	}
	return loaded;
}
function dark() {
	document.querySelectorAll("body, .reload, button, .result").forEach((x) => {
		x.classList.toggle("dark");
	});
}
setInterval(() => {
	if (started) {
		if (mute) {
			music.forEach((x) => {x.volume = 0;});
			document.getElementById("mute").innerHTML="UNMUTE MUSIC";
		} else {
			music.forEach((x) => {x.volume = 1;});
			document.getElementById("mute").innerHTML="MUTE MUSIC";
		}
		if (document.body.classList[0] == "dark") {
			document.getElementById("dark").innerHTML="DISABLE DARK MODE";
			document.getElementsByClassName("reload")[1].src="data/rdark.png";
		} else {
			document.getElementById("dark").innerHTML="ENABLE DARK MODE";
			document.getElementsByClassName("reload")[1].src="data/rlight.png";
		}
		if (secret == 1) {
			document.querySelectorAll("*").forEach((x) => {
				x.style.fontFamily="secret";
			});
		} else {
			document.querySelectorAll("*").forEach((x) => {
				x.style.fontFamily="font";
			});
		}
	}
},10);
const links = ["https://www.youtube.com/watch?v=zQEP6kzuroI","https://www.youtube.com/watch?v=0EzhcY10f_E","data/prsecret.html","data/uhssarus.html"];
const artists = ["Surasshu","Nintendo&#174;","Potatorat","Surasshu"];
function scstart(x) {
	music[secret].pause();
	secret = x;
	new Audio("data/secret.mp3").play();
	music.forEach((y) => {y.loop=true;});
	music[x].currentTime=0;
	document.getElementById("audio").href=links[x];
	document.getElementById("audio").innerHTML=artists[x];
	setTimeout(() => {
		music[x].play();
	},1500);
}
function scend(x,play) {
	secret = 0;
	document.getElementById("potatorat").classList.remove("showing");
	document.getElementById("potatorat").classList.add("hidden");
	document.querySelector("html").style.transform="rotateX(0deg)";
	new Audio("data/scend.mp3").play();
	music[x].pause();
	music[0].loop=true;
	document.getElementById("audio").href=links[0];
	document.getElementById("audio").innerHTML=artists[0];
	if (x == 2) {
		s1.innerHTML=gen(a1);
		s2.innerHTML=gen(a2);
		s3.innerHTML=gen(a3);
		s4.innerHTML=gen(a4);
		s5.innerHTML=gen(a5);
	}
	setTimeout(() => {
		if (play) {
			music[0].play();
		}
	},1500);
}
document.body.addEventListener("keyup",(x) => {
	keys.push(x.code);
	if (keys.length == 11) {
		keys.shift();
	}
	let jkeys = JSON.stringify(keys);
	if (jkeys == '["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"]') {
		keys = [];
		if (secret == 1) {
			scend(1,true);
		} else {
			scend(2,false);
			scend(3,false);
			scstart(1);
		}
	}
	if (jkeys == '["KeyP","KeyO","KeyT","KeyA","KeyT","KeyO","KeyR","KeyA","KeyT","KeyS"]') {
		keys = [];
		if (secret == 2) {
			scend(2,true);
			new Audio("data/explode.mp3").play();
		} else {
			scend(1,false);
			scend(3,false);
			scstart(2);
			s1.innerHTML="POTATORAT REIGNS SUPREME";
			s2.innerHTML="POTATORAT REIGNS SUPREME";
			s3.innerHTML="POTATORAT REIGNS SUPREME";
			s4.innerHTML="POTATORAT REIGNS SUPREME";
			s5.innerHTML="POTATORAT REIGNS SUPREME";
			setTimeout(() => {
				document.getElementById("potatorat").classList.add("showing");
				document.getElementById("potatorat").classList.remove("hidden");
				new Audio("data/splat.mp3").play();
			},2000);
		}
	}
	if (jkeys == '["KeyG","KeyO","KeyO","KeyG","KeyL","KeyE","Period","KeyC","KeyO","KeyM"]' || jkeys == '["KeyG","KeyO","KeyO","KeyG","KeyL","KeyE","NumpadDecimal","KeyC","KeyO","KeyM"]') {
		document.querySelectorAll(":not(link, script, body, title, html, head)").forEach((x) => {
				x.remove();
		});
		let google = document.createElement("h1");
		google.innerHTML="You want to go to Google so bad, huh? Well, why don't we just send you there, where you belong, you traitor! 5... 4... 3... 2... 1...";
		google.classList.add("google");
		document.body.appendChild(google);
		music.forEach((x) => {
				x.pause();
		});
		new Audio("data/11.mp3").play();
		setInterval(() => {
				new Audio("data/beep.mp3").play();
		},1000);
		setTimeout(() => {
			location.href="https://www.google.com";
		},5000);
	}
	if (jkeys == '["KeyU","KeyP","KeyS","KeyI","KeyD","KeyE","KeyD","KeyO","KeyW","KeyN"]') {
		keys = [];
		if (secret == 3) {
			scend(3,true);
		} else {
			scend(1,false);
			scend(2,false);
			scstart(3);
			document.querySelector("html").style.transform="rotateX(180deg)";
		}
	}
});

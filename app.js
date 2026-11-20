const games = [
  {name:"Prince of Persia: The Sands of Time",year:2003,genre:"action",label:"مغامرات",era:"classic",color:"linear-gradient(135deg,#9b6a34,#302b42)",desc:"مغامرة وألغاز ومنصات في عالم مستوحى من الأساطير الفارسية. مثال كلاسيكي على ألعاب الكمبيوتر.",search:"Prince of Persia official"},
  {name:"Need for Speed: Most Wanted",year:2005,genre:"racing",label:"سباقات",era:"classic",color:"linear-gradient(135deg,#e36a24,#17253b)",desc:"واحدة من أشهر ألعاب سباقات الشوارع، وتشتهر بالمطاردات وقائمة Blacklist.",search:"Need for Speed Most Wanted official"},
  {name:"FIFA 06",year:2005,genre:"football",label:"كرة قدم",era:"classic",color:"linear-gradient(135deg,#175a75,#101a32)",desc:"إصدار قديم من سلسلة FIFA، مناسب لمحبي استعادة ذكريات ألعاب الكرة الكلاسيكية.",search:"EA Sports FIFA 06"},
  {name:"Counter-Strike 1.6",year:2003,genre:"action",label:"تصويب",era:"classic",color:"linear-gradient(135deg,#6b7040,#252b29)",desc:"لعبة تصويب جماعية كلاسيكية تركت بصمة كبيرة في تاريخ ألعاب الكمبيوتر.",search:"Counter-Strike Steam"},
  {name:"Age of Empires II",year:1999,genre:"strategy",label:"استراتيجية",era:"classic",color:"linear-gradient(135deg,#94713a,#252b40)",desc:"ابنِ حضارتك وأدر الموارد وخض معارك تاريخية في واحدة من أشهر ألعاب الاستراتيجية.",search:"Age of Empires II Definitive Edition"},
  {name:"GTA: San Andreas",year:2004,genre:"action",label:"عالم مفتوح",era:"classic",color:"linear-gradient(135deg,#b18b39,#324d42)",desc:"عالم مفتوح واسع وشخصيات ومهام أصبحت جزءًا من ذاكرة أجيال من اللاعبين.",search:"Grand Theft Auto San Andreas official"},
  {name:"PES 6",year:2006,genre:"football",label:"كرة قدم",era:"classic",color:"linear-gradient(135deg,#174d8a,#111b36)",desc:"إصدار أسطوري عند كثير من محبي Pro Evolution Soccer، واشتهر بسرعة اللعب والتحكم.",search:"Pro Evolution Soccer 6"},
  {name:"Call of Duty 4: Modern Warfare",year:2007,genre:"action",label:"تصويب",era:"classic",color:"linear-gradient(135deg,#65766b,#1d2830)",desc:"جزء مؤثر في ألعاب التصويب الحديثة، بحملة فردية وأطوار جماعية.",search:"Call of Duty Modern Warfare official"},
  {name:"Minecraft",year:2011,genre:"action",label:"بناء وبقاء",era:"2010s",color:"linear-gradient(135deg,#52834b,#263d39)",desc:"عالم مفتوح يتيح البناء والاستكشاف والإبداع واللعب الفردي أو الجماعي.",search:"Minecraft official"},
  {name:"The Witcher 3: Wild Hunt",year:2015,genre:"action",label:"RPG",era:"2010s",color:"linear-gradient(135deg,#9c4b3d,#1a2338)",desc:"لعبة تقمص أدوار بعالم غني وقصة متفرعة ومهام جانبية كثيرة.",search:"The Witcher 3 official"},
  {name:"Rocket League",year:2015,genre:"football",label:"كرة قدم سيارات",era:"2010s",color:"linear-gradient(135deg,#1686b7,#27235a)",desc:"مزيج سريع وممتع بين كرة القدم والسيارات، وتتوفر مجانًا على منصات مدعومة.",search:"Rocket League official"},
  {name:"Forza Horizon 5",year:2021,genre:"racing",label:"سباقات",era:"modern",color:"linear-gradient(135deg,#dc7846,#236b76)",desc:"سباقات في عالم مفتوح مستوحى من المكسيك مع سيارات وفعاليات متنوعة.",search:"Forza Horizon 5 official"},
  {name:"Baldur's Gate 3",year:2023,genre:"strategy",label:"RPG",era:"modern",color:"linear-gradient(135deg,#7650a5,#25233b)",desc:"لعبة تقمص أدوار تكتيكية تعتمد على الاختيارات والتعاون والاستكشاف.",search:"Baldur's Gate 3 official"},
  {name:"Cyberpunk 2077",year:2020,genre:"action",label:"عالم مفتوح",era:"modern",color:"linear-gradient(135deg,#d9bb35,#503a60)",desc:"لعبة عالم مفتوح في مدينة مستقبلية، مع قصة وشخصيات وأنظمة لعب متعددة.",search:"Cyberpunk 2077 official"},
  {name:"EA SPORTS FC 26",year:2025,genre:"football",label:"كرة قدم",era:"modern",color:"linear-gradient(135deg,#36a77e,#172c3b)",desc:"أحدث إصدار سنوي متاح في سلسلة EA SPORTS FC وفق بيانات هذا المشروع.",search:"EA SPORTS FC 26 official"}
];
const football = [
  {year:2006,fifa:"FIFA 06",pes:"PES 6"},{year:2007,fifa:"FIFA 07",pes:"PES 2008"},
  {year:2008,fifa:"FIFA 08",pes:"PES 2009"},{year:2009,fifa:"FIFA 10",pes:"PES 2010"},
  {year:2010,fifa:"FIFA 11",pes:"PES 2011"},{year:2011,fifa:"FIFA 12",pes:"PES 2012"},
  {year:2012,fifa:"FIFA 13",pes:"PES 2013"},{year:2013,fifa:"FIFA 14",pes:"PES 2014"},
  {year:2014,fifa:"FIFA 15",pes:"PES 2015"},{year:2015,fifa:"FIFA 16",pes:"PES 2016"},
  {year:2016,fifa:"FIFA 17",pes:"PES 2017"},{year:2017,fifa:"FIFA 18",pes:"PES 2018"},
  {year:2018,fifa:"FIFA 19",pes:"PES 2019"},{year:2019,fifa:"FIFA 20",pes:"eFootball PES 2020"},
  {year:2020,fifa:"FIFA 21",pes:"eFootball PES 2021"},{year:2021,fifa:"FIFA 22",pes:"eFootball"},
  {year:2022,fifa:"FIFA 23",pes:"eFootball"},{year:2023,fifa:"EA SPORTS FC 24",pes:"eFootball"},
  {year:2024,fifa:"EA SPORTS FC 25",pes:"eFootball"},{year:2025,fifa:"EA SPORTS FC 26",pes:"eFootball"}
];
const grid=document.getElementById("gameGrid"), footballGrid=document.getElementById("footballGrid");
const searchInput=document.getElementById("searchInput"), eraFilter=document.getElementById("eraFilter"), genreFilter=document.getElementById("genreFilter");
let quick="all", series="all";
document.getElementById("gameCount").textContent=football.length*2;
document.getElementById("year").textContent=new Date().getFullYear();
function renderGames(){
 const q=searchInput.value.trim().toLowerCase(), era=eraFilter.value, genre=genreFilter.value;
 const list=games.filter(g=>(!q||g.name.toLowerCase().includes(q)||g.label.includes(q))&&(era==="all"||g.era===era)&&(genre==="all"||g.genre===genre)&&(quick==="all"||g.genre===quick));
 grid.innerHTML=list.map((g,i)=>`<article class="game-card" tabindex="0" role="button" data-index="${games.indexOf(g)}" aria-label="تفاصيل ${g.name}"><div class="game-art" style="--art:${g.color}"><span class="art-year">${g.year}</span><span class="art-title">${g.name.replaceAll("&","&amp;")}</span></div><div class="card-info"><h3>${g.name}</h3><p>${g.year} · ${g.label}</p><div class="card-bottom"><span class="tag">${g.era==="classic"?"كلاسيكية":g.era==="2010s"?"2010s":"حديثة"}</span><span class="details-link">التفاصيل ←</span></div></div></article>`).join("");
 document.getElementById("emptyState").hidden=list.length>0;
}
function renderFootball(){
 let rows=football.flatMap(row=>[{year:row.year,name:row.fifa,series:"fifa",label:"FIFA / EA SPORTS FC"},{year:row.year,name:row.pes,series:"pes",label:"PES / eFootball"}]).filter(x=>series==="all"||x.series===series);
 footballGrid.innerHTML=rows.map(x=>`<article class="football-card"><span class="year">${x.year}</span><div class="series">${x.label}</div><h3>${x.name}</h3><p>${x.series==="fifa"?"سلسلة FIFA / EA SPORTS FC":"سلسلة PES / eFootball"}</p></article>`).join("");
}
function openGame(g){
 document.getElementById("modalTitle").textContent=g.name;
 document.getElementById("modalDescription").textContent=g.desc;
 document.getElementById("modalEyebrow").textContent=`${g.year} · ${g.label}`;
 document.getElementById("modalMeta").innerHTML=`<span>سنة الإصدار: ${g.year}</span><span>التصنيف: ${g.label}</span><span>المنصة: PC</span>`;
 const cover=document.getElementById("modalCover");cover.style.background=g.color;cover.innerHTML=`<span class="art-title">${g.name}</span>`;
 document.getElementById("officialLink").href="https://www.google.com/search?q="+encodeURIComponent(g.search);
 document.getElementById("modalBackdrop").hidden=false;document.body.style.overflow="hidden";
}
function closeModal(){document.getElementById("modalBackdrop").hidden=true;document.body.style.overflow="";}
grid.addEventListener("click",e=>{const card=e.target.closest(".game-card");if(card)openGame(games[Number(card.dataset.index)])});
grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("game-card")){e.preventDefault();openGame(games[Number(e.target.dataset.index)])}});
searchInput.addEventListener("input",renderGames);eraFilter.addEventListener("change",renderGames);genreFilter.addEventListener("change",()=>{quick="all";document.querySelectorAll(".filter-pill").forEach(b=>b.classList.toggle("active",b.dataset.quick==="all"));renderGames()});
document.getElementById("quickFilters").addEventListener("click",e=>{const b=e.target.closest("[data-quick]");if(!b)return;quick=b.dataset.quick;genreFilter.value="all";document.querySelectorAll(".filter-pill").forEach(x=>x.classList.toggle("active",x===b));renderGames()});
document.querySelector(".football-tabs").addEventListener("click",e=>{const b=e.target.closest("[data-series]");if(!b)return;series=b.dataset.series;document.querySelectorAll(".series-tab").forEach(x=>x.classList.toggle("active",x===b));renderFootball()});
document.getElementById("modalClose").addEventListener("click",closeModal);document.getElementById("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".topbar nav").classList.toggle("open"));
renderGames();renderFootball();

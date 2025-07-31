var aryIanaTimeZones = [
  'Europe/Andorra',
  'Asia/Dubai',
  'Asia/Kabul',
  'Europe/Tirane',
  'Asia/Yerevan',
  'Antarctica/Casey',
  'Antarctica/Davis',
  'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  'Antarctica/Mawson',
  'Antarctica/Palmer',
  'Antarctica/Rothera',
  'Antarctica/Syowa',
  'Antarctica/Troll',
  'Antarctica/Vostok',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Cordoba',
  'America/Argentina/Salta',
  'America/Argentina/Jujuy',
  'America/Argentina/Tucuman',
  'America/Argentina/Catamarca',
  'America/Argentina/La_Rioja',
  'America/Argentina/San_Juan',
  'America/Argentina/Mendoza',
  'America/Argentina/San_Luis',
  'America/Argentina/Rio_Gallegos',
  'America/Argentina/Ushuaia',
  'Pacific/Pago_Pago',
  'Europe/Vienna',
  'Australia/Lord_Howe',
  'Antarctica/Macquarie',
  'Australia/Hobart',
  'Australia/Currie',
  'Australia/Melbourne',
  'Australia/Sydney',
  'Australia/Broken_Hill',
  'Australia/Brisbane',
  'Australia/Lindeman',
  'Australia/Adelaide',
  'Australia/Darwin',
  'Australia/Perth',
  'Australia/Eucla',
  'Asia/Baku',
  'America/Barbados',
  'Asia/Dhaka',
  'Europe/Brussels',
  'Europe/Sofia',
  'Atlantic/Bermuda',
  'Asia/Brunei',
  'America/La_Paz',
  'America/Noronha',
  'America/Belem',
  'America/Fortaleza',
  'America/Recife',
  'America/Araguaina',
  'America/Maceio',
  'America/Bahia',
  'America/Sao_Paulo',
  'America/Campo_Grande',
  'America/Cuiaba',
  'America/Santarem',
  'America/Porto_Velho',
  'America/Boa_Vista',
  'America/Manaus',
  'America/Eirunepe',
  'America/Rio_Branco',
  'America/Nassau',
  'Asia/Thimphu',
  'Europe/Minsk',
  'America/Belize',
  'America/St_Johns',
  'America/Halifax',
  'America/Glace_Bay',
  'America/Moncton',
  'America/Goose_Bay',
  'America/Blanc-Sablon',
  'America/Toronto',
  'America/Nipigon',
  'America/Thunder_Bay',
  'America/Iqaluit',
  'America/Pangnirtung',
  'America/Atikokan',
  'America/Winnipeg',
  'America/Rainy_River',
  'America/Resolute',
  'America/Rankin_Inlet',
  'America/Regina',
  'America/Swift_Current',
  'America/Edmonton',
  'America/Cambridge_Bay',
  'America/Yellowknife',
  'America/Inuvik',
  'America/Creston',
  'America/Dawson_Creek',
  'America/Fort_Nelson',
  'America/Vancouver',
  'America/Whitehorse',
  'America/Dawson',
  'Indian/Cocos',
  'Europe/Zurich',
  'Africa/Abidjan',
  'Pacific/Rarotonga',
  'America/Santiago',
  'America/Punta_Arenas',
  'Pacific/Easter',
  'Asia/Shanghai',
  'Asia/Urumqi',
  'America/Bogota',
  'America/Costa_Rica',
  'America/Havana',
  'Atlantic/Cape_Verde',
  'America/Curacao',
  'Indian/Christmas',
  'Asia/Nicosia',
  'Asia/Famagusta',
  'Europe/Prague',
  'Europe/Berlin',
  'Europe/Copenhagen',
  'America/Santo_Domingo',
  'Africa/Algiers',
  'America/Guayaquil',
  'Pacific/Galapagos',
  'Europe/Tallinn',
  'Africa/Cairo',
  'Africa/El_Aaiun',
  'Europe/Madrid',
  'Africa/Ceuta',
  'Atlantic/Canary',
  'Europe/Helsinki',
  'Pacific/Fiji',
  'Atlantic/Stanley',
  'Pacific/Chuuk',
  'Pacific/Pohnpei',
  'Pacific/Kosrae',
  'Atlantic/Faroe',
  'Europe/Paris',
  'Europe/London',
  'Asia/Tbilisi',
  'America/Cayenne',
  'Africa/Accra',
  'Europe/Gibraltar',
  'America/Godthab',
  'America/Danmarkshavn',
  'America/Scoresbysund',
  'America/Thule',
  'Europe/Athens',
  'Atlantic/South_Georgia',
  'America/Guatemala',
  'Pacific/Guam',
  'Africa/Bissau',
  'America/Guyana',
  'Asia/Hong_Kong',
  'America/Tegucigalpa',
  'America/Port-au-Prince',
  'Europe/Budapest',
  'Asia/Jakarta',
  'Asia/Pontianak',
  'Asia/Makassar',
  'Asia/Jayapura',
  'Europe/Dublin',
  'Asia/Jerusalem',
  'Asia/Kolkata',
  'Indian/Chagos',
  'Asia/Baghdad',
  'Asia/Tehran',
  'Atlantic/Reykjavik',
  'Europe/Rome',
  'America/Jamaica',
  'Asia/Amman',
  'Asia/Tokyo',
  'Africa/Nairobi',
  'Asia/Bishkek',
  'Pacific/Tarawa',
  'Pacific/Enderbury',
  'Pacific/Kiritimati',
  'Asia/Pyongyang',
  'Asia/Seoul',
  'Asia/Almaty',
  'Asia/Qyzylorda',
  'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  'Asia/Aqtobe',
  'Asia/Aqtau',
  'Asia/Atyrau',
  'Asia/Oral',
  'Asia/Beirut',
  'Asia/Colombo',
  'Africa/Monrovia',
  'Europe/Vilnius',
  'Europe/Luxembourg',
  'Europe/Riga',
  'Africa/Tripoli',
  'Africa/Casablanca',
  'Europe/Monaco',
  'Europe/Chisinau',
  'Pacific/Majuro',
  'Pacific/Kwajalein',
  'Asia/Yangon',
  'Asia/Ulaanbaatar',
  'Asia/Hovd',
  'Asia/Choibalsan',
  'Asia/Macau',
  'America/Martinique',
  'Europe/Malta',
  'Indian/Mauritius',
  'Indian/Maldives',
  'America/Mexico_City',
  'America/Cancun',
  'America/Merida',
  'America/Monterrey',
  'America/Matamoros',
  'America/Mazatlan',
  'America/Chihuahua',
  'America/Ojinaga',
  'America/Hermosillo',
  'America/Tijuana',
  'America/Bahia_Banderas',
  'Asia/Kuala_Lumpur',
  'Asia/Kuching',
  'Africa/Maputo',
  'Africa/Windhoek',
  'Pacific/Noumea',
  'Pacific/Norfolk',
  'Africa/Lagos',
  'America/Managua',
  'Europe/Amsterdam',
  'Europe/Oslo',
  'Asia/Kathmandu',
  'Pacific/Nauru',
  'Pacific/Niue',
  'Pacific/Auckland',
  'Pacific/Chatham',
  'America/Panama',
  'America/Lima',
  'Pacific/Tahiti',
  'Pacific/Marquesas',
  'Pacific/Gambier',
  'Pacific/Port_Moresby',
  'Pacific/Bougainville',
  'Asia/Manila',
  'Asia/Karachi',
  'Europe/Warsaw',
  'America/Miquelon',
  'Pacific/Pitcairn',
  'America/Puerto_Rico',
  'Asia/Gaza',
  'Asia/Hebron',
  'Europe/Lisbon',
  'Atlantic/Madeira',
  'Atlantic/Azores',
  'Pacific/Palau',
  'America/Asuncion',
  'Asia/Qatar',
  'Indian/Reunion',
  'Europe/Bucharest',
  'Europe/Belgrade',
  'Europe/Kaliningrad',
  'Europe/Moscow',
  'Europe/Simferopol',
  'Europe/Kirov',
  'Europe/Astrakhan',
  'Europe/Volgograd',
  'Europe/Saratov',
  'Europe/Ulyanovsk',
  'Europe/Samara',
  'Asia/Yekaterinburg',
  'Asia/Omsk',
  'Asia/Novosibirsk',
  'Asia/Barnaul',
  'Asia/Tomsk',
  'Asia/Novokuznetsk',
  'Asia/Krasnoyarsk',
  'Asia/Irkutsk',
  'Asia/Chita',
  'Asia/Yakutsk',
  'Asia/Khandyga',
  'Asia/Vladivostok',
  'Asia/Ust-Nera',
  'Asia/Magadan',
  'Asia/Sakhalin',
  'Asia/Srednekolymsk',
  'Asia/Kamchatka',
  'Asia/Anadyr',
  'Asia/Riyadh',
  'Pacific/Guadalcanal',
  'Indian/Mahe',
  'Africa/Khartoum',
  'Europe/Stockholm',
  'Asia/Singapore',
  'America/Paramaribo',
  'Africa/Juba',
  'Africa/Sao_Tome',
  'America/El_Salvador',
  'Asia/Damascus',
  'America/Grand_Turk',
  'Africa/Ndjamena',
  'Indian/Kerguelen',
  'Asia/Bangkok',
  'Asia/Dushanbe',
  'Pacific/Fakaofo',
  'Asia/Dili',
  'Asia/Ashgabat',
  'Africa/Tunis',
  'Pacific/Tongatapu',
  'Europe/Istanbul',
  'America/Port_of_Spain',
  'Pacific/Funafuti',
  'Asia/Taipei',
  'Europe/Kiev',
  'Europe/Uzhgorod',
  'Europe/Zaporozhye',
  'Pacific/Wake',
  'America/New_York',
  'America/Detroit',
  'America/Kentucky/Louisville',
  'America/Kentucky/Monticello',
  'America/Indiana/Indianapolis',
  'America/Indiana/Vincennes',
  'America/Indiana/Winamac',
  'America/Indiana/Marengo',
  'America/Indiana/Petersburg',
  'America/Indiana/Vevay',
  'America/Chicago',
  'America/Indiana/Tell_City',
  'America/Indiana/Knox',
  'America/Menominee',
  'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem',
  'America/North_Dakota/Beulah',
  'America/Denver',
  'America/Boise',
  'America/Phoenix',
  'America/Los_Angeles',
  'America/Anchorage',
  'America/Juneau',
  'America/Sitka',
  'America/Metlakatla',
  'America/Yakutat',
  'America/Nome',
  'America/Adak',
  'Pacific/Honolulu',
  'America/Montevideo',
  'Asia/Samarkand',
  'Asia/Tashkent',
  'America/Caracas',
  'Asia/Ho_Chi_Minh',
  'Pacific/Efate',
  'Pacific/Wallis',
  'Pacific/Apia',
  'Africa/Johannesburg'
];

class Clock {
  constructor({ canvas, timeZone, digitalEl, dateEl, cityEl, zoneEl,sDateEl }) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.radius = canvas.height / 2;
    this.ctx.translate(this.radius, this.radius);

    this.timeZone = timeZone;
    this.digitalEl = digitalEl;
    this.dateEl = dateEl;
    this.cityEl = cityEl;
    this.zoneEl = zoneEl;
    this.sDateEl= sDateEl

    this.timer=null
    this.start();
  }

  start() {
    this.draw();
    this.timer=setInterval(() => this.draw(), 1000);
  }

   stop() {
    if (this.timer) clearInterval(this.timer);
  }


  getTime() {
    const now = new Date();
    return new Date(now.toLocaleString("en-US", { timeZone: this.timeZone }));
  }

  draw() {
    const time = this.getTime();

    //reseting the canvas
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.translate(this.radius, this.radius);


    this.drawFace();
    this.drawNumbers();
    this.drawHands(time);

    // Update digital time
    if (this.digitalEl) {
      this.digitalEl.textContent = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
    }

    // Update date
    if (this.dateEl) {
      this.dateEl.textContent = time.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    if (this.sDateEl) {
      this.sDateEl.textContent = time.toLocaleDateString("en-US", {
        weekday: "short", month: "short", day: "numeric" 
      });
    }

    // Update city and timezone
    if (this.cityEl) this.cityEl.textContent = this.timeZone.split("/")[1] || this.timeZone;
    if (this.zoneEl) this.zoneEl.textContent = this.timeZone;
  }

  drawFace() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius - 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#1b2735";
    ctx.fill();

    ctx.strokeStyle = "#333";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }

  drawNumbers() {
    const ctx = this.ctx;
    ctx.font = this.radius * 0.15 + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for (let num = 1; num <= 12; num++) {
      const ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -this.radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, this.radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  drawHands(time) {
    const hour = time.getHours() % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    // Hour hand
    this.drawHand(
      (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60)),
      this.radius * 0.5,
      6
    );

    // Minute hand
    this.drawHand(
      (minute * Math.PI / 30) + (second * Math.PI / (30 * 60)),
      this.radius * 0.8,
      4
    );

    // Second hand
    this.drawHand(second * Math.PI / 30, this.radius * 0.9, 2);
  }

  drawHand(angle, length, width) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(angle);
    ctx.lineTo(0, -length);
    ctx.strokeStyle = "#3fa9f5";
    ctx.stroke();
    ctx.rotate(-angle);
  }
}

// for small clocks
// function createSmallClock(container, timeZone) {
//   const city = timeZone.split("/")[1];

//   const card = document.createElement("div");
//   card.className = "clock-card p-5 mb-3 col-lg-3 col-10 border";
//   card.style.background = "#081625";
//   card.style.borderRadius = "10px";

//   card.innerHTML = `
//     <h4 class="text-white text-center city"></h4>
//     <p class="text-white text-center zone"></p>
//     <p class="date text-center"></p>
//     <canvas width="150" height="150"></canvas>
//     <p class="digital text-center mt-2">--:--:--</p>
//   `;

//   container.appendChild(card);

//   new Clock({
//     canvas: card.querySelector("canvas"),
//     timeZone,
//     digitalEl: card.querySelector(".digital"),
//     dateEl: card.querySelector(".date"),
//     cityEl: card.querySelector(".city"),
//     zoneEl: card.querySelector(".zone")
//   });
// }


//  Setup Area
const container = document.getElementById("randomClocks");
const mainClockCanvas = document.getElementById("analogClock");
const digitalEl = document.getElementById("digitalTime");
const dateEl = document.getElementById("fullDate");
const cityEl = document.getElementById("cityname");
const zoneEl = document.getElementById("zonename");

let currentMainClock;

// ✅ Reusable function to create main clock
function setupMainClock(timeZone) {
  if (currentMainClock) clearInterval(currentMainClock.timer); // stop old clock

  currentMainClock = new Clock({
    canvas: mainClockCanvas,
    timeZone,
    digitalEl,
    dateEl,
    cityEl,
    zoneEl
  });

   history.pushState({ zone: timeZone }, "", `/time/${timeZone.split("/")[1] }`);

  // ✅ 3. Update the <title> dynamically
  document.title = `Current Time in ${timeZone}`;

}

// ✅ Function to populate small clocks
function populateSmallClocks(excludeZone,filter) {
  container.innerHTML = ""; // clear old clocks

  // Get 10 random zones (excluding current main zone)

  const zones = aryIanaTimeZones
    .filter(z => z !== excludeZone)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);
  
  zones.forEach(zone => {
    const card = document.createElement("div");
    card.className = "clock-card p-3 mb-3 col-lg-3 col-10 border";
    card.style.background = "#081625";
    card.style.borderRadius = "10px";

    card.innerHTML = `
      <h4 class="text-white text-center city"></h4>
      <p class="text-white text-center zone"></p>
      <p class="date text-center"></p>
      <canvas width="150" height="150"></canvas>
      <p class="digital text-center mt-2">--:--:--</p>
    `;

    container.appendChild(card);
  
    // Create the small clock
    new Clock({
      canvas: card.querySelector("canvas"),
      timeZone: zone,
      digitalEl: card.querySelector(".digital"),
      dateEl: card.querySelector(".date"),
      cityEl: card.querySelector(".city"),
      zoneEl: card.querySelector(".zone")
    });

    // ✅ Add click event → Replace main clock + repopulate small clocks
    card.addEventListener("click", () => {
      setupMainClock(zone); // set this as main
      populateSmallClocks(zone); // refresh small clocks
    });
  });

}

// ✅ Initial Setup
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
setupMainClock(userTimeZone);
populateSmallClocks(userTimeZone);

const searchInput = document.getElementById("searchZone");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("keydown", () => {

  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";
   console.log(query);
    
  if (!query) return;

  const matches = aryIanaTimeZones.filter(tz => tz.toLowerCase().includes(query)).slice(0, 10);

  if(matches !=null){

    // document.getElementById("mainClockArea").style.display="none"
  matches.forEach(zone => {
    const btn = document.createElement("button");
    btn.className = "list-group-item list-group-item-action";
    btn.textContent = zone;

    console.log(zone)
    populateSmallClocks(zone); 

    btn.addEventListener("click", () => {
      setupMainClock(zone);       // set as main clock
       // repopulate small clocks
      searchResults.innerHTML = ""; // clear results
      searchInput.value = ""; // clear input
    });

    searchResults.appendChild(btn);
  });
}
});

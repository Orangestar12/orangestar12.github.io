import { b64_sha256 } from '/res/sha256.js';

/*
 * MOST OF THIS CODE IS SIMPLY ADAPTED FROM https://ss64.com/pass/
 * Other copyrights are blatantly copy-pasted where necessary.
 * Original SS64 variant by Simon Sheppard, Copyright(left?) 2024
 * Licensed under Creative Commons 4.0 BY-NC
 * More information about this license is available here:
 * http://creativecommons.org/licenses/by-nc/4.0/
 * Information about SS64's copyright and terms of use are available here:
 * https://ss64.com/docs/copyright.html
 */

// priority is set by order of this list.
const topsites = [
    {
        seed:"google",
        url:"https://www.google.com/",
        displayName:"Google"
    },
    {
        seed:"mastodon",
        url:"https://joinmastodon.org/",
        displayName:"Mastodon"
    },
    {
        seed:"riot",
        displayName:"Element messenger"
    },
    {
        seed:"twitch",
        url:"https://www.twitch.tv/",
        displayName:"Twitch"
    },
    {
        seed:"amazon",
        url:"https://www.amazon.com/",
        displayName:"Amazon"
    },
    {
        seed:"wikipedia",
        url:"https://en.wikipedia.org/",
        displayName:"Wikipedia"
    }
   //    ,{seed:"apple", url:"https://www.apple.com/", displayName:"Apple"}
   //    ,{seed:"box", url:"https://app.box.com/login/", displayName:"Box"}
   //    ,{seed:"ebay", url:"https://signin.ebay.com/", displayName:"Ebay"}
   //    ,{seed:"linkedin", url:"https://www.linkedin.com/", displayName:"LinkedIn"}
   //    ,{seed:"outlook", url:"https://outlook.com/", displayName:"Outlook"}
   //    ,{seed:"reddit", url:"https://old.reddit.com/", displayName:"Reddit"}
   //    ,{seed:"tiktok", url:"https://www.tiktok.com/", displayName:"TikTok"}
   //    ,{seed:"tumblr", url:"https://www.tumblr.com/", displayName:"Tumblr"}
];

const bottomsites = [
    {
        seed:"gitlab",
        displayName:"Gitlab"
    },
    {
        seed:"libera",
        displayName:"Libera Chat"
    },
    {
        seed:"podverse",
        displayName:"Podverse"
    },
    {
        seed:"PCB",
        displayName:"MyPCB",
        prefix: '*'
    },
    {
        seed:"authy",
        displayName:"Authy"
    },
    {
        seed:"namecheap",
        displayName:"Namecheap"
    },
    {
        seed:"modio",
        displayName:"Mod.io"
    },
    {
        seed:"caracal.club",
        displayName:"caracal.club"
    },
    {
        seed:"stripe",
        displayName:"Stripe payments"
    },
    {
        seed:"romdepot",
        displayName:"The ROM Depot"
    },
    {
        seed:"Nethack",
        displayName:"nethack.alt.io"
    },
    {
        seed:"romhacking",
        displayName:"Romhacking.com"
    },
    {
        seed:"nexus",
        displayName:"Nexus Mods"
    },
    {
        seed:"modworkshop",
        displayName:"ModWorkshop"
    },
    {
        seed:"dropbox",
        displayName:"Dropbox"
    },
    {
        seed:"daybreak",
        displayName:"Daybreak Games (Planetside 2)",
        preempt: 10
    },
    {
        seed:"ankama",
        displayName:"Ankama (Wakfu)"
    },
    {
        seed:"riichi",
        displayName:"Riichi.wiki"
    },
    {
        seed:"newgrounds",
        displayName:"Newgrounds"
    },
    {
        seed:"gamebanana",
        displayName:"Gamebanana"
    },
    {
        seed:"musicbrainz",
        displayName:"Musicbrainz"
    },
    {
        seed:"healthcare",
        displayName:"Healthcare.gov"
    },
    {
        seed:"walmart",
        displayName:"Wal-Mart",
        preempt: 12
    },
    {
        seed:"biglots",
        displayName:"Big Lots"
    },
    {
        seed:"staples",
        displayName:"Staples Connect",
        suffix: '.'
    },
    {
        seed:"archlinux",
        displayName:"Arch Linux Forums"
    },
    {
        seed:"SONY",
        displayName:"Sony"
    },
    {
        seed:"backloggery",
        displayName:"The Backloggery"
    },
    {
        seed:"rmu",
        displayName:"Rolla Municipal Utilities"
    },
    {
        seed:"paylocity",
        displayName:"Paylocity",
        suffix:"*"
    },
    {
        seed:"regal",
        displayName:"Regal Cinemas",
        suffix: '.'
    },
    {
        seed:"starbreeze",
        displayName:"Starbreeze"
    },
    {
        seed:"miraheeze",
        displayName:"Miraheeze Wikis"
    },
    {
        seed:"kohls",
        displayName:"Kohls"
    },
    {
        seed:"steaknshake",
        displayName:"Steak 'n Shake",
        suffix:'.'
    },
    {
        seed:"jack in the box",
        displayName:"Jack in the Box",
        suffix:'*'
    },
    {
        seed:"acapellas4u",
        displayName:"Acapellas4U"
    },
    {
        seed:"fmod",
        displayName:"FMOD"
    },
    {
        seed:"android",
        displayName:"Android Studio"
    },
    {
        seed:"lees",
        displayName:"Lee's Chicken"
    },
    {
        seed:"pizzahut",
        displayName:"Pizza Hut",
        suffix:"*"
    },
    {
        seed:"capcom",
        displayName:"Capcom"
    },
    {
        seed:"quanticfoundry",
        displayName:"Quantic Foundry"
    },
    {
        seed:"tracktion",
        displayName:"Tracktion Waveform",
        suffix:"*"
    },
    {
        seed:"snapchat",
        displayName:"Snapchat"
    },
    {
        seed:"instagram",
        displayName:"Instagram"
    },
    {
        seed:"crunchyroll",
        displayName:"Crunchyroll"
    },
    {
        seed:"huggingface",
        displayName:"HuggingFace AI"
    },
    {
        seed:"adobe",
        displayName:"Adobe"
    },
    {
        seed:"sendgrid",
        displayName:"Twilo SendGrid"
    },
    {
        seed:"opera",
        displayName:"Opera browser"
    },
    {
        seed:"daz",
        displayName:"Daz 3D"
    },
    {
        seed:"matrix",
        displayName:"Matrix PostgreSQL Database"
    },
    {
        seed:"townofsalem",
        displayName:"Town of Salem",
        suffix: '1.'
    },
    {
        seed:"facer",
        displayName:"Facer"
    },
    {
        seed:"fidelity",
        displayName:"Fidelity Communications",
        limit: 19,
        suffix: '/'
    },
    {
        seed:"bally",
        displayName:"Bally Sports"
    },
    {
        seed:"sterling",
        displayName:"Sterling Background Check",
        limit: 15,
        suffix: '*'
    },
    {
        seed:"protonvpn",
        displayName:"ProtonVPN"
    },
    {
        seed:"brown",
        displayName:"Brown Apartments",
        suffix: '.'
    },
    {
        seed:"cerner",
        displayName:"Cerner Careers",
        suffix: '.'
    },
    {
        seed:"mohealthnet",
        displayName:"MyMOHealthNet",
        suffix: '*'
    },
    {
        seed:"workgmail",
        displayName:"Work GMail"
    }
];

const pw = document.querySelector('#main');
const form = document.querySelector('div.flex');
const sortType = document.querySelector('#sort');
const custom = {};
custom.seed = document.querySelector('#custom .label');
custom.pass = document.querySelector('#custom .password');
document.querySelector('#custom button').addEventListener('click', (e) => {
    navigator.clipboard.writeText(custom.pass.value);
    // e.preventDefault();
});

const bottomSite = document.querySelector('#dropdown');

function getPassword(site) {
    let max = site.limit ? site.limit : 20;
    let pass = b64_sha256(pw.value + ':' + site.seed);

    if (site.preempt) {
        pass = pass.substr(site.preempt, 20);
    } else {
        pass = pass.substr(0, max);
    }

    let prefix = site.prefix ? site.prefix : '';
    let suffix = site.suffix ? site.suffix : '';

    pass = prefix + pass + suffix;
    return pass;
}

function sorter(a,b) {
    if (sortType.value == 'alpha') {

        function repThe(x) {
            if (x.startsWith('The ')){
                x = x.substr(4);
            }
            return x;
        }

        let A = repThe(a.displayName.toUpperCase());
        let B = repThe(b.displayName.toUpperCase());
        if (A == B) { return 0; }
        return A < B ? -1 : 1;
    } else {
        return a.priority - b.priority;
    }
}

document.querySelector('#showPw').addEventListener('change', () => {
    pw.type = document.querySelector('#showPw').checked ? 'text' : 'password';
});

function update() {
    topsites.sort(sorter);
    for (let site of topsites) {
        if (site.element) {
            form.appendChild(site.element);
        }
    }

    form.appendChild(bottomSite);

    bottomsites.sort(sorter);
    for (let site of bottomsites) {
        let select = bottomSite.querySelector('select');
        if (site.element) {
            console.log(site.element);
            select.appendChild(site.element);
        }
    }
}

function makeBox(site, index) {
    let e = document.createElement('div');
    let Name = document.createElement('label');
    // let Seed = site.seed;
    let box = document.createElement('input');
    let copy = document.createElement('button');

    Name.setAttribute('for', site.seed);
    Name.textContent = site.displayName;    
    box.id = site.seed;
    Name.className = 'label';
    box.className = 'password';

    copy.textContent = 'Copy';

    box.setAttribute('tabindex', index);
    copy.setAttribute('tabindex', index);

    e.appendChild(Name);
    e.appendChild(box);
    e.appendChild(copy);

    copy.addEventListener('click', (e) => {
        navigator.clipboard.writeText(box.value);
        // e.preventDefault();
    });

    return e;
}

function updatePWs() {
    console.log('this is DEFINITELY updatePWs.')
    if(pw.value.length < 8) { return; }
    // top sites
    for (let site of topsites) {
        site.element.querySelector('input').value = getPassword(site);
    }

    // bottom site
    let seed = bottomSite.querySelector('select').value;
    let site = bottomsites.find((e) => e.seed == seed);
    bottomSite.querySelector('input').value = getPassword(site);

    // custom
    if(custom.seed.value) {
        custom.pass.value = getPassword({seed:custom.seed.value});
    }
}

function init() {
    let i = 4;

    for (let site of topsites) {
        let e = makeBox(site, i);
    
        site.element = e;
    
        site.priority = i;

        i++;
    }

    i = 0;

    let select = bottomSite.querySelector('select');

    for (let site of bottomsites) {
        site.element = document.createElement('option');
        site.element.value = site.seed;
        site.element.textContent = site.displayName;
        select.appendChild(site.element);
        site.priority = i;
        i++;
    }

    update();

    // select.value = select.firstChild.value;
}

sortType.addEventListener('change', update);

pw.addEventListener('change', updatePWs);
custom.seed.addEventListener('change', updatePWs);
bottomSite.querySelector('select').addEventListener('change', updatePWs);

window.addEventListener('load', init);

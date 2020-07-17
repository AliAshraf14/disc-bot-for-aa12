const { Client, Attachment } = require("discord.js");
const bot = new Client();
let target = 0;
let ass = {
  0: {
    cap: "ORA ORA ORA MUDA MUDA MUDA",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733706698862231592/108633605_2677355082591485_2774889910351273702_n.jpg?width=279&height=585",
  },
  1: {
    cap: "DON'T BRING MY MOTHER INTO THIS",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733706718193647626/108814513_336569720852068_1912435846895083037_n.jpg",
  },
  2: {
    cap: ":heart:",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733706759222460416/108851574_571712476826601_7110558123040700628_n.jpg",
  },
  3: {
    cap: "KONICHIWA",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733706792152072302/109496675_1691244994367755_1926692511947707382_n.jpg",
  },
  4: {
    cap: "فين الكانون؟",
    url:
      "https://facebook.com/messaging/lightspeed/media_fallback/?entity_id=959236321215930&entity_type=3&width=2048&height=2048&access_token=EAAbcjYySe9YBANw6hb7LGZA1N3GcMu1hRZB0p2kTEuBfKNtDO4CZBUB3ZA8UXMwAoPXCJwBNajx6vuirxMJDmQdsS4cyOphV7CXpZBP5HA5RoHhNoZCyNnyZASt0ePsUpWcI4kBPXAOXmjvyz7jU4UncZBtPTam5E2pBYtgr9XGKFwZDZD",
  },
  5: {
    cap: "PHYSICALLY, IT IS NOT POSSIBLE",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733717342499897344/109306031_959236327882596_2091677802003227234_n.jpg?width=441&height=586",
  },
  17: {
    cap: "WAIT FOR YOUR TURN",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733717525996765254/109090519_590659564986442_2663657453438298571_n.jpg?width=255&height=586",
  },
  7: {
    cap: "DEEP INSIDE ME I AM FADED ",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733718479458271232/109692615_1597179007127171_8854823903244762476_n.jpg?width=439&height=586",
  },
  8: {
    cap: "WE ALL LOVE ALI ASHRAF 12 ",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733718557267067521/109930159_2018900241575079_5894459328898915120_n.jpg",
  },
  9: {
    cap: "GANG BANG 1 ",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733718795373379665/110020571_200677934720007_8200006235779881399_n.jpg",
  },
  10: {
    cap: "GANG BANG 2 ",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733718840575525105/112113074_279522226711185_3196425871175849460_n.jpg",
  },
  11: {
    cap: "INFINITY WAR :heart: ",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733721821156737055/109178551_287319125702707_1694216192808070469_n.jpg",
  },
  12: {
    cap: "HACKING NASA WITH HTML AND CSS",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733722103248978000/109153477_2017804691686236_8254422849615332286_n.jpg",
  },
  13: {
    cap: "KANSAS :heart: ",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733722334338482206/109331341_3340476402686039_3577578465306789567_n.jpg",
  },
  14: {
    cap: "PS: IRON MAN IS GONNA DIE",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733722592040714270/109529438_1231076117237707_1854905354919844080_n.jpg",
  },
  15: {
    cap: "IRON MAN IS DEAD :frowning:",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733722696646656050/109611223_278140129957436_7627659604944539403_n.jpg",
  },
  16: {
    cap: "MY LOVELY LOVELY",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733723694576173126/20190112_162243.jpg?width=439&height=586",
  },
  6: {
    cap: "FARSHO7 :heart:",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733724369775493220/unknown.png",
  },
  18: {
    cap: "One king, eleven retard the LEGENDARY :heart: Ali Ashraf 12 :heart:",
    url:
      "https://media.discordapp.net/attachments/733703980122898444/733728430578729077/wwwwww1.png?width=991&height=557",
  },
};

const token = "NzMzNjQ3MDc4ODY1MjQwMTY0.XxGMJA.o-79Ar7AXaPwQ0gC1_6IJRiAtBU";

bot.on("ready", () => {
  console.log(Object.keys(ass).length, target);
});

bot.on("message", (msg) => {
  if (msg.content.toLocaleLowerCase() === "aa12") {
    let s = setInterval(function () {
      const cap =
        "Happy birth day to our قائد Ali Ashraf 12 :heart: `" + ass[target].cap;
      let file = { files: [ass[target].url] };
      msg.channel.send(cap, file);
      target++;
      if (target === 19) {
        target = 0;
        clearInterval(s);
      }
    }, 5000);
  }
});
bot.login(token);

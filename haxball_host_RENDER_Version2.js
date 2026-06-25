// ضع هذا فوق كل شيء في haxball_host_FIXED.js (قبل (function(){ ... }) )
var HBInit = undefined;
try {
  // جرب تحميل حزمة توفر HBInit (ثبتها أولاً: npm install haxball-headless)
  var hb = require('haxball-headless');
  // بعض الحزم تصدر الدالة مباشرة، وبعضها تصدر كـ hb.HBInit
  HBInit = (typeof hb === 'function') ? hb : (hb && hb.HBInit) ? hb.HBInit : undefined;
  if (!HBInit) console.error("haxball-headless موجود لكن لم يجد HBInit داخل التصدير، تحقق من بنية الحزمة.");
} catch (err) {
  // الحزمة غير منصبة؛ حاول الاعتماد على global (حالة تشغيل في بيئة headless أصلية)
  if (typeof global !== 'undefined' && global.HBInit) HBInit = global.HBInit;
  else if (typeof globalThis !== 'undefined' && globalThis.HBInit) HBInit = globalThis.HBInit;
  else {
    console.error("HBInit not found — إذا شغّلت على Node تأكد من تثبيت حزمة headless أو توفير HBInit.");
  }
}
#!/usr/bin/env node
"use strict";

/*
  Node.js wrapper for Haxball headless script — suitable for Render (start with `node haxball_host_RENDER.js`).
  Requires: npm install haxball-headless
*/

var hb;
try {
  hb = require('haxball-headless');
} catch (e) {
  console.error("Missing dependency 'haxball-headless'. Run: npm install haxball-headless");
  console.error("If you already installed it, ensure node_modules is present and restart.");
  process.exit(1);
}
var HBInit = hb.HBInit || hb; // support different export styles

(function(){
  "use strict";

  // CONFIG
  var masterPassword = "TYMO2020"; // عدّلها إن أردت
  var config = {
    roomName: "AFL - 1",
    playerName: "3ami 3mor",
    maxPlayers: 16,
    public: false,
    geo: { code: "dz", lat: 36.7525, lon: 3.04197 }
  };

  // EMBEDDED MAP (put_json_map) - كامل
  var put_json_map = {
    "name": "4v4",
    "width": 800,
    "height": 350,
    "ballPhysics": "disc0",
    "vertexes": [
      {"x":-701.4,"y":-320,"cMask":[],"cGroup":[]},
      {"x":701.4,"y":-320,"cMask":[],"cGroup":[]},
      {"x":701.4,"y":320,"cMask":[],"cGroup":[]},
      {"x":-701.4,"y":320,"cMask":[],"cGroup":[]},
      {"x":0,"y":320,"cMask":[],"cGroup":[]},
      {"x":0,"y":-320,"cMask":[],"cGroup":[]},
      {"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
      {"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
      {"x":-700,"y":85,"cMask":[],"cGroup":[]},
      {"x":-700,"y":-320,"cMask":[],"cGroup":[]},
      {"x":-700,"y":320,"cMask":[],"cGroup":[]},
      {"x":-700,"y":-85,"cMask":[],"cGroup":[]},
      {"x":700,"y":-85,"cMask":[],"cGroup":[]},
      {"x":700,"y":85,"cMask":[],"cGroup":[]},
      {"x":0,"y":350,"cMask":[],"cGroup":[]},
      {"x":0,"y":-350,"cMask":[],"cGroup":[]},
      {"x":736.4,"y":-85,"cMask":[],"cGroup":[]},
      {"x":736.4,"y":85,"cMask":[],"cGroup":[]},
      {"x":-736.4,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-736.4,"y":85,"cMask":[],"cGroup":[]},
      {"x":-360,"y":-318.5,"cMask":[],"cGroup":[]},
      {"x":-360,"y":318.5,"cMask":[],"cGroup":[]},
      {"x":360,"y":-318.5,"cMask":[],"cGroup":[]},
      {"x":360,"y":318.5,"cMask":[],"cGroup":[]},
      {"x":0,"y":-1.5,"cMask":[],"cGroup":[]},
      {"x":0,"y":1.5,"cMask":[],"cGroup":[]},
      {"x":698.5,"y":125,"cMask":[],"cGroup":[]},
      {"x":698.5,"y":-125,"cMask":[],"cGroup":[]},
      {"x":628.6,"y":-125,"cMask":[],"cGroup":[]},
      {"x":628.6,"y":125,"cMask":[],"cGroup":[]},
      {"x":360,"y":-135,"cMask":[],"cGroup":[]},
      {"x":360,"y":135,"cMask":[],"cGroup":[]},
      {"x":-360,"y":-135,"cMask":[],"cGroup":[]},
      {"x":-360,"y":135,"cMask":[],"cGroup":[]},
      {"x":-698.5,"y":125,"cMask":[],"cGroup":[]},
      {"x":-628.4,"y":125,"cMask":[],"cGroup":[]},
      {"x":-628.6,"y":-125,"cMask":[],"cGroup":[]},
      {"x":-698.5,"y":-125,"cMask":[],"cGroup":[]},
      {"x":-500,"y":1.5,"cMask":[],"cGroup":[]},
      {"x":-500,"y":-1.5,"cMask":[],"cGroup":[]},
      {"x":500,"y":1.5,"cMask":[],"cGroup":[]},
      {"x":500,"y":-1.5,"cMask":[],"cGroup":[]},
      {"x":-702.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-705,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-707.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-710,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-712.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-715,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-717.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-720,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-722.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-725,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-727.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-730,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-732.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-735,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-702.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":-705,"y":85,"cMask":[],"cGroup":[]},
      {"x":-707.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":-710,"y":85,"cMask":[],"cGroup":[]},
      {"x":-712.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":-715,"y":85,"cMask":[],"cGroup":[]},
      {"x":-717.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":-720,"y":85,"cMask":[],"cGroup":[]},
      {"x":-722.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":-725,"y":85,"cMask":[],"cGroup":[]},
      {"x":-727.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":-730,"y":85,"cMask":[],"cGroup":[]},
      {"x":-732.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":-735,"y":85,"cMask":[],"cGroup":[]},
      {"x":702.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":705,"y":85,"cMask":[],"cGroup":[]},
      {"x":707.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":710,"y":85,"cMask":[],"cGroup":[]},
      {"x":712.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":715,"y":85,"cMask":[],"cGroup":[]},
      {"x":717.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":720,"y":85,"cMask":[],"cGroup":[]},
      {"x":722.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":725,"y":85,"cMask":[],"cGroup":[]},
      {"x":727.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":730,"y":85,"cMask":[],"cGroup":[]},
      {"x":732.5,"y":85,"cMask":[],"cGroup":[]},
      {"x":735,"y":85,"cMask":[],"cGroup":[]},
      {"x":702.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":705,"y":-85,"cMask":[],"cGroup":[]},
      {"x":707.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":710,"y":-85,"cMask":[],"cGroup":[]},
      {"x":712.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":715,"y":-85,"cMask":[],"cGroup":[]},
      {"x":717.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":720,"y":-85,"cMask":[],"cGroup":[]},
      {"x":722.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":725,"y":-85,"cMask":[],"cGroup":[]},
      {"x":727.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":730,"y":-85,"cMask":[],"cGroup":[]},
      {"x":732.5,"y":-85,"cMask":[],"cGroup":[]},
      {"x":735,"y":-85,"cMask":[],"cGroup":[]},
      {"x":-700,"y":-321.4,"cMask":[],"cGroup":[]},
      {"x":700,"y":-321.4,"cMask":[],"cGroup":[]},
      {"x":700,"y":321.4,"cMask":[],"cGroup":[]},
      {"x":-700,"y":321.4,"cMask":[],"cGroup":[]},
      {"x":-630,"y":-126.4,"cMask":[],"cGroup":[]},
      {"x":-630,"y":126.4,"cMask":[],"cGroup":[]},
      {"x":630,"y":-126.4,"cMask":[],"cGroup":[]},
      {"x":630,"y":126.4,"cMask":[],"cGroup":[]},
      {"x":735,"y":-86.4,"cMask":[],"cGroup":[]},
      {"x":735,"y":86.4,"cMask":[],"cGroup":[]},
      {"x":-735,"y":-86.4,"cMask":[],"cGroup":[]},
      {"x":-735,"y":86.4,"cMask":[],"cGroup":[]}
    ],
    "segments": [
      {"v0":0,"v1":1,"bias":-10,"cMask":["ball"],"color":"151A1E"},
      {"v0":99,"v1":12,"bias":-10,"cMask":["ball"],"color":"151A1E"},
      {"v0":13,"v1":100,"bias":-10,"cMask":["ball"],"color":"151A1E"},
      {"v0":2,"v1":3,"bias":-10,"cMask":["ball"],"color":"151A1E"},
      {"v0":101,"v1":8,"bias":-10,"cMask":["ball"],"color":"151A1E"},
      {"v0":5,"v1":6,"bCoef":0,"cMask":[],"cGroup":[],"color":"151A1E"},
      {"v0":4,"v1":7,"bCoef":0,"cMask":[],"cGroup":[],"color":"151A1E"},
      {"v0":11,"v1":98,"bias":-10,"cMask":["ball"],"color":"151A1E"},
      {"v0":6,"v1":15,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
      {"v0":7,"v1":14,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
      {"v0":6,"v1":7,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"CE8A4A"},
      {"v0":7,"v1":6,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"CE8A4A"},
      {"v0":21,"v1":20,"bCoef":0,"cMask":[],"color":"626262"},
      {"v0":23,"v1":22,"bCoef":0,"cMask":[],"color":"626262"},
      {"v0":24,"v1":25,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"626262"},
      {"v0":25,"v1":24,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"626262"},
      {"v0":27,"v1":28,"bCoef":0,"cMask":[],"color":"626262"},
      {"v0":29,"v1":26,"bCoef":0,"cMask":[],"color":"626262"},
      {"v0":31,"v1":30,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"626262"},
      {"v0":32,"v1":33,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"626262"},
      {"v0":34,"v1":35,"bCoef":0,"cMask":[],"color":"626262"},
      {"v0":37,"v1":36,"bCoef":0,"cMask":[],"color":"626262"},
      {"v0":39,"v1":38,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"626262"},
      {"v0":38,"v1":39,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"626262"},
      {"v0":41,"v1":40,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"626262"},
      {"v0":40,"v1":41,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"626262"},
      {"v0":12,"v1":16,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"6666FF"},
      {"v0":106,"v1":107,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"6666FF"},
      {"v0":17,"v1":13,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"6666FF"},
      {"v0":8,"v1":19,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"FF6666"},
      {"v0":109,"v1":108,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"FF6666"},
      {"v0":18,"v1":11,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"FF6666"},
      {"v0":11,"v1":8,"bCoef":0,"cMask":[],"color":"C5C5C5"},
      {"v0":12,"v1":13,"bCoef":0,"cMask":[],"color":"C5C5C5"},
      {"v0":102,"v1":103,"bCoef":0,"cMask":[],"color":"626262"},
      {"v0":105,"v1":104,"bCoef":0,"cMask":[],"color":"626262"}
    ],
    "planes":[
      {"normal":[0,1],"dist":-350,"bCoef":0},
      {"normal":[0,-1],"dist":-350,"bCoef":0},
      {"normal":[1,0],"dist":-800,"bCoef":0},
      {"normal":[-1,0],"dist":-800,"bCoef":0},
      {"normal":[-1,0],"dist":-360,"bCoef":0,"cMask":["c1"]},
      {"normal":[1,0],"dist":-360,"bCoef":0,"cMask":["c0"]}
    ],
    "goals":[{"p0":[-708.3,85],"p1":[-708.3,-85],"team":"red"},{"p0":[708.3,85],"p1":[708.3,-85],"team":"blue"}],
    "playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.545},
    "discs":[{"radius":5.8,"bCoef":0.412,"invMass":1.5,"color":"FFF26D","cGroup":["ball","kick","score"]},{"pos":[-700,-85],"radius":5.4,"invMass":0,"color":"31726"},{"pos":[-700,85],"radius":5.4,"invMass":0,"color":"31726"},{"pos":[700,-85],"radius":5.4,"invMass":0,"color":"31726"},{"pos":[700,85],"radius":5.4,"invMass":0,"color":"31726"}],
    "bg":{"width":700,"height":320,"kickOffRadius":80,"color":"34414B"}
  };

  // VERIFY HBInit
  if (typeof HBInit !== "function") {
    if (typeof console !== "undefined" && console.error) console.error("HBInit not found — ensure 'haxball-headless' is the correct package");
    return;
  }

  // INIT ROOM
  var room = HBInit(config);
  if (typeof room.setDefaultStadium === "function") room.setDefaultStadium("Big");
  if (typeof room.setScoreLimit === "function") room.setScoreLimit(3);
  if (typeof room.setTimeLimit === "function") room.setTimeLimit(4);
  if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("✅ Host script active. Use !help", null, 0x00bfff, "normal", 2);

  // big blue welcome
  if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🎉 WELCOME to Algerian Privat Room!", null, 0x00bfff, "bold", 4);

  // apply embedded map
  if (typeof room.setCustomStadium === "function") {
    room.setCustomStadium(JSON.stringify(put_json_map));
    if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("✅ Embedded map loaded on init.", null, 0x00ff88, "normal", 2);
    if (typeof room.stopGame === "function") room.stopGame();
    if (typeof room.startGame === "function") room.startGame();
  }

  // STATE containers
  var persistentMasterAuths = new Set();
  var sessionMasterIds = new Set();
  var normalAuths = new Set();
  var normalNames = new Set();
  var persistentBans = new Set();
  var adminBans = new Set();     // بانات الادمن العادي (GUI kick أو !ban)
  var recentlyLeft = new Map();  // لتتبع اللاعبين اللي خرجوا مؤخراً لكشف البانات المقصودة
  var muted = new Set();
  var firstTwo = 0;

  // track previous admin status to detect changes
  var previousAdminStatus = new Map();

  // touch and goals
  var lastTouches = [];
  var goals = new Map();

  // SETTINGS
  var MAX_TOUCH_HISTORY = 12;
  var GOAL_TOUCH_WINDOW = 5000;

  // HELPERS
  function normalize(s){ if (!s) return ""; s = s.trim(); if (s.charAt(0) === "@") s = s.slice(1); return s.toLowerCase(); }
  function findPlayer(q){
    if (!q) return null;
    var key = normalize(q);
    var list = typeof room.getPlayerList === "function" ? room.getPlayerList() : [];
    for (var i=0;i<list.length;i++) if (list[i].name.toLowerCase() === key) return list[i];
    for (var j=0;j<list.length;j++) if (list[j].name.toLowerCase().indexOf(key) === 0) return list[j];
    for (var k=0;k<list.length;k++) if (list[k].name.toLowerCase().indexOf(key) !== -1) return list[k];
    return null;
  }
  function banKeyFromEntry(b){ if (!b) return null; if (b.auth) return b.auth; if (b.name) return "name:"+b.name.toLowerCase(); return null; }
  function isPersistentMaster(p){ return p && p.auth && persistentMasterAuths.has(p.auth); }
  function isSessionMaster(p){ return p && sessionMasterIds.has(p.id); }
  function isMaster(p){ return isPersistentMaster(p) || isSessionMaster(p); }
  function hasAdminPrivileges(p){
    if (!p) return false;
    if (isMaster(p)) return true;
    return p.admin === true;
  }

  // BAN auto-clear: any ban that appears will be cleared (except persistent and admin bans)
  function checkAndClearBans(reason){
    if (typeof room.getBans !== "function") return;
    var bans = room.getBans() || [];
    if (!bans.length) return;

    var shouldClear = false;
    var bannedNames = [];
    var now = Date.now();

    for (var i=0;i<bans.length;i++){
      var b = bans[i];
      var k = banKeyFromEntry(b);
      // إذا البان موجود في قائمة الماستر أو الادمن، خليه
      if (k && persistentBans.has(k)) continue;
      if (k && adminBans.has(k)) continue;
      // إذا اللاعب خرج مؤخراً (خلال 15 ثانية)، يعني البان مقصود من ادمن — احفظه
      if (k && recentlyLeft.has(k) && (now - recentlyLeft.get(k)) < 15000){
        adminBans.add(k);
        continue;
      }
      // بان غير معروف — امسحه
      shouldClear = true;
      if (b && b.name) bannedNames.push(b.name);
    }

    if (shouldClear){
      // announce ban detection
      if (bannedNames.length){
        if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🚫 Ban cleared auto: " + bannedNames.join(", ") + " — bans removed by bot.", null, 0xff6666, "bold", 3);
      } else {
        if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🚫 Ban cleared auto — all non-persistent bans removed by bot.", null, 0xff6666, "bold", 3);
      }

      // clear all bans
      if (typeof room.clearBans === "function") room.clearBans();

      // Re-apply persistent bans for players currently online
      var list = typeof room.getPlayerList === "function" ? room.getPlayerList() : [];
      for (var j=0;j<list.length;j++){
        var pl = list[j];
        var key = pl.auth ? pl.auth : "name:" + pl.name.toLowerCase();
        if (persistentBans.has(key)){
          if (typeof room.kickPlayer === "function") room.kickPlayer(pl.id, "Banned (persistent)", true);
        }
      }

      // Re-apply admin bans for players currently online
      for (var a=0;a<list.length;a++){
        var pla = list[a];
        var akey = pla.auth ? pla.auth : "name:" + pla.name.toLowerCase();
        if (adminBans.has(akey)){
          if (typeof room.kickPlayer === "function") room.kickPlayer(pla.id, "Banned by admin", true);
        }
      }

      // restore persistent masters that are online
      for (var t=0;t<list.length;t++){
        var pl2 = list[t];
        if (pl2.auth && persistentMasterAuths.has(pl2.auth)){
          if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(pl2.id, true);
        }
      }
    }
  }

  // periodic auto-clear check (every 1000ms) + تنظيف recentlyLeft القديمة
  if (typeof setInterval === "function") setInterval(function(){
    checkAndClearBans();
    // امسح السجلات القديمة (+30 ثانية)
    var nowClean = Date.now();
    recentlyLeft.forEach(function(ts, key){ if (nowClean - ts > 30000) recentlyLeft.delete(key); });
  }, 1000);

  // restore existing admins
  (function restore(){
    var cur = typeof room.getPlayerList === "function" ? room.getPlayerList() : [];
    for (var i=0;i<cur.length && firstTwo < 2;i++){
      var p = cur[i];
      if (p.auth && persistentMasterAuths.has(p.auth)){ if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true); continue; }
      if (p.auth && normalAuths.has(p.auth)){ if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true); continue; }
      if (normalNames.has(p.name)){ if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true); continue; }
      if (firstTwo < 2){ if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true); firstTwo++; if (p.auth) normalAuths.add(p.auth); else normalNames.add(p.name); }
    }

    // initialize previousAdminStatus map
    for (var j=0;j<cur.length;j++){
      var q = cur[j];
      previousAdminStatus.set(q.id, !!q.admin);
    }
  })();

  // JOIN / ADMIN change
  room.onPlayerJoin = function(p){
    if (!p) return;
    if (p.auth && persistentMasterAuths.has(p.auth)){ if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true); }
    if (p.auth && normalAuths.has(p.auth)){ if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true); }
    if (normalNames.has(p.name)){ if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true); }
    if (firstTwo < 2){
      if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true);
      firstTwo++;
      if (p.auth) normalAuths.add(p.auth); else normalNames.add(p.name);
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔑 " + p.name + " granted admin (first joiner #" + firstTwo + ").", null, 0xffd700, "bold", 2);
    }

    // Welcome messages
    if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("💙 Welcome " + p.name + "!", p.id, 0x00bfff, "bold", 3);
    if (p.team === 1){
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔴(Red Team) Welcome " + p.name + "!", p.id, 0xff4444, "bold", 3);
    } else if (p.team === 2){
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔵(Blue Team) Welcome " + p.name + "!", p.id, 0x00bfff, "bold", 3);
    }

    // update previousAdminStatus
    previousAdminStatus.set(p.id, !!p.admin);
  };

  room.onPlayerLeave = function(player){
    if (!player) return;
    if (sessionMasterIds.has(player.id)) sessionMasterIds.delete(player.id);
    for (var i = lastTouches.length - 1; i >= 0; i--){
      if (lastTouches[i] && lastTouches[i].player && lastTouches[i].player.id === player.id){
        lastTouches.splice(i,1);
      }
    }
    // تتبع اللاعب اللي خرج لكشف البانات المقصودة من الادمن (GUI kick)
    var leaveKey = player.auth ? player.auth : "name:" + player.name.toLowerCase();
    recentlyLeft.set(leaveKey, Date.now());

    // cleanup previousAdminStatus
    previousAdminStatus.delete(player.id);
  };

  // CRITICAL: detect when a persistent master's admin status changes to false (unauthorized demotion)
  // When this happens, immediately restore admin, send warning, and show message
  room.onPlayerAdminChange = function(p){
    if (!p) return;

    // detect previous state
    var prev = previousAdminStatus.has(p.id) ? previousAdminStatus.get(p.id) : null;
    previousAdminStatus.set(p.id, !!p.admin);

    // If a persistent master was demoted (admin changed from true to false)
    if (p.auth && persistentMasterAuths.has(p.auth) && p.admin === false){
      // restore admin immediately
      if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(p.id, true);

      // public announcement
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("⚠️ Unauthorized demotion attempt blocked — admin restored to master " + p.name + ".", null, 0xffd700, "bold", 3);

      // Warn likely perpetrators: all current admins that are NOT masters
      var list = typeof room.getPlayerList === "function" ? room.getPlayerList() : [];
      for (var i=0;i<list.length;i++){
        var pl = list[i];
        if (!isMaster(pl) && pl.admin === true){
          // private warning to non-master admin(s)
          if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("⛔ WARNING: You attempted to demote a MASTER ("+p.name+"). This action has been blocked and admin restored. Do NOT remove master admins.", pl.id, 0xff4444, "bold", 3);
        }
      }
      return;
    }

    // any player who just got admin and isn't a persistent master => remember them as normal admin
    if (p.admin === true && !(p.auth && persistentMasterAuths.has(p.auth))){
      if (p.auth) normalAuths.add(p.auth); else normalNames.add(p.name);
    }
  };

  // TOUCH tracking
  room.onPlayerBallKick = function(p){
    if (!p || typeof p.team === "undefined") return;
    var now = Date.now();
    lastTouches.push({ player: p, team: p.team, ts: now });
    if (lastTouches.length > MAX_TOUCH_HISTORY) lastTouches.shift();
  };

  function pad2(n){ return n < 10 ? "0" + n : "" + n; }

  room.onTeamGoal = function(team){
    var now = Date.now();
    var sc = typeof room.getScores === "function" ? room.getScores() : null;
    var timeRaw = sc ? sc.time : 0;
    var m = Math.trunc(timeRaw/60), s = Math.trunc(timeRaw%60);
    var timeStr = m + ":" + pad2(s);

    while (lastTouches.length && (now - lastTouches[0].ts) > GOAL_TOUCH_WINDOW*2) lastTouches.shift();

    var scorer = null;
    var scorerIndex = -1;
    for (var i = lastTouches.length - 1; i >= 0; i--){
      var t = lastTouches[i];
      if (!t || !t.player) continue;
      if (now - t.ts <= GOAL_TOUCH_WINDOW){
        scorer = t.player;
        scorerIndex = i;
        break;
      }
    }

    if (!scorer && lastTouches.length){
      var last = lastTouches[lastTouches.length - 1];
      if (last) { scorer = last.player; scorerIndex = lastTouches.length - 1; }
    }

    var isOwn = false;
    var assister = null;

    if (scorer){
      var touchEntry = (scorerIndex >= 0 && scorerIndex < lastTouches.length) ? lastTouches[scorerIndex] : null;
      if (touchEntry) isOwn = (touchEntry.team !== team);
      else isOwn = (typeof scorer.team !== "undefined" && scorer.team !== team);

      for (var j = scorerIndex - 1; j >= 0; j--){
        var prev = lastTouches[j];
        if (!prev || !prev.player) continue;
        if ((now - prev.ts) > GOAL_TOUCH_WINDOW) break;
        if (prev.player.id !== scorer.id){
          if (!assister && touchEntry && prev.team === touchEntry.team){ assister = prev.player; break; }
          if (!assister) assister = prev.player;
        }
      }
    }

    if (isOwn){
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("⚠️ Own goal by " + (scorer ? scorer.name : "unknown") + " at " + timeStr + "!", null, 0xff8888, "bold", 2);
    } else {
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("⚽ Goal by " + (scorer ? scorer.name : "unknown") + (assister ? " (assist: " + assister.name + ")" : "") + " at " + timeStr, null, 0x00ff88, "bold", 2);
    }

    var key = (goals.size ? goals.size + 1 : 1) + ") " + (scorer ? scorer.name : "unknown");
    goals.set(key, [timeStr, assister ? assister.name : "", isOwn ? "og" : ""]);

    lastTouches = [];
  };

  room.onTeamVictory = function(scores){
    if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🏆 " + (scores.red > scores.blue ? "Red" : "Blue") + " wins! (" + scores.red + " - " + scores.blue + ")", null, 0xffd700, "bold", 2);
    if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Scored goals:", null, 0xcccccc, "normal", 2);
    goals.forEach(function(v,k){
      var own = v[2] === "og" ? " (own goal)" : "";
      var assist = v[1] ? " assist: " + v[1] : "";
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement(k + assist + own + " at " + v[0], null, 0xaaaaaa, "normal", 2);
    });
  };

  // COMMANDS
  function cmd_admin(player, args){
    if (!args || args.length === 0){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Usage: !admin <password>", player.id, 0xffaa00, "normal", 2); return false; }
    if (args[0] !== masterPassword){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Wrong password.", player.id, 0xff4444, "bold", 2); return false; }
    if (player.auth){
      persistentMasterAuths.add(player.auth);
      if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(player.id, true);
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("👑 " + player.name + " is now MASTER (persistent).", null, 0xffd700, "bold", 2);
    } else {
      sessionMasterIds.add(player.id);
      if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(player.id, true);
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("👑 " + player.name + " is now MASTER (session only).", player.id, 0xffd700, "bold", 2);
    }
    return false;
  }

  function cmd_map(player, args){
    if (!hasAdminPrivileges(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Admins only.", player.id, 0xff4444, "bold", 2); return false; }
    var name = (args && args.length) ? args.join(" ").trim() : "";
    if (!name || name.toLowerCase() === "put_json_map"){
      if (typeof room.setCustomStadium === "function") room.setCustomStadium(JSON.stringify(put_json_map));
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("✅ Map loaded (put_json_map).", null, 0x00ff88, "normal", 2);
      if (typeof room.stopGame === "function") room.stopGame();
      if (typeof room.startGame === "function") room.startGame();
      return false;
    }
    var stadiums = ["Classic","Easy","Small","Big","Rounded","Hockey","BigHockey","BigEasy","BigRounded","Huge"];
    if (stadiums.indexOf(name) !== -1){
      if (typeof room.setDefaultStadium === "function") room.setDefaultStadium(name);
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🏟️ Stadium: " + name, null, 0x00bfff, "bold", 2);
    } else {
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Usage: !map OR !map put_json_map OR !map <StadiumName>.", player.id, 0xffaa00, "normal", 2);
    }
    return false;
  }

  function cmd_rr(player){ if (!hasAdminPrivileges(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Admins only.", player.id, 0xff4444, "bold", 2); return false; } if (typeof room.stopGame === "function") room.stopGame(); if (typeof room.startGame === "function") room.startGame(); if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔄 Game restarted!", null, 0x00bfff, "bold", 2); return false; }

  function cmd_swap(player){ if (!hasAdminPrivileges(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Admins only.", player.id, 0xff4444, "bold", 2); return false; } var L = room.getPlayerList() || []; for (var i=0;i<L.length;i++){ var p = L[i]; if (p.team === 1 && typeof room.setPlayerTeam === "function") room.setPlayerTeam(p.id, 2); else if (p.team === 2 && typeof room.setPlayerTeam === "function") room.setPlayerTeam(p.id, 1); } if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔄 Teams swapped!", null, 0x00bfff, "bold", 2); return false; }

  function cmd_ban(player, args){
    if (!hasAdminPrivileges(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Admins only.", player.id, 0xff4444, "bold", 2); return false; }
    if (!args || args.length === 0){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Usage: !ban PlayerName", player.id, 0xffaa00, "normal", 2); return false; }
    var t = findPlayer(args.join(" "));
    if (!t){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Player not found.", player.id, 0xff4444, "normal", 2); return false; }
    if (isMaster(t) && !isMaster(player)){
      if (typeof room.clearBans === "function") room.clearBans();
      if (typeof room.sendAnnouncement === "function") {
        room.sendAnnouncement("❌ You cannot ban a MASTER. Action prevented.", player.id, 0xff4444, "bold", 3);
        room.sendAnnouncement("🚫 Ban cleared auto: Attempted ban by " + player.name + " on master " + t.name + " — bans cleared.", null, 0xff6666, "bold", 3);
      }
      if (t.auth && persistentMasterAuths.has(t.auth) && typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(t.id, true);
      return false;
    }
    if (isMaster(player)){
      if (typeof room.kickPlayer === "function") room.kickPlayer(t.id, "Banned by master", true);
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("⛔ " + t.name + " banned by master " + player.name + " (persistent).", null, 0xff4444, "bold", 2);
      if (t.auth) persistentBans.add(t.auth); else persistentBans.add("name:" + t.name.toLowerCase());
    } else {
      var adminBanKey = t.auth ? t.auth : "name:" + t.name.toLowerCase();
      adminBans.add(adminBanKey);
      if (typeof room.kickPlayer === "function") room.kickPlayer(t.id, "Banned by admin", true);
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("⛔ " + t.name + " banned by admin " + player.name + ".", null, 0xffaa00, "bold", 2);
    }
    return false;
  }

  function cmd_kick(player, args){ if (!hasAdminPrivileges(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Admins only.", player.id, 0xff4444, "bold", 2); return false; } if (!args || args.length === 0){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Usage: !kick PlayerName", player.id, 0xffaa00, "normal", 2); return false; } var t = findPlayer(args.join(" ")); if (!t){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Player not found.", player.id, 0xff4444, "normal", 2); return false; } if (isMaster(t) && !isMaster(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ You cannot kick a master.", player.id, 0xff4444, "bold", 2); return false; } if (typeof room.kickPlayer === "function") room.kickPlayer(t.id, "Kicked by admin", false); if (typeof room.sendAnnouncement === "function") room.sendAnnouncement(t.name + " was kicked by " + player.name + ".", null, 0xffaa00, "normal", 2); return false; }

  function cmd_mute(player, args){ if (!isMaster(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Master only.", player.id, 0xff4444, "bold", 2); return false; } if (!args || args.length === 0){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Usage: !mute PlayerName", player.id, 0xffaa00, "normal", 2); return false; } var t = findPlayer(args.join(" ")); if (!t){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Player not found.", player.id, 0xff4444, "normal", 2); return false; } muted.add(t.name.toLowerCase()); if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔇 " + t.name + " muted by master.", null, 0xffaa00, "normal", 2); return false; }

  function cmd_unmute(player,args){ if (!isMaster(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Master only.", player.id, 0xff4444, "bold", 2); return false; } if (!args || args.length === 0){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Usage: !unmute PlayerName", player.id, 0xffaa00, "normal", 2); return false; } var u = findPlayer(args.join(" ")); if (!u){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Player not found.", player.id, 0xff4444, "normal", 2); return false; } muted.delete(u.name.toLowerCase()); if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔊 " + u.name + " unmuted by master.", null, 0x00ff88, "normal", 2); return false; }

  function cmd_clearbans(player){ if (!isMaster(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Master only.", player.id, 0xff4444, "bold", 2); return false; } if (typeof room.clearBans === "function") room.clearBans(); persistentBans.clear(); adminBans.clear(); if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("✅ Bans cleared by master.", null, 0x4ade80, "normal", 2); return false; }

  function cmd_players(player){ var list = room.getPlayerList() || []; var names = []; for (var i=0;i<list.length;i++) names.push(list[i].name); if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("👥 Players: " + (names.join(", ") || "none"), player.id, 0xaaaaaa, "normal", 2); return false; }

  function cmd_help(player){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Public: !help | !players | !bb | !cya | !rr | !swap | !map | t <msg> (team) | A <msg> (admin chat).", player.id, 0xaaaaaa, "normal", 2); return false; }

  function cmd_master(player){ if (!isMaster(player)) return false; if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("MASTER: !ban, !kick, !giveadmin, !removeadmin, !demote, !clearbans, !mute, !unmute, !rr, !swap, !map", player.id, 0xffd700, "normal", 2); return false; }

  function cmd_selfkick(player, cmdName){ if (!player) return false; if (typeof room.kickPlayer === "function") room.kickPlayer(player.id, "Self command: " + cmdName, false); if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("You used " + cmdName + " — you were removed.", player.id, 0xffaa00, "normal", 2); return false; }

  function cmd_giveadmin(player,args){ if (!isMaster(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Master only.", player.id, 0xff4444, "bold", 2); return false; } if (!args || args.length === 0){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Usage: !giveadmin PlayerName", player.id, 0xffaa00, "normal", 2); return false; } var t = findPlayer(args.join(" ")); if (!t){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Player not found.", player.id, 0xff4444, "normal", 2); return false; } if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(t.id, true); if (t.auth) normalAuths.add(t.auth); else normalNames.add(t.name); if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔑 " + t.name + " granted admin by master " + player.name + ".", null, 0xffd700, "normal", 2); return false; }

  function cmd_removeadmin(player,args){
    if (!isMaster(player)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Master only.", player.id, 0xff4444, "bold", 2); return false; }
    if (!args || args.length === 0){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("Usage: !removeadmin PlayerName", player.id, 0xffaa00, "normal", 2); return false; }
    var r = findPlayer(args.join(" "));
    if (!r){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Player not found.", player.id, 0xff4444, "normal", 2); return false; }
    if (r.auth && persistentMasterAuths.has(r.auth)){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("❌ Cannot remove master.", player.id, 0xff4444, "bold", 2); return false; }
    if (typeof room.setPlayerAdmin === "function") room.setPlayerAdmin(r.id, false);
    if (r.auth) normalAuths.delete(r.auth);
    normalNames.delete(r.name);
    if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("🔻 " + r.name + " had admin removed by master.", null, 0xffd700, "normal", 2);
    return false;
  }

  function cmd_demote(player,args){ return cmd_removeadmin(player,args); }

  // CHAT HANDLING
  room.onPlayerChat = function(player, message){
    if (!player) return;
    if (muted.has(player.name.toLowerCase())) return false;
    var raw = (message || "").trim();
    if (!raw) return;

    // team chat
    if (raw.length > 2 && (raw.charAt(0) === "t" || raw.charAt(0) === "T") && raw.charAt(1) === " "){
      var txt = raw.slice(2).trim();
      if (!txt) return false;
      if (player.team === 0){ if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("⚠️ You are not on a team.", player.id, 0xffaa00, "normal", 2); return false; }
      var prefix = "";
      var color = 0xcccccc;
      if (player.team === 1){ prefix = "🔴(Red Team) "; color = 0xff4444; }
      else if (player.team === 2){ prefix = "🔵(Blue Team) "; color = 0x00bfff; }
      var list = room.getPlayerList() || [];
      for (var i=0;i<list.length;i++){
        if (list[i].team === player.team){
          if (typeof room.sendAnnouncement === "function") room.sendAnnouncement(prefix + player.name + ": " + txt, list[i].id, color, "normal", 2);
        }
      }
      return false;
    }

    // admin chat A
    if (raw.length > 2 && raw.charAt(0) === "A" && raw.charAt(1) === " "){
      var txtA = raw.slice(2).trim();
      if (!txtA) return false;
      var pl = room.getPlayerList() || [];
      for (var j=0;j<pl.length;j++){ if (isMaster(pl[j])) { if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("👑 MASTER CHAT | " + player.name + ": " + txtA, pl[j].id, 0xffd700, "normal", 2); } }
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("(A sent) " + player.name + ": " + txtA, player.id, 0xaaaaaa, "normal", 2);
      return false;
    }

    // master private chat @@
    if (raw.length > 3 && raw.slice(0,2) === "@@"){
      var txtM = raw.slice(2).trim();
      if (!txtM) return false;
      var all = room.getPlayerList() || [];
      for (var x=0;x<all.length;x++){
        var pp = all[x];
        if (isMaster(pp)){
          if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("(Master) " + player.name + ": " + txtM, pp.id, 0xff88ff, "normal", 2);
        }
      }
      if (typeof room.sendAnnouncement === "function") room.sendAnnouncement("(Master sent) " + player.name + ": " + txtM, player.id, 0xaaaaaa, "normal", 2);
      return false;
    }

    // commands
    if (raw.charAt(0) === "!"){
      var parts = raw.split(/\s+/);
      var cmd = parts[0].toLowerCase();
      var args = parts.slice(1);

      if (cmd === "!bb" || cmd === "!cya") return cmd_selfkick(player, cmd);

      switch(cmd){
        case "!help": return cmd_help(player);
        case "!players": return cmd_players(player);
        case "!admin": return cmd_admin(player, args);
        case "!map": return cmd_map(player, args);
        case "!rr": return cmd_rr(player);
        case "!swap": return cmd_swap(player);
        case "!ban": return cmd_ban(player, args);
        case "!kick": return cmd_kick(player, args);
        case "!mute": return cmd_mute(player, args);
        case "!unmute": return cmd_unmute(player, args);
        case "!clearbans": return cmd_clearbans(player);
        case "!giveadmin": return cmd_giveadmin(player, args);
        case "!removeadmin": return cmd_removeadmin(player, args);
        case "!demote": return cmd_demote(player, args);
        case "!master": return cmd_master(player);
        default: return;
      }
    }

    return;
  };

  // ready
  if (typeof console !== "undefined" && console.log) console.log("Host script ready — map applied, auto-ban clear, master protection enforced, team chat styled.");

  // keep-alive note: Render will keep the node process alive as long as it is a running service (start script).
})();
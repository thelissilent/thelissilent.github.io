var verbs = [
  "aggregate",
  "architect",
  "benchmark",
  "brand",
  "cultivate",
  "deliver",
  "deploy",
  "disintermediate",
  "drive",
  "e&#8209;enable",
  "embrace",
  "empower",
  "enable",
  "engage",
  "engineer",
  "enhance",
  "envisioneer",
  "evolve",
  "expedite",
  "exploit",
  "extend",
  "facilitate",
  "generate",
  "grow",
  "harness",
  "implement",
  "incentivize",
  "incubate",
  "innovate",
  "integrate",
  "iterate",
  "leverage",
  "matrix",
  "maximize",
  "mesh",
  "monetize",
  "morph",
  "optimize",
  "orchestrate",
  "productize",
  "recontextualize",
  "redefine",
  "reintermediate",
  "reinvent",
  "repurpose",
  "revolutionize",
  "scale",
  "seize",
  "strategize",
  "streamline",
  "syndicate",
  "synergize",
  "synthesize",
  "target",
  "transform",
  "transition",
  "unleash",
  "utilize",
  "visualize",
  "whiteboard"
];
  
var adjectives = [
  "24/365",
  "24/7",
  "B2B",
  "B2C",
  "back&#8209;end",
  "best&#8209;of&#8209;breed",
  "bleeding&#8209;edge",
  "bricks&#8209;and&#8209;clicks",
  "clicks&#8209;and&#8209;mortar",
  "collaborative",
  "compelling",
  "cross&#8209;platform",
  "cross&#8209;media",
  "customized",
  "cutting&#8209;edge",
  "distributed",
  "dot&#8209;com",
  "dynamic",
  "e&#8209;business",
  "efficient",
  "end&#8209;to&#8209;end",
  "enterprise",
  "extensible",
  "frictionless",
  "front&#8209;end",
  "global",
  "granular",
  "holistic",
  "impactful",
  "innovative",
  "integrated",
  "interactive",
  "intuitive",
  "killer",
  "leading&#8209;edge",
  "magnetic",
  "mission&#8209;critical",
  "next&#8209;generation",
  "one&#8209;to&#8209;one",
  "open&#8209;source",
  "out&#8209;of&#8209;the&#8209;box",
  "plug&#8209;and&#8209;play",
  "proactive",
  "real&#8209;time",
  "revolutionary",
  "rich",
  "robust",
  "scalable",
  "seamless",
  "sexy",
  "sticky",
  "strategic",
  "synergistic",
  "transparent",
  "turn&#8209;key",
  "ubiquitous",
  "user&#8209;centric",
  "value&#8209;added",
  "vertical",
  "viral",
  "virtual",
  "visionary",
  "web&#8209;enabled",
  "wireless",
  "world&#8209;class"
];

var nouns = [
  "action&#8209;items",
  "applications",
  "architectures",
  "bandwidth",
  "channels",
  "communities",
  "content",
  "convergence",
  "deliverables",
  "e&#8209;business",
  "e&#8209;commerce",
  "e&#8209;markets",
  "e&#8209;services",
  "e&#8209;tailers",
  "experiences",
  "eyeballs",
  "functionalities",
  "infomediaries",
  "infrastructures",
  "initiatives",
  "interfaces",
  "markets",
  "methodologies",
  "metrics",
  "mindshare",
  "models",
  "networks",
  "niches",
  "paradigms",
  "partnerships",
  "platforms",
  "portals",
  "relationships",
  "ROI",
  "synergies",
  "web&#8209;readiness",
  "schemas",
  "solutions",
  "supply&#8209;chains",
  "systems",
  "technologies",
  "users",
  "vortals",
  "web services"
];

//get verb
function getVerb() {
  "use strict";
  var randomVerbNumber = Math.floor((Math.random() * verbs.length));
  return verbs[randomVerbNumber];
}

//get verb
function getAdjective() {
  "use strict";
  var randomVerbNumber = Math.floor((Math.random() * adjectives.length));
  return adjectives[randomVerbNumber];
}

//get verb
function getNoun() {
  "use strict";
  var randomVerbNumber = Math.floor((Math.random() * nouns.length));
  return nouns[randomVerbNumber];
}

/* create buzzword
 */
function getBuzzword() {
  var buzzword = getVerb() + " " + getAdjective() + " " + getNoun();
  document.getElementById("buzzword").innerHTML = buzzword;
  
  var btnDefault = document.getElementById("btn_default");
  btnDefault.innerHTML="Select All";
  btnDefault.className="";
}

getBuzzword();

function copyText() {
  var doc = document;
  var text = doc.getElementById("buzzword");    

  if (doc.body.createTextRange) { // ms
      var range = doc.body.createTextRange();
      range.moveToElementText(text);
      range.select();
  } else if (window.getSelection) { // moz, opera, webkit
      var selection = window.getSelection();            
      var range = doc.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
  }
  
  // change button text
  var btnDefault = document.getElementById("btn_default");
  btnDefault.innerHTML="Selected";
  btnDefault.className ="inactive";
}
//tealium universal tag - x_axis.631 ut4.0.201512211436, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};x_axis.o[loader].sender[id]=u;if(x_axis===undefined){x_axis={};}if(x_axis.ut===undefined){x_axis.ut={};}if(x_axis.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){x_axis.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){x_axis.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=x_axis.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){x_axis.ut.loader({type:"img",src:"//t.mookie1.com/t/v1/event?migClientId=4663&migAction=marriott-search-result-page-in&migSource=mig"});var xaxis_member_status='';try{xaxis_member_status=window.tmParam.tm_rewards_level;}catch(e){}
var ping_xaxis_dmp=new Image(1,1);ping_xaxis_dmp.src='//t.mookie1.com/t/v1/event?migClientId=4085&migAction=marriott_find_hotel&migSource=mig&migParam1='+xaxis_member_status;var marsha=""+b["lbData_MP1"]+"".replace("marsha--",'');;var splitOnComma="%2C";var marshaArray=marsha.split(splitOnComma);var anUrl="adnxs.com/seg?member=1661&add_code=MARSHA-";if(document.location.protocol=="http:"){an_host='http://ib.';}else{an_host='https://secure.';}
var ping_an_marsha=new Image(1,1);ping_an_marsha.src=an_host+anUrl;for(i=0;i<marshaArray.length;i++){var marshaCode=marshaArray[i];var ping_tdmp_search=new Image(1,1);ping_tdmp_search.src='//gmtdmp.mookie1.com/tagr/v1/activity?acid=2&inst=NA&tagid=1512&src.rand='+Math.random()+'&trb.clientID=55&trb.activityID=1512&src.MARSHA='+marshaCode;}
B20WestArray=["SDFCH","LEXNO","CVGCY","CMHDB","CMHCW","TOLCH","CVGBA","DAYML","INDCS","INDCM","DTTTR","DTWCA","DTWDC","DTWAB","DTWNV","DSMCH","MKEDT","CHIAH","CHIDF","CHIDR","CHICA","CHIHP","CHILS","CHISH","CHIWK","CHILB","CHIOT","CHINP","CHIWB","CHIRD","RFDCH","STLCH","STLWP","MCIUH","MCICA","MCIOV","MCICV"];if(B20WestArray.indexOf(marshaCode)!=-1){ping_tdmp_converter.src="//gmtdmp.mookie1.com/tagr/v1/activity?acid=2&inst=NA&tagid=1927&src.rand="+b["lbData_REALRAND"]+"&trb.clientID=55&trb.activityID=1927";}
x_axis.ut.loader({type:"img",src:"https://secure.adnxs.com/seg?add=757498&t=2"});x_axis.ut.loader({type:"img",src:"https://secure.adnxs.com/seg?add=2674747&t=2"});x_axis.ut.loader({type:"img",src:"//insight.adsrvr.org/track/evnt/?adv=lt42rtjd&ct=0:mtovly38&fmt=3"});x_axis.ut.loader({type:"img",src:"//in-gmtdmp.mookie1.com/tagr/v1/activity?acid=16&inst=NA&tagid=1100910821&src.rand="+Math.random()+"&trb.clientID=289&trb.activityID=7229"});x_axis.ut.loader({type:"img",src:"//action.media6degrees.com/orbserv/hbpix?pixId=26027&pcv=45"});}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in x_axis.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};x_axis.o[loader].loader.LOAD(id);})("631","xaxis.-marriott-and-ritz");}catch(error){x_axis.DB(error);}
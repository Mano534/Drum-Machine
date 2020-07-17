(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{12:function(e,a,r){},13:function(e,a,r){},14:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),s=r(2),o=r.n(s),c=(r(12),r(13),r(3)),i=r(4),d=r(6),m=r(5),l=function(e){Object(d.a)(r,e);var a=Object(m.a)(r);function r(e){var t;return Object(c.a)(this,r),(t=a.call(this,e)).check=function(){t.setState({triggerBand:!t.state.triggerBand})},t.handleClick=function(e,a){t.myref.forEach((function(e){a===e.id&&e.play()})),t.setState({displayed:e})},t.soundControls=function(){t.setState({triggerSound:!t.state.triggerSound})},t.myref=[],t.state={triggerSound:!0,triggerBand:!1,displayed:"",sounds:{bankOne:[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],bankTwo:[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]}},t}return Object(i.a)(r,[{key:"render",value:function(){var e=this,a=this.state.sounds.bankOne.map((function(a,r){return n.a.createElement("button",{tabIndex:"0",className:"drum-pad",onClick:function(){return e.handleClick(a.id,a.keyTrigger)},key:r},a.keyTrigger,n.a.createElement("audio",{src:a.url,className:"clip","aria-label":"press the ".concat(a.keyTrigger," sound is ON"),name:a.id,ref:function(a){return e.myref[r]=a},id:a.keyTrigger}))})),r=this.state.sounds.bankTwo.map((function(a,r){return n.a.createElement("button",{tabIndex:"0",className:"drum-pad",onClick:function(){return e.handleClick(a.id,a.keyTrigger)},key:r},a.keyTrigger,n.a.createElement("audio",{src:a.url,className:"clip","aria-label":"press the ".concat(a.keyTrigger," sound is ON"),name:a.id,ref:function(a){return e.myref[r]=a},id:a.keyTrigger}))})),t=this.state.sounds.bankTwo.map((function(a,r){return n.a.createElement("button",{className:"drum-pad",key:r,tabIndex:"0"},a.keyTrigger,n.a.createElement("audio",{src:a.url,className:"clip","aria-label":"press the ".concat(a.keyTrigger," sound is Off"),name:"",ref:function(a){return e.myref[r]=a},id:a.keyTrigger}))}));return this.state.triggerSound&&document.addEventListener("keyup",(function(a){e.myref.forEach((function(r){a.key.toUpperCase()===r.id&&(r.play(),e.setState({displayed:r.getAttribute("name")}))}))})),n.a.createElement("main",{id:"drum-machine",className:"d-flex main-split"},n.a.createElement("section",{className:"button-group","aria-label":"drum pad"},this.state.triggerSound?this.state.triggerBand?a:r:t),n.a.createElement("section",{className:"other-Content","aria-label":"drum pad controlls and display name"},n.a.createElement("p",{className:"display-drumpad-content",tabIndex:"0",id:"display"},this.state.displayed?this.state.displayed:"Sound"),n.a.createElement("div",{"aria-label":"controls for the Drum machine",className:"d-flex btngroup"},n.a.createElement("div",{className:"controls","aria-label":"controls for the sound"},n.a.createElement("label",{htmlFor:"sound"},this.state.triggerSound?"Sound ON":"Sound OFF"),n.a.createElement("input",{id:"sound",onChange:this.soundControls,type:"checkbox",role:"switch","aria-label":this.state.triggerSound?"press to turn sound OFF":"press to turn sound ON",className:"switch"})),n.a.createElement("div",{className:"controls","aria-label":"controls for the machine type",name:"label in the right"},n.a.createElement("label",{htmlFor:"machine"},this.state.triggerBand?"Machine TWO":"Machine ONE"),n.a.createElement("input",{type:"checkbox",id:"machine",onChange:this.check,role:"switch","aria-label":"press to change the music machine",name:"",className:"switch"})))))}}]),r}(t.Component);var u=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"center"},n.a.createElement("h1",{className:"headCenter","aria-label":"this project is made for freeCodeCamp"},"Drum Machine")),n.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,r){e.exports=r(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.73dbaced.chunk.js.map
(()=>{"use strict";var e={5108:(e,t,n)=>{var o=n(3751),a=n(3637),r=n(1635),l=n(641),i=n(33),s=n(953),u=n(4979),d=n(9279),c=n(6883),h=n(1828),v=n(5249),f=n(2612),p=n.n(f);function g(e){var t=(0,l.EW)((function(){return p()(e.value.latitudeDeg,e.value.longitudeDeg)})),n=(0,l.EW)((function(){return(0,v.Zn)(t.value)})),o=(0,l.EW)((function(){return(0,v.qD)(new Date,t.value,"zzz")})),a=Intl.DateTimeFormat().resolvedOptions().timeZone,r=60*(new Date).getTimezoneOffset()*1e3;return console.log("Browser timezone:",a),console.log("Browser timezone offset:",r),console.log("Selected timezone:",t.value),console.log("Selected timezone offset:",n.value),{selectedTimezone:t,shortTimezone:o,selectedTimezoneOffset:n,browserTimezone:a,browserTimezoneOffset:r}}function m(e,t,n){t=Math.PI-t,t<0&&(t+=2*Math.PI);var o=Math.atan2(Math.sin(t),Math.cos(t)*Math.sin(n)+Math.tan(e)*Math.cos(n));o<0&&(o+=2*Math.PI);var a=Math.asin(Math.sin(n)*Math.sin(e)-Math.cos(n)*Math.cos(e)*Math.cos(t));return{ra:o,dec:a}}function _(e){var t=e.getUTCFullYear(),n=e.getUTCMonth()+1,o=e.getUTCDate(),a=e.getUTCHours(),r=e.getUTCMinutes(),l=e.getUTCSeconds()+e.getUTCMilliseconds()/1e3;1!=n&&2!=n||(t-=1,n+=12);var i=Math.floor(t/100),s=2-i+Math.floor(i/4),u=Math.floor(365.25*t),d=Math.floor(30.6001*(n+1)),c=s+u+d+1720994.5+o+(a+r/60+l/3600)/24;return c}function b(e,t){var n=t*a.R2D,o=_(e)-2451545,r=o/36525,l=280.46061837+360.98564736629*o+387933e-9*r*r-r*r*r/3871e4+n;if(l>0)while(l>360)l-=360;else while(l<0)l+=360;return l}function C(e,t,n,o,r){var l=b(r,o),i=m(e,t,n),s=i.ra*a.R2D,u=l+s;return u<0&&(u+=360),u>360&&(u-=360),{raRad:a.D2R*u,decRad:i.dec}}function w(e,t,n,o,r){var l=b(r,o)-a.R2D*e;l<0&&(l+=360);var i=a.D2R*l,s=t,u=n,d=Math.sin(s)*Math.sin(u)+Math.cos(s)*Math.cos(u)*Math.cos(i),c=Math.asin(d),h=(Math.sin(s)-Math.sin(c)*Math.sin(u))/(Math.cos(c)*Math.cos(u)),v=Math.acos(h);return v+=80*Math.PI%(2*Math.PI),Math.sin(i)>0&&(v=2*Math.PI-v),{altRad:c,azRad:v}}var x=new u.Place;x.set_names(["Sun"]),x.set_classification(d.Jq.solarSystem),x.set_target(d.Pj.sun),x.set_zoomLevel(20);var y=function(e,t){var n,o=6,l=2*Math.PI/o,i=new u.TriangleList,s=u.Color.load(t.color);s.a=Math.round(null!==(n=255*t.opacity)&&void 0!==n?n:1);for(var d=u.Settings.get_active(),c=d.get_locationLng()*a.D2R,h=d.get_locationLat()*a.D2R,v=u.SpaceTimeController.get_now(),f=0;f<o;f++){var p=[[0,f*l],[-Math.PI/2,f*l],[0,(f+1)*l]];p=p.map((function(e){var t=C.apply(void 0,(0,r.fX)((0,r.fX)([],(0,r.zs)(e),!1),[h,c,v],!1));return u.Coordinates.raDecTo3d(a.R2D*t.raRad/15,a.R2D*t.decRad)})),i.addSubdividedTriangles.apply(i,(0,r.fX)((0,r.fX)([],(0,r.zs)(p),!1),[s,new u.Dates(0,1),2],!1))}i.draw(e,1,!0)};function k(e){var t=-6*a.D2R,n=3*t;return Math.min(Math.max((1+Math.atan(Math.PI*e/-n))/2,0),1)}var T=function(e,t){var n=6,o=2*Math.PI/n,l=new u.TriangleList,i=u.Color.load(t.color),s=u.Settings.get_active(),d=s.get_locationLng()*a.D2R,c=s.get_locationLat()*a.D2R,h=w(15*x.get_RA()*a.D2R,x.get_dec()*a.D2R,c,d,u.SpaceTimeController.get_now()),v=k(h.altRad);i.a=Math.round(255*v),u.WWTControl.scriptInterface.setForegroundOpacity(100*(1-v));for(var f=u.SpaceTimeController.get_now(),p=0;p<n;p++){var g=[[0,p*o],[0,(p+1)*o],[Math.PI/2,p*o]];g=g.map((function(e){var t=C.apply(void 0,(0,r.fX)((0,r.fX)([],(0,r.zs)(e),!1),[c,d,f],!1));return u.Coordinates.raDecTo3d(a.R2D*t.raRad/15,a.R2D*t.decRad)})),l.addSubdividedTriangles.apply(l,(0,r.fX)((0,r.fX)([],(0,r.zs)(g),!1),[i,new u.Dates(0,1),2],!1))}l.draw(e,1,!0)};function R(e){var t=d.Pj[e];return t=t.charAt(0).toUpperCase()+t.slice(1),t}function L(e){var t=new u.Place,n=R(e);return t.set_names([n]),t.set_classification(d.Jq.solarSystem),t.set_target(e),t}function P(e,t,n){var o=18e-5,a=u.SpaceTimeController.get_location().get_lat()<0?-1:1,r=u.Vector3d.create(0,a,0),l=L(e),i=u.Coordinates.raDecTo3d(l.get_RA(),l.get_dec());return i.y-=.025,new u.Text3d(i,r,t,n,o)}function S(){var e=37.5,t=new u.Text3dBatch(e),n=Object.keys(d.Pj).filter((function(e){return!isNaN(Number(e))}));return n.forEach((function(n){if(Number(n)<=d.Pj.moon){var o=R(n),a=P(n,o,e);t.add(a)}})),t}function F(){u.Grids._altAzTextBatch=null}function D(){if(null==u.Grids._altAzTextBatch){var e=70;u.Grids._altAzTextBatch=new u.Text3dBatch(e);var t=u.SpaceTimeController.get_location().get_lat()<0?-1:1,n=.03*t,o=u.Vector3d.create(0,t,0),a=[[[0,n,-1],"N"],[[-t,n,0],"E"],[[0,n,1],"S"],[[t,n,-.0095],"V"],[[t,n,.0095],"V"]];a.forEach((function(e){var t=(0,r.zs)(e,2),n=t[0],a=t[1];u.Grids._altAzTextBatch.add(new u.Text3d(u.Vector3d.create.apply(u.Vector3d,(0,r.fX)([],(0,r.zs)(n),!1)),o,a,75,18e-5))}))}}var W=function(){var e=new u.GlyphCache,t=window.location.href;t.endsWith("/")&&(t=t.slice(0,t.length-1));var n="".concat(t,"/glyphs2.png"),o="".concat(t,"/glyphs2.xml");return e._texture=u.Texture.fromUrl(n),e._webFile=new u.WebFile(o),e._webFile.onStateChange=u.GlyphCache.prototype._glyphXmlReady.bind(e),e._webFile.send(),e}();function M(e){e._glyphCache=W,e.prepareBatch()}function z(e,t){null==u.Planets._planetTextures&&u.Planets._loadPlanetTextures();var n=u.Planets._geocentricElongation(u.Planets._planetLocations[9].RA,u.Planets._planetLocations[9].dec,u.Planets._planetLocations[0].RA,u.Planets._planetLocations[0].dec),o=u.Planets._planetLocations[9].RA-u.Planets._planetLocations[0].RA;u.Planets._planetLocations[9].RA<u.Planets._planetLocations[0].RA&&(o+=24);u.Planets._phaseAngle(n,u.Planets._planetLocations[9].distance,u.Planets._planetLocations[0].distance);var a=15*Math.abs(u.Planets._planetLocations[9].RA-u.Planets._planetLocations[0].RA)*Math.cos(u.Coordinates.degreesToRadians(u.Planets._planetLocations[0].dec)),r=Math.abs(u.Planets._planetLocations[9].dec-u.Planets._planetLocations[0].dec),l=Math.sqrt(a*a+r*r),i=0,s=u.Planets._planetScales[9]/2-l;for(var d in s>u.Planets._planetScales[0]/4&&(!0,i=Math.min(1,(s-u.Planets._planetScales[0]/2)/.001),u.Planets._drawPlanet(e,18,i)),u.Planets._planetDrawOrder){var c=u.Planets._planetDrawOrder[d];c<=9&&u.Planets._drawPlanet(e,c,1)}return!0}function V(e,t,n){var o,a,l;void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===n&&(n=!0),null!=this.renderContext.get_backgroundImageset()?this.renderType=this.renderContext.get_backgroundImageset().get_dataSetType():this.renderType=2;var i=!1;if(this.canvas.width!==this.canvas.parentNode.clientWidth&&(this.canvas.width=this.canvas.parentNode.clientWidth,i=!0),this.canvas.height!==this.canvas.parentNode.clientHeight&&(this.canvas.height=this.canvas.parentNode.clientHeight,i=!0),i&&null!=this.explorer&&this.explorer.refresh(),!(this.canvas.width<1||this.canvas.height<1)){if(i&&(this._crossHairs=null),u.Tile.lastDeepestLevel=u.Tile.deepestLevel,u.RenderTriangle.width=this.renderContext.width=this.canvas.width,u.RenderTriangle.height=this.renderContext.height=this.canvas.height,u.Tile.tilesInView=0,u.Tile.tilesTouched=0,u.Tile.deepestLevel=0,u.SpaceTimeController.set_metaNow(new Date),null!=this.get__mover()){if(u.SpaceTimeController.set_now(this.get__mover().get_currentDateTime()),u.Planets.updatePlanetLocations(this.get_solarSystemMode()),null!=this.get__mover()){var s=this.get__mover().get_currentPosition();if(this.renderContext.targetCamera=s.copy(),this.renderContext.viewCamera=s.copy(),this.renderContext.space&&u.Settings.get_active().get_galacticMode()){var d=u.Coordinates.j2000toGalactic(15*s.get_RA(),s.get_dec());this.renderContext.targetAlt=this.renderContext.alt=d[1],this.renderContext.targetAz=this.renderContext.az=d[0]}else if(this.renderContext.space&&u.Settings.get_active().get_localHorizonMode()){var c=u.Coordinates.equitorialToHorizon(u.Coordinates.fromRaDec(s.get_RA(),s.get_dec()),u.SpaceTimeController.get_location(),u.SpaceTimeController.get_now());this.renderContext.targetAlt=this.renderContext.alt=c.get_alt(),this.renderContext.targetAz=this.renderContext.az=c.get_az()}this.get__mover().get_complete()&&(u.WWTControl.scriptInterface._fireArrived(this.get__mover().get_currentPosition().get_RA(),this.get__mover().get_currentPosition().get_dec(),u.WWTControl.singleton.renderContext.viewCamera.zoom),this.set__mover(null),this._notifyMoveComplete())}}else u.SpaceTimeController.updateClock(),u.Planets.updatePlanetLocations(this.get_solarSystemMode()),this._updateViewParameters();if(this.renderContext.clear(),this.renderContext.setupMatricesSpace3d(this.renderContext.width,this.renderContext.height),this.renderContext.drawImageSet(this.renderContext.get_backgroundImageset(),100),null!=this.renderContext.get_foregroundImageset())if(this.renderContext.get_foregroundImageset().get_dataSetType()!==this.renderContext.get_backgroundImageset().get_dataSetType())this.renderContext.set_foregroundImageset(null);else if(100!==this.renderContext.viewCamera.opacity&&null==this.renderContext.gl){this._foregroundCanvas.width===this.renderContext.width&&this._foregroundCanvas.height===this.renderContext.height||(this._foregroundCanvas.width=this.renderContext.width,this._foregroundCanvas.height=this.renderContext.height);var h=this.renderContext.device;this._fgDevice.clearRect(0,0,this.renderContext.width,this.renderContext.height),this.renderContext.device=this._fgDevice,this.renderContext.drawImageSet(this.renderContext.get_foregroundImageset(),100),this.renderContext.device=h,this.renderContext.device.save(),this.renderContext.device.globalAlpha=this.renderContext.viewCamera.opacity/100,this.renderContext.device.drawImage(this._foregroundCanvas,0,0),this.renderContext.device.restore()}else this.renderContext.drawImageSet(this.renderContext.get_foregroundImageset(),this.renderContext.viewCamera.opacity);if(null!=this.uiController)this.uiController.render(this.renderContext);else{t&&T(this.renderContext,{opacity:.95,color:"#4190ED"}),u.Annotation.prepBatch(this.renderContext);try{for(var v=(0,r.Ju)(this._annotations),f=v.next();!f.done;f=v.next()){var p=f.value;p.draw(this.renderContext)}}catch(R){o={error:R}}finally{try{f&&!f.done&&(a=v.return)&&a.call(v)}finally{if(o)throw o.error}}if(u.Annotation.drawBatch(this.renderContext),Date.now()-this._lastMouseMove>400){var g=this.getCoordinatesForScreenPoint(this._hoverTextPoint.x,this._hoverTextPoint.y);this._annotationHover(g.x,g.y,this._hoverTextPoint.x,this._hoverTextPoint.y),this._lastMouseMove=new Date(2100,1,1)}this._hoverText&&this._drawHoverText(this.renderContext)}for(var m in this.renderContext.get_catalogHipsImagesets())m.get_hipsProperties().get_catalogSpreadSheetLayer().enabled&&m.get_hipsProperties().get_catalogSpreadSheetLayer().lastVersion===m.get_hipsProperties().get_catalogSpreadSheetLayer().get_version()&&this.renderContext.drawImageSet(m,100);this.constellation=u.Constellations.containment.findConstellationForPoint(this.renderContext.viewCamera.get_RA(),this.renderContext.viewCamera.get_dec()),this._drawSkyOverlays(),u.Planets.drawPlanets(this.renderContext,1),n&&(this._planetTextOverlays=S(),M(this._planetTextOverlays),this._planetTextOverlays.viewTransform=null===(l=u.Grids._altAzTextBatch)||void 0===l?void 0:l.viewTransform,this._planetTextOverlays.draw(this.renderContext,1,u.Color.fromArgb(255,255,255,255))),e&&y(this.renderContext,{opacity:.95,color:"#01362C"});var _=this.renderContext.get_world(),b=this.renderContext.get_view(),C=this.renderContext.get_projection();u.Settings.get_current().get_showCrosshairs()&&this._drawCrosshairs(this.renderContext);var w=!u.TileCache.get_queueCount();this.renderContext.setupMatricesOverlays(),this._fadeFrame(),this._frameCount++,u.TileCache.decimateQueue(),u.TileCache.processQueue(this.renderContext),u.Tile.currentRenderGeneration++,u.TourPlayer.get_playing()||this.set_crossFadeFrame(!1),this.renderContext.set_world(_),this.renderContext.set_view(b),this.renderContext.set_projection(C);var x=Date.now(),k=x-this._lastUpdate;k>1e3&&(this._lastUpdate=x,this._frameCount=0,u.RenderTriangle.trianglesRendered=0,u.RenderTriangle.trianglesCulled=0),this.capturingVideo&&(null==this.dumpFrameParams||this.dumpFrameParams.waitDownload&&!w||(this.captureFrameForVideo(this._videoBlobReady,this.dumpFrameParams.width,this.dumpFrameParams.height,this.dumpFrameParams.format),u.SpaceTimeController.nextFrame()),u.SpaceTimeController.get_doneDumping()&&(u.SpaceTimeController.frameDumping=!1,u.SpaceTimeController.cancelFrameDump=!1,this.capturingVideo=!1))}}var A=n(6059),I=n(8322),U=n(2975),O=n(2082),E=n(7839),B=n(2877),K=n(5112),j=n(4492),G=n(4261),H=n(1743),N=n(2939),X=n(4843),Y=n(9543),J=n(1686),q=n(4915),Q=n(6175),Z=n(4859),$=n(331),ee={id:"main-content"},te={id:"splash-screen-text"},ne=(0,l.Lk)("p",{class:"highlight"},"Planetary Parade?",-1),oe={id:"splash-screen-acknowledgements",class:"small"},ae=(0,l.Lk)("a",{href:"https://www.cosmicds.cfa.harvard.edu/",target:"_blank",rel:"noopener noreferrer"},"Cosmic Data Stories",-1),re=(0,l.Lk)("a",{href:"https://www.worldwidetelescope.org/home/",target:"_blank",rel:"noopener noreferrer"},"WorldWide Telescope",-1),le={id:"splash-screen-logos"},ie={class:"modal",id:"modal-loading"},se=(0,l.Lk)("div",{class:"container"},[(0,l.Lk)("div",{class:"spinner"}),(0,l.Lk)("p",null,"Loading …")],-1),ue=[se],de={id:"top-content"},ce={id:"left-buttons"},he={id:"center-buttons"},ve={id:"right-buttons"},fe={id:"controls",class:"control-icon-wrapper"},pe={id:"controls-top-row"},ge={key:0,id:"control-checkboxes"},me={id:"bottom-content"},_e={id:"time-controls"},be={id:"slider"},Ce={key:0,id:"body-logos"},we={class:"video-wrapper"},xe=(0,l.Lk)("video",{controls:"",id:"info-video"},[(0,l.Lk)("source",{src:"",type:"video/mp4"})],-1),ye=(0,l.Lk)("h3",null,"Information",-1),ke=(0,l.Lk)("h3",null,"Using WWT",-1),Te=(0,l.Lk)("br",null,null,-1),Re=(0,l.Lk)("br",null,null,-1),Le=(0,l.Lk)("div",{class:"credits"},[(0,l.Lk)("h3",null,"Credits:"),(0,l.Lk)("h4",null,[(0,l.Lk)("a",{href:"https://www.cosmicds.cfa.harvard.edu/",target:"_blank",rel:"noopener noreferrer"},"CosmicDS"),(0,l.eW)(" Vue Data Stories Team:")]),(0,l.eW)(" Jon Carifio"),(0,l.Lk)("br"),(0,l.eW)(" Pat Udomprasert"),(0,l.Lk)("br"),(0,l.eW)(" John Lewis"),(0,l.Lk)("br"),(0,l.eW)(" Alyssa Goodman"),(0,l.Lk)("br"),(0,l.eW)(" Mary Dussault"),(0,l.Lk)("br"),(0,l.eW)(" Harry Houghton"),(0,l.Lk)("br"),(0,l.eW)(" Evaluator: Sue Sunbury"),(0,l.Lk)("br"),(0,l.Lk)("br"),(0,l.Lk)("h4",null,"WorldWide Telescope Team:"),(0,l.eW)(" Peter Williams"),(0,l.Lk)("br"),(0,l.eW)(" A. David Weigel"),(0,l.Lk)("br"),(0,l.eW)(" Jon Carifio"),(0,l.Lk)("br")],-1),Pe=86400;const Se=(0,l.pM)({__name:"PlanetParade",props:{wwtNamespace:{default:"planet-parade"}},setup:function(e){var t,n=this,f=1e3*Pe,p=f/48,m=Date.UTC(2025,1,11),_=Date.UTC(2025,2,1),b=(0,c.engineStore)();(0,a.useWWTKeyboardControls)(b);var x=(0,a.supportsTouchscreen)(),y=(0,h._F)(),k=y.smAndDown,T=y.smAndUp,R=y.xs,L="false"!==(null===(t=new URLSearchParams(window.location.search).get("splash"))||void 0===t?void 0:t.toLowerCase()),P=(0,s.KR)(L),S=(0,s.Kh)([]),W=(0,s.KR)(null),M=(0,s.KR)(!1),se=(0,s.KR)(!1),Se=(0,s.KR)("#f4ba3e"),Fe=(0,s.KR)("#6793ff"),De=(0,s.KR)("#f4ba3e"),We=(0,s.KR)(0),Me=(0,s.KR)(!0),ze=(0,s.KR)(!0),Ve=(0,s.KR)(!1),Ae=(0,s.KR)(!1),Ie=(0,s.KR)(!1),Ue=(0,s.KR)(T.value),Oe=(0,s.KR)(!1),Ee=(0,s.KR)(!0),Be=(0,s.KR)({longitudeDeg:-71.1056,latitudeDeg:42.3581}),Ke=(0,s.KR)(Date.now()),je=g(Be).selectedTimezone,Ge=u.Settings.get_active();function He(){u.Grids._makeAltAzGridText=D,u.WWTControl.singleton.renderOneFrame();var e=V.bind(u.WWTControl.singleton),t=function(){e(Me.value,Me.value,Ee.value)};u.WWTControl.singleton.renderOneFrame=t;var n=u.Planets.updatePlanetLocations;function o(e){n(e);for(var t=0;t<=d.Pj.moon;t++)u.Planets._planetScales[t]*=5}u.Planets.updatePlanetLocations=o,u.Planets.drawPlanets=z;var a=90;u.WWTControl.singleton.set_zoomMax(6*a)}(0,l.sV)((function(){b.waitForReady().then((function(){return(0,r.sH)(n,void 0,void 0,(function(){return(0,r.YH)(this,(function(e){return a.skyBackgroundImagesets.forEach((function(e){return S.push(e)})),M.value=!0,b.applySetting(["localHorizonMode",!0]),b.applySetting(["altAzGridColor",u.Color.fromArgb(180,133,201,254)]),b.applySetting(["eclipticColor",u.Color.fromArgb(180,255,255,255)]),b.applySetting(["actualPlanetScale",!1]),it(ze.value),st(Ve.value),ut(Oe.value),lt(Be.value),b.setClockSync(!1),b.setClockRate(1800),He(),rt().then((function(){return se.value=!0})),setInterval((function(){if(Ie.value){var e=b.currentTime;Ke.value=e.getTime()}}),500),window.addEventListener("keyup",(function(e){["Esc","Escape"].includes(e.key)&&tt.value&&(tt.value=!1)})),[2]}))}))}))}));var Ne=(0,l.EW)((function(){return M.value&&se.value})),Xe=(0,l.EW)((function(){return!Ne.value})),Ye=(0,l.EW)((function(){return Be.value.latitudeDeg>0})),Je=(0,l.EW)((function(){return new Date(Ke.value)})),qe=(0,l.EW)((function(){return k.value})),Qe=(0,l.EW)((function(){return qe.value&&x})),Ze=(0,l.EW)((function(){return R.value})),$e=(0,l.EW)((function(){return{"--accent-color":Se.value,"--accent-color2":Fe.value,"--app-content-height":et.value?"66%":"100%"}})),et=(0,l.EW)({get:function(){return"text"===W.value},set:function(e){ot("text")}}),tt=(0,l.EW)({get:function(){return"video"===W.value},set:function(e){if(ot("video"),!e){var t=document.querySelector("#info-video");t.pause()}}});function nt(){P.value=!1}function ot(e){W.value===e?(W.value=null,(0,l.dY)((function(){(0,a.blurActiveElement)()}))):W.value=e}function at(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=!1),null===e?"":t?(0,v.qD)(e,n?"UTC":je.value,"h:mm:ss aaa (zzz)"):(0,v.qD)(e,n?"UTC":je.value,"h:mm aaa (zzz)")}function rt(){return(0,r.sH)(this,void 0,Promise,(function(){var e,t,n,o,l,i,s,c;return(0,r.YH)(this,(function(r){return e=b.currentTime,t=new u.Place,t.set_names(["Sun"]),t.set_classification(d.Jq.solarSystem),t.set_target(d.Pj.sun),n=Be.value.latitudeDeg*a.D2R,o=Be.value.longitudeDeg*a.D2R,l=w(15*t.get_RA()*a.D2R,t.get_dec()*a.D2R,n,o,e),i=l.azRad,s=25*a.D2R,c=C(s,i,n,o,e),[2,b.gotoRADecZoom({raRad:c.raRad,decRad:c.decRad,zoomDeg:360,instant:!0})]}))}))}function lt(e){Ge.set_locationLat(e.latitudeDeg),Ge.set_locationLng(e.longitudeDeg)}function it(e){b.applySetting(["showAltAzGrid",e]),b.applySetting(["showAltAzGridText",e])}function st(e){b.applySetting(["showEcliptic",e])}function ut(e){b.applySetting(["showConstellationFigures",e]),b.applySetting(["showConstellationLabels",e])}return(0,l.wB)(Be,(function(e){lt(e),rt(),u.WWTControl.singleton.renderOneFrame()})),(0,l.wB)(Ie,(function(e){b.setClockSync(e)})),(0,l.wB)(ze,it),(0,l.wB)(Ve,st),(0,l.wB)(Oe,ut),(0,l.wB)(Je,(function(e){b.setTime(e)})),(0,l.wB)(Ye,(function(e){return F()})),function(e,t){var n=(0,l.g2)("WorldWideTelescope"),a=(0,l.g2)("font-awesome-icon"),r=(0,l.g2)("pp"),u=(0,l.g2)("credit-logos"),d=(0,l.g2)("icon-button"),c=(0,l.g2)("location-selector"),h=(0,l.g2)("geolocation-button"),v=(0,l.g2)("funding-acknowledgement");return(0,l.uX)(),(0,l.Wv)(A.E,{id:"app",style:(0,i.Tr)($e.value)},{default:(0,l.k6)((function(){return[(0,l.Lk)("div",ee,[(0,l.bF)(n,{"wwt-namespace":e.wwtNamespace},null,8,["wwt-namespace"]),(0,l.bF)(X.L,{"model-value":P.value,absolute:"",opacity:"0.6",style:(0,i.Tr)($e.value),id:"splash-overlay"},{default:(0,l.k6)((function(){return[(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",{id:"splash-screen",style:(0,i.Tr)($e.value)},[(0,l.bF)(a,{id:"close-splash-button",onClick:nt,icon:"xmark"}),(0,l.Lk)("div",te,[(0,l.bF)(r,null,{default:(0,l.k6)((function(){return[(0,l.eW)("Want to see the")]})),_:1}),ne]),(0,l.Lk)("div",null,[(0,l.bF)(I.D,{class:"splash-get-started",onClick:nt,color:Se.value,density:Ze.value?"compact":"default",size:"x-large",variant:"elevated",rounded:"lg"},{default:(0,l.k6)((function(){return[(0,l.eW)(" Get Started ")]})),_:1},8,["color","density"])]),(0,l.Lk)("div",oe,[(0,l.eW)(" This Data Story is brought to you by "),ae,(0,l.eW)(" and "),re,(0,l.eW)(". "),(0,l.Lk)("div",le,[(0,l.bF)(u,{"logo-size":"5vmin"})])])],4)),[[$.i,nt]])]})),_:1},8,["model-value","style"]),(0,l.bF)(o.eB,{name:"fade"},{default:(0,l.k6)((function(){return[(0,l.bo)((0,l.Lk)("div",ie,ue,512),[[o.aG,Xe.value]])]})),_:1}),(0,l.Lk)("div",de,[(0,l.Lk)("div",ce,[(0,l.bF)(d,{modelValue:et.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return et.value=e}),"fa-icon":"book-open",color:De.value,"tooltip-text":et.value?"Hide Info":"Learn More","tooltip-location":"start"},null,8,["modelValue","color","tooltip-text"])]),(0,l.Lk)("div",he,[(0,l.bF)(d,{modelValue:Ae.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return Ae.value=e}),"fa-icon":"location-dot",color:De.value,"tooltip-text":"Select Location","tooltip-location":"start"},null,8,["modelValue","color"]),(0,l.bF)(K.p,{modelValue:Ae.value,"onUpdate:modelValue":t[6]||(t[6]=function(e){return Ae.value=e}),"max-width":"fit-content",transition:"slide-y-transition"},{default:(0,l.k6)((function(){return[(0,l.bF)(U.J,null,{default:(0,l.k6)((function(){return[(0,l.bF)(a,{style:{position:"absolute",right:"12px",top:"12px",cursor:"pointer",padding:"1em",margin:"-1em","z-index":"1000"},icon:"xmark",size:"xl",onClick:t[2]||(t[2]=function(e){return Ae.value=!1}),onKeyup:t[3]||(t[3]=(0,o.jR)((function(e){return Ae.value=!1}),["enter"])),tabindex:"0",color:"black"}),(0,l.bF)(c,{modelValue:Be.value,"onUpdate:modelValue":t[4]||(t[4]=function(e){return Be.value=e})},null,8,["modelValue"]),(0,l.bF)(h,{id:"location",debug:!1,size:"30px",density:"default",elevation:"5",color:"black",onLocation:t[5]||(t[5]=function(e){return Be.value={longitudeDeg:e.longitude,latitudeDeg:e.latitude}})})]})),_:1})]})),_:1},8,["modelValue"])]),(0,l.Lk)("div",ve,[(0,l.Lk)("div",fe,[(0,l.Lk)("div",pe,[(0,l.bF)(a,{size:"lg",class:"tab-focusable",color:Se.value,icon:Ue.value?"chevron-down":"gear",onClick:t[7]||(t[7]=function(e){return Ue.value=!Ue.value}),onKeyup:t[8]||(t[8]=(0,o.jR)((function(e){return Ue.value=!Ue.value}),["enter"])),tabindex:"0"},null,8,["color","icon"])]),Ue.value?((0,l.uX)(),(0,l.CE)("div",ge,[(0,l.bF)(E.a,{color:Se.value,modelValue:ze.value,"onUpdate:modelValue":t[9]||(t[9]=function(e){return ze.value=e}),onKeyup:t[10]||(t[10]=(0,o.jR)((function(e){return ze.value=!ze.value}),["enter"])),label:"Sky Grid","hide-details":""},null,8,["color","modelValue"]),(0,l.bF)(E.a,{color:Se.value,modelValue:Me.value,"onUpdate:modelValue":t[11]||(t[11]=function(e){return Me.value=e}),onKeyup:t[12]||(t[12]=(0,o.jR)((function(e){return Me.value=!Me.value}),["enter"])),label:"Horizon","hide-details":""},null,8,["color","modelValue"]),(0,l.bF)(E.a,{color:Se.value,modelValue:Ee.value,"onUpdate:modelValue":t[13]||(t[13]=function(e){return Ee.value=e}),onKeyup:t[14]||(t[14]=(0,o.jR)((function(e){return Ee.value=!Ee.value}),["enter"])),label:"Planet Labels","hide-details":""},null,8,["color","modelValue"]),(0,l.bF)(E.a,{color:Se.value,modelValue:Ve.value,"onUpdate:modelValue":t[15]||(t[15]=function(e){return Ve.value=e}),onKeyup:t[16]||(t[16]=(0,o.jR)((function(e){return Ve.value=!Ve.value}),["enter"])),label:"Ecliptic","hide-details":""},null,8,["color","modelValue"]),(0,l.bF)(E.a,{color:Se.value,modelValue:Oe.value,"onUpdate:modelValue":t[17]||(t[17]=function(e){return Oe.value=e}),onKeyup:t[18]||(t[18]=(0,o.jR)((function(e){return Oe.value=!Oe.value}),["enter"])),label:"Constellations","hide-details":""},null,8,["color","modelValue"])])):(0,l.Q3)("",!0)])])]),(0,l.Lk)("div",me,[(0,l.Lk)("div",_e,[(0,l.bF)(d,{id:"play-pause-button","fa-icon":Ie.value?"pause":"play",onActivate:t[19]||(t[19]=function(){Ie.value=!Ie.value}),color:Se.value,"focus-color":Se.value,tooltip:Ie.value?"Pause":"Play","tooltip-location":"top","tooltip-offset":"5px",faSize:"1x","show-tooltip":!Qe.value},null,8,["fa-icon","color","focus-color","tooltip","show-tooltip"]),(0,l.Lk)("div",be,[(0,l.bF)(Y.u,{modelValue:Ke.value,"onUpdate:modelValue":t[20]||(t[20]=function(e){return Ke.value=e}),min:(0,s.R1)(m),max:(0,s.R1)(_),color:Se.value,ripple:!1,"hide-details":"","track-size":"8px","thumb-size":"20px","thumb-label":"always",step:p,onMousedown:t[21]||(t[21]=function(){Ie.value=!1})},{"thumb-label":(0,l.k6)((function(e){return[(0,l.eW)((0,i.v_)(at(new Date(e.modelValue))),1)]})),_:1},8,["modelValue","min","max","color"])])]),qe.value?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",Ce,[(0,l.bF)(u)]))]),(0,l.bF)(K.p,{id:"video-container",modelValue:tt.value,"onUpdate:modelValue":t[24]||(t[24]=function(e){return tt.value=e}),transition:"slide-y-transition",fullscreen:""},{default:(0,l.k6)((function(){return[(0,l.Lk)("div",we,[(0,l.bF)(a,{id:"video-close-icon",class:"close-icon",icon:"times",size:"lg",onClick:t[22]||(t[22]=function(e){return tt.value=!1}),onKeyup:t[23]||(t[23]=(0,o.jR)((function(e){return tt.value=!1}),["enter"])),tabindex:"0"}),xe])]})),_:1},8,["modelValue"]),(0,l.bF)(K.p,{style:(0,i.Tr)($e.value),class:"bottom-sheet",id:"text-bottom-sheet","hide-overlay":"",persistent:"","no-click-animation":"",absolute:"",width:"100%",scrim:!1,location:"bottom",modelValue:et.value,"onUpdate:modelValue":t[29]||(t[29]=function(e){return et.value=e}),transition:"dialog-bottom-transition"},{default:(0,l.k6)((function(){return[(0,l.bF)(U.J,{height:"100%"},{default:(0,l.k6)((function(){return[(0,l.bF)(J.h,{modelValue:We.value,"onUpdate:modelValue":t[25]||(t[25]=function(e){return We.value=e}),height:"32px",color:Se.value,"slider-color":Se.value,id:"tabs",dense:""},{default:(0,l.k6)((function(){return[(0,l.bF)(q.U,{class:"info-tabs",tabindex:"0"},{default:(0,l.k6)((function(){return[ye]})),_:1}),(0,l.bF)(q.U,{class:"info-tabs",tabindex:"0"},{default:(0,l.k6)((function(){return[ke]})),_:1})]})),_:1},8,["modelValue","color","slider-color"]),(0,l.bF)(a,{id:"close-text-icon",class:"control-icon",icon:"times",size:"lg",onClick:t[26]||(t[26]=function(e){return et.value=!1}),onKeyup:t[27]||(t[27]=(0,o.jR)((function(e){return et.value=!1}),["enter"])),tabindex:"0"}),(0,l.bF)(Q.r3,{modelValue:We.value,"onUpdate:modelValue":t[28]||(t[28]=function(e){return We.value=e}),id:"tab-items",class:"pb-2 no-bottom-border-radius"},{default:(0,l.k6)((function(){return[(0,l.bF)(Z.m,null,{default:(0,l.k6)((function(){return[(0,l.bF)(U.J,{class:"no-bottom-border-radius scrollable"},{default:(0,l.k6)((function(){return[(0,l.bF)(O.O,{class:"info-text no-bottom-border-radius"},{default:(0,l.k6)((function(){return[(0,l.eW)(" Information goes here ")]})),_:1})]})),_:1})]})),_:1}),(0,l.bF)(Z.m,null,{default:(0,l.k6)((function(){return[(0,l.bF)(U.J,{class:"no-bottom-border-radius scrollable"},{default:(0,l.k6)((function(){return[(0,l.bF)(O.O,{class:"info-text no-bottom-border-radius"},{default:(0,l.k6)((function(){return[(0,l.bF)(j.I,null,{default:(0,l.k6)((function(){return[(0,l.bF)(G.L,{align:"center"},{default:(0,l.k6)((function(){return[(0,l.bF)(H.B,{cols:"4"},{default:(0,l.k6)((function(){return[(0,l.bF)(B.x,{label:"",outlined:""},{default:(0,l.k6)((function(){return[(0,l.eW)(" Pan ")]})),_:1})]})),_:1}),(0,l.bF)(H.B,{cols:"8",class:"pt-1"},{default:(0,l.k6)((function(){return[(0,l.Lk)("strong",null,(0,i.v_)((0,s.R1)(x)?"press + drag":"click + drag"),1),(0,l.eW)(" "+(0,i.v_)((0,s.R1)(x)?":":"or")+" ",1),(0,l.Lk)("strong",null,(0,i.v_)((0,s.R1)(x)?":":"W-A-S-D"),1),(0,l.eW)(" "+(0,i.v_)((0,s.R1)(x)?":":"keys"),1),Te]})),_:1})]})),_:1}),(0,l.bF)(G.L,{align:"center"},{default:(0,l.k6)((function(){return[(0,l.bF)(H.B,{cols:"4"},{default:(0,l.k6)((function(){return[(0,l.bF)(B.x,{label:"",outlined:""},{default:(0,l.k6)((function(){return[(0,l.eW)(" Zoom ")]})),_:1})]})),_:1}),(0,l.bF)(H.B,{cols:"8",class:"pt-1"},{default:(0,l.k6)((function(){return[(0,l.Lk)("strong",null,(0,i.v_)((0,s.R1)(x)?"pinch in and out":"scroll in and out"),1),(0,l.eW)(" "+(0,i.v_)((0,s.R1)(x)?":":"or")+" ",1),(0,l.Lk)("strong",null,(0,i.v_)((0,s.R1)(x)?":":"I-O"),1),(0,l.eW)(" "+(0,i.v_)((0,s.R1)(x)?":":"keys"),1),Re]})),_:1})]})),_:1}),(0,l.bF)(G.L,null,{default:(0,l.k6)((function(){return[(0,l.bF)(H.B,{cols:"12"},{default:(0,l.k6)((function(){return[Le,(0,l.bF)(N.h,{class:"end-spacer"})]})),_:1})]})),_:1}),(0,l.bF)(G.L,null,{default:(0,l.k6)((function(){return[(0,l.bF)(H.B,null,{default:(0,l.k6)((function(){return[(0,l.bF)(v)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["style","modelValue"])])]})),_:1},8,["style"])}}}),Fe=Se,De=Fe;var We=n(1050),Me=n(6102),ze=n(1569);n(5524);const Ve=(0,Me.$N)({icons:{defaultSet:"mdi",aliases:We.z,sets:{mdi:We.r}},locale:{locale:"en",fallback:"en",messages:{en:ze.A}},theme:{defaultTheme:"dark"}});var Ae=n(1273),Ie=n(7107),Ue=n(6188);Ie.Yv.add(Ue.ReK),Ie.Yv.add(Ue.Jt$),Ie.Yv.add(Ue.BH7),Ie.Yv.add(Ue.gKm),Ie.Yv.add(Ue.ijD),Ie.Yv.add(Ue.G1Y),Ie.Yv.add(Ue.GRI),Ie.Yv.add(Ue.n2W),Ie.Yv.add(Ue.Jyw);var Oe=function(e,t){return e.style.visibility=t.value?"hidden":""};(0,o.Ef)(De,{wwtNamespace:"planet-parade"}).use(c.wwtPinia).use(Ve).directive("hide",{beforeMount:function(e,t,n,o){Oe(e,t)},updated:function(e,t,n,o){Oe(e,t)}}).component("WorldWideTelescope",c.WWTComponent).component("font-awesome-icon",Ae.gc).component("credit-logos",a.CreditLogos).component("funding-acknowledgement",a.FundingAcknowledgement).component("geolocation-button",a.GeolocationButton).component("icon-button",a.IconButton).component("location-selector",a.LocationSelector).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,(()=>{var e=[];n.O=(t,o,a,r)=>{if(!o){var l=1/0;for(d=0;d<e.length;d++){for(var[o,a,r]=e[d],i=!0,s=0;s<o.length;s++)(!1&r||l>=r)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,a,r]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var a,r,[l,i,s]=o,u=0;if(l.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var d=s(n)}for(t&&t(o);u<l.length;u++)r=l[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunk_cosmicds_planetary_alignment"]=self["webpackChunk_cosmicds_planetary_alignment"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[504],(()=>n(5108)));o=n.O(o)})();
//# sourceMappingURL=app.f1150ea8.js.map
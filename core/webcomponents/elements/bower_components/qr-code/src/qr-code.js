"use strict";(function(definition){if("function"===typeof define&&define.amd){define(["QRCode"],definition)}else if("object"===("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){var QRCode=require("qrjs");module.exports=definition(QRCode)}else{definition(window.QRCode)}})(function(QRCode){var proto=Object.create(HTMLElement.prototype,{attrs:{value:{data:null,format:"png",modulesize:5,margin:4}},defineAttributes:{value:function value(){for(var attrs=Object.keys(this.attrs),attr,i=0;i<attrs.length;i++){attr=attrs[i];(function(attr){Object.defineProperty(this,attr,{get:function get(){var value=this.getAttribute(attr);return null===value?this.attrs[attr]:value},set:function set(value){this.setAttribute(attr,value)}})}).bind(this)(attr)}}},createdCallback:{value:function value(){this.createShadowRoot();this.defineAttributes();this.generate()}},attributeChangedCallback:{value:function value(attrName,oldVal,newVal){var fn=this[attrName+"Changed"];if(fn&&"function"===typeof fn){fn.call(this,oldVal,newVal)}this.generate()}},getOptions:{value:function value(){var modulesize=this.modulesize,margin=this.margin;return{modulesize:null!==modulesize?parseInt(modulesize):modulesize,margin:null!==margin?parseInt(margin):margin}}},generate:{value:function value(){if(null!==this.data){if("png"===this.format){this.generatePNG()}else if("html"===this.format){this.generateHTML()}else if("svg"===this.format){this.generateSVG()}else{this.shadowRoot.innerHTML="<div>qr-code: "+this.format+" not supported!</div>"}}else{this.shadowRoot.innerHTML="<div>qr-code: no data!</div>"}}},generatePNG:{value:function value(){try{var img=document.createElement("img");img.src=QRCode.generatePNG(this.data,this.getOptions());this.clear();this.shadowRoot.appendChild(img)}catch(e){this.shadowRoot.innerHTML="<div>qr-code: no canvas support!</div>"}}},generateHTML:{value:function value(){var div=QRCode.generateHTML(this.data,this.getOptions());this.clear();this.shadowRoot.appendChild(div)}},generateSVG:{value:function value(){var div=QRCode.generateSVG(this.data,this.getOptions());this.clear();this.shadowRoot.appendChild(div)}},clear:{value:function value(){while(this.shadowRoot.lastChild){this.shadowRoot.removeChild(this.shadowRoot.lastChild)}}}});document.registerElement("qr-code",{prototype:proto})});
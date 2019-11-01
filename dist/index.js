!function(M,N){"object"==typeof exports&&"object"==typeof module?module.exports=N(require("react")):"function"==typeof define&&define.amd?define(["react"],N):"object"==typeof exports?exports["react-video-markers"]=N(require("react")):M["react-video-markers"]=N(M.React)}(window,(function(M){return function(M){var N={};function D(e){if(N[e])return N[e].exports;var j=N[e]={i:e,l:!1,exports:{}};return M[e].call(j.exports,j,j.exports,D),j.l=!0,j.exports}return D.m=M,D.c=N,D.d=function(M,N,e){D.o(M,N)||Object.defineProperty(M,N,{enumerable:!0,get:e})},D.r=function(M){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},D.t=function(M,N){if(1&N&&(M=D(M)),8&N)return M;if(4&N&&"object"==typeof M&&M&&M.__esModule)return M;var e=Object.create(null);if(D.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:M}),2&N&&"string"!=typeof M)for(var j in M)D.d(e,j,function(N){return M[N]}.bind(null,j));return e},D.n=function(M){var N=M&&M.__esModule?function(){return M.default}:function(){return M};return D.d(N,"a",N),N},D.o=function(M,N){return Object.prototype.hasOwnProperty.call(M,N)},D.p="./dist",D(D.s=17)}([function(N,D){N.exports=M},function(M,N,D){var e=D(2);"string"==typeof e&&(e=[[M.i,e,""]]);var j={insert:"head",singleton:!1};D(16)(e,j);e.locals&&(M.exports=e.locals)},function(M,N,D){N=M.exports=D(3)(!1);var e=D(4),j=e(D(5)),u=e(D(6)),g=e(D(7)),I=e(D(8)),n=e(D(9)),i=e(D(10)),c=e(D(11)),T=e(D(12)),z=e(D(13)),t=e(D(14)),A=e(D(15));N.push([M.i,".react-video-wrap {\n  padding-bottom: 36px;\n  position: relative;\n}\n\n.react-video-wrap video {\n  background-color: #000000;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.react-video-controls {\n  background-color: #e7e7e7;\n  display: flex;\n  height: 36px;\n  padding: 0 7px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.react-video-controls button {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border: 0;\n  cursor: pointer;\n  margin: 10px 7px;\n  padding: 0;\n  outline: none;\n  height: 16px;\n  width: 16px;\n  text-indent: -9999px;\n}\n\n.react-video-controls .play {\n  background-image: url("+j+");\n}\n\n.react-video-controls .pause {\n  background-image: url("+u+");\n  background-size: 15px;\n}\n\n.react-video-controls .volume {\n  background-image: url("+g+");\n  background-position-x: 0;\n  width: 17px;\n}\n\n.react-video-controls .no-volume {\n  background-image: url("+I+");\n  background-position-x: 0;\n  width: 17px;\n}\n\n.react-video-controls .full-screen {\n  background-image: url("+n+");\n  width: 17px;\n}\n\n.react-video-controls .time {\n  color: #969696;\n  font-size: 10px;\n  line-height: 37px;\n  margin: 0 7px;\n}\n\n.react-video-controls progress {\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n\n.react-video-controls .progress-wrap {\n  flex-grow: 1;\n  margin: 5px 7px 0;\n  position: relative;\n}\n\n.react-video-controls .progress-wrap progress {\n  height: 8px;\n  width: 100%;\n}\n\n.react-video-controls .progress-wrap progress::-webkit-progress-value {\n  background: #28C0F0;\n}\n\n.react-video-controls .progress-wrap progress::-webkit-progress-bar {\n  background: #ffffff;\n}\n\n.react-video-controls .progress-wrap .react-video-marker {\n  background-color: #666666;\n  cursor: pointer;\n  display: block;\n  height: 8px;\n  width: 4px;\n  position: absolute;\n  top: 9px;\n  left: 50%;\n}\n\n.react-video-controls .volume-wrap {\n  position: relative;\n}\n\n.react-video-controls .volume-wrap:hover progress {\n  display: block;\n}\n\n.react-video-controls .volume-wrap progress {\n  border-radius: 2px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  display: none;\n  height: 12px;\n  overflow: hidden;\n  position: absolute;\n  top: -52px;\n  left: -31px;\n  transform: rotate(-90deg);\n  width: 100px;\n}\n\n.react-video-controls .volume-wrap progress::-webkit-progress-value {\n  background: #ffffff;\n}\n\n.react-video-controls .volume-wrap progress::-webkit-progress-bar {\n  background: #9d9d9d;\n}\n\n.react-video-full-screen .react-video-wrap {\n  background-color: #000000;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}\n\n.react-video-full-screen .react-video-player {\n  height: calc(100vh - 36px);\n  max-width: 100%;\n}\n\n.react-video-full-screen .react-video-close {\n  background: url("+i+") no-repeat transparent;\n  border: 0;\n  cursor: pointer;\n  opacity: 1;\n  outline: none;\n  text-indent: -9999px;\n  height: 23px;\n  width: 23px;\n  position: absolute;\n  top: 36px;\n  right: 77px;\n}\n\n.react-video-full-screen .react-video-controls {\n  background-color: #595959;\n}\n\n.react-video-full-screen .react-video-controls .play {\n  background-image: url("+c+");\n}\n\n.react-video-full-screen .react-video-controls .pause {\n  background-image: url("+T+");\n}\n\n.react-video-full-screen .react-video-controls .volume {\n  background-image: url("+z+");\n}\n\n.react-video-full-screen .react-video-controls .no-volume {\n  background-image: url("+t+");\n}\n\n.react-video-full-screen .react-video-controls .full-screen {\n  background-image: url("+A+");\n}\n\n.react-video-full-screen .react-video-controls .time {\n  color: #ffffff;\n}\n",""])},function(M,N,D){"use strict";M.exports=function(M){var N=[];return N.toString=function(){return this.map((function(N){var D=function(M,N){var D=M[1]||"",e=M[3];if(!e)return D;if(N&&"function"==typeof btoa){var j=(g=e,I=btoa(unescape(encodeURIComponent(JSON.stringify(g)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I),"/*# ".concat(n," */")),u=e.sources.map((function(M){return"/*# sourceURL=".concat(e.sourceRoot).concat(M," */")}));return[D].concat(u).concat([j]).join("\n")}var g,I,n;return[D].join("\n")}(N,M);return N[2]?"@media ".concat(N[2],"{").concat(D,"}"):D})).join("")},N.i=function(M,D){"string"==typeof M&&(M=[[null,M,""]]);for(var e={},j=0;j<this.length;j++){var u=this[j][0];null!=u&&(e[u]=!0)}for(var g=0;g<M.length;g++){var I=M[g];null!=I[0]&&e[I[0]]||(D&&!I[2]?I[2]=D:D&&(I[2]="(".concat(I[2],") and (").concat(D,")")),N.push(I))}},N}},function(M,N,D){"use strict";M.exports=function(M,N){return"string"!=typeof(M=M.__esModule?M.default:M)?M:(/^['"].*['"]$/.test(M)&&(M=M.slice(1,-1)),/["'() \t\n]/.test(M)||N?'"'.concat(M.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):M)}},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDI5MyAxMS4wNjY4VjEuMDI1MzlMOS40MzcyNiA2LjA0NDc1TDEuMDI5MyAxMS4wNjY4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEuODUxOSAxMS4wNjc1VjEwLjA2OTdWNy42NzU3VjQuNzc3MDlWMi4yNTc5NEMxLjg1MTkgMS44NTQwNSAxLjg2NjEgMS40NDY4OCAxLjg1MTkgMS4wNDAyNlYxLjAyMzM5QzEuNDM3OTUgMS4yNjAxNyAxLjAyMTI3IDEuNDk2OTUgMC42MDc4NjQgMS43MzQyOUMwLjg4NDc0NiAxLjkwMTQgMS4xNjQzNSAyLjA2NTc5IDEuNDQxMjIgMi4yMzI5QzIuMTEyMzkgMi42MzQwNyAyLjc4MzU3IDMuMDM1NzkgMy40NTQxMiAzLjQzNDI0QzQuMjYyMzYgMy45MTY1MiA1LjA3MDEyIDQuMzk4OCA1Ljg3ODMzIDQuODgzMkM2LjU3NzM1IDUuMzAxMjQgNy4yNzYzNyA1LjcxOTI5IDcuOTc1MzkgNi4xMzQ2MkM4LjMxNjcgNi4zMzgyIDguNjUyMDEgNi41NTI2NyA4Ljk5ODggNi43NDQ4MkM5LjAwNDI2IDYuNzQ3NTQgOS4wMDk3MiA2Ljc1MDI2IDkuMDEyOTkgNi43NTI5OFY1LjMyODk3QzguNzM2MTEgNS40OTYwOCA4LjQ1NjUgNS42NjA0NyA4LjE3OTY0IDUuODI3NThDNy41MDg0NiA2LjIyODc1IDYuODM3MjkgNi42MzA0NyA2LjE2Njc0IDcuMDI4OTJDNS4zNTg1IDcuNTExMiA0LjU1MDc0IDcuOTkzNDggMy43NDI1MyA4LjQ3Nzg4QzMuMDQzNTEgOC44OTU5MiAyLjM0NDQ5IDkuMzEzOTcgMS42NDU0NyA5LjcyOTNDMS4zMDQxNSA5LjkzMjg4IDAuOTYwNjU0IDEwLjEzMDUgMC42MjIwNjMgMTAuMzM5NUMwLjYxNjYwMiAxMC4zNDIyIDAuNjExMTQxIDEwLjM0NDkgMC42MDc4NjQgMTAuMzQ3N0MwLjIzNTk1NyAxMC41NzA4IDAuMDY4MzA0MiAxMS4wOTcyIDAuMzExMzI2IDExLjQ3NjZDMC41NTE2MjEgMTEuODQ3MyAxLjA0NjkzIDEyLjAwOSAxLjQ0Mzk2IDExLjc3MjJDMS43MjA4NCAxMS42MDUxIDIuMDAwNDUgMTEuNDQwNyAyLjI3NzMyIDExLjI3MzZDMi45NDg0OSAxMC44NzI0IDMuNjE5NjYgMTAuNDcwNyA0LjI5MDIyIDEwLjA3MjJDNS4wOTg0NiA5LjU4OTk2IDUuOTA2MjIgOS4xMDc2OCA2LjcxNDQyIDguNjIzMjlDNy40MTM0NCA4LjIwNTI0IDguMTEyNDcgNy43ODcxOSA4LjgxMTQ5IDcuMzcxODZDOS4xNTI4IDcuMTY4MjggOS40OTYzIDYuOTcwNjkgOS44MzQ4OSA2Ljc2MTY2QzkuODQwMzYgNi43NTg5NCA5Ljg0NTgyIDYuNzU2MjIgOS44NDkwOSA2Ljc1MzVDMTAuMzg1OSA2LjQzMjg4IDEwLjM4NTkgNS42NDk1OSA5Ljg0OTA5IDUuMzI5NDlDOS41NzIyMSA1LjE2MjM4IDkuMjkyNiA0Ljk5Nzk5IDkuMDE1NzMgNC44MzA4OEM4LjM0NDU2IDQuNDI5NzEgNy42NzMzOSA0LjAyNzk5IDcuMDAyODMgMy42Mjk1NEM2LjE5NDYgMy4xNDcyNyA1LjM4Njg0IDIuNjY0OTggNC41Nzg2MyAyLjE4MDU5QzMuODc5NjEgMS43NjI1NCAzLjE4MDU5IDEuMzQ0NDkgMi40ODE1NyAwLjkyOTE2QzIuMTQwMjUgMC43MjU1ODQgMS44MDQ5NSAwLjUxMzgyOSAxLjQ1ODE2IDAuMzE4OTYzQzEuNDUyNyAwLjMxNjI0MiAxLjQ0NzI0IDAuMzEzNTIgMS40NDM5NiAwLjMxMDc5OEMwLjkwNDQwMyAtMC4wMTI1MzM3IDAuMTk5OTMgMC40MDI3OTEgMC4xOTk5MyAxLjAyMTdWMi4wMTk0N1Y0LjQxMzQ5VjcuMzEyMVY5LjgzMTI1QzAuMTk5OTMgMTAuMjM1MSAwLjE5MTczOCAxMC42NDIzIDAuMTk5OTMgMTEuMDQ4OVYxMS4wNjU4QzAuMTk5OTMgMTEuNDk4IDAuNTgwMDI5IDExLjkxMDEgMS4wMjc4NCAxMS44OTFDMS40NzE4MyAxMS44NzAzIDEuODUxOTEgMTEuNTMwMSAxLjg1MTkxIDExLjA2NzRMMS44NTE5IDExLjA2NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+DQogIDx0aXRsZT4NCiAgICBwYXVzZQ0KICA8L3RpdGxlPg0KICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxNiIgeD0iMyIgeT0iMiIgcng9IjEiIHJ5PSIxIi8+DQogIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB4PSIxMSIgeT0iMiIgcng9IjEiIHJ5PSIxIi8+DQo8L3N2Zz4NCg=="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik05LjMzMjc5IDAuNzUzMTM3QzguOTMwOTkgMC41ODQxMjUgOC40NjY1MyAwLjY4MDg3NiA4LjE2NDg2IDAuOTk1MDNMNS4yNTIwNCAzLjk4ODM2SDEuODUzMzlWMy45ODc3NEMxLjQxODQyIDMuOTg3MTMgMS4wMDA2NCA0LjE1OTgzIDAuNjkzNDUyIDQuNDY2NjJDMC4zODU2NTYgNC43NzM0MiAwLjIxMzYyMyA1LjE4OTg0IDAuMjE0ODUgNS42MjM0VjExLjE1NzVDMC4yMTQ4NSAxMi4wNTgzIDAuOTQ3MTc2IDEyLjc4ODIgMS44NTA4NyAxMi43ODgySDUuNjcxNjdMOC4xNjQ4NiAxNS4zNTI3QzguMzYzOTIgMTUuNTU4NSA4LjYzNzkzIDE1LjY3NDggOC45MjQ4NCAxNS42NzQ4QzkuMDY0OTEgMTUuNjc0OCA5LjIwMzE1IDE1LjY0NzMgOS4zMzI3OSAxNS41OTQ2QzkuNzM5NSAxNS40MzYgMTAuMDA0OSAxNS4wNDI5IDEwIDE0LjYwNzVWMS43NDAyN0MxMC4wMDQ5IDEuMzA0ODggOS43Mzk1MiAwLjkxMTcxOSA5LjMzMjc5IDAuNzUzMTE3VjAuNzUzMTM3Wk05LjUxNDY0IDE0LjYwODFWMTQuNjA3NUM5LjUxNDY0IDE0Ljg0MzkgOS4zNzAyNiAxNS4wNTY0IDkuMTUwOTMgMTUuMTQ1MkM4LjkzMTYgMTUuMjM0IDguNjc5NyAxNS4xODEzIDguNTE0NDMgMTUuMDExN0w1Ljg3ODExIDEyLjMwMkgxLjg1MDk3QzEuMjE2MzEgMTIuMzAyIDAuNzAxNDczIDExLjc5IDAuNzAwMjQ3IDExLjE1NzRWNS42MjMzNkMwLjcwMDI0NyA0Ljk5MDE2IDEuMjE1NyA0LjQ3Njk5IDEuODUwOTcgNC40NzY5OUg1LjQ1ODY1TDguNTEyNyAxLjMzMTI5SDguNTEyMDlDOC42NzczNiAxLjE2MDQ0IDguOTI5ODYgMS4xMDY1NCA5LjE1MDQyIDEuMTk1MzRDOS4zNzE1OSAxLjI4NDEzIDkuNTE1MzYgMS40OTc4NSA5LjUxNDc1IDEuNzM1NDVMOS41MTQ2NCAxNC42MDgxWiIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iMTEiIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjYiIHJ4PSIwLjUiIGZpbGw9IiM3MzczNzMiLz4KPHJlY3QgeD0iMTMiIHk9IjMiIHdpZHRoPSIxIiBoZWlnaHQ9IjEwIiByeD0iMC41IiBmaWxsPSIjNzM3MzczIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTUuNzI4IiBoZWlnaHQ9IjE1LjY3NjgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjIxNDg0NCAwLjMzNTkzOCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik05LjMzMjc5IDAuNzUzMTM3QzguOTMwOTkgMC41ODQxMjUgOC40NjY1MyAwLjY4MDg3NiA4LjE2NDg2IDAuOTk1MDNMNS4yNTIwNCAzLjk4ODM2SDEuODUzMzlWMy45ODc3NEMxLjQxODQyIDMuOTg3MTMgMS4wMDA2NCA0LjE1OTgzIDAuNjkzNDUyIDQuNDY2NjJDMC4zODU2NTYgNC43NzM0MiAwLjIxMzYyMyA1LjE4OTg0IDAuMjE0ODUgNS42MjM0VjExLjE1NzVDMC4yMTQ4NSAxMi4wNTgzIDAuOTQ3MTc2IDEyLjc4ODIgMS44NTA4NyAxMi43ODgySDUuNjcxNjdMOC4xNjQ4NiAxNS4zNTI3QzguMzYzOTIgMTUuNTU4NSA4LjYzNzkzIDE1LjY3NDggOC45MjQ4NCAxNS42NzQ4QzkuMDY0OTEgMTUuNjc0OCA5LjIwMzE1IDE1LjY0NzMgOS4zMzI3OSAxNS41OTQ2QzkuNzM5NSAxNS40MzYgMTAuMDA0OSAxNS4wNDI5IDEwIDE0LjYwNzVWMS43NDAyN0MxMC4wMDQ5IDEuMzA0ODggOS43Mzk1MiAwLjkxMTcxOSA5LjMzMjc5IDAuNzUzMTE3VjAuNzUzMTM3Wk05LjUxNDY0IDE0LjYwODFWMTQuNjA3NUM5LjUxNDY0IDE0Ljg0MzkgOS4zNzAyNiAxNS4wNTY0IDkuMTUwOTMgMTUuMTQ1MkM4LjkzMTYgMTUuMjM0IDguNjc5NyAxNS4xODEzIDguNTE0NDMgMTUuMDExN0w1Ljg3ODExIDEyLjMwMkgxLjg1MDk3QzEuMjE2MzEgMTIuMzAyIDAuNzAxNDczIDExLjc5IDAuNzAwMjQ3IDExLjE1NzRWNS42MjMzNkMwLjcwMDI0NyA0Ljk5MDE2IDEuMjE1NyA0LjQ3Njk5IDEuODUwOTcgNC40NzY5OUg1LjQ1ODY1TDguNTEyNyAxLjMzMTI5SDguNTEyMDlDOC42NzczNiAxLjE2MDQ0IDguOTI5ODYgMS4xMDY1NCA5LjE1MDQyIDEuMTk1MzRDOS4zNzE1OSAxLjI4NDEzIDkuNTE1MzYgMS40OTc4NSA5LjUxNDc1IDEuNzM1NDVMOS41MTQ2NCAxNC42MDgxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE0LjAwNzUgOC40MTU0NEwxNS44Njk3IDYuNTU5MzFMMTUuODY5MSA2LjU1OTkyQzE1Ljk1MjEgNi40NjM3OCAxNS45NDY1IDYuMzIwNDkgMTUuODU2OCA2LjIzMTA3QzE1Ljc2NzEgNi4xNDE2NiAxNS42MjM0IDYuMTM2MTUgMTUuNTI2OSA2LjIxODIxTDEzLjY2NDcgOC4wNzQzNEwxMS44MDI1IDYuMjE4MjFIMTEuODAzMUMxMS43MDY3IDYuMTM2MTUgMTEuNTYzNSA2LjE0MTY2IDExLjQ3MzggNi4yMzEwN0MxMS4zODQxIDYuMzIwNDggMTEuMzc4NiA2LjQ2Mzc4IDExLjQ2MDkgNi41NTk5MkwxMy4zMjMxIDguNDE1NDNMMTEuNDYwOSAxMC4yNzE2QzExLjQwOTMgMTAuMzE1IDExLjM3ODYgMTAuMzc4NyAxMS4zNzYxIDEwLjQ0NjFDMTEuMzczNyAxMC41MTM0IDExLjM5OTUgMTAuNTc4NCAxMS40NDc0IDEwLjYyNjFDMTEuNDk0NyAxMC42NzM5IDExLjU2MDQgMTAuNjk5NiAxMS42MjggMTAuNjk3MkMxMS42OTU2IDEwLjY5NDEgMTEuNzU5NSAxMC42NjM1IDExLjgwMzEgMTAuNjEyNkwxMy42NjUzIDguNzU2NTJMMTUuNTI3NSAxMC42MTI2SDE1LjUyNjlDMTUuNjIzNCAxMC42OTQ3IDE1Ljc2NzEgMTAuNjg5MiAxNS44NTY4IDEwLjU5OThDMTUuOTQ2NSAxMC41MTA0IDE1Ljk1MiAxMC4zNjc3IDE1Ljg2OTEgMTAuMjcxNUwxNC4wMDc1IDguNDE1NDRaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE1LjcyOCIgaGVpZ2h0PSIxNS42NzY4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yMTQ4NDQgMC4zMzU5MzgpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjIyNyA4LjIzMDJDMTguMTk1MyA4LjIxNjkzIDE4LjE2MDUgOC4yMDk3OSAxOC4xMjY3IDguMjA5NzlIMTQuMjg3N0MxNC4xNDIzIDguMjA5NzkgMTQuMDI1NiA4LjMyNjE0IDE0LjAyNTYgOC40NzEwN0MxNC4wMjU2IDguNjE1OTkgMTQuMTQyMyA4LjczMjM1IDE0LjI4NzcgOC43MzIzNUgxNy40OTM2TDE0LjAwOTEgMTIuMjA1NUMxMy45MDY3IDEyLjMwNzYgMTMuOTA2NyAxMi40NzI5IDE0LjAwOTEgMTIuNTc1QzE0LjA2MDMgMTIuNjI2IDE0LjEyNjggMTIuNjUxNiAxNC4xOTQ0IDEyLjY1MTZDMTQuMjYyIDEyLjY1MTYgMTQuMzI4NiAxMi42MjYgMTQuMzc5OCAxMi41NzVMMTcuODY0MyA5LjEwMTgyVjEyLjI5NzNDMTcuODY0MyAxMi40NDIyIDE3Ljk4MSAxMi41NTg2IDE4LjEyNjQgMTIuNTU4NkMxOC4yNzE4IDEyLjU1ODYgMTguMzg4NiAxMi40NDIyIDE4LjM4ODYgMTIuMjk3M1Y4LjQ3MDgzQzE4LjM4ODYgOC40MzcxNSAxOC4zODE0IDguNDAyNDUgMTguMzY4MSA4LjM3MDgxQzE4LjM0MTUgOC4zMDY1MSAxOC4yOTEzIDguMjU2NSAxOC4yMjY4IDguMjI5OTZMMTguMjI3IDguMjMwMlpNMTIuNDM2NSAxMy43NzQzTDguOTUxOTcgMTcuMjQ3NVYxNC4wNTJDOC45NTE5NyAxMy45MDcxIDguODM1MjQgMTMuNzkwOCA4LjY4OTg0IDEzLjc5MDhDOC41NDQ0MyAxMy43OTA4IDguNDI3NyAxMy45MDcxIDguNDI3NyAxNC4wNTJWMTcuODc4NUM4LjQyNzcgMTcuOTEyMiA4LjQzNDg3IDE3Ljk0NjkgOC40NDgxOCAxNy45Nzg1QzguNDc0OCAxOC4wNDI4IDguNTI2IDE4LjA5MjggOC41ODk0OSAxOC4xMTkzQzguNjIxMjMgMTguMTMyNiA4LjY1NjA1IDE4LjEzOTggOC42ODk4MyAxOC4xMzk4SDEyLjUyODhDMTIuNjc0MiAxOC4xMzk4IDEyLjc5MDkgMTguMDIzNCAxMi43OTA5IDE3Ljg3ODVDMTIuNzkwOSAxNy43MzM2IDEyLjY3NDIgMTcuNjE3MiAxMi41Mjg4IDE3LjYxNzJIOS4zMjI4OEwxMi44MDc0IDE0LjE0NEMxMi45MDk4IDE0LjA0MTkgMTIuOTA5OCAxMy44NzY2IDEyLjgwNzQgMTMuNzc0NUMxMi43MDUgMTMuNjcyNCAxMi41MzkxIDEzLjY3MTQgMTIuNDM2NyAxMy43NzQ1TDEyLjQzNjUgMTMuNzc0M1pNMTguOTEzIDYuMzgwODZINy45MDM0NEM3LjE4MDUzIDYuMzgwODYgNi41OTI3NyA2Ljk2NjcgNi41OTI3NyA3LjY4NzI2VjE4LjY2MUM2LjU5Mjc3IDE5LjM4MTYgNy4xODA1MyAxOS45Njc0IDcuOTAzNDQgMTkuOTY3NEgxOC45MTNDMTkuNjM1OSAxOS45Njc0IDIwLjIyMzcgMTkuMzgxNiAyMC4yMjM3IDE4LjY2MVY3LjY4NzI2QzIwLjIyMzcgNi45NjY3IDE5LjYzNTkgNi4zODA4NiAxOC45MTMgNi4zODA4NlpNMTkuNjk5NCAxOC42NjFDMTkuNjk5NCAxOS4wOTI3IDE5LjM0NjEgMTkuNDQ0OSAxOC45MTMgMTkuNDQ0OUg3LjkwMzQ0QzcuNDcwMzIgMTkuNDQ0OSA3LjExNzA0IDE5LjA5MjcgNy4xMTcwNCAxOC42NjFWNy42ODcyNkM3LjExNzA0IDcuMjU1NTUgNy40NzAzMiA2LjkwMzQyIDcuOTAzNDQgNi45MDM0MkgxOC45MTNDMTkuMzQ2MSA2LjkwMzQyIDE5LjY5OTQgNy4yNTU1NSAxOS42OTk0IDcuNjg3MjZWMTguNjYxWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS41MDAyIDAuNzAwMTk1QzUuNTMwNzcgMC43MDAxOTUgMC43MDAxOTUgNS41Mjg2MSAwLjcwMDE5NSAxMS41MDAyQzAuNzAwMTk1IDE3LjQ2OTYgNS41MzA3NyAyMi4zMDAyIDExLjUwMDIgMjIuMzAwMkMxNy40NzE4IDIyLjMwMDIgMjIuMzAwMiAxNy40Njk2IDIyLjMwMDIgMTEuNTAwMkMyMi4zMDAyIDUuNTI3NTMgMTcuNDcyOSAwLjcwMDE5NSAxMS41MDAyIDAuNzAwMTk1Wk03LjM4MjcgNi45MTAyQzcuNDAyNzQgNi45MDkxNCA3LjQyMTcyIDYuOTA5MTQgNy40NDE3NiA2LjkxMDJDNy41ODczMSA2LjkwOTE0IDcuNzI3NTggNi45NjYwOSA3LjgyOTg4IDcuMDcwNTFMMTEuNTAwMyAxMC43MzIyTDE1LjE2MiA3LjA3MDUxQzE1LjI2MDEgNi45NzAzMSAxNS4zOTMgNi45MTMzNiAxNS41MzMzIDYuOTEwMkMxNS43NTY4IDYuOTAwNyAxNS45NjM2IDcuMDMxNDkgMTYuMDUxMSA3LjIzNzE0QzE2LjEzOTcgNy40NDM4NiAxNi4wOTEyIDcuNjgyMjEgMTUuOTI5OCA3LjgzODMyTDEyLjI1OTQgMTEuNTA4N0wxNS45Mjk4IDE1LjE3MDRDMTYuMDMyMSAxNS4yNzE3IDE2LjA4OTEgMTUuNDA5OSAxNi4wODkxIDE1LjU1NDRDMTYuMDg5MSAxNS42OTc4IDE2LjAzMjEgMTUuODM2IDE1LjkyOTggMTUuOTM4M0MxNS44Mjg2IDE2LjAzOTUgMTUuNjkwNCAxNi4wOTc1IDE1LjU0NTkgMTYuMDk3NUMxNS40MDE0IDE2LjA5NzUgMTUuMjY0MyAxNi4wMzk1IDE1LjE2MiAxNS45MzgzTDExLjUwMDMgMTIuMjY3OUw3LjgyOTg4IDE1LjkzODNDNy42MTc4OSAxNi4xNTAzIDcuMjc0MDYgMTYuMTUwMyA3LjA2MjA1IDE1LjkzODNDNi44NTAwNSAxNS43MjYzIDYuODUwMDYgMTUuMzgyNCA3LjA2MjA1IDE1LjE3MDRMMTAuNzIzOCAxMS41MDg3TDcuMDYyMDUgNy44MzgzMkM2LjkwOTEyIDcuNjkxNzIgNi44NTUzMyA3LjQ3MDIzIDYuOTI0OTQgNy4yNzA4OUM2Ljk5MzUgNy4wNzE1NSA3LjE3MjggNi45MzAyMyA3LjM4MjY3IDYuOTEwMkg3LjM4MjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDI5MyAxMS4zMTA5VjEuMjY5NTNMOS40MzcyNiA2LjI4ODg5TDEuMDI5MyAxMS4zMTA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEuODUxOSAxMS4zMTE2VjEwLjMxMzlWNy45MTk4NFY1LjAyMTIzVjIuNTAyMDhDMS44NTE5IDIuMDk4MTkgMS44NjYxIDEuNjkxMDIgMS44NTE5IDEuMjg0NFYxLjI2NzUzQzEuNDM3OTUgMS41MDQzMSAxLjAyMTI3IDEuNzQxMDkgMC42MDc4NjQgMS45Nzg0M0MwLjg4NDc0NiAyLjE0NTU0IDEuMTY0MzUgMi4zMDk5MyAxLjQ0MTIyIDIuNDc3MDRDMi4xMTIzOSAyLjg3ODIxIDIuNzgzNTcgMy4yNzk5MyAzLjQ1NDEyIDMuNjc4MzhDNC4yNjIzNiA0LjE2MDY2IDUuMDcwMTIgNC42NDI5NCA1Ljg3ODMzIDUuMTI3MzRDNi41NzczNSA1LjU0NTM4IDcuMjc2MzcgNS45NjM0MyA3Ljk3NTM5IDYuMzc4NzZDOC4zMTY3IDYuNTgyMzQgOC42NTIwMSA2Ljc5NjgxIDguOTk4OCA2Ljk4ODk2QzkuMDA0MjYgNi45OTE2OCA5LjAwOTcyIDYuOTk0NCA5LjAxMjk5IDYuOTk3MTJWNS41NzMxMUM4LjczNjExIDUuNzQwMjIgOC40NTY1IDUuOTA0NjEgOC4xNzk2NCA2LjA3MTcyQzcuNTA4NDYgNi40NzI4OSA2LjgzNzI5IDYuODc0NjEgNi4xNjY3NCA3LjI3MzA2QzUuMzU4NSA3Ljc1NTM0IDQuNTUwNzQgOC4yMzc2MyAzLjc0MjUzIDguNzIyMDJDMy4wNDM1MSA5LjE0MDA3IDIuMzQ0NDkgOS41NTgxMSAxLjY0NTQ3IDkuOTczNDRDMS4zMDQxNSAxMC4xNzcgMC45NjA2NTQgMTAuMzc0NiAwLjYyMjA2MyAxMC41ODM2QzAuNjE2NjAyIDEwLjU4NjQgMC42MTExNDEgMTAuNTg5MSAwLjYwNzg2NCAxMC41OTE4QzAuMjM1OTU3IDEwLjgxNSAwLjA2ODMwNDIgMTEuMzQxMyAwLjMxMTMyNiAxMS43MjA4QzAuNTUxNjIxIDEyLjA5MTUgMS4wNDY5MyAxMi4yNTMxIDEuNDQzOTYgMTIuMDE2M0MxLjcyMDg0IDExLjg0OTIgMi4wMDA0NSAxMS42ODQ4IDIuMjc3MzIgMTEuNTE3N0MyLjk0ODQ5IDExLjExNjYgMy42MTk2NiAxMC43MTQ4IDQuMjkwMjIgMTAuMzE2NEM1LjA5ODQ2IDkuODM0MTEgNS45MDYyMiA5LjM1MTgyIDYuNzE0NDIgOC44Njc0M0M3LjQxMzQ0IDguNDQ5MzggOC4xMTI0NyA4LjAzMTMzIDguODExNDkgNy42MTZDOS4xNTI4IDcuNDEyNDMgOS40OTYzIDcuMjE0ODMgOS44MzQ4OSA3LjAwNThDOS44NDAzNiA3LjAwMzA4IDkuODQ1ODIgNy4wMDAzNiA5Ljg0OTA5IDYuOTk3NjRDMTAuMzg1OSA2LjY3NzAyIDEwLjM4NTkgNS44OTM3MyA5Ljg0OTA5IDUuNTczNjNDOS41NzIyMSA1LjQwNjUyIDkuMjkyNiA1LjI0MjEzIDkuMDE1NzMgNS4wNzUwMkM4LjM0NDU2IDQuNjczODUgNy42NzMzOSA0LjI3MjE0IDcuMDAyODMgMy44NzM2OEM2LjE5NDYgMy4zOTE0MSA1LjM4Njg0IDIuOTA5MTIgNC41Nzg2MyAyLjQyNDczQzMuODc5NjEgMi4wMDY2OCAzLjE4MDU5IDEuNTg4NjMgMi40ODE1NyAxLjE3MzNDMi4xNDAyNSAwLjk2OTcyNSAxLjgwNDk1IDAuNzU3OTcgMS40NTgxNiAwLjU2MzEwNEMxLjQ1MjcgMC41NjAzODIgMS40NDcyNCAwLjU1NzY2MSAxLjQ0Mzk2IDAuNTU0OTM5QzAuOTA0NDAzIDAuMjMxNjA3IDAuMTk5OTMgMC42NDY5MzIgMC4xOTk5MyAxLjI2NTg0VjIuMjYzNjFWNC42NTc2M1Y3LjU1NjI0VjEwLjA3NTRDMC4xOTk5MyAxMC40NzkzIDAuMTkxNzM4IDEwLjg4NjQgMC4xOTk5MyAxMS4yOTMxVjExLjMwOTlDMC4xOTk5MyAxMS43NDIxIDAuNTgwMDI5IDEyLjE1NDIgMS4wMjc4NCAxMi4xMzUyQzEuNDcxODMgMTIuMTE0NSAxLjg1MTkxIDExLjc3NDMgMS44NTE5MSAxMS4zMTE2TDEuODUxOSAxMS4zMTE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+DQogIDx0aXRsZT4NCiAgICBwYXVzZQ0KICA8L3RpdGxlPg0KICA8cmVjdCBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iNiIgaGVpZ2h0PSIxNiIgeD0iMyIgeT0iMiIgcng9IjEiIHJ5PSIxIi8+DQogIDxyZWN0IGZpbGw9IiNmZmZmZmYiIHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB4PSIxMSIgeT0iMiIgcng9IjEiIHJ5PSIxIi8+DQo8L3N2Zz4NCg=="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik05LjMzMjc5IDAuNzUzMTM3QzguOTMwOTkgMC41ODQxMjUgOC40NjY1MyAwLjY4MDg3NiA4LjE2NDg2IDAuOTk1MDNMNS4yNTIwNCAzLjk4ODM2SDEuODUzMzlWMy45ODc3NEMxLjQxODQyIDMuOTg3MTMgMS4wMDA2NCA0LjE1OTgzIDAuNjkzNDUyIDQuNDY2NjJDMC4zODU2NTYgNC43NzM0MiAwLjIxMzYyMyA1LjE4OTg0IDAuMjE0ODUgNS42MjM0VjExLjE1NzVDMC4yMTQ4NSAxMi4wNTgzIDAuOTQ3MTc2IDEyLjc4ODIgMS44NTA4NyAxMi43ODgySDUuNjcxNjdMOC4xNjQ4NiAxNS4zNTI3QzguMzYzOTIgMTUuNTU4NSA4LjYzNzkzIDE1LjY3NDggOC45MjQ4NCAxNS42NzQ4QzkuMDY0OTEgMTUuNjc0OCA5LjIwMzE1IDE1LjY0NzMgOS4zMzI3OSAxNS41OTQ2QzkuNzM5NSAxNS40MzYgMTAuMDA0OSAxNS4wNDI5IDEwIDE0LjYwNzVWMS43NDAyN0MxMC4wMDQ5IDEuMzA0ODggOS43Mzk1MiAwLjkxMTcxOSA5LjMzMjc5IDAuNzUzMTE3VjAuNzUzMTM3Wk05LjUxNDY0IDE0LjYwODFWMTQuNjA3NUM5LjUxNDY0IDE0Ljg0MzkgOS4zNzAyNiAxNS4wNTY0IDkuMTUwOTMgMTUuMTQ1MkM4LjkzMTYgMTUuMjM0IDguNjc5NyAxNS4xODEzIDguNTE0NDMgMTUuMDExN0w1Ljg3ODExIDEyLjMwMkgxLjg1MDk3QzEuMjE2MzEgMTIuMzAyIDAuNzAxNDczIDExLjc5IDAuNzAwMjQ3IDExLjE1NzRWNS42MjMzNkMwLjcwMDI0NyA0Ljk5MDE2IDEuMjE1NyA0LjQ3Njk5IDEuODUwOTcgNC40NzY5OUg1LjQ1ODY1TDguNTEyNyAxLjMzMTI5SDguNTEyMDlDOC42NzczNiAxLjE2MDQ0IDguOTI5ODYgMS4xMDY1NCA5LjE1MDQyIDEuMTk1MzRDOS4zNzE1OSAxLjI4NDEzIDkuNTE1MzYgMS40OTc4NSA5LjUxNDc1IDEuNzM1NDVMOS41MTQ2NCAxNC42MDgxWiIgZmlsbD0iI2ZmZmZmZiIvPgo8cmVjdCB4PSIxMSIgeT0iNSIgd2lkdGg9IjEiIGhlaWdodD0iNiIgcng9IjAuNSIgZmlsbD0iIzlhOWE5YSIvPgo8cmVjdCB4PSIxMyIgeT0iMyIgd2lkdGg9IjEiIGhlaWdodD0iMTAiIHJ4PSIwLjUiIGZpbGw9IiM5YTlhOWEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNS43MjgiIGhlaWdodD0iMTUuNjc2OCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjE0ODQ0IDAuMzM1OTM4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik05LjMzMjc5IDAuNzUzMTM3QzguOTMwOTkgMC41ODQxMjUgOC40NjY1MyAwLjY4MDg3NiA4LjE2NDg2IDAuOTk1MDNMNS4yNTIwNCAzLjk4ODM2SDEuODUzMzlWMy45ODc3NEMxLjQxODQyIDMuOTg3MTMgMS4wMDA2NCA0LjE1OTgzIDAuNjkzNDUyIDQuNDY2NjJDMC4zODU2NTYgNC43NzM0MiAwLjIxMzYyMyA1LjE4OTg0IDAuMjE0ODUgNS42MjM0VjExLjE1NzVDMC4yMTQ4NSAxMi4wNTgzIDAuOTQ3MTc2IDEyLjc4ODIgMS44NTA4NyAxMi43ODgySDUuNjcxNjdMOC4xNjQ4NiAxNS4zNTI3QzguMzYzOTIgMTUuNTU4NSA4LjYzNzkzIDE1LjY3NDggOC45MjQ4NCAxNS42NzQ4QzkuMDY0OTEgMTUuNjc0OCA5LjIwMzE1IDE1LjY0NzMgOS4zMzI3OSAxNS41OTQ2QzkuNzM5NSAxNS40MzYgMTAuMDA0OSAxNS4wNDI5IDEwIDE0LjYwNzVWMS43NDAyN0MxMC4wMDQ5IDEuMzA0ODggOS43Mzk1MiAwLjkxMTcxOSA5LjMzMjc5IDAuNzUzMTE3VjAuNzUzMTM3Wk05LjUxNDY0IDE0LjYwODFWMTQuNjA3NUM5LjUxNDY0IDE0Ljg0MzkgOS4zNzAyNiAxNS4wNTY0IDkuMTUwOTMgMTUuMTQ1MkM4LjkzMTYgMTUuMjM0IDguNjc5NyAxNS4xODEzIDguNTE0NDMgMTUuMDExN0w1Ljg3ODExIDEyLjMwMkgxLjg1MDk3QzEuMjE2MzEgMTIuMzAyIDAuNzAxNDczIDExLjc5IDAuNzAwMjQ3IDExLjE1NzRWNS42MjMzNkMwLjcwMDI0NyA0Ljk5MDE2IDEuMjE1NyA0LjQ3Njk5IDEuODUwOTcgNC40NzY5OUg1LjQ1ODY1TDguNTEyNyAxLjMzMTI5SDguNTEyMDlDOC42NzczNiAxLjE2MDQ0IDguOTI5ODYgMS4xMDY1NCA5LjE1MDQyIDEuMTk1MzRDOS4zNzE1OSAxLjI4NDEzIDkuNTE1MzYgMS40OTc4NSA5LjUxNDc1IDEuNzM1NDVMOS41MTQ2NCAxNC42MDgxWiIgZmlsbD0iI2ZmZmZmZiIvPgo8cGF0aCBkPSJNMTQuMDA3NSA4LjQxNTQ0TDE1Ljg2OTcgNi41NTkzMUwxNS44NjkxIDYuNTU5OTJDMTUuOTUyMSA2LjQ2Mzc4IDE1Ljk0NjUgNi4zMjA0OSAxNS44NTY4IDYuMjMxMDdDMTUuNzY3MSA2LjE0MTY2IDE1LjYyMzQgNi4xMzYxNSAxNS41MjY5IDYuMjE4MjFMMTMuNjY0NyA4LjA3NDM0TDExLjgwMjUgNi4yMTgyMUgxMS44MDMxQzExLjcwNjcgNi4xMzYxNSAxMS41NjM1IDYuMTQxNjYgMTEuNDczOCA2LjIzMTA3QzExLjM4NDEgNi4zMjA0OCAxMS4zNzg2IDYuNDYzNzggMTEuNDYwOSA2LjU1OTkyTDEzLjMyMzEgOC40MTU0M0wxMS40NjA5IDEwLjI3MTZDMTEuNDA5MyAxMC4zMTUgMTEuMzc4NiAxMC4zNzg3IDExLjM3NjEgMTAuNDQ2MUMxMS4zNzM3IDEwLjUxMzQgMTEuMzk5NSAxMC41Nzg0IDExLjQ0NzQgMTAuNjI2MUMxMS40OTQ3IDEwLjY3MzkgMTEuNTYwNCAxMC42OTk2IDExLjYyOCAxMC42OTcyQzExLjY5NTYgMTAuNjk0MSAxMS43NTk1IDEwLjY2MzUgMTEuODAzMSAxMC42MTI2TDEzLjY2NTMgOC43NTY1MkwxNS41Mjc1IDEwLjYxMjZIMTUuNTI2OUMxNS42MjM0IDEwLjY5NDcgMTUuNzY3MSAxMC42ODkyIDE1Ljg1NjggMTAuNTk5OEMxNS45NDY1IDEwLjUxMDQgMTUuOTUyIDEwLjM2NzcgMTUuODY5MSAxMC4yNzE1TDE0LjAwNzUgOC40MTU0NFoiIGZpbGw9IiNmZmZmZmYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNS43MjgiIGhlaWdodD0iMTUuNjc2OCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjE0ODQ0IDAuMzM1OTM4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjIyNyA4LjIzMDJDMTguMTk1MyA4LjIxNjkzIDE4LjE2MDUgOC4yMDk3OSAxOC4xMjY3IDguMjA5NzlIMTQuMjg3N0MxNC4xNDIzIDguMjA5NzkgMTQuMDI1NiA4LjMyNjE0IDE0LjAyNTYgOC40NzEwN0MxNC4wMjU2IDguNjE1OTkgMTQuMTQyMyA4LjczMjM1IDE0LjI4NzcgOC43MzIzNUgxNy40OTM2TDE0LjAwOTEgMTIuMjA1NUMxMy45MDY3IDEyLjMwNzYgMTMuOTA2NyAxMi40NzI5IDE0LjAwOTEgMTIuNTc1QzE0LjA2MDMgMTIuNjI2IDE0LjEyNjggMTIuNjUxNiAxNC4xOTQ0IDEyLjY1MTZDMTQuMjYyIDEyLjY1MTYgMTQuMzI4NiAxMi42MjYgMTQuMzc5OCAxMi41NzVMMTcuODY0MyA5LjEwMTgyVjEyLjI5NzNDMTcuODY0MyAxMi40NDIyIDE3Ljk4MSAxMi41NTg2IDE4LjEyNjQgMTIuNTU4NkMxOC4yNzE4IDEyLjU1ODYgMTguMzg4NiAxMi40NDIyIDE4LjM4ODYgMTIuMjk3M1Y4LjQ3MDgzQzE4LjM4ODYgOC40MzcxNSAxOC4zODE0IDguNDAyNDUgMTguMzY4MSA4LjM3MDgxQzE4LjM0MTUgOC4zMDY1MSAxOC4yOTEzIDguMjU2NSAxOC4yMjY4IDguMjI5OTZMMTguMjI3IDguMjMwMlpNMTIuNDM2NSAxMy43NzQzTDguOTUxOTcgMTcuMjQ3NVYxNC4wNTJDOC45NTE5NyAxMy45MDcxIDguODM1MjQgMTMuNzkwOCA4LjY4OTg0IDEzLjc5MDhDOC41NDQ0MyAxMy43OTA4IDguNDI3NyAxMy45MDcxIDguNDI3NyAxNC4wNTJWMTcuODc4NUM4LjQyNzcgMTcuOTEyMiA4LjQzNDg3IDE3Ljk0NjkgOC40NDgxOCAxNy45Nzg1QzguNDc0OCAxOC4wNDI4IDguNTI2IDE4LjA5MjggOC41ODk0OSAxOC4xMTkzQzguNjIxMjMgMTguMTMyNiA4LjY1NjA1IDE4LjEzOTggOC42ODk4MyAxOC4xMzk4SDEyLjUyODhDMTIuNjc0MiAxOC4xMzk4IDEyLjc5MDkgMTguMDIzNCAxMi43OTA5IDE3Ljg3ODVDMTIuNzkwOSAxNy43MzM2IDEyLjY3NDIgMTcuNjE3MiAxMi41Mjg4IDE3LjYxNzJIOS4zMjI4OEwxMi44MDc0IDE0LjE0NEMxMi45MDk4IDE0LjA0MTkgMTIuOTA5OCAxMy44NzY2IDEyLjgwNzQgMTMuNzc0NUMxMi43MDUgMTMuNjcyNCAxMi41MzkxIDEzLjY3MTQgMTIuNDM2NyAxMy43NzQ1TDEyLjQzNjUgMTMuNzc0M1pNMTguOTEzIDYuMzgwODZINy45MDM0NEM3LjE4MDUzIDYuMzgwODYgNi41OTI3NyA2Ljk2NjcgNi41OTI3NyA3LjY4NzI2VjE4LjY2MUM2LjU5Mjc3IDE5LjM4MTYgNy4xODA1MyAxOS45Njc0IDcuOTAzNDQgMTkuOTY3NEgxOC45MTNDMTkuNjM1OSAxOS45Njc0IDIwLjIyMzcgMTkuMzgxNiAyMC4yMjM3IDE4LjY2MVY3LjY4NzI2QzIwLjIyMzcgNi45NjY3IDE5LjYzNTkgNi4zODA4NiAxOC45MTMgNi4zODA4NlpNMTkuNjk5NCAxOC42NjFDMTkuNjk5NCAxOS4wOTI3IDE5LjM0NjEgMTkuNDQ0OSAxOC45MTMgMTkuNDQ0OUg3LjkwMzQ0QzcuNDcwMzIgMTkuNDQ0OSA3LjExNzA0IDE5LjA5MjcgNy4xMTcwNCAxOC42NjFWNy42ODcyNkM3LjExNzA0IDcuMjU1NTUgNy40NzAzMiA2LjkwMzQyIDcuOTAzNDQgNi45MDM0MkgxOC45MTNDMTkuMzQ2MSA2LjkwMzQyIDE5LjY5OTQgNy4yNTU1NSAxOS42OTk0IDcuNjg3MjZWMTguNjYxWiIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4K"},function(M,N,D){"use strict";var e,j={},u=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},g=function(){var M={};return function(N){if(void 0===M[N]){var D=document.querySelector(N);if(window.HTMLIFrameElement&&D instanceof window.HTMLIFrameElement)try{D=D.contentDocument.head}catch(M){D=null}M[N]=D}return M[N]}}();function I(M,N){for(var D=[],e={},j=0;j<M.length;j++){var u=M[j],g=N.base?u[0]+N.base:u[0],I={css:u[1],media:u[2],sourceMap:u[3]};e[g]?e[g].parts.push(I):D.push(e[g]={id:g,parts:[I]})}return D}function n(M,N){for(var D=0;D<M.length;D++){var e=M[D],u=j[e.id],g=0;if(u){for(u.refs++;g<u.parts.length;g++)u.parts[g](e.parts[g]);for(;g<e.parts.length;g++)u.parts.push(r(e.parts[g],N))}else{for(var I=[];g<e.parts.length;g++)I.push(r(e.parts[g],N));j[e.id]={id:e.id,refs:1,parts:I}}}}function i(M){var N=document.createElement("style");if(void 0===M.attributes.nonce){var e=D.nc;e&&(M.attributes.nonce=e)}if(Object.keys(M.attributes).forEach((function(D){N.setAttribute(D,M.attributes[D])})),"function"==typeof M.insert)M.insert(N);else{var j=g(M.insert||"head");if(!j)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");j.appendChild(N)}return N}var c,T=(c=[],function(M,N){return c[M]=N,c.filter(Boolean).join("\n")});function z(M,N,D,e){var j=D?"":e.css;if(M.styleSheet)M.styleSheet.cssText=T(N,j);else{var u=document.createTextNode(j),g=M.childNodes;g[N]&&M.removeChild(g[N]),g.length?M.insertBefore(u,g[N]):M.appendChild(u)}}function t(M,N,D){var e=D.css,j=D.media,u=D.sourceMap;if(j&&M.setAttribute("media",j),u&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),M.styleSheet)M.styleSheet.cssText=e;else{for(;M.firstChild;)M.removeChild(M.firstChild);M.appendChild(document.createTextNode(e))}}var A=null,o=0;function r(M,N){var D,e,j;if(N.singleton){var u=o++;D=A||(A=i(N)),e=z.bind(null,D,u,!1),j=z.bind(null,D,u,!0)}else D=i(N),e=t.bind(null,D,N),j=function(){!function(M){if(null===M.parentNode)return!1;M.parentNode.removeChild(M)}(D)};return e(M),function(N){if(N){if(N.css===M.css&&N.media===M.media&&N.sourceMap===M.sourceMap)return;e(M=N)}else j()}}M.exports=function(M,N){(N=N||{}).attributes="object"==typeof N.attributes?N.attributes:{},N.singleton||"boolean"==typeof N.singleton||(N.singleton=u());var D=I(M,N);return n(D,N),function(M){for(var e=[],u=0;u<D.length;u++){var g=D[u],i=j[g.id];i&&(i.refs--,e.push(i))}M&&n(I(M,N),N);for(var c=0;c<e.length;c++){var T=e[c];if(0===T.refs){for(var z=0;z<T.parts.length;z++)T.parts[z]();delete j[T.id]}}}}},function(M,N,D){"use strict";D.r(N);var e=D(0),j=D.n(e);var u=function(M){var N=M.marker,D=M.duration,e=M.onMarkerClick,u=N.id,g=N.time,I=N.color,n=N.title;return j.a.createElement("i",{id:u,className:"react-video-marker",title:n,style:{background:I,left:D?"calc(".concat(g/D*100,"% - 2px)"):"-9999px"},onClick:function(){e(N)}})};var g=function(M){var N=M.progressEl,D=M.volumeEl,e=M.controls,g=M.isPlaying,I=M.volume,n=M.muted,i=M.currentTime,c=M.duration,T=M.markers,z=M.onPlayClick,t=M.onPauseClick,A=M.onProgressClick,o=M.onVolumeClick,r=M.onMuteClick,x=M.onFullScreenClick,O=M.onMarkerClick,E=function(M){var N=M?parseInt(String(M),10):0,D=Math.floor(N/3600),e=Math.floor((N-3600*D)/60),j=N-3600*D-60*e,u=String(D),g=String(e),I=String(j);return D<10&&(u="0"+D),e<10&&(g="0"+e),j<10&&(I="0"+j),"".concat("00"!==u?u+":":"").concat(g,":").concat(I)},a=E(Math.ceil(c)),y=i!==c?E(i):a;return j.a.createElement("div",{className:"react-video-controls"},e.includes("play")?j.a.createElement("button",{className:g?"pause":"play",onClick:g?t:z},g?"Pause":"Play"):null,e.includes("time")?j.a.createElement("div",{className:"time"},y,"/",a):null,e.includes("progress")?j.a.createElement("div",{className:"progress-wrap"},j.a.createElement("progress",{ref:N,max:"100",onClick:A},"0% played"),T&&T.map((function(M,N){return j.a.createElement(u,{key:N,marker:M,duration:c,onMarkerClick:O})}))):null,e.includes("volume")?j.a.createElement("div",{className:"volume-wrap"},j.a.createElement("progress",{ref:D,max:"100",value:100*I,onClick:o},100*I,"% volume"),j.a.createElement("button",{className:n?"no-volume":"volume",onClick:r},"Volume")):null,e.includes("full-screen")?j.a.createElement("button",{className:"full-screen",onClick:x},"FullScreen"):null)};D(1);function I(M,N){return function(M){if(Array.isArray(M))return M}(M)||function(M,N){if(!(Symbol.iterator in Object(M)||"[object Arguments]"===Object.prototype.toString.call(M)))return;var D=[],e=!0,j=!1,u=void 0;try{for(var g,I=M[Symbol.iterator]();!(e=(g=I.next()).done)&&(D.push(g.value),!N||D.length!==N);e=!0);}catch(M){j=!0,u=M}finally{try{e||null==I.return||I.return()}finally{if(j)throw u}}return D}(M,N)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var n=.7;N.default=function(M){var N=Object(e.useRef)(null),D=Object(e.useRef)(null),u=Object(e.useRef)(null),i=I(Object(e.useState)(0),2),c=i[0],T=i[1],z=I(Object(e.useState)(null),2),t=z[0],A=z[1],o=I(Object(e.useState)(!0),2),r=o[0],x=o[1],O=I(Object(e.useState)(!1),2),E=O[0],a=O[1],y=M.url,L=M.poster_url,l=M.controls,s=void 0===l?["play","time","progress","volume","full-screen"]:l,S=M.height,d=void 0===S?"360px":S,k=M.width,w=void 0===k?"640px":k,C=M.isPlaying,Y=void 0!==C&&C,Q=M.volume,m=void 0===Q?.7:Q,p=M.loop,U=void 0!==p&&p,f=M.markers,v=void 0===f?[]:f,b=M.timeStart,Z=void 0===b?0:b,h=M.onPlay,P=void 0===h?function(){}:h,W=M.onPause,G=void 0===W?function(){}:W,R=M.onVolume,H=void 0===R?function(){}:R,V=M.onProgress,J=void 0===V?function(){}:V,B=M.onDuration,F=void 0===B?function(){}:B,K=M.onMarkerClick,X=void 0===K?function(){}:K;Object(e.useEffect)((function(){if(N.current.addEventListener("timeupdate",MM),N.current.addEventListener("durationchange",$),Z&&q(),Y){var M=N.current.play();void 0!==M&&M.then((function(M){console.log("RVP 1 GO")})).catch((function(M){console.log("RVP 1 NO GO"),G()}))}return function(){N.current.removeEventListener("timeupdate",MM),N.current.removeEventListener("durationchange",$)}}),[]),Object(e.useEffect)((function(){q()}),[Z]),Object(e.useEffect)((function(){if(Y){var M=N.current.play();void 0!==M&&M.then((function(M){console.log("RVP 2 GO")})).catch((function(M){console.log("RVP 2 NO GO"),G()}))}else N.current.pause()}),[Y]),Object(e.useEffect)((function(){_(m)}),[m]);var q=function(){Z&&N&&(N.current.currentTime=Z)},_=function(M){N.current.volume=M,x(!M)},$=function(M){var N=M.currentTarget.duration;A(N),F(N)},MM=function(M){var N=M.currentTarget,e=N.currentTime,j=N.duration;if(j){T(e);var u=100/j*e;D.current.value=u,D.current.innerHTML=u+"% played",e===j&&G()}J(M)},NM=function(){var M=document.getElementsByClassName("react-video-wrap")[0];E?(document.body.classList.remove("react-video-full-screen"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()):(document.body.classList.add("react-video-full-screen"),M.requestFullscreen?M.requestFullscreen():M.mozRequestFullScreen?M.mozRequestFullScreen():M.webkitRequestFullscreen?M.webkitRequestFullscreen():M.msRequestFullscreen&&M.msRequestFullscreen()),a(!E)};return j.a.createElement("div",{className:"react-video-wrap",style:{height:d,width:w}},j.a.createElement("video",{ref:N,className:"react-video-player",loop:U,onClick:function(){Y?G():P()},playsInline:!0,poster:L,controls:!0},j.a.createElement("source",{src:y,type:"video/mp4"})),E?j.a.createElement("button",{className:"react-video-close",onClick:NM},"Close video"):null,s.length?j.a.createElement(g,{progressEl:D,volumeEl:u,controls:s,isPlaying:Y,volume:m,currentTime:c,duration:t,muted:r,markers:v,onPlayClick:P,onPauseClick:G,onProgressClick:function(M){var e=(M.clientX-D.current.getBoundingClientRect().left+document.body.scrollLeft)*D.current.max/D.current.offsetWidth;N.current.currentTime=e/100*N.current.duration},onVolumeClick:function(M){var D=(u.current.offsetWidth-(M.clientY-u.current.getBoundingClientRect().top+document.body.scrollTop))*u.current.max/u.current.offsetWidth;N.current.muted=!1,H(D/100)},onMuteClick:function(){r?(N.current.muted=!1,_(n),x(!1)):(N.current.muted=!0,_(0),x(!0))},onFullScreenClick:NM,onMarkerClick:function(M){N.current.currentTime=M.time,X(M)}}):null)}}])}));
//# sourceMappingURL=index.map
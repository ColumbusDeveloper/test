(function(){"use strict";var e={3375:function(e,t,n){var r=n(9242),a=n(3396);const o={class:"app__nav"};function s(e,t){const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(n)])}var i=n(89);const u={},c=(0,i.Z)(u,[["render",s]]);var d=c,p=n(2483);const m={class:"home"},C={class:"home__movingtext"};function l(e,t,n,r,o,s){const i=(0,a.up)("HomeImgS"),u=(0,a.up)("BurgerMain"),c=(0,a.up)("NavLeft"),d=(0,a.up)("NavBot"),p=(0,a.up)("NavRight"),l=(0,a.up)("StringRunUp"),g=(0,a.up)("StringRunDown"),E=(0,a.up)("CentralText"),v=(0,a.up)("HomeButtRound"),h=(0,a.up)("HomeLang");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(i,{class:"home__imgS"}),(0,a.Wm)(u,{class:"home__burger",page:o.page},null,8,["page"]),(0,a.Wm)(c,{class:"home__navleft home__navcomp"}),(0,a.Wm)(d,{class:"home__navbot home__navcomp"}),(0,a.Wm)(p,{class:"home__navright home__navcomp"}),(0,a._)("div",C,[(0,a.Wm)(l,{class:"home__stringrun home__stringrunup"}),(0,a.Wm)(g,{class:"home__stringrun home__stringrundown"})]),(0,a.Wm)(E,{class:"home__centraltext"}),(0,a.Wm)(v,{class:"home__buttround"}),(0,a.Wm)(h,{class:"home__lang"})])}var g=n(7139);const E={class:"burgermain"};function v(e,t,n,r,o,s){const i=(0,a.up)("Blines"),u=(0,a.up)("BurgerBody");return(0,a.wg)(),(0,a.iD)("div",E,[(0,a.Wm)(i,{class:"burgermain__lines",onAct:s.menuStatus},null,8,["onAct"]),(0,a.Wm)(u,{class:(0,g.C_)(["burgermain__body",{burgermain__visible:o.menuOn}]),page:o.page},null,8,["class","page"])])}function h(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",{class:"blines",ref:"bmicon",onClick:t[0]||(t[0]=(...e)=>s.press&&s.press(...e))},[(0,a._)("div",{class:(0,g.C_)(["blines__line",{blines__topactive:o.pressed,blines__toppass:!o.pressed}]),ref:"linetop"},null,2),(0,a._)("div",{class:(0,g.C_)(["blines__line",{blines__botactive:o.pressed,blines__botpass:!o.pressed}]),ref:"linebot"},null,2)],512)}var A={name:"BurgerLines",components:{},data(){return{pressed:!1}},methods:{press(){this.pressed=!this.pressed,this.pressed?this.$refs.linetop.style="margin-bottom:-1px":this.$refs.linetop.style="margin-bottom:7px",this.$emit("act",this.pressed)},dropdown(e){let t=this.$refs.bmicon,n=e.composedPath().includes(t);n||(this.pressed=!1,this.$emit("act",this.pressed)),this.pressed?this.$refs.linetop.style="margin-bottom:-1px":this.$refs.linetop.style="margin-bottom:7px"}},created(){document.addEventListener("click",this.dropdown)},unmounted(){document.removeEventListener("click",this.dropdown)}};const L=(0,i.Z)(A,[["render",h],["__scopeId","data-v-5493c61a"]]);var f=L;n(7658);const b=e=>((0,a.dD)("data-v-2c5acb2b"),e=e(),(0,a.Cn)(),e),_=b((()=>(0,a._)("p",{class:"burgerbody__item-text"},"Home",-1))),N=[_],Y=b((()=>(0,a._)("p",{class:"burgerbody__item-text"},"Where",-1))),U=[Y],w=b((()=>(0,a._)("p",{class:"burgerbody__item-text"},"What",-1))),B=[w],V=b((()=>(0,a._)("p",{class:"burgerbody__item-text"},"Who",-1))),T=[V];function q(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",{class:(0,g.C_)(["burgerbody burgerbody__none",{burgerbody__box:e.visible}])},["home"!==o.pageProp?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"burgerbody__item",onClick:t[0]||(t[0]=t=>e.$router.push({name:"home"}))},N)):(0,a.kq)("",!0),"page"!==o.pageProp?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"burgerbody__item",onClick:t[1]||(t[1]=t=>e.$router.push({name:"page"}))},U)):(0,a.kq)("",!0),"page"!==o.pageProp?((0,a.wg)(),(0,a.iD)("div",{key:2,class:"burgerbody__item",onClick:t[2]||(t[2]=t=>e.$router.push({name:"page"}))},B)):(0,a.kq)("",!0),"page"!==o.pageProp?((0,a.wg)(),(0,a.iD)("div",{key:3,class:"burgerbody__item",onClick:t[3]||(t[3]=t=>e.$router.push({name:"page"}))},T)):(0,a.kq)("",!0)],2)}var D={name:"BurgerBody",props:["page"],data(){return{pageProp:this.page}},watch:{page(e){this.pageProp=e}}};const y=(0,i.Z)(D,[["render",q],["__scopeId","data-v-2c5acb2b"]]);var x=y,G={name:"BurgerMenuMain",props:["page"],components:{Blines:f,BurgerBody:x},data(){return{menuOn:!1,page:this.page}},methods:{menuStatus(e){this.menuOn=e}}};const F=(0,i.Z)(G,[["render",v],["__scopeId","data-v-ad570100"]]);var I=F;const M=e=>((0,a.dD)("data-v-65f77842"),e=e(),(0,a.Cn)(),e),R=M((()=>(0,a._)("p",null,"where?",-1))),S=[R];function j(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",{class:"home__where",onClick:t[0]||(t[0]=t=>e.$router.push({name:"page"}))},S)}var X={name:"HomeNavLeft"};const O=(0,i.Z)(X,[["render",j],["__scopeId","data-v-65f77842"]]);var W=O;const H=e=>((0,a.dD)("data-v-563bcf2c"),e=e(),(0,a.Cn)(),e),P=H((()=>(0,a._)("p",null,"who?",-1))),Z=[P];function K(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",{class:"home__who",onClick:t[0]||(t[0]=t=>e.$router.push({name:"page"}))},Z)}var k={name:"HomeNavBot"};const J=(0,i.Z)(k,[["render",K],["__scopeId","data-v-563bcf2c"]]);var Q=J;const z=e=>((0,a.dD)("data-v-2a744659"),e=e(),(0,a.Cn)(),e),$=z((()=>(0,a._)("p",null,"what?",-1))),ee=[$];function te(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",{class:"home__what",onClick:t[0]||(t[0]=t=>e.$router.push({name:"page"}))},ee)}var ne={name:"HomeNavRight"};const re=(0,i.Z)(ne,[["render",te],["__scopeId","data-v-2a744659"]]);var ae=re;const oe=e=>((0,a.dD)("data-v-1eb0b3e4"),e=e(),(0,a.Cn)(),e),se={class:"stringrun"},ie=oe((()=>(0,a._)("p",{id:"demo"},"FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY",-1))),ue=[ie];function ce(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",se,ue)}var de={name:"StringRunDown",mounted(){let e=document.getElementById("demo"),t=e.innerHTML;setInterval((function(){t=t.substring(1,t.length)+t[0],e.innerHTML=t}),100)}};const pe=(0,i.Z)(de,[["render",ce],["__scopeId","data-v-1eb0b3e4"]]);var me=pe;const Ce=e=>((0,a.dD)("data-v-165709de"),e=e(),(0,a.Cn)(),e),le={class:"stringrun"},ge=Ce((()=>(0,a._)("p",{id:"demo1"},"FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY",-1))),Ee=[ge];function ve(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",le,Ee)}var he={name:"StringRunDown",mounted(){let e=document.getElementById("demo1"),t=e.innerHTML;setInterval((function(){t=t[t.length-1]+t.substring(0,t.length-1),e.innerHTML=t}),100)}};const Ae=(0,i.Z)(he,[["render",ve],["__scopeId","data-v-165709de"]]);var Le=Ae;const fe=e=>((0,a.dD)("data-v-64bd99c3"),e=e(),(0,a.Cn)(),e),be={class:"home__centraltext-box"},_e=fe((()=>(0,a._)("p",{class:"home__centraltext"},"FULL-CYCLE",-1))),Ne=fe((()=>(0,a._)("p",{class:"home__centraltext1"},"EVENT AGENCY",-1))),Ye=[_e,Ne];function Ue(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",be,Ye)}var we={name:"HomeCentralText"};const Be=(0,i.Z)(we,[["render",Ue],["__scopeId","data-v-64bd99c3"]]);var Ve=Be,Te=n.p+"img/imgS.a0453c8e.png";const qe=e=>((0,a.dD)("data-v-0c3dfe2a"),e=e(),(0,a.Cn)(),e),De={class:"home-imgS-box"},ye=qe((()=>(0,a._)("img",{class:"home-imgS-box__imgS",src:Te,alt:"S"},null,-1)));function xe(e,t,n,r,o,s){const i=(0,a.up)("HomeButtRound");return(0,a.wg)(),(0,a.iD)("div",De,[ye,(0,a.Wm)(i,{class:"home-imgS-box__butt"})])}var Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAYAAAAdp2cRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoSSURBVHgB7Z3hleI2EMdn7+V76OCcCkIqWFLBkgrYVMCmAuhgLxWwqYDrwJsK2KvAdMClgn8869FqJMssy2Fjw/ze08PIsgEPM5JGI4nIMIzhcEMXBoBJ+fL95ubmJcofly9jlbUtyzyT0S9KQY3KNC3TXI4nZSpQsVLldH7MrkyPZJwXEdJIjjMloIdIYOtEmbxMszLdlumOhS+CfSuvPuee8+QaTo9iCYxTIgLaiBA+q3wNn7+NrltEgnVpJWmjzrs/zBeEGq0p+M/R8B03cs+MesBPNAwy8vXjfyp/K+eYP8o6c7vnHtvEPb+X6dlliFDmqvyfXA+jqp85/75MT+X7X8r8pbpuIt/Pfcc/yQhBZW5zMX8jlfdKVHblNKnhXuNIo2dyL05TMbd8j3n8OQjr5RxVXf4Qa7hct1b5GRkhqBpBsenL1APfReUfUw86KjNFc+PJsVCf78zvo3y2q2/je9zKNboeX5Hx9lAm0XstVPfqBFhE19+r8uN3PusWldYtVJrFfwi55059Nl8zlu82l5RDNBPeagDXrq2iGbl6IEvJH6sHmqGuJZvEfcZo0NYf+H5ZJDBEf7ipKucwbWVEIIUWLrzJzaXMKHrAOXUIvCl+RNj1yeS8/m63ZFQktHKTEiAq89erBxd9907/cL1BHgJr5Fr/4+XcCGEjaDBmTbSZhTuja0KE9gV1+GHEjZaFnNtd3YMaEgi9RTvRSt3fm6euoQtGnslO0mpwv1c0tXD1D8LOvMu/Ouc76i1tfhZjaoFP1A4stKxMX0vX2+9l+p4o80JXAqQfXB7+K1n823+R480gqh6E3qNxdO7J/VPpioB3pCzh++9LhC3rCfUZhP7ZB8nL1A8qLr0ujYF3Ve6itsejqncLnNjRclIQ+luBej81oysEfgBhJc9oo94v5LjfJhmhDxci6AVdOUqAuVg2J9wHeWaTqPwI5zDR8sFrZUpm6hybmDtJ/TUxHaOEW8B3/3aJcs7luuvcyiE9HLYyQe4H9aHEeNQqDvXpzhOHqlXnzGw8XlngSuvSjyDWbI4wjiuPhNpufx++L+beF9pMoO5pysg4GNFS3ehs37WKsL/l+l/MIlF2gYS70GgGoasVCK3fW4hQGx8ct3LdF7ExyBMAX6cWCENuksOYp/7weGA8qbHGcYili0e8tM/9gdoC9cp91+oHGjpgb0dtgzAQ+7UeIKMVlDkGdQHCvpiZ5BOD0DPVTj0rH7JO1AFsmtdknBSEIbBAGz52hKMPrtvDqZUBYqM2I6Gd7g68I2KOsFVsmtoiiCIz4aeKZvSjwPdf5+rYOf2vM+TyDKDuO17Sj4Cqa1PIcSFpYi3h7kA420BzXDdT3XChtFUfm9epA8RaQpTqDr5htTuq7kXVnYGqWwuoxhMZnaAEu1B5izjvmBtCCXgpxxbQ3RFKwR5V3lsMFX0UhE3uFd6ZZGy0A3zUZzw3OJf8j3c7xfS60YYNbJz1LCgh6tCj9UmsJ9RIv9Etynq+Dr4jrCbvyBguqM9IdGRkDBfUJ4HvDZ25uCX3Lh1pLP1cpm8Nc6KMS0A0mbuhn8m4DBCuE2mCHTpIrxRgLt4hg8oTFU96m6YKjqx/OgwQjvS8TnRrkh0vksnB3Vz5cgtrS9XCkS/y+s29txZY73DyGslxyJ6Or8aC1XqC9GWLSD4rxD5jaVkt5GSOMDLOYW6rnoFqXFbL6rBQJfh1CnlwNyOjdyDs7mzoysjKxPFZPOzFQddr8otXDxLUuzuvwYbvXbSUf8EM1SovGQ2XjLxAddrRQIWL+hyq/F0ZRf+ChdxgyCrO2omGNMgoS4SN3fcbtQjXZ9opwQLDDQ7HntT+JKcWQD1kqRArmzVd8BZWCr/ThbvJUGOcUmZYp0GCqkWco86bAuol9zJ5/Uq+w/stOjc09i3r95UGSukseuKlDKlatu+J/A4lv7oyqbUU056MYcLbpKR+C+f9RQOHt6MpE28hwwLm3/q2dY0WrHsAWfQ6ZLZl+o28drp9dn6j+j48g0a0+M0K6Q2VnuWVRwqcCXMepy0Nl22Z/qALQepRbvNsqaoq3/fjN1TIgHmeekOiVex6MZvG3gvClUsdNvmqR6C+TIRmtO9CHvNbS7JRnZ4iSuiEnMP2/bksRKi1mXefGgqP4Lf+ymHLEvQZbuiyUIOh1ZpgpaHE/uEvUpjf59aA6i1Z9PpKSmMnqhAfP1P1j7D6tp8c5kyCn0bgXt2yb8fNoDZOCho2ajyojhX+purfwOb4iRJ23OiWUnj35QvPT+aqkhVt6c4d4qRwHeAJ/CiPC3u0JvWZQDgRXTNJlU9prBvR4chy9j1O1d7nGRnnwinVkipL6jT0cCsKvyqJ80TNXEeYjM6BX4dipTR3ss+KNtWx3NXhOpVDS/if8ST5FjR+HpxWcruHBwBcQD+zpY+AdHzxr2R0jljPQh3PVFvoY5Ox4GdQb6QRZbO5zoCqDtl3fy/Htt7W0FF16UaEy68umvR4pxFsNt5ZgV+sK+7u7NXWT+/clMdiOdLPtls5E+J44MC1TGW/SN5xINw3PYvO3Zsmd4vUt6cZaYPazFdaYzqm1QYGWgJ+x5QCbQ2dor5G/UF23jgO1JcjSFrNfRy6R/tIkoPt/pKqME7jhIjw2JvEz3tJPmL09IMwCNfyW1jd2h7w86Wm8P3WVWtVnzWW2icSpHNCsCI5L1M3w6ao+lj8ZXgiV3Ncq3EQSlszEW6wHwO1hQhyqgRZa0yZVh+Hqu5ypbm38Ku6t9cDEcFuEq01l2et5CNRgnV7MOTwrsP2J5/D72vKWutWH8/lC1iExZGI0swQLl3rrGBGXYNwtbCMjINRSjJVeY/KEq7OVrWp+mADv00XmxMeiViS0QjCRUL6tWqA+nIunCbmgYwkqG+RvqS+gPrsrwLhZvJDXb+iE8TC7foqXDa9M8hiyAg32cvI2AvqazctqY+oL2mt5AOB9zShl88uqjcsTuoDRMLt18Jp8H3aIspfwjewcqt708BPPO+XBw9+62+9XdcSaQqrgweENAYy9b5QgryVZC3noQPfnF9E+br1PCFjWMD3dTeoz+tcpOpkYwDAT552ws3UOd2Kdv1g7rSvTIsHALzD28GCmyPsu42k7CrOM3qO1KtamND1L8J1k1eJ6zNYS7qfiHDYBK9FO3XXSJvmu8S1bljL5uoOCW2GG84Xcnqj8tyfpICfHbgWU5+RcX4Qrnn/EJ3T2jxP5DmhxuE7th7kuUHdGe7CcFYIh7cyKb+S969blKBqUbtzrj7nNCHjvECFXypB5vo4KpuKmHTXXKVXq/dbecN3dzhm2Qn0/ubm5h85P5ZzvL31Vo4zSRMp/yxr6F8NP1HPcQtTRZr3rzqelMnVobx80Yuc58TXcqCY9YX7iqpf88S5W1St4FTM1e5azfEggJ+XO3un3Ah+BOkzGYZh9J7/AdKeuUEvZHXuAAAAAElFTkSuQmCC";const Fe=e=>((0,a.dD)("data-v-07f9a1f2"),e=e(),(0,a.Cn)(),e),Ie={class:"butt-box"},Me=Fe((()=>(0,a._)("img",{class:"butt-box__img",src:Ge,alt:""},null,-1))),Re=[Me];function Se(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",Ie,Re)}var je={name:"HomeButtRound",data(){}};const Xe=(0,i.Z)(je,[["render",Se],["__scopeId","data-v-07f9a1f2"]]);var Oe=Xe,We={name:"HomeImgS",components:{HomeButtRound:Oe},data(){},methods:{}};const He=(0,i.Z)(We,[["render",xe],["__scopeId","data-v-0c3dfe2a"]]);var Pe=He,Ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASuSURBVHgBxVg9bBxFFP5m9n/v9vZ+dbEcQhJBgkWFJVrkAkGRgoaGBlHRQ0EqRB8pDVAh0SCBEDWVKxpqhAiQEIQVK3bi+BKfz7n/213eu5uNLpeTb9axnU96Pt9p5r1v3sx882YEjoAkSVz6sMn40yKTyhgx2YgsIuuxCSEGyAih25DIcOACWU791CEbquAxBY+n2pnKHDJftd9XJEc68bSIUbAifQSKTJuc95AB1N9W/TnDj6n//qI+YoFDHnUNk+l5qDvaBf5CRXDnMH/iECd55aRFDg5wjCDfvCQ4g3vku5OlY55sWU3BiYCzp2LkdTv4qoOJE4Y2uamGJ05qKqY9L6acaVfHZE091yLPAqVxvIZrmEdMSULvuBe6Dihma0IhCTFNTKWRhXOhvpwgGmQFJdBPMsa60jvNKZyFis3SEUwT4xSe+hTOQZtsvENlqlW6B+3a2tqRdmy9Xs8tapMedeMigVWYrARNVCqVr8IwvIgMqNVqrxSLxc912hKXMnPi0Y8PVmgiiqLrhmH8Wi6X16WU3zUajV/Y35ymolqtvkVB3qE+79P3d/UigGfOE9RxCZMDWrtmqjr+Fd80f7ZNCxF5GMTJzaFItqgAa5pCOBbEZRrxeVondmcwJNbRBzvd7o86vpVC1NO6KdNufO/sqxdWwhCmkNho7ontdmtlf9hbAX3P2y5Cx0PBsjkItltNtJL4pfXuHV33XMlIJiXTIk8XV16+tPrmpcvodTu419jFRqOBTSIwICIVP496EGC5UqEtL/D7xn/YbLdW1x/oEWMurGVH2mGvX7h4rrC8BHe/CccyEXgegl0X7ShCiUidKRVRq1ZpyEQtTmDf2VxGRjCxMcMsWcuXSlWjENBUJnBJCWu2DUnWHY3gej7CMIBbCpEIA8VyG0uPWoGub6X88ZgYJkKrTUyati18B5ZRoKQImERG+B76gwFM24Lr+3BoDUZUhto5+t/3EuhjvOb5D18oMkkGJWKDttqKEZBIxzGk60A4DmzagVwTG5xBnzSSxpvEY05ZzuAxMc4Uq62VoSNGo+Sf/h4VBLS2ZKUIWS7CKORg5n0YZExKUqaEITDq9ZH3vX8zuOck9ZkY65efoSPcM7VvDrbud/p37yMhWZBhHpIWvfSIkGXBoKlkyR08eIhOswXXta9lcO+R9eRT55Mmqp98+Hc7ij/bunFr2PzjFrq7j4igAYMWvczlENOUHtzcwM6ft6PIwKdv/PDlbR2/0+e2UD9wkUiiLRrIgN8+unqeFtkXlhBvm1KelYaBhCRjOBzdHfUHP8Wm9e3q99f/0vVHPEhjxuXX45QYTylrzb2j1mQ3Pr56TkhRMcx457Wvr20jI9KjCLP3Tc4aWR0vCJytZ0prBrFsYlKfFXDKUDGd6aeD2VvSLllwkhfdOaR4Cvlk2FnUMP8CLrx6cnUa5KYuunNv4Yc9qvAouOQ+UPe+4ySVPqrsszQgCzHlIN3CfbLmMT1DVVXc3SM9Q804ZAHOKYKtrE+X6lThKfNU/+d7uJtxnl5cUq3pYlIA8KhHM0+dUrW1FRkGT9mBbt2nTWyGZPowzGZgUqpMPw6zpe+zg6xPo4z/AfOrJO7Am/pUAAAAAElFTkSuQmCC";const Ke=e=>((0,a.dD)("data-v-859441ae"),e=e(),(0,a.Cn)(),e),ke={class:"home-lang"},Je=Ke((()=>(0,a._)("img",{class:"home-lang__img",src:Ze,alt:"lang"},null,-1))),Qe=Ke((()=>(0,a._)("p",{class:"home-lang__item-text-ua"},"UA",-1))),ze=Ke((()=>(0,a._)("p",{class:"home-lang__item-text-ru"},"RU",-1))),$e=[Je,Qe,ze];function et(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",ke,$e)}var tt={name:"HomeLung",data(){}};const nt=(0,i.Z)(tt,[["render",et],["__scopeId","data-v-859441ae"]]);var rt=nt,at={name:"HomeView",components:{BurgerMain:I,NavLeft:W,NavBot:Q,NavRight:ae,StringRunDown:me,StringRunUp:Le,CentralText:Ve,HomeImgS:Pe,HomeLang:rt},data(){return{page:""}},beforeMount(){this.page=this.$route.name}};const ot=(0,i.Z)(at,[["render",l],["__scopeId","data-v-eacfd134"]]);var st=ot;const it=e=>((0,a.dD)("data-v-0f45f601"),e=e(),(0,a.Cn)(),e),ut={class:"page"},ct=it((()=>(0,a._)("h1",{class:"page__text"},"This is a PAGE",-1)));function dt(e,t,n,r,o,s){const i=(0,a.up)("BurgerMain");return(0,a.wg)(),(0,a.iD)("div",ut,[ct,(0,a.Wm)(i,{class:"page__burger",page:o.page},null,8,["page"])])}var pt=n(8552),mt={name:"PageView",components:{BurgerMain:I},data(){return{page:"",action:!1}},methods:{setAct(){this.action=!1}},beforeMount(){this.page=this.$route.name},mounted(){pt.ZP.to(".page__text",{duration:1,x:150,y:100,ease:"none"})}};const Ct=(0,i.Z)(mt,[["render",dt],["__scopeId","data-v-0f45f601"]]);var lt=Ct;const gt=[{path:"/",name:"home",component:st},{path:"/page",name:"page",component:lt}],Et=(0,p.p7)({history:(0,p.PO)("/"),routes:gt});var vt=Et;(0,r.ri)(d).use(vt).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var i=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,s=r[0],i=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var d=u(n)}for(t&&t(r);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self["webpackChunktest"]=self["webpackChunktest"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3375)}));r=n.O(r)})();
//# sourceMappingURL=app.6cb56b1d.js.map
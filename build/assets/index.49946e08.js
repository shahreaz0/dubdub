import{R as e,L as a,M as t,N as r,g as l,u as c,C as s,a as m,b as n,c as i,I as d,A as o,D as E,S as p,d as N,e as g,f as u,h,B as v,i as x}from"./vendor.07ce90db.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const y=()=>e.createElement("div",{className:"Home"},e.createElement("div",{className:"home-text"},e.createElement("p",null,"Rick"),e.createElement("p",{className:"and"},"And"),e.createElement("p",null,"Morty")),e.createElement("div",{className:"home-img"},e.createElement("img",{src:"https://res.cloudinary.com/dlfozpwa2/image/upload/v1630018543/WallpaperDog-16992087_1_yurmri.png",alt:"Home image",width:"300px"})));const{Header:f}=a,k=()=>e.createElement(a,{className:"layout"},e.createElement(f,{style:{position:"fixed",zIndex:1,width:"100%"}},e.createElement(t,{mode:"horizontal",defaultSelectedKeys:["home"]},e.createElement(t.Item,{key:"home"},e.createElement(r,{to:"/"},"Home")),e.createElement(t.Item,{key:"characters"},e.createElement(r,{to:"/characters"},"Characters")),e.createElement(t.Item,{key:"episodes"},e.createElement(r,{to:"/episodes"},"Episodes")),e.createElement(t.Item,{key:"locations"},e.createElement(r,{to:"/locations"},"Locations"))))),{Meta:b}=n,A=l`
	{
		characters {
			results {
				name
				image
				id
			}
		}
	}
`,w=()=>{const{loading:a,error:t,data:r}=c(A);if(a)return e.createElement("div",{className:"loader"},e.createElement("div",{className:"lds-ripple"},e.createElement("div",null),e.createElement("div",null)));if(t)return e.createElement("div",{className:"loader"},e.createElement("p",{className:"error"},"Error happened. Try Again."));const{results:l}=r.characters,d=l.map(((a,t)=>e.createElement(s,{xs:24,sm:8,lg:6,key:t},e.createElement(m,{to:`/characters/${a.id}`},e.createElement(n,{hoverable:!0,cover:e.createElement("img",{alt:a.name,src:a.image})},e.createElement(b,{title:a.name}))))));return e.createElement("div",{className:"m-lg"},e.createElement(i,{gutter:[24,16]},e.createElement(s,{xs:24,md:6,lg:6},e.createElement("div",{className:"side-text"},"Characters")),e.createElement(s,{xs:24,md:18,lg:18},e.createElement(i,{gutter:[24,16],className:"cards"},d))))};const I=a=>{const{id:t}=a.match.params,r=l`
		{
			character(id: "${t}") {
				name
				status
				species
				type
				gender
				image
				origin {
					name
					type
				}
			}
		}
	`,{loading:m,error:n,data:o}=c(r);if(m)return e.createElement("div",{className:"loader"},e.createElement("div",{className:"lds-ripple"},e.createElement("div",null),e.createElement("div",null)));if(n)return e.createElement("div",{className:"loader"},e.createElement("p",{className:"error"},"Error happen. Try Again."));const{name:E,species:p,status:N,image:g,type:u,gender:h,origin:v}=o.character;return e.createElement("div",{className:"m-lg"},e.createElement(i,{gutter:[8,8]},e.createElement(s,{xs:24,sm:8,md:6,lg:6},e.createElement(d,{src:g,height:"100%",width:"100%"})),e.createElement(s,{xs:24,sm:16,md:18,lg:18,className:"character-box"},e.createElement(i,{gutter:[8,8]},e.createElement(s,{lg:8,md:8,sm:12,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Name"),e.createElement("p",{className:"text"},E))),e.createElement(s,{lg:8,md:8,sm:12,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Species"),e.createElement("p",{className:"text"},p))),e.createElement(s,{lg:8,md:8,sm:12,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Status"),e.createElement("p",{className:"text"},N))),e.createElement(s,{lg:8,md:8,sm:12,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Gender"),e.createElement("p",{className:"text"},h))),e.createElement(s,{lg:8,md:8,sm:12,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Origin"),e.createElement("p",{className:"text"},v.name))),e.createElement(s,{lg:8,md:8,sm:12,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Origin Type"),e.createElement("p",{className:"text"},v.type||"Unknown")))))))},{Meta:M}=n,T=l`
	{
		episodes {
			results {
				name
				episode
				id
			}
		}
	}
`,$=()=>{const{loading:a,error:t,data:r}=c(T);if(a)return e.createElement("div",{className:"loader"},e.createElement("div",{className:"lds-ripple"},e.createElement("div",null),e.createElement("div",null)));if(t)return e.createElement("div",{className:"loader"},e.createElement("p",{className:"error"},"Error happened. Try Again."));const{results:l}=r.episodes,d=l.map(((a,t)=>e.createElement(s,{xs:24,sm:8,lg:6,key:t},e.createElement(m,{to:`/episodes/${a.id}`},e.createElement(n,{hoverable:!0},e.createElement(M,{title:a.name,description:a.episode}))))));return e.createElement("div",{className:"m-lg"},e.createElement(i,{gutter:[24,16]},e.createElement(s,{xs:24,md:6,lg:6},e.createElement("div",{className:"side-text"},"Episodes")),e.createElement(s,{xs:24,md:18,lg:18},e.createElement(i,{gutter:[24,16],className:"cards"},d))))};const{Meta:L}=n,z=a=>{const{id:t}=a.match.params,r=l`
		{
			episode(id: "${t}") {
				name
				air_date
				episode
				characters {
					name
					image
					id
				}
			}
		}
	`,{loading:d,error:p,data:N}=c(r);if(d)return e.createElement("div",{className:"loader"},e.createElement("div",{className:"lds-ripple"},e.createElement("div",null),e.createElement("div",null)));if(p)return e.createElement("div",{className:"loader"},e.createElement("p",{className:"error"},"Error happened. Try Again."));const{name:g,air_date:u,episode:h,characters:v}=N.episode,x=v.map(((a,t)=>e.createElement(s,{xs:24,sm:8,lg:6,key:t},e.createElement(m,{to:`/characters/${a.id}`},e.createElement(n,{hoverable:!0,size:"small"},e.createElement(L,{avatar:e.createElement(o,{src:a.image}),title:a.name}))))));return e.createElement("div",{className:"m-lg"},e.createElement(i,{gutter:[16,16]},e.createElement(s,{lg:8,md:8,sm:8,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Name"),e.createElement("p",{className:"text"},g))),e.createElement(s,{lg:8,md:8,sm:8,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Air Date"),e.createElement("p",{className:"text"},u))),e.createElement(s,{lg:8,md:8,sm:8,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Episode"),e.createElement("p",{className:"text"},h)))),e.createElement(E,null),e.createElement("b",{className:"characters"},"Character's in this episode"),e.createElement(i,{gutter:[8,8],className:"py-2"},x))},{Meta:S}=n,C=l`
	{
		locations {
			results {
				name
				type
				id
			}
		}
	}
`,D=()=>{const{loading:a,error:t,data:r}=c(C);if(a)return e.createElement("div",{className:"loader"},e.createElement("div",{className:"lds-ripple"},e.createElement("div",null),e.createElement("div",null)));if(t)return e.createElement("div",{className:"loader"},e.createElement("p",{className:"error"},"Error happened. Try Again."));const{results:l}=r.locations,d=l.map(((a,t)=>e.createElement(s,{xs:24,sm:8,lg:6,key:t},e.createElement(m,{to:`/locations/${a.id}`},e.createElement(n,{hoverable:!0},e.createElement(S,{title:a.name,description:a.type}))))));return e.createElement("div",{className:"m-lg"},e.createElement(i,{gutter:[24,16]},e.createElement(s,{xs:24,md:6,lg:6},e.createElement("div",{className:"side-text"},"Locations")),e.createElement(s,{xs:24,md:18,lg:18},e.createElement(i,{gutter:[24,16],className:"cards"},d))))},{Meta:H}=n,_=a=>{const{id:t}=a.match.params,r=l`
		{
			location(id: "${t}") {
				name
				type
				dimension
				residents {
					id
					name
					image
				}
			}
		}
	`,{loading:d,error:p,data:N}=c(r);if(d)return e.createElement("div",{className:"loader"},e.createElement("div",{className:"lds-ripple"},e.createElement("div",null),e.createElement("div",null)));if(p)return e.createElement("div",{className:"loader"},e.createElement("p",{className:"error"},"Error happened. Try Again."));const{name:g,type:u,dimension:h,residents:v}=N.location,x=v.map(((a,t)=>e.createElement(s,{xs:24,sm:8,lg:6,key:t},e.createElement(m,{to:`/characters/${a.id}`},e.createElement(n,{hoverable:!0,size:"small"},e.createElement(H,{avatar:e.createElement(o,{src:a.image}),title:a.name}))))));return e.createElement("div",{className:"m-lg"},e.createElement(i,{gutter:[16,16]},e.createElement(s,{lg:8,md:8,sm:8,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Name"),e.createElement("p",{className:"text"},g))),e.createElement(s,{lg:8,md:8,sm:8,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Type"),e.createElement("p",{className:"text"},u))),e.createElement(s,{lg:8,md:8,sm:8,xs:24},e.createElement("div",{className:"card-area"},e.createElement("h3",{className:"head"},"Dimension"),e.createElement("p",{className:"text"},h)))),e.createElement(E,null),e.createElement("b",{className:"characters"},"Resident's on this planet"),e.createElement(i,{gutter:[8,8],className:"py-2"},x))},O=()=>e.createElement("div",{className:"App"},e.createElement(k,null),e.createElement(p,null,e.createElement(N,{exact:!0,path:"/",component:y}),e.createElement(N,{exact:!0,path:"/characters",component:w}),e.createElement(N,{exact:!0,path:"/characters/:id",component:I}),e.createElement(N,{exact:!0,path:"/episodes",component:$}),e.createElement(N,{exact:!0,path:"/episodes/:id",component:z}),e.createElement(N,{exact:!0,path:"/locations",component:D}),e.createElement(N,{exact:!0,path:"/locations/:id",component:_}))),R=new g({uri:"https://rickandmortyapi.com/graphql",cache:new u});h.render(e.createElement(v,null,e.createElement(x,{client:R},e.createElement(O,null))),document.getElementById("root"));

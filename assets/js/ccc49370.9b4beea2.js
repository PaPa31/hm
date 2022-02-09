"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[46103],{63074:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(63366),l=a(67294),r=a(86010),i=a(55321),o=a(83699),s="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",v=a(97325);function p(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(o.default,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},15191:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),l=a(86010),r=a(3905),i=a(97325),o=a(83699),s=a(79524),m=a(89623),c=a(63905),u=a(42122),d=a(60034),g="blogPostTitle_rzP5",v="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",h=a(55907),b="image_o0gy";var f=function(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.default,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:b,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.default,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},E="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?_:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?N:E),key:t},n.createElement(f,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var k=function(e){var t,a,b,f=(b=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return b(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,s.C)().withBaseUrl,_=e.children,N=e.frontMatter,k=e.assets,P=e.metadata,C=e.truncated,L=e.isBlogPostPage,y=void 0!==L&&L,T=P.date,w=P.formattedDate,I=P.permalink,x=P.tags,A=P.readingTime,R=P.title,H=P.editUrl,M=P.authors,B=null!=(t=k.image)?t:N.image,U=!y&&C,D=x.length>0,O=y?"h1":"h2";return n.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(O,{className:g,itemProp:"headline"},y?R:n.createElement(o.default,{itemProp:"url",to:I},R)),n.createElement("div",{className:(0,l.Z)(v,"margin-vert--md")},n.createElement("time",{dateTime:T,itemProp:"datePublished"},w),void 0!==A&&n.createElement(n.Fragment,null," \xb7 ",f(A))),n.createElement(Z,{authors:M,assets:k})),B&&n.createElement("meta",{itemProp:"image",content:E(B,{absolute:!0})}),n.createElement("div",{id:y?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:u.Z},_)),(D||C)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=y,a))},D&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":U})},n.createElement(h.Z,{tags:x})),y&&H&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:H})),U&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":D})},n.createElement(o.default,{to:P.permalink,"aria-label":"Read more about "+R},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},84532:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(67294),l=a(24175),r=a(63074),i=a(15191),o=a(87462),s=a(97325),m=a(8115);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,(0,o.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,(0,o.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))},u=a(89623),d=a(9260);var g=function(e){var t,a=e.content,o=e.sidebar,s=a.assets,m=a.metadata,g=m.title,v=m.description,p=m.nextItem,h=m.prevItem,b=m.date,f=m.tags,E=m.authors,_=m.frontMatter,N=_.hide_table_of_contents,Z=_.keywords,k=_.toc_min_heading_level,P=_.toc_max_heading_level,C=null!=(t=s.image)?t:_.image;return n.createElement(r.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:o,toc:!N&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:g,description:v,keywords:Z,image:C},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),E.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:E.map((function(e){return e.url})).filter(Boolean).join(",")}),f.length>0&&n.createElement("meta",{property:"article:tag",content:f.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:_,assets:s,metadata:m,isBlogPostPage:!0},n.createElement(a,null)),(p||h)&&n.createElement(c,{nextItem:p,prevItem:h}))}},60034:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),l=a(97325),r=a(87462),i=a(63366),o=a(86010),s="iconEdit_dcUD",m=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(89623);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8115:function(e,t,a){var n=a(67294),l=a(83699);t.Z=function(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.default,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},9260:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(63366),r=a(67294),i=a(86010),o=a(14202),s="tableOfContents_cNA8",m=["className"];var c=function(e){var t=e.className,a=(0,l.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},14202:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),l=a(63366),r=a(67294),i=a(89623),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,g=void 0===d?void 0:d,v=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,l.Z)(e,o),b=(0,i.LU)(),f=null!=v?v:b.tableOfContents.minHeadingLevel,E=null!=p?p:b.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:f,maxHeadingLevel:E}),N=(0,r.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:f,maxHeadingLevel:E}}),[u,g,f,E]);return(0,i.Si)(N),r.createElement(s,(0,n.Z)({toc:_,className:m,linkClassName:u},h))}},66363:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),l=a(86010),r=a(83699),i="tag_hD8n",o="tagRegular_D6E_",s="tagWithCount_i0QQ";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return n.createElement(r.default,{href:a,className:(0,l.Z)(i,(t={},t[o]=!c,t[s]=c,t))},m,c&&n.createElement("span",null,c))}},55907:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),l=a(86010),r=a(97325),i=a(66363),o="tags_XVD_",s="tag_JSN8";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}},54278:function(e,t,a){a.d(t,{Z:function(){return o}});var n={};a.r(n),a.d(n,{ButtonExample:function(){return i}});var l=a(67294),r=a(87462),i=function(e){return l.createElement("button",(0,r.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))},o=Object.assign({React:l},l,n)}}]);
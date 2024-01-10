"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[8427],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||i;return r?a.createElement(d,o(o({ref:t},l),{},{components:r})):a.createElement(d,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5983:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Best Practices for Optimizing Longhorn Disk Performance",description:"Follow the recommendations for achieving optimal disk performance.",slug:"best_practices_for_optimizing_longhorn_disk_performance",authors:[{name:"David Ko",title:"Senior Software Engineering Manager",url:"https://github.com/innobead",image_url:"https://github.com/innobead.png"},{name:"Jillian Maroket",title:"Technical Writer",url:"https://github.com/jillian-maroket/",image_url:"https://github.com/jillian-maroket.png"}],tags:["harvester","longhorn","best practices","disk performance"],hide_table_of_contents:!1},c="Best Practices for Optimizing Longhorn Disk Performance",p={permalink:"/kb/best_practices_for_optimizing_longhorn_disk_performance",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2023-12-27/best_practices_disk_performance.md",source:"@site/kb/2023-12-27/best_practices_disk_performance.md",title:"Best Practices for Optimizing Longhorn Disk Performance",description:"Follow the recommendations for achieving optimal disk performance.",date:"2023-12-27T00:00:00.000Z",formattedDate:"December 27, 2023",tags:[{label:"harvester",permalink:"/kb/tags/harvester"},{label:"longhorn",permalink:"/kb/tags/longhorn"},{label:"best practices",permalink:"/kb/tags/best-practices"},{label:"disk performance",permalink:"/kb/tags/disk-performance"}],readingTime:1.585,truncated:!1,authors:[{name:"David Ko",title:"Senior Software Engineering Manager",url:"https://github.com/innobead",image_url:"https://github.com/innobead.png",imageURL:"https://github.com/innobead.png"},{name:"Jillian Maroket",title:"Technical Writer",url:"https://github.com/jillian-maroket/",image_url:"https://github.com/jillian-maroket.png",imageURL:"https://github.com/jillian-maroket.png"}],frontMatter:{title:"Best Practices for Optimizing Longhorn Disk Performance",description:"Follow the recommendations for achieving optimal disk performance.",slug:"best_practices_for_optimizing_longhorn_disk_performance",authors:[{name:"David Ko",title:"Senior Software Engineering Manager",url:"https://github.com/innobead",image_url:"https://github.com/innobead.png",imageURL:"https://github.com/innobead.png"},{name:"Jillian Maroket",title:"Technical Writer",url:"https://github.com/jillian-maroket/",image_url:"https://github.com/jillian-maroket.png",imageURL:"https://github.com/jillian-maroket.png"}],tags:["harvester","longhorn","best practices","disk performance"],hide_table_of_contents:!1},nextItem:{title:"VM Live Migration Policy and Configuration",permalink:"/kb/vm_live_migration_policy_and_configuration"}},l={authorsImageUrls:[void 0,void 0]},m=[{value:"IO Performance",id:"io-performance",level:2},{value:"Space Efficiency",id:"space-efficiency",level:2},{value:"Disaster Recovery",id:"disaster-recovery",level:2}],u={toc:m};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Longhorn documentation provides ",(0,i.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.5.3/best-practices/"},"best practice recommendations")," for deploying Longhorn in production environments. Before configuring workloads, ensure that you have set up the following basic requirements for optimal disk performance."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SATA/NVMe SSDs or disk drives with similar performance"),(0,i.kt)("li",{parentName:"ul"},"10 Gbps network bandwidth between nodes"),(0,i.kt)("li",{parentName:"ul"},"Dedicated Priority Classes for system-managed and user-deployed Longhorn components")),(0,i.kt)("p",null,"The following sections outline other recommendations for achieving optimal disk performance."),(0,i.kt)("h2",{id:"io-performance"},"IO Performance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Storage network"),": Use a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/advanced/storagenetwork"},"dedicated storage network")," to improve IO performance and stability.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Longhorn disk"),": Use a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/host/#multi-disk-management"},"dedicated disk")," for Longhorn storage instead of using the root disk.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Replica count"),": Set the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/advanced/storageclass#parameters-tab"},"default replica count"),' to "2" to achieve data availability with better disk space usage or less impact to system performance. This practice is especially beneficial to data-intensive applications.  ')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Storage tag"),": Use storage tags to define storage tiering for data-intensive applications. For example, only high-performance disks can be used for storing performance-sensitive data. You can either ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/host/#storage-tags"},"add disks with tags")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/advanced/storageclass#disk-selector-optional"},"create StorageClasses with tags"),".  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data locality"),": Use ",(0,i.kt)("inlineCode",{parentName:"p"},"best-effort")," as the default ",(0,i.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.5.3/high-availability/data-locality/"},"data locality")," of Longhorn Storage Classes.  "),(0,i.kt)("p",{parentName:"li"},"For applications that support data replication (for example, a distributed database), you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"strict-local")," option to ensure that only one replica is created for each volume. This practice prevents the extra disk space usage and IO performance overhead associated with volume replication.  "),(0,i.kt)("p",{parentName:"li"},"For data-intensive applications, you can use pod scheduling functions such as node selector or taint toleration. These functions allow you to schedule the workload to a specific storage-tagged node together with one replica.  "))),(0,i.kt)("h2",{id:"space-efficiency"},"Space Efficiency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Recurring snapshots"),": Periodically clean up system-generated snapshots and retain only the number of snapshots that makes sense for your implementation. "),(0,i.kt)("p",{parentName:"li"},"For applications with replication capability, periodically ",(0,i.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.5.3/concepts/#243-deleting-snapshots"},"delete all types of snapshots"),"."))),(0,i.kt)("h2",{id:"disaster-recovery"},"Disaster Recovery"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Recurring backups"),": Create ",(0,i.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.5.3/volumes-and-nodes/trim-filesystem/"},"recurring backup jobs")," for mission-critical application volumes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"System backup"),": Run periodic system backups."))))}h.isMDXComponent=!0}}]);
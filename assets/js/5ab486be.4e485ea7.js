"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[8971],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8775:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Upgrade Guest Kubernetes Clusters to be Compatible with Harvester IP Pools",description:"Explain how to keep load balancer IP during upgrading guest cluster",slug:"upgrading_guest_clusters_with_harvester_ip_pool_compatibility",authors:[{name:"Canwu Yao",title:"Software Engineer",url:"https://github.com/yaocw2020",image_url:"https://avatars.githubusercontent.com/u/7421463?s=400&v=4"}],tags:["harvester","load balancer","cloud provider","ip pool","upgrade"],hide_table_of_contents:!1},l=void 0,u={permalink:"/kb/upgrading_guest_clusters_with_harvester_ip_pool_compatibility",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2023-08-21/compatible_with_ip_pool_new_feature.md",source:"@site/kb/2023-08-21/compatible_with_ip_pool_new_feature.md",title:"Upgrade Guest Kubernetes Clusters to be Compatible with Harvester IP Pools",description:"Explain how to keep load balancer IP during upgrading guest cluster",date:"2023-08-21T00:00:00.000Z",formattedDate:"August 21, 2023",tags:[{label:"harvester",permalink:"/kb/tags/harvester"},{label:"load balancer",permalink:"/kb/tags/load-balancer"},{label:"cloud provider",permalink:"/kb/tags/cloud-provider"},{label:"ip pool",permalink:"/kb/tags/ip-pool"},{label:"upgrade",permalink:"/kb/tags/upgrade"}],readingTime:2.675,truncated:!1,authors:[{name:"Canwu Yao",title:"Software Engineer",url:"https://github.com/yaocw2020",image_url:"https://avatars.githubusercontent.com/u/7421463?s=400&v=4",imageURL:"https://avatars.githubusercontent.com/u/7421463?s=400&v=4"}],frontMatter:{title:"Upgrade Guest Kubernetes Clusters to be Compatible with Harvester IP Pools",description:"Explain how to keep load balancer IP during upgrading guest cluster",slug:"upgrading_guest_clusters_with_harvester_ip_pool_compatibility",authors:[{name:"Canwu Yao",title:"Software Engineer",url:"https://github.com/yaocw2020",image_url:"https://avatars.githubusercontent.com/u/7421463?s=400&v=4",imageURL:"https://avatars.githubusercontent.com/u/7421463?s=400&v=4"}],tags:["harvester","load balancer","cloud provider","ip pool","upgrade"],hide_table_of_contents:!1},prevItem:{title:"Use Rook Ceph External Storage with Harvester",permalink:"/kb/use_rook_ceph_external_storage"},nextItem:{title:"Using NetApp Storage on Harvester",permalink:"/kb/install_netapp_trident_csi"}},p={authorsImageUrls:[void 0]},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps to Keep Load Balancer IP",id:"steps-to-keep-load-balancer-ip",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As ",(0,o.kt)("strong",{parentName:"p"},"Harvester v1.2.0")," is released, a new Harvester cloud provider version ",(0,o.kt)("strong",{parentName:"p"},"0.2.2")," is integrated into RKE2 ",(0,o.kt)("strong",{parentName:"p"},"v1.24.15+rke2r1"),", ",(0,o.kt)("strong",{parentName:"p"},"v1.25.11+rke2r1"),",  ",(0,o.kt)("strong",{parentName:"p"},"v1.26.6+rke2r1"),", ",(0,o.kt)("strong",{parentName:"p"},"v1.27.3+rke2r1"),", and newer versions."),(0,o.kt)("p",null,"With Harvester v1.2.0, the new Harvester cloud provider offers enhanced load balancing capabilities for guest Kubernetes services. Specifically, it introduces the Harvester IP Pool feature, a built-in IP address management (IPAM) solution for the Harvester load balancer. It allows you to define an IP pool specific to a particular guest cluster by specifying the guest cluster name. For example, you can create an IP pool exclusively for the guest cluster named cluster2:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"image",src:r(6452).Z,width:"3050",height:"972"})),(0,o.kt)("p",null,"However, after upgrading, the feature is not automatically compatible with existing guest Kubernetes clusters, as they do not pass the correct cluster name to the Harvester cloud provider. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/4232"},"issue 4232")," for more details. Users can manually upgrade the Harvester cloud provider using Helm as a workaround and provide the correct cluster name after upgrading. However, this would result in a change in the load balancer IPs. "),(0,o.kt)("p",null,"This article outlines a workaround that allows you to leverage the new IP pool feature while keeping the load balancer IPs unchanged."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Download the Harvester kubeconfig file from the Harvester UI. If you have imported Harvester into Rancher, do not use the kubeconfig file from the Rancher UI. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/faq#how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster"},"Access Harvester Cluster")," to get the desired one.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Download the kubeconfig file for the guest Kubernetes cluster you plan to upgrade. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-from-your-workstation"},"Accessing Clusters with kubectl from Your Workstation")," for instructions on how to download the kubeconfig file."))),(0,o.kt)("h2",{id:"steps-to-keep-load-balancer-ip"},"Steps to Keep Load Balancer IP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following script before upgrading."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"curl -sfL https://raw.githubusercontent.com/harvester/harvesterhci.io/main/kb/2023-08-21/keepip.sh | sh -s before_upgrade <Harvester-kubeconfig-path> <guest-cluster-kubeconfig-path> <guest-cluster-name> <guest-cluster-nodes-namespace>\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Harvester-kubeconfig-path>"),": Path to the Harvester kubeconfig file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<guest-cluster-kubeconfig-path>"),": Path to the kubeconfig file of your guest Kubernetes cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<guest-cluster-name>"),": Name of your guest cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<guest-cluster-nodes-namespace>"),": Namespace where the VMs of the guest cluster are located.")),(0,o.kt)("p",{parentName:"li"},"The script will help users copy the DHCP information to the service annotation and modify the IP pool allocated history to make sure the IP is unchanged."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"image",src:r(7182).Z,width:"2196",height:"780"})),(0,o.kt)("p",{parentName:"li"},"After executing the script, the load balancer service with DHCP mode will be annotated with the DHCP information. For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    kube-vip.io/hwaddr: 00:00:6c:4f:18:68\n    kube-vip.io/requestedIP: 172.19.105.215\n  name: lb0\n  namespace: default\n")),(0,o.kt)("p",{parentName:"li"},"As for the load balancer service with pool mode, the IP pool allocated history will be modified as the new load balancer name. For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: loadbalancer.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: default\nspec:\n  ...\nstatus:\n  allocatedHistory:\n    192.168.100.2: default/cluster-name-default-lb1-ddc13071 # replace the new load balancer name\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add network selector for the pool."),(0,o.kt)("p",{parentName:"li"},"For example, the following cluster is under the VM network ",(0,o.kt)("inlineCode",{parentName:"p"},"default/mgmt-untagged"),". The network selector should be ",(0,o.kt)("inlineCode",{parentName:"p"},"default/mgmt-untagged"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"image",src:r(6831).Z,width:"3498",height:"1980"})),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"image",src:r(5424).Z,width:"3054",height:"1232"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade the RKE2 cluster in the Rancher UI and select the new version."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"image",src:r(1694).Z,width:"3502",height:"2052"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the script after upgrading."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"curl -sfL https://raw.githubusercontent.com/harvester/harvesterhci.io/main/kb/2023-08-21/keepip.sh | sh -s after_upgrade <Harvester-kubeconfig-path> <guest-cluster-kubeconfig-path> <guest-cluster-name> <guest-cluster-nodes-namespace>\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"image",src:r(7182).Z,width:"2196",height:"780"})),(0,o.kt)("p",{parentName:"li"}," In this step, the script wraps the operations to upgrade the Harvester cloud provider to set the cluster name. After the Harvester cloud provider is running, the new Harvester load balancers will be created with the unchanged IPs."))))}h.isMDXComponent=!0},7182:function(e,t,r){t.Z=r.p+"assets/images/before-upgrade-32da6d40ebe06324de4a258174ac6220.png"},6452:function(e,t,r){t.Z=r.p+"assets/images/ippoolforcluster2-264c61833ccd9a79fb03dd73930d2401.png"},5424:function(e,t,r){t.Z=r.p+"assets/images/network-selector-0f179a6c97e2fa3621bcaadd8c09e39d.png"},6831:function(e,t,r){t.Z=r.p+"assets/images/network-ba7294269bf230843a11803191e20f1e.png"},1694:function(e,t,r){t.Z=r.p+"assets/images/upgrade-6356d7891793f5c94e25da1f6aa22944.png"}}]);
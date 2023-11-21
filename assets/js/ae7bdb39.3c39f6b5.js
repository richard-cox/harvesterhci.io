"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[9377],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Using NetApp Storage on Harvester",description:"Installation procedure for NetApp Astra Trident CSI Driver",slug:"install_netapp_trident_csi",authors:[{name:"Jeff Radick",title:"Staff Software Engineer"}],tags:["harvester"],hide_table_of_contents:!1},s=void 0,p={permalink:"/kb/install_netapp_trident_csi",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2023-08-11/using_netapp_third_party_storage.md",source:"@site/kb/2023-08-11/using_netapp_third_party_storage.md",title:"Using NetApp Storage on Harvester",description:"Installation procedure for NetApp Astra Trident CSI Driver",date:"2023-08-11T00:00:00.000Z",formattedDate:"August 11, 2023",tags:[{label:"harvester",permalink:"/kb/tags/harvester"}],readingTime:6.08,truncated:!1,authors:[{name:"Jeff Radick",title:"Staff Software Engineer"}],frontMatter:{title:"Using NetApp Storage on Harvester",description:"Installation procedure for NetApp Astra Trident CSI Driver",slug:"install_netapp_trident_csi",authors:[{name:"Jeff Radick",title:"Staff Software Engineer"}],tags:["harvester"],hide_table_of_contents:!1},prevItem:{title:"Upgrade Guest Kubernetes Clusters to be Compatible with Harvester IP Pools",permalink:"/kb/upgrading_guest_clusters_with_harvester_ip_pool_compatibility"},nextItem:{title:"Configure PriorityClass on Longhorn System Components",permalink:"/kb/configure_priority_class_longhorn"}},m={authorsImageUrls:[void 0]},d=[],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article covers instructions for installing the Netapp Astra Trident CSI driver into a Harvester cluster, which enables NetApp storage systems to store storage volumes usable by virtual machines running in Harvester."),(0,i.kt)("p",null,"The NetApp storage will be an option in addition to the normal Longhorn storage; it will not replace Longhorn. Virtual machine images will still be stored using Longhorn."),(0,i.kt)("p",null,"This has been tested with Harvester 1.2.0 and Trident v23.07.0."),(0,i.kt)("p",null,"This procedure only works to access storage via iSCSI, not NFS."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"3rd party storage classes (including those based on Trident) can only be used for non-boot volumes of Harvester VMs."))),(0,i.kt)("h1",{id:"detailed-instructions"},"Detailed Instructions"),(0,i.kt)("p",null,"We assume that before beginning this procedure, a Harvester cluster and a NetApp ONTAP storage system are both installed and configured for use."),(0,i.kt)("p",null,"Most of these steps can be performed on any system with the ",(0,i.kt)("inlineCode",{parentName:"p"},"helm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," commands installed and network connectivity to the management port of the Harvester cluster.  Let's call this your workstation.  Certain steps must be performed on one or more cluster nodes themselves.  The steps described below should be done on your workstation unless otherwise indicated."),(0,i.kt)("p",null,"The last step (enabling multipathd) should be done on all nodes after the Trident CSI has been installed."),(0,i.kt)("p",null,"Certain parameters of your installation will require modification of details in the examples in the procedure given below. Those which you may wish to modify include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The namespace.  ",(0,i.kt)("inlineCode",{parentName:"li"},"trident")," is used as the namespace in the examples, but you may prefer to use another."),(0,i.kt)("li",{parentName:"ul"},"The name of the deployment. ",(0,i.kt)("inlineCode",{parentName:"li"},"mytrident")," is used but you can change this to something else."),(0,i.kt)("li",{parentName:"ul"},"The management IP address of the ONTAP storage system"),(0,i.kt)("li",{parentName:"ul"},"Login credentials (username and password) of the ONTAP storage system")),(0,i.kt)("p",null,"The procedure is as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Read the NetApp Astra Trident documentation:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.netapp.com/us-en/trident/"},"https://docs.netapp.com/us-en/trident/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.netapp.com/us-en/trident/trident-get-started/kubernetes-deploy-operator.html"},"https://docs.netapp.com/us-en/trident/trident-get-started/kubernetes-deploy-operator.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.netapp.com/us-en/trident/trident-get-started/kubernetes-deploy-helm.html#deploy-the-trident-operator-and-install-astra-trident-using-helm"},"https://docs.netapp.com/us-en/trident/trident-get-started/kubernetes-deploy-helm.html#deploy-the-trident-operator-and-install-astra-trident-using-helm"))),(0,i.kt)("p",{parentName:"li"},"The simplest method is to install using Helm; that process is described here.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the KubeConfig from the Harvester cluster."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open the web UI for your Harvester cluster"),(0,i.kt)("li",{parentName:"ul"},'In the lower left corner, click the "Support" link.  This will take you to a "Harvester Support" page.'),(0,i.kt)("li",{parentName:"ul"},'Click the button labeled "Download KubeConfig".  This will download a your cluster config in a file called "local.yaml" by default.'),(0,i.kt)("li",{parentName:"ul"},"Move this file to a convenient location and set your ",(0,i.kt)("inlineCode",{parentName:"li"},"KUBECONFIG")," environment variable to the path of this file."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Prepare the cluster for installation of the Helm chart."),(0,i.kt)("p",{parentName:"li"},"Before starting installation of the helm chart, special authorization must be provided to enable certain modifications to be made during the installation.\nThis addresses the issue described here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NetApp/trident/issues/839"},"https://github.com/NetApp/trident/issues/839")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Put the following text into a file.  For this example we'll call it ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize_trident.yaml"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: trident-operator-psa\nrules:\n- apiGroups:\n  - management.cattle.io\n  resources:\n  - projects\n  verbs:\n  - updatepsa\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: trident-operator-psa\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: trident-operator-psa\nsubjects:\n- kind: ServiceAccount\n  name: trident-operator\n  namespace: trident\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apply this manifest via the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f authorize_trident.yaml"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the helm chart."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First you will need to add the Astra Trident Helm repository:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add netapp-trident https://netapp.github.io/trident-helm-chart\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next, install the Helm chart.  This example uses ",(0,i.kt)("inlineCode",{parentName:"p"},"mytrident")," as the deployment name, ",(0,i.kt)("inlineCode",{parentName:"p"},"trident")," as the namespace, and 23.07.0 as the version number to install:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm install mytrident netapp-trident/trident-operator --version 23.07.0 --create-namespace --namespace trident\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The NetApp documentation describes variations on how you can do this.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download and extract the tridentctl command, which will be needed for the next few steps."),(0,i.kt)("p",{parentName:"li"},"This and the next few steps need to be performed logged into a master node of the Harvester cluster, using root access."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp\ncurl -L -o trident-installer-23.07.0.tar.gz https://github.com/NetApp/trident/releases/download/v23.07.0/trident-installer-23.07.0.tar.gz\ntar -xf trident-installer-23.07.0.tar.gz\ncd trident-installer\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install a backend."),(0,i.kt)("p",{parentName:"li"},"This part is specific to Harvester."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Put the following into a text file, for example /tmp/backend.yaml"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nbackendName: default_backend_san\nstorageDriverName: ontap-san-economy\nmanagementLIF: 172.19.97.114\nsvm: default_backend\nusername: admin\npassword: password1234\nlabels:\nname: default_backend_san\n")),(0,i.kt)("p",{parentName:"li"},"The LIF IP address, username, and password of this file\nshould be replaced with the management LIF and credentials\nfor the ONTAP system.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the backend"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./tridentctl create backend -f /tmp/backend.yaml -n trident\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check that it is created"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./tridentctl get backend -n trident\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define a StorageClass and SnapshotClass."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Put the following into a file, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/storage.yaml")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\nname: ontap-san-economy\nprovisioner: csi.trident.netapp.io\nparameters:\nselector: "name=default_backend_san"\n---\napiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshotClass\nmetadata:\nname: csi-snapclass\ndriver: csi.trident.netapp.io\ndeletionPolicy: Delete\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apply the definitions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f /tmp/storage.yaml\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable multipathd"),(0,i.kt)("p",{parentName:"li"},"The following is required to enable multipathd.\nThis must be done on every node of the Harvester cluster, using root access.\nThe preceding steps should only be done once on a single node."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create this file in ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem/99_multipathd.yaml"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n   default:\n   - name: "Setup multipathd"\n      systemctl:\n         enable:\n         - multipathd\n         start:\n         - multipathd\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"multipathd")," to exclude pathnames used by Longhorn."),(0,i.kt)("p",{parentName:"li"},"This part is a little tricky.  ",(0,i.kt)("inlineCode",{parentName:"p"},"multipathd")," will automatically discover\ndevice names matching a certain pattern, and attempt to set up multipathing on them.\nUnfortunately, Longhorn's device names follow the same pattern, and\nwill not work correctly if ",(0,i.kt)("inlineCode",{parentName:"p"},"multipathd")," tries to use those devices."),(0,i.kt)("p",{parentName:"li"},"Therefore the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/multipath.conf")," must be set up on each node\nso as to prevent ",(0,i.kt)("inlineCode",{parentName:"p"},"multipathd"),' from touching any of the devices\nthat Longhorn will use.  Unfortunately, it is not possible to know\nin advance which device names will be used until the volumes are attached\nto a VM when the VM is started, or when the volumes are hot-added to a running VM.\nThe recommended method is to "whitelist" the Trident devices using device\nproperties rather than device naming.  The properties to allow are the\ndevice vendor and product.  Here is an example of what you\'ll want in ',(0,i.kt)("inlineCode",{parentName:"p"},"/etc/multipath.conf"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},'blacklist {\n    device {\n        vendor "!NETAPP"\n        product "!LUN"\n    }\n}\nblacklist_exceptions {\n    device {\n        vendor "NETAPP"\n        product "LUN"\n    }\n}\n')),(0,i.kt)("p",{parentName:"li"}," This example only works if NetApp is the only storage provider in the system for which ",(0,i.kt)("inlineCode",{parentName:"p"},"multipathd")," must be used.  More complex environments will require more complex configuration."),(0,i.kt)("p",{parentName:"li"}," Explicitly putting that content into ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/multipath.conf")," will work when you start ",(0,i.kt)("inlineCode",{parentName:"p"},"multipathd")," as described below, but the change in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc")," will not persist across node reboots.  To solve that problem, you should add another file to ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem")," that will re-generate ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/multipath.conf")," when the node reboots.  The following example will create the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/multipath.conf")," given in the example above, but may need to be modified for your environment if you have a more complex iSCSI configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},'stages:\n   initramfs:\n     - name: "Configure multipath blacklist and whitelist"\n       files:\n       - path: /etc/multipath.conf\n         permissions: 0644\n         owner: 0\n         group: 0\n         content: |\n           blacklist {\n               device {\n                   vendor "!NETAPP"\n                   product "!LUN"\n                }\n            }\n            blacklist_exceptions {\n                device {\n                    vendor "NETAPP"\n                    product "LUN"\n                }\n            }\n')),(0,i.kt)("p",{parentName:"li"}," Remember, this has to be done on every node.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable multipathd."),(0,i.kt)("p",{parentName:"li"},"Adding the above files to ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem")," will take effect on the next reboot of the node; ",(0,i.kt)("inlineCode",{parentName:"p"},"multipathd")," can be enabled immediately without rebooting the node using the following commands:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable multipathd\nsystemctl start multipathd\n")),(0,i.kt)("p",{parentName:"li"},"  After the above steps, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ontap-san-economy")," storage class should be available when creating a volume for a Harvester VM."))))))}u.isMDXComponent=!0}}]);
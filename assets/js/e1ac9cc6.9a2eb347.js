"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[6760],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(r),g=a,m=h["".concat(l,".").concat(g)]||h[g]||u[g]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"Using Rook Ceph Storage in Harvester",description:"Using Rook Ceph storage in Harvester",slug:"using_rook_ceph_storage",authors:[{name:"Hang Yu",title:"Staff Software Engineer",url:"https://github.com/futuretea",image_url:"https://github.com/futuretea.png"}],tags:["harvester","rook","ceph","csi"],hide_table_of_contents:!1},l=void 0,p={permalink:"/kb/using_rook_ceph_storage",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2023-08-23/using_rook_ceph_storage.md",source:"@site/kb/2023-08-23/using_rook_ceph_storage.md",title:"Using Rook Ceph Storage in Harvester",description:"Using Rook Ceph storage in Harvester",date:"2023-08-23T00:00:00.000Z",formattedDate:"August 23, 2023",tags:[{label:"harvester",permalink:"/kb/tags/harvester"},{label:"rook",permalink:"/kb/tags/rook"},{label:"ceph",permalink:"/kb/tags/ceph"},{label:"csi",permalink:"/kb/tags/csi"}],readingTime:4.185,truncated:!1,authors:[{name:"Hang Yu",title:"Staff Software Engineer",url:"https://github.com/futuretea",image_url:"https://github.com/futuretea.png",imageURL:"https://github.com/futuretea.png"}],frontMatter:{title:"Using Rook Ceph Storage in Harvester",description:"Using Rook Ceph storage in Harvester",slug:"using_rook_ceph_storage",authors:[{name:"Hang Yu",title:"Staff Software Engineer",url:"https://github.com/futuretea",image_url:"https://github.com/futuretea.png",imageURL:"https://github.com/futuretea.png"}],tags:["harvester","rook","ceph","csi"],hide_table_of_contents:!1},nextItem:{title:"Configure PriorityClass on Longhorn System Components",permalink:"/kb/configure_priority_class_longhorn"}},c={authorsImageUrls:[void 0]},u=[{value:"Install Harvester Cluster",id:"install-harvester-cluster",level:2},{value:"Install Rook to Harvester",id:"install-rook-to-harvester",level:2},{value:"Setup the Ceph Cluster",id:"setup-the-ceph-cluster",level:2},{value:"Option 1: Create a new Ceph cluster using free disks on the Harvester hosts",id:"option-1-create-a-new-ceph-cluster-using-free-disks-on-the-harvester-hosts",level:3},{value:"Option 2: Using an existing external Ceph cluster (Recommended)",id:"option-2-using-an-existing-external-ceph-cluster-recommended",level:3},{value:"Configure Harvester Cluster",id:"configure-harvester-cluster",level:2},{value:"Use Rook Ceph in Harvester",id:"use-rook-ceph-in-harvester",level:2}],h={toc:u};function g(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting with Harvester v1.2.0, it offers the capability to install a Container Storage Interface (CSI) in your Harvester cluster. This allows you to leverage external storage for the Virtual Machine's non-system data disk, giving you the flexibility to use different drivers tailored for specific needs, whether it's for performance optimization or seamless integration with your existing in-house storage solutions."),(0,o.kt)("p",null,"It's important to note that, despite this enhancement, the provisioner for the Virtual Machine (VM) image in Harvester still relies on Longhorn. Prior to version 1.2.0, Harvester exclusively supported Longhorn for storing VM data and did not offer support for external storage as a destination for VM data."),(0,o.kt)("p",null,"One of the options for integrating external storage with Harvester is Rook, an open-source cloud-native storage orchestrator. Rook provides a robust platform, framework, and support for Ceph storage, enabling seamless integration with cloud-native environments."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ceph.io"},"Ceph")," is a software-defined distributed storage system that offers versatile storage capabilities, including file, block, and object storage. It is designed for large-scale production clusters and can be deployed effectively in such environments."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rook.io"},"Rook")," simplifies the deployment and management of Ceph, offering self-managing, self-scaling, and self-healing storage services. It leverages Kubernetes resources to automate the deployment, configuration, provisioning, scaling, upgrading, and monitoring of Ceph."),(0,o.kt)("p",null,"In this article, we will walk you through the process of installing, configuring, and utilizing ",(0,o.kt)("a",{parentName:"p",href:"https://rook.io/docs/rook/v1.12/Getting-Started/intro/"},"Rook Ceph")," as a data disk for a VM within the Harvester environment."),(0,o.kt)("h2",{id:"install-harvester-cluster"},"Install Harvester Cluster"),(0,o.kt)("p",null,"Harvester's operating system follows an immutable design, meaning that most OS files revert to their pre-configured state after a reboot. To accommodate Rook Ceph's requirements, you need to add specific persistent paths to the ",(0,o.kt)("inlineCode",{parentName:"p"},"os.persistentStatePaths")," section in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/dev/install/harvester-configuration#ospersistent_state_paths"},"Harvester configuration"),". These paths include:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  persistentStatePaths:\n    - /var/lib/rook\n    - /var/lib/ceph\n  modules:\n    - rbd\n    - nbd\n")),(0,o.kt)("p",null,"After the cluster is installed, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/faq#how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster"},"How can I access the kubeconfig file of the Harvester cluster?")," to get the kubeconfig of the Harvester cluster."),(0,o.kt)("h2",{id:"install-rook-to-harvester"},"Install Rook to Harvester"),(0,o.kt)("p",null,"Install Rook to the Harvester cluster by referring to ",(0,o.kt)("a",{parentName:"p",href:"https://rook.io/docs/rook/v1.12/Getting-Started/quickstart/"},"Rook Quickstart"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSLo rook.tar.gz https://github.com/rook/rook/archive/refs/tags/v1.12.2.tar.gz \\\n  && tar -zxf rook.tar.gz && cd rook-1.12.2/deploy/examples\n# apply configurations ref: https://rook.github.io/docs/rook/v1.12/Getting-Started/example-configurations/\nkubectl apply -f crds.yaml -f common.yaml -f operator.yaml\nkubectl -n rook-ceph wait --for=condition=Available deploy rook-ceph-operator --timeout=10m\n")),(0,o.kt)("h2",{id:"setup-the-ceph-cluster"},"Setup the Ceph Cluster"),(0,o.kt)("h3",{id:"option-1-create-a-new-ceph-cluster-using-free-disks-on-the-harvester-hosts"},"Option 1: Create a new Ceph cluster using free disks on the Harvester hosts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Ceph cluster.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# apply configurations ref: https://rook.github.io/docs/rook/v1.12/Getting-Started/example-configurations/#cluster-crd\nkubectl apply -f cluster.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create the StorageClass ",(0,o.kt)("inlineCode",{parentName:"li"},"rook-ceph-block")," and VolumeSnapshotClass ",(0,o.kt)("inlineCode",{parentName:"li"},"csi-rbdplugin-snapclass"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./csi/rbd/storageclass.yaml -f ./csi/rbd/snapshotclass.yaml\n")),(0,o.kt)("h3",{id:"option-2-using-an-existing-external-ceph-cluster-recommended"},"Option 2: Using an existing external Ceph cluster (Recommended)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the python script ",(0,o.kt)("inlineCode",{parentName:"li"},"create-external-cluster-resources.py")," in the ",(0,o.kt)("a",{parentName:"li",href:"https://www.rook.io/docs/rook/v1.12/CRDs/Cluster/external-cluster/"},"existing external Ceph cluster")," for creating all users and keys.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# script help ref: https://www.rook.io/docs/rook/v1.12/CRDs/Cluster/external-cluster/#1-create-all-users-and-keys\ncurl -s https://raw.githubusercontent.com/rook/rook/v1.12.2/deploy/examples/create-external-cluster-resources.py > create-external-cluster-resources.py\npython3 create-external-cluster-resources.py --rbd-data-pool-name <pool_name> --namespace rook-ceph-external --format bash\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Copy the Bash output.")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export NAMESPACE=rook-ceph-external\nexport ROOK_EXTERNAL_FSID=b3b47828-4c60-11ee-be38-51902f85c805\nexport ROOK_EXTERNAL_USERNAME=client.healthchecker\nexport ROOK_EXTERNAL_CEPH_MON_DATA=ceph-1=192.168.5.99:6789\nexport ROOK_EXTERNAL_USER_SECRET=AQDd6/dkFyu/IhAATv/uCMbHtWk4AYK2KXzBhQ==\nexport ROOK_EXTERNAL_DASHBOARD_LINK=https://192.168.5.99:8443/\nexport CSI_RBD_NODE_SECRET=AQDd6/dk2HsjIxAA06Yw9UcOg0dfwV/9IFBRhA==\nexport CSI_RBD_NODE_SECRET_NAME=csi-rbd-node\nexport CSI_RBD_PROVISIONER_SECRET=AQDd6/dkEY1kIxAAAzrXZnVRf4x+wDUz1zyaQg==\nexport CSI_RBD_PROVISIONER_SECRET_NAME=csi-rbd-provisioner\nexport MONITORING_ENDPOINT=192.168.5.99\nexport MONITORING_ENDPOINT_PORT=9283\nexport RBD_POOL_NAME=test\nexport RGW_POOL_PREFIX=default\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Consume the external Ceph cluster resources on the Harvester cluster.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Paste the above output from create-external-cluster-resources.py into import-env.sh\nvim import-env.sh\nsource import-env.sh\n# this script will create a StorageClass ceph-rbd\nsource import-external-cluster.sh\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f common-external.yaml\nkubectl apply -f cluster-external.yaml\n# wait for all pods to become Ready\nwatch 'kubectl --namespace rook-ceph get pods'\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create the VolumeSnapshotClass ",(0,o.kt)("inlineCode",{parentName:"li"},"csi-rbdplugin-snapclass-external"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat >./csi/rbd/snapshotclass-external.yaml <<EOF\n---\napiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshotClass\nmetadata:\n  name: csi-rbdplugin-snapclass-external\ndriver: rook-ceph.rbd.csi.ceph.com # driver:namespace:operator\nparameters:\n  clusterID: rook-ceph-external # namespace:cluster\n  csi.storage.k8s.io/snapshotter-secret-name: rook-csi-rbd-provisioner\n  csi.storage.k8s.io/snapshotter-secret-namespace: rook-ceph-external # namespace:cluster\ndeletionPolicy: Delete\nEOF\n\nkubectl apply -f ./csi/rbd/snapshotclass-external.yaml\n")),(0,o.kt)("h2",{id:"configure-harvester-cluster"},"Configure Harvester Cluster"),(0,o.kt)("p",null,"Before you can make use of Harvester's ",(0,o.kt)("strong",{parentName:"p"},"Backup & Snapshot")," features, you need to set up some essential configurations through the Harvester ",(0,o.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/advanced/settings#csi-driver-config"},"csi-driver-config")," setting. To set up these configurations, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to the Harvester UI, then navigate to ",(0,o.kt)("strong",{parentName:"li"},"Advanced")," > ",(0,o.kt)("strong",{parentName:"li"},"Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Find and select ",(0,o.kt)("strong",{parentName:"li"},"csi-driver-config"),", and then click on the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee")," > ",(0,o.kt)("strong",{parentName:"li"},"Edit Setting")," to access the configuration options."),(0,o.kt)("li",{parentName:"ol"},"In the settings, set the ",(0,o.kt)("strong",{parentName:"li"},"Provisioner")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"rook-ceph.rbd.csi.ceph.com"),"."),(0,o.kt)("li",{parentName:"ol"},"Next, specify the ",(0,o.kt)("strong",{parentName:"li"},"Volume Snapshot Class Name")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"csi-rbdplugin-snapclass")," for the internal Ceph cluster or ",(0,o.kt)("inlineCode",{parentName:"li"},"csi-rbdplugin-snapclass-external")," for the external Ceph cluster. This setting points to the name of the ",(0,o.kt)("inlineCode",{parentName:"li"},"VolumeSnapshotClass")," used for creating volume snapshots or VM snapshots."),(0,o.kt)("li",{parentName:"ol"},"Similarly, set the ",(0,o.kt)("strong",{parentName:"li"},"Backup Volume Snapshot Class Name")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"csi-rbdplugin-snapclass")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"csi-rbdplugin-snapclass-external"),". This corresponds to the name of the ",(0,o.kt)("inlineCode",{parentName:"li"},"VolumeSnapshotClass")," responsible for creating VM backups.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"csi-driver-config",src:r(3973).Z,width:"3824",height:"1848"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"csi-driver-config-external",src:r(3847).Z,width:"3824",height:"1848"})),(0,o.kt)("h2",{id:"use-rook-ceph-in-harvester"},"Use Rook Ceph in Harvester"),(0,o.kt)("p",null,"After successfully configuring these settings, you can proceed to utilize the Rook Ceph StorageClass, which is named ",(0,o.kt)("inlineCode",{parentName:"p"},"rook-ceph-block")," for the internal Ceph cluster or named ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-rbd")," for the external Ceph cluster. You can apply this StorageClass when creating an empty volume or adding a new block volume to a VM, enhancing your Harvester cluster's storage capabilities."),(0,o.kt)("p",null,"With these configurations in place, your Harvester cluster is ready to make the most of the Rook Ceph storage integration."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"rook-ceph-volume",src:r(7553).Z,width:"3824",height:"1848"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"rook-ceph-vm",src:r(3545).Z,width:"3824",height:"1848"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"rook-ceph-volume-external",src:r(8672).Z,width:"3824",height:"1848"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"rook-ceph-vm-external",src:r(7500).Z,width:"3824",height:"1848"})))}g.isMDXComponent=!0},3847:function(e,t,r){t.Z=r.p+"assets/images/csi-driver-config-external-59b885aff7095a9bda897ed59f289d82.png"},3973:function(e,t,r){t.Z=r.p+"assets/images/csi-driver-config-03c9b891ee067ef415b7c7bff5815888.png"},7500:function(e,t,r){t.Z=r.p+"assets/images/rook-ceph-vm-external-4c1b4f6b6a6676e13d312cac3498d786.png"},3545:function(e,t,r){t.Z=r.p+"assets/images/rook-ceph-vm-69f7064b3e9190c2bd025b7afb359902.png"},8672:function(e,t,r){t.Z=r.p+"assets/images/rook-ceph-volume-external-974d73b9b863e95495c7b119d2c50954.png"},7553:function(e,t,r){t.Z=r.p+"assets/images/rook-ceph-volume-fcd1f316c0ff67152f8f5b1344d9d6cd.png"}}]);
"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[1112],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6602:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"Configure PriorityClass on Longhorn System Components",description:"Configure priority classes on Longhorn system components",slug:"configure_priority_class_longhorn",authors:[{name:"Kiefer Chang",title:"Engineer Manager",url:"https://github.com/bk201",image_url:"https://github.com/bk201.png"}],tags:["harvester","longhorn","priority class"],hide_table_of_contents:!1},s=void 0,p={permalink:"/kb/configure_priority_class_longhorn",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2023-07-25/configure_priority_class_longhorn.md",source:"@site/kb/2023-07-25/configure_priority_class_longhorn.md",title:"Configure PriorityClass on Longhorn System Components",description:"Configure priority classes on Longhorn system components",date:"2023-07-25T00:00:00.000Z",formattedDate:"July 25, 2023",tags:[{label:"harvester",permalink:"/kb/tags/harvester"},{label:"longhorn",permalink:"/kb/tags/longhorn"},{label:"priority class",permalink:"/kb/tags/priority-class"}],readingTime:6.405,truncated:!1,authors:[{name:"Kiefer Chang",title:"Engineer Manager",url:"https://github.com/bk201",image_url:"https://github.com/bk201.png",imageURL:"https://github.com/bk201.png"}],frontMatter:{title:"Configure PriorityClass on Longhorn System Components",description:"Configure priority classes on Longhorn system components",slug:"configure_priority_class_longhorn",authors:[{name:"Kiefer Chang",title:"Engineer Manager",url:"https://github.com/bk201",image_url:"https://github.com/bk201.png",imageURL:"https://github.com/bk201.png"}],tags:["harvester","longhorn","priority class"],hide_table_of_contents:!1},prevItem:{title:"Using Rook Ceph Storage in Harvester",permalink:"/kb/using_rook_ceph_storage"},nextItem:{title:"Package your own Toolbox Image",permalink:"/kb/package_your_own_toolbox_image"}},m={authorsImageUrls:[void 0]},c=[{value:"Stop all virtual machines",id:"stop-all-virtual-machines",level:2},{value:"Scale down monitoring pods",id:"scale-down-monitoring-pods",level:2},{value:"Scale down vm-import-controller pods",id:"scale-down-vm-import-controller-pods",level:2},{value:"Set the <code>priority-class</code> setting",id:"set-the-priority-class-setting",level:2},{value:"Scale up vm-import-controller pods",id:"scale-up-vm-import-controller-pods",level:2},{value:"Scale up monitoring pods",id:"scale-up-monitoring-pods",level:2},{value:"Start virtual machines",id:"start-virtual-machines",level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Harvester v1.2.0"),"  introduces a new enhancement where Longhorn system-managed components in newly-deployed clusters are automatically assigned a ",(0,o.kt)("inlineCode",{parentName:"p"},"system-cluster-critical")," priority class by default. However, when upgrading your Harvester clusters from previous versions, you may notice that Longhorn system-managed components do not have any priority class set."),(0,o.kt)("p",null,"This behavior is intentional and aimed at supporting zero-downtime upgrades. Longhorn does not allow changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"priority-class")," setting when attached volumes exist. For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.4.3/advanced-resources/deploy/priority-class/#setting-priority-class-during-longhorn-installation"},"Setting Priority Class During Longhorn Installation"),")."),(0,o.kt)("p",null,"This article explains how to manually configure priority classes for Longhorn system-managed components after upgrading your Harvester cluster, ensuring that your Longhorn components have the appropriate priority class assigned and maintaining the stability and performance of your system."),(0,o.kt)("h2",{id:"stop-all-virtual-machines"},"Stop all virtual machines"),(0,o.kt)("p",null,"Stop all virtual machines (VMs) to detach all volumes. Please back up any work before doing this."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/os#how-to-log-into-a-harvester-node"},"Login to a Harvester controller node and become root"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get all running VMs and write down their namespaces and names:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get vmi -A\n")),(0,o.kt)("p",{parentName:"li"},"Alternatively, you can get this information by backing up the Virtual Machine Instance (VMI) manifests with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get vmi -A -o json > vmi-backup.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Shut down all VMs. Log in to all running VMs and shut them down gracefully (recommended). Or use the following command to send shutdown signals to all VMs:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get vmi -A -o json | jq -r '.items[] | [.metadata.name, .metadata.namespace] | @tsv' | while IFS=$'\\t' read -r name namespace; do\n      if [ -z \"$name\" ]; then\n        break\n      fi\n      echo \"Stop ${namespace}/${name}\"\n      virtctl stop $name -n $namespace\n    done\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  You can also stop all VMs from the Harvester UI:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,o.kt)("li",{parentName:"ol"},"For each VM, select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee")," > ",(0,o.kt)("strong",{parentName:"li"},"Stop"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure there are no running VMs:"),(0,o.kt)("p",{parentName:"li"},"Run the command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get vmi -A\n")),(0,o.kt)("p",{parentName:"li"},"The above command must return:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"No resources found\n")))),(0,o.kt)("h2",{id:"scale-down-monitoring-pods"},"Scale down monitoring pods"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scale down the Prometheus deployment. Run the following command and wait for all Prometheus pods to terminate:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch -n cattle-monitoring-system prometheus/rancher-monitoring-prometheus --patch \'{"spec": {"replicas": 0}}\' --type merge && \\\n    sleep 5 && \\\n    kubectl rollout status --watch=true -n cattle-monitoring-system statefulset/prometheus-rancher-monitoring-prometheus\n')),(0,o.kt)("p",{parentName:"li"},"A sample output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"prometheus.monitoring.coreos.com/rancher-monitoring-prometheus patched\nstatefulset rolling update complete 0 pods at revision prometheus-rancher-monitoring-prometheus-cbf6bd5f7...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scale down the AlertManager deployment. Run the following command and wait for all AlertManager pods to terminate:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch -n cattle-monitoring-system alertmanager/rancher-monitoring-alertmanager --patch \'{"spec": {"replicas": 0}}\' --type merge && \\\n    sleep 5 && \\\n    kubectl rollout status --watch=true -n cattle-monitoring-system statefulset/alertmanager-rancher-monitoring-alertmanager\n')),(0,o.kt)("p",{parentName:"li"},"A sample output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"alertmanager.monitoring.coreos.com/rancher-monitoring-alertmanager patched\nstatefulset rolling update complete 0 pods at revision alertmanager-rancher-monitoring-alertmanager-c8c459dff...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scale down the Grafana deployment. Run the following command and wait for all Grafana pods to terminate:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale --replicas=0 deployment/rancher-monitoring-grafana -n cattle-monitoring-system && \\\n    sleep 5 && \\\n    kubectl rollout status --watch=true -n cattle-monitoring-system deployment/rancher-monitoring-grafana\n")),(0,o.kt)("p",{parentName:"li"},"A sample output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'deployment.apps/rancher-monitoring-grafana scaled\ndeployment "rancher-monitoring-grafana" successfully rolled out\n')))),(0,o.kt)("h2",{id:"scale-down-vm-import-controller-pods"},"Scale down vm-import-controller pods"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/advanced/vmimport"},(0,o.kt)("inlineCode",{parentName:"a"},"vm-import-controller"))," addon is enabled and configured with a persistent volume with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pvc -n harvester-system harvester-vm-import-controller\n")),(0,o.kt)("p",{parentName:"li"},"If the above command returns an output like this, you must scale down the ",(0,o.kt)("inlineCode",{parentName:"p"},"vm-import-controller")," pod. Otherwise, you can skip the following step."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAME                             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS         AGE\nharvester-vm-import-controller   Bound    pvc-eb23e838-4c64-4650-bd8f-ba7075ab0559   200Gi      RWO            harvester-longhorn   2m53s\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scale down the ",(0,o.kt)("inlineCode",{parentName:"p"},"vm-import-controller")," pods with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale --replicas=0 deployment/harvester-vm-import-controller -n harvester-system && \\\n    sleep 5 && \\\n    kubectl rollout status --watch=true -n harvester-system deployment/harvester-vm-import-controller\n")),(0,o.kt)("p",{parentName:"li"},"A sample output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'deployment.apps/harvester-vm-import-controller scaled\ndeployment "harvester-vm-import-controller" successfully rolled out\n')))),(0,o.kt)("h2",{id:"set-the-priority-class-setting"},"Set the ",(0,o.kt)("inlineCode",{parentName:"h2"},"priority-class")," setting"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before applying the ",(0,o.kt)("inlineCode",{parentName:"p"},"priority-class")," setting, you need to verify all volumes are detached. Run the following command to verify the ",(0,o.kt)("inlineCode",{parentName:"p"},"STATE")," of each volume is ",(0,o.kt)("inlineCode",{parentName:"p"},"detached"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get volumes.longhorn.io -A\n")),(0,o.kt)("p",{parentName:"li"},"Verify the output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE           NODE   AGE\nlonghorn-system   pvc-5743fd02-17a3-4403-b0d3-0e9b401cceed   detached   unknown                  5368709120            15d\nlonghorn-system   pvc-7e389fe8-984c-4049-9ba8-5b797cb17278   detached   unknown                  53687091200           15d\nlonghorn-system   pvc-8df64e54-ecdb-4d4e-8bab-28d81e316b8b   detached   unknown                  2147483648            15d\nlonghorn-system   pvc-eb23e838-4c64-4650-bd8f-ba7075ab0559   detached   unknown                  214748364800          11m\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"priority-class")," setting with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch -n longhorn-system settings.longhorn.io priority-class --patch \'{"value": "system-cluster-critical"}\' --type merge\n')),(0,o.kt)("p",{parentName:"li"},"Longhorn system-managed pods will restart and then you need to check if all the system-managed components have a priority class set:"),(0,o.kt)("p",{parentName:"li"},"Get the value of the priority class ",(0,o.kt)("inlineCode",{parentName:"p"},"system-cluster-critical"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get priorityclass system-cluster-critical\n")),(0,o.kt)("p",{parentName:"li"},"Verify the output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAME                      VALUE        GLOBAL-DEFAULT   AGE\nsystem-cluster-critical   2000000000   false            15d\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the following command to get pods' priority in the ",(0,o.kt)("inlineCode",{parentName:"p"},"longhorn-system")," namespace:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get pods -n longhorn-system -o custom-columns="Name":metadata.name,"Priority":.spec.priority\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify all system-managed components' pods have the correct priority. System-managed components include:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"csi-attacher")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"csi-provisioner")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"csi-resizer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"csi-snapshotter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"engine-image-ei")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"instance-manager-e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"instance-manager-r")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"longhorn-csi-plugin"))))),(0,o.kt)("h2",{id:"scale-up-vm-import-controller-pods"},"Scale up vm-import-controller pods"),(0,o.kt)("p",null,"If you scale down the ",(0,o.kt)("inlineCode",{parentName:"p"},"vm-import-controller")," pods, you must scale it up again. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scale up the ",(0,o.kt)("inlineCode",{parentName:"p"},"vm-import-controller")," pod. Run the command: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale --replicas=1 deployment/harvester-vm-import-controller -n harvester-system && \\\n    sleep 5 && \\\n    kubectl rollout status --watch=true -n harvester-system deployment/harvester-vm-import-controller\n")),(0,o.kt)("p",{parentName:"li"},"A sample output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'deployment.apps/harvester-vm-import-controller scaled\nWaiting for deployment "harvester-vm-import-controller" rollout to finish: 0 of 1 updated replicas are available...\ndeployment "harvester-vm-import-controller" successfully rolled out\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify ",(0,o.kt)("inlineCode",{parentName:"p"},"vm-import-controller")," is running using the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --selector app.kubernetes.io/instance=vm-import-controller -A\n")),(0,o.kt)("p",{parentName:"li"},"A sample output looks like this, the pod's ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," must be ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAMESPACE          NAME                                              READY   STATUS    RESTARTS   AGE\nharvester-system   harvester-vm-import-controller-6bd8f44f55-m9k86   1/1     Running   0          4m53s\n")))),(0,o.kt)("h2",{id:"scale-up-monitoring-pods"},"Scale up monitoring pods"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scale up the Prometheus deployment. Run the following command and wait for all Prometheus pods to roll out:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch -n cattle-monitoring-system prometheus/rancher-monitoring-prometheus --patch \'{"spec": {"replicas": 1}}\' --type merge && \\\n    sleep 5 && \\\n    kubectl rollout status --watch=true -n cattle-monitoring-system statefulset/prometheus-rancher-monitoring-prometheus\n')),(0,o.kt)("p",{parentName:"li"},"A sample output looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"prometheus.monitoring.coreos.com/rancher-monitoring-prometheus patched\nWaiting for 1 pods to be ready...\nstatefulset rolling update complete 1 pods at revision prometheus-rancher-monitoring-prometheus-cbf6bd5f7...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scale down the AlertManager deployment. Run the following command and wait for all AlertManager pods to roll out:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch -n cattle-monitoring-system alertmanager/rancher-monitoring-alertmanager --patch \'{"spec": {"replicas": 1}}\' --type merge && \\\n    sleep 5 && \\\n    kubectl rollout status --watch=true -n cattle-monitoring-system statefulset/alertmanager-rancher-monitoring-alertmanager\n')),(0,o.kt)("p",{parentName:"li"},"A sample output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"alertmanager.monitoring.coreos.com/rancher-monitoring-alertmanager patched\nWaiting for 1 pods to be ready...\nstatefulset rolling update complete 1 pods at revision alertmanager-rancher-monitoring-alertmanager-c8bd4466c...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scale down the Grafana deployment. Run the following command and wait for all Grafana pods to roll out:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale --replicas=1 deployment/rancher-monitoring-grafana -n cattle-monitoring-system && \\\n    sleep 5 && \\\n    kubectl rollout status --watch=true -n cattle-monitoring-system deployment/rancher-monitoring-grafana\n")),(0,o.kt)("p",{parentName:"li"},"A sample output looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'deployment.apps/rancher-monitoring-grafana scaled\nWaiting for deployment "rancher-monitoring-grafana" rollout to finish: 0 of 1 updated replicas are available...\ndeployment "rancher-monitoring-grafana" successfully rolled out\n')))),(0,o.kt)("h2",{id:"start-virtual-machines"},"Start virtual machines"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start a VM with the command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"virtctl start $name -n $namespace\n")),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"$name")," with the VM's name and ",(0,o.kt)("inlineCode",{parentName:"p"},"$namespace")," with the VM's namespace. You can list all virtual machines with the command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get vms -A\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," You can also stop all VMs from the Harvester UI:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,o.kt)("li",{parentName:"ol"},"For each VM, select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee")," > ",(0,o.kt)("strong",{parentName:"li"},"Start"),".")))),(0,o.kt)("p",{parentName:"li"},"Alternatively, you can start all running VMs with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat vmi-backup.json | jq -r '.items[] | [.metadata.name, .metadata.namespace] | @tsv' | while IFS=$'\\t' read -r name namespace; do\n      if [ -z \"$name\" ]; then\n        break\n      fi\n      echo \"Start ${namespace}/${name}\"\n      virtctl start $name -n $namespace || true\n    done\n")))))}d.isMDXComponent=!0}}]);
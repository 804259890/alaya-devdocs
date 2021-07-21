(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[3466],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x=a.createContext({}),d=function(e){var t=a.useContext(x),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(x.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,x=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(x,".").concat(c)]||s[c]||p[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var x in t)hasOwnProperty.call(t,x)&&(o[x]=t[x]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3210:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return x},toc:function(){return d},default:function(){return p}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"Run_a_fullnode",title:"Run a fullnode",sidebar_label:"Run a fullnode"},o=void 0,x={unversionedId:"Run_a_fullnode",id:"Run_a_fullnode",isDocsHomePage:!1,title:"Run a fullnode",description:"Overview",source:"@site/docs/Run_a_fullnode.md",sourceDirName:".",slug:"/Run_a_fullnode",permalink:"/alaya-devdocs/en/Run_a_fullnode",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/Run_a_fullnode.md",version:"current",frontMatter:{id:"Run_a_fullnode",title:"Run a fullnode",sidebar_label:"Run a fullnode"},sidebar:"docs",previous:{title:"Intro to validator",permalink:"/alaya-devdocs/en/Intro_to_validator"},next:{title:"Staking",permalink:"/alaya-devdocs/en/Become_Validator"}},d=[{value:"Overview",id:"overview",children:[]},{value:"System Requirements",id:"system-requirements",children:[]},{value:"Installation Overview",id:"installation-overview",children:[]},{value:"Installing on Ubuntu (18.04)",id:"installing-on-ubuntu-1804",children:[{value:"Install and run NTP service",id:"install-and-run-ntp-service",children:[]},{value:"Install Alaya",id:"install-alaya",children:[]}]},{value:"Generate keys",id:"generate-keys",children:[{value:"Public and private keys",id:"public-and-private-keys",children:[]},{value:"BLS public and private key",id:"bls-public-and-private-key",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This guide demonstrates how to install the Alaya Node software on Linux."),(0,l.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CPU: 4 Cores"),(0,l.kt)("li",{parentName:"ul"},"Memory: 8G"),(0,l.kt)("li",{parentName:"ul"},"Disk: > 100G")),(0,l.kt)("h2",{id:"installation-overview"},"Installation Overview"),(0,l.kt)("p",null,"It takes three or four steps to install a new node, which depends on the operating system used. The detailed procedures are list below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Installing on Ubuntu (18.04)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note: Use the normal user to execute the following command."))),(0,l.kt)("h2",{id:"installing-on-ubuntu-1804"},"Installing on Ubuntu (18.04)"),(0,l.kt)("h3",{id:"install-and-run-ntp-service"},"Install and run NTP service"),(0,l.kt)("h4",{id:"open-a-terminal-and-run-the-following-commands"},"Open a terminal and run the following commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update &&\nsudo apt-get install -y gnupg2 curl software-properties-common ntp &&\nsudo systemctl enable ntp && sudo systemctl start ntp\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes:"),(0,l.kt)("p",{parentName:"blockquote"},"NTP service is used for time synchronization, incorrect system time will affect the normal operation of Alaya")),(0,l.kt)("h4",{id:"validate-the-ntp-time-synchronization"},"Validate the NTP time synchronization"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ntpq -4c rv | grep leap_none\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes:"),(0,l.kt)("p",{parentName:"blockquote"},"Display ",(0,l.kt)("strong",{parentName:"p"},"associd=0 status=0615 ",(0,l.kt)("font",{color:"red"},"leap_none"),", sync_ntp, 1 event, clock_sync,")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"leap_none")," is red, indicating that the NTP time synchronization is normal.")),(0,l.kt)("h3",{id:"install-alaya"},"Install Alaya"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backup binaries"),(0,l.kt)("p",{parentName:"li"},"Tip: You can skip this step if you do not need to back up the old version binaries."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[[ -x /usr/bin/platon ]] && sudo mv /usr/bin/platon /usr/bin/platon_`platon version | grep '^Version:' | awk -F \"[ ,:,-]\" '{print $3}'`\n[[ -x /usr/bin/alayakey ]] && sudo mv /usr/bin/alayakey /usr/bin/alayakey_`alayakey --version | awk -F \"[ ,-]\" '{print $3}'`\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install binary"),(0,l.kt)("font",{color:"red"},"The binary version number of the main network is 0.15.0, and that of the development network is 0.15.1. If you need to join the development network, please change the version number in the download link to 0.15.1."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://download.alaya.network/alaya/platon/0.15.0/platon -P /usr/bin\nsudo wget https://download.alaya.network/alaya/platon/0.15.0/alayakey -P /usr/bin\nsudo chmod +x /usr/bin/platon  /usr/bin/alayakey\nplaton version\n")),(0,l.kt)("p",{parentName:"li"},"After executing the commands above, ",(0,l.kt)("inlineCode",{parentName:"p"},"platon")," and ",(0,l.kt)("inlineCode",{parentName:"p"}," alayakey")," binary should be successfully installed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/bin")," directory on your system. You can execute corresponding commands in any directory."))),(0,l.kt)("h2",{id:"generate-keys"},"Generate keys"),(0,l.kt)("h3",{id:"public-and-private-keys"},"Public and private keys"),(0,l.kt)("p",null,"Each node in the network has an unique identity to distinguish it from others. This identity is a public and private key pair, generated in the node's working directory ( ",(0,l.kt)("inlineCode",{parentName:"p"},"~/platon-node"),") by the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/platon-node/data && alayakey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/platon-node/data/nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ~/platon-node/data/nodeid)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Remark:"),(0,l.kt)("p",{parentName:"blockquote"},"Displays the following, indicating that the key pair has been successfully generated (x stands for number or letter) :"),(0,l.kt)("p",{parentName:"blockquote"},"PrivateKey: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),(0,l.kt)("p",{parentName:"blockquote"},"PublicKey: : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PrivateKey")," is the private key of the node, and",(0,l.kt)("inlineCode",{parentName:"p"}," PublicKey")," is the public key of the node. The public key is used to identify the identity of the node and can be made public."),(0,l.kt)("p",null,"Two files will be generated in the subdirectory ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," under the working directory of the node\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nodeid: node public key (ID) file, which holds the node's public key"),(0,l.kt)("li",{parentName:"ul"},"nodekey: node private key file, which holds the node's private key")),(0,l.kt)("h3",{id:"bls-public-and-private-key"},"BLS public and private key"),(0,l.kt)("p",null,"In addition to the public and private keys of the node, the PlatON node also needs a key pair called the BLS public and private key. This key pair will be used in the consensus protocol. The key pair can be generated in the node's working directory (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"~/platon-node"),") by the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/platon-node/data && alayakey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/platon-node/data/blskey) >(grep \"PublicKey\" | awk '{print $3}' > ~/platon-node/data/blspub)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"PrivateKey: f22a785c80bd1095beff1f356811268eae6c94abf0b2b4e2d64918957b74783e\nPublicKey : 4bf873a66df92ada50a8c6bacb132ffd63437bcde7fd338d2d8696170034a6332e404ac3abb50326ee517ec5f63caf12891ce794ed14f8528fa7c54bc0ded7c5291f708116bb8ee8adadf1e88588866325d764230f4a45929d267a9e8f264402")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PrivateKey")," is the BLS private key of the node, and",(0,l.kt)("inlineCode",{parentName:"p"}," PublicKey")," is the BLS public key of the node. The BLS public key is used to quickly verify the signature in the consensus protocol and can be published. The BLS private key cannot be made public and needs to be backed up."),(0,l.kt)("p",null,"Two files will be generated in the subdirectory ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," under the working directory of the node:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"blspub: Node BLS public key file, which holds the node's BLS public key")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"blskey: Node BLS private key file, which holds the node's BLS private key"))))}p.isMDXComponent=!0}}]);
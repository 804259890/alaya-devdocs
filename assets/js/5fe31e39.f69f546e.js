(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[4614],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return k}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,h=u["".concat(d,".").concat(k)]||u[k]||p[k]||o;return t?n.createElement(h,l(l({ref:a},c),{},{components:t})):n.createElement(h,l({ref:a},c))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3597:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var n=t(2122),r=t(9756),o=(t(7294),t(3905)),l={id:"Private_network",title:"Private network",sidebar_label:"Private network"},i=void 0,d={unversionedId:"Private_network",id:"Private_network",isDocsHomePage:!1,title:"Private network",description:"Overview",source:"@site/docs/Private_network.md",sourceDirName:".",slug:"/Private_network",permalink:"/alaya-devdocs/Private_network",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/Private_network.md",version:"current",frontMatter:{id:"Private_network",title:"Private network",sidebar_label:"Private network"},sidebar:"docs",previous:{title:"Run a dev node",permalink:"/alaya-devdocs/Run_a_dev_node"},next:{title:"Alaya-Truffle",permalink:"/alaya-devdocs/Alaya-Truffle"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Private Network of A Single Node",id:"private-network-of-a-single-node",children:[{value:"Generate nodekey and blskey and other related files",id:"generate-nodekey-and-blskey-and-other-related-files",children:[]},{value:"Create a genesis wallet",id:"create-a-genesis-wallet",children:[]},{value:"Edit the genesis block configuration file",id:"edit-the-genesis-block-configuration-file",children:[]},{value:"Initialize the genesis block",id:"initialize-the-genesis-block",children:[]},{value:"Start the node",id:"start-the-node",children:[]},{value:"Check the running state of the node",id:"check-the-running-state-of-the-node",children:[]}]},{value:"Alaya Cluster Private Network",id:"alaya-cluster-private-network",children:[{value:"Create a directory",id:"create-a-directory",children:[]},{value:"Create a key pair",id:"create-a-key-pair",children:[]},{value:"Edit the genesis file",id:"edit-the-genesis-file",children:[]},{value:"Initialization and startup",id:"initialization-and-startup",children:[]},{value:"Check",id:"check",children:[]}]}],c={toc:s};function p(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This document describes how to quickly deploy a personal private blockchain, which requires certain development/operation and maintenance skills of the reader. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Before building a private chain, you need to compile the binary file. Please refer to ",(0,o.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Install_Alaya/"},"Alaya Installation"),"."),(0,o.kt)("li",{parentName:"ul"},"Takes Ubuntu as an example to illustrate how to deploy a private chain, including single node and cluster deployment. The deployment method on Windows is similar.")),(0,o.kt)("p",null,"If it is inconvenient for you to connect to an external network, you can build your own private network. ",(0,o.kt)("inlineCode",{parentName:"p"},"Alaya")," supports the single node mode and cluster mode to run private network. Take the Ubuntu environment as an example, and suppose the node data directory is: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/alaya-node/data")," (users can adjust it by themselves)."),(0,o.kt)("h2",{id:"private-network-of-a-single-node"},"Private Network of A Single Node"),(0,o.kt)("h3",{id:"generate-nodekey-and-blskey-and-other-related-files"},"Generate nodekey and blskey and other related files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/alaya-node/data \\ \n    && alayakey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/alaya-node/data/nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ~/alaya-node/data/nodeid) \\ \n    && alayakey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/alaya-node/data/blskey) >(grep \"PublicKey\" | awk '{print $3}' > ~/alaya-node/data/blspub)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Description:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"nodeid: The node public key (ID) file, to save the node public key and identify its identity"),(0,o.kt)("li",{parentName:"ul"},"nodekey: The node private key file, to save the node private key. It cannot be made public and needs to be backed up."),(0,o.kt)("li",{parentName:"ul"},"blspub: The node BLS public key file, to save the node BLS public key and quickly verify the signature in the consensus protocol."),(0,o.kt)("li",{parentName:"ul"},"blskey: The node BLS private key file, to save the node BLS private key. It cannot be made public and needs to be backed up. "))),(0,o.kt)("h3",{id:"create-a-genesis-wallet"},"Create a genesis wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/alaya-node/data && alaya --datadir ~/alaya-node/data account new {wallet_name}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your new account is locked with a password. Please give a password. Do not forget this password."),(0,o.kt)("p",{parentName:"blockquote"},"Passphrase:"),(0,o.kt)("p",{parentName:"blockquote"},"Repeat passphrase:"),(0,o.kt)("p",{parentName:"blockquote"},"main net Address: atp16h5jr7t72das7jdtctsumzugygt55mvapqqvzp\nother net Address: atx16h5jr7t72das7jdtctsumzugygt55mvatxux3t"),(0,o.kt)("p",{parentName:"blockquote"},"Note:"),(0,o.kt)("p",{parentName:"blockquote"},"The wallet file and password are very important to the generated account address. Loss of the wallet file or forgetting the password will result in the loss of the token in the account. Please make a backup of the wallet file and remember the password. ")),(0,o.kt)("h3",{id:"edit-the-genesis-block-configuration-file"},"Edit the genesis block configuration file"),(0,o.kt)("p",null,"Create the genesis block configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"alaya.json")," in the ~/alaya-node directory "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "config": {\n        "chainId": 201030,\n        "eip155Block": 3,\n        "cbft": {\n            "initialNodes": [{\n                "node": "enode://4fcc251cf6bf3ea53a748971a223f5676225ee4380b65c7889a2b491e1551d45fe9fcc19c6af54dcf0d5323b5aa8ee1d919791695082bae1f86dd282dba4150f@127.0.0.1:16789",\n                "blsPubKey": "d341a0c485c9ec00cecf7ea16323c547900f6a1bacb9daacb00c2b8bacee631f75d5d31b75814b7f1ae3a4e18b71c617bc2f230daa0c893746ed87b08b2df93ca4ddde2816b3ac410b9980bcc048521562a3b2d00e900fd777d3cf88ce678719"\n            }],\n            "amount": 10,\n            "period": 20000,\n            "validatorMode": "ppos"\n        },\n        "genesisVersion": 3328\n    },\n    "economicModel": {\n        "common": {\n            "maxEpochMinutes": 360,\n            "maxConsensusVals": 25,\n            "additionalCycleTime": 525960\n        },\n        "staking": {\n            "stakeThreshold": 10000000000000000000000,\n            "operatingThreshold": 1000000000000000000,\n            "maxValidators": 101,\n            "unStakeFreezeDuration": 8,\n            "rewardPerMaxChangeRange": 500,\n            "rewardPerChangeInterval": 10\n        },\n        "slashing": {\n            "slashFractionDuplicateSign": 10,\n            "duplicateSignReportReward": 50,\n            "maxEvidenceAge": 7,\n            "slashBlocksReward": 250,\n            "zeroProduceCumulativeTime": 30,\n            "zeroProduceNumberThreshold": 1,\n            "zeroProduceFreezeDuration": 7\n        },\n        "gov": {\n            "versionProposalVoteDurationSeconds": 1209600,\n            "versionProposalSupportRate": 6670,\n            "textProposalVoteDurationSeconds": 1209600,\n            "textProposalVoteRate": 5000,\n            "textProposalSupportRate": 6670,\n            "cancelProposalVoteRate": 5000,\n            "cancelProposalSupportRate": 6670,\n            "paramProposalVoteDurationSeconds": 1209600,\n            "paramProposalVoteRate": 5000,\n            "paramProposalSupportRate": 6670\n        },\n        "reward": {\n            "newBlockRate": 50,\n            "platonFoundationYear": 2,\n            "increaseIssuanceRatio": 500\n        },\n        "innerAcc": {\n            "platonFundAccount": "atx10spacq8cz76y2n60pl7sg5yazncmjuus7n6hw2",\n            "platonFundBalance": 0,\n            "cdfAccount": "atx17tfkaghs4vded6mz6k53xyv5cvqsl63h5gq7cw",\n            "cdfBalance": 4000000000000000000000000\n        }\n    },\n    "nonce": "0x0376e56dffd12ab53bb149bda4e0cbce2b6aabe4cccc0df0b5a39e12977a2fcd23",\n    "timestamp": "0x5bc94a8a",\n    "extraData": "0xd782070186706c61746f6e86676f312e3131856c696e757800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "gasLimit": "4712388",\n    "alloc": {\n        "atx1zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr75cqxf": {\n            "balance": "1000000000000000000000000"\n        },\n        "atx1zkrxx6rf358jcvr7nruhyvr9hxpwv9unj58er9": {\n            "balance": "9718188019000000000000000000"\n        }\n    },\n    "number": "0x0",\n    "gasUsed": "0x0",\n    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"\n}\n')),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"your-node-pubkey")," to the previously generated ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"node public key (nodeid)"))," and ",(0,o.kt)("inlineCode",{parentName:"p"},"your-node-blspubkey")," to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"node bls public key (blspub)")),". ",(0,o.kt)("inlineCode",{parentName:"p"},"your- account-address")," is the address for creating the wallet (multiple initial accounts can be configured):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'# Here is a snippet\n...\n    "cbft": {\n    "initialNodes": [{\n        "node": "enode://your-node-pubkey@127.0.0.1:16789",\n        "blsPubKey": "your-node-blspubkey"\n    }],\n...\n    "alloc": {\n      "your-account-address": {\n            "balance": "999000000000000000000"\n      }\n    },\n...\n')),(0,o.kt)("h3",{id:"initialize-the-genesis-block"},"Initialize the genesis block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/alaya-node && alaya --datadir ./data init alaya.json\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Description:"),(0,o.kt)("p",{parentName:"blockquote"},"A prompt of ",(0,o.kt)("inlineCode",{parentName:"p"},"Successfully wrote genesis state")," indicates the genesis information has been initialized.")),(0,o.kt)("h3",{id:"start-the-node"},"Start the node"),(0,o.kt)("p",null,"In general, the alaya process is always in the foreground, so we can't perform other operations. If we exit the terminal halfway, the program will exit. The program can be started in nohup mode under Ubuntu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/alaya-node && nohup alaya --identity "alaya" --datadir ./data --port 16789 --rpcaddr 127.0.0.1 --rpcport 6789 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodiscover --nodekey ./data/nodekey --cbft.blskey ./data/blskey & > ./data/alaya.log 2>&1 &\n')),(0,o.kt)("p",null,"When the shell prompts that nohup is successful, press Enter again to ensure that the process will not exit due to closing the terminal by mistake. "),(0,o.kt)("h3",{id:"check-the-running-state-of-the-node"},"Check the running state of the node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"alaya attach http://localhost:6789 --exec platon.blockNumber\n")),(0,o.kt)("p",null,"Execute the above command several times. If the block height keeps increasing, it means that the single-node private chain is deployed successfully."),(0,o.kt)("h2",{id:"alaya-cluster-private-network"},"Alaya Cluster Private Network"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Alaya cluster private network")," is a network environment with multiple nodes participating. Here we assume that you can build an Alaya single node. And, we will build a network of two nodes on one server. More nodes share the similar operation flow. "),(0,o.kt)("p",null," To run Alaya multi-node locally, you need to ensure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each node instance has a separate data directory (--datadir)"),(0,o.kt)("li",{parentName:"ul"},"Each instance runs on a different port, whether it is a p2p port or an rpc port (--port and --rpcport) "),(0,o.kt)("li",{parentName:"ul"},"Nodes can be interconnected with each other"),(0,o.kt)("li",{parentName:"ul"},"RPC server port is not occupied")),(0,o.kt)("h3",{id:"create-a-directory"},"Create a directory"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Let's take a two-node cluster as an example below")),(0,o.kt)("p",null,"Create directories data0 and data1 in the alaya-node directory as the data directories for the two nodes. Generate coinbase accounts for two nodes respectively. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/alaya-node/data0 ~/alaya-node/data1\n")),(0,o.kt)("h3",{id:"create-a-key-pair"},"Create a key pair"),(0,o.kt)("p",null,"Save the nodekey and blskey of the two nodes to'data0' and'data1' respectively "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/alaya-node/data0 \\\n    && alayakey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ./nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ./nodeid) \\ \n    && alayakey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ./blskey) >(grep \"PublicKey\" | awk '{print $3}' > ./blspub)\n\ncd ~/alaya-node/data1 \\\n    && alayakey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ./nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ./nodeid) \\\n    && alayakey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ./blskey) >(grep \"PublicKey\" | awk '{print $3}' > ./blspub)\n")),(0,o.kt)("h3",{id:"edit-the-genesis-file"},"Edit the genesis file"),(0,o.kt)("p",null,"Modify the genesis block configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"alaya.json"),". For the template file, refer to the single-node template."),(0,o.kt)("p",null,"Add the node information of the two nodes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialNodes")," array. Since we are generating a cluster environment composed of two nodes, the length of the array is 2."),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"alaya.json")," file:"),(0,o.kt)("p",null,"Please replace the contents of the following files ",(0,o.kt)("inlineCode",{parentName:"p"},"node0-nodekey"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"node1-nodekey"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"node0-blspubkey"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"node1-blspubkey")," with the node public key and node bls public key generated in the previous step, respectively."),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"your-account-address")," with the wallet address (multiple initial accounts can be configured)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# Here is a snippet\n\u2026\u2026\n  "cbft": {\n  "initialNodes": [{\n        "node": "enode://node0-pubkey@127.0.0.1:16789",\n        "blsPubKey": "node0-blspubkey"\n    },{\n        "node": "enode://node1-pubkey@127.0.0.1:16790",\n        "blsPubKey": "node1-blspubkey"\n    }],\n   \u2026\u2026\n  "alloc": {\n    "your-account-address": {\n        "balance": "999000000000000000000"\n    }\n  },\n\u2026\u2026\n')),(0,o.kt)("h3",{id:"initialization-and-startup"},"Initialization and startup"),(0,o.kt)("p",null,"Initialize the genesis block information for node 0 and node 1: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alaya --datadir ~/alaya-node/data0 init alaya.json && alaya --datadir ~/alaya-node/data1 init alaya.json\n")),(0,o.kt)("p",null,"After the initialization is successful, start node 0 and node 1 in nohup mode: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/alaya-node && nohup alaya --identity "alaya0" --datadir ./data0 --port 16789 --rpcaddr 0.0.0.0 --rpcport 6789 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodiscover --nodekey ./data0/nodekey --cbft.blskey ./data0/blskey > ./data0/alaya.log 2>&1 &\n\ncd ~/alaya-node && nohup alaya --identity "alaya1" --datadir ./data1 --port 16790 --rpcaddr 0.0.0.0 --rpcport 6790 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodiscover --nodekey ./data1/nodekey --cbft.blskey ./data1/blskey  > ./data1/alaya.log 2>&1 &\n')),(0,o.kt)("h3",{id:"check"},"Check"),(0,o.kt)("p",null,"Enter the alaya console of any node through the method described above, and check whether the node has established a connection with the opposite end and whether the cluster has been successfully started by seeing whether the blockNumber keeps increasing. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"alaya attach http://localhost:6789 --exec platon.blockNumber\nalaya attach http://localhost:6790 --exec platon.blockNumber\n")),(0,o.kt)("p",null,"Do the above a few more times and observe the growth of the block height."))}p.isMDXComponent=!0}}]);
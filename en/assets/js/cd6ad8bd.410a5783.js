(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[4678],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7595:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o={id:"Wasm_Getting_started",title:"Getting started",sidebar_label:"Getting started"},i=void 0,p={unversionedId:"Wasm_Getting_started",id:"Wasm_Getting_started",isDocsHomePage:!1,title:"Getting started",description:"Overview",source:"@site/docs/Wasm_Getting_started.md",sourceDirName:".",slug:"/Wasm_Getting_started",permalink:"/alaya-devdocs/en/Wasm_Getting_started",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/Wasm_Getting_started.md",version:"current",frontMatter:{id:"Wasm_Getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"docs",previous:{title:"Contract security",permalink:"/alaya-devdocs/en/Solidity_Contract_security"},next:{title:"Development costs",permalink:"/alaya-devdocs/en/Wasm_Development_costs"}},s=[{value:"Overview",id:"overview",children:[]},{value:"alaya-truffle Introduction",id:"alaya-truffle-introduction",children:[]},{value:"Create HelloWorld Contract",id:"create-helloworld-contract",children:[]},{value:"Compile HelloWorld Contract",id:"compile-helloworld-contract",children:[]},{value:"Deploly HelloWorld Contract",id:"deploly-helloworld-contract",children:[]},{value:"Call HelloWorld Contract",id:"call-helloworld-contract",children:[]},{value:"FAQ",id:"faq",children:[{value:"About Compile",id:"about-compile",children:[]},{value:"About Contract",id:"about-contract",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This tutorial is mainly to guide users to create a simple HelloWorld smart contract using wasm language on Alaya, compile, deploy, and call this contract through alaya-truffle."),(0,l.kt)("h2",{id:"alaya-truffle-introduction"},"alaya-truffle Introduction"),(0,l.kt)("p",null,"Alaya-truffle is a tool provided by PlatON that can compile, deploy, and call smart contracts locally. For specific installation and usage manuals, refer to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Alaya-truffle development tools ",(0,l.kt)("a",{parentName:"p",href:"https://platon-truffle.readthedocs.io/en/alaya/getting-started/installation.html"},"installation")),(0,l.kt)("p",{parentName:"li"},"If the wasm compiler always fails to download due to network problems, you can go directly to github ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/PlatON-CDT/releases/download/v0.13.2/platon-cdt.tar.gz"},"link address")," to download the compiled compressed file, then unzip it to the ~/.config/alaya-truffle/compilers directory, and soft link platon-cdt/bin/wasm-opt to the /usr/bin directory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Alaya-truffle development tool ",(0,l.kt)("a",{parentName:"p",href:"https://platon-truffle.readthedocs.io/en/alaya/"},"usage manuals"),(0,l.kt)("a",{parentName:"p",href:"https://platon-truffle.readthedocs.io/en/alaya/"},"https://platon-truffle.readthedocs.io/en/alaya/"),")"))),(0,l.kt)("h2",{id:"create-helloworld-contract"},"Create HelloWorld Contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'#include <platon/platon.hpp>\n#include <string>\nusing namespace platon;\n\nclass message {\n   public:\n      std::string head;\n      PLATON_SERIALIZE(message, (head))\n};\n\nclass my_message : public message {\n   public:\n      std::string body;\n      std::string end;\n      PLATON_SERIALIZE_DERIVED(my_message, message, (body)(end))\n};\n\nCONTRACT HelloWorld : public platon::Contract{\n   public:\n      ACTION void init(const my_message &one_message){\n        info.self().push_back(one_message);\n      }\n\n      ACTION void add_message(const my_message &one_message){\n          info.self().push_back(one_message);\n      }\n\n      CONST uint8_t get_message_size(){\n          return info.self().size();\n      }\n\n      CONST std::string get_message_body(const uint8_t index){\n          return info.self()[index].body;\n      }\n\n   private:\n      platon::StorageType<"myvector"_n, std::vector<my_message>> info;\n};\n\nPLATON_DISPATCH(HelloWorld, (init)(add_message)(get_message_size)(get_message_body))\n\n')),(0,l.kt)("p",null,"Contract Files Description:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each contract file has only one contract class. The contract class is decorated with Contract. It must be publicly inherited from platon :: Contract and must have an init function."),(0,l.kt)("li",{parentName:"ul"},"ACTION and CONST qualified member functions represent callable functions, and such member functions cannot be overloaded. The ACTION function will modify the data on the chain. The CONST function just queries the attributes and does not modify the data on the chain."),(0,l.kt)("li",{parentName:"ul"},"The type in the callable function parameter list is a custom type. In this type definition, you need to add the PLATON_SERIALIZE macro to declare the serialization function. This type inherits from other types. You need to add the PLATON_SERIALIZE_DERIVED macro to declare the serialization function."),(0,l.kt)("li",{parentName:"ul"},"Callable functions can only be called externally if the unified entry function is defined in the PLATON_DISPATCH macro."),(0,l.kt)("li",{parentName:"ul"},"At present, platon will persistently store member variables of the contract class. The member variables must be of type platon :: StorageType. The first parameter string of the platon :: StorageType template is followed by ","_","n, and the string must come from the 32 characters of .12345abcdefghijklmnopqrstuvwxyz. The second parameter is the concrete type of the actual storage. To modify member variables, member functions need to obtain specific types of instances through the self() function, and then execute the corresponding instance functions."),(0,l.kt)("li",{parentName:"ul"},"The second parameter type of the platon :: StorageType template is a custom type. A PLATON_SERIALIZE macro must be added to this type definition to declare a serialization function. This type inherits from other types. A PLATON_SERIALIZE_DERIVED macro must be added to declare a serialization function.")),(0,l.kt)("h2",{id:"compile-helloworld-contract"},"Compile HelloWorld Contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1.")," Create a new directory for a HelloWorld project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir HelloWorld && cd HelloWorld\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The following commands are performed in the HelloWorld directory if without special instructions")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2.")," Initialize a project using alaya-truffle "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle init\n")),(0,l.kt)("p",null,"After the command is executed, the structure of the project directory is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"contracts/")," Wasm contract directory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"migrations/")," dDirectory of the depolyment file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"test/")," Directory of test scripts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," Alaya-truffle configuration file"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3.")," Move the HelloWorld contract compiled under ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorld/contracts/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ls contracts/\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You will see ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorld.cpp"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4.")," Modify the alaya-truffle configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," and add the compiled wasm contract version number"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,l.kt)("p",null,"The modified contents of ",(0,l.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," are as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'compilers: {\n     wasm: {\n           version: "1.0.0"\n     }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step5.")," Compile contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle compile\n")),(0,l.kt)("p",null,"After the command is executed, the structure of the project directory is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/")," wasm: The directory of the wasm contract compiled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/contracts/HelloWorld.abi.json"),": the ABI interface file of the HelloWorld contract compiled "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/contracts/HelloWorld.wasm"),": The binary file of the HelloWorld contract compiled ")),(0,l.kt)("h2",{id:"deploly-helloworld-contract"},"Deploly HelloWorld Contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1.")," Modify the configuration information of ",(0,l.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," in the chain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,l.kt)("p",null,"Modify the blockchain-related configuration in ",(0,l.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," to the chain configuration of your real connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'networks: {\n    development: {\n       host: "10.1.1.6",     // Blockchain server host\n       port: 8806,            // Chain port number\n       network_id: "*",       // Any network (default: none)\n       from: "atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp",\n       gas: 999999,\n       gasPrice: 50000000004,\n    },\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'networks: {\n    development: {\n       host: "10.1.1.6",     // blockchain server address\n       port: 8806,            // server port\n       network_id: "*",       // Any network (default: none)\n       from: "atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp",\n       gas: 999999,\n       gasPrice: 1000000000,\n    },\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step2.")," Unlock wallet account"),(0,l.kt)("p",null,"Enter the alaya-truffle console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle console\n")),(0,l.kt)("p",null,"Import the private key (you can skip this step if you have already imported it)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'web3.platon.personal.importRawKey("Your wallet private key","Your wallet password");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'web3.platon.personal.importRawKey("Your wallet private key","Your wallet password");\n')),(0,l.kt)("p",null,"You will see the address corresponding to the private key after importing it\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp'\n")),(0,l.kt)("p",null,"Unlock wallet account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," web3.platon.personal.unlockAccount('Your wallet address','Your wallet password',999999);\n")),(0,l.kt)("p",null,"After unlocking it successfully, you will see the following information\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ture\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3.")," Deploy the HelloWorld contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'alaya-truffle deploy --wasm --contract-name HelloWorld --params \'[[["1"], "2", "3"]]\'\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HelloWorld"),": Contract to be deployed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"params"),": Parameters of contract init function")),(0,l.kt)("p",null,"After successful deployment, you will see log info as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"receipt:  { blockHash:\n   '0x266733b693ba650315a59c34e72804c06ca3e27fab145625797bd42259b572c5',\n  blockNumber: 70441,\n  contractAddress: 'atp12ts3s0zd7s8hm2vwv8wxe3rpvrwpv6tpsx8shx',\n  cumulativeGasUsed: 291314,\n  from: 'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp',\n  gasUsed: 291314,\n  logs: [],\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: null,\n  transactionHash:\n   '0x60946ebf0ccddc76a0234353435de73e7901888227fb2f03922fb0ce265a4e9d',\n  transactionIndex: 0 }\n  contract HelloWorld deployed successfully\n======================\n\n   > transactionHash:     0x60946ebf0ccddc76a0234353435de73e7901888227fb2f03922fb0ce265a4e9d\n   > contract address:    atp12ts3s0zd7s8hm2vwv8wxe3rpvrwpv6tpsx8shx\n   > block number:        70441\n   > block timestamp:     1583247148341\n   > account:             atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp\n   > balance:             3533694129556768659166595001485837031654967793751237866225582808584074296\n   > gas limit:           100000000\n   > gas used:            291314\n   > gas price:           0.000000050000000004 ATP\n   > total cost:          0.014565700001165256 ATP\n")),(0,l.kt)("h2",{id:"call-helloworld-contract"},"Call HelloWorld Contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1.")," Enter the alaya-truffle console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle console\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can execute the command in alaya-truffle console")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2.")," Create contract object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'var abi = [{"baseclass":[],"fields":[{"name":"head","type":"string"}],"name":"message","type":"struct"},{"baseclass":["message"],"fields":[{"name":"body","type":"string"},{"name":"end","type":"string"}],"name":"my_message","type":"struct"},{"constant":false,"input":[{"name":"one_message","type":"my_message"}],"name":"init","output":"void","type":"Action"},{"constant":false,"input":[{"name":"one_message","type":"my_message"}],"name":"add_message","output":"void","type":"Action"},{"constant":true,"input":[],"name":"get_message_size","output":"uint8","type":"Action"},{"constant":true,"input":[{"name":"index","type":"uint8"}],"name":"get_message_body","output":"string","type":"Action"}];\nvar contractAddr = \'atp12ts3s0zd7s8hm2vwv8wxe3rpvrwpv6tpsx8shx\';\n\nvar helloworld = new web3.platon.Contract(abi,contractAddr,{vmType: 1 });\n')),(0,l.kt)("p",null,"Description\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"abi")," is the interface provided by the contract for external calls. The abi corresponding to each contract can be found in the compiled file, such as: ",(0,l.kt)("inlineCode",{parentName:"li"},"HelloWorld/build/contracts/HelloWorld.json")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contractAddr"),": There is a contract address after the contract is successfully deployed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld")," is the abstraction of contract objects constructed to interact with on-chain contracts")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3.")," Call contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"helloworld.methods\n  .add_message('[[[\"5\"], \"6\", \"7\"]]')\n  .send({\n    from: 'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp',\n    gas: 999999\n  })\n  .on('receipt', function (receipt) {\n    console.log(receipt)\n  })\n  .on('error', console.error)\n")),(0,l.kt)("p",null,"Description\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld")," is the contract object built before"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"methods")," is the fixed syntax, followed by the method name of the contract"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add_message")," is a method in the HelloWorld contract, with an input parameter of custom my_message type"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from")," is the wallet address of the caller"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gas")," is the gas amount"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"on")," \u662f\u76d1\u542c\u5408\u7ea6\u5904\u7406\u7ed3\u679c\u4e8b\u4ef6\uff0c\u6b64\u5904\u5982\u679c\u6210\u529f\u5c06\u6253\u5370\u56de\u6267\uff0c\u5931\u8d25\u8f93\u51fa\u9519\u8bef\u65e5\u5fd7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"on")," is to monitor the event of the contract processing result. If it succeeds, a receipt will be printed, or an error log will be output if it fails")),(0,l.kt)("p",null,"After the function call is successful, you will see the log info as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{ blockHash:\n   '0x669c7b8cb938cc30845e08dc4ceda08f2e17207c267ade97dc5458b445405736',\n  blockNumber: 74665,\n  contractAddress: null,\n  cumulativeGasUsed: 108549,\n  from: 'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp',\n  gasUsed: 108549,\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'atp12ts3s0zd7s8hm2vwv8wxe3rpvrwpv6tpsx8shx',\n  transactionHash:\n   '0x2b5e590df7e70ad428b1ccb06bda5dcce47f84c4d981c2fb475aca9ec9d0000a',\n  transactionIndex: 0,\n  events: {} }\n{ blockHash:\n   '0x669c7b8cb938cc30845e08dc4ceda08f2e17207c267ade97dc5458b445405736',\n  blockNumber: 74665,\n  contractAddress: null,\n  cumulativeGasUsed: 108549,\n  from: 'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp',\n  gasUsed: 108549,\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'atp12ts3s0zd7s8hm2vwv8wxe3rpvrwpv6tpsx8shx',\n  transactionHash:\n   '0x2b5e590df7e70ad428b1ccb06bda5dcce47f84c4d981c2fb475aca9ec9d0000a',\n  transactionIndex: 0,\n  events: {} }\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{ blockHash:\n   '0x669c7b8cb938cc30845e08dc4ceda08f2e17207c267ade97dc5458b445405736',\n  blockNumber: 74665,\n  contractAddress: null,\n  cumulativeGasUsed: 108549,\n  from: 'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp',\n  gasUsed: 108549,\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'atp12ts3s0zd7s8hm2vwv8wxe3rpvrwpv6tpsx8shx',\n  transactionHash:\n   '0x2b5e590df7e70ad428b1ccb06bda5dcce47f84c4d981c2fb475aca9ec9d0000a',\n  transactionIndex: 0,\n  events: {} }\n{ blockHash:\n   '0x669c7b8cb938cc30845e08dc4ceda08f2e17207c267ade97dc5458b445405736',\n  blockNumber: 74665,\n  contractAddress: null,\n  cumulativeGasUsed: 108549,\n  from: 'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp',\n  gasUsed: 108549,\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'atp12ts3s0zd7s8hm2vwv8wxe3rpvrwpv6tpsx8shx',\n  transactionHash:\n   '0x2b5e590df7e70ad428b1ccb06bda5dcce47f84c4d981c2fb475aca9ec9d0000a',\n  transactionIndex: 0,\n  events: {} }\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4.")," Query contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"helloworld.methods.get_message_body(0).call()\n")),(0,l.kt)("p",null,"Description\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld")," is the contract object built before"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"methods")," specifies the methods in the contract that will be accessed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"get_message_body")," is a method in the HelloWorld contract, which has an input parameter of type int"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"call")," indicates the query method")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"about-compile"},"About Compile"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"How to use ",(0,l.kt)("inlineCode",{parentName:"p"},"platon-cpp")," for compile multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"cpp")," files?"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"platon-cpp ./test.cpp ./test1.cpp\n")),(0,l.kt)("p",{parentName:"li"},"Only allowing exists one contract class.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"How to specified the output directory and file name when using ",(0,l.kt)("inlineCode",{parentName:"p"},"platon-cpp")," to compile a contract?"))),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-o")," parameter, and you must also specify the file name when specifying the directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"platon-cpp ./test.cpp -o ./out/test.wasm\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"What if Alaya-truffle failed to execute truffle deploy deployment contract?"),(0,l.kt)("p",{parentName:"li"},"Confirm whether the configuration information of the connected chain in truffle-config.js and the user's wallet address are correct, and whether the wallet is unlocked.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"What if truffle failed to deploy a constructor contract with parameters?"),(0,l.kt)("p",{parentName:"li"},"If the init function in the contract has parameters, you need to specify the params parameter when deploying the contract.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"What data types does ABI support?"),(0,l.kt)("p",{parentName:"li"},"The types and conversion rules supported by the generated ABI are as follows:"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"ABI"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"int8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"int16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"int32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8","[","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::string"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::vector","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"T","[","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::array","[","T, N","]"),(0,l.kt)("td",{parentName:"tr",align:null},"T","[","N","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::pair","<","T, U",">"),(0,l.kt)("td",{parentName:"tr",align:null},"pair","<","T, U")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::set","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"set","<","T",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::map","<","T, V",">"),(0,l.kt)("td",{parentName:"tr",align:null},"map","<","T, V",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::list","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"list","<","T",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FixedHash","<","N",">"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedHash","<","N",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u128"),(0,l.kt)("td",{parentName:"tr",align:null},"uint128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bigint"),(0,l.kt)("td",{parentName:"tr",align:null},"uint128")))),(0,l.kt)("h3",{id:"about-contract"},"About Contract"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"How to output contract debug logs in the ",(0,l.kt)("inlineCode",{parentName:"p"},"platon")," process?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"#undef NDEBUG")," at the first line of contract codes, and it must come before the header file include.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"      #undef NDEBUG\n       \n#include <platon/platon.hpp>\n       \n//...\n      ```\n      \n- `Alaya` start command specifies log level 4, and turn on the `debug` flag\n    \n  ```cpp\n      ./platon --debug --verbosity 4 ...\n      ```\n    \n2. How to write a contract to effectively reduce the gas used?\n\n    - Use reference parameters\n\n      ```cpp\n      void test(const std::string& str) {}\n      ```\n\n    - Return rvalue reference\n\n   ```cpp\n   std::vector<std::string>&& test() {\n       std::vector<std::string> v;\n       // ...\n       return std::move(v);\n   }\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Try not to apply for a large block of memory\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"What should I pay attention to when using ",(0,l.kt)("inlineCode",{parentName:"p"},"StorageType"),"?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Should be initialized in ",(0,l.kt)("inlineCode",{parentName:"li"},"init()"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},' CONTRAT Hello : public Contract {\n public:\n   ACTION void init() {\n       s_.self() = "test";\n   }\n private:\n   StorageType<"test"_n, std::string> s_;\n };\n')))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\n- It is recommended to use a specialized type of `StorageType` directly\n\n  + Uint8\n  + Int8\n  + Uint16\n  + Int16\n  + Uint\n  + Int\n  + Uint64\n  + Int64\n  + String\n  + Vector\n  + Set\n  + Map\n  + Array\n  + Tuple\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"What is the difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"StorageType")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Map"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Array"),"?"))),(0,l.kt)("p",null,"From the perspective of the underlying storage level, the implementation of ",(0,l.kt)("inlineCode",{parentName:"p"},"StorageType")," is serialized as a whole and then stored in the database. And ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Map")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Array"),", after each element is serialized, are stored in the database as K/V. For large-scale data, ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Map")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Array")," perform better."),(0,l.kt)("p",null,"   When implementing the contract, the appropriate storage structure should be selected according to the scale of the data."),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Which C++ standard library types are supported by RLP serialization/deserialization?")),(0,l.kt)("p",null,"The following C++ standard library types are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"std::string",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"std::vector"),(0,l.kt)("li",{parentName:"ul"},"std::map"),(0,l.kt)("li",{parentName:"ul"},"std::list"),(0,l.kt)("li",{parentName:"ul"},"std::array"),(0,l.kt)("li",{parentName:"ul"},"std::set"),(0,l.kt)("li",{parentName:"ul"},"std::pair"),(0,l.kt)("li",{parentName:"ul"},"std::tuple")))),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"How does custom type support RLP serialization/deserialization?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use macro ",(0,l.kt)("inlineCode",{parentName:"li"},"PLATON_SERIALIZE")," for common types")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"   struct Base {\n   int a;\n   std::string b;\n\n   PLATON_SERIALIZE(Base, (a)(b));\n   };\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For the derived class, use the macro ",(0,l.kt)("inlineCode",{parentName:"li"},"PLATON_SERIALIZE_DERIVED"),", and for the base class, use the macro ",(0,l.kt)("inlineCode",{parentName:"li"},"PLATON_SERIALIZE")," as well.")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Derived : public Base {\n  int c;\n  int d;\n\n  PLATON_SERIALIZE_DERIVED(Derived, Base, (c)(d));\n};\n")))))}d.isMDXComponent=!0}}]);
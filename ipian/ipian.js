/* * 加密工具已经升级了一个版本，目前为 jsjiami.com.v6 ，主要加强了算法; * 已经打算把这个工具基础功能一直免费下去。还希望支持我。 * 另外 jsjiami.com.v6 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v6 不能去掉，其他都没有任何绑定。 * 誓死不会加入任何后门，JsJiami.com 加密的使命就是为了保护你们的Javascript 。 */ var _0xodf='ipian.net',_0x10a3=[_0xodf,'\x75\x73\x65\x72\x41\x67\x65\x6e\x74','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x74\x65\x73\x74','\x61\x6a\x61\x78','\x2f\x61\x64\x6d\x69\x6e\x2f\x61\x70\x69\x2e\x70\x68\x70','\x6a\x73\x6f\x6e','\x77\x61\x69\x74\x74\x69\x6d\x65','\x64\x61\x74\x61','\x61\x64\x73','\x6c\x6f\x67\x6f','\x70\x62\x67\x6a\x7a','\x74\x72\x79\x73\x65\x65','\x74\x72\x79\x74\x69\x6d\x65','\x73\x65\x6e\x64\x74\x69\x6d\x65','\x63\x6f\x6c\x6f\x72','\x64\x6d\x72\x75\x6c\x65','\x67\x72\x6f\x75\x70','\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65','\x67\x72\x6f\x75\x70\x5f\x69\x64','\x64\x61\x6e\x6d\x75\x6f\x6e','\x6c\x6f\x67','\x67\x72\x6f\x75\x70\x5f\x78','\x73\x74\x61\x74\x65','\x73\x65\x74','\x4d\x59\x61\x64','\x76\x6f\x64','\x75\x72\x6c','\x6c\x69\x6e\x6b','\x70\x69\x63','\x74\x69\x6d\x65','\x69\x6d\x67','\x70\x6c\x61\x79','\x6f\x66\x66','\x70\x6c\x61\x79\x65\x72','\x23\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x62\x6f\x78','\x72\x65\x6d\x6f\x76\x65','\x62\x64\x70\x6c\x61\x79','\x64\x6d\x70\x6c\x61\x79','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x2d\x73\x70\x65\x65\x64\x73\x2c\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x2d\x73\x70\x65\x65\x64\x2d\x69\x74\x65\x6d','\x63\x6c\x69\x63\x6b','\x2e\x73\x70\x65\x65\x64\x2d\x73\x74\x74\x69\x6e\x67','\x74\x6f\x67\x67\x6c\x65\x43\x6c\x61\x73\x73','\x73\x70\x65\x65\x64\x2d\x73\x74\x74\x69\x6e\x67\x2d\x6f\x70\x65\x6e','\x2e\x73\x70\x65\x65\x64\x2d\x73\x74\x74\x69\x6e\x67\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x2d\x73\x70\x65\x65\x64\x2d\x69\x74\x65\x6d','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x2d\x73\x70\x65\x65\x64\x73\x2e\x74\x69\x74\x6c\x65','\x74\x65\x78\x74','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x66\x75\x6c\x6c\x6f\x66\x66\x2d\x69\x63\x6f\x6e','\x66\x75\x6c\x6c\x53\x63\x72\x65\x65\x6e','\x63\x61\x6e\x63\x65\x6c','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x68\x6f\x77\x69\x6e\x67','\x2e\x76\x6f\x64\x2d\x70\x69\x63','\x74\x69\x74\x6c\x65','\x23\x76\x6f\x64\x74\x69\x74\x6c\x65','\x68\x74\x6d\x6c','\x73\x69\x64','\x64\x69\x79\x69\x64','\x23\x6c\x69\x6e\x6b\x31','\x66\x61\x64\x65\x49\x6e','\x23\x6c\x69\x6e\x6b\x31\x2d\x73\x75\x63\x63\x65\x73\x73','\x23\x6c\x69\x6e\x6b\x32','\x73\x68\x6f\x77','\x23\x6c\x69\x6e\x6b\x33\x2c\x23\x73\x70\x61\x6e','\x64\x61\x6e\x6d\x75','\x73\x65\x6e\x64','\x6c\x69\x73\x74','\x64\x65\x66','\x64\x61\x6e\x6d\x61\x6b\x75','\x6f\x70\x61\x63\x69\x74\x79','\u7231\u7247\u7f51\u64ad\u653e\u5668\u5f00\u542f','\x73\x74\x69\x6d\x65','\x68\x65\x61\x64\x74','\x67\x65\x74','\x6c\x61\x73\x74\x74','\x6c\x61\x73\x74\x5f\x74\x69\x70','\x66\x72\x69\x73\x74\x73','\x6c\x61\x73\x74\x73','\x70\x6c\x61\x79\x74\x69\x6d\x65','\x74\x69\x6d\x65\x5f','\x63\x74\x69\x6d\x65','\x66\x6f\x72\x6d\x61\x74\x54\x69\x6d\x65','\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61','\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61\x48\x61\x6e\x64\x6c\x65\x72','\x65\x6e\x64\x65\x64','\x65\x6e\x64\x65\x64\x48\x61\x6e\x64\x6c\x65\x72','\x70\x61\x75\x73\x65','\x6f\x75\x74','\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65','\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65\x48\x61\x6e\x64\x6c\x65\x72','\x57\x65\x69\x78\x69\x6e','\x6a\x75\x6d\x70','\x68\x65\x61\x64','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x68\x72\x65\x66','\x6d\x79\x6c\x69\x6e\x6b','\x6e\x65\x78\x74','\x73\x65\x65\x6b','\x6d\x73\x67','\u64ad\u653e\u7ed3\u675f\u5566\x3d\u3002\x3d','\x20\x3c\x65\x3e\u5df2\u64ad\u653e\u81f3','\uff0c\u7ee7\u7eed\u4e0a\u6b21\u64ad\u653e\uff1f\x3c\x2f\x65\x3e\x3c\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x6f\x6e\x70\x6c\x61\x79\x2d\x6a\x75\x6d\x70\x22\x3e\u662f\x20\x3c\x69\x20\x69\x64\x3d\x22\x6e\x75\x6d\x22\x3e','\x3c\x2f\x69\x3e\x73\x3c\x2f\x64\x3e\x3c\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x6f\x6e\x70\x6c\x61\x79\x69\x6e\x67\x22\x3e\u5426\x3c\x2f\x64\x3e','\x23\x6c\x69\x6e\x6b\x33','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x6e\x75\x6d','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x76\x69\x64\x65\x6f','\x2e\x6d\x65\x6d\x6f\x72\x79\x2d\x70\x6c\x61\x79\x2d\x77\x72\x61\x70\x2c\x23\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x62\x6f\x78','\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x65\x6d\x6f\x72\x79\x2d\x70\x6c\x61\x79\x2d\x77\x72\x61\x70\x22\x3e\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x65\x6d\x6f\x72\x79\x2d\x70\x6c\x61\x79\x22\x3e\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x6c\x6f\x73\x65\x22\x3e\u00d7\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x73\x70\x61\x6e\x3e\u4e0a\u6b21\u770b\u5230\x20\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x73\x70\x61\x6e\x3e','\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x2d\x6a\x75\x6d\x70\x22\x3e\u8df3\u8f6c\u64ad\u653e\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69\x76\x3e','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x63\x70\x6c\x61\x79\x65\x72','\x61\x70\x70\x65\x6e\x64','\x2e\x63\x6c\x6f\x73\x65','\x2e\x6d\x65\x6d\x6f\x72\x79\x2d\x70\x6c\x61\x79\x2d\x77\x72\x61\x70','\x2e\x63\x6f\x6e\x70\x6c\x61\x79\x69\x6e\x67','\x2e\x63\x6f\x6e\x70\x6c\x61\x79\x2d\x6a\x75\x6d\x70\x2c\x2e\x70\x6c\x61\x79\x2d\x6a\x75\x6d\x70','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x2d\x6a\x66\x72\x69\x73\x74\x20\x6c\x61\x62\x65\x6c','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x2d\x6a\x6c\x61\x73\x74\x20\x6c\x61\x62\x65\x6c','\x23\x66\x72\x69\x73\x74\x74\x69\x6d\x65','\x23\x6a\x75\x6d\x70\x74\x69\x6d\x65','\u8bf7\u8f93\u5165\u6709\u6548\u65f6\u95f4\u54df\uff01','\u8bbe\u7f6e\u5b8c\u6210\uff0c\u5c06\u5728\u5237\u65b0\u6216\u4e0b\u4e00\u96c6\u751f\u6548','\x76\x61\x6c','\x63\x68\x65\x63\x6b\x65\x64','\x61\x64\x64\x43\x6c\x61\x73\x73','\x61\x74\x74\x72','\x6c\x61\x73\x74','\x6a\x75\x6d\x70\x5f\x66','\x6e\x6f\x74\x69\x63\x65','\u5df2\u4e3a\u60a8\u8df3\u8fc7\u7247\u5934','\x64\x75\x72\x61\x74\x69\x6f\x6e','\x63\x75\x72\x72\x65\x6e\x74\x54\x69\x6d\x65','\u5373\u5c06\u4e3a\u60a8\u8df3\u8fc7\u7247\u5c3e','\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65','\x2e\x69\x63\x6f\x6e\x2d\x78\x6a','\x2e\x6c\x65\x6c\x65\x2d\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x6e\x64\x2d\x69\x63\x6f\x6e','\x23\x64\x6d\x74\x65\x78\x74','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x63\x6f\x6d\x6d\x65\x6e\x74\x2d\x73\x65\x74\x74\x69\x6e\x67\x2d','\x63\x6f\x6c\x6f\x72\x20\x69\x6e\x70\x75\x74','\x76\x61\x6c\x75\x65','\x63\x73\x73','\x74\x79\x70\x65\x20\x69\x6e\x70\x75\x74','\x64\x6d\x74\x79\x70\x65','\x66\x6f\x6e\x74\x20\x69\x6e\x70\x75\x74','\u4f1a\u5458\u4e13\u5c5e\u529f\u80fd','\x73\x69\x7a\x65','\x64\x6d\x74\x65\x78\x74','\x6c\x65\x6e\x67\x74\x68','\x73\x65\x61\x72\x63\x68','\u60a8\u53d1\u9001\u7684\u5185\u5bb9\u542b\u6709\u654f\u611f\u5b57\u7b26\uff0c\u8bf7\u89c4\u8303\u60a8\u7684\u5f39\u5e55\u5185\u5bb9','\u8981\u8f93\u5165\u5185\u5bb9\u554a\x7e','\x70\x61\x72\x73\x65','\x64\x6d\x73\x65\x6e\x74','\u8bf7\u52ff\u9891\u7e41\u64cd\u4f5c\uff01\u53d1\u9001\u5f39\u5e55\u9700\u95f4\u9694','\x74\x72\x69\x67\x67\x65\x72','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x6c\x69\x73\x74\x2d\x69\x63\x6f\x6e\x2c\x2e\x6c\x65\x6c\x65\x2d\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x6e\x64\x2d\x69\x63\x6f\x6e','\x2e\x6c\x69\x73\x74\x2d\x73\x68\x6f\x77','\x65\x6d\x70\x74\x79','\x61\x70\x69','\x3f\x61\x63\x3d\x67\x65\x74\x26\x69\x64\x3d','\x63\x6f\x64\x65','\x64\x61\x6e\x6d\x75\x6b\x75','\x6e\x61\x6d\x65','\x64\x61\x6e\x75\x6d','\x2e\x64\x61\x6e\x6d\x75\x6b\x75\x2d\x6e\x75\x6d','\x65\x61\x63\x68','\x3c\x64\x20\x63\x6c\x61\x73\x73\x3d\x22\x64\x61\x6e\x6d\x75\x6b\x75\x2d\x6c\x69\x73\x74\x22\x20\x74\x69\x6d\x65\x3d\x22','\x22\x3e\x3c\x6c\x69\x3e','\x3c\x2f\x6c\x69\x3e\x3c\x6c\x69\x20\x74\x69\x74\x6c\x65\x3d\x22','\x3c\x2f\x6c\x69\x3e\x3c\x6c\x69\x20\x74\x69\x74\x6c\x65\x3d\x22\u7528\u6237\uff1a','\x20\x20\x49\x50\u5730\u5740\uff1a','\x3c\x2f\x6c\x69\x3e\x3c\x6c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x72\x65\x70\x6f\x72\x74\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6c\x65\x6c\x65\x2e\x64\x61\x6e\x6d\x75\x2e\x72\x65\x70\x6f\x72\x74\x28\x27','\x27\x2c\x27','\x27\x29\x22\x3e\u4e3e\u62a5\x3c\x2f\x6c\x69\x3e\x3c\x2f\x64\x3e','\x2e\x64\x61\x6e\x6d\x75\x6b\x75\x2d\x6c\x69\x73\x74','\x64\x62\x6c\x63\x6c\x69\x63\x6b','\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x64\x6d\x72\x75\x6c\x65\x73\x22\x3e\x3c\x61\x20\x74\x61\x72\x67\x65\x74\x3d\x22\x5f\x62\x6c\x61\x6e\x6b\x22\x20\x68\x72\x65\x66\x3d\x22','\x22\x3e\u5f39\u5e55\u793c\u4eea\x20\x3c\x2f\x61\x3e\x3c\x2f\x64\x69\x76\x3e','\x64\x69\x76\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x63\x6f\x6d\x6d\x65\x6e\x74\x2d\x62\x6f\x78\x3a\x6c\x61\x73\x74','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x77\x61\x74\x63\x68\x69\x6e\x67\x2d\x6e\x75\x6d\x62\x65\x72','\x75\x73\x65\x72\x6e\x75\x6d','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x69\x6e\x66\x6f\x2d\x70\x61\x6e\x65\x6c\x2d\x69\x74\x65\x6d\x2d\x74\x69\x74\x6c\x65\x2d\x61\x6d\x6f\x75\x6e\x74\x20\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x69\x6e\x66\x6f\x2d\x70\x61\x6e\x65\x6c\x2d\x69\x74\x65\x6d\x2d\x74\x69\x74\x6c\x65','\u8fdd\u89c4\u8bcd','\x3c\x65\x3e','\x3c\x2f\x65\x3e','\x23\x76\x6f\x64\x2d\x74\x69\x74\x6c\x65','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x6c\x69\x73\x74\x2d\x69\x63\x6f\x6e','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x64\x61\x6e\x6d\x75','\x63\x6f\x6e\x66\x69\x72\x6d','\x3c\x21\x2d\x2d\x62\x72\x3e\x3c\x62\x72\x3e\x3c\x73\x70\x61\x6e\x20\x73\x74\x79\x6c\x65\x3d\x22\x63\x6f\x6c\x6f\x72\x3a\x23\x33\x33\x33\x22\x3e\u8bf7\u9009\u62e9\u9700\u8981\u4e3e\u62a5\u7684\u7c7b\u578b\x3c\x2f\x73\x70\x61\x6e\x2d\x2d\x3e','\u4e3e\u62a5\u5f39\u5e55','\u8fdd\u6cd5\u8fdd\u7981','\u8272\u60c5\u4f4e\u4fd7','\u6076\u610f\u5237\u5c4f','\u8d4c\u535a\u8bc8\u9a97','\u4eba\u8eab\u653b\u51fb','\u4fb5\u72af\u9690\u79c1','\u5783\u573e\u5e7f\u544a','\x70\x6f\x73\x74\x5f\x72','\x3f\x61\x63\x3d\x72\x65\x70\x6f\x72\x74\x26\x63\x69\x64\x3d','\x26\x75\x73\x65\x72\x3d','\x26\x74\x79\x70\x65\x3d','\x26\x74\x69\x74\x6c\x65\x3d','\x26\x74\x65\x78\x74\x3d','\u4e3e\u62a5\u6210\u529f\uff01\u611f\u8c22\u60a8\u4e3a\u5b88\u62a4\u5f39\u5e55\u4f5c\u51fa\u4e86\u8d21\u732e','\u670d\u52a1\u6545\u969c\x20\x6f\x72\x20\u7f51\u7edc\u5f02\u5e38\uff0c\u7a0d\u540e\u518d\u8bd5\x36\uff01','\x73\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x48\x6f\x75\x72\x73','\x63\x6f\x6f\x6b\x69\x65','\x3b\x65\x78\x70\x69\x72\x65\x73\x3d','\x74\x6f\x47\x4d\x54\x53\x74\x72\x69\x6e\x67','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x6a\x6f\x69\x6e','\x72\x65\x70\x6c\x61\x63\x65','\x30\x24\x31','\x63\x6f\x6e\x5f\x70\x6c\x61\x79','\u51c6\u5907\u5c31\u7eea\uff0c\u5373\u5c06\u4e3a\u60a8\u64ad\u653e','\x35\x73\u540e\x2c\u5c06\u81ea\u52a8\u4e3a\u60a8\u64ad\u653e\u4e0b\u4e00\u96c6','\u89c6\u9891\u64ad\u653e\u5df2\u7ed3\u675f','\x65\x6e\x64','\x62\x6f\x64\x79','\x64\x61\x6e\x6d\x75\x2d\x6f\x66\x66','\x61\x75\x74\x6f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x72\x61\x63\x6b\x65\x72\x2e\x6b\x6c\x69\x6e\x6b\x2e\x74\x65\x63\x68','\x77\x73\x73\x3a\x2f\x2f\x73\x69\x67\x6e\x61\x6c\x2e\x6b\x6c\x69\x6e\x6b\x2e\x74\x65\x63\x68\x2f\x77\x73','\x6c\x6f\x61\x64\x53\x6f\x75\x72\x63\x65','\x73\x72\x63','\x61\x74\x74\x61\x63\x68\x4d\x65\x64\x69\x61','\x70\x32\x70\x45\x6e\x67\x69\x6e\x65','\x73\x74\x61\x74\x73','\x74\x6f\x74\x61\x6c\x50\x32\x50\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x65\x64','\x74\x6f\x74\x61\x6c\x50\x32\x50\x55\x70\x6c\x6f\x61\x64\x65\x64','\x70\x65\x65\x72\x49\x64','\x70\x65\x65\x72\x73','\x3c\x73\x74\x79\x6c\x65\x20\x74\x79\x70\x65\x3d\x22\x74\x65\x78\x74\x2f\x63\x73\x73\x22\x3e','\x23\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x62\x6f\x78\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x20\x6e\x6f\x6e\x65\x3b\x7d','\x3c\x2f\x73\x74\x79\x6c\x65\x3e','\x41\x44\x70\x6c\x61\x79\x65\x72','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2c\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x63\x70\x6c\x61\x79\x65\x72\x2c\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x6c\x6f\x67\x6f\x2c\x23\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x62\x6f\x78\x2c\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2d\x6d\x61\x73\x6b','\x2e\x6c\x65\x6c\x65\x70\x6c\x61\x79\x65\x72\x2d\x6d\x61\x73\x6b','\x72\x65\x6d\x6f\x76\x65\x43\x6c\x61\x73\x73','\x64\x65\x73\x74\x72\x6f\x79','\x23\x41\x44\x70\x6c\x61\x79\x65\x72','\x23\x41\x44\x74\x69\x70','\x64\x6d\x69\x64','\x3f\x61\x63\x3d\x64\x6d','\x75\x73\x65\x72','\x6c\x6f\x61\x64','\x62\x69\x6c\x69\x62\x69\x6c\x69\x2f\x3f\x61\x76\x3d','\x3c\x61\x20\x69\x64\x3d\x22\x6c\x69\x6e\x6b\x22\x20\x68\x72\x65\x66\x3d\x22','\x22\x20\x74\x61\x72\x67\x65\x74\x3d\x22\x5f\x62\x6c\x61\x6e\x6b\x22\x3e\u67e5\u770b\u8be6\u60c5\x3c\x2f\x61\x3e','\x61\x64\x70\x6c\x61\x79','\x22\x20\x74\x61\x72\x67\x65\x74\x3d\x22\x5f\x62\x6c\x61\x6e\x6b\x22\x3e\u5e7f\u544a\x20\x3c\x65\x20\x69\x64\x3d\x22\x74\x69\x6d\x65\x5f\x61\x64\x22\x3e','\x3c\x2f\x65\x3e\x3c\x2f\x61\x3e\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22','\x74\x69\x6d\x65\x5f\x61\x64','\x3c\x64\x69\x76\x20\x69\x64\x3d\x22\x70\x6c\x61\x79\x65\x72\x5f\x70\x61\x75\x73\x65\x22\x3e\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x69\x70\x22\x3e\u5e7f\u544a\x3c\x2f\x64\x69\x76\x3e\x3c\x61\x20\x68\x72\x65\x66\x3d\x22','\x22\x20\x74\x61\x72\x67\x65\x74\x3d\x22\x5f\x62\x6c\x61\x6e\x6b\x22\x3e\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22','\x22\x3e\x3c\x2f\x61\x3e\x3c\x2f\x64\x69\x76\x3e','\x23\x70\x6c\x61\x79\x65\x72','\x62\x65\x66\x6f\x72\x65','\x23\x70\x6c\x61\x79\x65\x72\x5f\x70\x61\x75\x73\x65','\x77\x72\x69\x74\x65','\x3c\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3d\x22\x2f\x2f\x77\x77\x77\x2e\x69\x70\x69\x61\x6e\x2e\x6e\x65\x74\x2f\x75\x70\x64\x61\x74\x65\x2e\x6a\x73\x3f\x72\x6e\x64\x3d','\x72\x61\x6e\x64\x6f\x6d','\x22\x3e\x3c\x2f\x73\x63\x72\x69\x70\x74\x3e','\x69\x71\x70\x69\x61\x4a\x6e\x4b\x46\x63\x2e\x79\x6e\x65\x4e\x64\x43\x55\x74\x6b\x78\x78\x67\x57\x44\x3d\x3d'];var _0x20eb=function(_0x54150f,_0x49373b){_0x54150f=~~'0x'['concat'](_0x54150f);var _0x5c2426=_0x10a3[_0x54150f];return _0x5c2426;};(function(_0x22d076,_0x1bd55e){var _0x4d90b0=0x0;for(_0x1bd55e=_0x22d076['shift'](_0x4d90b0>>0x2);_0x1bd55e&&_0x1bd55e!==(_0x22d076['pop'](_0x4d90b0>>0x3)+'')['replace'](/[qJKFcyNdCUkxxgWD=]/g,'');_0x4d90b0++){_0x4d90b0=_0x4d90b0^0x32b47;}}(_0x10a3,_0x20eb));var lele={'Weixin':function(){var _0x1a3023=navigator[_0x20eb('0')][_0x20eb('1')]();return/micromessenger/[_0x20eb('2')](_0x1a3023)?!![]:![];},'start':function(){$[_0x20eb('3')]({'\x75\x72\x6c':_0x20eb('4'),'\x64\x61\x74\x61\x54\x79\x70\x65':_0x20eb('5'),'\x73\x75\x63\x63\x65\x73\x73':function(_0xacb276){lele[_0x20eb('6')]=_0xacb276[_0x20eb('7')][_0x20eb('6')];lele[_0x20eb('8')]=_0xacb276[_0x20eb('7')][_0x20eb('8')];config[_0x20eb('9')]=_0xacb276[_0x20eb('7')][_0x20eb('9')];up[_0x20eb('a')]=_0xacb276[_0x20eb('7')][_0x20eb('a')];up[_0x20eb('b')]=_0xacb276[_0x20eb('7')][_0x20eb('c')];config[_0x20eb('d')]=_0xacb276[_0x20eb('7')][_0x20eb('d')];config[_0x20eb('e')]=_0xacb276[_0x20eb('7')][_0x20eb('e')];config[_0x20eb('f')]=_0xacb276[_0x20eb('7')][_0x20eb('f')];config[_0x20eb('10')]=lele[_0x20eb('11')](_0x20eb('12'));danmuon=_0xacb276[_0x20eb('7')][_0x20eb('13')];console[_0x20eb('14')](danmuon);if(config[_0x20eb('10')]<config[_0x20eb('15')]&&lele[_0x20eb('8')][_0x20eb('16')]=='\x6f\x6e'&&config[_0x20eb('10')]!=''){if(lele[_0x20eb('8')][_0x20eb('17')][_0x20eb('16')]=='\x31'){lele[_0x20eb('18')][_0x20eb('19')](lele[_0x20eb('8')][_0x20eb('17')][_0x20eb('19')][_0x20eb('1a')],lele[_0x20eb('8')][_0x20eb('17')][_0x20eb('19')][_0x20eb('1b')]);}else if(lele[_0x20eb('8')][_0x20eb('17')][_0x20eb('16')]=='\x32'){lele[_0x20eb('18')][_0x20eb('1c')](lele[_0x20eb('8')][_0x20eb('17')][_0x20eb('1c')][_0x20eb('1b')],lele[_0x20eb('8')][_0x20eb('17')][_0x20eb('1c')][_0x20eb('1d')],lele[_0x20eb('8')][_0x20eb('17')][_0x20eb('1c')][_0x20eb('1e')]);}}else{lele[_0x20eb('1f')](config[_0x20eb('1a')]);}}});},'play':function(_0x2766bf){if(danmuon==_0x20eb('20')){lele[_0x20eb('21')][_0x20eb('1f')](_0x2766bf);$(_0x20eb('22'))[_0x20eb('23')]();}else{if(config['\x61\x76']!=''){lele[_0x20eb('21')][_0x20eb('24')](_0x2766bf);}else{lele[_0x20eb('21')][_0x20eb('25')](_0x2766bf);}}$(function(){$(_0x20eb('26'))['\x6f\x6e'](_0x20eb('27'),function(){$(_0x20eb('28'))[_0x20eb('29')](_0x20eb('2a'));});$(_0x20eb('2b'))[_0x20eb('27')](function(){$(_0x20eb('2c'))[_0x20eb('2d')]($(this)[_0x20eb('2d')]());});});$(_0x20eb('2e'))['\x6f\x6e'](_0x20eb('27'),function(){lele['\x64\x70'][_0x20eb('2f')][_0x20eb('30')]();});$(_0x20eb('31'))['\x6f\x6e'](_0x20eb('27'),function(){lele['\x64\x70'][_0x20eb('1f')]();$(_0x20eb('32'))[_0x20eb('23')]();});if(config[_0x20eb('33')]!=''){$(_0x20eb('34'))[_0x20eb('35')](config[_0x20eb('33')]+'\x20\x20'+config[_0x20eb('36')]);};},'dmid':function(){if(up[_0x20eb('37')][0x0]==0x0&&config['\x69\x64']!=''){a=config['\x69\x64'],b=config[_0x20eb('36')];}else if(up[_0x20eb('37')][0x0]==0x1||!config['\x69\x64']){a=up[_0x20eb('37')][0x1],b=up[_0x20eb('37')][0x2];}lele['\x69\x64']=config['\x69\x64'];},'load':function(){setTimeout(function(){$(_0x20eb('38'))[_0x20eb('39')]();},0x64);setTimeout(function(){$(_0x20eb('3a'))[_0x20eb('39')]();},0x1f4);setTimeout(function(){$(_0x20eb('3b'))[_0x20eb('3c')]();},0x1*0x3e8);setTimeout(function(){$(_0x20eb('3d'))[_0x20eb('39')]();},0x2*0x3e8);lele[_0x20eb('3e')][_0x20eb('3f')]();lele[_0x20eb('3e')][_0x20eb('40')]();lele[_0x20eb('41')]();lele['\x64\x70'][_0x20eb('42')][_0x20eb('43')](0x1);},'def':function(){console[_0x20eb('14')](_0x20eb('44'));lele[_0x20eb('45')]=0x0;lele[_0x20eb('46')]=leleck[_0x20eb('47')](_0x20eb('46'));lele[_0x20eb('48')]=leleck[_0x20eb('47')](_0x20eb('48'));lele[_0x20eb('49')]=parseInt(lele[_0x20eb('48')])+0xa;lele[_0x20eb('4a')]=leleck[_0x20eb('47')](_0x20eb('4a'));lele[_0x20eb('4b')]=leleck[_0x20eb('47')](_0x20eb('4b'));lele[_0x20eb('4c')]=Number(lele[_0x20eb('11')](_0x20eb('4d')+config[_0x20eb('1a')]));lele[_0x20eb('4e')]=lele[_0x20eb('4f')](lele[_0x20eb('4c')]);lele['\x64\x70']['\x6f\x6e'](_0x20eb('50'),function(){lele[_0x20eb('51')]();});lele['\x64\x70']['\x6f\x6e'](_0x20eb('52'),function(){lele[_0x20eb('53')]();});lele['\x64\x70']['\x6f\x6e'](_0x20eb('54'),function(){lele[_0x20eb('18')][_0x20eb('54')][_0x20eb('1f')](lele[_0x20eb('8')][_0x20eb('54')][_0x20eb('1b')],lele[_0x20eb('8')][_0x20eb('54')][_0x20eb('1c')]);});lele['\x64\x70']['\x6f\x6e'](_0x20eb('1f'),function(){lele[_0x20eb('18')][_0x20eb('54')][_0x20eb('55')]();});lele['\x64\x70']['\x6f\x6e'](_0x20eb('56'),function(_0x4971e7){lele[_0x20eb('57')]();});if(lele[_0x20eb('58')]()){$(_0x20eb('22'))[_0x20eb('23')]();}lele[_0x20eb('59')][_0x20eb('41')]();},'video':{'play':function(){lele['\x64\x70'][_0x20eb('1f')]();$(_0x20eb('22'))[_0x20eb('23')]();lele[_0x20eb('59')][_0x20eb('5a')]();},'next':function(){top[_0x20eb('5b')][_0x20eb('5c')]=up[_0x20eb('5d')]+config[_0x20eb('5e')];},'seek':function(){lele['\x64\x70'][_0x20eb('5f')](lele[_0x20eb('4c')]);},'end':function(){layer[_0x20eb('60')](_0x20eb('61'));},'con_play':function(){if(danmuon==_0x20eb('20')){lele[_0x20eb('59')][_0x20eb('5a')]();}else{var _0x443e86=_0x20eb('62')+lele[_0x20eb('4e')]+_0x20eb('63')+lele[_0x20eb('6')]+_0x20eb('64');$(_0x20eb('65'))[_0x20eb('35')](_0x443e86);var _0x12c7fa=document[_0x20eb('66')](_0x20eb('67'));var _0x37af7c=_0x12c7fa[_0x20eb('68')];var _0x2b4694=null;setTimeout(function(){_0x2b4694=setInterval(function(){_0x37af7c--;_0x12c7fa[_0x20eb('68')]=_0x37af7c;if(_0x37af7c==0x0){clearInterval(_0x2b4694);lele[_0x20eb('69')][_0x20eb('5f')]();lele['\x64\x70'][_0x20eb('1f')]();$(_0x20eb('6a'))[_0x20eb('23')]();}},0x3e8);},0x1);};var _0x2e2884=_0x20eb('6b')+lele[_0x20eb('4e')]+_0x20eb('6c');$(_0x20eb('6d'))[_0x20eb('6e')](_0x2e2884);$(_0x20eb('6f'))['\x6f\x6e'](_0x20eb('27'),function(){$(_0x20eb('70'))[_0x20eb('23')]();});setTimeout(function(){$(_0x20eb('70'))[_0x20eb('23')]();},0x14*0x3e8);$(_0x20eb('71'))['\x6f\x6e'](_0x20eb('27'),function(){clearTimeout(_0x2b4694);$(_0x20eb('22'))[_0x20eb('23')]();lele['\x64\x70'][_0x20eb('1f')]();lele[_0x20eb('59')][_0x20eb('5a')]();});$(_0x20eb('72'))['\x6f\x6e'](_0x20eb('27'),function(){clearTimeout(_0x2b4694);lele[_0x20eb('69')][_0x20eb('5f')]();$(_0x20eb('6a'))[_0x20eb('23')]();lele['\x64\x70'][_0x20eb('1f')]();});}},'jump':{'def':function(){h=_0x20eb('73');l=_0x20eb('74');f=_0x20eb('75');j=_0x20eb('76');_0x27e56e(h,_0x20eb('4a'),lele[_0x20eb('4a')],_0x20eb('46'),lele[_0x20eb('46')],f);_0x27e56e(l,_0x20eb('4b'),lele[_0x20eb('4b')],_0x20eb('48'),lele[_0x20eb('48')],j);function _0x5b00cd(){layer[_0x20eb('60')](_0x20eb('77'));}function _0x470d9d(){layer[_0x20eb('60')](_0x20eb('78'));}function _0x27e56e(_0x419d6b,_0x3cefa6,_0xd7db33,_0x5ef541,_0x4f3a6b,_0x18681e){$(_0x419d6b)['\x6f\x6e'](_0x20eb('27'),function(){o=$(_0x18681e)[_0x20eb('79')]();if(o>0x0){$(_0x419d6b)[_0x20eb('29')](_0x20eb('7a'));_0x470d9d();_0x4f3a6b=$(_0x18681e)[_0x20eb('79')]();leleck[_0x20eb('17')](_0x5ef541,_0x4f3a6b);}else{_0x5b00cd();};});if(_0xd7db33==0x1){$(_0x419d6b)[_0x20eb('7b')](_0x20eb('7a'));$(_0x419d6b)[_0x20eb('27')](function(){o=$(_0x18681e)[_0x20eb('79')]();if(o>0x0){leleck[_0x20eb('17')](_0x3cefa6,0x0);}else{_0x5b00cd();};});}else{$(_0x419d6b)[_0x20eb('27')](function(){o=$(_0x18681e)[_0x20eb('79')]();if(o>0x0){leleck[_0x20eb('17')](_0x3cefa6,0x1);}else{_0x5b00cd();};});}};$(f)[_0x20eb('7c')]({'value':lele[_0x20eb('46')]});$(j)[_0x20eb('7c')]({'value':lele[_0x20eb('48')]});lele[_0x20eb('59')][_0x20eb('7d')]();},'head':function(){if(lele[_0x20eb('45')]>lele[_0x20eb('4c')])lele[_0x20eb('4c')]=lele[_0x20eb('45')];if(lele[_0x20eb('4a')]==0x1){if(lele[_0x20eb('46')]>lele[_0x20eb('4c')]||lele[_0x20eb('4c')]==0x0){lele[_0x20eb('7e')]=0x1;}else{lele[_0x20eb('7e')]=0x0;}}if(lele[_0x20eb('7e')]==0x1){lele['\x64\x70'][_0x20eb('5f')](lele[_0x20eb('46')]);lele['\x64\x70'][_0x20eb('7f')](_0x20eb('80'));}},'last':function(){if(config[_0x20eb('5e')]!=''){if(lele[_0x20eb('4b')]==0x1){setInterval(function(){var _0x985d27=lele['\x64\x70'][_0x20eb('69')][_0x20eb('81')]-lele['\x64\x70'][_0x20eb('69')][_0x20eb('82')];if(_0x985d27<lele[_0x20eb('49')])lele['\x64\x70'][_0x20eb('7f')](_0x20eb('83'));if(lele[_0x20eb('48')]>0x0&&_0x985d27<lele[_0x20eb('48')]){lele[_0x20eb('84')](_0x20eb('4d')+config[_0x20eb('1a')],'',-0x1);lele[_0x20eb('69')][_0x20eb('5e')]();};},0x3e8);};}else{$(_0x20eb('85'))[_0x20eb('23')]();};},'ad':function(_0x3edc5f,_0x3168c0){}},'danmu':{'send':function(){g=$(_0x20eb('86'));d=$(_0x20eb('87'));h=_0x20eb('88');$(h+_0x20eb('89'))['\x6f\x6e'](_0x20eb('27'),function(){r=$(this)[_0x20eb('7c')](_0x20eb('8a'));setTimeout(function(){d[_0x20eb('8b')]({'color':r});},0x64);});$(h+_0x20eb('8c'))['\x6f\x6e'](_0x20eb('27'),function(){t=$(this)[_0x20eb('7c')](_0x20eb('8a'));setTimeout(function(){d[_0x20eb('7c')](_0x20eb('8d'),t);},0x64);});$(h+_0x20eb('8e'))['\x6f\x6e'](_0x20eb('27'),function(){if(up[_0x20eb('b')]>0x0&&config[_0x20eb('10')]==config[_0x20eb('15')]){layer[_0x20eb('60')](_0x20eb('8f'));return;};t=$(this)[_0x20eb('7c')](_0x20eb('8a'));setTimeout(function(){d[_0x20eb('7c')](_0x20eb('90'),t);},0x64);});g['\x6f\x6e'](_0x20eb('27'),function(){a=document[_0x20eb('66')](_0x20eb('91'));a=a[_0x20eb('8a')];b=d[_0x20eb('7c')](_0x20eb('8d'));c=d[_0x20eb('8b')](_0x20eb('e'));z=d[_0x20eb('7c')](_0x20eb('90'));for(var _0x5ba523=0x0;_0x5ba523<up[_0x20eb('a')][_0x20eb('92')];_0x5ba523++){if(a[_0x20eb('93')](up[_0x20eb('a')][_0x5ba523])!=-0x1){layer[_0x20eb('60')](_0x20eb('94'));return;}}if(a[_0x20eb('92')]<0x1){layer[_0x20eb('60')](_0x20eb('95'));return;}var _0x25edf1=Date[_0x20eb('96')](new Date());var _0x1e36fa=leleck[_0x20eb('47')](_0x20eb('97'),_0x25edf1);if(_0x25edf1-_0x1e36fa<config[_0x20eb('d')]*0x3e8){layer[_0x20eb('60')](_0x20eb('98')+config[_0x20eb('d')]+'\u79d2\x7e');return;}d[_0x20eb('79')]('');lele['\x64\x70'][_0x20eb('42')][_0x20eb('3f')]({'\x74\x65\x78\x74':a,'\x63\x6f\x6c\x6f\x72':c,'\x74\x79\x70\x65':b,'\x73\x69\x7a\x65':z});leleck[_0x20eb('17')](_0x20eb('97'),_0x25edf1);});function _0x589547(){g[_0x20eb('99')](_0x20eb('27'));};d[_0x20eb('9a')](function(_0x860409){if(_0x860409[_0x20eb('9b')]==0xd){_0x589547();};});},'list':function(){$(_0x20eb('9c'))['\x6f\x6e'](_0x20eb('27'),function(){$(_0x20eb('9d'))[_0x20eb('9e')]();$[_0x20eb('3')]({'\x75\x72\x6c':config[_0x20eb('9f')]+_0x20eb('a0')+lele['\x69\x64'],'\x73\x75\x63\x63\x65\x73\x73':function(_0x2740b6){if(_0x2740b6[_0x20eb('a1')]==0x17){a=_0x2740b6[_0x20eb('a2')];b=_0x2740b6[_0x20eb('a3')];c=_0x2740b6[_0x20eb('a4')];$(_0x20eb('a5'))[_0x20eb('2d')](c);$(a)[_0x20eb('a6')](function(_0x1631e4,_0x2386c1){l=_0x20eb('a7')+_0x2386c1[0x0]+_0x20eb('a8')+lele[_0x20eb('4f')](_0x2386c1[0x0])+_0x20eb('a9')+_0x2386c1[0x4]+'\x22\x3e'+_0x2386c1[0x4]+_0x20eb('aa')+_0x2386c1[0x3]+_0x20eb('ab')+_0x2386c1[0x5]+'\x22\x3e'+_0x2386c1[0x6]+_0x20eb('ac')+_0x2386c1[0x5]+_0x20eb('ad')+b+_0x20eb('ad')+_0x2386c1[0x4]+_0x20eb('ad')+_0x2386c1[0x3]+_0x20eb('ae');$(_0x20eb('9d'))[_0x20eb('6e')](l);});}$(_0x20eb('af'))['\x6f\x6e'](_0x20eb('b0'),function(){lele['\x64\x70'][_0x20eb('5f')]($(this)[_0x20eb('7c')](_0x20eb('1d')));});}});});var _0x497c83=_0x20eb('b1')+config[_0x20eb('f')]+_0x20eb('b2');$(_0x20eb('b3'))[_0x20eb('6e')](_0x497c83);$(_0x20eb('b4'))[_0x20eb('2d')](up[_0x20eb('b5')]);$(_0x20eb('b6'))[_0x20eb('35')](_0x20eb('b7'));for(var _0x3d8844=0x0;_0x3d8844<up[_0x20eb('a')][_0x20eb('92')];_0x3d8844++){var _0x25eba6=_0x20eb('b8')+up[_0x20eb('a')][_0x3d8844]+_0x20eb('b9');$(_0x20eb('ba'))[_0x20eb('6e')](_0x25eba6);}_0x434eec(_0x20eb('bb'),_0x20eb('bc'),_0x20eb('3c'));function _0x434eec(_0x144e7d,_0x48f649,_0x20f714,_0x40c41f){$(_0x144e7d)[_0x20eb('27')](function(){$(_0x48f649)[_0x20eb('29')](_0x20f714);$(_0x40c41f)[_0x20eb('23')]();});}},'report':function(_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65){layer[_0x20eb('bd')](''+_0x2ccd81+_0x20eb('be'),{'\x61\x6e\x69\x6d':0x1,'\x74\x69\x74\x6c\x65':_0x20eb('bf'),'\x62\x74\x6e':[_0x20eb('c0'),_0x20eb('c1'),_0x20eb('c2'),_0x20eb('c3'),_0x20eb('c4'),_0x20eb('c5'),_0x20eb('c6'),'\u5267\u900f','\u5f15\u6218'],'\x62\x74\x6e\x33':function(_0x115e34,_0x32ecb2){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,_0x20eb('c2'));},'\x62\x74\x6e\x34':function(_0x2ad8ff,_0x634955){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,_0x20eb('c3'));},'\x62\x74\x6e\x35':function(_0x1b7d7a,_0x567146){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,_0x20eb('c4'));},'\x62\x74\x6e\x36':function(_0x4707ee,_0x135cc4){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,_0x20eb('c5'));},'\x62\x74\x6e\x37':function(_0x113023,_0x550676){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,_0x20eb('c6'));},'\x62\x74\x6e\x38':function(_0x3c1df9,_0x290f0e){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,'\u5267\u900f');},'\x62\x74\x6e\x39':function(_0x2bc21b,_0x22d7e2){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,'\u5f15\u6218');}},function(_0x463b9d,_0x367dc6){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,_0x20eb('c0'));},function(_0x170928){lele[_0x20eb('3e')][_0x20eb('c7')](_0x5ee490,_0x33aeed,_0x2ccd81,_0x534a65,_0x20eb('c1'));});},'post_r':function(_0x4578be,_0x5696d1,_0x461b6f,_0x4a1162,_0x3a62ea){$[_0x20eb('3')]({'\x74\x79\x70\x65':_0x20eb('47'),'\x75\x72\x6c':config[_0x20eb('9f')]+_0x20eb('c8')+_0x4a1162+_0x20eb('c9')+_0x4578be+_0x20eb('ca')+_0x3a62ea+_0x20eb('cb')+_0x5696d1+_0x20eb('cc')+_0x461b6f,'\x63\x61\x63\x68\x65':![],'\x64\x61\x74\x61\x54\x79\x70\x65':_0x20eb('5'),'\x62\x65\x66\x6f\x72\x65\x53\x65\x6e\x64':function(){},'\x73\x75\x63\x63\x65\x73\x73':function(_0x37efa9){layer[_0x20eb('60')](_0x20eb('cd'));},'\x65\x72\x72\x6f\x72':function(_0x44bb75){var _0x147f5c=_0x20eb('ce');layer[_0x20eb('60')](_0x147f5c);}});}},'setCookie':function(_0x544035,_0x92f3a1,_0x191d28){var _0x28cf8f=new Date();_0x28cf8f[_0x20eb('cf')](_0x28cf8f[_0x20eb('d0')]()+_0x191d28);document[_0x20eb('d1')]=_0x544035+'\x3d'+escape(_0x92f3a1)+(_0x191d28===null?'':_0x20eb('d2')+_0x28cf8f[_0x20eb('d3')]());},'getCookie':function(_0x129985){if(document[_0x20eb('d1')][_0x20eb('92')]>0x0){c_start=document[_0x20eb('d1')][_0x20eb('d4')](_0x129985+'\x3d');if(c_start!==-0x1){c_start=c_start+_0x129985[_0x20eb('92')]+0x1;c_end=document[_0x20eb('d1')][_0x20eb('d4')]('\x3b',c_start);if(c_end===-0x1){c_end=document[_0x20eb('d1')][_0x20eb('92')];};return unescape(document[_0x20eb('d1')][_0x20eb('d5')](c_start,c_end));}}return'';},'formatTime':function(_0x5c084b){return[parseInt(_0x5c084b/0x3c/0x3c),parseInt(_0x5c084b/0x3c%0x3c),parseInt(_0x5c084b%0x3c)][_0x20eb('d6')]('\x3a')[_0x20eb('d7')](/\b(\d)\b/g,_0x20eb('d8'));},'loadedmetadataHandler':function(){if(lele[_0x20eb('4c')]>0x0&&lele['\x64\x70'][_0x20eb('69')][_0x20eb('82')]<lele[_0x20eb('4c')]){setTimeout(function(){lele[_0x20eb('69')][_0x20eb('d9')]();},0x1*0x3e8);}else{if(danmuon==_0x20eb('20')){lele[_0x20eb('59')][_0x20eb('5a')]();}else{lele['\x64\x70'][_0x20eb('7f')](_0x20eb('da'));lele[_0x20eb('69')][_0x20eb('1f')]();}}lele['\x64\x70']['\x6f\x6e'](_0x20eb('56'),function(){lele[_0x20eb('57')]();});},'timeupdateHandler':function(){lele[_0x20eb('84')](_0x20eb('4d')+config[_0x20eb('1a')],lele['\x64\x70'][_0x20eb('69')][_0x20eb('82')],0x18);},'endedHandler':function(){lele[_0x20eb('84')](_0x20eb('4d')+config[_0x20eb('1a')],'',-0x1);if(config[_0x20eb('5e')]!=''){lele['\x64\x70'][_0x20eb('7f')](_0x20eb('db'));setTimeout(function(){lele[_0x20eb('69')][_0x20eb('5e')]();},0x5*0x3e8);}else{lele['\x64\x70'][_0x20eb('7f')](_0x20eb('dc'));setTimeout(function(){lele[_0x20eb('69')][_0x20eb('dd')]();},0x2*0x3e8);}},'player':{'play':function(_0x427c64){$(_0x20eb('de'))[_0x20eb('7b')](_0x20eb('df'));lele['\x64\x70']=new leleplayer({'\x61\x75\x74\x6f\x70\x6c\x61\x79':!![],'\x65\x6c\x65\x6d\x65\x6e\x74':document[_0x20eb('66')](_0x20eb('21')),'\x74\x68\x65\x6d\x65':config[_0x20eb('e')],'\x6c\x6f\x67\x6f':config[_0x20eb('9')],'\x76\x69\x64\x65\x6f':{'\x75\x72\x6c':_0x427c64,'\x70\x69\x63':config[_0x20eb('1c')],'\x74\x79\x70\x65':_0x20eb('e0'),'\x63\x75\x73\x74\x6f\x6d\x54\x79\x70\x65':{'\x63\x75\x73\x74\x6f\x6d\x48\x6c\x73':function(_0x2cce04,_0x1cd0b6){const _0x52e9ea=new Hls({'\x64\x65\x62\x75\x67':![],'\x70\x32\x70\x43\x6f\x6e\x66\x69\x67':{'\x6c\x6f\x67\x4c\x65\x76\x65\x6c':!![],'\x6c\x69\x76\x65':![],'\x61\x6e\x6e\x6f\x75\x6e\x63\x65':_0x20eb('e1'),'\x77\x73\x53\x69\x67\x6e\x61\x6c\x65\x72\x41\x64\x64\x72':_0x20eb('e2')}});_0x52e9ea[_0x20eb('e3')](_0x2cce04[_0x20eb('e4')]);_0x52e9ea[_0x20eb('e5')](_0x2cce04);_0x52e9ea[_0x20eb('e6')]['\x6f\x6e'](_0x20eb('e7'),function(_0x442200){totalP2PDownloaded=_0x442200[_0x20eb('e8')];totalP2PUploaded=_0x442200[_0x20eb('e9')];updateStats();p2p();})['\x6f\x6e'](_0x20eb('ea'),function(_0x586c38){_peerId=_0x586c38;})['\x6f\x6e'](_0x20eb('eb'),function(_0x2ca0b5){_peers=_0x2ca0b5[_0x20eb('92')];updateStats();p2p();});}}}});if(lele[_0x20eb('58')]()){var _0x509ee1=_0x20eb('ec');_0x509ee1+=_0x20eb('ed');_0x509ee1+=_0x20eb('ee');$(_0x20eb('de'))[_0x20eb('6e')](_0x509ee1)[_0x20eb('7b')]('');}lele[_0x20eb('41')]();lele[_0x20eb('59')][_0x20eb('5a')]();},'adplay':function(_0x197459){$(_0x20eb('de'))[_0x20eb('7b')](_0x20eb('df'));lele['\x61\x64']=new leleplayer({'\x61\x75\x74\x6f\x70\x6c\x61\x79':!![],'\x65\x6c\x65\x6d\x65\x6e\x74':document[_0x20eb('66')](_0x20eb('ef')),'\x74\x68\x65\x6d\x65':config[_0x20eb('e')],'\x6c\x6f\x67\x6f':config[_0x20eb('9')],'\x76\x69\x64\x65\x6f':{'\x75\x72\x6c':_0x197459,'\x70\x69\x63':config[_0x20eb('1c')],'\x74\x79\x70\x65':_0x20eb('e0'),'\x63\x75\x73\x74\x6f\x6d\x54\x79\x70\x65':{'\x63\x75\x73\x74\x6f\x6d\x48\x6c\x73':function(_0x459852,_0x1a67de){const _0x28fd19=new Hls({'\x64\x65\x62\x75\x67':![],'\x70\x32\x70\x43\x6f\x6e\x66\x69\x67':{'\x6c\x6f\x67\x4c\x65\x76\x65\x6c':!![],'\x6c\x69\x76\x65':![],'\x61\x6e\x6e\x6f\x75\x6e\x63\x65':_0x20eb('e1'),'\x77\x73\x53\x69\x67\x6e\x61\x6c\x65\x72\x41\x64\x64\x72':_0x20eb('e2')}});_0x28fd19[_0x20eb('e3')](_0x459852[_0x20eb('e4')]);_0x28fd19[_0x20eb('e5')](_0x459852);_0x28fd19[_0x20eb('e6')]['\x6f\x6e'](_0x20eb('e7'),function(_0x540844){totalP2PDownloaded=_0x540844[_0x20eb('e8')];totalP2PUploaded=_0x540844[_0x20eb('e9')];updateStats();p2p();})['\x6f\x6e'](_0x20eb('ea'),function(_0x4e3418){_peerId=_0x4e3418;})['\x6f\x6e'](_0x20eb('eb'),function(_0x5bd02c){_peers=_0x5bd02c[_0x20eb('92')];updateStats();p2p();});}}}});$(_0x20eb('f0'))[_0x20eb('23')]();$(_0x20eb('f1'))[_0x20eb('3c')]();lele['\x61\x64']['\x6f\x6e'](_0x20eb('56'),function(){if(lele['\x61\x64'][_0x20eb('69')][_0x20eb('82')]>lele['\x61\x64'][_0x20eb('69')][_0x20eb('81')]-0.1){$(_0x20eb('de'))[_0x20eb('f2')](_0x20eb('df'));lele['\x61\x64'][_0x20eb('f3')]();$(_0x20eb('f4'))[_0x20eb('23')]();$(_0x20eb('f5'))[_0x20eb('23')]();lele[_0x20eb('1f')](config[_0x20eb('1a')]);}});},'dmplay':function(_0x3e2afa){lele[_0x20eb('f6')]();lele['\x64\x70']=new leleplayer({'\x61\x75\x74\x6f\x70\x6c\x61\x79':!![],'\x65\x6c\x65\x6d\x65\x6e\x74':document[_0x20eb('66')](_0x20eb('21')),'\x74\x68\x65\x6d\x65':config[_0x20eb('e')],'\x6c\x6f\x67\x6f':config[_0x20eb('9')],'\x76\x69\x64\x65\x6f':{'\x75\x72\x6c':_0x3e2afa,'\x70\x69\x63':config[_0x20eb('1c')],'\x74\x79\x70\x65':_0x20eb('e0'),'\x63\x75\x73\x74\x6f\x6d\x54\x79\x70\x65':{'\x63\x75\x73\x74\x6f\x6d\x48\x6c\x73':function(_0xcd546b,_0xc72133){const _0x136497=new Hls({'\x64\x65\x62\x75\x67':![],'\x70\x32\x70\x43\x6f\x6e\x66\x69\x67':{'\x6c\x6f\x67\x4c\x65\x76\x65\x6c':!![],'\x6c\x69\x76\x65':![],'\x61\x6e\x6e\x6f\x75\x6e\x63\x65':_0x20eb('e1'),'\x77\x73\x53\x69\x67\x6e\x61\x6c\x65\x72\x41\x64\x64\x72':_0x20eb('e2')}});_0x136497[_0x20eb('e3')](_0xcd546b[_0x20eb('e4')]);_0x136497[_0x20eb('e5')](_0xcd546b);_0x136497[_0x20eb('e6')]['\x6f\x6e'](_0x20eb('e7'),function(_0x464673){totalP2PDownloaded=_0x464673[_0x20eb('e8')];totalP2PUploaded=_0x464673[_0x20eb('e9')];updateStats();p2p();})['\x6f\x6e'](_0x20eb('ea'),function(_0x143163){_peerId=_0x143163;})['\x6f\x6e'](_0x20eb('eb'),function(_0x42ef41){_peers=_0x42ef41[_0x20eb('92')];updateStats();p2p();});}}},'\x64\x61\x6e\x6d\x61\x6b\x75':{'\x69\x64':lele['\x69\x64'],'\x61\x70\x69':config[_0x20eb('9f')]+_0x20eb('f7'),'\x75\x73\x65\x72':config[_0x20eb('f8')]}});lele[_0x20eb('f9')]();},'bdplay':function(_0x4fb6bf){lele[_0x20eb('f6')]();lele['\x64\x70']=new leleplayer({'\x61\x75\x74\x6f\x70\x6c\x61\x79':!![],'\x65\x6c\x65\x6d\x65\x6e\x74':document[_0x20eb('66')](_0x20eb('21')),'\x74\x68\x65\x6d\x65':config[_0x20eb('e')],'\x6c\x6f\x67\x6f':config[_0x20eb('9')],'\x76\x69\x64\x65\x6f':{'\x75\x72\x6c':_0x4fb6bf,'\x70\x69\x63':config[_0x20eb('1c')],'\x74\x79\x70\x65':_0x20eb('e0'),'\x63\x75\x73\x74\x6f\x6d\x54\x79\x70\x65':{'\x63\x75\x73\x74\x6f\x6d\x48\x6c\x73':function(_0x35c006,_0x4fc671){const _0x4a37b0=new Hls({'\x64\x65\x62\x75\x67':![],'\x70\x32\x70\x43\x6f\x6e\x66\x69\x67':{'\x6c\x6f\x67\x4c\x65\x76\x65\x6c':!![],'\x6c\x69\x76\x65':![],'\x61\x6e\x6e\x6f\x75\x6e\x63\x65':_0x20eb('e1'),'\x77\x73\x53\x69\x67\x6e\x61\x6c\x65\x72\x41\x64\x64\x72':_0x20eb('e2')}});_0x4a37b0[_0x20eb('e3')](_0x35c006[_0x20eb('e4')]);_0x4a37b0[_0x20eb('e5')](_0x35c006);_0x4a37b0[_0x20eb('e6')]['\x6f\x6e'](_0x20eb('e7'),function(_0x448177){totalP2PDownloaded=_0x448177[_0x20eb('e8')];totalP2PUploaded=_0x448177[_0x20eb('e9')];updateStats();})['\x6f\x6e'](_0x20eb('ea'),function(_0x50fe8e){_peerId=_0x50fe8e;})['\x6f\x6e'](_0x20eb('eb'),function(_0xe5ee04){_peers=_0xe5ee04[_0x20eb('92')];updateStats();});}}},'\x64\x61\x6e\x6d\x61\x6b\x75':{'\x69\x64':lele['\x69\x64'],'\x61\x70\x69':config[_0x20eb('9f')]+_0x20eb('f7'),'\x75\x73\x65\x72':config[_0x20eb('f8')],'\x61\x64\x64\x69\x74\x69\x6f\x6e':[config[_0x20eb('9f')]+_0x20eb('fa')+config['\x61\x76']]}});lele[_0x20eb('f9')]();}},'MYad':{'vod':function(_0x4110c3,_0x38fdb5){$(_0x20eb('f5'))[_0x20eb('35')](_0x20eb('fb')+_0x38fdb5+_0x20eb('fc'));$(_0x20eb('f4'))[_0x20eb('27')](function(){document[_0x20eb('66')](_0x20eb('1b'))[_0x20eb('27')]();});lele[_0x20eb('21')][_0x20eb('fd')](_0x4110c3);},'pic':function(_0x31ef74,_0x353482,_0x5c8410){$(_0x20eb('f5'))[_0x20eb('35')](_0x20eb('fb')+_0x31ef74+_0x20eb('fe')+_0x353482+_0x20eb('ff')+_0x5c8410+'\x22\x3e');$(_0x20eb('f5'))[_0x20eb('27')](function(){document[_0x20eb('66')](_0x20eb('1b'))[_0x20eb('27')]();});var _0x419d90=document[_0x20eb('66')](_0x20eb('100'));var _0x4c90e3=_0x419d90[_0x20eb('68')];var _0xacb9b0=null;setTimeout(function(){_0xacb9b0=setInterval(function(){_0x4c90e3--;_0x419d90[_0x20eb('68')]=_0x4c90e3;if(_0x4c90e3==0x0){clearInterval(_0xacb9b0);lele[_0x20eb('1f')](config[_0x20eb('1a')]);$(_0x20eb('f5'))[_0x20eb('23')]();}},0x3e8);},0x1);},'pause':{'play':function(_0x3d9ea3,_0x456e0f){if(lele[_0x20eb('8')][_0x20eb('54')][_0x20eb('16')]=='\x6f\x6e'){var _0x113041=_0x20eb('101')+_0x3d9ea3+_0x20eb('102')+_0x456e0f+_0x20eb('103');$(_0x20eb('104'))[_0x20eb('105')](_0x113041);}},'out':function(){$(_0x20eb('106'))[_0x20eb('23')]();}}}};document[_0x20eb('107')](_0x20eb('108')+Math[_0x20eb('109')]()+_0x20eb('10a'));

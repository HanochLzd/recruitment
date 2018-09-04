/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : recruitment

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 04/09/2018 14:22:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `com_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `com_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司名字',
  `com_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司类型',
  `com_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司logo',
  `com_serviceType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司服务类型',
  `com_financingType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '融资类型',
  `com_population` int(10) NULL DEFAULT NULL COMMENT '公司人数',
  PRIMARY KEY (`com_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for hr
-- ----------------------------
DROP TABLE IF EXISTS `hr`;
CREATE TABLE `hr`  (
  `hr_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `hr_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `hr_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `hr_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `hr_companyId` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '所属公司',
  `hr_state` int(1) NULL DEFAULT NULL COMMENT 'hr状态',
  PRIMARY KEY (`hr_id`) USING BTREE,
  INDEX `hr_ibfk_1`(`hr_companyId`) USING BTREE,
  CONSTRAINT `hr_ibfk_1` FOREIGN KEY (`hr_companyId`) REFERENCES `company` (`com_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job`  (
  `job_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '职位id',
  `job_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位名称',
  `job_nickName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位昵称（便于查找）',
  `job_group_id` int(5) NOT NULL COMMENT '职位所属',
  `job_level` int(10) NULL DEFAULT NULL COMMENT '职位（热度）等级',
  PRIMARY KEY (`job_id`) USING BTREE,
  INDEX `job_nickName`(`job_nickName`) USING BTREE,
  INDEX `job_group_id`(`job_group_id`) USING BTREE,
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`job_group_id`) REFERENCES `job_group` (`group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 276 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of job
-- ----------------------------
INSERT INTO `job` VALUES (1, 'Java', 'Java', 25, NULL);
INSERT INTO `job` VALUES (2, 'C++', 'C++', 25, NULL);
INSERT INTO `job` VALUES (3, 'PHP', 'PHP', 25, NULL);
INSERT INTO `job` VALUES (4, '数据挖掘', 'shujuwajue', 25, NULL);
INSERT INTO `job` VALUES (5, '搜索算法', 'sousuosuanfa', 25, NULL);
INSERT INTO `job` VALUES (6, '精准推荐', 'jingzhuntuijian', 25, NULL);
INSERT INTO `job` VALUES (7, 'C', 'C', 25, NULL);
INSERT INTO `job` VALUES (8, 'C#', 'C#', 25, NULL);
INSERT INTO `job` VALUES (9, '全栈工程师', 'quanzhangongchengshi', 25, NULL);
INSERT INTO `job` VALUES (10, '.NET', '.NET', 25, NULL);
INSERT INTO `job` VALUES (11, 'Hadoop', 'Hadoop', 25, NULL);
INSERT INTO `job` VALUES (12, 'Python', 'Python', 25, NULL);
INSERT INTO `job` VALUES (13, 'Delphi', 'Delphi', 25, NULL);
INSERT INTO `job` VALUES (14, 'VB', 'VB', 25, NULL);
INSERT INTO `job` VALUES (15, 'Perl', 'Perl', 25, NULL);
INSERT INTO `job` VALUES (16, 'Ruby', 'Ruby', 25, NULL);
INSERT INTO `job` VALUES (17, 'Node.js', 'Node.js', 25, NULL);
INSERT INTO `job` VALUES (18, 'Go', 'Go', 25, NULL);
INSERT INTO `job` VALUES (19, 'ASP', 'ASP', 25, NULL);
INSERT INTO `job` VALUES (20, 'Shell', 'Shell', 25, NULL);
INSERT INTO `job` VALUES (21, '区块链', 'qukuailian', 25, NULL);
INSERT INTO `job` VALUES (22, '后端开发其它', 'houduankaifaqita', 25, NULL);
INSERT INTO `job` VALUES (23, 'HTML5', 'HTML5', 26, NULL);
INSERT INTO `job` VALUES (24, 'Android', 'Android', 26, NULL);
INSERT INTO `job` VALUES (25, 'iOS', 'iOS', 26, NULL);
INSERT INTO `job` VALUES (26, 'WP', 'WP', 26, NULL);
INSERT INTO `job` VALUES (27, '移动开发其它', 'yidongkaifaqita', 26, NULL);
INSERT INTO `job` VALUES (28, 'web前端', 'webqianduan', 27, NULL);
INSERT INTO `job` VALUES (29, 'Flash', 'Flash', 27, NULL);
INSERT INTO `job` VALUES (30, 'html5', 'html5', 27, NULL);
INSERT INTO `job` VALUES (31, 'JavaScript', 'JavaScript', 27, NULL);
INSERT INTO `job` VALUES (32, 'U3D', 'U3D', 27, NULL);
INSERT INTO `job` VALUES (33, 'COCOS2D-X', 'COCOS2D-X', 27, NULL);
INSERT INTO `job` VALUES (34, '前端开发其它', 'qianduankaifaqita', 27, NULL);
INSERT INTO `job` VALUES (35, '深度学习', 'shenduxuexi', 28, NULL);
INSERT INTO `job` VALUES (36, '机器学习', 'jiqixuexi', 28, NULL);
INSERT INTO `job` VALUES (37, '图像处理', 'tuxiangchuli', 28, NULL);
INSERT INTO `job` VALUES (38, '图像识别', 'tuxiangshibie', 28, NULL);
INSERT INTO `job` VALUES (39, '语音识别', 'yuyinshibie', 28, NULL);
INSERT INTO `job` VALUES (40, '机器视觉', 'jiqishijue', 28, NULL);
INSERT INTO `job` VALUES (41, '算法工程师', 'suanfagongchengshi', 28, NULL);
INSERT INTO `job` VALUES (42, '自然语言处理', 'ziranyuyanchuli', 28, NULL);
INSERT INTO `job` VALUES (43, '测试工程师', 'ceshigongchengshi', 29, NULL);
INSERT INTO `job` VALUES (44, '自动化测试', 'zidonghuaceshi', 29, NULL);
INSERT INTO `job` VALUES (45, '功能测试', 'gongnengceshi', 29, NULL);
INSERT INTO `job` VALUES (46, '性能测试', 'xingnengceshi', 29, NULL);
INSERT INTO `job` VALUES (47, '测试开发', 'ceshikaifa', 29, NULL);
INSERT INTO `job` VALUES (48, '游戏测试', 'youxiceshi', 29, NULL);
INSERT INTO `job` VALUES (49, '白盒测试', 'baiheceshi', 29, NULL);
INSERT INTO `job` VALUES (50, '灰盒测试', 'huiheceshi', 29, NULL);
INSERT INTO `job` VALUES (51, '黑盒测试', 'heiheceshi', 29, NULL);
INSERT INTO `job` VALUES (52, '手机测试', 'shoujiceshi', 29, NULL);
INSERT INTO `job` VALUES (53, '硬件测试', 'yingjianceshi', 29, NULL);
INSERT INTO `job` VALUES (54, '测试经理', 'ceshijingli', 29, NULL);
INSERT INTO `job` VALUES (55, '测试其它', 'ceshiqita', 29, NULL);
INSERT INTO `job` VALUES (56, '运维工程师', 'yunweigongchengshi', 30, NULL);
INSERT INTO `job` VALUES (57, '运维开发工程师', 'yunweikaifagongchengshi', 30, NULL);
INSERT INTO `job` VALUES (58, '网络工程师', 'wangluogongchengshi', 30, NULL);
INSERT INTO `job` VALUES (59, '系统工程师', 'xitonggongchengshi', 30, NULL);
INSERT INTO `job` VALUES (60, 'IT支持', 'ITzhichi', 30, NULL);
INSERT INTO `job` VALUES (61, 'IDC', 'IDC', 30, NULL);
INSERT INTO `job` VALUES (62, 'CDN', 'CDN', 30, NULL);
INSERT INTO `job` VALUES (63, 'F5', 'F5', 30, NULL);
INSERT INTO `job` VALUES (64, '系统管理员', 'xitongguanliyuan', 30, NULL);
INSERT INTO `job` VALUES (65, '病毒分析', 'bingdufenxi', 30, NULL);
INSERT INTO `job` VALUES (66, 'WEB安全', 'WEBanquan', 30, NULL);
INSERT INTO `job` VALUES (67, '网络安全', 'wangluoanquan', 30, NULL);
INSERT INTO `job` VALUES (68, '系统安全', 'xitonganquan', 30, NULL);
INSERT INTO `job` VALUES (69, '运维经理', 'yunweijingli', 30, NULL);
INSERT INTO `job` VALUES (70, '运维其它', 'yunweiqita', 30, NULL);
INSERT INTO `job` VALUES (71, 'MySQL', 'MySQL', 31, NULL);
INSERT INTO `job` VALUES (72, 'SQLServer', 'SQLServer', 31, NULL);
INSERT INTO `job` VALUES (73, 'Oracle', 'Oracle', 31, NULL);
INSERT INTO `job` VALUES (74, 'DB2', 'DB2', 31, NULL);
INSERT INTO `job` VALUES (75, 'MongoDB', 'MongoDB', 31, NULL);
INSERT INTO `job` VALUES (76, 'ETL', 'ETL', 31, NULL);
INSERT INTO `job` VALUES (77, 'Hive', 'Hive', 31, NULL);
INSERT INTO `job` VALUES (78, '数据仓库', 'shujucangku', 31, NULL);
INSERT INTO `job` VALUES (79, 'DBA其它', 'DBAqita', 31, NULL);
INSERT INTO `job` VALUES (80, '技术经理', 'jishujingli', 32, NULL);
INSERT INTO `job` VALUES (81, '技术总监', 'jishuzongjian', 32, NULL);
INSERT INTO `job` VALUES (82, '架构师', 'jiagoushi', 32, NULL);
INSERT INTO `job` VALUES (83, 'CTO', 'CTO', 32, NULL);
INSERT INTO `job` VALUES (84, '运维总监', 'yunweizongjian', 32, NULL);
INSERT INTO `job` VALUES (85, '技术合伙人', 'jishuhehuoren', 32, NULL);
INSERT INTO `job` VALUES (86, '项目总监', 'xiangmuzongjian', 32, NULL);
INSERT INTO `job` VALUES (87, '测试总监', 'ceshizongjian', 32, NULL);
INSERT INTO `job` VALUES (88, '安全专家', 'anquanzhuanjia', 32, NULL);
INSERT INTO `job` VALUES (89, '高端技术职位其它', 'gaoduanjishuzhiweiqita', 32, NULL);
INSERT INTO `job` VALUES (90, '项目经理', 'xiangmujingli', 33, NULL);
INSERT INTO `job` VALUES (91, '项目助理', 'xiangmuzhuli', 33, NULL);
INSERT INTO `job` VALUES (92, '硬件', 'yingjian', 34, NULL);
INSERT INTO `job` VALUES (93, '嵌入式', 'qianrushi', 34, NULL);
INSERT INTO `job` VALUES (94, '自动化', 'zidonghua', 34, NULL);
INSERT INTO `job` VALUES (95, '单片机', 'danpianji', 34, NULL);
INSERT INTO `job` VALUES (96, '电路设计', 'dianlusheji', 34, NULL);
INSERT INTO `job` VALUES (97, '驱动开发', 'qudongkaifa', 34, NULL);
INSERT INTO `job` VALUES (98, '系统集成', 'xitongjicheng', 34, NULL);
INSERT INTO `job` VALUES (99, 'FPGA开发', 'FPGAkaifa', 34, NULL);
INSERT INTO `job` VALUES (100, 'DSP开发', 'DSPkaifa', 34, NULL);
INSERT INTO `job` VALUES (101, 'ARM开发', 'ARMkaifa', 34, NULL);
INSERT INTO `job` VALUES (102, 'PCB工艺', 'PCBgongyi', 34, NULL);
INSERT INTO `job` VALUES (103, '模具设计', 'mojusheji', 34, NULL);
INSERT INTO `job` VALUES (104, '热传导', 'rechuandao', 34, NULL);
INSERT INTO `job` VALUES (105, '材料工程师', 'cailiaogongchengshi', 34, NULL);
INSERT INTO `job` VALUES (106, '精益工程师', 'jingyigongchengshi', 34, NULL);
INSERT INTO `job` VALUES (107, '射频工程师', 'shepingongchengshi', 34, NULL);
INSERT INTO `job` VALUES (108, '硬件开发其它', 'yingjiankaifaqita', 34, NULL);
INSERT INTO `job` VALUES (109, '实施工程师', 'shishigongchengshi', 35, NULL);
INSERT INTO `job` VALUES (110, '售前工程师', 'shouqiangongchengshi', 35, NULL);
INSERT INTO `job` VALUES (111, '售后工程师', 'shouhougongchengshi', 35, NULL);
INSERT INTO `job` VALUES (112, 'BI工程师', 'BIgongchengshi', 35, NULL);
INSERT INTO `job` VALUES (113, '企业软件其它', 'qiyeruanjianqita', 35, NULL);
INSERT INTO `job` VALUES (114, '产品经理', 'chanpinjingli', 36, NULL);
INSERT INTO `job` VALUES (115, '网页产品经理', 'wangyechanpinjingli', 36, NULL);
INSERT INTO `job` VALUES (116, '移动产品经理', 'yidongchanpinjingli', 36, NULL);
INSERT INTO `job` VALUES (117, '产品助理', 'chanpinzhuli', 36, NULL);
INSERT INTO `job` VALUES (118, '数据产品经理', 'shujuchanpinjingli', 36, NULL);
INSERT INTO `job` VALUES (119, '电商产品经理', 'dianshangchanpinjingli', 36, NULL);
INSERT INTO `job` VALUES (120, '游戏策划', 'youxicehua', 36, NULL);
INSERT INTO `job` VALUES (121, '产品实习生', 'chanpinshixisheng', 36, NULL);
INSERT INTO `job` VALUES (122, '网页产品设计师', 'wangyechanpinshejishi', 37, NULL);
INSERT INTO `job` VALUES (123, '无线产品设计师', 'wuxianchanpinshejishi', 37, NULL);
INSERT INTO `job` VALUES (124, '产品部经理', 'chanpinbujingli', 32, NULL);
INSERT INTO `job` VALUES (125, '产品总监', 'chanpinzongjian', 32, NULL);
INSERT INTO `job` VALUES (126, '游戏制作人', 'youxizhizuoren', 32, NULL);
INSERT INTO `job` VALUES (127, '视觉设计师', 'shijueshejishi', 39, NULL);
INSERT INTO `job` VALUES (128, '网页设计师', 'wangyeshejishi', 39, NULL);
INSERT INTO `job` VALUES (129, 'Flash设计师', 'Flashshejishi', 39, NULL);
INSERT INTO `job` VALUES (130, 'APP设计师', 'APPshejishi', 39, NULL);
INSERT INTO `job` VALUES (131, 'UI设计师', 'UIshejishi', 39, NULL);
INSERT INTO `job` VALUES (132, '平面设计师', 'pingmianshejishi', 39, NULL);
INSERT INTO `job` VALUES (133, '美术设计师（2D/3D）', 'meishushejishi（2D/3D）', 39, NULL);
INSERT INTO `job` VALUES (134, '广告设计师', 'guanggaoshejishi', 39, NULL);
INSERT INTO `job` VALUES (135, '多媒体设计师', 'duomeitishejishi', 39, NULL);
INSERT INTO `job` VALUES (136, '原画师', 'yuanhuashi', 39, NULL);
INSERT INTO `job` VALUES (137, '游戏特效', 'youxitexiao', 39, NULL);
INSERT INTO `job` VALUES (138, '游戏界面设计师', 'youxijiemianshejishi', 39, NULL);
INSERT INTO `job` VALUES (139, '游戏场景', 'youxichangjing', 39, NULL);
INSERT INTO `job` VALUES (140, '游戏角色', 'youxijiaose', 39, NULL);
INSERT INTO `job` VALUES (141, '游戏动作', 'youxidongzuo', 39, NULL);
INSERT INTO `job` VALUES (142, '交互设计师', 'jiaohushejishi', 40, NULL);
INSERT INTO `job` VALUES (143, '无线交互设计师', 'wuxianjiaohushejishi', 40, NULL);
INSERT INTO `job` VALUES (144, '网页交互设计师', 'wangyejiaohushejishi', 40, NULL);
INSERT INTO `job` VALUES (145, '硬件交互设计师', 'yingjianjiaohushejishi', 40, NULL);
INSERT INTO `job` VALUES (146, '数据分析师', 'shujufenxishi', 41, NULL);
INSERT INTO `job` VALUES (147, '用户研究员', 'yonghuyanjiuyuan', 41, NULL);
INSERT INTO `job` VALUES (148, '游戏数值策划', 'youxishuzhicehua', 41, NULL);
INSERT INTO `job` VALUES (149, '设计经理/主管', 'shejijingli/zhuguan', 32, NULL);
INSERT INTO `job` VALUES (150, '设计总监', 'shejizongjian', 32, NULL);
INSERT INTO `job` VALUES (151, '视觉设计经理/主管', 'shijueshejijingli/zhuguan', 32, NULL);
INSERT INTO `job` VALUES (152, '视觉设计总监', 'shijueshejizongjian', 32, NULL);
INSERT INTO `job` VALUES (153, '交互设计经理/主管', 'jiaohushejijingli/zhuguan', 32, NULL);
INSERT INTO `job` VALUES (154, '交互设计总监', 'jiaohushejizongjian', 32, NULL);
INSERT INTO `job` VALUES (155, '用户研究经理/主管', 'yonghuyanjiujingli/zhuguan', 32, NULL);
INSERT INTO `job` VALUES (156, '用户研究总监', 'yonghuyanjiuzongjian', 32, NULL);
INSERT INTO `job` VALUES (157, '用户运营', 'yonghuyunying', 43, NULL);
INSERT INTO `job` VALUES (158, '产品运营', 'chanpinyunying', 43, NULL);
INSERT INTO `job` VALUES (159, '数据运营', 'shujuyunying', 43, NULL);
INSERT INTO `job` VALUES (160, '内容运营', 'neirongyunying', 43, NULL);
INSERT INTO `job` VALUES (161, '活动运营', 'huodongyunying', 43, NULL);
INSERT INTO `job` VALUES (162, '商家运营', 'shangjiayunying', 43, NULL);
INSERT INTO `job` VALUES (163, '品类运营', 'pinleiyunying', 43, NULL);
INSERT INTO `job` VALUES (164, '游戏运营', 'youxiyunying', 43, NULL);
INSERT INTO `job` VALUES (165, '网络推广', 'wangluotuiguang', 43, NULL);
INSERT INTO `job` VALUES (166, '运营专员', 'yunyingzhuanyuan', 43, NULL);
INSERT INTO `job` VALUES (167, '网店运营', 'wangdianyunying', 43, NULL);
INSERT INTO `job` VALUES (168, '新媒体运营', 'xinmeitiyunying', 43, NULL);
INSERT INTO `job` VALUES (169, '海外运营', 'haiwaiyunying', 43, NULL);
INSERT INTO `job` VALUES (170, '运营经理', 'yunyingjingli', 43, NULL);
INSERT INTO `job` VALUES (171, '副主编', 'fuzhubian', 44, NULL);
INSERT INTO `job` VALUES (172, '内容编辑', 'neirongbianji', 44, NULL);
INSERT INTO `job` VALUES (173, '文案策划', 'wenancehua', 44, NULL);
INSERT INTO `job` VALUES (174, '记者', 'jizhe', 44, NULL);
INSERT INTO `job` VALUES (175, '售前咨询', 'shouqianzixun', 45, NULL);
INSERT INTO `job` VALUES (176, '售后客服', 'shouhoukefu', 45, NULL);
INSERT INTO `job` VALUES (177, '淘宝客服', 'taobaokefu', 45, NULL);
INSERT INTO `job` VALUES (178, '客服经理', 'kefujingli', 45, NULL);
INSERT INTO `job` VALUES (179, '主编', 'zhubian', 32, NULL);
INSERT INTO `job` VALUES (180, '运营总监', 'yunyingzongjian', 32, NULL);
INSERT INTO `job` VALUES (181, 'COO', 'COO', 32, NULL);
INSERT INTO `job` VALUES (182, '客服总监', 'kefuzongjian', 32, NULL);
INSERT INTO `job` VALUES (183, '市场营销', 'shichangyingxiao', 47, NULL);
INSERT INTO `job` VALUES (184, '市场策划', 'shichangcehua', 47, NULL);
INSERT INTO `job` VALUES (185, '市场顾问', 'shichangguwen', 47, NULL);
INSERT INTO `job` VALUES (186, '市场推广', 'shichangtuiguang', 47, NULL);
INSERT INTO `job` VALUES (187, 'SEO', 'SEO', 47, NULL);
INSERT INTO `job` VALUES (188, 'SEM', 'SEM', 47, NULL);
INSERT INTO `job` VALUES (189, '商务渠道', 'shangwuqudao', 47, NULL);
INSERT INTO `job` VALUES (190, '商业数据分析', 'shangyeshujufenxi', 47, NULL);
INSERT INTO `job` VALUES (191, '活动策划', 'huodongcehua', 47, NULL);
INSERT INTO `job` VALUES (192, '网络营销', 'wangluoyingxiao', 47, NULL);
INSERT INTO `job` VALUES (193, '海外市场', 'haiwaishichang', 47, NULL);
INSERT INTO `job` VALUES (194, '政府关系', 'zhengfuguanxi', 47, NULL);
INSERT INTO `job` VALUES (195, '媒介经理', 'meijiejingli', 48, NULL);
INSERT INTO `job` VALUES (196, '广告协调', 'guanggaoxiediao', 48, NULL);
INSERT INTO `job` VALUES (197, '品牌公关', 'pinpaigongguan', 48, NULL);
INSERT INTO `job` VALUES (198, '销售专员', 'xiaoshouzhuanyuan', 49, NULL);
INSERT INTO `job` VALUES (199, '销售经理', 'xiaoshoujingli', 49, NULL);
INSERT INTO `job` VALUES (200, '客户代表', 'kehudaibiao', 49, NULL);
INSERT INTO `job` VALUES (201, '大客户代表', 'dakehudaibiao', 49, NULL);
INSERT INTO `job` VALUES (202, 'BD经理', 'BDjingli', 49, NULL);
INSERT INTO `job` VALUES (203, '商务渠道', 'shangwuqudao', 49, NULL);
INSERT INTO `job` VALUES (204, '渠道销售', 'qudaoxiaoshou', 49, NULL);
INSERT INTO `job` VALUES (205, '代理商销售', 'dailishangxiaoshou', 49, NULL);
INSERT INTO `job` VALUES (206, '销售助理', 'xiaoshouzhuli', 49, NULL);
INSERT INTO `job` VALUES (207, '电话销售', 'dianhuaxiaoshou', 49, NULL);
INSERT INTO `job` VALUES (208, '销售顾问', 'xiaoshouguwen', 49, NULL);
INSERT INTO `job` VALUES (209, '商品经理', 'shangpinjingli', 49, NULL);
INSERT INTO `job` VALUES (210, '物流', 'wuliu', 50, NULL);
INSERT INTO `job` VALUES (211, '仓储', 'cangchu', 50, NULL);
INSERT INTO `job` VALUES (212, '采购专员', 'caigouzhuanyuan', 51, NULL);
INSERT INTO `job` VALUES (213, '采购经理', 'caigoujingli', 51, NULL);
INSERT INTO `job` VALUES (214, '商品经理', 'shangpinjingli', 51, NULL);
INSERT INTO `job` VALUES (215, '分析师', 'fenxishi', 52, NULL);
INSERT INTO `job` VALUES (216, '投资顾问', 'touziguwen', 52, NULL);
INSERT INTO `job` VALUES (217, '投资经理', 'touzijingli', 52, NULL);
INSERT INTO `job` VALUES (218, '市场总监', 'shichangzongjian', 32, NULL);
INSERT INTO `job` VALUES (219, '销售总监', 'xiaoshouzongjian', 32, NULL);
INSERT INTO `job` VALUES (220, '商务总监', 'shangwuzongjian', 32, NULL);
INSERT INTO `job` VALUES (221, 'CMO', 'CMO', 32, NULL);
INSERT INTO `job` VALUES (222, '公关总监', 'gongguanzongjian', 32, NULL);
INSERT INTO `job` VALUES (223, '采购总监', 'caigouzongjian', 32, NULL);
INSERT INTO `job` VALUES (224, '投资总监', 'touzizongjian', 32, NULL);
INSERT INTO `job` VALUES (225, '人力资源', 'renliziyuan', 54, NULL);
INSERT INTO `job` VALUES (226, '招聘', 'zhaopin', 54, NULL);
INSERT INTO `job` VALUES (227, 'HRBP', 'HRBP', 54, NULL);
INSERT INTO `job` VALUES (228, '人事/HR', 'renshi/HR', 54, NULL);
INSERT INTO `job` VALUES (229, '培训经理', 'peixunjingli', 54, NULL);
INSERT INTO `job` VALUES (230, '薪资福利经理', 'xinzifulijingli', 54, NULL);
INSERT INTO `job` VALUES (231, '绩效考核经理', 'jixiaokaohejingli', 54, NULL);
INSERT INTO `job` VALUES (232, '员工关系', 'yuangongguanxi', 54, NULL);
INSERT INTO `job` VALUES (233, '助理', 'zhuli', 55, NULL);
INSERT INTO `job` VALUES (234, '前台', 'qiantai', 55, NULL);
INSERT INTO `job` VALUES (235, '行政', 'xingzheng', 55, NULL);
INSERT INTO `job` VALUES (236, '总助', 'zongzhu', 55, NULL);
INSERT INTO `job` VALUES (237, '文秘', 'wenmi', 55, NULL);
INSERT INTO `job` VALUES (238, '会计', 'huiji', 56, NULL);
INSERT INTO `job` VALUES (239, '出纳', 'chuna', 56, NULL);
INSERT INTO `job` VALUES (240, '财务', 'caiwu', 56, NULL);
INSERT INTO `job` VALUES (241, '结算', 'jiesuan', 56, NULL);
INSERT INTO `job` VALUES (242, '税务', 'shuiwu', 56, NULL);
INSERT INTO `job` VALUES (243, '审计', 'shenji', 56, NULL);
INSERT INTO `job` VALUES (244, '风控', 'fengkong', 56, NULL);
INSERT INTO `job` VALUES (245, '法务', 'fawu', 57, NULL);
INSERT INTO `job` VALUES (246, '律师', 'lu:shi', 57, NULL);
INSERT INTO `job` VALUES (247, '专利', 'zhuanli', 57, NULL);
INSERT INTO `job` VALUES (248, '行政总监/经理', 'xingzhengzongjian/jingli', 32, NULL);
INSERT INTO `job` VALUES (249, '财务总监/经理', 'caiwuzongjian/jingli', 32, NULL);
INSERT INTO `job` VALUES (250, 'HRD/HRM', 'HRD/HRM', 32, NULL);
INSERT INTO `job` VALUES (251, 'CFO', 'CFO', 32, NULL);
INSERT INTO `job` VALUES (252, 'CEO', 'CEO', 32, NULL);
INSERT INTO `job` VALUES (253, '投资经理', 'touzijingli', 59, NULL);
INSERT INTO `job` VALUES (254, '分析师', 'fenxishi', 59, NULL);
INSERT INTO `job` VALUES (255, '投资助理', 'touzizhuli', 59, NULL);
INSERT INTO `job` VALUES (256, '融资', 'rongzi', 59, NULL);
INSERT INTO `job` VALUES (257, '并购', 'binggou', 59, NULL);
INSERT INTO `job` VALUES (258, '行业研究', 'xingyeyanjiu', 59, NULL);
INSERT INTO `job` VALUES (259, '投资者关系', 'touzizheguanxi', 59, NULL);
INSERT INTO `job` VALUES (260, '资产管理', 'zichanguanli', 59, NULL);
INSERT INTO `job` VALUES (261, '理财顾问', 'licaiguwen', 59, NULL);
INSERT INTO `job` VALUES (262, '交易员', 'jiaoyiyuan', 59, NULL);
INSERT INTO `job` VALUES (263, '风控', 'fengkong', 60, NULL);
INSERT INTO `job` VALUES (264, '资信评估', 'zixinpinggu', 60, NULL);
INSERT INTO `job` VALUES (265, '合规稽查', 'heguijicha', 60, NULL);
INSERT INTO `job` VALUES (266, '律师', 'lu:shi', 60, NULL);
INSERT INTO `job` VALUES (267, '审计', 'shenji', 61, NULL);
INSERT INTO `job` VALUES (268, '法务', 'fawu', 61, NULL);
INSERT INTO `job` VALUES (269, '会计', 'huiji', 61, NULL);
INSERT INTO `job` VALUES (270, '清算', 'qingsuan', 61, NULL);
INSERT INTO `job` VALUES (271, '投资总监', 'touzizongjian', 32, NULL);
INSERT INTO `job` VALUES (272, '融资总监', 'rongzizongjian', 32, NULL);
INSERT INTO `job` VALUES (273, '并购总监', 'binggouzongjian', 32, NULL);
INSERT INTO `job` VALUES (274, '风控总监', 'fengkongzongjian', 32, NULL);
INSERT INTO `job` VALUES (275, '副总裁', 'fuzongcai', 32, NULL);

-- ----------------------------
-- Table structure for job_group
-- ----------------------------
DROP TABLE IF EXISTS `job_group`;
CREATE TABLE `job_group`  (
  `group_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '职位群组id',
  `goup_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '群组名称',
  `main_group_id` int(2) NULL DEFAULT NULL COMMENT '所属',
  `group_detail` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `group_other` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '其它',
  PRIMARY KEY (`group_id`) USING BTREE,
  INDEX `main_group_id`(`main_group_id`) USING BTREE,
  CONSTRAINT `job_group_ibfk_1` FOREIGN KEY (`main_group_id`) REFERENCES `main_group` (`main_group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 63 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of job_group
-- ----------------------------
INSERT INTO `job_group` VALUES (25, '后端开发', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (26, '移动开发', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (27, '前端开发', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (28, '人工智能', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (29, '测试', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (30, '运维', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (31, 'DBA', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (32, '高端职位', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (33, '项目管理', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (34, '硬件开发', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (35, '企业软件', 1, NULL, NULL);
INSERT INTO `job_group` VALUES (36, '产品经理', 2, NULL, NULL);
INSERT INTO `job_group` VALUES (37, '产品设计师', 2, NULL, NULL);
INSERT INTO `job_group` VALUES (38, '高端职位', 2, NULL, NULL);
INSERT INTO `job_group` VALUES (39, '视觉设计', 3, NULL, NULL);
INSERT INTO `job_group` VALUES (40, '交互设计', 3, NULL, NULL);
INSERT INTO `job_group` VALUES (41, '用户研究', 3, NULL, NULL);
INSERT INTO `job_group` VALUES (42, '高端职位', 3, NULL, NULL);
INSERT INTO `job_group` VALUES (43, '运营', 4, NULL, NULL);
INSERT INTO `job_group` VALUES (44, '编辑', 4, NULL, NULL);
INSERT INTO `job_group` VALUES (45, '客服', 4, NULL, NULL);
INSERT INTO `job_group` VALUES (46, '高端职位', 4, NULL, NULL);
INSERT INTO `job_group` VALUES (47, '市场/营销', 5, NULL, NULL);
INSERT INTO `job_group` VALUES (48, '公关', 5, NULL, NULL);
INSERT INTO `job_group` VALUES (49, '销售', 5, NULL, NULL);
INSERT INTO `job_group` VALUES (50, '供应链', 5, NULL, NULL);
INSERT INTO `job_group` VALUES (51, '采购', 5, NULL, NULL);
INSERT INTO `job_group` VALUES (52, '投资', 5, NULL, NULL);
INSERT INTO `job_group` VALUES (53, '高端职位', 5, NULL, NULL);
INSERT INTO `job_group` VALUES (54, '人力资源', 6, NULL, NULL);
INSERT INTO `job_group` VALUES (55, '行政', 6, NULL, NULL);
INSERT INTO `job_group` VALUES (56, '财务', 6, NULL, NULL);
INSERT INTO `job_group` VALUES (57, '法务', 6, NULL, NULL);
INSERT INTO `job_group` VALUES (58, '高端职位', 6, NULL, NULL);
INSERT INTO `job_group` VALUES (59, '投融资', 7, NULL, NULL);
INSERT INTO `job_group` VALUES (60, '风控', 7, NULL, NULL);
INSERT INTO `job_group` VALUES (61, '审计税务', 7, NULL, NULL);
INSERT INTO `job_group` VALUES (62, '高端职位', 7, NULL, NULL);

-- ----------------------------
-- Table structure for main_group
-- ----------------------------
DROP TABLE IF EXISTS `main_group`;
CREATE TABLE `main_group`  (
  `main_group_id` int(2) NOT NULL,
  `main_group_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`main_group_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of main_group
-- ----------------------------
INSERT INTO `main_group` VALUES (1, '技术');
INSERT INTO `main_group` VALUES (2, '产品');
INSERT INTO `main_group` VALUES (3, '设计');
INSERT INTO `main_group` VALUES (4, '运营');
INSERT INTO `main_group` VALUES (5, '市场与销售');
INSERT INTO `main_group` VALUES (6, '职能');
INSERT INTO `main_group` VALUES (7, '金融');

-- ----------------------------
-- Table structure for positioninfo
-- ----------------------------
DROP TABLE IF EXISTS `positioninfo`;
CREATE TABLE `positioninfo`  (
  `pos_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '招聘信息id',
  `pos_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '招聘信息名称',
  `pos_providerId` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '招聘信息提供者hr_id',
  `pos_type` int(5) NULL DEFAULT NULL COMMENT '招聘信息类型',
  `pos_create_time` datetime(0) NULL DEFAULT NULL COMMENT '招聘信息发布时间',
  `pos_salary` decimal(10, 2) NULL DEFAULT NULL COMMENT '招聘信息薪资',
  `pos_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '招聘信息地址',
  `pos_serviceType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '招聘信息工作类型',
  `pos_year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '工作所需经验',
  `pos_education` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教育程度',
  `pos_temptation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位诱惑',
  `pos_describtion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位描述',
  `pos_hot` int(10) NULL DEFAULT NULL COMMENT '岗位热度',
  `pos_evaluation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '招聘信息评价',
  PRIMARY KEY (`pos_id`) USING BTREE,
  INDEX `pos_type`(`pos_type`) USING BTREE,
  INDEX `pos_providerId`(`pos_providerId`) USING BTREE,
  CONSTRAINT `positioninfo_ibfk_1` FOREIGN KEY (`pos_type`) REFERENCES `job` (`job_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `positioninfo_ibfk_2` FOREIGN KEY (`pos_providerId`) REFERENCES `hr` (`hr_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for resume
-- ----------------------------
DROP TABLE IF EXISTS `resume`;
CREATE TABLE `resume`  (
  `res_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '简历ID',
  `res_owner` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '简历所属用户',
  `res_realName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '简历真实姓名',
  `res_sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '性别',
  `res_createdTime` datetime(0) NULL DEFAULT NULL COMMENT '简历创建时间',
  `res_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '地址',
  `res_nativePlace` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '籍贯',
  `res_marriage` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '婚否',
  `res_telephone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `res_email` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'email',
  `res_education` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教育程度',
  `res_identify` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份信息',
  `res_wanted` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '求职意向',
  `res_evaluate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '自我评价',
  PRIMARY KEY (`res_id`) USING BTREE,
  INDEX `res_owner`(`res_owner`) USING BTREE,
  CONSTRAINT `resume_ibfk_1` FOREIGN KEY (`res_owner`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for resume_mailing
-- ----------------------------
DROP TABLE IF EXISTS `resume_mailing`;
CREATE TABLE `resume_mailing`  (
  `resm_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '简历投递ID',
  `resm_resId` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '所投递的简历ID',
  `resm_posId` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '接收方ID（hrID）',
  `resm_date` datetime(0) NULL DEFAULT NULL COMMENT '投递日期',
  `resm_state` int(1) NULL DEFAULT NULL COMMENT '投递状态',
  PRIMARY KEY (`resm_id`) USING BTREE,
  INDEX `resm_resId`(`resm_resId`) USING BTREE,
  INDEX `resm_posId`(`resm_posId`) USING BTREE,
  CONSTRAINT `resume_mailing_ibfk_1` FOREIGN KEY (`resm_resId`) REFERENCES `resume` (`res_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `resume_mailing_ibfk_2` FOREIGN KEY (`resm_posId`) REFERENCES `hr` (`hr_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `role_id` int(1) NOT NULL,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role_detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_realName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '真实姓名',
  `user_degree` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学历',
  `user_workingYear` int(255) NULL DEFAULT NULL COMMENT '工作年份',
  `user_roleId` int(1) NULL DEFAULT NULL COMMENT '角色id 0:普通求职者 1：管理员',
  `user_state` int(1) NULL DEFAULT NULL COMMENT '用户状态',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `user_roleId`(`user_roleId`) USING BTREE,
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_roleId`) REFERENCES `role` (`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

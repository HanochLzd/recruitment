# recruitment
<h2>招聘网站项目（已废除）</h2><br>
<hr>
⚡⚡⚡协同开发🕒（参照<a href="https://www.lagou.com/">拉勾网</a>）

<br>
Tables(表)

	user(求职者)
	|--id(varchar(32)),username(昵称),email(用户注册使用),password(MD5),realName,最高学历,工作年限,roleid,state(认证状态)

	hr(招聘信息发布者)
	|--id,hr_name,hr_email,hr_password,compony_id,state

	company(公司)
	|--id(公司代码),com_name,com_type,com_image,服务类型,融资类型,公司人数

	positionInfo(招聘信息)
	|--id,pos_name,pos_type,provider_id,date(招聘信息发布时间),薪资，就职地点，在职类型，工作经验要求，学历要求，职位诱惑，描述，岗位热度

	position_evaluation(招聘信息评价)
	|--id,父级id,当前级别,content,praise_up,praise_down,userid

	role(角色)
	|--role_id,role_name,role_detail

	resume(简历)
	|--id,owner,realName,sex,date,address,籍贯，政治面貌，婚姻状况，联系电话，电子邮件，教育经历，证件号，求职意向，自我评价
	
	resume_mailing(简历投递)
	|--id,resume_id,position_id(投递方),date(投递时间),state(状态)

	公司审核表

数据字典：

	1.职位类型
	    |--职位编号，职位名称
	    例如：p1,产品经理  p2,java  p3,Python

	2.工作地点
	    |--地点ID，地点名称
	    例：1，北京  2，上海

	3.薪水需求
	    |--薪水ID，薪水选项
	    例如：1，2K以下 2,2k-5K 3,5K-10K

	5.公司规模
	    |--编号，公司规模
	    例如：1，没要求  2，初创型  3，成长型  4，成熟型

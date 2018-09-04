package cn.soft.zhaopin.base.pojo.vo;

import cn.soft.zhaopin.base.pojo.po.Job;

/**
 * @author Hanoch
 * @version 1.0
 * @date 2018/9/4 10:46
 */
public class JobCustom extends Job {

    /**
     * 顶层分组名称
     */
    private String mainGroupName;

    /**
     * 二层分组名称
     */
    private String groupName;

    public String getMainGroupName() {
        return mainGroupName;
    }

    public void setMainGroupName(String mainGroupName) {
        this.mainGroupName = mainGroupName;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    @Override
    public String toString() {
        return "JobCustom{" +
                "mainGroupName='" + mainGroupName + '\'' +
                ", groupName='" + groupName + '\'' + super.toString() +
                '}';
    }
}

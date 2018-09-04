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
    private String goupName;

    public String getMainGroupName() {
        return mainGroupName;
    }

    public void setMainGroupName(String mainGroupName) {
        this.mainGroupName = mainGroupName;
    }

    public String getGoupName() {
        return goupName;
    }

    public void setGoupName(String goupName) {
        this.goupName = goupName;
    }

    @Override
    public String toString() {
        return "JobCustom{" +
                "mainGroupName='" + mainGroupName + '\'' +
                ", goupName='" + goupName + '\'' + super.toString() +
                '}';
    }
}

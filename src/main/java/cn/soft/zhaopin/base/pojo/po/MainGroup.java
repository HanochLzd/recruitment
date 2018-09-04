package cn.soft.zhaopin.base.pojo.po;

public class MainGroup {
    private Integer mainGroupId;

    private String mainGroupName;

    public Integer getMainGroupId() {
        return mainGroupId;
    }

    public void setMainGroupId(Integer mainGroupId) {
        this.mainGroupId = mainGroupId;
    }

    public String getMainGroupName() {
        return mainGroupName;
    }

    public void setMainGroupName(String mainGroupName) {
        this.mainGroupName = mainGroupName == null ? null : mainGroupName.trim();
    }
}
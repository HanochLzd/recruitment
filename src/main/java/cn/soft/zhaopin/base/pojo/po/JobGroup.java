package cn.soft.zhaopin.base.pojo.po;

public class JobGroup {
    private Integer groupId;

    private String groupName;

    private Integer mainGroupId;

    private String groupDetail;

    private String groupOther;

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName == null ? null : groupName.trim();
    }

    public Integer getMainGroupId() {
        return mainGroupId;
    }

    public void setMainGroupId(Integer mainGroupId) {
        this.mainGroupId = mainGroupId;
    }

    public String getGroupDetail() {
        return groupDetail;
    }

    public void setGroupDetail(String groupDetail) {
        this.groupDetail = groupDetail == null ? null : groupDetail.trim();
    }

    public String getGroupOther() {
        return groupOther;
    }

    public void setGroupOther(String groupOther) {
        this.groupOther = groupOther == null ? null : groupOther.trim();
    }
}
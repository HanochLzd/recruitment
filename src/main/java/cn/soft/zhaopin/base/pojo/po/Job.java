package cn.soft.zhaopin.base.pojo.po;

public class Job {
    private Integer jobId;

    private String jobName;

    private String jobNickname;

    private Integer jobGroupId;

    private Integer jobLevel;

    public Integer getJobId() {
        return jobId;
    }

    public void setJobId(Integer jobId) {
        this.jobId = jobId;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName == null ? null : jobName.trim();
    }

    public String getJobNickname() {
        return jobNickname;
    }

    public void setJobNickname(String jobNickname) {
        this.jobNickname = jobNickname == null ? null : jobNickname.trim();
    }

    public Integer getJobGroupId() {
        return jobGroupId;
    }

    public void setJobGroupId(Integer jobGroupId) {
        this.jobGroupId = jobGroupId;
    }

    public Integer getJobLevel() {
        return jobLevel;
    }

    public void setJobLevel(Integer jobLevel) {
        this.jobLevel = jobLevel;
    }
}
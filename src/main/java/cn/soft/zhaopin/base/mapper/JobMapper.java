package cn.soft.zhaopin.base.mapper;

import cn.soft.zhaopin.base.pojo.po.Job;
import cn.soft.zhaopin.base.pojo.po.JobExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface JobMapper {
    int countByExample(JobExample example);

    int deleteByExample(JobExample example);

    int deleteByPrimaryKey(Integer jobId);

    int insert(Job record);

    int insertSelective(Job record);

    List<Job> selectByExample(JobExample example);

    Job selectByPrimaryKey(Integer jobId);

    int updateByExampleSelective(@Param("record") Job record, @Param("example") JobExample example);

    int updateByExample(@Param("record") Job record, @Param("example") JobExample example);

    int updateByPrimaryKeySelective(Job record);

    int updateByPrimaryKey(Job record);
}
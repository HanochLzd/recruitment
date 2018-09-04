package cn.soft.zhaopin.base.mapper;

import cn.soft.zhaopin.base.pojo.po.JobGroup;
import cn.soft.zhaopin.base.pojo.po.JobGroupExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface JobGroupMapper {
    int countByExample(JobGroupExample example);

    int deleteByExample(JobGroupExample example);

    int deleteByPrimaryKey(Integer groupId);

    int insert(JobGroup record);

    int insertSelective(JobGroup record);

    List<JobGroup> selectByExample(JobGroupExample example);

    JobGroup selectByPrimaryKey(Integer groupId);

    int updateByExampleSelective(@Param("record") JobGroup record, @Param("example") JobGroupExample example);

    int updateByExample(@Param("record") JobGroup record, @Param("example") JobGroupExample example);

    int updateByPrimaryKeySelective(JobGroup record);

    int updateByPrimaryKey(JobGroup record);
}
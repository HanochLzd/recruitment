package cn.soft.zhaopin.base.mapper;

import cn.soft.zhaopin.base.pojo.po.MainGroup;
import cn.soft.zhaopin.base.pojo.po.MainGroupExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MainGroupMapper {
    int countByExample(MainGroupExample example);

    int deleteByExample(MainGroupExample example);

    int deleteByPrimaryKey(Integer mainGroupId);

    int insert(MainGroup record);

    int insertSelective(MainGroup record);

    List<MainGroup> selectByExample(MainGroupExample example);

    MainGroup selectByPrimaryKey(Integer mainGroupId);

    int updateByExampleSelective(@Param("record") MainGroup record, @Param("example") MainGroupExample example);

    int updateByExample(@Param("record") MainGroup record, @Param("example") MainGroupExample example);

    int updateByPrimaryKeySelective(MainGroup record);

    int updateByPrimaryKey(MainGroup record);
}
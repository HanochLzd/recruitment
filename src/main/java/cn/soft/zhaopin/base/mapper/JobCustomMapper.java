package cn.soft.zhaopin.base.mapper;

import cn.soft.zhaopin.base.pojo.vo.JobCustom;

import java.util.List;

/**
 * @author Hanoch
 * @version 1.0
 * @date 2018/9/4 15:22
 */
public interface JobCustomMapper {

    /**
     * 查询所有岗位类型
     *
     * @return jobs
     */
    List<JobCustom> selectJobList();
}

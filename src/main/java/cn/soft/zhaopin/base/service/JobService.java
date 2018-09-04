package cn.soft.zhaopin.base.service;

import cn.soft.zhaopin.base.pojo.vo.JobCustom;

import java.util.List;
import java.util.Map;

/**
 * @author Hanoch
 * @version 1.0
 * @date 2018/9/4 10:45
 */
public interface JobService {

    /**
     * 查询所有岗位类型
     *
     * @return jobs
     */
    Map<String, Object> queryAllJob();
}

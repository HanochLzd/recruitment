package cn.soft.zhaopin.base.service.impl;

import cn.soft.zhaopin.base.mapper.JobCustomMapper;
import cn.soft.zhaopin.base.pojo.po.Job;
import cn.soft.zhaopin.base.pojo.vo.JobCustom;
import cn.soft.zhaopin.base.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author Hanoch
 * @version 1.0
 * @date 2018/9/4 10:53
 */
@Service
@Transactional(rollbackFor = RuntimeException.class)
public class JobServiceImpl implements JobService {

    private final JobCustomMapper jobCustomMapper;

    @Autowired
    public JobServiceImpl(JobCustomMapper jobCustomMapper) {
        this.jobCustomMapper = jobCustomMapper;
    }

    @Override
    public List<JobCustom> queryAllJob() {
        return null;
    }
}

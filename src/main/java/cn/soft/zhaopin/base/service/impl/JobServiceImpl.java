package cn.soft.zhaopin.base.service.impl;

import cn.soft.zhaopin.base.mapper.JobCustomMapper;
import cn.soft.zhaopin.base.mapper.JobGroupMapper;
import cn.soft.zhaopin.base.mapper.MainGroupMapper;
import cn.soft.zhaopin.base.pojo.po.*;
import cn.soft.zhaopin.base.pojo.vo.JobCustom;
import cn.soft.zhaopin.base.service.JobService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Hanoch
 * @version 1.0
 * @date 2018/9/4 10:53
 */
@Service
@Transactional(rollbackFor = RuntimeException.class)
public class JobServiceImpl implements JobService {


    @Autowired
    private JobGroupMapper jobGroupMapper;

    @Autowired
    private JobCustomMapper jobCustomMapper;

    @Autowired
    private MainGroupMapper mainGroupMapper;

    @Override
    public Map<String, Object> queryAllJob() {
        List<JobCustom> jobCustomList = jobCustomMapper.selectJobList();
//        jobCustomList.forEach(System.out::println);

        //转成map格式
        List<MainGroup> mainGroups = mainGroupMapper.selectByExample(new MainGroupExample());

        List<JobGroup> jobGroups = jobGroupMapper.selectByExample(new JobGroupExample());

        Map<String, Object> jobMap = new HashMap<>();
        for (MainGroup mainGroup : mainGroups) {
            Map<String, List<JobCustom>> jobs2 = new HashMap<>();
            for (JobGroup jobGroup : jobGroups) {
                List<JobCustom> jobs = new ArrayList<>();
                for (JobCustom jobCustom : jobCustomList) {
                    if (jobCustom.getGroupName().equals(jobGroup.getGroupName()) &&
                            jobCustom.getMainGroupName().equals(mainGroup.getMainGroupName())) {
                        jobs.add(jobCustom);
                    }
                }
                if (!jobs.isEmpty()) {
                    jobs2.put(jobGroup.getGroupName(), jobs);
                }
            }
            if (!jobs2.isEmpty()) {
                jobMap.put(mainGroup.getMainGroupName(), jobs2);
            }
        }
        return jobMap;
//        JSONObject jsonObject = new JSONObject(jobMap);
//        System.out.println(jsonObject);
    }
}

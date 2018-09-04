package cn.soft.zhaopin.base.service.impl;

import cn.soft.zhaopin.base.mapper.JobCustomMapper;
import cn.soft.zhaopin.base.mapper.JobGroupMapper;
import cn.soft.zhaopin.base.mapper.MainGroupMapper;
import cn.soft.zhaopin.base.pojo.po.JobGroup;
import cn.soft.zhaopin.base.pojo.po.JobGroupExample;
import cn.soft.zhaopin.base.pojo.po.MainGroup;
import cn.soft.zhaopin.base.pojo.po.MainGroupExample;
import cn.soft.zhaopin.base.pojo.vo.JobCustom;
import com.alibaba.fastjson.JSONObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring/applicationContext-*.xml")
public class JobServiceImplTest {

    @Autowired
    private JobCustomMapper jobCustomMapper;

    @Autowired
    private JobGroupMapper jobGroupMapper;

    @Autowired
    private MainGroupMapper mainGroupMapper;

    @Test
    public void queryAllJob() {
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

        JSONObject jsonObject = new JSONObject(jobMap);
        System.out.println(jsonObject);

//        System.out.println(jobMap);

    }

    @Test
    public void test2() {
        Map<String, Object> jobMap = new HashMap<>();

        Map<String, List<JobCustom>> jobs2 = new HashMap<>();

        List<JobCustom> jobCustomList = new ArrayList<>();
        JobCustom j1 = new JobCustom();
        j1.setMainGroupName("开发");
        j1.setGroupName("后台开发");
        j1.setJobName("java");

        JobCustom j2 = new JobCustom();
        j2.setMainGroupName("开发");
        j2.setGroupName("移动开发");
        j2.setJobName("IOS");

        jobCustomList.add(j1);
        jobCustomList.add(j2);

        jobs2.put("后台开发", jobCustomList);
        jobMap.put("开发", jobs2);


        JSONObject jsonObject;
        jsonObject = new JSONObject(jobMap);

        System.out.println(jsonObject);

    }
}
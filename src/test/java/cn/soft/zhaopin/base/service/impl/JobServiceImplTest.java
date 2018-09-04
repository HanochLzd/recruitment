package cn.soft.zhaopin.base.service.impl;

import cn.soft.zhaopin.base.mapper.JobCustomMapper;
import cn.soft.zhaopin.base.pojo.vo.JobCustom;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring/applicationContext-*.xml")
public class JobServiceImplTest {

    @Autowired
    private JobCustomMapper jobCustomMapper;

    @Test
    public void queryAllJob() {
        List<JobCustom> jobCustomList = jobCustomMapper.selectJobList();
        jobCustomList.forEach(System.out::println);
        System.out.println("hhhhhhhhhh");
        System.out.println("lalala");

        System.out.println("123213123123");
    }
}
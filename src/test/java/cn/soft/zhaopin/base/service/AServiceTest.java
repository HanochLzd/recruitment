package cn.soft.zhaopin.base.service;

import cn.soft.zhaopin.base.mapper.BMapper;
import cn.soft.zhaopin.base.pojo.po.B;
import cn.soft.zhaopin.base.pojo.po.BExample;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring/applicationContext-*.xml")
public class AServiceTest {

    @Autowired
    private BMapper bMapper;

    @Test
    public void runTest() {
        List<B> examples = bMapper.selectByExample(new BExample());
        examples.forEach(System.out::println);
    }
}
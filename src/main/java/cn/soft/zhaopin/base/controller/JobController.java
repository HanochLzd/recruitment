package cn.soft.zhaopin.base.controller;

import cn.soft.zhaopin.base.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

/**
 * @author Hanoch
 * @version 1.0
 * @date 2018/9/4 19:53
 */
@Controller
public class JobController {

    @Autowired
    private JobService jobService;

    @RequestMapping("/jobs")
    @ResponseBody
    public Map<String, Object> index() {
        return jobService.queryAllJob();
    }
}

package cn.demo.crawler;

import cn.soft.zhaopin.base.mapper.JobGroupMapper;
import cn.soft.zhaopin.base.mapper.JobMapper;
import cn.soft.zhaopin.base.mapper.MainGroupMapper;
import cn.soft.zhaopin.base.pojo.po.*;
import cn.soft.zhaopin.utils.Hanyu;
import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.IOException;
import java.net.URL;
import java.util.Arrays;

/**
 * 爬取资源(只爬取一次，目前只爬取了所有岗位，请勿运行)
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring/applicationContext-dao.xml")
public class InfoCrawler {

	@Autowired
	private JobGroupMapper jobGroupMapper;

	@Autowired
	private MainGroupMapper mainGroupMapper;

	@Autowired
	private JobMapper jobMapper;

	private Hanyu hanyu = new Hanyu();

	@Test
	public void getAllInfo() throws IOException {
		// 创建一个url实例
		// int count = 0;
		URL url = new URL("https://www.lagou.com");
		Document doc = Jsoup.parse(url, 5000);

		Elements elements = doc.select(".menu_sub.dn dl dd a");

		for (Element element : elements) {
			// insertJobGroup(element);
			System.out.println(element.text());
			insertJob(element);
		}

	}

	/**
	 * 将jobgroup信息插入数据库
	 *
	 * @param element
	 *            element
	 */
	@SuppressWarnings("unused")
	private void insertJobGroup(Element element) {
		System.out.println(element.text());
		Element parentEle = element.parent().parent().parent().previousElementSibling().child(0).getElementsByTag("h2")
				.first();
		System.out.println("父节点:" + parentEle.text());
		JobGroup jobGroup = new JobGroup();
		jobGroup.setGroupName(element.text());

		MainGroupExample mainGroupExample = new MainGroupExample();
		MainGroupExample.Criteria criteria = mainGroupExample.createCriteria();
		criteria.andMainGroupNameEqualTo(parentEle.text());
		MainGroup mainGroup = mainGroupMapper.selectByExample(mainGroupExample).get(0);

		jobGroup.setMainGroupId(mainGroup.getMainGroupId());
		jobGroupMapper.insert(jobGroup);
	}

	/**
	 * 插入岗位名称
	 *
	 * @param element
	 *            element
	 */
	private void insertJob(Element element) {
		Element parentEl = element.parent().previousElementSibling();
		System.out.println("父节点：" + parentEl.text());

		Job job = new Job();

		job.setJobName(element.text());
		job.setJobNickname(hanyu.getStringPinYin(element.text()));

		JobGroupExample example = new JobGroupExample();
		JobGroupExample.Criteria criteria = example.createCriteria();
		criteria.andGroupNameEqualTo(parentEl.text());
		JobGroup jobGroup = jobGroupMapper.selectByExample(example).get(0);

		job.setJobGroupId(jobGroup.getGroupId());

		jobMapper.insert(job);

	}

	@Test
	public void test3() throws BadHanyuPinyinOutputFormatCombination {
		// Hanyu hanyu = new Hanyu();
		// String pinyin = hanyu.getStringPinYin("java你好");
		// System.out.println(pinyin);

		HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
		format = new HanyuPinyinOutputFormat();

		format.setToneType(HanyuPinyinToneType.WITHOUT_TONE);

		String[] p = PinyinHelper.toHanyuPinyinStringArray('你', format);

		System.out.println(Arrays.toString(p));
	}

}

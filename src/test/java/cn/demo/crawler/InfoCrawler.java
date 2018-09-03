package cn.demo.crawler;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

public class InfoCrawler {

//    public static void main(String[] args) throws IOException {
//        getAllInfo(new URL("https://www.lagou.0com"));
//    }


//    private static void getAllInfo(URL url) throws IOException {
//        //创建一个url实例
//        int count = 0;
//        Document doc = Jsoup.parse(url, 5000);
//        Elements elements = doc.select("div.wrapCon a");
//        for (Element element : elements) {
//            String addr = element.attr("href");
//            boolean filterCondition = (!"".equals(element.text())) && addr.endsWith(".html") &&
//                    !(addr.contains("photo") || addr.contains("gt") || addr.contains("special") ||
//                            addr.contains("video") || addr.contains("pic") || addr.contains("qiumiao"));
//            if (filterCondition) {
//                System.out.println(element);
//
////                if (!addr.contains("fashion.huanqiu.com")){
////                    continue;
////                }
//
//                String title = element.text();
//                Document document;
//                try {
//                    document = Jsoup.parse(new URL(element.attr("href")), 5000);
//                    String newsAuthor = document.selectFirst("span.la_t_b").text().trim();
//                    System.out.println(newsAuthor);
//                    String context = document.selectFirst("div.la_con").html();
//                    String date = document.selectFirst("span.la_t_a").text();
//
//                    //从数据库最新日期开始至目前的所有新闻，以减少新闻无重复
//                    if (sdf1.parse(date).getTime() <= sdf2.parse(LATEST_DATE).getTime()) {
//                        continue;
//                    }
//                    System.out.println(sdf1.parse(date).getTime() + "-->" + sdf2.parse(LATEST_DATE).getTime());
//                    int newsType = getNewsType(addr);
//                    //存入数据库
//                    int result = putData(title, context, newsType, date, newsAuthor);
//                    count++;
//                    if (result > 0) {
//                        System.out.println("插入第" + count + "条成功！");
//                    }
//                } catch (Exception e) {
//                    e.printStackTrace();
//                }
//            }
//        }
//    }
}

//----------------------
$(function () {
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        console.log(message);
        console.log(sender);
        console.log(sendResponse);
    });
    var d = document;
    //debug
    console.log("CORRECTJP is working");
    //
    var old = [/多/g,/鳥/g,/雨/g,/両/g,/並/g,/メルカリ/g,/AQUOS/g,/aquos/g,/Aquos/g,/huaweimk/g,/あなた/g,/貴/g,/し/g,/ぶ/g,/で/g,/応/g,/ス/g,/雑/g,/貨/g,/見/g,/潰/g,/め/g,/キ/g,/ぞ/g,/舐/g,/絶/g,/対/g,/得/g,/溜/g,/達/g,/jp/g,/NHK/g,/XPERIA/g,/円/g,/LINEpay/g,/PayPay/g,/Twitter/g,/ツイッター/g,/instagram/g,/インスタ/g,/ライン/g,/LINE/g,/line/g,/風/g,/なさい/g,/強/g,/東京/g,/シリコンバレー/g,/google/g,/グーグル/g,/Google/g,/スカイツリー/g,/SKY TREE/g,/TOKYO/g,/ハ/g,/amazon/g,/アマゾン/g,/乘/g,/黑/g,/snapdragon/g,/SD/g,/PUBG/g,/労働/g,/東/g,/ラーメン/g,/🇯🇵/g,/🇰🇷/g,/🇺🇸/g,/🇬🇧/g,/🇷🇺/g,/🇩🇪/g,/🇮🇳/g,/🇿🇦/g,/🇧🇷/g,/オ/g,/愛/g,/語/g,/ぬ/g,/る/g,/iphone/g,/アイフォン/g,/だ/g,/変/g,/榮/g,/強/g,/う/g,/ハ/g,/応/g,/偉/g,/義/g,/結/g,/協/g,/調/g,/剤/g,/様/g,/セ/g,/動/g,/評/g,/ファーウェイ/g,/HUAWEI/g]
    var nw = ["乡","乌","丽","两","业","淘宝網","HUAWEI","HUAWEI","HUAWEI","ファーウェイウェイ","貴様","贵","レ","ふ","て",'应','ヌ','杂',"货","见","溃","ぬ","ギ","そ","舐","绝","对","慧","贮","们","cn","CCTV","HUAWEI","人民元","alipay","WechatPay","weibo","ウェイボ","Tiktok","Tiktok","wechat","wechat","wechat","风","(しなさい)","强","北京","深圳","百度","百度","百度","上海中心","shanghai tower","上海","八゜","亚马逊","亚马逊","乘","黑","Kirin","NM","荒野行動","極度勞動","东","うーメソ","🇨🇳","🇨🇳","🇨🇳","🇨🇳","🇨🇳","🇨🇳","🇨🇳","🇨🇳","🇨🇳","才","爱","语","ゐ","ゑ","HUAWEI","ファーウェイ","た","變","荣","强","ラ","八","应","伟","义","结","协","调","剂","樣","乜",'动',"评","华为技术有限公司","华为技术有限公司"]
   
    $('p').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('.st').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('h1').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('em').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('h2').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('h3').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('h4').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('h5').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('dt').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('dd').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    $('a').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
    //article-body-more
    $('.article-body-more').each(function () {
        for(var i=0, len=old.length; i<len; i++){
          var txt = $(this).html();
          $(this).html(
            txt.replace(old[i],nw[i])
          );
        }
    });
});
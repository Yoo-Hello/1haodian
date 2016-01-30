$(function(){
    //导航下拉
    var denglu=$(".topdaohang-denglu")[0];
    var dengluxl=$(".denluxl")[0];
    hover(denglu,function(){
        dengluxl.style.display="block"
    },function(){
        dengluxl.style.display="none"
    })




	//搜索框
	var sousuokuang=$(".sousuokuang")[0];
	sousuokuang.onfocus=function(){
		if(sousuokuang.value=="年度畅销榜 幸福大盘点"){
			sousuokuang.value=""
		}
	}
	sousuokuang.onblur=function(){
		if(sousuokuang.value==""){
		    sousuokuang.value="年度畅销榜 幸福大盘点";
		}
	}


	//轮播

	var imgbox=$(".imgbox");
	var banneran=$(".circle");
	var jiantouz=$(".jiantouz")[0];
	var jiantouy=$(".jiantouy")[0];
	var num=1;
	function lunbo(){
		if(num>=6){
			num=0
		}
        for(var i=0;i<imgbox.length;i++){
        	imgbox[i].style.zIndex=9;
        	imgbox[i].style.opacity=0;
        	banneran[i].style.background="#cccccc";
        }
        banneran[num].style.background="#ff4500";
        animate(imgbox[num],{opacity:1});
        imgbox[num].style.zIndex=10;
        num++;
	}
	var lunboT=setInterval(lunbo,10000)

	//按钮控制轮播
	for(var i=0;i<banneran.length;i++){
		banneran[i].index=i;
		banneran[i].onmouseover=function(){
			clearInterval(lunboT);
            for(var j=0;j<banneran.length;j++){
                banneran[j].style.background="#cccccc";
                imgbox[j].style.opacity=0;
                imgbox[j].style.zIndex=9;
            }
            banneran[this.index].style.background="#ff4500"
            imgbox[this.index].style.zIndex=10;
            animate(imgbox[this.index],{opacity:1});
        }
        banneran[i].onmouseout=function(){
        	lunboT=setInterval(lunbo,10000);
        	num=this.index+1;
        }
	}

	//移到图片上停止轮播
	for(var i=0;i<imgbox.length;i++){
		imgbox[i].index=i;
		imgbox[i].onmouseover=function(){
			clearInterval(lunboT);
			animate(jiantouz,{opacity:1});
			animate(jiantouy,{opacity:1});
		}
		imgbox[i].onmouseout=function(){
			lunboT=setInterval(lunbo,10000);
        	animate(jiantouz,{opacity:0});
			animate(jiantouy,{opacity:0});
		}
	}
		//左右箭头切换banner
	jiantouz.onmouseover=function(){
	    clearInterval(lunboT);
	    animate(jiantouz,{opacity:1});
		animate(jiantouy,{opacity:1});
		num=num-1;
	}
	jiantouz.onmouseout=function(){
	    	animate(jiantouz,{opacity:0});
			animate(jiantouy,{opacity:0});
			lunboT=setInterval(lunbo,10000);
			num=num+1;
	}
	jiantouy.onmouseover=function(){
	    	clearInterval(lunboT);
	    	animate(jiantouz,{opacity:1});
			animate(jiantouy,{opacity:1});
			num=num-1;
	}
	jiantouy.onmouseout=function(){
	    	animate(jiantouz,{opacity:0});
			animate(jiantouy,{opacity:0});
			lunboT=setInterval(lunbo,10000);
			num=num+1;
	}
	jiantouz.onclick=function(){
		for(var j=0;j<imgbox.length;j++){
        	imgbox[j].style.zIndex=9;
        	imgbox[j].style.opacity=0;
        	banneran[j].style.background="#cccccc";
        }
        num=num-1;
        if(num<0){
        	num=6
        }
        banneran[num].style.background="#ff4500";
        animate(imgbox[num],{opacity:1});
        imgbox[num].style.zIndex=10;
	}
	jiantouy.onclick=function(){
		for(var j=0;j<imgbox.length;j++){
        	imgbox[j].style.zIndex=9;
        	imgbox[j].style.opacity=0;
        	banneran[j].style.background="#cccccc";
        }
        num=num+1;
        if(num>6){
        	num=0
        }
        
        banneran[num].style.background="#ff4500";
        animate(imgbox[num],{opacity:1});
        imgbox[num].style.zIndex=10;
	}



    //banner选项卡
    var bannerli=$(".bannerli");
    var bannerxxk=$(".bannerxxk");
    for(var i=0;i<bannerli.length;i++){
        bannerli[i].index=i;
        hover(bannerli[i],function(){
            for(var j=0;j<bannerxxk.length;j++){
                bannerxxk[j].style.display="none"
            }
            bannerxxk[this.index].style.display="block";
        },function(){
            bannerxxk[this.index].style.display="none"
        })
    }





	    
	//推荐产品图片左移
	var tuijianimg=$(".tuijian-box2-img");
	for(var i=0;i<tuijianimg.length;i++){
		tuijianimg[i].index=i;
		tuijianimg[i].onmouseover=function(){
			animate(tuijianimg[this.index],{marginLeft:-10},200);
		}
		tuijianimg[i].onmouseout=function(){
			animate(tuijianimg[this.index],{marginLeft:0},200);
		}
	}
	
    //图片闪白
    var shanbai=$(".neirong-body-img");
    for(var i=0;i<shanbai.length;i++){
    	shanbai[i].index=i;
    	shanbai[i].onmouseover=function(){
    		shanbai[this.index].style.opacity=0.8;
    		animate(shanbai[this.index],{opacity:1},100);
    	}
    	
    }


    //小轮播
    function xiaolb(aa){
	    var xlunboimg=$(".neirong-body2-imgbox")[aa];
	    var xlunboan=$(".neirong-body2-anniu")[aa];
	    var anp=$(".anp",xlunboan);
	    var ana=$(".ana",xlunboan);
	    var nums=1;
	    var numn=1;
	    animate(anp[0],{width:30},5000);
	    function xlunbo(){
	    	if(nums>=3){
	    			nums=0;
	    		}
	    	animate(xlunboimg,{left:-330*nums},400)
	    	
	    	if(numn>=3){
	    		numn=0;
	    	}
	    	for(var i=0;i<anp.length;i++){
	    		anp[i].style.width=0;
	    		anp[i].style.display="none";
	    	}
	    	anp[numn].style.display="block";
	    	animate(anp[numn],{width:30},5000);
	    	numn++;
	    	nums++;
	    }
	    var xlunboT=setInterval(xlunbo,5000);

	    for(var i=0;i<ana.length;i++){
	    	ana[i].index=i;
	    	ana[i].onmouseover=function(){
	    		clearInterval(xlunboT);
	    		for(var j=0;j<anp.length;j++){
	    			anp[j].style.width=0;
	    			anp[j].style.display="none";
	    		}
	    		animate(xlunboimg,{left:-330*this.index},400);
	    		anp[this.index].style.display="block";
	    		anp[this.index].style.width=30+"px";
	    	}
	    	ana[i].onmouseout=function(){
	    		xlunboT=setInterval(xlunbo,5000);
	    		nums=this.index+1;
	    		if(nums>=2){
	    			nums=0;
	    		}
	    		numn=this.index+1;
	    		if(numn>=2){
	    			numn=0;
	    		}

	    	}
	    }
    }
    for(var i=0;i<8;i++){
    	xiaolb(i);
    }


    //闪购效果
    var sgbox=$(".neirong-top-center")[0];
    var sgana=$("a",sgbox);
    var sgan=$(".sgan");
    var sgbox=$(".shangoubox");
    var sgjt=$(".shangoujiantou")[0];
    var shangoup=$(".shangoup");
    var sgimg=$(".sgimg");
    var sga=$(".sga");
    for(var i=0;i<sgan.length;i++){
    	sgan[i].index=i;
    	sgan[i].onmouseover=function(){
            for(var j=0;j<sgbox.length;j++){
            	sgbox[j].style.display="none";
            	sgbox[j].style.zIndex=9;
            	sgan[j].style.color="#333333";
            	sgana[j].style.color="#333333";
            }
            sgbox[this.index].style.display="block";
            sgbox[this.index].style.zIndex=10;
            sgana[this.index].style.color="#cea145"
            animate(sgjt,{left:this.index*68+92},300,Tween.Quad.easeOut);
    	}
    }

    for(var i=0;i<sga.length;i++){
    	sga[i].index=i;
    	hover(sga[i],function(){
    		for(var j=0;j<shangoup.length;j++){
    			shangoup[j].style.display="none";
    		}
    		shangoup[this.index].style.display="block";
    	},function(){
    		shangoup[this.index].style.display="none";
    	})
    }


    //楼层跳转
    var lcan=$(".lcan");
    var lcan1=$(".lcan1");
    var nrbox=$(".nrbox");
    var sptext=$(".sptext");
    var lcbox=$(".lcbox")[0];
    var lcimg=$("img",lcbox);
    var fankui=$(".fankui")[0];
    var num;
    //楼层按钮变色
    for(var i=0;i<lcan.length;i++){
    	lcan[i].index=i;
    	lcan[i].onmouseover=function(){
    		lcan[this.index].style.background="#ff3c3c";
    		lcan[this.index].style.borderColor="#e60012";
    		sptext[this.index].style.color="#ffffff";
    		sptext[this.index].style.display="block";
    		lcimg[this.index].style.display="none";
    	}
        lcan[i].onmouseout=function(){
    		lcan[this.index].style.background="#ffffff"
    		lcan[this.index].style.borderColor="#cccccc";
    		lcimg[this.index].style.display="block";
    		sptext[this.index].style.display="none";
    		fankui.style.display="block";
    		fankui.style.color="#ff4500";

    		lcan1[num].style.background="#ff3c3c";
            lcan1[num].style.borderColor="#e60012";
            sptext[num].style.color="#ffffff";
            sptext[num].style.display="block";
            lcimg[num].style.display="none";
        }
    }

    //按钮控制滚动条
    for(var i=0;i<lcan1.length;i++){
    	lcan1[i].index=i;
    	lcan1[i].onclick=function(){
    		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    		animate(obj,{scrollTop:nrbox[this.index].offsetTop-200},300)
    		lcan[this.index].style.background="#ff3c3c";
    		lcan[this.index].style.borderColor="#e60012";
    		sptext[this.index].style.color="#ffffff";
    		sptext[this.index].style.display="block";
    		lcimg[this.index].style.display="none";
            num=this.index;

    	}

    }

    //滚动条控制按钮变亮
    
   
    window.onscroll=function(){
    	var scrollT=getScrollT();
    	if(scrollT>940){
    		lcbox.style.display="block";
    	}else{
    		lcbox.style.display="none";
    	}

    	for(var i=0;i<nrbox.length;i++){
    		nrbox[i].t=nrbox[i].offsetTop;
    		if(nrbox[i].t-219<scrollT){
    			for(var j=0;j<lcan1.length;j++){
    				lcan1[j].style.background="#ffffff";
    			    lcan1[j].style.borderColor="#cccccc";
    			    lcimg[j].style.display="block";
    			    sptext[j].style.display="none";
    			    fankui.style.display="block";
    			    fankui.style.color="#ff4500";
    			}
    			lcan1[i].style.background="#ff3c3c";
    		    lcan1[i].style.borderColor="#e60012";
    		    sptext[i].style.color="#ffffff";
    		    sptext[i].style.display="block";
    		    lcimg[i].style.display="none";
    			num=i;
    		}
    	}
    }

    //TOP返回顶部
    var fanhuiTop=$(".fanhuiTop")[0];
    fanhuiTop.onclick=function(){
         var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    		animate(obj,{scrollTop:0},300)
    }

})                 
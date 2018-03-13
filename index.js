
	
		
		for(let i=0;i<900;i++){
			//创建座位
			var sate = document.createElement('div');
			
			//创建座位号，每项在序号后+1，避免“座位0”出现。
			var text = document.createTextNode(i+1);
			
			sate.appendChild(text);
			//类名
			sate.className= 'sate';
			
			//css样式
			sate.style.height =  '25px';
			sate.style.width = '25px';
			sate.style.background = 'gainsboro';
			sate.style.border = '1px solid black';
			sate.style.margin = '2px';
			sate.style.float = 'left';
			
			//座位号
			
			//插入
			document.body.appendChild(sate);
		}
		
		
		//事件委托
		document.body.addEventListener('click',function(e){
			
			//获取当前选中的目标
			 var target =  e.target; 
			 
			target.style.background = target.style.background=='gainsboro'?'yellow':'gainsboro';
			  
			  
		},false);

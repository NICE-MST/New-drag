    function limitDrag(id){
			Drag.call(this, id);			//继承属性
		}

		for(var i in Drag.prototype){
			limitDrag.prototype[i]=Drag.prototype[i];
		}

		limitDrag.prototype.fnMove=function (ev){	//我们需要写限制左右不出界只是需要改一下继承的fnMove这个方法
			var oEvent=ev||event;
			var l=oEvent.clientX-this.disX;
			var t=oEvent.clientY-this.disY;
			if(l<0){
				l=0;
			}else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth){
				l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
			}
			this.oDiv.style.left=l+'px';
			this.oDiv.style.top=t+'px';
		};

import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
    selector: '[appDrag]'
})
export class DragDirective implements OnInit {

    private isDown = false;
    private disX = 0;
    private disY = 0;

    constructor(private el: ElementRef) { }

    /*  ElementRef是一个服务，它赋予我们通过它的nativeElement属性直接访问 "DOM 元素"的能力  */

    ngOnInit() {
        // this.el.nativeElement.style.left = (document.documentElement.clientWidth - this.el.nativeElement.offsetWidth) / 2 + 'px';
        // this.el.nativeElement.style.top = (document.documentElement.clientHeight - this.el.nativeElement.offsetHeight) / 2 + 'px';

        /* 模态框距左边的距离是document的宽度减去模态框的宽度除以二，同理得出距上面的距离 */

        fromEvent(window, 'resize').subscribe(() => {
            // this.el.nativeElement.style.left = (document.documentElement.clientWidth - this.el.nativeElement.offsetWidth) / 2 + 'px';
            // this.el.nativeElement.style.top = (document.documentElement.clientHeight - this.el.nativeElement.offsetHeight) / 2 + 'px';
        });

        /* 监控浏览区大小变化，将其设置在浏览器中间位置 */

    }

    // 点击事件
    @HostListener('mousedown', ['$event']) onMousedown(event) {
        // 禁止选中close
        // if (event.target.className.indexOf('icon-close') !== -1) {
        //   return;
        // }
        console.log(event,
        );
        // if (event.target.className.indexOf('drag-title') !== -1) {
        // 移动区域
        this.isDown = true;
        //   记录点击时候的坐标以及偏移量
        console.log(this.el.nativeElement.offsetLeft,this.el.nativeElement.offsetTop)
        this.disX = event.clientX - this.el.nativeElement.offsetLeft;
        this.disY = event.clientY - this.el.nativeElement.offsetTop;
        // }
    }
    // 监听document移动事件事件
    @HostListener('document:mousemove', ['$event']) onMousemove(event) {
        // 判断该元素是否被点击了。
        console.log(event)
        this.el.nativeElement.style.left=event.clientX
        // if (this.isDown) {
        //   // 移动中;
        //   const newdisX = event.clientX;
        //   const newdisY = event.clientY;
        //   let oLeft = newdisX - this.disX;
        //   let oTop = newdisY - this.disY;
        //   if (oLeft < 0) {
        //     oLeft = 0;
        //   } else if (oLeft > document.documentElement.clientWidth - this.el.nativeElement.offsetWidth) {
        //     oLeft = document.documentElement.clientWidth - this.el.nativeElement.offsetWidth;
        //   }
        //   if (oTop < 0) {
        //     oTop = 0;
        //   } else if (oTop > document.documentElement.clientHeight - this.el.nativeElement.offsetHeight) {
        //     oTop = document.documentElement.clientHeight - this.el.nativeElement.offsetHeight;
        //   }
        //   this.el.nativeElement.style.left = oLeft + 'px';
        //   this.el.nativeElement.style.top = oTop + 'px';
        //   console.log(  this.el.nativeElement.style.left, this.el.nativeElement.style.top)
        // }
    }
    // 监听document离开事件

    @HostListener('document:mouseup', ['$event']) onMouseup() {
        // 只用当元素移动过了，离开函数体才会触发。
        if (this.isDown) {
            document.onmousemove = null;
            document.onmouseup = null;
            this.isDown = false;
        }
    }
}
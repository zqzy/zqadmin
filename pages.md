首页需要做的事情
整体布局的展示
整体布局有些呢  常见的就是 header sider content footer 主要的四个部分


做管理后台 
header 展示基本信息 基本操作
content  做为页面的切换  
sider  页面切换的主要源泉


<!-- content  中按钮的权限 -->
#----
按钮  在一开始设计的时候 就已经做好 
问题1 怎么如何对按钮添加权限机制
在点击进入页面？调用接口，请求接口

###<---感觉可以改进-->
对于子页面的跳转 一般页面只做两个按钮   一个取消一个确定 
在编辑 新增的情况下  两个按钮会同事存在
如果只是查看  只会存在一个按钮就是取消 /返回

##搜索栏的
现阶段 采用的平均分3个  显得很整齐 采用的是栅栏布局  中的其中一种 
###但是 如果为了以后的响应式  这么可能需要做一些 调整

<div class="searchBox code-box">

    <label for="">
        <span>门店名称：</span>
        <input nz-input placeholder="门店名称" [nzSize]="inputSize">
    </label>
    <label for="">
        <span>门店级别：</span>
        <nz-select style="width: 180px;" nzPlaceHolder="请选择" [(ngModel)]="singleValue" [nzSize]="size" nzShowSearch>
            <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
        </nz-select>
    </label>
    <label for="" style="width: 480px">
        <span>创建时间：</span>
        <nz-range-picker [nzFormat]="dateFormat"></nz-range-picker>
    </label>
    <label for="">
        <span>门店地址：</span>
        <nz-cascader [nzSize]="inputSize" nzPlaceHolder="请选择" [nzOptions]="nzOptions" [(ngModel)]="value3" (ngModelChange)="onChanges($event)">
        </nz-cascader>
    </label>
    <label for="">
        <button [nzSize]="inputSize" nzType="primary" nzGhost nz-button>查询</button>
        <button [nzSize]="inputSize" nzType="danger" nzGhost nz-button>重置</button>
    </label>
</div>

#为了页面的整体
决定添加一个  面包屑 
面包屑 采用  数据 加载的形式  先定义一一串数据  然后 根据需求加载


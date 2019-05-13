<template>
    <div class="main">
        <header class="header" ref="header">
            <div class="i18n" ref="i18n">
                <span @click="curLan = 0" :class="{active: curLan == 0}">中文</span>
                <span @click="curLan = 1" :class="{active: curLan == 1}">EN</span>
            </div>
            <div class="logo" ref="logo">
                <img src="../assets/images/德必WE Logo.png"/>
            </div>
            <div class="nav" :style="{position: navPosition}" ref="nav">
                <ul>
                    <li>
                        <a href="http://www.dobechina.com">{{i18n('header.home')}}</a>
                    </li>
                    <li>
                        <span @click="scroll('introduction')">{{i18n('header.introduction')}}</span>
                    </li>
                    <li>
                        <span @click="scroll('location')">{{i18n('header.location')}}</span>
                    </li>
                    <li>
                        <span @click="scroll('design')">{{i18n('header.design')}}</span>
                    </li>
                    <li>
                        <span @click="scroll('branding')">{{i18n('header.service')}}</span>
                    </li>
                    <li>
                        <span @click="scroll('lease')">{{i18n('header.lease')}}</span>
                    </li>
                    <li class="last">
                        <span @click="scroll('contact','contactCard')">{{i18n('header.contact')}}</span>
                    </li>
                </ul>
            </div>
        </header>
        <section class="banner">
            <img src="../assets/images/banner.png"/>
        </section>
        <section class="introduce" ref="introduction">
            <div class="outer">
                <div class="angle left-top"></div>
                <div class="angle right-top"></div>
                <div class="angle right-bottom"></div>
                <div class="angle left-bottom"></div>
                <div class="inner">
                    <div class="text-1">{{i18n('introduce.text_1')}}</div>
                    <div class="text-2">{{i18n('introduce.text_2')}}</div>
                    <div class="text-3">{{i18n('introduce.text_3')}}</div>
                    <div class="text-4">{{i18n('introduce.text_4')}}</div>
                    <img src="../assets/images/矩形 1 拷贝.png"/>
                    <div class="text-5" v-if="curLan == 0">{{i18n('introduce.text_5')}}</div>
                    <div class="text-6">{{i18n('introduce.text_6')}}</div>
                    <div class="text-5" v-if="curLan == 1">{{i18n('introduce.text_5')}}</div>
                    <div class="text-7">{{i18n('introduce.text_7')}}</div>
                    <div class="text-8">DoBe WE"@NanJing</div>
                </div>
            </div>
        </section>
        <section class="location" ref="location" :style="{backgroundSize: locationBackgroundSize}">
            <div class="modal-outer" v-if="showMap" @click.self="showMap = false" :class="{active: modalActive}">
                <div class="modal-inner">
                    <div class="closer" @click="showMap = false">x</div>
                    <img src="../assets/images/location.jpg"/>
                </div>
            </div>
            <div class="left">
                <div class="top">
                    <div class="title">{{i18n('location.title')}}</div>
                </div>
                <div class="content">
                    <img src="../assets/images/图层 3.png"/>
                    <div class="text-1">{{i18n('location.text_1')}}</div>
                    <div class="item clearfix" @click="showMap = true">
                        <div class="item-left iconfont">
                            <span class="icon-qiche"></span>
                        </div>
                        <div class="item-right">
                            <div class="text-1">{{i18n('location.title_1')}}</div>
                            <div class="text-left">
                                <div class="text-2">{{i18n('location.content_1')}}</div>
                                <div class="text-2">{{i18n('location.content_2')}}</div>
                            </div>
                            <div class="text-left">
                                <div class="text-2">{{i18n('location.content_3')}}</div>
                                <div class="text-2">{{i18n('location.content_4')}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="item clearfix" @click="showMap = true">
                        <div class="item-left iconfont">
                            <span class="icon-ditie"></span>
                        </div>
                        <div class="item-right">
                            <div class="text-1">{{i18n('location.title_2')}}</div>
                            <div class="text-2">{{i18n('location.content_5')}}</div>
                        </div>
                    </div>
                    <div class="item clearfix" @click="showMap = true">
                        <div class="item-left iconfont">
                            <span class="icon-gongjiaochaxun"></span>
                        </div>
                        <div class="item-right">
                            <div class="text-1">{{i18n('location.title_3')}}</div>
                            <div class="text-2">{{i18n('location.content_6')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="design" ref="design" :style="{backgroundImage:'url(' + designBackground + ')',backgroundSize: designBackgroundSize}">
            <img src="../assets/images/design_1.jpg" ref="design_1" class="pre-img"/>
            <img src="../assets/images/design_2.jpg" ref="design_2" class="pre-img"/>
            <img src="../assets/images/design_3.jpg" ref="design_3" class="pre-img"/>
            <img src="../assets/images/design_4.jpg" ref="design_4" class="pre-img"/>
            <div class="right">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="top">
                    <div class="title">{{i18n('design.title')}}</div>
                </div>
                <div class="content">
                    <div class="item" @click="designSwitch(1)" :class="{active: designIndex == 1}">
                        <img src="../assets/images/组 9(13).png" class="hover-left"/>
                        <img src="../assets/images/组 10.png" class="hover-right"/>
                        <div class="text-1">{{i18n('design.title_1')}}</div>
                        <div class="text-2">{{i18n('design.content_1')}}</div>
                    </div>
                    <div class="item" @click="designSwitch(2)" :class="{active: designIndex == 2}">
                        <img src="../assets/images/组 9(13).png" class="hover-left"/>
                        <img src="../assets/images/组 10.png" class="hover-right"/>
                        <div class="text-1">{{i18n('design.title_2')}}</div>
                        <div class="text-2">{{i18n('design.content_2')}}</div>
                    </div>
                    <div class="item" @click="designSwitch(3)" :class="{active: designIndex == 3}">
                        <img src="../assets/images/组 9(13).png" class="hover-left"/>
                        <img src="../assets/images/组 10.png" class="hover-right"/>
                        <div class="text-1">{{i18n('design.title_3')}}</div>
                        <div class="text-2">{{i18n('design.content_3')}}</div>
                    </div>
                    <div class="item" @click="designSwitch(4)" :class="{active: designIndex == 4}">
                        <img src="../assets/images/组 9(13).png" class="hover-left"/>
                        <img src="../assets/images/组 10.png" class="hover-right"/>
                        <div class="text-1">{{i18n('design.title_4')}}</div>
                        <div class="text-2">{{i18n('design.content_4')}}</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="branding" ref="branding">
            <div class="left">
                <div class="item" ref="branding1">
                    <img src="../assets/images/组 9(7).png"/>
                    <div class="text-1">{{$i18n.branding.title_1[curLan]}}</div>
                    <div class="text-2">{{$i18n.branding.content_1[curLan]}}</div>
                </div>
                <div class="item" :style="{height: branding2Height}">
                    <img src="../assets/images/组 9(10).png"/>
                    <div class="text-1">{{$i18n.branding.title_3[curLan]}}</div>
                    <div class="text-2">{{$i18n.branding.content_3[curLan]}}</div>
                </div>
            </div>
            <div class="middle" :style="{height:middleHeight}">
                <div class="outer">
                    <div class="angle left-top"></div>
                    <div class="angle right-top"></div>
                    <div class="angle right-bottom"></div>
                    <div class="angle left-bottom"></div>
                    <div class="inner">
                        <div class="text-1">{{$i18n.branding.middle_1[curLan]}}</div>
                        <div class="text-2">{{$i18n.branding.middle_2[curLan]}}</div>
                        <div class="text-3">{{$i18n.branding.middle_3[curLan]}}</div>
                        <div class="text-4">{{$i18n.branding.middle_4[curLan]}}</div>
                        <img src="../assets/images/矢量智能对象.png"/>
                        <div class="text-5">{{$i18n.branding.middle_5[curLan]}}</div>
                        <div class="text-6">{{$i18n.branding.middle_6[curLan]}}</div>
                        <div class="text-7">{{$i18n.branding.middle_7[curLan]}}</div>
                    </div>
                </div>
            </div>
            <div class="right" ref="brandingRight">
                <div class="item" :style="{height: branding3Height}">
                    <img src="../assets/images/组 9(8).png" @load="brandingLoad"/>
                    <div class="text-1">{{$i18n.branding.title_2[curLan]}}</div>
                    <div class="text-2">{{$i18n.branding.content_2[curLan]}}</div>
                </div>
                <div class="item" ref="branding4">
                    <img src="../assets/images/组 9(11).png" @load="brandingLoad"/>
                    <div class="text-1">{{$i18n.branding.title_4[curLan]}}</div>
                    <div class="text-2">{{$i18n.branding.content_4[curLan]}}</div>
                </div>
            </div>
        </section>
        <section class="lease" ref="lease">
            <div class="title">{{$i18n.lease.title[curLan]}}</div>
            <div class="items clearfix">
                <div class="item">
                    <img src="../assets/images/组 9.png"/>
                    <div class="text-1">6800 m<sup>2</sup></div>
                    <div class="text-2">{{i18n('lease.label_1')}}</div>
                </div>
                <div class="item">
                    <img src="../assets/images/组 9(1).png"/>
                    <div class="text-1">100 ~ 1200 m<sup>2</sup></div>
                    <div class="text-2">{{i18n('lease.label_2')}}</div>
                </div>
                <div class="item">
                    <img src="../assets/images/组 9(2).png"/>
                    <div class="text-1">3.5 ~ 4.3 m</div>
                    <div class="text-2">{{i18n('lease.label_3')}}</div>
                </div>
                <div class="item">
                    <img src="../assets/images/组 9(3).png"/>
                    <div class="text-1">{{i18n('lease.value_4')}}</div>
                    <div class="text-2">{{i18n('lease.label_4')}}</div>
                </div>
                <div class="item">
                    <img src="../assets/images/组 9(4).png"/>
                    <div class="text-1">{{i18n('lease.value_5')}}</div>
                    <div class="text-2">{{i18n('lease.label_5')}}</div>
                </div>
            </div>
        </section>
        <footer class="contact" ref="contact">
            <div class="card" ref="contactCard">
                <div class="left">
                    <img src="../assets/images/logo.png" class="logo"/>
                    <div class="text-1">{{i18n('contact.title_1')}}</div>
                    <div class="text-2">{{i18n('contact.content_1')}}</div>
                    <div class="labels clearfix">
                        <span class="label-1">{{i18n('contact.label_1')}}</span>
                        <span class="label-2">{{i18n('contact.label_2')}}</span>
                    </div>
                    <div class="text-3">{{i18n('contact.title_2')}}</div>
                    <div class="text-4">{{i18n('contact.content_2')}}</div>
                    <div class="text-5">{{i18n('contact.title_3')}}</div>
                    <div class="text-6">{{i18n('contact.content_3')}}</div>
                </div>
                <div class="right">
                    <div class="text-1">{{i18n('contact.label_3')}}</div>
                    <img src="../assets/images/二维码.png" class="qr"/>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                curLan: 0,
                navPosition: '',
                showMap: false,
                modalActive: false,
                middleHeight: '',
                branding2Height: '',
                branding3Height: '',
                cardBottom: '0.64rem',
                designIndex: 1,
                designBackground: '',
                locationBackgroundSize: '40% 100%',
                designBackgroundSize: '40% 100%'
            };
        },
        computed: {},
        watch: {
            "$store.state.resize": function () {
                this.brandingLoad();
                this.locationAdjust();
                this.designAdjust();
            },
            "$store.state.scroll": function () {
                if (window.pageYOffset >= this.$refs.i18n.clientHeight + this.$refs.logo.clientHeight) {
                    this.navPosition = 'fixed';
                }
                else {
                    this.navPosition = 'static';
                }
            },
            "curLan": function () {
                this.$nextTick(() => {
                    this.brandingLoad();
                });
            },
            showMap: function (val) {
                setTimeout(() => {
                    this.modalActive = val;
                }, 100);
            }
        },
        methods: {
            i18n(key) {
                let keys = key.split('.');
                return this.$i18n[keys[0]][keys[1]][this.curLan];
            },
            brandingLoad() {
                this.branding2Height = this.$refs.branding4.clientHeight + 'px';
                this.branding3Height = this.$refs.branding1.clientHeight + 'px';
                this.$nextTick(() => {
                    this.middleHeight = this.$refs.brandingRight.clientHeight - 20 + 'px';
                });
            },
            scroll(ref, subRef) {
                clearInterval(this.timer);
                let targetScrollTop = this.$refs[ref].offsetTop - this.$refs.nav.clientHeight;
                if (subRef) {
                    targetScrollTop = targetScrollTop + this.$refs[subRef].offsetTop
                }
                this.timer = setInterval(() => {
                    let distance = targetScrollTop - window.pageYOffset;
                    let speed = Math.floor(distance / 6);   //自动滚动速度由快变慢
                    window.scrollTo(0, window.pageYOffset + speed);
                    if (Math.abs(distance) <= 6) {
                        clearInterval(this.timer);
                        window.scrollTo(0, targetScrollTop);
                    }
                }, 30);
            },
            designSwitch(index) {
                this.designIndex = index;
                this.designBackground = this.$refs['design_' + index].src;
            },
            locationAdjust(){
                let imgHeight = this.$refs.location.clientHeight;
                let imgWidth = this.$refs.location.clientWidth * 0.4;
                if(imgWidth/imgHeight > 800/960){
                    this.locationBackgroundSize = '40% auto';
                }
                else{
                    this.locationBackgroundSize = 'auto 100%';
                }
            },
            designAdjust(){
                let imgHeight = this.$refs.design.clientHeight;
                let imgWidth = this.$refs.design.clientWidth * 0.4;
                if(imgWidth/imgHeight > 800/960){
                    this.designBackgroundSize = '40% auto';
                }
                else{
                    this.designBackgroundSize = 'auto 100%';
                }
            }
        },
        mounted: function () {
            this.designBackground = this.$refs['design_1'].src;
            this.locationAdjust();
            this.designAdjust();
        }
    }
</script>

<style scoped lang="less">
    .header {
        background: url("../assets/images/组 9(19).png");
        color: #FEFEFF;
        .i18n {
            margin-left: 70%;
            span {
                background: none;
                color: #FEFEFF;
                padding: 0 15px;
                margin-right: 5px;
                line-height: 30px;
                border: 1px solid #BA9C7D;
                border-top: 0;
                cursor: pointer;
                display: inline-block;
                border-radius: 0 0 3px 3px;
                &.active {
                    background-color: #B58F64;
                    border: 0;
                    line-height: 31px;
                }
            }
        }
        .logo {
            text-align: center;
            border-bottom: 1px solid #BA9C7D;
            padding: 20px 0 40px;
            img {
                vertical-align: middle;
            }
        }
        .nav {
            top: 0;
            width: 100%;
            z-index: 2;
            background: url("../assets/images/组 9(19).png");
            ul {
                padding: 20px 0;
                width: 60%;
                margin: 0 auto;
                li {
                    width: 13%;
                    border-left: 1px solid #BA9C7D;
                    display: inline-block;
                    cursor: pointer;
                    text-align: center;
                    &.last {
                        border-right: 1px solid #BA9C7D;
                    }
                    span, a {
                        color: #e7e7e7;
                        text-decoration: none;
                        transition: color 1s;
                        &:hover {
                            color: #FFF;
                        }
                    }
                }
            }
        }
    }

    .banner {
        img {
            width: 100%;
            height: auto;
            vertical-align: bottom;
        }
    }

    .introduce {
        background: url("../assets/images/组 9(18).png");
        padding: 30px;
        .outer {
            border: 2px solid #B38E64;
            border-radius: 2px;
            padding: 10px;
            position: relative;
            .angle {
                position: absolute;
                border: 2px solid #B38E64;
                width: 22px;
                height: 22px;
                &.left-top {
                    left: 0;
                    top: 0;
                    border-left: 0;
                    border-top: 0;
                    border-bottom-right-radius: 2px;
                }
                &.right-top {
                    right: 0;
                    top: 0;
                    border-right: 0;
                    border-top: 0;
                    border-bottom-left-radius: 2px;
                }
                &.right-bottom {
                    right: 0;
                    bottom: 0;
                    border-right: 0;
                    border-bottom: 0;
                    border-top-left-radius: 2px;
                }
                &.left-bottom {
                    left: 0;
                    bottom: 0;
                    border-left: 0;
                    border-bottom: 0;
                    border-bottom-left-radius: 2px;
                }
            }
        }
        .inner {
            border: 1px solid #B38E64;
            border-radius: 2px;
            text-align: center;
            padding: 50px 0 40px;
            .text-1 {
                color: #FFF;
                font-size: 40px;
                font-weight: bold;
                margin-bottom: 40px;
            }
            .text-2 {
                color: #A3A3A3;
                font-size: 16px;
                line-height: 30px;
            }
            .text-3 {
                color: #A3A3A3;
                font-size: 16px;
                line-height: 30px;
            }
            .text-4 {
                color: #A68660;
                font-size: 16px;
                line-height: 30px;
            }
            img {
                padding: 10px 0;
            }
            .text-5 {
                color: #A3A3A3;
                font-size: 16px;
                line-height: 30px;
            }
            .text-6 {
                font-family: '宋体';
                color: #A68660;
                font-size: 60px;
                font-weight: bold;
                padding: 20px 0 30px;
            }
            .text-7 {
                font-family: '宋体';
                color: #FFF;
                font-size: 26px;
                font-weight: bold;
            }
            .text-8 {
                color: #A3A3A3;
                font-size: 16px;
                line-height: 30px;
                padding: 30px 0 0;
            }
        }
    }

    .location {
        background: url("../assets/images/右侧图片.png") no-repeat right;
        background-size: 40% 100%;
        .modal-outer {
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: 3;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, .7);
            transition: all .4s ease-in-out;
            opacity: 0;
            .modal-inner {
                width: 700px;
                height: 500px;
                border-radius: 25px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -350px;
                margin-top: -250px;
                opacity: 0;
                transform: scale(1.2);
                transition: all .4s ease-in-out;
                .closer {
                    position: absolute;
                    right: 10px;
                    top: 0;
                    cursor: pointer;
                    font-size: 30px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            &.active {
                opacity: 1;
                .modal-inner {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
        .left {
            margin-right: 40%;
            background: url("../assets/images/bg(2).png") #EEEED3 no-repeat left bottom;
            .top {
                .title {
                    margin: 0 0 0 100px;
                    border-left: 1px solid #E7E3C6;
                    font-size: 30px;
                    font-weight: bold;
                    padding: 100px 0 10px 20px;
                }
                border-bottom: 1px solid #B59064;
            }
            .content {
                margin: 20px 0 0 100px;
                border-left: 1px solid #E7E3C6;
                padding: 0 0 100px 20px;
                .text-1 {
                    color: #6B6B69;
                    font-size: 16px;
                    line-height: 30px;
                    padding: 20px 0 0;
                }
                .item {
                    border: 3px solid #ECD7AA;
                    border-radius: 8px;
                    margin: 30px 20% 0 0;
                    padding: 30px 0 30px 30px;
                    cursor: pointer;
                    transition: background-color 2s;
                    .item-left {
                        float: left;
                        width: 70px;
                        height: 70px;
                        border-radius: 35px;
                        background-color: #B59064;
                        text-align: center;
                        line-height: 70px;
                        color: #F0F0F0;
                        font-size: 35px;
                        margin-right: 20px;
                        transition: background-color 2s;
                    }
                    &:hover {
                        background-color: #EFE8BC;
                        .item-left {
                            background-color: #FFF;
                            color: #AD8C63;
                        }
                    }
                    .item-right {
                        float: left;
                        .text-1 {
                            color: #000;
                            font-size: 18px;
                            font-weight: bold;
                            line-height: 40px;
                            padding: 0;
                        }
                        .text-left {
                            display: inline-block;
                            margin-right: 10px;
                        }
                        .text-2 {
                            color: #747371;
                            font-size: 16px;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
    }

    .design {
        background-repeat: no-repeat;
        background-position: left top;
        .pre-img {
            display: none;
        }
        .right {
            margin-left: 40%;
            padding-bottom: 50px;
            background: url("../assets/images/组 9(12).png") #B79164 no-repeat right bottom;
            background-size: 100% auto;
            position: relative;
            .line-1 {
                position: absolute;
                width: 1px;
                height: 100%;
                background-color: #BD9C75;
                left: 100px;
            }
            .line-2 {
                position: absolute;
                width: 1px;
                height: 100%;
                background-color: #BD9C75;
                left: 350px;
            }
            .top {
                position: relative;
                z-index: 1;
                .title {
                    color: #FFF;
                    font-weight: bold;
                    font-size: 30px;
                    margin: 0 0 60px 100px;
                    padding: 70px 0 10px 20px;
                    border-bottom: 1px solid #FFF;
                }
            }
            .content {
                position: relative;
                z-index: 1;
                .item {
                    position: relative;
                    padding: 30px 30px 30px 120px;
                    margin-bottom: 10px;
                    transition: background-color 2s;
                    cursor: pointer;
                    img {
                        opacity: 0;
                        position: absolute;
                        height: 90%;
                        width: auto;
                        top: 5%;
                        transition: opacity 1s;
                        &.hover-left {
                            left: 5px;
                        }
                        &.hover-right {
                            right: 5px;
                        }
                    }
                    &.active {
                        background-color: #BD9B75;
                        img {
                            opacity: 1;
                        }
                    }
                    .text-1 {
                        color: #FFF;
                        font-size: 18px;
                        font-weight: bold;
                        padding-bottom: 10px;
                    }
                    .text-2 {
                        color: #D8C8B4;
                        font-size: 16px;
                        line-height: 24px;
                        padding-right: 50px;
                    }
                }
            }
        }
    }

    .branding {
        background: url("../assets/images/组 9(6).png");
        padding-top: 50px;
        .left {
            vertical-align: top;
            width: 2.7rem;
            margin-left: 0.8rem;
            display: inline-block;
        }
        .middle {
            vertical-align: top;
            width: 2.8rem;
            margin: 0 0.1rem;
            display: inline-block;
            background: url("../assets/images/组 9(9).png") no-repeat;
            background-size: 100% 100%;
            padding: 10px;
            .outer {
                border: 2px solid #C9B48C;
                border-radius: 2px;
                padding: 8px;
                position: relative;
                height: 100%;
                .angle {
                    position: absolute;
                    border: 2px solid #C9B48C;
                    width: 18px;
                    height: 18px;
                    &.left-top {
                        left: 0;
                        top: 0;
                        border-left: 0;
                        border-top: 0;
                        border-bottom-right-radius: 2px;
                    }
                    &.right-top {
                        right: 0;
                        top: 0;
                        border-right: 0;
                        border-top: 0;
                        border-bottom-left-radius: 2px;
                    }
                    &.right-bottom {
                        right: 0;
                        bottom: 0;
                        border-right: 0;
                        border-bottom: 0;
                        border-top-left-radius: 2px;
                    }
                    &.left-bottom {
                        left: 0;
                        bottom: 0;
                        border-left: 0;
                        border-bottom: 0;
                        border-bottom-left-radius: 2px;
                    }
                }
            }
            .inner {
                border: 1px solid #C9B48C;
                border-radius: 2px;
                text-align: center;
                padding: 50px 0 0;
                height: 100%;
                .text-1 {
                    color: #FFF;
                    font-size: 40px;
                    font-weight: bold;
                    margin: 0 0 30px;
                }
                .text-2 {
                    color: #A3A3A3;
                    font-size: 16px;
                    line-height: 40px;
                }
                .text-3 {
                    color: #A68660;
                    font-size: 16px;
                    line-height: 30px;
                    padding: 0 10px;
                }
                .text-4 {
                    color: #A3A3A3;
                    font-size: 16px;
                    line-height: 30px;
                    padding: 0 10px;
                }
                img {
                    padding: 50px 0;
                    max-width: 100%;
                }
                .text-5 {
                    color: #A3A3A3;
                    font-size: 16px;
                    line-height: 30px;
                }
                .text-6 {
                    font-family: '宋体';
                    color: #A68660;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 30px;
                    padding: 0 10px;
                }
                .text-7 {
                    color: #A3A3A3;
                    font-size: 16px;
                    line-height: 30px;
                }
            }
        }
        .right {
            vertical-align: top;
            width: 2.7rem;
            display: inline-block;
        }
        .item {
            background-color: #FFF;
            margin-bottom: 20px;
            img {
                width: 100%;
                height: auto;
            }
            .text-1 {
                font-size: 18px;
                font-weight: bold;
                padding: 15px 20px 10px 15px;
            }
            .text-2 {
                color: #A9A9A9;
                padding: 0 20px 20px 15px;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }

    .lease {
        padding: 70px 0 1rem;
        background: url("../assets/images/bg.png");
        .title {
            text-align: center;
            font-size: 36px;
            font-weight: bold;
        }
        .items {
            padding: 20px 2rem 0;
            .item {
                text-align: center;
                float: left;
                width: 20%;
            }
            .text-1 {
                font-weight: bold;
                color: #B68F63;
                line-height: 40px;
            }
        }
    }

    .contact {
        height: 3.4rem;
        position: relative;
        background: url("../assets/images/bg(1).png") no-repeat;
        background-size: 100% 100%;
        .card {
            width: 1200px;
            min-height: 3.4rem;
            position: absolute;
            left: 0;
            right: 0;
            top: -0.64rem;
            margin: 0 auto;
            background: url("../assets/images/组 9(5).png") no-repeat;
            background-size: 100% 100%;
            .left {
                padding: 0.52rem 0 0.5rem 120px;
                width: 65%;
                img {
                    max-width: 100%;
                    padding-bottom: 20px;
                }
                .text-1 {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 30px;
                }
                .labels {
                    padding: 0.1rem 0;
                    .label-1 {
                        background-color: #B59064;
                        border-radius: 3px 0 0 3px;
                        padding: 7px 14px;
                        color: #FFF;
                        font-weight: bold;
                        float: left;
                    }
                    .label-2 {
                        border: 2px solid #B59064;
                        border-left: 0;
                        border-radius: 0 3px 3px 0;
                        padding: 5px 14px;
                        font-weight: bold;
                        float: left;
                    }
                }
                .text-3 {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 30px;
                }
                .text-4 {
                    font-size: 30px;
                    font-weight: bold;
                    color: #B48F63;
                    padding: 0 0 0.1rem;
                }
                .text-5 {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 30px;
                }
                .text-6 {
                    font-size: 14px;
                    color: #6F6F6C;
                    line-height: 26px;
                }
            }
            .right {
                text-align: center;
                width: 35%;
                height: 174px;
                overflow: hidden;
                margin: auto 0;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                .text-1 {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 30px;
                }
            }
        }
    }
</style>

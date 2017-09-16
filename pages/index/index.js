
var redCount1 = 0;
var redCount2 = 0;
var redCount3 = 0;
var redCount4 = 0;
var redCount5 = 0;
var redCount6 = 0;
var redCount7 = 0;
var redCount8 = 0;
var redCount9 = 0;

var blueCount1 = 0;
var blueCount2 = 0;
var blueCount3 = 0;
var blueCount4 = 0;
var blueCount5 = 0;
var blueCount6 = 0;
var blueCount7 = 0;
var blueCount8 = 0;
var blueCount9 = 0;

Page({
  data: {
    redData1: 0,
    redData2: 0,
    redData3: 0,
    redData4: 0,
    redData5: 0,
    redData6: 0,
    redTotalScore:0,
    blueTotalScore:0,
    redSliderData1: "大球未移动",
    redSliderData2: "无停靠",
    redSliderData3: "大球未离开地面",
    blueData1: 0,
    blueData2: 0,
    blueData3: 0,
    blueData4: 0,
    blueData5: 0,
    blueData6: 0,
    blueTotalScore:0,
    blueTotalScore:0,
    blueSliderData1: "大球未移动",
    blueSliderData2: "无停靠",
    blueSliderData3: "大球未离开地面",
  },
  //==============================================================================================================================
  clickButton1: function(e) {
    redCount1 ++;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData1:redCount1})
  },
  clickButton2: function(e) {
    if(redCount1 > 0)
      redCount1 --;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData1:redCount1})
  },
  clickButton3: function(e) {
    redCount2 ++;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData2:redCount2})
  },
  clickButton4: function(e) {
    if(redCount2 > 0)
      redCount2 --;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData2:redCount2})
  },
  clickButton5: function(e) {
    if(redCount3 < 4)
      redCount3 ++;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData3:redCount3})
  },
  clickButton6: function(e) {
    if(redCount3 > 0)
      redCount3 --;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData3:redCount3})
  },
  listenerSliderRed1: function(e){
    redCount4 = e.detail.value*5;
    if(redCount4 == 0)
      this.setData({redSliderData1:"大球未移动"})
    else
      this.setData({redSliderData1:"大球接触地面"})
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
  },
  listenerSliderRed2: function(e){
    redCount5 = e.detail.value;
    if(redCount5 == 0)
      this.setData({redSliderData2:"无停靠"})
    else
      this.setData({redSliderData2:"停靠得"+redCount5+"分"})
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
  },

  //==============================================================================================================================
  clickButtonB1: function(e) {
    blueCount1 ++;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData1:blueCount1})
  },
  clickButtonB2: function(e) {
    if(blueCount1 > 0)
      blueCount1 --;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData1:blueCount1})
  },
  clickButtonB3: function(e) {
    blueCount2 ++;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData2:blueCount2})
  },
  clickButtonB4: function(e) {
    if(blueCount2 > 0)
      blueCount2 --;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData2:blueCount2})
  },
  clickButtonB5: function(e) {
    if(blueCount3 < 4)
      blueCount3 ++;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData3:blueCount3})
  },
  clickButtonB6: function(e) {
    if(blueCount3 > 0)
      blueCount3 --;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData3:blueCount3})
  },
  listenerSliderBlue1: function(e){
    blueCount4 = e.detail.value*5;
    if(blueCount4 == 0)
      this.setData({blueSliderData1:"大球未移动"})
    else
      this.setData({blueSliderData1:"大球接触地面"})
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
  },
  listenerSliderBlue2: function(e){
    blueCount5 = e.detail.value;
    if(blueCount5 == 0)
      this.setData({blueSliderData2:"无停靠"})
    else
      this.setData({blueSliderData2:"停靠得"+blueCount5+"分"})
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
  },
  //==============================================================================================================================
  clickButton7: function(e) {
    redCount6 ++;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData4:redCount6})
  },
  clickButton8: function(e) {
    if(redCount6 > 0)
      redCount6 --;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData4:redCount6})
  },
  clickButton9: function(e) {
    redCount7 ++;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData5:redCount7})
  },
  clickButton10: function(e) {
    if(redCount7 > 0)
      redCount7 --;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData5:redCount7})
  },
  clickButton11: function(e) {
    if(redCount8 < 4)
      redCount8 ++;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData6:redCount8})
  },
  clickButton12: function(e) {
    if(redCount8 > 0)
      redCount8 --;
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
    this.setData({redData6:redCount8})
  },
  listenerSliderRed3: function(e){
    redCount9 = e.detail.value;
    if(redCount9 == 0)
      this.setData({redSliderData3:"大球未离开地面"})
    else if(redCount9 == 1){
      this.setData({redSliderData3:"大球离开地面"})
      redCount9 = 10;
    }
    else if(redCount9 == 2){
      this.setData({redSliderData3:"大球高于横梁"})
      redCount9 = 20;
    }
    else if(redCount9 == 3){
      this.setData({redSliderData3:"大球放入筐中"})
      redCount9 = 40;
    }
    this.setData({redTotalScore: redCount1*15 + redCount2*5 + redCount3*30 + redCount4 + redCount5 + redCount6*5 + redCount7 + redCount8*10 + redCount9})
  },
  //==============================================================================================================================
  clickButtonB7: function(e) {
    blueCount6 ++;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData4:blueCount6})
  },
  clickButtonB8: function(e) {
    if(blueCount6 > 0)
      blueCount6 --;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData4:blueCount6})
  },
  clickButtonB9: function(e) {
    blueCount7 ++;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData5:blueCount7})
  },
  clickButtonB10: function(e) {
    if(blueCount7 > 0)
      blueCount7 --;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData5:blueCount7})
  },
  clickButtonB11: function(e) {
    if(blueCount8 < 4)
      blueCount8 ++;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData6:blueCount8})
  },
  clickButtonB12: function(e) {
    if(blueCount8 > 0)
      blueCount8 --;
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
    this.setData({blueData6:blueCount8})
  },
  listenerSliderblue3: function(e){
    blueCount9 = e.detail.value;
    if(blueCount9 == 0)
      this.setData({blueSliderData3:"大球未离开地面"})
    else if(blueCount9 == 1){
      this.setData({blueSliderData3:"大球离开地面"})
      blueCount9 = 10;
    }
    else if(blueCount9 == 2){
      this.setData({blueSliderData3:"大球高于横梁"})
      blueCount9 = 20;
    }
    else if(blueCount9 == 3){
      this.setData({blueSliderData3:"大球放入筐中"})
      blueCount9 = 40;
    }
    this.setData({blueTotalScore: blueCount1*15 + blueCount2*5 + blueCount3*30 + blueCount4 + blueCount5 + blueCount6*5 + blueCount7 + blueCount8*10 + blueCount9})
  },
})
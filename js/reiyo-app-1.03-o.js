//Reiyo - Framing with HTML5 canvas
//For the lovely Erepublik NACJAC



// Initialize!!!!----------------------------------
var imagedropped = false;
var resize_flag = false;
var developer_mode = false;
var img_original_width = 400;
var img_original_height = 400;
var mask_flag = false;
var eraser_flag = false;

// reset canvas
function resetcanvas(){
  eraserlayer.removeChildren();
  eraserlayer.draw();
  imagelayer.hide();
  imagelayer.draw();
  nacjac_bg.hide();
  bottomlogolayer.draw();
  simpleText.show();
  defaultlayer.draw();
  nacjac_banner.hide();
  foxhound_frame.hide();
  caesar_frame.hide();
  rocsfg_frame.hide();
  mob_frame1.hide();
  mob_frame2.hide();
  rocnt_frame.hide();
  oh_frame.hide();
  nta_frame.hide();
  toplogolayer.setAbsolutePosition(0,0);
  toplogolayer.draw();
  rocsfg_star.hide();
  ribbon.hide();
  caesar_star.hide();
  decologolayer.draw();

  //paintbrush mode reset
    imagelayer.setListening(true);
    imagelayer.setDraggable(true);
    imagelayer.draw();
    mouseMode(false);

}

//remove mask
function mask(flag){
    if(flag){
        UserImg.setFilter(Kinetic.Filters.Mask);
        mask_flag = true;
    }else{
        UserImg.clearFilter();
        mask_flag = false;

    }

};

//listen mousedown
function mouseMode(mouseflag){
    if(mouseflag){
        defaultlayer.on('mousedown', function () {
            onMousedown();
        });
        defaultlayer.on('mouseup', function () {
            onMouseup();
        });
        defaultlayer.on('mousemove', function () {
            onMousemove();
        });
    }else{
        defaultlayer.off('mousedown', function () {
            onMousedown();
        });
        defaultlayer.off('mouseup', function () {
            onMouseup();
        });
        defaultlayer.off('mousemove', function () {
            onMousemove();
        });
    };
};

// anchors
function addAnchor(layer, x, y, corner){
    var anchor = new Kinetic.Rect({
      x: x,
      y: y,
      width: 10,
      height: 10,
      offset: 5,
      stroke: "black",
      fill: "white",
      strokeWidth: 1,
      draggable: true,
      name : corner
    });

    anchor.on("mouseover", function() {
      document.body.style.cursor = "pointer";
      this.setStrokeWidth(2);
      layer.draw();
    });
    anchor.on("mouseout", function() {
      document.body.style.cursor = "default";
      this.setStrokeWidth(1);
      layer.draw();
    });


    layer.add(anchor);
    return anchor;
};

// Default Canvas
var stage = new Kinetic.Stage({
    container: 'imgcanvas',
    width: 400,
    height: 400
});

var con = stage.getContainer();
var defaultlayer = new Kinetic.Layer();
var eraserlayer = new Kinetic.Layer();
var imagelayer = new Kinetic.Layer();
var bottomlogolayer = new Kinetic.Layer();
var toplogolayer = new Kinetic.Layer();
var decologolayer = new Kinetic.Layer();
var dashedborder = new Kinetic.Line({
        points: [73, 70, 340, 23, 450, 60, 500, 20],
        stroke: 'green',
        strokeWidth: 2,
        lineJoin: 'round',
        dashArray: [33, 10]
});
var anchorgroup = new Kinetic.Group({
        x: 0,
        y: 0,
        rotationDeg: 0
});

//Text to default layer
var simpleText = new Kinetic.Text({
        x: stage.getWidth() / 10,
        y: 180,
        text: '請把圖片檔案拉進此框內',
        fontSize: 30,
        fontFamily: '微軟正黑體',
        fill: 'white',
        visible: true,
        shadowColor: 'black',
        shadowBlur: 8,
        shadowOpacity: 0.8
});
defaultlayer.add(simpleText);


var nacjac_bg = new Kinetic.Image({
    x: 0,
    y: 0,
    image: nacjacbgObj,
    width: 400,
    height: 400,
    visible: false
});
var nacjac_banner = new Kinetic.Image({
    x: 0,
    y: 0,
    image: nacjacbannerObj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});


var foxhound_frame = new Kinetic.Image({
    x: 0,
    y: 0,
    image: foxhound_frameObj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});

var caesar_frame = new Kinetic.Image({
    x: 0,
    y: 0,
    image: caesar_frameObj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});


var rocsfg_frame = new Kinetic.Image({
    x: 0,
    y: 0,
    image: rocsfg_frameObj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});

var rocsfg_star = new Kinetic.Image({
    x: 400-113,
    y: 0,
    image: rocsfg_starObj,
    draggable: true,
    dragOnTop: true,
    visible: false
});


var ribbon = new Kinetic.Image({
    x: 400-80,
    y: 300,
    image: ribbonObj,
    draggable: true,
    dragOnTop: true,
    visible: false
});


var mob_frame1 = new Kinetic.Image({
    x: 0,
    y: 0,
    image: mob_frame1Obj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});


var mob_frame2 = new Kinetic.Image({
    x: 0,
    y: 0,
    image: mob_frame2Obj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});


var rocnt_frame = new Kinetic.Image({
    x: 0,
    y: 0,
    image: rocnt_frameObj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});

var oh_frame = new Kinetic.Image({
    x: 0,
    y: 0,
    image: oh_frameObj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});
var nta_frame = new Kinetic.Image({
    x: 0,
    y: 0,
    image: nta_frameObj,
    width: 400,
    height: 400,
    draggable: false,
    dragOnTop: false,
    visible: false
});

var caesar_star = new Kinetic.Group({
        x: 0,
        y: 0,
        rotationDeg: 0,
        visible: false
});



var stars1 = new Kinetic.Star({
    x: 30,
    y: 60,
    numPoints: 6,
    innerRadius: 30,
    outerRadius: 50,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
    draggable: false,
        shadowBlur: 10,
        shadowOffset: 10,
        shadowOpacity: 0.5
  });

caesar_star.add(stars1);
var stars2 = new Kinetic.Star({
    x: 90,
    y: 40,
    numPoints: 6,
    innerRadius: 20,
    outerRadius: 40,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
    draggable: false,
        shadowBlur: 10,
        shadowOffset: 10,
        shadowOpacity: 0.5
  });

caesar_star.add(stars2);

var caesarText = new Kinetic.Text({
    x: 10,
    y: 15,
    text: '凱薩沙拉',
    fontSize: 60,
    fontFamily: '新細明體',
    stroke: 'orange',
    strokeWidth: 2,
    shadowColor: 'black',
    shadowBlur: 2,
    shadowOffset: 2,
    shadowOpacity: 0.5
});


caesar_star.add(caesarText);


// Image layer
var UserImg = new Kinetic.Image({
    image: imageObj,
        x: 0,
        y: 0,
        width: 400,
        height: 400,
        draggable: false,
        name:'Imageyo',
        dragOnTop: false
});
    
var a_topleft = addAnchor(anchorgroup, 0, 0, "topLeft");
var a_topright = addAnchor(anchorgroup, 400, 0, "topRight");
var a_botleft = addAnchor(anchorgroup, 0, 400, "botLeft");
var a_botright = addAnchor(anchorgroup, 400, 400, "botRight");
anchorgroup.hide();

// Resize
//image on clicked = selected
//selected state = border line + 4 blocks little rectangles
function resizeEnabled(img){
        resizeBorder(img);
        anchorgroup.show();
};

function resizeDisabled(img){
    img.disableStroke();
    anchorgroup.hide();
    
};

function resizeBorder(img){
        img.enableStroke();
        img.setStroke('black');
        img.setStrokeWidth(1);
}

UserImg.on('mouseover', function() {
    if(imagedropped){
        document.body.style.cursor = 'pointer';
        
    }
});
UserImg.on('mouseout', function() {
    if(imagedropped){
        document.body.style.cursor = 'default';
    }
});
UserImg.on('dragmove', function() {
    if(imagedropped){
        resizeEnabled(this,anchorgroup);
        imagelayer.draw();
    }
});


UserImg.on('click', function() {
    document.body.style.cursor = 'pointer';
    if(imagedropped){
        if(resize_flag){
            resizeEnabled(this,anchorgroup);
            imagelayer.draw();
            resize_flag = false;
        }else{
            resizeDisabled(this,anchorgroup);
            imagelayer.draw();
            resize_flag = true;
            
        }
    }
});

stage.on('dragmove',function(evt) {
        if(developer_mode){
          simpleText.show();
          var shape = evt.targetNode;
          simpleText.setText(a_botright.getY()-a_topleft.getY());
          defaultlayer.draw();
        }
        
        if(UserImg.isDragging()){
            //done
            a_topleft.setAbsolutePosition(UserImg.getX(),UserImg.getY());
            a_topright.setAbsolutePosition(UserImg.getX()+UserImg.getWidth(),UserImg.getY());
            a_botleft.setAbsolutePosition(UserImg.getX(),UserImg.getY()+UserImg.getHeight());
            a_botright.setAbsolutePosition(UserImg.getX()+UserImg.getWidth(),UserImg.getY()+UserImg.getHeight());
        }else if(a_topleft.isDragging()){
            //done
            if((a_botright.getY()-a_topleft.getY())<20){
                a_topleft.setPosition({y: a_botright.getY()-20});
            }
            if((a_botright.getX()-a_topleft.getX())<20){
                a_topleft.setPosition({x: a_botright.getX()-20});
            }
            if(((a_botright.getX()-a_topleft.getX())<20) && ((a_botright.getY()-a_topleft.getY())<20)){
                a_topleft.setPosition({y: a_botright.getY()+20});
                a_topleft.setPosition({x: a_botright.getX()-20});
            }
            if(((a_botleft.getY()-a_topleft.getY())>=20) && ((a_botright.getX()-a_topleft.getX()) >=20)){
                a_botleft.setPosition({x: a_topleft.getX()});
                a_topright.setPosition({y: a_topleft.getY()});
                UserImg.setAbsolutePosition(a_topleft.getX(),a_topleft.getY());
                UserImg.setSize(a_botright.getX()-a_topleft.getX(),
                                a_botright.getY()-a_topleft.getY());
            }

        }else if(a_botright.isDragging()){
            //done
            if((a_botright.getY()-a_topleft.getY())<20){
                a_botright.setPosition({y: a_topleft.getY()+20});
            }
            if((a_botright.getX()-a_topleft.getX())<20){
                a_botright.setPosition({x: a_topleft.getX()+20});
            }
            if(((a_botright.getX()-a_topleft.getX())<20) && ((a_botright.getY()-a_topleft.getY())<20)){
                a_botright.setPosition({y: a_topleft.getY()+20});
                a_botright.setPosition({x: a_topleft.getX()+20});
            }
            if(((a_botright.getY()-a_topleft.getY())>=20) && ((a_botright.getX()-a_topleft.getX()) >=20)){
                a_topright.setPosition({x: a_botright.getX()});
                a_botleft.setPosition({y: a_botright.getY()});
                UserImg.setSize(a_botright.getX()-a_topleft.getX(),
                                a_botright.getY()-a_topleft.getY());
            }
            
        }else if(a_topright.isDragging()){
            //done
            if((a_botright.getY()-a_topright.getY())<20){
                a_topright.setPosition({y: a_botright.getY()-20});
            }
            if((a_topright.getX()-a_topleft.getX())<20){
                a_topright.setPosition({x: a_topleft.getX()+20});
            }
            if(((a_topright.getX()-a_topleft.getX())<20) && ((a_botright.getY()-a_topright.getY())<20)){
                a_topright.setPosition({y: a_botright.getY()-20});
                a_topright.setPosition({x: a_topleft.getX()+20});
            }
            if(((a_botright.getY()-a_topright.getY())>=20) && ((a_topright.getX()-a_topleft.getX()) >=20)){
                a_botright.setPosition({x: a_topright.getX()});
                a_topleft.setPosition({y: a_topright.getY()});
                UserImg.setAbsolutePosition(a_topleft.getX(),a_topleft.getY());
                UserImg.setSize(a_botright.getX()-a_topleft.getX(),
                                a_botright.getY()-a_topleft.getY());
            }
        }else if(a_botleft.isDragging()){
            //done
            if((a_botleft.getY()-a_topleft.getY())<20){
                a_botleft.setPosition({y: a_topleft.getY()+20});
            }
            if((a_botright.getX()-a_botleft.getX())<20){
                a_botleft.setPosition({x: a_botright.getX()-20});
            }
            if(((a_botright.getX()-a_botleft.getX())<20) && ((a_botleft.getY()-a_topleft.getY())<20)){
                a_botleft.setPosition({y: a_topleft.getY()+20});
                a_botleft.setPosition({x: a_botright.getX()-20});
            }
            if(((a_botleft.getY()-a_topleft.getY())>=20) && ((a_botright.getX()-a_botleft.getX()) >=20)){
                a_topleft.setPosition({x: a_botleft.getX()});
                a_botright.setPosition({y: a_botleft.getY()});
                UserImg.setAbsolutePosition(a_topleft.getX(),a_topleft.getY());
                UserImg.setSize(a_botright.getX()-a_topleft.getX(),
                                a_botright.getY()-a_topleft.getY());
            }
            
        }
        
});

stage.on('click', function(evt) {
    if (evt.targetNode.getName() == 'backLayer') {
        resizeDisabled(UserImg);
        imagelayer.draw();
    }
        if(developer_mode){
          simpleText.show();
          var shape = evt.targetNode;
          simpleText.setText(shape.getName());
          defaultlayer.draw();
        }
});

imagelayer.add(UserImg);
imagelayer.add(anchorgroup);
defaultlayer.add(new Kinetic.Rect({
        x: 0,
        y: 0,
        width: stage.getWidth(),
        height: stage.getHeight(),
        name: 'backLayer',
        draggable: false,
        dragOnTop: false
}));

toplogolayer.add(nacjac_banner);
toplogolayer.add(foxhound_frame);
toplogolayer.add(caesar_frame);
toplogolayer.add(rocsfg_frame);
toplogolayer.add(mob_frame1);
toplogolayer.add(mob_frame2);
toplogolayer.add(rocnt_frame);
toplogolayer.add(oh_frame);
toplogolayer.add(nta_frame);
toplogolayer.setListening(false);



decologolayer.add(caesar_star);
decologolayer.add(rocsfg_star);
decologolayer.add(ribbon);

bottomlogolayer.add(nacjac_bg);
stage.add(bottomlogolayer);
        
        
stage.add(defaultlayer);
stage.add(imagelayer);
stage.add(eraserlayer);
stage.add(toplogolayer);
stage.add(decologolayer);



//FILE ACTIONS!-----------------------------------------------
//Drag over file
con.addEventListener("dragover", function (evt) {
    evt.preventDefault();
},false);

//drag and drop
con.addEventListener("drop", function (evt) {
   //file
   var files = evt.dataTransfer.files;
   if (files.length > 0){
       var file = files[0];
       if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -2){
           var reader = new FileReader();
           reader.onload = function (evt){
               imageObj.src = evt.target.result;
               imagedropped = true;
           };
           reader.readAsDataURL(file);
       }       
   }
   evt.preventDefault();
   //set file to Layer
   //add layer 
}, false);


var imageObj = new Image();

imageObj.onload = function(){
    mask(false);
    UserImg.setImage(imageObj);
    UserImg.setSize(400,400);
    UserImg.setAbsolutePosition(0,0);
    simpleText.hide();
    defaultlayer.draw();
    anchorgroup.hide();
    imagelayer.show();
    imagelayer.draw();
    eraserlayer.destroyChildren();
    eraserlayer.show();
    eraserlayer.draw();
    UserImg.setDraggable(true);
    img_original_width = this.width;
    img_original_height = this.height;
};

var nacjacbgObj = new Image();
nacjacbgObj.onload = function(){
    nacjac_bg.setImage(nacjacbgObj);
    nacjac_bg.hide();
    bottomlogolayer.draw();
};



var nacjacbannerObj = new Image();
nacjacbannerObj.onload = function(){
    nacjac_banner.setImage(nacjacbannerObj);
    nacjac_banner.hide();
    toplogolayer.draw();
};


var foxhound_frameObj = new Image();
foxhound_frameObj.onload = function(){
    foxhound_frame.setImage(foxhound_frameObj);
    foxhound_frame.hide();
    toplogolayer.draw();
};

var caesar_frameObj = new Image();
caesar_frameObj.onload = function(){
    caesar_frame.setImage(caesar_frameObj);
    caesar_frame.hide();
    toplogolayer.draw();
};
var rocsfg_frameObj = new Image();
rocsfg_frameObj.onload = function(){
    rocsfg_frame.setImage(rocsfg_frameObj);
    rocsfg_frame.hide();
    toplogolayer.draw();
};
var rocsfg_starObj = new Image();
rocsfg_starObj.onload = function(){
    rocsfg_star.setImage(rocsfg_starObj);
    rocsfg_star.hide();
    decologolayer.draw();
};
var ribbonObj = new Image();
ribbonObj.onload = function(){
    ribbon.setImage(ribbonObj);
    ribbon.hide();
    decologolayer.draw();
};
var mob_frame1Obj = new Image();
mob_frame1Obj.onload = function(){
    mob_frame1.setImage(mob_frame1Obj);
    mob_frame1.hide();
    toplogolayer.draw();
};
var mob_frame2Obj = new Image();
mob_frame2Obj.onload = function(){
    mob_frame2.setImage(mob_frame2Obj);
    mob_frame2.hide();
    toplogolayer.draw();
};
var rocnt_frameObj = new Image();
rocnt_frameObj.onload = function(){
    rocnt_frame.setImage(rocnt_frameObj);
    rocnt_frame.hide();
    toplogolayer.draw();
};
var oh_frameObj = new Image();
oh_frameObj.onload = function(){
    oh_frame.setImage(oh_frameObj);
    oh_frame.hide();
    toplogolayer.draw();
};
var nta_frameObj = new Image();
nta_frameObj.onload = function(){
    nta_frame.setImage(nta_frameObj);
    nta_frame.hide();
    toplogolayer.draw();
};
    nacjacbannerObj.src = './img/nacjac_banner.png';
    nacjacbgObj.src = './img/nacjac_bg.jpg';
    foxhound_frameObj.src = './img/foxhound.png';
    caesar_frameObj.src = './img/caesarsaladborder.png';
    rocsfg_frameObj.src = './img/rocsfg.png';
    rocsfg_starObj.src = './img/rocsfg_star.png';
    ribbonObj.src = './img/ribbon.png';
    mob_frame1Obj.src = './img/mob_frame.png';
    mob_frame2Obj.src = './img/mob_frame2.png';
    rocnt_frameObj.src = './img/rocnt.png';
    oh_frameObj.src = './img/oh.png';
    nta_frameObj.src = './img/nta.png';

// Button bindings
document.getElementById('layer1-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    nacjac_banner.show();
    nacjac_banner.moveToTop();
    toplogolayer.draw();
  }else{
    nacjac_banner.hide();
    toplogolayer.draw();
  }
}, false);
document.getElementById('layer2-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    nacjac_bg.show();
    bottomlogolayer.draw();
  }else{
    nacjac_bg.hide();
    bottomlogolayer.draw();
  }
}, false);


document.getElementById('layer3-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    foxhound_frame.show();
    foxhound_frame.moveToTop();
    toplogolayer.draw();
  }else{
    foxhound_frame.hide();
    toplogolayer.draw();
  }
}, false);

document.getElementById('layer4-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    caesar_frame.show();
    caesar_frame.moveToTop();
    toplogolayer.draw();
  }else{
    caesar_frame.hide();
    toplogolayer.draw();
  }
}, false);
document.getElementById('layer5-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    rocsfg_frame.show();
    rocsfg_frame.moveToTop();
    toplogolayer.draw();
  }else{
    rocsfg_frame.hide();
    toplogolayer.draw();
  }
}, false);
document.getElementById('layer6-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    rocsfg_star.show();
    decologolayer.draw();
  }else{
    rocsfg_star.hide();
    decologolayer.draw();
  }
}, false);
document.getElementById('layer7-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    mob_frame1.show();
    mob_frame1.moveToTop();
    toplogolayer.draw();
  }else{
    mob_frame1.hide();
    toplogolayer.draw();
  }
}, false);
document.getElementById('layer8-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    mob_frame2.show();
    mob_frame2.moveToTop();
    toplogolayer.draw();
  }else{
    mob_frame2.hide();
    toplogolayer.draw();
  }
}, false);
document.getElementById('layer9-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    rocnt_frame.show();
    rocnt_frame.moveToTop();
    toplogolayer.draw();
  }else{
    rocnt_frame.hide();
    toplogolayer.draw();
  }
}, false);
document.getElementById('layer10-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    oh_frame.show();
    oh_frame.moveToTop();
    toplogolayer.draw();
  }else{
    oh_frame.hide();
    toplogolayer.draw();
  }
}, false);
document.getElementById('layer11-options').addEventListener('change', function(evt) {
    var amplitude = 100;
    var period = 2000;
    // in ms
    var centerX = (stage.getWidth() / 2)-100;

    var anim = new Kinetic.Animation(function(frame) {
        caesar_star.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);
    }, decologolayer);

    anim.start();
    
    var angularSpeed = Math.PI / 2;
    var animstars = new Kinetic.Animation(function(frame) {
      var angleDiff = frame.timeDiff * angularSpeed / 1000;
      stars1.rotate(angleDiff);
      stars2.rotate(angleDiff);
    }, decologolayer);
    animstars.start();
    
  if(evt.target.checked){
    caesar_star.show();
    decologolayer.draw();
  }else{
    caesar_star.hide();
    decologolayer.draw();
  }
}, false);
document.getElementById('layer12-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    nta_frame.show();
    nta_frame.moveToTop();
    toplogolayer.draw();
  }else{
    nta_frame.hide();
    toplogolayer.draw();
  }
}, false);
document.getElementById('layer13-options').addEventListener('change', function(evt) {
  if(evt.target.checked){
    ribbon.show();
    decologolayer.draw();
  }else{
    ribbon.hide();
    decologolayer.draw();
  }
}, false);
document.getElementById('saveimg').addEventListener('click', function() {
    stage.toDataURL({
          callback: function(dataUrl) {
            window.open(dataUrl);
          },mimeType: 'image/jpeg'
        });
}, false);
document.getElementById('resetimg').addEventListener('click', function() {
  resetcanvas();
}, false);
document.getElementById('ctrlframe').addEventListener('change', function(evt) {
  if(evt.target.checked){
    toplogolayer.setListening(true);
    toplogolayer.setDraggable(true);
    toplogolayer.draw();
  }else{
    toplogolayer.setListening(false);
    toplogolayer.setDraggable(false);
    toplogolayer.draw();
  }
}, false);
document.getElementById('eraser').addEventListener('change', function(evt) {
  if(evt.target.checked){
    imagelayer.setListening(false);
    imagelayer.setDraggable(false);
    anchorgroup.hide();
    imagelayer.draw();
    eraser_flag = true;
    mouseMode(true);


  }else{
    imagelayer.setListening(true);
    imagelayer.setDraggable(true);
    imagelayer.draw();


    mouseMode(false);

  }
}, false);
document.getElementById('file').addEventListener('change', function (evt) {
   //file
   var files = evt.target.files;
   if (files.length > 0){
       var file = files[0];
       if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -2){
           var reader = new FileReader();
           reader.onload = function (evt){
               imageObj.src = evt.target.result;
               imagedropped = true;
           };
           reader.readAsDataURL(file);
       }       
   }
   evt.preventDefault();
   //set file to Layer
   //add layer 
}, false);
document.getElementById('oriimg').addEventListener('click', function() {
  if(imagedropped){
    anchorgroup.hide();
    UserImg.setSize(img_original_width,img_original_height);
    UserImg.setPosition((stage.getWidth()/2)-(UserImg.getWidth()/2),(stage.getHeight()/2)-(UserImg.getHeight()/2));
    imagelayer.show();
    imagelayer.draw();
  }
}, false);
document.getElementById('smallerimg').addEventListener('click', function() {
  if(imagedropped){
    anchorgroup.hide();
    UserImg.setSize(UserImg.getWidth()-UserImg.getWidth()*0.05,UserImg.getHeight()-UserImg.getHeight()*0.05);


    UserImg.setPosition((stage.getWidth()/2)-(UserImg.getWidth()/2),(stage.getHeight()/2)-(UserImg.getHeight()/2));
    imagelayer.show();
    imagelayer.draw();
  }
}, false);
document.getElementById('largerimg').addEventListener('click', function() {
  if(imagedropped){
    anchorgroup.hide();
    UserImg.setSize(UserImg.getWidth()+UserImg.getWidth()*0.05,UserImg.getHeight()+UserImg.getHeight()*0.05);
    UserImg.setPosition((stage.getWidth()/2)-(UserImg.getWidth()/2),(stage.getHeight()/2)-(UserImg.getHeight()/2));
    imagelayer.show();
    imagelayer.draw();
  }
}, false);
document.getElementById('maskimg').addEventListener('click', function() {
  if(imagedropped && !mask_flag){
    mask(true);
    imagelayer.show();
    imagelayer.draw();
  }
}, false);



//Draw
var isMouseDown = false;
var newline;
var points = [];

function onMousedown(event) {
    isMouseDown = true;
    points = [];
    points.push(stage.getMousePosition());

    var brushcolor = "red";
    brushcolor = $("#fullcolor").spectrum("get");
    var line = new Kinetic.Line({
        points: points,
        stroke: brushcolor,
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    });


    eraserlayer.add(line);
    newline = line;
}

function onMouseup(event) {
    isMouseDown = false;
}

function onMousemove(event) {
    if (!isMouseDown) {
        return;
    };
    points.push(stage.getMousePosition());
    newline.setPoints(points);
    eraserlayer.drawScene();
}


document.getElementById('undobrush').addEventListener('click', function() {
    eraserlayer.removeChildren();
    eraserlayer.drawScene();
}, false);

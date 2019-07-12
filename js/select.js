var province=$("#province"),city=$("#city"),area=$("#area");
for(var i=0;i<provinceList.length;i++){
    addEle(province,provinceList[i].id,provinceList[i].name);
}
function addEle(ele,id,value){
    var optionStr="";
    optionStr="<option value="+id+">"+value+"</option>";
    ele.append(optionStr);
}
function removeEle(ele){
    ele.find("option").remove();
    var optionStar="<option value=''>"+"请选择"+"</option>";
    ele.append(optionStar);
}
var provinceText,cityText,cityItem;
province.on("change",function(){
    provinceText=$(this).val();
    $.each(provinceList,function(i,item){
        if(provinceText == item.id){
            cityItem=i;
            return cityItem
        }
    });
    removeEle(city);
    removeEle(area);
    $.each(provinceList[cityItem].cityList,function(i,item){
        addEle(city,item.id,item.name)
    })
});
city.on("change",function(){
    cityText=$(this).val();
    removeEle(area);
    $.each(provinceList,function(i,item){
        if(provinceText == item.id){
            cityItem=i;
            return cityItem
        }
    });
    $.each(provinceList[cityItem].cityList,function(i,item){
        if(cityText == item.id){
            for(var n=0;n<item.areaList.length;n++){
                addEle(area,item.areaList[n].id,item.areaList[n].name)
            }
        }
    });
});
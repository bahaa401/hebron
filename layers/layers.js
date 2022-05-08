var wms_layers = [];

var format_BUILDINGS_0 = new ol.format.GeoJSON();
var features_BUILDINGS_0 = format_BUILDINGS_0.readFeatures(json_BUILDINGS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGS_0.addFeatures(features_BUILDINGS_0);
var lyr_BUILDINGS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUILDINGS_0, 
                style: style_BUILDINGS_0,
                interactive: true,
                title: '<img src="styles/legend/BUILDINGS_0.png" /> BUILDINGS'
            });
var format_ROADS_1 = new ol.format.GeoJSON();
var features_ROADS_1 = format_ROADS_1.readFeatures(json_ROADS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_1.addFeatures(features_ROADS_1);
var lyr_ROADS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADS_1, 
                style: style_ROADS_1,
                interactive: true,
    title: 'ROADS<br />\
    <img src="styles/legend/ROADS_1_0.png" /> MAIN<br />\
    <img src="styles/legend/ROADS_1_1.png" /> SUBMAIN<br />'
        });
var format_SYMBOLS_2 = new ol.format.GeoJSON();
var features_SYMBOLS_2 = format_SYMBOLS_2.readFeatures(json_SYMBOLS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SYMBOLS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SYMBOLS_2.addFeatures(features_SYMBOLS_2);
var lyr_SYMBOLS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SYMBOLS_2, 
                style: style_SYMBOLS_2,
                interactive: true,
    title: 'SYMBOLS<br />\
    <img src="styles/legend/SYMBOLS_2_0.png" /> ARCHAEOLOGICAL SITE<br />\
    <img src="styles/legend/SYMBOLS_2_1.png" /> BANK<br />\
    <img src="styles/legend/SYMBOLS_2_2.png" /> CEMENTERY<br />\
    <img src="styles/legend/SYMBOLS_2_3.png" /> CENTER<br />\
    <img src="styles/legend/SYMBOLS_2_4.png" /> EDUCATION<br />\
    <img src="styles/legend/SYMBOLS_2_5.png" /> FQCTORY<br />\
    <img src="styles/legend/SYMBOLS_2_6.png" /> GARAGE<br />\
    <img src="styles/legend/SYMBOLS_2_7.png" /> GARDEN<br />\
    <img src="styles/legend/SYMBOLS_2_8.png" /> GAS STATION<br />\
    <img src="styles/legend/SYMBOLS_2_9.png" /> HALL<br />\
    <img src="styles/legend/SYMBOLS_2_10.png" /> HEALTH<br />\
    <img src="styles/legend/SYMBOLS_2_11.png" /> HILL<br />\
    <img src="styles/legend/SYMBOLS_2_12.png" /> HOTEL<br />\
    <img src="styles/legend/SYMBOLS_2_13.png" /> LIBRARY<br />\
    <img src="styles/legend/SYMBOLS_2_14.png" /> MARKET<br />\
    <img src="styles/legend/SYMBOLS_2_15.png" /> MOSQUE<br />\
    <img src="styles/legend/SYMBOLS_2_16.png" /> PHARMACY<br />\
    <img src="styles/legend/SYMBOLS_2_17.png" /> RESTURANT<br />\
    <img src="styles/legend/SYMBOLS_2_18.png" /> SCHOOL<br />\
    <img src="styles/legend/SYMBOLS_2_19.png" /> SPORT<br />\
    <img src="styles/legend/SYMBOLS_2_20.png" /> SQUARE<br />\
    <img src="styles/legend/SYMBOLS_2_21.png" /> WATER RESERVOIR<br />\
    <img src="styles/legend/SYMBOLS_2_22.png" /> <br />'
        });
var format_WALKPATH_3 = new ol.format.GeoJSON();
var features_WALKPATH_3 = format_WALKPATH_3.readFeatures(json_WALKPATH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WALKPATH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WALKPATH_3.addFeatures(features_WALKPATH_3);
var lyr_WALKPATH_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WALKPATH_3, 
                style: style_WALKPATH_3,
                interactive: true,
                title: '<img src="styles/legend/WALKPATH_3.png" /> WALK PATH'
            });

lyr_BUILDINGS_0.setVisible(true);lyr_ROADS_1.setVisible(true);lyr_SYMBOLS_2.setVisible(true);lyr_WALKPATH_3.setVisible(true);
var layersList = [lyr_BUILDINGS_0,lyr_ROADS_1,lyr_SYMBOLS_2,lyr_WALKPATH_3];
lyr_BUILDINGS_0.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_ROADS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'TYPE': 'TYPE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SYMBOLS_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'TYPE': 'TYPE', });
lyr_WALKPATH_3.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_BUILDINGS_0.set('fieldImages', {'FID_': 'Range', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_ROADS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SYMBOLS_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_WALKPATH_3.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_BUILDINGS_0.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_ROADS_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'TYPE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SYMBOLS_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'TYPE': 'no label', });
lyr_WALKPATH_3.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_WALKPATH_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
'use strict'; // code generated by pbf v3.2.1

// monitor ========================================

// TODO: find some way to have this auto go to gui instead of having to manually move it on protobuf update

var monitor = self.monitor = {};

monitor.read = function (pbf, end) {
    return pbf.readFields(monitor._readField, {id: "", mode: "", opcode: "", params: {}, spriteName: "", value: "", width: 0, height: 0, x: 0, y: 0, visible: false, sliderMin: 0, sliderMax: 0, isDiscrete: false}, end);
};
monitor._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.id = pbf.readString();
    else if (tag === 2) obj.mode = pbf.readString();
    else if (tag === 3) obj.opcode = pbf.readString();
    else if (tag === 4)  { var entry = monitor._FieldEntry4.read(pbf, pbf.readVarint() + pbf.pos); obj.params[entry.key] = entry.value; }
    else if (tag === 5) obj.spriteName = pbf.readString();
    else if (tag === 6) obj.value = pbf.readString();
    else if (tag === 7) obj.width = pbf.readVarint(true);
    else if (tag === 8) obj.height = pbf.readVarint(true);
    else if (tag === 9) obj.x = pbf.readVarint(true);
    else if (tag === 10) obj.y = pbf.readVarint(true);
    else if (tag === 11) obj.visible = pbf.readBoolean();
    else if (tag === 12) obj.sliderMin = pbf.readVarint(true);
    else if (tag === 13) obj.sliderMax = pbf.readVarint(true);
    else if (tag === 14) obj.isDiscrete = pbf.readBoolean();
};
monitor.write = function (obj, pbf) {
    if (obj.id) pbf.writeStringField(1, obj.id);
    if (obj.mode) pbf.writeStringField(2, obj.mode);
    if (obj.opcode) pbf.writeStringField(3, obj.opcode);
    if (obj.params) for (var i in obj.params) if (Object.prototype.hasOwnProperty.call(obj.params, i)) pbf.writeMessage(4, monitor._FieldEntry4.write, { key: i, value: obj.params[i] });
    if (obj.spriteName) pbf.writeStringField(5, obj.spriteName);
    if (obj.value) pbf.writeStringField(6, obj.value);
    if (obj.width) pbf.writeVarintField(7, obj.width);
    if (obj.height) pbf.writeVarintField(8, obj.height);
    if (obj.x) pbf.writeVarintField(9, obj.x);
    if (obj.y) pbf.writeVarintField(10, obj.y);
    if (obj.visible) pbf.writeBooleanField(11, obj.visible);
    if (obj.sliderMin) pbf.writeVarintField(12, obj.sliderMin);
    if (obj.sliderMax) pbf.writeVarintField(13, obj.sliderMax);
    if (obj.isDiscrete) pbf.writeBooleanField(14, obj.isDiscrete);
};

// monitor._FieldEntry4 ========================================

monitor._FieldEntry4 = {};

monitor._FieldEntry4.read = function (pbf, end) {
    return pbf.readFields(monitor._FieldEntry4._readField, {key: "", value: ""}, end);
};
monitor._FieldEntry4._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};
monitor._FieldEntry4.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeStringField(2, obj.value);
};

// Project ========================================

var Project = self.Project = {};

Project.read = function (pbf, end) {
    return pbf.readFields(Project._readField, {metaSemver: "", metaVm: "", agent: "", targets: [], monitors: [], extensionData: {}, extensions: [], extensionURLs: {}}, end);
};
Project._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.metaSemver = pbf.readString();
    else if (tag === 2) obj.metaVm = pbf.readString();
    else if (tag === 3) obj.agent = pbf.readString();
    else if (tag === 4) obj.targets.push(Sprite.read(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 5) obj.monitors.push(monitor.read(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 6)  { var entry = Project._FieldEntry6.read(pbf, pbf.readVarint() + pbf.pos); obj.extensionData[entry.key] = entry.value; }
    else if (tag === 7) obj.extensions.push(pbf.readString());
    else if (tag === 8)  { entry = Project._FieldEntry8.read(pbf, pbf.readVarint() + pbf.pos); obj.extensionURLs[entry.key] = entry.value; }
};
Project.write = function (obj, pbf) {
    if (obj.metaSemver) pbf.writeStringField(1, obj.metaSemver);
    if (obj.metaVm) pbf.writeStringField(2, obj.metaVm);
    if (obj.agent) pbf.writeStringField(3, obj.agent);
    if (obj.targets) for (var i = 0; i < obj.targets.length; i++) pbf.writeMessage(4, Sprite.write, obj.targets[i]);
    if (obj.monitors) for (i = 0; i < obj.monitors.length; i++) pbf.writeMessage(5, monitor.write, obj.monitors[i]);
    if (obj.extensionData) for (i in obj.extensionData) if (Object.prototype.hasOwnProperty.call(obj.extensionData, i)) pbf.writeMessage(6, Project._FieldEntry6.write, { key: i, value: obj.extensionData[i] });
    if (obj.extensions) for (i = 0; i < obj.extensions.length; i++) pbf.writeStringField(7, obj.extensions[i]);
    if (obj.extensionURLs) for (i in obj.extensionURLs) if (Object.prototype.hasOwnProperty.call(obj.extensionURLs, i)) pbf.writeMessage(8, Project._FieldEntry8.write, { key: i, value: obj.extensionURLs[i] });
};

// Project._FieldEntry6 ========================================

Project._FieldEntry6 = {};

Project._FieldEntry6.read = function (pbf, end) {
    return pbf.readFields(Project._FieldEntry6._readField, {key: "", value: ""}, end);
};
Project._FieldEntry6._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};
Project._FieldEntry6.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeStringField(2, obj.value);
};

// Project._FieldEntry8 ========================================

Project._FieldEntry8 = {};

Project._FieldEntry8.read = function (pbf, end) {
    return pbf.readFields(Project._FieldEntry8._readField, {key: "", value: ""}, end);
};
Project._FieldEntry8._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};
Project._FieldEntry8.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeStringField(2, obj.value);
};

// _varValue ========================================

var _varValue = self._varValue = {};

_varValue.read = function (pbf, end) {
    return pbf.readFields(_varValue._readField, {name: "", value: ""}, end);
};
_varValue._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};
_varValue.write = function (obj, pbf) {
    if (obj.name) pbf.writeStringField(1, obj.name);
    if (obj.value) pbf.writeStringField(2, obj.value);
};

// _listValue ========================================

var _listValue = self._listValue = {};

_listValue.read = function (pbf, end) {
    return pbf.readFields(_listValue._readField, {name: "", value: []}, end);
};
_listValue._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.value.push(pbf.readString());
};
_listValue.write = function (obj, pbf) {
    if (obj.name) pbf.writeStringField(1, obj.name);
    if (obj.value) for (var i = 0; i < obj.value.length; i++) pbf.writeStringField(2, obj.value[i]);
};

// _mutation ========================================

var _mutation = self._mutation = {};

_mutation.read = function (pbf, end) {
    return pbf.readFields(_mutation._readField, {tagName: "", proccode: "", argumentids: "", argumentnames: "", argumentdefaults: "", warp: false, _returns: "", edited: false, optype: "", color: ""}, end);
};
_mutation._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.tagName = pbf.readString();
    else if (tag === 3) obj.proccode = pbf.readString();
    else if (tag === 4) obj.argumentids = pbf.readString();
    else if (tag === 5) obj.argumentnames = pbf.readString();
    else if (tag === 6) obj.argumentdefaults = pbf.readString();
    else if (tag === 7) obj.warp = pbf.readBoolean();
    else if (tag === 8) obj._returns = pbf.readString();
    else if (tag === 9) obj.edited = pbf.readBoolean();
    else if (tag === 10) obj.optype = pbf.readString();
    else if (tag === 11) obj.color = pbf.readString();
};
_mutation.write = function (obj, pbf) {
    if (obj.tagName) pbf.writeStringField(1, obj.tagName);
    if (obj.proccode) pbf.writeStringField(3, obj.proccode);
    if (obj.argumentids) pbf.writeStringField(4, obj.argumentids);
    if (obj.argumentnames) pbf.writeStringField(5, obj.argumentnames);
    if (obj.argumentdefaults) pbf.writeStringField(6, obj.argumentdefaults);
    if (obj.warp) pbf.writeBooleanField(7, obj.warp);
    if (obj._returns) pbf.writeStringField(8, obj._returns);
    if (obj.edited) pbf.writeBooleanField(9, obj.edited);
    if (obj.optype) pbf.writeStringField(10, obj.optype);
    if (obj.color) pbf.writeStringField(11, obj.color);
};

// block ========================================

var block = self.block = {};

block.read = function (pbf, end) {
    return pbf.readFields(block._readField, {opcode: "", next: "", parent: "", inputs: {}, fields: {}, shadow: false, topLevel: false, x: 0, y: 0, mutation: null}, end);
};
block._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.opcode = pbf.readString();
    else if (tag === 2) obj.next = pbf.readString();
    else if (tag === 3) obj.parent = pbf.readString();
    else if (tag === 4)  { var entry = block._FieldEntry4.read(pbf, pbf.readVarint() + pbf.pos); obj.inputs[entry.key] = entry.value; }
    else if (tag === 5)  { entry = block._FieldEntry5.read(pbf, pbf.readVarint() + pbf.pos); obj.fields[entry.key] = entry.value; }
    else if (tag === 6) obj.shadow = pbf.readBoolean();
    else if (tag === 7) obj.topLevel = pbf.readBoolean();
    else if (tag === 8) obj.x = pbf.readVarint(true);
    else if (tag === 9) obj.y = pbf.readVarint(true);
    else if (tag === 10) obj.mutation = _mutation.read(pbf, pbf.readVarint() + pbf.pos);
};
block.write = function (obj, pbf) {
    if (obj.opcode) pbf.writeStringField(1, obj.opcode);
    if (obj.next) pbf.writeStringField(2, obj.next);
    if (obj.parent) pbf.writeStringField(3, obj.parent);
    if (obj.inputs) for (var i in obj.inputs) if (Object.prototype.hasOwnProperty.call(obj.inputs, i)) pbf.writeMessage(4, block._FieldEntry4.write, { key: i, value: obj.inputs[i] });
    if (obj.fields) for (i in obj.fields) if (Object.prototype.hasOwnProperty.call(obj.fields, i)) pbf.writeMessage(5, block._FieldEntry5.write, { key: i, value: obj.fields[i] });
    if (obj.shadow) pbf.writeBooleanField(6, obj.shadow);
    if (obj.topLevel) pbf.writeBooleanField(7, obj.topLevel);
    if (obj.x) pbf.writeVarintField(8, obj.x);
    if (obj.y) pbf.writeVarintField(9, obj.y);
    if (obj.mutation) pbf.writeMessage(10, _mutation.write, obj.mutation);
};

// block._FieldEntry4 ========================================

block._FieldEntry4 = {};

block._FieldEntry4.read = function (pbf, end) {
    return pbf.readFields(block._FieldEntry4._readField, {key: "", value: ""}, end);
};
block._FieldEntry4._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};
block._FieldEntry4.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeStringField(2, obj.value);
};

// block._FieldEntry5 ========================================

block._FieldEntry5 = {};

block._FieldEntry5.read = function (pbf, end) {
    return pbf.readFields(block._FieldEntry5._readField, {key: "", value: ""}, end);
};
block._FieldEntry5._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};
block._FieldEntry5.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeStringField(2, obj.value);
};

// comment ========================================

var comment = self.comment = {};

comment.read = function (pbf, end) {
    return pbf.readFields(comment._readField, {blockId: "", x: 0, y: 0, width: 0, height: 0, minimized: false, text: ""}, end);
};
comment._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.blockId = pbf.readString();
    else if (tag === 2) obj.x = pbf.readFloat();
    else if (tag === 3) obj.y = pbf.readFloat();
    else if (tag === 4) obj.width = pbf.readVarint(true);
    else if (tag === 5) obj.height = pbf.readVarint(true);
    else if (tag === 6) obj.minimized = pbf.readBoolean();
    else if (tag === 7) obj.text = pbf.readString();
};
comment.write = function (obj, pbf) {
    if (obj.blockId) pbf.writeStringField(1, obj.blockId);
    if (obj.x) pbf.writeFloatField(2, obj.x);
    if (obj.y) pbf.writeFloatField(3, obj.y);
    if (obj.width) pbf.writeVarintField(4, obj.width);
    if (obj.height) pbf.writeVarintField(5, obj.height);
    if (obj.minimized) pbf.writeBooleanField(6, obj.minimized);
    if (obj.text) pbf.writeStringField(7, obj.text);
};

// costume ========================================

var costume = self.costume = {};

costume.read = function (pbf, end) {
    return pbf.readFields(costume._readField, {name: "", bitmapResolution: 0, dataFormat: "", assetId: "", md5ext: "", rotationCenterX: 0, rotationCenterY: 0}, end);
};
costume._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.bitmapResolution = pbf.readVarint(true);
    else if (tag === 3) obj.dataFormat = pbf.readString();
    else if (tag === 4) obj.assetId = pbf.readString();
    else if (tag === 5) obj.md5ext = pbf.readString();
    else if (tag === 6) obj.rotationCenterX = pbf.readDouble();
    else if (tag === 7) obj.rotationCenterY = pbf.readDouble();
};
costume.write = function (obj, pbf) {
    if (obj.name) pbf.writeStringField(1, obj.name);
    if (obj.bitmapResolution) pbf.writeVarintField(2, obj.bitmapResolution);
    if (obj.dataFormat) pbf.writeStringField(3, obj.dataFormat);
    if (obj.assetId) pbf.writeStringField(4, obj.assetId);
    if (obj.md5ext) pbf.writeStringField(5, obj.md5ext);
    if (obj.rotationCenterX) pbf.writeDoubleField(6, obj.rotationCenterX);
    if (obj.rotationCenterY) pbf.writeDoubleField(7, obj.rotationCenterY);
};

// sound ========================================

var sound = self.sound = {};

sound.read = function (pbf, end) {
    return pbf.readFields(sound._readField, {name: "", assetId: "", dataFormat: "", rate: 0, sampleCount: 0, md5ext: ""}, end);
};
sound._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.assetId = pbf.readString();
    else if (tag === 3) obj.dataFormat = pbf.readString();
    else if (tag === 4) obj.rate = pbf.readVarint(true);
    else if (tag === 5) obj.sampleCount = pbf.readVarint(true);
    else if (tag === 6) obj.md5ext = pbf.readString();
};
sound.write = function (obj, pbf) {
    if (obj.name) pbf.writeStringField(1, obj.name);
    if (obj.assetId) pbf.writeStringField(2, obj.assetId);
    if (obj.dataFormat) pbf.writeStringField(3, obj.dataFormat);
    if (obj.rate) pbf.writeVarintField(4, obj.rate);
    if (obj.sampleCount) pbf.writeVarintField(5, obj.sampleCount);
    if (obj.md5ext) pbf.writeStringField(6, obj.md5ext);
};

// customVar ========================================

var customVar = self.customVar = {};

customVar.read = function (pbf, end) {
    return pbf.readFields(customVar._readField, {type: "", id: "", name: "", value: ""}, end);
};
customVar._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readString();
    else if (tag === 2) obj.id = pbf.readString();
    else if (tag === 3) obj.name = pbf.readString();
    else if (tag === 4) obj.value = pbf.readString();
};
customVar.write = function (obj, pbf) {
    if (obj.type) pbf.writeStringField(1, obj.type);
    if (obj.id) pbf.writeStringField(2, obj.id);
    if (obj.name) pbf.writeStringField(3, obj.name);
    if (obj.value) pbf.writeStringField(4, obj.value);
};

// Sprite ========================================

var Sprite = self.Sprite = {};

Sprite.read = function (pbf, end) {
    return pbf.readFields(Sprite._readField, {id: "", isStage: false, name: "", variables: {}, lists: {}, broadcasts: {}, customVars: [], blocks: {}, comments: {}, currentCostume: 0, costumes: [], sounds: [], volume: 0, layerOrder: 0, x: 0, y: 0, size: 0, direction: 0, draggable: false, rotationStyle: "", tempo: 0, videoTransparency: 0, videoState: "", textToSpeechLanguage: "", visible: false}, end);
};
Sprite._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.id = pbf.readString();
    else if (tag === 2) obj.isStage = pbf.readBoolean();
    else if (tag === 3) obj.name = pbf.readString();
    else if (tag === 4)  { var entry = Sprite._FieldEntry4.read(pbf, pbf.readVarint() + pbf.pos); obj.variables[entry.key] = entry.value; }
    else if (tag === 5)  { entry = Sprite._FieldEntry5.read(pbf, pbf.readVarint() + pbf.pos); obj.lists[entry.key] = entry.value; }
    else if (tag === 6)  { entry = Sprite._FieldEntry6.read(pbf, pbf.readVarint() + pbf.pos); obj.broadcasts[entry.key] = entry.value; }
    else if (tag === 7) obj.customVars.push(customVar.read(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 8)  { entry = Sprite._FieldEntry8.read(pbf, pbf.readVarint() + pbf.pos); obj.blocks[entry.key] = entry.value; }
    else if (tag === 9)  { entry = Sprite._FieldEntry9.read(pbf, pbf.readVarint() + pbf.pos); obj.comments[entry.key] = entry.value; }
    else if (tag === 10) obj.currentCostume = pbf.readVarint(true);
    else if (tag === 11) obj.costumes.push(costume.read(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 12) obj.sounds.push(sound.read(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 13) obj.volume = pbf.readVarint(true);
    else if (tag === 14) obj.layerOrder = pbf.readVarint(true);
    else if (tag === 15) obj.x = pbf.readVarint(true);
    else if (tag === 16) obj.y = pbf.readVarint(true);
    else if (tag === 17) obj.size = pbf.readVarint(true);
    else if (tag === 18) obj.direction = pbf.readVarint(true);
    else if (tag === 19) obj.draggable = pbf.readBoolean();
    else if (tag === 20) obj.rotationStyle = pbf.readString();
    else if (tag === 21) obj.tempo = pbf.readVarint(true);
    else if (tag === 22) obj.videoTransparency = pbf.readVarint(true);
    else if (tag === 23) obj.videoState = pbf.readString();
    else if (tag === 24) obj.textToSpeechLanguage = pbf.readString();
    else if (tag === 25) obj.visible = pbf.readBoolean();
};
Sprite.write = function (obj, pbf) {
    if (obj.id) pbf.writeStringField(1, obj.id);
    if (obj.isStage) pbf.writeBooleanField(2, obj.isStage);
    if (obj.name) pbf.writeStringField(3, obj.name);
    if (obj.variables) for (var i in obj.variables) if (Object.prototype.hasOwnProperty.call(obj.variables, i)) pbf.writeMessage(4, Sprite._FieldEntry4.write, { key: i, value: obj.variables[i] });
    if (obj.lists) for (i in obj.lists) if (Object.prototype.hasOwnProperty.call(obj.lists, i)) pbf.writeMessage(5, Sprite._FieldEntry5.write, { key: i, value: obj.lists[i] });
    if (obj.broadcasts) for (i in obj.broadcasts) if (Object.prototype.hasOwnProperty.call(obj.broadcasts, i)) pbf.writeMessage(6, Sprite._FieldEntry6.write, { key: i, value: obj.broadcasts[i] });
    if (obj.customVars) for (i = 0; i < obj.customVars.length; i++) pbf.writeMessage(7, customVar.write, obj.customVars[i]);
    if (obj.blocks) for (i in obj.blocks) if (Object.prototype.hasOwnProperty.call(obj.blocks, i)) pbf.writeMessage(8, Sprite._FieldEntry8.write, { key: i, value: obj.blocks[i] });
    if (obj.comments) for (i in obj.comments) if (Object.prototype.hasOwnProperty.call(obj.comments, i)) pbf.writeMessage(9, Sprite._FieldEntry9.write, { key: i, value: obj.comments[i] });
    if (obj.currentCostume) pbf.writeVarintField(10, obj.currentCostume);
    if (obj.costumes) for (i = 0; i < obj.costumes.length; i++) pbf.writeMessage(11, costume.write, obj.costumes[i]);
    if (obj.sounds) for (i = 0; i < obj.sounds.length; i++) pbf.writeMessage(12, sound.write, obj.sounds[i]);
    if (obj.volume) pbf.writeVarintField(13, obj.volume);
    if (obj.layerOrder) pbf.writeVarintField(14, obj.layerOrder);
    if (obj.x) pbf.writeVarintField(15, obj.x);
    if (obj.y) pbf.writeVarintField(16, obj.y);
    if (obj.size) pbf.writeVarintField(17, obj.size);
    if (obj.direction) pbf.writeVarintField(18, obj.direction);
    if (obj.draggable) pbf.writeBooleanField(19, obj.draggable);
    if (obj.rotationStyle) pbf.writeStringField(20, obj.rotationStyle);
    if (obj.tempo) pbf.writeVarintField(21, obj.tempo);
    if (obj.videoTransparency) pbf.writeVarintField(22, obj.videoTransparency);
    if (obj.videoState) pbf.writeStringField(23, obj.videoState);
    if (obj.textToSpeechLanguage) pbf.writeStringField(24, obj.textToSpeechLanguage);
    if (obj.visible) pbf.writeBooleanField(25, obj.visible);
};

// Sprite._FieldEntry4 ========================================

Sprite._FieldEntry4 = {};

Sprite._FieldEntry4.read = function (pbf, end) {
    return pbf.readFields(Sprite._FieldEntry4._readField, {key: "", value: null}, end);
};
Sprite._FieldEntry4._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = _varValue.read(pbf, pbf.readVarint() + pbf.pos);
};
Sprite._FieldEntry4.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeMessage(2, _varValue.write, obj.value);
};

// Sprite._FieldEntry5 ========================================

Sprite._FieldEntry5 = {};

Sprite._FieldEntry5.read = function (pbf, end) {
    return pbf.readFields(Sprite._FieldEntry5._readField, {key: "", value: null}, end);
};
Sprite._FieldEntry5._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = _listValue.read(pbf, pbf.readVarint() + pbf.pos);
};
Sprite._FieldEntry5.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeMessage(2, _listValue.write, obj.value);
};

// Sprite._FieldEntry6 ========================================

Sprite._FieldEntry6 = {};

Sprite._FieldEntry6.read = function (pbf, end) {
    return pbf.readFields(Sprite._FieldEntry6._readField, {key: "", value: ""}, end);
};
Sprite._FieldEntry6._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};
Sprite._FieldEntry6.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeStringField(2, obj.value);
};

// Sprite._FieldEntry8 ========================================

Sprite._FieldEntry8 = {};

Sprite._FieldEntry8.read = function (pbf, end) {
    return pbf.readFields(Sprite._FieldEntry8._readField, {key: "", value: null}, end);
};
Sprite._FieldEntry8._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = block.read(pbf, pbf.readVarint() + pbf.pos);
};
Sprite._FieldEntry8.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeMessage(2, block.write, obj.value);
};

// Sprite._FieldEntry9 ========================================

Sprite._FieldEntry9 = {};

Sprite._FieldEntry9.read = function (pbf, end) {
    return pbf.readFields(Sprite._FieldEntry9._readField, {key: "", value: null}, end);
};
Sprite._FieldEntry9._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = comment.read(pbf, pbf.readVarint() + pbf.pos);
};
Sprite._FieldEntry9.write = function (obj, pbf) {
    if (obj.key) pbf.writeStringField(1, obj.key);
    if (obj.value) pbf.writeMessage(2, comment.write, obj.value);
};

// export project
module.exports = Project
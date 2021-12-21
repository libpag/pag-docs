/**
* PAG.js v1.0.1
* (c) 2021 akazenoslin
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PAG = {}));
}(this, (function (exports) { 'use strict';

  var ErrorCode;
  (function(ErrorCode2) {
    ErrorCode2[ErrorCode2["InputError"] = 0] = "InputError";
    ErrorCode2[ErrorCode2["LoadFileByXhrError"] = 1] = "LoadFileByXhrError";
    ErrorCode2[ErrorCode2["LoadFileNotResponse"] = 2] = "LoadFileNotResponse";
    ErrorCode2[ErrorCode2["ReadPagFileError"] = 3] = "ReadPagFileError";
    ErrorCode2[ErrorCode2["PagFileLengthErrorTooShort"] = 4] = "PagFileLengthErrorTooShort";
    ErrorCode2[ErrorCode2["InvalidPagFileHeader"] = 5] = "InvalidPagFileHeader";
    ErrorCode2[ErrorCode2["NotByteArray"] = 6] = "NotByteArray";
    ErrorCode2[ErrorCode2["PagCodecError"] = 7] = "PagCodecError";
    ErrorCode2[ErrorCode2["ReadStartCodeError"] = 8] = "ReadStartCodeError";
    ErrorCode2[ErrorCode2["NotPagFile"] = 9] = "NotPagFile";
    ErrorCode2[ErrorCode2["NotVideoData"] = 10] = "NotVideoData";
    ErrorCode2[ErrorCode2["NotMp4File"] = 11] = "NotMp4File";
    ErrorCode2[ErrorCode2["NotSequence"] = 12] = "NotSequence";
    ErrorCode2[ErrorCode2["NotNalu"] = 13] = "NotNalu";
    ErrorCode2[ErrorCode2["NotFrames"] = 14] = "NotFrames";
    ErrorCode2[ErrorCode2["NotPayloadOnRemuxer"] = 15] = "NotPayloadOnRemuxer";
    ErrorCode2[ErrorCode2["NotSupportMSE"] = 16] = "NotSupportMSE";
    ErrorCode2[ErrorCode2["NotSupportMultipleSequence"] = 17] = "NotSupportMultipleSequence";
    ErrorCode2[ErrorCode2["PagDestroyed"] = 18] = "PagDestroyed";
    ErrorCode2[ErrorCode2["InvalidPercentage"] = 19] = "InvalidPercentage";
    ErrorCode2[ErrorCode2["WriteFileFile"] = 20] = "WriteFileFile";
  })(ErrorCode || (ErrorCode = {}));
  const ErrorMap = {
    [0]: "\u8BF7URL\u6216\u8005\u4E0A\u4F20\u7684PAG\u6587\u4EF6\u662F\u5426\u6B63\u786E\uFF01",
    [1]: "\u52A0\u8F7DPAG\u6587\u4EF6\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF\uFF01",
    [2]: "\u52A0\u8F7DPAG\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A!",
    [3]: "\u8BFB\u53D6PAG\u6587\u4EF6\u9519\u8BEF\uFF01",
    [4]: "PAG\u6587\u4EF6\u957F\u5EA6\u592A\u77ED!",
    [5]: "\u65E0\u6548\u7684PAG\u6587\u4EF6\u5934\u90E8!",
    [6]: "\u6587\u4EF6\u4E2D\u5B57\u8282\u6D41\u4E0D\u5B58\u5728!",
    [7]: "PAG\u89E3\u7801\u9519\u8BEF!",
    [8]: "\u8BFB\u53D6StartCode\u9519\u8BEF!",
    [9]: "PAG\u6587\u4EF6\u4E0D\u5B58\u5728\uFF01",
    [10]: "VideoData\u4E0D\u5B58\u5728\uFF01",
    [11]: "MP4\u6587\u4EF6\u4E0D\u5B58\u5728\uFF01",
    [12]: "\u89C6\u9891\u5E8F\u5217\u5E27\u4E0D\u5B58\u5728\uFF01",
    [13]: "\u89C6\u9891\u5E8F\u5217\u5E27\u4E0ANalu\u4E0D\u5B58\u5728\uFF01",
    [14]: "\u89C6\u9891\u5E8F\u5217\u5E27\u4E0AFrame\u4E0D\u5B58\u5728\uFF01",
    [15]: "Remuxer\u4E0A\u4E0D\u5B58\u5728Payload\uFF01",
    [16]: "\u6D4F\u89C8\u5668\u4E0D\u652F\u6301MediaSourceExtension\uFF01",
    [17]: "\u6682\u4E0D\u652F\u6301\u591Asequence\u7684PAG\u6587\u4EF6\uFF01",
    [18]: "\u8BE5PAG\u5DF2\u7ECF\u9500\u6BC1\uFF01",
    [19]: "\u65E0\u6548\u767E\u5206\u6BD4!",
    [20]: "\u5199\u5165\u6587\u4EF6\u5931\u8D25"
  };

  class Log {
    static log(message) {
      console.log(message);
    }
    static error(errorCode) {
      throw new Error(ErrorMap[errorCode]);
    }
  }

  var CompositionType;
  (function(CompositionType2) {
    CompositionType2[CompositionType2["Unknown"] = 0] = "Unknown";
    CompositionType2[CompositionType2["Vector"] = 1] = "Vector";
    CompositionType2[CompositionType2["Bitmap"] = 2] = "Bitmap";
    CompositionType2[CompositionType2["Video"] = 3] = "Video";
  })(CompositionType || (CompositionType = {}));
  var TagCode;
  (function(TagCode2) {
    TagCode2[TagCode2["End"] = 0] = "End";
    TagCode2[TagCode2["FontTables"] = 1] = "FontTables";
    TagCode2[TagCode2["VectorCompositionBlock"] = 2] = "VectorCompositionBlock";
    TagCode2[TagCode2["CompositionAttributes"] = 3] = "CompositionAttributes";
    TagCode2[TagCode2["ImageTables"] = 4] = "ImageTables";
    TagCode2[TagCode2["LayerBlock"] = 5] = "LayerBlock";
    TagCode2[TagCode2["LayerAttributes"] = 6] = "LayerAttributes";
    TagCode2[TagCode2["SolidColor"] = 7] = "SolidColor";
    TagCode2[TagCode2["TextSource"] = 8] = "TextSource";
    TagCode2[TagCode2["TextPathOption"] = 9] = "TextPathOption";
    TagCode2[TagCode2["TextMoreOption"] = 10] = "TextMoreOption";
    TagCode2[TagCode2["ImageReference"] = 11] = "ImageReference";
    TagCode2[TagCode2["CompositionReference"] = 12] = "CompositionReference";
    TagCode2[TagCode2["Transform2D"] = 13] = "Transform2D";
    TagCode2[TagCode2["MaskBlock"] = 14] = "MaskBlock";
    TagCode2[TagCode2["ShapeGroup"] = 15] = "ShapeGroup";
    TagCode2[TagCode2["Rectangle"] = 16] = "Rectangle";
    TagCode2[TagCode2["Ellipse"] = 17] = "Ellipse";
    TagCode2[TagCode2["PolyStar"] = 18] = "PolyStar";
    TagCode2[TagCode2["ShapePath"] = 19] = "ShapePath";
    TagCode2[TagCode2["Fill"] = 20] = "Fill";
    TagCode2[TagCode2["Stroke"] = 21] = "Stroke";
    TagCode2[TagCode2["GradientFill"] = 22] = "GradientFill";
    TagCode2[TagCode2["GradientStroke"] = 23] = "GradientStroke";
    TagCode2[TagCode2["MergePaths"] = 24] = "MergePaths";
    TagCode2[TagCode2["TrimPaths"] = 25] = "TrimPaths";
    TagCode2[TagCode2["Repeater"] = 26] = "Repeater";
    TagCode2[TagCode2["RoundCorners"] = 27] = "RoundCorners";
    TagCode2[TagCode2["Performance"] = 28] = "Performance";
    TagCode2[TagCode2["DropShadowStyle"] = 29] = "DropShadowStyle";
    TagCode2[TagCode2["InnerShadowStyle"] = 30] = "InnerShadowStyle";
    TagCode2[TagCode2["OuterGlowStyle"] = 31] = "OuterGlowStyle";
    TagCode2[TagCode2["InnerGlowStyle"] = 32] = "InnerGlowStyle";
    TagCode2[TagCode2["BevelAndEmbossStyle"] = 33] = "BevelAndEmbossStyle";
    TagCode2[TagCode2["SatinStyle"] = 34] = "SatinStyle";
    TagCode2[TagCode2["ColorOverlayStyle"] = 35] = "ColorOverlayStyle";
    TagCode2[TagCode2["GradientOverlayStyle"] = 36] = "GradientOverlayStyle";
    TagCode2[TagCode2["StrokeStyle"] = 37] = "StrokeStyle";
    TagCode2[TagCode2["TintEffect"] = 38] = "TintEffect";
    TagCode2[TagCode2["FillEffect"] = 39] = "FillEffect";
    TagCode2[TagCode2["StrokeEffect"] = 40] = "StrokeEffect";
    TagCode2[TagCode2["TritoneEffect"] = 41] = "TritoneEffect";
    TagCode2[TagCode2["DropShadowEffect"] = 42] = "DropShadowEffect";
    TagCode2[TagCode2["RadialWipeEffect"] = 43] = "RadialWipeEffect";
    TagCode2[TagCode2["DisplacementMapEffect"] = 44] = "DisplacementMapEffect";
    TagCode2[TagCode2["BitmapCompositionBlock"] = 45] = "BitmapCompositionBlock";
    TagCode2[TagCode2["BitmapSequence"] = 46] = "BitmapSequence";
    TagCode2[TagCode2["ImageBytes"] = 47] = "ImageBytes";
    TagCode2[TagCode2["ImageBytes2"] = 48] = "ImageBytes2";
    TagCode2[TagCode2["ImageBytes3"] = 49] = "ImageBytes3";
    TagCode2[TagCode2["VideoCompositionBlock"] = 50] = "VideoCompositionBlock";
    TagCode2[TagCode2["VideoSequence"] = 51] = "VideoSequence";
    TagCode2[TagCode2["LayerAttributesV2"] = 52] = "LayerAttributesV2";
    TagCode2[TagCode2["Count"] = 53] = "Count";
  })(TagCode || (TagCode = {}));

  const readTagHeader = (byteBuffer) => {
    const codeAndLength = byteBuffer.readUint16();
    let length = (codeAndLength & 63) >>> 0;
    const code = codeAndLength >> 6;
    if (length === 63) {
      length = byteBuffer.readUint32();
    }
    if (byteBuffer.context.tagLevel < code) {
      byteBuffer.context.tagLevel = code;
    }
    return { code, length };
  };
  function readTags(byteArray, parameter, reader) {
    let header = readTagHeader(byteArray);
    while (header.code !== TagCode.End) {
      const tagBytes = byteArray.readBytes(header.length);
      reader(tagBytes, header.code, parameter);
      if (byteArray.context.tagLevel < tagBytes.context.tagLevel) {
        byteArray.context.tagLevel = tagBytes.context.tagLevel;
      }
      header = readTagHeader(byteArray);
    }
  }

  const ZERO_ID = 0;
  const ZERO_TIME = 0;
  const OPAQUE = 255;
  var BlendMode;
  (function(BlendMode2) {
    BlendMode2[BlendMode2["Normal"] = 0] = "Normal";
    BlendMode2[BlendMode2["Multiply"] = 1] = "Multiply";
    BlendMode2[BlendMode2["Screen"] = 2] = "Screen";
    BlendMode2[BlendMode2["Overlay"] = 3] = "Overlay";
    BlendMode2[BlendMode2["Darken"] = 4] = "Darken";
    BlendMode2[BlendMode2["Lighten"] = 5] = "Lighten";
    BlendMode2[BlendMode2["ColorDodge"] = 6] = "ColorDodge";
    BlendMode2[BlendMode2["ColorBurn"] = 7] = "ColorBurn";
    BlendMode2[BlendMode2["HardLight"] = 8] = "HardLight";
    BlendMode2[BlendMode2["SoftLight"] = 9] = "SoftLight";
    BlendMode2[BlendMode2["Difference"] = 10] = "Difference";
    BlendMode2[BlendMode2["Exclusion"] = 11] = "Exclusion";
    BlendMode2[BlendMode2["Hue"] = 12] = "Hue";
    BlendMode2[BlendMode2["Saturation"] = 13] = "Saturation";
    BlendMode2[BlendMode2["Color"] = 14] = "Color";
    BlendMode2[BlendMode2["Luminosity"] = 15] = "Luminosity";
    BlendMode2[BlendMode2["DestinationIn"] = 21] = "DestinationIn";
    BlendMode2[BlendMode2["DestinationOut"] = 22] = "DestinationOut";
    BlendMode2[BlendMode2["DestinationATop"] = 23] = "DestinationATop";
    BlendMode2[BlendMode2["SourceIn"] = 24] = "SourceIn";
    BlendMode2[BlendMode2["SourceOut"] = 25] = "SourceOut";
    BlendMode2[BlendMode2["Xor"] = 26] = "Xor";
  })(BlendMode || (BlendMode = {}));
  var PathVerb;
  (function(PathVerb2) {
    PathVerb2[PathVerb2["MoveTo"] = 0] = "MoveTo";
    PathVerb2[PathVerb2["LineTo"] = 1] = "LineTo";
    PathVerb2[PathVerb2["CurveTo"] = 2] = "CurveTo";
    PathVerb2[PathVerb2["Close"] = 3] = "Close";
  })(PathVerb || (PathVerb = {}));
  var KeyframeInterpolationType;
  (function(KeyframeInterpolationType2) {
    KeyframeInterpolationType2[KeyframeInterpolationType2["None"] = 0] = "None";
    KeyframeInterpolationType2[KeyframeInterpolationType2["Linear"] = 1] = "Linear";
    KeyframeInterpolationType2[KeyframeInterpolationType2["Bezier"] = 2] = "Bezier";
    KeyframeInterpolationType2[KeyframeInterpolationType2["Hold"] = 3] = "Hold";
  })(KeyframeInterpolationType || (KeyframeInterpolationType = {}));
  var ParagraphJustification;
  (function(ParagraphJustification2) {
    ParagraphJustification2[ParagraphJustification2["LeftJustify"] = 0] = "LeftJustify";
    ParagraphJustification2[ParagraphJustification2["CenterJustify"] = 1] = "CenterJustify";
    ParagraphJustification2[ParagraphJustification2["RightJustify"] = 2] = "RightJustify";
    ParagraphJustification2[ParagraphJustification2["FullJustifyLastLineLeft"] = 3] = "FullJustifyLastLineLeft";
    ParagraphJustification2[ParagraphJustification2["FullJustifyLastLineRight"] = 4] = "FullJustifyLastLineRight";
    ParagraphJustification2[ParagraphJustification2["FullJustifyLastLineCenter"] = 5] = "FullJustifyLastLineCenter";
    ParagraphJustification2[ParagraphJustification2["FullJustifyLastLineFull"] = 6] = "FullJustifyLastLineFull";
  })(ParagraphJustification || (ParagraphJustification = {}));

  const Black = { red: 0, green: 0, blue: 0 };
  const White = { red: 255, green: 255, blue: 255 };

  const verifyFailed = () => {
    Log.log("PAG Verify Failed!");
  };
  const verifyAndrReturn = (expression) => {
    if (expression) {
      return true;
    }
    Log.log("PAG Verify Failed!");
    return false;
  };

  const _Composition = class {
    constructor() {
      this.id = ZERO_ID;
      this.width = 0;
      this.height = 0;
      this.duration = ZERO_TIME;
      this.frameRate = 30;
      this.backgroundColor = White;
      this.cacheID = 0;
      this.cacheID = _Composition.cacheIDCount;
      _Composition.cacheIDCount += 1;
    }
    type() {
      return CompositionType.Unknown;
    }
    getStaticTimeRanges() {
      return void 0;
    }
    verify() {
      return verifyAndrReturn(this.width > 0 && this.height > 0 && this.duration > 0 && this.frameRate > 0);
    }
  };
  let Composition = _Composition;
  Composition.cacheIDCount = 1;

  class VideoComposition extends Composition {
    constructor() {
      super(...arguments);
      this.hasAlpha = false;
      this.sequences = [];
      this.staticTimeRanges = [];
      this.staticTimeRangeUpdated = false;
    }
    type() {
      return CompositionType.Video;
    }
    getStaticTimeRanges() {
      if (!this.staticTimeRangeUpdated) {
        this.staticTimeRangeUpdated = true;
        this.updateStaticTimeRanges();
      }
      return this.staticTimeRanges;
    }
    updateStaticTimeRanges() {
      if (this.duration <= 1)
        return;
      if (this.sequences.length > 0) {
        let sequence = this.sequences[0];
        for (let i = 1; i < this.sequences.length; i++) {
          const item = this.sequences[i];
          if (item.frameRate > sequence.frameRate)
            sequence = item;
        }
        const timeScale = this.frameRate / sequence.frameRate;
        for (const timeRange of sequence.staticTimeRanges) {
          timeRange.start = Math.round(timeRange.start * timeScale);
          timeRange.end = Math.round(timeRange.end * timeScale);
          this.staticTimeRanges.push(timeRange);
        }
      } else {
        const range = { start: 0, end: this.duration - 1 };
        this.staticTimeRanges.push(range);
      }
    }
    hasImageContent() {
      return true;
    }
    verify() {
      if (!super.verify() || this.sequences.length <= 0) {
        verifyFailed();
        return false;
      }
      for (const sequence of this.sequences) {
        if (!sequence || !sequence.verify()) {
          verifyFailed();
          return false;
        }
      }
      return true;
    }
  }

  class Ratio {
    constructor(numerator, denominator) {
      this.numerator = 1;
      this.denominator = 1;
      this.numerator = numerator;
      this.denominator = denominator;
    }
    value() {
      return this.numerator / this.denominator;
    }
  }
  const DefaultRatio = new Ratio(1, 1);

  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  const ZERO_POINT = new Point(0, 0);

  var LayerStyleType;
  (function(LayerStyleType2) {
    LayerStyleType2[LayerStyleType2["Unknown"] = 0] = "Unknown";
    LayerStyleType2[LayerStyleType2["DropShadow"] = 1] = "DropShadow";
    LayerStyleType2[LayerStyleType2["Stroke"] = 2] = "Stroke";
  })(LayerStyleType || (LayerStyleType = {}));
  var TrackMatteType;
  (function(TrackMatteType2) {
    TrackMatteType2[TrackMatteType2["None"] = 0] = "None";
    TrackMatteType2[TrackMatteType2["Alpha"] = 1] = "Alpha";
    TrackMatteType2[TrackMatteType2["AlphaInverted"] = 2] = "AlphaInverted";
    TrackMatteType2[TrackMatteType2["Luma"] = 3] = "Luma";
    TrackMatteType2[TrackMatteType2["LumaInverted"] = 4] = "LumaInverted";
  })(TrackMatteType || (TrackMatteType = {}));
  var LayerType;
  (function(LayerType2) {
    LayerType2[LayerType2["Unknown"] = 0] = "Unknown";
    LayerType2[LayerType2["undefined"] = 1] = "undefined";
    LayerType2[LayerType2["Solid"] = 2] = "Solid";
    LayerType2[LayerType2["Text"] = 3] = "Text";
    LayerType2[LayerType2["Shape"] = 4] = "Shape";
    LayerType2[LayerType2["Image"] = 5] = "Image";
    LayerType2[LayerType2["PreCompose"] = 6] = "PreCompose";
  })(LayerType || (LayerType = {}));
  class Layer {
    constructor() {
      this.id = 0;
      this.parent = void 0;
      this.containingComposition = void 0;
      this.stretch = DefaultRatio;
      this.startTime = ZERO_ID;
      this.duration = ZERO_TIME;
      this.autoOrientation = false;
      this.transform = void 0;
      this.isActive = true;
      this.blendMode = BlendMode.Normal;
      this.trackMatteType = 0;
      this.trackMatteLayer = void 0;
      this.timeRemap = void 0;
      this.masks = void 0;
      this.effects = void 0;
      this.layerStyles = void 0;
      this.layerCache = void 0;
      this.maxScale = void 0;
    }
    type() {
      return 0;
    }
    excludeVaryingRanges(timeRanges) {
      this.transform.excludeVaryingRanges(timeRanges);
      if (this.timeRemap !== void 0) {
        this.timeRemap.excludeVaryingRanges(timeRanges);
      }
      if (this.masks !== void 0) {
        for (const mask of this.masks) {
          mask.excludeVaryingRanges(timeRanges);
        }
      }
      if (this.effects !== void 0 && this.effects.length > 0) {
        for (const effect of this.effects) {
          effect.excludeVaryingRanges(timeRanges);
        }
      }
      if (this.layerStyles !== void 0 && this.layerStyles.length > 0) {
        for (const layerStyle of this.layerStyles) {
          layerStyle.excludeVaryingRanges(timeRanges);
        }
      }
    }
    gotoFrame(frame) {
      this.transform.gotoFrame(frame);
      if (this.timeRemap !== void 0) {
        this.timeRemap.gotoFrame(frame);
      }
      if (this.masks !== void 0 && this.masks.length > 0) {
        for (const mask of this.masks) {
          mask.gotoFrame(frame);
        }
      }
      if (this.effects !== void 0 && this.effects.length > 0) {
        for (const effect of this.effects) {
          effect.gotoFrame(frame);
        }
      }
      if (this.layerStyles !== void 0 && this.layerStyles.length > 0) {
        for (const layerStyle of this.layerStyles) {
          layerStyle.gotoFrame(frame);
        }
      }
    }
    verify() {
      if (!this.containingComposition || this.duration <= 0 || !this.transform) {
        verifyFailed();
        return false;
      }
      if (!this.transform.verify()) {
        verifyFailed();
        return false;
      }
      if (this.masks && this.masks.length > 0) {
        for (const mask of this.masks) {
          if (!mask || !mask.verify()) {
            verifyFailed();
            return false;
          }
        }
      }
      if (this.layerStyles && this.layerStyles.length > 0) {
        for (const layerStyle of this.layerStyles) {
          if (!layerStyle || !layerStyle.verify()) {
            verifyFailed();
            return false;
          }
        }
      }
      if (this.effects && this.effects.length > 0) {
        for (const effect of this.effects) {
          if (!effect || !effect.verify()) {
            verifyFailed();
            return false;
          }
        }
      }
      return true;
    }
    getMaxScaleFactor() {
      if (this.maxScale !== void 0) {
        return this.maxScale;
      }
      this.maxScale = new Point(1, 1);
      const property = this.transform.scale;
      if (property.animatable()) {
        const { keyframes } = property;
        let scaleX = Math.abs(keyframes[0].startValue.x);
        let scaleY = Math.abs(keyframes[0].startValue.y);
        if (keyframes !== void 0 && keyframes.length > 0) {
          for (const keyframe of keyframes) {
            const x = Math.abs(keyframe.endValue.x);
            const y = Math.abs(keyframe.endValue.y);
            if (scaleX < x) {
              scaleX = x;
            }
            if (scaleY < y) {
              scaleY = y;
            }
          }
        }
        this.maxScale.x = scaleX;
        this.maxScale.y = scaleY;
      } else {
        this.maxScale.x = Math.abs(property.value.x);
        this.maxScale.y = Math.abs(property.value.y);
      }
      if (this.parent !== void 0) {
        const parentScale = this.parent.getMaxScaleFactor();
        this.maxScale.x *= parentScale.x;
        this.maxScale.y *= parentScale.y;
      }
      return this.maxScale;
    }
  }

  var MaskMode;
  (function(MaskMode2) {
    MaskMode2[MaskMode2["None"] = 0] = "None";
    MaskMode2[MaskMode2["Add"] = 1] = "Add";
    MaskMode2[MaskMode2["Subtract"] = 2] = "Subtract";
    MaskMode2[MaskMode2["Intersect"] = 3] = "Intersect";
    MaskMode2[MaskMode2["Lighten"] = 4] = "Lighten";
    MaskMode2[MaskMode2["Darken"] = 5] = "Darken";
    MaskMode2[MaskMode2["Difference"] = 6] = "Difference";
    MaskMode2[MaskMode2["Accum"] = 7] = "Accum";
  })(MaskMode || (MaskMode = {}));

  const SPATIAL_PRECISION = 0.05;
  const BEZIER_PRECISION = 5e-3;
  const readRatio = (byteArray) => {
    const numeratorValue = byteArray.readEncodeInt32();
    const denominatorValue = byteArray.readEncodedUint32();
    const ration = new Ratio(numeratorValue, denominatorValue);
    return ration;
  };
  const readColor = (byteArray) => {
    const redNum = byteArray.readUint8();
    const greenNum = byteArray.readUint8();
    const blueNum = byteArray.readUint8();
    const color = { red: redNum, green: greenNum, blue: blueNum };
    return color;
  };
  const readTime = (byteArray) => byteArray.readEncodedUint64();
  const readLayerID = (byteArray) => {
    const id = byteArray.readEncodedUint32();
    if (id > 0) {
      const layer = new Layer();
      layer.id = id;
      return layer;
    }
    return void 0;
  };
  const readPoint = (byteArray) => {
    const x = byteArray.readFloat32();
    const y = byteArray.readFloat32();
    return new Point(x, y);
  };

  const readCompositionAttributes = (byteArray, composition) => {
    composition.width = byteArray.readEncodeInt32();
    composition.height = byteArray.readEncodeInt32();
    composition.duration = readTime(byteArray);
    composition.frameRate = byteArray.readFloat32();
    composition.backgroundColor = readColor(byteArray);
  };

  class VideoFrame {
    constructor() {
      this.isKeyframe = false;
      this.frame = 0;
      this.fileBytes = void 0;
    }
  }

  class Sequence {
    constructor() {
      this.composition = void 0;
      this.id = 0;
      this.width = 0;
      this.height = 0;
      this.frameRate = 0;
      this.frameCount = 0;
      this.isKeyFrameFlags = [];
    }
    verify() {
      return verifyAndrReturn(this.composition !== void 0 && this.width > 0 && this.height > 0 && this.frameRate > 0);
    }
  }

  class VideoSequence extends Sequence {
    constructor() {
      super(...arguments);
      this.alphaStartX = 0;
      this.alphaStartY = 0;
      this.frames = [];
      this.headers = [];
      this.staticTimeRanges = [];
    }
    verify() {
      if (!super.verify() || this.frames.length <= 0) {
        verifyFailed();
        return false;
      }
      for (const frame of this.frames) {
        if (!frame && !frame.fileBytes) {
          verifyFailed();
          return false;
        }
      }
      for (const header of this.headers) {
        if (!header) {
          verifyFailed();
          return false;
        }
      }
      return true;
    }
  }

  class ByteData {
    constructor(data, length) {
      this.data = void 0;
      this.length = 0;
      this.data = data;
      this.length = length;
    }
  }

  class Context {
    constructor() {
      this.tagLevel = 0;
      this.compositions = [];
      this.images = [];
      this.errorMessages = [];
    }
    throwException(message) {
      this.errorMessages.push(message);
    }
    releaseCompositions() {
      const compositions = this.compositions.slice();
      this.compositions = void 0;
      return compositions;
    }
    releaseImages() {
      const images = this.images.slice();
      this.images = void 0;
      return images;
    }
  }

  var __pow = Math.pow;
  const LENGTH_FOR_STORE_NUM_BITS = 5;
  class ByteArray {
    constructor(buffer, littleEndian) {
      this.position = 0;
      this.bitPosition = 0;
      this.dataView = new DataView(buffer);
      this.littleEndian = !!littleEndian;
      this.context = new Context();
    }
    get length() {
      return this.dataView.byteLength;
    }
    get bytesAvailable() {
      return this.dataView.byteLength - this.position;
    }
    data() {
      return this.dataView.buffer;
    }
    get postion() {
      return this.position;
    }
    alignWithBytes() {
      this.bitPosition = this.position * 8;
    }
    readBoolean() {
      const value = this.dataView.getInt8(this.position);
      this.position += 1;
      this.positonChangend();
      return Boolean(value);
    }
    readChar() {
      if (this.position >= this.length)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getInt8(this.position);
      this.position += 1;
      this.positonChangend();
      return String.fromCharCode(value);
    }
    readUint8() {
      if (this.position >= this.length)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getUint8(this.position);
      this.position += 1;
      this.positonChangend();
      return value;
    }
    readInt8() {
      if (this.position >= this.length)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getInt8(this.position);
      this.position += 1;
      this.positonChangend();
      return value;
    }
    readInt16() {
      if (this.position >= this.length - 1)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getInt16(this.position, this.littleEndian);
      this.position += 2;
      this.positonChangend();
      return value;
    }
    readUint16() {
      if (this.position >= this.length - 1)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getUint16(this.position, this.littleEndian);
      this.position += 2;
      this.positonChangend();
      return value;
    }
    readInt24() {
      if (this.position >= this.length - 2)
        Log.error(ErrorCode.PagCodecError);
      const left = this.dataView.getInt16(this.position, this.littleEndian);
      const right = this.dataView.getInt8(this.position + 2);
      this.position += 3;
      this.positonChangend();
      return this.littleEndian ? left + __pow(2, 16) * right : __pow(2, 16) * left + right;
    }
    readUint24() {
      if (this.position >= this.length - 2)
        Log.error(ErrorCode.PagCodecError);
      const left = this.dataView.getUint16(this.position, this.littleEndian);
      const right = this.dataView.getUint8(this.position + 2);
      this.position += 3;
      this.positonChangend();
      return this.littleEndian ? left + __pow(2, 16) * right : __pow(2, 16) * left + right;
    }
    readInt32() {
      if (this.position >= this.length - 3)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getInt32(this.position, this.littleEndian);
      this.position += 4;
      this.positonChangend();
      return value;
    }
    readUint32() {
      if (this.position >= this.length - 3)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getUint32(this.position, this.littleEndian);
      this.position += 4;
      this.positonChangend();
      return value;
    }
    readInt64() {
      if (this.position >= this.length - 7)
        Log.error(ErrorCode.PagCodecError);
      const left = this.dataView.getInt32(this.position, this.littleEndian);
      const right = this.dataView.getInt32(this.position + 4, this.littleEndian);
      this.position += 8;
      this.positonChangend();
      return this.littleEndian ? left + __pow(2, 32) * right : __pow(2, 32) * left + right;
    }
    readUint64() {
      if (this.position >= this.length - 7)
        Log.error(ErrorCode.PagCodecError);
      const left = this.dataView.getUint32(this.position, this.littleEndian);
      const right = this.dataView.getUint32(this.position + 4, this.littleEndian);
      this.position += 8;
      this.positonChangend();
      return this.littleEndian ? left + __pow(2, 32) * right : __pow(2, 32) * left + right;
    }
    readFloat32() {
      if (this.position >= this.length - 3)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getFloat32(this.position, this.littleEndian);
      this.position += 4;
      this.positonChangend();
      return value;
    }
    readDouble() {
      if (this.position >= this.length - 7)
        Log.error(ErrorCode.PagCodecError);
      const value = this.dataView.getFloat64(this.position, this.littleEndian);
      this.position += 8;
      this.positonChangend();
      return value;
    }
    readUTF8String() {
      if (this.position >= this.length)
        Log.error(ErrorCode.PagCodecError);
      let encoded = "";
      let dataLength = 0;
      for (let i = this.position; i < this.length; i++) {
        if (this.dataView.getUint8(i) === 0) {
          break;
        }
        encoded += `%${this.dataView.getUint8(i).toString(16)}`;
        dataLength += 1;
      }
      this.position += dataLength;
      this.positonChangend();
      return decodeURIComponent(encoded);
    }
    readEncodedUint32() {
      const valueMask = 127;
      const hasNext = 128;
      let value = 0;
      let byte = 0;
      for (let i = 0; i < 32; i += 7) {
        if (this.position >= this.length) {
          throw Error("readEncodedUint32 End of file was encountered.");
        }
        byte = this.dataView.getUint8(this.position);
        this.position += 1;
        value |= (byte & valueMask) << i;
        if ((byte & hasNext) === 0) {
          break;
        }
      }
      this.positonChangend();
      return value;
    }
    readEncodeInt32() {
      const data = this.readEncodedUint32();
      const value = data >> 1;
      return (data & 1) > 0 ? -value : value;
    }
    readEncodedUint64() {
      const valueMask = 127;
      const hasNext = 128;
      let value = 0;
      let byte = 0;
      for (let i = 0; i < 64; i += 7) {
        if (this.position >= this.length) {
          throw Error("readEncodedUint64 End of file was encountered.");
        }
        byte = this.dataView.getUint8(this.position);
        this.position += 1;
        value |= (byte & valueMask) << i;
        if ((byte & hasNext) === 0) {
          break;
        }
      }
      this.positonChangend();
      return value;
    }
    readEncodeInt64() {
      const data = this.readEncodedUint64();
      const value = data << 0;
      return (data & 1) > 0 ? -value : value;
    }
    readBytes(length) {
      if (!length || length <= 0) {
        length = this.length - this.position;
      }
      if (this.position > this.length - length)
        Log.error(ErrorCode.PagCodecError);
      const newBuffer = this.dataView.buffer.slice(this.position, this.position + length);
      this.position += length;
      this.positonChangend();
      return new ByteArray(newBuffer, this.littleEndian);
    }
    readUBits(numBits) {
      const bitMasks = [0, 1, 3, 7, 15, 31, 63, 127, 255];
      let value = 0;
      if (this.bitPosition > this.length * 8 - numBits)
        Log.error(ErrorCode.PagCodecError);
      let pos = 0;
      while (pos < numBits) {
        const bytePosition = Math.floor(this.bitPosition * 0.125);
        const bitPosition = this.bitPosition % 8;
        let byte = this.dataView.getUint8(bytePosition) >> bitPosition;
        const bitLength = Math.min(8 - bitPosition, numBits - pos);
        byte &= bitMasks[bitLength];
        value |= byte << pos;
        pos += bitLength;
        this.bitPosition += bitLength;
      }
      this.bitPositionChanged();
      return value;
    }
    readBits(numBits) {
      let value = this.readUBits(numBits);
      value <<= 32 - numBits;
      const data = value << 0;
      return data >> 32 - numBits;
    }
    readNumBits() {
      return this.readUBits(LENGTH_FOR_STORE_NUM_BITS) + 1;
    }
    readInt32List(count) {
      const numBits = this.readNumBits();
      const value = new Array(count);
      for (let i = 0; i < count; i++) {
        value[i] = this.readBits(numBits);
      }
      return value;
    }
    readUint32List(count) {
      const numBits = this.readNumBits();
      const value = new Array(count);
      for (let i = 0; i < count; i++) {
        value[i] = this.readUBits(numBits);
      }
      return value;
    }
    readBitBoolean() {
      return this.readUBits(1) !== 0;
    }
    readFloatList(count, percision) {
      const numBits = this.readNumBits();
      const value = new Array(count);
      for (let i = 0; i < count; i++) {
        value[i] = this.readBits(numBits) * percision;
      }
      return value;
    }
    bitPositionChanged() {
      this.position = Math.ceil(this.bitPosition * 0.125);
    }
    positonChangend() {
      this.bitPosition = this.position * 8;
    }
  }

  const memcpy = (dst, dstOffset, src, srcOffset, num) => {
    if (dstOffset >= dst.byteLength || srcOffset >= src.byteLength || src.byteLength - srcOffset > dst.byteLength - dstOffset || num > src.byteLength)
      return;
    const dstUint8Array = new Uint8Array(dst);
    const srcUint8Array = new Uint8Array(src, srcOffset, num);
    dstUint8Array.set(srcUint8Array, dstOffset);
  };
  const concatArrayBuffers2Uint8Array = (arrays) => {
    const uint8Arrays = arrays.map((arr) => new Uint8Array(arr));
    return concatUint8Arrays(uint8Arrays);
  };
  const concatUint8Arrays = (arrays) => {
    let totalLength = 0;
    for (const arr of arrays) {
      totalLength += arr.byteLength;
    }
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of arrays) {
      result.set(arr, offset);
      offset += arr.byteLength;
    }
    return result;
  };

  const readByteDataWithStartCode = (byteArray) => {
    const length = byteArray.readEncodedUint32();
    const bytes = byteArray.readBytes(length);
    if (length === 0)
      Log.error(ErrorCode.ReadStartCodeError);
    const data = new ArrayBuffer(length + 4);
    memcpy(data, 4, bytes.data(), 0, length);
    const dataView = new DataView(data);
    dataView.setUint8(0, 0);
    dataView.setUint8(1, 0);
    dataView.setUint8(2, 0);
    dataView.setUint8(3, 1);
    return new ByteData(new ByteArray(data), length + 4);
  };

  const readVideoSequence = (byteArray, hasAlpha) => {
    const videoSequence = new VideoSequence();
    videoSequence.width = byteArray.readEncodeInt32();
    videoSequence.height = byteArray.readEncodeInt32();
    videoSequence.frameRate = byteArray.readFloat32();
    if (hasAlpha) {
      videoSequence.alphaStartX = byteArray.readEncodeInt32();
      videoSequence.alphaStartY = byteArray.readEncodeInt32();
    }
    const sps = readByteDataWithStartCode(byteArray);
    const pps = readByteDataWithStartCode(byteArray);
    videoSequence.headers.push(sps, pps);
    videoSequence.frameCount = byteArray.readEncodedUint32();
    for (let i = 0; i < videoSequence.frameCount; i++) {
      const videoFrame = new VideoFrame();
      videoFrame.isKeyframe = byteArray.readBitBoolean();
      videoSequence.frames.push(videoFrame);
    }
    for (let i = 0; i < videoSequence.frameCount; i++) {
      const videoFrame = videoSequence.frames[i];
      videoFrame.frame = readTime(byteArray);
      videoFrame.fileBytes = readByteDataWithStartCode(byteArray);
    }
    if (byteArray.bytesAvailable > 0) {
      const count = byteArray.readEncodedUint32();
      for (let i = 0; i < count; i++) {
        const staticTimeRange = { start: 0, end: 0 };
        staticTimeRange.start = readTime(byteArray);
        staticTimeRange.end = readTime(byteArray);
        videoSequence.staticTimeRanges.push(staticTimeRange);
      }
    }
    return videoSequence;
  };

  const readVideoComposition = (byteArray) => {
    const composition = new VideoComposition();
    composition.id = byteArray.readEncodedUint32();
    composition.hasAlpha = byteArray.readBoolean();
    const parameter = { composition, hasAlpha: composition.hasAlpha };
    readTags(byteArray, parameter, ReadTagsOfVideoComposition);
    return composition;
  };
  const ReadTagsOfVideoComposition = (byteArray, code, parameter) => {
    const { composition } = parameter;
    switch (code) {
      case TagCode.CompositionAttributes:
        readCompositionAttributes(byteArray, composition);
        break;
      case TagCode.VideoSequence: {
        const sequence = readVideoSequence(byteArray, parameter.hasAlpha);
        sequence.composition = composition;
        composition.sequences.push(sequence);
        break;
      }
    }
  };

  var EffectType;
  (function(EffectType2) {
    EffectType2[EffectType2["Unknown"] = 0] = "Unknown";
    EffectType2[EffectType2["Tint"] = 1] = "Tint";
    EffectType2[EffectType2["Fill"] = 2] = "Fill";
    EffectType2[EffectType2["Stroke"] = 3] = "Stroke";
    EffectType2[EffectType2["Tritone"] = 4] = "Tritone";
    EffectType2[EffectType2["DropShadow"] = 5] = "DropShadow";
    EffectType2[EffectType2["RadialWipe"] = 6] = "RadialWipe";
    EffectType2[EffectType2["DisplacementMap"] = 7] = "DisplacementMap";
  })(EffectType || (EffectType = {}));

  function subtractFromTimeRanges(timeRanges, startTime, endTime) {
    if (endTime < startTime) {
      return;
    }
    const size = timeRanges.length;
    for (let i = size - 1; i >= 0; i--) {
      const timeRange = timeRanges[i];
      if (timeRange.end < startTime || timeRange.start > endTime) {
        continue;
      }
      if (timeRange.start < startTime && timeRange.end > endTime) {
        const range = { start: endTime + 1, end: timeRange.end };
        timeRange.end = startTime - 1;
        if (range.end > range.start) {
          timeRanges.splice(i + 1, 0, range);
        }
        if (timeRange.end <= timeRange.start) {
          timeRanges.splice(i, 1);
        }
        break;
      }
      if (timeRange.start >= startTime && timeRange.end <= endTime) {
        timeRanges.splice(i, 1);
      } else if (timeRange.start < startTime) {
        timeRange.end = startTime - 1;
        if (timeRange.end <= timeRange.start) {
          timeRanges.splice(i, 1);
        }
      } else {
        timeRange.start = endTime + 1;
        if (timeRange.end <= timeRange.start) {
          timeRanges.splice(i, 1);
        }
      }
    }
  }
  function splitTimeRangesAt(timeRanges, startTime) {
    const size = timeRanges.length;
    for (let i = size - 1; i >= 0; i--) {
      const timeRange = timeRanges[i];
      if (timeRange.start === startTime || timeRange.end <= startTime) {
        break;
      }
      if (timeRange.start < startTime && timeRange.end > startTime) {
        const range = { start: startTime, end: timeRange.end };
        timeRange.end = startTime - 1;
        if (range.end > range.start) {
          timeRanges.splice(i + 1, 0, range);
        }
        if (timeRange.end <= timeRange.start) {
          timeRanges.splice(i, 1);
        }
        break;
      }
    }
  }

  class VectorComposition extends Composition {
    constructor() {
      super(...arguments);
      this.layers = [];
      this.staticTimeRanges = [];
      this.staticTimeRangeUpdated = false;
    }
    type() {
      return CompositionType.Vector;
    }
    getStaticTimeRanges() {
      if (!this.staticTimeRangeUpdated) {
        this.staticTimeRangeUpdated = true;
        this.updateStaticTimeRanges();
      }
      return this.staticTimeRanges;
    }
    verify() {
      if (!super.verify()) {
        verifyFailed();
        return false;
      }
      for (const layer of this.layers) {
        if (!layer || !layer.verify()) {
          verifyFailed();
          return false;
        }
      }
      return true;
    }
    updateStaticTimeRanges() {
      if (this.duration > 1) {
        const range = { start: 0, end: this.duration - 1 };
        this.staticTimeRanges = [range];
        for (const layer of this.layers) {
          if (this.staticTimeRanges.length <= 0) {
            break;
          }
          layer.excludeVaryingRanges(this.staticTimeRanges);
          splitTimeRangesAt(this.staticTimeRanges, layer.startTime);
          splitTimeRangesAt(this.staticTimeRanges, layer.startTime + layer.duration);
        }
      }
    }
  }

  class Property {
    animatable() {
      return false;
    }
    excludeVaryingRanges(_timeRanges) {
    }
    gotoFrame(_time) {
    }
  }

  class Transform2D {
    constructor() {
      this.anchorPoint = void 0;
      this.position = void 0;
      this.xPosition = void 0;
      this.yPosition = void 0;
      this.scale = void 0;
      this.rotation = void 0;
      this.opacity = void 0;
    }
    static createDefaultTransform2D() {
      const transform = new Transform2D();
      transform.anchorPoint = new Property();
      transform.anchorPoint.value = ZERO_POINT;
      transform.position = new Property();
      transform.position.value = ZERO_POINT;
      transform.xPosition = new Property();
      transform.xPosition.value = 0;
      transform.yPosition = new Property();
      transform.yPosition.value = 0;
      transform.scale = new Property();
      transform.scale.value = new Point(1, 1);
      transform.rotation = new Property();
      transform.rotation.value = 0;
      transform.opacity = new Property();
      transform.opacity.value = 255;
      return transform;
    }
    excludeVaryingRanges(timeRanges) {
      this.anchorPoint.excludeVaryingRanges(timeRanges);
      if (this.position !== void 0) {
        this.position.excludeVaryingRanges(timeRanges);
      } else {
        this.xPosition.excludeVaryingRanges(timeRanges);
        this.yPosition.excludeVaryingRanges(timeRanges);
      }
      this.scale.excludeVaryingRanges(timeRanges);
      this.rotation.excludeVaryingRanges(timeRanges);
      this.opacity.excludeVaryingRanges(timeRanges);
    }
    gotoFrame(frame) {
      this.anchorPoint.gotoFrame(frame);
      if (this.position !== void 0) {
        this.position.gotoFrame(frame);
      } else {
        this.xPosition.gotoFrame(frame);
        this.yPosition.gotoFrame(frame);
      }
      this.scale.gotoFrame(frame);
      this.rotation.gotoFrame(frame);
      this.opacity.gotoFrame(frame);
    }
    verify() {
      return this.anchorPoint !== void 0 && (this.position !== void 0 || this.xPosition !== void 0 && this.yPosition !== void 0) && this.scale !== void 0 && this.rotation !== void 0 && this.opacity !== void 0;
    }
  }

  class PreComposeLayer extends Layer {
    constructor() {
      super(...arguments);
      this.composition = void 0;
      this.compositionStartTime = ZERO_TIME;
      this.staticTimeRanges = void 0;
      this.staticTimeRangeUpdated = false;
    }
    static wrap(composition) {
      const layer = new PreComposeLayer();
      layer.duration = composition.duration;
      const transform = new Transform2D();
      transform.anchorPoint = new Property();
      transform.anchorPoint.value = ZERO_POINT;
      transform.position = new Property();
      transform.position.value = ZERO_POINT;
      transform.scale = new Property();
      transform.scale.value = new Point(1, 1);
      transform.rotation = new Property();
      transform.rotation.value = 0;
      transform.opacity = new Property();
      transform.opacity.value = OPAQUE;
      layer.transform = transform;
      layer.composition = composition;
      return layer;
    }
    type() {
      return LayerType.PreCompose;
    }
    excludeVaryingRanges(timeRanges) {
      super.excludeVaryingRanges(timeRanges);
      if (!timeRanges || timeRanges.length === 0) {
        return;
      }
      this.updateStaticTimeRanges();
    }
    gotoFrame(frame) {
      super.gotoFrame(frame);
    }
    verify() {
      if (!super.verify()) {
        return false;
      }
      if (this.composition) {
        return true;
      }
      return false;
    }
    updateStaticTimeRanges() {
      if (this.staticTimeRangeUpdated) {
        return;
      }
      this.staticTimeRangeUpdated = true;
      const ranges = this.composition.getStaticTimeRanges();
      for (let i = ranges.length - 1; i >= 0; i--) {
        const range = ranges[i];
        range.start += this.compositionStartTime;
        range.end += this.compositionStartTime;
        if (range.end <= this.startTime) {
          ranges.pop();
        } else if (range.start < this.startTime) {
          range.start = 0;
        } else if (range.start >= this.startTime + this.duration - 1) {
          ranges.pop();
        } else if (range.end > this.startTime + this.duration - 1) {
          range.end = this.startTime + this.duration - 1;
        }
      }
      this.staticTimeRanges = ranges;
    }
  }

  class ShapeLayer extends Layer {
    constructor() {
      super(...arguments);
      this.contents = [];
    }
    type() {
      return LayerType.Shape;
    }
    excludeVaryingRanges(timeRanges) {
      super.excludeVaryingRanges(timeRanges);
      for (const element of this.contents) {
        element.excludeVaryingRanges(timeRanges);
      }
    }
    gotoFrame(frame) {
      super.gotoFrame(frame);
      for (const element of this.contents) {
        element.gotoFrame(frame);
      }
    }
    verify() {
      if (!super.verify()) {
        return false;
      }
      for (const element of this.contents) {
        if (element === void 0 || !element.verify()) {
          return false;
        }
      }
      return true;
    }
  }

  class SolidLayer extends Layer {
    constructor() {
      super(...arguments);
      this.solidColor = Black;
      this.width = 0;
      this.height = 0;
    }
    type() {
      return LayerType.Solid;
    }
    excludeVaryingRanges(timeRanges) {
      super.excludeVaryingRanges(timeRanges);
    }
    gotoFrame(frame) {
      super.gotoFrame(frame);
    }
    verify() {
      if (!super.verify()) {
        verifyFailed();
        return false;
      }
      return verifyAndrReturn(this.width > 0 && this.height > 0);
    }
  }

  class UnDefinedLayer extends Layer {
    type() {
      return LayerType.undefined;
    }
  }

  class Keyframe {
    constructor() {
      this.startTime = 0;
      this.endTime = 0;
      this.interpolationType = KeyframeInterpolationType.Hold;
      this.bezierOut = [];
      this.bezierIn = [];
      this.spatialOut = ZERO_POINT;
      this.spatialIn = ZERO_POINT;
    }
    initialize() {
    }
    getValue(_time) {
      return this.startValue;
    }
    containsTime(time) {
      return time >= this.startTime && time < this.endTime;
    }
  }

  class AnimatableProperty extends Property {
    constructor(keyframes) {
      super();
      this.keyframes = keyframes;
      this.lastKeyframeIndex = 0;
      if (keyframes !== void 0 && keyframes.length > 0) {
        this.value = keyframes[0].startValue;
      }
      for (const keyframe of keyframes) {
        keyframe.initialize();
      }
    }
    animatable() {
      return true;
    }
    excludeVaryingRanges(timeRanges) {
      for (const keyframe of this.keyframes) {
        switch (keyframe.interpolationType) {
          case KeyframeInterpolationType.Bezier:
          case KeyframeInterpolationType.Linear:
            subtractFromTimeRanges(timeRanges, keyframe.startTime, keyframe.endTime - 1);
            break;
          default:
            splitTimeRangesAt(timeRanges, keyframe.startTime);
            splitTimeRangesAt(timeRanges, keyframe.endTime);
            break;
        }
      }
    }
    gotoFrame(frame) {
      let lastKeyframe = this.keyframes[this.lastKeyframeIndex];
      if (lastKeyframe.containsTime(frame)) {
        this.value = lastKeyframe.getValue(frame);
        return;
      }
      if (frame < lastKeyframe.startTime) {
        while (this.lastKeyframeIndex > 0) {
          this.lastKeyframeIndex -= 1;
          if (this.keyframes[this.lastKeyframeIndex].containsTime(frame)) {
            break;
          }
        }
      } else {
        while (this.lastKeyframeIndex < this.keyframes.length - 1) {
          this.lastKeyframeIndex += 1;
          if (this.keyframes[this.lastKeyframeIndex].containsTime(frame)) {
            break;
          }
        }
      }
      lastKeyframe = this.keyframes[this.lastKeyframeIndex];
      if (frame <= lastKeyframe.startTime) {
        this.value = lastKeyframe.startValue;
      } else if (frame >= lastKeyframe.endTime) {
        this.value = lastKeyframe.endValue;
      } else {
        this.value = lastKeyframe.getValue(frame);
      }
    }
  }

  var AttributeType;
  (function(AttributeType2) {
    AttributeType2[AttributeType2["Value"] = 0] = "Value";
    AttributeType2[AttributeType2["FixedValue"] = 1] = "FixedValue";
    AttributeType2[AttributeType2["SimpleProperty"] = 2] = "SimpleProperty";
    AttributeType2[AttributeType2["DiscreteProperty"] = 3] = "DiscreteProperty";
    AttributeType2[AttributeType2["MultiDimensionProperty"] = 4] = "MultiDimensionProperty";
    AttributeType2[AttributeType2["SpatialProperty"] = 5] = "SpatialProperty";
    AttributeType2[AttributeType2["BitFlag"] = 6] = "BitFlag";
    AttributeType2[AttributeType2["Custom"] = 7] = "Custom";
  })(AttributeType || (AttributeType = {}));
  const readTagBlock = (byteArray, parameter, blockConfig) => {
    const tagConfig = blockConfig;
    const flags = [];
    if (!tagConfig.configs || tagConfig.configs.length === 0) {
      return parameter;
    }
    for (const config of tagConfig.configs) {
      const flag = readAttributeFlag(byteArray, config);
      flags.push(flag);
    }
    byteArray.alignWithBytes();
    let index = 0;
    for (const config of tagConfig.configs) {
      const flag = flags[index];
      const target = config.key;
      config.readAttribute(byteArray, flag, parameter, target);
      index += 1;
    }
    return parameter;
  };
  class BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      this.attributeType = attributeType;
      this.defaultValue = defaultValue;
      this.key = key;
    }
    readAttribute(_byteArray, _flag, _targetClass, _target) {
    }
    readValue(_byteArray) {
      return void 0;
    }
    readValueList(_byteArray, _list, _count) {
    }
    dimensionality() {
      return 1;
    }
    newKeyframe(_flag) {
      return new Keyframe();
    }
  }
  const readAttribute = (byteArray, flag, targetClass, target, config) => {
    if (config.attributeType === 6) {
      targetClass[target] = flag.exist;
    } else if (config.attributeType === 1) {
      targetClass[target] = config.readValue(byteArray);
    } else if (config.attributeType === 0) {
      targetClass[target] = readValue(byteArray, config, flag);
    } else {
      targetClass[target] = readProperty(byteArray, config, flag);
    }
  };
  const readProperty = (byteArray, config, flag) => {
    let property;
    if (flag.exist) {
      if (flag.animatable) {
        const keyframes = readKeyframes(byteArray, config, flag);
        if (!keyframes || keyframes.length === 0) {
          throw "Wrong number of keyframes.";
        }
        readTimeAndValue(byteArray, keyframes, config);
        readTimeEase(byteArray, keyframes, config);
        if (flag.hasSpatial) ;
        property = new AnimatableProperty(keyframes);
      } else {
        property = new Property();
        property.value = readValue(byteArray, config, flag);
      }
    } else {
      property = new Property();
      property.value = config.defaultValue;
    }
    return property;
  };
  const readValue = (byteArray, config, flag) => {
    if (flag.exist) {
      return config.readValue(byteArray);
    }
    return config.defaultValue;
  };
  const readAttributeFlag = (byteArray, config) => {
    const flag = { exist: false, animatable: false, hasSpatial: false };
    const { attributeType } = config;
    if (attributeType === 1) {
      flag.exist = true;
      return flag;
    }
    flag.exist = byteArray.readBitBoolean();
    if (!flag.exist || attributeType === 0 || attributeType === 6 || attributeType === 7) {
      return flag;
    }
    flag.animatable = byteArray.readBitBoolean();
    if (!flag.animatable || attributeType !== 5) {
      return flag;
    }
    flag.hasSpatial = byteArray.readBitBoolean();
    return flag;
  };
  const readKeyframes = (byteArray, config, flag) => {
    const keyframes = [];
    const numFrames = byteArray.readEncodedUint32();
    for (let i = 0; i < numFrames; i++) {
      let keyframe;
      if (config.attributeType === 3) {
        keyframe = new Keyframe();
      } else {
        const interpolationType = byteArray.readUBits(2);
        if (interpolationType === KeyframeInterpolationType.Hold) {
          keyframe = new Keyframe();
        } else {
          keyframe = config.newKeyframe(flag);
          keyframe.interpolationType = interpolationType;
        }
      }
      keyframes.push(keyframe);
    }
    return keyframes;
  };
  const readTimeAndValue = (byteArray, keyframes, config) => {
    const numFrames = keyframes.length;
    keyframes[0].startTime = readTime(byteArray);
    for (let i = 0; i < numFrames; i++) {
      const time = readTime(byteArray);
      keyframes[i].endTime = time;
      if (i < numFrames - 1) {
        keyframes[i + 1].startTime = time;
      }
    }
    const list = [];
    config.readValueList(byteArray, list, numFrames + 1);
    let index = 0;
    keyframes[0].startValue = list[index];
    index += 1;
    for (let i = 0; i < numFrames; i++) {
      const value = list[index];
      index += 1;
      keyframes[i].endValue = value;
      if (i < numFrames - 1) {
        keyframes[i + 1].startValue = value;
      }
    }
  };
  const readTimeEase = (byteArray, keyframes, config) => {
    const dimensionality = config.attributeType === 4 ? config.dimensionality() : 1;
    const numBits = byteArray.readNumBits();
    for (const keyframe of keyframes) {
      if (keyframe.interpolationType !== KeyframeInterpolationType.Bezier) {
        continue;
      }
      let x;
      let y;
      for (let i = 0; i < dimensionality; i++) {
        x = byteArray.readBits(numBits) * BEZIER_PRECISION;
        y = byteArray.readBits(numBits) * BEZIER_PRECISION;
        keyframe.bezierOut.push({ x, y });
        x = byteArray.readBits(numBits) * BEZIER_PRECISION;
        y = byteArray.readBits(numBits) * BEZIER_PRECISION;
        keyframe.bezierIn.push({ x, y });
      }
    }
  };

  function readSolidColor(byteArray, layer) {
    layer.solidColor = readColor(byteArray);
    layer.width = byteArray.readEncodeInt32();
    layer.height = byteArray.readEncodeInt32();
  }

  function interpolateFloat(a, b, t) {
    return a + (b - a) * t;
  }

  class Interpolator {
    getInterpolation(input) {
      return input;
    }
  }

  class MultiDimensionPointKeyframe extends Keyframe {
    constructor() {
      super(...arguments);
      this.xInterpolator = void 0;
      this.yInterpolator = void 0;
    }
    initialize() {
      super.initialize();
      if (this.interpolationType === KeyframeInterpolationType.Bezier) ; else {
        this.xInterpolator = new Interpolator();
        this.yInterpolator = new Interpolator();
      }
    }
    getValue(time) {
      const progress = (time - this.startTime) / (this.endTime - this.startTime);
      const xProgress = this.xInterpolator.getInterpolation(progress);
      const yProgress = this.yInterpolator.getInterpolation(progress);
      const x = interpolateFloat(this.startValue.x, this.endValue.x, xProgress);
      const y = interpolateFloat(this.startValue.y, this.endValue.y, yProgress);
      return { x, y };
    }
  }

  class SingleEaseKeyframe extends Keyframe {
    constructor() {
      super(...arguments);
      this.interpolator = void 0;
    }
    initialize() {
      if (this.interpolationType === KeyframeInterpolationType.Bezier) ; else {
        this.interpolator = new Interpolator();
      }
    }
    getProgress(time) {
      const progress = (time - this.startTime) / (this.endTime - this.startTime);
      return this.interpolator.getInterpolation(progress);
    }
    getValue(time) {
      const progress = this.getProgress(time);
      return interpolateFloat(this.startValue, this.endValue, progress);
    }
  }

  class FloatAttributeConfig extends BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      super(key, attributeType, defaultValue);
    }
    readAttribute(byteArray, flag, targetClass, target) {
      readAttribute(byteArray, flag, targetClass, target, this);
    }
    readValue(byteArray) {
      return byteArray.readFloat32();
    }
    readValueList(byteArray, list, count) {
      for (let i = 0; i < count; i++) {
        list.push(this.readValue(byteArray));
      }
    }
    dimensionality() {
      return 1;
    }
    newKeyframe(_flag) {
      return new SingleEaseKeyframe();
    }
  }
  class BOOLAttributeConfig extends BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      super(key, attributeType, defaultValue);
    }
    readAttribute(byteArray, flag, targetClass, target) {
      readAttribute(byteArray, flag, targetClass, target, this);
    }
    readValue(byteArray) {
      return byteArray.readBoolean();
    }
    readValueList(byteArray, list, count) {
      for (let i = 0; i < count; i++) {
        list.push(byteArray.readBitBoolean());
      }
    }
    dimensionality() {
      return 1;
    }
    newKeyframe(_flag) {
      return new Keyframe();
    }
  }
  class Uint8AttributeConfig extends BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      super(key, attributeType, defaultValue);
    }
    readAttribute(byteArray, flag, targetClass, target) {
      readAttribute(byteArray, flag, targetClass, target, this);
    }
    readValue(byteArray) {
      return byteArray.readUint8();
    }
    readValueList(byteArray, list, count) {
      const valueList = byteArray.readUint32List(count);
      for (let i = 0; i < count; i++) {
        list.push(valueList[i]);
      }
    }
    dimensionality() {
      return 1;
    }
    newKeyframe(_flag) {
      return new SingleEaseKeyframe();
    }
  }
  class TimeAttributeConfig extends BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      super(key, attributeType, defaultValue);
    }
    readAttribute(byteArray, flag, targetClass, target) {
      readAttribute(byteArray, flag, targetClass, target, this);
    }
    readValue(byteArray) {
      return readTime(byteArray);
    }
    readValueList(byteArray, list, count) {
      for (let i = 0; i < count; i++) {
        list[i] = this.readValue(byteArray);
      }
    }
    dimensionality() {
      return 1;
    }
    newKeyframe(_flag) {
      return new SingleEaseKeyframe();
    }
  }
  class PointAttributeConfig extends BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      super(key, attributeType, defaultValue);
    }
    readAttribute(byteArray, flag, targetClass, target) {
      readAttribute(byteArray, flag, targetClass, target, this);
    }
    readValue(byteArray) {
      return readPoint(byteArray);
    }
    readValueList(byteArray, list, count) {
      if (this.attributeType === AttributeType.SpatialProperty) {
        const values = byteArray.readFloatList(count * 2, SPATIAL_PRECISION);
        for (let i = 0; i < count; i++) {
          list[i] || (list[i] = new Point(0, 0));
          list[i].x = values[i];
        }
      } else {
        for (let i = 0; i < count; i++) {
          list[i] = readPoint(byteArray);
        }
      }
    }
    dimensionality() {
      return 2;
    }
    newKeyframe(_flag) {
      switch (this.attributeType) {
        case AttributeType.MultiDimensionProperty:
          return new MultiDimensionPointKeyframe();
        default:
          return new SingleEaseKeyframe();
      }
    }
  }
  class RatioAttributeConfig extends BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      super(key, attributeType, defaultValue);
    }
    readAttribute(byteArray, flag, targetClass, target) {
      readAttribute(byteArray, flag, targetClass, target, this);
    }
    readValue(byteArray) {
      return readRatio(byteArray);
    }
    readValueList(byteArray, list, count) {
      for (let i = 0; i < count; i++) {
        list[i] = this.readValue(byteArray);
      }
    }
    dimensionality() {
      return 1;
    }
    newKeyframe(_flag) {
      return new SingleEaseKeyframe();
    }
  }
  class StringAttributeConfig extends BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      super(key, attributeType, defaultValue);
    }
    readAttribute(byteArray, flag, targetClass, target) {
      readAttribute(byteArray, flag, targetClass, target, this);
    }
    readValue(byteArray) {
      return byteArray.readUTF8String();
    }
    readValueList(byteArray, list, count) {
      for (let i = 0; i < count; i++) {
        list[i] = this.readValue(byteArray);
      }
    }
    dimensionality() {
      return 1;
    }
    newKeyframe(_flag) {
      return new SingleEaseKeyframe();
    }
  }
  class LayerAttributeConfig extends BaseAttribute {
    constructor(key, attributeType, defaultValue) {
      super(key, attributeType, defaultValue);
    }
    readAttribute(byteArray, flag, targetClass, target) {
      readAttribute(byteArray, flag, targetClass, target, this);
    }
    readValue(byteArray) {
      return readLayerID(byteArray);
    }
    readValueList(byteArray, list, count) {
      for (let i = 0; i < count; i++) {
        list[i] = this.readValue(byteArray);
      }
    }
    dimensionality() {
      return 1;
    }
    newKeyframe(_flag) {
      return new SingleEaseKeyframe();
    }
  }

  const readBlockConfigOfLayerAttributes = {
    tagCode: TagCode.LayerAttributes,
    configs: [
      new BOOLAttributeConfig("isActive", AttributeType.BitFlag, true),
      new BOOLAttributeConfig("autoOrientation", AttributeType.BitFlag, false),
      new LayerAttributeConfig("parent", AttributeType.Value, void 0),
      new RatioAttributeConfig("stretch", AttributeType.Value, DefaultRatio),
      new TimeAttributeConfig("startTime", AttributeType.Value, ZERO_TIME),
      new Uint8AttributeConfig("blendMode", AttributeType.Value, BlendMode.Normal),
      new Uint8AttributeConfig("trackMatteType", AttributeType.Value, TrackMatteType.None),
      new FloatAttributeConfig("timeRemap", AttributeType.SimpleProperty, 0),
      new TimeAttributeConfig("duration", AttributeType.FixedValue, ZERO_TIME)
    ]
  };
  const readBlockConfigOfLayerAttributesV2 = {
    tagCode: TagCode.LayerAttributesV2,
    configs: [
      new BOOLAttributeConfig("isActive", AttributeType.BitFlag, true),
      new BOOLAttributeConfig("autoOrientation", AttributeType.BitFlag, false),
      new LayerAttributeConfig("parent", AttributeType.Value, void 0),
      new RatioAttributeConfig("stretch", AttributeType.Value, DefaultRatio),
      new TimeAttributeConfig("startTime", AttributeType.Value, ZERO_TIME),
      new Uint8AttributeConfig("blendMode", AttributeType.Value, BlendMode.Normal),
      new Uint8AttributeConfig("trackMatteType", AttributeType.Value, TrackMatteType.None),
      new FloatAttributeConfig("timeRemap", AttributeType.SimpleProperty, 0),
      new TimeAttributeConfig("duration", AttributeType.FixedValue, ZERO_TIME),
      new StringAttributeConfig("name", AttributeType.Value, "")
    ]
  };
  const readBlockConfigOfTransform2D = {
    tagCode: TagCode.Transform2D,
    configs: [
      new PointAttributeConfig("anchorPoint", AttributeType.SpatialProperty, ZERO_POINT),
      new PointAttributeConfig("position", AttributeType.SpatialProperty, ZERO_POINT),
      new FloatAttributeConfig("xPosition", AttributeType.SimpleProperty, 0),
      new FloatAttributeConfig("yPosition", AttributeType.SimpleProperty, 0),
      new PointAttributeConfig("scale", AttributeType.MultiDimensionProperty, new Point(1, 1)),
      new FloatAttributeConfig("rotation", AttributeType.SimpleProperty, 0),
      new Uint8AttributeConfig("opacity", AttributeType.SimpleProperty, OPAQUE)
    ]
  };
  ({
    tagCode: TagCode.MaskBlock,
    configs: []
  });

  function readCompositionReference(byteArray, layer) {
    const id = byteArray.readEncodedUint32();
    if (id > 0) {
      layer.composition = new Composition();
      layer.composition.id = id;
    }
    layer.compositionStartTime = readTime(byteArray);
  }

  const readLayer = (byteArray) => {
    const layerType = byteArray.readUint8();
    let layer;
    switch (layerType) {
      case LayerType.undefined:
        layer = new UnDefinedLayer();
        break;
      case LayerType.Solid:
        layer = new SolidLayer();
        break;
      case LayerType.Shape:
        layer = new ShapeLayer();
        break;
      case LayerType.PreCompose:
        layer = new PreComposeLayer();
        break;
      default:
        layer = new Layer();
        break;
    }
    layer.id = byteArray.readEncodedUint32();
    readTags(byteArray, layer, readTagsOfLayer);
    return layer;
  };
  const readTagsOfLayer = (byteArray, code, layer) => {
    switch (code) {
      case TagCode.LayerAttributes:
        readTagBlock(byteArray, layer, readBlockConfigOfLayerAttributes);
        if (layer.duration <= 0)
          layer.duration = 1;
        break;
      case TagCode.LayerAttributesV2:
        readTagBlock(byteArray, layer, readBlockConfigOfLayerAttributesV2);
        if (layer.duration <= 0)
          layer.duration = 1;
        break;
      case TagCode.Transform2D:
        layer.transform = new Transform2D();
        readTagBlock(byteArray, layer.transform, readBlockConfigOfTransform2D);
        if (layer.transform.position.animatable() || layer.transform.position.value !== ZERO_POINT || !(layer.transform.xPosition.animatable() || layer.transform.xPosition.value !== 0) && !(layer.transform.yPosition.animatable() || layer.transform.yPosition.value !== 0)) {
          layer.transform.xPosition = void 0;
          layer.transform.yPosition = void 0;
        } else {
          layer.transform.position = void 0;
        }
        break;
      case TagCode.SolidColor:
        if (layer.type() === LayerType.Solid) {
          readSolidColor(byteArray, layer);
        }
        break;
      case TagCode.CompositionReference:
        if (layer.type() === LayerType.PreCompose) {
          readCompositionReference(byteArray, layer);
        }
        break;
    }
  };

  const readVectorComposition = (byteArray) => {
    const composition = new VectorComposition();
    composition.id = byteArray.readEncodedUint32();
    readTags(byteArray, composition, readTagsOfVectorComposition);
    installArrayLayerReference(composition.layers);
    return composition;
  };
  const readTagsOfVectorComposition = (byteArray, code, composition) => {
    switch (code) {
      case TagCode.CompositionAttributes:
        readCompositionAttributes(byteArray, composition);
        break;
      case TagCode.LayerBlock:
        composition.layers.push(readLayer(byteArray));
        break;
    }
  };
  const installArrayLayerReference = (layers) => {
    if (!layers || layers.length === 0) {
      return;
    }
    const layerMap = new Map();
    for (const layer of layers) {
      if (!layer) {
        continue;
      }
      installLayerReference(layer);
      layerMap.set(layer.id, layer);
    }
    let index = 0;
    for (const layer of layers) {
      if (!layer) {
        continue;
      }
      if (layer.parent !== void 0) {
        const ID = layer.parent.id;
        const result = layerMap.get(ID);
        if (result !== void 0) {
          layer.parent = result;
        }
      }
      if (index > 0 && hasTrackMatte(layer.trackMatteType)) {
        layer.trackMatteLayer = layers[index - 1];
      }
      if (layer.effects !== void 0 && layer.effects.length > 0) {
        for (const effect of layer.effects) {
          if (!effect) {
            continue;
          }
          if (effect.type() === EffectType.DisplacementMap) ;
        }
      }
      index += 1;
    }
  };
  const installLayerReference = (layer) => {
    if (!layer || !layer.masks || layer.masks.length === 0) {
      return;
    }
    const maskMap = new Map();
    for (const mask of layer.masks) {
      if (!mask) {
        continue;
      }
      maskMap.set(mask.id, mask);
    }
    if (layer.effects !== void 0 && layer.effects.length > 0) {
      for (const effect of layer.effects) {
        if (!effect) {
          continue;
        }
        if (effect.maskReferences !== void 0 && effect.maskReferences.length > 0) {
          const maskReferences = new Array();
          for (const mask of effect.maskReferences) {
            const ID = mask.id;
            const result = maskMap.get(ID);
            if (result !== void 0) {
              maskReferences.push(result);
            }
          }
          effect.maskReferences = maskReferences;
        }
        switch (effect.type()) {
          case EffectType.Fill:
            if (effect.fillMask !== void 0) {
              const ID = effect.fillMask.id;
              const result = maskMap.get(ID);
              if (result !== void 0) {
                effect.fillMask = result;
              }
            }
            break;
          case EffectType.Stroke: {
            const strokeEffect = effect;
            if (strokeEffect.path = void 0) {
              const ID = strokeEffect.path.id;
              const result = maskMap.get(ID);
              if (result !== void 0) {
                strokeEffect.path = result;
              }
            }
            break;
          }
        }
      }
    }
    if (layer.type() === LayerType.Text) {
      const { pathOption } = layer;
      if (!!(pathOption == null ? void 0 : pathOption.path)) {
        const ID = pathOption.path.id;
        const result = maskMap.get(ID);
        if (result !== void 0) {
          pathOption.path = result;
        }
      }
    }
  };
  const hasTrackMatte = (type) => {
    switch (type) {
      case TrackMatteType.Alpha:
      case TrackMatteType.AlphaInverted:
        return true;
      default:
        return false;
    }
  };

  function readTagsOfFile(byteArray, code, context) {
    switch (code) {
      case TagCode.VectorCompositionBlock:
        context.compositions.push(readVectorComposition(byteArray));
        break;
      case TagCode.VideoCompositionBlock:
        context.compositions.push(readVideoComposition(byteArray));
        break;
    }
  }

  const verifyAndMake = (compositions, images) => {
    let success = compositions.length > 0;
    for (const composition of compositions) {
      if (!composition || !composition.verify()) {
        success = false;
        break;
      }
    }
    for (const imagBytes of images) {
      if (!imagBytes || !imagBytes.verify()) {
        success = false;
        break;
      }
    }
    if (!success) {
      compositions = void 0;
      images = void 0;
      return void 0;
    }
    return { compositions, images };
  };
  function installReference(compositions) {
    if (!compositions || compositions.length === 0) {
      return;
    }
    const compositionMap = new Map();
    for (const composition of compositions) {
      if (!composition) {
        continue;
      }
      compositionMap.set(composition.id, composition);
    }
    for (const item of compositions) {
      if (!item) {
        continue;
      }
      if (item.type() === CompositionType.Vector) {
        const vectorItem = item;
        if (vectorItem.layers !== void 0 && vectorItem.layers.length > 0) {
          for (const layer of vectorItem.layers) {
            layer.containingComposition = vectorItem;
            const preComposeLayer = layer;
            if (preComposeLayer.type() === LayerType.PreCompose && preComposeLayer.composition !== void 0) {
              const ID = preComposeLayer.composition.id;
              const result = compositionMap.get(ID);
              if (result !== void 0) {
                preComposeLayer.composition = result;
              }
            }
          }
        }
      }
    }
  }
  class PAGCodec {
    static maxSupportedTagLevel() {
      return TagCode.Count - 1;
    }
    static decode(byteArray) {
      if (!byteArray)
        Log.error(ErrorCode.NotByteArray);
      const bodyByteArray = this.readBodyBytes(byteArray);
      const { context } = bodyByteArray;
      readTags(bodyByteArray, context, readTagsOfFile);
      installReference(context.compositions);
      const { compositions, images } = verifyAndMake(context.releaseCompositions(), context.releaseImages());
      return { compositions, images, tagLevel: context.tagLevel };
    }
    static readBodyBytes(byteArray) {
      if (byteArray.length < 11)
        Log.error(ErrorCode.PagFileLengthErrorTooShort);
      const P = byteArray.readInt8();
      const A = byteArray.readInt8();
      const G = byteArray.readInt8();
      if (P !== 80 || A !== 65 || G !== 71) {
        Log.error(ErrorCode.InvalidPagFileHeader);
      }
      byteArray.readInt8();
      byteArray.readUint32();
      byteArray.readInt8();
      return byteArray.readBytes();
    }
  }

  function request(option) {
    if (String(option) !== "[object Object]")
      return void 0;
    const params = Object.assign(option);
    params.method = option.method ? option.method.toUpperCase() : "GET";
    params.data = option.data || {};
    let data = "";
    const formData = Object.keys(params.data).map((key) => `${key}=${params.data[key]}`);
    data = formData.join("&");
    if (params.method === "GET" && formData.length > 0) {
      params.url += location.search.length === 0 ? "".concat("?", data) : "".concat("&", data);
    }
    const xhr = new XMLHttpRequest();
    xhr.responseType = params.responseType;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (params.success && typeof params.success === "function") {
            params.success(xhr.response);
          }
        } else {
          if (params.error && typeof params.error === "function") {
            params.error(xhr.onerror);
          }
        }
      }
    };
    xhr.open(params.method, params.url, true);
    if (params.method === "POST") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    xhr.send(params.method === "POST" ? data : void 0);
  }

  class VideoData {
    constructor() {
      this.matrix = {
        width: 0,
        height: 0,
        frameRate: 0,
        duration: 0,
        hasAlpha: false,
        transform: new Transform2D(),
        videoWidth: 0,
        videoHeight: 0
      };
    }
    static create(file) {
      if (!file)
        Log.error(ErrorCode.NotPagFile);
      const videoData = new VideoData();
      if (file.mainComposition.type() === CompositionType.Video) {
        videoData.getVideoDataFromVideoComposition(file.mainComposition);
      } else if (file.mainComposition.type() === CompositionType.Vector) {
        videoData.getVideoDataFromVectorComposition(file.mainComposition);
      }
      return videoData;
    }
    getH264Raw() {
      if (!this.sequence)
        Log.error(ErrorCode.NotSequence);
      const header = this.sequence.headers.map((header2) => header2.data.data());
      const body = this.sequence.frames.map((frame) => frame.fileBytes.data.data());
      const buffers = [...header, ...body];
      const h264Raw = concatArrayBuffers2Uint8Array(buffers);
      return h264Raw;
    }
    getTPS() {
      if (!this.sequence)
        return;
      const tps = this.sequence.frames.map((frame) => frame.frame);
      return tps;
    }
    getVideoDataFromVideoComposition(composition) {
      if (composition.sequences.length < 1)
        Log.error(ErrorCode.NotSequence);
      this.matrix.width = composition.width;
      this.matrix.height = composition.height;
      this.matrix.frameRate = composition.frameRate;
      this.matrix.duration = composition.duration;
      this.matrix.videoWidth = composition.width;
      this.matrix.videoHeight = composition.height;
      this.matrix.hasAlpha = !!composition.hasAlpha;
      const sequence = composition.sequences[composition.sequences.length - 1];
      this.sequence = sequence;
      this.matrix.transform = Transform2D.createDefaultTransform2D();
    }
    getVideoDataFromVectorComposition(composition) {
      let sequencesCount = 0;
      for (const layer of composition.layers) {
        if (layer.type() !== LayerType.PreCompose)
          continue;
        const composition2 = layer.composition;
        if (composition2.type() === CompositionType.Video && composition2.sequences.length >= 1) {
          sequencesCount += 1;
        }
        if (sequencesCount > 1) {
          Log.error(ErrorCode.NotSupportMultipleSequence);
        }
      }
      if (sequencesCount < 1) {
        Log.error(ErrorCode.NotSequence);
      }
      this.matrix.width = composition.width;
      this.matrix.height = composition.height;
      this.matrix.frameRate = composition.frameRate;
      this.matrix.duration = composition.duration;
      for (const layer of composition.layers) {
        if (layer.type() !== LayerType.PreCompose)
          continue;
        const videoComposition = layer.composition;
        if (videoComposition.type() !== CompositionType.Video && videoComposition.sequences.length < 1)
          continue;
        this.matrix.videoWidth = videoComposition.width;
        this.matrix.videoHeight = videoComposition.height;
        this.matrix.hasAlpha = !!videoComposition.hasAlpha;
        const sequence = videoComposition.sequences[videoComposition.sequences.length - 1];
        this.sequence = sequence;
        this.matrix.transform = layer.transform;
        break;
      }
    }
  }

  const isPAGFile = (file) => /(?:pag)$/.test(file.name);

  const _NALU = class {
    static get TYPES() {
      return {
        [_NALU.IDR]: "IDR",
        [_NALU.SEI]: "SEI",
        [_NALU.SPS]: "SPS",
        [_NALU.PPS]: "PPS",
        [_NALU.NDR]: "NDR",
        [_NALU.AUD]: "AUD"
      };
    }
    static getNaluType(nalu) {
      if (nalu.nalUnitType in _NALU.TYPES) {
        return _NALU.TYPES[nalu.nalUnitType];
      }
      return "UNKNOWN";
    }
    constructor(data) {
      this.payload = data;
      this.nalRefIdc = (this.payload[0] & 96) >> 5;
      this.nalUnitType = this.payload[0] & 31;
      this.isVcl = this.nalUnitType === 1 || this.nalUnitType === 5;
      this.sliceType = 0;
      this.firstMbInSlice = false;
    }
    toString() {
      return `${_NALU.TYPES[this.nalUnitType]}: NRI: ${this.nalRefIdc}`;
    }
    isKeyframe() {
      return this.nalUnitType === _NALU.IDR;
    }
    getPayloadSize() {
      return this.payload.byteLength;
    }
    getSize() {
      return 4 + this.getPayloadSize();
    }
    getData() {
      const result = new Uint8Array(this.getSize());
      const view = new DataView(result.buffer);
      view.setUint32(0, this.getSize() - 4);
      result.set(this.payload, 4);
      return result;
    }
  };
  let NALU = _NALU;
  NALU.NDR = 1;
  NALU.IDR = 5;
  NALU.SEI = 6;
  NALU.SPS = 7;
  NALU.PPS = 8;
  NALU.AUD = 9;

  class ExpGolomb {
    constructor(data) {
      this.data = data;
      this.index = 0;
      this.bitLength = data.byteLength * 8;
    }
    get bitsAvailable() {
      return this.bitLength - this.index;
    }
    skipBits(size) {
      if (this.bitsAvailable < size) {
        return false;
      }
      this.index += size;
    }
    readBits(size, moveIndex = true) {
      const result = this.getBits(size, this.index, moveIndex);
      return result;
    }
    skipLZ() {
      let leadingZeroCount;
      for (leadingZeroCount = 0; leadingZeroCount < this.bitLength - this.index; ++leadingZeroCount) {
        if (this.getBits(1, this.index + leadingZeroCount, false) !== 0) {
          this.index += leadingZeroCount;
          return leadingZeroCount;
        }
      }
      return leadingZeroCount;
    }
    skipUEG() {
      this.skipBits(1 + this.skipLZ());
    }
    skipEG() {
      this.skipBits(1 + this.skipLZ());
    }
    readUEG() {
      const prefix = this.skipLZ();
      return this.readBits(prefix + 1) - 1;
    }
    readEG() {
      const value = this.readUEG();
      if (1 & value) {
        return 1 + value >>> 1;
      }
      return -1 * (value >>> 1);
    }
    readBoolean() {
      return this.readBits(1) === 1;
    }
    readUByte(numberOfBytes = 1) {
      return this.readBits(numberOfBytes * 8);
    }
    readUShort() {
      return this.readBits(16);
    }
    readUInt() {
      return this.readBits(32);
    }
    readUE() {
      let r = 0;
      let i = 0;
      while (this.readBits(1) === 0 && i < 32 && this.bitsAvailable) {
        i += 1;
      }
      r = this.readBits(i);
      r += (1 << i) - 1;
      return r;
    }
    getBits(size, offsetBits, moveIndex = true) {
      if (this.bitsAvailable < size) {
        return 0;
      }
      const offset = offsetBits % 8;
      const byte = this.data[offsetBits / 8 | 0] & 255 >>> offset;
      const bits = 8 - offset;
      if (bits >= size) {
        if (moveIndex) {
          this.index += size;
        }
        return byte >> bits - size;
      }
      if (moveIndex) {
        this.index += bits;
      }
      const nextSize = size - bits;
      return byte << nextSize | this.getBits(nextSize, offsetBits + bits, moveIndex);
    }
  }

  class H264Parser {
    static getNaluFromSequence(sequence) {
      return [
        ...sequence.headers.map((header) => new Uint8Array(header.data.data(), 4)),
        ...sequence.frames.map((frame) => new Uint8Array(frame.fileBytes.data.data(), 4))
      ];
    }
    static getH264Frames(nalus) {
      if (nalus.length < 1)
        Log.error(ErrorCode.NotNalu);
      const frames = [];
      let units = [];
      let isKeyFrame = false;
      let isVcl = false;
      for (const nalu of nalus) {
        const unit = new NALU(nalu);
        if (unit.nalUnitType === NALU.IDR || unit.nalUnitType === NALU.NDR) {
          H264Parser.parseHeader(unit);
        }
        if (units.length && isVcl && (unit.firstMbInSlice || !unit.isVcl)) {
          frames.push({ units, isKeyFrame });
          units = [];
          isKeyFrame = false;
          isVcl = false;
        }
        units.push(unit);
        isKeyFrame = isKeyFrame || unit.isKeyframe();
        isVcl = isVcl || unit.isVcl;
      }
      if (units.length > 0) {
        if (isVcl) {
          frames.push({ units, isKeyFrame });
        } else {
          const last = frames.length - 1;
          frames[last].units = frames[last].units.concat(units);
        }
      }
      return frames;
    }
    static parseHeader(nalu) {
      const decoder = new ExpGolomb(nalu.payload);
      decoder.readUByte();
      nalu.firstMbInSlice = decoder.readUEG() === 0;
      nalu.sliceType = decoder.readUEG();
    }
    static parseSPS(nalu) {
      const { width, height } = H264Parser.readSPS(nalu);
      const sps = new Uint8Array(nalu);
      let codec = "avc1.";
      const codecarray = new DataView(nalu.buffer, nalu.byteOffset + 1, 4);
      for (let i = 0; i < 3; ++i) {
        let h = codecarray.getUint8(i).toString(16);
        if (h.length < 2) {
          h = `0${h}`;
        }
        codec += h;
      }
      return { sps, codec, width, height };
    }
    static skipScalingList(decoder, count) {
      let lastScale = 8;
      let nextScale = 8;
      let deltaScale;
      for (let j = 0; j < count; j++) {
        if (nextScale !== 0) {
          deltaScale = decoder.readEG();
          nextScale = (lastScale + deltaScale + 256) % 256;
        }
        lastScale = nextScale === 0 ? lastScale : nextScale;
      }
    }
    static readSPS(data) {
      const profileIdcMap = [100, 110, 122, 244, 44, 83, 86, 118, 128];
      const decoder = new ExpGolomb(data);
      let frameCropLeftOffset = 0;
      let frameCropRightOffset = 0;
      let frameCropTopOffset = 0;
      let frameCropBottomOffset = 0;
      let sarScale = 1;
      let numRefFramesInPicOrderCntCycle;
      let scalingListCount;
      decoder.readBits(1);
      decoder.readBits(2);
      decoder.readBits(5);
      const profileIdc = decoder.readUByte();
      decoder.readBits(6);
      decoder.readBits(2);
      decoder.readUByte();
      decoder.readUE();
      if (profileIdcMap.indexOf(profileIdc) > -1) {
        const chromaFormatIdc = decoder.readUE();
        if (chromaFormatIdc === 3) {
          decoder.skipBits(1);
        }
        decoder.readUE();
        decoder.readUE();
        decoder.skipBits(1);
        const seqScalingMatrixPresentFlag = decoder.readBoolean();
        if (seqScalingMatrixPresentFlag) {
          scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
          for (let i = 0; i < scalingListCount; ++i) {
            if (decoder.readBoolean()) {
              if (i < 6) {
                H264Parser.skipScalingList(decoder, 16);
              } else {
                H264Parser.skipScalingList(decoder, 64);
              }
            }
          }
        }
      }
      decoder.readUE();
      const picOrderCntType = decoder.readUE();
      if (picOrderCntType === 0) {
        decoder.readUE();
      } else if (picOrderCntType === 1) {
        decoder.skipBits(1);
        decoder.readUE();
        decoder.readUE();
        numRefFramesInPicOrderCntCycle = decoder.readUE();
        for (let i = 0; i < numRefFramesInPicOrderCntCycle; ++i) {
          decoder.readUE();
        }
      }
      decoder.readUE();
      decoder.skipBits(1);
      const picWidthInMbsMinus1 = decoder.readUE();
      const picHeightInMapUnitsMinus1 = decoder.readUE();
      const frameMbsOnlyFlag = decoder.readBits(1);
      if (frameMbsOnlyFlag === 0) {
        decoder.skipBits(1);
      }
      decoder.readBits(1);
      const frameCroppingFlag = decoder.readBoolean();
      if (frameCroppingFlag) {
        frameCropLeftOffset = decoder.readUE();
        frameCropRightOffset = decoder.readUE();
        frameCropTopOffset = decoder.readUE();
        frameCropBottomOffset = decoder.readUE();
      }
      const vuiParametersPresentFlag = decoder.readBoolean();
      if (vuiParametersPresentFlag) {
        const aspectRatioInfoPresentFlag = decoder.readBoolean();
        if (aspectRatioInfoPresentFlag) {
          let sarRatio;
          const aspectRatioIdc = decoder.readUByte();
          switch (aspectRatioIdc) {
            case 1:
              sarRatio = [1, 1];
              break;
            case 2:
              sarRatio = [12, 11];
              break;
            case 3:
              sarRatio = [10, 11];
              break;
            case 4:
              sarRatio = [16, 11];
              break;
            case 5:
              sarRatio = [40, 33];
              break;
            case 6:
              sarRatio = [24, 11];
              break;
            case 7:
              sarRatio = [20, 11];
              break;
            case 8:
              sarRatio = [32, 11];
              break;
            case 9:
              sarRatio = [80, 33];
              break;
            case 10:
              sarRatio = [18, 11];
              break;
            case 11:
              sarRatio = [15, 11];
              break;
            case 12:
              sarRatio = [64, 33];
              break;
            case 13:
              sarRatio = [160, 99];
              break;
            case 14:
              sarRatio = [4, 3];
              break;
            case 15:
              sarRatio = [3, 2];
              break;
            case 16:
              sarRatio = [2, 1];
              break;
            case 255: {
              sarRatio = [
                decoder.readUByte() << 8 | decoder.readUByte(),
                decoder.readUByte() << 8 | decoder.readUByte()
              ];
              break;
            }
          }
          if (sarRatio) {
            sarScale = sarRatio[0] / sarRatio[1];
          }
        }
      }
      return {
        width: Math.ceil(((picWidthInMbsMinus1 + 1) * 16 - frameCropLeftOffset * 2 - frameCropRightOffset * 2) * sarScale),
        height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - (frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset)
      };
    }
  }

  const CORRECTION_UTC = 2082873600;
  const decimal2HexadecimalArray = (payload) => [
    payload >> 24,
    payload >> 16 & 255,
    payload >> 8 & 255,
    payload & 255
  ];
  const getCharCode = (name) => [name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)];
  const _Mp4Generator = class {
    constructor() {
      this.types = {
        avc1: [],
        avcC: [],
        btrt: [],
        ctts: [],
        dinf: [],
        dref: [],
        esds: [],
        ftyp: [],
        hdlr: [],
        mdat: [],
        mdhd: [],
        mdia: [],
        mfhd: [],
        minf: [],
        moof: [],
        moov: [],
        mp4a: [],
        mvex: [],
        mvhd: [],
        sdtp: [],
        stbl: [],
        stco: [],
        stsc: [],
        stsd: [],
        stsz: [],
        stts: [],
        stss: [],
        tfdt: [],
        tfhd: [],
        traf: [],
        trak: [],
        trun: [],
        trex: [],
        tkhd: [],
        vmhd: [],
        smhd: []
      };
      Object.keys(this.types).forEach((type) => {
        if (Object.prototype.hasOwnProperty.call(this.types, type)) {
          this.types[type] = getCharCode(type);
        }
      });
      const dref = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        12,
        117,
        114,
        108,
        32,
        0,
        0,
        0,
        1
      ]);
      this.dinf = _Mp4Generator.box(this.types.dinf, _Mp4Generator.box(this.types.dref, dref));
    }
    static box(type, ...payload) {
      let size = 8;
      let i = payload.length;
      const len = i;
      while (i) {
        i -= 1;
        size += payload[i].byteLength;
      }
      const result = new Uint8Array(size);
      result[0] = size >> 24 & 255;
      result[1] = size >> 16 & 255;
      result[2] = size >> 8 & 255;
      result[3] = size & 255;
      result.set(type, 4);
      for (i = 0, size = 8; i < len; ++i) {
        result.set(payload[i], size);
        size += payload[i].byteLength;
      }
      return result;
    }
    ftyp() {
      const majorBrand = new Uint8Array([105, 115, 111, 109]);
      const avc1Brand = new Uint8Array([97, 118, 99, 49]);
      const minorVersion = new Uint8Array([0, 0, 0, 1]);
      return _Mp4Generator.box(this.types.ftyp, majorBrand, minorVersion, majorBrand, avc1Brand, new Uint8Array(getCharCode("mp41")));
    }
    moov(tracks, duration, timescale) {
      let i = tracks.length;
      const boxes = [];
      while (i) {
        i -= 1;
        boxes[i] = this.trak(tracks[i]);
      }
      return _Mp4Generator.box.apply(null, [this.types.moov, this.mvhd(timescale, duration)].concat(boxes).concat(this.mvex(tracks)));
    }
    moof(sequence_number, baseMediaDecodeTime, track) {
      return _Mp4Generator.box(this.types.moof, this.mfhd(sequence_number), this.traf(baseMediaDecodeTime, track));
    }
    mdat(data) {
      return _Mp4Generator.box(this.types.mdat, data);
    }
    hdlr(type) {
      return _Mp4Generator.box(this.types.hdlr, _Mp4Generator.hdlrTypes[type]);
    }
    mdhd(timescale, duration) {
      return _Mp4Generator.box(this.types.mdhd, new Uint8Array([
        0,
        0,
        0,
        0,
        ...decimal2HexadecimalArray(Math.floor(Date.now() / 1e3 + CORRECTION_UTC)),
        ...decimal2HexadecimalArray(Math.floor(Date.now() / 1e3 + CORRECTION_UTC)),
        ...decimal2HexadecimalArray(timescale),
        ...decimal2HexadecimalArray(duration),
        85,
        196,
        0,
        0
      ]));
    }
    mdia(track) {
      return _Mp4Generator.box(this.types.mdia, this.mdhd(track.timescale, track.duration), this.hdlr(track.type), this.minf(track));
    }
    mfhd(sequenceNumber) {
      return _Mp4Generator.box(this.types.mfhd, new Uint8Array([
        0,
        0,
        0,
        0,
        sequenceNumber >> 24,
        sequenceNumber >> 16 & 255,
        sequenceNumber >> 8 & 255,
        sequenceNumber & 255
      ]));
    }
    minf(track) {
      if (track.type === "audio") {
        return _Mp4Generator.box(this.types.minf, _Mp4Generator.box(this.types.smhd, _Mp4Generator.smhd), this.dinf, this.stbl(track));
      }
      return _Mp4Generator.box(this.types.minf, _Mp4Generator.box(this.types.vmhd, _Mp4Generator.vmhd), this.dinf, this.stbl(track));
    }
    mvex(tracks) {
      let i = tracks.length;
      const boxes = [];
      while (i) {
        i -= 1;
        boxes[i] = this.trex(tracks[i]);
      }
      return _Mp4Generator.box.apply(null, [this.types.mvex].concat(boxes));
    }
    mvhd(timescale, duration) {
      const bytes = new Uint8Array([
        0,
        0,
        0,
        0,
        ...decimal2HexadecimalArray(Math.floor(Date.now() / 1e3 + CORRECTION_UTC)),
        ...decimal2HexadecimalArray(Math.floor(Date.now() / 1e3 + CORRECTION_UTC)),
        ...decimal2HexadecimalArray(timescale),
        ...decimal2HexadecimalArray(duration),
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2
      ]);
      return _Mp4Generator.box(this.types.mvhd, bytes);
    }
    sdtp(track) {
      const samples = track.samples || [];
      const bytes = new Uint8Array(4 + samples.length);
      let flags;
      let i;
      for (i = 0; i < samples.length; i++) {
        flags = samples[i].flags;
        bytes[i + 4] = flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
      }
      return _Mp4Generator.box(this.types.sdtp, bytes);
    }
    stbl(track) {
      return _Mp4Generator.box(this.types.stbl, this.stsd(track), this.stts(track), this.ctts(track), this.stss(track), _Mp4Generator.box(this.types.stsc, _Mp4Generator.stsc), _Mp4Generator.box(this.types.stsz, _Mp4Generator.stsz), _Mp4Generator.box(this.types.stco, _Mp4Generator.stco));
    }
    avc1(track) {
      let sps = [];
      let pps = [];
      let i;
      let data;
      let len;
      for (i = 0; i < track.sps.length; i++) {
        data = track.sps[i];
        len = data.byteLength;
        sps.push(len >>> 8 & 255);
        sps.push(len & 255);
        sps = sps.concat(Array.prototype.slice.call(data));
      }
      for (i = 0; i < track.pps.length; i++) {
        data = track.pps[i];
        len = data.byteLength;
        pps.push(len >>> 8 & 255);
        pps.push(len & 255);
        pps = pps.concat(Array.prototype.slice.call(data));
      }
      const avcc = _Mp4Generator.box(this.types.avcC, new Uint8Array([
        1,
        sps[3],
        sps[4],
        sps[5],
        252 | 3,
        224 | track.sps.length
      ].concat(sps).concat([
        track.pps.length
      ]).concat(pps)));
      const { width } = track;
      const { height } = track;
      return _Mp4Generator.box(this.types.avc1, new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        width >> 8 & 255,
        width & 255,
        height >> 8 & 255,
        height & 255,
        0,
        72,
        0,
        0,
        0,
        72,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        18,
        98,
        105,
        110,
        101,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        255,
        255
      ]), avcc);
    }
    esds(track) {
      const configlen = track.config.byteLength;
      const data = new Uint8Array(26 + configlen + 3);
      data.set([
        0,
        0,
        0,
        0,
        3,
        23 + configlen,
        0,
        1,
        0,
        4,
        15 + configlen,
        64,
        21,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        configlen
      ]);
      data.set(track.config, 26);
      data.set([6, 1, 2], 26 + configlen);
      return data;
    }
    mp4a(track) {
      const { audiosamplerate } = track;
      return _Mp4Generator.box(this.types.mp4a, new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        track.channelCount,
        0,
        16,
        0,
        0,
        0,
        0,
        audiosamplerate >> 8 & 255,
        audiosamplerate & 255,
        0,
        0
      ]), _Mp4Generator.box(this.types.esds, this.esds(track)));
    }
    stsd(track) {
      if (track.type === "audio") {
        return _Mp4Generator.box(this.types.stsd, _Mp4Generator.stsd, this.mp4a(track));
      }
      return _Mp4Generator.box(this.types.stsd, _Mp4Generator.stsd, this.avc1(track));
    }
    tkhd(track) {
      return _Mp4Generator.box(this.types.tkhd, new Uint8Array([
        0,
        0,
        0,
        1,
        ...decimal2HexadecimalArray(Math.floor(Date.now() / 1e3 + CORRECTION_UTC)),
        ...decimal2HexadecimalArray(Math.floor(Date.now() / 1e3 + CORRECTION_UTC)),
        ...decimal2HexadecimalArray(track.id),
        0,
        0,
        0,
        0,
        ...decimal2HexadecimalArray(track.duration),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        track.volume >> 0 & 255,
        track.volume % 1 * 10 >> 0 & 255,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        track.width >> 8 & 255,
        track.width & 255,
        0,
        0,
        track.height >> 8 & 255,
        track.height & 255,
        0,
        0
      ]));
    }
    traf(baseMediaDecodeTime, track) {
      const sampleDependencyTable = this.sdtp(track);
      const { id } = track;
      return _Mp4Generator.box(this.types.traf, _Mp4Generator.box(this.types.tfhd, new Uint8Array([
        0,
        0,
        0,
        0,
        id >> 24,
        id >> 16 & 255,
        id >> 8 & 255,
        id & 255
      ])), _Mp4Generator.box(this.types.tfdt, new Uint8Array([
        0,
        0,
        0,
        0,
        baseMediaDecodeTime >> 24,
        baseMediaDecodeTime >> 16 & 255,
        baseMediaDecodeTime >> 8 & 255,
        baseMediaDecodeTime & 255
      ])), this.trun(track, sampleDependencyTable.length + 16 + 16 + 8 + 16 + 8 + 8), sampleDependencyTable);
    }
    trak(track) {
      track.duration = track.duration || 4294967295;
      return _Mp4Generator.box(this.types.trak, this.tkhd(track), this.mdia(track));
    }
    trex(track) {
      const { id } = track;
      return _Mp4Generator.box(this.types.trex, new Uint8Array([
        0,
        0,
        0,
        0,
        id >> 24,
        id >> 16 & 255,
        id >> 8 & 255,
        id & 255,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1
      ]));
    }
    trun(track, offset) {
      const samples = track.samples || [];
      const len = samples.length;
      const arraylen = 12 + 16 * len;
      const array = new Uint8Array(arraylen);
      let i;
      let sample;
      let duration;
      let size;
      let flags;
      let cts;
      offset += 8 + arraylen;
      array.set([
        0,
        0,
        15,
        1,
        len >>> 24 & 255,
        len >>> 16 & 255,
        len >>> 8 & 255,
        len & 255,
        offset >>> 24 & 255,
        offset >>> 16 & 255,
        offset >>> 8 & 255,
        offset & 255
      ], 0);
      for (i = 0; i < len; i++) {
        sample = samples[i];
        duration = sample.duration;
        size = sample.size;
        flags = sample.flags;
        cts = sample.cts;
        array.set([
          duration >>> 24 & 255,
          duration >>> 16 & 255,
          duration >>> 8 & 255,
          duration & 255,
          size >>> 24 & 255,
          size >>> 16 & 255,
          size >>> 8 & 255,
          size & 255,
          flags.isLeading << 2 | flags.dependsOn,
          flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.paddingValue << 1 | flags.isNonSync,
          flags.degradPrio & 240 << 8,
          flags.degradPrio & 15,
          cts >>> 24 & 255,
          cts >>> 16 & 255,
          cts >>> 8 & 255,
          cts & 255
        ], 12 + 16 * i);
      }
      return _Mp4Generator.box(this.types.trun, array);
    }
    stts(track) {
      const sampleCount = track.samples.length;
      const sampleDelta = track.duration / sampleCount;
      const buffer = [
        0,
        0,
        0,
        0,
        ...decimal2HexadecimalArray(1),
        ...decimal2HexadecimalArray(sampleCount),
        ...decimal2HexadecimalArray(sampleDelta)
      ];
      return _Mp4Generator.box(this.types.stts, new Uint8Array(buffer));
    }
    ctts(track) {
      const sampleCount = track.tps.length;
      const sampleDelta = track.duration / sampleCount;
      const buffer = [
        0,
        0,
        0,
        0,
        ...decimal2HexadecimalArray(sampleCount)
      ];
      for (let i = 0; i < sampleCount; i++) {
        buffer.push(...decimal2HexadecimalArray(1));
        const dts = i * sampleDelta;
        const pts = track.tps[i] * sampleDelta;
        buffer.push(...decimal2HexadecimalArray(pts - dts));
      }
      return _Mp4Generator.box(this.types.ctts, new Uint8Array(buffer));
    }
    stss(track) {
      const iFrames = track.samples.filter((sample) => sample.flags.isKeyFrame).map((sample) => sample.index + 1);
      const buffer = [
        0,
        0,
        0,
        0,
        ...decimal2HexadecimalArray(iFrames.length)
      ];
      for (const iFrame of iFrames) {
        buffer.push(...decimal2HexadecimalArray(iFrame));
      }
      return _Mp4Generator.box(this.types.stss, new Uint8Array(buffer));
    }
  };
  let Mp4Generator = _Mp4Generator;
  Mp4Generator.hdlrTypes = {
    video: new Uint8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      118,
      105,
      100,
      101,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
    ]),
    audio: new Uint8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      115,
      111,
      117,
      110,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
    ])
  };
  Mp4Generator.fullbox = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  Mp4Generator.stsc = _Mp4Generator.fullbox;
  Mp4Generator.stco = _Mp4Generator.fullbox;
  Mp4Generator.stsz = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  Mp4Generator.vmhd = new Uint8Array([
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  Mp4Generator.smhd = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  Mp4Generator.stsd = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ]);

  const NALU_BASE_TPYES = [NALU.SPS, NALU.PPS, NALU.IDR, NALU.NDR];
  const SEQUENCE_NUMBER = 1;
  const BASE_MEDIA_DECODE_TIME = 0;
  let trackId = 1;
  class H264Remuxer {
    constructor() {
      this.mp4track = {
        id: H264Remuxer.getTrackID(),
        type: "video",
        len: 0,
        fragmented: true,
        sps: void 0,
        pps: void 0,
        width: 0,
        height: 0,
        timescale: 0,
        duration: 0,
        samples: [],
        tps: [],
        codec: "",
        fps: 0
      };
      this.samples = [];
    }
    static getTrackID() {
      const id = trackId;
      trackId += 1;
      return id;
    }
    static remux(frames, videoData) {
      if (frames.length < 1)
        Log.error(ErrorCode.NotFrames);
      const remuxer = new H264Remuxer();
      remuxer.mp4track.timescale = frames.length;
      remuxer.mp4track.duration = Math.floor(frames.length / videoData.matrix.frameRate * frames.length);
      remuxer.mp4track.fps = videoData.matrix.frameRate;
      remuxer.mp4track.tps = videoData.getTPS();
      let readyToDecode = false;
      for (const frame of frames) {
        const units = frame.units.filter((unit) => NALU_BASE_TPYES.includes(unit.nalUnitType));
        if (units.length < 1)
          continue;
        const size = units.reduce((pre, cur) => pre + cur.getSize(), 0);
        if (!remuxer.mp4track.sps) {
          units.forEach((unit) => {
            if (unit.nalUnitType === NALU.SPS) {
              const { sps, codec, width, height } = H264Parser.parseSPS(unit.payload);
              remuxer.mp4track.width = width;
              remuxer.mp4track.height = height;
              remuxer.mp4track.sps = [sps];
              remuxer.mp4track.codec = codec;
            }
          });
          if (remuxer.mp4track.sps && remuxer.mp4track.pps)
            readyToDecode = true;
        }
        if (!remuxer.mp4track.pps) {
          units.forEach((unit) => {
            if (unit.nalUnitType === NALU.PPS) {
              remuxer.mp4track.pps = [new Uint8Array(unit.payload)];
            }
          });
          if (remuxer.mp4track.sps && remuxer.mp4track.pps)
            readyToDecode = true;
        }
        if (readyToDecode) {
          remuxer.mp4track.len += size;
          remuxer.samples.push({
            units,
            size,
            keyFrame: frame.isKeyFrame
          });
        }
      }
      return remuxer;
    }
    convertMp4() {
      const payload = this.getPayload();
      if (!payload)
        return;
      const mp4Generator = new Mp4Generator();
      const ftyp = mp4Generator.ftyp();
      const moov = mp4Generator.moov([this.mp4track], this.mp4track.duration, this.mp4track.timescale);
      const moof = mp4Generator.moof(SEQUENCE_NUMBER, BASE_MEDIA_DECODE_TIME, this.mp4track);
      const mdat = mp4Generator.mdat(payload);
      return concatUint8Arrays([ftyp, moov, moof, mdat]);
    }
    getPayload() {
      const payload = new Uint8Array(this.mp4track.len);
      const sampleDelta = Math.floor(this.mp4track.duration / this.samples.length);
      let offset = 0;
      let count = 0;
      for (const sample of this.samples) {
        const { units } = sample;
        const mp4Sample = {
          index: count,
          size: sample.size,
          duration: sampleDelta,
          cts: this.mp4track.tps[count] * sampleDelta - count * sampleDelta,
          flags: {
            isLeading: 0,
            isDependedOn: 0,
            hasRedundancy: 0,
            degradPrio: 0,
            isNonSync: sample.keyFrame ? 0 : 1,
            dependsOn: sample.keyFrame ? 2 : 1,
            isKeyFrame: sample.keyFrame
          }
        };
        for (const unit of units) {
          payload.set(unit.getData(), offset);
          offset += unit.getSize();
        }
        this.mp4track.samples.push(mp4Sample);
        count += 1;
      }
      if (!this.mp4track.samples.length)
        return;
      return payload;
    }
  }

  class PAGGenerator {
    static generatorMP4(videoData) {
      const nalus = H264Parser.getNaluFromSequence(videoData.sequence);
      const frames = H264Parser.getH264Frames(nalus);
      const remuxer = H264Remuxer.remux(frames, videoData);
      return {
        matrix: videoData.matrix,
        sequenceInfo: {
          width: videoData.sequence.width,
          height: videoData.sequence.height,
          frameCount: videoData.sequence.frameCount,
          alphaStartX: videoData.sequence.alphaStartX,
          alphaStartY: videoData.sequence.alphaStartY
        },
        mp4Info: {
          width: remuxer.mp4track.width,
          height: remuxer.mp4track.height
        },
        data: remuxer.convertMp4()
      };
    }
  }

  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  class PAGFile {
    constructor(compositions, images) {
      this.tagLevel = 1;
      this.compositions = [];
      this.numLayers = 0;
      this.images = [];
      this.scaledTimeRange = { start: 0, end: 0 };
      this.mainComposition = compositions[compositions.length - 1];
      this.scaledTimeRange.start = 0;
      this.scaledTimeRange.end = this.mainComposition.duration;
      this.compositions = compositions;
      this.images = images;
      this.duration = this.mainComposition.duration;
      this.implDuration = this.mainComposition.duration * 1e3 / this.mainComposition.frameRate;
      for (const composition of compositions) {
        if (composition.type() !== CompositionType.Vector) {
          this.numLayers += 1;
          continue;
        }
        for (const layer of composition.layers) {
          if (layer.type() === LayerType.PreCompose) {
            continue;
          }
          this.numLayers += 1;
        }
      }
    }
    static loadFile(url) {
      return __async(this, null, function* () {
        let file;
        if (typeof url === "string" && url !== "") {
          file = yield this.loadFileByXHR(url);
        } else if (url instanceof File && isPAGFile(url)) {
          file = url;
        } else {
          Log.error(ErrorCode.InputError);
        }
        const pagFile = yield this.readFileAsPAGFile(file);
        const videoData = PAGFile.pagFile2videoData(pagFile);
        return PAGGenerator.generatorMP4(videoData);
      });
    }
    static loadFileByXHR(url) {
      return new Promise((resolve) => {
        request({
          url,
          method: "GET",
          responseType: "blob",
          success: (response) => {
            if (!response) {
              Log.error(ErrorCode.LoadFileNotResponse);
            }
            const file = new window.File([response], url.replace(/(.*\/)*([^.]+)/i, "$2"));
            resolve(file);
          },
          error: () => {
            Log.error(ErrorCode.LoadFileByXhrError);
          }
        });
      });
    }
    static readFileAsPAGFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const dataBuffer = reader.result;
          const byteArray = new ByteArray(dataBuffer, true);
          const { compositions, images, tagLevel } = PAGCodec.decode(byteArray);
          const pagFile = new PAGFile(compositions, images);
          pagFile.tagLevel = tagLevel;
          resolve(pagFile);
        };
        reader.onerror = () => {
          Log.error(ErrorCode.ReadPagFileError);
        };
        reader.readAsArrayBuffer(file);
      });
    }
    static pagFile2videoData(file) {
      return VideoData.create(file);
    }
  }

  var RenderingMode;
  (function(RenderingMode2) {
    RenderingMode2["Canvas"] = "Canvas";
    RenderingMode2["WebGL"] = "WebGL";
  })(RenderingMode || (RenderingMode = {}));
  var EventName;
  (function(EventName2) {
    EventName2["beforeFlush"] = "beforeFlush";
    EventName2["afterFlush"] = "afterFlush";
    EventName2["onAnimationStart"] = "onAnimationStart";
    EventName2["onAnimationEnd"] = "onAnimationEnd";
    EventName2["onAnimationCancel"] = "onAnimationCancel";
    EventName2["onAnimationRepeat"] = "onAnimationRepeat";
  })(EventName || (EventName = {}));
  var ScaleMode;
  (function(ScaleMode2) {
    ScaleMode2["None"] = "None";
    ScaleMode2["Stretch"] = "Stretch";
    ScaleMode2["LetterBox"] = "LetterBox";
    ScaleMode2["Zoom"] = "Zoom";
  })(ScaleMode || (ScaleMode = {}));

  const detectWebGLContext = () => {
    const canvas = document.createElement("canvas");
    const context3D = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!context3D;
  };
  const createProgram = (context3D, vertexShaderSource, fragmentShaderSource) => {
    const program = context3D.createProgram();
    const vshader = createShader(context3D, vertexShaderSource, context3D.VERTEX_SHADER);
    const fshader = createShader(context3D, fragmentShaderSource, context3D.FRAGMENT_SHADER);
    context3D.attachShader(program, vshader);
    context3D.attachShader(program, fshader);
    context3D.linkProgram(program);
    const programMessage = context3D.getProgramInfoLog(program);
    if (programMessage)
      Log.log(programMessage);
    const vshaderMessage = context3D.getShaderInfoLog(vshader);
    if (vshaderMessage)
      Log.log(vshaderMessage);
    const fshaderMessage = context3D.getShaderInfoLog(fshader);
    if (fshaderMessage)
      Log.log(fshaderMessage);
    return program;
  };
  const createShader = (context3D, source, type) => {
    const shader = context3D.createShader(type);
    context3D.shaderSource(shader, source);
    context3D.compileShader(shader);
    return shader;
  };
  const getShaderSourceFromString = (str) => str.replace(/^\s+|\s+$/g, "");
  const getVideoAttributes = (mp4Data) => {
    const attribute = {
      width: 0,
      height: 0,
      videoWidth: 0,
      videoHeight: 0,
      hasAlpha: false,
      alphaStartX: 0,
      alphaStartY: 0,
      sequenceWidth: 0,
      sequenceHeight: 0,
      sequenceScale: { width: 0, height: 0 },
      position: { x: 0, y: 0 },
      mp4Width: 0,
      mp4Height: 0
    };
    attribute.width = mp4Data.matrix.width;
    attribute.height = mp4Data.matrix.height;
    attribute.videoWidth = mp4Data.matrix.videoWidth;
    attribute.videoHeight = mp4Data.matrix.videoHeight;
    attribute.hasAlpha = mp4Data.matrix.hasAlpha;
    if (attribute.hasAlpha) {
      attribute.alphaStartX = mp4Data.sequenceInfo.alphaStartX;
      attribute.alphaStartY = mp4Data.sequenceInfo.alphaStartY;
    }
    attribute.sequenceWidth = mp4Data.sequenceInfo.width;
    attribute.sequenceHeight = mp4Data.sequenceInfo.height;
    attribute.sequenceScale = {
      width: attribute.videoWidth / attribute.sequenceWidth,
      height: attribute.videoHeight / attribute.sequenceHeight
    };
    attribute.position = {
      x: mp4Data.matrix.transform.position.value.x - mp4Data.matrix.transform.anchorPoint.value.x,
      y: mp4Data.matrix.transform.position.value.y - mp4Data.matrix.transform.anchorPoint.value.y
    };
    return attribute;
  };

  const VERTEX_2D_SHADER = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      
      uniform vec2 u_resolution;
      uniform vec2 u_scale;
      
      varying vec2 v_texCoord;
    
      
      void main() {
         vec2 scaledPosition = a_position * u_scale;

         // convert the rectangle from pixels to 0.0 to 1.0
         vec2 zeroToOne = scaledPosition / u_resolution;
      
         // convert from 0->1 to 0->2
         vec2 zeroToTwo = zeroToOne * 2.0;
      
         // convert from 0->2 to -1->+1 (clipspace)
         vec2 clipSpace = zeroToTwo - 1.0;
      
         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
      
         // pass the texCoord to the fragment shader
         // The GPU will interpolate this value between points.
         v_texCoord = a_texCoord;
      }
        `;
  const FRAGMENT_2D_SHADER = `
      precision mediump float;

      // our texture
      uniform sampler2D u_image;
      
      // the texCoords passed in from the vertex shader.
      varying vec2 v_texCoord;
      
      void main() {
         gl_FragColor = texture2D(u_image, v_texCoord);
      }
         `;
  const FRAGMENT_2D_SHADER_TRANSPARENT = `
      precision mediump float;
      // our texture
      uniform sampler2D u_image;
      
      // the texCoords passed in from the vertex shader.
      varying vec2 v_texCoord;
      uniform vec2 v_alphaStart;
      
      void main() {
         vec4 color = texture2D(u_image, v_texCoord);
         vec4 alpha = texture2D(u_image, vec2(v_texCoord.x + v_alphaStart.x, v_texCoord.y + v_alphaStart.y));
         gl_FragColor = vec4(color.rgb * alpha.r, alpha.r);
      }     
         `;

  class EventManager {
    constructor() {
      this.listenersMap = {};
    }
    on(evnetName, linstener) {
      if (this.listenersMap[evnetName] === void 0) {
        this.listenersMap[evnetName] = [];
      }
      this.listenersMap[evnetName].push(linstener);
      return;
    }
    off(evnetName, linstener) {
      const listenerList = this.listenersMap[evnetName];
      if (listenerList === void 0)
        return;
      if (linstener === void 0) {
        delete this.listenersMap[evnetName];
        return;
      }
      const index = listenerList.findIndex((fn) => fn === linstener);
      listenerList.splice(index, 1);
      return;
    }
    emit(evnetName, ...payload) {
      const listenerList = this.listenersMap[evnetName];
      if (listenerList === void 0 || listenerList.length < 1)
        return false;
      for (const listener of listenerList) {
        listener(...payload);
      }
      return true;
    }
  }

  const _PAGView = class {
    constructor(mp4Data, canvas, options) {
      this.positionLocation = 0;
      this.texcoordLocation = 0;
      this.renderTimer = null;
      this.playing = false;
      this.destroyed = false;
      this.repeatCount = 0;
      this.viewportSize = { x: 0, y: 0, width: 0, height: 0, scaleX: 1, scaleY: 1 };
      this.canvas = canvas;
      this.mp4Data = mp4Data;
      this.renderingMode = options.renderingMode || RenderingMode.WebGL;
      if (options.repeatCount !== void 0) {
        this.repeatCount = options.repeatCount < 0 ? -1 : options.repeatCount - 1;
      }
    }
    static create(mp4Data, canvas, options) {
      const pagView = new _PAGView(mp4Data, canvas, options);
      pagView.supportWebGL = detectWebGLContext();
      pagView.videoAttributes = getVideoAttributes(pagView.mp4Data);
      pagView.eventManager = new EventManager();
      pagView.canvas = canvas;
      pagView.videoEl = document.createElement("video");
      pagView.videoEl.style.display = "none";
      pagView.videoEl.muted = true;
      pagView.videoEl.playsInline = true;
      const blob = new Blob([mp4Data.data], { type: "video/mp4" });
      pagView.videoEl.src = URL.createObjectURL(blob);
      if (!!mp4Data.mp4Info.width) {
        pagView.videoAttributes.mp4Width = mp4Data.mp4Info.width;
      }
      if (!!mp4Data.mp4Info.height) {
        pagView.videoAttributes.mp4Height = mp4Data.mp4Info.height;
      }
      pagView.videoEl.addEventListener("play", () => {
        pagView.flushLoop(pagView, pagView.videoEl);
      });
      pagView.videoEl.addEventListener("pause", () => {
        pagView.clearRenderTimer();
      });
      pagView.videoEl.addEventListener("ended", () => {
        if (pagView.repeatCount < 0) {
          pagView.videoEl.play();
          pagView.eventManager.emit("onAnimationRepeat");
          return;
        }
        if (pagView.repeatCount === 0) {
          pagView.videoEl.currentTime = 0;
          pagView.clearRenderTimer();
          pagView.clearRender();
          pagView.playing = false;
          pagView.eventManager.emit("onAnimationEnd");
          return;
        }
        pagView.repeatCount -= 1;
        pagView.videoEl.play();
        pagView.eventManager.emit("onAnimationRepeat");
      });
      pagView.setRenderingMode(pagView.renderingMode);
      pagView.setScaleMode(options.scaleMode);
      if (pagView.renderingMode === RenderingMode.WebGL)
        pagView.loadWithWebGL();
      if (pagView.renderingMode === RenderingMode.Canvas)
        pagView.loadWithCanvas();
      return pagView;
    }
    play() {
      if (this.destroyed)
        Log.error(ErrorCode.PagDestroyed);
      if (!!this.playing)
        return;
      this.videoEl.play();
      this.playing = true;
      this.eventManager.emit("onAnimationStart");
    }
    pause() {
      if (this.destroyed)
        Log.error(ErrorCode.PagDestroyed);
      if (!this.playing)
        return;
      this.videoEl.pause();
      this.playing = false;
      this.eventManager.emit("onAnimationCancel");
    }
    stop() {
      if (this.destroyed)
        Log.error(ErrorCode.PagDestroyed);
      this.videoEl.pause();
      this.videoEl.currentTime = 0;
      this.clearRender();
      this.playing = false;
      this.eventManager.emit("onAnimationCancel");
    }
    destroy() {
      if (this.destroyed)
        return;
      this.stop();
      this.canvas = null;
      this.videoEl = null;
      this.destroyed = true;
    }
    isPlaying() {
      return this.playing;
    }
    isDestroyed() {
      return this.destroyed;
    }
    duration() {
      return this.videoEl.duration;
    }
    setRepeatCount(repeatCount = 1) {
      this.repeatCount = repeatCount < 0 ? -1 : repeatCount - 1;
    }
    getProgress() {
      return Math.round(this.videoEl.currentTime / this.videoEl.duration * 100) / 100;
    }
    setProgress(progress) {
      if (this.destroyed)
        Log.error(ErrorCode.PagDestroyed);
      if (progress < 0 || progress > 1)
        Log.error(ErrorCode.InvalidPercentage);
      if (this.playing)
        this.pause();
      this.videoEl.currentTime = progress * this.videoEl.duration;
      return new Promise((resolve) => {
        const timeupdateCallback = () => {
          this.flush(this.videoEl);
          this.videoEl.removeEventListener("timeupdate", timeupdateCallback);
          resolve(true);
        };
        this.videoEl.addEventListener("timeupdate", timeupdateCallback);
      });
    }
    flush(videoEl) {
      this.eventManager.emit(EventName.beforeFlush);
      if (this.renderingMode === RenderingMode.WebGL) {
        this.renderWithWebGL(videoEl);
      } else {
        this.renderWithCanvas(videoEl);
      }
      this.eventManager.emit(EventName.afterFlush);
    }
    addListener(eventName, listener) {
      return this.eventManager.on(eventName, listener);
    }
    removeListener(eventName, listener) {
      return this.eventManager.off(eventName, listener);
    }
    scaleMode() {
      return this.viewScaleMode;
    }
    setScaleMode(scaleMode = ScaleMode.LetterBox) {
      this.viewScaleMode = scaleMode;
      switch (scaleMode) {
        case ScaleMode.None:
          this.viewportSize = {
            x: this.videoAttributes.position.x,
            y: this.renderingMode === RenderingMode.WebGL ? this.gl.canvas.height - this.videoAttributes.position.y - this.videoAttributes.videoHeight : this.videoAttributes.position.y,
            width: this.videoAttributes.videoWidth,
            height: this.videoAttributes.videoHeight,
            scaleX: 1,
            scaleY: 1
          };
          break;
        case ScaleMode.Stretch:
          {
            const scaleX = this.canvas.width / this.videoAttributes.width;
            const scaleY = this.canvas.height / this.videoAttributes.height;
            this.viewportSize = {
              x: this.videoAttributes.position.x * scaleX,
              y: this.renderingMode === RenderingMode.WebGL ? this.canvas.height - this.videoAttributes.position.y * scaleY - this.videoAttributes.videoHeight * scaleY : this.videoAttributes.position.y * scaleY,
              width: this.videoAttributes.videoWidth * scaleX,
              height: this.videoAttributes.videoHeight * scaleY,
              scaleX,
              scaleY
            };
          }
          break;
        case ScaleMode.LetterBox:
          {
            const scaleX = this.canvas.width / this.videoAttributes.width;
            const scaleY = this.canvas.height / this.videoAttributes.height;
            const scale = Math.min(scaleX, scaleY);
            this.viewportSize = {
              x: (this.canvas.width - this.videoAttributes.width * scale) / 2 + this.videoAttributes.position.x * scale,
              y: this.renderingMode === RenderingMode.WebGL ? this.canvas.height - (this.canvas.height - this.videoAttributes.height * scale) / 2 - this.videoAttributes.position.y * scale - this.videoAttributes.videoHeight * scale : (this.canvas.height - this.videoAttributes.height * scale) / 2 + this.videoAttributes.position.y * scale,
              width: this.videoAttributes.videoWidth * scale,
              height: this.videoAttributes.videoHeight * scale,
              scaleX: scale,
              scaleY: scale
            };
          }
          break;
        case ScaleMode.Zoom:
          {
            const scaleX = this.canvas.width / this.videoAttributes.width;
            const scaleY = this.canvas.height / this.videoAttributes.height;
            const scale = Math.max(scaleX, scaleY);
            this.viewportSize = {
              x: (this.canvas.width - this.videoAttributes.width * scale) / 2 + this.videoAttributes.position.x * scale,
              y: this.renderingMode === RenderingMode.WebGL ? this.canvas.height - (this.canvas.height - this.videoAttributes.height * scale) / 2 - this.videoAttributes.position.y * scale - this.videoAttributes.videoHeight * scale : (this.canvas.height - this.videoAttributes.height * scale) / 2 + this.videoAttributes.position.y * scale,
              width: this.videoAttributes.videoWidth * scale,
              height: this.videoAttributes.videoHeight * scale,
              scaleX: scale,
              scaleY: scale
            };
          }
          break;
      }
    }
    clearRender() {
      if (this.destroyed)
        Log.error(ErrorCode.PagDestroyed);
      if (this.renderingMode === RenderingMode.WebGL) {
        this.clearRenderWithWebGL();
      } else {
        this.clearRenderWithCanvas();
      }
    }
    setRenderingMode(renderingMode) {
      if (renderingMode === RenderingMode.WebGL) {
        if (this.supportWebGL === false) {
          this.renderingMode = RenderingMode.Canvas;
          this.setRenderingMode(RenderingMode.Canvas);
          return;
        }
        if (!this.gl) {
          this.gl = this.canvas.getContext("webgl", {});
        }
        if (!this.gl) {
          this.renderingMode = RenderingMode.Canvas;
          this.setRenderingMode(RenderingMode.Canvas);
        } else {
          if (!!this.videoAttributes.hasAlpha) {
            this.program = createProgram(this.gl, getShaderSourceFromString(VERTEX_2D_SHADER), getShaderSourceFromString(FRAGMENT_2D_SHADER_TRANSPARENT));
          } else {
            this.program = createProgram(this.gl, getShaderSourceFromString(VERTEX_2D_SHADER), getShaderSourceFromString(FRAGMENT_2D_SHADER));
          }
        }
      } else {
        this.context2D = this.canvas.getContext("2d");
      }
    }
    loadWithWebGL() {
      this.positionLocation = this.gl.getAttribLocation(this.program, "a_position");
      if (this.positionLocation === -1)
        throw new Error("unable to get attribute location for a_position");
      this.scaleLocation = this.gl.getUniformLocation(this.program, "u_scale");
      if (this.scaleLocation === -1)
        throw new Error("unable to get attribute location for u_scale");
      this.texcoordLocation = this.gl.getAttribLocation(this.program, "a_texCoord");
      if (this.texcoordLocation === -1)
        throw new Error("unable to get attribute location for a_texCoord");
      this.alphaStartLocation = this.gl.getUniformLocation(this.program, "v_alphaStart");
      if (this.alphaStartLocation === -1)
        throw new Error("unable to get attribute location for v_alphaStart");
      this.positionBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
      this.setRectangle(this.gl, 0, 0, this.videoAttributes.mp4Width, this.videoAttributes.mp4Height);
      this.texcoordBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer);
      const texture = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
        0 + 0.5 / this.videoAttributes.mp4Width,
        0 + 0.5 / this.videoAttributes.mp4Height,
        1 - 0.5 / this.videoAttributes.mp4Width,
        0 + 0.5 / this.videoAttributes.mp4Height,
        0 + 0.5 / this.videoAttributes.mp4Width,
        1 - 0.5 / this.videoAttributes.mp4Height,
        0 + 0.5 / this.videoAttributes.mp4Width,
        1 - 0.5 / this.videoAttributes.mp4Height,
        1 - 0.5 / this.videoAttributes.mp4Width,
        0 + 0.5 / this.videoAttributes.mp4Height,
        1 - 0.5 / this.videoAttributes.mp4Width,
        1 - 0.5 / this.videoAttributes.mp4Height
      ]), this.gl.STATIC_DRAW);
    }
    loadWithCanvas() {
      this.renderCanvas2D = document.createElement("canvas");
      this.renderCanvas2D.width = this.videoAttributes.mp4Width * this.videoAttributes.sequenceScale.width * this.viewportSize.scaleX;
      this.renderCanvas2D.height = this.videoAttributes.mp4Height * this.videoAttributes.sequenceScale.height * this.viewportSize.scaleY;
      this.renderCanvas2DContext = this.renderCanvas2D.getContext("2d");
    }
    setRectangle(gl, x, y, width, height) {
      const x1 = x;
      const x2 = x + width;
      const y1 = y;
      const y2 = y + height;
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);
    }
    flushLoop(pagView, videoEl) {
      pagView.flush(videoEl);
      this.renderTimer = window.requestAnimationFrame(() => {
        this.flushLoop(pagView, videoEl);
      });
    }
    renderWithWebGL(videoEl) {
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, videoEl);
      const resolutionLocation = this.gl.getUniformLocation(this.program, "u_resolution");
      this.gl.viewport(this.viewportSize.x, this.viewportSize.y, this.viewportSize.width, this.viewportSize.height);
      this.gl.clearColor(0, 0, 0, 0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      this.gl.useProgram(this.program);
      this.gl.enableVertexAttribArray(this.positionLocation);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
      const size = 2;
      const type = this.gl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      this.gl.vertexAttribPointer(this.positionLocation, size, type, normalize, stride, offset);
      this.gl.enableVertexAttribArray(this.texcoordLocation);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer);
      this.gl.vertexAttribPointer(this.texcoordLocation, size, type, normalize, stride, offset);
      this.gl.uniform2f(resolutionLocation, this.videoAttributes.videoWidth, this.videoAttributes.videoHeight);
      if (!!this.videoAttributes.hasAlpha) {
        this.gl.uniform2f(this.alphaStartLocation, this.videoAttributes.alphaStartX / this.videoAttributes.mp4Width, this.videoAttributes.alphaStartY / this.videoAttributes.mp4Height);
      }
      this.gl.uniform2f(this.scaleLocation, this.videoAttributes.sequenceScale.width, this.videoAttributes.sequenceScale.height);
      const primitiveType = this.gl.TRIANGLES;
      const count = 6;
      this.gl.drawArrays(primitiveType, offset, count);
    }
    renderWithCanvas(videoEl) {
      if (this.videoAttributes.videoWidth === 0 || this.videoAttributes.videoHeight === 0) {
        return;
      }
      if (!!this.videoAttributes.hasAlpha) {
        this.renderCanvas2DContext.clearRect(0, 0, this.renderCanvas2D.width, this.renderCanvas2D.height);
        this.renderCanvas2DContext.drawImage(videoEl, 0, 0, this.renderCanvas2D.width, this.renderCanvas2D.height);
        const frameOne = this.renderCanvas2DContext.getImageData(0, 0, this.viewportSize.width, this.viewportSize.height);
        const frameTwo = this.renderCanvas2DContext.getImageData(this.videoAttributes.alphaStartX * this.videoAttributes.sequenceScale.width * this.viewportSize.scaleX, this.videoAttributes.alphaStartY * this.videoAttributes.sequenceScale.height * this.viewportSize.scaleY, this.viewportSize.width, this.viewportSize.height);
        const length = frameOne.data.length / 4;
        for (let i = 0; i < length; i++) {
          frameOne.data[i * 4 + 3] = frameTwo.data[i * 4 + 0];
        }
        this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context2D.putImageData(frameOne, this.viewportSize.x, this.viewportSize.y, 0, 0, this.viewportSize.width, this.viewportSize.height);
      } else {
        this.context2D.drawImage(videoEl, 0, 0, this.videoAttributes.sequenceWidth, this.videoAttributes.sequenceHeight, this.videoAttributes.position.x, this.videoAttributes.position.y, this.videoAttributes.videoWidth, this.videoAttributes.videoHeight);
      }
    }
    clearRenderWithWebGL() {
      this.gl.clearColor(0, 0, 0, 0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    clearRenderWithCanvas() {
      this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    clearRenderTimer() {
      if (this.renderTimer) {
        window.cancelAnimationFrame(this.renderTimer);
        this.renderTimer = null;
      }
    }
  };
  let PAGView = _PAGView;
  PAGView.RenderingMode = RenderingMode;
  PAGView.ScaleMode = ScaleMode;

  exports.PAGFile = PAGFile;
  exports.PAGGenerator = PAGGenerator;
  exports.PAGView = PAGView;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pag.umd.js.map

"use strict";(self["webpackChunkramp_website"]=self["webpackChunkramp_website"]||[]).push([[9302],{15317:function(e,t,r){r.d(t,{$:function(){return Fr},A:function(){return P},B:function(){return oo},C:function(){return ln},D:function(){return yt},E:function(){return gt},F:function(){return hi},G:function(){return ye},H:function(){return lt},I:function(){return St},J:function(){return he},K:function(){return ce},L:function(){return ae},M:function(){return Te},N:function(){return Ti},O:function(){return U},P:function(){return De},Q:function(){return Kn},R:function(){return eo},S:function(){return ot},T:function(){return me},U:function(){return mi},V:function(){return de},W:function(){return J},X:function(){return ee},Y:function(){return Q},Z:function(){return ie},_:function(){return Mt},a:function(){return _o},a0:function(){return zr},a1:function(){return ue},a2:function(){return E},a3:function(){return Un},a4:function(){return Hn},a5:function(){return jn},a6:function(){return Fn},a7:function(){return Gn},a8:function(){return Vn},a9:function(){return kn},aa:function(){return hr},ab:function(){return Cr},ac:function(){return Mr},ad:function(){return gi},ae:function(){return ro},b:function(){return Me},c:function(){return b},d:function(){return T},e:function(){return le},f:function(){return V},g:function(){return N},h:function(){return oe},i:function(){return ct},j:function(){return Xe},k:function(){return Ye},l:function(){return ft},m:function(){return M},n:function(){return we},o:function(){return xo},p:function(){return vt},q:function(){return Ke},r:function(){return H},s:function(){return Oe},t:function(){return Ce},u:function(){return dt},v:function(){return Zr},w:function(){return Qe},x:function(){return ai},y:function(){return Tt},z:function(){return Qt}});var i=r(44444),n=r(34550),o=r(36012),a=r(52454),s=r(43038),c=r(50094),l=r(76328),d=r(71807),u=r(55334),h=(r(97975),r(38837)),f=r(64235),m=r(10769),p=r(77703),v=r(9498),g=r(50940),_=r(40102);function b(e,t=!1){return e<=i.bB?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function x(e){e.vertex.code.add(l.o`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${l.o.int(c.n.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${l.o.int(c.n.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${l.o.int(c.n.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${l.o.int(c.n.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let T=class{constructor(e,t,r,i,n=null){if(this.name=e,this.type=t,this.arraySize=n,this.bind={[u.a.Pass]:null,[u.a.Draw]:null},i)switch(r){case u.a.Pass:this.bind[u.a.Pass]=i;break;case u.a.Draw:this.bind[u.a.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},S=class extends T{constructor(e,t){super(e,"sampler2D",u.a.Draw,((r,i,n)=>r.bindTexture(e,t(i,n))))}};function E(){return!!(0,i.Q)("enable-feature:objectAndLayerId-rendering")}function A({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(l.o`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(l.o`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let w=class extends T{constructor(e,t){super(e,"vec3",u.a.Draw,((r,i,n,o)=>r.setUniform3fv(e,t(i,n,o))))}},C=class extends T{constructor(e,t){super(e,"vec3",u.a.Pass,((r,i,n)=>r.setUniform3fv(e,t(i,n))))}},M=class extends T{constructor(e,t){super(e,"float",u.a.Pass,((r,i,n)=>r.setUniform1f(e,t(i,n))))}},O=class extends T{constructor(e,t){super(e,"mat3",u.a.Draw,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}},y=class extends T{constructor(e,t){super(e,"mat3",u.a.Pass,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}},I=class extends T{constructor(e,t){super(e,"mat4",u.a.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}},R=class extends i.e9{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,i.bt)([(0,i.bu)()],R.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"LABELS_SHOW_BORDER",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"TEXT_SHOW_BASELINE",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"TEXT_SHOW_BORDER",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"SHOW_POI",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,i.bt)([(0,i.bu)()],R.prototype,"LINE_WIREFRAMES",void 0),R=(0,i.bt)([(0,i.bv)("esri.views.3d.support.debugFlags")],R);const N=new R;var P;function L(e){e.attributes.add(d.e.POSITION,"vec3"),e.vertex.code.add(l.o`vec3 positionModel() { return position; }`)}function D(e,t){e.include(L);const r=e.vertex;r.include(A,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new C("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new C("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new y("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new I("transformProjFromView",(e=>e.transformProjFromView)),new O("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new w("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new w("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(l.o`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(l.o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?l.o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:l.o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new C("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(l.o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(l.o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.HUD_MATERIAL=12]="HUD_MATERIAL",e[e.LABEL_MATERIAL=13]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=14]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",e[e.DRAPED_WATER=17]="DRAPED_WATER",e[e.VOXEL=18]="VOXEL",e[e.MAX_SLOTS=19]="MAX_SLOTS"})(P||(P={}));let F=class extends l.t{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,i.ap)(),this.transformWorldFromViewTL=(0,i.ap)(),this.transformViewFromCameraRelativeRS=(0,m.e)(),this.transformProjFromView=(0,p.e)()}},B=class extends l.t{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,m.e)(),this.transformWorldFromModelTH=(0,i.ap)(),this.transformWorldFromModelTL=(0,i.ap)()}};function z(e,t){switch(t.normalType){case c.a.Attribute:case c.a.Compressed:e.include(c.t,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new O("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new y("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.o`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case c.a.ScreenDerivative:e.vertex.code.add(l.o`void forwardNormal() {}`);break;default:(0,i.iq)(t.normalType);case c.a.COUNT:}}let G=class extends F{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,m.e)()}},V=class extends B{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,m.e)(),this.toMapSpace=(0,i.iB)()}};const U=new Map([[d.e.POSITION,0],[d.e.NORMAL,1],[d.e.NORMALCOMPRESSED,1],[d.e.UV0,2],[d.e.COLOR,3],[d.e.COLORFEATUREATTRIBUTE,3],[d.e.SIZE,4],[d.e.TANGENT,4],[d.e.CENTEROFFSETANDDISTANCE,5],[d.e.SYMBOLCOLOR,5],[d.e.FEATUREATTRIBUTE,6],[d.e.INSTANCEFEATUREATTRIBUTE,6],[d.e.INSTANCECOLOR,7],[d.e.OBJECTANDLAYERIDCOLOR,7],[d.e.INSTANCEOBJECTANDLAYERIDCOLOR,7],[d.e.ROTATION,8],[d.e.INSTANCEMODEL,8],[d.e.INSTANCEMODELNORMAL,12],[d.e.INSTANCEMODELORIGINHI,11],[d.e.INSTANCEMODELORIGINLO,15]]);let H=class{constructor(){this.id=(0,i.ir)()}},W=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,i.ap)(),this._tmpMbs=(0,h.E)(),this._tmpObb=new v.I,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,i.dS)(e)}applyToVertex(e,t,r){const n=(0,i.dQ)($,e,t,r),o=(0,i.dQ)(Y,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/(0,i.dS)(o);return(0,i.h9)(this._tmpVertex,n,o,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],n=e[2]+t,o=e[3],a=e[4],s=e[5]+t,c=Math.abs(r),l=Math.abs(i),d=Math.abs(n),u=Math.abs(o),h=Math.abs(a),f=Math.abs(s),m=.5*(1+Math.sign(r*o))*Math.min(c,u),p=.5*(1+Math.sign(i*a))*Math.min(l,h),v=.5*(1+Math.sign(n*s))*Math.min(d,f),g=Math.max(c,u),_=Math.max(l,h),b=Math.max(d,f),x=Math.sqrt(m*m+p*p+v*v),T=Math.sign(c+r),S=Math.sign(l+i),E=Math.sign(d+n),A=Math.sign(u+o),w=Math.sign(h+a),C=Math.sign(f+s),M=this._totalOffset;if(x<M)return e[0]-=(1-T)*M,e[1]-=(1-S)*M,e[2]-=(1-E)*M,e[3]+=A*M,e[4]+=w*M,e[5]+=C*M,e;const O=M/Math.sqrt(g*g+_*_+b*b),y=M/x,I=y-O,R=-I;return e[0]+=r*(T*R+y),e[1]+=i*(S*R+y),e[2]+=n*(E*R+y),e[3]+=o*(A*I+O),e[4]+=a*(w*I+O),e[5]+=s*(C*I+O),e}applyToMbs(e){const t=(0,i.dS)((0,h.U)(e)),r=this._totalOffset/t;return(0,i.h9)((0,h.U)(this._tmpMbs),(0,h.U)(e),(0,h.U)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,v.L)(e,this._totalOffset,this._totalOffset,i.iE.Global,this._tmpObb),this._tmpObb}},j=class{constructor(e=0){this.offset=e,this.sphere=(0,h.E)(),this.tmpVertex=(0,i.ap)()}applyToVertex(e,t,r){const n=this.objectTransform.transform,o=(0,i.dQ)($,e,t,r),a=(0,i.dX)(o,o,n),s=this.offset/(0,i.dS)(a);(0,i.h9)(a,a,a,s);const c=this.objectTransform.inverse;return(0,i.dX)(this.tmpVertex,a,c),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,i.dS)(e);(0,i.h9)(e,e,e,r);const n=this.offset/(0,i.dS)(t);(0,i.h9)(t,t,t,n)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,i.dS)((0,h.U)(e)),r=this.offset/t;return(0,i.h9)((0,h.U)(this.sphere),(0,h.U)(e),(0,h.U)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};const q=new j;function k(e){return null!=e?(q.offset=e,q):null}new W;const $=(0,i.ap)(),Y=(0,i.ap)();function X(e){return Math.abs(e*e*e)}function Z(e,t,r){const i=r.parameters;return re.scale=Math.min(i.divisor/(t-i.offset),1),re.factor=X(e),re}function J(e,t){return(0,i.qm)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function K(e,t,r){const i=Z(e,t,r);return i.minScaleFactor=0,J(1,i)}function Q(e,t,r,i){i.scale=K(e,t,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function ee(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}function te(e,t,r,i){return J(e,Z(t,r,i))}const re={scale:0,factor:0,minScaleFactor:0};function ie(e,t,r,n,o){let a=(r.screenLength||0)*e.pixelRatio;null!=o&&(a=te(a,n,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,i.b0)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function ne(e,t){let r=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?Array.isArray(e[n])&&(0,i.c)(o,e[n])||(e[n]=o.slice(),r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}const oe={multiply:1,ignore:2,replace:3,tint:4};let ae=class{constructor(e,t){this._module=e,this._load=t}get(){return this._module}async reload(){return this._module=await this._load(),this._module}},se=class{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.cM({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,i.lm)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}},ce=class{constructor(e,t,r,n,o=U){this.release=n,this.locations=o,this.primitiveType=i.hW.TRIANGLES,this.key=t.key,this._program=new se(e.rctx,r.get().build(t),o),this._pipeline=this.initializePipeline(t),this.reload=async n=>{if(n&&await r.reload(),!this.key.equals(t.key))throw new Error("Configuration was changed after construction, cannot reload shader");(0,i.aI)(this._program),this._program=new se(e.rctx,r.get().build(t),o),this._pipeline=this.initializePipeline(t)}}destroy(){this._program=(0,i.aI)(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,t){return this._pipeline}initializePipeline(e){return(0,f.B)({blending:f.o,colorWrite:f.g})}};var le;(function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"})(le||(le={}));let de=class extends H{constructor(e,t){super(),this.type=le.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=U,this._pp0=(0,i.aq)(0,0,1),this._pp1=(0,i.aq)(0,0,0),this._parameters=new t,ne(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){ne(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,r,i,n,o){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,n)}};var ue,he;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(ue||(ue={})),function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"}(he||(he={}));const fe=(0,f.r)(i.aQ.ONE,i.aQ.ZERO,i.aQ.ONE,i.aQ.ONE_MINUS_SRC_ALPHA);function me(e){return e===he.FrontFace?null:fe}function pe(e){switch(e){case he.NONE:return f.c;case he.ColorAlpha:return fe;case he.FrontFace:case he.COUNT:return null}}function ve(e){if(e.draped)return null;switch(e.oitPass){case he.NONE:case he.FrontFace:return e.writeDepth?f.p:null;case he.ColorAlpha:case he.COUNT:return null}}const ge=5e5,_e={factor:-1,units:-2};function be(e){return e?_e:null}function xe(e,t=i.id.LESS){return e===he.NONE||e===he.FrontFace?t:i.id.LEQUAL}function Te(e,t){const r=(0,c.S)(t);return e===he.ColorAlpha?r?{buffers:[i.gN.COLOR_ATTACHMENT0,i.gN.COLOR_ATTACHMENT1,i.gN.COLOR_ATTACHMENT2]}:{buffers:[i.gN.COLOR_ATTACHMENT0,i.gN.COLOR_ATTACHMENT1]}:r?{buffers:[i.gN.COLOR_ATTACHMENT0,i.gN.COLOR_ATTACHMENT1]}:null}i.id.LESS,i.id.ALWAYS;const Se={mask:255},Ee={function:{func:i.id.ALWAYS,ref:o.s.OutlineVisualElementMask,mask:o.s.OutlineVisualElementMask},operation:{fail:i.ie.KEEP,zFail:i.ie.KEEP,zPass:i.ie.ZERO}},Ae={function:{func:i.id.ALWAYS,ref:o.s.OutlineVisualElementMask,mask:o.s.OutlineVisualElementMask},operation:{fail:i.ie.KEEP,zFail:i.ie.KEEP,zPass:i.ie.REPLACE}};function we({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:n,emissiveTexture:o,emissiveFactor:a,occlusionTexture:s}){return null==e&&null==t&&null==o&&(null==a||(0,i.H)(a,i.it))&&null==s&&(null==n||1===n)&&(null==r||1===r)}i.id.EQUAL,o.s.OutlineVisualElementMask,o.s.OutlineVisualElementMask,i.ie.KEEP,i.ie.KEEP,i.ie.KEEP,i.id.NOTEQUAL,o.s.OutlineVisualElementMask,o.s.OutlineVisualElementMask,i.ie.KEEP,i.ie.KEEP,i.ie.KEEP;const Ce=(0,i.iD)(1,1,.5),Me=(0,i.iD)(0,.6,.2),Oe=(0,i.iD)(0,1,.2);let ye=class extends T{constructor(e,t){super(e,"vec2",u.a.Pass,((r,i,n)=>r.setUniform2fv(e,t(i,n))))}};function Ie(e){e.varyings.add("linearDepth","float")}function Re(e){e.vertex.uniforms.add(new ye("nearFar",((e,t)=>t.camera.nearFar)))}function Ne(e){e.vertex.code.add(l.o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Pe(e,t){const{vertex:r}=e;switch(t.output){case c.b.Color:case c.b.ColorEmission:if(t.receiveShadows)return Ie(e),void r.code.add(l.o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case c.b.Shadow:case c.b.ShadowHighlight:case c.b.ShadowExcludeHighlight:case c.b.ViewshedShadow:return e.include(D,t),Ie(e),Re(e),Ne(e),void r.code.add(l.o`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(l.o`void forwardLinearDepth() {}`)}function Le(e){e.vertex.code.add(l.o`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function De(e,t){Fe(e,t,new w("slicePlaneOrigin",((e,r)=>Ve(t,e,r))),new w("slicePlaneBasis1",((e,r)=>Ue(t,e,r,r.slicePlane?.basis1))),new w("slicePlaneBasis2",((e,r)=>Ue(t,e,r,r.slicePlane?.basis2))))}function Fe(e,t,...r){if(!t.hasSlicePlane){const r=l.o`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}const i=l.o`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=l.o`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?l.o`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.o`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r).code.add(i),e.fragment.uniforms.add(...r).code.add(i),e.fragment.code.add(o)}function Be(e,t,r){return e.instancedDoublePrecision?(0,i.dQ)(He,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function ze(e,t){return null!=e?(0,i.dB)(We,t.origin,e):t.origin}function Ge(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.n7)(qe,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function Ve(e,t,r){if(null==r.slicePlane)return i.it;const n=Be(e,t,r),o=ze(n,r.slicePlane),a=Ge(e,n,r);return null!=a?(0,i.dX)(We,o,a):o}function Ue(e,t,r,n){if(null==n||null==r.slicePlane)return i.it;const o=Be(e,t,r),a=ze(o,r.slicePlane),s=Ge(e,o,r);return null!=s?((0,i.dE)(je,n,a),(0,i.dX)(We,a,s),(0,i.dX)(je,je,s),(0,i.dB)(je,je,We)):n}const He=(0,i.ap)(),We=(0,i.ap)(),je=(0,i.ap)(),qe=(0,p.e)();function ke(e){Ne(e),e.vertex.code.add(l.o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(l.o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let $e=class extends T{constructor(e,t){super(e,"mat4",u.a.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}};function Ye(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",i.it):e.uniforms.add(new w("cameraPosition",((e,t)=>(0,i.dQ)(Je,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function Xe(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new I("proj",((e,t)=>t.camera.projectionMatrix)),new $e("view",((e,t)=>(0,i.n7)(Ze,t.camera.viewMatrix,e.origin))),new w("localOrigin",(e=>e.origin)));const r=e=>(0,i.dQ)(Je,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new I("proj",((e,t)=>t.camera.projectionMatrix)),new I("view",((e,t)=>(0,i.n7)(Ze,t.camera.viewMatrix,r(t)))),new C("localOrigin",((e,t)=>r(t))))}const Ze=(0,p.e)(),Je=(0,i.ap)();function Ke(e){e.uniforms.add(new I("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}function Qe(e){e.uniforms.add(new M("pixelRatio",((e,t)=>t.camera.pixelRatio/t.overlayStretch)))}const et=(0,m.e)();function tt(e,t){const r=t.hasModelTransformation,n=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new I("model",(e=>e.modelTransformation??p.o))),e.vertex.uniforms.add(new y("normalLocalOriginFromModel",(e=>((0,i.gc)(et,e.modelTransformation??p.o),et))))),t.instanced&&n&&(e.attributes.add(d.e.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(d.e.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(d.e.INSTANCEMODEL,"mat3"),e.attributes.add(d.e.INSTANCEMODELNORMAL,"mat3"));const o=e.vertex;n&&(o.include(A,t),o.uniforms.add(new w("viewOriginHi",((e,t)=>(0,_.o)((0,i.dQ)(rt,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),rt))),new w("viewOriginLo",((e,t)=>(0,_.r)((0,i.dQ)(rt,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),rt))))),o.code.add(l.o`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?n?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":n?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${n?l.o`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(l.o`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?n?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":n?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.b.Normal&&(Ke(o),o.code.add(l.o`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?n?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":n?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&o.code.add(l.o`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?n?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":n?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const rt=(0,i.ap)();let it=class extends T{constructor(e,t){super(e,"int",u.a.Pass,((r,i,n)=>r.setUniform1i(e,t(i,n))))}};function nt(e,t){t.hasSymbolColors?(e.include(x),e.attributes.add(d.e.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(l.o`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new it("colorMixMode",(e=>oe[e.colorMixMode]))),e.vertex.code.add(l.o`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}var ot;function at(e,t){switch(t.textureCoordinateType){case ot.Default:return e.attributes.add(d.e.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(l.o`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ot.Compressed:return e.attributes.add(d.e.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(l.o`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case ot.Atlas:return e.attributes.add(d.e.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(d.e.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(l.o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,i.iq)(t.textureCoordinateType);case ot.None:return void e.vertex.code.add(l.o`void forwardTextureCoordinates() {}`);case ot.COUNT:return}}function st(e,t){t.hasVertexColors?(e.attributes.add(d.e.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(l.o`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(l.o`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(l.o`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function ct(e){e.vertex.code.add(l.o`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(l.o`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(l.o`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.o`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(l.o`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.o`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function lt(e){e.uniforms.add(new C("screenSizePerspective",(e=>ut(e.screenSizePerspective))))}function dt(e){e.uniforms.add(new C("screenSizePerspectiveAlignment",(e=>ut(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function ut(e){return(0,i.dQ)(ht,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(ot||(ot={}));const ht=(0,i.ap)();let ft=class extends T{constructor(e,t){super(e,"vec4",u.a.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))))}};function mt(e,t){const r=e.vertex;t.hasVerticalOffset?(vt(r),t.hasScreenSizePerspective&&(e.include(ct),dt(r),Ye(e.vertex,t)),r.code.add(l.o`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.o`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.o`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.o`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.o`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.o`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const pt=(0,i.iB)();function vt(e){e.uniforms.add(new ft("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.ab)(pt,o*s,a,r,n)})))}function gt(e,t){if(t.output!==c.b.ObjectAndLayerIdColor)return e.vertex.code.add(l.o`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(l.o`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?d.e.INSTANCEOBJECTANDLAYERIDCOLOR:d.e.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(l.o`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(l.o`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}function _t(e){e.code.add(l.o`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function bt(e,t){switch(t.output){case c.b.Shadow:case c.b.ShadowHighlight:case c.b.ShadowExcludeHighlight:case c.b.ViewshedShadow:e.fragment.include(_t),e.fragment.code.add(l.o`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}let xt=class extends T{constructor(e,t){super(e,"ivec2",u.a.Pass,((r,i,n)=>r.setUniform2iv(e,t(i,n))))}},Tt=class extends T{constructor(e,t){super(e,"sampler2D",u.a.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}};function St(e,t){const{fragment:r}=e;t.output===c.b.Highlight?(r.uniforms.add(new Tt("depthTexture",((e,t)=>t.mainDepth)),new Tt("highlightTexture",((e,t)=>t.highlightMixTexture)),new it("highlightLevel",((e,t)=>t.highlightLevel)),new xt("highlightMixOrigin",((e,t)=>t.highlightMixOrigin))),e.outputs.add("fragHighlight","vec2",0),r.code.add(l.o`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),t.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(l.o`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(l.o`void calculateOcclusionAndOutputHighlight() {}`)}let Et=class extends T{constructor(e,t,r){super(e,"vec4",u.a.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))),r)}},At=class extends T{constructor(e,t,r){super(e,"float",u.a.Pass,((r,i,n)=>r.setUniform1fv(e,t(i,n))),r)}};var wt,Ct;function Mt(e,t,r){if(!t.vvSize)return(0,i.dQ)(e,1,1,1),e;for(let n=0;n<3;++n){const o=t.vvSize.offset[n]+r[0]*t.vvSize.factor[n];e[n]=(0,i.b0)(o,t.vvSize.minSize[n],t.vvSize.maxSize[n])}return e}(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(wt||(wt={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(Ct||(Ct={}));const Ot=8;function yt(e,t){const{vertex:r,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(d.e.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new C("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new C("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new C("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new C("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new y("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new C("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.o`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.o`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.o`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.o`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",Ot),r.uniforms.add(new At("vvColorValues",(e=>e.vvColor.values),Ot),new Et("vvColorColors",(e=>e.vvColor.colors),Ot)),r.code.add(l.o`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.o`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.o`vec4 vvColor() { return vec4(1.0); }`)}function It(e,t){Rt(e,t,new M("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function Rt(e,t,r){const n=e.fragment;switch(t.alphaDiscardMode){case o.i.Blend:e.fragment.code.add(l.o`
        #define discardOrAdjustAlpha(color) { if (color.a < ${l.o.float(i.ug)}) { discard; } }
      `);break;case o.i.Opaque:n.code.add(l.o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case o.i.Mask:n.uniforms.add(r).code.add(l.o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case o.i.MaskBlend:n.uniforms.add(r).code.add(l.o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Nt(e,t){const{vertex:r,fragment:i}=e,n=t.hasColorTexture&&t.alphaDiscardMode!==o.i.Opaque,{output:a,normalType:s,hasColorTextureTransform:d}=t;switch(a){case c.b.Depth:Xe(r,t),e.include(ke,t),e.include(De,t),e.include(at,t),n&&i.uniforms.add(new Tt("tex",(e=>e.texture))),r.main.add(l.o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(It,t),i.main.add(l.o`
          discardBySlice(vpos);
          ${(0,l.r)(n,l.o`vec4 texColor = texture(tex, ${d?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case c.b.Shadow:case c.b.ShadowHighlight:case c.b.ShadowExcludeHighlight:case c.b.ViewshedShadow:case c.b.ObjectAndLayerIdColor:Xe(r,t),e.include(ke,t),e.include(at,t),e.include(yt,t),e.include(bt,t),e.include(De,t),e.include(gt,t),Re(e),e.varyings.add("depth","float"),n&&i.uniforms.add(new Tt("tex",(e=>e.texture))),r.main.add(l.o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(It,t),i.main.add(l.o`
          discardBySlice(vpos);
          ${(0,l.r)(n,l.o`vec4 texColor = texture(tex, ${d?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${a===c.b.ObjectAndLayerIdColor?l.o`outputObjectAndLayerIdColor();`:l.o`outputDepth(depth);`}`);break;case c.b.Normal:{Xe(r,t),e.include(ke,t),e.include(c.t,t),e.include(z,t),e.include(at,t),e.include(yt,t),n&&i.uniforms.add(new Tt("tex",(e=>e.texture))),s===c.a.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const o=s===c.a.Attribute||s===c.a.Compressed;r.main.add(l.o`
          vpos = getVertexInLocalOriginSpace();
          ${o?l.o`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.o`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(De,t),e.include(It,t),i.main.add(l.o`
          discardBySlice(vpos);
          ${(0,l.r)(n,l.o`vec4 texColor = texture(tex, ${d?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${s===c.a.ScreenDerivative?l.o`vec3 normal = screenDerivativeNormal(vPositionView);`:l.o`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case c.b.Highlight:Xe(r,t),e.include(ke,t),e.include(at,t),e.include(yt,t),n&&i.uniforms.add(new Tt("tex",(e=>e.texture))),r.main.add(l.o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(De,t),e.include(It,t),e.include(St,t),i.main.add(l.o`
          discardBySlice(vpos);
          ${(0,l.r)(n,l.o`vec4 texColor = texture(tex, ${d?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function Pt(e){e.fragment.code.add(l.o`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Lt(e,t){const{textureCoordinateType:r}=t;if(r===ot.None||r===ot.COUNT)return;e.include(at,t);const i=r===ot.Atlas;i&&e.include(Pt),e.fragment.code.add(l.o`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}function Dt(e,t){const r=e.fragment;switch(r.code.add(l.o`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case Ft.None:r.code.add(l.o`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Ft.View:r.code.add(l.o`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Ft.WindingOrder:r.code.add(l.o`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.iq)(t.doubleSidedMode);case Ft.COUNT:}}var Ft,Bt,zt,Gt,Vt;function Ut(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(d.e.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===Ft.WindingOrder?r.code.add(l.o`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(l.o`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(l.o`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==ot.None&&(e.include(Lt,t),r.uniforms.add(t.bindType===u.a.Pass?new Tt("normalTexture",(e=>e.textureNormal)):new S("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new ye("scale",(e=>e.scale??i.mq))),r.uniforms.add(new y("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??m.o)))),r.code.add(l.o`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(l.o`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(l.o`return tangentSpace * rawNormal;
}`))}(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(Ft||(Ft={})),function(e){e.OPAQUE="opaque-color",e.TRANSPARENT="transparent-color",e.COMPOSITE="composite-color",e.FINAL="final-color"}(Bt||(Bt={})),function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(zt||(zt={})),function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(Gt||(Gt={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Vt||(Vt={}));let Ht=class extends i.e9{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=Bt.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,i.cc)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),i.cd)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new i.s("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===o.a.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,i.bt)([(0,i.bu)({constructOnly:!0})],Ht.prototype,"view",void 0),(0,i.bt)([(0,i.bu)({constructOnly:!0})],Ht.prototype,"consumes",void 0),(0,i.bt)([(0,i.bu)()],Ht.prototype,"produces",void 0),Ht=(0,i.bt)([(0,i.bv)("esri.views.3d.webgl.RenderNode")],Ht);const Wt=Ht,jt=3e5,qt=5e5;function kt(e,t=!0){e.attributes.add(d.e.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(l.o`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?l.o`uv = position * 0.5 + vec2(0.5);`:""}
  `)}function $t(e){e.uniforms.add(new ye("zProjectionMap",((e,t)=>Yt(t.camera)))),e.code.add(l.o`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(l.o`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(l.o`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function Yt(e){const t=e.projectionMatrix;return(0,i.gV)(Xt,t[14],t[10])}const Xt=(0,i.g_)();let Zt=class extends T{constructor(e,t){super(e,"vec2",u.a.Draw,((r,i,n,o)=>r.setUniform2fv(e,t(i,n,o))))}};const Jt=()=>i.G.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Kt=class{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}},Qt=class extends Kt{constructor(){super(...arguments),this.vertex=new ir,this.fragment=new ir,this.attributes=new nr,this.varyings=new or,this.extensions=new ar,this.outputs=new sr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s=n.main.generateSource(),c="vertex"===e?dr:lr,l=n.constants.generateSource(),d=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${c}\n\n${l.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${d.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[u.a.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[u.a.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n)=>{for(let o=0;o<i;++o)r[o](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[u.a.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[u.a.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n,o)=>{for(let a=0;a<i;++a)r[a](e,o,t,n)}}},er=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.s(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Jt().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}},tr=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new i.s("Shader does not contain main function body.")}},rr=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},ir=class extends Kt{constructor(){super(...arguments),this.uniforms=new er(this),this.main=new tr(this),this.code=new rr(this),this.constants=new cr(this)}get builder(){return this}},nr=class{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}},or=class{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.s)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}},ar=class e{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(t){const r="vertex"===t?e.ALLOWLIST_VERTEX:e.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>r.includes(e))).map((e=>`#extension ${e} : enable`))}};ar.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ar.ALLOWLIST_VERTEX=[];let sr=class e{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,a.s)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(t){if("vertex"===t)return[];0===this._entries.size&&this._entries.set(0,{name:e.DEFAULT_NAME,type:e.DEFAULT_TYPE});const r=new Array;return this._entries.forEach(((e,t)=>r.push(`layout(location = ${t}) out ${e.type} ${e.name};`))),r}};sr.DEFAULT_TYPE="vec4",sr.DEFAULT_NAME="fragColor";let cr=class e{constructor(e){this._stage=e,this._entries=new Set}add(t,r,i){let n="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":n=e._numberToFloatStr(i);break;case"int":n=e._numberToIntStr(i);break;case"bool":n=i.toString();break;case"vec2":n=`vec2(${e._numberToFloatStr(i[0])},                            ${e._numberToFloatStr(i[1])})`;break;case"vec3":n=`vec3(${e._numberToFloatStr(i[0])},                            ${e._numberToFloatStr(i[1])},                            ${e._numberToFloatStr(i[2])})`;break;case"vec4":n=`vec4(${e._numberToFloatStr(i[0])},                            ${e._numberToFloatStr(i[1])},                            ${e._numberToFloatStr(i[2])},                            ${e._numberToFloatStr(i[3])})`;break;case"ivec2":n=`ivec2(${e._numberToIntStr(i[0])},                             ${e._numberToIntStr(i[1])})`;break;case"ivec3":n=`ivec3(${e._numberToIntStr(i[0])},                             ${e._numberToIntStr(i[1])},                             ${e._numberToIntStr(i[2])})`;break;case"ivec4":n=`ivec4(${e._numberToIntStr(i[0])},                             ${e._numberToIntStr(i[1])},                             ${e._numberToIntStr(i[2])},                             ${e._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${r}(${Array.prototype.map.call(i,(t=>e._numberToFloatStr(t))).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${n};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const lr="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",dr="precision highp float;\nprecision highp sampler2D;",ur=4;function hr(){const e=new Qt,t=e.fragment;e.include(kt);const r=(ur+1)/2,i=1/(2*r*r);return t.include($t),t.uniforms.add(new Tt("depthMap",(e=>e.depthTexture)),new S("tex",(e=>e.colorTexture)),new Zt("blurSize",(e=>e.blurSize)),new M("projScale",((e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(l.o`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.o.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(l.o`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${l.o.int(ur)}; r <= ${l.o.int(ur)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const fr=Object.freeze(Object.defineProperty({__proto__:null,build:hr},Symbol.toStringTag,{value:"Module"}));let mr=class extends ce{constructor(e,t,i){super(e,t,new ae(fr,(()=>Promise.all([r.e(4464),r.e(413),r.e(5599),r.e(2763)]).then(r.bind(r,12763)).then((e=>e.S)))),i)}initializePipeline(){return(0,f.B)({colorWrite:f.g})}};const pr="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let vr=class extends l.t{constructor(){super(...arguments),this.projScale=1}},gr=class extends vr{constructor(){super(...arguments),this.intensity=1}},_r=class extends l.t{},br=class extends _r{constructor(){super(...arguments),this.blurSize=(0,i.g_)()}};function xr(e){e.fragment.uniforms.add(new ft("projInfo",((e,t)=>Tr(t.camera)))),e.fragment.uniforms.add(new ye("zScale",((e,t)=>Er(t.camera)))),e.fragment.code.add(l.o`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Tr(e){const t=e.projectionMatrix;return 0===t[11]?(0,i.ab)(Sr,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,i.ab)(Sr,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const Sr=(0,i.iB)();function Er(e){return 0===e.projectionMatrix[11]?(0,i.gV)(Ar,0,1):(0,i.gV)(Ar,1,0)}const Ar=(0,i.g_)(),wr=16;function Cr(){const e=new Qt,t=e.fragment;return e.include(kt),e.include(xr),t.include($t),t.uniforms.add(new M("radius",((e,t)=>Mr(t.camera)))).code.add(l.o`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(l.o`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new Tt("normalMap",(e=>e.normalTexture)),new Tt("depthMap",(e=>e.depthTexture)),new M("projScale",(e=>e.projScale)),new Tt("rnm",(e=>e.noiseTexture)),new ye("rnmScale",((e,t)=>(0,i.gV)(Or,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new M("intensity",(e=>e.intensity)),new ye("screenSize",((e,t)=>(0,i.gV)(Or,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(l.o`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${l.o.int(wr)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${l.o.int(wr)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function Mr(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Or=(0,i.g_)(),yr=Object.freeze(Object.defineProperty({__proto__:null,build:Cr,getRadius:Mr},Symbol.toStringTag,{value:"Module"}));let Ir=class extends ce{constructor(e,t,i){super(e,t,new ae(yr,(()=>Promise.all([r.e(4464),r.e(413),r.e(5599),r.e(2763)]).then(r.bind(r,12763)).then((e=>e.a)))),i)}initializePipeline(){return(0,f.B)({colorWrite:f.g})}};const Rr=2;let Nr=class extends Wt{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=zt.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,i.bj)(0),this._passParameters=new gr,this._drawParameters=new br}initialize(){const e=Uint8Array.from(atob(pr),(e=>e.charCodeAt(0))),t=new i.ct;t.wrapMode=i.cx.CLAMP_TO_EDGE,t.pixelFormat=i.cA.RGB,t.wrapMode=i.cx.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new i.cy(this.renderingContext,t,e),this.techniques.precompile(Ir),this.techniques.precompile(mr),this.addHandles((0,i.cc)((()=>this.isEnabled()),(()=>this._enableTime=(0,i.bj)(0))))}destroy(){this._passParameters.noiseTexture=(0,i.aI)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),n=r?.getTexture(),a=r?.getTexture(i.lj),s=this.fboCache,c=t.camera,l=c.fullViewport[2],d=c.fullViewport[3],u=Math.round(l/Rr),h=Math.round(d/Rr),f=this.techniques.acquire(Ir),m=this.techniques.acquire(mr);if(!f.compiled||!m.compiled)return this._enableTime=(0,i.bj)(performance.now()),this.requestRender(o.a.UPDATE),f.release(),m.release(),s.acquire(u,h,zt.SSAO,Gt.RED);0===this._enableTime&&(this._enableTime=(0,i.bj)(performance.now()));const p=this.renderingContext,v=this.view.qualitySettings.fadeDuration,g=c.relativeElevation,_=(0,i.b0)((qt-g)/(qt-jt),0,1),b=v>0?Math.min(v,performance.now()-this._enableTime)/v:1,x=b*_;this._passParameters.normalTexture=n,this._passParameters.depthTexture=a,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Pr/Mr(c)**6*x;const T=s.acquire(l,d,"ssao input",Gt.RG);p.bindFramebuffer(T.fbo),p.setViewport(0,0,l,d),p.bindTechnique(f,t,this._passParameters,this._drawParameters),p.screen.draw(),f.release();const S=s.acquire(u,h,"ssao blur",Gt.RED);p.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=T.getTexture(),(0,i.gV)(this._drawParameters.blurSize,0,Rr/d),p.bindTechnique(m,t,this._passParameters,this._drawParameters),p.setViewport(0,0,u,h),p.screen.draw(),T.release();const E=s.acquire(u,h,zt.SSAO,Gt.RED);return p.bindFramebuffer(E.fbo),p.setViewport(0,0,l,d),p.setClearColor(1,1,1,0),p.clear(i.h_.COLOR),this._drawParameters.colorTexture=S.getTexture(),(0,i.gV)(this._drawParameters.blurSize,Rr/l,0),p.bindTechnique(m,t,this._passParameters,this._drawParameters),p.setViewport(0,0,u,h),p.screen.draw(),m.release(),p.setViewport4fv(c.fullViewport),S.release(),b<1&&this.requestRender(o.a.UPDATE),E}};(0,i.bt)([(0,i.bu)()],Nr.prototype,"consumes",void 0),(0,i.bt)([(0,i.bu)()],Nr.prototype,"produces",void 0),(0,i.bt)([(0,i.bu)({constructOnly:!0})],Nr.prototype,"techniques",void 0),(0,i.bt)([(0,i.bu)({constructOnly:!0})],Nr.prototype,"isEnabled",void 0),Nr=(0,i.bt)([(0,i.bv)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Nr);const Pr=.5;function Lr(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new Tt("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/Rr),r.code.add(l.o`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(l.o`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}let Dr=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return o.O.LOADED}},Fr=class extends Dr{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){super.dispose(),this._texture=(0,i.jQ)(this._texture),this._textureNormal=(0,i.jQ)(this._textureNormal),this._textureEmissive=(0,i.jQ)(this._textureEmissive),this._textureOcclusion=(0,i.jQ)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.jQ)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?o.O.LOADED:o.O.LOADING}get textureBindParameters(){return new zr(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.jQ)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,i.f3)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.jQ)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}},Br=class extends l.t{constructor(e=null){super(),this.textureEmissive=e}},zr=class extends Br{constructor(e=null,t=null,r=null,i=null,n=null,o,a){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=o,this.normalTextureTransformMatrix=a}};var Gr;function Vr(e,t){const r=t.pbrMode,i=e.fragment;if(r!==Gr.Schematic&&r!==Gr.Disabled&&r!==Gr.Normal)return void i.code.add(l.o`void applyPBRFactors() {}`);if(r===Gr.Disabled)return void i.code.add(l.o`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===Gr.Schematic)return void i.code.add(l.o`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:n,hasMetallicRoughnessTextureTransform:o,hasOcclusionTexture:a,hasOcclusionTextureTransform:s,bindType:c}=t;(n||a)&&e.include(Lt,t),i.code.add(l.o`vec3 mrr;
float occlusion;`),n&&i.uniforms.add(c===u.a.Pass?new Tt("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new S("texMetallicRoughness",(e=>e.textureMetallicRoughness))),a&&i.uniforms.add(c===u.a.Pass?new Tt("texOcclusion",(e=>e.textureOcclusion)):new S("texOcclusion",(e=>e.textureOcclusion))),i.uniforms.add(c===u.a.Pass?new C("mrrFactors",(e=>e.mrrFactors)):new w("mrrFactors",(e=>e.mrrFactors))),i.code.add(l.o`
    ${(0,l.r)(n,l.o`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,l.r)(a,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${a?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,l.r)(n,`applyMetallicRoughness(${o?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,l.r)(a,`applyOcclusion(${s?"occlusionUV":"vuv0"});`)}
    }
  `)}function Ur(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add(new C("lightingAmbientSH0",((e,t)=>(0,i.dQ)(Hr,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(l.o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===n?(r.uniforms.add(new ft("lightingAmbientSH_R",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new ft("lightingAmbientSH_G",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new ft("lightingAmbientSH_B",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(l.o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===n&&(r.uniforms.add(new C("lightingAmbientSH0",((e,t)=>(0,i.dQ)(Hr,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new ft("lightingAmbientSH_R1",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new ft("lightingAmbientSH_G1",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new ft("lightingAmbientSH_B1",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new ft("lightingAmbientSH_R2",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new ft("lightingAmbientSH_G2",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new ft("lightingAmbientSH_B2",((e,t)=>(0,i.ab)(Wr,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(l.o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==Gr.Normal&&t.pbrMode!==Gr.Schematic||r.code.add(l.o`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(Gr||(Gr={}));const Hr=(0,i.ap)(),Wr=(0,i.iB)();function jr(e){e.uniforms.add(new C("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function qr(e){e.uniforms.add(new C("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function kr(e){jr(e.fragment),qr(e.fragment),e.fragment.code.add(l.o`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function $r(e){const t=e.fragment.code;t.add(l.o`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(l.o`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(l.o`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Yr(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}function Xr(e,t){const r=e.fragment.code;e.include(Yr),t.pbrMode!==Gr.Normal&&t.pbrMode!==Gr.Schematic&&t.pbrMode!==Gr.Simplified&&t.pbrMode!==Gr.TerrainWithWater||(r.add(l.o`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(l.o`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==Gr.Normal&&t.pbrMode!==Gr.Schematic||(e.include($r),r.add(l.o`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(l.o`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(l.o`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(l.o`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let Zr=class extends T{constructor(e,t){super(e,"bool",u.a.Pass,((r,i,n)=>r.setUniform1b(e,t(i,n))))}};const Jr=.4;function Kr(e){e.constants.add("ambientBoostFactor","float",Jr)}function Qr(e){e.uniforms.add(new M("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function ei(e,t){const r=e.fragment;switch(e.include(Lr,t),t.pbrMode!==Gr.Disabled&&e.include(Xr,t),e.include(Ur,t),e.include(Yr),r.code.add(l.o`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===Gr.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Kr(r),Qr(r),jr(r),r.code.add(l.o`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?l.o`normalize(vPosWorld)`:l.o`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),qr(r),r.code.add(l.o`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case Gr.Disabled:case Gr.WaterOnIntegratedMesh:case Gr.Water:e.include(kr),r.code.add(l.o`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case Gr.Normal:case Gr.Schematic:r.code.add(l.o`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(l.o`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new Zr("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(l.o`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new M("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new M("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(l.o`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(l.o`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==Gr.Schematic||t.hasColorTexture?l.o`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:l.o`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case Gr.Simplified:case Gr.TerrainWithWater:jr(r),qr(r),r.code.add(l.o`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.iq)(t.pbrMode);case Gr.COUNT:}}let ti=class extends T{constructor(e,t,r){super(e,"mat4",u.a.Draw,((r,i,n,o)=>r.setUniformMatrix4fv(e,t(i,n,o))),r)}},ri=class extends T{constructor(e,t,r){super(e,"mat4",u.a.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}};function ii(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new ri("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),oi(e))}function ni(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new ti("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),oi(e))}function oi(e){const t=e.fragment;t.include(_t),t.uniforms.add(new Tt("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new it("numCascades",((e,t)=>t.shadowMap.numCascades)),new ft("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(l.o`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function ai(e,{occlusionPass:t,terrainDepthTest:r,cullAboveTerrain:i}){r?(e.fragment.include($t),e.fragment.uniforms.add(new Tt("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))).code.add(l.o`
   ${t?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${t?l.o`return fragmentDepth < linearDepth && depth < 1.0;`:l.o`if(fragmentDepth ${i?">":"<="} linearDepth) discard;`}
    }`)):t?e.fragment.code.add(l.o`#define terrainDepthTest(fragmentDepth) false`):e.fragment.code.add(l.o`#define terrainDepthTest(fragmentDepth) {}`)}function si(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new y("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??m.o))).code.add(l.o`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(l.o`void forwardColorUV(){}`)}function ci(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==ot.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new y("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??m.o))).code.add(l.o`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(l.o`void forwardNormalUV(){}`)}function li(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==ot.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new y("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??m.o))).code.add(l.o`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(l.o`void forwardEmissiveUV(){}`)}function di(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==ot.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new y("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??m.o))).code.add(l.o`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(l.o`void forwardOcclusionUV(){}`)}function ui(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==ot.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new y("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??m.o))).code.add(l.o`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(l.o`void forwardMetallicRoughnessUV(){}`)}function hi(e){e.code.add(l.o`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function fi(e){e.include(hi),e.code.add(l.o`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${l.o.int(c.n.Multiply)}) {
        return allMixed;
      }
      if (mode == ${l.o.int(c.n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.o.int(c.n.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${l.o.int(c.n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.o.int(c.n.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}var mi;function pi(e,t){if(!(0,c.u)(t.output))return;const{emissionSource:r,hasEmissiveTextureTransform:i,bindType:n}=t,o=r===mi.Texture;o&&(e.include(Lt,t),e.fragment.uniforms.add(n===u.a.Pass?new Tt("texEmission",(e=>e.textureEmissive)):new S("texEmission",(e=>e.textureEmissive))));const a=r===mi.Value||o;a&&e.fragment.uniforms.add(n===u.a.Pass?new C("emissionFactor",(e=>e.emissiveFactor)):new w("emissionFactor",(e=>e.emissiveFactor))),e.fragment.code.add(l.o`
    vec4 getEmissions() {
      vec4 emissions = ${a?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${(0,l.r)(o,`emissions *= textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}function vi(e,t){e.include(St,t),e.include(pi,t),e.fragment.include(hi);const r=t.output===c.b.ObjectAndLayerIdColor,n=(0,c.S)(t.output),o=(0,c.u)(t.output)&&t.oitPass===he.ColorAlpha,a=(0,c.u)(t.output)&&t.oitPass!==he.ColorAlpha,s=t.discardInvisibleFragments;let d=0;(a||n||o)&&e.outputs.add("fragColor","vec4",d++),n&&e.outputs.add("fragEmission","vec4",d++),o&&e.outputs.add("fragAlpha","float",d++),e.fragment.code.add(l.o`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${(0,l.r)(r,l.o`finalColor.a = 1.0;`)}

      ${(0,l.r)(s,l.o`if (finalColor.a < ${l.o.float(i.ug)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${(0,l.r)(o,l.o`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,l.r)(a,"fragColor = finalColor;")}
      ${(0,l.r)(n,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${(0,l.r)(r,"outputObjectAndLayerIdColor();")}
    }
  `)}function gi(e){const t=new Qt,{vertex:r,fragment:n,varyings:o}=t,{output:a,normalType:s,offsetBackfaces:u,instancedColor:h,spherical:f,receiveShadows:m,snowCover:p,pbrMode:v,textureAlphaPremultiplied:g,instancedDoublePrecision:_,hasVertexColors:b,hasVertexTangents:x,hasColorTexture:T,hasNormalTexture:S,hasNormalTextureTransform:E,hasColorTextureTransform:A}=e;if(Xe(r,e),t.include(L),o.add("vpos","vec3"),t.include(yt,e),t.include(tt,e),t.include(mt,e),t.include(si,e),!(0,c.u)(a))return t.include(Nt,e),t;t.include(ci,e),t.include(li,e),t.include(di,e),t.include(ui,e),Ye(r,e),t.include(c.t,e),t.include(ke,e);const w=s===c.a.Attribute||s===c.a.Compressed;return w&&u&&t.include(Le),t.include(Ut,e),t.include(z,e),h&&t.attributes.add(d.e.INSTANCECOLOR,"vec4"),o.add("vPositionLocal","vec3"),t.include(at,e),t.include(Pe,e),t.include(nt,e),t.include(st,e),r.uniforms.add(new ft("externalColor",(e=>e.externalColor))),o.add("vcolorExt","vec4"),e.terrainDepthTest&&o.add("depth","float"),r.main.add(l.o`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,l.r)(h,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${l.o.float(i.ug)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${(0,l.r)(w,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${(0,l.r)(x,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${(0,l.r)(w&&u,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${(0,l.r)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(ei,e),t.include(Lr,e),t.include(It,e),t.include(_?ii:ni,e),t.include(ai,e),t.include(De,e),t.include(vi,e),Ye(n,e),n.uniforms.add(r.uniforms.get("localOrigin"),new C("ambient",(e=>e.ambient)),new C("diffuse",(e=>e.diffuse)),new M("opacity",(e=>e.opacity)),new M("layerOpacity",(e=>e.layerOpacity))),T&&n.uniforms.add(new Tt("tex",(e=>e.texture))),t.include(Vr,e),t.include(Xr,e),n.include(fi),t.include(Dt,e),Kr(n),Qr(n),qr(n),n.main.add(l.o`
      discardBySlice(vpos);
      ${(0,l.r)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${T?l.o`
              vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
              ${(0,l.r)(g,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:l.o`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${s===c.a.ScreenDerivative?l.o`vec3 normal = screenDerivativeNormal(vPositionLocal);`:l.o`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${m?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,l.r)(f,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${(0,l.r)(b,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${(0,l.r)(b,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${S?`mat3 tangentSpace = computeTangentSpace(${x?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${E?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${f?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${(0,l.r)(p,l.o`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${v===Gr.Normal||v===Gr.Schematic?l.o`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${(0,l.r)(p,l.o`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${p?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l.o`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}(function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT"})(mi||(mi={}));const _i=Object.freeze(Object.defineProperty({__proto__:null,build:gi},Symbol.toStringTag,{value:"Module"}));let bi,xi=class extends G{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Ce,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=o.e.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=i.it,this.instancedDoublePrecision=!1,this.normalType=c.a.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,i.iD)(.2,.2,.2),this.diffuse=(0,i.iD)(.8,.8,.8),this.externalColor=(0,i.iV)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,i.ap)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=o.n.Less,this.textureAlphaMode=o.i.Blend,this.textureAlphaCutoff=i.ug,this.textureAlphaPremultiplied=!1,this.renderOccluded=ue.Occlude,this.isDecoration=!1}},Ti=class extends V{constructor(){super(...arguments),this.origin=(0,i.ap)(),this.slicePlaneLocalOrigin=this.origin}},Si=class extends ce{constructor(e,t,i,n=new ae(_i,(()=>Promise.all([r.e(4464),r.e(413),r.e(5599),r.e(2763)]).then(r.bind(r,12763)).then((e=>e.D))))){super(e,t,n,i),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:r,output:n,transparent:o,cullFace:a,customDepthTest:s,hasOccludees:l,enableOffset:d}=e,u=r===he.NONE,h=r===he.FrontFace;return(0,f.B)({blending:(0,c.u)(n)&&o?pe(r):null,culling:Ai(e)?(0,f.f)(a):null,depthTest:{func:xe(r,Ei(s))},depthWrite:ve(e),drawBuffers:n===c.b.Depth?{buffers:[i.ou.NONE]}:Te(r,n),colorWrite:f.g,stencilWrite:l?Se:null,stencilTest:l?t?Ae:Ee:null,polygonOffset:u||h?null:be(d)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Ei(e){return e===o.n.Lequal?i.id.LEQUAL:i.id.LESS}function Ai(e){return e.cullFace!==o.e.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function wi(){return bi??=(async()=>{const e=await r.e(1105).then(r.bind(r,81105)),t=await e.default({locateFile:e=>(0,i.fG)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),bi}var Ci;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(Ci||(Ci={}));let Mi=null,Oi=null;async function yi(){return null==Oi&&(Oi=wi(),Mi=await Oi),Oi}function Ii(e,t){if(null==Mi)return e.byteLength;const r=new Mi.BasisFile(new Uint8Array(e)),i=Pi(r)?Ni(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}function Ri(e,t){if(null==Mi)return e.byteLength;const r=new Mi.KTX2File(new Uint8Array(e)),i=Li(r)?Ni(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}function Ni(e,t,r,n,o){const a=(0,i.lh)(t?i.uh.COMPRESSED_RGBA8_ETC2_EAC:i.uh.COMPRESSED_RGB8_ETC2),s=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*n*a*s)}function Pi(e){return e.getNumImages()>=1&&!e.isUASTC()}function Li(e){return e.getFaces()>=1&&e.isETC1S()}async function Di(e,t,r){null==Mi&&(Mi=await yi());const i=new Mi.BasisFile(new Uint8Array(r));if(!Pi(i))return null;i.startTranscoding();const n=Bi(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}async function Fi(e,t,r){null==Mi&&(Mi=await yi());const i=new Mi.KTX2File(new Uint8Array(r));if(!Li(i))return null;i.startTranscoding();const n=Bi(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}function Bi(e,t,r,n,o,a,s,c){const{compressedTextureETC:l,compressedTextureS3TC:d}=e.capabilities,[u,h]=l?n?[Ci.ETC2_RGBA,i.uh.COMPRESSED_RGBA8_ETC2_EAC]:[Ci.ETC1_RGB,i.uh.COMPRESSED_RGB8_ETC2]:d?n?[Ci.BC3_RGBA,i.uh.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ci.BC1_RGB,i.uh.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ci.RGBA32,i.cA.RGBA],f=t.hasMipmap?r:Math.min(1,r),m=[];for(let i=0;i<f;i++)m.push(new Uint8Array(s(i,u))),c(i,u,m[i]);return t.internalFormat=h,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?i.cw.LINEAR_MIPMAP_LINEAR:i.cw.LINEAR,t.width=o,t.height=a,new i.cy(e,t,{type:"compressed",levels:m})}const zi=()=>i.G.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Gi=542327876,Vi=131072,Ui=4;function Hi(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Wi(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const ji=Hi("DXT1"),qi=Hi("DXT3"),ki=Hi("DXT5"),$i=31,Yi=0,Xi=1,Zi=2,Ji=3,Ki=4,Qi=7,en=20,tn=21;function rn(e,t,r){const n=nn(r,t.hasMipmap??!1);if(null==n)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:a,width:s,height:c}=n;return t.samplingMode=o.levels.length>1?i.cw.LINEAR_MIPMAP_LINEAR:i.cw.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=s,t.height=c,new i.cy(e,t,o)}function nn(e,t){const r=new Int32Array(e.buffer,e.byteOffset,$i);if(r[Yi]!==Gi)return zi().error("Invalid magic number in DDS header"),null;if(!(r[en]&Ui))return zi().error("Unsupported format, must contain a FourCC code"),null;const n=r[tn];let o,a;switch(n){case ji:o=8,a=i.uh.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case qi:o=16,a=i.uh.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ki:o=16,a=i.uh.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return zi().error("Unsupported FourCC code:",Wi(n)),null}let s=1,c=r[Ki],l=r[Ji];(3&c||3&l)&&(zi().warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const d=c,u=l;let h,f;r[Zi]&Vi&&!1!==t&&(s=Math.max(1,r[Qi]));let m=e.byteOffset+r[Xi]+4;const p=[];for(let i=0;i<s;++i)f=(c+3>>2)*(l+3>>2)*o,h=new Uint8Array(e.buffer,m,f),p.push(h),m+=f,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:d,height:u}}function on(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?cn(e):e;let i=e.width,n=e.height;do{i=Math.ceil(i/2),n=Math.ceil(n/2),r=i*n}while(r>1048576||null!=t&&(i>t||n>t));return sn(e,i,n)}function an(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return sn(e,Math.round(e.width*i),Math.round(e.height*i))}function sn(e,t,r){if(e instanceof ImageData)return sn(cn(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function cn(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new i.s("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}let ln=class extends H{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=le.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new i.d4,this._parameters={...fn,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,i.eG)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,i.m4)(e.src)||(0,i.eG)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new i.ct;return t.wrapMode=this._parameters.wrap??i.cx.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?i.cw.LINEAR_MIPMAP_LINEAR:i.cw.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||dn(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new i.cy(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(0,i.aD)(t)&&this._parameters.encoding===o.u.DDS_ENCODING?this._loadFromDDSData(e,t):(0,i.h7)(t)&&this._parameters.encoding===o.u.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):((0,i.h7)(t)||(0,i.aD)(t))&&this._parameters.encoding===o.u.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,i.h7)(t)||(0,i.aD)(t))&&this._parameters.encoding===o.u.BASIS_ENCODING?this._loadFromBasis(e,t):(0,i.aD)(t)?this._loadFromPixelData(e,t):(0,i.h7)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<hn.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=rn(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>Fi(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>Di(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,a.s)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?i.cA.LUMINANCE:3===this._parameters.components?i.cA.RGB:i.cA.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new i.cy(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const o=await(0,n.t)(t,{signal:r});return(0,i.J)(r),this._loadFromImage(e,o)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const n=await(0,i.ui)(t,t.src,!1,r);return(0,i.J)(r),this._loadFromImage(e,n)}))}_loadFromVideoElement(e,t){return t.readyState>=hn.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((n,o)=>{const a=()=>{t.removeEventListener("loadeddata",s),t.removeEventListener("error",c),(0,i.my)(l)},s=()=>{t.readyState>=hn.HAVE_CURRENT_DATA&&(a(),n(this._loadFromImage(e,t)))},c=e=>{a(),o(e||new i.s("Failed to load video"))};t.addEventListener("loadeddata",s),t.addEventListener("error",c);const l=(0,i.l9)(r,(()=>c((0,i.pm)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?on(r,t):an(r,t)}const n=un(r);this._parameters.width=n.width,this._parameters.height=n.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this._parameters.components?i.cA.RGB:i.cA.RGBA,o.width=n.width,o.height=n.height,this._glTexture=new i.cy(e,o,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,i.aI)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function dn(e,t){if(null==e)return 0;if((0,i.h7)(e)||(0,i.aD)(e))return t.encoding===o.u.KTX2_ENCODING?Ri(e,!!t.mipmap):t.encoding===o.u.BASIS_ENCODING?Ii(e,!!t.mipmap):e.byteLength;const{width:r,height:n}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?un(e):t;return(t.mipmap?4/3:1)*r*n*(t.components||4)||0}function un(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var hn;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(hn||(hn={}));const fn={wrap:{s:i.cx.REPEAT,t:i.cx.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};class mn{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const pn=(0,i.cE)();function vn(e,t,r,n,o,s){if(!e.visible)return;const c=(0,i.ew)(Ln,n,r),l=(e,t,r)=>{s(e,r,t,!1)},u=new mn(!1,t.options.normalRequired);if(e.boundingInfo){(0,a.s)(e.type===le.Mesh);const i=t.tolerance;_n(e.boundingInfo,r,c,i,o,u,l)}else{const t=e.attributes.get(d.e.POSITION),i=t.indices;Tn(r,c,0,i.length/3,i,t.data,t.stride,o,u,l)}}const gn=(0,i.ap)();function _n(e,t,r,n,o,a,s){if(null==e)return;const c=yn(r,gn);if((0,i.uj)(pn,e.bbMin),(0,i.uk)(pn,e.bbMax),o?.applyToAabb(pn),In(pn,t,c,n)){const{primitiveIndices:i,position:c}=e,l=i?i.length:c.indices.length/3;if(l>Nn){const i=e.getChildren();if(void 0!==i){for(const e of i)_n(e,t,r,n,o,a,s);return}}xn(t,r,0,l,c.indices,c.data,c.stride,i,o,a,s)}}const bn=(0,i.ap)();function xn(e,t,r,i,n,o,a,s,c,l,d){const u=e[0],h=e[1],f=e[2],m=t[0],p=t[1],v=t[2],{normalRequired:g}=l;for(let _=r;_<i;++_){const e=s[_],t=3*e,r=a*n[t];let i=o[r],l=o[r+1],b=o[r+2];const x=a*n[t+1];let T=o[x],S=o[x+1],E=o[x+2];const A=a*n[t+2];let w=o[A],C=o[A+1],M=o[A+2];null!=c&&([i,l,b]=c.applyToVertex(i,l,b,_),[T,S,E]=c.applyToVertex(T,S,E,_),[w,C,M]=c.applyToVertex(w,C,M,_));const O=T-i,y=S-l,I=E-b,R=w-i,N=C-l,P=M-b,L=p*P-N*v,D=v*R-P*m,F=m*N-R*p,B=O*L+y*D+I*F;if(Math.abs(B)<=Pn)continue;const z=u-i,G=h-l,V=f-b,U=z*L+G*D+V*F;if(B>0){if(U<0||U>B)continue}else if(U>0||U<B)continue;const H=G*I-y*V,W=V*O-I*z,j=z*y-O*G,q=m*H+p*W+v*j;if(B>0){if(q<0||U+q>B)continue}else if(q>0||U+q<B)continue;const k=(R*H+N*W+P*j)/B;k>=0&&d(k,e,g?wn(O,y,I,R,N,P,bn):null)}}function Tn(e,t,r,n,o,a,s,c,l,d){const u=t,h=Dn,f=Math.abs(u[0]),m=Math.abs(u[1]),p=Math.abs(u[2]),v=f>=m?f>=p?0:2:m>=p?1:2,g=v,_=u[g]<0?2:1,b=(v+_)%3,x=(v+(3-_))%3,T=u[b]/u[g],S=u[x]/u[g],E=1/u[g],A=Sn,w=En,C=An,{normalRequired:M}=l;for(let O=r;O<n;++O){const t=3*O,r=s*o[t];(0,i.dQ)(h[0],a[r+0],a[r+1],a[r+2]);const n=s*o[t+1];(0,i.dQ)(h[1],a[n+0],a[n+1],a[n+2]);const l=s*o[t+2];(0,i.dQ)(h[2],a[l+0],a[l+1],a[l+2]),c&&((0,i.dF)(h[0],c.applyToVertex(h[0][0],h[0][1],h[0][2],O)),(0,i.dF)(h[1],c.applyToVertex(h[1][0],h[1][1],h[1][2],O)),(0,i.dF)(h[2],c.applyToVertex(h[2][0],h[2][1],h[2][2],O))),(0,i.ew)(A,h[0],e),(0,i.ew)(w,h[1],e),(0,i.ew)(C,h[2],e);const u=A[b]-T*A[g],f=A[x]-S*A[g],m=w[b]-T*w[g],p=w[x]-S*w[g],v=C[b]-T*C[g],_=C[x]-S*C[g],y=v*p-_*m,I=u*_-f*v,R=m*f-p*u;if((y<0||I<0||R<0)&&(y>0||I>0||R>0))continue;const N=y+I+R;if(0===N)continue;const P=y*(E*A[g])+I*(E*w[g])+R*(E*C[g]);if(P*Math.sign(N)<0)continue;const L=P/N;L>=0&&d(L,O,M?Cn(h):null)}}const Sn=(0,i.ap)(),En=(0,i.ap)(),An=(0,i.ap)();function wn(e,t,r,n,o,a,s){return(0,i.dQ)(Mn,e,t,r),(0,i.dQ)(On,n,o,a),(0,i.am)(s,Mn,On),(0,i.ao)(s,s),s}function Cn(e){return(0,i.ew)(Mn,e[1],e[0]),(0,i.ew)(On,e[2],e[0]),(0,i.am)(bn,Mn,On),(0,i.ao)(bn,bn),bn}const Mn=(0,i.ap)(),On=(0,i.ap)();function yn(e,t){return(0,i.dQ)(t,1/e[0],1/e[1],1/e[2])}function In(e,t,r,i){return Rn(e,t,r,i,1/0)}function Rn(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),c=Math.max(o,a);const l=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0||(s=Math.max(s,Math.min(l,d)),s>c))return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(u,h)),!(c<0)&&(s=Math.max(s,Math.min(u,h)),!(s>c)&&s<n)}const Nn=1e3,Pn=1e-7,Ln=(0,i.ap)(),Dn=[(0,i.ap)(),(0,i.ap)(),(0,i.ap)()];function Fn(e,t,r,i=1){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,c=o.length;if(r*=s,1===i)for(let l=0;l<c;++l)a[r]=n[o[l]],r+=s;else for(let l=0;l<c;++l){const e=n[o[l]];for(let t=0;t<i;t++)a[r]=e,r+=s}}function Bn(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length;r*=a;for(let c=0;c<s;++c){const e=2*n[c];o[r]=i[e],o[r+1]=i[e+1],r+=a}}function zn(e,t,r,i){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,c=o.length;if(r*=s,null==i||1===i)for(let l=0;l<c;++l){const e=3*o[l];a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],r+=s}else for(let l=0;l<c;++l){const e=3*o[l];for(let t=0;t<i;++t)a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],r+=s}}function Gn(e,t,r,i=1){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,c=o.length;if(r*=s,1===i)for(let l=0;l<c;++l){const e=4*o[l];a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],a[r+3]=n[e+3],r+=s}else for(let l=0;l<c;++l){const e=4*o[l];for(let t=0;t<i;++t)a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],a[r+3]=n[e+3],r+=s}}function Vn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride;t*=n;for(let o=0;o<r;++o)i[t]=0,i[t+1]=0,i[t+2]=0,i[t+3]=0,t+=n}function Un(e,t,r,n,o=1){if(!t)return void zn(e,r,n,o);const{data:a,indices:s}=e,c=r.typedBuffer,l=r.typedBufferStride,d=s.length,u=t[0],h=t[1],f=t[2],m=t[4],p=t[5],v=t[6],g=t[8],_=t[9],b=t[10],x=t[12],T=t[13],S=t[14];n*=l;let E=0,A=0,w=0;const C=(0,i.ul)(t)?e=>{E=a[e]+x,A=a[e+1]+T,w=a[e+2]+S}:e=>{const t=a[e],r=a[e+1],i=a[e+2];E=u*t+m*r+g*i+x,A=h*t+p*r+_*i+T,w=f*t+v*r+b*i+S};if(1===o)for(let i=0;i<d;++i)C(3*s[i]),c[n]=E,c[n+1]=A,c[n+2]=w,n+=l;else for(let i=0;i<d;++i){C(3*s[i]);for(let e=0;e<o;++e)c[n]=E,c[n+1]=A,c[n+2]=w,n+=l}}function Hn(e,t,r,n,o=1){if(!t)return void zn(e,r,n,o);const{data:a,indices:s}=e,c=t,l=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=c[0],f=c[1],m=c[2],p=c[4],v=c[5],g=c[6],_=c[8],b=c[9],x=c[10],T=!(0,i.um)(c),S=1e-6,E=1-S;n*=d;let A=0,w=0,C=0;const M=(0,i.ul)(c)?e=>{A=a[e],w=a[e+1],C=a[e+2]}:e=>{const t=a[e],r=a[e+1],i=a[e+2];A=h*t+p*r+_*i,w=f*t+v*r+b*i,C=m*t+g*r+x*i};if(1===o)if(T)for(let i=0;i<u;++i){M(3*s[i]);const e=A*A+w*w+C*C;if(e<E&&e>S){const t=1/Math.sqrt(e);l[n]=A*t,l[n+1]=w*t,l[n+2]=C*t}else l[n]=A,l[n+1]=w,l[n+2]=C;n+=d}else for(let i=0;i<u;++i)M(3*s[i]),l[n]=A,l[n+1]=w,l[n+2]=C,n+=d;else for(let i=0;i<u;++i){if(M(3*s[i]),T){const e=A*A+w*w+C*C;if(e<E&&e>S){const t=1/Math.sqrt(e);A*=t,w*=t,C*=t}}for(let e=0;e<o;++e)l[n]=A,l[n+1]=w,l[n+2]=C,n+=d}}function Wn(e,t,r,n,o=1){if(!t)return void Gn(e,r,n,o);const{data:a,indices:s}=e,c=t,l=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=c[0],f=c[1],m=c[2],p=c[4],v=c[5],g=c[6],_=c[8],b=c[9],x=c[10],T=!(0,i.um)(c),S=1e-6,E=1-S;if(n*=d,1===o)for(let i=0;i<u;++i){const e=4*s[i],t=a[e],r=a[e+1],o=a[e+2],c=a[e+3];let u=h*t+p*r+_*o,A=f*t+v*r+b*o,w=m*t+g*r+x*o;if(T){const e=u*u+A*A+w*w;if(e<E&&e>S){const t=1/Math.sqrt(e);u*=t,A*=t,w*=t}}l[n]=u,l[n+1]=A,l[n+2]=w,l[n+3]=c,n+=d}else for(let i=0;i<u;++i){const e=4*s[i],t=a[e],r=a[e+1],c=a[e+2],u=a[e+3];let A=h*t+p*r+_*c,w=f*t+v*r+b*c,C=m*t+g*r+x*c;if(T){const e=A*A+w*w+C*C;if(e<E&&e>S){const t=1/Math.sqrt(e);A*=t,w*=t,C*=t}}for(let i=0;i<o;++i)l[n]=A,l[n+1]=w,l[n+2]=C,l[n+3]=u,n+=d}}function jn(e,t,r,i,n=1){const{data:o,indices:a}=e,s=r.typedBuffer,c=r.typedBufferStride,l=a.length;if(i*=c,t!==o.length||4!==t)if(1!==n)if(4!==t)for(let d=0;d<l;++d){const e=3*a[d];for(let t=0;t<n;++t)s[i]=o[e],s[i+1]=o[e+1],s[i+2]=o[e+2],s[i+3]=255,i+=c}else for(let d=0;d<l;++d){const e=4*a[d];for(let t=0;t<n;++t)s[i]=o[e],s[i+1]=o[e+1],s[i+2]=o[e+2],s[i+3]=o[e+3],i+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=c}return}for(let e=0;e<l;++e){const t=3*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=c}}else{s[i]=o[0],s[i+1]=o[1],s[i+2]=o[2],s[i+3]=o[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=c/4,a=e[i/=4];i+=t;const d=l*n;for(let r=1;r<d;++r)e[i]=a,i+=t}}function qn(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length,c=i[0];r*=a;for(let l=0;l<s;++l)o[r]=c,r+=a}function kn(e,t,r,i,n=1){const o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let s=0;s<r;++s)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let s=0;s<r;++s)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}function $n(e,t,r,i,n,o,a){for(const s of r.fields.keys()){const r=e.get(s),c=r?.indices;if(r&&c)Yn(s,r,i,n,o,a);else if(s===d.e.OBJECTANDLAYERIDCOLOR&&null!=t){const r=e.get(d.e.POSITION)?.indices;if(r){const e=r.length;kn(t,o.getField(s,g.x),e,a)}}}}function Yn(e,t,r,i,n,o){switch(e){case d.e.POSITION:{(0,a.s)(3===t.size);const i=n.getField(e,g.i);(0,a.s)(!!i,`No buffer view for ${e}`),i&&Un(t,r,i,o);break}case d.e.NORMAL:{(0,a.s)(3===t.size);const r=n.getField(e,g.i);(0,a.s)(!!r,`No buffer view for ${e}`),r&&Hn(t,i,r,o);break}case d.e.NORMALCOMPRESSED:{(0,a.s)(2===t.size);const r=n.getField(e,g.q);(0,a.s)(!!r,`No buffer view for ${e}`),r&&Bn(t,r,o);break}case d.e.UV0:{(0,a.s)(2===t.size);const r=n.getField(e,g.u);(0,a.s)(!!r,`No buffer view for ${e}`),r&&Bn(t,r,o);break}case d.e.COLOR:case d.e.SYMBOLCOLOR:{const r=n.getField(e,g.x);(0,a.s)(!!r,`No buffer view for ${e}`),(0,a.s)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||jn(t,t.size,r,o);break}case d.e.COLORFEATUREATTRIBUTE:{const r=n.getField(e,g.y);(0,a.s)(!!r,`No buffer view for ${e}`),(0,a.s)(1===t.size),r&&1===t.size&&qn(t,r,o);break}case d.e.TANGENT:{(0,a.s)(4===t.size);const i=n.getField(e,g.c);(0,a.s)(!!i,`No buffer view for ${e}`),i&&Wn(t,r,i,o);break}case d.e.PROFILERIGHT:case d.e.PROFILEUP:case d.e.PROFILEVERTEXANDNORMAL:case d.e.FEATUREVALUE:{(0,a.s)(4===t.size);const r=n.getField(e,g.c);(0,a.s)(!!r,`No buffer view for ${e}`),r&&Gn(t,r,o)}}}class Xn{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(d.e.POSITION).indices.length}write(e,t,r,i,n,o){$n(r,i,this.vertexBufferLayout,e,t,n,o)}}class Zn{constructor(e){this._bits=[...e]}equals(e){return(0,i.c)(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}let Jn=class extends l.t{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new Zn(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}};function Kn(e={}){return(t,r)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const n=e.count||2,o=Math.ceil(Math.log2(n)),a=t._parameterBits;let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);const c=a[s],l=(1<<o)-1<<c;a[s]+=o,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[s]&l)>>c},set(t){if(this[r]!==t){if(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+t<<c&l,"number"!=typeof t)throw new i.s(`Configuration value for ${r} must be a number, got ${typeof t}`);if(null==e.count)throw new i.s(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[s]&l)>>c)},set(e){if(this[r]!==e&&(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+e<<c&l,"boolean"!=typeof e))throw new i.s(`Configuration value for ${r} must be boolean, got ${typeof e}`)}})}}let Qn=class extends Jn{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};(0,i.bt)([Kn()],Qn.prototype,"instancedDoublePrecision",void 0),(0,i.bt)([Kn()],Qn.prototype,"hasModelTransformation",void 0);let eo=class extends Qn{constructor(){super(...arguments),this.output=c.b.Color,this.oitPass=he.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=u.a.Pass,this.writeDepth=!0}};(0,i.bt)([Kn({count:c.b.COUNT})],eo.prototype,"output",void 0),(0,i.bt)([Kn({count:he.COUNT})],eo.prototype,"oitPass",void 0);class to extends eo{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=o.i.Opaque,this.doubleSidedMode=Ft.None,this.pbrMode=Gr.Disabled,this.cullFace=o.e.None,this.normalType=c.a.Attribute,this.customDepthTest=o.n.Less,this.emissionSource=mi.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===mi.Texture||this.hasOcclusionTexture||this.hasNormalTexture?ot.Default:ot.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}function ro(e){const t=new Qt,{vertex:r,fragment:n,varyings:o}=t,{output:a,offsetBackfaces:s,instancedColor:u,pbrMode:h,snowCover:f,spherical:m}=e,p=h===Gr.Normal||h===Gr.Schematic;if(Xe(r,e),t.include(L),o.add("vpos","vec3"),t.include(yt,e),t.include(tt,e),t.include(mt,e),a===c.b.Color&&(Ye(t.vertex,e),t.include(c.t,e),t.include(ke,e),s&&t.include(Le),u&&t.attributes.add(d.e.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),e.terrainDepthTest&&o.add("depth","float"),t.include(at,e),t.include(Pe,e),t.include(nt,e),t.include(st,e),r.uniforms.add(new ft("externalColor",(e=>e.externalColor))),o.add("vcolorExt","vec4"),r.main.add(l.o`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,l.r)(u,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${l.o.float(i.ug)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${(0,l.r)(s,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${(0,l.r)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),a===c.b.Color){const{hasColorTexture:i,hasColorTextureTransform:o,receiveShadows:a}=e;t.include(ei,e),t.include(Lr,e),t.include(It,e),t.include(e.instancedDoublePrecision?ii:ni,e),t.include(ai,e),t.include(De,e),t.include(vi,e),Ye(t.fragment,e),jr(n),Kr(n),Qr(n),n.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new C("ambient",(e=>e.ambient)),new C("diffuse",(e=>e.diffuse)),new M("opacity",(e=>e.opacity)),new M("layerOpacity",(e=>e.layerOpacity))),i&&n.uniforms.add(new Tt("tex",(e=>e.texture))),t.include(Vr,e),t.include(Xr,e),n.include(fi),qr(n),n.main.add(l.o`
      discardBySlice(vpos);
      ${(0,l.r)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${i?`texture(tex, ${o?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,l.r)(i,`${(0,l.r)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":m?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?l.o`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l.o`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,l.r)(f,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${l.o`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,l.r)(p,`vec3 normalGround = ${m?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${p?l.o`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,l.r)(f,l.o`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${f?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l.o`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(Nt,e),t}(0,i.bt)([Kn({count:o.i.COUNT})],to.prototype,"alphaDiscardMode",void 0),(0,i.bt)([Kn({count:Ft.COUNT})],to.prototype,"doubleSidedMode",void 0),(0,i.bt)([Kn({count:Gr.COUNT})],to.prototype,"pbrMode",void 0),(0,i.bt)([Kn({count:o.e.COUNT})],to.prototype,"cullFace",void 0),(0,i.bt)([Kn({count:c.a.COUNT})],to.prototype,"normalType",void 0),(0,i.bt)([Kn({count:o.n.COUNT})],to.prototype,"customDepthTest",void 0),(0,i.bt)([Kn({count:mi.COUNT})],to.prototype,"emissionSource",void 0),(0,i.bt)([Kn()],to.prototype,"hasVertexColors",void 0),(0,i.bt)([Kn()],to.prototype,"hasSymbolColors",void 0),(0,i.bt)([Kn()],to.prototype,"hasVerticalOffset",void 0),(0,i.bt)([Kn()],to.prototype,"hasSlicePlane",void 0),(0,i.bt)([Kn()],to.prototype,"hasSliceHighlight",void 0),(0,i.bt)([Kn()],to.prototype,"hasColorTexture",void 0),(0,i.bt)([Kn()],to.prototype,"hasMetallicRoughnessTexture",void 0),(0,i.bt)([Kn()],to.prototype,"hasOcclusionTexture",void 0),(0,i.bt)([Kn()],to.prototype,"hasNormalTexture",void 0),(0,i.bt)([Kn()],to.prototype,"hasScreenSizePerspective",void 0),(0,i.bt)([Kn()],to.prototype,"hasVertexTangents",void 0),(0,i.bt)([Kn()],to.prototype,"hasOccludees",void 0),(0,i.bt)([Kn()],to.prototype,"hasModelTransformation",void 0),(0,i.bt)([Kn()],to.prototype,"offsetBackfaces",void 0),(0,i.bt)([Kn()],to.prototype,"vvSize",void 0),(0,i.bt)([Kn()],to.prototype,"vvColor",void 0),(0,i.bt)([Kn()],to.prototype,"receiveShadows",void 0),(0,i.bt)([Kn()],to.prototype,"receiveAmbientOcclusion",void 0),(0,i.bt)([Kn()],to.prototype,"textureAlphaPremultiplied",void 0),(0,i.bt)([Kn()],to.prototype,"instanced",void 0),(0,i.bt)([Kn()],to.prototype,"instancedColor",void 0),(0,i.bt)([Kn()],to.prototype,"writeDepth",void 0),(0,i.bt)([Kn()],to.prototype,"transparent",void 0),(0,i.bt)([Kn()],to.prototype,"enableOffset",void 0),(0,i.bt)([Kn()],to.prototype,"terrainDepthTest",void 0),(0,i.bt)([Kn()],to.prototype,"cullAboveTerrain",void 0),(0,i.bt)([Kn()],to.prototype,"snowCover",void 0),(0,i.bt)([Kn()],to.prototype,"hasColorTextureTransform",void 0),(0,i.bt)([Kn()],to.prototype,"hasEmissionTextureTransform",void 0),(0,i.bt)([Kn()],to.prototype,"hasNormalTextureTransform",void 0),(0,i.bt)([Kn()],to.prototype,"hasOcclusionTextureTransform",void 0),(0,i.bt)([Kn()],to.prototype,"hasMetallicRoughnessTextureTransform",void 0);const io=Object.freeze(Object.defineProperty({__proto__:null,build:ro},Symbol.toStringTag,{value:"Module"}));class no extends Si{constructor(e,t,i){super(e,t,i,new ae(io,(()=>Promise.all([r.e(4464),r.e(413),r.e(5599),r.e(2763)]).then(r.bind(r,12763)).then((e=>e.R))))),this.type="RealisticTreeTechnique"}}class oo extends de{constructor(e,t){super(e,so),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[P.OPAQUE_MATERIAL,e=>((0,c.c)(e)||(0,c.o)(e))&&!this.parameters.transparent],[P.TRANSPARENT_MATERIAL,e=>((0,c.c)(e)||(0,c.o)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[P.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,c.r)(e)||(0,c.o)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=lo(this.parameters),this._configuration=new to(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==c.b.Shadow&&e!==c.b.ShadowExcludeHighlight&&e!==c.b.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<i.ug)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:n,vvColor:o}=e,a=t||o||n,s="replace"===e.colorMixMode,c=e.opacity>=i.ug;if(r&&a)return s||c;const l=e.externalColor&&e.externalColor[3]>=i.ug;return r?s?l:c:a?s||c:s?l:c}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,i.H)(this.parameters.emissiveFactor,i.it)}getConfiguration(e,t){const r=this.parameters,{treeRendering:i,doubleSided:n,doubleSidedType:a}=r;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!r.normalTextureId,this._configuration.hasColorTexture=!!r.textureId,this._configuration.hasVertexTangents=!i&&r.hasVertexTangents,this._configuration.instanced=r.isInstanced,this._configuration.instancedDoublePrecision=r.instancedDoublePrecision,this._configuration.vvSize=!!r.vvSize,this._configuration.hasVerticalOffset=null!=r.verticalOffset,this._configuration.hasScreenSizePerspective=null!=r.screenSizePerspective,this._configuration.hasSlicePlane=r.hasSlicePlane,this._configuration.hasSliceHighlight=r.hasSliceHighlight,this._configuration.alphaDiscardMode=r.textureAlphaMode,this._configuration.normalType=i?c.a.Attribute:r.normalType,this._configuration.transparent=r.transparent,this._configuration.writeDepth=r.writeDepth,null!=r.customDepthTest&&(this._configuration.customDepthTest=r.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=r.hasSlicePlane?o.e.None:r.cullFace,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&null!=r.modelTransformation,this._configuration.hasVertexColors=r.hasVertexColors,this._configuration.hasSymbolColors=r.hasSymbolColors,this._configuration.doubleSidedMode=i?Ft.WindingOrder:n&&"normal"===a?Ft.View:n&&"winding-order"===a?Ft.WindingOrder:Ft.None,this._configuration.instancedColor=r.hasInstancedColor,this._configuration.receiveShadows=r.receiveShadows&&r.receiveShadows,this._configuration.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!r.vvColor,this._configuration.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,this._configuration.pbrMode=r.usePBR?r.isSchematic?Gr.Schematic:Gr.Normal:Gr.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!r.metallicRoughnessTextureId,this._configuration.emissionSource=i?mi.None:null!=r.emissiveTextureId?mi.Texture:r.usePBR?mi.Value:mi.None,this._configuration.hasOcclusionTexture=!i&&!!r.occlusionTextureId,this._configuration.offsetBackfaces=!(!r.transparent||!r.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<ge,this._configuration.snowCover=co(t),this._configuration.hasColorTextureTransform=!!r.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,r,n,o,a){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,i.dQ)(vo,t[12],t[13],t[14]);let a=null;switch(r.viewingMode){case i.iE.Global:a=(0,i.ao)(mo,vo);break;case i.iE.Local:a=(0,i.dF)(mo,fo)}let s=0;const c=(0,i.dB)(go,vo,e.eye),l=(0,i.dS)(c),d=(0,i.dC)(c,c,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,i.al)(a,d)),s+=ie(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,i.dC)(a,a,s),(0,i.gf)(po,a,r.transform.inverseRotation),n=(0,i.dB)(uo,n,po),o=(0,i.dB)(ho,o,po)}vn(e,r,n,o,k(r.verticalOffset),a)}createGLMaterial(e){return new ao(e)}createBufferWriter(){return new Xn(this._vertexBufferLayout)}}class ao extends Fr{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,i.dQ)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?no:Si,e)}}class so extends xi{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function co(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}function lo(e){const t=(0,s.H)().vec3f(d.e.POSITION);return e.normalType===c.a.Compressed?t.vec2i16(d.e.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(d.e.NORMAL),e.hasVertexTangents&&t.vec4f(d.e.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(d.e.UV0),e.hasVertexColors&&t.vec4u8(d.e.COLOR),e.hasSymbolColors&&t.vec4u8(d.e.SYMBOLCOLOR),E()&&t.vec4u8(d.e.OBJECTANDLAYERIDCOLOR),t}const uo=(0,i.ap)(),ho=(0,i.ap)(),fo=(0,i.aq)(0,0,1),mo=(0,i.ap)(),po=(0,i.ap)(),vo=(0,i.ap)(),go=(0,i.ap)();let _o=class e{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,a.s)(e.length>=1),(0,a.s)(3===r.size||4===r.size);const{data:n,size:o,indices:s}=r;(0,a.s)(s.length%this._numIndexPerPrimitive==0),(0,a.s)(s.length>=e.length*this._numIndexPerPrimitive);const c=e.length;let l=o*s[this._numIndexPerPrimitive*e[0]];bo.clear(),bo.push(l);const d=(0,i.aq)(n[l],n[l+1],n[l+2]),u=(0,i.dA)(d);for(let i=0;i<c;++i){const t=this._numIndexPerPrimitive*e[i];for(let e=0;e<this._numIndexPerPrimitive;++e){l=o*s[t+e],bo.push(l);let r=n[l];d[0]=Math.min(r,d[0]),u[0]=Math.max(r,u[0]),r=n[l+1],d[1]=Math.min(r,d[1]),u[1]=Math.max(r,u[1]),r=n[l+2],d[2]=Math.min(r,d[2]),u[2]=Math.max(r,u[2])}}this.bbMin=d,this.bbMax=u;const h=(0,i.iX)((0,i.ap)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-d[0],u[1]-d[1]),u[2]-d[2]);let f=this.radius*this.radius;for(let i=0;i<bo.length;++i){l=bo.at(i);const e=n[l]-h[0],t=n[l+1]-h[1],r=n[l+2]-h[2],o=e*e+t*t+r*r;if(o<=f)continue;const a=Math.sqrt(o),s=.5*(a-this.radius);this.radius=this.radius+s,f=this.radius*this.radius;const c=s/a;h[0]+=e*c,h[1]+=t*c,h[2]+=r*c}this.center=h,bo.clear()}getChildren(){if(this._children||(0,i.iY)(this.bbMin,this.bbMax)<=1)return this._children;const t=(0,i.iX)((0,i.ap)(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,n=new Uint8Array(r),o=new Array(8);for(let e=0;e<8;++e)o[e]=0;const{data:a,size:s,indices:c}=this.position;for(let e=0;e<r;++e){let r=0;const i=this._numIndexPerPrimitive*this.primitiveIndices[e];let l=s*c[i],d=a[l],u=a[l+1],h=a[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=s*c[i+e];const t=a[l],r=a[l+1],n=a[l+2];t<d&&(d=t),r<u&&(u=r),n<h&&(h=n)}d<t[0]&&(r|=1),u<t[1]&&(r|=2),h<t[2]&&(r|=4),n[e]=r,++o[r]}let l=0;for(let e=0;e<8;++e)o[e]>0&&++l;if(l<2)return;const d=new Array(8);for(let e=0;e<8;++e)d[e]=o[e]>0?new Uint32Array(o[e]):void 0;for(let e=0;e<8;++e)o[e]=0;for(let e=0;e<r;++e){const t=n[e];d[t][o[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let i=0;i<8;++i)void 0!==d[i]&&this._children.push(new e(d[i],this._numIndexPerPrimitive,this.position));return this._children}static prune(){bo.prune()}};const bo=new i.cM({deallocator:null});function xo(e){if(e.length<i.bB)return Array.from(e);if((0,i.bA)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,i.aE)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}},55334:function(e,t,r){var i;r.d(t,{a:function(){return i}}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},77485:function(e,t,r){r.d(t,{t:function(){return i}});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}},50094:function(e,t,r){r.d(t,{S:function(){return x},a:function(){return o},b:function(){return n},c:function(){return u},d:function(){return p},n:function(){return i},o:function(){return l},r:function(){return d},t:function(){return T},u:function(){return m}});var i,n,o,a=r(44444),s=r(76328),c=r(71807);function l(e){return e===n.Shadow||e===n.ShadowHighlight||e===n.ShadowExcludeHighlight||e===n.ViewshedShadow}function d(e){return g(e)||e===n.Normal}function u(e){return _(e)||e===n.Normal}function h(e){return e===n.Highlight||e===n.ObjectAndLayerIdColor}function f(e){return e===n.Color}function m(e){return f(e)||x(e)}function p(e){return f(e)||h(e)}function v(e){return m(e)||h(e)}function g(e){return p(e)||b(e)}function _(e){return v(e)||b(e)}function b(e){return e===n.Depth}function x(e){return e===n.ColorEmission}function T(e,t){switch(t.normalType){case o.Compressed:e.attributes.add(c.e.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(s.o`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:e.attributes.add(c.e.NORMAL,"vec3"),e.vertex.code.add(s.o`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:e.fragment.code.add(s.o`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,a.iq)(t.normalType);case o.COUNT:}}(function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"})(i||(i={})),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(n||(n={})),function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(o||(o={}))},36012:function(e,t,r){var i,n,o,a,s,c,l,d;r.d(t,{O:function(){return a},a:function(){return o},e:function(){return i},i:function(){return l},n:function(){return n},s:function(){return s},t:function(){return c},u:function(){return d}}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(o||(o={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(c||(c={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(l||(l={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(d||(d={}))},97975:function(e,t,r){r.d(t,{J:function(){return p},K:function(){return v},W:function(){return u},Z:function(){return f},k:function(){return Q}});var i=r(44444),n=r(38837),o=r(77703),a=r(87792),s=r(81203);const c=()=>i.G.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class l{constructor(){this.plane=(0,s.M)(),this.origin=(0,i.ap)(),this.basis1=(0,i.ap)(),this.basis2=(0,i.ap)()}}const d=l;function u(e=q){return{plane:(0,s.M)(e.plane),origin:(0,i.dA)(e.origin),basis1:(0,i.dA)(e.basis1),basis2:(0,i.dA)(e.basis2)}}function h(e,t,r){const i=X.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=(0,s.D)(0,0,0,0),v(i),i}function f(e,t=u()){return p(e.origin,e.basis1,e.basis2,t)}function m(e,t){(0,i.dF)(t.origin,e.origin),(0,i.dF)(t.basis1,e.basis1),(0,i.dF)(t.basis2,e.basis2),(0,s.h)(t.plane,e.plane)}function p(e,t,r,n=u()){return(0,i.dF)(n.origin,e),(0,i.dF)(n.basis1,t),(0,i.dF)(n.basis2,r),v(n),W(n,"fromValues()"),n}function v(e){(0,s.P)(e.basis2,e.basis1,e.origin,e.plane)}function g(e,t,r){e!==r&&f(e,r);const n=(0,i.dC)(s.c.get(),z(e),t);return(0,i.dE)(r.origin,r.origin,n),r.plane[3]-=t,r}function _(e,t,r){return x(t,r),g(r,P(e,e.origin),r),r}function b(e,t){const r=e.basis1[0],n=e.basis2[1],[o,a]=e.origin;return(0,i.dP)(o-r,a-n,o+r,a+n,t)}function x(e,t=u()){const r=(e[2]-e[0])/2,n=(e[3]-e[1])/2;return(0,i.dQ)(t.origin,e[0]+r,e[1]+n,0),(0,i.dQ)(t.basis1,r,0,0),(0,i.dQ)(t.basis2,0,n,0),(0,s.U)(0,0,1,0,t.plane),t}function T(e,t,r){return!!(0,s.x)(e.plane,t,r)&&V(e,r)}function S(e,t,r){if(T(e,t,r))return r;const n=E(e,t,s.c.get());return(0,i.dE)(r,t.origin,(0,i.dC)(s.c.get(),t.direction,(0,i.dR)(t.origin,n)/(0,i.dS)(t.direction))),r}function E(e,t,r){const n=k.get();j(e,t,n,k.get());let o=Number.POSITIVE_INFINITY;for(const a of Z){const c=H(e,a,$.get()),l=s.c.get();if((0,s.q)(n,c,l)){const e=(0,i.dT)(s.c.get(),t.origin,l),n=Math.abs((0,i.dU)((0,i.al)(t.direction,e)));n<o&&(o=n,(0,i.dF)(r,l))}}return o===Number.POSITIVE_INFINITY?w(e,t,r):r}function A(e,t){return(t-e)/t}function w(e,t,r){if(T(e,t,r))return r;const o=k.get(),a=k.get();j(e,t,o,a);let c=Number.POSITIVE_INFINITY;for(const l of Z){const d=H(e,l,$.get()),u=s.c.get();if((0,s.w)(o,d,u)){const e=(0,n.w)(t,u);if(!(0,s.z)(a,u))continue;e<c&&(c=e,(0,i.dF)(r,u))}}return O(e,t.origin)<c&&C(e,t.origin,r),r}function C(e,t,r){const n=(0,s.H)(e.plane,t,s.c.get()),o=(0,a.A)(U(e,e.basis1),n,-1,1,s.c.get()),c=(0,a.A)(U(e,e.basis2),n,-1,1,s.c.get());return(0,i.dB)(r,(0,i.dE)(s.c.get(),o,c),e.origin),r}function M(e,t,r){const{origin:n,basis1:o,basis2:a}=e,c=(0,i.dB)(s.c.get(),t,n),l=(0,s.f)(o,c),d=(0,s.f)(a,c),u=(0,s.f)(z(e),c);return(0,i.dQ)(r,l,d,u)}function O(e,t){const r=M(e,t,s.c.get()),{basis1:n,basis2:o}=e,a=(0,i.dS)(n),c=(0,i.dS)(o),l=Math.max(Math.abs(r[0])-a,0),d=Math.max(Math.abs(r[1])-c,0),u=r[2];return l*l+d*d+u*u}function y(e,t){return Math.sqrt(O(e,t))}function I(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of Z){const n=H(e,i,$.get()),o=(0,a.M)(n,t);o>r&&(r=o)}return Math.sqrt(r)}function R(e,t){return(0,s.z)(e.plane,t)&&V(e,t)}function N(e,t,r,i){return G(e,r,i)}function P(e,t){const r=-e.plane[3];return(0,s.f)(z(e),t)-r}function L(e,t,r,n){const o=P(e,t),a=(0,i.dC)(Y,z(e),r-o);return(0,i.dE)(n,t,a),n}function D(e,t){return(0,i.H)(e.basis1,t.basis1)&&(0,i.H)(e.basis2,t.basis2)&&(0,i.H)(e.origin,t.origin)}function F(e,t,r){return e!==r&&f(e,r),(0,i.dV)(J,t),(0,i.dW)(J,J),(0,i.dX)(r.basis1,e.basis1,J),(0,i.dX)(r.basis2,e.basis2,J),(0,i.dX)((0,s.O)(r.plane),(0,s.O)(e.plane),J),(0,i.dX)(r.origin,e.origin,t),(0,s.y)(r.plane,r.plane,r.origin),r}function B(e,t,r,n){return e!==n&&f(e,n),(0,i.dY)(K,t,r),(0,i.dX)(n.basis1,e.basis1,K),(0,i.dX)(n.basis2,e.basis2,K),v(n),n}function z(e){return(0,s.O)(e.plane)}function G(e,t,r){switch(t){case i.dZ.X:(0,i.dF)(r,e.basis1),(0,i.ao)(r,r);break;case i.dZ.Y:(0,i.dF)(r,e.basis2),(0,i.ao)(r,r);break;case i.dZ.Z:(0,i.dF)(r,z(e))}return r}function V(e,t){const r=(0,i.dB)(s.c.get(),t,e.origin),n=(0,i.dD)(e.basis1),o=(0,i.dD)(e.basis2),a=(0,i.al)(e.basis1,r),c=(0,i.al)(e.basis2,r);return-a-n<0&&a-n<0&&-c-o<0&&c-o<0}function U(e,t){const r=$.get();return(0,i.dF)(r.origin,e.origin),(0,i.dF)(r.vector,t),r}function H(e,t,r){const{basis1:n,basis2:o,origin:a}=e,c=(0,i.dC)(s.c.get(),n,t.origin[0]),l=(0,i.dC)(s.c.get(),o,t.origin[1]);(0,i.dE)(r.origin,c,l),(0,i.dE)(r.origin,r.origin,a);const d=(0,i.dC)(s.c.get(),n,t.direction[0]),u=(0,i.dC)(s.c.get(),o,t.direction[1]);return(0,i.dC)(r.vector,(0,i.dE)(d,d,u),2),r}function W(e,t){Math.abs((0,i.al)(e.basis1,e.basis2)/((0,i.dS)(e.basis1)*(0,i.dS)(e.basis2)))>1e-6&&c().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,i.al)(e.basis1,z(e)))>1e-6&&c().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,i.al)(z(e),e.origin)-e.plane[3])>1e-6&&c().warn(t,"Plane offset is not consistent with plane origin")}function j(e,t,r,i){const n=z(e);(0,s.P)(n,t.direction,t.origin,r),(0,s.P)((0,s.O)(r),n,t.origin,i)}const q={plane:(0,s.M)(),origin:(0,i.aq)(0,0,0),basis1:(0,i.aq)(1,0,0),basis2:(0,i.aq)(0,1,0)},k=new n.s(s.M),$=new n.s(a.v),Y=(0,i.ap)(),X=new n.s((()=>u())),Z=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],J=(0,o.e)(),K=(0,o.e)(),Q=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:d,altitudeAt:P,axisAt:N,cameraFrustumCoverage:A,closestPoint:w,closestPointOnSilhouette:E,copy:f,copyWithoutVerify:m,create:u,distance:y,distance2:O,distanceToSilhouette:I,elevate:g,equals:D,extrusionContainsPoint:R,fromAABoundingRect:x,fromValues:p,getExtent:b,intersectRay:T,intersectRayClosestSilhouette:S,normal:z,projectPoint:C,projectPointLocal:M,rotate:B,setAltitudeAt:L,setExtent:_,transform:F,up:q,updateUnboundedPlane:v,wrap:h},Symbol.toStringTag,{value:"Module"}))},40102:function(e,t,r){function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{o:function(){return n},r:function(){return o},t:function(){return i}});const a=new Float32Array(2)},76328:function(e,t,r){r.d(t,{o:function(){return o},r:function(){return a},t:function(){return n}});class i{}const n=i;function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}function a(e,t,r=""){return e?t:r}(function(e){function t(e){return Math.round(e).toString()}function r(e){return e.toPrecision(8)}e.int=t,e.float=r})(o||(o={}))},87792:function(e,t,r){r.d(t,{A:function(){return d},M:function(){return c},b:function(){return s},j:function(){return l},v:function(){return a}});var i=r(44444),n=r(38837),o=r(81203);function a(e){return e?{origin:(0,i.dA)(e.origin),vector:(0,i.dA)(e.vector)}:{origin:(0,i.ap)(),vector:(0,i.ap)()}}function s(e,t,r=a()){return(0,i.dF)(r.origin,e),(0,i.dB)(r.vector,t,e),r}function c(e,t){const r=(0,i.dB)(o.c.get(),t,e.origin),n=(0,i.al)(e.vector,r),a=(0,i.al)(e.vector,e.vector),s=(0,i.b0)(n/a,0,1),c=(0,i.dB)(o.c.get(),(0,i.dC)(o.c.get(),e.vector,s),r);return(0,i.al)(c,c)}function l(e,t,r){return d(e,t,0,1,r)}function d(e,t,r,n,a){const{vector:s,origin:c}=e,l=(0,i.dB)(o.c.get(),t,c),d=(0,i.al)(s,l)/(0,i.dD)(s);return(0,i.dC)(a,s,(0,i.b0)(d,r,n)),(0,i.dE)(a,a,e.origin)}new n.s((()=>a()))},64235:function(e,t,r){r.d(t,{B:function(){return A},Q:function(){return $},a:function(){return s},c:function(){return l},f:function(){return h},g:function(){return m},o:function(){return c},p:function(){return f},r:function(){return a}});var i=r(36012),n=r(44444);function o(e,t,r=n.aT.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,o=n.aT.ADD,a=n.aT.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s=o(n.aQ.ZERO,n.aQ.ONE_MINUS_SRC_ALPHA);o(n.aQ.ONE,n.aQ.ZERO),o(n.aQ.ONE,n.aQ.ONE);const c=o(n.aQ.ONE,n.aQ.ONE_MINUS_SRC_ALPHA),l=a(n.aQ.SRC_ALPHA,n.aQ.ONE,n.aQ.ONE_MINUS_SRC_ALPHA,n.aQ.ONE_MINUS_SRC_ALPHA),d={face:n.aR.BACK,mode:n.aS.CCW},u={face:n.aR.FRONT,mode:n.aS.CCW},h=e=>e===i.e.Back?d:e===i.e.Front?u:null,f={zNear:0,zFar:1},m={r:!0,g:!0,b:!0,a:!0};function p(e){return M.intern(e)}function v(e){return y.intern(e)}function g(e){return R.intern(e)}function _(e){return P.intern(e)}function b(e){return D.intern(e)}function x(e){return B.intern(e)}function T(e){return G.intern(e)}function S(e){return U.intern(e)}function E(e){return W.intern(e)}function A(e){return q.intern(e)}class w{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function C(e){return"["+e.join(",")+"]"}const M=new w(O,(e=>({__tag:"Blending",...e})));function O(e){return e?C([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const y=new w(I,(e=>({__tag:"Culling",...e})));function I(e){return e?C([e.face,e.mode]):null}const R=new w(N,(e=>({__tag:"PolygonOffset",...e})));function N(e){return e?C([e.factor,e.units]):null}const P=new w(L,(e=>({__tag:"DepthTest",...e})));function L(e){return e?C([e.func]):null}const D=new w(F,(e=>({__tag:"StencilTest",...e})));function F(e){return e?C([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const B=new w(z,(e=>({__tag:"DepthWrite",...e})));function z(e){return e?C([e.zNear,e.zFar]):null}const G=new w(V,(e=>({__tag:"ColorWrite",...e})));function V(e){return e?C([e.r,e.g,e.b,e.a]):null}const U=new w(H,(e=>({__tag:"StencilWrite",...e})));function H(e){return e?C([e.mask]):null}const W=new w(j,(e=>({__tag:"DrawBuffers",...e})));function j(e){return e?C(e.buffers):null}const q=new w(k,(e=>({blending:p(e.blending),culling:v(e.culling),polygonOffset:g(e.polygonOffset),depthTest:_(e.depthTest),stencilTest:b(e.stencilTest),depthWrite:x(e.depthWrite),colorWrite:T(e.colorWrite),stencilWrite:S(e.stencilWrite),drawBuffers:E(e.drawBuffers)})));function k(e){return e?C([O(e.blending),I(e.culling),N(e.polygonOffset),L(e.depthTest),F(e.stencilTest),z(e.depthWrite),V(e.colorWrite),H(e.stencilWrite),j(e.drawBuffers)]):null}class ${constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}},34550:function(e,t,r){r.d(t,{t:function(){return n}});var i=r(44444);async function n(e,t){const{data:r}=await(0,i.U)(e,{responseType:"image",...t});return r}},38837:function(e,t,r){r.d(t,{$:function(){return H},E:function(){return _},H:function(){return B},I:function(){return P},N:function(){return C},O:function(){return S},T:function(){return E},U:function(){return M},V:function(){return O},_:function(){return b},a:function(){return T},b:function(){return s},f:function(){return Q},i:function(){return X},k:function(){return l},s:function(){return o},v:function(){return d},w:function(){return f}});var i=r(44444),n=(r(10769),r(81203));class o{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.kB)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*a);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,a));e++)this._items.push(this._allocator())}}const a=1024;function s(e){return e?c((0,i.dA)(e.origin),(0,i.dA)(e.direction)):c((0,i.ap)(),(0,i.ap)())}function c(e,t){return{origin:e,direction:t}}function l(e,t){const r=p.get();return r.origin=e,r.direction=t,r}function d(e,t=s()){return h(e.origin,e.direction,t)}function u(e,t,r=s()){return(0,i.dF)(r.origin,e),(0,i.dB)(r.direction,t,e),r}function h(e,t,r=s()){return(0,i.dF)(r.origin,e),(0,i.dF)(r.direction,t),r}function f(e,t){const r=(0,i.am)(n.c.get(),(0,i.ao)(n.c.get(),e.direction),(0,i.dB)(n.c.get(),t,e.origin));return(0,i.al)(r,r)}function m(e,t,r){const n=(0,i.al)(e.direction,(0,i.dB)(r,t,e.origin));return(0,i.dE)(r,e.origin,(0,i.dC)(r,e.direction,n)),r}const p=new o((()=>s()));function v(e,t){const r=(0,i.dS)(e),n=(0,i.kC)(e[2]/r),o=Math.atan2(e[1]/r,e[0]/r);return(0,i.dQ)(t,r,n,o),t}const g=_();function _(){return(0,i.iB)()}const b=i.ak,x=i.ak;function T(e,t){return(0,i.aa)(t,e)}function S(e,t){return(0,i.iV)(e[0],e[1],e[2],t)}function E(e){return e}function A(e){e[0]=e[1]=e[2]=e[3]=0}function w(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e}function C(e){return e[3]}function M(e){return e}function O(e,t,r,n){return(0,i.iV)(e,t,r,n)}function y(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r}function I(e,t,r){return e!==r&&T(e,r),r}function R(e,t){return t}function N(e,t,r){if(null==t||!D(e,t,L))return!1;let{t0:i,t1:n}=L;if((i<0||n<i&&n>0)&&(i=n),i<0)return!1;if(r){const{origin:e,direction:n}=t;r[0]=e[0]+n[0]*i,r[1]=e[1]+n[1]*i,r[2]=e[2]+n[2]*i}return!0}function P(e,t,r){const n=u(t,r);if(!D(e,n,L))return[];const{origin:o,direction:a}=n,{t0:s,t1:c}=L,l=t=>{const r=(0,i.ap)();return(0,i.h9)(r,o,a,t),H(e,r,r)};return Math.abs(s-c)<(0,i.a9)()?[l(s)]:[l(s),l(c)]}const L={t0:0,t1:0};function D(e,t,r){const{origin:i,direction:n}=t,o=F;o[0]=i[0]-e[0],o[1]=i[1]-e[1],o[2]=i[2]-e[2];const a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===a)return!1;const s=2*(n[0]*o[0]+n[1]*o[1]+n[2]*o[2]),c=s*s-4*a*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(c<0)return!1;const l=Math.sqrt(c);return r.t0=(-s-l)/(2*a),r.t1=(-s+l)/(2*a),!0}const F=(0,i.ap)();function B(e,t){return N(e,t,null)}function z(e,t,r){if(N(e,t,r))return r;const o=G(e,t,n.c.get());return(0,i.dE)(r,t.origin,(0,i.dC)(n.c.get(),t.direction,(0,i.dR)(t.origin,o)/(0,i.dS)(t.direction))),r}function G(e,t,r){const o=n.c.get(),a=n.a.get();(0,i.am)(o,t.origin,t.direction);const s=C(e);(0,i.am)(r,o,t.origin),(0,i.dC)(r,r,1/(0,i.dS)(r)*s);const c=j(e,t.origin),l=(0,n.b)(t.origin,r);return(0,i.dY)(a,l+c,o),(0,i.dX)(r,r,a),r}function V(e,t,r,i){const n=C(e),o=n*n,a=t+.5*Math.PI,s=r*r+o-2*Math.cos(a)*r*n,c=Math.sqrt(s),l=s-o;if(l<=0)return.5;const d=Math.sqrt(l),u=Math.acos(d/c)-Math.asin(n/(c/Math.sin(a)));return Math.min(1,(u+.5*i)/i)}function U(e,t,r){return N(e,t,r)?r:(m(t,e,r),H(e,r,r))}function H(e,t,r){const o=(0,i.dB)(n.c.get(),t,e),a=(0,i.dC)(n.c.get(),o,e[3]/(0,i.dS)(o));return(0,i.dE)(r,a,e)}function W(e,t){const r=(0,i.dB)(n.c.get(),t,e),o=(0,i.dD)(r),a=e[3]*e[3];return Math.sqrt(Math.abs(o-a))}function j(e,t){const r=(0,i.dB)(n.c.get(),t,e),o=(0,i.dS)(r),a=C(e),s=a+Math.abs(a-o);return(0,i.dU)(a/s)}const q=(0,i.ap)();function k(e,t,r,n){const o=(0,i.dB)(q,t,e);switch(r){case i.dZ.X:{const e=v(o,q)[2];return(0,i.dQ)(n,-Math.sin(e),Math.cos(e),0)}case i.dZ.Y:{const e=v(o,q),t=e[1],r=e[2],a=Math.sin(t);return(0,i.dQ)(n,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case i.dZ.Z:return(0,i.ao)(n,o);default:return}}function $(e,t){const r=(0,i.dB)(J,t,e);return(0,i.dS)(r)-e[3]}function Y(e,t,r,n){const o=$(e,t),a=k(e,t,i.dZ.Z,J),s=(0,i.dC)(J,a,r-o);return(0,i.dE)(n,t,s)}function X(e,t){const r=(0,i.iY)(e,t),n=C(e);return r<=n*n}function Z(e,t,r=(0,i.iB)()){const n=(0,i.dR)(e,t),o=e[3],a=t[3];return n+a<o?((0,i.aa)(r,e),r):n+o<a?((0,i.aa)(r,t),r):((0,i.iX)(r,e,t,(n+a-o)/(2*n)),r[3]=(n+o+a)/2,r)}const J=(0,i.ap)(),K=_(),Q=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:g,altitudeAt:$,angleToSilhouette:j,axisAt:k,cameraFrustumCoverage:V,clear:A,closestPoint:U,closestPointOnSilhouette:G,containsPoint:X,copy:T,create:_,distanceToSilhouette:W,elevate:y,equals:x,exactEquals:b,fromCenterAndRadius:S,fromRadius:w,fromValues:O,getCenter:M,getExtent:R,getRadius:C,intersectLine:P,intersectRay:N,intersectRayClosestSilhouette:z,intersectsRay:B,projectPoint:H,setAltitudeAt:Y,setExtent:I,tmpSphere:K,union:Z,wrap:E},Symbol.toStringTag,{value:"Module"}))},30726:function(e,t,r){r.d(t,{S:function(){return c},v:function(){return s}});var i=r(38837),n=r(44444),o=r(87792);r(81203);function a(e){return e?{p0:(0,n.dA)(e.p0),p1:(0,n.dA)(e.p1),p2:(0,n.dA)(e.p2)}:{p0:(0,n.ap)(),p1:(0,n.ap)(),p2:(0,n.ap)()}}function s(e,t,r){const i=t[0]-e[0],n=t[1]-e[1],o=r[0]-e[0],a=r[1]-e[1];return.5*Math.abs(i*a-n*o)}function c(e,t,r){return(0,n.dB)(l,t,e),(0,n.dB)(d,r,e),.5*(0,n.dS)((0,n.am)(l,l,d))}new i.s(o.v),new i.s((()=>a()));const l=(0,n.ap)(),d=(0,n.ap)()}}]);
//# sourceMappingURL=9302.856b1dd5.js.map
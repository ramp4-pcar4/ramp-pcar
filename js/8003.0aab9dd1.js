"use strict";(self["webpackChunkramp_website"]=self["webpackChunkramp_website"]||[]).push([[8003],{1903:function(e,t,r){r.d(t,{o:function(){return n}});const n=.003913894324853229},45160:function(e,t,r){r.d(t,{$:function(){return Yr},A:function(){return k},B:function(){return _o},C:function(){return bi},D:function(){return Vt},E:function(){return yt},F:function(){return wn},G:function(){return Ve},H:function(){return bt},I:function(){return Lt},J:function(){return Ee},K:function(){return Te},L:function(){return _e},M:function(){return Pe},N:function(){return Ln},O:function(){return Q},P:function(){return $e},Q:function(){return uo},R:function(){return fo},S:function(){return vt},T:function(){return Ce},U:function(){return Mn},V:function(){return Ae},W:function(){return le},X:function(){return he},Y:function(){return de},Z:function(){return pe},_:function(){return Gt},a:function(){return Io},a0:function(){return Jr},a1:function(){return Se},a2:function(){return D},a3:function(){return Qi},a4:function(){return eo},a5:function(){return ro},a6:function(){return Yi},a7:function(){return Zi},a8:function(){return Ki},a9:function(){return io},aa:function(){return Er},ab:function(){return zr},ac:function(){return Gr},ad:function(){return In},ae:function(){return po},b:function(){return Ge},c:function(){return R},d:function(){return P},e:function(){return be},f:function(){return K},g:function(){return j},h:function(){return ve},i:function(){return Tt},j:function(){return st},k:function(){return at},l:function(){return wt},m:function(){return G},n:function(){return Be},o:function(){return No},p:function(){return Ot},q:function(){return ut},r:function(){return ee},s:function(){return Ue},t:function(){return ze},u:function(){return At},v:function(){return ln},w:function(){return dt},x:function(){return xn},y:function(){return Pt},z:function(){return dr}});var n=r(98503),i=r(50306),o=r(36012),a=r(41470),s=r(30),c=r(93942),l=r(92157),u=r(56707),d=r(85490),h=r(38097),f=r(49329),m=r(76328),p=r(71807),g=r(55334),v=r(1903),_=(r(58390),r(31178)),x=r(95229),T=r(69852),b=r(10769),A=r(74362),S=r(77703),E=r(77678),w=r(98256),C=r(83448),M=r(40102),O=r(90211),y=(r(64131),r(39967)),I=r(69539);r(85502);function R(e,t=!1){return e<=n.c0?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function N(e){e.vertex.code.add(m.o`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${m.o.int(h.n.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${m.o.int(h.n.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${m.o.int(h.n.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${m.o.int(h.n.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let P=class{constructor(e,t,r,n,i=null){if(this.name=e,this.type=t,this.arraySize=i,this.bind={[g.a.Pass]:null,[g.a.Draw]:null},n)switch(r){case g.a.Pass:this.bind[g.a.Pass]=n;break;case g.a.Draw:this.bind[g.a.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},L=class extends P{constructor(e,t){super(e,"sampler2D",g.a.Draw,((r,n,i)=>r.bindTexture(e,t(n,i))))}};function D(){return!!(0,n.a$)("enable-feature:objectAndLayerId-rendering")}function F({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(m.o`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(m.o`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let B=class extends P{constructor(e,t){super(e,"vec3",g.a.Draw,((r,n,i,o)=>r.setUniform3fv(e,t(n,i,o))))}},z=class extends P{constructor(e,t){super(e,"vec3",g.a.Pass,((r,n,i)=>r.setUniform3fv(e,t(n,i))))}},G=class extends P{constructor(e,t){super(e,"float",g.a.Pass,((r,n,i)=>r.setUniform1f(e,t(n,i))))}},U=class extends P{constructor(e,t){super(e,"mat3",g.a.Draw,((r,n,i)=>r.setUniformMatrix3fv(e,t(n,i))))}},V=class extends P{constructor(e,t){super(e,"mat3",g.a.Pass,((r,n,i)=>r.setUniformMatrix3fv(e,t(n,i))))}},H=class extends P{constructor(e,t){super(e,"mat4",g.a.Pass,((r,n,i)=>r.setUniformMatrix4fv(e,t(n,i))))}},W=class extends n.aD{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,n.k)([(0,n.o)()],W.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,n.k)([(0,n.o)()],W.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,n.k)([(0,n.o)()],W.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,n.k)([(0,n.o)()],W.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,n.k)([(0,n.o)()],W.prototype,"LABELS_SHOW_BORDER",void 0),(0,n.k)([(0,n.o)()],W.prototype,"TEXT_SHOW_BASELINE",void 0),(0,n.k)([(0,n.o)()],W.prototype,"TEXT_SHOW_BORDER",void 0),(0,n.k)([(0,n.o)()],W.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,n.k)([(0,n.o)()],W.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,n.k)([(0,n.o)()],W.prototype,"SHOW_POI",void 0),(0,n.k)([(0,n.o)()],W.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,n.k)([(0,n.o)()],W.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,n.k)([(0,n.o)()],W.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,n.k)([(0,n.o)()],W.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,n.k)([(0,n.o)()],W.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,n.k)([(0,n.o)()],W.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,n.k)([(0,n.o)()],W.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,n.k)([(0,n.o)()],W.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,n.k)([(0,n.o)()],W.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,n.k)([(0,n.o)()],W.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,n.k)([(0,n.o)()],W.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,n.k)([(0,n.o)()],W.prototype,"LINE_WIREFRAMES",void 0),W=(0,n.k)([(0,n.A)("esri.views.3d.support.debugFlags")],W);const j=new W;var k;function q(e){e.attributes.add(p.e.POSITION,"vec3"),e.vertex.code.add(m.o`vec3 positionModel() { return position; }`)}function $(e,t){e.include(q);const r=e.vertex;r.include(F,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new z("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new z("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new V("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new H("transformProjFromView",(e=>e.transformProjFromView)),new U("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(m.o`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(m.o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?m.o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:m.o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new z("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(m.o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(m.o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.HUD_MATERIAL=12]="HUD_MATERIAL",e[e.LABEL_MATERIAL=13]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=14]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",e[e.DRAPED_WATER=17]="DRAPED_WATER",e[e.VOXEL=18]="VOXEL",e[e.MAX_SLOTS=19]="MAX_SLOTS"})(k||(k={}));let Y=class extends m.t{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.aA)(),this.transformWorldFromViewTL=(0,n.aA)(),this.transformViewFromCameraRelativeRS=(0,b.e)(),this.transformProjFromView=(0,S.e)()}},X=class extends m.t{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,b.e)(),this.transformWorldFromModelTH=(0,n.aA)(),this.transformWorldFromModelTL=(0,n.aA)()}};function J(e,t){switch(t.normalType){case h.a.Attribute:case h.a.Compressed:e.include(h.t,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new U("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new V("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(m.o`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case h.a.ScreenDerivative:e.vertex.code.add(m.o`void forwardNormal() {}`);break;default:(0,f.n)(t.normalType);case h.a.COUNT:}}let Z=class extends Y{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,b.e)()}},K=class extends X{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,b.e)(),this.toMapSpace=(0,C.n)()}};const Q=new Map([[p.e.POSITION,0],[p.e.NORMAL,1],[p.e.NORMALCOMPRESSED,1],[p.e.UV0,2],[p.e.COLOR,3],[p.e.COLORFEATUREATTRIBUTE,3],[p.e.SIZE,4],[p.e.TANGENT,4],[p.e.CENTEROFFSETANDDISTANCE,5],[p.e.SYMBOLCOLOR,5],[p.e.FEATUREATTRIBUTE,6],[p.e.INSTANCEFEATUREATTRIBUTE,6],[p.e.INSTANCECOLOR,7],[p.e.OBJECTANDLAYERIDCOLOR,7],[p.e.INSTANCEOBJECTANDLAYERIDCOLOR,7],[p.e.ROTATION,8],[p.e.INSTANCEMODEL,8],[p.e.INSTANCEMODELNORMAL,12],[p.e.INSTANCEMODELORIGINHI,11],[p.e.INSTANCEMODELORIGINLO,15]]);let ee=class{constructor(){this.id=(0,n.fH)()}},te=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,n.aA)(),this._tmpMbs=(0,_.E)(),this._tmpObb=new E.I,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,l.r)(e)}applyToVertex(e,t,r){const n=(0,l.o)(oe,e,t,r),i=(0,l.o)(ae,e,t,r+this.componentLocalOriginLength),o=this._totalOffset/(0,l.r)(i);return(0,l.q)(this._tmpVertex,n,i,o),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],n=e[1],i=e[2]+t,o=e[3],a=e[4],s=e[5]+t,c=Math.abs(r),l=Math.abs(n),u=Math.abs(i),d=Math.abs(o),h=Math.abs(a),f=Math.abs(s),m=.5*(1+Math.sign(r*o))*Math.min(c,d),p=.5*(1+Math.sign(n*a))*Math.min(l,h),g=.5*(1+Math.sign(i*s))*Math.min(u,f),v=Math.max(c,d),_=Math.max(l,h),x=Math.max(u,f),T=Math.sqrt(m*m+p*p+g*g),b=Math.sign(c+r),A=Math.sign(l+n),S=Math.sign(u+i),E=Math.sign(d+o),w=Math.sign(h+a),C=Math.sign(f+s),M=this._totalOffset;if(T<M)return e[0]-=(1-b)*M,e[1]-=(1-A)*M,e[2]-=(1-S)*M,e[3]+=E*M,e[4]+=w*M,e[5]+=C*M,e;const O=M/Math.sqrt(v*v+_*_+x*x),y=M/T,I=y-O,R=-I;return e[0]+=r*(b*R+y),e[1]+=n*(A*R+y),e[2]+=i*(S*R+y),e[3]+=o*(E*I+O),e[4]+=a*(w*I+O),e[5]+=s*(C*I+O),e}applyToMbs(e){const t=(0,l.r)((0,_.U)(e)),r=this._totalOffset/t;return(0,l.q)((0,_.U)(this._tmpMbs),(0,_.U)(e),(0,_.U)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,E.L)(e,this._totalOffset,this._totalOffset,u.l.Global,this._tmpObb),this._tmpObb}},re=class{constructor(e=0){this.offset=e,this.sphere=(0,_.E)(),this.tmpVertex=(0,n.aA)()}applyToVertex(e,t,r){const n=this.objectTransform.transform,i=(0,l.o)(oe,e,t,r),o=(0,l.E)(i,i,n),a=this.offset/(0,l.r)(o);(0,l.q)(o,o,o,a);const s=this.objectTransform.inverse;return(0,l.E)(this.tmpVertex,o,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,l.r)(e);(0,l.q)(e,e,e,r);const n=this.offset/(0,l.r)(t);(0,l.q)(t,t,t,n)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,l.r)((0,_.U)(e)),r=this.offset/t;return(0,l.q)((0,_.U)(this.sphere),(0,_.U)(e),(0,_.U)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};const ne=new re;function ie(e){return null!=e?(ne.offset=e,ne):null}new te;const oe=(0,n.aA)(),ae=(0,n.aA)();function se(e){return Math.abs(e*e*e)}function ce(e,t,r){const n=r.parameters;return me.scale=Math.min(n.divisor/(t-n.offset),1),me.factor=se(e),me}function le(e,t){return(0,n.iK)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function ue(e,t,r){const n=ce(e,t,r);return n.minScaleFactor=0,le(1,n)}function de(e,t,r,n){n.scale=ue(e,t,r),n.factor=0,n.minScaleFactor=r.minScaleFactor}function he(e,t,r=[0,0]){const n=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*n,r[1]=e[1]*n,r}function fe(e,t,r,n){return le(e,ce(t,r,n))}const me={scale:0,factor:0,minScaleFactor:0};function pe(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;null!=o&&(a=fe(a,i,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.aP)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function ge(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(Array.isArray(o)?Array.isArray(e[i])&&(0,n.cZ)(o,e[i])||(e[i]=o.slice(),r=!0):e[i]!==o&&(r=!0,e[i]=o))}return r}const ve={multiply:1,ignore:2,replace:3,tint:4};let _e=class{constructor(e,t){this._module=e,this._load=t}get(){return this._module}async reload(){return this._module=await this._load(),this._module}},xe=class{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new n.bX({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,s.b)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}},Te=class{constructor(e,t,r,i,o=Q){this.release=i,this.locations=o,this.primitiveType=a.E.TRIANGLES,this.key=t.key,this._program=new xe(e.rctx,r.get().build(t),o),this._pipeline=this.initializePipeline(t),this.reload=async i=>{if(i&&await r.reload(),!this.key.equals(t.key))throw new Error("Configuration was changed after construction, cannot reload shader");(0,n.cF)(this._program),this._program=new xe(e.rctx,r.get().build(t),o),this._pipeline=this.initializePipeline(t)}}destroy(){this._program=(0,n.cF)(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,t){return this._pipeline}initializePipeline(e){return(0,x.B)({blending:x.o,colorWrite:x.g})}};var be;(function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"})(be||(be={}));let Ae=class extends ee{constructor(e,t){super(),this.type=be.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=Q,this._pp0=(0,n.cp)(0,0,1),this._pp1=(0,n.cp)(0,0,0),this._parameters=new t,ge(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){ge(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,r,n,i,o){return this._pp0[0]=this._pp1[0]=n[0],this._pp0[1]=this._pp1[1]=n[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}};var Se,Ee;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(Se||(Se={})),function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"}(Ee||(Ee={}));const we=(0,x.r)(a.R.ONE,a.R.ZERO,a.R.ONE,a.R.ONE_MINUS_SRC_ALPHA);function Ce(e){return e===Ee.FrontFace?null:we}function Me(e){switch(e){case Ee.NONE:return x.c;case Ee.ColorAlpha:return we;case Ee.FrontFace:case Ee.COUNT:return null}}function Oe(e){if(e.draped)return null;switch(e.oitPass){case Ee.NONE:case Ee.FrontFace:return e.writeDepth?x.p:null;case Ee.ColorAlpha:case Ee.COUNT:return null}}const ye=5e5,Ie={factor:-1,units:-2};function Re(e){return e?Ie:null}function Ne(e,t=a.O.LESS){return e===Ee.NONE||e===Ee.FrontFace?t:a.O.LEQUAL}function Pe(e,t){const r=(0,h.S)(t);return e===Ee.ColorAlpha?r?{buffers:[a.X.COLOR_ATTACHMENT0,a.X.COLOR_ATTACHMENT1,a.X.COLOR_ATTACHMENT2]}:{buffers:[a.X.COLOR_ATTACHMENT0,a.X.COLOR_ATTACHMENT1]}:r?{buffers:[a.X.COLOR_ATTACHMENT0,a.X.COLOR_ATTACHMENT1]}:null}a.O.LESS,a.O.ALWAYS;const Le={mask:255},De={function:{func:a.O.ALWAYS,ref:o.s.OutlineVisualElementMask,mask:o.s.OutlineVisualElementMask},operation:{fail:a.I.KEEP,zFail:a.I.KEEP,zPass:a.I.ZERO}},Fe={function:{func:a.O.ALWAYS,ref:o.s.OutlineVisualElementMask,mask:o.s.OutlineVisualElementMask},operation:{fail:a.I.KEEP,zFail:a.I.KEEP,zPass:a.I.REPLACE}};function Be({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:a,occlusionTexture:s}){return null==e&&null==t&&null==o&&(null==a||(0,l.H)(a,n.fI))&&null==s&&(null==i||1===i)&&(null==r||1===r)}a.O.EQUAL,o.s.OutlineVisualElementMask,o.s.OutlineVisualElementMask,a.I.KEEP,a.I.KEEP,a.I.KEEP,a.O.NOTEQUAL,o.s.OutlineVisualElementMask,o.s.OutlineVisualElementMask,a.I.KEEP,a.I.KEEP,a.I.KEEP;const ze=(0,n.fK)(1,1,.5),Ge=(0,n.fK)(0,.6,.2),Ue=(0,n.fK)(0,1,.2);let Ve=class extends P{constructor(e,t){super(e,"vec2",g.a.Pass,((r,n,i)=>r.setUniform2fv(e,t(n,i))))}};function He(e){e.varyings.add("linearDepth","float")}function We(e){e.vertex.uniforms.add(new Ve("nearFar",((e,t)=>t.camera.nearFar)))}function je(e){e.vertex.code.add(m.o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ke(e,t){const{vertex:r}=e;switch(t.output){case h.b.Color:case h.b.ColorEmission:if(t.receiveShadows)return He(e),void r.code.add(m.o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case h.b.Shadow:case h.b.ShadowHighlight:case h.b.ShadowExcludeHighlight:case h.b.ViewshedShadow:return e.include($,t),He(e),We(e),je(e),void r.code.add(m.o`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(m.o`void forwardLinearDepth() {}`)}function qe(e){e.vertex.code.add(m.o`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function $e(e,t){Ye(e,t,new B("slicePlaneOrigin",((e,r)=>Ke(t,e,r))),new B("slicePlaneBasis1",((e,r)=>Qe(t,e,r,r.slicePlane?.basis1))),new B("slicePlaneBasis2",((e,r)=>Qe(t,e,r,r.slicePlane?.basis2))))}function Ye(e,t,...r){if(!t.hasSlicePlane){const r=m.o`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}const n=m.o`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=m.o`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,o=t.hasSliceHighlight?m.o`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:m.o`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r).code.add(n),e.fragment.uniforms.add(...r).code.add(n),e.fragment.code.add(o)}function Xe(e,t,r){return e.instancedDoublePrecision?(0,l.o)(et,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Je(e,t){return null!=e?(0,l.c)(tt,t.origin,e):t.origin}function Ze(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,A.i)(nt,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function Ke(e,t,r){if(null==r.slicePlane)return n.fI;const i=Xe(e,t,r),o=Je(i,r.slicePlane),a=Ze(e,i,r);return null!=a?(0,l.E)(tt,o,a):o}function Qe(e,t,r,i){if(null==i||null==r.slicePlane)return n.fI;const o=Xe(e,t,r),a=Je(o,r.slicePlane),s=Ze(e,o,r);return null!=s?((0,l.u)(rt,i,a),(0,l.E)(tt,a,s),(0,l.E)(rt,rt,s),(0,l.c)(rt,rt,tt)):i}const et=(0,n.aA)(),tt=(0,n.aA)(),rt=(0,n.aA)(),nt=(0,S.e)();function it(e){je(e),e.vertex.code.add(m.o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(m.o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let ot=class extends P{constructor(e,t){super(e,"mat4",g.a.Draw,((r,n,i)=>r.setUniformMatrix4fv(e,t(n,i))))}};function at(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",n.fI):e.uniforms.add(new B("cameraPosition",((e,t)=>(0,l.o)(lt,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function st(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new H("proj",((e,t)=>t.camera.projectionMatrix)),new ot("view",((e,t)=>(0,A.i)(ct,t.camera.viewMatrix,e.origin))),new B("localOrigin",(e=>e.origin)));const r=e=>(0,l.o)(lt,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new H("proj",((e,t)=>t.camera.projectionMatrix)),new H("view",((e,t)=>(0,A.i)(ct,t.camera.viewMatrix,r(t)))),new z("localOrigin",((e,t)=>r(t))))}const ct=(0,S.e)(),lt=(0,n.aA)();function ut(e){e.uniforms.add(new H("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}function dt(e){e.uniforms.add(new G("pixelRatio",((e,t)=>t.camera.pixelRatio/t.overlayStretch)))}const ht=(0,b.e)();function ft(e,t){const r=t.hasModelTransformation,n=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new H("model",(e=>e.modelTransformation??S.o))),e.vertex.uniforms.add(new V("normalLocalOriginFromModel",(e=>((0,T.j)(ht,e.modelTransformation??S.o),ht))))),t.instanced&&n&&(e.attributes.add(p.e.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.e.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.e.INSTANCEMODEL,"mat3"),e.attributes.add(p.e.INSTANCEMODELNORMAL,"mat3"));const i=e.vertex;n&&(i.include(F,t),i.uniforms.add(new B("viewOriginHi",((e,t)=>(0,M.o)((0,l.o)(mt,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),mt))),new B("viewOriginLo",((e,t)=>(0,M.r)((0,l.o)(mt,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),mt))))),i.code.add(m.o`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?n?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":n?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${n?m.o`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(m.o`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?n?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":n?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===h.b.Normal&&(ut(i),i.code.add(m.o`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?n?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":n?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(m.o`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?n?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":n?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const mt=(0,n.aA)();let pt=class extends P{constructor(e,t){super(e,"int",g.a.Pass,((r,n,i)=>r.setUniform1i(e,t(n,i))))}};function gt(e,t){t.hasSymbolColors?(e.include(N),e.attributes.add(p.e.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(m.o`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new pt("colorMixMode",(e=>ve[e.colorMixMode]))),e.vertex.code.add(m.o`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}var vt;function _t(e,t){switch(t.textureCoordinateType){case vt.Default:return e.attributes.add(p.e.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(m.o`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case vt.Compressed:return e.attributes.add(p.e.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(m.o`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case vt.Atlas:return e.attributes.add(p.e.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(p.e.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(m.o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,f.n)(t.textureCoordinateType);case vt.None:return void e.vertex.code.add(m.o`void forwardTextureCoordinates() {}`);case vt.COUNT:return}}function xt(e,t){t.hasVertexColors?(e.attributes.add(p.e.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(m.o`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(m.o`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(m.o`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Tt(e){e.vertex.code.add(m.o`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(m.o`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(m.o`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(m.o`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(m.o`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(m.o`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function bt(e){e.uniforms.add(new z("screenSizePerspective",(e=>St(e.screenSizePerspective))))}function At(e){e.uniforms.add(new z("screenSizePerspectiveAlignment",(e=>St(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function St(e){return(0,l.o)(Et,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(vt||(vt={}));const Et=(0,n.aA)();let wt=class extends P{constructor(e,t){super(e,"vec4",g.a.Pass,((r,n,i)=>r.setUniform4fv(e,t(n,i))))}};function Ct(e,t){const r=e.vertex;t.hasVerticalOffset?(Ot(r),t.hasScreenSizePerspective&&(e.include(Tt),At(r),at(e.vertex,t)),r.code.add(m.o`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?m.o`vec3 worldNormal = normalize(worldPos + localOrigin);`:m.o`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?m.o`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:m.o`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(m.o`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Mt=(0,C.n)();function Ot(e){e.uniforms.add(new wt("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:i}=e.verticalOffset,o=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return(0,O.s)(Mt,i*a,o,r,n)})))}function yt(e,t){if(t.output!==h.b.ObjectAndLayerIdColor)return e.vertex.code.add(m.o`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(m.o`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?p.e.INSTANCEOBJECTANDLAYERIDCOLOR:p.e.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(m.o`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(m.o`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}function It(e){e.code.add(m.o`const float MAX_RGBA4_FLOAT =
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
}`)}function Rt(e,t){switch(t.output){case h.b.Shadow:case h.b.ShadowHighlight:case h.b.ShadowExcludeHighlight:case h.b.ViewshedShadow:e.fragment.include(It),e.fragment.code.add(m.o`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}let Nt=class extends P{constructor(e,t){super(e,"ivec2",g.a.Pass,((r,n,i)=>r.setUniform2iv(e,t(n,i))))}},Pt=class extends P{constructor(e,t){super(e,"sampler2D",g.a.Pass,((r,n,i)=>r.bindTexture(e,t(n,i))))}};function Lt(e,t){const{fragment:r}=e;t.output===h.b.Highlight?(r.uniforms.add(new Pt("depthTexture",((e,t)=>t.mainDepth)),new Pt("highlightTexture",((e,t)=>t.highlightMixTexture)),new pt("highlightLevel",((e,t)=>t.highlightLevel)),new Nt("highlightMixOrigin",((e,t)=>t.highlightMixOrigin))),e.outputs.add("fragHighlight","vec2",0),r.code.add(m.o`vec2 getAccumulatedHighlight() {
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
}`),t.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(m.o`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(m.o`void calculateOcclusionAndOutputHighlight() {}`)}let Dt=class extends P{constructor(e,t,r){super(e,"vec4",g.a.Pass,((r,n,i)=>r.setUniform4fv(e,t(n,i))),r)}},Ft=class extends P{constructor(e,t,r){super(e,"float",g.a.Pass,((r,n,i)=>r.setUniform1fv(e,t(n,i))),r)}};var Bt,zt;function Gt(e,t,r){if(!t.vvSize)return(0,l.o)(e,1,1,1),e;for(let i=0;i<3;++i){const o=t.vvSize.offset[i]+r[0]*t.vvSize.factor[i];e[i]=(0,n.aP)(o,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return e}(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(Bt||(Bt={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(zt||(zt={}));const Ut=8;function Vt(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(p.e.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new z("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new z("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new z("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new z("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new V("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new z("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(m.o`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(m.o`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?m.o`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(m.o`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",Ut),r.uniforms.add(new Ft("vvColorValues",(e=>e.vvColor.values),Ut),new Dt("vvColorColors",(e=>e.vvColor.colors),Ut)),r.code.add(m.o`
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

      ${t.hasVvInstancing?m.o`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(m.o`vec4 vvColor() { return vec4(1.0); }`)}function Ht(e,t){Wt(e,t,new G("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function Wt(e,t,r){const n=e.fragment;switch(t.alphaDiscardMode){case o.i.Blend:e.fragment.code.add(m.o`
        #define discardOrAdjustAlpha(color) { if (color.a < ${m.o.float(v.o)}) { discard; } }
      `);break;case o.i.Opaque:n.code.add(m.o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case o.i.Mask:n.uniforms.add(r).code.add(m.o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case o.i.MaskBlend:n.uniforms.add(r).code.add(m.o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function jt(e,t){const{vertex:r,fragment:n}=e,i=t.hasColorTexture&&t.alphaDiscardMode!==o.i.Opaque,{output:a,normalType:s,hasColorTextureTransform:c}=t;switch(a){case h.b.Depth:st(r,t),e.include(it,t),e.include($e,t),e.include(_t,t),i&&n.uniforms.add(new Pt("tex",(e=>e.texture))),r.main.add(m.o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(Ht,t),n.main.add(m.o`
          discardBySlice(vpos);
          ${(0,m.r)(i,m.o`vec4 texColor = texture(tex, ${c?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case h.b.Shadow:case h.b.ShadowHighlight:case h.b.ShadowExcludeHighlight:case h.b.ViewshedShadow:case h.b.ObjectAndLayerIdColor:st(r,t),e.include(it,t),e.include(_t,t),e.include(Vt,t),e.include(Rt,t),e.include($e,t),e.include(yt,t),We(e),e.varyings.add("depth","float"),i&&n.uniforms.add(new Pt("tex",(e=>e.texture))),r.main.add(m.o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(Ht,t),n.main.add(m.o`
          discardBySlice(vpos);
          ${(0,m.r)(i,m.o`vec4 texColor = texture(tex, ${c?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${a===h.b.ObjectAndLayerIdColor?m.o`outputObjectAndLayerIdColor();`:m.o`outputDepth(depth);`}`);break;case h.b.Normal:{st(r,t),e.include(it,t),e.include(h.t,t),e.include(J,t),e.include(_t,t),e.include(Vt,t),i&&n.uniforms.add(new Pt("tex",(e=>e.texture))),s===h.a.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const o=s===h.a.Attribute||s===h.a.Compressed;r.main.add(m.o`
          vpos = getVertexInLocalOriginSpace();
          ${o?m.o`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:m.o`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include($e,t),e.include(Ht,t),n.main.add(m.o`
          discardBySlice(vpos);
          ${(0,m.r)(i,m.o`vec4 texColor = texture(tex, ${c?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${s===h.a.ScreenDerivative?m.o`vec3 normal = screenDerivativeNormal(vPositionView);`:m.o`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case h.b.Highlight:st(r,t),e.include(it,t),e.include(_t,t),e.include(Vt,t),i&&n.uniforms.add(new Pt("tex",(e=>e.texture))),r.main.add(m.o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include($e,t),e.include(Ht,t),e.include(Lt,t),n.main.add(m.o`
          discardBySlice(vpos);
          ${(0,m.r)(i,m.o`vec4 texColor = texture(tex, ${c?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function kt(e){e.fragment.code.add(m.o`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function qt(e,t){const{textureCoordinateType:r}=t;if(r===vt.None||r===vt.COUNT)return;e.include(_t,t);const n=r===vt.Atlas;n&&e.include(kt),e.fragment.code.add(m.o`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${n?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}function $t(e,t){const r=e.fragment;switch(r.code.add(m.o`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case Yt.None:r.code.add(m.o`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Yt.View:r.code.add(m.o`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Yt.WindingOrder:r.code.add(m.o`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,f.n)(t.doubleSidedMode);case Yt.COUNT:}}var Yt,Xt,Jt,Zt,Kt;function Qt(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(p.e.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===Yt.WindingOrder?r.code.add(m.o`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(m.o`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(m.o`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==vt.None&&(e.include(qt,t),r.uniforms.add(t.bindType===g.a.Pass?new Pt("normalTexture",(e=>e.textureNormal)):new L("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new Ve("scale",(e=>e.scale??y.l))),r.uniforms.add(new V("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??b.o)))),r.code.add(m.o`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(m.o`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(m.o`return tangentSpace * rawNormal;
}`))}(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(Yt||(Yt={})),function(e){e.OPAQUE="opaque-color",e.TRANSPARENT="transparent-color",e.COMPOSITE="composite-color",e.FINAL="final-color"}(Xt||(Xt={})),function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(Jt||(Jt={})),function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(Zt||(Zt={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Kt||(Kt={}));let er=class extends n.aD{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=Xt.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,n.aE)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),n.cR)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new n.s("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===o.a.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,n.k)([(0,n.o)({constructOnly:!0})],er.prototype,"view",void 0),(0,n.k)([(0,n.o)({constructOnly:!0})],er.prototype,"consumes",void 0),(0,n.k)([(0,n.o)()],er.prototype,"produces",void 0),er=(0,n.k)([(0,n.A)("esri.views.3d.webgl.RenderNode")],er);const tr=er,rr=3e5,nr=5e5;function ir(e,t=!0){e.attributes.add(p.e.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(m.o`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?m.o`uv = position * 0.5 + vec2(0.5);`:""}
  `)}function or(e){e.uniforms.add(new Ve("zProjectionMap",((e,t)=>ar(t.camera)))),e.code.add(m.o`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(m.o`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(m.o`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function ar(e){const t=e.projectionMatrix;return(0,I.o)(sr,t[14],t[10])}const sr=(0,y.n)();let cr=class extends P{constructor(e,t){super(e,"vec2",g.a.Draw,((r,n,i,o)=>r.setUniform2fv(e,t(n,i,o))))}};const lr=()=>n.n.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let ur=class{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}},dr=class extends ur{constructor(){super(...arguments),this.vertex=new pr,this.fragment=new pr,this.attributes=new gr,this.varyings=new vr,this.extensions=new _r,this.outputs=new xr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(e),i="vertex"===e?this.vertex:this.fragment,o=i.uniforms.generateSource(),a=i.code.generateSource(),s=i.main.generateSource(),c="vertex"===e?Ar:br,l=i.constants.generateSource(),u=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${c}\n\n${l.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${u.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[g.a.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[g.a.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),n=r.length;return(t,i)=>{for(let o=0;o<n;++o)r[o](e,t,i)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[g.a.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[g.a.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),n=r.length;return(t,i,o)=>{for(let a=0;a<n;++a)r[a](e,o,t,i)}}},hr=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new n.s(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else lr().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}},fr=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new n.s("Shader does not contain main function body.")}},mr=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},pr=class extends ur{constructor(){super(...arguments),this.uniforms=new hr(this),this.main=new fr(this),this.code=new mr(this),this.constants=new Tr(this)}get builder(){return this}},gr=class{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}},vr=class{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,c.s)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,n)=>t.push("vertex"===e?`out ${r} ${n};`:`in ${r} ${n};`))),t}},_r=class e{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(t){const r="vertex"===t?e.ALLOWLIST_VERTEX:e.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>r.includes(e))).map((e=>`#extension ${e} : enable`))}};_r.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],_r.ALLOWLIST_VERTEX=[];let xr=class e{constructor(){this._entries=new Map}add(e,t,r=0){const n=this._entries.get(r);n?(0,c.s)(n.name===e&&n.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(t){if("vertex"===t)return[];0===this._entries.size&&this._entries.set(0,{name:e.DEFAULT_NAME,type:e.DEFAULT_TYPE});const r=new Array;return this._entries.forEach(((e,t)=>r.push(`layout(location = ${t}) out ${e.type} ${e.name};`))),r}};xr.DEFAULT_TYPE="vec4",xr.DEFAULT_NAME="fragColor";let Tr=class e{constructor(e){this._stage=e,this._entries=new Set}add(t,r,n){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=e._numberToFloatStr(n);break;case"int":i=e._numberToIntStr(n);break;case"bool":i=n.toString();break;case"vec2":i=`vec2(${e._numberToFloatStr(n[0])},                            ${e._numberToFloatStr(n[1])})`;break;case"vec3":i=`vec3(${e._numberToFloatStr(n[0])},                            ${e._numberToFloatStr(n[1])},                            ${e._numberToFloatStr(n[2])})`;break;case"vec4":i=`vec4(${e._numberToFloatStr(n[0])},                            ${e._numberToFloatStr(n[1])},                            ${e._numberToFloatStr(n[2])},                            ${e._numberToFloatStr(n[3])})`;break;case"ivec2":i=`ivec2(${e._numberToIntStr(n[0])},                             ${e._numberToIntStr(n[1])})`;break;case"ivec3":i=`ivec3(${e._numberToIntStr(n[0])},                             ${e._numberToIntStr(n[1])},                             ${e._numberToIntStr(n[2])})`;break;case"ivec4":i=`ivec4(${e._numberToIntStr(n[0])},                             ${e._numberToIntStr(n[1])},                             ${e._numberToIntStr(n[2])},                             ${e._numberToIntStr(n[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(n,(t=>e._numberToFloatStr(t))).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const br="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Ar="precision highp float;\nprecision highp sampler2D;",Sr=4;function Er(){const e=new dr,t=e.fragment;e.include(ir);const r=(Sr+1)/2,n=1/(2*r*r);return t.include(or),t.uniforms.add(new Pt("depthMap",(e=>e.depthTexture)),new L("tex",(e=>e.colorTexture)),new cr("blurSize",(e=>e.blurSize)),new G("projScale",((e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(m.o`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${m.o.float(n)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(m.o`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${m.o.int(Sr)}; r <= ${m.o.int(Sr)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const wr=Object.freeze(Object.defineProperty({__proto__:null,build:Er},Symbol.toStringTag,{value:"Module"}));let Cr=class extends Te{constructor(e,t,n){super(e,t,new _e(wr,(()=>Promise.all([r.e(6849),r.e(7113),r.e(6510),r.e(149),r.e(2611),r.e(5850)]).then(r.bind(r,30950)).then((e=>e.S)))),n)}initializePipeline(){return(0,x.B)({colorWrite:x.g})}};const Mr="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Or=class extends m.t{constructor(){super(...arguments),this.projScale=1}},yr=class extends Or{constructor(){super(...arguments),this.intensity=1}},Ir=class extends m.t{},Rr=class extends Ir{constructor(){super(...arguments),this.blurSize=(0,y.n)()}};function Nr(e){e.fragment.uniforms.add(new wt("projInfo",((e,t)=>Pr(t.camera)))),e.fragment.uniforms.add(new Ve("zScale",((e,t)=>Dr(t.camera)))),e.fragment.code.add(m.o`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Pr(e){const t=e.projectionMatrix;return 0===t[11]?(0,O.s)(Lr,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,O.s)(Lr,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const Lr=(0,C.n)();function Dr(e){return 0===e.projectionMatrix[11]?(0,I.o)(Fr,0,1):(0,I.o)(Fr,1,0)}const Fr=(0,y.n)(),Br=16;function zr(){const e=new dr,t=e.fragment;return e.include(ir),e.include(Nr),t.include(or),t.uniforms.add(new G("radius",((e,t)=>Gr(t.camera)))).code.add(m.o`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(m.o`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new Pt("normalMap",(e=>e.normalTexture)),new Pt("depthMap",(e=>e.depthTexture)),new G("projScale",(e=>e.projScale)),new Pt("rnm",(e=>e.noiseTexture)),new Ve("rnmScale",((e,t)=>(0,I.o)(Ur,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new G("intensity",(e=>e.intensity)),new Ve("screenSize",((e,t)=>(0,I.o)(Ur,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(m.o`
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

      for(int i = 0; i < ${m.o.int(Br)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${m.o.int(Br)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function Gr(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Ur=(0,y.n)(),Vr=Object.freeze(Object.defineProperty({__proto__:null,build:zr,getRadius:Gr},Symbol.toStringTag,{value:"Module"}));let Hr=class extends Te{constructor(e,t,n){super(e,t,new _e(Vr,(()=>Promise.all([r.e(6849),r.e(7113),r.e(6510),r.e(149),r.e(2611),r.e(5850)]).then(r.bind(r,30950)).then((e=>e.a)))),n)}initializePipeline(){return(0,x.B)({colorWrite:x.g})}};const Wr=2;let jr=class extends tr{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=Jt.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,n.cP)(0),this._passParameters=new yr,this._drawParameters=new Rr}initialize(){const e=Uint8Array.from(atob(Mr),(e=>e.charCodeAt(0))),t=new s.p;t.wrapMode=a.D.CLAMP_TO_EDGE,t.pixelFormat=a.G.RGB,t.wrapMode=a.D.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new s.m(this.renderingContext,t,e),this.techniques.precompile(Hr),this.techniques.precompile(Cr),this.addHandles((0,n.aE)((()=>this.isEnabled()),(()=>this._enableTime=(0,n.cP)(0))))}destroy(){this._passParameters.noiseTexture=(0,n.cF)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),i=r?.getTexture(),s=r?.getTexture(a.t),c=this.fboCache,l=t.camera,u=l.fullViewport[2],d=l.fullViewport[3],h=Math.round(u/Wr),f=Math.round(d/Wr),m=this.techniques.acquire(Hr),p=this.techniques.acquire(Cr);if(!m.compiled||!p.compiled)return this._enableTime=(0,n.cP)(performance.now()),this.requestRender(o.a.UPDATE),m.release(),p.release(),c.acquire(h,f,Jt.SSAO,Zt.RED);0===this._enableTime&&(this._enableTime=(0,n.cP)(performance.now()));const g=this.renderingContext,v=this.view.qualitySettings.fadeDuration,_=l.relativeElevation,x=(0,n.aP)((nr-_)/(nr-rr),0,1),T=v>0?Math.min(v,performance.now()-this._enableTime)/v:1,b=T*x;this._passParameters.normalTexture=i,this._passParameters.depthTexture=s,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*kr/Gr(l)**6*b;const A=c.acquire(u,d,"ssao input",Zt.RG);g.bindFramebuffer(A.fbo),g.setViewport(0,0,u,d),g.bindTechnique(m,t,this._passParameters,this._drawParameters),g.screen.draw(),m.release();const S=c.acquire(h,f,"ssao blur",Zt.RED);g.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=A.getTexture(),(0,I.o)(this._drawParameters.blurSize,0,Wr/d),g.bindTechnique(p,t,this._passParameters,this._drawParameters),g.setViewport(0,0,h,f),g.screen.draw(),A.release();const E=c.acquire(h,f,Jt.SSAO,Zt.RED);return g.bindFramebuffer(E.fbo),g.setViewport(0,0,u,d),g.setClearColor(1,1,1,0),g.clear(a._.COLOR),this._drawParameters.colorTexture=S.getTexture(),(0,I.o)(this._drawParameters.blurSize,Wr/u,0),g.bindTechnique(p,t,this._passParameters,this._drawParameters),g.setViewport(0,0,h,f),g.screen.draw(),p.release(),g.setViewport4fv(l.fullViewport),S.release(),T<1&&this.requestRender(o.a.UPDATE),E}};(0,n.k)([(0,n.o)()],jr.prototype,"consumes",void 0),(0,n.k)([(0,n.o)()],jr.prototype,"produces",void 0),(0,n.k)([(0,n.o)({constructOnly:!0})],jr.prototype,"techniques",void 0),(0,n.k)([(0,n.o)({constructOnly:!0})],jr.prototype,"isEnabled",void 0),jr=(0,n.k)([(0,n.A)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],jr);const kr=.5;function qr(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new Pt("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/Wr),r.code.add(m.o`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(m.o`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}let $r=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return o.O.LOADED}},Yr=class extends $r{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){super.dispose(),this._texture=(0,n.g1)(this._texture),this._textureNormal=(0,n.g1)(this._textureNormal),this._textureEmissive=(0,n.g1)(this._textureEmissive),this._textureOcclusion=(0,n.g1)(this._textureOcclusion),this._textureMetallicRoughness=(0,n.g1)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?o.O.LOADED:o.O.LOADING}get textureBindParameters(){return new Jr(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,n.g1)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,n.aO)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,n.g1)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}},Xr=class extends m.t{constructor(e=null){super(),this.textureEmissive=e}},Jr=class extends Xr{constructor(e=null,t=null,r=null,n=null,i=null,o,a){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=n,this.textureMetallicRoughness=i,this.scale=o,this.normalTextureTransformMatrix=a}};var Zr;function Kr(e,t){const r=t.pbrMode,n=e.fragment;if(r!==Zr.Schematic&&r!==Zr.Disabled&&r!==Zr.Normal)return void n.code.add(m.o`void applyPBRFactors() {}`);if(r===Zr.Disabled)return void n.code.add(m.o`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===Zr.Schematic)return void n.code.add(m.o`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:o,hasOcclusionTexture:a,hasOcclusionTextureTransform:s,bindType:c}=t;(i||a)&&e.include(qt,t),n.code.add(m.o`vec3 mrr;
float occlusion;`),i&&n.uniforms.add(c===g.a.Pass?new Pt("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new L("texMetallicRoughness",(e=>e.textureMetallicRoughness))),a&&n.uniforms.add(c===g.a.Pass?new Pt("texOcclusion",(e=>e.textureOcclusion)):new L("texOcclusion",(e=>e.textureOcclusion))),n.uniforms.add(c===g.a.Pass?new z("mrrFactors",(e=>e.mrrFactors)):new B("mrrFactors",(e=>e.mrrFactors))),n.code.add(m.o`
    ${(0,m.r)(i,m.o`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,m.r)(a,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${a?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,m.r)(i,`applyMetallicRoughness(${o?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,m.r)(a,`applyOcclusion(${s?"occlusionUV":"vuv0"});`)}
    }
  `)}function Qr(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add(new z("lightingAmbientSH0",((e,t)=>(0,l.o)(en,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(m.o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===n?(r.uniforms.add(new wt("lightingAmbientSH_R",((e,t)=>(0,O.s)(tn,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new wt("lightingAmbientSH_G",((e,t)=>(0,O.s)(tn,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new wt("lightingAmbientSH_B",((e,t)=>(0,O.s)(tn,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(m.o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===n&&(r.uniforms.add(new z("lightingAmbientSH0",((e,t)=>(0,l.o)(en,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new wt("lightingAmbientSH_R1",((e,t)=>(0,O.s)(tn,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new wt("lightingAmbientSH_G1",((e,t)=>(0,O.s)(tn,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new wt("lightingAmbientSH_B1",((e,t)=>(0,O.s)(tn,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new wt("lightingAmbientSH_R2",((e,t)=>(0,O.s)(tn,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new wt("lightingAmbientSH_G2",((e,t)=>(0,O.s)(tn,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new wt("lightingAmbientSH_B2",((e,t)=>(0,O.s)(tn,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(m.o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==Zr.Normal&&t.pbrMode!==Zr.Schematic||r.code.add(m.o`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(Zr||(Zr={}));const en=(0,n.aA)(),tn=(0,C.n)();function rn(e){e.uniforms.add(new z("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function nn(e){e.uniforms.add(new z("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function on(e){rn(e.fragment),nn(e.fragment),e.fragment.code.add(m.o`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function an(e){const t=e.fragment.code;t.add(m.o`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(m.o`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(m.o`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function sn(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}function cn(e,t){const r=e.fragment.code;e.include(sn),t.pbrMode!==Zr.Normal&&t.pbrMode!==Zr.Schematic&&t.pbrMode!==Zr.Simplified&&t.pbrMode!==Zr.TerrainWithWater||(r.add(m.o`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(m.o`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==Zr.Normal&&t.pbrMode!==Zr.Schematic||(e.include(an),r.add(m.o`struct PBRShadingInfo
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
};`),r.add(m.o`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(m.o`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(m.o`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let ln=class extends P{constructor(e,t){super(e,"bool",g.a.Pass,((r,n,i)=>r.setUniform1b(e,t(n,i))))}};const un=.4;function dn(e){e.constants.add("ambientBoostFactor","float",un)}function hn(e){e.uniforms.add(new G("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function fn(e,t){const r=e.fragment;switch(e.include(qr,t),t.pbrMode!==Zr.Disabled&&e.include(cn,t),e.include(Qr,t),e.include(sn),r.code.add(m.o`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===Zr.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),dn(r),hn(r),rn(r),r.code.add(m.o`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?m.o`normalize(vPosWorld)`:m.o`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),nn(r),r.code.add(m.o`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case Zr.Disabled:case Zr.WaterOnIntegratedMesh:case Zr.Water:e.include(on),r.code.add(m.o`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case Zr.Normal:case Zr.Schematic:r.code.add(m.o`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(m.o`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new ln("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(m.o`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new G("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new G("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(m.o`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(m.o`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==Zr.Schematic||t.hasColorTexture?m.o`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:m.o`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case Zr.Simplified:case Zr.TerrainWithWater:rn(r),nn(r),r.code.add(m.o`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,f.n)(t.pbrMode);case Zr.COUNT:}}let mn=class extends P{constructor(e,t,r){super(e,"mat4",g.a.Draw,((r,n,i,o)=>r.setUniformMatrix4fv(e,t(n,i,o))),r)}},pn=class extends P{constructor(e,t,r){super(e,"mat4",g.a.Pass,((r,n,i)=>r.setUniformMatrix4fv(e,t(n,i))),r)}};function gn(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new pn("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),_n(e))}function vn(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new mn("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),_n(e))}function _n(e){const t=e.fragment;t.include(It),t.uniforms.add(new Pt("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new pt("numCascades",((e,t)=>t.shadowMap.numCascades)),new wt("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(m.o`int chooseCascade(float depth, out mat4 mat) {
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
}`)}function xn(e,{occlusionPass:t,terrainDepthTest:r,cullAboveTerrain:n}){r?(e.fragment.include(or),e.fragment.uniforms.add(new Pt("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))).code.add(m.o`
   ${t?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${t?m.o`return fragmentDepth < linearDepth && depth < 1.0;`:m.o`if(fragmentDepth ${n?">":"<="} linearDepth) discard;`}
    }`)):t?e.fragment.code.add(m.o`#define terrainDepthTest(fragmentDepth) false`):e.fragment.code.add(m.o`#define terrainDepthTest(fragmentDepth) {}`)}function Tn(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new V("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??b.o))).code.add(m.o`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(m.o`void forwardColorUV(){}`)}function bn(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==vt.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new V("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??b.o))).code.add(m.o`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(m.o`void forwardNormalUV(){}`)}function An(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==vt.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new V("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??b.o))).code.add(m.o`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(m.o`void forwardEmissiveUV(){}`)}function Sn(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==vt.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new V("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??b.o))).code.add(m.o`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(m.o`void forwardOcclusionUV(){}`)}function En(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==vt.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new V("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??b.o))).code.add(m.o`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(m.o`void forwardMetallicRoughnessUV(){}`)}function wn(e){e.code.add(m.o`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function Cn(e){e.include(wn),e.code.add(m.o`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${m.o.int(h.n.Multiply)}) {
        return allMixed;
      }
      if (mode == ${m.o.int(h.n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${m.o.int(h.n.Replace)}) {
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

      if (mode == ${m.o.int(h.n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${m.o.int(h.n.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}var Mn;function On(e,t){if(!(0,h.u)(t.output))return;const{emissionSource:r,hasEmissiveTextureTransform:n,bindType:i}=t,o=r===Mn.Texture;o&&(e.include(qt,t),e.fragment.uniforms.add(i===g.a.Pass?new Pt("texEmission",(e=>e.textureEmissive)):new L("texEmission",(e=>e.textureEmissive))));const a=r===Mn.Value||o;a&&e.fragment.uniforms.add(i===g.a.Pass?new z("emissionFactor",(e=>e.emissiveFactor)):new B("emissionFactor",(e=>e.emissiveFactor))),e.fragment.code.add(m.o`
    vec4 getEmissions() {
      vec4 emissions = ${a?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${(0,m.r)(o,`emissions *= textureLookup(texEmission, ${n?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}function yn(e,t){e.include(Lt,t),e.include(On,t),e.fragment.include(wn);const r=t.output===h.b.ObjectAndLayerIdColor,n=(0,h.S)(t.output),i=(0,h.u)(t.output)&&t.oitPass===Ee.ColorAlpha,o=(0,h.u)(t.output)&&t.oitPass!==Ee.ColorAlpha,a=t.discardInvisibleFragments;let s=0;(o||n||i)&&e.outputs.add("fragColor","vec4",s++),n&&e.outputs.add("fragEmission","vec4",s++),i&&e.outputs.add("fragAlpha","float",s++),e.fragment.code.add(m.o`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${(0,m.r)(r,m.o`finalColor.a = 1.0;`)}

      ${(0,m.r)(a,m.o`if (finalColor.a < ${m.o.float(v.o)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${(0,m.r)(i,m.o`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,m.r)(o,"fragColor = finalColor;")}
      ${(0,m.r)(n,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${(0,m.r)(r,"outputObjectAndLayerIdColor();")}
    }
  `)}function In(e){const t=new dr,{vertex:r,fragment:n,varyings:i}=t,{output:o,normalType:a,offsetBackfaces:s,instancedColor:c,spherical:l,receiveShadows:u,snowCover:d,pbrMode:f,textureAlphaPremultiplied:g,instancedDoublePrecision:_,hasVertexColors:x,hasVertexTangents:T,hasColorTexture:b,hasNormalTexture:A,hasNormalTextureTransform:S,hasColorTextureTransform:E}=e;if(st(r,e),t.include(q),i.add("vpos","vec3"),t.include(Vt,e),t.include(ft,e),t.include(Ct,e),t.include(Tn,e),!(0,h.u)(o))return t.include(jt,e),t;t.include(bn,e),t.include(An,e),t.include(Sn,e),t.include(En,e),at(r,e),t.include(h.t,e),t.include(it,e);const w=a===h.a.Attribute||a===h.a.Compressed;return w&&s&&t.include(qe),t.include(Qt,e),t.include(J,e),c&&t.attributes.add(p.e.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),t.include(_t,e),t.include(ke,e),t.include(gt,e),t.include(xt,e),r.uniforms.add(new wt("externalColor",(e=>e.externalColor))),i.add("vcolorExt","vec4"),e.terrainDepthTest&&i.add("depth","float"),r.main.add(m.o`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,m.r)(c,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${m.o.float(v.o)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${(0,m.r)(w,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${(0,m.r)(T,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${(0,m.r)(w&&s,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${(0,m.r)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(fn,e),t.include(qr,e),t.include(Ht,e),t.include(_?gn:vn,e),t.include(xn,e),t.include($e,e),t.include(yn,e),at(n,e),n.uniforms.add(r.uniforms.get("localOrigin"),new z("ambient",(e=>e.ambient)),new z("diffuse",(e=>e.diffuse)),new G("opacity",(e=>e.opacity)),new G("layerOpacity",(e=>e.layerOpacity))),b&&n.uniforms.add(new Pt("tex",(e=>e.texture))),t.include(Kr,e),t.include(cn,e),n.include(Cn),t.include($t,e),dn(n),hn(n),nn(n),n.main.add(m.o`
      discardBySlice(vpos);
      ${(0,m.r)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${b?m.o`
              vec4 texColor = texture(tex, ${E?"colorUV":"vuv0"});
              ${(0,m.r)(g,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:m.o`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${a===h.a.ScreenDerivative?m.o`vec3 normal = screenDerivativeNormal(vPositionLocal);`:m.o`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${u?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,m.r)(l,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${(0,m.r)(x,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${(0,m.r)(x,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${A?`mat3 tangentSpace = computeTangentSpace(${T?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${S?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${l?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${(0,m.r)(d,m.o`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${f===Zr.Normal||f===Zr.Schematic?m.o`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${(0,m.r)(d,m.o`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${d?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:m.o`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}(function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT"})(Mn||(Mn={}));const Rn=Object.freeze(Object.defineProperty({__proto__:null,build:In},Symbol.toStringTag,{value:"Module"}));let Nn,Pn=class extends Z{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ze,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=o.e.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=n.fI,this.instancedDoublePrecision=!1,this.normalType=h.a.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,n.fK)(.2,.2,.2),this.diffuse=(0,n.fK)(.8,.8,.8),this.externalColor=(0,C.r)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,n.aA)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=o.n.Less,this.textureAlphaMode=o.i.Blend,this.textureAlphaCutoff=v.o,this.textureAlphaPremultiplied=!1,this.renderOccluded=Se.Occlude,this.isDecoration=!1}},Ln=class extends K{constructor(){super(...arguments),this.origin=(0,n.aA)(),this.slicePlaneLocalOrigin=this.origin}},Dn=class extends Te{constructor(e,t,n,i=new _e(Rn,(()=>Promise.all([r.e(6849),r.e(7113),r.e(6510),r.e(149),r.e(2611),r.e(5850)]).then(r.bind(r,30950)).then((e=>e.D))))){super(e,t,i,n),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:r,output:n,transparent:i,cullFace:o,customDepthTest:s,hasOccludees:c,enableOffset:l}=e,u=r===Ee.NONE,d=r===Ee.FrontFace;return(0,x.B)({blending:(0,h.u)(n)&&i?Me(r):null,culling:Bn(e)?(0,x.f)(o):null,depthTest:{func:Ne(r,Fn(s))},depthWrite:Oe(e),drawBuffers:n===h.b.Depth?{buffers:[a.f.NONE]}:Pe(r,n),colorWrite:x.g,stencilWrite:c?Le:null,stencilTest:c?t?Fe:De:null,polygonOffset:u||d?null:Re(l)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Fn(e){return e===o.n.Lequal?a.O.LEQUAL:a.O.LESS}function Bn(e){return e.cullFace!==o.e.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function zn(){return Nn??=(async()=>{const e=await r.e(1105).then(r.bind(r,81105)),t=await e.default({locateFile:e=>(0,n.eK)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),Nn}var Gn;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(Gn||(Gn={}));let Un=null,Vn=null;async function Hn(){return null==Vn&&(Vn=zn(),Un=await Vn),Vn}function Wn(e,t){if(null==Un)return e.byteLength;const r=new Un.BasisFile(new Uint8Array(e)),n=qn(r)?kn(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),n}function jn(e,t){if(null==Un)return e.byteLength;const r=new Un.KTX2File(new Uint8Array(e)),n=$n(r)?kn(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),n}function kn(e,t,r,n,i){const o=(0,s.a)(t?a.c.COMPRESSED_RGBA8_ETC2_EAC:a.c.COMPRESSED_RGB8_ETC2),c=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*n*o*c)}function qn(e){return e.getNumImages()>=1&&!e.isUASTC()}function $n(e){return e.getFaces()>=1&&e.isETC1S()}async function Yn(e,t,r){null==Un&&(Un=await Hn());const n=new Un.BasisFile(new Uint8Array(r));if(!qn(n))return null;n.startTranscoding();const i=Jn(e,t,n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),((e,t)=>n.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>n.transcodeImage(r,0,e,t,0,0)));return n.close(),n.delete(),i}async function Xn(e,t,r){null==Un&&(Un=await Hn());const n=new Un.KTX2File(new Uint8Array(r));if(!$n(n))return null;n.startTranscoding();const i=Jn(e,t,n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),((e,t)=>n.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>n.transcodeImage(r,e,0,0,t,0,-1,-1)));return n.close(),n.delete(),i}function Jn(e,t,r,n,i,o,c,l){const{compressedTextureETC:u,compressedTextureS3TC:d}=e.capabilities,[h,f]=u?n?[Gn.ETC2_RGBA,a.c.COMPRESSED_RGBA8_ETC2_EAC]:[Gn.ETC1_RGB,a.c.COMPRESSED_RGB8_ETC2]:d?n?[Gn.BC3_RGBA,a.c.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Gn.BC1_RGB,a.c.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Gn.RGBA32,a.G.RGBA],m=t.hasMipmap?r:Math.min(1,r),p=[];for(let a=0;a<m;a++)p.push(new Uint8Array(c(a,h))),l(a,h,p[a]);return t.internalFormat=f,t.hasMipmap=p.length>1,t.samplingMode=t.hasMipmap?a.L.LINEAR_MIPMAP_LINEAR:a.L.LINEAR,t.width=i,t.height=o,new s.m(e,t,{type:"compressed",levels:p})}const Zn=()=>n.n.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Kn=542327876,Qn=131072,ei=4;function ti(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function ri(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const ni=ti("DXT1"),ii=ti("DXT3"),oi=ti("DXT5"),ai=31,si=0,ci=1,li=2,ui=3,di=4,hi=7,fi=20,mi=21;function pi(e,t,r){const n=gi(r,t.hasMipmap??!1);if(null==n)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:o,width:c,height:l}=n;return t.samplingMode=i.levels.length>1?a.L.LINEAR_MIPMAP_LINEAR:a.L.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=c,t.height=l,new s.m(e,t,i)}function gi(e,t){const r=new Int32Array(e.buffer,e.byteOffset,ai);if(r[si]!==Kn)return Zn().error("Invalid magic number in DDS header"),null;if(!(r[fi]&ei))return Zn().error("Unsupported format, must contain a FourCC code"),null;const n=r[mi];let i,o;switch(n){case ni:i=8,o=a.c.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ii:i=16,o=a.c.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case oi:i=16,o=a.c.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Zn().error("Unsupported FourCC code:",ri(n)),null}let s=1,c=r[di],l=r[ui];(3&c||3&l)&&(Zn().warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const u=c,d=l;let h,f;r[li]&Qn&&!1!==t&&(s=Math.max(1,r[hi]));let m=e.byteOffset+r[ci]+4;const p=[];for(let a=0;a<s;++a)f=(c+3>>2)*(l+3>>2)*i,h=new Uint8Array(e.buffer,m,f),p.push(h),m+=f,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:o,width:u,height:d}}function vi(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?Ti(e):e;let n=e.width,i=e.height;do{n=Math.ceil(n/2),i=Math.ceil(i/2),r=n*i}while(r>1048576||null!=t&&(n>t||i>t));return xi(e,n,i)}function _i(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const n=t/r;return xi(e,Math.round(e.width*n),Math.round(e.height*n))}function xi(e,t,r){if(e instanceof ImageData)return xi(Ti(e),t,r);const n=document.createElement("canvas");return n.width=t,n.height=r,n.getContext("2d").drawImage(e,0,0,n.width,n.height),n}function Ti(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new n.s("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}let bi=class extends ee{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=be.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new n.bP,this._parameters={...wi,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,n.dp)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,n.fd)(e.src)||(0,n.dp)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new s.p;return t.wrapMode=this._parameters.wrap??a.D.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?a.L.LINEAR_MIPMAP_LINEAR:a.L.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||Ai(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new s.m(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(0,n.cj)(t)&&this._parameters.encoding===o.u.DDS_ENCODING?this._loadFromDDSData(e,t):(0,n.eL)(t)&&this._parameters.encoding===o.u.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):((0,n.eL)(t)||(0,n.cj)(t))&&this._parameters.encoding===o.u.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,n.eL)(t)||(0,n.cj)(t))&&this._parameters.encoding===o.u.BASIS_ENCODING?this._loadFromBasis(e,t):(0,n.cj)(t)?this._loadFromPixelData(e,t):(0,n.eL)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<Ei.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=pi(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>Xn(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>Yn(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,c.s)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?a.G.LUMINANCE:3===this._parameters.components?a.G.RGB:a.G.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new s.m(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const o=await(0,i.t)(t,{signal:r});return(0,n.D)(r),this._loadFromImage(e,o)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,n.jI)(t,t.src,!1,r);return(0,n.D)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=Ei.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,o)=>{const a=()=>{t.removeEventListener("loadeddata",s),t.removeEventListener("error",c),(0,n.aJ)(l)},s=()=>{t.readyState>=Ei.HAVE_CURRENT_DATA&&(a(),i(this._loadFromImage(e,t)))},c=e=>{a(),o(e||new n.s("Failed to load video"))};t.addEventListener("loadeddata",s),t.addEventListener("error",c);const l=(0,n.aK)(r,(()=>c((0,n.aN)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?vi(r,t):_i(r,t)}const n=Si(r);this._parameters.width=n.width,this._parameters.height=n.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this._parameters.components?a.G.RGB:a.G.RGBA,i.width=n.width,i.height=n.height,this._glTexture=new s.m(e,i,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const n=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(n,n),r}unload(){if(this._glTexture=(0,n.cF)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Ai(e,t){if(null==e)return 0;if((0,n.eL)(e)||(0,n.cj)(e))return t.encoding===o.u.KTX2_ENCODING?jn(e,!!t.mipmap):t.encoding===o.u.BASIS_ENCODING?Wn(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Si(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}function Si(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var Ei;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(Ei||(Ei={}));const wi={wrap:{s:a.D.REPEAT,t:a.D.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};class Ci{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const Mi=(0,n.bO)();function Oi(e,t,r,n,i,o){if(!e.visible)return;const a=(0,l.R)(qi,n,r),s=(e,t,r)=>{o(e,r,t,!1)},u=new Ci(!1,t.options.normalRequired);if(e.boundingInfo){(0,c.s)(e.type===be.Mesh);const n=t.tolerance;Ii(e.boundingInfo,r,a,n,i,u,s)}else{const t=e.attributes.get(p.e.POSITION),n=t.indices;Pi(r,a,0,n.length/3,n,t.data,t.stride,i,u,s)}}const yi=(0,n.aA)();function Ii(e,t,r,i,o,a,s){if(null==e)return;const c=Vi(r,yi);if((0,n.jJ)(Mi,e.bbMin),(0,n.jK)(Mi,e.bbMax),o?.applyToAabb(Mi),Hi(Mi,t,c,i)){const{primitiveIndices:n,position:c}=e,l=n?n.length:c.indices.length/3;if(l>ji){const n=e.getChildren();if(void 0!==n){for(const e of n)Ii(e,t,r,i,o,a,s);return}}Ni(t,r,0,l,c.indices,c.data,c.stride,n,o,a,s)}}const Ri=(0,n.aA)();function Ni(e,t,r,n,i,o,a,s,c,l,u){const d=e[0],h=e[1],f=e[2],m=t[0],p=t[1],g=t[2],{normalRequired:v}=l;for(let _=r;_<n;++_){const e=s[_],t=3*e,r=a*i[t];let n=o[r],l=o[r+1],x=o[r+2];const T=a*i[t+1];let b=o[T],A=o[T+1],S=o[T+2];const E=a*i[t+2];let w=o[E],C=o[E+1],M=o[E+2];null!=c&&([n,l,x]=c.applyToVertex(n,l,x,_),[b,A,S]=c.applyToVertex(b,A,S,_),[w,C,M]=c.applyToVertex(w,C,M,_));const O=b-n,y=A-l,I=S-x,R=w-n,N=C-l,P=M-x,L=p*P-N*g,D=g*R-P*m,F=m*N-R*p,B=O*L+y*D+I*F;if(Math.abs(B)<=ki)continue;const z=d-n,G=h-l,U=f-x,V=z*L+G*D+U*F;if(B>0){if(V<0||V>B)continue}else if(V>0||V<B)continue;const H=G*I-y*U,W=U*O-I*z,j=z*y-O*G,k=m*H+p*W+g*j;if(B>0){if(k<0||V+k>B)continue}else if(k>0||V+k<B)continue;const q=(R*H+N*W+P*j)/B;q>=0&&u(q,e,v?Bi(O,y,I,R,N,P,Ri):null)}}function Pi(e,t,r,n,i,o,a,s,c,u){const d=t,h=$i,f=Math.abs(d[0]),m=Math.abs(d[1]),p=Math.abs(d[2]),g=f>=m?f>=p?0:2:m>=p?1:2,v=g,_=d[v]<0?2:1,x=(g+_)%3,T=(g+(3-_))%3,b=d[x]/d[v],A=d[T]/d[v],S=1/d[v],E=Li,w=Di,C=Fi,{normalRequired:M}=c;for(let O=r;O<n;++O){const t=3*O,r=a*i[t];(0,l.o)(h[0],o[r+0],o[r+1],o[r+2]);const n=a*i[t+1];(0,l.o)(h[1],o[n+0],o[n+1],o[n+2]);const c=a*i[t+2];(0,l.o)(h[2],o[c+0],o[c+1],o[c+2]),s&&((0,l.s)(h[0],s.applyToVertex(h[0][0],h[0][1],h[0][2],O)),(0,l.s)(h[1],s.applyToVertex(h[1][0],h[1][1],h[1][2],O)),(0,l.s)(h[2],s.applyToVertex(h[2][0],h[2][1],h[2][2],O))),(0,l.R)(E,h[0],e),(0,l.R)(w,h[1],e),(0,l.R)(C,h[2],e);const d=E[x]-b*E[v],f=E[T]-A*E[v],m=w[x]-b*w[v],p=w[T]-A*w[v],g=C[x]-b*C[v],_=C[T]-A*C[v],y=g*p-_*m,I=d*_-f*g,R=m*f-p*d;if((y<0||I<0||R<0)&&(y>0||I>0||R>0))continue;const N=y+I+R;if(0===N)continue;const P=y*(S*E[v])+I*(S*w[v])+R*(S*C[v]);if(P*Math.sign(N)<0)continue;const L=P/N;L>=0&&u(L,O,M?zi(h):null)}}const Li=(0,n.aA)(),Di=(0,n.aA)(),Fi=(0,n.aA)();function Bi(e,t,r,n,i,o,a){return(0,l.o)(Gi,e,t,r),(0,l.o)(Ui,n,i,o),(0,l._)(a,Gi,Ui),(0,l.A)(a,a),a}function zi(e){return(0,l.R)(Gi,e[1],e[0]),(0,l.R)(Ui,e[2],e[0]),(0,l._)(Ri,Gi,Ui),(0,l.A)(Ri,Ri),Ri}const Gi=(0,n.aA)(),Ui=(0,n.aA)();function Vi(e,t){return(0,l.o)(t,1/e[0],1/e[1],1/e[2])}function Hi(e,t,r,n){return Wi(e,t,r,n,1/0)}function Wi(e,t,r,n,i){const o=(e[0]-n-t[0])*r[0],a=(e[3]+n-t[0])*r[0];let s=Math.min(o,a),c=Math.max(o,a);const l=(e[1]-n-t[1])*r[1],u=(e[4]+n-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0||(s=Math.max(s,Math.min(l,u)),s>c))return!1;const d=(e[2]-n-t[2])*r[2],h=(e[5]+n-t[2])*r[2];return c=Math.min(c,Math.max(d,h)),!(c<0)&&(s=Math.max(s,Math.min(d,h)),!(s>c)&&s<i)}const ji=1e3,ki=1e-7,qi=(0,n.aA)(),$i=[(0,n.aA)(),(0,n.aA)(),(0,n.aA)()];function Yi(e,t,r,n=1){const{data:i,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,c=o.length;if(r*=s,1===n)for(let l=0;l<c;++l)a[r]=i[o[l]],r+=s;else for(let l=0;l<c;++l){const e=i[o[l]];for(let t=0;t<n;t++)a[r]=e,r+=s}}function Xi(e,t,r){const{data:n,indices:i}=e,o=t.typedBuffer,a=t.typedBufferStride,s=i.length;r*=a;for(let c=0;c<s;++c){const e=2*i[c];o[r]=n[e],o[r+1]=n[e+1],r+=a}}function Ji(e,t,r,n){const{data:i,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,c=o.length;if(r*=s,null==n||1===n)for(let l=0;l<c;++l){const e=3*o[l];a[r]=i[e],a[r+1]=i[e+1],a[r+2]=i[e+2],r+=s}else for(let l=0;l<c;++l){const e=3*o[l];for(let t=0;t<n;++t)a[r]=i[e],a[r+1]=i[e+1],a[r+2]=i[e+2],r+=s}}function Zi(e,t,r,n=1){const{data:i,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,c=o.length;if(r*=s,1===n)for(let l=0;l<c;++l){const e=4*o[l];a[r]=i[e],a[r+1]=i[e+1],a[r+2]=i[e+2],a[r+3]=i[e+3],r+=s}else for(let l=0;l<c;++l){const e=4*o[l];for(let t=0;t<n;++t)a[r]=i[e],a[r+1]=i[e+1],a[r+2]=i[e+2],a[r+3]=i[e+3],r+=s}}function Ki(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride;t*=i;for(let o=0;o<r;++o)n[t]=0,n[t+1]=0,n[t+2]=0,n[t+3]=0,t+=i}function Qi(e,t,r,n,i=1){if(!t)return void Ji(e,r,n,i);const{data:o,indices:a}=e,s=r.typedBuffer,c=r.typedBufferStride,l=a.length,u=t[0],d=t[1],h=t[2],f=t[4],m=t[5],p=t[6],g=t[8],v=t[9],_=t[10],x=t[12],T=t[13],b=t[14];n*=c;let S=0,E=0,w=0;const C=(0,A.H)(t)?e=>{S=o[e]+x,E=o[e+1]+T,w=o[e+2]+b}:e=>{const t=o[e],r=o[e+1],n=o[e+2];S=u*t+f*r+g*n+x,E=d*t+m*r+v*n+T,w=h*t+p*r+_*n+b};if(1===i)for(let A=0;A<l;++A)C(3*a[A]),s[n]=S,s[n+1]=E,s[n+2]=w,n+=c;else for(let A=0;A<l;++A){C(3*a[A]);for(let e=0;e<i;++e)s[n]=S,s[n+1]=E,s[n+2]=w,n+=c}}function eo(e,t,r,n,i=1){if(!t)return void Ji(e,r,n,i);const{data:o,indices:a}=e,s=t,c=r.typedBuffer,l=r.typedBufferStride,u=a.length,d=s[0],h=s[1],f=s[2],m=s[4],p=s[5],g=s[6],v=s[8],_=s[9],x=s[10],T=!(0,A.G)(s),b=1e-6,S=1-b;n*=l;let E=0,w=0,C=0;const M=(0,A.H)(s)?e=>{E=o[e],w=o[e+1],C=o[e+2]}:e=>{const t=o[e],r=o[e+1],n=o[e+2];E=d*t+m*r+v*n,w=h*t+p*r+_*n,C=f*t+g*r+x*n};if(1===i)if(T)for(let A=0;A<u;++A){M(3*a[A]);const e=E*E+w*w+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);c[n]=E*t,c[n+1]=w*t,c[n+2]=C*t}else c[n]=E,c[n+1]=w,c[n+2]=C;n+=l}else for(let A=0;A<u;++A)M(3*a[A]),c[n]=E,c[n+1]=w,c[n+2]=C,n+=l;else for(let A=0;A<u;++A){if(M(3*a[A]),T){const e=E*E+w*w+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);E*=t,w*=t,C*=t}}for(let e=0;e<i;++e)c[n]=E,c[n+1]=w,c[n+2]=C,n+=l}}function to(e,t,r,n,i=1){if(!t)return void Zi(e,r,n,i);const{data:o,indices:a}=e,s=t,c=r.typedBuffer,l=r.typedBufferStride,u=a.length,d=s[0],h=s[1],f=s[2],m=s[4],p=s[5],g=s[6],v=s[8],_=s[9],x=s[10],T=!(0,A.G)(s),b=1e-6,S=1-b;if(n*=l,1===i)for(let A=0;A<u;++A){const e=4*a[A],t=o[e],r=o[e+1],i=o[e+2],s=o[e+3];let u=d*t+m*r+v*i,E=h*t+p*r+_*i,w=f*t+g*r+x*i;if(T){const e=u*u+E*E+w*w;if(e<S&&e>b){const t=1/Math.sqrt(e);u*=t,E*=t,w*=t}}c[n]=u,c[n+1]=E,c[n+2]=w,c[n+3]=s,n+=l}else for(let A=0;A<u;++A){const e=4*a[A],t=o[e],r=o[e+1],s=o[e+2],u=o[e+3];let E=d*t+m*r+v*s,w=h*t+p*r+_*s,C=f*t+g*r+x*s;if(T){const e=E*E+w*w+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);E*=t,w*=t,C*=t}}for(let o=0;o<i;++o)c[n]=E,c[n+1]=w,c[n+2]=C,c[n+3]=u,n+=l}}function ro(e,t,r,n,i=1){const{data:o,indices:a}=e,s=r.typedBuffer,c=r.typedBufferStride,l=a.length;if(n*=c,t!==o.length||4!==t)if(1!==i)if(4!==t)for(let u=0;u<l;++u){const e=3*a[u];for(let t=0;t<i;++t)s[n]=o[e],s[n+1]=o[e+1],s[n+2]=o[e+2],s[n+3]=255,n+=c}else for(let u=0;u<l;++u){const e=4*a[u];for(let t=0;t<i;++t)s[n]=o[e],s[n+1]=o[e+1],s[n+2]=o[e+2],s[n+3]=o[e+3],n+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*a[e];s[n]=o[t],s[n+1]=o[t+1],s[n+2]=o[t+2],s[n+3]=o[t+3],n+=c}return}for(let e=0;e<l;++e){const t=3*a[e];s[n]=o[t],s[n+1]=o[t+1],s[n+2]=o[t+2],s[n+3]=255,n+=c}}else{s[n]=o[0],s[n+1]=o[1],s[n+2]=o[2],s[n+3]=o[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=c/4,a=e[n/=4];n+=t;const u=l*i;for(let r=1;r<u;++r)e[n]=a,n+=t}}function no(e,t,r){const{data:n,indices:i}=e,o=t.typedBuffer,a=t.typedBufferStride,s=i.length,c=n[0];r*=a;for(let l=0;l<s;++l)o[r]=c,r+=a}function io(e,t,r,n,i=1){const o=t.typedBuffer,a=t.typedBufferStride;if(n*=a,1===i)for(let s=0;s<r;++s)o[n]=e[0],o[n+1]=e[1],o[n+2]=e[2],o[n+3]=e[3],n+=a;else for(let s=0;s<r;++s)for(let t=0;t<i;++t)o[n]=e[0],o[n+1]=e[1],o[n+2]=e[2],o[n+3]=e[3],n+=a}function oo(e,t,r,n,i,o,a){for(const s of r.fields.keys()){const r=e.get(s),c=r?.indices;if(r&&c)ao(s,r,n,i,o,a);else if(s===p.e.OBJECTANDLAYERIDCOLOR&&null!=t){const r=e.get(p.e.POSITION)?.indices;if(r){const e=r.length;io(t,o.getField(s,w.x),e,a)}}}}function ao(e,t,r,n,i,o){switch(e){case p.e.POSITION:{(0,c.s)(3===t.size);const n=i.getField(e,w.i);(0,c.s)(!!n,`No buffer view for ${e}`),n&&Qi(t,r,n,o);break}case p.e.NORMAL:{(0,c.s)(3===t.size);const r=i.getField(e,w.i);(0,c.s)(!!r,`No buffer view for ${e}`),r&&eo(t,n,r,o);break}case p.e.NORMALCOMPRESSED:{(0,c.s)(2===t.size);const r=i.getField(e,w.q);(0,c.s)(!!r,`No buffer view for ${e}`),r&&Xi(t,r,o);break}case p.e.UV0:{(0,c.s)(2===t.size);const r=i.getField(e,w.u);(0,c.s)(!!r,`No buffer view for ${e}`),r&&Xi(t,r,o);break}case p.e.COLOR:case p.e.SYMBOLCOLOR:{const r=i.getField(e,w.x);(0,c.s)(!!r,`No buffer view for ${e}`),(0,c.s)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||ro(t,t.size,r,o);break}case p.e.COLORFEATUREATTRIBUTE:{const r=i.getField(e,w.y);(0,c.s)(!!r,`No buffer view for ${e}`),(0,c.s)(1===t.size),r&&1===t.size&&no(t,r,o);break}case p.e.TANGENT:{(0,c.s)(4===t.size);const n=i.getField(e,w.c);(0,c.s)(!!n,`No buffer view for ${e}`),n&&to(t,r,n,o);break}case p.e.PROFILERIGHT:case p.e.PROFILEUP:case p.e.PROFILEVERTEXANDNORMAL:case p.e.FEATUREVALUE:{(0,c.s)(4===t.size);const r=i.getField(e,w.c);(0,c.s)(!!r,`No buffer view for ${e}`),r&&Zi(t,r,o)}}}class so{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(p.e.POSITION).indices.length}write(e,t,r,n,i,o){oo(r,n,this.vertexBufferLayout,e,t,i,o)}}class co{constructor(e){this._bits=[...e]}equals(e){return(0,n.cZ)(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}let lo=class extends m.t{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new co(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}};function uo(e={}){return(t,r)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const i=e.count||2,o=Math.ceil(Math.log2(i)),a=t._parameterBits;let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);const c=a[s],l=(1<<o)-1<<c;a[s]+=o,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[s]&l)>>c},set(t){if(this[r]!==t){if(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+t<<c&l,"number"!=typeof t)throw new n.s(`Configuration value for ${r} must be a number, got ${typeof t}`);if(null==e.count)throw new n.s(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[s]&l)>>c)},set(e){if(this[r]!==e&&(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+e<<c&l,"boolean"!=typeof e))throw new n.s(`Configuration value for ${r} must be boolean, got ${typeof e}`)}})}}let ho=class extends lo{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};(0,n.k)([uo()],ho.prototype,"instancedDoublePrecision",void 0),(0,n.k)([uo()],ho.prototype,"hasModelTransformation",void 0);let fo=class extends ho{constructor(){super(...arguments),this.output=h.b.Color,this.oitPass=Ee.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=g.a.Pass,this.writeDepth=!0}};(0,n.k)([uo({count:h.b.COUNT})],fo.prototype,"output",void 0),(0,n.k)([uo({count:Ee.COUNT})],fo.prototype,"oitPass",void 0);class mo extends fo{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=o.i.Opaque,this.doubleSidedMode=Yt.None,this.pbrMode=Zr.Disabled,this.cullFace=o.e.None,this.normalType=h.a.Attribute,this.customDepthTest=o.n.Less,this.emissionSource=Mn.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===Mn.Texture||this.hasOcclusionTexture||this.hasNormalTexture?vt.Default:vt.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}function po(e){const t=new dr,{vertex:r,fragment:n,varyings:i}=t,{output:o,offsetBackfaces:a,instancedColor:s,pbrMode:c,snowCover:l,spherical:u}=e,d=c===Zr.Normal||c===Zr.Schematic;if(st(r,e),t.include(q),i.add("vpos","vec3"),t.include(Vt,e),t.include(ft,e),t.include(Ct,e),o===h.b.Color&&(at(t.vertex,e),t.include(h.t,e),t.include(it,e),a&&t.include(qe),s&&t.attributes.add(p.e.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),e.terrainDepthTest&&i.add("depth","float"),t.include(_t,e),t.include(ke,e),t.include(gt,e),t.include(xt,e),r.uniforms.add(new wt("externalColor",(e=>e.externalColor))),i.add("vcolorExt","vec4"),r.main.add(m.o`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,m.r)(s,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${m.o.float(v.o)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${(0,m.r)(a,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${(0,m.r)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),o===h.b.Color){const{hasColorTexture:i,hasColorTextureTransform:o,receiveShadows:a}=e;t.include(fn,e),t.include(qr,e),t.include(Ht,e),t.include(e.instancedDoublePrecision?gn:vn,e),t.include(xn,e),t.include($e,e),t.include(yn,e),at(t.fragment,e),rn(n),dn(n),hn(n),n.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new z("ambient",(e=>e.ambient)),new z("diffuse",(e=>e.diffuse)),new G("opacity",(e=>e.opacity)),new G("layerOpacity",(e=>e.layerOpacity))),i&&n.uniforms.add(new Pt("tex",(e=>e.texture))),t.include(Kr,e),t.include(cn,e),n.include(Cn),nn(n),n.main.add(m.o`
      discardBySlice(vpos);
      ${(0,m.r)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${i?`texture(tex, ${o?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,m.r)(i,`${(0,m.r)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":u?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?m.o`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:m.o`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,m.r)(l,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${m.o`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,m.r)(d,`vec3 normalGround = ${u?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${d?m.o`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,m.r)(l,m.o`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${l?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:m.o`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(jt,e),t}(0,n.k)([uo({count:o.i.COUNT})],mo.prototype,"alphaDiscardMode",void 0),(0,n.k)([uo({count:Yt.COUNT})],mo.prototype,"doubleSidedMode",void 0),(0,n.k)([uo({count:Zr.COUNT})],mo.prototype,"pbrMode",void 0),(0,n.k)([uo({count:o.e.COUNT})],mo.prototype,"cullFace",void 0),(0,n.k)([uo({count:h.a.COUNT})],mo.prototype,"normalType",void 0),(0,n.k)([uo({count:o.n.COUNT})],mo.prototype,"customDepthTest",void 0),(0,n.k)([uo({count:Mn.COUNT})],mo.prototype,"emissionSource",void 0),(0,n.k)([uo()],mo.prototype,"hasVertexColors",void 0),(0,n.k)([uo()],mo.prototype,"hasSymbolColors",void 0),(0,n.k)([uo()],mo.prototype,"hasVerticalOffset",void 0),(0,n.k)([uo()],mo.prototype,"hasSlicePlane",void 0),(0,n.k)([uo()],mo.prototype,"hasSliceHighlight",void 0),(0,n.k)([uo()],mo.prototype,"hasColorTexture",void 0),(0,n.k)([uo()],mo.prototype,"hasMetallicRoughnessTexture",void 0),(0,n.k)([uo()],mo.prototype,"hasOcclusionTexture",void 0),(0,n.k)([uo()],mo.prototype,"hasNormalTexture",void 0),(0,n.k)([uo()],mo.prototype,"hasScreenSizePerspective",void 0),(0,n.k)([uo()],mo.prototype,"hasVertexTangents",void 0),(0,n.k)([uo()],mo.prototype,"hasOccludees",void 0),(0,n.k)([uo()],mo.prototype,"hasModelTransformation",void 0),(0,n.k)([uo()],mo.prototype,"offsetBackfaces",void 0),(0,n.k)([uo()],mo.prototype,"vvSize",void 0),(0,n.k)([uo()],mo.prototype,"vvColor",void 0),(0,n.k)([uo()],mo.prototype,"receiveShadows",void 0),(0,n.k)([uo()],mo.prototype,"receiveAmbientOcclusion",void 0),(0,n.k)([uo()],mo.prototype,"textureAlphaPremultiplied",void 0),(0,n.k)([uo()],mo.prototype,"instanced",void 0),(0,n.k)([uo()],mo.prototype,"instancedColor",void 0),(0,n.k)([uo()],mo.prototype,"writeDepth",void 0),(0,n.k)([uo()],mo.prototype,"transparent",void 0),(0,n.k)([uo()],mo.prototype,"enableOffset",void 0),(0,n.k)([uo()],mo.prototype,"terrainDepthTest",void 0),(0,n.k)([uo()],mo.prototype,"cullAboveTerrain",void 0),(0,n.k)([uo()],mo.prototype,"snowCover",void 0),(0,n.k)([uo()],mo.prototype,"hasColorTextureTransform",void 0),(0,n.k)([uo()],mo.prototype,"hasEmissionTextureTransform",void 0),(0,n.k)([uo()],mo.prototype,"hasNormalTextureTransform",void 0),(0,n.k)([uo()],mo.prototype,"hasOcclusionTextureTransform",void 0),(0,n.k)([uo()],mo.prototype,"hasMetallicRoughnessTextureTransform",void 0);const go=Object.freeze(Object.defineProperty({__proto__:null,build:po},Symbol.toStringTag,{value:"Module"}));class vo extends Dn{constructor(e,t,n){super(e,t,n,new _e(go,(()=>Promise.all([r.e(6849),r.e(7113),r.e(6510),r.e(149),r.e(2611),r.e(5850)]).then(r.bind(r,30950)).then((e=>e.R))))),this.type="RealisticTreeTechnique"}}class _o extends Ae{constructor(e,t){super(e,To),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[k.OPAQUE_MATERIAL,e=>((0,h.c)(e)||(0,h.o)(e))&&!this.parameters.transparent],[k.TRANSPARENT_MATERIAL,e=>((0,h.c)(e)||(0,h.o)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[k.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,h.r)(e)||(0,h.o)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Ao(this.parameters),this._configuration=new mo(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==h.b.Shadow&&e!==h.b.ShadowExcludeHighlight&&e!==h.b.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<v.o)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:n,vvColor:i}=e,o=t||i||n,a="replace"===e.colorMixMode,s=e.opacity>=v.o;if(r&&o)return a||s;const c=e.externalColor&&e.externalColor[3]>=v.o;return r?a?c:s:o?a||s:a?c:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,l.H)(this.parameters.emissiveFactor,n.fI)}getConfiguration(e,t){const r=this.parameters,{treeRendering:n,doubleSided:i,doubleSidedType:a}=r;return this._configuration.output=e,this._configuration.hasNormalTexture=!n&&!!r.normalTextureId,this._configuration.hasColorTexture=!!r.textureId,this._configuration.hasVertexTangents=!n&&r.hasVertexTangents,this._configuration.instanced=r.isInstanced,this._configuration.instancedDoublePrecision=r.instancedDoublePrecision,this._configuration.vvSize=!!r.vvSize,this._configuration.hasVerticalOffset=null!=r.verticalOffset,this._configuration.hasScreenSizePerspective=null!=r.screenSizePerspective,this._configuration.hasSlicePlane=r.hasSlicePlane,this._configuration.hasSliceHighlight=r.hasSliceHighlight,this._configuration.alphaDiscardMode=r.textureAlphaMode,this._configuration.normalType=n?h.a.Attribute:r.normalType,this._configuration.transparent=r.transparent,this._configuration.writeDepth=r.writeDepth,null!=r.customDepthTest&&(this._configuration.customDepthTest=r.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=r.hasSlicePlane?o.e.None:r.cullFace,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!n&&null!=r.modelTransformation,this._configuration.hasVertexColors=r.hasVertexColors,this._configuration.hasSymbolColors=r.hasSymbolColors,this._configuration.doubleSidedMode=n?Yt.WindingOrder:i&&"normal"===a?Yt.View:i&&"winding-order"===a?Yt.WindingOrder:Yt.None,this._configuration.instancedColor=r.hasInstancedColor,this._configuration.receiveShadows=r.receiveShadows&&r.receiveShadows,this._configuration.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!r.vvColor,this._configuration.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,this._configuration.pbrMode=r.usePBR?r.isSchematic?Zr.Schematic:Zr.Normal:Zr.Disabled,this._configuration.hasMetallicRoughnessTexture=!n&&!!r.metallicRoughnessTextureId,this._configuration.emissionSource=n?Mn.None:null!=r.emissiveTextureId?Mn.Texture:r.usePBR?Mn.Value:Mn.None,this._configuration.hasOcclusionTexture=!n&&!!r.occlusionTextureId,this._configuration.offsetBackfaces=!(!r.transparent||!r.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<ye,this._configuration.snowCover=bo(t),this._configuration.hasColorTextureTransform=!!r.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,r,n,i,o){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,l.o)(Oo,t[12],t[13],t[14]);let o=null;switch(r.viewingMode){case u.l.Global:o=(0,l.A)(Co,Oo);break;case u.l.Local:o=(0,l.s)(Co,wo)}let a=0;const s=(0,l.c)(yo,Oo,e.eye),c=(0,l.r)(s),d=(0,l.g)(s,s,1/c);let h=null;this.parameters.screenSizePerspective&&(h=(0,l.P)(o,d)),a+=pe(e,c,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,l.g)(o,o,a),(0,l.N)(Mo,o,r.transform.inverseRotation),n=(0,l.c)(So,n,Mo),i=(0,l.c)(Eo,i,Mo)}Oi(e,r,n,i,ie(r.verticalOffset),o)}createGLMaterial(e){return new xo(e)}createBufferWriter(){return new so(this._vertexBufferLayout)}}class xo extends Yr{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.o)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?vo:Dn,e)}}class To extends Pn{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function bo(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}function Ao(e){const t=(0,d.H)().vec3f(p.e.POSITION);return e.normalType===h.a.Compressed?t.vec2i16(p.e.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(p.e.NORMAL),e.hasVertexTangents&&t.vec4f(p.e.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(p.e.UV0),e.hasVertexColors&&t.vec4u8(p.e.COLOR),e.hasSymbolColors&&t.vec4u8(p.e.SYMBOLCOLOR),D()&&t.vec4u8(p.e.OBJECTANDLAYERIDCOLOR),t}const So=(0,n.aA)(),Eo=(0,n.aA)(),wo=(0,n.cp)(0,0,1),Co=(0,n.aA)(),Mo=(0,n.aA)(),Oo=(0,n.aA)(),yo=(0,n.aA)();let Io=class e{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,c.s)(e.length>=1),(0,c.s)(3===r.size||4===r.size);const{data:i,size:o,indices:a}=r;(0,c.s)(a.length%this._numIndexPerPrimitive==0),(0,c.s)(a.length>=e.length*this._numIndexPerPrimitive);const s=e.length;let u=o*a[this._numIndexPerPrimitive*e[0]];Ro.clear(),Ro.push(u);const d=(0,n.cp)(i[u],i[u+1],i[u+2]),h=(0,n.cv)(d);for(let n=0;n<s;++n){const t=this._numIndexPerPrimitive*e[n];for(let e=0;e<this._numIndexPerPrimitive;++e){u=o*a[t+e],Ro.push(u);let r=i[u];d[0]=Math.min(r,d[0]),h[0]=Math.max(r,h[0]),r=i[u+1],d[1]=Math.min(r,d[1]),h[1]=Math.max(r,h[1]),r=i[u+2],d[2]=Math.min(r,d[2]),h[2]=Math.max(r,h[2])}}this.bbMin=d,this.bbMax=h;const f=(0,l.I)((0,n.aA)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(h[0]-d[0],h[1]-d[1]),h[2]-d[2]);let m=this.radius*this.radius;for(let n=0;n<Ro.length;++n){u=Ro.at(n);const e=i[u]-f[0],t=i[u+1]-f[1],r=i[u+2]-f[2],o=e*e+t*t+r*r;if(o<=m)continue;const a=Math.sqrt(o),s=.5*(a-this.radius);this.radius=this.radius+s,m=this.radius*this.radius;const c=s/a;f[0]+=e*c,f[1]+=t*c,f[2]+=r*c}this.center=f,Ro.clear()}getChildren(){if(this._children||(0,l.v)(this.bbMin,this.bbMax)<=1)return this._children;const t=(0,l.I)((0,n.aA)(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let e=0;e<8;++e)o[e]=0;const{data:a,size:s,indices:c}=this.position;for(let e=0;e<r;++e){let r=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[e];let l=s*c[n],u=a[l],d=a[l+1],h=a[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=s*c[n+e];const t=a[l],r=a[l+1],i=a[l+2];t<u&&(u=t),r<d&&(d=r),i<h&&(h=i)}u<t[0]&&(r|=1),d<t[1]&&(r|=2),h<t[2]&&(r|=4),i[e]=r,++o[r]}let u=0;for(let e=0;e<8;++e)o[e]>0&&++u;if(u<2)return;const d=new Array(8);for(let e=0;e<8;++e)d[e]=o[e]>0?new Uint32Array(o[e]):void 0;for(let e=0;e<8;++e)o[e]=0;for(let e=0;e<r;++e){const t=i[e];d[t][o[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let n=0;n<8;++n)void 0!==d[n]&&this._children.push(new e(d[n],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Ro.prune()}};const Ro=new n.bX({deallocator:null});function No(e){if(e.length<n.c0)return Array.from(e);if((0,n.b$)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,n.ck)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}},55334:function(e,t,r){var n;r.d(t,{a:function(){return n}}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(n||(n={}))},82691:function(e,t,r){r.d(t,{i:function(){return a},l:function(){return u},t:function(){return i}});var n=r(98503);function i(e){if((0,n.b$)(e)){if(e.length<n.c0)return e}else if(e.length<n.c0)return Array.from(e);let t=!0,r=!0;return e.some(((e,n)=>(t=t&&0===e,r=r&&e===n,!t&&!r))),t?h(e.length):r?u(e.length):(0,n.b$)(e)||e.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?o(e):e}function o(e){let t=!0;for(const r of e){if(r>=65536)return(0,n.b$)(e)?new Uint32Array(e):e;r>=256&&(t=!1)}return t?new Uint8Array(e):new Uint16Array(e)}function a(e){return e<=n.c0?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let s=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const c=[0],l=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function u(e){if(1===e)return c;if(e<n.c0)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.buffer,0,e);if(e>s.length){const t=Math.max(2*s.length,e);s=new Uint32Array(t);for(let e=0;e<s.length;e++)s[e]=e}return new Uint32Array(s.buffer,0,e)}let d=new Uint8Array(65536);function h(e){if(1===e)return c;if(e<n.c0)return new Array(e).fill(0);if(e>d.length){const t=Math.max(2*d.length,e);d=new Uint8Array(t)}return new Uint8Array(d.buffer,0,e)}},85490:function(e,t,r){r.d(t,{H:function(){return c},I:function(){return l}});var n=r(98256),i=r(11942),o=r(93942);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fields.keys()){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,r=0,n=e.count){const i=this.stride;if(i%4==0){const o=new Uint32Array(e.buffer,t*i,n*i/4);new Uint32Array(this.buffer,r*i,n*i/4).set(o)}else{const o=new Uint8Array(e.buffer,t*i,n*i);new Uint8Array(this.buffer,r*i,n*i).set(o)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(e){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:h(e[1].constructor)}))))}freeze(){return this}vec2f(e,t){return this._appendField(e,n.u,t),this}vec2f64(e,t){return this._appendField(e,n.m,t),this}vec3f(e,t){return this._appendField(e,n.i,t),this}vec3f64(e,t){return this._appendField(e,n.T,t),this}vec4f(e,t){return this._appendField(e,n.c,t),this}vec4f64(e,t){return this._appendField(e,n.h,t),this}mat3f(e,t){return this._appendField(e,n.l,t),this}mat3f64(e,t){return this._appendField(e,n.a,t),this}mat4f(e,t){return this._appendField(e,n.p,t),this}mat4f64(e,t){return this._appendField(e,n.b,t),this}vec4u8(e,t){return this._appendField(e,n.x,t),this}f32(e,t){return this._appendField(e,n.y,t),this}f64(e,t){return this._appendField(e,n.o,t),this}u8(e,t){return this._appendField(e,n.d,t),this}u16(e,t){return this._appendField(e,n.g,t),this}i8(e,t){return this._appendField(e,n.j,t),this}vec2i8(e,t){return this._appendField(e,n.V,t),this}vec2i16(e,t){return this._appendField(e,n.q,t),this}vec2u8(e,t){return this._appendField(e,n.A,t),this}vec4u16(e,t){return this._appendField(e,n.L,t),this}u32(e,t){return this._appendField(e,n.B,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,o.s)(!1,`${e} already added to vertex buffer layout`);const n=t.ElementCount*(0,i.e)(t.ElementType),a=this._stride;this._stride+=n,this._fields.set(e,{size:n,constructor:t,offset:a,optional:r})}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,i.e)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function c(){return new s}class l{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:d(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const u=[n.y,n.u,n.i,n.c,n.l,n.p,n.o,n.m,n.T,n.h,n.a,n.b,n.d,n.A,n.O,n.x,n.g,n.w,n.E,n.L,n.B,n.F,n.I,n.U,n.j,n.V,n.M,n.S,n.k,n.q,n.v,n.z,n.C,n.D,n.G,n.H];function d(e){return`${e.ElementType}_${e.ElementCount}`}function h(e){return f.get(e)}const f=new Map;u.forEach((e=>f.set(d(e),e)))},77485:function(e,t,r){r.d(t,{t:function(){return n}});class n{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const n=this._outer.get(e);n?n.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}},38097:function(e,t,r){r.d(t,{S:function(){return T},a:function(){return o},b:function(){return i},c:function(){return d},d:function(){return p},n:function(){return n},o:function(){return l},r:function(){return u},t:function(){return b},u:function(){return m}});r(98503);var n,i,o,a=r(49329),s=r(76328),c=r(71807);function l(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight||e===i.ViewshedShadow}function u(e){return v(e)||e===i.Normal}function d(e){return _(e)||e===i.Normal}function h(e){return e===i.Highlight||e===i.ObjectAndLayerIdColor}function f(e){return e===i.Color}function m(e){return f(e)||T(e)}function p(e){return f(e)||h(e)}function g(e){return m(e)||h(e)}function v(e){return p(e)||x(e)}function _(e){return g(e)||x(e)}function x(e){return e===i.Depth}function T(e){return e===i.ColorEmission}function b(e,t){switch(t.normalType){case o.Compressed:e.attributes.add(c.e.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(s.o`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:e.attributes.add(c.e.NORMAL,"vec3"),e.vertex.code.add(s.o`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:e.fragment.code.add(s.o`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,a.n)(t.normalType);case o.COUNT:}}(function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"})(n||(n={})),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(i||(i={})),function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(o||(o={}))},93942:function(e,t,r){r.d(t,{i:function(){return o},s:function(){return i}});r(39967),r(90211),r(83448);class n{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function i(e,t="Assertion"){if(!e){const e=new Error(t).stack;throw new n(`${t} at ${e}`)}}function o(e,t,r,n){let i,o=(r[0]-e[0])/t[0],a=(n[0]-e[0])/t[0];o>a&&(i=o,o=a,a=i);let s=(r[1]-e[1])/t[1],c=(n[1]-e[1])/t[1];if(s>c&&(i=s,s=c,c=i),o>c||s>a)return!1;s>o&&(o=s),c<a&&(a=c);let l=(r[2]-e[2])/t[2],u=(n[2]-e[2])/t[2];return l>u&&(i=l,l=u,u=i),!(o>u||l>a)&&(u<a&&(a=u),!(a<0))}},36012:function(e,t,r){var n,i,o,a,s,c,l,u;r.d(t,{O:function(){return a},a:function(){return o},e:function(){return n},i:function(){return l},n:function(){return i},s:function(){return s},t:function(){return c},u:function(){return u}}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(n||(n={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(i||(i={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(o||(o={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(c||(c={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(l||(l={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}))},58390:function(e,t,r){r.d(t,{J:function(){return v},K:function(){return _},W:function(){return f},Z:function(){return p},k:function(){return te}});var n=r(98503),i=r(31178),o=r(74362),a=r(77703),s=r(92157),c=r(84517),l=r(8082);const u=()=>n.n.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class d{constructor(){this.plane=(0,l.M)(),this.origin=(0,n.aA)(),this.basis1=(0,n.aA)(),this.basis2=(0,n.aA)()}}const h=d;function f(e=$){return{plane:(0,l.M)(e.plane),origin:(0,n.cv)(e.origin),basis1:(0,n.cv)(e.basis1),basis2:(0,n.cv)(e.basis2)}}function m(e,t,r){const n=Z.get();return n.origin=e,n.basis1=t,n.basis2=r,n.plane=(0,l.D)(0,0,0,0),_(n),n}function p(e,t=f()){return v(e.origin,e.basis1,e.basis2,t)}function g(e,t){(0,s.s)(t.origin,e.origin),(0,s.s)(t.basis1,e.basis1),(0,s.s)(t.basis2,e.basis2),(0,l.h)(t.plane,e.plane)}function v(e,t,r,n=f()){return(0,s.s)(n.origin,e),(0,s.s)(n.basis1,t),(0,s.s)(n.basis2,r),_(n),k(n,"fromValues()"),n}function _(e){(0,l.P)(e.basis2,e.basis1,e.origin,e.plane)}function x(e,t,r){e!==r&&p(e,r);const n=(0,s.g)(l.c.get(),U(e),t);return(0,s.u)(r.origin,r.origin,n),r.plane[3]-=t,r}function T(e,t,r){return A(t,r),x(r,D(e,e.origin),r),r}function b(e,t){const r=e.basis1[0],i=e.basis2[1],[o,a]=e.origin;return(0,n.ae)(o-r,a-i,o+r,a+i,t)}function A(e,t=f()){const r=(e[2]-e[0])/2,n=(e[3]-e[1])/2;return(0,s.o)(t.origin,e[0]+r,e[1]+n,0),(0,s.o)(t.basis1,r,0,0),(0,s.o)(t.basis2,0,n,0),(0,l.U)(0,0,1,0,t.plane),t}function S(e,t,r){return!!(0,l.x)(e.plane,t,r)&&H(e,r)}function E(e,t,r){if(S(e,t,r))return r;const n=w(e,t,l.c.get());return(0,s.u)(r,t.origin,(0,s.g)(l.c.get(),t.direction,(0,s.p)(t.origin,n)/(0,s.r)(t.direction))),r}function w(e,t,r){const i=Y.get();q(e,t,i,Y.get());let o=Number.POSITIVE_INFINITY;for(const a of K){const c=j(e,a,X.get()),u=l.c.get();if((0,l.q)(i,c,u)){const e=(0,s.K)(l.c.get(),t.origin,u),i=Math.abs((0,n.cC)((0,s.P)(t.direction,e)));i<o&&(o=i,(0,s.s)(r,u))}}return o===Number.POSITIVE_INFINITY?M(e,t,r):r}function C(e,t){return(t-e)/t}function M(e,t,r){if(S(e,t,r))return r;const n=Y.get(),o=Y.get();q(e,t,n,o);let a=Number.POSITIVE_INFINITY;for(const c of K){const u=j(e,c,X.get()),d=l.c.get();if((0,l.w)(n,u,d)){const e=(0,i.w)(t,d);if(!(0,l.z)(o,d))continue;e<a&&(a=e,(0,s.s)(r,d))}}return I(e,t.origin)<a&&O(e,t.origin,r),r}function O(e,t,r){const n=(0,l.H)(e.plane,t,l.c.get()),i=(0,c.A)(W(e,e.basis1),n,-1,1,l.c.get()),o=(0,c.A)(W(e,e.basis2),n,-1,1,l.c.get());return(0,s.c)(r,(0,s.u)(l.c.get(),i,o),e.origin),r}function y(e,t,r){const{origin:n,basis1:i,basis2:o}=e,a=(0,s.c)(l.c.get(),t,n),c=(0,l.f)(i,a),u=(0,l.f)(o,a),d=(0,l.f)(U(e),a);return(0,s.o)(r,c,u,d)}function I(e,t){const r=y(e,t,l.c.get()),{basis1:n,basis2:i}=e,o=(0,s.r)(n),a=(0,s.r)(i),c=Math.max(Math.abs(r[0])-o,0),u=Math.max(Math.abs(r[1])-a,0),d=r[2];return c*c+u*u+d*d}function R(e,t){return Math.sqrt(I(e,t))}function N(e,t){let r=Number.NEGATIVE_INFINITY;for(const n of K){const i=j(e,n,X.get()),o=(0,c.M)(i,t);o>r&&(r=o)}return Math.sqrt(r)}function P(e,t){return(0,l.z)(e.plane,t)&&H(e,t)}function L(e,t,r,n){return V(e,r,n)}function D(e,t){const r=-e.plane[3];return(0,l.f)(U(e),t)-r}function F(e,t,r,n){const i=D(e,t),o=(0,s.g)(J,U(e),r-i);return(0,s.u)(n,t,o),n}function B(e,t){return(0,s.H)(e.basis1,t.basis1)&&(0,s.H)(e.basis2,t.basis2)&&(0,s.H)(e.origin,t.origin)}function z(e,t,r){return e!==r&&p(e,r),(0,o.h)(Q,t),(0,o.s)(Q,Q),(0,s.E)(r.basis1,e.basis1,Q),(0,s.E)(r.basis2,e.basis2,Q),(0,s.E)((0,l.O)(r.plane),(0,l.O)(e.plane),Q),(0,s.E)(r.origin,e.origin,t),(0,l.y)(r.plane,r.plane,r.origin),r}function G(e,t,r,n){return e!==n&&p(e,n),(0,o.p)(ee,t,r),(0,s.E)(n.basis1,e.basis1,ee),(0,s.E)(n.basis2,e.basis2,ee),_(n),n}function U(e){return(0,l.O)(e.plane)}function V(e,t,r){switch(t){case n.cD.X:(0,s.s)(r,e.basis1),(0,s.A)(r,r);break;case n.cD.Y:(0,s.s)(r,e.basis2),(0,s.A)(r,r);break;case n.cD.Z:(0,s.s)(r,U(e))}return r}function H(e,t){const r=(0,s.c)(l.c.get(),t,e.origin),n=(0,s.j)(e.basis1),i=(0,s.j)(e.basis2),o=(0,s.P)(e.basis1,r),a=(0,s.P)(e.basis2,r);return-o-n<0&&o-n<0&&-a-i<0&&a-i<0}function W(e,t){const r=X.get();return(0,s.s)(r.origin,e.origin),(0,s.s)(r.vector,t),r}function j(e,t,r){const{basis1:n,basis2:i,origin:o}=e,a=(0,s.g)(l.c.get(),n,t.origin[0]),c=(0,s.g)(l.c.get(),i,t.origin[1]);(0,s.u)(r.origin,a,c),(0,s.u)(r.origin,r.origin,o);const u=(0,s.g)(l.c.get(),n,t.direction[0]),d=(0,s.g)(l.c.get(),i,t.direction[1]);return(0,s.g)(r.vector,(0,s.u)(u,u,d),2),r}function k(e,t){Math.abs((0,s.P)(e.basis1,e.basis2)/((0,s.r)(e.basis1)*(0,s.r)(e.basis2)))>1e-6&&u().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,s.P)(e.basis1,U(e)))>1e-6&&u().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,s.P)(U(e),e.origin)-e.plane[3])>1e-6&&u().warn(t,"Plane offset is not consistent with plane origin")}function q(e,t,r,n){const i=U(e);(0,l.P)(i,t.direction,t.origin,r),(0,l.P)((0,l.O)(r),i,t.origin,n)}const $={plane:(0,l.M)(),origin:(0,n.cp)(0,0,0),basis1:(0,n.cp)(1,0,0),basis2:(0,n.cp)(0,1,0)},Y=new i.s(l.M),X=new i.s(c.v),J=(0,n.aA)(),Z=new i.s((()=>f())),K=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],Q=(0,a.e)(),ee=(0,a.e)(),te=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:h,altitudeAt:D,axisAt:L,cameraFrustumCoverage:C,closestPoint:M,closestPointOnSilhouette:w,copy:p,copyWithoutVerify:g,create:f,distance:R,distance2:I,distanceToSilhouette:N,elevate:x,equals:B,extrusionContainsPoint:P,fromAABoundingRect:A,fromValues:v,getExtent:b,intersectRay:S,intersectRayClosestSilhouette:E,normal:U,projectPoint:O,projectPointLocal:y,rotate:G,setAltitudeAt:F,setExtent:T,transform:z,up:$,updateUnboundedPlane:_,wrap:m},Symbol.toStringTag,{value:"Module"}))},40102:function(e,t,r){function n(e,t,r){for(let n=0;n<r;++n)t[2*n]=e[n],t[2*n+1]=e[n]-t[2*n]}function i(e,t){const r=e.length;for(let n=0;n<r;++n)a[0]=e[n],t[n]=a[0];return t}function o(e,t){const r=e.length;for(let n=0;n<r;++n)a[0]=e[n],a[1]=e[n]-a[0],t[n]=a[1];return t}r.d(t,{o:function(){return i},r:function(){return o},t:function(){return n}});const a=new Float32Array(2)},76328:function(e,t,r){r.d(t,{o:function(){return o},r:function(){return a},t:function(){return i}});class n{}const i=n;function o(e,...t){let r="";for(let n=0;n<t.length;n++)r+=e[n]+t[n];return r+=e[e.length-1],r}function a(e,t,r=""){return e?t:r}(function(e){function t(e){return Math.round(e).toString()}function r(e){return e.toPrecision(8)}e.int=t,e.float=r})(o||(o={}))},84517:function(e,t,r){r.d(t,{A:function(){return d},M:function(){return l},b:function(){return c},j:function(){return u},v:function(){return s}});var n=r(98503),i=r(31178),o=r(92157),a=r(8082);function s(e){return e?{origin:(0,n.cv)(e.origin),vector:(0,n.cv)(e.vector)}:{origin:(0,n.aA)(),vector:(0,n.aA)()}}function c(e,t,r=s()){return(0,o.s)(r.origin,e),(0,o.c)(r.vector,t,e),r}function l(e,t){const r=(0,o.c)(a.c.get(),t,e.origin),i=(0,o.P)(e.vector,r),s=(0,o.P)(e.vector,e.vector),c=(0,n.aP)(i/s,0,1),l=(0,o.c)(a.c.get(),(0,o.g)(a.c.get(),e.vector,c),r);return(0,o.P)(l,l)}function u(e,t,r){return d(e,t,0,1,r)}function d(e,t,r,i,s){const{vector:c,origin:l}=e,u=(0,o.c)(a.c.get(),t,l),d=(0,o.P)(c,u)/(0,o.j)(c);return(0,o.g)(s,c,(0,n.aP)(d,r,i)),(0,o.u)(s,s,e.origin)}new i.s((()=>s()))},95229:function(e,t,r){r.d(t,{B:function(){return E},Q:function(){return $},a:function(){return s},c:function(){return l},f:function(){return h},g:function(){return m},o:function(){return c},p:function(){return f},r:function(){return a}});var n=r(36012),i=r(41470);function o(e,t,r=i.T.ADD,n=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function a(e,t,r,n,o=i.T.ADD,a=i.T.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:n,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s=o(i.R.ZERO,i.R.ONE_MINUS_SRC_ALPHA);o(i.R.ONE,i.R.ZERO),o(i.R.ONE,i.R.ONE);const c=o(i.R.ONE,i.R.ONE_MINUS_SRC_ALPHA),l=a(i.R.SRC_ALPHA,i.R.ONE,i.R.ONE_MINUS_SRC_ALPHA,i.R.ONE_MINUS_SRC_ALPHA),u={face:i.N.BACK,mode:i.S.CCW},d={face:i.N.FRONT,mode:i.S.CCW},h=e=>e===n.e.Back?u:e===n.e.Front?d:null,f={zNear:0,zFar:1},m={r:!0,g:!0,b:!0,a:!0};function p(e){return M.intern(e)}function g(e){return y.intern(e)}function v(e){return R.intern(e)}function _(e){return P.intern(e)}function x(e){return D.intern(e)}function T(e){return B.intern(e)}function b(e){return G.intern(e)}function A(e){return V.intern(e)}function S(e){return W.intern(e)}function E(e){return k.intern(e)}class w{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function C(e){return"["+e.join(",")+"]"}const M=new w(O,(e=>({__tag:"Blending",...e})));function O(e){return e?C([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const y=new w(I,(e=>({__tag:"Culling",...e})));function I(e){return e?C([e.face,e.mode]):null}const R=new w(N,(e=>({__tag:"PolygonOffset",...e})));function N(e){return e?C([e.factor,e.units]):null}const P=new w(L,(e=>({__tag:"DepthTest",...e})));function L(e){return e?C([e.func]):null}const D=new w(F,(e=>({__tag:"StencilTest",...e})));function F(e){return e?C([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const B=new w(z,(e=>({__tag:"DepthWrite",...e})));function z(e){return e?C([e.zNear,e.zFar]):null}const G=new w(U,(e=>({__tag:"ColorWrite",...e})));function U(e){return e?C([e.r,e.g,e.b,e.a]):null}const V=new w(H,(e=>({__tag:"StencilWrite",...e})));function H(e){return e?C([e.mask]):null}const W=new w(j,(e=>({__tag:"DrawBuffers",...e})));function j(e){return e?C(e.buffers):null}const k=new w(q,(e=>({blending:p(e.blending),culling:g(e.culling),polygonOffset:v(e.polygonOffset),depthTest:_(e.depthTest),stencilTest:x(e.stencilTest),depthWrite:T(e.depthWrite),colorWrite:b(e.colorWrite),stencilWrite:A(e.stencilWrite),drawBuffers:S(e.drawBuffers)})));function q(e){return e?C([O(e.blending),I(e.culling),N(e.polygonOffset),L(e.depthTest),F(e.stencilTest),z(e.depthWrite),U(e.colorWrite),H(e.stencilWrite),j(e.drawBuffers)]):null}class ${constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,n){return(r||e!==t)&&(n(e),this._pipelineInvalid=!0),e}}},50306:function(e,t,r){r.d(t,{t:function(){return i}});var n=r(98503);async function i(e,t){const{data:r}=await(0,n.U)(e,{responseType:"image",...t});return r}},31178:function(e,t,r){r.d(t,{$:function(){return $},E:function(){return S},H:function(){return H},I:function(){return z},N:function(){return R},O:function(){return M},T:function(){return O},U:function(){return N},V:function(){return P},_:function(){return E},a:function(){return C},b:function(){return h},f:function(){return ie},i:function(){return ee},k:function(){return m},s:function(){return u},v:function(){return p},w:function(){return _}});var n=r(98503),i=r(74362),o=r(92157),a=r(90211),s=r(83448),c=r(25209),l=(r(69852),r(10769),r(8082));class u{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,n.gC)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*d);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,d));e++)this._items.push(this._allocator())}}const d=1024;function h(e){return e?f((0,n.cv)(e.origin),(0,n.cv)(e.direction)):f((0,n.aA)(),(0,n.aA)())}function f(e,t){return{origin:e,direction:t}}function m(e,t){const r=T.get();return r.origin=e,r.direction=t,r}function p(e,t=h()){return v(e.origin,e.direction,t)}function g(e,t,r=h()){return(0,o.s)(r.origin,e),(0,o.c)(r.direction,t,e),r}function v(e,t,r=h()){return(0,o.s)(r.origin,e),(0,o.s)(r.direction,t),r}function _(e,t){const r=(0,o._)(l.c.get(),(0,o.A)(l.c.get(),e.direction),(0,o.c)(l.c.get(),t,e.origin));return(0,o.P)(r,r)}function x(e,t,r){const n=(0,o.P)(e.direction,(0,o.c)(r,t,e.origin));return(0,o.u)(r,e.origin,(0,o.g)(r,e.direction,n)),r}const T=new u((()=>h()));function b(e,t){const r=(0,o.r)(e),i=(0,n.fu)(e[2]/r),a=Math.atan2(e[1]/r,e[0]/r);return(0,o.o)(t,r,i,a),t}const A=S();function S(){return(0,s.n)()}const E=a.L,w=a.L;function C(e,t){return(0,a.a)(t,e)}function M(e,t){return(0,s.r)(e[0],e[1],e[2],t)}function O(e){return e}function y(e){e[0]=e[1]=e[2]=e[3]=0}function I(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e}function R(e){return e[3]}function N(e){return e}function P(e,t,r,n){return(0,s.r)(e,t,r,n)}function L(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r}function D(e,t,r){return e!==r&&C(e,r),r}function F(e,t){return t}function B(e,t,r){if(null==t||!U(e,t,G))return!1;let{t0:n,t1:i}=G;if((n<0||i<n&&i>0)&&(n=i),n<0)return!1;if(r){const{origin:e,direction:i}=t;r[0]=e[0]+i[0]*n,r[1]=e[1]+i[1]*n,r[2]=e[2]+i[2]*n}return!0}function z(e,t,r){const i=g(t,r);if(!U(e,i,G))return[];const{origin:a,direction:s}=i,{t0:l,t1:u}=G,d=t=>{const r=(0,n.aA)();return(0,o.q)(r,a,s,t),$(e,r,r)};return Math.abs(l-u)<(0,c.e)()?[d(l)]:[d(l),d(u)]}const G={t0:0,t1:0};function U(e,t,r){const{origin:n,direction:i}=t,o=V;o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2];const a=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===a)return!1;const s=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),c=s*s-4*a*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(c<0)return!1;const l=Math.sqrt(c);return r.t0=(-s-l)/(2*a),r.t1=(-s+l)/(2*a),!0}const V=(0,n.aA)();function H(e,t){return B(e,t,null)}function W(e,t,r){if(B(e,t,r))return r;const n=j(e,t,l.c.get());return(0,o.u)(r,t.origin,(0,o.g)(l.c.get(),t.direction,(0,o.p)(t.origin,n)/(0,o.r)(t.direction))),r}function j(e,t,r){const n=l.c.get(),a=l.a.get();(0,o._)(n,t.origin,t.direction);const s=R(e);(0,o._)(r,n,t.origin),(0,o.g)(r,r,1/(0,o.r)(r)*s);const c=X(e,t.origin),u=(0,l.b)(t.origin,r);return(0,i.p)(a,u+c,n),(0,o.E)(r,r,a),r}function k(e,t,r,n){const i=R(e),o=i*i,a=t+.5*Math.PI,s=r*r+o-2*Math.cos(a)*r*i,c=Math.sqrt(s),l=s-o;if(l<=0)return.5;const u=Math.sqrt(l),d=Math.acos(u/c)-Math.asin(i/(c/Math.sin(a)));return Math.min(1,(d+.5*n)/n)}function q(e,t,r){return B(e,t,r)?r:(x(t,e,r),$(e,r,r))}function $(e,t,r){const n=(0,o.c)(l.c.get(),t,e),i=(0,o.g)(l.c.get(),n,e[3]/(0,o.r)(n));return(0,o.u)(r,i,e)}function Y(e,t){const r=(0,o.c)(l.c.get(),t,e),n=(0,o.j)(r),i=e[3]*e[3];return Math.sqrt(Math.abs(n-i))}function X(e,t){const r=(0,o.c)(l.c.get(),t,e),i=(0,o.r)(r),a=R(e),s=a+Math.abs(a-i);return(0,n.cC)(a/s)}const J=(0,n.aA)();function Z(e,t,r,i){const a=(0,o.c)(J,t,e);switch(r){case n.cD.X:{const e=b(a,J)[2];return(0,o.o)(i,-Math.sin(e),Math.cos(e),0)}case n.cD.Y:{const e=b(a,J),t=e[1],r=e[2],n=Math.sin(t);return(0,o.o)(i,-n*Math.cos(r),-n*Math.sin(r),Math.cos(t))}case n.cD.Z:return(0,o.A)(i,a);default:return}}function K(e,t){const r=(0,o.c)(re,t,e);return(0,o.r)(r)-e[3]}function Q(e,t,r,i){const a=K(e,t),s=Z(e,t,n.cD.Z,re),c=(0,o.g)(re,s,r-a);return(0,o.u)(i,t,c)}function ee(e,t){const r=(0,o.v)(e,t),n=R(e);return r<=n*n}function te(e,t,r=(0,s.n)()){const n=(0,o.p)(e,t),i=e[3],c=t[3];return n+c<i?((0,a.a)(r,e),r):n+i<c?((0,a.a)(r,t),r):((0,o.I)(r,e,t,(n+c-i)/(2*n)),r[3]=(n+i+c)/2,r)}const re=(0,n.aA)(),ne=S(),ie=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:A,altitudeAt:K,angleToSilhouette:X,axisAt:Z,cameraFrustumCoverage:k,clear:y,closestPoint:q,closestPointOnSilhouette:j,containsPoint:ee,copy:C,create:S,distanceToSilhouette:Y,elevate:L,equals:w,exactEquals:E,fromCenterAndRadius:M,fromRadius:I,fromValues:P,getCenter:N,getExtent:F,getRadius:R,intersectLine:z,intersectRay:B,intersectRayClosestSilhouette:W,intersectsRay:H,projectPoint:$,setAltitudeAt:Q,setExtent:D,tmpSphere:ne,union:te,wrap:O},Symbol.toStringTag,{value:"Module"}))},7132:function(e,t,r){r.d(t,{S:function(){return l},v:function(){return c}});var n=r(31178),i=r(92157),o=r(98503),a=r(84517);r(8082);function s(e){return e?{p0:(0,o.cv)(e.p0),p1:(0,o.cv)(e.p1),p2:(0,o.cv)(e.p2)}:{p0:(0,o.aA)(),p1:(0,o.aA)(),p2:(0,o.aA)()}}function c(e,t,r){const n=t[0]-e[0],i=t[1]-e[1],o=r[0]-e[0],a=r[1]-e[1];return.5*Math.abs(n*a-i*o)}function l(e,t,r){return(0,i.c)(u,t,e),(0,i.c)(d,r,e),.5*(0,i.r)((0,i._)(u,u,d))}new n.s(a.v),new n.s((()=>s()));const u=(0,o.aA)(),d=(0,o.aA)()},11942:function(e,t,r){function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}r.d(t,{e:function(){return n}})}}]);
//# sourceMappingURL=8003.0aab9dd1.js.map
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(e, t, n) {
      e.exports = n('zUnb');
    },
    zUnb: function(e, t, n) {
      'use strict';
      function r(e) {
        return typeof e == 'function';
      }
      function o(e) {
        setTimeout(() => {
          throw e;
        });
      }
      function u(e) {
        return e !== null && typeof e == 'object';
      }
      function c(e) {
        Error.call(this);
        this.message = e
          ? `${e.length} errors occurred during unsubscription:\n${e
              .map((e, t) => `${t + 1}) ${e.toString()}`)
              .join('\n  ')}`
          : '';
        this.name = 'UnsubscriptionError';
        this.errors = e;
        return this;
      }
      function p(e) {
        return e.reduce((e, t) => e.concat(t instanceof h ? t.errors : t), []);
      }
      function v() {}
      function _(...e) {
        return w(e);
      }
      function w(e) {
        if (e) {
          if (e.length === 1) {
            return e[0];
          } else {
            return function(t) {
              return e.reduce((e, t) => t(e), t);
            };
          }
        } else {
          return v;
        }
      }
      function C(e) {
        if (!e) {
          e = i.Promise || Promise;
        }
        if (!e) {
          throw new Error('no Promise impl found');
        }
        return e;
      }
      function x() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
      }
      function R(e) {
        return e && typeof e.schedule == 'function';
      }
      function O() {
        if (typeof Symbol == 'function' && Symbol.iterator) {
          return Symbol.iterator;
        } else {
          return '@@iterator';
        }
      }
      function L(e) {
        return (
          !!e && typeof e.subscribe != 'function' && typeof e.then == 'function'
        );
      }
      function j(e, t, n, r, s = new I(e, n, r)) {
        if (!s.closed) {
          return F(t)(s);
        }
      }
      function $(e, t) {
        return function(n) {
          if (typeof e != 'function') {
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          }
          return n.lift(new z(e, t));
        };
      }
      function q(e, t) {
        return new b(
          t
            ? n => {
                const r = new d();
                let s = 0;
                r.add(
                  t.schedule(function() {
                    if (s === e.length) {
                      n.complete();
                    } else {
                      n.next(e[s++]);
                      if (!n.closed) {
                        r.add(this.schedule());
                      }
                    }
                  })
                );
                return r;
              }
            : N(e)
        );
      }
      function Q(e, t) {
        if (!t) {
          if (e instanceof b) {
            return e;
          } else {
            return new b(F(e));
          }
        }
        if (e != null) {
          if (
            (function(e) {
              return e && typeof e[y] == 'function';
            })(e)
          ) {
            return (function(e, t) {
              return new b(
                t
                  ? n => {
                      const r = new d();
                      r.add(
                        t.schedule(() => {
                          const s = e[y]();
                          r.add(
                            s.subscribe({
                              next(e) {
                                r.add(t.schedule(() => n.next(e)));
                              },
                              error(e) {
                                r.add(t.schedule(() => n.error(e)));
                              },
                              complete() {
                                r.add(t.schedule(() => n.complete()));
                              },
                            })
                          );
                        })
                      );
                      return r;
                    }
                  : V(e)
              );
            })(e, t);
          }
          if (L(e)) {
            return (function(e, t) {
              return new b(
                t
                  ? n => {
                      const r = new d();
                      r.add(
                        t.schedule(() =>
                          e.then(
                            e => {
                              r.add(
                                t.schedule(() => {
                                  n.next(e);
                                  r.add(t.schedule(() => n.complete()));
                                })
                              );
                            },
                            e => {
                              r.add(t.schedule(() => n.error(e)));
                            }
                          )
                        )
                      );
                      return r;
                    }
                  : P(e)
              );
            })(e, t);
          }
          if (U(e)) {
            return q(e, t);
          }
          if (
            (function(e) {
              return e && typeof e[M] == 'function';
            })(e) ||
            typeof e == 'string'
          ) {
            return (function(e, t) {
              if (!e) {
                throw new Error('Iterable cannot be null');
              }
              return new b(
                t
                  ? n => {
                      const r = new d();
                      let s;
                      r.add(() => {
                        if (s && typeof s.return == 'function') {
                          s.return();
                        }
                      });
                      r.add(
                        t.schedule(() => {
                          s = e[M]();
                          r.add(
                            t.schedule(function() {
                              if (n.closed) {
                                return;
                              }
                              let e;
                              let t;
                              try {
                                const n = s.next();
                                e = n.value;
                                t = n.done;
                              } catch (r) {
                                n.error(r);
                                return;
                              }
                              if (t) {
                                n.complete();
                              } else {
                                n.next(e);
                                this.schedule();
                              }
                            })
                          );
                        })
                      );
                      return r;
                    }
                  : D(e)
              );
            })(e, t);
          }
        }
        throw new TypeError(
          ((e !== null && typeof e) || e) + ' is not observable'
        );
      }
      function G(e, t, n = Number.POSITIVE_INFINITY) {
        if (typeof t == 'function') {
          return r =>
            r.pipe(G((n, r) => Q(e(n, r)).pipe($((e, s) => t(n, e, r, s))), n));
        } else {
          if (typeof t == 'number') {
            n = t;
          }
          return t => t.lift(new W(e, n));
        }
      }
      function K(e) {
        return e;
      }
      function J(e = Number.POSITIVE_INFINITY) {
        return G(K, e);
      }
      function Y() {
        return function(e) {
          return e.lift(new X(e));
        };
      }
      function se() {
        return new k();
      }
      function oe(e, t, n) {
        function s(...e) {
          function n(e, n, r) {
            const s = e.hasOwnProperty(ie)
              ? e[ie]
              : Object.defineProperty(e, ie, { value: [] })[ie];
            while (s.length <= r) {
              s.push(null);
            }
            (s[r] = s[r] || []).push(t);
            return e;
          }
          if (this instanceof s) {
            r.apply(this, e);
            return this;
          }
          const t = new s(...e);
          n.annotation = t;
          return n;
        }
        const r = (function() {
          var e = t;
          return function(...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) {
                this[e] = n[e];
              }
            }
          };
        })();
        if (n) {
          s.prototype = Object.create(n.prototype);
        }
        s.prototype.ngMetadataName = e;
        s.annotationCls = s;
        return s;
      }
      function de(e) {
        for (let t in e) {
          if (e[t] === de) {
            return t;
          }
        }
        throw Error('Could not find renamed property on target object.');
      }
      function pe(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function fe(e) {
        const t = e[ge];
        if (t && t.token === e) {
          return t;
        } else {
          return null;
        }
      }
      function me(e) {
        if (typeof e == 'string') {
          return e;
        }
        if (e instanceof Array) {
          return '[' + e.map(me).join(', ') + ']';
        }
        if (e == null) {
          return '' + e;
        }
        if (e.overriddenName) {
          return `${e.overriddenName}`;
        }
        if (e.name) {
          return `${e.name}`;
        }
        const t = e.toString();
        if (t == null) {
          return '' + t;
        }
        const n = t.indexOf('\n');
        if (n === -1) {
          return t;
        } else {
          return t.substring(0, n);
        }
      }
      function ve(e) {
        e.__forward_ref__ = ve;
        e.toString = function() {
          return me(this());
        };
        return e;
      }
      function _e(e) {
        const t = e;
        if (
          typeof t == 'function' &&
          t.hasOwnProperty(ye) &&
          t.__forward_ref__ === ve
        ) {
          return t();
        } else {
          return e;
        }
      }
      function Ve(e) {
        const t = De;
        De = e;
        return t;
      }
      function Ue(e, t = he.Default) {
        if (De === void 0) {
          throw new Error('inject() must be called from an injection context');
        }
        if (De === null) {
          return (function(e, t, n) {
            const r = fe(e);
            if (r && r.providedIn == 'root') {
              if (r.value === void 0) {
                return (r.value = r.factory());
              } else {
                return r.value;
              }
            }
            if (n & he.Optional) {
              return null;
            }
            throw new Error(`Injector: NOT_FOUND [${me(e)}]`);
          })(e, 0, t);
        } else {
          return De.get(e, t & he.Optional ? null : void 0, t);
        }
      }
      function Le(e, t = he.Default) {
        return (Me || Ue)(e, t);
      }
      function je(e, t, n, r = null) {
        e = e && e.charAt(0) === '\n' && e.charAt(1) == Ne ? e.substr(2) : e;
        let s = me(t);
        if (t instanceof Array) {
          s = t.map(me).join(' -> ');
        } else if (typeof t == 'object') {
          let e = [];
          for (let n in t) {
            if (t.hasOwnProperty(n)) {
              let r = t[n];
              e.push(
                n + ':' + (typeof r == 'string' ? JSON.stringify(r) : me(r))
              );
            }
          }
          s = `{${e.join(', ')}}`;
        }
        return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${e.replace(Ie, '\n  ')}`;
      }
      function ze(e, t, n) {
        if (t >= e.length) {
          e.push(n);
        } else {
          e.splice(t, 0, n);
        }
      }
      function Be(e, t) {
        if (t >= e.length - 1) {
          return e.pop();
        } else {
          return e.splice(t, 1)[0];
        }
      }
      function Ke(e) {
        return e[Ge];
      }
      function Je(e) {
        return e[We];
      }
      function Ye(e, ...t) {
        e.error(...t);
      }
      function nt() {
        tt = true;
        return et;
      }
      function ot(e) {
        if ((e = String(e)).match(st) || e.match(it)) {
          return e;
        } else {
          if (nt()) {
            console.warn(
              `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
            );
          }
          return 'unsafe:' + e;
        }
      }
      function lt(e) {
        const t = {};
        for (const n of e.split(',')) {
          t[n] = true;
        }
        return t;
      }
      function at(...e) {
        const t = {};
        for (const n of e) {
          for (const e in n) {
            if (n.hasOwnProperty(e)) {
              t[e] = true;
            }
          }
        }
        return t;
      }
      function bt(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(_t, function(e) {
            return (
              '&#' +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(wt, function(e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function xt(e) {
        if (
          'content' in e &&
          (function(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && e.nodeName === 'TEMPLATE'
            );
          })(e)
        ) {
          return e.content;
        } else {
          return null;
        }
      }
      function Rt(e) {
        try {
          if (e == null) {
            return e;
          } else {
            return e.toString().slice(0, 30);
          }
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      function Ht(e) {
        return $t('Cannot mix multi providers and regular providers', e);
      }
      function $t(e, t) {
        return new Error(je(e, t, 'StaticInjectorError'));
      }
      function qt() {
        if (!Bt) {
          const e = Ee.Symbol;
          if (e && e.iterator) {
            Bt = e.iterator;
          } else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              if (
                n !== 'entries' &&
                n !== 'size' &&
                Map.prototype[n] === Map.prototype.entries
              ) {
                Bt = n;
              }
            }
          }
        }
        return Bt;
      }
      function Qt(e, t) {
        return (
          e === t ||
          (typeof e == 'number' && typeof t == 'number' && isNaN(e) && isNaN(t))
        );
      }
      function Gt(e, t) {
        const n = Zt(e);
        const r = Zt(t);
        if (n && r) {
          return (function(e, t, n) {
            const r = e[qt()]();
            const s = t[qt()]();
          })(e, t, Gt);
        }
        {
          const s = e && (typeof e == 'object' || typeof e == 'function');
          const i = t && (typeof t == 'object' || typeof t == 'function');
          return (!n && !!s && !r && !!i) || Qt(e, t);
        }
      }
      function Zt(e) {
        return (
          !!Kt(e) && (Array.isArray(e) || (!(e instanceof Map) && qt() in e))
        );
      }
      function Kt(e) {
        return e !== null && (typeof e == 'function' || typeof e == 'object');
      }
      function Jt(e) {
        return !!e && typeof e.then == 'function';
      }
      function Yt(e) {
        return !!e && typeof e.subscribe == 'function';
      }
      function nn(e) {
        const t = Error(
          `No component factory found for ${me(
            e
          )}. Did you add it to @NgModule.entryComponents?`
        );
        t[rn] = e;
        return t;
      }
      function un(...e) {}
      function Sn(e, t, n) {
        const r = e.previousIndex;
        if (r === null) {
          return r;
        }
        let s = 0;
        if (n && r < n.length) {
          s = n[r];
        }
        return r + t + s;
      }
      function Ln(e, t, n, r) {
        let s = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
        if (r) {
          s +=
            ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?';
        }
        return (function(e, t) {
          const n = new Error(e);
          Fn(n, t);
          return n;
        })(s, e);
      }
      function Fn(e, t) {
        e[Ge] = t;
        e[Ze] = t.logError.bind(t);
      }
      function jn(e) {
        return new Error(
          `ViewDestroyedError: Attempt to use a destroyed view: ${e}`
        );
      }
      function Hn(e, t, n) {
        const r = e.state;
        const s = 1792 & r;
        if (s === t) {
          e.state = (-1793 & r) | n;
          e.initIndex = -1;
          return true;
        } else {
          return s === n;
        }
      }
      function $n(e, t, n) {
        return (
          (1792 & e.state) === t &&
          e.initIndex <= n &&
          ((e.initIndex = n + 1), true)
        );
      }
      function zn(e, t) {
        return e.nodes[t];
      }
      function Bn(e, t) {
        return e.nodes[t];
      }
      function qn(e, t) {
        return e.nodes[t];
      }
      function Qn(e, t) {
        return e.nodes[t];
      }
      function Gn(e, t) {
        return e.nodes[t];
      }
      function Jn(e) {
        let t = Kn.get(e);
        if (!t) {
          t = me(e) + '_' + Kn.size;
          Kn.set(e, t);
        }
        return t;
      }
      function er(e) {
        return {
          id: Yn,
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data,
        };
      }
      function nr(e, t, n, r) {
        return !!(2 & e.state) || !Qt(e.oldValues[t.bindingIndex + n], r);
      }
      function rr(e, t, n, r) {
        return (
          !!nr(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), true)
        );
      }
      function sr(e, t, n, r) {
        const s = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !Gt(s, r)) {
          const i = t.bindings[n].name;
          throw Ln(
            Wn.createDebugContext(e, t.nodeIndex),
            `${i}: ${s}`,
            `${i}: ${r}`,
            (1 & e.state) != 0
          );
        }
      }
      function ir(e) {
        let t = e;
        while (t) {
          if (2 & t.def.flags) {
            t.state |= 8;
          }
          t = t.viewContainerParent || t.parent;
        }
      }
      function or(e, t) {
        let n = e;
        while (n && n !== t) {
          n.state |= 64;
          n = n.viewContainerParent || n.parent;
        }
      }
      function lr(e, t, n, r) {
        try {
          ir(33554432 & e.def.nodes[t].flags ? Bn(e, t).componentView : e);
          return Wn.handleEvent(e, t, n, r);
        } catch (s) {
          e.root.errorHandler.handleError(s);
        }
      }
      function ar(e) {
        if (e.parent) {
          return Bn(e.parent, e.parentNodeDef.nodeIndex);
        } else {
          return null;
        }
      }
      function ur(e) {
        if (e.parent) {
          return e.parentNodeDef.parent;
        } else {
          return null;
        }
      }
      function cr(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Bn(e, t.nodeIndex).renderElement;
          case 2:
            return zn(e, t.nodeIndex).renderText;
        }
      }
      function hr(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function dr(e) {
        return !!e.parent && !(32768 & e.parentNodeDef.flags);
      }
      function pr(e) {
        const t = {};
        let n = 0;
        const r = {};
        if (e) {
          e.forEach(([e, s]) => {
            if (typeof e == 'number') {
              t[e] = s;
              n |= (function(e) {
                return 1 << (e % 32);
              })(e);
            } else {
              r[e] = s;
            }
          });
        }
        return { matchedQueries: t, references: r, matchedQueryIds: n };
      }
      function fr(e, t) {
        return e.map(e => {
          let n;
          let r;
          if (Array.isArray(e)) {
            [r, n] = e;
          } else {
            r = 0;
            n = e;
          }
          if (n && (typeof n == 'function' || typeof n == 'object') && t) {
            Object.defineProperty(n, Pe, { value: t, configurable: true });
          }
          return { flags: r, token: n, tokenKey: Jn(n) };
        });
      }
      function gr(e, t, n) {
        let r = n.renderParent;
        if (r) {
          if (
            (1 & r.flags) == 0 ||
            (33554432 & r.flags) == 0 ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === qe.Native)
          ) {
            return Bn(e, n.renderParent.nodeIndex).renderElement;
          } else {
            return;
          }
        } else {
          return t;
        }
      }
      function yr(e) {
        let t = mr.get(e);
        if (!t) {
          t = e(() => Zn);
          t.factory = e;
          mr.set(e, t);
        }
        return t;
      }
      function vr(e, t, n, r, s) {
        if (t === 3) {
          n = e.renderer.parentNode(cr(e, e.def.lastRenderRootNode));
        }
        _r(e, t, 0, e.def.nodes.length - 1, n, r, s);
      }
      function _r(e, t, n, r, s, i, o) {
        for (let l = n; l <= r; l++) {
          const n = e.def.nodes[l];
          if (11 & n.flags) {
            br(e, n, t, s, i, o);
          }
          l += n.childCount;
        }
      }
      function wr(e, t, n, r, s, i) {
        let o = e;
        while (o && !hr(o)) {
          o = o.parent;
        }
        const l = o.parent;
        const a = ur(o);
        const u = a.nodeIndex + a.childCount;
        for (let c = a.nodeIndex + 1; c <= u; c++) {
          const e = l.def.nodes[c];
          if (e.ngContentIndex === t) {
            br(l, e, n, r, s, i);
          }
          c += e.childCount;
        }
        if (!l.parent) {
          const o = e.root.projectableNodes[t];
          if (o) {
            for (let t = 0; t < o.length; t++) {
              Cr(e, o[t], n, r, s, i);
            }
          }
        }
      }
      function br(e, t, n, r, s, i) {
        if (8 & t.flags) {
          wr(e, t.ngContent.index, n, r, s, i);
        } else {
          const o = cr(e, t);
          if (n === 3 && 33554432 & t.flags && 48 & t.bindingFlags) {
            if (16 & t.bindingFlags) {
              Cr(e, o, n, r, s, i);
            }
            if (32 & t.bindingFlags) {
              Cr(Bn(e, t.nodeIndex).componentView, o, n, r, s, i);
            }
          } else {
            Cr(e, o, n, r, s, i);
          }
          if (16777216 & t.flags) {
            const o = Bn(e, t.nodeIndex).viewContainer._embeddedViews;
            for (let e = 0; e < o.length; e++) {
              vr(o[e], n, r, s, i);
            }
          }
          if (1 & t.flags && !t.element.name) {
            _r(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, s, i);
          }
        }
      }
      function Cr(e, t, n, r, s, i) {
        const o = e.renderer;
        switch (n) {
          case 1:
            o.appendChild(r, t);
            break;
          case 2:
            o.insertBefore(r, t, s);
            break;
          case 3:
            o.removeChild(r, t);
            break;
          case 0:
            i.push(t);
        }
      }
      function Er(e) {
        if (e[0] === ':') {
          const t = e.match(xr);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function Sr(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          t |= e[n].flags;
        }
        return t;
      }
      function Ir(e, t, n, r) {
        n = _e(n);
        return { index: -1, deps: fr(r, me(t)), flags: e, token: t, value: n };
      }
      function Nr(e, t, n = Mt.THROW_IF_NOT_FOUND) {
        const r = Ve(e);
        try {
          if (8 & t.flags) {
            return t.token;
          }
          if (2 & t.flags) {
            n = null;
          }
          if (1 & t.flags) {
            return e._parent.get(t.token, n);
          }
          const o = t.tokenKey;
          switch (o) {
            case kr:
            case Ar:
            case Rr:
              return e;
          }
          const l = e._def.providersByKey[o];
          let a;
          if (l) {
            let t = e._providers[l.index];
            if (t === void 0) {
              t = e._providers[l.index] = Pr(e, l);
            }
            if (t === Tr) {
              return;
            } else {
              return t;
            }
          }
          if (
            (a = fe(t.token)) &&
            ((s = e),
            (i = a).providedIn != null &&
              ((function() {
                var e = s;
                var t = i.providedIn;
                return e._def.modules.indexOf(t) > -1;
              })() ||
                (i.providedIn === 'root' && s._def.isRoot)))
          ) {
            const n = e._providers.length;
            e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
              flags: 5120,
              value: a.factory,
              deps: [],
              index: n,
              token: t.token,
            };
            e._providers[n] = Tr;
            return (e._providers[n] = Pr(e, e._def.providersByKey[t.tokenKey]));
          }
          if (4 & t.flags) {
            return n;
          } else {
            return e._parent.get(t.token, n);
          }
        } finally {
          Ve(r);
        }
        var s;
        var i;
      }
      function Pr(e, t) {
        let n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(Nr(e, n[0]));
                case 2:
                  return new t(Nr(e, n[0]), Nr(e, n[1]));
                case 3:
                  return new t(Nr(e, n[0]), Nr(e, n[1]), Nr(e, n[2]));
                default:
                  const s = new Array(r);
                  for (let t = 0; t < r; t++) {
                    s[t] = Nr(e, n[t]);
                  }
                  return new t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(Nr(e, n[0]));
                case 2:
                  return t(Nr(e, n[0]), Nr(e, n[1]));
                case 3:
                  return t(Nr(e, n[0]), Nr(e, n[1]), Nr(e, n[2]));
                default:
                  const s = Array(r);
                  for (let t = 0; t < r; t++) {
                    s[t] = Nr(e, n[t]);
                  }
                  return t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = Nr(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        if (
          n !== Tr &&
          n !== null &&
          typeof n == 'object' &&
          !(131072 & t.flags) &&
          typeof n.ngOnDestroy == 'function'
        ) {
          t.flags |= 131072;
        }
        if (n === void 0) {
          return Tr;
        } else {
          return n;
        }
      }
      function Or(e, t) {
        const n = e.viewContainer._embeddedViews;
        if (t == null || t >= n.length) {
          t = n.length - 1;
        }
        if (t < 0) {
          return null;
        }
        const r = n[t];
        r.viewContainerParent = null;
        Be(n, t);
        Wn.dirtyParentQueries(r);
        Dr(r);
        return r;
      }
      function Mr(e, t, n) {
        const r = t ? cr(t, t.def.lastRenderRootNode) : e.renderElement;
        const s = n.renderer.parentNode(r);
        const i = n.renderer.nextSibling(r);
        vr(n, 2, s, i, void 0);
      }
      function Dr(e) {
        vr(e, 3, null, null, void 0);
      }
      function Ur(e, t, n, r, s, i) {
        return new Lr(e, t, n, r, s, i);
      }
      function jr(e, t, n) {
        return new Hr(e, t, n);
      }
      function $r(e) {
        return new zr(e);
      }
      function Br(e, t) {
        return new qr(e, t);
      }
      function Qr(e, t) {
        return new Gr(e, t);
      }
      function Wr(e, t) {
        const n = e.def.nodes[t];
        if (1 & n.flags) {
          const t = Bn(e, n.nodeIndex);
          if (n.element.template) {
            return t.template;
          } else {
            return t.renderElement;
          }
        }
        if (2 & n.flags) {
          return zn(e, n.nodeIndex).renderText;
        }
        if (20240 & n.flags) {
          return qn(e, n.nodeIndex).instance;
        }
        throw new Error(`Illegal state: read nodeValue for node index ${t}`);
      }
      function Zr(e) {
        return new Kr(e.renderer);
      }
      function Jr(e, t, n, r) {
        return new Yr(e, t, n, r);
      }
      function ls(e, t, n, r, s, i, o, l) {
        const a = [];
        if (o) {
          for (let c in o) {
            const [e, t] = o[c];
            a[e] = {
              flags: 8,
              name: c,
              nonMinifiedName: t,
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        }
        const u = [];
        if (l) {
          for (let c in l) {
            u.push({ type: 1, propName: c, target: null, eventName: l[c] });
          }
        }
        return us(e, (t |= 16384), n, r, s, s, i, a, u);
      }
      function as(e, t, n, r, s) {
        return us(-1, e, t, 0, n, r, s);
      }
      function us(e, t, n, r, s, i, o, l, a) {
        const { matchedQueries: u, references: c, matchedQueryIds: h } = pr(n);
        if (!a) {
          a = [];
        }
        if (!l) {
          l = [];
        }
        i = _e(i);
        const d = fr(o, me(s));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: u,
          matchedQueryIds: h,
          references: c,
          ngContentIndex: -1,
          childCount: r,
          bindings: l,
          bindingFlags: Sr(l),
          outputs: a,
          element: null,
          provider: { token: s, value: i, deps: d },
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function cs(e, t) {
        return fs(e, t);
      }
      function hs(e, t) {
        let n = e;
        while (n.parent && !hr(n)) {
          n = n.parent;
        }
        return gs(n.parent, ur(n), true, t.provider.value, t.provider.deps);
      }
      function ds(e, t) {
        const n = gs(
          e,
          t.parent,
          (32768 & t.flags) > 0,
          t.provider.value,
          t.provider.deps
        );
        if (t.outputs.length) {
          for (let r = 0; r < t.outputs.length; r++) {
            const s = t.outputs[r];
            const i = n[s.propName];
            if (!Yt(i)) {
              throw new Error(
                `@Output ${s.propName} not initialized in '${
                  n.constructor.name
                }'.`
              );
            }
            {
              const n = i.subscribe(ps(e, t.parent.nodeIndex, s.eventName));
              e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n);
            }
          }
        }
        return n;
      }
      function ps(e, t, n) {
        return r => lr(e, t, n, r);
      }
      function fs(e, t) {
        const n = (8192 & t.flags) > 0;
        const r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return gs(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function(e, t, n, r, s) {
              const i = s.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(ys(e, t, n, s[0]));
                case 2:
                  return r(ys(e, t, n, s[0]), ys(e, t, n, s[1]));
                case 3:
                  return r(
                    ys(e, t, n, s[0]),
                    ys(e, t, n, s[1]),
                    ys(e, t, n, s[2])
                  );
                default:
                  const o = Array(i);
                  for (let r = 0; r < i; r++) {
                    o[r] = ys(e, t, n, s[r]);
                  }
                  return r(...o);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return ys(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function gs(e, t, n, r, s) {
        const i = s.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(ys(e, t, n, s[0]));
          case 2:
            return new r(ys(e, t, n, s[0]), ys(e, t, n, s[1]));
          case 3:
            return new r(
              ys(e, t, n, s[0]),
              ys(e, t, n, s[1]),
              ys(e, t, n, s[2])
            );
          default:
            const o = new Array(i);
            for (let r = 0; r < i; r++) {
              o[r] = ys(e, t, n, s[r]);
            }
            return new r(...o);
        }
      }
      function ys(e, t, n, r, s = Mt.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) {
          return r.token;
        }
        const i = e;
        if (2 & r.flags) {
          s = null;
        }
        const o = r.tokenKey;
        if (o === ss) {
          n = !!t && !!t.element.componentView;
        }
        if (t && 1 & r.flags) {
          n = false;
          t = t.parent;
        }
        let l = e;
        while (l) {
          if (t) {
            switch (o) {
              case Xr:
                return Zr(vs(l, t, n));
              case es:
                return vs(l, t, n).renderer;
              case ts:
                return new cn(Bn(l, t.nodeIndex).renderElement);
              case ns:
                return Bn(l, t.nodeIndex).viewContainer;
              case rs:
                if (t.element.template) {
                  return Bn(l, t.nodeIndex).template;
                }
                break;
              case ss:
                return $r(vs(l, t, n));
              case is:
              case os:
                return Qr(l, t);
              default:
                const e = (n
                  ? t.element.allProviders
                  : t.element.publicProviders)[o];
                if (e) {
                  let t = qn(l, e.nodeIndex);
                  if (!t) {
                    t = { instance: fs(l, e) };
                    l.nodes[e.nodeIndex] = t;
                  }
                  return t.instance;
                }
            }
          }
          n = hr(l);
          t = ur(l);
          l = l.parent;
          if (4 & r.flags) {
            l = null;
          }
        }
        const a = i.root.injector.get(r.token, ms);
        if (a !== ms || s === ms) {
          return a;
        } else {
          return i.root.ngModule.injector.get(r.token, s);
        }
      }
      function vs(e, t, n) {
        let r;
        if (n) {
          r = Bn(e, t.nodeIndex).componentView;
        } else {
          for (r = e; r.parent && !hr(r); ) {
            r = r.parent;
          }
        }
        return r;
      }
      function _s(e, t, n, r, s, i) {
        if (32768 & n.flags) {
          const t = Bn(e, n.parent.nodeIndex).componentView;
          if (2 & t.def.flags) {
            t.state |= 8;
          }
        }
        t.instance[n.bindings[r].name] = s;
        if (524288 & n.flags) {
          i = i || {};
          const t = Wt.unwrap(e.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new Xt(t, s, (2 & e.state) != 0);
        }
        e.oldValues[n.bindingIndex + r] = s;
        return i;
      }
      function ws(e, t) {
        if (!(e.def.nodeFlags & t)) {
          return;
        }
        const n = e.def.nodes;
        let r = 0;
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          let o = i.parent;
          if (!o && i.flags & t) {
            Cs(e, s, i.flags & t, r++);
          }
          for (
            (i.childFlags & t) == 0 && (s += i.childCount);
            o && 1 & o.flags && s === o.nodeIndex + o.childCount;

          ) {
            if (o.directChildFlags & t) {
              r = bs(e, o, t, r);
            }
            o = o.parent;
          }
        }
      }
      function bs(e, t, n, r) {
        for (let s = t.nodeIndex + 1; s <= t.nodeIndex + t.childCount; s++) {
          const t = e.def.nodes[s];
          if (t.flags & n) {
            Cs(e, s, t.flags & n, r++);
          }
          s += t.childCount;
        }
        return r;
      }
      function Cs(e, t, n, r) {
        const s = qn(e, t);
        if (!s) {
          return;
        }
        const i = s.instance;
        if (i) {
          Wn.setCurrentNode(e, t);
          if (1048576 & n && $n(e, 512, r)) {
            i.ngAfterContentInit();
          }
          if (2097152 & n) {
            i.ngAfterContentChecked();
          }
          if (4194304 & n && $n(e, 768, r)) {
            i.ngAfterViewInit();
          }
          if (8388608 & n) {
            i.ngAfterViewChecked();
          }
          if (131072 & n) {
            i.ngOnDestroy();
          }
        }
      }
      function Is(e) {
        var t = 'Expected localeId to be defined';
        if (e == null) {
          (function() {
            var e = t;
            throw new Error(`ASSERTION ERROR: ${e}`);
          })();
        }
        if (typeof e == 'string') {
          Rs = e.toLowerCase().replace(/_/g, '-');
        }
      }
      function Ps() {
        return this._results[qt()]();
      }
      function Us() {
        return `${Ls()}${Ls()}${Ls()}`;
      }
      function Ls() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      function qs() {
        throw new Error('Runtime compiler is not loaded');
      }
      function ei() {
        const e = Ee.wtf;
        return !!e && !((Ys = e.trace), !Ys) && !((Xs = Ys.events), 0);
      }
      function ni(e, t) {
        return null;
      }
      function oi(e) {
        if (typeof Zone == 'undefined') {
          ii.then(() => {
            if (e) {
              e.apply(null, null);
            }
          });
        } else {
          Zone.current.scheduleMicroTask('scheduleMicrotask', e);
        }
      }
      function ai() {}
      function ci(e) {
        if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable) {
          try {
            e._nesting++;
            e.onMicrotaskEmpty.emit(null);
          } finally {
            e._nesting--;
            if (!e.hasPendingMicrotasks) {
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = true;
              }
            }
          }
        }
      }
      function hi(e) {
        e._nesting++;
        if (e.isStable) {
          e.isStable = false;
          e.onUnstable.emit(null);
        }
      }
      function di(e) {
        e._nesting--;
        ci(e);
      }
      function xi(e, t, n = []) {
        const r = `Platform: ${t}`;
        const s = new Se(r);
        return (t = []) => {
          let i = Ei();
          if (!i || i.injector.get(bi, false)) {
            if (e) {
              e(n.concat(t).concat({ provide: s, useValue: true }));
            } else {
              const e = n.concat(t).concat({ provide: s, useValue: true });
              (function(e) {
                if (yi && !yi.destroyed && !yi.injector.get(bi, false)) {
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                }
                yi = e.get(Si);
                const t = e.get(Fs, null);
                if (t) {
                  t.forEach(e => e());
                }
              })(Mt.create({ providers: e, name: r }));
            }
          }
          return (function() {
            var e = s;
            const t = Ei();
            if (!t) {
              throw new Error('No platform exists!');
            }
            if (!t.injector.get(e, null)) {
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            }
            return t;
          })();
        };
      }
      function Ei() {
        if (yi && !yi.destroyed) {
          return yi;
        } else {
          return null;
        }
      }
      function Ti(e, t) {
        if (Array.isArray(t)) {
          return t.reduce(Ti, e);
        } else {
          return Object.assign({}, e, t);
        }
      }
      function Ai(e, t) {
        const n = e.indexOf(t);
        if (n > -1) {
          e.splice(n, 1);
        }
      }
      function Di(e, t, n) {
        if (!e) {
          throw new Error(`Cannot find '${n}' in '${t}'`);
        }
        return e;
      }
      function Hi(e) {
        Fi.set(e.nativeNode, e);
      }
      function zi() {
        return Pn;
      }
      function Bi() {
        return On;
      }
      function qi(e) {
        if (e) {
          if (Bs) {
            Is(e);
          }
          return e;
        } else {
          return As;
        }
      }
      function Qi(e) {
        let t = [];
        e.onStable.subscribe(() => {
          while (t.length) {
            t.pop()();
          }
        });
        return function(e) {
          t.push(e);
        };
      }
      function Wi(e, t, n, r, s, i) {
        e |= 1;
        const { matchedQueries: o, references: l, matchedQueryIds: a } = pr(t);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: e,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: o,
          matchedQueryIds: a,
          references: l,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? yr(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: s || Zn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Zi(e, t, n, r, s, i, o = [], l, a, u, c, h) {
        if (!u) {
          u = Zn;
        }
        const { matchedQueries: d, references: p, matchedQueryIds: f } = pr(n);
        let g = null;
        let m = null;
        if (i) {
          [g, m] = Er(i);
        }
        l = l || [];
        const y = new Array(l.length);
        for (let w = 0; w < l.length; w++) {
          const [e, t, n] = l[w];
          const [r, s] = Er(t);
          let i = void 0;
          let o = void 0;
          switch (15 & e) {
            case 4:
              o = n;
              break;
            case 1:
            case 8:
              i = n;
          }
          y[w] = {
            flags: e,
            ns: r,
            name: s,
            nonMinifiedName: s,
            securityContext: i,
            suffix: o,
          };
        }
        a = a || [];
        const v = new Array(a.length);
        for (let w = 0; w < a.length; w++) {
          const [e, t] = a[w];
          v[w] = { type: 0, target: e, eventName: t, propName: null };
        }
        const _ = (o = o || []).map(([e, t]) => {
          const [n, r] = Er(e);
          return [n, r, t];
        });
        h = (function() {
          var e = h;
          if (e && e.id === Yn) {
            const t =
              (e.encapsulation != null && e.encapsulation !== qe.None) ||
              e.styles.length ||
              Object.keys(e.data).length;
            e.id = t ? `c${tr++}` : Xn;
          }
          if (e && e.id === Xn) {
            e = null;
          }
          return e || null;
        })();
        if (c) {
          t |= 33554432;
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: (t |= 1),
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: d,
          matchedQueryIds: f,
          references: p,
          ngContentIndex: r,
          childCount: s,
          bindings: y,
          bindingFlags: Sr(y),
          outputs: v,
          element: {
            ns: g,
            name: m,
            attrs: _,
            template: null,
            componentProvider: null,
            componentView: c || null,
            componentRendererType: h,
            publicProviders: null,
            allProviders: null,
            handleEvent: u || Zn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Ki(e, t, n) {
        const r = n.element;
        const s = e.root.selectorOrNode;
        const i = e.renderer;
        let o;
        if (e.parent || !s) {
          o = r.name ? i.createElement(r.name, r.ns) : i.createComment('');
          const s = gr(e, t, n);
          if (s) {
            i.appendChild(s, o);
          }
        } else {
          o = i.selectRootElement(
            s,
            !!r.componentRendererType &&
              r.componentRendererType.encapsulation === qe.ShadowDom
          );
        }
        if (r.attrs) {
          for (let l = 0; l < r.attrs.length; l++) {
            const [e, t, n] = r.attrs[l];
            i.setAttribute(o, t, n, e);
          }
        }
        return o;
      }
      function Ji(e, t, n, r) {
        for (let o = 0; o < n.outputs.length; o++) {
          const l = n.outputs[o];
          const a = Yi(
            e,
            n.nodeIndex,
            ((i = l.eventName), (s = l.target) ? `${s}:${i}` : i)
          );
          let u = l.target;
          let c = e;
          if (l.target === 'component') {
            u = null;
            c = t;
          }
          const h = c.renderer.listen(u || r, l.eventName, a);
          e.disposables[n.outputIndex + o] = h;
        }
        var s;
        var i;
      }
      function Yi(e, t, n) {
        return r => lr(e, t, n, r);
      }
      function Xi(e, t, n, r) {
        if (!rr(e, t, n, r)) {
          return false;
        }
        const s = t.bindings[n];
        const i = Bn(e, t.nodeIndex);
        const o = i.renderElement;
        const l = s.name;
        switch (15 & s.flags) {
          case 1:
            (function(e, t, n, r, s, i) {
              const o = t.securityContext;
              let l = o ? e.root.sanitizer.sanitize(o, i) : i;
              l = l != null ? l.toString() : null;
              const a = e.renderer;
              if (i == null) {
                a.removeAttribute(n, s, r);
              } else {
                a.setAttribute(n, s, l, r);
              }
            })(e, s, o, s.ns, l, r);
            break;
          case 2:
            (function(e, t, n, r) {
              const s = e.renderer;
              if (r) {
                s.addClass(t, n);
              } else {
                s.removeClass(t, n);
              }
            })(e, o, l, r);
            break;
          case 4:
            (function(e, t, n, r, s) {
              let i = e.root.sanitizer.sanitize(Et.STYLE, s);
              if (i == null) {
                i = null;
              } else {
                i = i.toString();
                const e = t.suffix;
                if (e != null) {
                  i += e;
                }
              }
              const o = e.renderer;
              if (i == null) {
                o.removeStyle(n, r);
              } else {
                o.setStyle(n, r, i);
              }
            })(e, s, o, l, r);
            break;
          case 8:
            (function(e, t, n, r, s) {
              const i = t.securityContext;
              let o = i ? e.root.sanitizer.sanitize(i, s) : s;
              e.renderer.setProperty(n, r, o);
            })(
              33554432 & t.flags && 32 & s.flags ? i.componentView : e,
              s,
              o,
              l,
              r
            );
        }
        return true;
      }
      function eo(e) {
        const t = e.def.nodeMatchedQueries;
        while (e.parent && dr(e)) {
          let n = e.parentNodeDef;
          e = e.parent;
          const r = n.nodeIndex + n.childCount;
          for (let s = 0; s <= r; s++) {
            const r = e.def.nodes[s];
            if (
              67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & t) === r.query.filterId
            ) {
              Gn(e, s).setDirty();
            }
            if (
              (!!(1 & r.flags) && !!(s + r.childCount < n.nodeIndex)) ||
              !(67108864 & r.childFlags) ||
              !(536870912 & r.childFlags)
            ) {
              s += r.childCount;
            }
          }
        }
        if (134217728 & e.def.nodeFlags) {
          for (let n = 0; n < e.def.nodes.length; n++) {
            const t = e.def.nodes[n];
            if (134217728 & t.flags && 536870912 & t.flags) {
              Gn(e, n).setDirty();
            }
            n += t.childCount;
          }
        }
      }
      function to(e, t) {
        const n = Gn(e, t.nodeIndex);
        if (!n.dirty) {
          return;
        }
        let r;
        let s = void 0;
        if (67108864 & t.flags) {
          const n = t.parent.parent;
          s = no(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, []);
          r = qn(e, t.parent.nodeIndex).instance;
        } else if (134217728 & t.flags) {
          s = no(e, 0, e.def.nodes.length - 1, t.query, []);
          r = e.component;
        }
        n.reset(s);
        const i = t.query.bindings;
        let o = false;
        for (let l = 0; l < i.length; l++) {
          const e = i[l];
          let t;
          switch (e.bindingType) {
            case 0:
              t = n.first;
              break;
            case 1:
              t = n;
              o = true;
          }
          r[e.propName] = t;
        }
        if (o) {
          n.notifyOnChanges();
        }
      }
      function no(e, t, n, r, s) {
        for (let i = t; i <= n; i++) {
          const t = e.def.nodes[i];
          const n = t.matchedQueries[r.id];
          if (n != null) {
            s.push(ro(e, t, n));
          }
          if (
            1 & t.flags &&
            t.element.template &&
            (t.element.template.nodeMatchedQueries & r.filterId) === r.filterId
          ) {
            const n = Bn(e, i);
            if ((t.childMatchedQueries & r.filterId) === r.filterId) {
              no(e, i + 1, i + t.childCount, r, s);
              i += t.childCount;
            }
            if (16777216 & t.flags) {
              const e = n.viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) {
                const i = e[t];
                const o = ar(i);
                if (o && o === n) {
                  no(i, 0, i.def.nodes.length - 1, r, s);
                }
              }
            }
            const o = n.template._projectedViews;
            if (o) {
              for (let e = 0; e < o.length; e++) {
                const t = o[e];
                no(t, 0, t.def.nodes.length - 1, r, s);
              }
            }
          }
          if ((t.childMatchedQueries & r.filterId) !== r.filterId) {
            i += t.childCount;
          }
        }
        return s;
      }
      function ro(e, t, n) {
        if (n != null) {
          switch (n) {
            case 1:
              return Bn(e, t.nodeIndex).renderElement;
            case 0:
              return new cn(Bn(e, t.nodeIndex).renderElement);
            case 2:
              return Bn(e, t.nodeIndex).template;
            case 3:
              return Bn(e, t.nodeIndex).viewContainer;
            case 4:
              return qn(e, t.nodeIndex).instance;
          }
        }
      }
      function so(e, t, n) {
        const r = gr(e, t, n);
        if (r) {
          wr(e, n.ngContent.index, 1, r, null, void 0);
        }
      }
      function io(e, t) {
        return lo(32, e, new Array(t));
      }
      function oo(e, t) {
        const n = Object.keys(t);
        const r = n.length;
        const s = new Array(r);
        for (let i = 0; i < r; i++) {
          const e = n[i];
          s[t[e]] = e;
        }
        return lo(64, e, s);
      }
      function lo(e, t, n) {
        const r = new Array(n.length);
        for (let s = 0; s < n.length; s++) {
          const e = n[s];
          r[s] = {
            flags: 8,
            name: e,
            ns: null,
            nonMinifiedName: e,
            securityContext: null,
            suffix: null,
          };
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: -1,
          childCount: 0,
          bindings: r,
          bindingFlags: Sr(r),
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function ao(e, t, n) {
        const r = new Array(n.length - 1);
        for (let s = 1; s < n.length; s++) {
          r[s - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[s],
          };
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null,
        };
      }
      function uo(e, t, n) {
        let r;
        const s = e.renderer;
        r = s.createText(n.text.prefix);
        const i = gr(e, t, n);
        if (i) {
          s.appendChild(i, r);
        }
        return { renderText: r };
      }
      function co(e, t) {
        return (e != null ? e.toString() : '') + t.suffix;
      }
      function ho(e, t, n, r) {
        let s = 0;
        let i = 0;
        let o = 0;
        let l = 0;
        let a = 0;
        let u = null;
        let c = null;
        let h = false;
        let d = false;
        let p = null;
        for (let f = 0; f < t.length; f++) {
          const e = t[f];
          e.nodeIndex = f;
          e.parent = u;
          e.bindingIndex = s;
          e.outputIndex = i;
          e.renderParent = c;
          o |= e.flags;
          a |= e.matchedQueryIds;
          if (e.element) {
            const t = e.element;
            t.publicProviders = u
              ? u.element.publicProviders
              : Object.create(null);
            t.allProviders = t.publicProviders;
            h = false;
            d = false;
            if (e.element.template) {
              a |= e.element.template.nodeMatchedQueries;
            }
          }
          fo(u, e, t.length);
          s += e.bindings.length;
          i += e.outputs.length;
          if (!c && 3 & e.flags) {
            p = e;
          }
          if (20224 & e.flags) {
            if (!h) {
              h = true;
              u.element.publicProviders = Object.create(
                u.element.publicProviders
              );
              u.element.allProviders = u.element.publicProviders;
            }
            const t = (32768 & e.flags) != 0;
            if ((8192 & e.flags) == 0 || t) {
              u.element.publicProviders[Jn(e.provider.token)] = e;
            } else {
              if (!d) {
                d = true;
                u.element.allProviders = Object.create(
                  u.element.publicProviders
                );
              }
              u.element.allProviders[Jn(e.provider.token)] = e;
            }
            if (t) {
              u.element.componentProvider = e;
            }
          }
          if (u) {
            u.childFlags |= e.flags;
            u.directChildFlags |= e.flags;
            u.childMatchedQueries |= e.matchedQueryIds;
            if (e.element && e.element.template) {
              u.childMatchedQueries |= e.element.template.nodeMatchedQueries;
            }
          } else {
            l |= e.flags;
          }
          if (e.childCount > 0) {
            u = e;
            if (!po(e)) {
              c = e;
            }
          } else {
            while (u && f === u.nodeIndex + u.childCount) {
              const e = u.parent;
              if (e) {
                e.childFlags |= u.childFlags;
                e.childMatchedQueries |= u.childMatchedQueries;
              }
              u = e;
              c = u && po(u) ? u.renderParent : u;
            }
          }
        }
        return {
          factory: null,
          nodeFlags: o,
          rootNodeFlags: l,
          nodeMatchedQueries: a,
          flags: e,
          nodes: t,
          updateDirectives: n || Zn,
          updateRenderer: r || Zn,
          handleEvent: (e, n, r, s) => t[n].element.handleEvent(e, r, s),
          bindingCount: s,
          outputCount: i,
          lastRenderRootNode: p,
        };
      }
      function po(e) {
        return (1 & e.flags) != 0 && e.element.name === null;
      }
      function fo(e, t, n) {
        const r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode) {
            throw new Error(
              'Illegal State: Embedded templates without nodes are not allowed!'
            );
          }
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) {
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${
                t.nodeIndex
              }!`
            );
          }
        }
        if (20224 & t.flags && (1 & (e ? e.flags : 0)) == 0) {
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${
              t.nodeIndex
            }!`
          );
        }
        if (t.query) {
          if (67108864 & t.flags && (!e || (16384 & e.flags) == 0)) {
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${
                t.nodeIndex
              }!`
            );
          }
          if (134217728 & t.flags && e) {
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${
                t.nodeIndex
              }!`
            );
          }
        }
        if (t.childCount) {
          const r = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r) {
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${
                t.nodeIndex
              }!`
            );
          }
        }
      }
      function go(e, t, n, r) {
        const s = vo(e.root, e.renderer, e, t, n);
        _o(s, e.component, r);
        wo(s);
        return s;
      }
      function mo(e, t, n) {
        const r = vo(e, e.renderer, null, null, t);
        _o(r, n, n);
        wo(r);
        return r;
      }
      function yo(e, t, n, r) {
        const s = t.element.componentRendererType;
        let i;
        i = s ? e.root.rendererFactory.createRenderer(r, s) : e.root.renderer;
        return vo(e.root, i, e, t.element.componentProvider, n);
      }
      function vo(e, t, n, r, s) {
        const i = new Array(s.nodes.length);
        const o = s.outputCount ? new Array(s.outputCount) : null;
        return {
          def: s,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(s.bindingCount),
          disposables: o,
          initIndex: -1,
        };
      }
      function _o(e, t, n) {
        e.component = t;
        e.context = n;
      }
      function wo(e) {
        let t;
        if (hr(e)) {
          t = Bn(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement;
        }
        const n = e.def;
        const r = e.nodes;
        for (let s = 0; s < n.nodes.length; s++) {
          const i = n.nodes[s];
          let o;
          switch ((Wn.setCurrentNode(e, s), 201347067 & i.flags)) {
            case 1:
              const n = Ki(e, t, i);
              let l = void 0;
              if (33554432 & i.flags) {
                const t = yr(i.element.componentView);
                l = Wn.createComponentView(e, i, t, n);
              }
              Ji(e, l, i, n);
              o = {
                renderElement: n,
                componentView: l,
                viewContainer: null,
                template: i.element.template ? Br(e, i) : void 0,
              };
              if (16777216 & i.flags) {
                o.viewContainer = jr(e, i, o);
              }
              break;
            case 2:
              o = uo(e, t, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              o = r[s];
              if (!o && !(4096 & i.flags)) {
                o = { instance: cs(e, i) };
              }
              break;
            case 16:
              o = { instance: hs(e, i) };
              break;
            case 16384:
              o = r[s];
              if (!o) {
                o = { instance: ds(e, i) };
              }
              if (32768 & i.flags) {
                _o(
                  Bn(e, i.parent.nodeIndex).componentView,
                  o.instance,
                  o.instance
                );
              }
              break;
            case 32:
            case 64:
            case 128:
              o = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              o = new Os();
              break;
            case 8:
              so(e, t, i);
              o = void 0;
          }
          r[s] = o;
        }
        Ro(e, Ao.CreateViewNodes);
        Oo(e, 201326592, 268435456, 0);
      }
      function bo(e) {
        Eo(e);
        Wn.updateDirectives(e, 1);
        Io(e, Ao.CheckNoChanges);
        Wn.updateRenderer(e, 1);
        Ro(e, Ao.CheckNoChanges);
        e.state &= -97;
      }
      function Co(e) {
        if (1 & e.state) {
          e.state &= -2;
          e.state |= 2;
        } else {
          e.state &= -3;
        }
        Hn(e, 0, 256);
        Eo(e);
        Wn.updateDirectives(e, 0);
        Io(e, Ao.CheckAndUpdate);
        Oo(e, 67108864, 536870912, 0);
        let t = Hn(e, 256, 512);
        ws(e, 2097152 | (t ? 1048576 : 0));
        Wn.updateRenderer(e, 0);
        Ro(e, Ao.CheckAndUpdate);
        Oo(e, 134217728, 536870912, 0);
        t = Hn(e, 512, 768);
        ws(e, 8388608 | (t ? 4194304 : 0));
        if (2 & e.def.flags) {
          e.state &= -9;
        }
        e.state &= -97;
        Hn(e, 768, 1024);
      }
      function xo(e, t, n, r, s, i, o, l, a, u, c, h, d) {
        if (n === 0) {
          return (function(e, t, n, r, s, i, o, l, a, u, c, h) {
            switch (201347067 & t.flags) {
              case 1:
                return (function(e, t, n, r, s, i, o, l, a, u, c, h) {
                  const d = t.bindings.length;
                  let p = false;
                  if (d > 0 && Xi(e, t, 0, n)) {
                    p = true;
                  }
                  if (d > 1 && Xi(e, t, 1, r)) {
                    p = true;
                  }
                  if (d > 2 && Xi(e, t, 2, s)) {
                    p = true;
                  }
                  if (d > 3 && Xi(e, t, 3, i)) {
                    p = true;
                  }
                  if (d > 4 && Xi(e, t, 4, o)) {
                    p = true;
                  }
                  if (d > 5 && Xi(e, t, 5, l)) {
                    p = true;
                  }
                  if (d > 6 && Xi(e, t, 6, a)) {
                    p = true;
                  }
                  if (d > 7 && Xi(e, t, 7, u)) {
                    p = true;
                  }
                  if (d > 8 && Xi(e, t, 8, c)) {
                    p = true;
                  }
                  if (d > 9 && Xi(e, t, 9, h)) {
                    p = true;
                  }
                  return p;
                })(e, t, n, r, s, i, o, l, a, u, c, h);
              case 2:
                return (function(e, t, n, r, s, i, o, l, a, u, c, h) {
                  let d = false;
                  const p = t.bindings;
                  const f = p.length;
                  if (f > 0 && rr(e, t, 0, n)) {
                    d = true;
                  }
                  if (f > 1 && rr(e, t, 1, r)) {
                    d = true;
                  }
                  if (f > 2 && rr(e, t, 2, s)) {
                    d = true;
                  }
                  if (f > 3 && rr(e, t, 3, i)) {
                    d = true;
                  }
                  if (f > 4 && rr(e, t, 4, o)) {
                    d = true;
                  }
                  if (f > 5 && rr(e, t, 5, l)) {
                    d = true;
                  }
                  if (f > 6 && rr(e, t, 6, a)) {
                    d = true;
                  }
                  if (f > 7 && rr(e, t, 7, u)) {
                    d = true;
                  }
                  if (f > 8 && rr(e, t, 8, c)) {
                    d = true;
                  }
                  if (f > 9 && rr(e, t, 9, h)) {
                    d = true;
                  }
                  if (d) {
                    let d = t.text.prefix;
                    if (f > 0) {
                      d += co(n, p[0]);
                    }
                    if (f > 1) {
                      d += co(r, p[1]);
                    }
                    if (f > 2) {
                      d += co(s, p[2]);
                    }
                    if (f > 3) {
                      d += co(i, p[3]);
                    }
                    if (f > 4) {
                      d += co(o, p[4]);
                    }
                    if (f > 5) {
                      d += co(l, p[5]);
                    }
                    if (f > 6) {
                      d += co(a, p[6]);
                    }
                    if (f > 7) {
                      d += co(u, p[7]);
                    }
                    if (f > 8) {
                      d += co(c, p[8]);
                    }
                    if (f > 9) {
                      d += co(h, p[9]);
                    }
                    const g = zn(e, t.nodeIndex).renderText;
                    e.renderer.setValue(g, d);
                  }
                  return d;
                })(e, t, n, r, s, i, o, l, a, u, c, h);
              case 16384:
                return (function(e, t, n, r, s, i, o, l, a, u, c, h) {
                  const d = qn(e, t.nodeIndex);
                  const p = d.instance;
                  let f = false;
                  let g = void 0;
                  const m = t.bindings.length;
                  if (m > 0 && nr(e, t, 0, n)) {
                    f = true;
                    g = _s(e, d, t, 0, n, g);
                  }
                  if (m > 1 && nr(e, t, 1, r)) {
                    f = true;
                    g = _s(e, d, t, 1, r, g);
                  }
                  if (m > 2 && nr(e, t, 2, s)) {
                    f = true;
                    g = _s(e, d, t, 2, s, g);
                  }
                  if (m > 3 && nr(e, t, 3, i)) {
                    f = true;
                    g = _s(e, d, t, 3, i, g);
                  }
                  if (m > 4 && nr(e, t, 4, o)) {
                    f = true;
                    g = _s(e, d, t, 4, o, g);
                  }
                  if (m > 5 && nr(e, t, 5, l)) {
                    f = true;
                    g = _s(e, d, t, 5, l, g);
                  }
                  if (m > 6 && nr(e, t, 6, a)) {
                    f = true;
                    g = _s(e, d, t, 6, a, g);
                  }
                  if (m > 7 && nr(e, t, 7, u)) {
                    f = true;
                    g = _s(e, d, t, 7, u, g);
                  }
                  if (m > 8 && nr(e, t, 8, c)) {
                    f = true;
                    g = _s(e, d, t, 8, c, g);
                  }
                  if (m > 9 && nr(e, t, 9, h)) {
                    f = true;
                    g = _s(e, d, t, 9, h, g);
                  }
                  if (g) {
                    p.ngOnChanges(g);
                  }
                  if (65536 & t.flags && $n(e, 256, t.nodeIndex)) {
                    p.ngOnInit();
                  }
                  if (262144 & t.flags) {
                    p.ngDoCheck();
                  }
                  return f;
                })(e, t, n, r, s, i, o, l, a, u, c, h);
              case 32:
              case 64:
              case 128:
                return (function(e, t, n, r, s, i, o, l, a, u, c, h) {
                  const d = t.bindings;
                  let p = false;
                  const f = d.length;
                  if (f > 0 && rr(e, t, 0, n)) {
                    p = true;
                  }
                  if (f > 1 && rr(e, t, 1, r)) {
                    p = true;
                  }
                  if (f > 2 && rr(e, t, 2, s)) {
                    p = true;
                  }
                  if (f > 3 && rr(e, t, 3, i)) {
                    p = true;
                  }
                  if (f > 4 && rr(e, t, 4, o)) {
                    p = true;
                  }
                  if (f > 5 && rr(e, t, 5, l)) {
                    p = true;
                  }
                  if (f > 6 && rr(e, t, 6, a)) {
                    p = true;
                  }
                  if (f > 7 && rr(e, t, 7, u)) {
                    p = true;
                  }
                  if (f > 8 && rr(e, t, 8, c)) {
                    p = true;
                  }
                  if (f > 9 && rr(e, t, 9, h)) {
                    p = true;
                  }
                  if (p) {
                    const p = Qn(e, t.nodeIndex);
                    let g;
                    switch (201347067 & t.flags) {
                      case 32:
                        g = new Array(d.length);
                        if (f > 0) {
                          g[0] = n;
                        }
                        if (f > 1) {
                          g[1] = r;
                        }
                        if (f > 2) {
                          g[2] = s;
                        }
                        if (f > 3) {
                          g[3] = i;
                        }
                        if (f > 4) {
                          g[4] = o;
                        }
                        if (f > 5) {
                          g[5] = l;
                        }
                        if (f > 6) {
                          g[6] = a;
                        }
                        if (f > 7) {
                          g[7] = u;
                        }
                        if (f > 8) {
                          g[8] = c;
                        }
                        if (f > 9) {
                          g[9] = h;
                        }
                        break;
                      case 64:
                        g = {};
                        if (f > 0) {
                          g[d[0].name] = n;
                        }
                        if (f > 1) {
                          g[d[1].name] = r;
                        }
                        if (f > 2) {
                          g[d[2].name] = s;
                        }
                        if (f > 3) {
                          g[d[3].name] = i;
                        }
                        if (f > 4) {
                          g[d[4].name] = o;
                        }
                        if (f > 5) {
                          g[d[5].name] = l;
                        }
                        if (f > 6) {
                          g[d[6].name] = a;
                        }
                        if (f > 7) {
                          g[d[7].name] = u;
                        }
                        if (f > 8) {
                          g[d[8].name] = c;
                        }
                        if (f > 9) {
                          g[d[9].name] = h;
                        }
                        break;
                      case 128:
                        const e = n;
                        switch (f) {
                          case 1:
                            g = e.transform(n);
                            break;
                          case 2:
                            g = e.transform(r);
                            break;
                          case 3:
                            g = e.transform(r, s);
                            break;
                          case 4:
                            g = e.transform(r, s, i);
                            break;
                          case 5:
                            g = e.transform(r, s, i, o);
                            break;
                          case 6:
                            g = e.transform(r, s, i, o, l);
                            break;
                          case 7:
                            g = e.transform(r, s, i, o, l, a);
                            break;
                          case 8:
                            g = e.transform(r, s, i, o, l, a, u);
                            break;
                          case 9:
                            g = e.transform(r, s, i, o, l, a, u, c);
                            break;
                          case 10:
                            g = e.transform(r, s, i, o, l, a, u, c, h);
                        }
                    }
                    p.value = g;
                  }
                  return p;
                })(e, t, n, r, s, i, o, l, a, u, c, h);
              default:
                throw 'unreachable';
            }
          })(e, t, r, s, i, o, l, a, u, c, h, d);
        } else {
          return (function(e, t, n) {
            switch (201347067 & t.flags) {
              case 1:
                return (function(e, t, n) {
                  let r = false;
                  for (let s = 0; s < n.length; s++) {
                    if (Xi(e, t, s, n[s])) {
                      r = true;
                    }
                  }
                  return r;
                })(e, t, n);
              case 2:
                return (function(e, t, n) {
                  const r = t.bindings;
                  let s = false;
                  for (let i = 0; i < n.length; i++) {
                    if (rr(e, t, i, n[i])) {
                      s = true;
                    }
                  }
                  if (s) {
                    let s = '';
                    for (let e = 0; e < n.length; e++) {
                      s += co(n[e], r[e]);
                    }
                    s = t.text.prefix + s;
                    const i = zn(e, t.nodeIndex).renderText;
                    e.renderer.setValue(i, s);
                  }
                  return s;
                })(e, t, n);
              case 16384:
                return (function(e, t, n) {
                  const r = qn(e, t.nodeIndex);
                  const s = r.instance;
                  let i = false;
                  let o = void 0;
                  for (let l = 0; l < n.length; l++) {
                    if (nr(e, t, l, n[l])) {
                      i = true;
                      o = _s(e, r, t, l, n[l], o);
                    }
                  }
                  if (o) {
                    s.ngOnChanges(o);
                  }
                  if (65536 & t.flags && $n(e, 256, t.nodeIndex)) {
                    s.ngOnInit();
                  }
                  if (262144 & t.flags) {
                    s.ngDoCheck();
                  }
                  return i;
                })(e, t, n);
              case 32:
              case 64:
              case 128:
                return (function(e, t, n) {
                  const r = t.bindings;
                  let s = false;
                  for (let i = 0; i < n.length; i++) {
                    if (rr(e, t, i, n[i])) {
                      s = true;
                    }
                  }
                  if (s) {
                    const s = Qn(e, t.nodeIndex);
                    let i;
                    switch (201347067 & t.flags) {
                      case 32:
                        i = n;
                        break;
                      case 64:
                        i = {};
                        for (let s = 0; s < n.length; s++) {
                          i[r[s].name] = n[s];
                        }
                        break;
                      case 128:
                        const e = n[0];
                        const t = n.slice(1);
                        i = e.transform(...t);
                    }
                    s.value = i;
                  }
                  return s;
                })(e, t, n);
              default:
                throw 'unreachable';
            }
          })(e, t, r);
        }
      }
      function Eo(e) {
        const t = e.def;
        if (4 & t.nodeFlags) {
          for (let n = 0; n < t.nodes.length; n++) {
            const r = t.nodes[n];
            if (4 & r.flags) {
              const t = Bn(e, n).template._projectedViews;
              if (t) {
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  r.state |= 32;
                  or(r, e);
                }
              }
            } else if ((4 & r.childFlags) == 0) {
              n += r.childCount;
            }
          }
        }
      }
      function So(e, t, n, r, s, i, o, l, a, u, c, h, d) {
        if (n === 0) {
          (function(e, t, n, r, s, i, o, l, a, u, c, h) {
            const d = t.bindings.length;
            if (d > 0) {
              sr(e, t, 0, n);
            }
            if (d > 1) {
              sr(e, t, 1, r);
            }
            if (d > 2) {
              sr(e, t, 2, s);
            }
            if (d > 3) {
              sr(e, t, 3, i);
            }
            if (d > 4) {
              sr(e, t, 4, o);
            }
            if (d > 5) {
              sr(e, t, 5, l);
            }
            if (d > 6) {
              sr(e, t, 6, a);
            }
            if (d > 7) {
              sr(e, t, 7, u);
            }
            if (d > 8) {
              sr(e, t, 8, c);
            }
            if (d > 9) {
              sr(e, t, 9, h);
            }
          })(e, t, r, s, i, o, l, a, u, c, h, d);
        } else {
          (function(e, t, n) {
            for (let r = 0; r < n.length; r++) {
              sr(e, t, r, n[r]);
            }
          })(e, t, r);
        }
        return false;
      }
      function To(e, t) {
        if (Gn(e, t.nodeIndex).dirty) {
          throw Ln(
            Wn.createDebugContext(e, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            (1 & e.state) != 0
          );
        }
      }
      function ko(e) {
        if (!(128 & e.state)) {
          Io(e, Ao.Destroy);
          Ro(e, Ao.Destroy);
          ws(e, 131072);
          if (e.disposables) {
            for (let t = 0; t < e.disposables.length; t++) {
              e.disposables[t]();
            }
          }
          (function(e) {
            if (!(16 & e.state)) {
              return;
            }
            const t = ar(e);
            if (t) {
              const n = t.template._projectedViews;
              if (n) {
                Be(n, n.indexOf(e));
                Wn.dirtyParentQueries(e);
              }
            }
          })(e);
          if (e.renderer.destroyNode) {
            (function(e) {
              const t = e.def.nodes.length;
              for (let n = 0; n < t; n++) {
                const t = e.def.nodes[n];
                if (1 & t.flags) {
                  e.renderer.destroyNode(Bn(e, n).renderElement);
                } else if (2 & t.flags) {
                  e.renderer.destroyNode(zn(e, n).renderText);
                } else if (67108864 & t.flags || 134217728 & t.flags) {
                  Gn(e, n).destroy();
                }
              }
            })(e);
          }
          if (hr(e)) {
            e.renderer.destroy();
          }
          e.state |= 128;
        }
      }
      function Ro(e, t) {
        const n = e.def;
        if (33554432 & n.nodeFlags) {
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            if (33554432 & s.flags) {
              No(Bn(e, r).componentView, t);
            } else if ((33554432 & s.childFlags) == 0) {
              r += s.childCount;
            }
          }
        }
      }
      function Io(e, t) {
        const n = e.def;
        if (16777216 & n.nodeFlags) {
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            if (16777216 & s.flags) {
              const n = Bn(e, r).viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) {
                No(n[e], t);
              }
            } else if ((16777216 & s.childFlags) == 0) {
              r += s.childCount;
            }
          }
        }
      }
      function No(e, t) {
        const n = e.state;
        switch (t) {
          case Ao.CheckNoChanges:
            if ((128 & n) == 0) {
              if ((12 & n) == 12) {
                bo(e);
              } else if (64 & n) {
                Po(e, Ao.CheckNoChangesProjectedViews);
              }
            }
            break;
          case Ao.CheckNoChangesProjectedViews:
            if ((128 & n) == 0) {
              if (32 & n) {
                bo(e);
              } else if (64 & n) {
                Po(e, t);
              }
            }
            break;
          case Ao.CheckAndUpdate:
            if ((128 & n) == 0) {
              if ((12 & n) == 12) {
                Co(e);
              } else if (64 & n) {
                Po(e, Ao.CheckAndUpdateProjectedViews);
              }
            }
            break;
          case Ao.CheckAndUpdateProjectedViews:
            if ((128 & n) == 0) {
              if (32 & n) {
                Co(e);
              } else if (64 & n) {
                Po(e, t);
              }
            }
            break;
          case Ao.Destroy:
            ko(e);
            break;
          case Ao.CreateViewNodes:
            wo(e);
        }
      }
      function Po(e, t) {
        Io(e, t);
        Ro(e, t);
      }
      function Oo(e, t, n, r) {
        if (!(e.def.nodeFlags & t) || !(e.def.nodeFlags & n)) {
          return;
        }
        const s = e.def.nodes.length;
        for (let i = 0; i < s; i++) {
          const s = e.def.nodes[i];
          if (s.flags & t && s.flags & n) {
            switch ((Wn.setCurrentNode(e, s.nodeIndex), r)) {
              case 0:
                to(e, s);
                break;
              case 1:
                To(e, s);
            }
          }
          if (!(s.childFlags & t) || !(s.childFlags & n)) {
            i += s.childCount;
          }
        }
      }
      function Do(e, t, n, r, s, i) {
        const o = s.injector.get(pn);
        return mo(Uo(e, s, o, t, n), r, i);
      }
      function Vo(e, t, n, r, s, i) {
        const o = s.injector.get(pn);
        const l = Uo(e, s, new gl(o), t, n);
        const a = Go(r);
        return pl(Xo.create, mo, null, [l, a, i]);
      }
      function Uo(e, t, n, r, s) {
        const i = t.injector.get(St);
        const o = t.injector.get(Xe);
        const l = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: s,
          sanitizer: i,
          rendererFactory: n,
          renderer: l,
          errorHandler: o,
        };
      }
      function Lo(e, t, n, r) {
        const s = Go(n);
        return pl(Xo.create, go, null, [e, t, s, r]);
      }
      function Fo(e, t, n, r) {
        n = zo.get(t.element.componentProvider.provider.token) || Go(n);
        return pl(Xo.create, yo, null, [e, t, n, r]);
      }
      function jo(e, t, n, r) {
        return Jr(
          e,
          t,
          n,
          (function() {
            var e = r;
            const { hasOverrides: t, hasDeprecatedOverrides: n } = (function(
              e
            ) {
              let t = false;
              let n = false;
              if (Ho.size === 0) {
                return { hasOverrides: t, hasDeprecatedOverrides: n };
              } else {
                e.providers.forEach(e => {
                  const r = Ho.get(e.token);
                  if (3840 & e.flags && r) {
                    t = true;
                    n = n || r.deprecatedBehavior;
                  }
                });
                e.modules.forEach(e => {
                  $o.forEach((r, s) => {
                    if (fe(s).providedIn === e) {
                      t = true;
                      n = n || r.deprecatedBehavior;
                    }
                  });
                });
                return { hasOverrides: t, hasDeprecatedOverrides: n };
              }
            })(e);
            if (t) {
              (function(e) {
                for (let t = 0; t < e.providers.length; t++) {
                  const r = e.providers[t];
                  if (n) {
                    r.flags |= 4096;
                  }
                  const s = Ho.get(r.token);
                  if (s) {
                    r.flags = (-3841 & r.flags) | s.flags;
                    r.deps = fr(s.deps);
                    r.value = s.value;
                  }
                }
                if ($o.size > 0) {
                  let t = new Set(e.modules);
                  $o.forEach((r, s) => {
                    if (t.has(fe(s).providedIn)) {
                      let t = {
                        token: s,
                        flags: r.flags | (n ? 4096 : 0),
                        deps: fr(r.deps),
                        value: r.value,
                        index: e.providers.length,
                      };
                      e.providers.push(t);
                      e.providersByKey[Jn(s)] = t;
                    }
                  });
                }
              })((e = e.factory(() => Zn)));
              return e;
            } else {
              return e;
            }
          })()
        );
      }
      function Bo(e) {
        let t;
        Ho.set(e.token, e);
        if (
          typeof e.token == 'function' &&
          (t = fe(e.token)) &&
          typeof t.providedIn == 'function'
        ) {
          $o.set(e.token, e);
        }
      }
      function qo(e, t) {
        const n = yr(t.viewDefFactory);
        const r = yr(n.nodes[0].element.componentView);
        zo.set(e, r);
      }
      function Qo() {
        Ho.clear();
        $o.clear();
        zo.clear();
      }
      function Go(e) {
        function n(e, t) {
          for (let n = t + 1; n < e.nodes.length; n++) {
            const t = e.nodes[n];
            if (1 & t.flags) {
              return;
            }
            if (3840 & t.flags) {
              const e = t.provider;
              const n = Ho.get(e.token);
              if (n) {
                t.flags = (-3841 & t.flags) | n.flags;
                e.deps = fr(n.deps);
                e.value = n.value;
              }
            }
          }
        }
        if (Ho.size === 0) {
          return e;
        }
        const t = (function(e) {
          const t = [];
          let n = null;
          for (let r = 0; r < e.nodes.length; r++) {
            const s = e.nodes[r];
            if (1 & s.flags) {
              n = s;
            }
            if (n && 3840 & s.flags && Ho.has(s.provider.token)) {
              t.push(n.nodeIndex);
              n = null;
            }
          }
          return t;
        })(e);
        if (t.length === 0) {
          return e;
        }
        e = e.factory(() => Zn);
        for (let r = 0; r < t.length; r++) {
          n(e, t[r]);
        }
        return e;
      }
      function Wo(e, t, n, r, s, i, o, l, a, u, c, h, d) {
        const p = e.def.nodes[t];
        xo(e, p, n, r, s, i, o, l, a, u, c, h, d);
        if (224 & p.flags) {
          return Qn(e, t).value;
        } else {
          return;
        }
      }
      function Zo(e, t, n, r, s, i, o, l, a, u, c, h, d) {
        const p = e.def.nodes[t];
        So(e, p, n, r, s, i, o, l, a, u, c, h, d);
        if (224 & p.flags) {
          return Qn(e, t).value;
        } else {
          return;
        }
      }
      function Ko(e) {
        return pl(Xo.detectChanges, Co, null, [e]);
      }
      function Jo(e) {
        return pl(Xo.checkNoChanges, bo, null, [e]);
      }
      function Yo(e) {
        return pl(Xo.destroy, ko, null, [e]);
      }
      function rl(e, t) {
        tl = e;
        nl = t;
      }
      function sl(e, t, n, r) {
        rl(e, t);
        return pl(Xo.handleEvent, e.def.handleEvent, null, [e, t, n, r]);
      }
      function il(e, t) {
        if (128 & e.state) {
          throw jn(Xo[el]);
        }
        rl(e, ul(e, 0));
        return e.def.updateDirectives(function(e, n, r, ...s) {
          const i = e.def.nodes[n];
          if (t === 0) {
            ll(e, i, r, s);
          } else {
            al(e, i, r, s);
          }
          if (16384 & i.flags) {
            rl(e, ul(e, n));
          }
          if (224 & i.flags) {
            return Qn(e, i.nodeIndex).value;
          } else {
            return;
          }
        }, e);
      }
      function ol(e, t) {
        if (128 & e.state) {
          throw jn(Xo[el]);
        }
        rl(e, cl(e, 0));
        return e.def.updateRenderer(function(e, n, r, ...s) {
          const i = e.def.nodes[n];
          if (t === 0) {
            ll(e, i, r, s);
          } else {
            al(e, i, r, s);
          }
          if (3 & i.flags) {
            rl(e, cl(e, n));
          }
          if (224 & i.flags) {
            return Qn(e, i.nodeIndex).value;
          } else {
            return;
          }
        }, e);
      }
      function ll(e, t, n, r) {
        if (xo(e, t, n, ...r)) {
          const o = n === 1 ? r[0] : r;
          if (16384 & t.flags) {
            const n = {};
            for (let e = 0; e < t.bindings.length; e++) {
              const r = t.bindings[e];
              const l = o[e];
              if (8 & r.flags) {
                n[
                  ((s = r.nonMinifiedName),
                  (i = void 0),
                  (i = s.replace(/[$@]/g, '_')),
                  `ng-reflect-${(s = i.replace(
                    At,
                    (...e) => '-' + e[1].toLowerCase()
                  ))}`)
                ] = Rt(l);
              }
            }
            const r = t.parent;
            const l = Bn(e, r.nodeIndex).renderElement;
            if (r.element.name) {
              for (let t in n) {
                const r = n[t];
                if (r == null) {
                  e.renderer.removeAttribute(l, t);
                } else {
                  e.renderer.setAttribute(l, t, r);
                }
              }
            } else {
              e.renderer.setValue(l, `bindings=${JSON.stringify(n, null, 2)}`);
            }
          }
        }
        var s;
        var i;
      }
      function al(e, t, n, r) {
        So(e, t, n, ...r);
      }
      function ul(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (16384 & t.flags && t.bindings && t.bindings.length) {
            return n;
          }
        }
        return null;
      }
      function cl(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (3 & t.flags && t.bindings && t.bindings.length) {
            return n;
          }
        }
        return null;
      }
      function dl(e, t, n) {
        for (let r in t.references) {
          n[r] = ro(e, t, t.references[r]);
        }
      }
      function pl(e, t, n, r) {
        const s = el;
        const i = tl;
        const o = nl;
        try {
          el = e;
          const l = t.apply(n, r);
          tl = i;
          nl = o;
          el = s;
          return l;
        } catch (l) {
          if (Ke(l) || !tl) {
            throw l;
          }
          throw (function() {
            var e = l;
            var t = fl();
            if (!(e instanceof Error)) {
              e = new Error(e.toString());
            }
            Fn(e, t);
            return e;
          })();
        }
      }
      function fl() {
        if (tl) {
          return new hl(tl, nl);
        } else {
          return null;
        }
      }
      function yl(e, t, n) {
        return new vl(e, t, n);
      }
      function bl(e) {
        if (e) {
          return (function(e) {
            return new b(t => e.schedule(() => t.complete()));
          })(e);
        } else {
          return wl;
        }
      }
      function Cl(e) {
        const t = new b(t => {
          t.next(e);
          t.complete();
        });
        t._isScalar = true;
        t.value = e;
        return t;
      }
      function xl(...e) {
        let t = e[e.length - 1];
        switch ((R(t) ? e.pop() : (t = void 0), e.length)) {
          case 0:
            return bl(t);
          case 1:
            if (t) {
              return q(e, t);
            } else {
              return Cl(e[0]);
            }
          default:
            return q(e, t);
        }
      }
      function El(e, t) {
        return G(e, t, 1);
      }
      function Sl(e, t) {
        return function(n) {
          return n.lift(new Tl(e, t));
        };
      }
      function Ol(e) {
        return e.replace(/\/index.html$/, '');
      }
      function Hl(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(';')) {
          const e = n.indexOf('=');
          const [r, s] = e == -1 ? [n, ''] : [n.slice(0, e), n.slice(e + 1)];
          if (r.trim() === t) {
            return decodeURIComponent(s);
          }
        }
        return null;
      }
      function Gl(e, t) {
        if (t && !t.createEmbeddedView) {
          throw new Error(
            `${e} must be a TemplateRef, but received '${me(t)}'.`
          );
        }
      }
      function sa(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      function oa(e) {
        return typeof ArrayBuffer != 'undefined' && e instanceof ArrayBuffer;
      }
      function la(e) {
        return typeof Blob != 'undefined' && e instanceof Blob;
      }
      function aa(e) {
        return typeof FormData != 'undefined' && e instanceof FormData;
      }
      function ga(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      function Ma() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
      }
      function Fa(e) {
        return new b(t => {
          let n;
          try {
            n = e();
          } catch (r) {
            t.error(r);
            return;
          }
          return (n ? Q(n) : bl()).subscribe(t);
        });
      }
      function ja() {
        return J(1);
      }
      function Ha() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
      }
      function za(e) {
        return function(t) {
          if (e === 0) {
            return bl();
          } else {
            return t.lift(new Ba(e));
          }
        };
      }
      function Qa(e, t, n) {
        return function(r) {
          return r.lift(new Ga(e, t, n));
        };
      }
      function Ka() {
        return new Da();
      }
      function Ja(e = null) {
        return t => t.lift(new Ya(e));
      }
      function eu(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? Sl((t, n) => e(t, n, r)) : K,
            za(1),
            n ? Ja(t) : Za(() => new Da())
          );
      }
      function tu(e) {
        return function(t) {
          const n = new nu(e);
          const r = t.lift(n);
          return (n.caught = r);
        };
      }
      function su(e) {
        return t => (e === 0 ? bl() : t.lift(new iu(e)));
      }
      function lu(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? Sl((t, n) => e(t, n, r)) : K,
            su(1),
            n ? Ja(t) : Za(() => new Da())
          );
      }
      function cu(e, t) {
        if (typeof t == 'function') {
          return n =>
            n.pipe(cu((n, r) => Q(e(n, r)).pipe($((e, s) => t(n, e, r, s)))));
        } else {
          return t => t.lift(new hu(e));
        }
      }
      function pu(e, t) {
        let n = false;
        if (arguments.length >= 2) {
          n = true;
        }
        return function(r) {
          return r.lift(new fu(e, t, n));
        };
      }
      function _u() {
        return vu;
      }
      function Iu() {
        return !!window.history.pushState;
      }
      function Du(e, t) {
        if (typeof COMPILED == 'undefined' || !COMPILED) {
          (Ee.ng = Ee.ng || {})[e] = t;
        }
      }
      function Uu(e) {
        return ji(e);
      }
      function Gu(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          if (Array.isArray(s)) {
            Gu(e, s, n);
          } else {
            s = s.replace(Bu, e);
            n.push(s);
          }
        }
        return n;
      }
      function Wu(e) {
        return t => {
          if (e(t) === false) {
            t.preventDefault();
            t.returnValue = false;
          }
        };
      }
      function Yu(e, t) {
        if (e.charCodeAt(0) === Ju) {
          throw new Error(
            `Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
        }
      }
      function Pc() {
        return new Xe();
      }
      function eh(e) {
        return new Xc(e);
      }
      function nh(e) {
        const t = Error('NavigationCancelingError: ' + e);
        t[th] = true;
        return t;
      }
      function rh(e, t, n) {
        const r = n.path.split('/');
        if (r.length > e.length) {
          return null;
        }
        if (
          n.pathMatch === 'full' &&
          (t.hasChildren() || r.length < e.length)
        ) {
          return null;
        }
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const t = r[i];
          const n = e[i];
          if (t.startsWith(':')) {
            s[t.substring(1)] = n;
          } else if (t !== n.path) {
            return null;
          }
        }
        return { consumed: e.slice(0, r.length), posParams: s };
      }
      function ih(e, t = '') {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          oh(r, lh(t, r));
        }
      }
      function oh(e, t) {
        if (!e) {
          throw new Error(
            `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        }
        if (Array.isArray(e)) {
          throw new Error(
            `Invalid configuration of route '${t}': Array cannot be specified`
          );
        }
        if (
          !e.component &&
          !e.children &&
          !e.loadChildren &&
          e.outlet &&
          e.outlet !== Yc
        ) {
          throw new Error(
            `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        }
        if (e.redirectTo && e.children) {
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and children cannot be used together`
          );
        }
        if (e.redirectTo && e.loadChildren) {
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`
          );
        }
        if (e.children && e.loadChildren) {
          throw new Error(
            `Invalid configuration of route '${t}': children and loadChildren cannot be used together`
          );
        }
        if (e.redirectTo && e.component) {
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and component cannot be used together`
          );
        }
        if (e.path && e.matcher) {
          throw new Error(
            `Invalid configuration of route '${t}': path and matcher cannot be used together`
          );
        }
        if (
          e.redirectTo === void 0 &&
          !e.component &&
          !e.children &&
          !e.loadChildren
        ) {
          throw new Error(
            `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        }
        if (e.path === void 0 && e.matcher === void 0) {
          throw new Error(
            `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
          );
        }
        if (typeof e.path == 'string' && e.path.charAt(0) === '/') {
          throw new Error(
            `Invalid configuration of route '${t}': path cannot start with a slash`
          );
        }
        if (
          e.path === '' &&
          e.redirectTo !== void 0 &&
          e.pathMatch === void 0
        ) {
          throw new Error(
            `Invalid configuration of route '{path: "${t}", redirectTo: "${
              e.redirectTo
            }"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        }
        if (
          e.pathMatch !== void 0 &&
          e.pathMatch !== 'full' &&
          e.pathMatch !== 'prefix'
        ) {
          throw new Error(
            `Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`
          );
        }
        if (e.children) {
          ih(e.children, t);
        }
      }
      function lh(e, t) {
        if (t) {
          if (e || t.path) {
            if (e && !t.path) {
              return `${e}/`;
            } else if (!e && t.path) {
              return t.path;
            } else {
              return `${e}/${t.path}`;
            }
          } else {
            return '';
          }
        } else {
          return e;
        }
      }
      function ah(e) {
        const t = e.children && e.children.map(ah);
        const n = t
          ? Object.assign({}, e, { children: t })
          : Object.assign({}, e);
        if (
          !n.component &&
          (t || n.loadChildren) &&
          n.outlet &&
          n.outlet !== Yc
        ) {
          n.component = Jc;
        }
        return n;
      }
      function uh(e, t) {
        const n = Object.keys(e);
        const r = Object.keys(t);
        if (!n || !r || n.length != r.length) {
          return false;
        }
        let s;
        for (let i = 0; i < n.length; i++) {
          s = n[i];
          if (e[s] !== t[s]) {
            return false;
          }
        }
        return true;
      }
      function ch(e) {
        return Array.prototype.concat.apply([], e);
      }
      function hh(e) {
        if (e.length > 0) {
          return e[e.length - 1];
        } else {
          return null;
        }
      }
      function dh(e, t) {
        for (const n in e) {
          if (e.hasOwnProperty(n)) {
            t(e[n], n);
          }
        }
      }
      function ph(e) {
        if (Yt(e)) {
          return e;
        } else if (Jt(e)) {
          return Q(Promise.resolve(e));
        } else {
          return xl(e);
        }
      }
      function fh(e, t, n) {
        if (n) {
          return (
            (function(e, t) {
              return uh(e, t);
            })(e.queryParams, t.queryParams) &&
            (function e(t, n) {
              if (!vh(t.segments, n.segments)) {
                return false;
              }
              if (t.numberOfChildren !== n.numberOfChildren) {
                return false;
              }
              for (const r in n.children) {
                if (!t.children[r]) {
                  return false;
                }
                if (!e(t.children[r], n.children[r])) {
                  return false;
                }
              }
              return true;
            })(e.root, t.root)
          );
        } else {
          return (
            (function(e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every(n => t[n] === e[n])
              );
            })(e.queryParams, t.queryParams) &&
            (function e(t, n) {
              return (function t(n, r, s) {
                if (n.segments.length > s.length) {
                  return (
                    !!vh(n.segments.slice(0, s.length), s) && !r.hasChildren()
                  );
                }
                if (n.segments.length === s.length) {
                  if (!vh(n.segments, s)) {
                    return false;
                  }
                  for (const t in r.children) {
                    if (!n.children[t]) {
                      return false;
                    }
                    if (!e(n.children[t], r.children[t])) {
                      return false;
                    }
                  }
                  return true;
                }
                {
                  const e = s.slice(0, n.segments.length);
                  const i = s.slice(n.segments.length);
                  return (
                    !!vh(n.segments, e) &&
                    !!n.children[Yc] &&
                    t(n.children[Yc], r, i)
                  );
                }
              })(t, n, n.segments);
            })(e.root, t.root)
          );
        }
      }
      function vh(e, t) {
        return e.length === t.length && e.every((e, n) => e.path === t[n].path);
      }
      function _h(e, t) {
        let n = [];
        dh(e.children, (e, r) => {
          if (r === Yc) {
            n = n.concat(t(e, r));
          }
        });
        dh(e.children, (e, r) => {
          if (r !== Yc) {
            n = n.concat(t(e, r));
          }
        });
        return n;
      }
      function xh(e) {
        return e.segments.map(e => Rh(e)).join('/');
      }
      function Eh(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Sh(e) {
        return Eh(e).replace(/%3B/gi, ';');
      }
      function Th(e) {
        return Eh(e)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function kh(e) {
        return decodeURIComponent(e);
      }
      function Ah(e) {
        return kh(e.replace(/\+/g, '%20'));
      }
      function Rh(e) {
        return `${Th(e.path)}${((t = e.parameters),
        Object.keys(t)
          .map(e => `;${Th(e)}=${Th(t[e])}`)
          .join(''))}`;
        var t;
      }
      function Nh(e) {
        const t = e.match(Ih);
        if (t) {
          return t[0];
        } else {
          return '';
        }
      }
      function Vh(e, t) {
        if (e === t.value) {
          return t;
        }
        for (const n of t.children) {
          const t = Vh(e, n);
          if (t) {
            return t;
          }
        }
        return null;
      }
      function Uh(e, t) {
        if (e === t.value) {
          return [t];
        }
        for (const n of t.children) {
          const r = Uh(e, n);
          if (r.length) {
            r.unshift(t);
            return r;
          }
        }
        return [];
      }
      function Fh(e) {
        const t = {};
        if (e) {
          e.children.forEach(e => (t[e.value.outlet] = e));
        }
        return t;
      }
      function Hh(e, t) {
        const n = (function(e, t) {
          const n = new Bh([], {}, {}, '', {}, Yc, t, null, e.root, -1, {});
          return new qh('', new Lh(n, []));
        })(e, t);
        const r = new Oa([new yh('', {})]);
        const s = new Oa({});
        const i = new Oa({});
        const o = new Oa({});
        const l = new Oa('');
        const a = new $h(r, s, o, l, i, Yc, t, n.root);
        a.snapshot = n.root;
        return new jh(new Lh(a, []), n);
      }
      function zh(e, t = 'emptyOnly') {
        const n = e.pathFromRoot;
        let r = 0;
        if (t !== 'always') {
          for (r = n.length - 1; r >= 1; ) {
            const e = n[r];
            const t = n[r - 1];
            if (e.routeConfig && e.routeConfig.path === '') {
              r--;
            } else {
              if (t.component) {
                break;
              }
              r--;
            }
          }
        }
        return (function() {
          var e = n.slice(r);
          return e.reduce(
            (e, t) => ({
              params: Object.assign({}, e.params, t.params),
              data: Object.assign({}, e.data, t.data),
              resolve: Object.assign({}, e.resolve, t._resolvedData),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })();
      }
      function Qh(e, t) {
        t.value._routerState = e;
        t.children.forEach(t => Qh(e, t));
      }
      function Gh(e) {
        const t =
          e.children.length > 0 ? ` { ${e.children.map(Gh).join(', ')} } ` : '';
        return `${e.value}${t}`;
      }
      function Wh(e) {
        if (e.snapshot) {
          const t = e.snapshot;
          const n = e._futureSnapshot;
          e.snapshot = n;
          if (!uh(t.queryParams, n.queryParams)) {
            e.queryParams.next(n.queryParams);
          }
          if (t.fragment !== n.fragment) {
            e.fragment.next(n.fragment);
          }
          if (!uh(t.params, n.params)) {
            e.params.next(n.params);
          }
          if (
            !(function(e, t) {
              if (e.length !== t.length) {
                return false;
              }
              for (let n = 0; n < e.length; ++n) {
                if (!uh(e[n], t[n])) {
                  return false;
                }
              }
              return true;
            })(t.url, n.url)
          ) {
            e.url.next(n.url);
          }
          if (!uh(t.data, n.data)) {
            e.data.next(n.data);
          }
        } else {
          e.snapshot = e._futureSnapshot;
          e.data.next(e._futureSnapshot.data);
        }
      }
      function Zh(e, t) {
        var n;
        var r;
        return (
          uh(e.params, t.params) &&
          vh((n = e.url), (r = t.url)) &&
          n.every((e, t) => uh(e.parameters, r[t].parameters)) &&
          !e.parent == !t.parent &&
          (!e.parent || Zh(e.parent, t.parent))
        );
      }
      function Kh(e) {
        return (
          typeof e == 'object' && e != null && !e.outlets && !e.segmentPath
        );
      }
      function Jh(e, t, n, r, s) {
        let i = {};
        if (r) {
          dh(r, (e, t) => {
            i[t] = Array.isArray(e) ? e.map(e => `${e}`) : `${e}`;
          });
        }
        return new gh(
          n.root === e
            ? t
            : (function e(t, n, r) {
                const s = {};
                dh(t.children, (t, i) => {
                  s[i] = t === n ? r : e(t, n, r);
                });
                return new mh(t.segments, s);
              })(n.root, e, t),
          i,
          s
        );
      }
      function ed(e) {
        if (typeof e == 'object' && e != null && e.outlets) {
          return e.outlets[Yc];
        } else {
          return `${e}`;
        }
      }
      function td(e, t, n) {
        if (!e) {
          e = new mh([], {});
        }
        if (e.segments.length === 0 && e.hasChildren()) {
          return nd(e, t, n);
        }
        const r = (function(e, t, n) {
          let r = 0;
          let s = t;
          const i = { match: false, pathIndex: 0, commandIndex: 0 };
          while (s < e.segments.length) {
            if (r >= n.length) {
              return i;
            }
            const t = e.segments[s];
            const o = ed(n[r]);
            const l = r < n.length - 1 ? n[r + 1] : null;
            if (s > 0 && o === void 0) {
              break;
            }
            if (o && l && typeof l == 'object' && l.outlets === void 0) {
              if (!od(o, l, t)) {
                return i;
              }
              r += 2;
            } else {
              if (!od(o, {}, t)) {
                return i;
              }
              r++;
            }
            s++;
          }
          return { match: true, pathIndex: s, commandIndex: r };
        })(e, t, n);
        const s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const t = new mh(e.segments.slice(0, r.pathIndex), {});
          t.children[Yc] = new mh(e.segments.slice(r.pathIndex), e.children);
          return nd(t, 0, s);
        }
        if (r.match && s.length === 0) {
          return new mh(e.segments, {});
        } else if (r.match && !e.hasChildren()) {
          return rd(e, t, n);
        } else if (r.match) {
          return nd(e, 0, s);
        } else {
          return rd(e, t, n);
        }
      }
      function nd(e, t, n) {
        if (n.length === 0) {
          return new mh(e.segments, {});
        }
        {
          const r = (function() {
            var e = n;
            if (typeof e[0] == 'object') {
              if (e[0].outlets === void 0) {
                return { [Yc]: e };
              } else {
                return e[0].outlets;
              }
            } else {
              return { [Yc]: e };
            }
          })();
          const s = {};
          dh(r, (n, r) => {
            if (n !== null) {
              s[r] = td(e.children[r], t, n);
            }
          });
          dh(e.children, (e, t) => {
            if (r[t] === void 0) {
              s[t] = e;
            }
          });
          return new mh(e.segments, s);
        }
      }
      function rd(e, t, n) {
        const r = e.segments.slice(0, t);
        let s = 0;
        while (s < n.length) {
          if (typeof n[s] == 'object' && n[s].outlets !== void 0) {
            const e = sd(n[s].outlets);
            return new mh(r, e);
          }
          if (s === 0 && Kh(n[0])) {
            r.push(new yh(e.segments[t].path, n[0]));
            s++;
            continue;
          }
          const i = ed(n[s]);
          const o = s < n.length - 1 ? n[s + 1] : null;
          if (i && o && Kh(o)) {
            r.push(new yh(i, id(o)));
            s += 2;
          } else {
            r.push(new yh(i, {}));
            s++;
          }
        }
        return new mh(r, {});
      }
      function sd(e) {
        const t = {};
        dh(e, (e, n) => {
          if (e !== null) {
            t[n] = rd(new mh([], {}), 0, e);
          }
        });
        return t;
      }
      function id(e) {
        const t = {};
        dh(e, (e, n) => (t[n] = `${e}`));
        return t;
      }
      function od(e, t, n) {
        return e == n.path && uh(t, n.parameters);
      }
      function ud(e) {
        Wh(e.value);
        e.children.forEach(ud);
      }
      function cd(e) {
        return typeof e == 'function';
      }
      function hd(e) {
        return e instanceof gh;
      }
      function fd(e) {
        return new b(t => t.error(new dd(e)));
      }
      function gd(e) {
        return new b(t => t.error(new pd(e)));
      }
      function md(e) {
        return new b(t =>
          t.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${e}'`
            )
          )
        );
      }
      function vd(e, t, n) {
        if (t.path === '') {
          if (t.pathMatch === 'full' && (e.hasChildren() || n.length > 0)) {
            return {
              matched: false,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
          } else {
            return {
              matched: true,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
          }
        }
        const r = (t.matcher || rh)(n, e, t);
        if (r) {
          return {
            matched: true,
            consumedSegments: r.consumed,
            lastChild: r.consumed.length,
            positionalParamSegments: r.posParams,
          };
        } else {
          return {
            matched: false,
            consumedSegments: [],
            lastChild: 0,
            positionalParamSegments: {},
          };
        }
      }
      function _d(e) {
        if (e.numberOfChildren === 1 && e.children[Yc]) {
          const t = e.children[Yc];
          return new mh(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function wd(e, t, n) {
        return (
          ((!e.hasChildren() && !(t.length > 0)) || n.pathMatch !== 'full') &&
          n.path === '' &&
          n.redirectTo !== void 0
        );
      }
      function bd(e) {
        return e.outlet || Yc;
      }
      function Ed(e, t, n) {
        const r = e._root;
        return (function e(
          t,
          n,
          r,
          s,
          i = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const o = Fh(n);
          t.children.forEach(t => {
            (function(
              t,
              n,
              r,
              s,
              i = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const o = t.value;
              const l = n ? n.value : null;
              const a = r ? r.getContext(t.value.outlet) : null;
              if (l && o.routeConfig === l.routeConfig) {
                const u = (function() {
                  var e = l;
                  var t = o;
                  var n = o.routeConfig.runGuardsAndResolvers;
                  if (typeof n == 'function') {
                    return n(e, t);
                  }
                  switch (n) {
                    case 'pathParamsChange':
                      return !vh(e.url, t.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !vh(e.url, t.url) || !uh(e.queryParams, t.queryParams)
                      );
                    case 'always':
                      return true;
                    case 'paramsOrQueryParamsChange':
                      return !Zh(e, t) || !uh(e.queryParams, t.queryParams);
                    case 'paramsChange':
                    default:
                      return !Zh(e, t);
                  }
                })();
                if (u) {
                  i.canActivateChecks.push(new Cd(s));
                } else {
                  o.data = l.data;
                  o._resolvedData = l._resolvedData;
                }
                e(t, n, o.component ? (a ? a.children : null) : r, s, i);
                if (u) {
                  i.canDeactivateChecks.push(
                    new xd((a && a.outlet && a.outlet.component) || null, l)
                  );
                }
              } else {
                if (l) {
                  Td(n, a, i);
                }
                i.canActivateChecks.push(new Cd(s));
                e(t, null, o.component ? (a ? a.children : null) : r, s, i);
              }
            })(t, o[t.value.outlet], r, s.concat([t.value]), i);
            delete o[t.value.outlet];
          });
          dh(o, (e, t) => Td(e, r.getContext(t), i));
          return i;
        })(r, t ? t._root : null, n, [r.value]);
      }
      function Sd(e, t, n) {
        const r = (function() {
          var e = t;
          if (!e) {
            return null;
          }
          for (let t = e.parent; t; t = t.parent) {
            const e = t.routeConfig;
            if (e && e._loadedConfig) {
              return e._loadedConfig;
            }
          }
          return null;
        })();
        return (r ? r.module.injector : n).get(e);
      }
      function Td(e, t, n) {
        const r = Fh(e);
        const s = e.value;
        dh(r, (e, r) => {
          Td(e, s.component ? (t ? t.children.getContext(r) : null) : t, n);
        });
        n.canDeactivateChecks.push(
          new xd(
            s.component && t && t.outlet && t.outlet.isActivated
              ? t.outlet.component
              : null,
            s
          )
        );
      }
      function Ad() {
        return cu(e =>
          (function(...e) {
            let t = null;
            let n = null;
            if (R(e[e.length - 1])) {
              n = e.pop();
            }
            if (typeof e[e.length - 1] == 'function') {
              t = e.pop();
            }
            if (e.length === 1 && a(e[0])) {
              e = e[0];
            }
            return q(e, n).lift(new Ua(t));
          })(
            ...e.map(e =>
              e.pipe(
                su(1),
                (function(...e) {
                  return t => {
                    let n = e[e.length - 1];
                    if (R(n)) {
                      e.pop();
                    } else {
                      n = null;
                    }
                    const r = e.length;
                    return (function(...e) {
                      return ja()(xl(...e));
                    })(r !== 1 || n ? (r > 0 ? q(e, n) : bl(n)) : Cl(e[0]), t);
                  };
                })(kd)
              )
            )
          ).pipe(
            pu((e, t) => {
              let n = false;
              return t.reduce((e, r, s) => {
                if (e !== kd) {
                  return e;
                }
                if (r === kd) {
                  n = true;
                }
                if (!n) {
                  if (r === false) {
                    return r;
                  }
                  if (s === t.length - 1 || hd(r)) {
                    return r;
                  }
                }
                return e;
              }, e);
            }, kd),
            Sl(e => e !== kd),
            $(e => (hd(e) ? e : e === true)),
            su(1)
          )
        );
      }
      function Rd(e, t) {
        if (e !== null && t) {
          t(new Wc(e));
        }
        return xl(true);
      }
      function Id(e, t) {
        if (e !== null && t) {
          t(new Qc(e));
        }
        return xl(true);
      }
      function Nd(e, t, n) {
        const r = t.routeConfig ? t.routeConfig.canActivate : null;
        if (r && r.length !== 0) {
          return xl(
            r.map(r =>
              Fa(() => {
                const s = Sd(r, t, n);
                let i;
                if (
                  (function() {
                    var e = s;
                    return e && cd(e.canActivate);
                  })()
                ) {
                  i = ph(s.canActivate(t, e));
                } else {
                  if (!cd(s)) {
                    throw new Error('Invalid CanActivate guard');
                  }
                  i = ph(s(t, e));
                }
                return i.pipe(lu());
              })
            )
          ).pipe(Ad());
        } else {
          return xl(true);
        }
      }
      function Pd(e, t, n) {
        const r = t[t.length - 1];
        const s = t
          .slice(0, t.length - 1)
          .reverse()
          .map(e =>
            (function(e) {
              const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
              if (t && t.length !== 0) {
                return { node: e, guards: t };
              } else {
                return null;
              }
            })(e)
          )
          .filter(e => e !== null)
          .map(t =>
            Fa(() =>
              xl(
                t.guards.map(s => {
                  const i = Sd(s, t.node, n);
                  let o;
                  if (
                    (function() {
                      var e = i;
                      return e && cd(e.canActivateChild);
                    })()
                  ) {
                    o = ph(i.canActivateChild(r, e));
                  } else {
                    if (!cd(i)) {
                      throw new Error('Invalid CanActivateChild guard');
                    }
                    o = ph(i(r, e));
                  }
                  return o.pipe(lu());
                })
              ).pipe(Ad())
            )
          );
        return xl(s).pipe(Ad());
      }
      function Dd(e) {
        let t = e;
        while (t._sourceSegment) {
          t = t._sourceSegment;
        }
        return t;
      }
      function Vd(e) {
        let t = e;
        let n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        while (t._sourceSegment) {
          t = t._sourceSegment;
          n += t._segmentIndexShift ? t._segmentIndexShift : 0;
        }
        return n - 1;
      }
      function Ud(e, t, n, r, s) {
        if (
          n.length > 0 &&
          (function(e, t, n) {
            return n.some(n => Ld(e, t, n) && Fd(n) !== Yc);
          })(e, n, r)
        ) {
          const s = new mh(
            t,
            (function(e, t, n, r) {
              const s = {};
              s[Yc] = r;
              r._sourceSegment = e;
              r._segmentIndexShift = t.length;
              for (const i of n) {
                if (i.path === '' && Fd(i) !== Yc) {
                  const n = new mh([], {});
                  n._sourceSegment = e;
                  n._segmentIndexShift = t.length;
                  s[Fd(i)] = n;
                }
              }
              return s;
            })(e, t, r, new mh(n, e.children))
          );
          s._sourceSegment = e;
          s._segmentIndexShift = t.length;
          return { segmentGroup: s, slicedSegments: [] };
        }
        if (
          n.length === 0 &&
          (function(e, t, n) {
            return n.some(n => Ld(e, t, n));
          })(e, n, r)
        ) {
          const i = new mh(
            e.segments,
            (function(e, t, n, r, s, i) {
              const o = {};
              for (const l of r) {
                if (Ld(e, n, l) && !s[Fd(l)]) {
                  const n = new mh([], {});
                  n._sourceSegment = e;
                  n._segmentIndexShift =
                    i === 'legacy' ? e.segments.length : t.length;
                  o[Fd(l)] = n;
                }
              }
              return Object.assign({}, s, o);
            })(e, t, n, r, e.children, s)
          );
          i._sourceSegment = e;
          i._segmentIndexShift = t.length;
          return { segmentGroup: i, slicedSegments: n };
        }
        const i = new mh(e.segments, e.children);
        i._sourceSegment = e;
        i._segmentIndexShift = t.length;
        return { segmentGroup: i, slicedSegments: n };
      }
      function Ld(e, t, n) {
        return (
          ((!e.hasChildren() && !(t.length > 0)) || n.pathMatch !== 'full') &&
          n.path === '' &&
          n.redirectTo === void 0
        );
      }
      function Fd(e) {
        return e.outlet || Yc;
      }
      function jd(e) {
        return e.data || {};
      }
      function Hd(e) {
        return e.resolve || {};
      }
      function $d(e, t, n, r) {
        const s = Sd(e, t, r);
        return ph(s.resolve ? s.resolve(t, n) : s(t, n));
      }
      function zd(e) {
        return function(t) {
          return t.pipe(
            cu(t => {
              const n = e(t);
              if (n) {
                return Q(n).pipe($(() => t));
              } else {
                return Q([t]);
              }
            })
          );
        };
      }
      function Kd(e) {
        throw e;
      }
      function Jd(e, t, n) {
        return t.parse('/');
      }
      function Yd(e, t) {
        return xl(null);
      }
      function tp(e) {
        return e === '' || !!e;
      }
      function fp() {
        return new Ci('Router', Xd);
      }
      function mp(e, t, n) {
        if (n.scrollOffset) {
          t.setOffset(n.scrollOffset);
        }
        return new cp(e, t, n);
      }
      function yp(e, t, n = {}) {
        if (n.useHash) {
          return new Ml(e, t);
        } else {
          return new Dl(e, t);
        }
      }
      function vp(e) {
        if (e) {
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        }
        return 'guarded';
      }
      function _p(e) {
        return [
          { provide: zt, multi: true, useValue: e },
          { provide: Qd, multi: true, useValue: e },
        ];
      }
      function wp(e, t, n, r, s, i, o, l, a = {}, u, c) {
        const h = new Xd(null, t, n, r, s, i, o, ch(l));
        if (u) {
          h.urlHandlingStrategy = u;
        }
        if (c) {
          h.routeReuseStrategy = c;
        }
        if (a.errorHandler) {
          h.errorHandler = a.errorHandler;
        }
        if (a.malformedUriErrorHandler) {
          h.malformedUriErrorHandler = a.malformedUriErrorHandler;
        }
        if (a.enableTracing) {
          const e = _u();
          h.events.subscribe(t => {
            e.logGroup(`Router Event: ${t.constructor.name}`);
            e.log(t.toString());
            e.log(t);
            e.logGroupEnd();
          });
        }
        if (a.onSameUrlNavigation) {
          h.onSameUrlNavigation = a.onSameUrlNavigation;
        }
        if (a.paramsInheritanceStrategy) {
          h.paramsInheritanceStrategy = a.paramsInheritanceStrategy;
        }
        if (a.urlUpdateStrategy) {
          h.urlUpdateStrategy = a.urlUpdateStrategy;
        }
        if (a.relativeLinkResolution) {
          h.relativeLinkResolution = a.relativeLinkResolution;
        }
        return h;
      }
      function bp(e) {
        return e.routerState.root;
      }
      function xp(e) {
        return e.appInitializer.bind(e);
      }
      function Ep(e) {
        return e.bootstrapListener.bind(e);
      }
      function kp(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            ls(1, 212992, null, 0, sp, [rp, Vn, on, [8, null], It], null, null),
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function Ap(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              1,
              'ng-component',
              [],
              null,
              null,
              null,
              kp,
              Tp
            )),
            ls(1, 49152, null, 0, Jc, [], null, null),
          ],
          null,
          null
        );
      }
      function Vp() {
        throw new Error('unimplemented');
      }
      function jp(e) {
        return e == null || e.length === 0;
      }
      function zp(e) {
        return e != null;
      }
      function Bp(e) {
        const t = Jt(e) ? Q(e) : e;
        if (!Yt(t)) {
          throw new Error(
            'Expected validator to return Promise or Observable.'
          );
        }
        return t;
      }
      function qp(e) {
        const t = e.reduce(
          (e, t) => (t != null ? Object.assign({}, e, t) : e),
          {}
        );
        if (Object.keys(t).length === 0) {
          return null;
        } else {
          return t;
        }
      }
      function Qp(e) {
        if (e.validate) {
          return t => e.validate(t);
        } else {
          return e;
        }
      }
      function Gp(e) {
        if (e.validate) {
          return t => e.validate(t);
        } else {
          return e;
        }
      }
      function Kp(e, t) {
        return [...t.path, e];
      }
      function Jp(e, t) {
        if (!e) {
          Xp(t, 'Cannot find control with');
        }
        if (!t.valueAccessor) {
          Xp(t, 'No value accessor for form control with');
        }
        e.validator = $p.compose([e.validator, t.validator]);
        e.asyncValidator = $p.composeAsync([
          e.asyncValidator,
          t.asyncValidator,
        ]);
        t.valueAccessor.writeValue(e.value);
        (function(e, t) {
          t.valueAccessor.registerOnChange(n => {
            e._pendingValue = n;
            e._pendingChange = true;
            e._pendingDirty = true;
            if (e.updateOn === 'change') {
              Yp(e, t);
            }
          });
        })(e, t);
        (function(e, t) {
          e.registerOnChange((e, n) => {
            t.valueAccessor.writeValue(e);
            if (n) {
              t.viewToModelUpdate(e);
            }
          });
        })(e, t);
        (function(e, t) {
          t.valueAccessor.registerOnTouched(() => {
            e._pendingTouched = true;
            if (e.updateOn === 'blur' && e._pendingChange) {
              Yp(e, t);
            }
            if (e.updateOn !== 'submit') {
              e.markAsTouched();
            }
          });
        })(e, t);
        if (t.valueAccessor.setDisabledState) {
          e.registerOnDisabledChange(e => {
            t.valueAccessor.setDisabledState(e);
          });
        }
        t._rawValidators.forEach(t => {
          if (t.registerOnValidatorChange) {
            t.registerOnValidatorChange(() => e.updateValueAndValidity());
          }
        });
        t._rawAsyncValidators.forEach(t => {
          if (t.registerOnValidatorChange) {
            t.registerOnValidatorChange(() => e.updateValueAndValidity());
          }
        });
      }
      function Yp(e, t) {
        if (e._pendingDirty) {
          e.markAsDirty();
        }
        e.setValue(e._pendingValue, { emitModelToViewChange: false });
        t.viewToModelUpdate(e._pendingValue);
        e._pendingChange = false;
      }
      function Xp(e, t) {
        let n;
        n =
          e.path.length > 1
            ? `path: '${e.path.join(' -> ')}'`
            : e.path[0] ? `name: '${e.path}'` : 'unspecified name attribute';
        throw new Error(`${t} ${n}`);
      }
      function ef(e) {
        if (e == null) {
          return null;
        } else {
          return $p.compose(e.map(Qp));
        }
      }
      function tf(e) {
        if (e == null) {
          return null;
        } else {
          return $p.composeAsync(e.map(Gp));
        }
      }
      function af(e) {
        const t = cf(e) ? e.validators : e;
        if (Array.isArray(t)) {
          return ef(t);
        } else {
          return t || null;
        }
      }
      function uf(e, t) {
        const n = cf(t) ? t.asyncValidators : e;
        if (Array.isArray(n)) {
          return tf(n);
        } else {
          return n || null;
        }
      }
      function cf(e) {
        return e != null && !Array.isArray(e) && typeof e == 'object';
      }
      function Tf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'welcome']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, [' Block Information '])),
          ],
          null,
          null
        );
      }
      function kf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'welcome']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, [' Current Block Tip '])),
          ],
          null,
          null
        );
      }
      function Af(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              45,
              'div',
              [['style', 'padding-top: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Wi(16777216, null, null, 1, null, Tf)),
            ls(2, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Wi(16777216, null, null, 1, null, kf)),
            ls(4, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Zi(
              5,
              0,
              null,
              null,
              40,
              'div',
              [['style', 'padding-left: 2rem; padding-top: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(6, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              7,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Block Hash:'])),
            (e()(),
            Zi(
              9,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r =
                    Wr(e, 10).onClick(
                      n.button,
                      n.ctrlKey,
                      n.metaKey,
                      n.shiftKey
                    ) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            ls(
              10,
              671744,
              null,
              0,
              ep,
              [Xd, $h, Il],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            oo(11, { 'block-hash': 0, 'query-node': 1 }),
            io(12, 1),
            (e()(), ao(13, null, ['', ''])),
            (e()(),
            Zi(14, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              15,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Timestamp:'])),
            (e()(), ao(17, null, ['', ' '])),
            (e()(),
            Zi(18, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              19,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Height:'])),
            (e()(),
            Zi(
              21,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r =
                    Wr(e, 22).onClick(
                      n.button,
                      n.ctrlKey,
                      n.metaKey,
                      n.shiftKey
                    ) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            ls(
              22,
              671744,
              null,
              0,
              ep,
              [Xd, $h, Il],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            oo(23, { 'block-height': 0, 'query-node': 1 }),
            io(24, 1),
            (e()(), ao(25, null, ['', ''])),
            (e()(),
            Zi(26, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              27,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Previous Block Hash:'])),
            (e()(),
            Zi(
              29,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r =
                    Wr(e, 30).onClick(
                      n.button,
                      n.ctrlKey,
                      n.metaKey,
                      n.shiftKey
                    ) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            ls(
              30,
              671744,
              null,
              0,
              ep,
              [Xd, $h, Il],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            oo(31, { 'block-hash': 0, 'query-node': 1 }),
            io(32, 1),
            (e()(), ao(33, null, ['', ''])),
            (e()(),
            Zi(34, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              35,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Transaction Merkle Root:'])),
            (e()(), ao(37, null, ['', ' '])),
            (e()(),
            Zi(38, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              39,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Nonce:'])),
            (e()(), ao(41, null, ['', ' '])),
            (e()(),
            Zi(42, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              43,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Version:'])),
            (e()(), ao(45, null, ['', ' '])),
          ],
          function(e, t) {
            var n = t.component;
            e(t, 2, 0, n.hasParam);
            e(t, 4, 0, !n.hasParam);
            var r = e(t, 11, 0, n.blockRes.Header.BlockHashHex, n.queryNode);
            var s = e(t, 12, 0, '/');
            e(t, 10, 0, r, s);
            var i = e(t, 23, 0, n.blockRes.Header.Height, n.queryNode);
            var o = e(t, 24, 0, '/');
            e(t, 22, 0, i, o);
            var l = e(
              t,
              31,
              0,
              n.blockRes.Header.PrevBlockHashHex,
              n.queryNode
            );
            var a = e(t, 32, 0, '/');
            e(t, 30, 0, l, a);
          },
          function(e, t) {
            var n = t.component;
            e(t, 9, 0, Wr(t, 10).target, Wr(t, 10).href);
            e(t, 13, 0, n.blockRes.Header.BlockHashHex);
            e(t, 17, 0, n.blockRes.Header.DateTime);
            e(t, 21, 0, Wr(t, 22).target, Wr(t, 22).href);
            e(t, 25, 0, n.blockRes.Header.Height);
            e(t, 29, 0, Wr(t, 30).target, Wr(t, 30).href);
            e(t, 33, 0, n.blockRes.Header.PrevBlockHashHex);
            e(t, 37, 0, n.blockRes.Header.TransactionMerkleRootHex);
            e(t, 41, 0, n.blockRes.Header.Nonce);
            e(t, 45, 0, n.blockRes.Header.Version);
          }
        );
      }
      function Rf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'welcome'], ['style', 'padding-top: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, [' Block Transactions '])),
          ],
          null,
          null
        );
      }
      function If(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(0, 0, null, null, 6, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              1,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'welcome'], ['style', 'padding-top: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            ao(-1, null, [
              ' Final Balance (Including Unconfirmed Transactions) ',
            ])),
            (e()(),
            Zi(
              3,
              0,
              null,
              null,
              3,
              'h4',
              [['style', 'padding-top: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(4, 0, null, null, 2, 'b', [], null, null, null, null, null)),
            (e()(), ao(5, null, [' ', ' '])),
            oo(6, { minimumFractionDigits: 0 }),
          ],
          null,
          function(e, t) {
            var n = (t.component.txnRes.BalanceNanos / 1e9).toLocaleString(
              'en-US',
              e(t, 6, 0, 9)
            );
            e(t, 5, 0, n);
          }
        );
      }
      function Nf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'welcome'], ['style', 'padding-top: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, [' Transactions Found '])),
          ],
          null,
          null
        );
      }
      function Pf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), ao(-1, null, [' (latest)'])),
          ],
          null,
          null
        );
      }
      function Of(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              5,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r =
                    Wr(e, 1).onClick(
                      n.button,
                      n.ctrlKey,
                      n.metaKey,
                      n.shiftKey
                    ) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            ls(
              1,
              671744,
              null,
              0,
              ep,
              [Xd, $h, Il],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            oo(2, { 'block-hash': 0, 'query-node': 1 }),
            io(3, 1),
            (e()(),
            Zi(
              4,
              0,
              null,
              null,
              1,
              'div',
              [['style', 'display: inline;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(5, null, ['', ''])),
          ],
          function(e, t) {
            var n = e(
              t,
              2,
              0,
              t.parent.context.$implicit.BlockHashHex,
              t.component.queryNode
            );
            var r = e(t, 3, 0, '/');
            e(t, 1, 0, n, r);
          },
          function(e, t) {
            e(t, 0, 0, Wr(t, 1).target, Wr(t, 1).href);
            e(t, 5, 0, t.parent.context.$implicit.BlockHashHex);
          }
        );
      }
      function Mf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['style', 'display: inline; color: #ab1414;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['UNCONFIRMED'])),
          ],
          null,
          null
        );
      }
      function Df(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              4,
              'div',
              [['style', 'display: flex;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(
              1,
              0,
              null,
              null,
              1,
              'div',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, [' Imporant: '])),
            (e()(),
            Zi(
              3,
              0,
              null,
              null,
              1,
              'div',
              [
                [
                  'style',
                  'color: #ab1414; display: inline-block; max-width: 20rem;',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            ao(-1, null, [
              ' This transaction type can take up to 24 hours to confirm. This is normal, and is due to the fact that we have to wait for enough "work" to build on the Bitcoin blockchain before accepting it. ',
            ])),
          ],
          null,
          null
        );
      }
      function Vf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(0, 0, null, null, 12, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(1, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(2, null, [' Bitcoin Burned: ', ' '])),
            (e()(),
            Zi(3, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(4, null, [' BitClout Created: ', ' '])),
            (e()(),
            Zi(5, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(6, null, [' Total BitClout Purchased Before: ', ' '])),
            (e()(),
            Zi(7, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(8, null, [' Total BitClout Purchased After: ', ' '])),
            (e()(),
            Zi(9, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(), ao(-1, null, [' Bitcoin Transaction ID: '])),
            (e()(),
            Zi(
              11,
              0,
              null,
              null,
              1,
              'a',
              [['target', '_blank']],
              [[8, 'href', 4]],
              null,
              null,
              null,
              null
            )),
            (e()(), ao(12, null, [' ', ' '])),
          ],
          null,
          function(e, t) {
            var n;
            e(
              t,
              2,
              0,
              (
                t.parent.parent.context.$implicit.TransactionMetadata
                  .BitcoinExchangeTxindexMetadata.SatoshisBurned / 1e8
              ).toFixed(8)
            );
            e(
              t,
              4,
              0,
              (
                t.parent.parent.context.$implicit.TransactionMetadata
                  .BitcoinExchangeTxindexMetadata.NanosCreated / 1e9
              ).toFixed(9)
            );
            e(
              t,
              6,
              0,
              (
                t.parent.parent.context.$implicit.TransactionMetadata
                  .BitcoinExchangeTxindexMetadata.TotalNanosPurchasedBefore /
                1e9
              ).toFixed(9)
            );
            e(
              t,
              8,
              0,
              (
                t.parent.parent.context.$implicit.TransactionMetadata
                  .BitcoinExchangeTxindexMetadata.TotalNanosPurchasedAfter / 1e9
              ).toFixed(9)
            );
            e(
              t,
              11,
              0,
              'https://www.blockchain.com/btc/tx/' +
                ((n =
                  t.parent.parent.context.$implicit.TransactionMetadata
                    .BitcoinExchangeTxindexMetadata.BitcoinTxnHash) != null
                  ? n.toString()
                  : '')
            );
            e(
              t,
              12,
              0,
              t.parent.parent.context.$implicit.TransactionMetadata
                .BitcoinExchangeTxindexMetadata.BitcoinTxnHash
            );
          }
        );
      }
      function Uf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(0, 0, null, null, 15, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(1, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (e()(), ao(-1, null, ['Parsed Fields'])),
            (e()(),
            Zi(3, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(4, null, [' Total Input: ', ' '])),
            (e()(),
            Zi(5, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(6, null, [' Total Output: ', ' '])),
            (e()(),
            Zi(7, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(8, null, [' Fees: ', ' '])),
            (e()(), Wi(16777216, null, null, 1, null, Vf)),
            ls(10, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Zi(
              11,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'mt-3']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Raw Metadata'])),
            (e()(),
            Zi(13, 0, null, null, 2, 'pre', [], null, null, null, null, null)),
            (e()(), ao(14, null, ['', ''])),
            ((t = 0), (n = Wl), (r = []), us(-1, (t |= 16), null, 0, n, n, r)),
          ],
          function(e, t) {
            e(
              t,
              10,
              0,
              t.parent.context.$implicit.TransactionMetadata
                .BitcoinExchangeTxindexMetadata
            );
          },
          function(e, t) {
            e(
              t,
              4,
              0,
              (
                t.parent.context.$implicit.TransactionMetadata
                  .BasicTransferTxindexMetadata.TotalInputNanos / 1e9
              ).toFixed(9)
            );
            e(
              t,
              6,
              0,
              (
                t.parent.context.$implicit.TransactionMetadata
                  .BasicTransferTxindexMetadata.TotalOutputNanos / 1e9
              ).toFixed(9)
            );
            e(
              t,
              8,
              0,
              (
                t.parent.context.$implicit.TransactionMetadata
                  .BasicTransferTxindexMetadata.FeeNanos / 1e9
              ).toFixed(9)
            );
            e(
              t,
              14,
              0,
              (function(e, t, n, r) {
                if (Wt.isWrapped(r)) {
                  r = Wt.unwrap(r);
                  const t = e.def.nodes[14].bindingIndex + 0;
                  const n = Wt.unwrap(e.oldValues[t]);
                  e.oldValues[t] = new Wt(n);
                }
                return r;
              })(
                t,
                0,
                0,
                Wr(t, 15).transform(
                  t.parent.context.$implicit.TransactionMetadata
                )
              )
            );
          }
        );
        var t;
        var n;
        var r;
      }
      function Lf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(0, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(-1, null, [' (coming soon!) '])),
          ],
          null,
          null
        );
      }
      function Ff(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              15,
              'div',
              [['style', 'padding-left: 2rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(1, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(2, null, [' Input #', ' '])),
            (e()(),
            Zi(
              3,
              0,
              null,
              null,
              12,
              'div',
              [['style', 'padding-left: 2rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(4, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              5,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Transaction ID:'])),
            (e()(),
            Zi(
              7,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r =
                    Wr(e, 8).onClick(
                      n.button,
                      n.ctrlKey,
                      n.metaKey,
                      n.shiftKey
                    ) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            ls(
              8,
              671744,
              null,
              0,
              ep,
              [Xd, $h, Il],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            oo(9, { 'transaction-id': 0, 'query-node': 1 }),
            io(10, 1),
            (e()(), ao(11, null, ['', ''])),
            (e()(),
            Zi(12, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              13,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Index:'])),
            (e()(), ao(15, null, ['', ' '])),
          ],
          function(e, t) {
            var n = e(
              t,
              9,
              0,
              t.context.$implicit.TransactionIDBase58Check,
              t.component.queryNode
            );
            var r = e(t, 10, 0, '/');
            e(t, 8, 0, n, r);
          },
          function(e, t) {
            e(t, 2, 0, t.context.index);
            e(t, 7, 0, Wr(t, 8).target, Wr(t, 8).href);
            e(t, 11, 0, t.context.$implicit.TransactionIDBase58Check);
            e(t, 15, 0, t.context.$implicit.Index);
          }
        );
      }
      function jf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              15,
              'div',
              [['style', 'padding-left: 2rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(1, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(2, null, [' Output #', ' '])),
            (e()(),
            Zi(
              3,
              0,
              null,
              null,
              12,
              'div',
              [['style', 'padding-left: 2rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(4, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              5,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Public Key:'])),
            (e()(),
            Zi(
              7,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r =
                    Wr(e, 8).onClick(
                      n.button,
                      n.ctrlKey,
                      n.metaKey,
                      n.shiftKey
                    ) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            ls(
              8,
              671744,
              null,
              0,
              ep,
              [Xd, $h, Il],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            oo(9, { 'public-key': 0, 'query-node': 1 }),
            io(10, 1),
            (e()(), ao(11, null, ['', ''])),
            (e()(),
            Zi(12, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              13,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['BitClout:'])),
            (e()(), ao(15, null, ['', ' '])),
          ],
          function(e, t) {
            var n = e(
              t,
              9,
              0,
              t.context.$implicit.PublicKeyBase58Check,
              t.component.queryNode
            );
            var r = e(t, 10, 0, '/');
            e(t, 8, 0, n, r);
          },
          function(e, t) {
            e(t, 2, 0, t.context.index);
            e(t, 7, 0, Wr(t, 8).target, Wr(t, 8).href);
            e(t, 11, 0, t.context.$implicit.PublicKeyBase58Check);
            e(t, 15, 0, (t.context.$implicit.AmountNanos / 1e9).toFixed(9));
          }
        );
      }
      function Hf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              52,
              'div',
              [['style', 'padding-top: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(1, 0, null, null, 5, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(2, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), ao(3, null, ['Transaction #', ''])),
            (e()(), Wi(16777216, null, null, 1, null, Pf)),
            ls(5, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), ao(-1, null, [': '])),
            (e()(),
            Zi(
              7,
              0,
              null,
              null,
              45,
              'div',
              [['style', 'padding-left: 2rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(8, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              9,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Transaction ID:'])),
            (e()(),
            Zi(
              11,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r =
                    Wr(e, 12).onClick(
                      n.button,
                      n.ctrlKey,
                      n.metaKey,
                      n.shiftKey
                    ) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            ls(
              12,
              671744,
              null,
              0,
              ep,
              [Xd, $h, Il],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            oo(13, { 'transaction-id': 0, 'query-node': 1 }),
            io(14, 1),
            (e()(), ao(15, null, ['', ''])),
            (e()(),
            Zi(16, 0, null, null, 6, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              17,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Block Hash:'])),
            (e()(), Wi(16777216, null, null, 1, null, Of)),
            ls(20, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Wi(16777216, null, null, 1, null, Mf)),
            ls(22, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Zi(23, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              24,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Transaction Type:'])),
            (e()(), ao(26, null, ['', ' '])),
            (e()(), Wi(16777216, null, null, 1, null, Df)),
            ls(28, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Zi(29, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              30,
              0,
              null,
              null,
              1,
              'span',
              [
                [
                  'style',
                  'width: 15rem; display: inline-block; vertical-align: top;',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Transaction Metadata:'])),
            (e()(),
            Zi(
              32,
              0,
              null,
              null,
              4,
              'div',
              [['style', 'display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Wi(16777216, null, null, 1, null, Uf)),
            ls(34, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Wi(16777216, null, null, 1, null, Lf)),
            ls(36, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Zi(37, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (e()(),
            Zi(
              38,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'width: 15rem; display: inline-block;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['Raw Transaction Hex:'])),
            (e()(),
            Zi(
              40,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'margin-right: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(41, null, ['', '...'])),
            (e()(),
            Zi(
              42,
              0,
              null,
              null,
              2,
              'div',
              [
                ['class', 'btn btn-light little-button'],
                ['style', 'text-decoration: none;'],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r =
                    e.component.copy(e.context.$implicit.RawTransactionHex) !==
                      false && r;
                }
                return r;
              },
              null,
              null
            )),
            (e()(),
            Zi(
              43,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'divtext']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, [' Copy '])),
            (e()(),
            Zi(45, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(-1, null, [' Transaction Inputs '])),
            (e()(), Wi(16777216, null, null, 1, null, Ff)),
            ls(
              48,
              278528,
              null,
              0,
              zl,
              [Vn, Mn, Rn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (e()(),
            Zi(49, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), ao(-1, null, [' Transaction Outputs '])),
            (e()(), Wi(16777216, null, null, 1, null, jf)),
            ls(
              52,
              278528,
              null,
              0,
              zl,
              [Vn, Mn, Rn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function(e, t) {
            var n = t.component;
            e(t, 5, 0, t.context.index === 0);
            var r = e(
              t,
              13,
              0,
              t.context.$implicit.TransactionIDBase58Check,
              n.queryNode
            );
            var s = e(t, 14, 0, '/');
            e(t, 12, 0, r, s);
            e(
              t,
              20,
              0,
              t.context.$implicit.BlockHashHex !==
                '0000000000000000000000000000000000000000000000000000000000000000'
            );
            e(
              t,
              22,
              0,
              t.context.$implicit.BlockHashHex ===
                '0000000000000000000000000000000000000000000000000000000000000000'
            );
            e(
              t,
              28,
              0,
              t.context.$implicit.TransactionType === 'BITCOIN_EXCHANGE' &&
                t.context.$implicit.BlockHashHex ===
                  '0000000000000000000000000000000000000000000000000000000000000000'
            );
            e(t, 34, 0, t.context.$implicit.TransactionMetadata);
            e(t, 36, 0, !t.context.$implicit.TransactionMetadata);
            e(t, 48, 0, t.context.$implicit.Inputs);
            e(t, 52, 0, t.context.$implicit.Outputs);
          },
          function(e, t) {
            e(t, 3, 0, t.context.index);
            e(t, 11, 0, Wr(t, 12).target, Wr(t, 12).href);
            e(t, 15, 0, t.context.$implicit.TransactionIDBase58Check);
            e(t, 26, 0, t.context.$implicit.TransactionType);
            var n = t.context.$implicit.RawTransactionHex.slice(0, 50);
            e(t, 41, 0, n);
          }
        );
      }
      function $f(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(0, 0, null, null, 8, 'div', [], null, null, null, null, null)),
            (e()(), Wi(16777216, null, null, 1, null, Rf)),
            ls(2, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Wi(16777216, null, null, 1, null, If)),
            ls(4, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Wi(16777216, null, null, 1, null, Nf)),
            ls(6, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Wi(16777216, null, null, 1, null, Hf)),
            ls(
              8,
              278528,
              null,
              0,
              zl,
              [Vn, Mn, Rn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function(e, t) {
            var n = t.component;
            e(t, 2, 0, n.blockRes != null);
            e(t, 4, 0, n.txnRes.BalanceNanos);
            e(t, 6, 0, n.blockRes == null);
            e(t, 8, 0, n.txnRes.Transactions);
          },
          null
        );
      }
      function zf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              2,
              'div',
              [['style', 'margin-top: 1rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(1, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (e()(), ao(-1, null, [' Loading... '])),
          ],
          null,
          null
        );
      }
      function Bf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(
              0,
              0,
              null,
              null,
              26,
              'div',
              [['class', 'explorer-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(
              1,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'welcome-top']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, [' Welcome to the BitClout Block Explorer '])),
            (e()(),
            Zi(
              3,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'welcome']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            ao(-1, null, [
              ' Enter a BitClout transaction ID, public key, block hash, or block height. ',
            ])),
            (e()(),
            Zi(
              5,
              0,
              null,
              null,
              9,
              'div',
              [['style', 'margin-top: .5rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Zi(
              6,
              0,
              null,
              null,
              5,
              'input',
              [
                ['id', ''],
                ['name', ''],
                [
                  'placeholder',
                  'Block hash, transaction ID, public key, or block height...',
                ],
                ['style', 'width: 40rem; margin-left: 0rem; max-width: 55vw;'],
                ['type', 'text'],
                ['value', ''],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'keypress'],
                [null, 'ngModelChange'],
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(e, t, n) {
                var r = true;
                var s = e.component;
                if (t === 'input') {
                  r = Wr(e, 7)._handleInput(n.target.value) !== false && r;
                }
                if (t === 'blur') {
                  r = Wr(e, 7).onTouched() !== false && r;
                }
                if (t === 'compositionstart') {
                  r = Wr(e, 7)._compositionStart() !== false && r;
                }
                if (t === 'compositionend') {
                  r = Wr(e, 7)._compositionEnd(n.target.value) !== false && r;
                }
                if (t === 'keypress') {
                  r = s.searchEnterPressed(n) !== false && r;
                }
                if (t === 'ngModelChange') {
                  r = (s.explorerQuery = n) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            ls(7, 16384, null, 0, Op, [gn, cn, [2, Pp]], null, null),
            as(
              1024,
              null,
              Np,
              function(e) {
                return [e];
              },
              [Op]
            ),
            ls(
              9,
              671744,
              null,
              0,
              Cf,
              [[8, null], [8, null], [8, null], [6, Np]],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            as(2048, null, Up, null, [Cf]),
            ls(11, 16384, null, 0, Fp, [[4, Up]], null, null),
            (e()(),
            Zi(
              12,
              0,
              null,
              null,
              2,
              'div',
              [
                ['class', 'btn btn-light little-button'],
                ['style', 'text-decoration: none; margin-left: .5rem;'],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = true;
                if (t === 'click') {
                  r = e.component.relocateForQuery() !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            (e()(),
            Zi(
              13,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'divtext']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, [' Search '])),
            (e()(),
            Zi(
              15,
              0,
              null,
              null,
              4,
              'div',
              [['style', 'margin-top: .5rem;']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            ao(-1, null, [
              ' Browse the BitClout social network or learn more about the project ',
            ])),
            (e()(),
            Zi(
              17,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'https://bitclout.com'], ['target', '_blank']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), ao(-1, null, ['here'])),
            (e()(), ao(-1, null, ['. '])),
            (e()(), Wi(16777216, null, null, 1, null, Af)),
            ls(21, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Wi(16777216, null, null, 1, null, $f)),
            ls(23, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Wi(16777216, null, null, 1, null, zf)),
            ls(25, 16384, null, 0, ql, [Vn, Mn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Zi(
              26,
              0,
              null,
              null,
              0,
              'div',
              [['style', 'height: 10vh;']],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function(e, t) {
            var n = t.component;
            e(t, 9, 0, '', n.explorerQuery);
            e(t, 21, 0, n.blockRes != null);
            e(t, 23, 0, n.txnRes != null);
            e(t, 25, 0, n.txnsLoading);
          },
          function(e, t) {
            e(
              t,
              6,
              0,
              Wr(t, 11).ngClassUntouched,
              Wr(t, 11).ngClassTouched,
              Wr(t, 11).ngClassPristine,
              Wr(t, 11).ngClassDirty,
              Wr(t, 11).ngClassValid,
              Wr(t, 11).ngClassInvalid,
              Wr(t, 11).ngClassPending
            );
          }
        );
      }
      function qf(e) {
        return ho(
          0,
          [
            (e()(),
            Zi(0, 0, null, null, 1, 'app-root', [], null, null, null, Bf, Sf)),
            ls(1, 114688, null, 0, Pa, [It, $h, Xd, ma], null, null),
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      n.r(t);
      let s = false;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const e = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                e.stack
            );
          } else if (s) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
          }
          s = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      const l = {
        closed: true,
        next(e) {},
        error(e) {
          if (i.useDeprecatedSynchronousErrorHandling) {
            throw e;
          }
          o(e);
        },
        complete() {},
      };
      const a = Array.isArray || (e => e && typeof e.length == 'number');
      c.prototype = Object.create(Error.prototype);
      const h = c;
      let d = (() => {
        class e {
          constructor(e) {
            this.closed = false;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            if (e) {
              this._unsubscribe = e;
            }
          }
          unsubscribe() {
            let e;
            let t = false;
            if (this.closed) {
              return;
            }
            let {
              _parent: n,
              _parents: s,
              _unsubscribe: i,
              _subscriptions: o,
            } = this;
            this.closed = true;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            let l = -1;
            let c = s ? s.length : 0;
            while (n) {
              n.remove(this);
              n = (++l < c && s[l]) || null;
            }
            if (r(i)) {
              try {
                i.call(this);
              } catch (d) {
                t = true;
                e = d instanceof h ? p(d.errors) : [d];
              }
            }
            if (a(o)) {
              l = -1;
              for (c = o.length; ++l < c; ) {
                const n = o[l];
                if (u(n)) {
                  try {
                    n.unsubscribe();
                  } catch (d) {
                    t = true;
                    e = e || [];
                    if (d instanceof h) {
                      e = e.concat(p(d.errors));
                    } else {
                      e.push(d);
                    }
                  }
                }
              }
            }
            if (t) {
              throw new h(e);
            }
          }
          add(t) {
            let n = t;
            switch (typeof t) {
              case 'function':
                n = new e(t);
              case 'object':
                if (
                  n === this ||
                  n.closed ||
                  typeof n.unsubscribe != 'function'
                ) {
                  return n;
                }
                if (this.closed) {
                  n.unsubscribe();
                  return n;
                }
                if (!(n instanceof e)) {
                  const t = n;
                  n = new e();
                  n._subscriptions = [t];
                }
                break;
              default:
                if (!t) {
                  return e.EMPTY;
                }
                throw new Error(
                  'unrecognized teardown ' + t + ' added to Subscription.'
                );
            }
            if (n._addParent(this)) {
              const e = this._subscriptions;
              if (e) {
                e.push(n);
              } else {
                this._subscriptions = [n];
              }
            }
            return n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              if (n !== -1) {
                t.splice(n, 1);
              }
            }
          }
          _addParent(e) {
            let { _parent: t, _parents: n } = this;
            return (
              t !== e &&
              (t
                ? n
                  ? n.indexOf(e) === -1 && (n.push(e), true)
                  : ((this._parents = [e]), true)
                : ((this._parent = e), true))
            );
          }
        }
        e.EMPTY = (function(e) {
          e.closed = true;
          return e;
        })(new e());
        return e;
      })();
      const f =
        typeof Symbol == 'function'
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random();
      class g extends d {
        constructor(e, t, n) {
          switch ((super(),
          (this.syncErrorValue = null),
          (this.syncErrorThrown = false),
          (this.syncErrorThrowable = false),
          (this.isStopped = false),
          arguments.length)) {
            case 0:
              this.destination = l;
              break;
            case 1:
              if (!e) {
                this.destination = l;
                break;
              }
              if (typeof e == 'object') {
                if (e instanceof g) {
                  this.syncErrorThrowable = e.syncErrorThrowable;
                  this.destination = e;
                  e.add(this);
                } else {
                  this.syncErrorThrowable = true;
                  this.destination = new m(this, e);
                }
                break;
              }
            default:
              this.syncErrorThrowable = true;
              this.destination = new m(this, e, t, n);
          }
        }
        [f]() {
          return this;
        }
        static create(e, t, n) {
          const r = new g(e, t, n);
          r.syncErrorThrowable = false;
          return r;
        }
        next(e) {
          if (!this.isStopped) {
            this._next(e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this._error(e);
          }
        }
        complete() {
          if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
          }
        }
        unsubscribe() {
          if (!this.closed) {
            this.isStopped = true;
            super.unsubscribe();
          }
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e);
          this.unsubscribe();
        }
        _complete() {
          this.destination.complete();
          this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: e, _parents: t } = this;
          this._parent = null;
          this._parents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parent = e;
          this._parents = t;
          return this;
        }
      }
      class m extends g {
        constructor(e, t, n, s) {
          let i;
          super();
          this._parentSubscriber = e;
          let o = this;
          if (r(t)) {
            i = t;
          } else if (t) {
            i = t.next;
            n = t.error;
            s = t.complete;
            if (t !== l) {
              o = Object.create(t);
              if (r(o.unsubscribe)) {
                this.add(o.unsubscribe.bind(o));
              }
              o.unsubscribe = this.unsubscribe.bind(this);
            }
          }
          this._context = o;
          this._next = i;
          this._error = n;
          this._complete = s;
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            if (
              i.useDeprecatedSynchronousErrorHandling &&
              t.syncErrorThrowable
            ) {
              if (this.__tryOrSetError(t, this._next, e)) {
                this.unsubscribe();
              }
            } else {
              this.__tryOrUnsub(this._next, e);
            }
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            const { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error) {
              if (n && t.syncErrorThrowable) {
                this.__tryOrSetError(t, this._error, e);
                this.unsubscribe();
              } else {
                this.__tryOrUnsub(this._error, e);
                this.unsubscribe();
              }
            } else if (t.syncErrorThrowable) {
              if (n) {
                t.syncErrorValue = e;
                t.syncErrorThrown = true;
              } else {
                o(e);
              }
              this.unsubscribe();
            } else {
              this.unsubscribe();
              if (n) {
                throw e;
              }
              o(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              if (
                i.useDeprecatedSynchronousErrorHandling &&
                e.syncErrorThrowable
              ) {
                this.__tryOrSetError(e, t);
                this.unsubscribe();
              } else {
                this.__tryOrUnsub(t);
                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            this.unsubscribe();
            if (i.useDeprecatedSynchronousErrorHandling) {
              throw n;
            }
            o(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!i.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
          }
          try {
            t.call(this._context, n);
          } catch (r) {
            if (i.useDeprecatedSynchronousErrorHandling) {
              e.syncErrorValue = r;
              e.syncErrorThrown = true;
              return true;
            } else {
              o(r);
              return true;
            }
          }
          return false;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          this._context = null;
          this._parentSubscriber = null;
          e.unsubscribe();
        }
      }
      const y =
        (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
      let b = (() => {
        class e {
          constructor(e) {
            this._isScalar = false;
            if (e) {
              this._subscribe = e;
            }
          }
          lift(t) {
            const n = new e();
            n.source = this;
            n.operator = t;
            return n;
          }
          subscribe(e, t, n) {
            const { operator: r } = this;
            const s = (function(e, t, n) {
              if (e) {
                if (e instanceof g) {
                  return e;
                }
                if (e[f]) {
                  return e[f]();
                }
              }
              if (e || t || n) {
                return new g(e, t, n);
              } else {
                return new g(l);
              }
            })(e, t, n);
            s.add(
              r
                ? r.call(s, this.source)
                : this.source ||
                  (i.useDeprecatedSynchronousErrorHandling &&
                    !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
            );
            if (
              i.useDeprecatedSynchronousErrorHandling &&
              s.syncErrorThrowable &&
              ((s.syncErrorThrowable = false), s.syncErrorThrown)
            ) {
              throw s.syncErrorValue;
            }
            return s;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              if (i.useDeprecatedSynchronousErrorHandling) {
                e.syncErrorThrown = true;
                e.syncErrorValue = t;
              }
              if (
                (function(e) {
                  while (e) {
                    const { closed: t, destination: n, isStopped: r } = e;
                    if (t || r) {
                      return false;
                    }
                    e = n && n instanceof g ? n : null;
                  }
                  return true;
                })(e)
              ) {
                e.error(t);
              } else {
                console.warn(t);
              }
            }
          }
          forEach(e, t) {
            return new (t = C(t))((t, n) => {
              let r;
              r = this.subscribe(
                t => {
                  try {
                    e(t);
                  } catch (s) {
                    n(s);
                    if (r) {
                      r.unsubscribe();
                    }
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [y]() {
            return this;
          }
          pipe(...e) {
            if (e.length === 0) {
              return this;
            } else {
              return w(e)(this);
            }
          }
          toPromise(e) {
            return new (e = C(e))((e, t) => {
              let n;
              this.subscribe(e => (n = e), e => t(e), () => e(n));
            });
          }
        }
        e.create = t => new e(t);
        return e;
      })();
      x.prototype = Object.create(Error.prototype);
      const E = x;
      class S extends d {
        constructor(e, t) {
          super();
          this.subject = e;
          this.subscriber = t;
          this.closed = false;
        }
        unsubscribe() {
          if (this.closed) {
            return;
          }
          this.closed = true;
          const e = this.subject;
          const t = e.observers;
          this.subject = null;
          if (!t || t.length === 0 || e.isStopped || e.closed) {
            return;
          }
          const n = t.indexOf(this.subscriber);
          if (n !== -1) {
            t.splice(n, 1);
          }
        }
      }
      class T extends g {
        constructor(e) {
          super(e);
          this.destination = e;
        }
      }
      let k = (() => {
        class e extends b {
          constructor() {
            super();
            this.observers = [];
            this.closed = false;
            this.isStopped = false;
            this.hasError = false;
            this.thrownError = null;
          }
          [f]() {
            return new T(this);
          }
          lift(e) {
            const t = new A(this, this);
            t.operator = e;
            return t;
          }
          next(e) {
            if (this.closed) {
              throw new E();
            }
            if (!this.isStopped) {
              const { observers: t } = this;
              const n = t.length;
              const r = t.slice();
              for (let s = 0; s < n; s++) {
                r[s].next(e);
              }
            }
          }
          error(e) {
            if (this.closed) {
              throw new E();
            }
            this.hasError = true;
            this.thrownError = e;
            this.isStopped = true;
            const { observers: t } = this;
            const n = t.length;
            const r = t.slice();
            for (let s = 0; s < n; s++) {
              r[s].error(e);
            }
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) {
              throw new E();
            }
            this.isStopped = true;
            const { observers: e } = this;
            const t = e.length;
            const n = e.slice();
            for (let r = 0; r < t; r++) {
              n[r].complete();
            }
            this.observers.length = 0;
          }
          unsubscribe() {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
          }
          _trySubscribe(e) {
            if (this.closed) {
              throw new E();
            }
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) {
              throw new E();
            }
            if (this.hasError) {
              e.error(this.thrownError);
              return d.EMPTY;
            } else if (this.isStopped) {
              e.complete();
              return d.EMPTY;
            } else {
              this.observers.push(e);
              return new S(this, e);
            }
          }
          asObservable() {
            const e = new b();
            e.source = this;
            return e;
          }
        }
        e.create = (e, t) => new A(e, t);
        return e;
      })();
      class A extends k {
        constructor(e, t) {
          super();
          this.destination = e;
          this.source = t;
        }
        next(e) {
          const { destination: t } = this;
          if (t && t.next) {
            t.next(e);
          }
        }
        error(e) {
          const { destination: t } = this;
          if (t && t.error) {
            this.destination.error(e);
          }
        }
        complete() {
          const { destination: e } = this;
          if (e && e.complete) {
            this.destination.complete();
          }
        }
        _subscribe(e) {
          const { source: t } = this;
          if (t) {
            return this.source.subscribe(e);
          } else {
            return d.EMPTY;
          }
        }
      }
      class I extends g {
        constructor(e, t, n) {
          super();
          this.parent = e;
          this.outerValue = t;
          this.outerIndex = n;
          this.index = 0;
        }
        _next(e) {
          this.parent.notifyNext(
            this.outerValue,
            e,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(e) {
          this.parent.notifyError(e, this);
          this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this);
          this.unsubscribe();
        }
      }
      const N = e => t => {
        let n = 0;
        for (let r = e.length; n < r && !t.closed; n++) {
          t.next(e[n]);
        }
        if (!t.closed) {
          t.complete();
        }
      };
      const P = e => t => (
        e
          .then(
            e => {
              if (!t.closed) {
                t.next(e);
                t.complete();
              }
            },
            e => t.error(e)
          )
          .then(null, o),
        t
      );
      const M = O();
      const D = e => t => {
        const n = e[M]();
        if (typeof n.return == 'function') {
          t.add(() => {
            if (n.return) {
              n.return();
            }
          });
        }
        return t;
      };
      const V = e => t => {
        const n = e[y]();
        if (typeof n.subscribe != 'function') {
          throw new TypeError(
            'Provided object does not correctly implement Symbol.observable'
          );
        }
        return n.subscribe(t);
      };
      const U = e => e && typeof e.length == 'number' && typeof e != 'function';
      const F = e => {
        if (e instanceof b) {
          return t =>
            e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t);
        }
        if (e && typeof e[y] == 'function') {
          return V(e);
        }
        if (U(e)) {
          return N(e);
        }
        if (L(e)) {
          return P(e);
        }
        if (e && typeof e[M] == 'function') {
          return D(e);
        }
        {
          const t = u(e) ? 'an invalid object' : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
      };
      class H extends g {
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
      class z {
        constructor(e, t) {
          this.project = e;
          this.thisArg = t;
        }
        call(e, t) {
          return t.subscribe(new B(e, this.project, this.thisArg));
        }
      }
      class B extends g {
        constructor(e, t, n) {
          super(e);
          this.project = t;
          this.count = 0;
          this.thisArg = n || this;
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            this.destination.error(n);
            return;
          }
          this.destination.next(t);
        }
      }
      class W {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          this.project = e;
          this.concurrent = t;
        }
        call(e, t) {
          return t.subscribe(new Z(e, this.project, this.concurrent));
        }
      }
      class Z extends H {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e);
          this.project = t;
          this.concurrent = n;
          this.hasCompleted = false;
          this.buffer = [];
          this.active = 0;
          this.index = 0;
        }
        _next(e) {
          if (this.active < this.concurrent) {
            this._tryNext(e);
          } else {
            this.buffer.push(e);
          }
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            this.destination.error(r);
            return;
          }
          this.active++;
          this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = new I(this, void 0, void 0);
          this.destination.add(r);
          j(this, e, t, n, r);
        }
        _complete() {
          this.hasCompleted = true;
          if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
          }
          this.unsubscribe();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyComplete(e) {
          const t = this.buffer;
          this.remove(e);
          this.active--;
          if (t.length > 0) {
            this._next(t.shift());
          } else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
          }
        }
      }
      class X {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new ee(e, n);
          const s = t.subscribe(r);
          if (!r.closed) {
            r.connection = n.connect();
          }
          return s;
        }
      }
      class ee extends g {
        constructor(e, t) {
          super(e);
          this.connectable = t;
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) {
            this.connection = null;
            return;
          }
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) {
            this.connection = null;
            return;
          }
          e._refCount = t - 1;
          if (t > 1) {
            this.connection = null;
            return;
          }
          const { connection: n } = this;
          const r = e._connection;
          this.connection = null;
          if (!!r && (!n || r === n)) {
            r.unsubscribe();
          }
        }
      }
      const te = class extends b {
        constructor(e, t) {
          super();
          this.source = e;
          this.subjectFactory = t;
          this._refCount = 0;
          this._isComplete = false;
        }
        _subscribe(e) {
          return this.getSubject().subscribe(e);
        }
        getSubject() {
          const e = this._subject;
          if (!e || !!e.isStopped) {
            this._subject = this.subjectFactory();
          }
          return this._subject;
        }
        connect() {
          let e = this._connection;
          if (!e) {
            this._isComplete = false;
            e = this._connection = new d();
            e.add(this.source.subscribe(new re(this.getSubject(), this)));
            if (e.closed) {
              this._connection = null;
              e = d.EMPTY;
            } else {
              this._connection = e;
            }
          }
          return e;
        }
        refCount() {
          return Y()(this);
        }
      }.prototype;
      const ne = {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: te._subscribe },
        _isComplete: { value: te._isComplete, writable: true },
        getSubject: { value: te.getSubject },
        connect: { value: te.connect },
        refCount: { value: te.refCount },
      };
      class re extends T {
        constructor(e, t) {
          super(e);
          this.connectable = t;
        }
        _error(e) {
          this._unsubscribe();
          super._error(e);
        }
        _complete() {
          this.connectable._isComplete = true;
          this._unsubscribe();
          super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            e._refCount = 0;
            e._subject = null;
            e._connection = null;
            if (t) {
              t.unsubscribe();
            }
          }
        }
      }
      const ie = '__parameters__';
      const le = oe('Inject', e => ({ token: e }));
      const ae = oe('Optional');
      const ue = oe('Self');
      const ce = oe('SkipSelf');
      var he = (function() {
        var e = {};
        e[(e.Default = 0)] = 'Default';
        e[(e.Host = 1)] = 'Host';
        e[(e.Self = 2)] = 'Self';
        e[(e.SkipSelf = 4)] = 'SkipSelf';
        e[(e.Optional = 8)] = 'Optional';
        return e;
      })();
      const ge = de({ ngInjectableDef: de });
      const ye = de({ __forward_ref__: de });
      const we = typeof globalThis != 'undefined' && globalThis;
      const be = typeof window != 'undefined' && window;
      const Ce =
        typeof self != 'undefined' &&
        typeof WorkerGlobalScope != 'undefined' &&
        self instanceof WorkerGlobalScope &&
        self;
      const xe = typeof global != 'undefined' && global;
      const Ee = we || xe || be || Ce;
      class Se {
        constructor(e, t) {
          this._desc = e;
          this.ngMetadataName = 'InjectionToken';
          this.ngInjectableDef = void 0;
          if (typeof t == 'number') {
            this.__NG_ELEMENT_ID__ = t;
          } else if (t !== void 0) {
            this.ngInjectableDef = pe({
              token: this,
              providedIn: t.providedIn || 'root',
              factory: t.factory,
            });
          }
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Te = new Se('INJECTOR', -1);
      const ke = new Object();
      const Ae = 'ngTempTokenPath';
      const Re = 'ngTokenPath';
      const Ie = /\n/gm;
      const Ne = '\u0275';
      const Pe = '__source';
      const Oe = de({ provide: String, useValue: de });
      let Me;
      let De = void 0;
      class Fe {
        get(e, t = ke) {
          if (t === ke) {
            const t = new Error(`NullInjectorError: No provider for ${me(e)}!`);
            t.name = 'NullInjectorError';
            throw t;
          }
          return t;
        }
      }
      class He {}
      class $e {}
      const qe = (function() {
        var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
        e[e.Emulated] = 'Emulated';
        e[e.Native] = 'Native';
        e[e.None] = 'None';
        e[e.ShadowDom] = 'ShadowDom';
        return e;
      })();
      const Qe = (() =>
        (
          (typeof requestAnimationFrame != 'undefined' &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Ee))();
      const Ge = 'ngDebugContext';
      const We = 'ngOriginalError';
      const Ze = 'ngErrorLogger';
      class Xe {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e);
          const n = this._findContext(e);
          const r = (function(e) {
            return e[Ze] || Ye;
          })(e);
          r(this._console, 'ERROR', e);
          if (t) {
            r(this._console, 'ORIGINAL ERROR', t);
          }
          if (n) {
            r(this._console, 'ERROR CONTEXT', n);
          }
        }
        _findContext(e) {
          if (e) {
            if (Ke(e)) {
              return Ke(e);
            } else {
              return this._findContext(Je(e));
            }
          } else {
            return null;
          }
        }
        _findOriginalError(e) {
          let t = Je(e);
          while (t && Je(t)) {
            t = Je(t);
          }
          return t;
        }
      }
      let et = true;
      let tt = false;
      class rt {
        constructor(e) {
          this.defaultDoc = e;
          this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
            'sanitization-inert'
          );
          this.inertBodyElement = this.inertDocument.body;
          if (this.inertBodyElement == null) {
            const e = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(e);
            this.inertBodyElement = this.inertDocument.createElement('body');
            e.appendChild(this.inertBodyElement);
          }
          this.inertBodyElement.innerHTML =
            '<svg><g onload="this.parentNode.remove()"></g></svg>';
          if (
            !this.inertBodyElement.querySelector ||
            this.inertBodyElement.querySelector('svg')
          ) {
            this.inertBodyElement.innerHTML =
              '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">';
            this.getInertBodyElement =
              this.inertBodyElement.querySelector &&
              this.inertBodyElement.querySelector('svg img') &&
              (function() {
                try {
                  return !!window.DOMParser;
                } catch (e) {
                  return false;
                }
              })()
                ? this.getInertBodyElement_DOMParser
                : this.getInertBodyElement_InertDocument;
          } else {
            this.getInertBodyElement = this.getInertBodyElement_XHR;
          }
        }
        getInertBodyElement_XHR(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            e = encodeURI(e);
          } catch (r) {
            return null;
          }
          const t = new XMLHttpRequest();
          t.responseType = 'document';
          t.open('GET', 'data:text/html;charset=utf-8,' + e, false);
          t.send(void 0);
          const n = t.response.body;
          n.removeChild(n.firstChild);
          return n;
        }
        getInertBodyElement_DOMParser(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            const t = new window.DOMParser().parseFromString(e, 'text/html')
              .body;
            t.removeChild(t.firstChild);
            return t;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(e) {
          const t = this.inertDocument.createElement('template');
          if ('content' in t) {
            t.innerHTML = e;
            return t;
          } else {
            this.inertBodyElement.innerHTML = e;
            if (this.defaultDoc.documentMode) {
              this.stripCustomNsAttrs(this.inertBodyElement);
            }
            return this.inertBodyElement;
          }
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let r = t.length - 1; 0 < r; r--) {
            const n = t.item(r).name;
            if (n === 'xmlns:ns1' || n.indexOf('ns1:') === 0) {
              e.removeAttribute(n);
            }
          }
          let n = e.firstChild;
          while (n) {
            if (n.nodeType === Node.ELEMENT_NODE) {
              this.stripCustomNsAttrs(n);
            }
            n = n.nextSibling;
          }
        }
      }
      const st = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
      const it = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      const ut = lt('area,br,col,hr,img,wbr');
      const ct = lt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
      const ht = lt('rp,rt');
      const dt = at(ht, ct);
      const pt = at(
        ut,
        at(
          ct,
          lt(
            'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
          )
        ),
        at(
          ht,
          lt(
            'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
          )
        ),
        dt
      );
      const ft = lt(
        'background,cite,href,itemtype,longdesc,poster,src,xlink:href'
      );
      const gt = lt('srcset');
      const mt = at(
        ft,
        gt,
        lt(
          'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
        ),
        lt(
          'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
        )
      );
      const yt = lt('script,style,template');
      class vt {
        constructor() {
          this.sanitizedSomething = false;
          this.buf = [];
        }
        sanitizeChildren(e) {
          let t = e.firstChild;
          let n = true;
          while (t) {
            if (t.nodeType === Node.ELEMENT_NODE) {
              n = this.startElement(t);
            } else if (t.nodeType === Node.TEXT_NODE) {
              this.chars(t.nodeValue);
            } else {
              this.sanitizedSomething = true;
            }
            if (n && t.firstChild) {
              t = t.firstChild;
            } else {
              while (t) {
                if (t.nodeType === Node.ELEMENT_NODE) {
                  this.endElement(t);
                }
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
            }
          }
          return this.buf.join('');
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!pt.hasOwnProperty(t)) {
            this.sanitizedSomething = true;
            return !yt.hasOwnProperty(t);
          }
          this.buf.push('<');
          this.buf.push(t);
          const n = e.attributes;
          for (let s = 0; s < n.length; s++) {
            const e = n.item(s);
            const t = e.name;
            const i = t.toLowerCase();
            if (!mt.hasOwnProperty(i)) {
              this.sanitizedSomething = true;
              continue;
            }
            let o = e.value;
            if (ft[i]) {
              o = ot(o);
            }
            if (gt[i]) {
              r = o;
              o = (r = String(r))
                .split(',')
                .map(e => ot(e.trim()))
                .join(', ');
            }
            this.buf.push(' ', t, '="', bt(o), '"');
          }
          var r;
          this.buf.push('>');
          return true;
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          if (pt.hasOwnProperty(t) && !ut.hasOwnProperty(t)) {
            this.buf.push('</');
            this.buf.push(t);
            this.buf.push('>');
          }
        }
        chars(e) {
          this.buf.push(bt(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          ) {
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${
                e.outerHTML
              }`
            );
          }
          return t;
        }
      }
      const _t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      const wt = /([^\#-~ |!])/g;
      let Ct;
      const Et = (function() {
        var e = {
          NONE: 0,
          HTML: 1,
          STYLE: 2,
          SCRIPT: 3,
          URL: 4,
          RESOURCE_URL: 5,
        };
        e[e.NONE] = 'NONE';
        e[e.HTML] = 'HTML';
        e[e.STYLE] = 'STYLE';
        e[e.SCRIPT] = 'SCRIPT';
        e[e.URL] = 'URL';
        e[e.RESOURCE_URL] = 'RESOURCE_URL';
        return e;
      })();
      class St {}
      const Tt = new RegExp(
        '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
        'g'
      );
      const kt = /^url\(([^)]+)\)$/;
      const At = /([A-Z])/g;
      let It = (() => {
        class e {}
        e.__NG_ELEMENT_ID__ = () => Nt();
        return e;
      })();
      const Nt = (...e) => {};
      const Pt = new Se(
        'The presence of this token marks an injector as being the root injector.'
      );
      const Ot = function(e, t, n) {
        return new jt(e, t, n);
      };
      let Mt = (() => {
        class e {
          static create(e, t) {
            if (Array.isArray(e)) {
              return Ot(e, t, '');
            } else {
              return Ot(e.providers, e.parent, e.name || '');
            }
          }
        }
        e.THROW_IF_NOT_FOUND = ke;
        e.NULL = new Fe();
        e.ngInjectableDef = pe({
          token: e,
          providedIn: 'any',
          factory: () => Le(Te),
        });
        e.__NG_ELEMENT_ID__ = -1;
        return e;
      })();
      const Dt = function(e) {
        return e;
      };
      const Vt = [];
      const Ut = Dt;
      const Lt = function() {
        return Array.prototype.slice.call(arguments);
      };
      const Ft = '\u0275';
      class jt {
        constructor(e, t = Mt.NULL, n = null) {
          this.parent = t;
          this.source = n;
          const r = (this._records = new Map());
          r.set(Mt, {
            token: Mt,
            fn: Dt,
            deps: Vt,
            value: this,
            useNew: false,
          });
          r.set(Te, {
            token: Te,
            fn: Dt,
            deps: Vt,
            value: this,
            useNew: false,
          });
          (function e(t, n) {
            if (n) {
              if ((n = _e(n)) instanceof Array) {
                for (let r = 0; r < n.length; r++) {
                  e(t, n[r]);
                }
              } else {
                if (typeof n == 'function') {
                  throw $t('Function/Class not supported', n);
                }
                if (!n || typeof n != 'object' || !n.provide) {
                  throw $t('Unexpected provider', n);
                }
                {
                  let e = _e(n.provide);
                  const r = (function(e) {
                    const t = (function(e) {
                      let t = Vt;
                      const n = e.deps;
                      if (n && n.length) {
                        t = [];
                        for (let e = 0; e < n.length; e++) {
                          let r = 6;
                          let s = _e(n[e]);
                          if (s instanceof Array) {
                            let e = 0;
                            for (let t = s; e < t.length; e++) {
                              const n = t[e];
                              if (n instanceof ae || n == ae) {
                                r |= 1;
                              } else if (n instanceof ce || n == ce) {
                                r &= -3;
                              } else if (n instanceof ue || n == ue) {
                                r &= -5;
                              } else {
                                s = n instanceof le ? n.token : _e(n);
                              }
                            }
                          }
                          t.push({ token: s, options: r });
                        }
                      } else if (e.useExisting) {
                        t = [{ token: _e(e.useExisting), options: 6 }];
                      } else if (!n && !(Oe in e)) {
                        throw $t("'deps' required", e);
                      }
                      return t;
                    })(e);
                    let n = Dt;
                    let r = Vt;
                    let s = false;
                    let i = _e(e.provide);
                    if (Oe in e) {
                      r = e.useValue;
                    } else if (e.useFactory) {
                      n = e.useFactory;
                    } else if (e.useExisting) {
                    } else if (e.useClass) {
                      s = true;
                      n = _e(e.useClass);
                    } else {
                      if (typeof i != 'function') {
                        throw $t(
                          'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                          e
                        );
                      }
                      s = true;
                      n = i;
                    }
                    return { deps: t, fn: n, useNew: s, value: r };
                  })(n);
                  if (n.multi === true) {
                    let r = t.get(e);
                    if (r) {
                      if (r.fn !== Lt) {
                        throw Ht(e);
                      }
                    } else {
                      t.set(
                        e,
                        (r = {
                          token: n.provide,
                          deps: [],
                          useNew: false,
                          fn: Lt,
                          value: Vt,
                        })
                      );
                    }
                    e = n;
                    r.deps.push({ token: e, options: 6 });
                  }
                  const s = t.get(e);
                  if (s && s.fn == Lt) {
                    throw Ht(e);
                  }
                  t.set(e, r);
                }
              }
            }
          })(r, e);
        }
        get(e, t, n = he.Default) {
          const r = this._records.get(e);
          try {
            return (function e(t, n, r, s, i, o) {
              try {
                return (function(t, n, r, s, i, o) {
                  let l;
                  if (!n || o & he.SkipSelf) {
                    if (!(o & he.Self)) {
                      l = s.get(t, i, he.Default);
                    }
                  } else {
                    l = n.value;
                    if (l == Ut) {
                      throw Error(Ft + 'Circular dependency');
                    }
                    if (l === Vt) {
                      n.value = Ut;
                      let t = void 0;
                      let i = n.useNew;
                      let o = n.fn;
                      let a = n.deps;
                      let u = Vt;
                      if (a.length) {
                        u = [];
                        for (let t = 0; t < a.length; t++) {
                          const n = a[t];
                          const i = n.options;
                          const o = 2 & i ? r.get(n.token) : void 0;
                          u.push(
                            e(
                              n.token,
                              o,
                              r,
                              o || 4 & i ? s : Mt.NULL,
                              1 & i ? null : Mt.THROW_IF_NOT_FOUND,
                              he.Default
                            )
                          );
                        }
                      }
                      n.value = l = i ? new o(...u) : o.apply(t, u);
                    }
                  }
                  return l;
                })(t, n, r, s, i, o);
              } catch (l) {
                if (!(l instanceof Error)) {
                  l = new Error(l);
                }
                (l[Ae] = l[Ae] || []).unshift(t);
                if (n && n.value == Ut) {
                  n.value = Vt;
                }
                throw l;
              }
            })(e, r, this._records, this.parent, t, n);
          } catch (s) {
            return (function(e, t, n, r) {
              const s = e[Ae];
              if (t[Pe]) {
                s.unshift(t[Pe]);
              }
              e.message = je('\n' + e.message, s, 'StaticInjectorError', r);
              e[Re] = s;
              e[Ae] = null;
              throw e;
            })(s, e, 0, this.source);
          }
        }
        toString() {
          const e = [];
          this._records.forEach((t, n) => e.push(me(n)));
          return `StaticInjector[${e.join(', ')}]`;
        }
      }
      const zt = new Se('AnalyzeForEntryComponents');
      let Bt = null;
      class Wt {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new Wt(e);
        }
        static unwrap(e) {
          if (Wt.isWrapped(e)) {
            return e.wrapped;
          } else {
            return e;
          }
        }
        static isWrapped(e) {
          return e instanceof Wt;
        }
      }
      class Xt {
        constructor(e, t, n) {
          this.previousValue = e;
          this.currentValue = t;
          this.firstChange = n;
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class en {}
      class tn {}
      const rn = 'ngComponent';
      class sn {
        resolveComponentFactory(e) {
          throw nn(e);
        }
      }
      let on = (() => {
        class e {}
        e.NULL = new sn();
        return e;
      })();
      class ln {
        constructor(e, t, n) {
          this._parent = t;
          this._ngModule = n;
          this._factories = new Map();
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(e) {
          let t = this._factories.get(e);
          if (!t && this._parent) {
            t = this._parent.resolveComponentFactory(e);
          }
          if (!t) {
            throw nn(e);
          }
          return new an(t, this._ngModule);
        }
      }
      class an extends tn {
        constructor(e, t) {
          super();
          this.factory = e;
          this.ngModule = t;
          this.selector = e.selector;
          this.componentType = e.componentType;
          this.ngContentSelectors = e.ngContentSelectors;
          this.inputs = e.inputs;
          this.outputs = e.outputs;
        }
        create(e, t, n, r) {
          return this.factory.create(e, t, n, r || this.ngModule);
        }
      }
      let cn = (() => {
        class e {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        e.__NG_ELEMENT_ID__ = () => hn(e);
        return e;
      })();
      const hn = un;
      class dn {}
      class pn {}
      const fn = (function() {
        var e = { Important: 1, DashCase: 2 };
        e[e.Important] = 'Important';
        e[e.DashCase] = 'DashCase';
        return e;
      })();
      let gn = (() => {
        class e {}
        e.__NG_ELEMENT_ID__ = () => mn();
        return e;
      })();
      const mn = un;
      class yn {
        constructor(e) {
          this.full = e;
          this.major = e.split('.')[0];
          this.minor = e.split('.')[1];
          this.patch = e
            .split('.')
            .slice(2)
            .join('.');
        }
      }
      const vn = new yn('8.2.14');
      class _n {
        constructor() {}
        supports(e) {
          return Zt(e);
        }
        create(e) {
          return new bn(e);
        }
      }
      const wn = (e, t) => t;
      class bn {
        constructor(e) {
          this.length = 0;
          this._linkedRecords = null;
          this._unlinkedRecords = null;
          this._previousItHead = null;
          this._itHead = null;
          this._itTail = null;
          this._additionsHead = null;
          this._additionsTail = null;
          this._movesHead = null;
          this._movesTail = null;
          this._removalsHead = null;
          this._removalsTail = null;
          this._identityChangesHead = null;
          this._identityChangesTail = null;
          this._trackByFn = e || wn;
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; t !== null; t = t._next) {
            e(t);
          }
        }
        forEachOperation(e) {
          let t = this._itHead;
          let n = this._removalsHead;
          let r = 0;
          let s = null;
          while (t || n) {
            const i = !n || (t && t.currentIndex < Sn(n, r, s)) ? t : n;
            const o = Sn(i, r, s);
            const l = i.currentIndex;
            if (i === n) {
              r--;
              n = n._nextRemoved;
            } else if (((t = t._next), i.previousIndex == null)) {
              r++;
            } else {
              if (!s) {
                s = [];
              }
              const e = o - r;
              const t = l - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0);
                  const i = r + n;
                  if (t <= i && i < e) {
                    s[n] = r + 1;
                  }
                }
                s[i.previousIndex] = t - e;
              }
            }
            if (o !== l) {
              e(i, o, l);
            }
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; t !== null; t = t._nextPrevious) {
            e(t);
          }
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; t !== null; t = t._nextAdded) {
            e(t);
          }
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; t !== null; t = t._nextMoved) {
            e(t);
          }
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; t !== null; t = t._nextRemoved) {
            e(t);
          }
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            t !== null;
            t = t._nextIdentityChange
          ) {
            e(t);
          }
        }
        diff(e) {
          if (e == null) {
            e = [];
          }
          if (!Zt(e)) {
            throw new Error(
              `Error trying to diff '${me(
                e
              )}'. Only arrays and iterables are allowed`
            );
          }
          if (this.check(e)) {
            return this;
          } else {
            return null;
          }
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t;
          let n;
          let r;
          let s = this._itHead;
          let i = false;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++) {
              n = e[t];
              r = this._trackByFn(t, n);
              if (s !== null && Qt(s.trackById, r)) {
                if (i) {
                  s = this._verifyReinsertion(s, n, r, t);
                }
                if (!Qt(s.item, n)) {
                  this._addIdentityChange(s, n);
                }
              } else {
                s = this._mismatch(s, n, r, t);
                i = true;
              }
              s = s._next;
            }
          } else {
            t = 0;
            (function(e, t) {
              if (Array.isArray(e)) {
                for (let n = 0; n < e.length; n++) {
                  t(e[n]);
                }
              } else {
                const n = e[qt()]();
                let r;
                while (!(r = n.next()).done) {
                  t(r.value);
                }
              }
            })(e, e => {
              r = this._trackByFn(t, e);
              if (s !== null && Qt(s.trackById, r)) {
                if (i) {
                  s = this._verifyReinsertion(s, e, r, t);
                }
                if (!Qt(s.item, e)) {
                  this._addIdentityChange(s, e);
                }
              } else {
                s = this._mismatch(s, e, r, t);
                i = true;
              }
              s = s._next;
              t++;
            });
            this.length = t;
          }
          this._truncate(s);
          this.collection = e;
          return this.isDirty;
        }
        get isDirty() {
          return (
            this._additionsHead !== null ||
            this._movesHead !== null ||
            this._removalsHead !== null ||
            this._identityChangesHead !== null
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            let t;
            for (
              e = this._previousItHead = this._itHead;
              e !== null;
              e = e._next
            ) {
              e._nextPrevious = e._next;
            }
            for (e = this._additionsHead; e !== null; e = e._nextAdded) {
              e.previousIndex = e.currentIndex;
            }
            this._additionsHead = this._additionsTail = null;
            for (e = this._movesHead; e !== null; e = t) {
              e.previousIndex = e.currentIndex;
              t = e._nextMoved;
            }
            this._movesHead = this._movesTail = null;
            this._removalsHead = this._removalsTail = null;
            this._identityChangesHead = this._identityChangesTail = null;
          }
        }
        _mismatch(e, t, n, r) {
          let s;
          if (e === null) {
            s = this._itTail;
          } else {
            s = e._prev;
            this._remove(e);
          }
          if (
            (e =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(n, r)) === null
          ) {
            if (
              (e =
                this._unlinkedRecords === null
                  ? null
                  : this._unlinkedRecords.get(n, null)) === null
            ) {
              e = this._addAfter(new Cn(t, n), s, r);
            } else {
              if (!Qt(e.item, t)) {
                this._addIdentityChange(e, t);
              }
              this._reinsertAfter(e, s, r);
            }
          } else {
            if (!Qt(e.item, t)) {
              this._addIdentityChange(e, t);
            }
            this._moveAfter(e, s, r);
          }
          return e;
        }
        _verifyReinsertion(e, t, n, r) {
          let s =
            this._unlinkedRecords === null
              ? null
              : this._unlinkedRecords.get(n, null);
          if (s === null) {
            if (e.currentIndex != r) {
              e.currentIndex = r;
              this._addToMoves(e, r);
            }
          } else {
            e = this._reinsertAfter(s, e._prev, r);
          }
          return e;
        }
        _truncate(e) {
          while (e !== null) {
            const t = e._next;
            this._addToRemovals(this._unlink(e));
            e = t;
          }
          if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.clear();
          }
          if (this._additionsTail !== null) {
            this._additionsTail._nextAdded = null;
          }
          if (this._movesTail !== null) {
            this._movesTail._nextMoved = null;
          }
          if (this._itTail !== null) {
            this._itTail._next = null;
          }
          if (this._removalsTail !== null) {
            this._removalsTail._nextRemoved = null;
          }
          if (this._identityChangesTail !== null) {
            this._identityChangesTail._nextIdentityChange = null;
          }
        }
        _reinsertAfter(e, t, n) {
          if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.remove(e);
          }
          const r = e._prevRemoved;
          const s = e._nextRemoved;
          if (r === null) {
            this._removalsHead = s;
          } else {
            r._nextRemoved = s;
          }
          if (s === null) {
            this._removalsTail = r;
          } else {
            s._prevRemoved = r;
          }
          this._insertAfter(e, t, n);
          this._addToMoves(e, n);
          return e;
        }
        _moveAfter(e, t, n) {
          this._unlink(e);
          this._insertAfter(e, t, n);
          this._addToMoves(e, n);
          return e;
        }
        _addAfter(e, t, n) {
          this._insertAfter(e, t, n);
          this._additionsTail =
            this._additionsTail === null
              ? (this._additionsHead = e)
              : (this._additionsTail._nextAdded = e);
          return e;
        }
        _insertAfter(e, t, n) {
          const r = t === null ? this._itHead : t._next;
          e._next = r;
          e._prev = t;
          if (r === null) {
            this._itTail = e;
          } else {
            r._prev = e;
          }
          if (t === null) {
            this._itHead = e;
          } else {
            t._next = e;
          }
          if (this._linkedRecords === null) {
            this._linkedRecords = new En();
          }
          this._linkedRecords.put(e);
          e.currentIndex = n;
          return e;
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          if (this._linkedRecords !== null) {
            this._linkedRecords.remove(e);
          }
          const t = e._prev;
          const n = e._next;
          if (t === null) {
            this._itHead = n;
          } else {
            t._next = n;
          }
          if (n === null) {
            this._itTail = t;
          } else {
            n._prev = t;
          }
          return e;
        }
        _addToMoves(e, t) {
          if (e.previousIndex === t) {
            return e;
          } else {
            this._movesTail =
              this._movesTail === null
                ? (this._movesHead = e)
                : (this._movesTail._nextMoved = e);
            return e;
          }
        }
        _addToRemovals(e) {
          if (this._unlinkedRecords === null) {
            this._unlinkedRecords = new En();
          }
          this._unlinkedRecords.put(e);
          e.currentIndex = null;
          e._nextRemoved = null;
          if (this._removalsTail === null) {
            this._removalsTail = this._removalsHead = e;
            e._prevRemoved = null;
          } else {
            e._prevRemoved = this._removalsTail;
            this._removalsTail = this._removalsTail._nextRemoved = e;
          }
          return e;
        }
        _addIdentityChange(e, t) {
          e.item = t;
          this._identityChangesTail =
            this._identityChangesTail === null
              ? (this._identityChangesHead = e)
              : (this._identityChangesTail._nextIdentityChange = e);
          return e;
        }
      }
      class Cn {
        constructor(e, t) {
          this.item = e;
          this.trackById = t;
          this.currentIndex = null;
          this.previousIndex = null;
          this._nextPrevious = null;
          this._prev = null;
          this._next = null;
          this._prevDup = null;
          this._nextDup = null;
          this._prevRemoved = null;
          this._nextRemoved = null;
          this._nextAdded = null;
          this._nextMoved = null;
          this._nextIdentityChange = null;
        }
      }
      class xn {
        constructor() {
          this._head = null;
          this._tail = null;
        }
        add(e) {
          if (this._head === null) {
            this._head = this._tail = e;
            e._nextDup = null;
            e._prevDup = null;
          } else {
            this._tail._nextDup = e;
            e._prevDup = this._tail;
            e._nextDup = null;
            this._tail = e;
          }
        }
        get(e, t) {
          let n;
          for (n = this._head; n !== null; n = n._nextDup) {
            if ((t === null || t <= n.currentIndex) && Qt(n.trackById, e)) {
              return n;
            }
          }
          return null;
        }
        remove(e) {
          const t = e._prevDup;
          const n = e._nextDup;
          if (t === null) {
            this._head = n;
          } else {
            t._nextDup = n;
          }
          if (n === null) {
            this._tail = t;
          } else {
            n._prevDup = t;
          }
          return this._head === null;
        }
      }
      class En {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          if (!n) {
            n = new xn();
            this.map.set(t, n);
          }
          n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          if (n) {
            return n.get(e, t);
          } else {
            return null;
          }
        }
        remove(e) {
          const t = e.trackById;
          if (this.map.get(t).remove(e)) {
            this.map.delete(t);
          }
          return e;
        }
        get isEmpty() {
          return this.map.size === 0;
        }
        clear() {
          this.map.clear();
        }
      }
      class Tn {
        constructor() {}
        supports(e) {
          return e instanceof Map || Kt(e);
        }
        create() {
          return new kn();
        }
      }
      class kn {
        constructor() {
          this._records = new Map();
          this._mapHead = null;
          this._appendAfter = null;
          this._previousMapHead = null;
          this._changesHead = null;
          this._changesTail = null;
          this._additionsHead = null;
          this._additionsTail = null;
          this._removalsHead = null;
          this._removalsTail = null;
        }
        get isDirty() {
          return (
            this._additionsHead !== null ||
            this._changesHead !== null ||
            this._removalsHead !== null
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; t !== null; t = t._next) {
            e(t);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; t !== null; t = t._nextPrevious) {
            e(t);
          }
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; t !== null; t = t._nextChanged) {
            e(t);
          }
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; t !== null; t = t._nextAdded) {
            e(t);
          }
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; t !== null; t = t._nextRemoved) {
            e(t);
          }
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map) && !Kt(e)) {
              throw new Error(
                `Error trying to diff '${me(
                  e
                )}'. Only maps and objects are allowed`
              );
            }
          } else {
            e = new Map();
          }
          if (this.check(e)) {
            return this;
          } else {
            return null;
          }
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          this._appendAfter = null;
          this._forEach(e, (e, n) => {
            if (t && t.key === n) {
              this._maybeAddToChanges(t, e);
              this._appendAfter = t;
              t = t._next;
            } else {
              const r = this._getOrCreateRecordForKey(n, e);
              t = this._insertBeforeOrAppend(t, r);
            }
          });
          if (t) {
            if (t._prev) {
              t._prev._next = null;
            }
            this._removalsHead = t;
            for (let e = t; e !== null; e = e._nextRemoved) {
              if (e === this._mapHead) {
                this._mapHead = null;
              }
              this._records.delete(e.key);
              e._nextRemoved = e._next;
              e.previousValue = e.currentValue;
              e.currentValue = null;
              e._prev = null;
              e._next = null;
            }
          }
          if (this._changesTail) {
            this._changesTail._nextChanged = null;
          }
          if (this._additionsTail) {
            this._additionsTail._nextAdded = null;
          }
          return this.isDirty;
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            t._next = e;
            t._prev = n;
            e._prev = t;
            if (n) {
              n._next = t;
            }
            if (e === this._mapHead) {
              this._mapHead = t;
            }
            this._appendAfter = e;
            return e;
          }
          if (this._appendAfter) {
            this._appendAfter._next = t;
            t._prev = this._appendAfter;
          } else {
            this._mapHead = t;
          }
          this._appendAfter = t;
          return null;
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev;
            const s = n._next;
            if (r) {
              r._next = s;
            }
            if (s) {
              s._prev = r;
            }
            n._next = null;
            n._prev = null;
            return n;
          }
          const n = new An(e);
          this._records.set(e, n);
          n.currentValue = t;
          this._addToAdditions(n);
          return n;
        }
        _reset() {
          if (this.isDirty) {
            let e;
            this._previousMapHead = this._mapHead;
            for (e = this._previousMapHead; e !== null; e = e._next) {
              e._nextPrevious = e._next;
            }
            for (e = this._changesHead; e !== null; e = e._nextChanged) {
              e.previousValue = e.currentValue;
            }
            for (e = this._additionsHead; e != null; e = e._nextAdded) {
              e.previousValue = e.currentValue;
            }
            this._changesHead = this._changesTail = null;
            this._additionsHead = this._additionsTail = null;
            this._removalsHead = null;
          }
        }
        _maybeAddToChanges(e, t) {
          if (!Qt(t, e.currentValue)) {
            e.previousValue = e.currentValue;
            e.currentValue = t;
            this._addToChanges(e);
          }
        }
        _addToAdditions(e) {
          if (this._additionsHead === null) {
            this._additionsHead = this._additionsTail = e;
          } else {
            this._additionsTail._nextAdded = e;
            this._additionsTail = e;
          }
        }
        _addToChanges(e) {
          if (this._changesHead === null) {
            this._changesHead = this._changesTail = e;
          } else {
            this._changesTail._nextChanged = e;
            this._changesTail = e;
          }
        }
        _forEach(e, t) {
          if (e instanceof Map) {
            e.forEach(t);
          } else {
            Object.keys(e).forEach(n => t(e[n], n));
          }
        }
      }
      class An {
        constructor(e) {
          this.key = e;
          this.previousValue = null;
          this.currentValue = null;
          this._nextPrevious = null;
          this._next = null;
          this._prev = null;
          this._nextAdded = null;
          this._nextRemoved = null;
          this._nextChanged = null;
        }
      }
      let Rn = (() => {
        class e {
          constructor(e) {
            this.factories = e;
          }
          static create(t, n) {
            if (n != null) {
              const e = n.factories.slice();
              t = t.concat(e);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: n => {
                if (!n) {
                  throw new Error(
                    'Cannot extend IterableDiffers without a parent injector'
                  );
                }
                return e.create(t, n);
              },
              deps: [[e, new ce(), new ae()]],
            };
          }
          find(e) {
            const t = this.factories.find(t => t.supports(e));
            if (t != null) {
              return t;
            }
            throw new Error(
              `Cannot find a differ supporting object '${e}' of type '${((n = e),
              n.name || typeof n)}'`
            );
            var n;
          }
        }
        e.ngInjectableDef = pe({
          token: e,
          providedIn: 'root',
          factory: () => new e([new _n()]),
        });
        return e;
      })();
      let In = (() => {
        class e {
          constructor(e) {
            this.factories = e;
          }
          static create(t, n) {
            if (n) {
              const e = n.factories.slice();
              t = t.concat(e);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: n => {
                if (!n) {
                  throw new Error(
                    'Cannot extend KeyValueDiffers without a parent injector'
                  );
                }
                return e.create(t, n);
              },
              deps: [[e, new ce(), new ae()]],
            };
          }
          find(e) {
            const t = this.factories.find(t => t.supports(e));
            if (t) {
              return t;
            }
            throw new Error(`Cannot find a differ supporting object '${e}'`);
          }
        }
        e.ngInjectableDef = pe({
          token: e,
          providedIn: 'root',
          factory: () => new e([new Tn()]),
        });
        return e;
      })();
      const Nn = [new Tn()];
      const Pn = new Rn([new _n()]);
      const On = new In(Nn);
      let Mn = (() => {
        class e {}
        e.__NG_ELEMENT_ID__ = () => Dn(e, cn);
        return e;
      })();
      const Dn = un;
      let Vn = (() => {
        class e {}
        e.__NG_ELEMENT_ID__ = () => Un(e, cn);
        return e;
      })();
      const Un = un;
      const Wn = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0,
      };
      const Zn = () => {};
      const Kn = new Map();
      const Yn = '$$undefined';
      const Xn = '$$empty';
      let tr = 0;
      const mr = new WeakMap();
      const xr = /^:([^:]+):(.+)$/;
      const Tr = new Object();
      const kr = Jn(Mt);
      const Ar = Jn(Te);
      const Rr = Jn(He);
      const Vr = new Object();
      class Lr extends tn {
        constructor(e, t, n, r, s, i) {
          super();
          this.selector = e;
          this.componentType = t;
          this._inputs = r;
          this._outputs = s;
          this.ngContentSelectors = i;
          this.viewDefFactory = n;
        }
        get inputs() {
          const e = [];
          const t = this._inputs;
          for (let n in t) {
            e.push({ propName: n, templateName: t[n] });
          }
          return e;
        }
        get outputs() {
          const e = [];
          for (let t in this._outputs) {
            e.push({ propName: t, templateName: this._outputs[t] });
          }
          return e;
        }
        create(e, t, n, r) {
          if (!r) {
            throw new Error('ngModule should be provided');
          }
          const s = yr(this.viewDefFactory);
          const i = s.nodes[0].element.componentProvider.nodeIndex;
          const o = Wn.createRootView(e, t || [], n, s, r, Vr);
          const l = qn(o, i).instance;
          if (n) {
            o.renderer.setAttribute(
              Bn(o, 0).renderElement,
              'ng-version',
              vn.full
            );
          }
          return new Fr(o, new zr(o), l);
        }
      }
      class Fr extends en {
        constructor(e, t, n) {
          super();
          this._view = e;
          this._viewRef = t;
          this._component = n;
          this._elDef = this._view.def.nodes[0];
          this.hostView = t;
          this.changeDetectorRef = t;
          this.instance = n;
        }
        get location() {
          return new cn(Bn(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new Gr(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(e) {
          this._viewRef.onDestroy(e);
        }
      }
      class Hr {
        constructor(e, t, n) {
          this._view = e;
          this._elDef = t;
          this._data = n;
          this._embeddedViews = [];
        }
        get element() {
          return new cn(this._data.renderElement);
        }
        get injector() {
          return new Gr(this._view, this._elDef);
        }
        get parentInjector() {
          let e = this._view;
          let t = this._elDef.parent;
          while (!t && e) {
            t = ur(e);
            e = e.parent;
          }
          if (e) {
            return new Gr(e, t);
          } else {
            return new Gr(this._view, null);
          }
        }
        clear() {
          for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
            const t = Or(this._data, e);
            Wn.destroyView(t);
          }
        }
        get(e) {
          const t = this._embeddedViews[e];
          if (t) {
            const e = new zr(t);
            e.attachToViewContainerRef(this);
            return e;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(e, t, n) {
          const r = e.createEmbeddedView(t || {});
          this.insert(r, n);
          return r;
        }
        createComponent(e, t, n, r, s) {
          const i = n || this.parentInjector;
          if (!s && !(e instanceof an)) {
            s = i.get(He);
          }
          const o = e.create(i, r, void 0, s);
          this.insert(o.hostView, t);
          return o;
        }
        insert(e, t) {
          if (e.destroyed) {
            throw new Error(
              'Cannot insert a destroyed View in a ViewContainer!'
            );
          }
          const n = e;
          (function(e, t, n, r) {
            let s = t.viewContainer._embeddedViews;
            if (n == null) {
              n = s.length;
            }
            r.viewContainerParent = e;
            ze(s, n, r);
            (function(e, t) {
              const n = ar(t);
              if (!n || n === e || 16 & t.state) {
                return;
              }
              t.state |= 16;
              let r = n.template._projectedViews;
              if (!r) {
                r = n.template._projectedViews = [];
              }
              r.push(t);
              (function(e, t) {
                if (4 & t.flags) {
                  return;
                }
                e.nodeFlags |= 4;
                t.flags |= 4;
                let n = t.parent;
                while (n) {
                  n.childFlags |= 4;
                  n = n.parent;
                }
              })(t.parent.def, t.parentNodeDef);
            })(t, r);
            Wn.dirtyParentQueries(r);
            Mr(t, n > 0 ? s[n - 1] : null, r);
          })(this._view, this._data, t, n._view);
          n.attachToViewContainerRef(this);
          return e;
        }
        move(e, t) {
          if (e.destroyed) {
            throw new Error('Cannot move a destroyed View in a ViewContainer!');
          }
          const n = this._embeddedViews.indexOf(e._view);
          (function(e, t, n) {
            const r = e.viewContainer._embeddedViews;
            const s = r[t];
            Be(r, t);
            if (n == null) {
              n = r.length;
            }
            ze(r, n, s);
            Wn.dirtyParentQueries(s);
            Dr(s);
            Mr(e, n > 0 ? r[n - 1] : null, s);
          })(this._data, n, t);
          return e;
        }
        indexOf(e) {
          return this._embeddedViews.indexOf(e._view);
        }
        remove(e) {
          const t = Or(this._data, e);
          if (t) {
            Wn.destroyView(t);
          }
        }
        detach(e) {
          const t = Or(this._data, e);
          if (t) {
            return new zr(t);
          } else {
            return null;
          }
        }
      }
      class zr {
        constructor(e) {
          this._view = e;
          this._viewContainerRef = null;
          this._appRef = null;
        }
        get rootNodes() {
          return (function(e) {
            const t = [];
            vr(e, 0, void 0, void 0, t);
            return t;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return (128 & this._view.state) != 0;
        }
        markForCheck() {
          ir(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const e = this._view.root.rendererFactory;
          if (e.begin) {
            e.begin();
          }
          try {
            Wn.checkAndUpdateView(this._view);
          } finally {
            if (e.end) {
              e.end();
            }
          }
        }
        checkNoChanges() {
          Wn.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(e) {
          if (!this._view.disposables) {
            this._view.disposables = [];
          }
          this._view.disposables.push(e);
        }
        destroy() {
          if (this._appRef) {
            this._appRef.detachView(this);
          } else if (this._viewContainerRef) {
            this._viewContainerRef.detach(this._viewContainerRef.indexOf(this));
          }
          Wn.destroyView(this._view);
        }
        detachFromAppRef() {
          this._appRef = null;
          Dr(this._view);
          Wn.dirtyParentQueries(this._view);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef) {
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          }
          this._appRef = e;
        }
        attachToViewContainerRef(e) {
          if (this._appRef) {
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          }
          this._viewContainerRef = e;
        }
      }
      class qr extends Mn {
        constructor(e, t) {
          super();
          this._parentView = e;
          this._def = t;
        }
        createEmbeddedView(e) {
          return new zr(
            Wn.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              e
            )
          );
        }
        get elementRef() {
          return new cn(
            Bn(this._parentView, this._def.nodeIndex).renderElement
          );
        }
      }
      class Gr {
        constructor(e, t) {
          this.view = e;
          this.elDef = t;
        }
        get(e, t = Mt.THROW_IF_NOT_FOUND) {
          return Wn.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && (33554432 & this.elDef.flags) != 0,
            { flags: 0, token: e, tokenKey: Jn(e) },
            t
          );
        }
      }
      class Kr {
        constructor(e) {
          this.delegate = e;
        }
        selectRootElement(e) {
          return this.delegate.selectRootElement(e);
        }
        createElement(e, t) {
          const [n, r] = Er(t);
          const s = this.delegate.createElement(r, n);
          if (e) {
            this.delegate.appendChild(e, s);
          }
          return s;
        }
        createViewRoot(e) {
          return e;
        }
        createTemplateAnchor(e) {
          const t = this.delegate.createComment('');
          if (e) {
            this.delegate.appendChild(e, t);
          }
          return t;
        }
        createText(e, t) {
          const n = this.delegate.createText(t);
          if (e) {
            this.delegate.appendChild(e, n);
          }
          return n;
        }
        projectNodes(e, t) {
          for (let n = 0; n < t.length; n++) {
            this.delegate.appendChild(e, t[n]);
          }
        }
        attachViewAfter(e, t) {
          const n = this.delegate.parentNode(e);
          const r = this.delegate.nextSibling(e);
          for (let s = 0; s < t.length; s++) {
            this.delegate.insertBefore(n, t[s], r);
          }
        }
        detachView(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            const r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(e, t) {
          for (let n = 0; n < t.length; n++) {
            this.delegate.destroyNode(t[n]);
          }
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        listenGlobal(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        setElementProperty(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }
        setElementAttribute(e, t, n) {
          const [r, s] = Er(t);
          if (n == null) {
            this.delegate.removeAttribute(e, s, r);
          } else {
            this.delegate.setAttribute(e, s, n, r);
          }
        }
        setBindingDebugInfo(e, t, n) {}
        setElementClass(e, t, n) {
          if (n) {
            this.delegate.addClass(e, t);
          } else {
            this.delegate.removeClass(e, t);
          }
        }
        setElementStyle(e, t, n) {
          if (n == null) {
            this.delegate.removeStyle(e, t);
          } else {
            this.delegate.setStyle(e, t, n);
          }
        }
        invokeElementMethod(e, t, n) {
          e[t].apply(e, n);
        }
        setText(e, t) {
          this.delegate.setValue(e, t);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      class Yr {
        constructor(e, t, n, r) {
          this._moduleType = e;
          this._parent = t;
          this._bootstrapComponents = n;
          this._def = r;
          this._destroyListeners = [];
          this._destroyed = false;
          this.injector = this;
          (function(e) {
            const t = e._def;
            const n = (e._providers = new Array(t.providers.length));
            for (let r = 0; r < t.providers.length; r++) {
              const s = t.providers[r];
              if (!(4096 & s.flags)) {
                if (n[r] === void 0) {
                  n[r] = Pr(e, s);
                }
              }
            }
          })(this);
        }
        get(e, t = Mt.THROW_IF_NOT_FOUND, n = he.Default) {
          let r = 0;
          if (n & he.SkipSelf) {
            r |= 1;
          } else if (n & he.Self) {
            r |= 4;
          }
          return Nr(this, { token: e, tokenKey: Jn(e), flags: r }, t);
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(on);
        }
        destroy() {
          if (this._destroyed) {
            throw new Error(
              `The ng module ${me(
                this.instance.constructor
              )} has already been destroyed.`
            );
          }
          this._destroyed = true;
          (function(e, t) {
            const n = e._def;
            const r = new Set();
            for (let s = 0; s < n.providers.length; s++) {
              if (131072 & n.providers[s].flags) {
                const t = e._providers[s];
                if (t && t !== Tr) {
                  const e = t.ngOnDestroy;
                  if (typeof e == 'function' && !r.has(t)) {
                    e.apply(t);
                    r.add(t);
                  }
                }
              }
            }
          })(this);
          this._destroyListeners.forEach(e => e());
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
      }
      const Xr = Jn(dn);
      const es = Jn(gn);
      const ts = Jn(cn);
      const ns = Jn(Vn);
      const rs = Jn(Mn);
      const ss = Jn(It);
      const is = Jn(Mt);
      const os = Jn(Te);
      const ms = {};
      const xs = new Se('SCHEDULER_TOKEN', {
        providedIn: 'root',
        factory: () => Qe,
      });
      const Es = {};
      const Ss = (function() {
        var e = {
          LocaleId: 0,
          DayPeriodsFormat: 1,
          DayPeriodsStandalone: 2,
          DaysFormat: 3,
          DaysStandalone: 4,
          MonthsFormat: 5,
          MonthsStandalone: 6,
          Eras: 7,
          FirstDayOfWeek: 8,
          WeekendRange: 9,
          DateFormat: 10,
          TimeFormat: 11,
          DateTimeFormat: 12,
          NumberSymbols: 13,
          NumberFormats: 14,
          CurrencySymbol: 15,
          CurrencyName: 16,
          Currencies: 17,
          PluralCase: 18,
          ExtraData: 19,
        };
        e[e.LocaleId] = 'LocaleId';
        e[e.DayPeriodsFormat] = 'DayPeriodsFormat';
        e[e.DayPeriodsStandalone] = 'DayPeriodsStandalone';
        e[e.DaysFormat] = 'DaysFormat';
        e[e.DaysStandalone] = 'DaysStandalone';
        e[e.MonthsFormat] = 'MonthsFormat';
        e[e.MonthsStandalone] = 'MonthsStandalone';
        e[e.Eras] = 'Eras';
        e[e.FirstDayOfWeek] = 'FirstDayOfWeek';
        e[e.WeekendRange] = 'WeekendRange';
        e[e.DateFormat] = 'DateFormat';
        e[e.TimeFormat] = 'TimeFormat';
        e[e.DateTimeFormat] = 'DateTimeFormat';
        e[e.NumberSymbols] = 'NumberSymbols';
        e[e.NumberFormats] = 'NumberFormats';
        e[e.CurrencySymbol] = 'CurrencySymbol';
        e[e.CurrencyName] = 'CurrencyName';
        e[e.Currencies] = 'Currencies';
        e[e.PluralCase] = 'PluralCase';
        e[e.ExtraData] = 'ExtraData';
        return e;
      })();
      const Ts = void 0;
      var ks = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Ts],
        [['AM', 'PM'], Ts, Ts],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        Ts,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        Ts,
        [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Ts, "{1} 'at' {0}", Ts],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xD7',
          '\u2030',
          '\u221E',
          'NaN',
          ':',
        ],
        ['#,##0.###', '#,##0%', '\xA4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function(e) {
          let t = Math.floor(Math.abs(e));
          let n = e.toString().replace(/^[^.]*\.?/, '').length;
          if (t === 1 && n === 0) {
            return 1;
          } else {
            return 5;
          }
        },
      ];
      const As = 'en-US';
      let Rs = As;
      class Ns extends k {
        constructor(e = false) {
          super();
          this.__isAsync = e;
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r;
          let s = e => null;
          let i = () => null;
          if (e && typeof e == 'object') {
            r = this.__isAsync
              ? t => {
                  setTimeout(() => e.next(t));
                }
              : t => {
                  e.next(t);
                };
            if (e.error) {
              s = this.__isAsync
                ? t => {
                    setTimeout(() => e.error(t));
                  }
                : t => {
                    e.error(t);
                  };
            }
            if (e.complete) {
              i = this.__isAsync
                ? () => {
                    setTimeout(() => e.complete());
                  }
                : () => {
                    e.complete();
                  };
            }
          } else {
            r = this.__isAsync
              ? t => {
                  setTimeout(() => e(t));
                }
              : t => {
                  e(t);
                };
            if (t) {
              s = this.__isAsync
                ? e => {
                    setTimeout(() => t(e));
                  }
                : e => {
                    t(e);
                  };
            }
            if (n) {
              i = this.__isAsync
                ? () => {
                    setTimeout(() => n());
                  }
                : () => {
                    n();
                  };
            }
          }
          const o = super.subscribe(r, s, i);
          if (e instanceof d) {
            e.add(o);
          }
          return o;
        }
      }
      class Os {
        constructor() {
          this.dirty = true;
          this._results = [];
          this.changes = new Ns();
          this.length = 0;
          const e = qt();
          const t = Os.prototype;
          if (!t[e]) {
            t[e] = Ps;
          }
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          this._results = (function e(t, n) {
            if (n === void 0) {
              n = t;
            }
            for (let r = 0; r < t.length; r++) {
              let s = t[r];
              if (Array.isArray(s)) {
                if (n === t) {
                  n = t.slice(0, r);
                }
                e(s, n);
              } else if (n !== t) {
                n.push(s);
              }
            }
            return n;
          })(e);
          this.dirty = false;
          this.length = this._results.length;
          this.last = this._results[this.length - 1];
          this.first = this._results[0];
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = true;
        }
        destroy() {
          this.changes.complete();
          this.changes.unsubscribe();
        }
      }
      const Ms = new Se('Application Initializer');
      class Ds {
        constructor(e) {
          this.appInits = e;
          this.initialized = false;
          this.done = false;
          this.donePromise = new Promise((e, t) => {
            this.resolve = e;
            this.reject = t;
          });
        }
        runInitializers() {
          if (this.initialized) {
            return;
          }
          const e = [];
          const t = () => {
            this.done = true;
            this.resolve();
          };
          if (this.appInits) {
            for (let n = 0; n < this.appInits.length; n++) {
              const t = this.appInits[n]();
              if (Jt(t)) {
                e.push(t);
              }
            }
          }
          Promise.all(e)
            .then(() => {
              t();
            })
            .catch(e => {
              this.reject(e);
            });
          if (e.length === 0) {
            t();
          }
          this.initialized = true;
        }
      }
      const Vs = new Se('AppId');
      const Fs = new Se('Platform Initializer');
      const js = new Se('Platform ID');
      const Hs = new Se('appBootstrapListener');
      class $s {
        log(e) {
          console.log(e);
        }
        warn(e) {
          console.warn(e);
        }
      }
      const zs = new Se('LocaleId');
      const Bs = false;
      const Qs = qs;
      const Gs = qs;
      const Ws = qs;
      const Zs = qs;
      class Ks {
        constructor() {
          this.compileModuleSync = Qs;
          this.compileModuleAsync = Gs;
          this.compileModuleAndAllComponentsSync = Ws;
          this.compileModuleAndAllComponentsAsync = Zs;
        }
        clearCache() {}
        clearCacheFor(e) {}
        getModuleId(e) {}
      }
      class Js {}
      let Ys;
      let Xs;
      const ti = ei();
      const ri = ti
        ? function(e, t = null) {
            return Xs.createScope(e, t);
          }
        : (e, t) => ni;
      const si = ti
        ? function(e, t) {
            Ys.leaveScope(e, t);
            return t;
          }
        : (e, t) => t;
      const ii = (() => Promise.resolve(0))();
      class li {
        constructor({ enableLongStackTrace: e = false }) {
          this.hasPendingMicrotasks = false;
          this.hasPendingMacrotasks = false;
          this.isStable = true;
          this.onUnstable = new Ns(false);
          this.onMicrotaskEmpty = new Ns(false);
          this.onStable = new Ns(false);
          this.onError = new Ns(false);
          if (typeof Zone == 'undefined') {
            throw new Error('In this configuration Angular requires Zone.js');
          }
          var t;
          Zone.assertZonePatched();
          this._nesting = 0;
          this._outer = this._inner = Zone.current;
          if (Zone.wtfZoneSpec) {
            this._inner = this._inner.fork(Zone.wtfZoneSpec);
          }
          if (Zone.TaskTrackingZoneSpec) {
            this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec());
          }
          if (e && Zone.longStackTraceZoneSpec) {
            this._inner = this._inner.fork(Zone.longStackTraceZoneSpec);
          }
          (t = this)._inner = t._inner.fork({
            name: 'angular',
            properties: { isAngularZone: true },
            onInvokeTask: (e, n, r, s, i, o) => {
              try {
                hi(t);
                return e.invokeTask(r, s, i, o);
              } finally {
                di(t);
              }
            },
            onInvoke: (e, n, r, s, i, o, l) => {
              try {
                hi(t);
                return e.invoke(r, s, i, o, l);
              } finally {
                di(t);
              }
            },
            onHasTask: (e, n, r, s) => {
              e.hasTask(r, s);
              if (n === r) {
                if (s.change == 'microTask') {
                  t.hasPendingMicrotasks = s.microTask;
                  ci(t);
                } else if (s.change == 'macroTask') {
                  t.hasPendingMacrotasks = s.macroTask;
                }
              }
            },
            onHandleError: (e, n, r, s) => (
              e.handleError(r, s),
              t.runOutsideAngular(() => t.onError.emit(s)),
              false
            ),
          });
        }
        static isInAngularZone() {
          return Zone.current.get('isAngularZone') === true;
        }
        static assertInAngularZone() {
          if (!li.isInAngularZone()) {
            throw new Error('Expected to be in Angular Zone, but it is not!');
          }
        }
        static assertNotInAngularZone() {
          if (li.isInAngularZone()) {
            throw new Error('Expected to not be in Angular Zone, but it is!');
          }
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const s = this._inner;
          const i = s.scheduleEventTask('NgZoneEvent: ' + r, e, ui, ai, ai);
          try {
            return s.runTask(i, t, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      const ui = {};
      class pi {
        constructor() {
          this.hasPendingMicrotasks = false;
          this.hasPendingMacrotasks = false;
          this.isStable = true;
          this.onUnstable = new Ns();
          this.onMicrotaskEmpty = new Ns();
          this.onStable = new Ns();
          this.onError = new Ns();
        }
        run(e) {
          return e();
        }
        runGuarded(e) {
          return e();
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e) {
          return e();
        }
      }
      class fi {
        constructor(e) {
          this._ngZone = e;
          this._pendingCount = 0;
          this._isZoneStable = true;
          this._didWork = false;
          this._callbacks = [];
          this.taskTrackingZone = null;
          this._watchAngularEvents();
          e.run(() => {
            this.taskTrackingZone =
              typeof Zone == 'undefined'
                ? null
                : Zone.current.get('TaskTrackingZone');
          });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              this._didWork = true;
              this._isZoneStable = false;
            },
          });
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.subscribe({
              next: () => {
                li.assertNotInAngularZone();
                oi(() => {
                  this._isZoneStable = true;
                  this._runCallbacksIfReady();
                });
              },
            });
          });
        }
        increasePendingRequestCount() {
          this._pendingCount += 1;
          this._didWork = true;
          return this._pendingCount;
        }
        decreasePendingRequestCount() {
          this._pendingCount -= 1;
          if (this._pendingCount < 0) {
            throw new Error('pending async requests below zero');
          }
          this._runCallbacksIfReady();
          return this._pendingCount;
        }
        isStable() {
          return (
            this._isZoneStable &&
            this._pendingCount === 0 &&
            !this._ngZone.hasPendingMacrotasks
          );
        }
        _runCallbacksIfReady() {
          if (this.isStable()) {
            oi(() => {
              while (this._callbacks.length !== 0) {
                let e = this._callbacks.pop();
                clearTimeout(e.timeoutId);
                e.doneCb(this._didWork);
              }
              this._didWork = false;
            });
          } else {
            let e = this.getPendingTasks();
            this._callbacks = this._callbacks.filter(
              t =>
                !t.updateCb ||
                !t.updateCb(e) ||
                (clearTimeout(t.timeoutId), false)
            );
            this._didWork = true;
          }
        }
        getPendingTasks() {
          if (this.taskTrackingZone) {
            return this.taskTrackingZone.macroTasks.map(e => ({
              source: e.source,
              creationLocation: e.creationLocation,
              data: e.data,
            }));
          } else {
            return [];
          }
        }
        addCallback(e, t, n) {
          let r = -1;
          if (t && t > 0) {
            r = setTimeout(() => {
              this._callbacks = this._callbacks.filter(e => e.timeoutId !== r);
              e(this._didWork, this.getPendingTasks());
            }, t);
          }
          this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
        }
        whenStable(e, t, n) {
          if (n && !this.taskTrackingZone) {
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          }
          this.addCallback(e, t, n);
          this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(e, t, n) {
          return [];
        }
      }
      let gi = (() => {
        class e {
          constructor() {
            this._applications = new Map();
            vi.addToWindow(this);
          }
          registerApplication(e, t) {
            this._applications.set(e, t);
          }
          unregisterApplication(e) {
            this._applications.delete(e);
          }
          unregisterAllApplications() {
            this._applications.clear();
          }
          getTestability(e) {
            return this._applications.get(e) || null;
          }
          getAllTestabilities() {
            return Array.from(this._applications.values());
          }
          getAllRootElements() {
            return Array.from(this._applications.keys());
          }
          findTestabilityInTree(e, t = true) {
            return vi.findTestabilityInTree(this, e, t);
          }
        }
        e.ctorParameters = () => [];
        return e;
      })();
      class mi {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let yi;
      let vi = new mi();
      let _i = function(e, t, n) {
        return e
          .get(Js)
          .createCompiler([t])
          .compileModuleAsync(n);
      };
      let wi = function(e) {
        return e instanceof an;
      };
      const bi = new Se('AllowMultipleToken');
      class Ci {
        constructor(e, t) {
          this.name = e;
          this.token = t;
        }
      }
      class Si {
        constructor(e) {
          this._injector = e;
          this._modules = [];
          this._destroyListeners = [];
          this._destroyed = false;
        }
        bootstrapModuleFactory(e, t) {
          const n = (function(e) {
            let t;
            t =
              e === 'noop'
                ? new pi()
                : (e === 'zone.js' ? void 0 : e) ||
                  new li({ enableLongStackTrace: nt() });
            return t;
          })(t ? t.ngZone : void 0);
          const r = [{ provide: li, useValue: n }];
          return n.run(() => {
            const t = Mt.create({
              providers: r,
              parent: this.injector,
              name: e.moduleType.name,
            });
            const s = e.create(t);
            const i = s.injector.get(Xe, null);
            if (!i) {
              throw new Error(
                'No ErrorHandler. Is platform module (BrowserModule) included?'
              );
            }
            if (Bs) {
              Is(s.injector.get(zs, As) || As);
            }
            s.onDestroy(() => Ai(this._modules, s));
            n.runOutsideAngular(() =>
              n.onError.subscribe({
                next: e => {
                  i.handleError(e);
                },
              })
            );
            return (function(e, t, n) {
              try {
                const r = n();
                if (Jt(r)) {
                  return r.catch(n => {
                    t.runOutsideAngular(() => e.handleError(n));
                    throw n;
                  });
                } else {
                  return r;
                }
              } catch (r) {
                t.runOutsideAngular(() => e.handleError(r));
                throw r;
              }
            })(i, n, () => {
              const e = s.injector.get(Ds);
              e.runInitializers();
              return e.donePromise.then(() => (this._moduleDoBootstrap(s), s));
            });
          });
        }
        bootstrapModule(e, t = []) {
          const n = Ti({}, t);
          return _i(this.injector, n, e).then(e =>
            this.bootstrapModuleFactory(e, n)
          );
        }
        _moduleDoBootstrap(e) {
          const t = e.injector.get(ki);
          if (e._bootstrapComponents.length > 0) {
            e._bootstrapComponents.forEach(e => t.bootstrap(e));
          } else {
            if (!e.instance.ngDoBootstrap) {
              throw new Error(
                `The module ${me(
                  e.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                  'Please define one of these.'
              );
            }
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed) {
            throw new Error('The platform has already been destroyed!');
          }
          this._modules.slice().forEach(e => e.destroy());
          this._destroyListeners.forEach(e => e());
          this._destroyed = true;
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      let ki = (() => {
        class e {
          constructor(e, t, n, r, s, i) {
            this._zone = e;
            this._console = t;
            this._injector = n;
            this._exceptionHandler = r;
            this._componentFactoryResolver = s;
            this._initStatus = i;
            this._bootstrapListeners = [];
            this._views = [];
            this._runningTick = false;
            this._enforceNoNewChanges = false;
            this._stable = true;
            this.componentTypes = [];
            this.components = [];
            this._enforceNoNewChanges = nt();
            this._zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this._zone.run(() => {
                  this.tick();
                });
              },
            });
            const o = new b(e => {
              this._stable =
                this._zone.isStable &&
                !this._zone.hasPendingMacrotasks &&
                !this._zone.hasPendingMicrotasks;
              this._zone.runOutsideAngular(() => {
                e.next(this._stable);
                e.complete();
              });
            });
            const l = new b(e => {
              let t;
              this._zone.runOutsideAngular(() => {
                t = this._zone.onStable.subscribe(() => {
                  li.assertNotInAngularZone();
                  oi(() => {
                    if (
                      !this._stable &&
                      !this._zone.hasPendingMacrotasks &&
                      !this._zone.hasPendingMicrotasks
                    ) {
                      this._stable = true;
                      e.next(true);
                    }
                  });
                });
              });
              const n = this._zone.onUnstable.subscribe(() => {
                li.assertInAngularZone();
                if (this._stable) {
                  this._stable = false;
                  this._zone.runOutsideAngular(() => {
                    e.next(false);
                  });
                }
              });
              return () => {
                t.unsubscribe();
                n.unsubscribe();
              };
            });
            this.isStable = (function(...e) {
              let t = Number.POSITIVE_INFINITY;
              let n = null;
              let r = e[e.length - 1];
              if (R(r)) {
                n = e.pop();
                if (e.length > 1 && typeof e[e.length - 1] == 'number') {
                  t = e.pop();
                }
              } else if (typeof r == 'number') {
                t = e.pop();
              }
              if (n === null && e.length === 1 && e[0] instanceof b) {
                return e[0];
              } else {
                return J(t)(q(e, n));
              }
            })(
              o,
              l.pipe(e =>
                Y()(
                  (function() {
                    var e = se;
                    var t;
                    return function(t) {
                      let n;
                      n =
                        typeof e == 'function'
                          ? e
                          : function() {
                              return e;
                            };
                      const r = Object.create(t, ne);
                      r.source = t;
                      r.subjectFactory = n;
                      return r;
                    };
                  })()(e)
                )
              )
            );
          }
          bootstrap(e, t) {
            if (!this._initStatus.done) {
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            }
            let n;
            n =
              e instanceof tn
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e);
            this.componentTypes.push(n.componentType);
            const r = wi(n) ? null : this._injector.get(He);
            const s = n.create(Mt.NULL, [], t || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(fi, null);
            if (i) {
              s.injector
                .get(gi)
                .registerApplication(s.location.nativeElement, i);
            }
            this._loadComponent(s);
            if (nt()) {
              this._console.log(
                'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
              );
            }
            return s;
          }
          tick() {
            if (this._runningTick) {
              throw new Error('ApplicationRef.tick is called recursively');
            }
            const t = e._tickScope();
            try {
              this._runningTick = true;
              for (let e of this._views) {
                e.detectChanges();
              }
              if (this._enforceNoNewChanges) {
                for (let e of this._views) {
                  e.checkNoChanges();
                }
              }
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = false;
              si(t);
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t);
            t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            Ai(this._views, t);
            t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView);
            this.tick();
            this.components.push(e);
            this._injector
              .get(Hs, [])
              .concat(this._bootstrapListeners)
              .forEach(t => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView);
            Ai(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach(e => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        e._tickScope = ri('ApplicationRef#tick()');
        return e;
      })();
      class Ri {}
      const Ii = '#';
      const Ni = 'NgFactory';
      class Pi {}
      const Oi = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      class Mi {
        constructor(e, t) {
          this._compiler = e;
          this._config = t || Oi;
        }
        load(e) {
          if (!Bs && this._compiler instanceof Ks) {
            return this.loadFactory(e);
          } else {
            return this.loadAndCompile(e);
          }
        }
        loadAndCompile(e) {
          let [t, r] = e.split(Ii);
          if (r === void 0) {
            r = 'default';
          }
          return n('zn8P')(t)
            .then(e => e[r])
            .then(e => Di(e, t, r))
            .then(e => this._compiler.compileModuleAsync(e));
        }
        loadFactory(e) {
          let [t, r] = e.split(Ii);
          let s = Ni;
          if (r === void 0) {
            r = 'default';
            s = '';
          }
          return n('zn8P')(
            this._config.factoryPathPrefix + t + this._config.factoryPathSuffix
          )
            .then(e => e[r + s])
            .then(e => Di(e, t, r));
        }
      }
      class Vi {
        constructor(e, t) {
          this.name = e;
          this.callback = t;
        }
      }
      class Ui {
        constructor(e, t, n) {
          this.listeners = [];
          this.parent = null;
          this._debugContext = n;
          this.nativeNode = e;
          if (t && t instanceof Li) {
            t.addChild(this);
          }
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class Li extends Ui {
        constructor(e, t, n) {
          super(e, t, n);
          this.properties = {};
          this.attributes = {};
          this.classes = {};
          this.styles = {};
          this.childNodes = [];
          this.nativeElement = e;
        }
        addChild(e) {
          if (e) {
            this.childNodes.push(e);
            e.parent = this;
          }
        }
        removeChild(e) {
          const t = this.childNodes.indexOf(e);
          if (t !== -1) {
            e.parent = null;
            this.childNodes.splice(t, 1);
          }
        }
        insertChildrenAfter(e, t) {
          const n = this.childNodes.indexOf(e);
          if (n !== -1) {
            this.childNodes.splice(n + 1, 0, ...t);
            t.forEach(t => {
              if (t.parent) {
                t.parent.removeChild(t);
              }
              e.parent = this;
            });
          }
        }
        insertBefore(e, t) {
          const n = this.childNodes.indexOf(e);
          if (n === -1) {
            this.addChild(t);
          } else {
            if (t.parent) {
              t.parent.removeChild(t);
            }
            t.parent = this;
            this.childNodes.splice(n, 0, t);
          }
        }
        query(e) {
          return this.queryAll(e)[0] || null;
        }
        queryAll(e) {
          const t = [];
          (function e(t, n, r) {
            t.childNodes.forEach(t => {
              if (t instanceof Li) {
                if (n(t)) {
                  r.push(t);
                }
                e(t, n, r);
              }
            });
          })(this, e, t);
          return t;
        }
        queryAllNodes(e) {
          const t = [];
          (function e(t, n, r) {
            if (t instanceof Li) {
              t.childNodes.forEach(t => {
                if (n(t)) {
                  r.push(t);
                }
                if (t instanceof Li) {
                  e(t, n, r);
                }
              });
            }
          })(this, e, t);
          return t;
        }
        get children() {
          return this.childNodes.filter(e => e instanceof Li);
        }
        triggerEventHandler(e, t) {
          this.listeners.forEach(n => {
            if (n.name == e) {
              n.callback(t);
            }
          });
        }
      }
      const Fi = new Map();
      const ji = function(e) {
        return Fi.get(e) || null;
      };
      const $i = xi(null, 'core', [
        { provide: js, useValue: 'unknown' },
        { provide: Si, deps: [Mt] },
        { provide: gi, deps: [] },
        { provide: $s, deps: [] },
      ]);
      class Gi {
        constructor(e) {}
      }
      const Ao = (function() {
        var e = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5,
        };
        e[e.CreateViewNodes] = 'CreateViewNodes';
        e[e.CheckNoChanges] = 'CheckNoChanges';
        e[e.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews';
        e[e.CheckAndUpdate] = 'CheckAndUpdate';
        e[e.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews';
        e[e.Destroy] = 'Destroy';
        return e;
      })();
      let Mo = false;
      const Ho = new Map();
      const $o = new Map();
      const zo = new Map();
      const Xo = (function() {
        var e = {
          create: 0,
          detectChanges: 1,
          checkNoChanges: 2,
          destroy: 3,
          handleEvent: 4,
        };
        e[e.create] = 'create';
        e[e.detectChanges] = 'detectChanges';
        e[e.checkNoChanges] = 'checkNoChanges';
        e[e.destroy] = 'destroy';
        e[e.handleEvent] = 'handleEvent';
        return e;
      })();
      let el;
      let tl;
      let nl;
      class hl {
        constructor(e, t) {
          this.view = e;
          this.nodeIndex = t;
          if (t == null) {
            this.nodeIndex = t = 0;
          }
          this.nodeDef = e.def.nodes[t];
          let n = this.nodeDef;
          let r = e;
          while (n && (1 & n.flags) == 0) {
            n = n.parent;
          }
          if (!n) {
            while (!n && r) {
              n = ur(r);
              r = r.parent;
            }
          }
          this.elDef = n;
          this.elView = r;
        }
        get elOrCompView() {
          return (
            Bn(this.elView, this.elDef.nodeIndex).componentView || this.view
          );
        }
        get injector() {
          return Qr(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const e = [];
          if (this.elDef) {
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              if (20224 & n.flags) {
                e.push(n.provider.token);
              }
              t += n.childCount;
            }
          }
          return e;
        }
        get references() {
          const e = {};
          if (this.elDef) {
            dl(this.elView, this.elDef, e);
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              if (20224 & n.flags) {
                dl(this.elView, n, e);
              }
              t += n.childCount;
            }
          }
          return e;
        }
        get componentRenderElement() {
          const e = (function(e) {
            while (e && !hr(e)) {
              e = e.parent;
            }
            if (e.parent) {
              return Bn(e.parent, ur(e).nodeIndex);
            } else {
              return null;
            }
          })(this.elOrCompView);
          if (e) {
            return e.renderElement;
          } else {
            return;
          }
        }
        get renderNode() {
          if (2 & this.nodeDef.flags) {
            return cr(this.view, this.nodeDef);
          } else {
            return cr(this.elView, this.elDef);
          }
        }
        logError(e, ...t) {
          let n;
          let r;
          if (2 & this.nodeDef.flags) {
            n = this.view.def;
            r = this.nodeDef.nodeIndex;
          } else {
            n = this.elView.def;
            r = this.elDef.nodeIndex;
          }
          const s = (function(e, t) {
            let n = -1;
            for (let r = 0; r <= t; r++) {
              if (3 & e.nodes[r].flags) {
                n++;
              }
            }
            return n;
          })(n, r);
          let i = -1;
          n.factory(() => (i++, i === s ? e.error.bind(e, ...t) : Zn));
          if (i < s) {
            e.error(
              'Illegal state: the ViewDefinitionFactory did not call the logger!'
            );
            e.error(...t);
          }
        }
      }
      class gl {
        constructor(e) {
          this.delegate = e;
        }
        createRenderer(e, t) {
          return new ml(this.delegate.createRenderer(e, t));
        }
        begin() {
          if (this.delegate.begin) {
            this.delegate.begin();
          }
        }
        end() {
          if (this.delegate.end) {
            this.delegate.end();
          }
        }
        whenRenderingDone() {
          if (this.delegate.whenRenderingDone) {
            return this.delegate.whenRenderingDone();
          } else {
            return Promise.resolve(null);
          }
        }
      }
      class ml {
        constructor(e) {
          this.delegate = e;
          this.debugContextFactory = fl;
          this.data = this.delegate.data;
        }
        createDebugContext(e) {
          return this.debugContextFactory(e);
        }
        destroyNode(e) {
          const t = ji(e);
          (function() {
            var e = t;
            Fi.delete(e.nativeNode);
          })();
          if (t instanceof Ui) {
            t.listeners.length = 0;
          }
          if (this.delegate.destroyNode) {
            this.delegate.destroyNode(e);
          }
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(e, t) {
          const n = this.delegate.createElement(e, t);
          const r = this.createDebugContext(n);
          if (r) {
            const t = new Li(n, null, r);
            t.name = e;
            Hi(t);
          }
          return n;
        }
        createComment(e) {
          const t = this.delegate.createComment(e);
          const n = this.createDebugContext(t);
          if (n) {
            Hi(new Ui(t, null, n));
          }
          return t;
        }
        createText(e) {
          const t = this.delegate.createText(e);
          const n = this.createDebugContext(t);
          if (n) {
            Hi(new Ui(t, null, n));
          }
          return t;
        }
        appendChild(e, t) {
          const n = ji(e);
          const r = ji(t);
          if (n && r && n instanceof Li) {
            n.addChild(r);
          }
          this.delegate.appendChild(e, t);
        }
        insertBefore(e, t, n) {
          const r = ji(e);
          const s = ji(t);
          const i = ji(n);
          if (r && s && r instanceof Li) {
            r.insertBefore(i, s);
          }
          this.delegate.insertBefore(e, t, n);
        }
        removeChild(e, t) {
          const n = ji(e);
          const r = ji(t);
          if (n && r && n instanceof Li) {
            n.removeChild(r);
          }
          this.delegate.removeChild(e, t);
        }
        selectRootElement(e, t) {
          const n = this.delegate.selectRootElement(e, t);
          const r = fl();
          if (r) {
            Hi(new Li(n, null, r));
          }
          return n;
        }
        setAttribute(e, t, n, r) {
          const s = ji(e);
          if (s && s instanceof Li) {
            s.attributes[r ? r + ':' + t : t] = n;
          }
          this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          const r = ji(e);
          if (r && r instanceof Li) {
            r.attributes[n ? n + ':' + t : t] = null;
          }
          this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          const n = ji(e);
          if (n && n instanceof Li) {
            n.classes[t] = true;
          }
          this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          const n = ji(e);
          if (n && n instanceof Li) {
            n.classes[t] = false;
          }
          this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          const s = ji(e);
          if (s && s instanceof Li) {
            s.styles[t] = n;
          }
          this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          const r = ji(e);
          if (r && r instanceof Li) {
            r.styles[t] = null;
          }
          this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          const r = ji(e);
          if (r && r instanceof Li) {
            r.properties[t] = n;
          }
          this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if (typeof e != 'string') {
            const r = ji(e);
            if (r) {
              r.listeners.push(new Vi(t, n));
            }
          }
          return this.delegate.listen(e, t, n);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setValue(e, t) {
          return this.delegate.setValue(e, t);
        }
      }
      class vl extends $e {
        constructor(e, t, n) {
          super();
          this.moduleType = e;
          this._bootstrapComponents = t;
          this._ngModuleDefFactory = n;
        }
        create(e) {
          (function() {
            if (Mo) {
              return;
            }
            Mo = true;
            const e = nt()
              ? {
                  setCurrentNode: rl,
                  createRootView: Vo,
                  createEmbeddedView: Lo,
                  createComponentView: Fo,
                  createNgModuleRef: jo,
                  overrideProvider: Bo,
                  overrideComponentView: qo,
                  clearOverrides: Qo,
                  checkAndUpdateView: Ko,
                  checkNoChangesView: Jo,
                  destroyView: Yo,
                  createDebugContext: (e, t) => new hl(e, t),
                  handleEvent: sl,
                  updateDirectives: il,
                  updateRenderer: ol,
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: Do,
                  createEmbeddedView: go,
                  createComponentView: yo,
                  createNgModuleRef: Jr,
                  overrideProvider: Zn,
                  overrideComponentView: Zn,
                  clearOverrides: Zn,
                  checkAndUpdateView: Co,
                  checkNoChangesView: bo,
                  destroyView: ko,
                  createDebugContext: (e, t) => new hl(e, t),
                  handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                  updateDirectives: (e, t) =>
                    e.def.updateDirectives(t === 0 ? Wo : Zo, e),
                  updateRenderer: (e, t) =>
                    e.def.updateRenderer(t === 0 ? Wo : Zo, e),
                };
            Wn.setCurrentNode = e.setCurrentNode;
            Wn.createRootView = e.createRootView;
            Wn.createEmbeddedView = e.createEmbeddedView;
            Wn.createComponentView = e.createComponentView;
            Wn.createNgModuleRef = e.createNgModuleRef;
            Wn.overrideProvider = e.overrideProvider;
            Wn.overrideComponentView = e.overrideComponentView;
            Wn.clearOverrides = e.clearOverrides;
            Wn.checkAndUpdateView = e.checkAndUpdateView;
            Wn.checkNoChangesView = e.checkNoChangesView;
            Wn.destroyView = e.destroyView;
            Wn.resolveDep = ys;
            Wn.createDebugContext = e.createDebugContext;
            Wn.handleEvent = e.handleEvent;
            Wn.updateDirectives = e.updateDirectives;
            Wn.updateRenderer = e.updateRenderer;
            Wn.dirtyParentQueries = eo;
          })();
          const t = (function(e) {
            const t = Array.from(e.providers);
            const n = Array.from(e.modules);
            const r = {};
            for (const s in e.providersByKey) {
              r[s] = e.providersByKey[s];
            }
            return {
              factory: e.factory,
              isRoot: e.isRoot,
              providers: t,
              modules: n,
              providersByKey: r,
            };
          })(yr(this._ngModuleDefFactory));
          return Wn.createNgModuleRef(
            this.moduleType,
            e || Mt.NULL,
            this._bootstrapComponents,
            t
          );
        }
      }
      class _l {}
      const wl = new b(e => e.complete());
      class Tl {
        constructor(e, t) {
          this.predicate = e;
          this.thisArg = t;
        }
        call(e, t) {
          return t.subscribe(new kl(e, this.predicate, this.thisArg));
        }
      }
      class kl extends g {
        constructor(e, t, n) {
          super(e);
          this.predicate = t;
          this.thisArg = n;
          this.count = 0;
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            this.destination.error(n);
            return;
          }
          if (t) {
            this.destination.next(e);
          }
        }
      }
      class Al {}
      const Rl = new Se('Location Initialized');
      class Il {}
      const Nl = new Se('appBaseHref');
      class Pl {
        constructor(e, t) {
          this._subject = new Ns();
          this._urlChangeListeners = [];
          this._platformStrategy = e;
          const n = this._platformStrategy.getBaseHref();
          this._platformLocation = t;
          this._baseHref = Pl.stripTrailingSlash(Ol(n));
          this._platformStrategy.onPopState(e => {
            this._subject.emit({
              url: this.path(true),
              pop: true,
              state: e.state,
              type: e.type,
            });
          });
        }
        path(e = false) {
          return this.normalize(this._platformStrategy.path(e));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(e, t = '') {
          return this.path() == this.normalize(e + Pl.normalizeQueryParams(t));
        }
        normalize(e) {
          return Pl.stripTrailingSlash(
            (function(e, t) {
              if (e && t.startsWith(e)) {
                return t.substring(e.length);
              } else {
                return t;
              }
            })(this._baseHref, Ol(e))
          );
        }
        prepareExternalUrl(e) {
          if (e && e[0] !== '/') {
            e = '/' + e;
          }
          return this._platformStrategy.prepareExternalUrl(e);
        }
        go(e, t = '', n = null) {
          this._platformStrategy.pushState(n, '', e, t);
          this._notifyUrlChangeListeners(
            this.prepareExternalUrl(e + Pl.normalizeQueryParams(t)),
            n
          );
        }
        replaceState(e, t = '', n = null) {
          this._platformStrategy.replaceState(n, '', e, t);
          this._notifyUrlChangeListeners(
            this.prepareExternalUrl(e + Pl.normalizeQueryParams(t)),
            n
          );
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(e) {
          this._urlChangeListeners.push(e);
          this.subscribe(e => {
            this._notifyUrlChangeListeners(e.url, e.state);
          });
        }
        _notifyUrlChangeListeners(e = '', t) {
          this._urlChangeListeners.forEach(n => n(e, t));
        }
        subscribe(e, t, n) {
          return this._subject.subscribe({ next: e, error: t, complete: n });
        }
        static normalizeQueryParams(e) {
          if (e && e[0] !== '?') {
            return '?' + e;
          } else {
            return e;
          }
        }
        static joinWithSlash(e, t) {
          if (e.length == 0) {
            return t;
          }
          if (t.length == 0) {
            return e;
          }
          let n = 0;
          if (e.endsWith('/')) {
            n++;
          }
          if (t.startsWith('/')) {
            n++;
          }
          if (n == 2) {
            return e + t.substring(1);
          } else if (n == 1) {
            return e + t;
          } else {
            return e + '/' + t;
          }
        }
        static stripTrailingSlash(e) {
          const t = e.match(/#|\?|$/);
          const n = (t && t.index) || e.length;
          return e.slice(0, n - (e[n - 1] === '/' ? 1 : 0)) + e.slice(n);
        }
      }
      class Ml extends Il {
        constructor(e, t) {
          super();
          this._platformLocation = e;
          this._baseHref = '';
          if (t != null) {
            this._baseHref = t;
          }
        }
        onPopState(e) {
          this._platformLocation.onPopState(e);
          this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(e = false) {
          let t = this._platformLocation.hash;
          if (t == null) {
            t = '#';
          }
          if (t.length > 0) {
            return t.substring(1);
          } else {
            return t;
          }
        }
        prepareExternalUrl(e) {
          const t = Pl.joinWithSlash(this._baseHref, e);
          if (t.length > 0) {
            return '#' + t;
          } else {
            return t;
          }
        }
        pushState(e, t, n, r) {
          let s = this.prepareExternalUrl(n + Pl.normalizeQueryParams(r));
          if (s.length == 0) {
            s = this._platformLocation.pathname;
          }
          this._platformLocation.pushState(e, t, s);
        }
        replaceState(e, t, n, r) {
          let s = this.prepareExternalUrl(n + Pl.normalizeQueryParams(r));
          if (s.length == 0) {
            s = this._platformLocation.pathname;
          }
          this._platformLocation.replaceState(e, t, s);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class Dl extends Il {
        constructor(e, t) {
          super();
          this._platformLocation = e;
          if (t == null) {
            t = this._platformLocation.getBaseHrefFromDOM();
          }
          if (t == null) {
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          }
          this._baseHref = t;
        }
        onPopState(e) {
          this._platformLocation.onPopState(e);
          this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(e) {
          return Pl.joinWithSlash(this._baseHref, e);
        }
        path(e = false) {
          const t =
            this._platformLocation.pathname +
            Pl.normalizeQueryParams(this._platformLocation.search);
          const n = this._platformLocation.hash;
          if (n && e) {
            return `${t}${n}`;
          } else {
            return t;
          }
        }
        pushState(e, t, n, r) {
          const s = this.prepareExternalUrl(n + Pl.normalizeQueryParams(r));
          this._platformLocation.pushState(e, t, s);
        }
        replaceState(e, t, n, r) {
          const s = this.prepareExternalUrl(n + Pl.normalizeQueryParams(r));
          this._platformLocation.replaceState(e, t, s);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const Vl = (function() {
        var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
        e[e.Zero] = 'Zero';
        e[e.One] = 'One';
        e[e.Two] = 'Two';
        e[e.Few] = 'Few';
        e[e.Many] = 'Many';
        e[e.Other] = 'Other';
        return e;
      })();
      const Ul = function(e) {
        return (function(e) {
          const t = e.toLowerCase().replace(/_/g, '-');
          let n = Es[t];
          if (n) {
            return n;
          }
          const r = t.split('-')[0];
          n = Es[r];
          if (n) {
            return n;
          }
          if (r === 'en') {
            return ks;
          }
          throw new Error(`Missing locale data for the locale "${e}".`);
        })(e)[Ss.PluralCase];
      };
      const Ll = new Se('UseV4Plurals');
      class Fl {}
      class jl extends Fl {
        constructor(e, t) {
          super();
          this.locale = e;
          this.deprecatedPluralFn = t;
        }
        getPluralCategory(e, t) {
          switch (this.deprecatedPluralFn
            ? this.deprecatedPluralFn(t || this.locale, e)
            : Ul(t || this.locale)(e)) {
            case Vl.Zero:
              return 'zero';
            case Vl.One:
              return 'one';
            case Vl.Two:
              return 'two';
            case Vl.Few:
              return 'few';
            case Vl.Many:
              return 'many';
            default:
              return 'other';
          }
        }
      }
      class $l {
        constructor(e, t, n, r) {
          this.$implicit = e;
          this.ngForOf = t;
          this.index = n;
          this.count = r;
        }
        get first() {
          return this.index === 0;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      class zl {
        constructor(e, t, n) {
          this._viewContainer = e;
          this._template = t;
          this._differs = n;
          this._ngForOfDirty = true;
          this._differ = null;
        }
        set ngForOf(e) {
          this._ngForOf = e;
          this._ngForOfDirty = true;
        }
        set ngForTrackBy(e) {
          if (
            nt() &&
            e != null &&
            typeof e != 'function' &&
            console &&
            console.warn
          ) {
            console.warn(
              `trackBy must be a function, but received ${JSON.stringify(
                e
              )}. ` +
                'See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
            );
          }
          this._trackByFn = e;
        }
        get ngForTrackBy() {
          return this._trackByFn;
        }
        set ngForTemplate(e) {
          if (e) {
            this._template = e;
          }
        }
        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = false;
            const n = this._ngForOf;
            if (!this._differ && n) {
              try {
                this._differ = this._differs.find(n).create(this.ngForTrackBy);
              } catch (t) {
                throw new Error(
                  `Cannot find a differ supporting object '${n}' of type '${((e = n),
                  e.name ||
                    typeof e)}'. NgFor only supports binding to Iterables such as Arrays.`
                );
              }
            }
          }
          var e;
          if (this._differ) {
            const e = this._differ.diff(this._ngForOf);
            if (e) {
              this._applyChanges(e);
            }
          }
        }
        _applyChanges(e) {
          const t = [];
          e.forEachOperation((e, n, r) => {
            if (e.previousIndex == null) {
              const n = this._viewContainer.createEmbeddedView(
                this._template,
                new $l(null, this._ngForOf, -1, -1),
                r === null ? void 0 : r
              );
              const s = new Bl(e, n);
              t.push(s);
            } else if (r == null) {
              this._viewContainer.remove(n === null ? void 0 : n);
            } else if (n !== null) {
              const s = this._viewContainer.get(n);
              this._viewContainer.move(s, r);
              const i = new Bl(e, s);
              t.push(i);
            }
          });
          for (let n = 0; n < t.length; n++) {
            this._perViewChange(t[n].view, t[n].record);
          }
          let n = 0;
          for (let r = this._viewContainer.length; n < r; n++) {
            const e = this._viewContainer.get(n);
            e.context.index = n;
            e.context.count = r;
            e.context.ngForOf = this._ngForOf;
          }
          e.forEachIdentityChange(e => {
            this._viewContainer.get(e.currentIndex).context.$implicit = e.item;
          });
        }
        _perViewChange(e, t) {
          e.context.$implicit = t.item;
        }
        static ngTemplateContextGuard(e, t) {
          return true;
        }
      }
      class Bl {
        constructor(e, t) {
          this.record = e;
          this.view = t;
        }
      }
      class ql {
        constructor(e, t) {
          this._viewContainer = e;
          this._context = new Ql();
          this._thenTemplateRef = null;
          this._elseTemplateRef = null;
          this._thenViewRef = null;
          this._elseViewRef = null;
          this._thenTemplateRef = t;
        }
        set ngIf(e) {
          this._context.$implicit = this._context.ngIf = e;
          this._updateView();
        }
        set ngIfThen(e) {
          Gl('ngIfThen', e);
          this._thenTemplateRef = e;
          this._thenViewRef = null;
          this._updateView();
        }
        set ngIfElse(e) {
          Gl('ngIfElse', e);
          this._elseTemplateRef = e;
          this._elseViewRef = null;
          this._updateView();
        }
        _updateView() {
          if (this._context.$implicit) {
            if (!this._thenViewRef) {
              this._viewContainer.clear();
              this._elseViewRef = null;
              if (this._thenTemplateRef) {
                this._thenViewRef = this._viewContainer.createEmbeddedView(
                  this._thenTemplateRef,
                  this._context
                );
              }
            }
          } else if (!this._elseViewRef) {
            this._viewContainer.clear();
            this._thenViewRef = null;
            if (this._elseTemplateRef) {
              this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context
              );
            }
          }
        }
      }
      class Ql {
        constructor() {
          this.$implicit = null;
          this.ngIf = null;
        }
      }
      class Wl {
        transform(e) {
          return JSON.stringify(e, null, 2);
        }
      }
      class Zl {}
      const Kl = new Se('DocumentToken');
      const Jl = 'server';
      let Yl = (() => {
        class e {}
        e.ngInjectableDef = pe({
          token: e,
          providedIn: 'root',
          factory: () => new Xl(Le(Kl), window, Le(Xe)),
        });
        return e;
      })();
      class Xl {
        constructor(e, t, n) {
          this.document = e;
          this.window = t;
          this.errorHandler = n;
          this.offset = () => [0, 0];
        }
        setOffset(e) {
          this.offset = Array.isArray(e) ? () => e : e;
        }
        getScrollPosition() {
          if (this.supportScrollRestoration()) {
            return [this.window.scrollX, this.window.scrollY];
          } else {
            return [0, 0];
          }
        }
        scrollToPosition(e) {
          if (this.supportScrollRestoration()) {
            this.window.scrollTo(e[0], e[1]);
          }
        }
        scrollToAnchor(e) {
          if (this.supportScrollRestoration()) {
            e =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(e)
                : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const t = this.document.querySelector(`#${e}`);
              if (t) {
                this.scrollToElement(t);
                return;
              }
              const n = this.document.querySelector(`[name='${e}']`);
              if (n) {
                this.scrollToElement(n);
                return;
              }
            } catch (t) {
              this.errorHandler.handleError(t);
            }
          }
        }
        setHistoryScrollRestoration(e) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            if (t && t.scrollRestoration) {
              t.scrollRestoration = e;
            }
          }
        }
        scrollToElement(e) {
          const t = e.getBoundingClientRect();
          const n = t.left + this.window.pageXOffset;
          const r = t.top + this.window.pageYOffset;
          const s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (e) {
            return false;
          }
        }
      }
      class ea {}
      class ta {}
      class na {
        constructor(e) {
          this.normalizedNames = new Map();
          this.lazyUpdate = null;
          if (e) {
            this.lazyInit =
              typeof e == 'string'
                ? () => {
                    this.headers = new Map();
                    e.split('\n').forEach(e => {
                      const t = e.indexOf(':');
                      if (t > 0) {
                        const n = e.slice(0, t);
                        const r = n.toLowerCase();
                        const s = e.slice(t + 1).trim();
                        this.maybeSetNormalizedName(n, r);
                        if (this.headers.has(r)) {
                          this.headers.get(r).push(s);
                        } else {
                          this.headers.set(r, [s]);
                        }
                      }
                    });
                  }
                : () => {
                    this.headers = new Map();
                    Object.keys(e).forEach(t => {
                      let n = e[t];
                      const r = t.toLowerCase();
                      if (typeof n == 'string') {
                        n = [n];
                      }
                      if (n.length > 0) {
                        this.headers.set(r, n);
                        this.maybeSetNormalizedName(t, r);
                      }
                    });
                  };
          } else {
            this.headers = new Map();
          }
        }
        has(e) {
          this.init();
          return this.headers.has(e.toLowerCase());
        }
        get(e) {
          this.init();
          const t = this.headers.get(e.toLowerCase());
          if (t && t.length > 0) {
            return t[0];
          } else {
            return null;
          }
        }
        keys() {
          this.init();
          return Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          this.init();
          return this.headers.get(e.toLowerCase()) || null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: 'd' });
        }
        maybeSetNormalizedName(e, t) {
          if (!this.normalizedNames.has(t)) {
            this.normalizedNames.set(t, e);
          }
        }
        init() {
          if (this.lazyInit) {
            if (this.lazyInit instanceof na) {
              this.copyFrom(this.lazyInit);
            } else {
              this.lazyInit();
            }
            this.lazyInit = null;
            if (this.lazyUpdate) {
              this.lazyUpdate.forEach(e => this.applyUpdate(e));
              this.lazyUpdate = null;
            }
          }
        }
        copyFrom(e) {
          e.init();
          Array.from(e.headers.keys()).forEach(t => {
            this.headers.set(t, e.headers.get(t));
            this.normalizedNames.set(t, e.normalizedNames.get(t));
          });
        }
        clone(e) {
          const t = new na();
          t.lazyInit =
            this.lazyInit && this.lazyInit instanceof na ? this.lazyInit : this;
          t.lazyUpdate = (this.lazyUpdate || []).concat([e]);
          return t;
        }
        applyUpdate(e) {
          const t = e.name.toLowerCase();
          switch (e.op) {
            case 'a':
            case 's':
              let n = e.value;
              if (typeof n == 'string') {
                n = [n];
              }
              if (n.length === 0) {
                return;
              }
              this.maybeSetNormalizedName(e.name, t);
              const r = (e.op === 'a' ? this.headers.get(t) : void 0) || [];
              r.push(...n);
              this.headers.set(t, r);
              break;
            case 'd':
              const s = e.value;
              if (s) {
                let e = this.headers.get(t);
                if (!e) {
                  return;
                }
                e = e.filter(e => s.indexOf(e) === -1);
                if (e.length === 0) {
                  this.headers.delete(t);
                  this.normalizedNames.delete(t);
                } else {
                  this.headers.set(t, e);
                }
              } else {
                this.headers.delete(t);
                this.normalizedNames.delete(t);
              }
          }
        }
        forEach(e) {
          this.init();
          Array.from(this.normalizedNames.keys()).forEach(t =>
            e(this.normalizedNames.get(t), this.headers.get(t))
          );
        }
      }
      class ra {
        encodeKey(e) {
          return sa(e);
        }
        encodeValue(e) {
          return sa(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
      }
      class ia {
        constructor(e = {}) {
          this.updates = null;
          this.cloneFrom = null;
          this.encoder = e.encoder || new ra();
          if (e.fromString) {
            if (e.fromObject) {
              throw new Error('Cannot specify both fromString and fromObject.');
            }
            this.map = (function(e, t) {
              const n = new Map();
              if (e.length > 0) {
                e.split('&').forEach(e => {
                  const r = e.indexOf('=');
                  const [s, i] =
                    r == -1
                      ? [t.decodeKey(e), '']
                      : [
                          t.decodeKey(e.slice(0, r)),
                          t.decodeValue(e.slice(r + 1)),
                        ];
                  const o = n.get(s) || [];
                  o.push(i);
                  n.set(s, o);
                });
              }
              return n;
            })(e.fromString, this.encoder);
          } else if (e.fromObject) {
            this.map = new Map();
            Object.keys(e.fromObject).forEach(t => {
              const n = e.fromObject[t];
              this.map.set(t, Array.isArray(n) ? n : [n]);
            });
          } else {
            this.map = null;
          }
        }
        has(e) {
          this.init();
          return this.map.has(e);
        }
        get(e) {
          this.init();
          const t = this.map.get(e);
          if (t) {
            return t[0];
          } else {
            return null;
          }
        }
        getAll(e) {
          this.init();
          return this.map.get(e) || null;
        }
        keys() {
          this.init();
          return Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: 'd' });
        }
        toString() {
          this.init();
          return this.keys()
            .map(e => {
              const t = this.encoder.encodeKey(e);
              return this.map
                .get(e)
                .map(e => t + '=' + this.encoder.encodeValue(e))
                .join('&');
            })
            .join('&');
        }
        clone(e) {
          const t = new ia({ encoder: this.encoder });
          t.cloneFrom = this.cloneFrom || this;
          t.updates = (this.updates || []).concat([e]);
          return t;
        }
        init() {
          if (this.map === null) {
            this.map = new Map();
          }
          if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom
              .keys()
              .forEach(e => this.map.set(e, this.cloneFrom.map.get(e)));
            this.updates.forEach(e => {
              switch (e.op) {
                case 'a':
                case 's':
                  const t =
                    (e.op === 'a' ? this.map.get(e.param) : void 0) || [];
                  t.push(e.value);
                  this.map.set(e.param, t);
                  break;
                case 'd':
                  if (e.value === void 0) {
                    this.map.delete(e.param);
                    break;
                  }
                  {
                    let t = this.map.get(e.param) || [];
                    const n = t.indexOf(e.value);
                    if (n !== -1) {
                      t.splice(n, 1);
                    }
                    if (t.length > 0) {
                      this.map.set(e.param, t);
                    } else {
                      this.map.delete(e.param);
                    }
                  }
              }
            });
            this.cloneFrom = this.updates = null;
          }
        }
      }
      class ua {
        constructor(e, t, n, r) {
          let s;
          this.url = t;
          this.body = null;
          this.reportProgress = false;
          this.withCredentials = false;
          this.responseType = 'json';
          this.method = e.toUpperCase();
          if (
            (function(e) {
              switch (e) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return false;
                default:
                  return true;
              }
            })(this.method) ||
            r
          ) {
            this.body = n !== void 0 ? n : null;
            s = r;
          } else {
            s = n;
          }
          if (s) {
            this.reportProgress = !!s.reportProgress;
            this.withCredentials = !!s.withCredentials;
            if (s.responseType) {
              this.responseType = s.responseType;
            }
            if (s.headers) {
              this.headers = s.headers;
            }
            if (s.params) {
              this.params = s.params;
            }
          }
          if (!this.headers) {
            this.headers = new na();
          }
          if (this.params) {
            const e = this.params.toString();
            if (e.length === 0) {
              this.urlWithParams = t;
            } else {
              const n = t.indexOf('?');
              this.urlWithParams =
                t + (n === -1 ? '?' : n < t.length - 1 ? '&' : '') + e;
            }
          } else {
            this.params = new ia();
            this.urlWithParams = t;
          }
        }
        serializeBody() {
          if (this.body === null) {
            return null;
          } else if (
            oa(this.body) ||
            la(this.body) ||
            aa(this.body) ||
            typeof this.body == 'string'
          ) {
            return this.body;
          } else if (this.body instanceof ia) {
            return this.body.toString();
          } else if (
            typeof this.body == 'object' ||
            typeof this.body == 'boolean' ||
            Array.isArray(this.body)
          ) {
            return JSON.stringify(this.body);
          } else {
            return this.body.toString();
          }
        }
        detectContentTypeHeader() {
          if (this.body === null) {
            return null;
          } else if (aa(this.body)) {
            return null;
          } else if (la(this.body)) {
            return this.body.type || null;
          } else if (oa(this.body)) {
            return null;
          } else if (typeof this.body == 'string') {
            return 'text/plain';
          } else if (this.body instanceof ia) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
          } else if (
            typeof this.body == 'object' ||
            typeof this.body == 'number' ||
            Array.isArray(this.body)
          ) {
            return 'application/json';
          } else {
            return null;
          }
        }
        clone(e = {}) {
          const t = e.method || this.method;
          const n = e.url || this.url;
          const r = e.responseType || this.responseType;
          const s = e.body !== void 0 ? e.body : this.body;
          const i =
            e.withCredentials !== void 0
              ? e.withCredentials
              : this.withCredentials;
          const o =
            e.reportProgress !== void 0
              ? e.reportProgress
              : this.reportProgress;
          let l = e.headers || this.headers;
          let a = e.params || this.params;
          if (e.setHeaders !== void 0) {
            l = Object.keys(e.setHeaders).reduce(
              (t, n) => t.set(n, e.setHeaders[n]),
              l
            );
          }
          if (e.setParams) {
            a = Object.keys(e.setParams).reduce(
              (t, n) => t.set(n, e.setParams[n]),
              a
            );
          }
          return new ua(t, n, s, {
            params: a,
            headers: l,
            reportProgress: o,
            responseType: r,
            withCredentials: i,
          });
        }
      }
      const ca = (function() {
        var e = {
          Sent: 0,
          UploadProgress: 1,
          ResponseHeader: 2,
          DownloadProgress: 3,
          Response: 4,
          User: 5,
        };
        e[e.Sent] = 'Sent';
        e[e.UploadProgress] = 'UploadProgress';
        e[e.ResponseHeader] = 'ResponseHeader';
        e[e.DownloadProgress] = 'DownloadProgress';
        e[e.Response] = 'Response';
        e[e.User] = 'User';
        return e;
      })();
      class ha {
        constructor(e, t = 200, n = 'OK') {
          this.headers = e.headers || new na();
          this.status = e.status !== void 0 ? e.status : t;
          this.statusText = e.statusText || n;
          this.url = e.url || null;
          this.ok = this.status >= 200 && this.status < 300;
        }
      }
      class da extends ha {
        constructor(e = {}) {
          super(e);
          this.type = ca.ResponseHeader;
        }
        clone(e = {}) {
          return new da({
            headers: e.headers || this.headers,
            status: e.status !== void 0 ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class pa extends ha {
        constructor(e = {}) {
          super(e);
          this.type = ca.Response;
          this.body = e.body !== void 0 ? e.body : null;
        }
        clone(e = {}) {
          return new pa({
            body: e.body !== void 0 ? e.body : this.body,
            headers: e.headers || this.headers,
            status: e.status !== void 0 ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class fa extends ha {
        constructor(e) {
          super(e, 0, 'Unknown Error');
          this.name = 'HttpErrorResponse';
          this.ok = false;
          this.message =
            this.status >= 200 && this.status < 300
              ? `Http failure during parsing for ${e.url || '(unknown url)'}`
              : `Http failure response for ${e.url || '(unknown url)'}: ${
                  e.status
                } ${e.statusText}`;
          this.error = e.error || null;
        }
      }
      class ma {
        constructor(e) {
          this.handler = e;
        }
        request(e, t, n = {}) {
          let r;
          if (e instanceof ua) {
            r = e;
          } else {
            let s = void 0;
            s = n.headers instanceof na ? n.headers : new na(n.headers);
            let i = void 0;
            if (n.params) {
              i =
                n.params instanceof ia
                  ? n.params
                  : new ia({ fromObject: n.params });
            }
            r = new ua(e, t, n.body !== void 0 ? n.body : null, {
              headers: s,
              params: i,
              reportProgress: n.reportProgress,
              responseType: n.responseType || 'json',
              withCredentials: n.withCredentials,
            });
          }
          const s = xl(r).pipe(El(e => this.handler.handle(e)));
          if (e instanceof ua || n.observe === 'events') {
            return s;
          }
          const i = s.pipe(Sl(e => e instanceof pa));
          switch (n.observe || 'body') {
            case 'body':
              switch (r.responseType) {
                case 'arraybuffer':
                  return i.pipe(
                    $(e => {
                      if (e.body !== null && !(e.body instanceof ArrayBuffer)) {
                        throw new Error('Response is not an ArrayBuffer.');
                      }
                      return e.body;
                    })
                  );
                case 'blob':
                  return i.pipe(
                    $(e => {
                      if (e.body !== null && !(e.body instanceof Blob)) {
                        throw new Error('Response is not a Blob.');
                      }
                      return e.body;
                    })
                  );
                case 'text':
                  return i.pipe(
                    $(e => {
                      if (e.body !== null && typeof e.body != 'string') {
                        throw new Error('Response is not a string.');
                      }
                      return e.body;
                    })
                  );
                case 'json':
                default:
                  return i.pipe($(e => e.body));
              }
            case 'response':
              return i;
            default:
              throw new Error(
                `Unreachable: unhandled observe type ${n.observe}}`
              );
          }
        }
        delete(e, t = {}) {
          return this.request('DELETE', e, t);
        }
        get(e, t = {}) {
          return this.request('GET', e, t);
        }
        head(e, t = {}) {
          return this.request('HEAD', e, t);
        }
        jsonp(e, t) {
          return this.request('JSONP', e, {
            params: new ia().append(t, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
          });
        }
        options(e, t = {}) {
          return this.request('OPTIONS', e, t);
        }
        patch(e, t, n = {}) {
          return this.request('PATCH', e, ga(n, t));
        }
        post(e, t, n = {}) {
          return this.request('POST', e, ga(n, t));
        }
        put(e, t, n = {}) {
          return this.request('PUT', e, ga(n, t));
        }
      }
      class ya {
        constructor(e, t) {
          this.next = e;
          this.interceptor = t;
        }
        handle(e) {
          return this.interceptor.intercept(e, this.next);
        }
      }
      const va = new Se('HTTP_INTERCEPTORS');
      class _a {
        intercept(e, t) {
          return t.handle(e);
        }
      }
      const wa = /^\)\]\}',?\n/;
      class ba {}
      class Ca {
        constructor() {}
        build() {
          return new XMLHttpRequest();
        }
      }
      class xa {
        constructor(e) {
          this.xhrFactory = e;
        }
        handle(e) {
          if (e.method === 'JSONP') {
            throw new Error(
              'Attempted to construct Jsonp request without JsonpClientModule installed.'
            );
          }
          return new b(t => {
            const n = this.xhrFactory.build();
            n.open(e.method, e.urlWithParams);
            if (e.withCredentials) {
              n.withCredentials = true;
            }
            e.headers.forEach((e, t) => n.setRequestHeader(e, t.join(',')));
            if (!e.headers.has('Accept')) {
              n.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            if (!e.headers.has('Content-Type')) {
              const t = e.detectContentTypeHeader();
              if (t !== null) {
                n.setRequestHeader('Content-Type', t);
              }
            }
            if (e.responseType) {
              const t = e.responseType.toLowerCase();
              n.responseType = t !== 'json' ? t : 'text';
            }
            const r = e.serializeBody();
            let s = null;
            const i = () => {
              if (s !== null) {
                return s;
              }
              const t = n.status === 1223 ? 204 : n.status;
              const r = n.statusText || 'OK';
              const i = new na(n.getAllResponseHeaders());
              const o =
                (function() {
                  var e = n;
                  if ('responseURL' in e && e.responseURL) {
                    return e.responseURL;
                  } else if (
                    /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                  ) {
                    return e.getResponseHeader('X-Request-URL');
                  } else {
                    return null;
                  }
                })() || e.url;
              s = new da({ headers: i, status: t, statusText: r, url: o });
              return s;
            };
            const o = () => {
              let { headers: r, status: s, statusText: o, url: l } = i();
              let a = null;
              if (s !== 204) {
                a = n.response === void 0 ? n.responseText : n.response;
              }
              if (s === 0) {
                s = a ? 200 : 0;
              }
              let u = s >= 200 && s < 300;
              if (e.responseType === 'json' && typeof a == 'string') {
                const e = a;
                a = a.replace(wa, '');
                try {
                  a = a !== '' ? JSON.parse(a) : null;
                } catch (c) {
                  a = e;
                  if (u) {
                    u = false;
                    a = { error: c, text: a };
                  }
                }
              }
              if (u) {
                t.next(
                  new pa({
                    body: a,
                    headers: r,
                    status: s,
                    statusText: o,
                    url: l || void 0,
                  })
                );
                t.complete();
              } else {
                t.error(
                  new fa({
                    error: a,
                    headers: r,
                    status: s,
                    statusText: o,
                    url: l || void 0,
                  })
                );
              }
            };
            const l = e => {
              const { url: r } = i();
              const s = new fa({
                error: e,
                status: n.status || 0,
                statusText: n.statusText || 'Unknown Error',
                url: r || void 0,
              });
              t.error(s);
            };
            let a = false;
            const u = r => {
              if (!a) {
                t.next(i());
                a = true;
              }
              let s = { type: ca.DownloadProgress, loaded: r.loaded };
              if (r.lengthComputable) {
                s.total = r.total;
              }
              if (e.responseType === 'text' && n.responseText) {
                s.partialText = n.responseText;
              }
              t.next(s);
            };
            const c = e => {
              let n = { type: ca.UploadProgress, loaded: e.loaded };
              if (e.lengthComputable) {
                n.total = e.total;
              }
              t.next(n);
            };
            n.addEventListener('load', o);
            n.addEventListener('error', l);
            if (e.reportProgress) {
              n.addEventListener('progress', u);
              if (r !== null && n.upload) {
                n.upload.addEventListener('progress', c);
              }
            }
            n.send(r);
            t.next({ type: ca.Sent });
            return () => {
              n.removeEventListener('error', l);
              n.removeEventListener('load', o);
              if (e.reportProgress) {
                n.removeEventListener('progress', u);
                if (r !== null && n.upload) {
                  n.upload.removeEventListener('progress', c);
                }
              }
              n.abort();
            };
          });
        }
      }
      const Ea = new Se('XSRF_COOKIE_NAME');
      const Sa = new Se('XSRF_HEADER_NAME');
      class Ta {}
      class ka {
        constructor(e, t, n) {
          this.doc = e;
          this.platform = t;
          this.cookieName = n;
          this.lastCookieString = '';
          this.lastToken = null;
          this.parseCount = 0;
        }
        getToken() {
          if (this.platform === 'server') {
            return null;
          }
          const e = this.doc.cookie || '';
          if (e !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Hl(e, this.cookieName);
            this.lastCookieString = e;
          }
          return this.lastToken;
        }
      }
      class Aa {
        constructor(e, t) {
          this.tokenService = e;
          this.headerName = t;
        }
        intercept(e, t) {
          const n = e.url.toLowerCase();
          if (
            e.method === 'GET' ||
            e.method === 'HEAD' ||
            n.startsWith('http://') ||
            n.startsWith('https://')
          ) {
            return t.handle(e);
          }
          const r = this.tokenService.getToken();
          if (r !== null && !e.headers.has(this.headerName)) {
            e = e.clone({ headers: e.headers.set(this.headerName, r) });
          }
          return t.handle(e);
        }
      }
      class Ra {
        constructor(e, t) {
          this.backend = e;
          this.injector = t;
          this.chain = null;
        }
        handle(e) {
          if (this.chain === null) {
            const e = this.injector.get(va, []);
            this.chain = e.reduceRight((e, t) => new ya(e, t), this.backend);
          }
          return this.chain.handle(e);
        }
      }
      class Ia {
        static disable() {
          return { ngModule: Ia, providers: [{ provide: Aa, useClass: _a }] };
        }
        static withOptions(e = {}) {
          return {
            ngModule: Ia,
            providers: [
              e.cookieName ? { provide: Ea, useValue: e.cookieName } : [],
              e.headerName ? { provide: Sa, useValue: e.headerName } : [],
            ],
          };
        }
      }
      class Na {}
      class Pa {
        constructor(e, t, n, r) {
          this.ref = e;
          this.route = t;
          this.router = n;
          this.httpClient = r;
          this.explorerQuery = '';
          this.explorerResponse = null;
          this.queryNode = null;
          this.errorStr =
            'Please enter a valid BitClout public key, transaction ID, block hash, or block height. Public keys start with "BC", transaction IDs start with "3J", and block hashes usually start with zeros.';
          this.publicKeyNoticeStr =
            'NOTE: Looking up transactions using a public key will currently only return transactions with at least one confirmation (i.e. transactions that have already been mined into a block).';
          this.publicKeyNotice = null;
          this.blockRes = null;
          this.txnRes = null;
          this.counter = 0;
          this.hasParam = false;
          this.httpOptions = {
            headers: new na({ 'Content-Type': 'application/json' }),
          };
          this.hasInitialized = false;
          this.txnsLoading = false;
          this.route.queryParams.subscribe(e => {
            console.log('CALLED: ' + this.counter);
            if (Object.keys(e).length === 0 && this.counter === 0) {
              this.counter++;
              setTimeout(() => {
                if (!this.hasInitialized) {
                  this.hasInitialized = true;
                  this._refreshParams(e);
                }
              }, 1e3);
              return;
            }
            this.hasInitialized = true;
            this._refreshParams(e);
          });
        }
        _extractError(e) {
          if (e.error != null && e.error.Error != null) {
            return e.error.Error;
          } else if (e.status != null && e.status != 200) {
            return 'Error connecting to query node: ' + this.queryNode;
          } else {
            return 'Unknown error occurred: ' + JSON.stringify(e);
          }
        }
        _refreshParams(e) {
          this.publicKeyNotice = null;
          if (e['query-node'] != null) {
            this.queryNode = e['query-node'];
          }
          if (this.queryNode == null) {
            this.queryNode = 'https://api.bitclout.com';
          }
          if (e.mempool) {
            this.explorerQuery = 'mempool';
            this.submitQuery();
            console.log(this.explorerQuery);
            return;
          } else if (e['block-hash'] == null) {
            if (e['block-height'] == null) {
              if (e['transaction-id'] == null) {
                if (e['public-key'] == null) {
                  this.txnsLoading = true;
                  this.httpClient
                    .get(this.queryNode + '/api/v1')
                    .toPromise()
                    .then(
                      e => {
                        this.clearUnnecessaryFields(e);
                        this.blockRes = e;
                        this.blockRes.Header.DateTime = new Date(
                          1e3 * this.blockRes.Header.TstampSecs
                        );
                        if (e.Transactions != null) {
                          e.Transactions.reverse();
                          this.txnRes = {
                            Transactions: this.blockRes.Transactions,
                          };
                        }
                        console.log(this.explorerQuery);
                        this.txnsLoading = false;
                      },
                      e => {
                        alert(this._extractError(e));
                        this.txnsLoading = false;
                      }
                    );
                  return;
                } else {
                  this.explorerQuery = e['public-key'];
                  this.publicKeyNotice = this.publicKeyNoticeStr;
                  this.submitQuery();
                  console.log(this.explorerQuery);
                  return;
                }
              } else {
                this.explorerQuery = e['transaction-id'];
                this.submitQuery();
                console.log(this.explorerQuery);
                return;
              }
            } else {
              this.explorerQuery = e['block-height'];
              this.submitQuery();
              console.log(this.explorerQuery);
              return;
            }
          } else {
            this.explorerQuery = e['block-hash'];
            this.submitQuery();
            console.log(this.explorerQuery);
            return;
          }
        }
        searchEnterPressed(e) {
          if (e.key === 'Enter') {
            this.relocateForQuery();
          }
        }
        copy(e) {
          const t = document.createElement('textarea');
          t.style.position = 'fixed';
          t.style.left = '0';
          t.style.top = '0';
          t.style.opacity = '0';
          t.value = e;
          document.body.appendChild(t);
          t.focus();
          t.select();
          document.execCommand('copy');
          document.body.removeChild(t);
        }
        relocateForQuery() {
          if (this.explorerQuery != null && this.explorerQuery != '') {
            if (
              this.explorerQuery.startsWith('BC') ||
              this.explorerQuery.startsWith('tBC')
            ) {
              this.router.navigate(['/'], {
                queryParams: {
                  'query-node': this.queryNode,
                  'public-key': this.explorerQuery,
                },
              });
              return;
            } else if (this.explorerQuery.startsWith('mempool')) {
              this.router.navigate(['/'], {
                queryParams: { 'query-node': this.queryNode, mempool: true },
              });
              return;
            } else if (
              this.explorerQuery.startsWith('3Ju') ||
              this.explorerQuery.startsWith('CbU')
            ) {
              this.router.navigate(['/'], {
                queryParams: {
                  'query-node': this.queryNode,
                  'transaction-id': this.explorerQuery,
                },
              });
              return;
            } else if (this.explorerQuery.length === 64) {
              this.router.navigate(['/'], {
                queryParams: {
                  'query-node': this.queryNode,
                  'block-hash': this.explorerQuery,
                },
              });
              return;
            } else if (
              parseInt(this.explorerQuery) == null ||
              isNaN(parseInt(this.explorerQuery))
            ) {
              alert(this.errorStr);
              return;
            } else {
              this.router.navigate(['/'], {
                queryParams: {
                  'query-node': this.queryNode,
                  'block-height': this.explorerQuery,
                },
              });
              return;
            }
          }
          alert(this.errorStr);
        }
        clearUnnecessaryFields(e) {
          if (e.Transactions) {
            for (let t of e.Transactions) {
              if (
                t &&
                t.TransactionMetadata &&
                t.TransactionMetadata.BasicTransferTxindexMetadata &&
                t.TransactionMetadata.BasicTransferTxindexMetadata.UtxoOpsDump
              ) {
                t.TransactionMetadata.BasicTransferTxindexMetadata.UtxoOpsDump =
                  'redacted';
              }
            }
          }
        }
        submitQuery() {
          if (this.explorerQuery != null && this.explorerQuery != '') {
            this.hasParam = true;
            this.blockRes = null;
            this.txnRes = null;
            if (
              this.explorerQuery.startsWith('BC') ||
              this.explorerQuery.startsWith('tBC')
            ) {
              this.txnsLoading = true;
              return this.httpClient
                .post(this.queryNode + '/api/v1/transaction-info', {
                  PublicKeyBase58Check: this.explorerQuery,
                })
                .toPromise()
                .then(
                  e => {
                    this.clearUnnecessaryFields(e);
                    if (e.Transactions != null) {
                      e.Transactions.reverse();
                    }
                    this.txnRes = e;
                    this.ref.detectChanges();
                    this.txnsLoading = false;
                  },
                  e => {
                    alert(this._extractError(e));
                    this.txnsLoading = false;
                  }
                );
            } else if (this.explorerQuery.startsWith('mempool')) {
              this.txnsLoading = true;
              return this.httpClient
                .post(
                  this.queryNode + '/api/v1/transaction-info',
                  { IsMempool: true },
                  this.httpOptions
                )
                .toPromise()
                .then(
                  e => {
                    this.clearUnnecessaryFields(e);
                    if (e.Transactions != null) {
                      e.Transactions.reverse();
                    }
                    this.txnRes = e;
                    this.ref.detectChanges();
                    this.txnsLoading = false;
                  },
                  e => {
                    alert(this._extractError(e));
                    this.txnsLoading = false;
                  }
                );
            } else if (
              this.explorerQuery.startsWith('3Ju') ||
              this.explorerQuery.startsWith('CbU')
            ) {
              this.txnsLoading = true;
              return this.httpClient
                .post(this.queryNode + '/api/v1/transaction-info', {
                  TransactionIDBase58Check: this.explorerQuery,
                })
                .toPromise()
                .then(
                  e => {
                    this.clearUnnecessaryFields(e);
                    this.txnRes = e;
                    this.ref.detectChanges();
                    this.txnsLoading = false;
                  },
                  e => {
                    alert(this._extractError(e));
                    this.txnsLoading = false;
                  }
                );
            } else if (this.explorerQuery.length === 64) {
              this.txnsLoading = true;
              return this.httpClient
                .post(this.queryNode + '/api/v1/block', {
                  HashHex: this.explorerQuery,
                  FullBlock: true,
                })
                .toPromise()
                .then(
                  e => {
                    this.clearUnnecessaryFields(e);
                    this.blockRes = e;
                    this.blockRes.Header.DateTime = new Date(
                      1e3 * this.blockRes.Header.TstampSecs
                    );
                    if (e.Transactions != null) {
                      e.Transactions.reverse();
                      this.txnRes = {
                        Transactions: this.blockRes.Transactions,
                      };
                    }
                    this.ref.detectChanges();
                    this.txnsLoading = false;
                  },
                  e => {
                    alert(this._extractError(e));
                    this.txnsLoading = false;
                  }
                );
            } else if (
              parseInt(this.explorerQuery) == null ||
              isNaN(parseInt(this.explorerQuery))
            ) {
              alert(this.errorStr);
              return;
            } else {
              this.txnsLoading = true;
              return this.httpClient
                .post(this.queryNode + '/api/v1/block', {
                  Height: parseInt(this.explorerQuery),
                  FullBlock: true,
                })
                .toPromise()
                .then(
                  e => {
                    this.clearUnnecessaryFields(e);
                    this.blockRes = e;
                    this.blockRes.Header.DateTime = new Date(
                      1e3 * this.blockRes.Header.TstampSecs
                    );
                    if (e.Transactions != null) {
                      e.Transactions.reverse();
                      this.txnRes = {
                        Transactions: this.blockRes.Transactions,
                      };
                    }
                    this.ref.detectChanges();
                    this.txnsLoading = false;
                  },
                  e => {
                    alert(this._extractError(e));
                    this.txnsLoading = false;
                  }
                );
            }
          }
          alert(this.errorStr);
        }
        ngOnInit() {}
      }
      class Oa extends k {
        constructor(e) {
          super();
          this._value = e;
        }
        get value() {
          return this.getValue();
        }
        _subscribe(e) {
          const t = super._subscribe(e);
          if (t && !t.closed) {
            e.next(this._value);
          }
          return t;
        }
        getValue() {
          if (this.hasError) {
            throw this.thrownError;
          }
          if (this.closed) {
            throw new E();
          }
          return this._value;
        }
        next(e) {
          super.next((this._value = e));
        }
      }
      Ma.prototype = Object.create(Error.prototype);
      const Da = Ma;
      const Va = {};
      class Ua {
        constructor(e) {
          this.resultSelector = e;
        }
        call(e, t) {
          return t.subscribe(new La(e, this.resultSelector));
        }
      }
      class La extends H {
        constructor(e, t) {
          super(e);
          this.resultSelector = t;
          this.active = 0;
          this.values = [];
          this.observables = [];
        }
        _next(e) {
          this.values.push(Va);
          this.observables.push(e);
        }
        _complete() {
          const e = this.observables;
          const t = e.length;
          if (t === 0) {
            this.destination.complete();
          } else {
            this.active = t;
            this.toRespond = t;
            for (let n = 0; n < t; n++) {
              const t = e[n];
              this.add(j(this, t, t, n));
            }
          }
        }
        notifyComplete(e) {
          if ((this.active -= 1) == 0) {
            this.destination.complete();
          }
        }
        notifyNext(e, t, n, r, s) {
          const i = this.values;
          const o = this.toRespond
            ? i[n] === Va ? --this.toRespond : this.toRespond
            : 0;
          i[n] = t;
          if (o === 0) {
            if (this.resultSelector) {
              this._tryResultSelector(i);
            } else {
              this.destination.next(i.slice());
            }
          }
        }
        _tryResultSelector(e) {
          let t;
          try {
            t = this.resultSelector.apply(this, e);
          } catch (n) {
            this.destination.error(n);
            return;
          }
          this.destination.next(t);
        }
      }
      Ha.prototype = Object.create(Error.prototype);
      const $a = Ha;
      class Ba {
        constructor(e) {
          this.total = e;
          if (this.total < 0) {
            throw new $a();
          }
        }
        call(e, t) {
          return t.subscribe(new qa(e, this.total));
        }
      }
      class qa extends g {
        constructor(e, t) {
          super(e);
          this.total = t;
          this.ring = new Array();
          this.count = 0;
        }
        _next(e) {
          const t = this.ring;
          const n = this.total;
          const r = this.count++;
          if (t.length < n) {
            t.push(e);
          } else {
            t[r % n] = e;
          }
        }
        _complete() {
          const e = this.destination;
          let t = this.count;
          if (t > 0) {
            const n = this.count >= this.total ? this.total : this.count;
            const r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = t++ % n;
              e.next(r[s]);
            }
          }
          e.complete();
        }
      }
      class Ga {
        constructor(e, t, n) {
          this.nextOrObserver = e;
          this.error = t;
          this.complete = n;
        }
        call(e, t) {
          return t.subscribe(
            new Wa(e, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class Wa extends g {
        constructor(e, t, n, s) {
          super(e);
          this._tapNext = v;
          this._tapError = v;
          this._tapComplete = v;
          this._tapError = n || v;
          this._tapComplete = s || v;
          if (r(t)) {
            this._context = this;
            this._tapNext = t;
          } else if (t) {
            this._context = t;
            this._tapNext = t.next || v;
            this._tapError = t.error || v;
            this._tapComplete = t.complete || v;
          }
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            this.destination.error(t);
            return;
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            this.destination.error(e);
            return;
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            this.destination.error(e);
            return;
          }
          return this.destination.complete();
        }
      }
      const Za = (e = Ka) =>
        Qa({
          hasValue: false,
          next() {
            this.hasValue = true;
          },
          complete() {
            if (!this.hasValue) {
              throw e();
            }
          },
        });
      class Ya {
        constructor(e) {
          this.defaultValue = e;
        }
        call(e, t) {
          return t.subscribe(new Xa(e, this.defaultValue));
        }
      }
      class Xa extends g {
        constructor(e, t) {
          super(e);
          this.defaultValue = t;
          this.isEmpty = true;
        }
        _next(e) {
          this.isEmpty = false;
          this.destination.next(e);
        }
        _complete() {
          if (this.isEmpty) {
            this.destination.next(this.defaultValue);
          }
          this.destination.complete();
        }
      }
      class nu {
        constructor(e) {
          this.selector = e;
        }
        call(e, t) {
          return t.subscribe(new ru(e, this.selector, this.caught));
        }
      }
      class ru extends H {
        constructor(e, t, n) {
          super(e);
          this.selector = t;
          this.caught = n;
        }
        error(e) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(e, this.caught);
            } catch (t) {
              super.error(t);
              return;
            }
            this._unsubscribeAndRecycle();
            const r = new I(this, void 0, void 0);
            this.add(r);
            j(this, n, void 0, void 0, r);
          }
        }
      }
      class iu {
        constructor(e) {
          this.total = e;
          if (this.total < 0) {
            throw new $a();
          }
        }
        call(e, t) {
          return t.subscribe(new ou(e, this.total));
        }
      }
      class ou extends g {
        constructor(e, t) {
          super(e);
          this.total = t;
          this.count = 0;
        }
        _next(e) {
          const t = this.total;
          const n = ++this.count;
          if (n <= t) {
            this.destination.next(e);
            if (n === t) {
              this.destination.complete();
              this.unsubscribe();
            }
          }
        }
      }
      class au {
        constructor(e, t, n) {
          this.predicate = e;
          this.thisArg = t;
          this.source = n;
        }
        call(e, t) {
          return t.subscribe(
            new uu(e, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class uu extends g {
        constructor(e, t, n, r) {
          super(e);
          this.predicate = t;
          this.thisArg = n;
          this.source = r;
          this.index = 0;
          this.thisArg = n || this;
        }
        notifyComplete(e) {
          this.destination.next(e);
          this.destination.complete();
        }
        _next(e) {
          let t = false;
          try {
            t = this.predicate.call(this.thisArg, e, this.index++, this.source);
          } catch (n) {
            this.destination.error(n);
            return;
          }
          if (!t) {
            this.notifyComplete(false);
          }
        }
        _complete() {
          this.notifyComplete(true);
        }
      }
      class hu {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new du(e, this.project));
        }
      }
      class du extends H {
        constructor(e, t) {
          super(e);
          this.project = t;
          this.index = 0;
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            this.destination.error(r);
            return;
          }
          this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = this.innerSubscription;
          if (r) {
            r.unsubscribe();
          }
          const s = new I(this, void 0, void 0);
          this.destination.add(s);
          this.innerSubscription = j(this, e, t, n, s);
        }
        _complete() {
          const { innerSubscription: e } = this;
          if (!e || !!e.closed) {
            super._complete();
          }
          this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(e) {
          this.destination.remove(e);
          this.innerSubscription = null;
          if (this.isStopped) {
            super._complete();
          }
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
      }
      class fu {
        constructor(e, t, n = false) {
          this.accumulator = e;
          this.seed = t;
          this.hasSeed = n;
        }
        call(e, t) {
          return t.subscribe(
            new gu(e, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class gu extends g {
        constructor(e, t, n, r) {
          super(e);
          this.accumulator = t;
          this._seed = n;
          this.hasSeed = r;
          this.index = 0;
        }
        get seed() {
          return this._seed;
        }
        set seed(e) {
          this.hasSeed = true;
          this._seed = e;
        }
        _next(e) {
          if (this.hasSeed) {
            return this._tryNext(e);
          }
          this.seed = e;
          this.destination.next(e);
        }
        _tryNext(e) {
          const t = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, e, t);
          } catch (r) {
            this.destination.error(r);
          }
          this.seed = n;
          this.destination.next(n);
        }
      }
      class mu {
        constructor(e) {
          this.callback = e;
        }
        call(e, t) {
          return t.subscribe(new yu(e, this.callback));
        }
      }
      class yu extends g {
        constructor(e, t) {
          super(e);
          this.add(new d(t));
        }
      }
      let vu = null;
      class wu {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(e) {
          this._attrToPropMap = e;
        }
      }
      class bu extends wu {
        constructor() {
          super();
          this._animationPrefix = null;
          this._transitionEnd = null;
          try {
            const e = this.createElement('div', document);
            if (this.getStyle(e, 'animationName') == null) {
              const t = ['Webkit', 'Moz', 'O', 'ms'];
              for (let n = 0; n < t.length; n++) {
                if (this.getStyle(e, t[n] + 'AnimationName') != null) {
                  this._animationPrefix = '-' + t[n].toLowerCase() + '-';
                  break;
                }
              }
            } else {
              this._animationPrefix = '';
            }
            const t = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend',
            };
            Object.keys(t).forEach(n => {
              if (this.getStyle(e, n) != null) {
                this._transitionEnd = t[n];
              }
            });
          } catch (e) {
            this._animationPrefix = null;
            this._transitionEnd = null;
          }
        }
        getDistributedNodes(e) {
          return e.getDistributedNodes();
        }
        resolveAndSetHref(e, t, n) {
          e.href = n == null ? t : t + '/../' + n;
        }
        supportsDOMEvents() {
          return true;
        }
        supportsNativeShadowDOM() {
          return typeof document.body.createShadowRoot == 'function';
        }
        getAnimationPrefix() {
          if (this._animationPrefix) {
            return this._animationPrefix;
          } else {
            return '';
          }
        }
        getTransitionEnd() {
          if (this._transitionEnd) {
            return this._transitionEnd;
          } else {
            return '';
          }
        }
        supportsAnimation() {
          return this._animationPrefix != null && this._transitionEnd != null;
        }
      }
      const Cu = {
        class: 'className',
        innerHtml: 'innerHTML',
        readonly: 'readOnly',
        tabindex: 'tabIndex',
      };
      const xu = 3;
      const Eu = {
        '': 'Backspace',
        '	': 'Tab',
        '': 'Delete',
        '': 'Escape',
        Del: 'Delete',
        Esc: 'Escape',
        Left: 'ArrowLeft',
        Right: 'ArrowRight',
        Up: 'ArrowUp',
        Down: 'ArrowDown',
        Menu: 'ContextMenu',
        Scroll: 'ScrollLock',
        Win: 'OS',
      };
      const Su = {
        A: '1',
        B: '2',
        C: '3',
        D: '4',
        E: '5',
        F: '6',
        G: '7',
        H: '8',
        I: '9',
        J: '*',
        K: '+',
        M: '-',
        N: '.',
        O: '/',
        '`': '0',
        '': 'NumLock',
      };
      const Tu = (() => {
        if (Ee.Node) {
          return (
            Ee.Node.prototype.contains ||
            function(e) {
              return !!(16 & this.compareDocumentPosition(e));
            }
          );
        }
      })();
      class ku extends bu {
        parse(e) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var e = new ku();
          if (!vu) {
            vu = e;
          }
        }
        hasProperty(e, t) {
          return t in e;
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        getProperty(e, t) {
          return e[t];
        }
        invoke(e, t, n) {
          e[t](...n);
        }
        logError(e) {
          if (window.console) {
            if (console.error) {
              console.error(e);
            } else {
              console.log(e);
            }
          }
        }
        log(e) {
          if (window.console && window.console.log) {
            window.console.log(e);
          }
        }
        logGroup(e) {
          if (window.console && window.console.group) {
            window.console.group(e);
          }
        }
        logGroupEnd() {
          if (window.console && window.console.groupEnd) {
            window.console.groupEnd();
          }
        }
        get attrToPropMap() {
          return Cu;
        }
        contains(e, t) {
          return Tu.call(e, t);
        }
        querySelector(e, t) {
          return e.querySelector(t);
        }
        querySelectorAll(e, t) {
          return e.querySelectorAll(t);
        }
        on(e, t, n) {
          e.addEventListener(t, n, false);
        }
        onAndCancel(e, t, n) {
          e.addEventListener(t, n, false);
          return () => {
            e.removeEventListener(t, n, false);
          };
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        createMouseEvent(e) {
          const t = this.getDefaultDocument().createEvent('MouseEvent');
          t.initEvent(e, true, true);
          return t;
        }
        createEvent(e) {
          const t = this.getDefaultDocument().createEvent('Event');
          t.initEvent(e, true, true);
          return t;
        }
        preventDefault(e) {
          e.preventDefault();
          e.returnValue = false;
        }
        isPrevented(e) {
          return (
            e.defaultPrevented || (e.returnValue != null && !e.returnValue)
          );
        }
        getInnerHTML(e) {
          return e.innerHTML;
        }
        getTemplateContent(e) {
          if ('content' in e && this.isTemplateElement(e)) {
            return e.content;
          } else {
            return null;
          }
        }
        getOuterHTML(e) {
          return e.outerHTML;
        }
        nodeName(e) {
          return e.nodeName;
        }
        nodeValue(e) {
          return e.nodeValue;
        }
        type(e) {
          return e.type;
        }
        content(e) {
          if (this.hasProperty(e, 'content')) {
            return e.content;
          } else {
            return e;
          }
        }
        firstChild(e) {
          return e.firstChild;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        parentElement(e) {
          return e.parentNode;
        }
        childNodes(e) {
          return e.childNodes;
        }
        childNodesAsList(e) {
          const t = e.childNodes;
          const n = new Array(t.length);
          for (let r = 0; r < t.length; r++) {
            n[r] = t[r];
          }
          return n;
        }
        clearNodes(e) {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        removeChild(e, t) {
          e.removeChild(t);
        }
        replaceChild(e, t, n) {
          e.replaceChild(t, n);
        }
        remove(e) {
          if (e.parentNode) {
            e.parentNode.removeChild(e);
          }
          return e;
        }
        insertBefore(e, t, n) {
          e.insertBefore(n, t);
        }
        insertAllBefore(e, t, n) {
          n.forEach(n => e.insertBefore(n, t));
        }
        insertAfter(e, t, n) {
          e.insertBefore(n, t.nextSibling);
        }
        setInnerHTML(e, t) {
          e.innerHTML = t;
        }
        getText(e) {
          return e.textContent;
        }
        setText(e, t) {
          e.textContent = t;
        }
        getValue(e) {
          return e.value;
        }
        setValue(e, t) {
          e.value = t;
        }
        getChecked(e) {
          return e.checked;
        }
        setChecked(e, t) {
          e.checked = t;
        }
        createComment(e) {
          return this.getDefaultDocument().createComment(e);
        }
        createTemplate(e) {
          const t = this.getDefaultDocument().createElement('template');
          t.innerHTML = e;
          return t;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createElementNS(e, t, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }
        createTextNode(e, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(e);
        }
        createScriptTag(e, t, n) {
          const r = (n = n || this.getDefaultDocument()).createElement(
            'SCRIPT'
          );
          r.setAttribute(e, t);
          return r;
        }
        createStyleElement(e, t) {
          const n = (t = t || this.getDefaultDocument()).createElement('style');
          this.appendChild(n, this.createTextNode(e, t));
          return n;
        }
        createShadowRoot(e) {
          return e.createShadowRoot();
        }
        getShadowRoot(e) {
          return e.shadowRoot;
        }
        getHost(e) {
          return e.host;
        }
        clone(e) {
          return e.cloneNode(true);
        }
        getElementsByClassName(e, t) {
          return e.getElementsByClassName(t);
        }
        getElementsByTagName(e, t) {
          return e.getElementsByTagName(t);
        }
        classList(e) {
          return Array.prototype.slice.call(e.classList, 0);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        hasClass(e, t) {
          return e.classList.contains(t);
        }
        setStyle(e, t, n) {
          e.style[t] = n;
        }
        removeStyle(e, t) {
          e.style[t] = '';
        }
        getStyle(e, t) {
          return e.style[t];
        }
        hasStyle(e, t, n) {
          const r = this.getStyle(e, t) || '';
          if (n) {
            return r == n;
          } else {
            return r.length > 0;
          }
        }
        tagName(e) {
          return e.tagName;
        }
        attributeMap(e) {
          const t = new Map();
          const n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r);
            t.set(e.name, e.value);
          }
          return t;
        }
        hasAttribute(e, t) {
          return e.hasAttribute(t);
        }
        hasAttributeNS(e, t, n) {
          return e.hasAttributeNS(t, n);
        }
        getAttribute(e, t) {
          return e.getAttribute(t);
        }
        getAttributeNS(e, t, n) {
          return e.getAttributeNS(t, n);
        }
        setAttribute(e, t, n) {
          e.setAttribute(t, n);
        }
        setAttributeNS(e, t, n, r) {
          e.setAttributeNS(t, n, r);
        }
        removeAttribute(e, t) {
          e.removeAttribute(t);
        }
        removeAttributeNS(e, t, n) {
          e.removeAttributeNS(t, n);
        }
        templateAwareRoot(e) {
          if (this.isTemplateElement(e)) {
            return this.content(e);
          } else {
            return e;
          }
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (t) {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0,
            };
          }
        }
        getTitle(e) {
          return e.title;
        }
        setTitle(e, t) {
          e.title = t || '';
        }
        elementMatches(e, t) {
          return (
            !!this.isElementNode(e) &&
            ((e.matches && e.matches(t)) ||
              (e.msMatchesSelector && e.msMatchesSelector(t)) ||
              (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(e) {
          return this.isElementNode(e) && e.nodeName === 'TEMPLATE';
        }
        isTextNode(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(e) {
          return e.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(e) {
          return e.shadowRoot != null && e instanceof HTMLElement;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        importIntoDoc(e) {
          return document.importNode(this.templateAwareRoot(e), true);
        }
        adoptNode(e) {
          return document.adoptNode(e);
        }
        getHref(e) {
          return e.getAttribute('href');
        }
        getEventKey(e) {
          let t = e.key;
          if (t == null) {
            t = e.keyIdentifier;
            if (t == null) {
              return 'Unidentified';
            }
            if (t.startsWith('U+')) {
              t = String.fromCharCode(parseInt(t.substring(2), 16));
              if (e.location === xu && Su.hasOwnProperty(t)) {
                t = Su[t];
              }
            }
          }
          return Eu[t] || t;
        }
        getGlobalEventTarget(e, t) {
          if (t === 'window') {
            return window;
          } else if (t === 'document') {
            return e;
          } else if (t === 'body') {
            return e.body;
          } else {
            return null;
          }
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            Ru || ((Ru = document.querySelector('base')), Ru)
              ? Ru.getAttribute('href')
              : null;
          if (t == null) {
            return null;
          } else {
            n = t;
            if (!Au) {
              Au = document.createElement('a');
            }
            Au.setAttribute('href', n);
            if (Au.pathname.charAt(0) === '/') {
              return Au.pathname;
            } else {
              return '/' + Au.pathname;
            }
          }
          var n;
        }
        resetBaseElement() {
          Ru = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(e, t, n) {
          this.setAttribute(e, 'data-' + t, n);
        }
        getData(e, t) {
          return this.getAttribute(e, 'data-' + t);
        }
        getComputedStyle(e) {
          return getComputedStyle(e);
        }
        supportsWebAnimation() {
          return typeof Element.prototype.animate == 'function';
        }
        performanceNow() {
          if (window.performance && window.performance.now) {
            return window.performance.now();
          } else {
            return new Date().getTime();
          }
        }
        supportsCookies() {
          return true;
        }
        getCookie(e) {
          return Hl(document.cookie, e);
        }
        setCookie(e, t) {
          document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
        }
      }
      let Au;
      let Ru = null;
      let Nu = (() => {
        class e extends Al {
          constructor(e) {
            super();
            this._doc = e;
            this._init();
          }
          _init() {
            this.location = _u().getLocation();
            this._history = _u().getHistory();
          }
          getBaseHrefFromDOM() {
            return _u().getBaseHref(this._doc);
          }
          onPopState(e) {
            _u()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', e, false);
          }
          onHashChange(e) {
            _u()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', e, false);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(e) {
            this.location.pathname = e;
          }
          pushState(e, t, n) {
            if (Iu()) {
              this._history.pushState(e, t, n);
            } else {
              this.location.hash = n;
            }
          }
          replaceState(e, t, n) {
            if (Iu()) {
              this._history.replaceState(e, t, n);
            } else {
              this.location.hash = n;
            }
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        e.ctorParameters = () => [
          { type: void 0, decorators: [{ type: le, args: [Kl] }] },
        ];
        return e;
      })();
      const Pu = new Se('TRANSITION_ID');
      const Ou = [
        {
          provide: Ms,
          useFactory: function(e, t, n) {
            return () => {
              n.get(Ds).donePromise.then(() => {
                const n = _u();
                Array.prototype.slice
                  .apply(n.querySelectorAll(t, 'style[ng-transition]'))
                  .filter(t => n.getAttribute(t, 'ng-transition') === e)
                  .forEach(e => n.remove(e));
              });
            };
          },
          deps: [Pu, Kl, Mt],
          multi: true,
        },
      ];
      class Mu {
        static init() {
          var e = new Mu();
          vi = e;
        }
        addToWindow(e) {
          Ee.getAngularTestability = (t, n = true) => {
            const r = e.findTestabilityInTree(t, n);
            if (r == null) {
              throw new Error('Could not find testability for element.');
            }
            return r;
          };
          Ee.getAllAngularTestabilities = () => e.getAllTestabilities();
          Ee.getAllAngularRootElements = () => e.getAllRootElements();
          if (!Ee.frameworkStabilizers) {
            Ee.frameworkStabilizers = [];
          }
          Ee.frameworkStabilizers.push(e => {
            const t = Ee.getAllAngularTestabilities();
            let n = t.length;
            let r = false;
            const s = function(t) {
              r = r || t;
              n--;
              if (n == 0) {
                e(r);
              }
            };
            t.forEach(function(e) {
              e.whenStable(s);
            });
          });
        }
        findTestabilityInTree(e, t, n) {
          if (t == null) {
            return null;
          }
          const r = e.getTestability(t);
          if (r == null) {
            if (n) {
              if (_u().isShadowRoot(t)) {
                return this.findTestabilityInTree(e, _u().getHost(t), true);
              } else {
                return this.findTestabilityInTree(
                  e,
                  _u().parentElement(t),
                  true
                );
              }
            } else {
              return null;
            }
          } else {
            return r;
          }
        }
      }
      const Vu = (() => ({ ApplicationRef: ki, NgZone: li }))();
      const Lu = new Se('EventManagerPlugins');
      class Fu {
        constructor(e, t) {
          this._zone = t;
          this._eventNameToPlugin = new Map();
          e.forEach(e => (e.manager = this));
          this._plugins = e.slice().reverse();
        }
        addEventListener(e, t, n) {
          return this._findPluginFor(t).addEventListener(e, t, n);
        }
        addGlobalEventListener(e, t, n) {
          return this._findPluginFor(t).addGlobalEventListener(e, t, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(e) {
          const t = this._eventNameToPlugin.get(e);
          if (t) {
            return t;
          }
          const n = this._plugins;
          for (let r = 0; r < n.length; r++) {
            const t = n[r];
            if (t.supports(e)) {
              this._eventNameToPlugin.set(e, t);
              return t;
            }
          }
          throw new Error(`No event manager plugin found for event ${e}`);
        }
      }
      class ju {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = _u().getGlobalEventTarget(this._doc, e);
          if (!r) {
            throw new Error(`Unsupported event target ${r} for event ${t}`);
          }
          return this.addEventListener(r, t, n);
        }
      }
      class Hu {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(e) {
          const t = new Set();
          e.forEach(e => {
            if (!this._stylesSet.has(e)) {
              this._stylesSet.add(e);
              t.add(e);
            }
          });
          this.onStylesAdded(t);
        }
        onStylesAdded(e) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class $u extends Hu {
        constructor(e) {
          super();
          this._doc = e;
          this._hostNodes = new Set();
          this._styleNodes = new Set();
          this._hostNodes.add(e.head);
        }
        _addStylesToHost(e, t) {
          e.forEach(e => {
            const n = this._doc.createElement('style');
            n.textContent = e;
            this._styleNodes.add(t.appendChild(n));
          });
        }
        addHost(e) {
          this._addStylesToHost(this._stylesSet, e);
          this._hostNodes.add(e);
        }
        removeHost(e) {
          this._hostNodes.delete(e);
        }
        onStylesAdded(e) {
          this._hostNodes.forEach(t => this._addStylesToHost(e, t));
        }
        ngOnDestroy() {
          this._styleNodes.forEach(e => _u().remove(e));
        }
      }
      const zu = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: 'http://www.w3.org/1999/xhtml',
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      };
      const Bu = /%COMP%/g;
      const qu = '_nghost-%COMP%';
      const Qu = '_ngcontent-%COMP%';
      class Zu {
        constructor(e, t, n) {
          this.eventManager = e;
          this.sharedStylesHost = t;
          this.appId = n;
          this.rendererByCompId = new Map();
          this.defaultRenderer = new Ku(e);
        }
        createRenderer(e, t) {
          if (!e || !t) {
            return this.defaultRenderer;
          }
          switch (t.encapsulation) {
            case qe.Emulated: {
              let n = this.rendererByCompId.get(t.id);
              if (!n) {
                n = new Xu(
                  this.eventManager,
                  this.sharedStylesHost,
                  t,
                  this.appId
                );
                this.rendererByCompId.set(t.id, n);
              }
              n.applyToHost(e);
              return n;
            }
            case qe.Native:
            case qe.ShadowDom:
              return new ec(this.eventManager, this.sharedStylesHost, e, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const e = Gu(t.id, t.styles, []);
                this.sharedStylesHost.addStyles(e);
                this.rendererByCompId.set(t.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class Ku {
        constructor(e) {
          this.eventManager = e;
          this.data = Object.create(null);
        }
        destroy() {}
        createElement(e, t) {
          if (t) {
            return document.createElementNS(zu[t] || t, e);
          } else {
            return document.createElement(e);
          }
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          if (e) {
            e.insertBefore(t, n);
          }
        }
        removeChild(e, t) {
          if (e) {
            e.removeChild(t);
          }
        }
        selectRootElement(e, t) {
          let n = typeof e == 'string' ? document.querySelector(e) : e;
          if (!n) {
            throw new Error(`The selector "${e}" did not match any elements`);
          }
          if (!t) {
            n.textContent = '';
          }
          return n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ':' + t;
            const s = zu[r];
            if (s) {
              e.setAttributeNS(s, t, n);
            } else {
              e.setAttribute(t, n);
            }
          } else {
            e.setAttribute(t, n);
          }
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = zu[n];
            if (r) {
              e.removeAttributeNS(r, t);
            } else {
              e.removeAttribute(`${n}:${t}`);
            }
          } else {
            e.removeAttribute(t);
          }
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          if (r & fn.DashCase) {
            e.style.setProperty(t, n, r & fn.Important ? 'important' : '');
          } else {
            e.style[t] = n;
          }
        }
        removeStyle(e, t, n) {
          if (n & fn.DashCase) {
            e.style.removeProperty(t);
          } else {
            e.style[t] = '';
          }
        }
        setProperty(e, t, n) {
          Yu(t, 'property');
          e[t] = n;
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          Yu(t, 'listener');
          if (typeof e == 'string') {
            return this.eventManager.addGlobalEventListener(e, t, Wu(n));
          } else {
            return this.eventManager.addEventListener(e, t, Wu(n));
          }
        }
      }
      const Ju = (() => '@'.charCodeAt(0))();
      class Xu extends Ku {
        constructor(e, t, n, r) {
          super(e);
          this.component = n;
          const s = Gu(r + '-' + n.id, n.styles, []);
          t.addStyles(s);
          this.contentAttr = Qu.replace(Bu, r + '-' + n.id);
          this.hostAttr = (function() {
            var e = r + '-' + n.id;
            return qu.replace(Bu, e);
          })();
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, '');
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          super.setAttribute(n, this.contentAttr, '');
          return n;
        }
      }
      class ec extends Ku {
        constructor(e, t, n, r) {
          super(e);
          this.sharedStylesHost = t;
          this.hostEl = n;
          this.component = r;
          this.shadowRoot =
            r.encapsulation === qe.ShadowDom
              ? n.attachShadow({ mode: 'open' })
              : n.createShadowRoot();
          this.sharedStylesHost.addHost(this.shadowRoot);
          const s = Gu(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const e = document.createElement('style');
            e.textContent = s[i];
            this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          if (e === this.hostEl) {
            return this.shadowRoot;
          } else {
            return e;
          }
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      const tc = (() =>
        (typeof Zone != 'undefined' && Zone.__symbol__) ||
        function(e) {
          return '__zone_symbol__' + e;
        })();
      const nc = tc('addEventListener');
      const rc = tc('removeEventListener');
      const sc = {};
      const ic = 'FALSE';
      const oc = 'ANGULAR';
      const lc = 'addEventListener';
      const ac = 'removeEventListener';
      const uc = '__zone_symbol__propagationStopped';
      const cc = '__zone_symbol__stopImmediatePropagation';
      const hc = (() => {
        const e = typeof Zone != 'undefined' && Zone[tc('BLACK_LISTED_EVENTS')];
        if (e) {
          const t = {};
          e.forEach(e => {
            t[e] = e;
          });
          return t;
        }
      })();
      const dc = function(e) {
        return !!hc && hc.hasOwnProperty(e);
      };
      const pc = function(e) {
        const t = sc[e.type];
        if (!t) {
          return;
        }
        const n = this[t];
        if (!n) {
          return;
        }
        const r = [e];
        if (n.length === 1) {
          const e = n[0];
          if (e.zone === Zone.current) {
            return e.handler.apply(this, r);
          } else {
            return e.zone.run(e.handler, this, r);
          }
        }
        {
          const t = n.slice();
          for (let n = 0; n < t.length && e[uc] !== true; n++) {
            const e = t[n];
            if (e.zone === Zone.current) {
              e.handler.apply(this, r);
            } else {
              e.zone.run(e.handler, this, r);
            }
          }
        }
      };
      class fc extends ju {
        constructor(e, t, n) {
          super(e);
          this.ngZone = t;
          if (
            !n ||
            !(function() {
              var e = n;
              return e === Jl;
            })()
          ) {
            this.patchEvent();
          }
        }
        patchEvent() {
          if (typeof Event == 'undefined' || !Event || !Event.prototype) {
            return;
          }
          if (Event.prototype[cc]) {
            return;
          }
          const e = (Event.prototype[cc] =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function() {
            if (this) {
              this[uc] = true;
            }
            if (e) {
              e.apply(this, arguments);
            }
          };
        }
        supports(e) {
          return true;
        }
        addEventListener(e, t, n) {
          let r = n;
          if (!e[nc] || (li.isInAngularZone() && !dc(t))) {
            e[lc](t, r, false);
          } else {
            let n = sc[t];
            if (!n) {
              n = sc[t] = tc(oc + t + ic);
            }
            let s = e[n];
            const i = s && s.length > 0;
            if (!s) {
              s = e[n] = [];
            }
            const o = dc(t) ? Zone.root : Zone.current;
            if (s.length === 0) {
              s.push({ zone: o, handler: r });
            } else {
              let e = false;
              for (let t = 0; t < s.length; t++) {
                if (s[t].handler === r) {
                  e = true;
                  break;
                }
              }
              if (!e) {
                s.push({ zone: o, handler: r });
              }
            }
            if (!i) {
              e[nc](t, pc, false);
            }
          }
          return () => this.removeEventListener(e, t, r);
        }
        removeEventListener(e, t, n) {
          let r = e[rc];
          if (!r) {
            return e[ac].apply(e, [t, n, false]);
          }
          let s = sc[t];
          let i = s && e[s];
          if (!i) {
            return e[ac].apply(e, [t, n, false]);
          }
          let o = false;
          for (let l = 0; l < i.length; l++) {
            if (i[l].handler === n) {
              o = true;
              i.splice(l, 1);
              break;
            }
          }
          if (o) {
            if (i.length === 0) {
              r.apply(e, [t, pc, false]);
            }
          } else {
            e[ac].apply(e, [t, n, false]);
          }
        }
      }
      const gc = {
        pan: true,
        panstart: true,
        panmove: true,
        panend: true,
        pancancel: true,
        panleft: true,
        panright: true,
        panup: true,
        pandown: true,
        pinch: true,
        pinchstart: true,
        pinchmove: true,
        pinchend: true,
        pinchcancel: true,
        pinchin: true,
        pinchout: true,
        press: true,
        pressup: true,
        rotate: true,
        rotatestart: true,
        rotatemove: true,
        rotateend: true,
        rotatecancel: true,
        swipe: true,
        swipeleft: true,
        swiperight: true,
        swipeup: true,
        swipedown: true,
        tap: true,
      };
      const mc = new Se('HammerGestureConfig');
      const yc = new Se('HammerLoader');
      class vc {
        constructor() {
          this.events = [];
          this.overrides = {};
        }
        buildHammer(e) {
          const t = new Hammer(e, this.options);
          t.get('pinch').set({ enable: true });
          t.get('rotate').set({ enable: true });
          for (const n in this.overrides) {
            t.get(n).set(this.overrides[n]);
          }
          return t;
        }
      }
      class _c extends ju {
        constructor(e, t, n, r) {
          super(e);
          this._config = t;
          this.console = n;
          this.loader = r;
        }
        supports(e) {
          return (
            (!!gc.hasOwnProperty(e.toLowerCase()) || !!this.isCustomEvent(e)) &&
            (!!window.Hammer ||
              !!this.loader ||
              !(this.console.warn(
                `The "${e}" event cannot be bound because Hammer.JS is not ` +
                  'loaded and no custom loader has been specified.'
              ),
              1))
          );
        }
        addEventListener(e, t, n) {
          const r = this.manager.getZone();
          t = t.toLowerCase();
          if (!window.Hammer && this.loader) {
            let r = false;
            let s = () => {
              r = true;
            };
            this.loader()
              .then(() => {
                if (!window.Hammer) {
                  this.console.warn(
                    'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                  );
                  s = () => {};
                  return;
                }
                if (!r) {
                  s = this.addEventListener(e, t, n);
                }
              })
              .catch(() => {
                this.console.warn(
                  `The "${t}" event cannot be bound because the custom ` +
                    'Hammer.JS loader failed.'
                );
                s = () => {};
              });
            return () => {
              s();
            };
          }
          return r.runOutsideAngular(() => {
            const s = this._config.buildHammer(e);
            const i = function(e) {
              r.runGuarded(function() {
                n(e);
              });
            };
            s.on(t, i);
            return () => {
              s.off(t, i);
              if (typeof s.destroy == 'function') {
                s.destroy();
              }
            };
          });
        }
        isCustomEvent(e) {
          return this._config.events.indexOf(e) > -1;
        }
      }
      const wc = ['alt', 'control', 'meta', 'shift'];
      const bc = {
        alt: e => e.altKey,
        control: e => e.ctrlKey,
        meta: e => e.metaKey,
        shift: e => e.shiftKey,
      };
      class Cc extends ju {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return Cc.parseEventName(e) != null;
        }
        addEventListener(e, t, n) {
          const r = Cc.parseEventName(t);
          const s = Cc.eventCallback(r.fullKey, n, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => _u().onAndCancel(e, r.domEventName, s));
        }
        static parseEventName(e) {
          const t = e.toLowerCase().split('.');
          const n = t.shift();
          if (t.length === 0 || (n !== 'keydown' && n !== 'keyup')) {
            return null;
          }
          const r = Cc._normalizeKey(t.pop());
          let s = '';
          wc.forEach(e => {
            const n = t.indexOf(e);
            if (n > -1) {
              t.splice(n, 1);
              s += e + '.';
            }
          });
          s += r;
          if (t.length != 0 || r.length === 0) {
            return null;
          }
          const i = {};
          i.domEventName = n;
          i.fullKey = s;
          return i;
        }
        static getEventFullKey(e) {
          let t = '';
          let n = _u().getEventKey(e);
          n = n.toLowerCase();
          if (n === ' ') {
            n = 'space';
          } else if (n === '.') {
            n = 'dot';
          }
          wc.forEach(r => {
            if (r != n && bc[r](e)) {
              t += r + '.';
            }
          });
          t += n;
          return t;
        }
        static eventCallback(e, t, n) {
          return r => {
            if (Cc.getEventFullKey(r) === e) {
              n.runGuarded(() => t(r));
            }
          };
        }
        static _normalizeKey(e) {
          switch (e) {
            case 'esc':
              return 'escape';
            default:
              return e;
          }
        }
      }
      class xc {}
      class Ec extends xc {
        constructor(e) {
          super();
          this._doc = e;
        }
        sanitize(e, t) {
          if (t == null) {
            return null;
          }
          switch (e) {
            case Et.NONE:
              return t;
            case Et.HTML:
              if (t instanceof Tc) {
                return t.changingThisBreaksApplicationSecurity;
              } else {
                this.checkNotSafeValue(t, 'HTML');
                return (function(e, t) {
                  let n = null;
                  try {
                    Ct = Ct || new rt(e);
                    let r = t ? String(t) : '';
                    n = Ct.getInertBodyElement(r);
                    let s = 5;
                    let i = r;
                    do {
                      if (s === 0) {
                        throw new Error(
                          'Failed to sanitize html because the input is unstable'
                        );
                      }
                      s--;
                      r = i;
                      i = n.innerHTML;
                      n = Ct.getInertBodyElement(r);
                    } while (r !== i);
                    const o = new vt();
                    const l = o.sanitizeChildren(xt(n) || n);
                    if (nt() && o.sanitizedSomething) {
                      console.warn(
                        'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                      );
                    }
                    return l;
                  } finally {
                    if (n) {
                      const e = xt(n) || n;
                      while (e.firstChild) {
                        e.removeChild(e.firstChild);
                      }
                    }
                  }
                })(this._doc, String(t));
              }
            case Et.STYLE:
              if (t instanceof kc) {
                return t.changingThisBreaksApplicationSecurity;
              } else {
                this.checkNotSafeValue(t, 'Style');
                return (function(e) {
                  if (!(e = String(e).trim())) {
                    return '';
                  }
                  const t = e.match(kt);
                  if (
                    (t && ot(t[1]) === t[1]) ||
                    (e.match(Tt) &&
                      (function(e) {
                        let t = true;
                        let n = true;
                        for (let r = 0; r < e.length; r++) {
                          const s = e.charAt(r);
                          if (s === "'" && n) {
                            t = !t;
                          } else if (s === '"' && t) {
                            n = !n;
                          }
                        }
                        return t && n;
                      })(e))
                  ) {
                    return e;
                  } else {
                    if (nt()) {
                      console.warn(
                        `WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`
                      );
                    }
                    return 'unsafe';
                  }
                })(t);
              }
            case Et.SCRIPT:
              if (t instanceof Ac) {
                return t.changingThisBreaksApplicationSecurity;
              }
              this.checkNotSafeValue(t, 'Script');
              throw new Error('unsafe value used in a script context');
            case Et.URL:
              if (t instanceof Ic || t instanceof Rc) {
                return t.changingThisBreaksApplicationSecurity;
              } else {
                this.checkNotSafeValue(t, 'URL');
                return ot(String(t));
              }
            case Et.RESOURCE_URL:
              if (t instanceof Ic) {
                return t.changingThisBreaksApplicationSecurity;
              }
              this.checkNotSafeValue(t, 'ResourceURL');
              throw new Error(
                'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
              );
            default:
              throw new Error(
                `Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`
              );
          }
        }
        checkNotSafeValue(e, t) {
          if (e instanceof Sc) {
            throw new Error(
              `Required a safe ${t}, got a ${e.getTypeName()} ` +
                '(see http://g.co/ng/security#xss)'
            );
          }
        }
        bypassSecurityTrustHtml(e) {
          return new Tc(e);
        }
        bypassSecurityTrustStyle(e) {
          return new kc(e);
        }
        bypassSecurityTrustScript(e) {
          return new Ac(e);
        }
        bypassSecurityTrustUrl(e) {
          return new Rc(e);
        }
        bypassSecurityTrustResourceUrl(e) {
          return new Ic(e);
        }
      }
      class Sc {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${
              this.changingThisBreaksApplicationSecurity
            }` + ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class Tc extends Sc {
        getTypeName() {
          return 'HTML';
        }
      }
      class kc extends Sc {
        getTypeName() {
          return 'Style';
        }
      }
      class Ac extends Sc {
        getTypeName() {
          return 'Script';
        }
      }
      class Rc extends Sc {
        getTypeName() {
          return 'URL';
        }
      }
      class Ic extends Sc {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const Nc = xi($i, 'browser', [
        { provide: js, useValue: 'browser' },
        {
          provide: Fs,
          useValue: function() {
            ku.makeCurrent();
            Mu.init();
          },
          multi: true,
        },
        { provide: Al, useClass: Nu, deps: [Kl] },
        {
          provide: Kl,
          useFactory: function() {
            return document;
          },
          deps: [],
        },
      ]);
      class Oc {
        constructor(e) {
          if (e) {
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
          }
        }
        static withServerTransition(e) {
          return {
            ngModule: Oc,
            providers: [
              { provide: Vs, useValue: e.appId },
              { provide: Pu, useExisting: Vs },
              Ou,
            ],
          };
        }
      }
      if (typeof window != 'undefined') {
        window;
      }
      class Mc {
        constructor(e, t) {
          this.id = e;
          this.url = t;
        }
      }
      class Dc extends Mc {
        constructor(e, t, n = 'imperative', r = null) {
          super(e, t);
          this.navigationTrigger = n;
          this.restoredState = r;
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Vc extends Mc {
        constructor(e, t, n) {
          super(e, t);
          this.urlAfterRedirects = n;
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${
            this.url
          }', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Uc extends Mc {
        constructor(e, t, n) {
          super(e, t);
          this.reason = n;
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Lc extends Mc {
        constructor(e, t, n) {
          super(e, t);
          this.error = n;
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${
            this.error
          })`;
        }
      }
      class Fc extends Mc {
        constructor(e, t, n, r) {
          super(e, t);
          this.urlAfterRedirects = n;
          this.state = r;
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${
            this.url
          }', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${
            this.state
          })`;
        }
      }
      class jc extends Mc {
        constructor(e, t, n, r) {
          super(e, t);
          this.urlAfterRedirects = n;
          this.state = r;
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${
            this.url
          }', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${
            this.state
          })`;
        }
      }
      class Hc extends Mc {
        constructor(e, t, n, r, s) {
          super(e, t);
          this.urlAfterRedirects = n;
          this.state = r;
          this.shouldActivate = s;
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${
            this.url
          }', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${
            this.state
          }, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class $c extends Mc {
        constructor(e, t, n, r) {
          super(e, t);
          this.urlAfterRedirects = n;
          this.state = r;
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${
            this.url
          }', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${
            this.state
          })`;
        }
      }
      class zc extends Mc {
        constructor(e, t, n, r) {
          super(e, t);
          this.urlAfterRedirects = n;
          this.state = r;
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${
            this.url
          }', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${
            this.state
          })`;
        }
      }
      class Bc {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class qc {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Qc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Gc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Wc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Zc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Kc {
        constructor(e, t, n) {
          this.routerEvent = e;
          this.position = t;
          this.anchor = n;
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Jc {}
      const Yc = 'primary';
      class Xc {
        constructor(e) {
          this.params = e || {};
        }
        has(e) {
          return this.params.hasOwnProperty(e);
        }
        get(e) {
          if (this.has(e)) {
            const t = this.params[e];
            if (Array.isArray(t)) {
              return t[0];
            } else {
              return t;
            }
          }
          return null;
        }
        getAll(e) {
          if (this.has(e)) {
            const t = this.params[e];
            if (Array.isArray(t)) {
              return t;
            } else {
              return [t];
            }
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      const th = 'ngNavigationCancelingError';
      class sh {
        constructor(e, t) {
          this.routes = e;
          this.module = t;
        }
      }
      class gh {
        constructor(e, t, n) {
          this.root = e;
          this.queryParams = t;
          this.fragment = n;
        }
        get queryParamMap() {
          if (!this._queryParamMap) {
            this._queryParamMap = eh(this.queryParams);
          }
          return this._queryParamMap;
        }
        toString() {
          return Ch.serialize(this);
        }
      }
      class mh {
        constructor(e, t) {
          this.segments = e;
          this.children = t;
          this.parent = null;
          dh(t, (e, t) => (e.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return xh(this);
        }
      }
      class yh {
        constructor(e, t) {
          this.path = e;
          this.parameters = t;
        }
        get parameterMap() {
          if (!this._parameterMap) {
            this._parameterMap = eh(this.parameters);
          }
          return this._parameterMap;
        }
        toString() {
          return Rh(this);
        }
      }
      class wh {}
      class bh {
        parse(e) {
          const t = new Mh(e);
          return new gh(
            t.parseRootSegment(),
            t.parseQueryParams(),
            t.parseFragment()
          );
        }
        serialize(e) {
          var t;
          return `${`/${(function e(t, n) {
            if (!t.hasChildren()) {
              return xh(t);
            }
            if (n) {
              const n = t.children[Yc] ? e(t.children[Yc], false) : '';
              const r = [];
              dh(t.children, (t, n) => {
                if (n !== Yc) {
                  r.push(`${n}:${e(t, false)}`);
                }
              });
              if (r.length > 0) {
                return `${n}(${r.join('//')})`;
              } else {
                return n;
              }
            }
            {
              const n = _h(
                t,
                (n, r) =>
                  r === Yc
                    ? [e(t.children[Yc], false)]
                    : [`${r}:${e(n, false)}`]
              );
              return `${xh(t)}/(${n.join('//')})`;
            }
          })(e.root, true)}`}${(function(e) {
            const t = Object.keys(e).map(t => {
              const n = e[t];
              if (Array.isArray(n)) {
                return n.map(e => `${Sh(t)}=${Sh(e)}`).join('&');
              } else {
                return `${Sh(t)}=${Sh(n)}`;
              }
            });
            if (t.length) {
              return `?${t.join('&')}`;
            } else {
              return '';
            }
          })(e.queryParams)}${
            typeof e.fragment == 'string'
              ? `#${((t = e.fragment), encodeURI(t))}`
              : ''
          }`;
        }
      }
      const Ch = new bh();
      const Ih = /^[^\/()?;=#]+/;
      const Ph = /^[^=?&#]+/;
      const Oh = /^[^?&#]+/;
      class Mh {
        constructor(e) {
          this.url = e;
          this.remaining = e;
        }
        parseRootSegment() {
          this.consumeOptional('/');
          if (
            this.remaining === '' ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
          ) {
            return new mh([], {});
          } else {
            return new mh([], this.parseChildren());
          }
        }
        parseQueryParams() {
          const e = {};
          if (this.consumeOptional('?')) {
            do {
              this.parseQueryParam(e);
            } while (this.consumeOptional('&'));
          }
          return e;
        }
        parseFragment() {
          if (this.consumeOptional('#')) {
            return decodeURIComponent(this.remaining);
          } else {
            return null;
          }
        }
        parseChildren() {
          if (this.remaining === '') {
            return {};
          }
          this.consumeOptional('/');
          const e = [];
          for (
            this.peekStartsWith('(') || e.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          ) {
            this.capture('/');
            e.push(this.parseSegment());
          }
          let t = {};
          if (this.peekStartsWith('/(')) {
            this.capture('/');
            t = this.parseParens(true);
          }
          let n = {};
          if (this.peekStartsWith('(')) {
            n = this.parseParens(false);
          }
          if (e.length > 0 || Object.keys(t).length > 0) {
            n[Yc] = new mh(e, t);
          }
          return n;
        }
        parseSegment() {
          const e = Nh(this.remaining);
          if (e === '' && this.peekStartsWith(';')) {
            throw new Error(
              `Empty path url segment cannot have parameters: '${
                this.remaining
              }'.`
            );
          }
          this.capture(e);
          return new yh(kh(e), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const e = {};
          while (this.consumeOptional(';')) {
            this.parseParam(e);
          }
          return e;
        }
        parseParam(e) {
          const t = Nh(this.remaining);
          if (!t) {
            return;
          }
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = Nh(this.remaining);
            if (e) {
              n = e;
              this.capture(n);
            }
          }
          e[kh(t)] = kh(n);
        }
        parseQueryParam(e) {
          const t = (function(e) {
            const t = e.match(Ph);
            if (t) {
              return t[0];
            } else {
              return '';
            }
          })(this.remaining);
          if (!t) {
            return;
          }
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = (function(e) {
              const t = e.match(Oh);
              if (t) {
                return t[0];
              } else {
                return '';
              }
            })(this.remaining);
            if (e) {
              n = e;
              this.capture(n);
            }
          }
          const r = Ah(t);
          const s = Ah(n);
          if (e.hasOwnProperty(r)) {
            let t = e[r];
            if (!Array.isArray(t)) {
              t = [t];
              e[r] = t;
            }
            t.push(s);
          } else {
            e[r] = s;
          }
        }
        parseParens(e) {
          const t = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const n = Nh(this.remaining);
            const r = this.remaining[n.length];
            if (r !== '/' && r !== ')' && r !== ';') {
              throw new Error(`Cannot parse url '${this.url}'`);
            }
            let s = void 0;
            if (n.indexOf(':') > -1) {
              s = n.substr(0, n.indexOf(':'));
              this.capture(s);
              this.capture(':');
            } else if (e) {
              s = Yc;
            }
            const i = this.parseChildren();
            t[s] = Object.keys(i).length === 1 ? i[Yc] : new mh([], i);
            this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(e) {
          return this.remaining.startsWith(e);
        }
        consumeOptional(e) {
          return (
            !!this.peekStartsWith(e) &&
            ((this.remaining = this.remaining.substring(e.length)), true)
          );
        }
        capture(e) {
          if (!this.consumeOptional(e)) {
            throw new Error(`Expected "${e}".`);
          }
        }
      }
      class Dh {
        constructor(e) {
          this._root = e;
        }
        get root() {
          return this._root.value;
        }
        parent(e) {
          const t = this.pathFromRoot(e);
          if (t.length > 1) {
            return t[t.length - 2];
          } else {
            return null;
          }
        }
        children(e) {
          const t = Vh(e, this._root);
          if (t) {
            return t.children.map(e => e.value);
          } else {
            return [];
          }
        }
        firstChild(e) {
          const t = Vh(e, this._root);
          if (t && t.children.length > 0) {
            return t.children[0].value;
          } else {
            return null;
          }
        }
        siblings(e) {
          const t = Uh(e, this._root);
          if (t.length < 2) {
            return [];
          } else {
            return t[t.length - 2].children
              .map(e => e.value)
              .filter(t => t !== e);
          }
        }
        pathFromRoot(e) {
          return Uh(e, this._root).map(e => e.value);
        }
      }
      class Lh {
        constructor(e, t) {
          this.value = e;
          this.children = t;
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      class jh extends Dh {
        constructor(e, t) {
          super(e);
          this.snapshot = t;
          Qh(this, e);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      class $h {
        constructor(e, t, n, r, s, i, o, l) {
          this.url = e;
          this.params = t;
          this.queryParams = n;
          this.fragment = r;
          this.data = s;
          this.outlet = i;
          this.component = o;
          this._futureSnapshot = l;
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          if (!this._paramMap) {
            this._paramMap = this.params.pipe($(e => eh(e)));
          }
          return this._paramMap;
        }
        get queryParamMap() {
          if (!this._queryParamMap) {
            this._queryParamMap = this.queryParams.pipe($(e => eh(e)));
          }
          return this._queryParamMap;
        }
        toString() {
          if (this.snapshot) {
            return this.snapshot.toString();
          } else {
            return `Future(${this._futureSnapshot})`;
          }
        }
      }
      class Bh {
        constructor(e, t, n, r, s, i, o, l, a, u, c) {
          this.url = e;
          this.params = t;
          this.queryParams = n;
          this.fragment = r;
          this.data = s;
          this.outlet = i;
          this.component = o;
          this.routeConfig = l;
          this._urlSegment = a;
          this._lastPathIndex = u;
          this._resolve = c;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          if (!this._paramMap) {
            this._paramMap = eh(this.params);
          }
          return this._paramMap;
        }
        get queryParamMap() {
          if (!this._queryParamMap) {
            this._queryParamMap = eh(this.queryParams);
          }
          return this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url
            .map(e => e.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class qh extends Dh {
        constructor(e, t) {
          super(t);
          this.url = e;
          Qh(this, t);
        }
        toString() {
          return Gh(this._root);
        }
      }
      class Yh {
        constructor(e, t, n) {
          this.isAbsolute = e;
          this.numberOfDoubleDots = t;
          this.commands = n;
          if (e && n.length > 0 && Kh(n[0])) {
            throw new Error('Root segment cannot have matrix parameters');
          }
          const r = n.find(e => typeof e == 'object' && e != null && e.outlets);
          if (r && r !== hh(n)) {
            throw new Error('{outlets:{}} has to be the last command');
          }
        }
        toRoot() {
          return (
            this.isAbsolute &&
            this.commands.length === 1 &&
            this.commands[0] == '/'
          );
        }
      }
      class Xh {
        constructor(e, t, n) {
          this.segmentGroup = e;
          this.processChildren = t;
          this.index = n;
        }
      }
      const ld = (e, t, n) =>
        $(
          r => (
            new ad(t, r.targetRouterState, r.currentRouterState, n).activate(e),
            r
          )
        );
      class ad {
        constructor(e, t, n, r) {
          this.routeReuseStrategy = e;
          this.futureState = t;
          this.currState = n;
          this.forwardEvent = r;
        }
        activate(e) {
          const t = this.futureState._root;
          const n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e);
          Wh(this.futureState.root);
          this.activateChildRoutes(t, n, e);
        }
        deactivateChildRoutes(e, t, n) {
          const r = Fh(t);
          e.children.forEach(e => {
            const t = e.value.outlet;
            this.deactivateRoutes(e, r[t], n);
            delete r[t];
          });
          dh(r, (e, t) => {
            this.deactivateRouteAndItsChildren(e, n);
          });
        }
        deactivateRoutes(e, t, n) {
          const r = e.value;
          const s = t ? t.value : null;
          if (r === s) {
            if (r.component) {
              const s = n.getContext(r.outlet);
              if (s) {
                this.deactivateChildRoutes(e, t, s.children);
              }
            } else {
              this.deactivateChildRoutes(e, t, n);
            }
          } else if (s) {
            this.deactivateRouteAndItsChildren(t, n);
          }
        }
        deactivateRouteAndItsChildren(e, t) {
          if (this.routeReuseStrategy.shouldDetach(e.value.snapshot)) {
            this.detachAndStoreRouteSubtree(e, t);
          } else {
            this.deactivateRouteAndOutlet(e, t);
          }
        }
        detachAndStoreRouteSubtree(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            const t = n.outlet.detach();
            const r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, {
              componentRef: t,
              route: e,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n) {
            const r = Fh(e);
            const s = e.value.component ? n.children : t;
            dh(r, (e, t) => this.deactivateRouteAndItsChildren(e, s));
            if (n.outlet) {
              n.outlet.deactivate();
              n.children.onOutletDeactivated();
            }
          }
        }
        activateChildRoutes(e, t, n) {
          const r = Fh(t);
          e.children.forEach(e => {
            this.activateRoutes(e, r[e.value.outlet], n);
            this.forwardEvent(new Zc(e.value.snapshot));
          });
          if (e.children.length) {
            this.forwardEvent(new Gc(e.value.snapshot));
          }
        }
        activateRoutes(e, t, n) {
          const r = e.value;
          const s = t ? t.value : null;
          Wh(r);
          if (r === s) {
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, s.children);
            } else {
              this.activateChildRoutes(e, t, n);
            }
          } else if (r.component) {
            const t = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const e = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null);
              t.children.onOutletReAttached(e.contexts);
              t.attachRef = e.componentRef;
              t.route = e.route.value;
              if (t.outlet) {
                t.outlet.attach(e.componentRef, e.route.value);
              }
              ud(e.route);
            } else {
              const n = (function() {
                var e = r.snapshot;
                for (let t = e.parent; t; t = t.parent) {
                  const e = t.routeConfig;
                  if (e && e._loadedConfig) {
                    return e._loadedConfig;
                  }
                  if (e && e.component) {
                    return null;
                  }
                }
                return null;
              })();
              const s = n ? n.module.componentFactoryResolver : null;
              t.attachRef = null;
              t.route = r;
              t.resolver = s;
              if (t.outlet) {
                t.outlet.activateWith(r, s);
              }
              this.activateChildRoutes(e, null, t.children);
            }
          } else {
            this.activateChildRoutes(e, null, n);
          }
        }
      }
      class dd {
        constructor(e) {
          this.segmentGroup = e || null;
        }
      }
      class pd {
        constructor(e) {
          this.urlTree = e;
        }
      }
      class yd {
        constructor(e, t, n, r, s) {
          this.configLoader = t;
          this.urlSerializer = n;
          this.urlTree = r;
          this.config = s;
          this.allowRedirects = true;
          this.ngModule = e.get(He);
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            Yc
          )
            .pipe(
              $(e =>
                this.createUrlTree(
                  e,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              tu(e => {
                if (e instanceof pd) {
                  this.allowRedirects = false;
                  return this.match(e.urlTree);
                }
                if (e instanceof dd) {
                  throw this.noMatchError(e);
                }
                throw e;
              })
            );
        }
        match(e) {
          return this.expandSegmentGroup(this.ngModule, this.config, e.root, Yc)
            .pipe($(t => this.createUrlTree(t, e.queryParams, e.fragment)))
            .pipe(
              tu(e => {
                if (e instanceof dd) {
                  throw this.noMatchError(e);
                }
                throw e;
              })
            );
        }
        noMatchError(e) {
          return new Error(
            `Cannot match any routes. URL Segment: '${e.segmentGroup}'`
          );
        }
        createUrlTree(e, t, n) {
          const r = e.segments.length > 0 ? new mh([], { [Yc]: e }) : e;
          return new gh(r, t, n);
        }
        expandSegmentGroup(e, t, n, r) {
          if (n.segments.length === 0 && n.hasChildren()) {
            return this.expandChildren(e, t, n).pipe($(e => new mh([], e)));
          } else {
            return this.expandSegment(e, n, t, n.segments, r, true);
          }
        }
        expandChildren(e, t, n) {
          return (function(e, t) {
            if (Object.keys(e).length === 0) {
              return xl({});
            }
            const n = [];
            const r = [];
            const s = {};
            dh(e, (e, i) => {
              const o = t(i, e).pipe($(e => (s[i] = e)));
              if (i === Yc) {
                n.push(o);
              } else {
                r.push(o);
              }
            });
            return xl.apply(null, n.concat(r)).pipe(ja(), eu(), $(() => s));
          })(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
        }
        expandSegment(e, t, n, r, s, i) {
          return xl(...n).pipe(
            $(o =>
              this.expandSegmentAgainstRoute(e, t, n, o, r, s, i).pipe(
                tu(e => {
                  if (e instanceof dd) {
                    return xl(null);
                  }
                  throw e;
                })
              )
            ),
            ja(),
            lu(e => !!e),
            tu((e, n) => {
              if (e instanceof Da || e.name === 'EmptyError') {
                if (this.noLeftoversInUrl(t, r, s)) {
                  return xl(new mh([], {}));
                }
                throw new dd(t);
              }
              throw e;
            })
          );
        }
        noLeftoversInUrl(e, t, n) {
          return t.length === 0 && !e.children[n];
        }
        expandSegmentAgainstRoute(e, t, n, r, s, i, o) {
          if (bd(r) === i) {
            if (r.redirectTo === void 0) {
              return this.matchSegmentAgainstRoute(e, t, r, s);
            } else if (o && this.allowRedirects) {
              return this.expandSegmentAgainstRouteUsingRedirect(
                e,
                t,
                n,
                r,
                s,
                i
              );
            } else {
              return fd(t);
            }
          } else {
            return fd(t);
          }
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          if (r.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(
              e,
              n,
              r,
              i
            );
          } else {
            return this.expandRegularSegmentAgainstRouteUsingRedirect(
              e,
              t,
              n,
              r,
              s,
              i
            );
          }
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          if (n.redirectTo.startsWith('/')) {
            return gd(s);
          } else {
            return this.lineralizeSegments(n, s).pipe(
              G(n => {
                const s = new mh(n, {});
                return this.expandSegment(e, s, t, n, r, false);
              })
            );
          }
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: l,
            lastChild: a,
            positionalParamSegments: u,
          } = vd(t, r, s);
          if (!o) {
            return fd(t);
          }
          const c = this.applyRedirectCommands(l, r.redirectTo, u);
          if (r.redirectTo.startsWith('/')) {
            return gd(c);
          } else {
            return this.lineralizeSegments(r, c).pipe(
              G(r =>
                this.expandSegment(e, t, n, r.concat(s.slice(a)), i, false)
              )
            );
          }
        }
        matchSegmentAgainstRoute(e, t, n, r) {
          if (n.path === '**') {
            if (n.loadChildren) {
              return this.configLoader
                .load(e.injector, n)
                .pipe($(e => ((n._loadedConfig = e), new mh(r, {}))));
            } else {
              return xl(new mh(r, {}));
            }
          }
          const { matched: s, consumedSegments: i, lastChild: o } = vd(t, n, r);
          if (!s) {
            return fd(t);
          }
          const l = r.slice(o);
          return this.getChildConfig(e, n, r).pipe(
            G(e => {
              const n = e.module;
              const r = e.routes;
              const { segmentGroup: s, slicedSegments: o } = (function(
                e,
                t,
                n,
                r
              ) {
                if (
                  n.length > 0 &&
                  (function(e, t, n) {
                    return n.some(n => wd(e, t, n) && bd(n) !== Yc);
                  })(e, n, r)
                ) {
                  return {
                    segmentGroup: _d(
                      new mh(
                        t,
                        (function(e, t) {
                          const n = {};
                          n[Yc] = t;
                          for (const r of e) {
                            if (r.path === '' && bd(r) !== Yc) {
                              n[bd(r)] = new mh([], {});
                            }
                          }
                          return n;
                        })(r, new mh(n, e.children))
                      )
                    ),
                    slicedSegments: [],
                  };
                } else if (
                  n.length === 0 &&
                  (function(e, t, n) {
                    return n.some(n => wd(e, t, n));
                  })(e, n, r)
                ) {
                  return {
                    segmentGroup: _d(
                      new mh(
                        e.segments,
                        (function(e, t, n, r) {
                          const s = {};
                          for (const i of n) {
                            if (wd(e, t, i) && !r[bd(i)]) {
                              s[bd(i)] = new mh([], {});
                            }
                          }
                          return Object.assign({}, r, s);
                        })(e, n, r, e.children)
                      )
                    ),
                    slicedSegments: n,
                  };
                } else {
                  return { segmentGroup: e, slicedSegments: n };
                }
              })(t, i, l, r);
              if (o.length === 0 && s.hasChildren()) {
                return this.expandChildren(n, r, s).pipe($(e => new mh(i, e)));
              } else if (r.length === 0 && o.length === 0) {
                return xl(new mh(i, {}));
              } else {
                return this.expandSegment(n, s, r, o, Yc, true).pipe(
                  $(e => new mh(i.concat(e.segments), e.children))
                );
              }
            })
          );
        }
        getChildConfig(e, t, n) {
          if (t.children) {
            return xl(new sh(t.children, e));
          } else if (t.loadChildren) {
            if (t._loadedConfig === void 0) {
              return (function(e, t, n) {
                const r = t.canLoad;
                if (r && r.length !== 0) {
                  return Q(r)
                    .pipe(
                      $(r => {
                        const s = e.get(r);
                        let i;
                        if (
                          (function() {
                            var e = s;
                            return e && cd(e.canLoad);
                          })()
                        ) {
                          i = s.canLoad(t, n);
                        } else {
                          if (!cd(s)) {
                            throw new Error('Invalid CanLoad guard');
                          }
                          i = s(t, n);
                        }
                        return ph(i);
                      })
                    )
                    .pipe(
                      ja(),
                      ((s = e => e === true), e => e.lift(new au(s, void 0, e)))
                    );
                } else {
                  return xl(true);
                }
                var s;
              })(e.injector, t, n).pipe(
                G(
                  n =>
                    n
                      ? this.configLoader
                          .load(e.injector, t)
                          .pipe($(e => ((t._loadedConfig = e), e)))
                      : (function() {
                          var e = t;
                          return new b(t =>
                            t.error(
                              nh(
                                `Cannot load children because the guard of the route "path: '${
                                  e.path
                                }'" returned false`
                              )
                            )
                          );
                        })()
                )
              );
            } else {
              return xl(t._loadedConfig);
            }
          } else {
            return xl(new sh([], e));
          }
        }
        lineralizeSegments(e, t) {
          let n = [];
          let r = t.root;
        }
        applyRedirectCommands(e, t, n) {
          return this.applyRedirectCreatreUrlTree(
            t,
            this.urlSerializer.parse(t),
            e,
            n
          );
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
          const s = this.createSegmentGroup(e, t.root, n, r);
          return new gh(
            s,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(e, t) {
          const n = {};
          dh(e, (e, r) => {
            if (typeof e == 'string' && e.startsWith(':')) {
              const s = e.substring(1);
              n[r] = t[s];
            } else {
              n[r] = e;
            }
          });
          return n;
        }
        createSegmentGroup(e, t, n, r) {
          const s = this.createSegments(e, t.segments, n, r);
          let i = {};
          dh(t.children, (t, s) => {
            i[s] = this.createSegmentGroup(e, t, n, r);
          });
          return new mh(s, i);
        }
        createSegments(e, t, n, r) {
          return t.map(
            t =>
              t.path.startsWith(':')
                ? this.findPosParam(e, t, r)
                : this.findOrReturn(t, n)
          );
        }
        findPosParam(e, t, n) {
          const r = n[t.path.substring(1)];
          if (!r) {
            throw new Error(
              `Cannot redirect to '${e}'. Cannot find '${t.path}'.`
            );
          }
          return r;
        }
        findOrReturn(e, t) {
          let n = 0;
          for (const r of t) {
            if (r.path === e.path) {
              t.splice(n);
              return r;
            }
            n++;
          }
          return e;
        }
      }
      class Cd {
        constructor(e) {
          this.path = e;
          this.route = this.path[this.path.length - 1];
        }
      }
      class xd {
        constructor(e, t) {
          this.component = e;
          this.route = t;
        }
      }
      const kd = Symbol('INITIAL_VALUE');
      class Od {}
      class Md {
        constructor(e, t, n, r, s, i) {
          this.rootComponentType = e;
          this.config = t;
          this.urlTree = n;
          this.url = r;
          this.paramsInheritanceStrategy = s;
          this.relativeLinkResolution = i;
        }
        recognize() {
          try {
            const e = Ud(
              this.urlTree.root,
              [],
              [],
              this.config,
              this.relativeLinkResolution
            ).segmentGroup;
            const t = this.processSegmentGroup(this.config, e, Yc);
            const n = new Bh(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              Yc,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            );
            const r = new Lh(n, t);
            const s = new qh(this.url, r);
            this.inheritParamsAndData(s._root);
            return xl(s);
          } catch (e) {
            return new b(t => t.error(e));
          }
        }
        inheritParamsAndData(e) {
          const t = e.value;
          const n = zh(t, this.paramsInheritanceStrategy);
          t.params = Object.freeze(n.params);
          t.data = Object.freeze(n.data);
          e.children.forEach(e => this.inheritParamsAndData(e));
        }
        processSegmentGroup(e, t, n) {
          if (t.segments.length === 0 && t.hasChildren()) {
            return this.processChildren(e, t);
          } else {
            return this.processSegment(e, t, t.segments, n);
          }
        }
        processChildren(e, t) {
          const n = _h(t, (t, n) => this.processSegmentGroup(e, t, n));
          (function() {
            var e = n;
            const t = {};
            e.forEach(e => {
              const n = t[e.value.outlet];
              if (n) {
                const t = n.url.map(e => e.toString()).join('/');
                const r = e.value.url.map(e => e.toString()).join('/');
                throw new Error(
                  `Two segments cannot have the same outlet name: '${t}' and '${r}'.`
                );
              }
              t[e.value.outlet] = e.value;
            });
          })();
          n.sort(
            (e, t) =>
              e.value.outlet === Yc
                ? -1
                : t.value.outlet === Yc
                  ? 1
                  : e.value.outlet.localeCompare(t.value.outlet)
          );
          return n;
        }
        processSegment(e, t, n, r) {
          for (const i of e) {
            try {
              return this.processSegmentAgainstRoute(i, t, n, r);
            } catch (s) {
              if (!(s instanceof Od)) {
                throw s;
              }
            }
          }
          if (this.noLeftoversInUrl(t, n, r)) {
            return [];
          }
          throw new Od();
        }
        noLeftoversInUrl(e, t, n) {
          return t.length === 0 && !e.children[n];
        }
        processSegmentAgainstRoute(e, t, n, r) {
          if (e.redirectTo) {
            throw new Od();
          }
          if ((e.outlet || Yc) !== r) {
            throw new Od();
          }
          let s;
          let i = [];
          let o = [];
          if (e.path === '**') {
            const i = n.length > 0 ? hh(n).parameters : {};
            s = new Bh(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              jd(e),
              r,
              e.component,
              e,
              Dd(t),
              Vd(t) + n.length,
              Hd(e)
            );
          } else {
            const l = (function(e, t, n) {
              if (t.path === '') {
                if (
                  t.pathMatch === 'full' &&
                  (e.hasChildren() || n.length > 0)
                ) {
                  throw new Od();
                }
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (t.matcher || rh)(n, e, t);
              if (!r) {
                throw new Od();
              }
              const s = {};
              dh(r.posParams, (e, t) => {
                s[t] = e.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(
                      {},
                      s,
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : s;
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: i,
              };
            })(t, e, n);
            i = l.consumedSegments;
            o = n.slice(l.lastChild);
            s = new Bh(
              i,
              l.parameters,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              jd(e),
              r,
              e.component,
              e,
              Dd(t),
              Vd(t) + i.length,
              Hd(e)
            );
          }
          const l = (function(e) {
            if (e.children) {
              return e.children;
            } else if (e.loadChildren) {
              return e._loadedConfig.routes;
            } else {
              return [];
            }
          })(e);
          const { segmentGroup: a, slicedSegments: u } = Ud(
            t,
            i,
            o,
            l,
            this.relativeLinkResolution
          );
          if (u.length === 0 && a.hasChildren()) {
            const e = this.processChildren(l, a);
            return [new Lh(s, e)];
          }
          if (l.length === 0 && u.length === 0) {
            return [new Lh(s, [])];
          }
          const c = this.processSegment(l, a, u, Yc);
          return [new Lh(s, c)];
        }
      }
      class Bd {}
      class qd {
        shouldDetach(e) {
          return false;
        }
        store(e, t) {}
        shouldAttach(e) {
          return false;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig;
        }
      }
      const Qd = new Se('ROUTES');
      class Gd {
        constructor(e, t, n, r) {
          this.loader = e;
          this.compiler = t;
          this.onLoadStartListener = n;
          this.onLoadEndListener = r;
        }
        load(e, t) {
          if (this.onLoadStartListener) {
            this.onLoadStartListener(t);
          }
          return this.loadModuleFactory(t.loadChildren).pipe(
            $(n => {
              if (this.onLoadEndListener) {
                this.onLoadEndListener(t);
              }
              const r = n.create(e);
              return new sh(ch(r.injector.get(Qd)).map(ah), r);
            })
          );
        }
        loadModuleFactory(e) {
          if (typeof e == 'string') {
            return Q(this.loader.load(e));
          } else {
            return ph(e()).pipe(
              G(
                e =>
                  e instanceof $e
                    ? xl(e)
                    : Q(this.compiler.compileModuleAsync(e))
              )
            );
          }
        }
      }
      class Wd {}
      class Zd {
        shouldProcessUrl(e) {
          return true;
        }
        extract(e) {
          return e;
        }
        merge(e, t) {
          return e;
        }
      }
      class Xd {
        constructor(e, t, n, r, s, i, o, l) {
          this.rootComponentType = e;
          this.urlSerializer = t;
          this.rootContexts = n;
          this.location = r;
          this.config = l;
          this.lastSuccessfulNavigation = null;
          this.currentNavigation = null;
          this.navigationId = 0;
          this.isNgZoneEnabled = false;
          this.events = new k();
          this.errorHandler = Kd;
          this.malformedUriErrorHandler = Jd;
          this.navigated = false;
          this.lastSuccessfulId = -1;
          this.hooks = { beforePreactivation: Yd, afterPreactivation: Yd };
          this.urlHandlingStrategy = new Zd();
          this.routeReuseStrategy = new qd();
          this.onSameUrlNavigation = 'ignore';
          this.paramsInheritanceStrategy = 'emptyOnly';
          this.urlUpdateStrategy = 'deferred';
          this.relativeLinkResolution = 'legacy';
          this.ngModule = s.get(He);
          this.console = s.get($s);
          const a = s.get(li);
          this.isNgZoneEnabled = a instanceof li;
          this.resetConfig(l);
          this.currentUrlTree = new gh(new mh([], {}), {}, null);
          this.rawUrlTree = this.currentUrlTree;
          this.browserUrlTree = this.currentUrlTree;
          this.configLoader = new Gd(
            i,
            o,
            e => this.triggerEvent(new Bc(e)),
            e => this.triggerEvent(new qc(e))
          );
          this.routerState = Hh(this.currentUrlTree, this.rootComponentType);
          this.transitions = new Oa({
            id: 0,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
            urlAfterRedirects: this.urlHandlingStrategy.extract(
              this.currentUrlTree
            ),
            rawUrl: this.currentUrlTree,
            extras: {},
            resolve: null,
            reject: null,
            promise: Promise.resolve(true),
            source: 'imperative',
            restoredState: null,
            currentSnapshot: this.routerState.snapshot,
            targetSnapshot: null,
            currentRouterState: this.routerState,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          });
          this.navigations = this.setupNavigations(this.transitions);
          this.processNavigations();
        }
        setupNavigations(e) {
          const t = this.events;
          return e.pipe(
            Sl(e => e.id !== 0),
            $(e =>
              Object.assign({}, e, {
                extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
              })
            ),
            cu(e => {
              let n = false;
              let r = false;
              return xl(e).pipe(
                Qa(e => {
                  this.currentNavigation = {
                    id: e.id,
                    initialUrl: e.currentRawUrl,
                    extractedUrl: e.extractedUrl,
                    trigger: e.source,
                    extras: e.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null,
                        })
                      : null,
                  };
                }),
                cu(e => {
                  const n =
                    !this.navigated ||
                    e.extractedUrl.toString() !==
                      this.browserUrlTree.toString();
                  if (
                    (this.onSameUrlNavigation === 'reload' || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                  ) {
                    return xl(e).pipe(
                      cu(e => {
                        const n = this.transitions.getValue();
                        t.next(
                          new Dc(
                            e.id,
                            this.serializeUrl(e.extractedUrl),
                            e.source,
                            e.restoredState
                          )
                        );
                        if (n === this.transitions.getValue()) {
                          return [e];
                        } else {
                          return wl;
                        }
                      }),
                      cu(e => Promise.resolve(e)),
                      (function(e, t, n, r) {
                        return function(s) {
                          return s.pipe(
                            cu(s =>
                              (function(e, t, n, r, s) {
                                return new yd(e, t, n, r, s).apply();
                              })(e, t, n, s.extractedUrl, r).pipe(
                                $(e =>
                                  Object.assign({}, s, { urlAfterRedirects: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.ngModule.injector,
                        this.configLoader,
                        this.urlSerializer,
                        this.config
                      ),
                      Qa(e => {
                        this.currentNavigation = Object.assign(
                          {},
                          this.currentNavigation,
                          { finalUrl: e.urlAfterRedirects }
                        );
                      }),
                      (function(e, t, n, r, s) {
                        return function(i) {
                          return i.pipe(
                            G(i =>
                              (function(
                                e,
                                t,
                                n,
                                r,
                                s = 'emptyOnly',
                                i = 'legacy'
                              ) {
                                return new Md(e, t, n, r, s, i).recognize();
                              })(
                                e,
                                t,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                $(e =>
                                  Object.assign({}, i, { targetSnapshot: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        e => this.serializeUrl(e),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      Qa(e => {
                        if (this.urlUpdateStrategy === 'eager') {
                          if (!e.extras.skipLocationChange) {
                            this.setBrowserUrl(
                              e.urlAfterRedirects,
                              !!e.extras.replaceUrl,
                              e.id,
                              e.extras.state
                            );
                          }
                          this.browserUrlTree = e.urlAfterRedirects;
                        }
                      }),
                      Qa(e => {
                        const n = new Fc(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.next(n);
                      })
                    );
                  }
                  if (
                    n &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const {
                      id: n,
                      extractedUrl: r,
                      source: s,
                      restoredState: i,
                      extras: o,
                    } = e;
                    const l = new Dc(n, this.serializeUrl(r), s, i);
                    t.next(l);
                    const a = Hh(r, this.rootComponentType).snapshot;
                    return xl(
                      Object.assign({}, e, {
                        targetSnapshot: a,
                        urlAfterRedirects: r,
                        extras: Object.assign({}, o, {
                          skipLocationChange: false,
                          replaceUrl: false,
                        }),
                      })
                    );
                  }
                  this.rawUrlTree = e.rawUrl;
                  this.browserUrlTree = e.urlAfterRedirects;
                  e.resolve(null);
                  return wl;
                }),
                zd(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: i, replaceUrl: o },
                  } = e;
                  return this.hooks.beforePreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!i,
                    replaceUrl: !!o,
                  });
                }),
                Qa(e => {
                  const t = new jc(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot
                  );
                  this.triggerEvent(t);
                }),
                $(e =>
                  Object.assign({}, e, {
                    guards: Ed(
                      e.targetSnapshot,
                      e.currentSnapshot,
                      this.rootContexts
                    ),
                  })
                ),
                (function(e, t) {
                  return function(n) {
                    return n.pipe(
                      G(n => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: o,
                          },
                        } = n;
                        if (o.length === 0 && i.length === 0) {
                          return xl(
                            Object.assign({}, n, { guardsResult: true })
                          );
                        } else {
                          return (function(e, t, n, r) {
                            return Q(e).pipe(
                              G(e =>
                                (function(e, t, n, r, s) {
                                  const i =
                                    t && t.routeConfig
                                      ? t.routeConfig.canDeactivate
                                      : null;
                                  if (i && i.length !== 0) {
                                    return xl(
                                      i.map(i => {
                                        const o = Sd(i, t, s);
                                        let l;
                                        if (
                                          (function() {
                                            var e = o;
                                            return e && cd(e.canDeactivate);
                                          })()
                                        ) {
                                          l = ph(o.canDeactivate(e, t, n, r));
                                        } else {
                                          if (!cd(o)) {
                                            throw new Error(
                                              'Invalid CanDeactivate guard'
                                            );
                                          }
                                          l = ph(o(e, t, n, r));
                                        }
                                        return l.pipe(lu());
                                      })
                                    ).pipe(Ad());
                                  } else {
                                    return xl(true);
                                  }
                                })(e.component, e.route, n, t, r)
                              ),
                              lu(e => e !== true, true)
                            );
                          })(o, r, s, e).pipe(
                            G(
                              n =>
                                n &&
                                (function() {
                                  var e = n;
                                  return typeof e == 'boolean';
                                })()
                                  ? (function(e, t, n, r) {
                                      return Q(t).pipe(
                                        El(t =>
                                          Q([
                                            Id(t.route.parent, r),
                                            Rd(t.route, r),
                                            Pd(e, t.path, n),
                                            Nd(e, t.route, n),
                                          ]).pipe(
                                            ja(),
                                            lu(e => e !== true, true)
                                          )
                                        ),
                                        lu(e => e !== true, true)
                                      );
                                    })(r, i, e, t)
                                  : xl(n)
                            ),
                            $(e => Object.assign({}, n, { guardsResult: e }))
                          );
                        }
                      })
                    );
                  };
                })(this.ngModule.injector, e => this.triggerEvent(e)),
                Qa(e => {
                  if (hd(e.guardsResult)) {
                    const t = nh(
                      `Redirecting to "${this.serializeUrl(e.guardsResult)}"`
                    );
                    t.url = e.guardsResult;
                    throw t;
                  }
                }),
                Qa(e => {
                  const t = new Hc(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot,
                    !!e.guardsResult
                  );
                  this.triggerEvent(t);
                }),
                Sl(e => {
                  if (!e.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new Uc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      ''
                    );
                    t.next(n);
                    e.resolve(false);
                    return false;
                  }
                  return true;
                }),
                zd(e => {
                  if (e.guards.canActivateChecks.length) {
                    return xl(e).pipe(
                      Qa(e => {
                        const t = new $c(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      }),
                      (function(e, t) {
                        return function(n) {
                          return n.pipe(
                            G(n => {
                              const {
                                targetSnapshot: r,
                                guards: { canActivateChecks: s },
                              } = n;
                              if (s.length) {
                                return Q(s).pipe(
                                  El(n =>
                                    (function(e, t, n, r) {
                                      return (function(e, t, n, r) {
                                        const s = Object.keys(e);
                                        if (s.length === 0) {
                                          return xl({});
                                        }
                                        if (s.length === 1) {
                                          const i = s[0];
                                          return $d(e[i], t, n, r).pipe(
                                            $(e => ({ [i]: e }))
                                          );
                                        }
                                        const i = {};
                                        return Q(s)
                                          .pipe(
                                            G(s =>
                                              $d(e[s], t, n, r).pipe(
                                                $(e => ((i[s] = e), e))
                                              )
                                            )
                                          )
                                          .pipe(eu(), $(() => i));
                                      })(e._resolve, e, t, r).pipe(
                                        $(
                                          t => (
                                            (e._resolvedData = t),
                                            (e.data = Object.assign(
                                              {},
                                              e.data,
                                              zh(e, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(n.route, r, e, t)
                                  ),
                                  (function(e, t) {
                                    if (arguments.length >= 2) {
                                      return function(n) {
                                        return _(pu(e, t), za(1), Ja(t))(n);
                                      };
                                    } else {
                                      return function(t) {
                                        return _(
                                          pu((t, n, r) => e(t, n, r + 1)),
                                          za(1)
                                        )(t);
                                      };
                                    }
                                  })((e, t) => e),
                                  $(e => n)
                                );
                              } else {
                                return xl(n);
                              }
                            })
                          );
                        };
                      })(
                        this.paramsInheritanceStrategy,
                        this.ngModule.injector
                      ),
                      Qa(e => {
                        const t = new zc(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      })
                    );
                  }
                }),
                zd(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: i, replaceUrl: o },
                  } = e;
                  return this.hooks.afterPreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!i,
                    replaceUrl: !!o,
                  });
                }),
                $(e => {
                  const t = (function(e, t, n) {
                    const r = (function e(t, n, r) {
                      if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                        const s = r.value;
                        s._futureSnapshot = n.value;
                        const i = (function(t, n, r) {
                          return n.children.map(n => {
                            for (const s of r.children) {
                              if (
                                t.shouldReuseRoute(s.value.snapshot, n.value)
                              ) {
                                return e(t, n, s);
                              }
                            }
                            return e(t, n);
                          });
                        })(t, n, r);
                        return new Lh(s, i);
                      }
                      {
                        const r = t.retrieve(n.value);
                        if (r) {
                          const e = r.route;
                          (function e(t, n) {
                            if (t.value.routeConfig !== n.value.routeConfig) {
                              throw new Error(
                                'Cannot reattach ActivatedRouteSnapshot created from a different route'
                              );
                            }
                            if (t.children.length !== n.children.length) {
                              throw new Error(
                                'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                              );
                            }
                            n.value._futureSnapshot = t.value;
                            for (let r = 0; r < t.children.length; ++r) {
                              e(t.children[r], n.children[r]);
                            }
                          })(n, e);
                          return e;
                        }
                        {
                          const r = new $h(
                            new Oa((s = n.value).url),
                            new Oa(s.params),
                            new Oa(s.queryParams),
                            new Oa(s.fragment),
                            new Oa(s.data),
                            s.outlet,
                            s.component,
                            s
                          );
                          const i = n.children.map(n => e(t, n));
                          return new Lh(r, i);
                        }
                      }
                      var s;
                    })(e, t._root, n ? n._root : void 0);
                    return new jh(r, t);
                  })(
                    this.routeReuseStrategy,
                    e.targetSnapshot,
                    e.currentRouterState
                  );
                  return Object.assign({}, e, { targetRouterState: t });
                }),
                Qa(e => {
                  this.currentUrlTree = e.urlAfterRedirects;
                  this.rawUrlTree = this.urlHandlingStrategy.merge(
                    this.currentUrlTree,
                    e.rawUrl
                  );
                  this.routerState = e.targetRouterState;
                  if (this.urlUpdateStrategy === 'deferred') {
                    if (!e.extras.skipLocationChange) {
                      this.setBrowserUrl(
                        this.rawUrlTree,
                        !!e.extras.replaceUrl,
                        e.id,
                        e.extras.state
                      );
                    }
                    this.browserUrlTree = e.urlAfterRedirects;
                  }
                }),
                ld(this.rootContexts, this.routeReuseStrategy, e =>
                  this.triggerEvent(e)
                ),
                Qa({
                  next() {
                    n = true;
                  },
                  complete() {
                    n = true;
                  },
                }),
                (function(e) {
                  return t => t.lift(new mu(e));
                })(() => {
                  if (!n && !r) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new Uc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      `Navigation ID ${
                        e.id
                      } is not equal to the current navigation id ${
                        this.navigationId
                      }`
                    );
                    t.next(n);
                    e.resolve(false);
                  }
                  this.currentNavigation = null;
                }),
                tu(n => {
                  r = true;
                  if (
                    (function() {
                      var e = n;
                      return e && e[th];
                    })()
                  ) {
                    const r = hd(n.url);
                    if (!r) {
                      this.navigated = true;
                      this.resetStateAndUrl(
                        e.currentRouterState,
                        e.currentUrlTree,
                        e.rawUrl
                      );
                    }
                    const s = new Uc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n.message
                    );
                    t.next(s);
                    e.resolve(false);
                    if (r) {
                      this.navigateByUrl(n.url);
                    }
                  } else {
                    this.resetStateAndUrl(
                      e.currentRouterState,
                      e.currentUrlTree,
                      e.rawUrl
                    );
                    const r = new Lc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n
                    );
                    t.next(r);
                    try {
                      e.resolve(this.errorHandler(n));
                    } catch (s) {
                      e.reject(s);
                    }
                  }
                  return wl;
                })
              );
            })
          );
        }
        resetRootComponentType(e) {
          this.rootComponentType = e;
          this.routerState.root.component = this.rootComponentType;
        }
        getTransition() {
          const e = this.transitions.value;
          e.urlAfterRedirects = this.browserUrlTree;
          return e;
        }
        setTransition(e) {
          this.transitions.next(Object.assign({}, this.getTransition(), e));
        }
        initialNavigation() {
          this.setUpLocationChangeListener();
          if (this.navigationId === 0) {
            this.navigateByUrl(this.location.path(true), { replaceUrl: true });
          }
        }
        setUpLocationChangeListener() {
          if (!this.locationSubscription) {
            this.locationSubscription = this.location.subscribe(e => {
              let t = this.parseUrl(e.url);
              const n = e.type === 'popstate' ? 'popstate' : 'hashchange';
              const r = e.state && e.state.navigationId ? e.state : null;
              setTimeout(() => {
                this.scheduleNavigation(t, n, r, { replaceUrl: true });
              }, 0);
            });
          }
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(e) {
          this.events.next(e);
        }
        resetConfig(e) {
          ih(e);
          this.config = e.map(ah);
          this.navigated = false;
          this.lastSuccessfulId = -1;
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          if (this.locationSubscription) {
            this.locationSubscription.unsubscribe();
            this.locationSubscription = null;
          }
        }
        createUrlTree(e, t = {}) {
          const {
            relativeTo: n,
            queryParams: r,
            fragment: s,
            preserveQueryParams: i,
            queryParamsHandling: o,
            preserveFragment: l,
          } = t;
          if (nt() && i && console && console.warn) {
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            );
          }
          const a = n || this.routerState.root;
          const u = l ? this.currentUrlTree.fragment : s;
          let c = null;
          if (o) {
            switch (o) {
              case 'merge':
                c = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case 'preserve':
                c = this.currentUrlTree.queryParams;
                break;
              default:
                c = r || null;
            }
          } else {
            c = i ? this.currentUrlTree.queryParams : r || null;
          }
          if (c !== null) {
            c = this.removeEmptyProps(c);
          }
          return (function(e, t, n, r, s) {
            if (n.length === 0) {
              return Jh(t.root, t.root, t, r, s);
            }
            const i = (function(e) {
              if (typeof e[0] == 'string' && e.length === 1 && e[0] === '/') {
                return new Yh(true, 0, e);
              }
              let t = 0;
              let n = false;
              const r = e.reduce((e, r, s) => {
                if (typeof r == 'object' && r != null) {
                  if (r.outlets) {
                    const t = {};
                    dh(r.outlets, (e, n) => {
                      t[n] = typeof e == 'string' ? e.split('/') : e;
                    });
                    return [...e, { outlets: t }];
                  }
                  if (r.segmentPath) {
                    return [...e, r.segmentPath];
                  }
                }
                if (typeof r == 'string') {
                  if (s === 0) {
                    r.split('/').forEach((r, s) => {
                      if (s != 0 || r !== '.') {
                        if (s == 0 && r === '') {
                          n = true;
                        } else if (r === '..') {
                          t++;
                        } else if (r != '') {
                          e.push(r);
                        }
                      }
                    });
                    return e;
                  } else {
                    return [...e, r];
                  }
                } else {
                  return [...e, r];
                }
              }, []);
              return new Yh(n, t, r);
            })(n);
            if (i.toRoot()) {
              return Jh(t.root, new mh([], {}), t, r, s);
            }
            const o = (function(e, t, n) {
              if (e.isAbsolute) {
                return new Xh(t.root, true, 0);
              }
              if (n.snapshot._lastPathIndex === -1) {
                return new Xh(n.snapshot._urlSegment, true, 0);
              }
              const r = Kh(e.commands[0]) ? 0 : 1;
              return (function(e, t, n) {
                let r = e;
                let s = t;
                let i = n;
                while (i > s) {
                  i -= s;
                  r = r.parent;
                  if (!r) {
                    throw new Error("Invalid number of '../'");
                  }
                  s = r.segments.length;
                }
                return new Xh(r, false, s - i);
              })(
                n.snapshot._urlSegment,
                n.snapshot._lastPathIndex + r,
                e.numberOfDoubleDots
              );
            })(i, t, e);
            const l = o.processChildren
              ? nd(o.segmentGroup, o.index, i.commands)
              : td(o.segmentGroup, o.index, i.commands);
            return Jh(o.segmentGroup, l, t, r, s);
          })(a, this.currentUrlTree, e, c, u);
        }
        navigateByUrl(e, t = { skipLocationChange: false }) {
          if (nt() && this.isNgZoneEnabled && !li.isInAngularZone()) {
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          }
          const n = hd(e) ? e : this.parseUrl(e);
          const r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, t);
        }
        navigate(e, t = { skipLocationChange: false }) {
          (function(e) {
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              if (n == null) {
                throw new Error(
                  `The requested path contains ${n} segment at index ${t}`
                );
              }
            }
          })(e);
          return this.navigateByUrl(this.createUrlTree(e, t), t);
        }
        serializeUrl(e) {
          return this.urlSerializer.serialize(e);
        }
        parseUrl(e) {
          let t;
          try {
            t = this.urlSerializer.parse(e);
          } catch (n) {
            t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
          }
          return t;
        }
        isActive(e, t) {
          if (hd(e)) {
            return fh(this.currentUrlTree, e, t);
          }
          const n = this.parseUrl(e);
          return fh(this.currentUrlTree, n, t);
        }
        removeEmptyProps(e) {
          return Object.keys(e).reduce((t, n) => {
            const r = e[n];
            if (r != null) {
              t[n] = r;
            }
            return t;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            e => {
              this.navigated = true;
              this.lastSuccessfulId = e.id;
              this.events.next(
                new Vc(
                  e.id,
                  this.serializeUrl(e.extractedUrl),
                  this.serializeUrl(this.currentUrlTree)
                )
              );
              this.lastSuccessfulNavigation = this.currentNavigation;
              this.currentNavigation = null;
              e.resolve(true);
            },
            e => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(e, t, n, r) {
          const s = this.getTransition();
          if (
            s &&
            t !== 'imperative' &&
            s.source === 'imperative' &&
            s.rawUrl.toString() === e.toString()
          ) {
            return Promise.resolve(true);
          }
          if (
            s &&
            t == 'hashchange' &&
            s.source === 'popstate' &&
            s.rawUrl.toString() === e.toString()
          ) {
            return Promise.resolve(true);
          }
          if (
            s &&
            t == 'popstate' &&
            s.source === 'hashchange' &&
            s.rawUrl.toString() === e.toString()
          ) {
            return Promise.resolve(true);
          }
          let i = null;
          let o = null;
          const l = new Promise((e, t) => {
            i = e;
            o = t;
          });
          const a = ++this.navigationId;
          this.setTransition({
            id: a,
            source: t,
            restoredState: n,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.rawUrlTree,
            rawUrl: e,
            extras: r,
            resolve: i,
            reject: o,
            promise: l,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          });
          return l.catch(e => Promise.reject(e));
        }
        setBrowserUrl(e, t, n, r) {
          const s = this.urlSerializer.serialize(e);
          r = r || {};
          if (this.location.isCurrentPathEqualTo(s) || t) {
            this.location.replaceState(
              s,
              '',
              Object.assign({}, r, { navigationId: n })
            );
          } else {
            this.location.go(s, '', Object.assign({}, r, { navigationId: n }));
          }
        }
        resetStateAndUrl(e, t, n) {
          this.routerState = e;
          this.currentUrlTree = t;
          this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            n
          );
          this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            '',
            { navigationId: this.lastSuccessfulId }
          );
        }
      }
      class ep {
        constructor(e, t, n) {
          this.router = e;
          this.route = t;
          this.locationStrategy = n;
          this.commands = [];
          this.subscription = e.events.subscribe(e => {
            if (e instanceof Vc) {
              this.updateTargetUrlAndHref();
            }
          });
        }
        set routerLink(e) {
          this.commands = e != null ? (Array.isArray(e) ? e : [e]) : [];
        }
        set preserveQueryParams(e) {
          if (nt() && console && console.warn) {
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            );
          }
          this.preserve = e;
        }
        ngOnChanges(e) {
          this.updateTargetUrlAndHref();
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        onClick(e, t, n, r) {
          if (e !== 0 || t || n || r) {
            return true;
          }
          if (typeof this.target == 'string' && this.target != '_self') {
            return true;
          }
          const s = {
            skipLocationChange: tp(this.skipLocationChange),
            replaceUrl: tp(this.replaceUrl),
            state: this.state,
          };
          this.router.navigateByUrl(this.urlTree, s);
          return false;
        }
        updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(
            this.router.serializeUrl(this.urlTree)
          );
        }
        get urlTree() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: tp(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: tp(this.preserveFragment),
          });
        }
      }
      class np {
        constructor() {
          this.outlet = null;
          this.route = null;
          this.resolver = null;
          this.children = new rp();
          this.attachRef = null;
        }
      }
      class rp {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(e, t) {
          const n = this.getOrCreateContext(e);
          n.outlet = t;
          this.contexts.set(e, n);
        }
        onChildOutletDestroyed(e) {
          const t = this.getContext(e);
          if (t) {
            t.outlet = null;
          }
        }
        onOutletDeactivated() {
          const e = this.contexts;
          this.contexts = new Map();
          return e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let t = this.getContext(e);
          if (!t) {
            t = new np();
            this.contexts.set(e, t);
          }
          return t;
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
      }
      class sp {
        constructor(e, t, n, r, s) {
          this.parentContexts = e;
          this.location = t;
          this.resolver = n;
          this.changeDetector = s;
          this.activated = null;
          this._activatedRoute = null;
          this.activateEvents = new Ns();
          this.deactivateEvents = new Ns();
          this.name = r || Yc;
          e.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const e = this.parentContexts.getContext(this.name);
            if (e && e.route) {
              if (e.attachRef) {
                this.attach(e.attachRef, e.route);
              } else {
                this.activateWith(e.route, e.resolver || null);
              }
            }
          }
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) {
            throw new Error('Outlet is not activated');
          }
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) {
            throw new Error('Outlet is not activated');
          }
          return this._activatedRoute;
        }
        get activatedRouteData() {
          if (this._activatedRoute) {
            return this._activatedRoute.snapshot.data;
          } else {
            return {};
          }
        }
        detach() {
          if (!this.activated) {
            throw new Error('Outlet is not activated');
          }
          this.location.detach();
          const e = this.activated;
          this.activated = null;
          this._activatedRoute = null;
          return e;
        }
        attach(e, t) {
          this.activated = e;
          this._activatedRoute = t;
          this.location.insert(e.hostView);
        }
        deactivate() {
          if (this.activated) {
            const e = this.component;
            this.activated.destroy();
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(e);
          }
        }
        activateWith(e, t) {
          if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
          }
          this._activatedRoute = e;
          const n = (t = t || this.resolver).resolveComponentFactory(
            e._futureSnapshot.routeConfig.component
          );
          const r = this.parentContexts.getOrCreateContext(this.name).children;
          const s = new ip(e, r, this.location.injector);
          this.activated = this.location.createComponent(
            n,
            this.location.length,
            s
          );
          this.changeDetector.markForCheck();
          this.activateEvents.emit(this.activated.instance);
        }
      }
      class ip {
        constructor(e, t, n) {
          this.route = e;
          this.childContexts = t;
          this.parent = n;
        }
        get(e, t) {
          if (e === $h) {
            return this.route;
          } else if (e === rp) {
            return this.childContexts;
          } else {
            return this.parent.get(e, t);
          }
        }
      }
      class op {}
      class lp {
        preload(e, t) {
          return t().pipe(tu(() => xl(null)));
        }
      }
      class ap {
        preload(e, t) {
          return xl(null);
        }
      }
      class up {
        constructor(e, t, n, r, s) {
          this.router = e;
          this.injector = r;
          this.preloadingStrategy = s;
          this.loader = new Gd(
            t,
            n,
            t => e.triggerEvent(new Bc(t)),
            t => e.triggerEvent(new qc(t))
          );
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(Sl(e => e instanceof Vc), El(() => this.preload()))
            .subscribe(() => {});
        }
        preload() {
          const e = this.injector.get(He);
          return this.processRoutes(e, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(e, t) {
          const n = [];
          for (const r of t) {
            if (r.loadChildren && !r.canLoad && r._loadedConfig) {
              const e = r._loadedConfig;
              n.push(this.processRoutes(e.module, e.routes));
            } else if (r.loadChildren && !r.canLoad) {
              n.push(this.preloadConfig(e, r));
            } else if (r.children) {
              n.push(this.processRoutes(e, r.children));
            }
          }
          return Q(n).pipe(J(), $(e => void 0));
        }
        preloadConfig(e, t) {
          return this.preloadingStrategy.preload(t, () =>
            this.loader
              .load(e.injector, t)
              .pipe(
                G(
                  e => (
                    (t._loadedConfig = e),
                    this.processRoutes(e.module, e.routes)
                  )
                )
              )
          );
        }
      }
      class cp {
        constructor(e, t, n = {}) {
          this.router = e;
          this.viewportScroller = t;
          this.options = n;
          this.lastId = 0;
          this.lastSource = 'imperative';
          this.restoredId = 0;
          this.store = {};
          n.scrollPositionRestoration =
            n.scrollPositionRestoration || 'disabled';
          n.anchorScrolling = n.anchorScrolling || 'disabled';
        }
        init() {
          if (this.options.scrollPositionRestoration !== 'disabled') {
            this.viewportScroller.setHistoryScrollRestoration('manual');
          }
          this.routerEventsSubscription = this.createScrollEvents();
          this.scrollEventsSubscription = this.consumeScrollEvents();
        }
        createScrollEvents() {
          return this.router.events.subscribe(e => {
            if (e instanceof Dc) {
              this.store[
                this.lastId
              ] = this.viewportScroller.getScrollPosition();
              this.lastSource = e.navigationTrigger;
              this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0;
            } else if (e instanceof Vc) {
              this.lastId = e.id;
              this.scheduleScrollEvent(
                e,
                this.router.parseUrl(e.urlAfterRedirects).fragment
              );
            }
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe(e => {
            if (e instanceof Kc) {
              if (e.position) {
                if (this.options.scrollPositionRestoration === 'top') {
                  this.viewportScroller.scrollToPosition([0, 0]);
                } else if (
                  this.options.scrollPositionRestoration === 'enabled'
                ) {
                  this.viewportScroller.scrollToPosition(e.position);
                }
              } else if (
                e.anchor &&
                this.options.anchorScrolling === 'enabled'
              ) {
                this.viewportScroller.scrollToAnchor(e.anchor);
              } else if (
                this.options.scrollPositionRestoration !== 'disabled'
              ) {
                this.viewportScroller.scrollToPosition([0, 0]);
              }
            }
          });
        }
        scheduleScrollEvent(e, t) {
          this.router.triggerEvent(
            new Kc(
              e,
              this.lastSource === 'popstate'
                ? this.store[this.restoredId]
                : null,
              t
            )
          );
        }
        ngOnDestroy() {
          if (this.routerEventsSubscription) {
            this.routerEventsSubscription.unsubscribe();
          }
          if (this.scrollEventsSubscription) {
            this.scrollEventsSubscription.unsubscribe();
          }
        }
      }
      const hp = new Se('ROUTER_CONFIGURATION');
      const dp = new Se('ROUTER_FORROOT_GUARD');
      const pp = [
        Pl,
        { provide: wh, useClass: bh },
        {
          provide: Xd,
          useFactory: wp,
          deps: [
            ki,
            wh,
            rp,
            Pl,
            Mt,
            Ri,
            Ks,
            Qd,
            hp,
            [Wd, new ae()],
            [Bd, new ae()],
          ],
        },
        rp,
        { provide: $h, useFactory: bp, deps: [Xd] },
        { provide: Ri, useClass: Mi },
        up,
        ap,
        lp,
        { provide: hp, useValue: { enableTracing: false } },
      ];
      class gp {
        constructor(e, t) {}
        static forRoot(e, t) {
          return {
            ngModule: gp,
            providers: [
              pp,
              _p(e),
              { provide: dp, useFactory: vp, deps: [[Xd, new ae(), new ce()]] },
              { provide: hp, useValue: t || {} },
              {
                provide: Il,
                useFactory: yp,
                deps: [Al, [new le(Nl), new ae()], hp],
              },
              { provide: cp, useFactory: mp, deps: [Xd, Yl, hp] },
              {
                provide: op,
                useExisting:
                  t && t.preloadingStrategy ? t.preloadingStrategy : ap,
              },
              { provide: Ci, multi: true, useFactory: fp },
              [
                Cp,
                { provide: Ms, multi: true, useFactory: xp, deps: [Cp] },
                { provide: Sp, useFactory: Ep, deps: [Cp] },
                { provide: Hs, multi: true, useExisting: Sp },
              ],
            ],
          };
        }
        static forChild(e) {
          return { ngModule: gp, providers: [_p(e)] };
        }
      }
      class Cp {
        constructor(e) {
          this.injector = e;
          this.initNavigation = false;
          this.resultOfPreactivationDone = new k();
        }
        appInitializer() {
          return this.injector.get(Rl, Promise.resolve(null)).then(() => {
            let e = null;
            const t = new Promise(t => (e = t));
            const n = this.injector.get(Xd);
            const r = this.injector.get(hp);
            if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) {
              e(true);
            } else if (r.initialNavigation === 'disabled') {
              n.setUpLocationChangeListener();
              e(true);
            } else {
              if (r.initialNavigation !== 'enabled') {
                throw new Error(
                  `Invalid initialNavigation options: '${r.initialNavigation}'`
                );
              }
              n.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? xl(null)
                  : ((this.initNavigation = true),
                    e(true),
                    this.resultOfPreactivationDone);
              n.initialNavigation();
            }
            return t;
          });
        }
        bootstrapListener(e) {
          const t = this.injector.get(hp);
          const n = this.injector.get(up);
          const r = this.injector.get(cp);
          const s = this.injector.get(Xd);
          const i = this.injector.get(ki);
          if (e === i.components[0]) {
            if (this.isLegacyEnabled(t)) {
              s.initialNavigation();
            } else if (this.isLegacyDisabled(t)) {
              s.setUpLocationChangeListener();
            }
            n.setUpPreloading();
            r.init();
            s.resetRootComponentType(i.componentTypes[0]);
            this.resultOfPreactivationDone.next(null);
            this.resultOfPreactivationDone.complete();
          }
        }
        isLegacyEnabled(e) {
          return (
            e.initialNavigation === 'legacy_enabled' ||
            e.initialNavigation === true ||
            e.initialNavigation === void 0
          );
        }
        isLegacyDisabled(e) {
          return (
            e.initialNavigation === 'legacy_disabled' ||
            e.initialNavigation === false
          );
        }
      }
      const Sp = new Se('Router Initializer');
      var Tp = er({ encapsulation: 2, styles: [], data: {} });
      var Rp = Ur('ng-component', Jc, Ap, {}, {}, []);
      class Ip extends H {
        constructor(e, t) {
          super(e);
          this.sources = t;
          this.completed = 0;
          this.haveValues = 0;
          const n = t.length;
          this.values = new Array(n);
          for (let r = 0; r < n; r++) {
            const e = j(this, t[r], null, r);
            if (e) {
              this.add(e);
            }
          }
        }
        notifyNext(e, t, n, r, s) {
          this.values[n] = t;
          if (!s._hasValue) {
            s._hasValue = true;
            this.haveValues++;
          }
        }
        notifyComplete(e) {
          const { destination: t, haveValues: n, values: r } = this;
          const s = r.length;
          if (e._hasValue) {
            this.completed++;
            if (this.completed === s) {
              if (n === s) {
                t.next(r);
              }
              t.complete();
            }
          } else {
            t.complete();
          }
        }
      }
      const Np = new Se('NgValueAccessor');
      const Pp = new Se('CompositionEventMode');
      class Op {
        constructor(e, t, n) {
          this._renderer = e;
          this._elementRef = t;
          this._compositionMode = n;
          this.onChange = e => {};
          this.onTouched = () => {};
          this._composing = false;
          if (this._compositionMode == null) {
            this._compositionMode = !(function() {
              const e = _u() ? _u().getUserAgent() : '';
              return /android (\d+)/.test(e.toLowerCase());
            })();
          }
        }
        writeValue(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'value',
            e == null ? '' : e
          );
        }
        registerOnChange(e) {
          this.onChange = e;
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            e
          );
        }
        _handleInput(e) {
          if (
            !this._compositionMode ||
            (this._compositionMode && !this._composing)
          ) {
            this.onChange(e);
          }
        }
        _compositionStart() {
          this._composing = true;
        }
        _compositionEnd(e) {
          this._composing = false;
          if (this._compositionMode) {
            this.onChange(e);
          }
        }
      }
      class Mp {
        get value() {
          if (this.control) {
            return this.control.value;
          } else {
            return null;
          }
        }
        get valid() {
          if (this.control) {
            return this.control.valid;
          } else {
            return null;
          }
        }
        get invalid() {
          if (this.control) {
            return this.control.invalid;
          } else {
            return null;
          }
        }
        get pending() {
          if (this.control) {
            return this.control.pending;
          } else {
            return null;
          }
        }
        get disabled() {
          if (this.control) {
            return this.control.disabled;
          } else {
            return null;
          }
        }
        get enabled() {
          if (this.control) {
            return this.control.enabled;
          } else {
            return null;
          }
        }
        get errors() {
          if (this.control) {
            return this.control.errors;
          } else {
            return null;
          }
        }
        get pristine() {
          if (this.control) {
            return this.control.pristine;
          } else {
            return null;
          }
        }
        get dirty() {
          if (this.control) {
            return this.control.dirty;
          } else {
            return null;
          }
        }
        get touched() {
          if (this.control) {
            return this.control.touched;
          } else {
            return null;
          }
        }
        get status() {
          if (this.control) {
            return this.control.status;
          } else {
            return null;
          }
        }
        get untouched() {
          if (this.control) {
            return this.control.untouched;
          } else {
            return null;
          }
        }
        get statusChanges() {
          if (this.control) {
            return this.control.statusChanges;
          } else {
            return null;
          }
        }
        get valueChanges() {
          if (this.control) {
            return this.control.valueChanges;
          } else {
            return null;
          }
        }
        get path() {
          return null;
        }
        reset(e) {
          if (this.control) {
            this.control.reset(e);
          }
        }
        hasError(e, t) {
          return !!this.control && this.control.hasError(e, t);
        }
        getError(e, t) {
          if (this.control) {
            return this.control.getError(e, t);
          } else {
            return null;
          }
        }
      }
      class Dp extends Mp {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Up extends Mp {
        constructor() {
          super(...arguments);
          this._parent = null;
          this.name = null;
          this.valueAccessor = null;
          this._rawValidators = [];
          this._rawAsyncValidators = [];
        }
        get validator() {
          return Vp();
        }
        get asyncValidator() {
          return Vp();
        }
      }
      class Lp {
        constructor(e) {
          this._cd = e;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      class Fp extends Lp {
        constructor(e) {
          super(e);
        }
      }
      const Hp = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class $p {
        static min(e) {
          return t => {
            if (jp(t.value) || jp(e)) {
              return null;
            }
            const n = parseFloat(t.value);
            if (!isNaN(n) && n < e) {
              return { min: { min: e, actual: t.value } };
            } else {
              return null;
            }
          };
        }
        static max(e) {
          return t => {
            if (jp(t.value) || jp(e)) {
              return null;
            }
            const n = parseFloat(t.value);
            if (!isNaN(n) && n > e) {
              return { max: { max: e, actual: t.value } };
            } else {
              return null;
            }
          };
        }
        static required(e) {
          if (jp(e.value)) {
            return { required: true };
          } else {
            return null;
          }
        }
        static requiredTrue(e) {
          if (e.value === true) {
            return null;
          } else {
            return { required: true };
          }
        }
        static email(e) {
          if (jp(e.value)) {
            return null;
          } else if (Hp.test(e.value)) {
            return null;
          } else {
            return { email: true };
          }
        }
        static minLength(e) {
          return t => {
            if (jp(t.value)) {
              return null;
            }
            const n = t.value ? t.value.length : 0;
            if (n < e) {
              return { minlength: { requiredLength: e, actualLength: n } };
            } else {
              return null;
            }
          };
        }
        static maxLength(e) {
          return t => {
            const n = t.value ? t.value.length : 0;
            if (n > e) {
              return { maxlength: { requiredLength: e, actualLength: n } };
            } else {
              return null;
            }
          };
        }
        static pattern(e) {
          if (!e) {
            return $p.nullValidator;
          }
          let t;
          let n;
          if (typeof e == 'string') {
            n = '';
            if (e.charAt(0) !== '^') {
              n += '^';
            }
            n += e;
            if (e.charAt(e.length - 1) !== '$') {
              n += '$';
            }
            t = new RegExp(n);
          } else {
            n = e.toString();
            t = e;
          }
          return e => {
            if (jp(e.value)) {
              return null;
            }
            const r = e.value;
            if (t.test(r)) {
              return null;
            } else {
              return { pattern: { requiredPattern: n, actualValue: r } };
            }
          };
        }
        static nullValidator(e) {
          return null;
        }
        static compose(e) {
          if (!e) {
            return null;
          }
          const t = e.filter(zp);
          if (t.length == 0) {
            return null;
          } else {
            return function(e) {
              return qp(
                (function(e, t) {
                  return t.map(t => t(e));
                })(e, t)
              );
            };
          }
        }
        static composeAsync(e) {
          if (!e) {
            return null;
          }
          const t = e.filter(zp);
          if (t.length == 0) {
            return null;
          } else {
            return function(e) {
              return (function e(...t) {
                let n;
                if (typeof t[t.length - 1] == 'function') {
                  n = t.pop();
                }
                if (t.length === 1 && a(t[0])) {
                  t = t[0];
                }
                if (t.length === 0) {
                  return wl;
                } else if (n) {
                  return e(t).pipe($(e => n(...e)));
                } else {
                  return new b(e => new Ip(e, t));
                }
              })(
                (function(e, t) {
                  return t.map(t => t(e));
                })(e, t).map(Bp)
              ).pipe($(qp));
            };
          }
        }
      }
      class Wp {
        constructor() {
          this._accessors = [];
        }
        add(e, t) {
          this._accessors.push([e, t]);
        }
        remove(e) {
          for (let t = this._accessors.length - 1; t >= 0; --t) {
            if (this._accessors[t][1] === e) {
              this._accessors.splice(t, 1);
              return;
            }
          }
        }
        select(e) {
          this._accessors.forEach(t => {
            if (this._isSameGroup(t, e) && t[1] !== e) {
              t[1].fireUncheck(e.value);
            }
          });
        }
        _isSameGroup(e, t) {
          return (
            !!e[0].control &&
            e[0]._parent === t._control._parent &&
            e[1].name === t.name
          );
        }
      }
      const Zp = {
        formControlName:
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        formGroupName:
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        formArrayName:
          '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
        ngModelGroup:
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        ngModelWithFormGroup:
          '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ',
      };
      const nf = [
        class {
          constructor(e, t) {
            this._renderer = e;
            this._elementRef = t;
            this.onChange = e => {};
            this.onTouched = () => {};
          }
          writeValue(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'checked',
              e
            );
          }
          registerOnChange(e) {
            this.onChange = e;
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
        },
        class {
          constructor(e, t) {
            this._renderer = e;
            this._elementRef = t;
            this.onChange = e => {};
            this.onTouched = () => {};
          }
          writeValue(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              parseFloat(e)
            );
          }
          registerOnChange(e) {
            this.onChange = t => {
              e(t == '' ? null : parseFloat(t));
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
        },
        class {
          constructor(e, t) {
            this._renderer = e;
            this._elementRef = t;
            this.onChange = e => {};
            this.onTouched = () => {};
          }
          writeValue(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              e == null ? '' : e
            );
          }
          registerOnChange(e) {
            this.onChange = t => {
              e(t == '' ? null : parseFloat(t));
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
        },
        class {
          constructor(e, t) {
            this._renderer = e;
            this._elementRef = t;
            this._optionMap = new Map();
            this._idCounter = 0;
            this.onChange = e => {};
            this.onTouched = () => {};
            this._compareWith = Qt;
          }
          set compareWith(e) {
            if (typeof e != 'function') {
              throw new Error(
                `compareWith must be a function, but received ${JSON.stringify(
                  e
                )}`
              );
            }
            this._compareWith = e;
          }
          writeValue(e) {
            this.value = e;
            const t = this._getOptionId(e);
            if (t == null) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'selectedIndex',
                -1
              );
            }
            const n = (function(e, t) {
              if (e == null) {
                return `${t}`;
              } else {
                if (t && typeof t == 'object') {
                  t = 'Object';
                }
                return `${e}: ${t}`.slice(0, 50);
              }
            })(t, e);
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              n
            );
          }
          registerOnChange(e) {
            this.onChange = t => {
              this.value = this._getOptionValue(t);
              e(this.value);
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(e) {
            for (const t of Array.from(this._optionMap.keys())) {
              if (this._compareWith(this._optionMap.get(t), e)) {
                return t;
              }
            }
            return null;
          }
          _getOptionValue(e) {
            const t = (function(e) {
              return e.split(':')[0];
            })(e);
            if (this._optionMap.has(t)) {
              return this._optionMap.get(t);
            } else {
              return e;
            }
          }
        },
        class {
          constructor(e, t) {
            this._renderer = e;
            this._elementRef = t;
            this._optionMap = new Map();
            this._idCounter = 0;
            this.onChange = e => {};
            this.onTouched = () => {};
            this._compareWith = Qt;
          }
          set compareWith(e) {
            if (typeof e != 'function') {
              throw new Error(
                `compareWith must be a function, but received ${JSON.stringify(
                  e
                )}`
              );
            }
            this._compareWith = e;
          }
          writeValue(e) {
            let t;
            this.value = e;
            if (Array.isArray(e)) {
              const n = e.map(e => this._getOptionId(e));
              t = (e, t) => {
                e._setSelected(n.indexOf(t.toString()) > -1);
              };
            } else {
              t = (e, t) => {
                e._setSelected(false);
              };
            }
            this._optionMap.forEach(t);
          }
          registerOnChange(e) {
            this.onChange = t => {
              const n = [];
              if (t.hasOwnProperty('selectedOptions')) {
                const e = t.selectedOptions;
                for (let t = 0; t < e.length; t++) {
                  const r = e.item(t);
                  const s = this._getOptionValue(r.value);
                  n.push(s);
                }
              } else {
                const e = t.options;
                for (let t = 0; t < e.length; t++) {
                  const r = e.item(t);
                  if (r.selected) {
                    const e = this._getOptionValue(r.value);
                    n.push(e);
                  }
                }
              }
              this.value = n;
              e(n);
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
          _registerOption(e) {
            const t = (this._idCounter++).toString();
            this._optionMap.set(t, e);
            return t;
          }
          _getOptionId(e) {
            for (const t of Array.from(this._optionMap.keys())) {
              if (this._compareWith(this._optionMap.get(t)._value, e)) {
                return t;
              }
            }
            return null;
          }
          _getOptionValue(e) {
            const t = (function(e) {
              return e.split(':')[0];
            })(e);
            if (this._optionMap.has(t)) {
              return this._optionMap.get(t)._value;
            } else {
              return e;
            }
          }
        },
        class {
          constructor(e, t, n, r) {
            this._renderer = e;
            this._elementRef = t;
            this._registry = n;
            this._injector = r;
            this.onChange = () => {};
            this.onTouched = () => {};
          }
          ngOnInit() {
            this._control = this._injector.get(Up);
            this._checkName();
            this._registry.add(this._control, this);
          }
          ngOnDestroy() {
            this._registry.remove(this);
          }
          writeValue(e) {
            this._state = e === this.value;
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'checked',
              this._state
            );
          }
          registerOnChange(e) {
            this._fn = e;
            this.onChange = () => {
              e(this.value);
              this._registry.select(this);
            };
          }
          fireUncheck(e) {
            this.writeValue(e);
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
          _checkName() {
            if (
              this.name &&
              this.formControlName &&
              this.name !== this.formControlName
            ) {
              this._throwNameError();
            }
            if (!this.name && this.formControlName) {
              this.name = this.formControlName;
            }
          }
          _throwNameError() {
            throw new Error(
              '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
            );
          }
        },
      ];
      const rf = 'VALID';
      const sf = 'INVALID';
      const of = 'PENDING';
      const lf = 'DISABLED';
      class hf {
        constructor(e, t) {
          this.validator = e;
          this.asyncValidator = t;
          this._onCollectionChange = () => {};
          this.pristine = true;
          this.touched = false;
          this._onDisabledChange = [];
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === rf;
        }
        get invalid() {
          return this.status === sf;
        }
        get pending() {
          return this.status == of;
        }
        get disabled() {
          return this.status === lf;
        }
        get enabled() {
          return this.status !== lf;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          if (this._updateOn) {
            return this._updateOn;
          } else if (this.parent) {
            return this.parent.updateOn;
          } else {
            return 'change';
          }
        }
        setValidators(e) {
          this.validator = af(e);
        }
        setAsyncValidators(e) {
          this.asyncValidator = uf(e);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(e = {}) {
          this.touched = true;
          if (this._parent && !e.onlySelf) {
            this._parent.markAsTouched(e);
          }
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: true });
          this._forEachChild(e => e.markAllAsTouched());
        }
        markAsUntouched(e = {}) {
          this.touched = false;
          this._pendingTouched = false;
          this._forEachChild(e => {
            e.markAsUntouched({ onlySelf: true });
          });
          if (this._parent && !e.onlySelf) {
            this._parent._updateTouched(e);
          }
        }
        markAsDirty(e = {}) {
          this.pristine = false;
          if (this._parent && !e.onlySelf) {
            this._parent.markAsDirty(e);
          }
        }
        markAsPristine(e = {}) {
          this.pristine = true;
          this._pendingDirty = false;
          this._forEachChild(e => {
            e.markAsPristine({ onlySelf: true });
          });
          if (this._parent && !e.onlySelf) {
            this._parent._updatePristine(e);
          }
        }
        markAsPending(e = {}) {
          this.status = of;
          if (e.emitEvent !== false) {
            this.statusChanges.emit(this.status);
          }
          if (this._parent && !e.onlySelf) {
            this._parent.markAsPending(e);
          }
        }
        disable(e = {}) {
          const t = this._parentMarkedDirty(e.onlySelf);
          this.status = lf;
          this.errors = null;
          this._forEachChild(t => {
            t.disable(Object.assign({}, e, { onlySelf: true }));
          });
          this._updateValue();
          if (e.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
          }
          this._updateAncestors(Object.assign({}, e, { skipPristineCheck: t }));
          this._onDisabledChange.forEach(e => e(true));
        }
        enable(e = {}) {
          const t = this._parentMarkedDirty(e.onlySelf);
          this.status = rf;
          this._forEachChild(t => {
            t.enable(Object.assign({}, e, { onlySelf: true }));
          });
          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: e.emitEvent,
          });
          this._updateAncestors(Object.assign({}, e, { skipPristineCheck: t }));
          this._onDisabledChange.forEach(e => e(false));
        }
        _updateAncestors(e) {
          if (this._parent && !e.onlySelf) {
            this._parent.updateValueAndValidity(e);
            if (!e.skipPristineCheck) {
              this._parent._updatePristine();
            }
            this._parent._updateTouched();
          }
        }
        setParent(e) {
          this._parent = e;
        }
        updateValueAndValidity(e = {}) {
          this._setInitialStatus();
          this._updateValue();
          if (this.enabled) {
            this._cancelExistingSubscription();
            this.errors = this._runValidator();
            this.status = this._calculateStatus();
            if (this.status === rf || this.status === of) {
              this._runAsyncValidator(e.emitEvent);
            }
          }
          if (e.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
          }
          if (this._parent && !e.onlySelf) {
            this._parent.updateValueAndValidity(e);
          }
        }
        _updateTreeValidity(e = { emitEvent: true }) {
          this._forEachChild(t => t._updateTreeValidity(e));
          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: e.emitEvent,
          });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? lf : rf;
        }
        _runValidator() {
          if (this.validator) {
            return this.validator(this);
          } else {
            return null;
          }
        }
        _runAsyncValidator(e) {
          if (this.asyncValidator) {
            this.status = of;
            const t = Bp(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe(t =>
              this.setErrors(t, { emitEvent: e })
            );
          }
        }
        _cancelExistingSubscription() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
          }
        }
        setErrors(e, t = {}) {
          this.errors = e;
          this._updateControlsErrors(t.emitEvent !== false);
        }
        get(e) {
          return (function(e, t, n) {
            if (t == null) {
              return null;
            } else {
              if (!(t instanceof Array)) {
                t = t.split('.');
              }
              if (t instanceof Array && t.length === 0) {
                return null;
              } else {
                return t.reduce(
                  (e, t) =>
                    e instanceof pf
                      ? e.controls.hasOwnProperty(t) ? e.controls[t] : null
                      : (e instanceof ff && e.at(t)) || null,
                  e
                );
              }
            }
          })(this, e);
        }
        getError(e, t) {
          const n = t ? this.get(t) : this;
          if (n && n.errors) {
            return n.errors[e];
          } else {
            return null;
          }
        }
        hasError(e, t) {
          return !!this.getError(e, t);
        }
        get root() {
          let e = this;
          while (e._parent) {
            e = e._parent;
          }
          return e;
        }
        _updateControlsErrors(e) {
          this.status = this._calculateStatus();
          if (e) {
            this.statusChanges.emit(this.status);
          }
          if (this._parent) {
            this._parent._updateControlsErrors(e);
          }
        }
        _initObservables() {
          this.valueChanges = new Ns();
          this.statusChanges = new Ns();
        }
        _calculateStatus() {
          if (this._allControlsDisabled()) {
            return lf;
          } else if (this.errors) {
            return sf;
          } else if (this._anyControlsHaveStatus(of)) {
            return of;
          } else if (this._anyControlsHaveStatus(sf)) {
            return sf;
          } else {
            return rf;
          }
        }
        _anyControlsHaveStatus(e) {
          return this._anyControls(t => t.status === e);
        }
        _anyControlsDirty() {
          return this._anyControls(e => e.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(e => e.touched);
        }
        _updatePristine(e = {}) {
          this.pristine = !this._anyControlsDirty();
          if (this._parent && !e.onlySelf) {
            this._parent._updatePristine(e);
          }
        }
        _updateTouched(e = {}) {
          this.touched = this._anyControlsTouched();
          if (this._parent && !e.onlySelf) {
            this._parent._updateTouched(e);
          }
        }
        _isBoxedValue(e) {
          return (
            typeof e == 'object' &&
            e !== null &&
            Object.keys(e).length === 2 &&
            'value' in e &&
            'disabled' in e
          );
        }
        _registerOnCollectionChange(e) {
          this._onCollectionChange = e;
        }
        _setUpdateStrategy(e) {
          if (cf(e) && e.updateOn != null) {
            this._updateOn = e.updateOn;
          }
        }
        _parentMarkedDirty(e) {
          return (
            !e &&
            this._parent &&
            this._parent.dirty &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class df extends hf {
        constructor(e = null, t, n) {
          super(af(t), uf(n, t));
          this._onChange = [];
          this._applyFormState(e);
          this._setUpdateStrategy(t);
          this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
          this._initObservables();
        }
        setValue(e, t = {}) {
          this.value = this._pendingValue = e;
          if (this._onChange.length && t.emitModelToViewChange !== false) {
            this._onChange.forEach(e =>
              e(this.value, t.emitViewToModelChange !== false)
            );
          }
          this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          this.setValue(e, t);
        }
        reset(e = null, t = {}) {
          this._applyFormState(e);
          this.markAsPristine(t);
          this.markAsUntouched(t);
          this.setValue(this.value, t);
          this._pendingChange = false;
        }
        _updateValue() {}
        _anyControls(e) {
          return false;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(e) {
          this._onChange.push(e);
        }
        _clearChangeFns() {
          this._onChange = [];
          this._onDisabledChange = [];
          this._onCollectionChange = () => {};
        }
        registerOnDisabledChange(e) {
          this._onDisabledChange.push(e);
        }
        _forEachChild(e) {}
        _syncPendingControls() {
          return (
            this.updateOn === 'submit' &&
            !(this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) &&
            !(this.setValue(this._pendingValue, {
              onlySelf: true,
              emitModelToViewChange: false,
            }),
            0)
          );
        }
        _applyFormState(e) {
          if (this._isBoxedValue(e)) {
            this.value = this._pendingValue = e.value;
            if (e.disabled) {
              this.disable({ onlySelf: true, emitEvent: false });
            } else {
              this.enable({ onlySelf: true, emitEvent: false });
            }
          } else {
            this.value = this._pendingValue = e;
          }
        }
      }
      class pf extends hf {
        constructor(e, t, n) {
          super(af(t), uf(n, t));
          this.controls = e;
          this._initObservables();
          this._setUpdateStrategy(t);
          this._setUpControls();
          this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        registerControl(e, t) {
          if (this.controls[e]) {
            return this.controls[e];
          } else {
            this.controls[e] = t;
            t.setParent(this);
            t._registerOnCollectionChange(this._onCollectionChange);
            return t;
          }
        }
        addControl(e, t) {
          this.registerControl(e, t);
          this.updateValueAndValidity();
          this._onCollectionChange();
        }
        removeControl(e) {
          if (this.controls[e]) {
            this.controls[e]._registerOnCollectionChange(() => {});
          }
          delete this.controls[e];
          this.updateValueAndValidity();
          this._onCollectionChange();
        }
        setControl(e, t) {
          if (this.controls[e]) {
            this.controls[e]._registerOnCollectionChange(() => {});
          }
          delete this.controls[e];
          if (t) {
            this.registerControl(e, t);
          }
          this.updateValueAndValidity();
          this._onCollectionChange();
        }
        contains(e) {
          return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
        }
        setValue(e, t = {}) {
          this._checkAllValuesPresent(e);
          Object.keys(e).forEach(n => {
            this._throwIfControlMissing(n);
            this.controls[n].setValue(e[n], {
              onlySelf: true,
              emitEvent: t.emitEvent,
            });
          });
          this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          Object.keys(e).forEach(n => {
            if (this.controls[n]) {
              this.controls[n].patchValue(e[n], {
                onlySelf: true,
                emitEvent: t.emitEvent,
              });
            }
          });
          this.updateValueAndValidity(t);
        }
        reset(e = {}, t = {}) {
          this._forEachChild((n, r) => {
            n.reset(e[r], { onlySelf: true, emitEvent: t.emitEvent });
          });
          this._updatePristine(t);
          this._updateTouched(t);
          this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (e, t, n) => (
              (e[n] = t instanceof df ? t.value : t.getRawValue()), e
            )
          );
        }
        _syncPendingControls() {
          let e = this._reduceChildren(
            false,
            (e, t) => !!t._syncPendingControls() || e
          );
          if (e) {
            this.updateValueAndValidity({ onlySelf: true });
          }
          return e;
        }
        _throwIfControlMissing(e) {
          if (!Object.keys(this.controls).length) {
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          }
          if (!this.controls[e]) {
            throw new Error(`Cannot find form control with name: ${e}.`);
          }
        }
        _forEachChild(e) {
          Object.keys(this.controls).forEach(t => e(this.controls[t], t));
        }
        _setUpControls() {
          this._forEachChild(e => {
            e.setParent(this);
            e._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(e) {
          let t = false;
          this._forEachChild((n, r) => {
            t = t || (this.contains(r) && e(n));
          });
          return t;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (e, t, n) => ((t.enabled || this.disabled) && (e[n] = t.value), e)
          );
        }
        _reduceChildren(e, t) {
          let n = e;
          this._forEachChild((e, r) => {
            n = t(n, e, r);
          });
          return n;
        }
        _allControlsDisabled() {
          for (const e of Object.keys(this.controls)) {
            if (this.controls[e].enabled) {
              return false;
            }
          }
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(e) {
          this._forEachChild((t, n) => {
            if (e[n] === void 0) {
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
            }
          });
        }
      }
      class ff extends hf {
        constructor(e, t, n) {
          super(af(t), uf(n, t));
          this.controls = e;
          this._initObservables();
          this._setUpdateStrategy(t);
          this._setUpControls();
          this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        at(e) {
          return this.controls[e];
        }
        push(e) {
          this.controls.push(e);
          this._registerControl(e);
          this.updateValueAndValidity();
          this._onCollectionChange();
        }
        insert(e, t) {
          this.controls.splice(e, 0, t);
          this._registerControl(t);
          this.updateValueAndValidity();
        }
        removeAt(e) {
          if (this.controls[e]) {
            this.controls[e]._registerOnCollectionChange(() => {});
          }
          this.controls.splice(e, 1);
          this.updateValueAndValidity();
        }
        setControl(e, t) {
          if (this.controls[e]) {
            this.controls[e]._registerOnCollectionChange(() => {});
          }
          this.controls.splice(e, 1);
          if (t) {
            this.controls.splice(e, 0, t);
            this._registerControl(t);
          }
          this.updateValueAndValidity();
          this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(e, t = {}) {
          this._checkAllValuesPresent(e);
          e.forEach((e, n) => {
            this._throwIfControlMissing(n);
            this.at(n).setValue(e, { onlySelf: true, emitEvent: t.emitEvent });
          });
          this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          e.forEach((e, n) => {
            if (this.at(n)) {
              this.at(n).patchValue(e, {
                onlySelf: true,
                emitEvent: t.emitEvent,
              });
            }
          });
          this.updateValueAndValidity(t);
        }
        reset(e = [], t = {}) {
          this._forEachChild((n, r) => {
            n.reset(e[r], { onlySelf: true, emitEvent: t.emitEvent });
          });
          this._updatePristine(t);
          this._updateTouched(t);
          this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map(
            e => (e instanceof df ? e.value : e.getRawValue())
          );
        }
        clear() {
          if (!(this.controls.length < 1)) {
            this._forEachChild(e => e._registerOnCollectionChange(() => {}));
            this.controls.splice(0);
            this.updateValueAndValidity();
          }
        }
        _syncPendingControls() {
          let e = this.controls.reduce(
            (e, t) => !!t._syncPendingControls() || e,
            false
          );
          if (e) {
            this.updateValueAndValidity({ onlySelf: true });
          }
          return e;
        }
        _throwIfControlMissing(e) {
          if (!this.controls.length) {
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          }
          if (!this.at(e)) {
            throw new Error(`Cannot find form control at index ${e}`);
          }
        }
        _forEachChild(e) {
          this.controls.forEach((t, n) => {
            e(t, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter(e => e.enabled || this.disabled)
            .map(e => e.value);
        }
        _anyControls(e) {
          return this.controls.some(t => t.enabled && e(t));
        }
        _setUpControls() {
          this._forEachChild(e => this._registerControl(e));
        }
        _checkAllValuesPresent(e) {
          this._forEachChild((t, n) => {
            if (e[n] === void 0) {
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
            }
          });
        }
        _allControlsDisabled() {
          for (const e of this.controls) {
            if (e.enabled) {
              return false;
            }
          }
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(e) {
          e.setParent(this);
          e._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const gf = (() => Promise.resolve(null))();
      class mf extends Dp {
        constructor(e, t) {
          super();
          this.submitted = false;
          this._directives = [];
          this.ngSubmit = new Ns();
          this.form = new pf({}, ef(e), tf(t));
        }
        ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        get formDirective() {
          return this;
        }
        get control() {
          return this.form;
        }
        get path() {
          return [];
        }
        get controls() {
          return this.form.controls;
        }
        addControl(e) {
          gf.then(() => {
            const t = this._findContainer(e.path);
            e.control = t.registerControl(e.name, e.control);
            Jp(e.control, e);
            e.control.updateValueAndValidity({ emitEvent: false });
            this._directives.push(e);
          });
        }
        getControl(e) {
          return this.form.get(e.path);
        }
        removeControl(e) {
          gf.then(() => {
            const t = this._findContainer(e.path);
            if (t) {
              t.removeControl(e.name);
            }
            (function(e, t) {
              const n = e.indexOf(t);
              if (n > -1) {
                e.splice(n, 1);
              }
            })(this._directives, e);
          });
        }
        addFormGroup(e) {
          gf.then(() => {
            const t = this._findContainer(e.path);
            const n = new pf({});
            (function(e, t) {
              if (e == null) {
                Xp(t, 'Cannot find control with');
              }
              e.validator = $p.compose([e.validator, t.validator]);
              e.asyncValidator = $p.composeAsync([
                e.asyncValidator,
                t.asyncValidator,
              ]);
            })(n, e);
            t.registerControl(e.name, n);
            n.updateValueAndValidity({ emitEvent: false });
          });
        }
        removeFormGroup(e) {
          gf.then(() => {
            const t = this._findContainer(e.path);
            if (t) {
              t.removeControl(e.name);
            }
          });
        }
        getFormGroup(e) {
          return this.form.get(e.path);
        }
        updateModel(e, t) {
          gf.then(() => {
            this.form.get(e.path).setValue(t);
          });
        }
        setValue(e) {
          this.control.setValue(e);
        }
        onSubmit(e) {
          this.submitted = true;
          var t = this._directives;
          this.form._syncPendingControls();
          t.forEach(e => {
            const t = e.control;
            if (t.updateOn === 'submit' && t._pendingChange) {
              e.viewToModelUpdate(t._pendingValue);
              t._pendingChange = false;
            }
          });
          this.ngSubmit.emit(e);
          return false;
        }
        onReset() {
          this.resetForm();
        }
        resetForm(e) {
          this.form.reset(e);
          this.submitted = false;
        }
        _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
          }
        }
        _findContainer(e) {
          e.pop();
          if (e.length) {
            return this.form.get(e);
          } else {
            return this.form;
          }
        }
      }
      class yf {
        static modelParentException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive "formControlName" instead.  Example:\n\n      ${
              Zp.formControlName
            }\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ${
              Zp.ngModelWithFormGroup
            }`
          );
        }
        static formGroupNameException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${
              Zp.formGroupName
            }\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${
              Zp.ngModelGroup
            }`
          );
        }
        static missingNameException() {
          throw new Error(
            'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
          );
        }
        static modelGroupParentException() {
          throw new Error(
            `\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${
              Zp.formGroupName
            }\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${
              Zp.ngModelGroup
            }`
          );
        }
        static ngFormWarning() {
          console.warn(
            "\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "
          );
        }
      }
      const vf = new Se('NgFormSelectorWarning');
      class _f extends Dp {
        ngOnInit() {
          this._checkParentType();
          this.formDirective.addFormGroup(this);
        }
        ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
          }
        }
        get control() {
          return this.formDirective.getFormGroup(this);
        }
        get path() {
          return Kp(this.name, this._parent);
        }
        get formDirective() {
          if (this._parent) {
            return this._parent.formDirective;
          } else {
            return null;
          }
        }
        get validator() {
          return ef(this._validators);
        }
        get asyncValidator() {
          return tf(this._asyncValidators);
        }
        _checkParentType() {}
      }
      class wf extends _f {
        constructor(e, t, n) {
          super();
          this._parent = e;
          this._validators = t;
          this._asyncValidators = n;
        }
        _checkParentType() {
          if (!(this._parent instanceof wf) && !(this._parent instanceof mf)) {
            yf.modelGroupParentException();
          }
        }
      }
      const bf = (() => Promise.resolve(null))();
      class Cf extends Up {
        constructor(e, t, n, r) {
          super();
          this.control = new df();
          this._registered = false;
          this.update = new Ns();
          this._parent = e;
          this._rawValidators = t || [];
          this._rawAsyncValidators = n || [];
          this.valueAccessor = (function(e, t) {
            if (!t) {
              return null;
            }
            if (!Array.isArray(t)) {
              Xp(
                e,
                'Value accessor was not provided as an array for form control with'
              );
            }
            let n = void 0;
            let r = void 0;
            let s = void 0;
            t.forEach(t => {
              if (t.constructor === Op) {
                n = t;
              } else if (
                (function() {
                  var e = t;
                  return nf.some(t => e.constructor === t);
                })()
              ) {
                if (r) {
                  Xp(
                    e,
                    'More than one built-in value accessor matches form control with'
                  );
                }
                r = t;
              } else {
                if (s) {
                  Xp(
                    e,
                    'More than one custom value accessor matches form control with'
                  );
                }
                s = t;
              }
            });
            return (
              s ||
              r ||
              n ||
              (Xp(e, 'No valid value accessor for form control with'), null)
            );
          })(this, r);
        }
        ngOnChanges(e) {
          this._checkForErrors();
          if (!this._registered) {
            this._setUpControl();
          }
          if ('isDisabled' in e) {
            this._updateDisabled(e);
          }
          if (
            (function(e, t) {
              if (!e.hasOwnProperty('model')) {
                return false;
              }
              const n = e.model;
              return !!n.isFirstChange() || !Qt(t, n.currentValue);
            })(e, this.viewModel)
          ) {
            this._updateValue(this.model);
            this.viewModel = this.model;
          }
        }
        ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeControl(this);
          }
        }
        get path() {
          if (this._parent) {
            return Kp(this.name, this._parent);
          } else {
            return [this.name];
          }
        }
        get formDirective() {
          if (this._parent) {
            return this._parent.formDirective;
          } else {
            return null;
          }
        }
        get validator() {
          return ef(this._rawValidators);
        }
        get asyncValidator() {
          return tf(this._rawAsyncValidators);
        }
        viewToModelUpdate(e) {
          this.viewModel = e;
          this.update.emit(e);
        }
        _setUpControl() {
          this._setUpdateStrategy();
          if (this._isStandalone()) {
            this._setUpStandalone();
          } else {
            this.formDirective.addControl(this);
          }
          this._registered = true;
        }
        _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
          }
        }
        _isStandalone() {
          return !this._parent || (!!this.options && !!this.options.standalone);
        }
        _setUpStandalone() {
          Jp(this.control, this);
          this.control.updateValueAndValidity({ emitEvent: false });
        }
        _checkForErrors() {
          if (!this._isStandalone()) {
            this._checkParentType();
          }
          this._checkName();
        }
        _checkParentType() {
          if (!(this._parent instanceof wf) && this._parent instanceof _f) {
            yf.formGroupNameException();
          } else if (
            !(this._parent instanceof wf) &&
            !(this._parent instanceof mf)
          ) {
            yf.modelParentException();
          }
        }
        _checkName() {
          if (this.options && this.options.name) {
            this.name = this.options.name;
          }
          if (!this._isStandalone() && !this.name) {
            yf.missingNameException();
          }
        }
        _updateValue(e) {
          bf.then(() => {
            this.control.setValue(e, { emitViewToModelChange: false });
          });
        }
        _updateDisabled(e) {
          const t = e.isDisabled.currentValue;
          const n = t === '' || (t && t !== 'false');
          bf.then(() => {
            if (n && !this.control.disabled) {
              this.control.disable();
            } else if (!n && this.control.disabled) {
              this.control.enable();
            }
          });
        }
      }
      class xf {}
      class Ef {
        static withConfig(e) {
          return {
            ngModule: Ef,
            providers: [
              { provide: vf, useValue: e.warnOnDeprecatedNgFormSelector },
            ],
          };
        }
      }
      var Sf = er({
        encapsulation: 0,
        styles: [
          [
            '.desktop[_ngcontent-%COMP%]{display:block}.mobile[_ngcontent-%COMP%]{display:none}@media screen and (max-width:768px){.desktop[_ngcontent-%COMP%]{display:none}.mobile[_ngcontent-%COMP%]{display:block}}.explorer-container[_ngcontent-%COMP%]{width:90%;padding-left:5%;padding-right:5%}.little-button[_ngcontent-%COMP%]{height:2.5rem;font-weight:700}.container-outer[_ngcontent-%COMP%]{width:100%;min-height:calc(100vh - 15rem);display:flex;justify-content:center}.container-inner[_ngcontent-%COMP%]{text-align:center}.welcome-top[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:2rem}.welcome[_ngcontent-%COMP%]{font-size:1.5rem}.signup[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.5rem;color:#fff}.title-logo-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:1rem}a[_ngcontent-%COMP%]{color:#1e324d;text-decoration:underline}.btn.btn-light.yes[_ngcontent-%COMP%]{color:#91c8a4;border-color:#91c8a4;font-weight:700;background-color:#5a7190}.footer[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.25rem;display:flex;justify-content:center}.footer-inner[_ngcontent-%COMP%]{text-align:center}.section-border[_ngcontent-%COMP%]{margin-top:2rem;margin-left:1rem;margin-right:1rem;border-bottom:1px solid #5a7190}.unit[_ngcontent-%COMP%]{color:#1e324d;font-weight:400}.content-container[_ngcontent-%COMP%]{margin-top:1rem;text-align:left;padding-left:3rem;padding-right:3rem}.section-heading[_ngcontent-%COMP%]{position:relative;z-index:-1;font-size:2rem;font-weight:400;text-decoration:none;text-align:center}.subsection-heading[_ngcontent-%COMP%]{color:#fff;font-size:2rem}.subcontent-container[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]{font-size:1.25rem;margin-top:.5rem}.subcontent-container[_ngcontent-%COMP%]   .subsection-content[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.25rem}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]{width:12.5rem;height:12.5rem;border:1px solid #5a7190;display:inline-block;margin-top:1rem;margin-right:3rem;vertical-align:top}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .intermediate[_ngcontent-%COMP%]{width:12.5rem;height:12.5rem;display:flex;align-items:center;justify-content:center}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .download-sub-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .download-sub-container[_ngcontent-%COMP%]   .operating-system[_ngcontent-%COMP%]{cursor:default;font-size:2.5rem;text-align:center}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .download-sub-container[_ngcontent-%COMP%]   .architecture-container[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .download-sub-container[_ngcontent-%COMP%]   .architecture-container[_ngcontent-%COMP%]   .architecture[_ngcontent-%COMP%]{cursor:pointer}a.btn[_ngcontent-%COMP%]{color:#fff;font-weight:700}.big-button[_ngcontent-%COMP%]{width:21rem}',
          ],
        ],
        data: {},
      });
      var Qf = Ur('app-root', Pa, qf, {}, {}, []);
      class Gf {}
      var Wf = yl(_l, [Pa], function(e) {
        var e = [
          Ir(512, on, ln, [[8, [Rp, Qf]], [3, on], He]),
          Ir(5120, zs, qi, [[3, zs]]),
          Ir(4608, Fl, jl, [zs, [2, Ll]]),
          Ir(5120, xs, Qi, [li]),
          Ir(5120, Vs, Us, []),
          Ir(5120, Rn, zi, []),
          Ir(5120, In, Bi, []),
          Ir(4608, xc, Ec, [Kl]),
          Ir(6144, St, null, [xc]),
          Ir(4608, mc, vc, []),
          Ir(
            5120,
            Lu,
            function(e, t, n, r, s, i, o, l) {
              return [new fc(e, t, n), new Cc(r), new _c(s, i, o, l)];
            },
            [Kl, li, js, Kl, Kl, mc, $s, [2, yc]]
          ),
          Ir(4608, Fu, Fu, [Lu, li]),
          Ir(135680, $u, $u, [Kl]),
          Ir(4608, Zu, Zu, [Fu, $u, Vs]),
          Ir(6144, pn, null, [Zu]),
          Ir(6144, Hu, null, [$u]),
          Ir(4608, fi, fi, [li]),
          Ir(4608, Wp, Wp, []),
          Ir(5120, $h, bp, [Xd]),
          Ir(4608, ap, ap, []),
          Ir(6144, op, null, [ap]),
          Ir(135680, up, up, [Xd, Ri, Ks, Mt, op]),
          Ir(4608, lp, lp, []),
          Ir(5120, cp, mp, [Xd, Yl, hp]),
          Ir(5120, Sp, Ep, [Cp]),
          Ir(
            5120,
            Hs,
            function(e) {
              return [e];
            },
            [Sp]
          ),
          Ir(4608, Ta, ka, [Kl, js, Ea]),
          Ir(4608, Aa, Aa, [Ta, Sa]),
          Ir(
            5120,
            va,
            function(e) {
              return [e];
            },
            [Aa]
          ),
          Ir(4608, Ca, Ca, []),
          Ir(6144, ba, null, [Ca]),
          Ir(4608, xa, xa, [ba]),
          Ir(6144, ta, null, [xa]),
          Ir(4608, ea, Ra, [ta, Mt]),
          Ir(4608, ma, ma, [ea]),
          Ir(1073742336, Zl, Zl, []),
          Ir(1024, Xe, Pc, []),
          Ir(
            1024,
            Ci,
            function() {
              return [fp()];
            },
            []
          ),
          Ir(512, Cp, Cp, [Mt]),
          Ir(
            1024,
            Ms,
            function(e, t) {
              return [
                ((n = e),
                Du('probe', Uu),
                Du(
                  'coreTokens',
                  Object.assign(
                    {},
                    Vu,
                    (n || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
                  )
                ),
                () => Uu),
                xp(t),
              ];
              var n;
            },
            [[2, Ci], Cp]
          ),
          Ir(512, Ds, Ds, [[2, Ms]]),
          Ir(131584, ki, ki, [li, $s, Mt, Xe, on, Ds]),
          Ir(1073742336, Gi, Gi, [ki]),
          Ir(1073742336, Oc, Oc, [[3, Oc]]),
          Ir(1073742336, xf, xf, []),
          Ir(1073742336, Ef, Ef, []),
          Ir(1024, dp, vp, [[3, Xd]]),
          Ir(512, wh, bh, []),
          Ir(512, rp, rp, []),
          Ir(256, hp, {}, []),
          Ir(1024, Il, yp, [Al, [2, Nl], hp]),
          Ir(512, Pl, Pl, [Il, Al]),
          Ir(512, Ks, Ks, []),
          Ir(512, Ri, Mi, [Ks, [2, Pi]]),
          Ir(
            1024,
            Qd,
            function() {
              return [[]];
            },
            []
          ),
          Ir(1024, Xd, wp, [
            ki,
            wh,
            rp,
            Pl,
            Mt,
            Ri,
            Ks,
            Qd,
            hp,
            [2, Wd],
            [2, Bd],
          ]),
          Ir(1073742336, gp, gp, [[2, dp], [2, Xd]]),
          Ir(1073742336, Gf, Gf, []),
          Ir(1073742336, Ia, Ia, []),
          Ir(1073742336, Na, Na, []),
          Ir(1073742336, _l, _l, []),
          Ir(256, Pt, true, []),
          Ir(256, Ea, 'XSRF-TOKEN', []),
          Ir(256, Sa, 'X-XSRF-TOKEN', []),
        ];
        const t = {};
        const n = [];
        let r = false;
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          if (i.token === Pt && i.value === true) {
            r = true;
          }
          if (1073741824 & i.flags) {
            n.push(i.token);
          }
          i.index = s;
          t[Jn(i.token)] = i;
        }
        return {
          factory: null,
          providersByKey: t,
          providers: e,
          modules: n,
          isRoot: r,
        };
      });
      (function() {
        if (tt) {
          throw new Error('Cannot enable prod mode after platform setup.');
        }
        et = false;
      })();
      Nc()
        .bootstrapModuleFactory(Wf)
        .catch(e => console.error(e));
    },
    zn8P: function(e, t) {
      function n(e) {
        return Promise.resolve().then(function() {
          var t = new Error("Cannot find module '" + e + "'");
          t.code = 'MODULE_NOT_FOUND';
          throw t;
        });
      }
      n.keys = function() {
        return [];
      };
      n.resolve = n;
      e.exports = n;
      n.id = 'zn8P';
    },
  },
  [[0, 0]],
]);

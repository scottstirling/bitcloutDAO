(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    1: function(e, t, n) {
      e.exports = n('hN/g');
    },
    'hN/g': function(e, t, n) {
      'use strict';
      n.r(t);
      n('pDpN');
    },
    pDpN: function(e, t) {
      function d(e, t) {
        return Zone.current.wrap(e, t);
      }
      function g(e, t, n, o, r) {
        return Zone.current.scheduleMacroTask(e, t, n, o, r);
      }
      function T(e, t) {
        for (let n = e.length - 1; n >= 0; n--) {
          if (typeof e[n] == 'function') {
            e[n] = d(e[n], t + '_' + n);
          }
        }
        return e;
      }
      function w(e) {
        return (
          !e ||
          (e.writable !== false &&
            (typeof e.get != 'function' || e.set !== void 0))
        );
      }
      function z(e, t, r) {
        let s = n(e, t);
        if (!s && r && n(r, t)) {
          s = { enumerable: true, configurable: true };
        }
        if (!s || !s.configurable) {
          return;
        }
        const i = _('on' + t + 'patched');
        if (e.hasOwnProperty(i) && e[i]) {
          return;
        }
        delete s.writable;
        delete s.value;
        const a = s.get;
        const c = s.set;
        const l = t.substr(2);
        let u = O[l];
        if (!u) {
          u = O[l] = _('ON_PROPERTY' + l);
        }
        s.set = function(t) {
          let n = this;
          if (!n && e === k) {
            n = k;
          }
          if (n) {
            if (n[u]) {
              n.removeEventListener(l, P);
            }
            if (c) {
              c.apply(n, v);
            }
            if (typeof t == 'function') {
              n[u] = t;
              n.addEventListener(l, P, false);
            } else {
              n[u] = null;
            }
          }
        };
        s.get = function() {
          let n = this;
          if (!n && e === k) {
            n = k;
          }
          if (!n) {
            return null;
          }
          const o = n[u];
          if (o) {
            return o;
          }
          if (a) {
            let e = a && a.call(this);
            if (e) {
              s.set.call(this, e);
              if (typeof n[b] == 'function') {
                n.removeAttribute(t);
              }
              return e;
            }
          }
          return null;
        };
        o(e, t, s);
        e[i] = true;
      }
      function j(e, t, n) {
        if (t) {
          for (let o = 0; o < t.length; o++) {
            z(e, 'on' + t[o], n);
          }
        } else {
          const t = [];
          for (const n in e) {
            if (n.substr(0, 2) == 'on') {
              t.push(n);
            }
          }
          for (let o = 0; o < t.length; o++) {
            z(e, t[o], n);
          }
        }
      }
      function I(e) {
        const t = k[e];
        if (!t) {
          return;
        }
        k[_(e)] = t;
        k[e] = function() {
          const n = T(arguments, e);
          switch (n.length) {
            case 0:
              this[C] = new t();
              break;
            case 1:
              this[C] = new t(n[0]);
              break;
            case 2:
              this[C] = new t(n[0], n[1]);
              break;
            case 3:
              this[C] = new t(n[0], n[1], n[2]);
              break;
            case 4:
              this[C] = new t(n[0], n[1], n[2], n[3]);
              break;
            default:
              throw new Error('Arg list too long.');
          }
        };
        L(k[e], t);
        const n = new t(function() {});
        let r;
        for (r in n) {
          if (e !== 'XMLHttpRequest' || r !== 'responseBlob') {
            (function() {
              var t = r;
              if (typeof n[t] == 'function') {
                k[e].prototype[t] = function() {
                  return this[C][t].apply(this[C], arguments);
                };
              } else {
                o(k[e].prototype, t, {
                  set: function(n) {
                    if (typeof n == 'function') {
                      this[C][t] = d(n, e + '.' + t);
                      L(this[C][t], n);
                    } else {
                      this[C][t] = n;
                    }
                  },
                  get: function() {
                    return this[C][t];
                  },
                });
              }
            })();
          }
        }
        for (r in t) {
          if (r !== 'prototype' && t.hasOwnProperty(r)) {
            k[e][r] = t[r];
          }
        }
      }
      function x(e, t, o) {
        let s = e;
        while (s && !s.hasOwnProperty(t)) {
          s = r(s);
        }
        if (!s && e[t]) {
          s = e;
        }
        const i = _(t);
        let a = null;
        if (s && !(a = s[i]) && ((a = s[i] = s[t]), w(s && n(s, t)))) {
          const e = o(a, i, t);
          s[t] = function() {
            return e(this, arguments);
          };
          L(s[t], a);
          if (R) {
            c = a;
            l = s[t];
            if (typeof Object.getOwnPropertySymbols == 'function') {
              Object.getOwnPropertySymbols(c).forEach(e => {
                const t = Object.getOwnPropertyDescriptor(c, e);
                Object.defineProperty(l, e, {
                  get: function() {
                    return c[e];
                  },
                  set: function(n) {
                    if (!t || (t.writable && typeof t.set == 'function')) {
                      c[e] = n;
                    }
                  },
                  enumerable: !t || t.enumerable,
                  configurable: !t || t.configurable,
                });
              });
            }
          }
        }
        var c;
        var l;
        return a;
      }
      function M(e, t, n) {
        function r(e) {
          const t = e.data;
          t.args[t.cbIdx] = function() {
            e.invoke.apply(this, arguments);
          };
          o.apply(t.target, t.args);
          return e;
        }
        let o = null;
        o = x(
          e,
          t,
          e =>
            function(t, o) {
              const s = n(t, o);
              if (s.cbIdx >= 0 && typeof o[s.cbIdx] == 'function') {
                return g(s.name, o[s.cbIdx], s, r);
              } else {
                return e.apply(t, o);
              }
            }
        );
      }
      function L(e, t) {
        e[_('OriginalDelegate')] = t;
      }
      function F() {
        try {
          const e = y.navigator.userAgent;
          if (e.indexOf('MSIE ') !== -1 || e.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (e) {}
        return false;
      }
      function H() {
        if (N) {
          return A;
        }
        N = true;
        try {
          const e = y.navigator.userAgent;
          if (
            e.indexOf('MSIE ') !== -1 ||
            e.indexOf('Trident/') !== -1 ||
            e.indexOf('Edge/') !== -1
          ) {
            A = true;
          }
        } catch (e) {}
        return A;
      }
      function V(e, t, n) {
        function v(t, n) {
          function j(e) {
            if (!G && typeof E.options != 'boolean' && E.options != null) {
              e.options = !!E.options.capture;
              E.options = e.options;
            }
          }
          if (!t) {
            return false;
          }
          let a = true;
          if (n && n.useG !== void 0) {
            a = n.useG;
          }
          const c = n && n.vh;
          let y = true;
          if (n && n.chkDup !== void 0) {
            y = n.chkDup;
          }
          let v = false;
          if (n && n.rt !== void 0) {
            v = n.rt;
          }
          let T = t;
          while (T && !T.hasOwnProperty(o)) {
            T = r(T);
          }
          if (!T && t[o]) {
            T = t;
          }
          if (!T) {
            return false;
          }
          if (T[u]) {
            return false;
          }
          const w = n && n.eventNameToString;
          const E = {};
          const S = (T[u] = T[o]);
          const D = (T[_(s)] = T[s]);
          const O = (T[_(i)] = T[i]);
          const P = (T[_(l)] = T[l]);
          let z;
          if (n && n.prepend) {
            z = T[_(n.prepend)] = T[n.prepend];
          }
          const C = a
            ? function(e) {
                if (!E.isExisting) {
                  j(e);
                  return S.call(
                    E.target,
                    E.eventName,
                    E.capture ? b : k,
                    E.options
                  );
                }
              }
            : function(e) {
                j(e);
                return S.call(E.target, E.eventName, e.invoke, E.options);
              };
          const I = a
            ? function(e) {
                if (!e.isRemoved) {
                  const t = B[e.eventName];
                  let n;
                  if (t) {
                    n = t[e.capture ? h : p];
                  }
                  const o = n && e.target[n];
                  if (o) {
                    for (let r = 0; r < o.length; r++) {
                      if (o[r] === e) {
                        o.splice(r, 1);
                        e.isRemoved = true;
                        if (o.length === 0) {
                          e.allRemoved = true;
                          e.target[n] = null;
                        }
                        break;
                      }
                    }
                  }
                }
                if (e.allRemoved) {
                  return D.call(
                    e.target,
                    e.eventName,
                    e.capture ? b : k,
                    e.options
                  );
                }
              }
            : function(e) {
                return D.call(e.target, e.eventName, e.invoke, e.options);
              };
          const R =
            n && n.diff
              ? n.diff
              : function(e, t) {
                  const n = typeof t;
                  return (
                    (n === 'function' && e.callback === t) ||
                    (n === 'object' && e.originalDelegate === t)
                  );
                };
          const x = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
          const M = function(t, n, o, r, s = false, i = false) {
            return function() {
              const l = this || e;
              const u = arguments[0];
              let d = arguments[1];
              if (!d) {
                return t.apply(this, arguments);
              }
              if (Z && u === 'uncaughtException') {
                return t.apply(this, arguments);
              }
              let g = false;
              if (typeof d != 'function') {
                if (!d.handleEvent) {
                  return t.apply(this, arguments);
                }
                g = true;
              }
              if (c && !c(t, d, l, arguments)) {
                return;
              }
              const _ = arguments[2];
              if (x) {
                for (let e = 0; e < x.length; e++) {
                  if (u === x[e]) {
                    return t.apply(this, arguments);
                  }
                }
              }
              let m;
              let k = false;
              if (_ === void 0) {
                m = false;
              } else if (_ === true) {
                m = true;
              } else if (_ === false) {
                m = false;
              } else {
                m = !!_ && !!_.capture;
                k = !!_ && !!_.once;
              }
              const b = Zone.current;
              const v = B[u];
              let T;
              if (v) {
                T = v[m ? h : p];
              } else {
                const e = (w ? w(u) : u) + p;
                const t = (w ? w(u) : u) + h;
                const n = f + e;
                const o = f + t;
                B[u] = {};
                B[u][p] = n;
                B[u][h] = o;
                T = m ? o : n;
              }
              let S;
              let D = l[T];
              let O = false;
              if (D) {
                O = true;
                if (y) {
                  for (let e = 0; e < D.length; e++) {
                    if (R(D[e], d)) {
                      return;
                    }
                  }
                }
              } else {
                D = l[T] = [];
              }
              const P = l.constructor.name;
              const z = $[P];
              if (z) {
                S = z[u];
              }
              if (!S) {
                S = P + n + (w ? w(u) : u);
              }
              E.options = _;
              if (k) {
                E.options.once = false;
              }
              E.target = l;
              E.capture = m;
              E.eventName = u;
              E.isExisting = O;
              const j = a ? q : void 0;
              if (j) {
                j.taskData = E;
              }
              const C = b.scheduleEventTask(S, d, j, o, r);
              E.target = null;
              if (j) {
                j.taskData = null;
              }
              if (k) {
                _.once = true;
              }
              if (G || typeof C.options != 'boolean') {
                C.options = _;
              }
              C.target = l;
              C.capture = m;
              C.eventName = u;
              if (g) {
                C.originalDelegate = d;
              }
              if (i) {
                D.unshift(C);
              } else {
                D.push(C);
              }
              if (s) {
                return l;
              } else {
                return;
              }
            };
          };
          T[o] = M(S, d, C, I, v);
          if (z) {
            T[g] = M(
              z,
              m,
              function(e) {
                return z.call(E.target, E.eventName, e.invoke, E.options);
              },
              I,
              v,
              true
            );
          }
          T[s] = function() {
            const t = this || e;
            const n = arguments[0];
            const o = arguments[2];
            let r;
            r =
              o !== void 0 &&
              (o === true || (o !== false && !!o && !!o.capture));
            const s = arguments[1];
            if (!s) {
              return D.apply(this, arguments);
            }
            if (c && !c(D, s, t, arguments)) {
              return;
            }
            const i = B[n];
            let a;
            if (i) {
              a = i[r ? h : p];
            }
            const l = a && t[a];
            if (l) {
              for (let e = 0; e < l.length; e++) {
                const n = l[e];
                if (R(n, s)) {
                  l.splice(e, 1);
                  n.isRemoved = true;
                  if (l.length === 0) {
                    n.allRemoved = true;
                    t[a] = null;
                  }
                  n.zone.cancelTask(n);
                  if (v) {
                    return t;
                  } else {
                    return;
                  }
                }
              }
            }
            return D.apply(this, arguments);
          };
          T[i] = function() {
            const t = this || e;
            const n = arguments[0];
            const o = [];
            const r = X(t, w ? w(n) : n);
            for (let e = 0; e < r.length; e++) {
              const t = r[e];
              o.push(t.originalDelegate ? t.originalDelegate : t.callback);
            }
            return o;
          };
          T[l] = function() {
            const t = this || e;
            const n = arguments[0];
            if (n) {
              const e = B[n];
              if (e) {
                const o = t[e[p]];
                const r = t[e[h]];
                if (o) {
                  const e = o.slice();
                  for (let t = 0; t < e.length; t++) {
                    const o = e[t];
                    this[s].call(
                      this,
                      n,
                      o.originalDelegate ? o.originalDelegate : o.callback,
                      o.options
                    );
                  }
                }
                if (r) {
                  const e = r.slice();
                  for (let t = 0; t < e.length; t++) {
                    const o = e[t];
                    this[s].call(
                      this,
                      n,
                      o.originalDelegate ? o.originalDelegate : o.callback,
                      o.options
                    );
                  }
                }
              }
            } else {
              const e = Object.keys(t);
              for (let t = 0; t < e.length; t++) {
                const n = U.exec(e[t]);
                let o = n && n[1];
                if (o && o !== 'removeListener') {
                  this[l].call(this, o);
                }
              }
              this[l].call(this, 'removeListener');
            }
            if (v) {
              return this;
            }
          };
          L(T[o], S);
          L(T[s], D);
          if (P) {
            L(T[l], P);
          }
          if (O) {
            L(T[i], O);
          }
          return true;
        }
        const o = (n && n.add) || a;
        const s = (n && n.rm) || c;
        const i = (n && n.listeners) || 'eventListeners';
        const l = (n && n.rmAll) || 'removeAllListeners';
        const u = _(o);
        const d = '.' + o + ':';
        const g = 'prependListener';
        const m = '.' + g + ':';
        const y = function(e, t, n) {
          if (e.isRemoved) {
            return;
          }
          const o = e.callback;
          if (typeof o == 'object' && o.handleEvent) {
            e.callback = e => o.handleEvent(e);
            e.originalDelegate = o;
          }
          e.invoke(e, t, [n]);
          const r = e.options;
          if (r && typeof r == 'object' && r.once) {
            t[s].call(
              t,
              n.type,
              e.originalDelegate ? e.originalDelegate : e.callback,
              r
            );
          }
        };
        const k = function(t) {
          if (!(t = t || e.event)) {
            return;
          }
          const n = this || t.target || e;
          const o = n[B[t.type][p]];
          if (o) {
            if (o.length === 1) {
              y(o[0], n, t);
            } else {
              const e = o.slice();
              for (let o = 0; o < e.length && (!t || t[W] !== true); o++) {
                y(e[o], n, t);
              }
            }
          }
        };
        const b = function(t) {
          if (!(t = t || e.event)) {
            return;
          }
          const n = this || t.target || e;
          const o = n[B[t.type][h]];
          if (o) {
            if (o.length === 1) {
              y(o[0], n, t);
            } else {
              const e = o.slice();
              for (let o = 0; o < e.length && (!t || t[W] !== true); o++) {
                y(e[o], n, t);
              }
            }
          }
        };
        let T = [];
        for (let r = 0; r < t.length; r++) {
          T[r] = v(t[r], n);
        }
        return T;
      }
      function X(e, t) {
        const n = [];
        for (let o in e) {
          const r = U.exec(o);
          let s = r && r[1];
          if (s && (!t || s === t)) {
            const t = e[o];
            if (t) {
              for (let e = 0; e < t.length; e++) {
                n.push(t[e]);
              }
            }
          }
        }
        return n;
      }
      function J(e, t) {
        const n = e.Event;
        if (n && n.prototype) {
          t.patchMethod(
            n.prototype,
            'stopImmediatePropagation',
            e =>
              function(t, n) {
                t[W] = true;
                if (e) {
                  e.apply(t, n);
                }
              }
          );
        }
      }
      function Y(e, t, n, o, r) {
        const s = Zone.__symbol__(o);
        if (t[s]) {
          return;
        }
        const i = (t[s] = t[o]);
        t[o] = function(s, a, c) {
          if (a && a.prototype) {
            r.forEach(function(t) {
              const r = `${n}.${o}::` + t;
              const s = a.prototype;
              if (s.hasOwnProperty(t)) {
                const n = e.ObjectGetOwnPropertyDescriptor(s, t);
                if (n && n.value) {
                  n.value = e.wrapWithCurrentZone(n.value, r);
                  e._redefineProperty(a.prototype, t, n);
                } else if (s[t]) {
                  s[t] = e.wrapWithCurrentZone(s[t], r);
                }
              } else if (s[t]) {
                s[t] = e.wrapWithCurrentZone(s[t], r);
              }
            });
          }
          return i.call(t, s, a, c);
        };
        e.attachOriginToPatched(t[o], i);
      }
      function oe(e, t, n) {
        const o = n.configurable;
        return ie(e, t, (n = se(e, t, n)), o);
      }
      function re(e, t) {
        return e && e[ne] && e[ne][t];
      }
      function se(e, t, n) {
        if (!Object.isFrozen(n)) {
          n.configurable = true;
        }
        if (!n.configurable) {
          if (!e[ne] && !Object.isFrozen(e)) {
            Q(e, ne, { writable: true, value: {} });
          }
          if (e[ne]) {
            e[ne][t] = true;
          }
        }
        return n;
      }
      function ie(e, t, n, o) {
        try {
          return Q(e, t, n);
        } catch (r) {
          if (!n.configurable) {
            throw r;
          }
          if (o === void 0) {
            delete n.configurable;
          } else {
            n.configurable = o;
          }
          try {
            return Q(e, t, n);
          } catch (r) {
            let o = null;
            try {
              o = JSON.stringify(n);
            } catch (r) {
              o = n.toString();
            }
            console.log(
              `Attempting to configure '${t}' with descriptor '${o}' on object '${e}' and got error, giving up: ${r}`
            );
          }
        }
      }
      function me(e, t, n) {
        if (!n || n.length === 0) {
          return t;
        }
        const o = n.filter(t => t.target === e);
        if (!o || o.length === 0) {
          return t;
        }
        const r = o[0].ignoreProperties;
        return t.filter(e => r.indexOf(e) === -1);
      }
      function ye(e, t, n, o) {
        if (e) {
          j(e, me(e, t, n), o);
        }
      }
      function ke(e, t) {
        if (Z && !D) {
          return;
        }
        if (Zone[e.symbol('patchEvents')]) {
          return;
        }
        const n = typeof WebSocket != 'undefined';
        const o = t.__Zone_ignore_on_properties;
        if (S) {
          const e = window;
          const t = F ? [{ target: e, ignoreProperties: ['error'] }] : [];
          ye(e, _e.concat(['messageerror']), o ? o.concat(t) : o, r(e));
          ye(Document.prototype, _e, o);
          if (e.SVGElement !== void 0) {
            ye(e.SVGElement.prototype, _e, o);
          }
          ye(Element.prototype, _e, o);
          ye(HTMLElement.prototype, _e, o);
          ye(HTMLMediaElement.prototype, ce, o);
          ye(HTMLFrameSetElement.prototype, ae.concat(ue), o);
          ye(HTMLBodyElement.prototype, ae.concat(ue), o);
          ye(HTMLFrameElement.prototype, le, o);
          ye(HTMLIFrameElement.prototype, le, o);
          const n = e.HTMLMarqueeElement;
          if (n) {
            ye(n.prototype, he, o);
          }
          const s = e.Worker;
          if (s) {
            ye(s.prototype, ge, o);
          }
        }
        const s = t.XMLHttpRequest;
        if (s) {
          ye(s.prototype, pe, o);
        }
        const i = t.XMLHttpRequestEventTarget;
        if (i) {
          ye(i && i.prototype, pe, o);
        }
        if (typeof IDBIndex != 'undefined') {
          ye(IDBIndex.prototype, fe, o);
          ye(IDBRequest.prototype, fe, o);
          ye(IDBOpenDBRequest.prototype, fe, o);
          ye(IDBDatabase.prototype, fe, o);
          ye(IDBTransaction.prototype, fe, o);
          ye(IDBCursor.prototype, fe, o);
        }
        if (n) {
          ye(WebSocket.prototype, de, o);
        }
      }
      function ve(e, t, n, o) {
        function a(t) {
          const n = t.data;
          n.args[0] = function() {
            try {
              t.invoke.apply(this, arguments);
            } finally {
              if (!t.data || !t.data.isPeriodic) {
                if (typeof n.handleId == 'number') {
                  delete i[n.handleId];
                } else if (n.handleId) {
                  n.handleId[be] = null;
                }
              }
            }
          };
          n.handleId = r.apply(e, n.args);
          return t;
        }
        function c(e) {
          return s(e.data.handleId);
        }
        let r = null;
        let s = null;
        n += o;
        const i = {};
        r = x(
          e,
          (t += o),
          n =>
            function(r, s) {
              if (typeof s[0] == 'function') {
                const e = g(
                  t,
                  s[0],
                  {
                    isPeriodic: o === 'Interval',
                    delay:
                      o === 'Timeout' || o === 'Interval' ? s[1] || 0 : void 0,
                    args: s,
                  },
                  a,
                  c
                );
                if (!e) {
                  return e;
                }
                const n = e.data.handleId;
                if (typeof n == 'number') {
                  i[n] = e;
                } else if (n) {
                  n[be] = e;
                }
                if (
                  n &&
                  n.ref &&
                  n.unref &&
                  typeof n.ref == 'function' &&
                  typeof n.unref == 'function'
                ) {
                  e.ref = n.ref.bind(n);
                  e.unref = n.unref.bind(n);
                }
                if (typeof n == 'number' || n) {
                  return n;
                } else {
                  return e;
                }
              }
              return n.apply(e, s);
            }
        );
        s = x(
          e,
          n,
          t =>
            function(n, o) {
              const r = o[0];
              let s;
              if (typeof r == 'number') {
                s = i[r];
              } else {
                s = r && r[be];
                if (!s) {
                  s = r;
                }
              }
              if (s && typeof s.type == 'string') {
                if (
                  s.state !== 'notScheduled' &&
                  ((s.cancelFn && s.data.isPeriodic) || s.runCount === 0)
                ) {
                  if (typeof r == 'number') {
                    delete i[r];
                  } else if (r) {
                    r[be] = null;
                  }
                  s.zone.cancelTask(s);
                }
              } else {
                t.apply(e, o);
              }
            }
        );
      }
      function Te(e, t) {
        if (Zone[t.symbol('patchEventTarget')]) {
          return;
        }
        const {
          eventNames: n,
          zoneSymbolEventNames: o,
          TRUE_STR: r,
          FALSE_STR: s,
          ZONE_SYMBOL_PREFIX: i,
        } = t.getGlobalObjects();
        for (let c = 0; c < n.length; c++) {
          const e = n[c];
          const t = i + (e + s);
          const a = i + (e + r);
          o[e] = {};
          o[e][s] = t;
          o[e][r] = a;
        }
        const a = e.EventTarget;
        if (a && a.prototype) {
          t.patchEventTarget(e, [a && a.prototype]);
          return true;
        } else {
          return;
        }
      }
      (function(e) {
        function n(e) {
          if (t && t.mark) {
            t.mark(e);
          }
        }
        function o(e, n) {
          if (t && t.measure) {
            t.measure(e, n);
          }
        }
        function g(t) {
          if (j === 0 && f.length === 0) {
            if (!p) {
              if (e[u]) {
                p = e[u].resolve(0);
              }
            }
            if (p) {
              let e = p[h];
              if (!e) {
                e = p.then;
              }
              e.call(p, _);
            } else {
              e[l](_, 0);
            }
          }
          if (t) {
            f.push(t);
          }
        }
        function _() {
          if (!d) {
            for (d = true; f.length; ) {
              const t = f;
              f = [];
              for (let n = 0; n < t.length; n++) {
                const o = t[n];
                try {
                  o.zone.runTask(o, null, null);
                } catch (e) {
                  O.onUnhandledError(e);
                }
              }
            }
            O.microtaskDrainDone();
            d = false;
          }
        }
        function C() {}
        function I(e) {
          return '__zone_symbol__' + e;
        }
        const t = e.performance;
        n('Zone');
        const r = e.__zone_symbol__forceDuplicateZoneCheck === true;
        if (e.Zone) {
          if (r || typeof e.Zone.__symbol__ != 'function') {
            throw new Error('Zone already loaded.');
          }
          return e.Zone;
        }
        class s {
          constructor(e, t) {
            this._parent = e;
            this._name = t ? t.name || 'unnamed' : '<root>';
            this._properties = (t && t.properties) || {};
            this._zoneDelegate = new a(
              this,
              this._parent && this._parent._zoneDelegate,
              t
            );
          }
          static assertZonePatched() {
            if (e.Promise !== D.ZoneAwarePromise) {
              throw new Error(
                'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)'
              );
            }
          }
          static get root() {
            let e = s.current;
            while (e.parent) {
              e = e.parent;
            }
            return e;
          }
          static get current() {
            return P.zone;
          }
          static get currentTask() {
            return z;
          }
          static __load_patch(t, i) {
            if (D.hasOwnProperty(t)) {
              if (r) {
                throw Error('Already loaded patch: ' + t);
              }
            } else if (!e['__Zone_disable_' + t]) {
              const r = 'Zone:' + t;
              n(r);
              D[t] = i(e, s, O);
              o(r, r);
            }
          }
          get parent() {
            return this._parent;
          }
          get name() {
            return this._name;
          }
          get(e) {
            const t = this.getZoneWith(e);
            if (t) {
              return t._properties[e];
            }
          }
          getZoneWith(e) {
            let t = this;
            while (t) {
              if (t._properties.hasOwnProperty(e)) {
                return t;
              }
              t = t._parent;
            }
            return null;
          }
          fork(e) {
            if (!e) {
              throw new Error('ZoneSpec required!');
            }
            return this._zoneDelegate.fork(this, e);
          }
          wrap(e, t) {
            if (typeof e != 'function') {
              throw new Error('Expecting function got: ' + e);
            }
            const n = this._zoneDelegate.intercept(this, e, t);
            const o = this;
            return function() {
              return o.runGuarded(n, this, arguments, t);
            };
          }
          run(e, t, n, o) {
            P = { parent: P, zone: this };
            try {
              return this._zoneDelegate.invoke(this, e, t, n, o);
            } finally {
              P = P.parent;
            }
          }
          runGuarded(e, t = null, n, o) {
            P = { parent: P, zone: this };
            try {
              try {
                return this._zoneDelegate.invoke(this, e, t, n, o);
              } catch (r) {
                if (this._zoneDelegate.handleError(this, r)) {
                  throw r;
                }
              }
            } finally {
              P = P.parent;
            }
          }
          runTask(e, t, n) {
            if (e.zone != this) {
              throw new Error(
                'A task can only be run in the zone of creation! (Creation: ' +
                  (e.zone || m).name +
                  '; Execution: ' +
                  this.name +
                  ')'
              );
            }
            if (e.state === y && (e.type === S || e.type === Z)) {
              return;
            }
            const o = e.state != v;
            if (o) {
              e._transitionTo(v, b);
            }
            e.runCount++;
            const r = z;
            z = e;
            P = { parent: P, zone: this };
            try {
              if (e.type == Z && e.data && !e.data.isPeriodic) {
                e.cancelFn = void 0;
              }
              try {
                return this._zoneDelegate.invokeTask(this, e, t, n);
              } catch (s) {
                if (this._zoneDelegate.handleError(this, s)) {
                  throw s;
                }
              }
            } finally {
              if (e.state !== y && e.state !== w) {
                if (e.type == S || (e.data && e.data.isPeriodic)) {
                  if (o) {
                    e._transitionTo(b, v);
                  }
                } else {
                  e.runCount = 0;
                  this._updateTaskCount(e, -1);
                  if (o) {
                    e._transitionTo(y, v, y);
                  }
                }
              }
              P = P.parent;
              z = r;
            }
          }
          scheduleTask(e) {
            if (e.zone && e.zone !== this) {
              let t = this;
              while (t) {
                if (t === e.zone) {
                  throw Error(
                    `can not reschedule task to ${
                      this.name
                    } which is descendants of the original zone ${e.zone.name}`
                  );
                }
                t = t.parent;
              }
            }
            e._transitionTo(k, y);
            const t = [];
            e._zoneDelegates = t;
            e._zone = this;
            try {
              e = this._zoneDelegate.scheduleTask(this, e);
            } catch (n) {
              e._transitionTo(w, k, y);
              this._zoneDelegate.handleError(this, n);
              throw n;
            }
            if (e._zoneDelegates === t) {
              this._updateTaskCount(e, 1);
            }
            if (e.state == k) {
              e._transitionTo(b, k);
            }
            return e;
          }
          scheduleMicroTask(e, t, n, o) {
            return this.scheduleTask(new c(E, e, t, n, o, void 0));
          }
          scheduleMacroTask(e, t, n, o, r) {
            return this.scheduleTask(new c(Z, e, t, n, o, r));
          }
          scheduleEventTask(e, t, n, o, r) {
            return this.scheduleTask(new c(S, e, t, n, o, r));
          }
          cancelTask(e) {
            if (e.zone != this) {
              throw new Error(
                'A task can only be cancelled in the zone of creation! (Creation: ' +
                  (e.zone || m).name +
                  '; Execution: ' +
                  this.name +
                  ')'
              );
            }
            e._transitionTo(T, b, v);
            try {
              this._zoneDelegate.cancelTask(this, e);
            } catch (t) {
              e._transitionTo(w, T);
              this._zoneDelegate.handleError(this, t);
              throw t;
            }
            this._updateTaskCount(e, -1);
            e._transitionTo(y, T);
            e.runCount = 0;
            return e;
          }
          _updateTaskCount(e, t) {
            const n = e._zoneDelegates;
            if (t == -1) {
              e._zoneDelegates = null;
            }
            for (let o = 0; o < n.length; o++) {
              n[o]._updateTaskCount(e.type, t);
            }
          }
        }
        s.__symbol__ = I;
        const i = {
          name: '',
          onHasTask: (e, t, n, o) => e.hasTask(n, o),
          onScheduleTask: (e, t, n, o) => e.scheduleTask(n, o),
          onInvokeTask: (e, t, n, o, r, s) => e.invokeTask(n, o, r, s),
          onCancelTask: (e, t, n, o) => e.cancelTask(n, o),
        };
        class a {
          constructor(e, t, n) {
            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
            this.zone = e;
            this._parentDelegate = t;
            this._forkZS = n && (n && n.onFork ? n : t._forkZS);
            this._forkDlgt = n && (n.onFork ? t : t._forkDlgt);
            this._forkCurrZone = n && (n.onFork ? this.zone : t.zone);
            this._interceptZS = n && (n.onIntercept ? n : t._interceptZS);
            this._interceptDlgt = n && (n.onIntercept ? t : t._interceptDlgt);
            this._interceptCurrZone = n && (n.onIntercept ? this.zone : t.zone);
            this._invokeZS = n && (n.onInvoke ? n : t._invokeZS);
            this._invokeDlgt = n && (n.onInvoke ? t : t._invokeDlgt);
            this._invokeCurrZone = n && (n.onInvoke ? this.zone : t.zone);
            this._handleErrorZS = n && (n.onHandleError ? n : t._handleErrorZS);
            this._handleErrorDlgt =
              n && (n.onHandleError ? t : t._handleErrorDlgt);
            this._handleErrorCurrZone =
              n && (n.onHandleError ? this.zone : t.zone);
            this._scheduleTaskZS =
              n && (n.onScheduleTask ? n : t._scheduleTaskZS);
            this._scheduleTaskDlgt =
              n && (n.onScheduleTask ? t : t._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
              n && (n.onScheduleTask ? this.zone : t.zone);
            this._invokeTaskZS = n && (n.onInvokeTask ? n : t._invokeTaskZS);
            this._invokeTaskDlgt =
              n && (n.onInvokeTask ? t : t._invokeTaskDlgt);
            this._invokeTaskCurrZone =
              n && (n.onInvokeTask ? this.zone : t.zone);
            this._cancelTaskZS = n && (n.onCancelTask ? n : t._cancelTaskZS);
            this._cancelTaskDlgt =
              n && (n.onCancelTask ? t : t._cancelTaskDlgt);
            this._cancelTaskCurrZone =
              n && (n.onCancelTask ? this.zone : t.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            const o = n && n.onHasTask;
            if (o || (t && t._hasTaskZS)) {
              this._hasTaskZS = o ? n : i;
              this._hasTaskDlgt = t;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = e;
              if (!n.onScheduleTask) {
                this._scheduleTaskZS = i;
                this._scheduleTaskDlgt = t;
                this._scheduleTaskCurrZone = this.zone;
              }
              if (!n.onInvokeTask) {
                this._invokeTaskZS = i;
                this._invokeTaskDlgt = t;
                this._invokeTaskCurrZone = this.zone;
              }
              if (!n.onCancelTask) {
                this._cancelTaskZS = i;
                this._cancelTaskDlgt = t;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }
          fork(e, t) {
            if (this._forkZS) {
              return this._forkZS.onFork(this._forkDlgt, this.zone, e, t);
            } else {
              return new s(e, t);
            }
          }
          intercept(e, t, n) {
            if (this._interceptZS) {
              return this._interceptZS.onIntercept(
                this._interceptDlgt,
                this._interceptCurrZone,
                e,
                t,
                n
              );
            } else {
              return t;
            }
          }
          invoke(e, t, n, o, r) {
            if (this._invokeZS) {
              return this._invokeZS.onInvoke(
                this._invokeDlgt,
                this._invokeCurrZone,
                e,
                t,
                n,
                o,
                r
              );
            } else {
              return t.apply(n, o);
            }
          }
          handleError(e, t) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                e,
                t
              )
            );
          }
          scheduleTask(e, t) {
            let n = t;
            if (this._scheduleTaskZS) {
              if (this._hasTaskZS) {
                n._zoneDelegates.push(this._hasTaskDlgtOwner);
              }
              n = this._scheduleTaskZS.onScheduleTask(
                this._scheduleTaskDlgt,
                this._scheduleTaskCurrZone,
                e,
                t
              );
              if (!n) {
                n = t;
              }
            } else if (t.scheduleFn) {
              t.scheduleFn(t);
            } else {
              if (t.type != E) {
                throw new Error('Task is missing scheduleFn.');
              }
              g(t);
            }
            return n;
          }
          invokeTask(e, t, n, o) {
            if (this._invokeTaskZS) {
              return this._invokeTaskZS.onInvokeTask(
                this._invokeTaskDlgt,
                this._invokeTaskCurrZone,
                e,
                t,
                n,
                o
              );
            } else {
              return t.callback.apply(n, o);
            }
          }
          cancelTask(e, t) {
            let n;
            if (this._cancelTaskZS) {
              n = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                e,
                t
              );
            } else {
              if (!t.cancelFn) {
                throw Error('Task is not cancelable');
              }
              n = t.cancelFn(t);
            }
            return n;
          }
          hasTask(e, t) {
            try {
              if (this._hasTaskZS) {
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  e,
                  t
                );
              }
            } catch (n) {
              this.handleError(e, n);
            }
          }
          _updateTaskCount(e, t) {
            const n = this._taskCounts;
            const o = n[e];
            const r = (n[e] = o + t);
            if (r < 0) {
              throw new Error('More tasks executed then were scheduled.');
            }
            if (o == 0 || r == 0) {
              this.hasTask(this.zone, {
                microTask: n.microTask > 0,
                macroTask: n.macroTask > 0,
                eventTask: n.eventTask > 0,
                change: e,
              });
            }
          }
        }
        class c {
          constructor(t, n, o, r, s, i) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = t;
            this.source = n;
            this.data = r;
            this.scheduleFn = s;
            this.cancelFn = i;
            this.callback = o;
            const a = this;
            this.invoke =
              t === S && r && r.useG
                ? c.invokeTask
                : function() {
                    return c.invokeTask.call(e, a, this, arguments);
                  };
          }
          static invokeTask(e, t, n) {
            if (!e) {
              e = this;
            }
            j++;
            try {
              e.runCount++;
              return e.zone.runTask(e, t, n);
            } finally {
              if (j == 1) {
                _();
              }
              j--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(y, k);
          }
          _transitionTo(e, t, n) {
            if (this._state !== t && this._state !== n) {
              throw new Error(
                `${this.type} '${
                  this.source
                }': can not transition to '${e}', expecting state '${t}'${
                  n ? " or '" + n + "'" : ''
                }, was '${this._state}'.`
              );
            }
            this._state = e;
            if (e == y) {
              this._zoneDelegates = null;
            }
          }
          toString() {
            if (this.data && this.data.handleId !== void 0) {
              return this.data.handleId.toString();
            } else {
              return Object.prototype.toString.call(this);
            }
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const l = I('setTimeout');
        const u = I('Promise');
        const h = I('then');
        let p;
        let f = [];
        let d = false;
        const m = { name: 'NO ZONE' };
        const y = 'notScheduled';
        const k = 'scheduling';
        const b = 'scheduled';
        const v = 'running';
        const T = 'canceling';
        const w = 'unknown';
        const E = 'microTask';
        const Z = 'macroTask';
        const S = 'eventTask';
        const D = {};
        const O = {
          symbol: I,
          currentZoneFrame: () => P,
          onUnhandledError: C,
          microtaskDrainDone: C,
          scheduleMicroTask: g,
          showUncaughtError: () => !s[I('ignoreConsoleErrorUncaughtError')],
          patchEventTarget: () => [],
          patchOnProperties: C,
          patchMethod: () => C,
          bindArguments: () => [],
          patchThen: () => C,
          patchMacroTask: () => C,
          setNativePromise: e => {
            if (e && typeof e.resolve == 'function') {
              p = e.resolve(0);
            }
          },
          patchEventPrototype: () => C,
          isIEOrEdge: () => false,
          getGlobalObjects: () => void 0,
          ObjectDefineProperty: () => C,
          ObjectGetOwnPropertyDescriptor: () => void 0,
          ObjectCreate: () => void 0,
          ArraySlice: () => [],
          patchClass: () => C,
          wrapWithCurrentZone: () => C,
          filterProperties: () => [],
          attachOriginToPatched: () => C,
          _redefineProperty: () => C,
          patchCallbacks: () => C,
        };
        let P = { parent: null, zone: new s(null, null) };
        let z = null;
        let j = 0;
        o('Zone', 'Zone');
        e.Zone = s;
      })(
        (typeof window != 'undefined' && window) ||
          (typeof self != 'undefined' && self) ||
          global
      );
      Zone.__load_patch('ZoneAwarePromise', (e, t, n) => {
        function h(e) {
          n.onUnhandledError(e);
          try {
            const n = t[u];
            if (n && typeof n == 'function') {
              n.call(this, e);
            }
          } catch (o) {}
        }
        function p(e) {
          return e && e.then;
        }
        function f(e) {
          return e;
        }
        function d(e) {
          return R.reject(e);
        }
        function Z(e, t) {
          return n => {
            try {
              P(e, t, n);
            } catch (o) {
              P(e, false, o);
            }
          };
        }
        function P(e, o, s) {
          const a = S();
          if (e === s) {
            throw new TypeError(D);
          }
          if (e[g] === v) {
            let h = null;
            try {
              if (typeof s == 'object' || typeof s == 'function') {
                h = s && s.then;
              }
            } catch (u) {
              a(() => {
                P(e, false, u);
              })();
              return e;
            }
            if (
              o !== w &&
              s instanceof R &&
              s.hasOwnProperty(g) &&
              s.hasOwnProperty(_) &&
              s[g] !== v
            ) {
              j(s);
              P(e, s[g], s[_]);
            } else if (o !== w && typeof h == 'function') {
              try {
                h.call(s, a(Z(e, o)), a(Z(e, false)));
              } catch (u) {
                a(() => {
                  P(e, false, u);
                })();
              }
            } else {
              e[g] = o;
              const a = e[_];
              e[_] = s;
              if (e[m] === m && o === T) {
                e[g] = e[k];
                e[_] = e[y];
              }
              if (o === w && s instanceof Error) {
                const e =
                  t.currentTask && t.currentTask.data && t.currentTask.data[l];
                if (e) {
                  r(s, O, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: e,
                  });
                }
              }
              for (let t = 0; t < a.length; ) {
                C(e, a[t++], a[t++], a[t++], a[t++]);
              }
              if (a.length == 0 && o == w) {
                e[g] = E;
                try {
                  throw new Error(
                    'Uncaught (in promise): ' +
                      ((c = s) && c.toString === Object.prototype.toString
                        ? ((c.constructor && c.constructor.name) || '') +
                          ': ' +
                          JSON.stringify(c)
                        : c
                          ? c.toString()
                          : Object.prototype.toString.call(c)) +
                      (s && s.stack ? '\n' + s.stack : '')
                  );
                } catch (u) {
                  const o = u;
                  o.rejection = s;
                  o.promise = e;
                  o.zone = t.current;
                  o.task = t.currentTask;
                  i.push(o);
                  n.scheduleMicroTask();
                }
              }
            }
          }
          var c;
          return e;
        }
        function j(e) {
          if (e[g] === E) {
            try {
              const n = t[z];
              if (n && typeof n == 'function') {
                n.call(this, { rejection: e[_], promise: e });
              }
            } catch (n) {}
            e[g] = w;
            for (let t = 0; t < i.length; t++) {
              if (e === i[t].promise) {
                i.splice(t, 1);
              }
            }
          }
        }
        function C(e, t, n, o, r) {
          j(e);
          const s = e[g];
          const i = s
            ? typeof o == 'function' ? o : f
            : typeof r == 'function' ? r : d;
          t.scheduleMicroTask(
            b,
            () => {
              try {
                const o = e[_];
                const r = n && m === n[m];
                if (r) {
                  n[y] = o;
                  n[k] = s;
                }
                const a = t.run(i, void 0, r && i !== d && i !== f ? [] : [o]);
                P(n, true, a);
              } catch (o) {
                P(n, false, o);
              }
            },
            n
          );
        }
        function A(e) {
          const t = e.prototype;
          const n = o(t, 'then');
          if (n && (n.writable === false || !n.configurable)) {
            return;
          }
          const r = t.then;
          t[c] = r;
          e.prototype.then = function(e, t) {
            return new R((e, t) => {
              r.call(this, e, t);
            }).then(e, t);
          };
          e[N] = true;
        }
        const o = Object.getOwnPropertyDescriptor;
        const r = Object.defineProperty;
        const s = n.symbol;
        const i = [];
        const a = s('Promise');
        const c = s('then');
        const l = '__creationTrace__';
        n.onUnhandledError = e => {
          if (n.showUncaughtError()) {
            const t = e && e.rejection;
            if (t) {
              console.error(
                'Unhandled Promise rejection:',
                t instanceof Error ? t.message : t,
                '; Zone:',
                e.zone.name,
                '; Task:',
                e.task && e.task.source,
                '; Value:',
                t,
                t instanceof Error ? t.stack : void 0
              );
            } else {
              console.error(e);
            }
          }
        };
        n.microtaskDrainDone = () => {
          while (i.length) {
            while (i.length) {
              const t = i.shift();
              try {
                t.zone.runGuarded(() => {
                  throw t;
                });
              } catch (e) {
                h(e);
              }
            }
          }
        };
        const u = s('unhandledPromiseRejectionHandler');
        const g = s('state');
        const _ = s('value');
        const m = s('finally');
        const y = s('parentPromiseValue');
        const k = s('parentPromiseState');
        const b = 'Promise.then';
        const v = null;
        const T = true;
        const w = false;
        const E = 0;
        const S = function() {
          let e = false;
          return function(t) {
            return function() {
              if (!e) {
                e = true;
                t.apply(null, arguments);
              }
            };
          };
        };
        const D = 'Promise resolved with itself';
        const O = s('currentTaskTrace');
        const z = s('rejectionHandledHandler');
        const I = 'function ZoneAwarePromise() { [native code] }';
        class R {
          constructor(e) {
            const t = this;
            if (!(t instanceof R)) {
              throw new Error('Must be an instanceof Promise.');
            }
            t[g] = v;
            t[_] = [];
            try {
              if (e) {
                e(Z(t, T), Z(t, w));
              }
            } catch (n) {
              P(t, false, n);
            }
          }
          static toString() {
            return I;
          }
          static resolve(e) {
            return P(new this(null), T, e);
          }
          static reject(e) {
            return P(new this(null), w, e);
          }
          static race(e) {
            function r(e) {
              t(e);
            }
            function s(e) {
              n(e);
            }
            let t;
            let n;
            let o = new this((e, o) => {
              t = e;
              n = o;
            });
            for (let i of e) {
              if (!p(i)) {
                i = this.resolve(i);
              }
              i.then(r, s);
            }
            return o;
          }
          static all(e) {
            let t;
            let n;
            let o = new this((e, o) => {
              t = e;
              n = o;
            });
            let r = 2;
            let s = 0;
            const i = [];
            for (let a of e) {
              if (!p(a)) {
                a = this.resolve(a);
              }
              const e = s;
              a.then(n => {
                i[e] = n;
                r--;
                if (r === 0) {
                  t(i);
                }
              }, n);
              r++;
              s++;
            }
            r -= 2;
            if (r === 0) {
              t(i);
            }
            return o;
          }
          get [Symbol.toStringTag]() {
            return 'Promise';
          }
          then(e, n) {
            const o = new this.constructor(null);
            const r = t.current;
            if (this[g] == v) {
              this[_].push(r, o, e, n);
            } else {
              C(this, r, o, e, n);
            }
            return o;
          }
          catch(e) {
            return this.then(null, e);
          }
          finally(e) {
            const n = new this.constructor(null);
            n[m] = m;
            const o = t.current;
            if (this[g] == v) {
              this[_].push(o, n, e, e);
            } else {
              C(this, o, n, e, e);
            }
            return n;
          }
        }
        R.resolve = R.resolve;
        R.reject = R.reject;
        R.race = R.race;
        R.all = R.all;
        const x = (e[a] = e.Promise);
        const M = t.__symbol__('ZoneAwarePromise');
        let L = o(e, 'Promise');
        if (!L || !!L.configurable) {
          if (L) {
            delete L.writable;
          }
          if (L) {
            delete L.value;
          }
          if (!L) {
            L = { configurable: true, enumerable: true };
          }
          L.get = function() {
            if (e[M]) {
              return e[M];
            } else {
              return e[a];
            }
          };
          L.set = function(t) {
            if (t === R) {
              e[M] = t;
            } else {
              e[a] = t;
              if (!t.prototype[c]) {
                A(t);
              }
              n.setNativePromise(t);
            }
          };
          r(e, 'Promise', L);
        }
        e.Promise = R;
        const N = s('thenPatched');
        n.patchThen = A;
        if (x) {
          A(x);
          const t = e.fetch;
          if (typeof t == 'function') {
            e[n.symbol('fetch')] = t;
            e.fetch = (function() {
              var e = t;
              return function() {
                let t = e.apply(this, arguments);
                if (t instanceof R) {
                  return t;
                }
                let n = t.constructor;
                if (!n[N]) {
                  A(n);
                }
                return t;
              };
            })();
          }
        }
        Promise[t.__symbol__('uncaughtPromiseErrors')] = i;
        return R;
      });
      const n = Object.getOwnPropertyDescriptor;
      const o = Object.defineProperty;
      const r = Object.getPrototypeOf;
      const s = Object.create;
      const i = Array.prototype.slice;
      const a = 'addEventListener';
      const c = 'removeEventListener';
      const l = Zone.__symbol__(a);
      const u = Zone.__symbol__(c);
      const h = 'true';
      const p = 'false';
      const f = '__zone_symbol__';
      const _ = Zone.__symbol__;
      const m = typeof window != 'undefined';
      const y = m ? window : void 0;
      const k = (m && y) || (typeof self == 'object' && self) || global;
      const b = 'removeAttribute';
      const v = [null];
      const E =
        typeof WorkerGlobalScope != 'undefined' &&
        self instanceof WorkerGlobalScope;
      const Z =
        !('nw' in k) &&
        k.process !== void 0 &&
        {}.toString.call(k.process) === '[object process]';
      const S = !Z && !E && (!!m && !!y.HTMLElement);
      const D =
        k.process !== void 0 &&
        {}.toString.call(k.process) === '[object process]' &&
        !E &&
        (!!m && !!y.HTMLElement);
      const O = {};
      const P = function(e) {
        if (!(e = e || k.event)) {
          return;
        }
        let t = O[e.type];
        if (!t) {
          t = O[e.type] = _('ON_PROPERTY' + e.type);
        }
        const n = this || e.target || k;
        const o = n[t];
        let r;
        if (S && n === y && e.type === 'error') {
          const t = e;
          r =
            o &&
            o.call(this, t.message, t.filename, t.lineno, t.colno, t.error);
          if (r === true) {
            e.preventDefault();
          }
        } else {
          r = o && o.apply(this, arguments);
          if (r != null && !r) {
            e.preventDefault();
          }
        }
        return r;
      };
      const C = _('originalInstance');
      let R = false;
      let N = false;
      let A = false;
      Zone.__load_patch('toString', e => {
        const t = Function.prototype.toString;
        const n = _('OriginalDelegate');
        const o = _('Promise');
        const r = _('Error');
        const s = function() {
          if (typeof this == 'function') {
            const s = this[n];
            if (s) {
              if (typeof s == 'function') {
                return t.call(s);
              } else {
                return Object.prototype.toString.call(s);
              }
            }
            if (this === Promise) {
              const n = e[o];
              if (n) {
                return t.call(n);
              }
            }
            if (this === Error) {
              const n = e[r];
              if (n) {
                return t.call(n);
              }
            }
          }
          return t.call(this);
        };
        s[n] = t;
        Function.prototype.toString = s;
        const i = Object.prototype.toString;
        Object.prototype.toString = function() {
          if (this instanceof Promise) {
            return '[object Promise]';
          } else {
            return i.call(this);
          }
        };
      });
      let G = false;
      if (typeof window != 'undefined') {
        try {
          const e = Object.defineProperty({}, 'passive', {
            get: function() {
              G = true;
            },
          });
          window.addEventListener('test', e, e);
          window.removeEventListener('test', e, e);
        } catch (we) {
          G = false;
        }
      }
      const q = { useG: true };
      const B = {};
      const $ = {};
      const U = /^__zone_symbol__(\w+)(true|false)$/;
      const W = '__zone_symbol__propagationStopped';
      const K = Zone.__symbol__;
      const Q = (Object[K('defineProperty')] = Object.defineProperty);
      const ee = (Object[K('getOwnPropertyDescriptor')] =
        Object.getOwnPropertyDescriptor);
      const te = Object.create;
      const ne = K('unconfigurables');
      const ae = [
        'absolutedeviceorientation',
        'afterinput',
        'afterprint',
        'appinstalled',
        'beforeinstallprompt',
        'beforeprint',
        'beforeunload',
        'devicelight',
        'devicemotion',
        'deviceorientation',
        'deviceorientationabsolute',
        'deviceproximity',
        'hashchange',
        'languagechange',
        'message',
        'mozbeforepaint',
        'offline',
        'online',
        'paint',
        'pageshow',
        'pagehide',
        'popstate',
        'rejectionhandled',
        'storage',
        'unhandledrejection',
        'unload',
        'userproximity',
        'vrdisplyconnected',
        'vrdisplaydisconnected',
        'vrdisplaypresentchange',
      ];
      const ce = [
        'encrypted',
        'waitingforkey',
        'msneedkey',
        'mozinterruptbegin',
        'mozinterruptend',
      ];
      const le = ['load'];
      const ue = [
        'blur',
        'error',
        'focus',
        'load',
        'resize',
        'scroll',
        'messageerror',
      ];
      const he = ['bounce', 'finish', 'start'];
      const pe = [
        'loadstart',
        'progress',
        'abort',
        'error',
        'load',
        'progress',
        'timeout',
        'loadend',
        'readystatechange',
      ];
      const fe = [
        'upgradeneeded',
        'complete',
        'abort',
        'success',
        'error',
        'blocked',
        'versionchange',
        'close',
      ];
      const de = ['close', 'error', 'open', 'message'];
      const ge = ['error', 'message'];
      const _e = [
        'abort',
        'animationcancel',
        'animationend',
        'animationiteration',
        'auxclick',
        'beforeinput',
        'blur',
        'cancel',
        'canplay',
        'canplaythrough',
        'change',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'cuechange',
        'click',
        'close',
        'contextmenu',
        'curechange',
        'dblclick',
        'drag',
        'dragend',
        'dragenter',
        'dragexit',
        'dragleave',
        'dragover',
        'drop',
        'durationchange',
        'emptied',
        'ended',
        'error',
        'focus',
        'focusin',
        'focusout',
        'gotpointercapture',
        'input',
        'invalid',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'lostpointercapture',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'orientationchange',
        'pause',
        'play',
        'playing',
        'pointercancel',
        'pointerdown',
        'pointerenter',
        'pointerleave',
        'pointerlockchange',
        'mozpointerlockchange',
        'webkitpointerlockerchange',
        'pointerlockerror',
        'mozpointerlockerror',
        'webkitpointerlockerror',
        'pointermove',
        'pointout',
        'pointerover',
        'pointerup',
        'progress',
        'ratechange',
        'reset',
        'resize',
        'scroll',
        'seeked',
        'seeking',
        'select',
        'selectionchange',
        'selectstart',
        'show',
        'sort',
        'stalled',
        'submit',
        'suspend',
        'timeupdate',
        'volumechange',
        'touchcancel',
        'touchmove',
        'touchstart',
        'touchend',
        'transitioncancel',
        'transitionend',
        'waiting',
        'wheel',
      ].concat(
        [
          'webglcontextrestored',
          'webglcontextlost',
          'webglcontextcreationerror',
        ],
        ['autocomplete', 'autocompleteerror'],
        ['toggle'],
        [
          'afterscriptexecute',
          'beforescriptexecute',
          'DOMContentLoaded',
          'freeze',
          'fullscreenchange',
          'mozfullscreenchange',
          'webkitfullscreenchange',
          'msfullscreenchange',
          'fullscreenerror',
          'mozfullscreenerror',
          'webkitfullscreenerror',
          'msfullscreenerror',
          'readystatechange',
          'visibilitychange',
          'resume',
        ],
        ae,
        [
          'beforecopy',
          'beforecut',
          'beforepaste',
          'copy',
          'cut',
          'paste',
          'dragstart',
          'loadend',
          'animationstart',
          'search',
          'transitionrun',
          'transitionstart',
          'webkitanimationend',
          'webkitanimationiteration',
          'webkitanimationstart',
          'webkittransitionend',
        ],
        [
          'activate',
          'afterupdate',
          'ariarequest',
          'beforeactivate',
          'beforedeactivate',
          'beforeeditfocus',
          'beforeupdate',
          'cellchange',
          'controlselect',
          'dataavailable',
          'datasetchanged',
          'datasetcomplete',
          'errorupdate',
          'filterchange',
          'layoutcomplete',
          'losecapture',
          'move',
          'moveend',
          'movestart',
          'propertychange',
          'resizeend',
          'resizestart',
          'rowenter',
          'rowexit',
          'rowsdelete',
          'rowsinserted',
          'command',
          'compassneedscalibration',
          'deactivate',
          'help',
          'mscontentzoom',
          'msmanipulationstatechanged',
          'msgesturechange',
          'msgesturedoubletap',
          'msgestureend',
          'msgesturehold',
          'msgesturestart',
          'msgesturetap',
          'msgotpointercapture',
          'msinertiastart',
          'mslostpointercapture',
          'mspointercancel',
          'mspointerdown',
          'mspointerenter',
          'mspointerhover',
          'mspointerleave',
          'mspointermove',
          'mspointerout',
          'mspointerover',
          'mspointerup',
          'pointerout',
          'mssitemodejumplistitemremoved',
          'msthumbnailclick',
          'stop',
          'storagecommit',
        ]
      );
      Zone.__load_patch('util', (e, t, r) => {
        r.patchOnProperties = j;
        r.patchMethod = x;
        r.bindArguments = T;
        r.patchMacroTask = M;
        const l = t.__symbol__('BLACK_LISTED_EVENTS');
        const u = t.__symbol__('UNPATCHED_EVENTS');
        if (e[u]) {
          e[l] = e[u];
        }
        if (e[l]) {
          t[l] = t[u] = e[l];
        }
        r.patchEventPrototype = J;
        r.patchEventTarget = V;
        r.isIEOrEdge = H;
        r.ObjectDefineProperty = o;
        r.ObjectGetOwnPropertyDescriptor = n;
        r.ObjectCreate = s;
        r.ArraySlice = i;
        r.patchClass = I;
        r.wrapWithCurrentZone = d;
        r.filterProperties = me;
        r.attachOriginToPatched = L;
        r._redefineProperty = oe;
        r.patchCallbacks = Y;
        r.getGlobalObjects = () => ({
          globalSources: $,
          zoneSymbolEventNames: B,
          eventNames: _e,
          isBrowser: S,
          isMix: D,
          isNode: Z,
          TRUE_STR: h,
          FALSE_STR: p,
          ZONE_SYMBOL_PREFIX: f,
          ADD_EVENT_LISTENER_STR: a,
          REMOVE_EVENT_LISTENER_STR: c,
        });
      });
      const be = _('zoneTask');
      Zone.__load_patch('legacy', e => {
        const t = e[Zone.__symbol__('legacyPatch')];
        if (t) {
          t();
        }
      });
      Zone.__load_patch('timers', e => {
        ve(e, 'set', 'clear', 'Timeout');
        ve(e, 'set', 'clear', 'Interval');
        ve(e, 'set', 'clear', 'Immediate');
      });
      Zone.__load_patch('requestAnimationFrame', e => {
        ve(e, 'request', 'cancel', 'AnimationFrame');
        ve(e, 'mozRequest', 'mozCancel', 'AnimationFrame');
        ve(e, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });
      Zone.__load_patch('blocking', (e, t) => {
        const n = ['alert', 'prompt', 'confirm'];
        for (let o = 0; o < n.length; o++) {
          x(
            e,
            n[o],
            (n, o, r) =>
              function(o, s) {
                return t.current.run(n, e, s, r);
              }
          );
        }
      });
      Zone.__load_patch('EventTarget', (e, t, n) => {
        (function(e, t) {
          t.patchEventPrototype(e, t);
        })(e, n);
        Te(e, n);
        const o = e.XMLHttpRequestEventTarget;
        if (o && o.prototype) {
          n.patchEventTarget(e, [o.prototype]);
        }
        I('MutationObserver');
        I('WebKitMutationObserver');
        I('IntersectionObserver');
        I('FileReader');
      });
      Zone.__load_patch('on_property', (e, t, n) => {
        ke(n, e);
        Object.defineProperty = function(e, t, n) {
          if (re(e, t)) {
            throw new TypeError(
              "Cannot assign to read only property '" + t + "' of " + e
            );
          }
          const o = n.configurable;
          if (t !== 'prototype') {
            n = se(e, t, n);
          }
          return ie(e, t, n, o);
        };
        Object.defineProperties = function(e, t) {
          Object.keys(t).forEach(function(n) {
            Object.defineProperty(e, n, t[n]);
          });
          return e;
        };
        Object.create = function(e, t) {
          if (typeof t == 'object' && !Object.isFrozen(t)) {
            Object.keys(t).forEach(function(n) {
              t[n] = se(e, n, t[n]);
            });
          }
          return te(e, t);
        };
        Object.getOwnPropertyDescriptor = function(e, t) {
          const n = ee(e, t);
          if (n && re(e, t)) {
            n.configurable = false;
          }
          return n;
        };
      });
      Zone.__load_patch('customElements', (e, t, n) => {
        (function(e, t) {
          const { isBrowser: n, isMix: o } = t.getGlobalObjects();
          if ((n || o) && e.customElements && 'customElements' in e) {
            t.patchCallbacks(t, e.customElements, 'customElements', 'define', [
              'connectedCallback',
              'disconnectedCallback',
              'adoptedCallback',
              'attributeChangedCallback',
            ]);
          }
        })(e, n);
      });
      Zone.__load_patch('XHR', (e, t) => {
        (function(e) {
          function y(e) {
            const t = e.data;
            const o = t.target;
            o[s] = false;
            o[a] = false;
            const i = o[r];
            if (!p) {
              p = o[l];
              f = o[u];
            }
            if (i) {
              f.call(o, d, i);
            }
            const c = (o[r] = () => {
              if (o.readyState === o.DONE) {
                if (!t.aborted && o[s] && e.state === m) {
                  const n = o.__zone_symbol__loadfalse;
                  if (n && n.length > 0) {
                    const r = e.invoke;
                    e.invoke = function() {
                      const n = o.__zone_symbol__loadfalse;
                      for (let t = 0; t < n.length; t++) {
                        if (n[t] === e) {
                          n.splice(t, 1);
                        }
                      }
                      if (!t.aborted && e.state === m) {
                        r.call(e);
                      }
                    };
                    n.push(e);
                  } else {
                    e.invoke();
                  }
                } else if (!t.aborted && o[s] === false) {
                  o[a] = true;
                }
              }
            });
            p.call(o, d, c);
            if (!o[n]) {
              o[n] = e;
            }
            E.apply(o, t.args);
            o[s] = true;
            return e;
          }
          function k() {}
          function b(e) {
            const t = e.data;
            t.aborted = true;
            return Z.apply(t.target, t.args);
          }
          const c = e.XMLHttpRequest;
          if (!c) {
            return;
          }
          const h = c.prototype;
          let p = h[l];
          let f = h[u];
          if (!p) {
            const t = e.XMLHttpRequestEventTarget;
            if (t) {
              const e = t.prototype;
              p = e[l];
              f = e[u];
            }
          }
          const d = 'readystatechange';
          const m = 'scheduled';
          const v = x(
            h,
            'open',
            () =>
              function(e, t) {
                e[o] = t[2] == 0;
                e[i] = t[1];
                return v.apply(e, t);
              }
          );
          const T = _('fetchTaskAborting');
          const w = _('fetchTaskScheduling');
          const E = x(
            h,
            'send',
            () =>
              function(e, n) {
                if (t.current[w] === true) {
                  return E.apply(e, n);
                }
                if (e[o]) {
                  return E.apply(e, n);
                }
                {
                  const t = {
                    target: e,
                    url: e[i],
                    isPeriodic: false,
                    args: n,
                    aborted: false,
                  };
                  const o = g('XMLHttpRequest.send', k, t, y, b);
                  if (e && e[a] === true && !t.aborted && o.state === m) {
                    o.invoke();
                  }
                }
              }
          );
          const Z = x(
            h,
            'abort',
            () =>
              function(e, o) {
                const r = e[n];
                if (r && typeof r.type == 'string') {
                  if (r.cancelFn == null || (r.data && r.data.aborted)) {
                    return;
                  }
                  r.zone.cancelTask(r);
                } else if (t.current[T] === true) {
                  return Z.apply(e, o);
                }
              }
          );
        })(e);
        const n = _('xhrTask');
        const o = _('xhrSync');
        const r = _('xhrListener');
        const s = _('xhrScheduled');
        const i = _('xhrURL');
        const a = _('xhrErrorBeforeScheduled');
      });
      Zone.__load_patch('geolocation', e => {
        if (e.navigator && e.navigator.geolocation) {
          (function(e, t) {
            const o = e.constructor.name;
            for (let r = 0; r < t.length; r++) {
              const s = t[r];
              const i = e[s];
              if (i) {
                if (!w(n(e, s))) {
                  continue;
                }
                e[s] = (e => {
                  const t = function() {
                    return e.apply(this, T(arguments, o + '.' + s));
                  };
                  L(t, e);
                  return t;
                })(i);
              }
            }
          })(e.navigator.geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });
      Zone.__load_patch('PromiseRejectionEvent', (e, t) => {
        function n(t) {
          return function(n) {
            X(e, t).forEach(o => {
              const r = e.PromiseRejectionEvent;
              if (r) {
                const e = new r(t, { promise: n.promise, reason: n.rejection });
                o.invoke(e);
              }
            });
          };
        }
        if (e.PromiseRejectionEvent) {
          t[_('unhandledPromiseRejectionHandler')] = n('unhandledrejection');
          t[_('rejectionHandledHandler')] = n('rejectionhandled');
        }
      });
    },
  },
  [[1, 0]],
]);

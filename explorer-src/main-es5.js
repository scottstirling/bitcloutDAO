(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(t, e, n) {
      t.exports = n('zUnb');
    },
    mrSG: function(t, e, n) {
      'use strict';
      function o(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e);
        t.prototype =
          e === null
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n());
      }
      function a(t, e) {
        var n = {};
        for (var r in t) {
          if (Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0) {
            n[r] = t[r];
          }
        }
        if (t != null && typeof Object.getOwnPropertySymbols == 'function') {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) {
            if (
              e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o])
            ) {
              n[r[o]] = t[r[o]];
            }
          }
        }
        return n;
      }
      function u(t, e, n, r) {
        var o;
        var i = arguments.length;
        var a =
          i < 3
            ? e
            : r === null ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
        if (
          typeof Reflect == 'object' &&
          typeof Reflect.decorate == 'function'
        ) {
          a = Reflect.decorate(t, e, n, r);
        } else {
          for (var u = t.length - 1; u >= 0; u--) {
            if ((o = t[u])) {
              a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a;
            }
          }
        }
        if (i > 3 && a) {
          Object.defineProperty(e, n, a);
        }
        return a;
      }
      function s(t, e) {
        return function(n, r) {
          e(n, r, t);
        };
      }
      function l(t, e) {
        if (
          typeof Reflect == 'object' &&
          typeof Reflect.metadata == 'function'
        ) {
          return Reflect.metadata(t, e);
        }
      }
      function c(t, e, n, r) {
        return new (n || (n = Promise))(function(o, i) {
          function a(t) {
            try {
              s(r.next(t));
            } catch (e) {
              i(e);
            }
          }
          function u(t) {
            try {
              s(r.throw(t));
            } catch (e) {
              i(e);
            }
          }
          function s(t) {
            if (t.done) {
              o(t.value);
            } else {
              new n(function(e) {
                e(t.value);
              }).then(a, u);
            }
          }
          s((r = r.apply(t, e || [])).next());
        });
      }
      function p(t, e) {
        function u(i) {
          return function(u) {
            return (function(i) {
              if (n) {
                throw new TypeError('Generator is already executing.');
              }
              while (a) {
                try {
                  n = 1;
                  if (
                    r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, i[1])).done
                  ) {
                    return o;
                  }
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      a.label++;
                      return { value: i[1], done: false };
                    case 5:
                      a.label++;
                      r = i[1];
                      i = [0];
                      continue;
                    case 7:
                      i = a.ops.pop();
                      a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (i[0] === 6 || i[0] === 2)
                      ) {
                        a = 0;
                        continue;
                      }
                      if (i[0] === 3 && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (i[0] === 6 && a.label < o[1]) {
                        a.label = o[1];
                        o = i;
                        break;
                      }
                      if (o && a.label < o[2]) {
                        a.label = o[2];
                        a.ops.push(i);
                        break;
                      }
                      if (o[2]) {
                        a.ops.pop();
                      }
                      a.trys.pop();
                      continue;
                  }
                  i = e.call(t, a);
                } catch (u) {
                  i = [6, u];
                  r = 0;
                } finally {
                  n = o = 0;
                }
              }
              if (5 & i[0]) {
                throw i[1];
              }
              return { value: i[0] ? i[1] : void 0, done: true };
            })([i, u]);
          };
        }
        var n;
        var r;
        var o;
        var a = {
          label: 0,
          sent: function() {
            if (1 & o[0]) {
              throw o[1];
            }
            return o[1];
          },
          trys: [],
          ops: [],
        };
        var i = { next: u(0), throw: u(1), return: u(2) };
        if (typeof Symbol == 'function') {
          i[Symbol.iterator] = function() {
            return this;
          };
        }
        return i;
      }
      function h(t, e) {
        for (var n in t) {
          if (!e.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        }
      }
      function f(t) {
        var e = typeof Symbol == 'function' && t[Symbol.iterator];
        var n = 0;
        if (e) {
          return e.call(t);
        } else {
          return {
            next: function() {
              if (t && n >= t.length) {
                t = void 0;
              }
              return { value: t && t[n++], done: !t };
            },
          };
        }
      }
      function d(t, e) {
        var n = typeof Symbol == 'function' && t[Symbol.iterator];
        if (!n) {
          return t;
        }
        var r;
        var o;
        var i = n.call(t);
        var a = [];
        try {
          while ((e === void 0 || e-- > 0) && !(r = i.next()).done) {
            a.push(r.value);
          }
        } catch (u) {
          o = { error: u };
        } finally {
          try {
            if (r && !r.done && (n = i.return)) {
              n.call(i);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        return a;
      }
      function y() {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
          t = t.concat(d(arguments[e]));
        }
        return t;
      }
      function v() {
        var t = 0;
        var e = 0;
        for (var n = arguments.length; e < n; e++) {
          t += arguments[e].length;
        }
        var r = Array(t);
        var o = 0;
        for (e = 0; e < n; e++) {
          var i = arguments[e];
          var a = 0;
          for (var u = i.length; a < u; a++, o++) {
            r[o] = i[a];
          }
        }
        return r;
      }
      function g(t) {
        if (this instanceof g) {
          this.v = t;
          return this;
        } else {
          return new g(t);
        }
      }
      function m(t, e, n) {
        function a(t) {
          if (o[t]) {
            r[t] = function(e) {
              return new Promise(function(n, r) {
                if (!(i.push([t, e, n, r]) > 1)) {
                  u(t, e);
                }
              });
            };
          }
        }
        function u(t, e) {
          try {
            if ((n = o[t](e)).value instanceof g) {
              Promise.resolve(n.value.v).then(s, l);
            } else {
              c(i[0][2], n);
            }
          } catch (r) {
            c(i[0][3], r);
          }
          var n;
        }
        function s(t) {
          u('next', t);
        }
        function l(t) {
          u('throw', t);
        }
        function c(t, e) {
          t(e);
          i.shift();
          if (i.length) {
            u(i[0][0], i[0][1]);
          }
        }
        if (!Symbol.asyncIterator) {
          throw new TypeError('Symbol.asyncIterator is not defined.');
        }
        var o = n.apply(t, e || []);
        var i = [];
        var r = {};
        a('next');
        a('throw');
        a('return');
        r[Symbol.asyncIterator] = function() {
          return this;
        };
        return r;
      }
      function _(t) {
        function r(r, o) {
          e[r] = t[r]
            ? function(e) {
                if ((n = !n)) {
                  return { value: g(t[r](e)), done: r === 'return' };
                } else if (o) {
                  return o(e);
                } else {
                  return e;
                }
              }
            : o;
        }
        var n;
        var e = {};
        r('next');
        r('throw', function(t) {
          throw t;
        });
        r('return');
        e[Symbol.iterator] = function() {
          return this;
        };
        return e;
      }
      function b(t) {
        function r(n) {
          e[n] =
            t[n] &&
            function(e) {
              return new Promise(function(r, o) {
                (function(t, e, n, r) {
                  Promise.resolve(r).then(function(e) {
                    t({ value: e, done: n });
                  }, e);
                })(r, o, (e = t[n](e)).done, e.value);
              });
            };
        }
        if (!Symbol.asyncIterator) {
          throw new TypeError('Symbol.asyncIterator is not defined.');
        }
        var e;
        var n = t[Symbol.asyncIterator];
        if (n) {
          return n.call(t);
        } else {
          t = f(t);
          e = {};
          r('next');
          r('throw');
          r('return');
          e[Symbol.asyncIterator] = function() {
            return this;
          };
          return e;
        }
      }
      function w(t, e) {
        if (Object.defineProperty) {
          Object.defineProperty(t, 'raw', { value: e });
        } else {
          t.raw = e;
        }
        return t;
      }
      function C(t) {
        if (t && t.__esModule) {
          return t;
        }
        var e = {};
        if (t != null) {
          for (var n in t) {
            if (Object.hasOwnProperty.call(t, n)) {
              e[n] = t[n];
            }
          }
        }
        e.default = t;
        return e;
      }
      function x(t) {
        if (t && t.__esModule) {
          return t;
        } else {
          return { default: t };
        }
      }
      n.r(e);
      n.d(e, '__extends', function() {
        return o;
      });
      n.d(e, '__assign', function() {
        return i;
      });
      n.d(e, '__rest', function() {
        return a;
      });
      n.d(e, '__decorate', function() {
        return u;
      });
      n.d(e, '__param', function() {
        return s;
      });
      n.d(e, '__metadata', function() {
        return l;
      });
      n.d(e, '__awaiter', function() {
        return c;
      });
      n.d(e, '__generator', function() {
        return p;
      });
      n.d(e, '__exportStar', function() {
        return h;
      });
      n.d(e, '__values', function() {
        return f;
      });
      n.d(e, '__read', function() {
        return d;
      });
      n.d(e, '__spread', function() {
        return y;
      });
      n.d(e, '__spreadArrays', function() {
        return v;
      });
      n.d(e, '__await', function() {
        return g;
      });
      n.d(e, '__asyncGenerator', function() {
        return m;
      });
      n.d(e, '__asyncDelegator', function() {
        return _;
      });
      n.d(e, '__asyncValues', function() {
        return b;
      });
      n.d(e, '__makeTemplateObject', function() {
        return w;
      });
      n.d(e, '__importStar', function() {
        return C;
      });
      n.d(e, '__importDefault', function() {
        return x;
      });
      var r = function(t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) {
              if (e.hasOwnProperty(n)) {
                t[n] = e[n];
              }
            }
          })(t, e);
      };
      var i = function() {
        return (i =
          Object.assign ||
          function(t) {
            var e;
            var n = 1;
            for (var r = arguments.length; n < r; n++) {
              for (var o in (e = arguments[n])) {
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  t[o] = e[o];
                }
              }
            }
            return t;
          }).apply(this, arguments);
      };
    },
    zUnb: function(t, e, n) {
      'use strict';
      function i(t) {
        return t !== null && typeof t == 'object';
      }
      function a(t) {
        return typeof t == 'function';
      }
      function u(t) {
        Error.call(this);
        this.message = t
          ? t.length +
            ' errors occurred during unsubscription:\n' +
            t
              .map(function(t, e) {
                return e + 1 + ') ' + t.toString();
              })
              .join('\n  ')
          : '';
        this.name = 'UnsubscriptionError';
        this.errors = t;
        return this;
      }
      function c(t) {
        return t.reduce(function(t, e) {
          return t.concat(e instanceof s ? e.errors : e);
        }, []);
      }
      function f(t) {
        setTimeout(function() {
          throw t;
        });
      }
      function _() {}
      function b() {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
        return w(t);
      }
      function w(t) {
        if (t) {
          if (t.length === 1) {
            return t[0];
          } else {
            return function(e) {
              return t.reduce(function(t, e) {
                return e(t);
              }, e);
            };
          }
        } else {
          return _;
        }
      }
      function x(t) {
        if (!t) {
          t = h.Promise || Promise;
        }
        if (!t) {
          throw new Error('no Promise impl found');
        }
        return t;
      }
      function E() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
      }
      function A(t) {
        return t && typeof t.schedule == 'function';
      }
      function j() {
        if (typeof Symbol == 'function' && Symbol.iterator) {
          return Symbol.iterator;
        } else {
          return '@@iterator';
        }
      }
      function L(t) {
        return (
          !!t && typeof t.subscribe != 'function' && typeof t.then == 'function'
        );
      }
      function H(t, e, n, r, o) {
        if (o === void 0) {
          o = new I(t, n, r);
        }
        if (!o.closed) {
          return F(e)(o);
        }
      }
      function B(t, e) {
        return function(n) {
          if (typeof t != 'function') {
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          }
          return n.lift(new q(t, e));
        };
      }
      function G(t, e) {
        return new C(
          e
            ? function(n) {
                var r = new l();
                var o = 0;
                r.add(
                  e.schedule(function() {
                    if (o === t.length) {
                      n.complete();
                    } else {
                      n.next(t[o++]);
                      if (!n.closed) {
                        r.add(this.schedule());
                      }
                    }
                  })
                );
                return r;
              }
            : R(t)
        );
      }
      function W(t, e) {
        if (!e) {
          if (t instanceof C) {
            return t;
          } else {
            return new C(F(t));
          }
        }
        if (t != null) {
          if (
            (function(t) {
              return t && typeof t[m] == 'function';
            })(t)
          ) {
            return (function(t, e) {
              return new C(
                e
                  ? function(n) {
                      var r = new l();
                      r.add(
                        e.schedule(function() {
                          var o = t[m]();
                          r.add(
                            o.subscribe({
                              next: function(t) {
                                r.add(
                                  e.schedule(function() {
                                    return n.next(t);
                                  })
                                );
                              },
                              error: function(t) {
                                r.add(
                                  e.schedule(function() {
                                    return n.error(t);
                                  })
                                );
                              },
                              complete: function() {
                                r.add(
                                  e.schedule(function() {
                                    return n.complete();
                                  })
                                );
                              },
                            })
                          );
                        })
                      );
                      return r;
                    }
                  : V(t)
              );
            })(t, e);
          }
          if (L(t)) {
            return (function(t, e) {
              return new C(
                e
                  ? function(n) {
                      var r = new l();
                      r.add(
                        e.schedule(function() {
                          return t.then(
                            function(t) {
                              r.add(
                                e.schedule(function() {
                                  n.next(t);
                                  r.add(
                                    e.schedule(function() {
                                      return n.complete();
                                    })
                                  );
                                })
                              );
                            },
                            function(t) {
                              r.add(
                                e.schedule(function() {
                                  return n.error(t);
                                })
                              );
                            }
                          );
                        })
                      );
                      return r;
                    }
                  : N(t)
              );
            })(t, e);
          }
          if (U(t)) {
            return G(t, e);
          }
          if (
            (function(t) {
              return t && typeof t[M] == 'function';
            })(t) ||
            typeof t == 'string'
          ) {
            return (function(t, e) {
              if (!t) {
                throw new Error('Iterable cannot be null');
              }
              return new C(
                e
                  ? function(n) {
                      var r;
                      var o = new l();
                      o.add(function() {
                        if (r && typeof r.return == 'function') {
                          r.return();
                        }
                      });
                      o.add(
                        e.schedule(function() {
                          r = t[M]();
                          o.add(
                            e.schedule(function() {
                              if (!n.closed) {
                                var t;
                                var e;
                                try {
                                  var o = r.next();
                                  t = o.value;
                                  e = o.done;
                                } catch (i) {
                                  n.error(i);
                                  return;
                                }
                                if (e) {
                                  n.complete();
                                } else {
                                  n.next(t);
                                  this.schedule();
                                }
                              }
                            })
                          );
                        })
                      );
                      return o;
                    }
                  : D(t)
              );
            })(t, e);
          }
        }
        throw new TypeError(
          ((t !== null && typeof t) || t) + ' is not observable'
        );
      }
      function Z(t, e, n) {
        if (n === void 0) {
          n = Number.POSITIVE_INFINITY;
        }
        if (typeof e == 'function') {
          return function(r) {
            return r.pipe(
              Z(function(n, r) {
                return W(t(n, r)).pipe(
                  B(function(t, o) {
                    return e(n, t, r, o);
                  })
                );
              }, n)
            );
          };
        } else {
          if (typeof e == 'number') {
            n = e;
          }
          return function(e) {
            return e.lift(new K(t, n));
          };
        }
      }
      function J(t) {
        return t;
      }
      function Y(t) {
        if (t === void 0) {
          t = Number.POSITIVE_INFINITY;
        }
        return Z(J, t);
      }
      function X() {
        return function(t) {
          return t.lift(new tt(t));
        };
      }
      function it() {
        return new k();
      }
      function st(t) {
        return function() {
          var e = [];
          for (var n = 0; n < arguments.length; n++) {
            e[n] = arguments[n];
          }
          if (t) {
            var o = t.apply(void 0, Object(r.__spread)(e));
            for (var i in o) {
              this[i] = o[i];
            }
          }
        };
      }
      function lt(t, e, n) {
        function i() {
          function u(t, e, n) {
            for (
              var r = t.hasOwnProperty(at)
                ? t[at]
                : Object.defineProperty(t, at, { value: [] })[at];
              r.length <= n;

            ) {
              r.push(null);
            }
            (r[n] = r[n] || []).push(a);
            return t;
          }
          var t;
          var e = [];
          for (var n = 0; n < arguments.length; n++) {
            e[n] = arguments[n];
          }
          if (this instanceof i) {
            o.apply(this, e);
            return this;
          }
          var a = new ((t = i).bind.apply(
            t,
            Object(r.__spread)([void 0], e)
          ))();
          u.annotation = a;
          return u;
        }
        var o = st(e);
        if (n) {
          i.prototype = Object.create(n.prototype);
        }
        i.prototype.ngMetadataName = t;
        i.annotationCls = i;
        return i;
      }
      function ct(t, e, n, o) {
        function a() {
          var t;
          var e = [];
          for (var n = 0; n < arguments.length; n++) {
            e[n] = arguments[n];
          }
          if (this instanceof a) {
            i.apply(this, e);
            return this;
          }
          var u = new ((t = a).bind.apply(
            t,
            Object(r.__spread)([void 0], e)
          ))();
          return function(t, n) {
            var i = t.constructor;
            var a = i.hasOwnProperty(ut)
              ? i[ut]
              : Object.defineProperty(i, ut, { value: {} })[ut];
            a[n] = (a.hasOwnProperty(n) && a[n]) || [];
            a[n].unshift(u);
            if (o) {
              o.apply(void 0, Object(r.__spread)([t, n], e));
            }
          };
        }
        var i = st(e);
        if (n) {
          a.prototype = Object.create(n.prototype);
        }
        a.prototype.ngMetadataName = t;
        a.annotationCls = a;
        return a;
      }
      function vt(t) {
        for (var e in t) {
          if (t[e] === vt) {
            return e;
          }
        }
        throw Error('Could not find renamed property on target object.');
      }
      function gt(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function mt(t) {
        var e = t[_t];
        if (e && e.token === t) {
          return e;
        } else {
          return null;
        }
      }
      function bt(t) {
        if (typeof t == 'string') {
          return t;
        }
        if (t instanceof Array) {
          return '[' + t.map(bt).join(', ') + ']';
        }
        if (t == null) {
          return '' + t;
        }
        if (t.overriddenName) {
          return '' + t.overriddenName;
        }
        if (t.name) {
          return '' + t.name;
        }
        var e = t.toString();
        if (e == null) {
          return '' + e;
        }
        var n = e.indexOf('\n');
        if (n === -1) {
          return e;
        } else {
          return e.substring(0, n);
        }
      }
      function Ct(t) {
        t.__forward_ref__ = Ct;
        t.toString = function() {
          return bt(this());
        };
        return t;
      }
      function xt(t) {
        var e = t;
        if (
          typeof e == 'function' &&
          e.hasOwnProperty(wt) &&
          e.__forward_ref__ === Ct
        ) {
          return e();
        } else {
          return t;
        }
      }
      function Ut(t) {
        var e = Vt;
        Vt = t;
        return e;
      }
      function Lt(t, e) {
        if (e === void 0) {
          e = yt.Default;
        }
        if (Vt === void 0) {
          throw new Error('inject() must be called from an injection context');
        }
        if (Vt === null) {
          return (function(t, e, n) {
            var r = mt(t);
            if (r && r.providedIn == 'root') {
              if (r.value === void 0) {
                return (r.value = r.factory());
              } else {
                return r.value;
              }
            }
            if (n & yt.Optional) {
              return null;
            }
            throw new Error('Injector: NOT_FOUND [' + bt(t) + ']');
          })(t, 0, e);
        } else {
          return Vt.get(t, e & yt.Optional ? null : void 0, e);
        }
      }
      function Ft(t, e) {
        if (e === void 0) {
          e = yt.Default;
        }
        return (Et || Lt)(t, e);
      }
      function zt(t, e, n, r) {
        if (r === void 0) {
          r = null;
        }
        t = t && t.charAt(0) === '\n' && t.charAt(1) == jt ? t.substr(2) : t;
        var o = bt(e);
        if (e instanceof Array) {
          o = e.map(bt).join(' -> ');
        } else if (typeof e == 'object') {
          var i = [];
          for (var a in e) {
            if (e.hasOwnProperty(a)) {
              var u = e[a];
              i.push(
                a + ':' + (typeof u == 'string' ? JSON.stringify(u) : bt(u))
              );
            }
          }
          o = '{' + i.join(', ') + '}';
        }
        return (
          n + (r ? '(' + r + ')' : '') + '[' + o + ']: ' + t.replace(Nt, '\n  ')
        );
      }
      function Qt(t, e, n) {
        if (e >= t.length) {
          t.push(n);
        } else {
          t.splice(e, 0, n);
        }
      }
      function Gt(t, e) {
        if (e >= t.length - 1) {
          return t.pop();
        } else {
          return t.splice(e, 1)[0];
        }
      }
      function Yt(t) {
        return t[Kt];
      }
      function Xt(t) {
        return t[$t];
      }
      function te(t) {
        var e = [];
        for (var n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }
        t.error.apply(t, Object(r.__spread)(e));
      }
      function oe() {
        re = true;
        return ne;
      }
      function se(t) {
        if ((t = String(t)).match(ae) || t.match(ue)) {
          return t;
        } else {
          if (oe()) {
            console.warn(
              'WARNING: sanitizing unsafe URL value ' +
                t +
                ' (see http://g.co/ng/security#xss)'
            );
          }
          return 'unsafe:' + t;
        }
      }
      function le(t) {
        var e;
        var n;
        var o = {};
        try {
          var i = Object(r.__values)(t.split(','));
          for (var a = i.next(); !a.done; a = i.next()) {
            o[a.value] = true;
          }
        } catch (u) {
          e = { error: u };
        } finally {
          try {
            if (a && !a.done && (n = i.return)) {
              n.call(i);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        return o;
      }
      function ce() {
        var t;
        var e;
        var n = [];
        for (var o = 0; o < arguments.length; o++) {
          n[o] = arguments[o];
        }
        var i = {};
        try {
          var a = Object(r.__values)(n);
          for (var u = a.next(); !u.done; u = a.next()) {
            var s = u.value;
            for (var l in s) {
              if (s.hasOwnProperty(l)) {
                i[l] = true;
              }
            }
          }
        } catch (c) {
          t = { error: c };
        } finally {
          try {
            if (u && !u.done && (e = a.return)) {
              e.call(a);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return i;
      }
      function Ee(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(Ce, function(t) {
            return (
              '&#' +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(xe, function(t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function Se(t) {
        if (
          'content' in t &&
          (function(t) {
            return (
              t.nodeType === Node.ELEMENT_NODE && t.nodeName === 'TEMPLATE'
            );
          })(t)
        ) {
          return t.content;
        } else {
          return null;
        }
      }
      function Ie(t) {
        try {
          if (t == null) {
            return t;
          } else {
            return t.toString().slice(0, 30);
          }
        } catch (e) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      function ze(t) {
        return Be('Cannot mix multi providers and regular providers', t);
      }
      function Be(t, e) {
        return new Error(zt(t, e, 'StaticInjectorError'));
      }
      function Ge() {
        if (!Qe) {
          var t = Pt.Symbol;
          if (t && t.iterator) {
            Qe = t.iterator;
          } else {
            var e = Object.getOwnPropertyNames(Map.prototype);
            for (var n = 0; n < e.length; ++n) {
              var r = e[n];
              if (
                r !== 'entries' &&
                r !== 'size' &&
                Map.prototype[r] === Map.prototype.entries
              ) {
                Qe = r;
              }
            }
          }
        }
        return Qe;
      }
      function We(t, e) {
        return (
          t === e ||
          (typeof t == 'number' && typeof e == 'number' && isNaN(t) && isNaN(e))
        );
      }
      function Ze(t, e) {
        var n = $e(t);
        var r = $e(e);
        if (n && r) {
          return (function(t, e, n) {
            var r = t[Ge()]();
            for (var o = e[Ge()](); ; ) {
              var i = r.next();
              var a = o.next();
              if (i.done && a.done) {
                return true;
              }
              if (i.done || a.done) {
                return false;
              }
              if (!n(i.value, a.value)) {
                return false;
              }
            }
          })(t, e, Ze);
        } else {
          return (
            (!n &&
              !!t &&
              (typeof t == 'object' || typeof t == 'function') &&
              !r &&
              !!e &&
              (typeof e == 'object' || typeof e == 'function')) ||
            We(t, e)
          );
        }
      }
      function $e(t) {
        return (
          !!Je(t) && (Array.isArray(t) || (!(t instanceof Map) && Ge() in t))
        );
      }
      function Je(t) {
        return t !== null && (typeof t == 'function' || typeof t == 'object');
      }
      function Ye(t) {
        return !!t && typeof t.then == 'function';
      }
      function Xe(t) {
        return !!t && typeof t.subscribe == 'function';
      }
      function rn(t) {
        var e = Error(
          'No component factory found for ' +
            bt(t) +
            '. Did you add it to @NgModule.entryComponents?'
        );
        e[on] = t;
        return e;
      }
      function cn() {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
      }
      function Sn(t, e, n) {
        var r = t.previousIndex;
        if (r === null) {
          return r;
        }
        var o = 0;
        if (n && r < n.length) {
          o = n[r];
        }
        return r + e + o;
      }
      function Un(t, e, n, r) {
        var o =
          "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
          e +
          "'. Current value: '" +
          n +
          "'.";
        if (r) {
          o +=
            ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?';
        }
        return (function(t, e) {
          var n = new Error(t);
          Ln(n, e);
          return n;
        })(o, t);
      }
      function Ln(t, e) {
        t[Kt] = e;
        t[Jt] = e.logError.bind(e);
      }
      function Fn(t) {
        return new Error(
          'ViewDestroyedError: Attempt to use a destroyed view: ' + t
        );
      }
      function Hn(t, e, n) {
        var r = t.state;
        var o = 1792 & r;
        if (o === e) {
          t.state = (-1793 & r) | n;
          t.initIndex = -1;
          return true;
        } else {
          return o === n;
        }
      }
      function zn(t, e, n) {
        return (
          (1792 & t.state) === e &&
          t.initIndex <= n &&
          ((t.initIndex = n + 1), true)
        );
      }
      function Bn(t, e) {
        return t.nodes[e];
      }
      function qn(t, e) {
        return t.nodes[e];
      }
      function Qn(t, e) {
        return t.nodes[e];
      }
      function Gn(t, e) {
        return t.nodes[e];
      }
      function Wn(t, e) {
        return t.nodes[e];
      }
      function Jn(t) {
        var e = $n.get(t);
        if (!e) {
          e = bt(t) + '_' + $n.size;
          $n.set(t, e);
        }
        return e;
      }
      function tr(t) {
        return {
          id: Yn,
          styles: t.styles,
          encapsulation: t.encapsulation,
          data: t.data,
        };
      }
      function nr(t, e, n, r) {
        return !!(2 & t.state) || !We(t.oldValues[e.bindingIndex + n], r);
      }
      function rr(t, e, n, r) {
        return (
          !!nr(t, e, n, r) && ((t.oldValues[e.bindingIndex + n] = r), true)
        );
      }
      function or(t, e, n, r) {
        var o = t.oldValues[e.bindingIndex + n];
        if (1 & t.state || !Ze(o, r)) {
          var i = e.bindings[n].name;
          throw Un(
            Zn.createDebugContext(t, e.nodeIndex),
            i + ': ' + o,
            i + ': ' + r,
            (1 & t.state) != 0
          );
        }
      }
      function ir(t) {
        for (var e = t; e; ) {
          if (2 & e.def.flags) {
            e.state |= 8;
          }
          e = e.viewContainerParent || e.parent;
        }
      }
      function ar(t, e) {
        for (var n = t; n && n !== e; ) {
          n.state |= 64;
          n = n.viewContainerParent || n.parent;
        }
      }
      function ur(t, e, n, r) {
        try {
          ir(33554432 & t.def.nodes[e].flags ? qn(t, e).componentView : t);
          return Zn.handleEvent(t, e, n, r);
        } catch (o) {
          t.root.errorHandler.handleError(o);
        }
      }
      function sr(t) {
        if (t.parent) {
          return qn(t.parent, t.parentNodeDef.nodeIndex);
        } else {
          return null;
        }
      }
      function lr(t) {
        if (t.parent) {
          return t.parentNodeDef.parent;
        } else {
          return null;
        }
      }
      function cr(t, e) {
        switch (201347067 & e.flags) {
          case 1:
            return qn(t, e.nodeIndex).renderElement;
          case 2:
            return Bn(t, e.nodeIndex).renderText;
        }
      }
      function pr(t) {
        return !!t.parent && !!(32768 & t.parentNodeDef.flags);
      }
      function hr(t) {
        return !!t.parent && !(32768 & t.parentNodeDef.flags);
      }
      function fr(t) {
        var e = {};
        var n = 0;
        var o = {};
        if (t) {
          t.forEach(function(t) {
            var i = Object(r.__read)(t, 2);
            var a = i[0];
            var u = i[1];
            if (typeof a == 'number') {
              e[a] = u;
              n |= (function() {
                var t = a;
                return 1 << (t % 32);
              })();
            } else {
              o[a] = u;
            }
          });
        }
        return { matchedQueries: e, references: o, matchedQueryIds: n };
      }
      function dr(t, e) {
        return t.map(function(t) {
          var n;
          var o;
          var i;
          if (Array.isArray(t)) {
            i = (n = Object(r.__read)(t, 2))[0];
            o = n[1];
          } else {
            i = 0;
            o = t;
          }
          if (o && (typeof o == 'function' || typeof o == 'object') && e) {
            Object.defineProperty(o, Mt, { value: e, configurable: true });
          }
          return { flags: i, token: o, tokenKey: Jn(o) };
        });
      }
      function yr(t, e, n) {
        var r = n.renderParent;
        if (r) {
          if (
            (1 & r.flags) == 0 ||
            (33554432 & r.flags) == 0 ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === Wt.Native)
          ) {
            return qn(t, n.renderParent.nodeIndex).renderElement;
          } else {
            return;
          }
        } else {
          return e;
        }
      }
      function gr(t) {
        var e = vr.get(t);
        if (!e) {
          (e = t(function() {
            return Kn;
          })).factory = t;
          vr.set(t, e);
        }
        return e;
      }
      function mr(t, e, n, r, o) {
        if (e === 3) {
          n = t.renderer.parentNode(cr(t, t.def.lastRenderRootNode));
        }
        _r(t, e, 0, t.def.nodes.length - 1, n, r, o);
      }
      function _r(t, e, n, r, o, i, a) {
        for (var u = n; u <= r; u++) {
          var s = t.def.nodes[u];
          if (11 & s.flags) {
            wr(t, s, e, o, i, a);
          }
          u += s.childCount;
        }
      }
      function br(t, e, n, r, o, i) {
        for (var a = t; a && !pr(a); ) {
          a = a.parent;
        }
        var u = a.parent;
        var s = lr(a);
        var l = s.nodeIndex + s.childCount;
        for (var c = s.nodeIndex + 1; c <= l; c++) {
          var p = u.def.nodes[c];
          if (p.ngContentIndex === e) {
            wr(u, p, n, r, o, i);
          }
          c += p.childCount;
        }
        if (!u.parent) {
          var h = t.root.projectableNodes[e];
          if (h) {
            for (c = 0; c < h.length; c++) {
              Cr(t, h[c], n, r, o, i);
            }
          }
        }
      }
      function wr(t, e, n, r, o, i) {
        if (8 & e.flags) {
          br(t, e.ngContent.index, n, r, o, i);
        } else {
          var a = cr(t, e);
          if (n === 3 && 33554432 & e.flags && 48 & e.bindingFlags) {
            if (16 & e.bindingFlags) {
              Cr(t, a, n, r, o, i);
            }
            if (32 & e.bindingFlags) {
              Cr(qn(t, e.nodeIndex).componentView, a, n, r, o, i);
            }
          } else {
            Cr(t, a, n, r, o, i);
          }
          if (16777216 & e.flags) {
            var u = qn(t, e.nodeIndex).viewContainer._embeddedViews;
            for (var s = 0; s < u.length; s++) {
              mr(u[s], n, r, o, i);
            }
          }
          if (1 & e.flags && !e.element.name) {
            _r(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i);
          }
        }
      }
      function Cr(t, e, n, r, o, i) {
        var a = t.renderer;
        switch (n) {
          case 1:
            a.appendChild(r, e);
            break;
          case 2:
            a.insertBefore(r, e, o);
            break;
          case 3:
            a.removeChild(r, e);
            break;
          case 0:
            i.push(e);
        }
      }
      function Er(t) {
        if (t[0] === ':') {
          var e = t.match(xr);
          return [e[1], e[2]];
        }
        return ['', t];
      }
      function Sr(t) {
        var e = 0;
        for (var n = 0; n < t.length; n++) {
          e |= t[n].flags;
        }
        return e;
      }
      function Ar(t, e, n, r) {
        n = xt(n);
        return { index: -1, deps: dr(r, bt(e)), flags: t, token: e, value: n };
      }
      function Ir(t, e, n) {
        if (n === void 0) {
          n = De.THROW_IF_NOT_FOUND;
        }
        var r;
        var o;
        var i = Ut(t);
        try {
          if (8 & e.flags) {
            return e.token;
          }
          if (2 & e.flags) {
            n = null;
          }
          if (1 & e.flags) {
            return t._parent.get(e.token, n);
          }
          var a = e.tokenKey;
          switch (a) {
            case Tr:
            case kr:
            case Pr:
              return t;
          }
          var u;
          var s = t._def.providersByKey[a];
          if (s) {
            var l = t._providers[s.index];
            if (l === void 0) {
              l = t._providers[s.index] = Rr(t, s);
            }
            if (l === Or) {
              return;
            } else {
              return l;
            }
          }
          if (
            (u = mt(e.token)) &&
            ((r = t),
            (o = u).providedIn != null &&
              ((function() {
                var t = r;
                var e = o.providedIn;
                return t._def.modules.indexOf(e) > -1;
              })() ||
                (o.providedIn === 'root' && r._def.isRoot)))
          ) {
            var c = t._providers.length;
            t._def.providers[c] = t._def.providersByKey[e.tokenKey] = {
              flags: 5120,
              value: u.factory,
              deps: [],
              index: c,
              token: e.token,
            };
            t._providers[c] = Or;
            return (t._providers[c] = Rr(t, t._def.providersByKey[e.tokenKey]));
          }
          if (4 & e.flags) {
            return n;
          } else {
            return t._parent.get(e.token, n);
          }
        } finally {
          Ut(i);
        }
      }
      function Rr(t, e) {
        var n;
        switch (201347067 & e.flags) {
          case 512:
            n = (function(t, e, n) {
              var o = n.length;
              switch (o) {
                case 0:
                  return new e();
                case 1:
                  return new e(Ir(t, n[0]));
                case 2:
                  return new e(Ir(t, n[0]), Ir(t, n[1]));
                case 3:
                  return new e(Ir(t, n[0]), Ir(t, n[1]), Ir(t, n[2]));
                default:
                  var i = new Array(o);
                  for (var a = 0; a < o; a++) {
                    i[a] = Ir(t, n[a]);
                  }
                  return new (e.bind.apply(
                    e,
                    Object(r.__spread)([void 0], i)
                  ))();
              }
            })(t, e.value, e.deps);
            break;
          case 1024:
            n = (function(t, e, n) {
              var o = n.length;
              switch (o) {
                case 0:
                  return e();
                case 1:
                  return e(Ir(t, n[0]));
                case 2:
                  return e(Ir(t, n[0]), Ir(t, n[1]));
                case 3:
                  return e(Ir(t, n[0]), Ir(t, n[1]), Ir(t, n[2]));
                default:
                  var i = Array(o);
                  for (var a = 0; a < o; a++) {
                    i[a] = Ir(t, n[a]);
                  }
                  return e.apply(void 0, Object(r.__spread)(i));
              }
            })(t, e.value, e.deps);
            break;
          case 2048:
            n = Ir(t, e.deps[0]);
            break;
          case 256:
            n = e.value;
        }
        if (
          n !== Or &&
          n !== null &&
          typeof n == 'object' &&
          !(131072 & e.flags) &&
          typeof n.ngOnDestroy == 'function'
        ) {
          e.flags |= 131072;
        }
        if (n === void 0) {
          return Or;
        } else {
          return n;
        }
      }
      function Nr(t, e) {
        var n = t.viewContainer._embeddedViews;
        if (e == null || e >= n.length) {
          e = n.length - 1;
        }
        if (e < 0) {
          return null;
        }
        var r = n[e];
        r.viewContainerParent = null;
        Gt(n, e);
        Zn.dirtyParentQueries(r);
        Mr(r);
        return r;
      }
      function jr(t, e, n) {
        var r = e ? cr(e, e.def.lastRenderRootNode) : t.renderElement;
        var o = n.renderer.parentNode(r);
        var i = n.renderer.nextSibling(r);
        mr(n, 2, o, i, void 0);
      }
      function Mr(t) {
        mr(t, 3, null, null, void 0);
      }
      function Vr(t, e, n, r, o, i) {
        return new Ur(t, e, n, r, o, i);
      }
      function Fr(t, e, n) {
        return new Hr(t, e, n);
      }
      function zr(t) {
        return new Br(t);
      }
      function qr(t, e) {
        return new Qr(t, e);
      }
      function Gr(t, e) {
        return new Wr(t, e);
      }
      function Zr(t, e) {
        var n = t.def.nodes[e];
        if (1 & n.flags) {
          var r = qn(t, n.nodeIndex);
          if (n.element.template) {
            return r.template;
          } else {
            return r.renderElement;
          }
        }
        if (2 & n.flags) {
          return Bn(t, n.nodeIndex).renderText;
        }
        if (20240 & n.flags) {
          return Qn(t, n.nodeIndex).instance;
        }
        throw new Error('Illegal state: read nodeValue for node index ' + e);
      }
      function Kr(t) {
        return new $r(t.renderer);
      }
      function Jr(t, e, n, r) {
        return new Yr(t, e, n, r);
      }
      function uo(t, e, n, o, i, a, u, s) {
        var l = [];
        if (u) {
          for (var c in u) {
            var p = Object(r.__read)(u[c], 2);
            l[p[0]] = {
              flags: 8,
              name: c,
              nonMinifiedName: p[1],
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        }
        var h = [];
        if (s) {
          for (var f in s) {
            h.push({ type: 1, propName: f, target: null, eventName: s[f] });
          }
        }
        return lo(t, (e |= 16384), n, o, i, i, a, l, h);
      }
      function so(t, e, n, r, o) {
        return lo(-1, t, e, 0, n, r, o);
      }
      function lo(t, e, n, r, o, i, a, u, s) {
        var l = fr(n);
        var c = l.matchedQueries;
        var p = l.references;
        var h = l.matchedQueryIds;
        if (!s) {
          s = [];
        }
        if (!u) {
          u = [];
        }
        i = xt(i);
        var f = dr(a, bt(o));
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
          matchedQueries: c,
          matchedQueryIds: h,
          references: p,
          ngContentIndex: -1,
          childCount: r,
          bindings: u,
          bindingFlags: Sr(u),
          outputs: s,
          element: null,
          provider: { token: o, value: i, deps: f },
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function co(t, e) {
        return yo(t, e);
      }
      function po(t, e) {
        for (var n = t; n.parent && !pr(n); ) {
          n = n.parent;
        }
        return vo(n.parent, lr(n), true, e.provider.value, e.provider.deps);
      }
      function ho(t, e) {
        var n = vo(
          t,
          e.parent,
          (32768 & e.flags) > 0,
          e.provider.value,
          e.provider.deps
        );
        if (e.outputs.length) {
          for (var r = 0; r < e.outputs.length; r++) {
            var o = e.outputs[r];
            var i = n[o.propName];
            if (!Xe(i)) {
              throw new Error(
                '@Output ' +
                  o.propName +
                  " not initialized in '" +
                  n.constructor.name +
                  "'."
              );
            }
            var a = i.subscribe(fo(t, e.parent.nodeIndex, o.eventName));
            t.disposables[e.outputIndex + r] = a.unsubscribe.bind(a);
          }
        }
        return n;
      }
      function fo(t, e, n) {
        return function(r) {
          return ur(t, e, n, r);
        };
      }
      function yo(t, e) {
        var n = (8192 & e.flags) > 0;
        var o = e.provider;
        switch (201347067 & e.flags) {
          case 512:
            return vo(t, e.parent, n, o.value, o.deps);
          case 1024:
            return (function(t, e, n, o, i) {
              var a = i.length;
              switch (a) {
                case 0:
                  return o();
                case 1:
                  return o(mo(t, e, n, i[0]));
                case 2:
                  return o(mo(t, e, n, i[0]), mo(t, e, n, i[1]));
                case 3:
                  return o(
                    mo(t, e, n, i[0]),
                    mo(t, e, n, i[1]),
                    mo(t, e, n, i[2])
                  );
                default:
                  var u = Array(a);
                  for (var s = 0; s < a; s++) {
                    u[s] = mo(t, e, n, i[s]);
                  }
                  return o.apply(void 0, Object(r.__spread)(u));
              }
            })(t, e.parent, n, o.value, o.deps);
          case 2048:
            return mo(t, e.parent, n, o.deps[0]);
          case 256:
            return o.value;
        }
      }
      function vo(t, e, n, o, i) {
        var a = i.length;
        switch (a) {
          case 0:
            return new o();
          case 1:
            return new o(mo(t, e, n, i[0]));
          case 2:
            return new o(mo(t, e, n, i[0]), mo(t, e, n, i[1]));
          case 3:
            return new o(
              mo(t, e, n, i[0]),
              mo(t, e, n, i[1]),
              mo(t, e, n, i[2])
            );
          default:
            var u = new Array(a);
            for (var s = 0; s < a; s++) {
              u[s] = mo(t, e, n, i[s]);
            }
            return new (o.bind.apply(o, Object(r.__spread)([void 0], u)))();
        }
      }
      function mo(t, e, n, r, o) {
        if (o === void 0) {
          o = De.THROW_IF_NOT_FOUND;
        }
        if (8 & r.flags) {
          return r.token;
        }
        var i = t;
        if (2 & r.flags) {
          o = null;
        }
        var a = r.tokenKey;
        if (a === oo) {
          n = !!e && !!e.element.componentView;
        }
        if (e && 1 & r.flags) {
          n = false;
          e = e.parent;
        }
        for (var u = t; u; ) {
          if (e) {
            switch (a) {
              case Xr:
                return Kr(_o(u, e, n));
              case to:
                return _o(u, e, n).renderer;
              case eo:
                return new pn(qn(u, e.nodeIndex).renderElement);
              case no:
                return qn(u, e.nodeIndex).viewContainer;
              case ro:
                if (e.element.template) {
                  return qn(u, e.nodeIndex).template;
                }
                break;
              case oo:
                return zr(_o(u, e, n));
              case io:
              case ao:
                return Gr(u, e);
              default:
                var s = (n
                  ? e.element.allProviders
                  : e.element.publicProviders)[a];
                if (s) {
                  var l = Qn(u, s.nodeIndex);
                  if (!l) {
                    l = { instance: yo(u, s) };
                    u.nodes[s.nodeIndex] = l;
                  }
                  return l.instance;
                }
            }
          }
          n = pr(u);
          e = lr(u);
          u = u.parent;
          if (4 & r.flags) {
            u = null;
          }
        }
        var c = i.root.injector.get(r.token, go);
        if (c !== go || o === go) {
          return c;
        } else {
          return i.root.ngModule.injector.get(r.token, o);
        }
      }
      function _o(t, e, n) {
        var r;
        if (n) {
          r = qn(t, e.nodeIndex).componentView;
        } else {
          for (r = t; r.parent && !pr(r); ) {
            r = r.parent;
          }
        }
        return r;
      }
      function bo(t, e, n, r, o, i) {
        if (32768 & n.flags) {
          var a = qn(t, n.parent.nodeIndex).componentView;
          if (2 & a.def.flags) {
            a.state |= 8;
          }
        }
        e.instance[n.bindings[r].name] = o;
        if (524288 & n.flags) {
          i = i || {};
          var u = Ke.unwrap(t.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new tn(u, o, (2 & t.state) != 0);
        }
        t.oldValues[n.bindingIndex + r] = o;
        return i;
      }
      function wo(t, e) {
        if (t.def.nodeFlags & e) {
          var n = t.def.nodes;
          var r = 0;
          for (var o = 0; o < n.length; o++) {
            var i = n[o];
            var a = i.parent;
            if (!a && i.flags & e) {
              xo(t, o, i.flags & e, r++);
            }
            for (
              (i.childFlags & e) == 0 && (o += i.childCount);
              a && 1 & a.flags && o === a.nodeIndex + a.childCount;

            ) {
              if (a.directChildFlags & e) {
                r = Co(t, a, e, r);
              }
              a = a.parent;
            }
          }
        }
      }
      function Co(t, e, n, r) {
        for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
          var i = t.def.nodes[o];
          if (i.flags & n) {
            xo(t, o, i.flags & n, r++);
          }
          o += i.childCount;
        }
        return r;
      }
      function xo(t, e, n, r) {
        var o = Qn(t, e);
        if (o) {
          var i = o.instance;
          if (i) {
            Zn.setCurrentNode(t, e);
            if (1048576 & n && zn(t, 512, r)) {
              i.ngAfterContentInit();
            }
            if (2097152 & n) {
              i.ngAfterContentChecked();
            }
            if (4194304 & n && zn(t, 768, r)) {
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
      }
      function Ao(t) {
        var e = 'Expected localeId to be defined';
        if (t == null) {
          (function() {
            var t = e;
            throw new Error('ASSERTION ERROR: ' + t);
          })();
        }
        if (typeof t == 'string') {
          t.toLowerCase().replace(/_/g, '-');
        }
      }
      function Ro() {
        return this._results[Ge()]();
      }
      function Lo() {
        return '' + Fo() + Fo() + Fo();
      }
      function Fo() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      function Wo() {
        throw new Error('Runtime compiler is not loaded');
      }
      function ni() {
        var t = Pt.wtf;
        return !!t && !!(Zo = t.trace) && !((Ko = Zo.events), 0);
      }
      function oi(t, e) {
        return null;
      }
      function si(t) {
        if (typeof Zone == 'undefined') {
          ui.then(function() {
            if (t) {
              t.apply(null, null);
            }
          });
        } else {
          Zone.current.scheduleMicroTask('scheduleMicrotask', t);
        }
      }
      function ci() {}
      function hi(t) {
        if (t._nesting == 0 && !t.hasPendingMicrotasks && !t.isStable) {
          try {
            t._nesting++;
            t.onMicrotaskEmpty.emit(null);
          } finally {
            t._nesting--;
            if (!t.hasPendingMicrotasks) {
              try {
                t.runOutsideAngular(function() {
                  return t.onStable.emit(null);
                });
              } finally {
                t.isStable = true;
              }
            }
          }
        }
      }
      function fi(t) {
        t._nesting++;
        if (t.isStable) {
          t.isStable = false;
          t.onUnstable.emit(null);
        }
      }
      function di(t) {
        t._nesting--;
        hi(t);
      }
      function Ci(t, e, n) {
        if (n === void 0) {
          n = [];
        }
        var r = 'Platform: ' + e;
        var o = new At(r);
        return function(e) {
          if (e === void 0) {
            e = [];
          }
          var i = xi();
          if (!i || i.injector.get(bi, false)) {
            if (t) {
              t(n.concat(e).concat({ provide: o, useValue: true }));
            } else {
              var a = n.concat(e).concat({ provide: o, useValue: true });
              (function() {
                var t = De.create({ providers: a, name: r });
                if (yi && !yi.destroyed && !yi.injector.get(bi, false)) {
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                }
                yi = t.get(Ei);
                var e = t.get(Ho, null);
                if (e) {
                  e.forEach(function(t) {
                    return t();
                  });
                }
              })();
            }
          }
          return (function() {
            var t = o;
            var e = xi();
            if (!e) {
              throw new Error('No platform exists!');
            }
            if (!e.injector.get(t, null)) {
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            }
            return e;
          })();
        };
      }
      function xi() {
        if (yi && !yi.destroyed) {
          return yi;
        } else {
          return null;
        }
      }
      function Si(t, e) {
        if (Array.isArray(e)) {
          return e.reduce(Si, t);
        } else {
          return Object(r.__assign)({}, t, e);
        }
      }
      function Ti(t, e) {
        var n = t.indexOf(e);
        if (n > -1) {
          t.splice(n, 1);
        }
      }
      function Ri(t, e, n) {
        if (!t) {
          throw new Error("Cannot find '" + n + "' in '" + e + "'");
        }
        return t;
      }
      function Ui(t) {
        Di.set(t.nativeNode, t);
      }
      function Fi() {
        return Rn;
      }
      function Hi() {
        return Nn;
      }
      function zi(t) {
        if (t) {
          if (Go) {
            Ao(t);
          }
          return t;
        } else {
          return Po;
        }
      }
      function Bi(t) {
        var e = [];
        t.onStable.subscribe(function() {
          while (e.length) {
            e.pop()();
          }
        });
        return function(t) {
          e.push(t);
        };
      }
      function Qi(t, e, n, r, o, i) {
        t |= 1;
        var a = fr(e);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: t,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: a.matchedQueries,
          matchedQueryIds: a.matchedQueryIds,
          references: a.references,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? gr(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: o || Kn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Gi(t, e, n, o, i, a, u, s, l, c, p, h) {
        var f;
        if (u === void 0) {
          u = [];
        }
        if (!c) {
          c = Kn;
        }
        var d = fr(n);
        var y = d.matchedQueries;
        var v = d.references;
        var g = d.matchedQueryIds;
        var m = null;
        var _ = null;
        if (a) {
          m = (f = Object(r.__read)(Er(a), 2))[0];
          _ = f[1];
        }
        s = s || [];
        var b = new Array(s.length);
        for (var w = 0; w < s.length; w++) {
          var C = Object(r.__read)(s[w], 3);
          var x = C[0];
          var E = C[1];
          var S = C[2];
          var O = Object(r.__read)(Er(E), 2);
          var T = O[0];
          var k = O[1];
          var P = void 0;
          var A = void 0;
          switch (15 & x) {
            case 4:
              A = S;
              break;
            case 1:
            case 8:
              P = S;
          }
          b[w] = {
            flags: x,
            ns: T,
            name: k,
            nonMinifiedName: k,
            securityContext: P,
            suffix: A,
          };
        }
        l = l || [];
        var I = new Array(l.length);
        for (w = 0; w < l.length; w++) {
          var R = Object(r.__read)(l[w], 2);
          I[w] = { type: 0, target: R[0], eventName: R[1], propName: null };
        }
        var N = (u = u || []).map(function(t) {
          var e = Object(r.__read)(t, 2);
          var n = e[0];
          var o = e[1];
          var i = Object(r.__read)(Er(n), 2);
          return [i[0], i[1], o];
        });
        h = (function() {
          var t = h;
          if (t && t.id === Yn) {
            var e =
              (t.encapsulation != null && t.encapsulation !== Wt.None) ||
              t.styles.length ||
              Object.keys(t.data).length;
            t.id = e ? 'c' + er++ : Xn;
          }
          if (t && t.id === Xn) {
            t = null;
          }
          return t || null;
        })();
        if (p) {
          e |= 33554432;
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: (e |= 1),
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: y,
          matchedQueryIds: g,
          references: v,
          ngContentIndex: o,
          childCount: i,
          bindings: b,
          bindingFlags: Sr(b),
          outputs: I,
          element: {
            ns: m,
            name: _,
            attrs: N,
            template: null,
            componentProvider: null,
            componentView: p || null,
            componentRendererType: h,
            publicProviders: null,
            allProviders: null,
            handleEvent: c || Kn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Wi(t, e, n) {
        var o;
        var i = n.element;
        var a = t.root.selectorOrNode;
        var u = t.renderer;
        if (t.parent || !a) {
          o = i.name ? u.createElement(i.name, i.ns) : u.createComment('');
          var s = yr(t, e, n);
          if (s) {
            u.appendChild(s, o);
          }
        } else {
          o = u.selectRootElement(
            a,
            !!i.componentRendererType &&
              i.componentRendererType.encapsulation === Wt.ShadowDom
          );
        }
        if (i.attrs) {
          for (var l = 0; l < i.attrs.length; l++) {
            var c = Object(r.__read)(i.attrs[l], 3);
            u.setAttribute(o, c[1], c[2], c[0]);
          }
        }
        return o;
      }
      function Zi(t, e, n, r) {
        for (var o = 0; o < n.outputs.length; o++) {
          var i = n.outputs[o];
          var a = Ki(
            t,
            n.nodeIndex,
            ((p = i.eventName), (c = i.target) ? c + ':' + p : p)
          );
          var u = i.target;
          var s = t;
          if (i.target === 'component') {
            u = null;
            s = e;
          }
          var l = s.renderer.listen(u || r, i.eventName, a);
          t.disposables[n.outputIndex + o] = l;
        }
        var c;
        var p;
      }
      function Ki(t, e, n) {
        return function(r) {
          return ur(t, e, n, r);
        };
      }
      function $i(t, e, n, r) {
        if (!rr(t, e, n, r)) {
          return false;
        }
        var o = e.bindings[n];
        var i = qn(t, e.nodeIndex);
        var a = i.renderElement;
        var u = o.name;
        switch (15 & o.flags) {
          case 1:
            (function(t, e, n, r, o, i) {
              var a = e.securityContext;
              var u = a ? t.root.sanitizer.sanitize(a, i) : i;
              u = u != null ? u.toString() : null;
              var s = t.renderer;
              if (i == null) {
                s.removeAttribute(n, o, r);
              } else {
                s.setAttribute(n, o, u, r);
              }
            })(t, o, a, o.ns, u, r);
            break;
          case 2:
            (function(t, e, n, r) {
              var o = t.renderer;
              if (r) {
                o.addClass(e, n);
              } else {
                o.removeClass(e, n);
              }
            })(t, a, u, r);
            break;
          case 4:
            (function(t, e, n, r, o) {
              var i = t.root.sanitizer.sanitize(Oe.STYLE, o);
              if (i == null) {
                i = null;
              } else {
                i = i.toString();
                var a = e.suffix;
                if (a != null) {
                  i += a;
                }
              }
              var u = t.renderer;
              if (i == null) {
                u.removeStyle(n, r);
              } else {
                u.setStyle(n, r, i);
              }
            })(t, o, a, u, r);
            break;
          case 8:
            (function(t, e, n, r, o) {
              var i = e.securityContext;
              var a = i ? t.root.sanitizer.sanitize(i, o) : o;
              t.renderer.setProperty(n, r, a);
            })(
              33554432 & e.flags && 32 & o.flags ? i.componentView : t,
              o,
              a,
              u,
              r
            );
        }
        return true;
      }
      function Ji(t) {
        for (var e = t.def.nodeMatchedQueries; t.parent && hr(t); ) {
          var n = t.parentNodeDef;
          t = t.parent;
          var r = n.nodeIndex + n.childCount;
          for (var o = 0; o <= r; o++) {
            if (
              67108864 & (i = t.def.nodes[o]).flags &&
              536870912 & i.flags &&
              (i.query.filterId & e) === i.query.filterId
            ) {
              Wn(t, o).setDirty();
            }
            if (
              (!!(1 & i.flags) && !!(o + i.childCount < n.nodeIndex)) ||
              !(67108864 & i.childFlags) ||
              !(536870912 & i.childFlags)
            ) {
              o += i.childCount;
            }
          }
        }
        if (134217728 & t.def.nodeFlags) {
          for (o = 0; o < t.def.nodes.length; o++) {
            var i;
            if (134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags) {
              Wn(t, o).setDirty();
            }
            o += i.childCount;
          }
        }
      }
      function Yi(t, e) {
        var n = Wn(t, e.nodeIndex);
        if (n.dirty) {
          var r;
          var o = void 0;
          if (67108864 & e.flags) {
            var i = e.parent.parent;
            o = Xi(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, []);
            r = Qn(t, e.parent.nodeIndex).instance;
          } else if (134217728 & e.flags) {
            o = Xi(t, 0, t.def.nodes.length - 1, e.query, []);
            r = t.component;
          }
          n.reset(o);
          var a = e.query.bindings;
          var u = false;
          for (var s = 0; s < a.length; s++) {
            var l = a[s];
            var c = void 0;
            switch (l.bindingType) {
              case 0:
                c = n.first;
                break;
              case 1:
                c = n;
                u = true;
            }
            r[l.propName] = c;
          }
          if (u) {
            n.notifyOnChanges();
          }
        }
      }
      function Xi(t, e, n, r, o) {
        for (var i = e; i <= n; i++) {
          var a = t.def.nodes[i];
          var u = a.matchedQueries[r.id];
          if (u != null) {
            o.push(ta(t, a, u));
          }
          if (
            1 & a.flags &&
            a.element.template &&
            (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId
          ) {
            var s = qn(t, i);
            if ((a.childMatchedQueries & r.filterId) === r.filterId) {
              Xi(t, i + 1, i + a.childCount, r, o);
              i += a.childCount;
            }
            if (16777216 & a.flags) {
              var l = s.viewContainer._embeddedViews;
              for (var c = 0; c < l.length; c++) {
                var p = l[c];
                var h = sr(p);
                if (h && h === s) {
                  Xi(p, 0, p.def.nodes.length - 1, r, o);
                }
              }
            }
            var f = s.template._projectedViews;
            if (f) {
              for (c = 0; c < f.length; c++) {
                var d = f[c];
                Xi(d, 0, d.def.nodes.length - 1, r, o);
              }
            }
          }
          if ((a.childMatchedQueries & r.filterId) !== r.filterId) {
            i += a.childCount;
          }
        }
        return o;
      }
      function ta(t, e, n) {
        if (n != null) {
          switch (n) {
            case 1:
              return qn(t, e.nodeIndex).renderElement;
            case 0:
              return new pn(qn(t, e.nodeIndex).renderElement);
            case 2:
              return qn(t, e.nodeIndex).template;
            case 3:
              return qn(t, e.nodeIndex).viewContainer;
            case 4:
              return Qn(t, e.nodeIndex).instance;
          }
        }
      }
      function ea(t, e, n) {
        var r = yr(t, e, n);
        if (r) {
          br(t, n.ngContent.index, 1, r, null, void 0);
        }
      }
      function na(t, e) {
        return oa(32, t, new Array(e));
      }
      function ra(t, e) {
        var n = Object.keys(e);
        var r = n.length;
        var o = new Array(r);
        for (var i = 0; i < r; i++) {
          var a = n[i];
          o[e[a]] = a;
        }
        return oa(64, t, o);
      }
      function oa(t, e, n) {
        var r = new Array(n.length);
        for (var o = 0; o < n.length; o++) {
          var i = n[o];
          r[o] = {
            flags: 8,
            name: i,
            ns: null,
            nonMinifiedName: i,
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
          checkIndex: e,
          flags: t,
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
      function ia(t, e, n) {
        var r = new Array(n.length - 1);
        for (var o = 1; o < n.length; o++) {
          r[o - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[o],
          };
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
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
      function aa(t, e, n) {
        var o = t.renderer;
        var r = o.createText(n.text.prefix);
        var i = yr(t, e, n);
        if (i) {
          o.appendChild(i, r);
        }
        return { renderText: r };
      }
      function ua(t, e) {
        return (t != null ? t.toString() : '') + e.suffix;
      }
      function sa(t, e, n, r) {
        var o = 0;
        var i = 0;
        var a = 0;
        var u = 0;
        var s = 0;
        var l = null;
        var c = null;
        var p = false;
        var h = false;
        var f = null;
        for (var d = 0; d < e.length; d++) {
          var y = e[d];
          y.nodeIndex = d;
          y.parent = l;
          y.bindingIndex = o;
          y.outputIndex = i;
          y.renderParent = c;
          a |= y.flags;
          s |= y.matchedQueryIds;
          if (y.element) {
            var v = y.element;
            v.publicProviders = l
              ? l.element.publicProviders
              : Object.create(null);
            v.allProviders = v.publicProviders;
            p = false;
            h = false;
            if (y.element.template) {
              s |= y.element.template.nodeMatchedQueries;
            }
          }
          ca(l, y, e.length);
          o += y.bindings.length;
          i += y.outputs.length;
          if (!c && 3 & y.flags) {
            f = y;
          }
          if (20224 & y.flags) {
            if (!p) {
              p = true;
              l.element.publicProviders = Object.create(
                l.element.publicProviders
              );
              l.element.allProviders = l.element.publicProviders;
            }
            var g = (32768 & y.flags) != 0;
            if ((8192 & y.flags) == 0 || g) {
              l.element.publicProviders[Jn(y.provider.token)] = y;
            } else {
              if (!h) {
                h = true;
                l.element.allProviders = Object.create(
                  l.element.publicProviders
                );
              }
              l.element.allProviders[Jn(y.provider.token)] = y;
            }
            if (g) {
              l.element.componentProvider = y;
            }
          }
          if (l) {
            l.childFlags |= y.flags;
            l.directChildFlags |= y.flags;
            l.childMatchedQueries |= y.matchedQueryIds;
            if (y.element && y.element.template) {
              l.childMatchedQueries |= y.element.template.nodeMatchedQueries;
            }
          } else {
            u |= y.flags;
          }
          if (y.childCount > 0) {
            l = y;
            if (!la(y)) {
              c = y;
            }
          } else {
            while (l && d === l.nodeIndex + l.childCount) {
              var m = l.parent;
              if (m) {
                m.childFlags |= l.childFlags;
                m.childMatchedQueries |= l.childMatchedQueries;
              }
              c = (l = m) && la(l) ? l.renderParent : l;
            }
          }
        }
        return {
          factory: null,
          nodeFlags: a,
          rootNodeFlags: u,
          nodeMatchedQueries: s,
          flags: t,
          nodes: e,
          updateDirectives: n || Kn,
          updateRenderer: r || Kn,
          handleEvent: function(t, n, r, o) {
            return e[n].element.handleEvent(t, r, o);
          },
          bindingCount: o,
          outputCount: i,
          lastRenderRootNode: f,
        };
      }
      function la(t) {
        return (1 & t.flags) != 0 && t.element.name === null;
      }
      function ca(t, e, n) {
        var r = e.element && e.element.template;
        if (r) {
          if (!r.lastRenderRootNode) {
            throw new Error(
              'Illegal State: Embedded templates without nodes are not allowed!'
            );
          }
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) {
            throw new Error(
              "Illegal State: Last root node of a template can't have embedded views, at index " +
                e.nodeIndex +
                '!'
            );
          }
        }
        if (20224 & e.flags && (1 & (t ? t.flags : 0)) == 0) {
          throw new Error(
            'Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ' +
              e.nodeIndex +
              '!'
          );
        }
        if (e.query) {
          if (67108864 & e.flags && (!t || (16384 & t.flags) == 0)) {
            throw new Error(
              'Illegal State: Content Query nodes need to be children of directives, at index ' +
                e.nodeIndex +
                '!'
            );
          }
          if (134217728 & e.flags && t) {
            throw new Error(
              'Illegal State: View Query nodes have to be top level nodes, at index ' +
                e.nodeIndex +
                '!'
            );
          }
        }
        if (e.childCount) {
          var o = t ? t.nodeIndex + t.childCount : n - 1;
          if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o) {
            throw new Error(
              'Illegal State: childCount of node leads outside of parent, at index ' +
                e.nodeIndex +
                '!'
            );
          }
        }
      }
      function pa(t, e, n, r) {
        var o = da(t.root, t.renderer, t, e, n);
        ya(o, t.component, r);
        va(o);
        return o;
      }
      function ha(t, e, n) {
        var r = da(t, t.renderer, null, null, e);
        ya(r, n, n);
        va(r);
        return r;
      }
      function fa(t, e, n, r) {
        var i = e.element.componentRendererType;
        var o = i
          ? t.root.rendererFactory.createRenderer(r, i)
          : t.root.renderer;
        return da(t.root, o, t, e.element.componentProvider, n);
      }
      function da(t, e, n, r, o) {
        var i = new Array(o.nodes.length);
        var a = o.outputCount ? new Array(o.outputCount) : null;
        return {
          def: o,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: t,
          renderer: e,
          oldValues: new Array(o.bindingCount),
          disposables: a,
          initIndex: -1,
        };
      }
      function ya(t, e, n) {
        t.component = e;
        t.context = n;
      }
      function va(t) {
        var e;
        if (pr(t)) {
          e = qn(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement;
        }
        var n = t.def;
        var r = t.nodes;
        for (var o = 0; o < n.nodes.length; o++) {
          var i = n.nodes[o];
          Zn.setCurrentNode(t, o);
          var a = void 0;
          switch (201347067 & i.flags) {
            case 1:
              var u = Wi(t, e, i);
              var s = void 0;
              if (33554432 & i.flags) {
                var l = gr(i.element.componentView);
                s = Zn.createComponentView(t, i, l, u);
              }
              Zi(t, s, i, u);
              a = {
                renderElement: u,
                componentView: s,
                viewContainer: null,
                template: i.element.template ? qr(t, i) : void 0,
              };
              if (16777216 & i.flags) {
                a.viewContainer = Fr(t, i, a);
              }
              break;
            case 2:
              a = aa(t, e, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              if (!(a = r[o]) && !(4096 & i.flags)) {
                a = { instance: co(t, i) };
              }
              break;
            case 16:
              a = { instance: po(t, i) };
              break;
            case 16384:
              if (!(a = r[o])) {
                a = { instance: ho(t, i) };
              }
              if (32768 & i.flags) {
                ya(
                  qn(t, i.parent.nodeIndex).componentView,
                  a.instance,
                  a.instance
                );
              }
              break;
            case 32:
            case 64:
            case 128:
              a = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              a = new No();
              break;
            case 8:
              ea(t, e, i);
              a = void 0;
          }
          r[o] = a;
        }
        Sa(t, Ea.CreateViewNodes);
        Pa(t, 201326592, 268435456, 0);
      }
      function ga(t) {
        ba(t);
        Zn.updateDirectives(t, 1);
        Oa(t, Ea.CheckNoChanges);
        Zn.updateRenderer(t, 1);
        Sa(t, Ea.CheckNoChanges);
        t.state &= -97;
      }
      function ma(t) {
        if (1 & t.state) {
          t.state &= -2;
          t.state |= 2;
        } else {
          t.state &= -3;
        }
        Hn(t, 0, 256);
        ba(t);
        Zn.updateDirectives(t, 0);
        Oa(t, Ea.CheckAndUpdate);
        Pa(t, 67108864, 536870912, 0);
        var e = Hn(t, 256, 512);
        wo(t, 2097152 | (e ? 1048576 : 0));
        Zn.updateRenderer(t, 0);
        Sa(t, Ea.CheckAndUpdate);
        Pa(t, 134217728, 536870912, 0);
        wo(t, 8388608 | ((e = Hn(t, 512, 768)) ? 4194304 : 0));
        if (2 & t.def.flags) {
          t.state &= -9;
        }
        t.state &= -97;
        Hn(t, 768, 1024);
      }
      function _a(t, e, n, o, i, a, u, s, l, c, p, h, f) {
        if (n === 0) {
          return (function(t, e, n, r, o, i, a, u, s, l, c, p) {
            switch (201347067 & e.flags) {
              case 1:
                return (function(t, e, n, r, o, i, a, u, s, l, c, p) {
                  var h = e.bindings.length;
                  var f = false;
                  if (h > 0 && $i(t, e, 0, n)) {
                    f = true;
                  }
                  if (h > 1 && $i(t, e, 1, r)) {
                    f = true;
                  }
                  if (h > 2 && $i(t, e, 2, o)) {
                    f = true;
                  }
                  if (h > 3 && $i(t, e, 3, i)) {
                    f = true;
                  }
                  if (h > 4 && $i(t, e, 4, a)) {
                    f = true;
                  }
                  if (h > 5 && $i(t, e, 5, u)) {
                    f = true;
                  }
                  if (h > 6 && $i(t, e, 6, s)) {
                    f = true;
                  }
                  if (h > 7 && $i(t, e, 7, l)) {
                    f = true;
                  }
                  if (h > 8 && $i(t, e, 8, c)) {
                    f = true;
                  }
                  if (h > 9 && $i(t, e, 9, p)) {
                    f = true;
                  }
                  return f;
                })(t, e, n, r, o, i, a, u, s, l, c, p);
              case 2:
                return (function(t, e, n, r, o, i, a, u, s, l, c, p) {
                  var h = false;
                  var f = e.bindings;
                  var d = f.length;
                  if (d > 0 && rr(t, e, 0, n)) {
                    h = true;
                  }
                  if (d > 1 && rr(t, e, 1, r)) {
                    h = true;
                  }
                  if (d > 2 && rr(t, e, 2, o)) {
                    h = true;
                  }
                  if (d > 3 && rr(t, e, 3, i)) {
                    h = true;
                  }
                  if (d > 4 && rr(t, e, 4, a)) {
                    h = true;
                  }
                  if (d > 5 && rr(t, e, 5, u)) {
                    h = true;
                  }
                  if (d > 6 && rr(t, e, 6, s)) {
                    h = true;
                  }
                  if (d > 7 && rr(t, e, 7, l)) {
                    h = true;
                  }
                  if (d > 8 && rr(t, e, 8, c)) {
                    h = true;
                  }
                  if (d > 9 && rr(t, e, 9, p)) {
                    h = true;
                  }
                  if (h) {
                    var y = e.text.prefix;
                    if (d > 0) {
                      y += ua(n, f[0]);
                    }
                    if (d > 1) {
                      y += ua(r, f[1]);
                    }
                    if (d > 2) {
                      y += ua(o, f[2]);
                    }
                    if (d > 3) {
                      y += ua(i, f[3]);
                    }
                    if (d > 4) {
                      y += ua(a, f[4]);
                    }
                    if (d > 5) {
                      y += ua(u, f[5]);
                    }
                    if (d > 6) {
                      y += ua(s, f[6]);
                    }
                    if (d > 7) {
                      y += ua(l, f[7]);
                    }
                    if (d > 8) {
                      y += ua(c, f[8]);
                    }
                    if (d > 9) {
                      y += ua(p, f[9]);
                    }
                    var v = Bn(t, e.nodeIndex).renderText;
                    t.renderer.setValue(v, y);
                  }
                  return h;
                })(t, e, n, r, o, i, a, u, s, l, c, p);
              case 16384:
                return (function(t, e, n, r, o, i, a, u, s, l, c, p) {
                  var h = Qn(t, e.nodeIndex);
                  var f = h.instance;
                  var d = false;
                  var y = void 0;
                  var v = e.bindings.length;
                  if (v > 0 && nr(t, e, 0, n)) {
                    d = true;
                    y = bo(t, h, e, 0, n, y);
                  }
                  if (v > 1 && nr(t, e, 1, r)) {
                    d = true;
                    y = bo(t, h, e, 1, r, y);
                  }
                  if (v > 2 && nr(t, e, 2, o)) {
                    d = true;
                    y = bo(t, h, e, 2, o, y);
                  }
                  if (v > 3 && nr(t, e, 3, i)) {
                    d = true;
                    y = bo(t, h, e, 3, i, y);
                  }
                  if (v > 4 && nr(t, e, 4, a)) {
                    d = true;
                    y = bo(t, h, e, 4, a, y);
                  }
                  if (v > 5 && nr(t, e, 5, u)) {
                    d = true;
                    y = bo(t, h, e, 5, u, y);
                  }
                  if (v > 6 && nr(t, e, 6, s)) {
                    d = true;
                    y = bo(t, h, e, 6, s, y);
                  }
                  if (v > 7 && nr(t, e, 7, l)) {
                    d = true;
                    y = bo(t, h, e, 7, l, y);
                  }
                  if (v > 8 && nr(t, e, 8, c)) {
                    d = true;
                    y = bo(t, h, e, 8, c, y);
                  }
                  if (v > 9 && nr(t, e, 9, p)) {
                    d = true;
                    y = bo(t, h, e, 9, p, y);
                  }
                  if (y) {
                    f.ngOnChanges(y);
                  }
                  if (65536 & e.flags && zn(t, 256, e.nodeIndex)) {
                    f.ngOnInit();
                  }
                  if (262144 & e.flags) {
                    f.ngDoCheck();
                  }
                  return d;
                })(t, e, n, r, o, i, a, u, s, l, c, p);
              case 32:
              case 64:
              case 128:
                return (function(t, e, n, r, o, i, a, u, s, l, c, p) {
                  var h = e.bindings;
                  var f = false;
                  var d = h.length;
                  if (d > 0 && rr(t, e, 0, n)) {
                    f = true;
                  }
                  if (d > 1 && rr(t, e, 1, r)) {
                    f = true;
                  }
                  if (d > 2 && rr(t, e, 2, o)) {
                    f = true;
                  }
                  if (d > 3 && rr(t, e, 3, i)) {
                    f = true;
                  }
                  if (d > 4 && rr(t, e, 4, a)) {
                    f = true;
                  }
                  if (d > 5 && rr(t, e, 5, u)) {
                    f = true;
                  }
                  if (d > 6 && rr(t, e, 6, s)) {
                    f = true;
                  }
                  if (d > 7 && rr(t, e, 7, l)) {
                    f = true;
                  }
                  if (d > 8 && rr(t, e, 8, c)) {
                    f = true;
                  }
                  if (d > 9 && rr(t, e, 9, p)) {
                    f = true;
                  }
                  if (f) {
                    var y = Gn(t, e.nodeIndex);
                    var v = void 0;
                    switch (201347067 & e.flags) {
                      case 32:
                        v = new Array(h.length);
                        if (d > 0) {
                          v[0] = n;
                        }
                        if (d > 1) {
                          v[1] = r;
                        }
                        if (d > 2) {
                          v[2] = o;
                        }
                        if (d > 3) {
                          v[3] = i;
                        }
                        if (d > 4) {
                          v[4] = a;
                        }
                        if (d > 5) {
                          v[5] = u;
                        }
                        if (d > 6) {
                          v[6] = s;
                        }
                        if (d > 7) {
                          v[7] = l;
                        }
                        if (d > 8) {
                          v[8] = c;
                        }
                        if (d > 9) {
                          v[9] = p;
                        }
                        break;
                      case 64:
                        v = {};
                        if (d > 0) {
                          v[h[0].name] = n;
                        }
                        if (d > 1) {
                          v[h[1].name] = r;
                        }
                        if (d > 2) {
                          v[h[2].name] = o;
                        }
                        if (d > 3) {
                          v[h[3].name] = i;
                        }
                        if (d > 4) {
                          v[h[4].name] = a;
                        }
                        if (d > 5) {
                          v[h[5].name] = u;
                        }
                        if (d > 6) {
                          v[h[6].name] = s;
                        }
                        if (d > 7) {
                          v[h[7].name] = l;
                        }
                        if (d > 8) {
                          v[h[8].name] = c;
                        }
                        if (d > 9) {
                          v[h[9].name] = p;
                        }
                        break;
                      case 128:
                        var g = n;
                        switch (d) {
                          case 1:
                            v = g.transform(n);
                            break;
                          case 2:
                            v = g.transform(r);
                            break;
                          case 3:
                            v = g.transform(r, o);
                            break;
                          case 4:
                            v = g.transform(r, o, i);
                            break;
                          case 5:
                            v = g.transform(r, o, i, a);
                            break;
                          case 6:
                            v = g.transform(r, o, i, a, u);
                            break;
                          case 7:
                            v = g.transform(r, o, i, a, u, s);
                            break;
                          case 8:
                            v = g.transform(r, o, i, a, u, s, l);
                            break;
                          case 9:
                            v = g.transform(r, o, i, a, u, s, l, c);
                            break;
                          case 10:
                            v = g.transform(r, o, i, a, u, s, l, c, p);
                        }
                    }
                    y.value = v;
                  }
                  return f;
                })(t, e, n, r, o, i, a, u, s, l, c, p);
              default:
                throw 'unreachable';
            }
          })(t, e, o, i, a, u, s, l, c, p, h, f);
        } else {
          return (function(t, e, n) {
            switch (201347067 & e.flags) {
              case 1:
                return (function(t, e, n) {
                  var r = false;
                  for (var o = 0; o < n.length; o++) {
                    if ($i(t, e, o, n[o])) {
                      r = true;
                    }
                  }
                  return r;
                })(t, e, n);
              case 2:
                return (function(t, e, n) {
                  var r = e.bindings;
                  var o = false;
                  for (var i = 0; i < n.length; i++) {
                    if (rr(t, e, i, n[i])) {
                      o = true;
                    }
                  }
                  if (o) {
                    var a = '';
                    for (i = 0; i < n.length; i++) {
                      a += ua(n[i], r[i]);
                    }
                    a = e.text.prefix + a;
                    var u = Bn(t, e.nodeIndex).renderText;
                    t.renderer.setValue(u, a);
                  }
                  return o;
                })(t, e, n);
              case 16384:
                return (function(t, e, n) {
                  var r = Qn(t, e.nodeIndex);
                  var o = r.instance;
                  var i = false;
                  var a = void 0;
                  for (var u = 0; u < n.length; u++) {
                    if (nr(t, e, u, n[u])) {
                      i = true;
                      a = bo(t, r, e, u, n[u], a);
                    }
                  }
                  if (a) {
                    o.ngOnChanges(a);
                  }
                  if (65536 & e.flags && zn(t, 256, e.nodeIndex)) {
                    o.ngOnInit();
                  }
                  if (262144 & e.flags) {
                    o.ngDoCheck();
                  }
                  return i;
                })(t, e, n);
              case 32:
              case 64:
              case 128:
                return (function(t, e, n) {
                  var o = e.bindings;
                  var i = false;
                  for (var a = 0; a < n.length; a++) {
                    if (rr(t, e, a, n[a])) {
                      i = true;
                    }
                  }
                  if (i) {
                    var u = Gn(t, e.nodeIndex);
                    var s = void 0;
                    switch (201347067 & e.flags) {
                      case 32:
                        s = n;
                        break;
                      case 64:
                        s = {};
                        for (a = 0; a < n.length; a++) {
                          s[o[a].name] = n[a];
                        }
                        break;
                      case 128:
                        var l = n[0];
                        var c = n.slice(1);
                        s = l.transform.apply(l, Object(r.__spread)(c));
                    }
                    u.value = s;
                  }
                  return i;
                })(t, e, n);
              default:
                throw 'unreachable';
            }
          })(t, e, o);
        }
      }
      function ba(t) {
        var e = t.def;
        if (4 & e.nodeFlags) {
          for (var n = 0; n < e.nodes.length; n++) {
            var r = e.nodes[n];
            if (4 & r.flags) {
              var o = qn(t, n).template._projectedViews;
              if (o) {
                for (var i = 0; i < o.length; i++) {
                  var a = o[i];
                  a.state |= 32;
                  ar(a, t);
                }
              }
            } else if ((4 & r.childFlags) == 0) {
              n += r.childCount;
            }
          }
        }
      }
      function wa(t, e, n, r, o, i, a, u, s, l, c, p, h) {
        if (n === 0) {
          (function(t, e, n, r, o, i, a, u, s, l, c, p) {
            var h = e.bindings.length;
            if (h > 0) {
              or(t, e, 0, n);
            }
            if (h > 1) {
              or(t, e, 1, r);
            }
            if (h > 2) {
              or(t, e, 2, o);
            }
            if (h > 3) {
              or(t, e, 3, i);
            }
            if (h > 4) {
              or(t, e, 4, a);
            }
            if (h > 5) {
              or(t, e, 5, u);
            }
            if (h > 6) {
              or(t, e, 6, s);
            }
            if (h > 7) {
              or(t, e, 7, l);
            }
            if (h > 8) {
              or(t, e, 8, c);
            }
            if (h > 9) {
              or(t, e, 9, p);
            }
          })(t, e, r, o, i, a, u, s, l, c, p, h);
        } else {
          (function(t, e, n) {
            for (var r = 0; r < n.length; r++) {
              or(t, e, r, n[r]);
            }
          })(t, e, r);
        }
        return false;
      }
      function Ca(t, e) {
        if (Wn(t, e.nodeIndex).dirty) {
          throw Un(
            Zn.createDebugContext(t, e.nodeIndex),
            'Query ' + e.query.id + ' not dirty',
            'Query ' + e.query.id + ' dirty',
            (1 & t.state) != 0
          );
        }
      }
      function xa(t) {
        if (!(128 & t.state)) {
          Oa(t, Ea.Destroy);
          Sa(t, Ea.Destroy);
          wo(t, 131072);
          if (t.disposables) {
            for (var e = 0; e < t.disposables.length; e++) {
              t.disposables[e]();
            }
          }
          (function(t) {
            if (16 & t.state) {
              var e = sr(t);
              if (e) {
                var n = e.template._projectedViews;
                if (n) {
                  Gt(n, n.indexOf(t));
                  Zn.dirtyParentQueries(t);
                }
              }
            }
          })(t);
          if (t.renderer.destroyNode) {
            (function(t) {
              var e = t.def.nodes.length;
              for (var n = 0; n < e; n++) {
                var r = t.def.nodes[n];
                if (1 & r.flags) {
                  t.renderer.destroyNode(qn(t, n).renderElement);
                } else if (2 & r.flags) {
                  t.renderer.destroyNode(Bn(t, n).renderText);
                } else if (67108864 & r.flags || 134217728 & r.flags) {
                  Wn(t, n).destroy();
                }
              }
            })(t);
          }
          if (pr(t)) {
            t.renderer.destroy();
          }
          t.state |= 128;
        }
      }
      function Sa(t, e) {
        var n = t.def;
        if (33554432 & n.nodeFlags) {
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            if (33554432 & o.flags) {
              Ta(qn(t, r).componentView, e);
            } else if ((33554432 & o.childFlags) == 0) {
              r += o.childCount;
            }
          }
        }
      }
      function Oa(t, e) {
        var n = t.def;
        if (16777216 & n.nodeFlags) {
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            if (16777216 & o.flags) {
              var i = qn(t, r).viewContainer._embeddedViews;
              for (var a = 0; a < i.length; a++) {
                Ta(i[a], e);
              }
            } else if ((16777216 & o.childFlags) == 0) {
              r += o.childCount;
            }
          }
        }
      }
      function Ta(t, e) {
        var n = t.state;
        switch (e) {
          case Ea.CheckNoChanges:
            if ((128 & n) == 0) {
              if ((12 & n) == 12) {
                ga(t);
              } else if (64 & n) {
                ka(t, Ea.CheckNoChangesProjectedViews);
              }
            }
            break;
          case Ea.CheckNoChangesProjectedViews:
            if ((128 & n) == 0) {
              if (32 & n) {
                ga(t);
              } else if (64 & n) {
                ka(t, e);
              }
            }
            break;
          case Ea.CheckAndUpdate:
            if ((128 & n) == 0) {
              if ((12 & n) == 12) {
                ma(t);
              } else if (64 & n) {
                ka(t, Ea.CheckAndUpdateProjectedViews);
              }
            }
            break;
          case Ea.CheckAndUpdateProjectedViews:
            if ((128 & n) == 0) {
              if (32 & n) {
                ma(t);
              } else if (64 & n) {
                ka(t, e);
              }
            }
            break;
          case Ea.Destroy:
            xa(t);
            break;
          case Ea.CreateViewNodes:
            va(t);
        }
      }
      function ka(t, e) {
        Oa(t, e);
        Sa(t, e);
      }
      function Pa(t, e, n, r) {
        if (t.def.nodeFlags & e && t.def.nodeFlags & n) {
          var o = t.def.nodes.length;
          for (var i = 0; i < o; i++) {
            var a = t.def.nodes[i];
            if (a.flags & e && a.flags & n) {
              switch ((Zn.setCurrentNode(t, a.nodeIndex), r)) {
                case 0:
                  Yi(t, a);
                  break;
                case 1:
                  Ca(t, a);
              }
            }
            if (!(a.childFlags & e) || !(a.childFlags & n)) {
              i += a.childCount;
            }
          }
        }
      }
      function Ia(t, e, n, r, o, i) {
        var a = o.injector.get(dn);
        return ha(Na(t, o, a, e, n), r, i);
      }
      function Ra(t, e, n, r, o, i) {
        var a = o.injector.get(dn);
        var u = Na(t, o, new hu(a), e, n);
        var s = Ba(r);
        return cu(Ya.create, ha, null, [u, s, i]);
      }
      function Na(t, e, n, r, o) {
        var i = e.injector.get(Te);
        var a = e.injector.get(ee);
        var u = n.createRenderer(null, null);
        return {
          ngModule: e,
          injector: t,
          projectableNodes: r,
          selectorOrNode: o,
          sanitizer: i,
          rendererFactory: n,
          renderer: u,
          errorHandler: a,
        };
      }
      function ja(t, e, n, r) {
        var o = Ba(n);
        return cu(Ya.create, pa, null, [t, e, o, r]);
      }
      function Ma(t, e, n, r) {
        n = La.get(e.element.componentProvider.provider.token) || Ba(n);
        return cu(Ya.create, fa, null, [t, e, n, r]);
      }
      function Da(t, e, n, r) {
        return Jr(
          t,
          e,
          n,
          (function() {
            var t = r;
            var e = (function(t) {
              var e = false;
              var n = false;
              if (Va.size === 0) {
                return { hasOverrides: e, hasDeprecatedOverrides: n };
              } else {
                t.providers.forEach(function(t) {
                  var r = Va.get(t.token);
                  if (3840 & t.flags && r) {
                    e = true;
                    n = n || r.deprecatedBehavior;
                  }
                });
                t.modules.forEach(function(t) {
                  Ua.forEach(function(r, o) {
                    if (mt(o).providedIn === t) {
                      e = true;
                      n = n || r.deprecatedBehavior;
                    }
                  });
                });
                return { hasOverrides: e, hasDeprecatedOverrides: n };
              }
            })(t);
            var n = e.hasDeprecatedOverrides;
            if (e.hasOverrides) {
              (function(t) {
                for (var e = 0; e < t.providers.length; e++) {
                  var r = t.providers[e];
                  if (n) {
                    r.flags |= 4096;
                  }
                  var o = Va.get(r.token);
                  if (o) {
                    r.flags = (-3841 & r.flags) | o.flags;
                    r.deps = dr(o.deps);
                    r.value = o.value;
                  }
                }
                if (Ua.size > 0) {
                  var i = new Set(t.modules);
                  Ua.forEach(function(e, r) {
                    if (i.has(mt(r).providedIn)) {
                      var o = {
                        token: r,
                        flags: e.flags | (n ? 4096 : 0),
                        deps: dr(e.deps),
                        value: e.value,
                        index: t.providers.length,
                      };
                      t.providers.push(o);
                      t.providersByKey[Jn(r)] = o;
                    }
                  });
                }
              })(
                (t = t.factory(function() {
                  return Kn;
                }))
              );
              return t;
            } else {
              return t;
            }
          })()
        );
      }
      function Fa(t) {
        var e;
        Va.set(t.token, t);
        if (
          typeof t.token == 'function' &&
          (e = mt(t.token)) &&
          typeof e.providedIn == 'function'
        ) {
          Ua.set(t.token, t);
        }
      }
      function Ha(t, e) {
        var n = gr(e.viewDefFactory);
        var r = gr(n.nodes[0].element.componentView);
        La.set(t, r);
      }
      function za() {
        Va.clear();
        Ua.clear();
        La.clear();
      }
      function Ba(t) {
        function r(t, e) {
          for (var n = e + 1; n < t.nodes.length; n++) {
            var r = t.nodes[n];
            if (1 & r.flags) {
              return;
            }
            if (3840 & r.flags) {
              var o = r.provider;
              var i = Va.get(o.token);
              if (i) {
                r.flags = (-3841 & r.flags) | i.flags;
                o.deps = dr(i.deps);
                o.value = i.value;
              }
            }
          }
        }
        if (Va.size === 0) {
          return t;
        }
        var e = (function(t) {
          var e = [];
          var n = null;
          for (var r = 0; r < t.nodes.length; r++) {
            var o = t.nodes[r];
            if (1 & o.flags) {
              n = o;
            }
            if (n && 3840 & o.flags && Va.has(o.provider.token)) {
              e.push(n.nodeIndex);
              n = null;
            }
          }
          return e;
        })(t);
        if (e.length === 0) {
          return t;
        }
        t = t.factory(function() {
          return Kn;
        });
        for (var n = 0; n < e.length; n++) {
          r(t, e[n]);
        }
        return t;
      }
      function qa(t, e, n, r, o, i, a, u, s, l, c, p, h) {
        var f = t.def.nodes[e];
        _a(t, f, n, r, o, i, a, u, s, l, c, p, h);
        if (224 & f.flags) {
          return Gn(t, e).value;
        } else {
          return;
        }
      }
      function Qa(t, e, n, r, o, i, a, u, s, l, c, p, h) {
        var f = t.def.nodes[e];
        wa(t, f, n, r, o, i, a, u, s, l, c, p, h);
        if (224 & f.flags) {
          return Gn(t, e).value;
        } else {
          return;
        }
      }
      function Ga(t) {
        return cu(Ya.detectChanges, ma, null, [t]);
      }
      function Wa(t) {
        return cu(Ya.checkNoChanges, ga, null, [t]);
      }
      function Za(t) {
        return cu(Ya.destroy, xa, null, [t]);
      }
      function Xa(t, e) {
        $a = t;
        Ja = e;
      }
      function tu(t, e, n, r) {
        Xa(t, e);
        return cu(Ya.handleEvent, t.def.handleEvent, null, [t, e, n, r]);
      }
      function eu(t, e) {
        if (128 & t.state) {
          throw Fn(Ya[Ka]);
        }
        Xa(t, iu(t, 0));
        return t.def.updateDirectives(function(t, n, r) {
          var o = [];
          for (var i = 3; i < arguments.length; i++) {
            o[i - 3] = arguments[i];
          }
          var a = t.def.nodes[n];
          if (e === 0) {
            ru(t, a, r, o);
          } else {
            ou(t, a, r, o);
          }
          if (16384 & a.flags) {
            Xa(t, iu(t, n));
          }
          if (224 & a.flags) {
            return Gn(t, a.nodeIndex).value;
          } else {
            return;
          }
        }, t);
      }
      function nu(t, e) {
        if (128 & t.state) {
          throw Fn(Ya[Ka]);
        }
        Xa(t, au(t, 0));
        return t.def.updateRenderer(function(t, n, r) {
          var o = [];
          for (var i = 3; i < arguments.length; i++) {
            o[i - 3] = arguments[i];
          }
          var a = t.def.nodes[n];
          if (e === 0) {
            ru(t, a, r, o);
          } else {
            ou(t, a, r, o);
          }
          if (3 & a.flags) {
            Xa(t, au(t, n));
          }
          if (224 & a.flags) {
            return Gn(t, a.nodeIndex).value;
          } else {
            return;
          }
        }, t);
      }
      function ru(t, e, n, o) {
        if (_a.apply(void 0, Object(r.__spread)([t, e, n], o))) {
          var i = n === 1 ? o[0] : o;
          if (16384 & e.flags) {
            var a = {};
            for (var u = 0; u < e.bindings.length; u++) {
              var s = e.bindings[u];
              var l = i[u];
              if (8 & s.flags) {
                a[
                  ((f = s.nonMinifiedName),
                  'ng-reflect-' +
                    f.replace(/[$@]/g, '_').replace(Ae, function() {
                      var t = [];
                      for (var e = 0; e < arguments.length; e++) {
                        t[e] = arguments[e];
                      }
                      return '-' + t[1].toLowerCase();
                    }))
                ] = Ie(l);
              }
            }
            var c = e.parent;
            var p = qn(t, c.nodeIndex).renderElement;
            if (c.element.name) {
              for (var h in a) {
                if ((l = a[h]) == null) {
                  t.renderer.removeAttribute(p, h);
                } else {
                  t.renderer.setAttribute(p, h, l);
                }
              }
            } else {
              t.renderer.setValue(p, 'bindings=' + JSON.stringify(a, null, 2));
            }
          }
        }
        var f;
      }
      function ou(t, e, n, o) {
        wa.apply(void 0, Object(r.__spread)([t, e, n], o));
      }
      function iu(t, e) {
        for (var n = e; n < t.def.nodes.length; n++) {
          var r = t.def.nodes[n];
          if (16384 & r.flags && r.bindings && r.bindings.length) {
            return n;
          }
        }
        return null;
      }
      function au(t, e) {
        for (var n = e; n < t.def.nodes.length; n++) {
          var r = t.def.nodes[n];
          if (3 & r.flags && r.bindings && r.bindings.length) {
            return n;
          }
        }
        return null;
      }
      function su(t, e) {
        var n = -1;
        for (var r = 0; r <= e; r++) {
          if (3 & t.nodes[r].flags) {
            n++;
          }
        }
        return n;
      }
      function lu(t, e, n) {
        for (var r in e.references) {
          n[r] = ta(t, e, e.references[r]);
        }
      }
      function cu(t, e, n, r) {
        var o = Ka;
        var i = $a;
        var a = Ja;
        try {
          Ka = t;
          var u = e.apply(n, r);
          $a = i;
          Ja = a;
          Ka = o;
          return u;
        } catch (s) {
          if (Yt(s) || !$a) {
            throw s;
          }
          throw (function() {
            var t = s;
            var e = pu();
            if (!(t instanceof Error)) {
              t = new Error(t.toString());
            }
            Ln(t, e);
            return t;
          })();
        }
      }
      function pu() {
        if ($a) {
          return new uu($a, Ja);
        } else {
          return null;
        }
      }
      function du(t, e, n) {
        return new yu(t, e, n);
      }
      function mu(t) {
        if (t) {
          return (function(t) {
            return new C(function(e) {
              return t.schedule(function() {
                return e.complete();
              });
            });
          })(t);
        } else {
          return gu;
        }
      }
      function _u(t) {
        var e = new C(function(e) {
          e.next(t);
          e.complete();
        });
        e._isScalar = true;
        e.value = t;
        return e;
      }
      function bu() {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
        var n = t[t.length - 1];
        switch ((A(n) ? t.pop() : (n = void 0), t.length)) {
          case 0:
            return mu(n);
          case 1:
            if (n) {
              return G(t, n);
            } else {
              return _u(t[0]);
            }
          default:
            return G(t, n);
        }
      }
      function wu(t, e) {
        return Z(t, e, 1);
      }
      function Cu(t, e) {
        return function(n) {
          return n.lift(new xu(t, e));
        };
      }
      function Au(t) {
        return t.replace(/\/index.html$/, '');
      }
      function Vu(t, e) {
        var n;
        var o;
        e = encodeURIComponent(e);
        try {
          var i = Object(r.__values)(t.split(';'));
          for (var a = i.next(); !a.done; a = i.next()) {
            var u = a.value;
            var s = u.indexOf('=');
            var l = Object(r.__read)(
              s == -1 ? [u, ''] : [u.slice(0, s), u.slice(s + 1)],
              2
            );
            var c = l[1];
            if (l[0].trim() === e) {
              return decodeURIComponent(c);
            }
          }
        } catch (p) {
          n = { error: p };
        } finally {
          try {
            if (a && !a.done && (o = i.return)) {
              o.call(i);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        return null;
      }
      function Bu(t, e) {
        if (e && !e.createEmbeddedView) {
          throw new Error(
            t + " must be a TemplateRef, but received '" + bt(e) + "'."
          );
        }
      }
      function ts(t) {
        return encodeURIComponent(t)
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
      function ns(t) {
        return typeof ArrayBuffer != 'undefined' && t instanceof ArrayBuffer;
      }
      function rs(t) {
        return typeof Blob != 'undefined' && t instanceof Blob;
      }
      function os(t) {
        return typeof FormData != 'undefined' && t instanceof FormData;
      }
      function ps(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      function As() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
      }
      function Ns() {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
        var n = null;
        var r = null;
        if (A(t[t.length - 1])) {
          r = t.pop();
        }
        if (typeof t[t.length - 1] == 'function') {
          n = t.pop();
        }
        if (t.length === 1 && o(t[0])) {
          t = t[0];
        }
        return G(t, r).lift(new js(n));
      }
      function Ds(t) {
        return new C(function(e) {
          var n;
          try {
            n = t();
          } catch (r) {
            e.error(r);
            return;
          }
          return (n ? W(n) : mu()).subscribe(e);
        });
      }
      function Vs() {
        return Y(1);
      }
      function Us() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
      }
      function Fs(t) {
        return function(e) {
          if (t === 0) {
            return mu();
          } else {
            return e.lift(new Hs(t));
          }
        };
      }
      function Bs(t, e, n) {
        return function(r) {
          return r.lift(new qs(t, e, n));
        };
      }
      function Ws() {
        return new Is();
      }
      function Zs(t) {
        if (t === void 0) {
          t = null;
        }
        return function(e) {
          return e.lift(new Ks(t));
        };
      }
      function Js(t, e) {
        var n = arguments.length >= 2;
        return function(r) {
          return r.pipe(
            t
              ? Cu(function(e, n) {
                  return t(e, n, r);
                })
              : J,
            Fs(1),
            n
              ? Zs(e)
              : Gs(function() {
                  return new Is();
                })
          );
        };
      }
      function Ys(t) {
        return function(e) {
          var n = new Xs(t);
          var r = e.lift(n);
          return (n.caught = r);
        };
      }
      function el(t) {
        return function(e) {
          if (t === 0) {
            return mu();
          } else {
            return e.lift(new nl(t));
          }
        };
      }
      function ol(t, e) {
        var n = arguments.length >= 2;
        return function(r) {
          return r.pipe(
            t
              ? Cu(function(e, n) {
                  return t(e, n, r);
                })
              : J,
            el(1),
            n
              ? Zs(e)
              : Gs(function() {
                  return new Is();
                })
          );
        };
      }
      function ul(t, e) {
        if (typeof e == 'function') {
          return function(n) {
            return n.pipe(
              ul(function(n, r) {
                return W(t(n, r)).pipe(
                  B(function(t, o) {
                    return e(n, t, r, o);
                  })
                );
              })
            );
          };
        } else {
          return function(e) {
            return e.lift(new sl(t));
          };
        }
      }
      function cl() {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
        return Vs()(bu.apply(void 0, t));
      }
      function pl(t, e) {
        var n = false;
        if (arguments.length >= 2) {
          n = true;
        }
        return function(r) {
          return r.lift(new hl(t, e, n));
        };
      }
      function gl() {
        return vl;
      }
      function Ol() {
        return !!window.history.pushState;
      }
      function Il(t, e) {
        if (typeof COMPILED == 'undefined' || !COMPILED) {
          (Pt.ng = Pt.ng || {})[t] = e;
        }
      }
      function Nl(t) {
        return Vi(t);
      }
      function Bl(t, e, n) {
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          if (Array.isArray(o)) {
            Bl(t, o, n);
          } else {
            o = o.replace(Fl, t);
            n.push(o);
          }
        }
        return n;
      }
      function ql(t) {
        return function(e) {
          if (t(e) === false) {
            e.preventDefault();
            e.returnValue = false;
          }
        };
      }
      function Zl(t, e) {
        if (t.charCodeAt(0) === Wl) {
          throw new Error(
            'Found the synthetic ' +
              e +
              ' ' +
              t +
              '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
          );
        }
      }
      function xc() {
        return new ee();
      }
      function Qc(t) {
        return new qc(t);
      }
      function Wc(t) {
        var e = Error('NavigationCancelingError: ' + t);
        e[Gc] = true;
        return e;
      }
      function Zc(t, e, n) {
        var r = n.path.split('/');
        if (r.length > t.length) {
          return null;
        }
        if (
          n.pathMatch === 'full' &&
          (e.hasChildren() || r.length < t.length)
        ) {
          return null;
        }
        var o = {};
        for (var i = 0; i < r.length; i++) {
          var a = r[i];
          var u = t[i];
          if (a.startsWith(':')) {
            o[a.substring(1)] = u;
          } else if (a !== u.path) {
            return null;
          }
        }
        return { consumed: t.slice(0, r.length), posParams: o };
      }
      function $c(t, e) {
        if (e === void 0) {
          e = '';
        }
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          Jc(r, Yc(e, r));
        }
      }
      function Jc(t, e) {
        if (!t) {
          throw new Error(
            "\n      Invalid configuration of route '" +
              e +
              "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
          );
        }
        if (Array.isArray(t)) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': Array cannot be specified"
          );
        }
        if (
          !t.component &&
          !t.children &&
          !t.loadChildren &&
          t.outlet &&
          t.outlet !== Bc
        ) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': a componentless route without children or loadChildren cannot have a named outlet set"
          );
        }
        if (t.redirectTo && t.children) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and children cannot be used together"
          );
        }
        if (t.redirectTo && t.loadChildren) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and loadChildren cannot be used together"
          );
        }
        if (t.children && t.loadChildren) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': children and loadChildren cannot be used together"
          );
        }
        if (t.redirectTo && t.component) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and component cannot be used together"
          );
        }
        if (t.path && t.matcher) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': path and matcher cannot be used together"
          );
        }
        if (
          t.redirectTo === void 0 &&
          !t.component &&
          !t.children &&
          !t.loadChildren
        ) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "'. One of the following must be provided: component, redirectTo, children or loadChildren"
          );
        }
        if (t.path === void 0 && t.matcher === void 0) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': routes must have either a path or a matcher specified"
          );
        }
        if (typeof t.path == 'string' && t.path.charAt(0) === '/') {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': path cannot start with a slash"
          );
        }
        if (
          t.path === '' &&
          t.redirectTo !== void 0 &&
          t.pathMatch === void 0
        ) {
          throw new Error(
            'Invalid configuration of route \'{path: "' +
              e +
              '", redirectTo: "' +
              t.redirectTo +
              "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
          );
        }
        if (
          t.pathMatch !== void 0 &&
          t.pathMatch !== 'full' &&
          t.pathMatch !== 'prefix'
        ) {
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': pathMatch can only be set to 'prefix' or 'full'"
          );
        }
        if (t.children) {
          $c(t.children, e);
        }
      }
      function Yc(t, e) {
        if (e) {
          if (t || e.path) {
            if (t && !e.path) {
              return t + '/';
            } else if (!t && e.path) {
              return e.path;
            } else {
              return t + '/' + e.path;
            }
          } else {
            return '';
          }
        } else {
          return t;
        }
      }
      function Xc(t) {
        var e = t.children && t.children.map(Xc);
        var n = e
          ? Object(r.__assign)({}, t, { children: e })
          : Object(r.__assign)({}, t);
        if (
          !n.component &&
          (e || n.loadChildren) &&
          n.outlet &&
          n.outlet !== Bc
        ) {
          n.component = zc;
        }
        return n;
      }
      function tp(t, e) {
        var n;
        var r = Object.keys(t);
        var o = Object.keys(e);
        if (!r || !o || r.length != o.length) {
          return false;
        }
        for (var i = 0; i < r.length; i++) {
          if (t[(n = r[i])] !== e[n]) {
            return false;
          }
        }
        return true;
      }
      function ep(t) {
        return Array.prototype.concat.apply([], t);
      }
      function np(t) {
        if (t.length > 0) {
          return t[t.length - 1];
        } else {
          return null;
        }
      }
      function rp(t, e) {
        for (var n in t) {
          if (t.hasOwnProperty(n)) {
            e(t[n], n);
          }
        }
      }
      function op(t) {
        if (Xe(t)) {
          return t;
        } else if (Ye(t)) {
          return W(Promise.resolve(t));
        } else {
          return bu(t);
        }
      }
      function ip(t, e, n) {
        if (n) {
          return (
            (function(t, e) {
              return tp(t, e);
            })(t.queryParams, e.queryParams) &&
            (function t(e, n) {
              if (!lp(e.segments, n.segments)) {
                return false;
              }
              if (e.numberOfChildren !== n.numberOfChildren) {
                return false;
              }
              for (var r in n.children) {
                if (!e.children[r]) {
                  return false;
                }
                if (!t(e.children[r], n.children[r])) {
                  return false;
                }
              }
              return true;
            })(t.root, e.root)
          );
        } else {
          return (
            (function(t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every(function(n) {
                  return e[n] === t[n];
                })
              );
            })(t.queryParams, e.queryParams) &&
            (function t(e, n) {
              return (function e(n, r, o) {
                if (n.segments.length > o.length) {
                  return (
                    !!lp((a = n.segments.slice(0, o.length)), o) &&
                    !r.hasChildren()
                  );
                }
                if (n.segments.length === o.length) {
                  if (!lp(n.segments, o)) {
                    return false;
                  }
                  for (var i in r.children) {
                    if (!n.children[i]) {
                      return false;
                    }
                    if (!t(n.children[i], r.children[i])) {
                      return false;
                    }
                  }
                  return true;
                }
                var a = o.slice(0, n.segments.length);
                var u = o.slice(n.segments.length);
                return (
                  !!lp(n.segments, a) &&
                  !!n.children[Bc] &&
                  e(n.children[Bc], r, u)
                );
              })(e, n, n.segments);
            })(t.root, e.root)
          );
        }
      }
      function lp(t, e) {
        return (
          t.length === e.length &&
          t.every(function(t, n) {
            return t.path === e[n].path;
          })
        );
      }
      function cp(t, e) {
        var n = [];
        rp(t.children, function(t, r) {
          if (r === Bc) {
            n = n.concat(e(t, r));
          }
        });
        rp(t.children, function(t, r) {
          if (r !== Bc) {
            n = n.concat(e(t, r));
          }
        });
        return n;
      }
      function dp(t) {
        return t.segments
          .map(function(t) {
            return bp(t);
          })
          .join('/');
      }
      function yp(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function vp(t) {
        return yp(t).replace(/%3B/gi, ';');
      }
      function gp(t) {
        return yp(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function mp(t) {
        return decodeURIComponent(t);
      }
      function _p(t) {
        return mp(t.replace(/\+/g, '%20'));
      }
      function bp(t) {
        return (
          '' +
          gp(t.path) +
          ((e = t.parameters),
          Object.keys(e)
            .map(function(t) {
              return ';' + gp(t) + '=' + gp(e[t]);
            })
            .join(''))
        );
        var e;
      }
      function Cp(t) {
        var e = t.match(wp);
        if (e) {
          return e[0];
        } else {
          return '';
        }
      }
      function Tp(t, e) {
        var n;
        var o;
        if (t === e.value) {
          return e;
        }
        try {
          var i = Object(r.__values)(e.children);
          for (var a = i.next(); !a.done; a = i.next()) {
            var u = Tp(t, a.value);
            if (u) {
              return u;
            }
          }
        } catch (s) {
          n = { error: s };
        } finally {
          try {
            if (a && !a.done && (o = i.return)) {
              o.call(i);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        return null;
      }
      function kp(t, e) {
        var n;
        var o;
        if (t === e.value) {
          return [e];
        }
        try {
          var i = Object(r.__values)(e.children);
          for (var a = i.next(); !a.done; a = i.next()) {
            var u = kp(t, a.value);
            if (u.length) {
              u.unshift(e);
              return u;
            }
          }
        } catch (s) {
          n = { error: s };
        } finally {
          try {
            if (a && !a.done && (o = i.return)) {
              o.call(i);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        return [];
      }
      function Ap(t) {
        var e = {};
        if (t) {
          t.children.forEach(function(t) {
            return (e[t.value.outlet] = t);
          });
        }
        return e;
      }
      function Rp(t, e) {
        var n = (function(t, e) {
          var n = new Mp([], {}, {}, '', {}, Bc, e, null, t.root, -1, {});
          return new Dp('', new Pp(n, []));
        })(t, e);
        var r = new Ps([new sp('', {})]);
        var o = new Ps({});
        var i = new Ps({});
        var a = new Ps({});
        var u = new Ps('');
        var s = new Np(r, o, a, u, i, Bc, e, n.root);
        s.snapshot = n.root;
        return new Ip(new Pp(s, []), n);
      }
      function jp(t, e) {
        if (e === void 0) {
          e = 'emptyOnly';
        }
        var n = t.pathFromRoot;
        var o = 0;
        if (e !== 'always') {
          for (o = n.length - 1; o >= 1; ) {
            var i = n[o];
            var a = n[o - 1];
            if (i.routeConfig && i.routeConfig.path === '') {
              o--;
            } else {
              if (a.component) {
                break;
              }
              o--;
            }
          }
        }
        return (function() {
          var t = n.slice(o);
          return t.reduce(
            function(t, e) {
              return {
                params: Object(r.__assign)({}, t.params, e.params),
                data: Object(r.__assign)({}, t.data, e.data),
                resolve: Object(r.__assign)({}, t.resolve, e._resolvedData),
              };
            },
            { params: {}, data: {}, resolve: {} }
          );
        })();
      }
      function Vp(t, e) {
        e.value._routerState = t;
        e.children.forEach(function(e) {
          return Vp(t, e);
        });
      }
      function Up(t) {
        var e =
          t.children.length > 0
            ? ' { ' + t.children.map(Up).join(', ') + ' } '
            : '';
        return '' + t.value + e;
      }
      function Lp(t) {
        if (t.snapshot) {
          var e = t.snapshot;
          var n = t._futureSnapshot;
          t.snapshot = n;
          if (!tp(e.queryParams, n.queryParams)) {
            t.queryParams.next(n.queryParams);
          }
          if (e.fragment !== n.fragment) {
            t.fragment.next(n.fragment);
          }
          if (!tp(e.params, n.params)) {
            t.params.next(n.params);
          }
          if (
            !(function(t, e) {
              if (t.length !== e.length) {
                return false;
              }
              for (var n = 0; n < t.length; ++n) {
                if (!tp(t[n], e[n])) {
                  return false;
                }
              }
              return true;
            })(e.url, n.url)
          ) {
            t.url.next(n.url);
          }
          if (!tp(e.data, n.data)) {
            t.data.next(n.data);
          }
        } else {
          t.snapshot = t._futureSnapshot;
          t.data.next(t._futureSnapshot.data);
        }
      }
      function Fp(t, e) {
        var n;
        var r;
        return (
          tp(t.params, e.params) &&
          lp((n = t.url), (r = e.url)) &&
          n.every(function(t, e) {
            return tp(t.parameters, r[e].parameters);
          }) &&
          !t.parent == !e.parent &&
          (!t.parent || Fp(t.parent, e.parent))
        );
      }
      function Hp(t) {
        return (
          typeof t == 'object' && t != null && !t.outlets && !t.segmentPath
        );
      }
      function zp(t, e, n, r, o) {
        var i = {};
        if (r) {
          rp(r, function(t, e) {
            i[e] = Array.isArray(t)
              ? t.map(function(t) {
                  return '' + t;
                })
              : '' + t;
          });
        }
        return new ap(
          n.root === t
            ? e
            : (function t(e, n, r) {
                var o = {};
                rp(e.children, function(e, i) {
                  o[i] = e === n ? r : t(e, n, r);
                });
                return new up(e.segments, o);
              })(n.root, t, e),
          i,
          o
        );
      }
      function Qp(t) {
        if (typeof t == 'object' && t != null && t.outlets) {
          return t.outlets[Bc];
        } else {
          return '' + t;
        }
      }
      function Gp(t, e, n) {
        if (!t) {
          t = new up([], {});
        }
        if (t.segments.length === 0 && t.hasChildren()) {
          return Wp(t, e, n);
        }
        var r = (function(t, e, n) {
          var r = 0;
          var o = e;
          for (
            var i = { match: false, pathIndex: 0, commandIndex: 0 };
            o < t.segments.length;

          ) {
            if (r >= n.length) {
              return i;
            }
            var a = t.segments[o];
            var u = Qp(n[r]);
            var s = r < n.length - 1 ? n[r + 1] : null;
            if (o > 0 && u === void 0) {
              break;
            }
            if (u && s && typeof s == 'object' && s.outlets === void 0) {
              if (!Jp(u, s, a)) {
                return i;
              }
              r += 2;
            } else {
              if (!Jp(u, {}, a)) {
                return i;
              }
              r++;
            }
            o++;
          }
          return { match: true, pathIndex: o, commandIndex: r };
        })(t, e, n);
        var o = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          var i = new up(t.segments.slice(0, r.pathIndex), {});
          i.children[Bc] = new up(t.segments.slice(r.pathIndex), t.children);
          return Wp(i, 0, o);
        }
        if (r.match && o.length === 0) {
          return new up(t.segments, {});
        } else if (r.match && !t.hasChildren()) {
          return Zp(t, e, n);
        } else if (r.match) {
          return Wp(t, 0, o);
        } else {
          return Zp(t, e, n);
        }
      }
      function Wp(t, e, n) {
        if (n.length === 0) {
          return new up(t.segments, {});
        }
        var r = (function(t) {
          var e;
          var n;
          if (typeof t[0] == 'object') {
            if (t[0].outlets === void 0) {
              (n = {})[Bc] = t;
              return n;
            } else {
              return t[0].outlets;
            }
          } else {
            (e = {})[Bc] = t;
            return e;
          }
        })(n);
        var o = {};
        rp(r, function(n, r) {
          if (n !== null) {
            o[r] = Gp(t.children[r], e, n);
          }
        });
        rp(t.children, function(t, e) {
          if (r[e] === void 0) {
            o[e] = t;
          }
        });
        return new up(t.segments, o);
      }
      function Zp(t, e, n) {
        var r = t.segments.slice(0, e);
        for (var o = 0; o < n.length; ) {
          if (typeof n[o] == 'object' && n[o].outlets !== void 0) {
            var i = Kp(n[o].outlets);
            return new up(r, i);
          }
          if (o === 0 && Hp(n[0])) {
            r.push(new sp(t.segments[e].path, n[0]));
            o++;
          } else {
            var a = Qp(n[o]);
            var u = o < n.length - 1 ? n[o + 1] : null;
            if (a && u && Hp(u)) {
              r.push(new sp(a, $p(u)));
              o += 2;
            } else {
              r.push(new sp(a, {}));
              o++;
            }
          }
        }
        return new up(r, {});
      }
      function Kp(t) {
        var e = {};
        rp(t, function(t, n) {
          if (t !== null) {
            e[n] = Zp(new up([], {}), 0, t);
          }
        });
        return e;
      }
      function $p(t) {
        var e = {};
        rp(t, function(t, n) {
          return (e[n] = '' + t);
        });
        return e;
      }
      function Jp(t, e, n) {
        return t == n.path && tp(e, n.parameters);
      }
      function Xp(t) {
        Lp(t.value);
        t.children.forEach(Xp);
      }
      function th(t) {
        return typeof t == 'function';
      }
      function eh(t) {
        return t instanceof ap;
      }
      function oh(t) {
        return new C(function(e) {
          return e.error(new nh(t));
        });
      }
      function ih(t) {
        return new C(function(e) {
          return e.error(new rh(t));
        });
      }
      function ah(t) {
        return new C(function(e) {
          return e.error(
            new Error(
              "Only absolute redirects can have named outlets. redirectTo: '" +
                t +
                "'"
            )
          );
        });
      }
      function sh(t, e, n) {
        if (e.path === '') {
          if (e.pathMatch === 'full' && (t.hasChildren() || n.length > 0)) {
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
        var r = (e.matcher || Zc)(n, t, e);
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
      function lh(t) {
        if (t.numberOfChildren === 1 && t.children[Bc]) {
          var e = t.children[Bc];
          return new up(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function ch(t, e, n) {
        return (
          ((!t.hasChildren() && !(e.length > 0)) || n.pathMatch !== 'full') &&
          n.path === '' &&
          n.redirectTo !== void 0
        );
      }
      function ph(t) {
        return t.outlet || Bc;
      }
      function dh(t, e, n) {
        var r = (function(t) {
          if (!t) {
            return null;
          }
          for (var e = t.parent; e; e = e.parent) {
            var n = e.routeConfig;
            if (n && n._loadedConfig) {
              return n._loadedConfig;
            }
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function yh(t, e, n, r, o) {
        if (o === void 0) {
          o = { canDeactivateChecks: [], canActivateChecks: [] };
        }
        var i = Ap(e);
        t.children.forEach(function(t) {
          (function(t, e, n, r, o) {
            if (o === void 0) {
              o = { canDeactivateChecks: [], canActivateChecks: [] };
            }
            var i = t.value;
            var a = e ? e.value : null;
            var u = n ? n.getContext(t.value.outlet) : null;
            if (a && i.routeConfig === a.routeConfig) {
              var s = (function() {
                var t = a;
                var e = i;
                var n = i.routeConfig.runGuardsAndResolvers;
                if (typeof n == 'function') {
                  return n(t, e);
                }
                switch (n) {
                  case 'pathParamsChange':
                    return !lp(t.url, e.url);
                  case 'pathParamsOrQueryParamsChange':
                    return (
                      !lp(t.url, e.url) || !tp(t.queryParams, e.queryParams)
                    );
                  case 'always':
                    return true;
                  case 'paramsOrQueryParamsChange':
                    return !Fp(t, e) || !tp(t.queryParams, e.queryParams);
                  case 'paramsChange':
                  default:
                    return !Fp(t, e);
                }
              })();
              if (s) {
                o.canActivateChecks.push(new hh(r));
              } else {
                i.data = a.data;
                i._resolvedData = a._resolvedData;
              }
              yh(t, e, i.component ? (u ? u.children : null) : n, r, o);
              if (s) {
                o.canDeactivateChecks.push(
                  new fh((u && u.outlet && u.outlet.component) || null, a)
                );
              }
            } else {
              if (a) {
                vh(e, u, o);
              }
              o.canActivateChecks.push(new hh(r));
              yh(t, null, i.component ? (u ? u.children : null) : n, r, o);
            }
          })(t, i[t.value.outlet], n, r.concat([t.value]), o);
          delete i[t.value.outlet];
        });
        rp(i, function(t, e) {
          return vh(t, n.getContext(e), o);
        });
        return o;
      }
      function vh(t, e, n) {
        var r = Ap(t);
        var o = t.value;
        rp(r, function(t, r) {
          vh(t, o.component ? (e ? e.children.getContext(r) : null) : e, n);
        });
        n.canDeactivateChecks.push(
          new fh(
            o.component && e && e.outlet && e.outlet.isActivated
              ? e.outlet.component
              : null,
            o
          )
        );
      }
      function mh() {
        return ul(function(t) {
          return Ns.apply(
            void 0,
            Object(r.__spread)(
              t.map(function(t) {
                return t.pipe(
                  el(1),
                  (function() {
                    var t = [];
                    for (var e = 0; e < arguments.length; e++) {
                      t[e] = arguments[e];
                    }
                    return function(e) {
                      var n = t[t.length - 1];
                      if (A(n)) {
                        t.pop();
                      } else {
                        n = null;
                      }
                      var r = t.length;
                      return cl(
                        r !== 1 || n ? (r > 0 ? G(t, n) : mu(n)) : _u(t[0]),
                        e
                      );
                    };
                  })(gh)
                );
              })
            )
          ).pipe(
            pl(function(t, e) {
              var n = false;
              return e.reduce(function(t, r, o) {
                if (t !== gh) {
                  return t;
                }
                if (r === gh) {
                  n = true;
                }
                if (!n) {
                  if (r === false) {
                    return r;
                  }
                  if (o === e.length - 1 || eh(r)) {
                    return r;
                  }
                }
                return t;
              }, t);
            }, gh),
            Cu(function(t) {
              return t !== gh;
            }),
            B(function(t) {
              if (eh(t)) {
                return t;
              } else {
                return t === true;
              }
            }),
            el(1)
          );
        });
      }
      function _h(t, e) {
        if (t !== null && e) {
          e(new Lc(t));
        }
        return bu(true);
      }
      function bh(t, e) {
        if (t !== null && e) {
          e(new Vc(t));
        }
        return bu(true);
      }
      function wh(t, e, n) {
        var r = e.routeConfig ? e.routeConfig.canActivate : null;
        if (r && r.length !== 0) {
          return bu(
            r.map(function(r) {
              return Ds(function() {
                var o;
                var i = dh(r, e, n);
                if (
                  (function() {
                    var t = i;
                    return t && th(t.canActivate);
                  })()
                ) {
                  o = op(i.canActivate(e, t));
                } else {
                  if (!th(i)) {
                    throw new Error('Invalid CanActivate guard');
                  }
                  o = op(i(e, t));
                }
                return o.pipe(ol());
              });
            })
          ).pipe(mh());
        } else {
          return bu(true);
        }
      }
      function Ch(t, e, n) {
        var r = e[e.length - 1];
        var o = e
          .slice(0, e.length - 1)
          .reverse()
          .map(function(t) {
            return (function(t) {
              var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
              if (e && e.length !== 0) {
                return { node: t, guards: e };
              } else {
                return null;
              }
            })(t);
          })
          .filter(function(t) {
            return t !== null;
          })
          .map(function(e) {
            return Ds(function() {
              return bu(
                e.guards.map(function(o) {
                  var i;
                  var a = dh(o, e.node, n);
                  if (
                    (function() {
                      var t = a;
                      return t && th(t.canActivateChild);
                    })()
                  ) {
                    i = op(a.canActivateChild(r, t));
                  } else {
                    if (!th(a)) {
                      throw new Error('Invalid CanActivateChild guard');
                    }
                    i = op(a(r, t));
                  }
                  return i.pipe(ol());
                })
              ).pipe(mh());
            });
          });
        return bu(o).pipe(mh());
      }
      function Sh(t) {
        for (var e = t; e._sourceSegment; ) {
          e = e._sourceSegment;
        }
        return e;
      }
      function Oh(t) {
        var e = t;
        for (
          var n = e._segmentIndexShift ? e._segmentIndexShift : 0;
          e._sourceSegment;

        ) {
          n += (e = e._sourceSegment)._segmentIndexShift
            ? e._segmentIndexShift
            : 0;
        }
        return n - 1;
      }
      function Th(t, e, n, o, i) {
        if (
          n.length > 0 &&
          (function(t, e, n) {
            return n.some(function(n) {
              return kh(t, e, n) && Ph(n) !== Bc;
            });
          })(t, n, o)
        ) {
          var a = new up(
            e,
            (function(t, e, n, o) {
              var i;
              var a;
              var u = {};
              u[Bc] = o;
              o._sourceSegment = t;
              o._segmentIndexShift = e.length;
              try {
                var s = Object(r.__values)(n);
                for (var l = s.next(); !l.done; l = s.next()) {
                  var c = l.value;
                  if (c.path === '' && Ph(c) !== Bc) {
                    var p = new up([], {});
                    p._sourceSegment = t;
                    p._segmentIndexShift = e.length;
                    u[Ph(c)] = p;
                  }
                }
              } catch (h) {
                i = { error: h };
              } finally {
                try {
                  if (l && !l.done && (a = s.return)) {
                    a.call(s);
                  }
                } finally {
                  if (i) {
                    throw i.error;
                  }
                }
              }
              return u;
            })(t, e, o, new up(n, t.children))
          );
          a._sourceSegment = t;
          a._segmentIndexShift = e.length;
          return { segmentGroup: a, slicedSegments: [] };
        }
        if (
          n.length === 0 &&
          (function(t, e, n) {
            return n.some(function(n) {
              return kh(t, e, n);
            });
          })(t, n, o)
        ) {
          var u = new up(
            t.segments,
            (function(t, e, n, o, i, a) {
              var u;
              var s;
              var l = {};
              try {
                var c = Object(r.__values)(o);
                for (var p = c.next(); !p.done; p = c.next()) {
                  var h = p.value;
                  if (kh(t, n, h) && !i[Ph(h)]) {
                    var f = new up([], {});
                    f._sourceSegment = t;
                    f._segmentIndexShift =
                      a === 'legacy' ? t.segments.length : e.length;
                    l[Ph(h)] = f;
                  }
                }
              } catch (d) {
                u = { error: d };
              } finally {
                try {
                  if (p && !p.done && (s = c.return)) {
                    s.call(c);
                  }
                } finally {
                  if (u) {
                    throw u.error;
                  }
                }
              }
              return Object(r.__assign)({}, i, l);
            })(t, e, n, o, t.children, i)
          );
          u._sourceSegment = t;
          u._segmentIndexShift = e.length;
          return { segmentGroup: u, slicedSegments: n };
        }
        var s = new up(t.segments, t.children);
        s._sourceSegment = t;
        s._segmentIndexShift = e.length;
        return { segmentGroup: s, slicedSegments: n };
      }
      function kh(t, e, n) {
        return (
          ((!t.hasChildren() && !(e.length > 0)) || n.pathMatch !== 'full') &&
          n.path === '' &&
          n.redirectTo === void 0
        );
      }
      function Ph(t) {
        return t.outlet || Bc;
      }
      function Ah(t) {
        return t.data || {};
      }
      function Ih(t) {
        return t.resolve || {};
      }
      function Rh(t, e, n, r) {
        var o = dh(t, e, r);
        return op(o.resolve ? o.resolve(e, n) : o(e, n));
      }
      function Nh(t) {
        return function(e) {
          return e.pipe(
            ul(function(e) {
              var n = t(e);
              if (n) {
                return W(n).pipe(
                  B(function() {
                    return e;
                  })
                );
              } else {
                return W([e]);
              }
            })
          );
        };
      }
      function Fh(t) {
        throw t;
      }
      function Hh(t, e, n) {
        return e.parse('/');
      }
      function zh(t, e) {
        return bu(null);
      }
      function Qh(t) {
        return t === '' || !!t;
      }
      function of() {
        return new wi('Router', Bh);
      }
      function uf(t, e, n) {
        if (n.scrollOffset) {
          e.setOffset(n.scrollOffset);
        }
        return new tf(t, e, n);
      }
      function sf(t, e, n) {
        if (n === void 0) {
          n = {};
        }
        if (n.useHash) {
          return new Iu(t, e);
        } else {
          return new Ru(t, e);
        }
      }
      function lf(t) {
        if (t) {
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        }
        return 'guarded';
      }
      function cf(t) {
        return [
          { provide: qe, multi: true, useValue: t },
          { provide: Dh, multi: true, useValue: t },
        ];
      }
      function pf(t, e, n, r, o, i, a, u, s, l, c) {
        if (s === void 0) {
          s = {};
        }
        var p = new Bh(null, e, n, r, o, i, a, ep(u));
        if (l) {
          p.urlHandlingStrategy = l;
        }
        if (c) {
          p.routeReuseStrategy = c;
        }
        if (s.errorHandler) {
          p.errorHandler = s.errorHandler;
        }
        if (s.malformedUriErrorHandler) {
          p.malformedUriErrorHandler = s.malformedUriErrorHandler;
        }
        if (s.enableTracing) {
          var h = gl();
          p.events.subscribe(function(t) {
            h.logGroup('Router Event: ' + t.constructor.name);
            h.log(t.toString());
            h.log(t);
            h.logGroupEnd();
          });
        }
        if (s.onSameUrlNavigation) {
          p.onSameUrlNavigation = s.onSameUrlNavigation;
        }
        if (s.paramsInheritanceStrategy) {
          p.paramsInheritanceStrategy = s.paramsInheritanceStrategy;
        }
        if (s.urlUpdateStrategy) {
          p.urlUpdateStrategy = s.urlUpdateStrategy;
        }
        if (s.relativeLinkResolution) {
          p.relativeLinkResolution = s.relativeLinkResolution;
        }
        return p;
      }
      function hf(t) {
        return t.routerState.root;
      }
      function df(t) {
        return t.appInitializer.bind(t);
      }
      function yf(t) {
        return t.bootstrapListener.bind(t);
      }
      function mf(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            uo(1, 212992, null, 0, Zh, [Wh, Dn, un, [8, null], Re], null, null),
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function _f(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
              mf,
              gf
            )),
            uo(1, 49152, null, 0, zc, [], null, null),
          ],
          null,
          null
        );
      }
      function kf() {
        throw new Error('unimplemented');
      }
      function If(t) {
        return t == null || t.length === 0;
      }
      function jf(t) {
        return t != null;
      }
      function Mf(t) {
        var e = Ye(t) ? W(t) : t;
        if (!Xe(e)) {
          throw new Error(
            'Expected validator to return Promise or Observable.'
          );
        }
        return e;
      }
      function Df(t) {
        var e = t.reduce(function(t, e) {
          if (e == null) {
            return t;
          } else {
            return Object(r.__assign)({}, t, e);
          }
        }, {});
        if (Object.keys(e).length === 0) {
          return null;
        } else {
          return e;
        }
      }
      function Vf(t) {
        if (t.validate) {
          return function(e) {
            return t.validate(e);
          };
        } else {
          return t;
        }
      }
      function Uf(t) {
        if (t.validate) {
          return function(e) {
            return t.validate(e);
          };
        } else {
          return t;
        }
      }
      function qf(t, e) {
        return Object(r.__spread)(e.path, [t]);
      }
      function Qf(t, e) {
        if (!t) {
          Wf(e, 'Cannot find control with');
        }
        if (!e.valueAccessor) {
          Wf(e, 'No value accessor for form control with');
        }
        t.validator = Nf.compose([t.validator, e.validator]);
        t.asyncValidator = Nf.composeAsync([
          t.asyncValidator,
          e.asyncValidator,
        ]);
        e.valueAccessor.writeValue(t.value);
        (function(t, e) {
          e.valueAccessor.registerOnChange(function(n) {
            t._pendingValue = n;
            t._pendingChange = true;
            t._pendingDirty = true;
            if (t.updateOn === 'change') {
              Gf(t, e);
            }
          });
        })(t, e);
        (function(t, e) {
          t.registerOnChange(function(t, n) {
            e.valueAccessor.writeValue(t);
            if (n) {
              e.viewToModelUpdate(t);
            }
          });
        })(t, e);
        (function(t, e) {
          e.valueAccessor.registerOnTouched(function() {
            t._pendingTouched = true;
            if (t.updateOn === 'blur' && t._pendingChange) {
              Gf(t, e);
            }
            if (t.updateOn !== 'submit') {
              t.markAsTouched();
            }
          });
        })(t, e);
        if (e.valueAccessor.setDisabledState) {
          t.registerOnDisabledChange(function(t) {
            e.valueAccessor.setDisabledState(t);
          });
        }
        e._rawValidators.forEach(function(e) {
          if (e.registerOnValidatorChange) {
            e.registerOnValidatorChange(function() {
              return t.updateValueAndValidity();
            });
          }
        });
        e._rawAsyncValidators.forEach(function(e) {
          if (e.registerOnValidatorChange) {
            e.registerOnValidatorChange(function() {
              return t.updateValueAndValidity();
            });
          }
        });
      }
      function Gf(t, e) {
        if (t._pendingDirty) {
          t.markAsDirty();
        }
        t.setValue(t._pendingValue, { emitModelToViewChange: false });
        e.viewToModelUpdate(t._pendingValue);
        t._pendingChange = false;
      }
      function Wf(t, e) {
        var n =
          t.path.length > 1
            ? "path: '" + t.path.join(' -> ') + "'"
            : t.path[0]
              ? "name: '" + t.path + "'"
              : 'unspecified name attribute';
        throw new Error(e + ' ' + n);
      }
      function Zf(t) {
        if (t == null) {
          return null;
        } else {
          return Nf.compose(t.map(Vf));
        }
      }
      function Kf(t) {
        if (t == null) {
          return null;
        } else {
          return Nf.composeAsync(t.map(Uf));
        }
      }
      function Jf(t) {
        var e = Xf(t) ? t.validators : t;
        if (Array.isArray(e)) {
          return Zf(e);
        } else {
          return e || null;
        }
      }
      function Yf(t, e) {
        var n = Xf(e) ? e.asyncValidators : t;
        if (Array.isArray(n)) {
          return Kf(n);
        } else {
          return n || null;
        }
      }
      function Xf(t) {
        return t != null && !Array.isArray(t) && typeof t == 'object';
      }
      function yd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, [' Block Information '])),
          ],
          null,
          null
        );
      }
      function vd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, [' Current Block Tip '])),
          ],
          null,
          null
        );
      }
      function gd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(), Qi(16777216, null, null, 1, null, yd)),
            uo(2, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Qi(16777216, null, null, 1, null, vd)),
            uo(4, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            Gi(
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
            (t()(),
            Gi(6, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Block Hash:'])),
            (t()(),
            Gi(
              9,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r =
                    Zr(t, 10).onClick(
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
            uo(
              10,
              671744,
              null,
              0,
              qh,
              [Bh, Np, Tu],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            ra(11, { 'block-hash': 0, 'query-node': 1 }),
            na(12, 1),
            (t()(), ia(13, null, ['', ''])),
            (t()(),
            Gi(14, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Timestamp:'])),
            (t()(), ia(17, null, ['', ' '])),
            (t()(),
            Gi(18, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Height:'])),
            (t()(),
            Gi(
              21,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r =
                    Zr(t, 22).onClick(
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
            uo(
              22,
              671744,
              null,
              0,
              qh,
              [Bh, Np, Tu],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            ra(23, { 'block-height': 0, 'query-node': 1 }),
            na(24, 1),
            (t()(), ia(25, null, ['', ''])),
            (t()(),
            Gi(26, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Previous Block Hash:'])),
            (t()(),
            Gi(
              29,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r =
                    Zr(t, 30).onClick(
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
            uo(
              30,
              671744,
              null,
              0,
              qh,
              [Bh, Np, Tu],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            ra(31, { 'block-hash': 0, 'query-node': 1 }),
            na(32, 1),
            (t()(), ia(33, null, ['', ''])),
            (t()(),
            Gi(34, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Transaction Merkle Root:'])),
            (t()(), ia(37, null, ['', ' '])),
            (t()(),
            Gi(38, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Nonce:'])),
            (t()(), ia(41, null, ['', ' '])),
            (t()(),
            Gi(42, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Version:'])),
            (t()(), ia(45, null, ['', ' '])),
          ],
          function(t, e) {
            var n = e.component;
            t(e, 2, 0, n.hasParam);
            t(e, 4, 0, !n.hasParam);
            var r = t(e, 11, 0, n.blockRes.Header.BlockHashHex, n.queryNode);
            var o = t(e, 12, 0, '/');
            t(e, 10, 0, r, o);
            var i = t(e, 23, 0, n.blockRes.Header.Height, n.queryNode);
            var a = t(e, 24, 0, '/');
            t(e, 22, 0, i, a);
            var u = t(
              e,
              31,
              0,
              n.blockRes.Header.PrevBlockHashHex,
              n.queryNode
            );
            var s = t(e, 32, 0, '/');
            t(e, 30, 0, u, s);
          },
          function(t, e) {
            var n = e.component;
            t(e, 9, 0, Zr(e, 10).target, Zr(e, 10).href);
            t(e, 13, 0, n.blockRes.Header.BlockHashHex);
            t(e, 17, 0, n.blockRes.Header.DateTime);
            t(e, 21, 0, Zr(e, 22).target, Zr(e, 22).href);
            t(e, 25, 0, n.blockRes.Header.Height);
            t(e, 29, 0, Zr(e, 30).target, Zr(e, 30).href);
            t(e, 33, 0, n.blockRes.Header.PrevBlockHashHex);
            t(e, 37, 0, n.blockRes.Header.TransactionMerkleRootHex);
            t(e, 41, 0, n.blockRes.Header.Nonce);
            t(e, 45, 0, n.blockRes.Header.Version);
          }
        );
      }
      function md(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, [' Block Transactions '])),
          ],
          null,
          null
        );
      }
      function _d(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(0, 0, null, null, 6, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(),
            ia(-1, null, [
              ' Final Balance (Including Unconfirmed Transactions) ',
            ])),
            (t()(),
            Gi(
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
            (t()(),
            Gi(4, 0, null, null, 2, 'b', [], null, null, null, null, null)),
            (t()(), ia(5, null, [' ', ' '])),
            ra(6, { minimumFractionDigits: 0 }),
          ],
          null,
          function(t, e) {
            var n = (e.component.txnRes.BalanceNanos / 1e9).toLocaleString(
              'en-US',
              t(e, 6, 0, 9)
            );
            t(e, 5, 0, n);
          }
        );
      }
      function bd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, [' Transactions Found '])),
          ],
          null,
          null
        );
      }
      function wd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (t()(), ia(-1, null, [' (latest)'])),
          ],
          null,
          null
        );
      }
      function Cd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
              0,
              0,
              null,
              null,
              5,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r =
                    Zr(t, 1).onClick(
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
            uo(
              1,
              671744,
              null,
              0,
              qh,
              [Bh, Np, Tu],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            ra(2, { 'block-hash': 0, 'query-node': 1 }),
            na(3, 1),
            (t()(),
            Gi(
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
            (t()(), ia(5, null, ['', ''])),
          ],
          function(t, e) {
            var n = t(
              e,
              2,
              0,
              e.parent.context.$implicit.BlockHashHex,
              e.component.queryNode
            );
            var r = t(e, 3, 0, '/');
            t(e, 1, 0, n, r);
          },
          function(t, e) {
            t(e, 0, 0, Zr(e, 1).target, Zr(e, 1).href);
            t(e, 5, 0, e.parent.context.$implicit.BlockHashHex);
          }
        );
      }
      function xd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['UNCONFIRMED'])),
          ],
          null,
          null
        );
      }
      function Ed(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, [' Imporant: '])),
            (t()(),
            Gi(
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
            (t()(),
            ia(-1, null, [
              ' This transaction type can take up to 24 hours to confirm. This is normal, and is due to the fact that we have to wait for enough "work" to build on the Bitcoin blockchain before accepting it. ',
            ])),
          ],
          null,
          null
        );
      }
      function Sd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(0, 0, null, null, 12, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(1, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(2, null, [' Bitcoin Burned: ', ' '])),
            (t()(),
            Gi(3, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(4, null, [' BitClout Created: ', ' '])),
            (t()(),
            Gi(5, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(6, null, [' Total BitClout Purchased Before: ', ' '])),
            (t()(),
            Gi(7, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(8, null, [' Total BitClout Purchased After: ', ' '])),
            (t()(),
            Gi(9, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(), ia(-1, null, [' Bitcoin Transaction ID: '])),
            (t()(),
            Gi(
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
            (t()(), ia(12, null, [' ', ' '])),
          ],
          null,
          function(t, e) {
            var n;
            t(
              e,
              2,
              0,
              (
                e.parent.parent.context.$implicit.TransactionMetadata
                  .BitcoinExchangeTxindexMetadata.SatoshisBurned / 1e8
              ).toFixed(8)
            );
            t(
              e,
              4,
              0,
              (
                e.parent.parent.context.$implicit.TransactionMetadata
                  .BitcoinExchangeTxindexMetadata.NanosCreated / 1e9
              ).toFixed(9)
            );
            t(
              e,
              6,
              0,
              (
                e.parent.parent.context.$implicit.TransactionMetadata
                  .BitcoinExchangeTxindexMetadata.TotalNanosPurchasedBefore /
                1e9
              ).toFixed(9)
            );
            t(
              e,
              8,
              0,
              (
                e.parent.parent.context.$implicit.TransactionMetadata
                  .BitcoinExchangeTxindexMetadata.TotalNanosPurchasedAfter / 1e9
              ).toFixed(9)
            );
            t(
              e,
              11,
              0,
              'https://www.blockchain.com/btc/tx/' +
                ((n =
                  e.parent.parent.context.$implicit.TransactionMetadata
                    .BitcoinExchangeTxindexMetadata.BitcoinTxnHash) != null
                  ? n.toString()
                  : '')
            );
            t(
              e,
              12,
              0,
              e.parent.parent.context.$implicit.TransactionMetadata
                .BitcoinExchangeTxindexMetadata.BitcoinTxnHash
            );
          }
        );
      }
      function Od(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(0, 0, null, null, 15, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(1, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(), ia(-1, null, ['Parsed Fields'])),
            (t()(),
            Gi(3, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(4, null, [' Total Input: ', ' '])),
            (t()(),
            Gi(5, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(6, null, [' Total Output: ', ' '])),
            (t()(),
            Gi(7, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(8, null, [' Fees: ', ' '])),
            (t()(), Qi(16777216, null, null, 1, null, Sd)),
            uo(10, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Raw Metadata'])),
            (t()(),
            Gi(13, 0, null, null, 2, 'pre', [], null, null, null, null, null)),
            (t()(), ia(14, null, ['', ''])),
            ((e = 0), (n = qu), (r = []), lo(-1, (e |= 16), null, 0, n, n, r)),
          ],
          function(t, e) {
            t(
              e,
              10,
              0,
              e.parent.context.$implicit.TransactionMetadata
                .BitcoinExchangeTxindexMetadata
            );
          },
          function(t, e) {
            t(
              e,
              4,
              0,
              (
                e.parent.context.$implicit.TransactionMetadata
                  .BasicTransferTxindexMetadata.TotalInputNanos / 1e9
              ).toFixed(9)
            );
            t(
              e,
              6,
              0,
              (
                e.parent.context.$implicit.TransactionMetadata
                  .BasicTransferTxindexMetadata.TotalOutputNanos / 1e9
              ).toFixed(9)
            );
            t(
              e,
              8,
              0,
              (
                e.parent.context.$implicit.TransactionMetadata
                  .BasicTransferTxindexMetadata.FeeNanos / 1e9
              ).toFixed(9)
            );
            t(
              e,
              14,
              0,
              (function(t, e, n, r) {
                if (Ke.isWrapped(r)) {
                  r = Ke.unwrap(r);
                  var o = t.def.nodes[14].bindingIndex + 0;
                  var i = Ke.unwrap(t.oldValues[o]);
                  t.oldValues[o] = new Ke(i);
                }
                return r;
              })(
                e,
                0,
                0,
                Zr(e, 15).transform(
                  e.parent.context.$implicit.TransactionMetadata
                )
              )
            );
          }
        );
        var e;
        var n;
        var r;
      }
      function Td(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(0, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(-1, null, [' (coming soon!) '])),
          ],
          null,
          null
        );
      }
      function kd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(),
            Gi(1, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(2, null, [' Input #', ' '])),
            (t()(),
            Gi(
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
            (t()(),
            Gi(4, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Transaction ID:'])),
            (t()(),
            Gi(
              7,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r =
                    Zr(t, 8).onClick(
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
            uo(
              8,
              671744,
              null,
              0,
              qh,
              [Bh, Np, Tu],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            ra(9, { 'transaction-id': 0, 'query-node': 1 }),
            na(10, 1),
            (t()(), ia(11, null, ['', ''])),
            (t()(),
            Gi(12, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Index:'])),
            (t()(), ia(15, null, ['', ' '])),
          ],
          function(t, e) {
            var n = t(
              e,
              9,
              0,
              e.context.$implicit.TransactionIDBase58Check,
              e.component.queryNode
            );
            var r = t(e, 10, 0, '/');
            t(e, 8, 0, n, r);
          },
          function(t, e) {
            t(e, 2, 0, e.context.index);
            t(e, 7, 0, Zr(e, 8).target, Zr(e, 8).href);
            t(e, 11, 0, e.context.$implicit.TransactionIDBase58Check);
            t(e, 15, 0, e.context.$implicit.Index);
          }
        );
      }
      function Pd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(),
            Gi(1, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(2, null, [' Output #', ' '])),
            (t()(),
            Gi(
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
            (t()(),
            Gi(4, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Public Key:'])),
            (t()(),
            Gi(
              7,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r =
                    Zr(t, 8).onClick(
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
            uo(
              8,
              671744,
              null,
              0,
              qh,
              [Bh, Np, Tu],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            ra(9, { 'public-key': 0, 'query-node': 1 }),
            na(10, 1),
            (t()(), ia(11, null, ['', ''])),
            (t()(),
            Gi(12, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['BitClout:'])),
            (t()(), ia(15, null, ['', ' '])),
          ],
          function(t, e) {
            var n = t(
              e,
              9,
              0,
              e.context.$implicit.PublicKeyBase58Check,
              e.component.queryNode
            );
            var r = t(e, 10, 0, '/');
            t(e, 8, 0, n, r);
          },
          function(t, e) {
            t(e, 2, 0, e.context.index);
            t(e, 7, 0, Zr(e, 8).target, Zr(e, 8).href);
            t(e, 11, 0, e.context.$implicit.PublicKeyBase58Check);
            t(e, 15, 0, (e.context.$implicit.AmountNanos / 1e9).toFixed(9));
          }
        );
      }
      function Ad(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(),
            Gi(1, 0, null, null, 5, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(2, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (t()(), ia(3, null, ['Transaction #', ''])),
            (t()(), Qi(16777216, null, null, 1, null, wd)),
            uo(5, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), ia(-1, null, [': '])),
            (t()(),
            Gi(
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
            (t()(),
            Gi(8, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Transaction ID:'])),
            (t()(),
            Gi(
              11,
              0,
              null,
              null,
              4,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r =
                    Zr(t, 12).onClick(
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
            uo(
              12,
              671744,
              null,
              0,
              qh,
              [Bh, Np, Tu],
              {
                queryParams: [0, 'queryParams'],
                routerLink: [1, 'routerLink'],
              },
              null
            ),
            ra(13, { 'transaction-id': 0, 'query-node': 1 }),
            na(14, 1),
            (t()(), ia(15, null, ['', ''])),
            (t()(),
            Gi(16, 0, null, null, 6, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Block Hash:'])),
            (t()(), Qi(16777216, null, null, 1, null, Cd)),
            uo(20, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Qi(16777216, null, null, 1, null, xd)),
            uo(22, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            Gi(23, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Transaction Type:'])),
            (t()(), ia(26, null, ['', ' '])),
            (t()(), Qi(16777216, null, null, 1, null, Ed)),
            uo(28, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            Gi(29, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Transaction Metadata:'])),
            (t()(),
            Gi(
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
            (t()(), Qi(16777216, null, null, 1, null, Od)),
            uo(34, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Qi(16777216, null, null, 1, null, Td)),
            uo(36, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            Gi(37, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['Raw Transaction Hex:'])),
            (t()(),
            Gi(
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
            (t()(), ia(41, null, ['', '...'])),
            (t()(),
            Gi(
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
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r =
                    t.component.copy(t.context.$implicit.RawTransactionHex) !==
                      false && r;
                }
                return r;
              },
              null,
              null
            )),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, [' Copy '])),
            (t()(),
            Gi(45, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(-1, null, [' Transaction Inputs '])),
            (t()(), Qi(16777216, null, null, 1, null, kd)),
            uo(
              48,
              278528,
              null,
              0,
              Lu,
              [Dn, jn, Pn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            Gi(49, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(), ia(-1, null, [' Transaction Outputs '])),
            (t()(), Qi(16777216, null, null, 1, null, Pd)),
            uo(
              52,
              278528,
              null,
              0,
              Lu,
              [Dn, jn, Pn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function(t, e) {
            var n = e.component;
            t(e, 5, 0, e.context.index === 0);
            var r = t(
              e,
              13,
              0,
              e.context.$implicit.TransactionIDBase58Check,
              n.queryNode
            );
            var o = t(e, 14, 0, '/');
            t(e, 12, 0, r, o);
            t(
              e,
              20,
              0,
              e.context.$implicit.BlockHashHex !==
                '0000000000000000000000000000000000000000000000000000000000000000'
            );
            t(
              e,
              22,
              0,
              e.context.$implicit.BlockHashHex ===
                '0000000000000000000000000000000000000000000000000000000000000000'
            );
            t(
              e,
              28,
              0,
              e.context.$implicit.TransactionType === 'BITCOIN_EXCHANGE' &&
                e.context.$implicit.BlockHashHex ===
                  '0000000000000000000000000000000000000000000000000000000000000000'
            );
            t(e, 34, 0, e.context.$implicit.TransactionMetadata);
            t(e, 36, 0, !e.context.$implicit.TransactionMetadata);
            t(e, 48, 0, e.context.$implicit.Inputs);
            t(e, 52, 0, e.context.$implicit.Outputs);
          },
          function(t, e) {
            t(e, 3, 0, e.context.index);
            t(e, 11, 0, Zr(e, 12).target, Zr(e, 12).href);
            t(e, 15, 0, e.context.$implicit.TransactionIDBase58Check);
            t(e, 26, 0, e.context.$implicit.TransactionType);
            var n = e.context.$implicit.RawTransactionHex.slice(0, 50);
            t(e, 41, 0, n);
          }
        );
      }
      function Id(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(0, 0, null, null, 8, 'div', [], null, null, null, null, null)),
            (t()(), Qi(16777216, null, null, 1, null, md)),
            uo(2, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Qi(16777216, null, null, 1, null, _d)),
            uo(4, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Qi(16777216, null, null, 1, null, bd)),
            uo(6, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Qi(16777216, null, null, 1, null, Ad)),
            uo(
              8,
              278528,
              null,
              0,
              Lu,
              [Dn, jn, Pn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function(t, e) {
            var n = e.component;
            t(e, 2, 0, n.blockRes != null);
            t(e, 4, 0, n.txnRes.BalanceNanos);
            t(e, 6, 0, n.blockRes == null);
            t(e, 8, 0, n.txnRes.Transactions);
          },
          null
        );
      }
      function Rd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(),
            Gi(1, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (t()(), ia(-1, null, [' Loading... '])),
          ],
          null,
          null
        );
      }
      function Nd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(
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
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, [' Welcome to the BitClout Block Explorer '])),
            (t()(),
            Gi(
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
            (t()(),
            ia(-1, null, [
              ' Enter a BitClout transaction ID, public key, block hash, or block height. ',
            ])),
            (t()(),
            Gi(
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
            (t()(),
            Gi(
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
              function(t, e, n) {
                var r = true;
                var o = t.component;
                if (e === 'input') {
                  r = Zr(t, 7)._handleInput(n.target.value) !== false && r;
                }
                if (e === 'blur') {
                  r = Zr(t, 7).onTouched() !== false && r;
                }
                if (e === 'compositionstart') {
                  r = Zr(t, 7)._compositionStart() !== false && r;
                }
                if (e === 'compositionend') {
                  r = Zr(t, 7)._compositionEnd(n.target.value) !== false && r;
                }
                if (e === 'keypress') {
                  r = o.searchEnterPressed(n) !== false && r;
                }
                if (e === 'ngModelChange') {
                  r = (o.explorerQuery = n) !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            uo(7, 16384, null, 0, Sf, [vn, pn, [2, Ef]], null, null),
            so(
              1024,
              null,
              Cf,
              function(t) {
                return [t];
              },
              [Sf]
            ),
            uo(
              9,
              671744,
              null,
              0,
              pd,
              [[8, null], [8, null], [8, null], [6, Cf]],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            so(2048, null, Pf, null, [pd]),
            uo(11, 16384, null, 0, Af, [[4, Pf]], null, null),
            (t()(),
            Gi(
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
              function(t, e, n) {
                var r = true;
                if (e === 'click') {
                  r = t.component.relocateForQuery() !== false && r;
                }
                return r;
              },
              null,
              null
            )),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, [' Search '])),
            (t()(),
            Gi(
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
            (t()(),
            ia(-1, null, [
              ' Browse the BitClout social network or learn more about the project ',
            ])),
            (t()(),
            Gi(
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
            (t()(), ia(-1, null, ['here'])),
            (t()(), ia(-1, null, ['. '])),
            (t()(), Qi(16777216, null, null, 1, null, gd)),
            uo(21, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Qi(16777216, null, null, 1, null, Id)),
            uo(23, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Qi(16777216, null, null, 1, null, Rd)),
            uo(25, 16384, null, 0, Hu, [Dn, jn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            Gi(
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
          function(t, e) {
            var n = e.component;
            t(e, 9, 0, '', n.explorerQuery);
            t(e, 21, 0, n.blockRes != null);
            t(e, 23, 0, n.txnRes != null);
            t(e, 25, 0, n.txnsLoading);
          },
          function(t, e) {
            t(
              e,
              6,
              0,
              Zr(e, 11).ngClassUntouched,
              Zr(e, 11).ngClassTouched,
              Zr(e, 11).ngClassPristine,
              Zr(e, 11).ngClassDirty,
              Zr(e, 11).ngClassValid,
              Zr(e, 11).ngClassInvalid,
              Zr(e, 11).ngClassPending
            );
          }
        );
      }
      function jd(t) {
        return sa(
          0,
          [
            (t()(),
            Gi(0, 0, null, null, 1, 'app-root', [], null, null, null, Nd, dd)),
            uo(1, 114688, null, 0, ks, [Re, Np, Bh, hs], null, null),
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      n.r(e);
      var r = n('mrSG');
      var o =
        Array.isArray ||
        function(t) {
          return t && typeof t.length == 'number';
        };
      u.prototype = Object.create(Error.prototype);
      var s = u;
      var l = (function() {
        function t(t) {
          this.closed = false;
          this._parent = null;
          this._parents = null;
          this._subscriptions = null;
          if (t) {
            this._unsubscribe = t;
          }
        }
        t.prototype.unsubscribe = function() {
          var t;
          var e = false;
          if (!this.closed) {
            var n = this._parent;
            var r = this._parents;
            var u = this._unsubscribe;
            var l = this._subscriptions;
            this.closed = true;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            var p = -1;
            for (var h = r ? r.length : 0; n; ) {
              n.remove(this);
              n = (++p < h && r[p]) || null;
            }
            if (a(u)) {
              try {
                u.call(this);
              } catch (d) {
                e = true;
                t = d instanceof s ? c(d.errors) : [d];
              }
            }
            if (o(l)) {
              p = -1;
              for (h = l.length; ++p < h; ) {
                var f = l[p];
                if (i(f)) {
                  try {
                    f.unsubscribe();
                  } catch (d) {
                    e = true;
                    t = t || [];
                    if (d instanceof s) {
                      t = t.concat(c(d.errors));
                    } else {
                      t.push(d);
                    }
                  }
                }
              }
            }
            if (e) {
              throw new s(t);
            }
          }
        };
        t.prototype.add = function(e) {
          var n = e;
          switch (typeof e) {
            case 'function':
              n = new t(e);
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
              if (!(n instanceof t)) {
                var r = n;
                (n = new t())._subscriptions = [r];
              }
              break;
            default:
              if (!e) {
                return t.EMPTY;
              }
              throw new Error(
                'unrecognized teardown ' + e + ' added to Subscription.'
              );
          }
          if (n._addParent(this)) {
            var o = this._subscriptions;
            if (o) {
              o.push(n);
            } else {
              this._subscriptions = [n];
            }
          }
          return n;
        };
        t.prototype.remove = function(t) {
          var e = this._subscriptions;
          if (e) {
            var n = e.indexOf(t);
            if (n !== -1) {
              e.splice(n, 1);
            }
          }
        };
        t.prototype._addParent = function(t) {
          var e = this._parent;
          var n = this._parents;
          return (
            e !== t &&
            (e
              ? n
                ? n.indexOf(t) === -1 && (n.push(t), true)
                : ((this._parents = [t]), true)
              : ((this._parent = t), true))
          );
        };
        t.EMPTY = (function(t) {
          t.closed = true;
          return t;
        })(new t());
        return t;
      })();
      var p = false;
      var h = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          p = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return p;
        },
      };
      var d = {
        closed: true,
        next: function(t) {},
        error: function(t) {
          if (h.useDeprecatedSynchronousErrorHandling) {
            throw t;
          }
          f(t);
        },
        complete: function() {},
      };
      var y =
        typeof Symbol == 'function'
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random();
      var v = (function() {
        function e(n, r, o) {
          var i = t.call(this) || this;
          switch (((i.syncErrorValue = null),
          (i.syncErrorThrown = false),
          (i.syncErrorThrowable = false),
          (i.isStopped = false),
          arguments.length)) {
            case 0:
              i.destination = d;
              break;
            case 1:
              if (!n) {
                i.destination = d;
                break;
              }
              if (typeof n == 'object') {
                if (n instanceof e) {
                  i.syncErrorThrowable = n.syncErrorThrowable;
                  i.destination = n;
                  n.add(i);
                } else {
                  i.syncErrorThrowable = true;
                  i.destination = new g(i, n);
                }
                break;
              }
            default:
              i.syncErrorThrowable = true;
              i.destination = new g(i, n, r, o);
          }
          return i;
        }
        var t = l;
        r.__extends(e, t);
        e.prototype[y] = function() {
          return this;
        };
        e.create = function(t, n, r) {
          var o = new e(t, n, r);
          o.syncErrorThrowable = false;
          return o;
        };
        e.prototype.next = function(t) {
          if (!this.isStopped) {
            this._next(t);
          }
        };
        e.prototype.error = function(t) {
          if (!this.isStopped) {
            this.isStopped = true;
            this._error(t);
          }
        };
        e.prototype.complete = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
          }
        };
        e.prototype.unsubscribe = function() {
          if (!this.closed) {
            this.isStopped = true;
            t.prototype.unsubscribe.call(this);
          }
        };
        e.prototype._next = function(t) {
          this.destination.next(t);
        };
        e.prototype._error = function(t) {
          this.destination.error(t);
          this.unsubscribe();
        };
        e.prototype._complete = function() {
          this.destination.complete();
          this.unsubscribe();
        };
        e.prototype._unsubscribeAndRecycle = function() {
          var t = this._parent;
          var e = this._parents;
          this._parent = null;
          this._parents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parent = t;
          this._parents = e;
          return this;
        };
        return e;
      })();
      var g = (function() {
        function e(e, n, r, o) {
          var i;
          var u = t.call(this) || this;
          u._parentSubscriber = e;
          var s = u;
          if (a(n)) {
            i = n;
          } else if (n) {
            i = n.next;
            r = n.error;
            o = n.complete;
            if (n !== d) {
              if (a((s = Object.create(n)).unsubscribe)) {
                u.add(s.unsubscribe.bind(s));
              }
              s.unsubscribe = u.unsubscribe.bind(u);
            }
          }
          u._context = s;
          u._next = i;
          u._error = r;
          u._complete = o;
          return u;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype.next = function(t) {
          if (!this.isStopped && this._next) {
            var e = this._parentSubscriber;
            if (
              h.useDeprecatedSynchronousErrorHandling &&
              e.syncErrorThrowable
            ) {
              if (this.__tryOrSetError(e, this._next, t)) {
                this.unsubscribe();
              }
            } else {
              this.__tryOrUnsub(this._next, t);
            }
          }
        };
        e.prototype.error = function(t) {
          if (!this.isStopped) {
            var e = this._parentSubscriber;
            var n = h.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
              if (n && e.syncErrorThrowable) {
                this.__tryOrSetError(e, this._error, t);
                this.unsubscribe();
              } else {
                this.__tryOrUnsub(this._error, t);
                this.unsubscribe();
              }
            } else if (e.syncErrorThrowable) {
              if (n) {
                e.syncErrorValue = t;
                e.syncErrorThrown = true;
              } else {
                f(t);
              }
              this.unsubscribe();
            } else {
              this.unsubscribe();
              if (n) {
                throw t;
              }
              f(t);
            }
          }
        };
        e.prototype.complete = function() {
          var t = this;
          if (!this.isStopped) {
            var e = this._parentSubscriber;
            if (this._complete) {
              var n = function() {
                return t._complete.call(t._context);
              };
              if (
                h.useDeprecatedSynchronousErrorHandling &&
                e.syncErrorThrowable
              ) {
                this.__tryOrSetError(e, n);
                this.unsubscribe();
              } else {
                this.__tryOrUnsub(n);
                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        };
        e.prototype.__tryOrUnsub = function(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            this.unsubscribe();
            if (h.useDeprecatedSynchronousErrorHandling) {
              throw n;
            }
            f(n);
          }
        };
        e.prototype.__tryOrSetError = function(t, e, n) {
          if (!h.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
          }
          try {
            e.call(this._context, n);
          } catch (r) {
            if (h.useDeprecatedSynchronousErrorHandling) {
              t.syncErrorValue = r;
              t.syncErrorThrown = true;
              return true;
            } else {
              f(r);
              return true;
            }
          }
          return false;
        };
        e.prototype._unsubscribe = function() {
          var t = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;
          t.unsubscribe();
        };
        return e;
      })();
      var m =
        (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
      var C = (function() {
        function t(t) {
          this._isScalar = false;
          if (t) {
            this._subscribe = t;
          }
        }
        t.prototype.lift = function(e) {
          var n = new t();
          n.source = this;
          n.operator = e;
          return n;
        };
        t.prototype.subscribe = function(t, e, n) {
          var r = this.operator;
          var o = (function(t, e, n) {
            if (t) {
              if (t instanceof v) {
                return t;
              }
              if (t[y]) {
                return t[y]();
              }
            }
            if (t || e || n) {
              return new v(t, e, n);
            } else {
              return new v(d);
            }
          })(t, e, n);
          o.add(
            r
              ? r.call(o, this.source)
              : this.source ||
                (h.useDeprecatedSynchronousErrorHandling &&
                  !o.syncErrorThrowable)
                ? this._subscribe(o)
                : this._trySubscribe(o)
          );
          if (
            h.useDeprecatedSynchronousErrorHandling &&
            o.syncErrorThrowable &&
            ((o.syncErrorThrowable = false), o.syncErrorThrown)
          ) {
            throw o.syncErrorValue;
          }
          return o;
        };
        t.prototype._trySubscribe = function(t) {
          try {
            return this._subscribe(t);
          } catch (e) {
            if (h.useDeprecatedSynchronousErrorHandling) {
              t.syncErrorThrown = true;
              t.syncErrorValue = e;
            }
            if (
              (function(t) {
                while (t) {
                  var e = t.destination;
                  if (t.closed || t.isStopped) {
                    return false;
                  }
                  t = e && e instanceof v ? e : null;
                }
                return true;
              })(t)
            ) {
              t.error(e);
            } else {
              console.warn(e);
            }
          }
        };
        t.prototype.forEach = function(t, e) {
          var n = this;
          return new (e = x(e))(function(e, r) {
            var o = n.subscribe(
              function(e) {
                try {
                  t(e);
                } catch (n) {
                  r(n);
                  if (o) {
                    o.unsubscribe();
                  }
                }
              },
              r,
              e
            );
          });
        };
        t.prototype._subscribe = function(t) {
          var e = this.source;
          return e && e.subscribe(t);
        };
        t.prototype[m] = function() {
          return this;
        };
        t.prototype.pipe = function() {
          var t = [];
          for (var e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }
          if (t.length === 0) {
            return this;
          } else {
            return w(t)(this);
          }
        };
        t.prototype.toPromise = function(t) {
          var e = this;
          return new (t = x(t))(function(t, n) {
            var r;
            e.subscribe(
              function(t) {
                return (r = t);
              },
              function(t) {
                return n(t);
              },
              function() {
                return t(r);
              }
            );
          });
        };
        t.create = function(e) {
          return new t(e);
        };
        return t;
      })();
      E.prototype = Object.create(Error.prototype);
      var S = E;
      var O = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r.subject = e;
          r.subscriber = n;
          r.closed = false;
          return r;
        }
        var t = l;
        r.__extends(e, t);
        e.prototype.unsubscribe = function() {
          if (!this.closed) {
            this.closed = true;
            var t = this.subject;
            var e = t.observers;
            this.subject = null;
            if (e && e.length !== 0 && !t.isStopped && !t.closed) {
              var n = e.indexOf(this.subscriber);
              if (n !== -1) {
                e.splice(n, 1);
              }
            }
          }
        };
        return e;
      })();
      var T = (function() {
        function e(e) {
          var n = t.call(this, e) || this;
          n.destination = e;
          return n;
        }
        var t = v;
        r.__extends(e, t);
        return e;
      })();
      var k = (function() {
        function e() {
          var e = t.call(this) || this;
          e.observers = [];
          e.closed = false;
          e.isStopped = false;
          e.hasError = false;
          e.thrownError = null;
          return e;
        }
        var t = C;
        r.__extends(e, t);
        e.prototype[y] = function() {
          return new T(this);
        };
        e.prototype.lift = function(t) {
          var e = new P(this, this);
          e.operator = t;
          return e;
        };
        e.prototype.next = function(t) {
          if (this.closed) {
            throw new S();
          }
          if (!this.isStopped) {
            var e = this.observers;
            var n = e.length;
            var r = e.slice();
            for (var o = 0; o < n; o++) {
              r[o].next(t);
            }
          }
        };
        e.prototype.error = function(t) {
          if (this.closed) {
            throw new S();
          }
          this.hasError = true;
          this.thrownError = t;
          this.isStopped = true;
          var e = this.observers;
          var n = e.length;
          var r = e.slice();
          for (var o = 0; o < n; o++) {
            r[o].error(t);
          }
          this.observers.length = 0;
        };
        e.prototype.complete = function() {
          if (this.closed) {
            throw new S();
          }
          this.isStopped = true;
          var t = this.observers;
          var e = t.length;
          var n = t.slice();
          for (var r = 0; r < e; r++) {
            n[r].complete();
          }
          this.observers.length = 0;
        };
        e.prototype.unsubscribe = function() {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
        };
        e.prototype._trySubscribe = function(e) {
          if (this.closed) {
            throw new S();
          }
          return t.prototype._trySubscribe.call(this, e);
        };
        e.prototype._subscribe = function(t) {
          if (this.closed) {
            throw new S();
          }
          if (this.hasError) {
            t.error(this.thrownError);
            return l.EMPTY;
          } else if (this.isStopped) {
            t.complete();
            return l.EMPTY;
          } else {
            this.observers.push(t);
            return new O(this, t);
          }
        };
        e.prototype.asObservable = function() {
          var t = new C();
          t.source = this;
          return t;
        };
        e.create = function(t, e) {
          return new P(t, e);
        };
        return e;
      })();
      var P = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r.destination = e;
          r.source = n;
          return r;
        }
        var t = k;
        r.__extends(e, t);
        e.prototype.next = function(t) {
          var e = this.destination;
          if (e && e.next) {
            e.next(t);
          }
        };
        e.prototype.error = function(t) {
          var e = this.destination;
          if (e && e.error) {
            this.destination.error(t);
          }
        };
        e.prototype.complete = function() {
          var t = this.destination;
          if (t && t.complete) {
            this.destination.complete();
          }
        };
        e.prototype._subscribe = function(t) {
          if (this.source) {
            return this.source.subscribe(t);
          } else {
            return l.EMPTY;
          }
        };
        return e;
      })();
      var I = (function() {
        function e(e, n, r) {
          var o = t.call(this) || this;
          o.parent = e;
          o.outerValue = n;
          o.outerIndex = r;
          o.index = 0;
          return o;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        };
        e.prototype._error = function(t) {
          this.parent.notifyError(t, this);
          this.unsubscribe();
        };
        e.prototype._complete = function() {
          this.parent.notifyComplete(this);
          this.unsubscribe();
        };
        return e;
      })();
      var R = function(t) {
        return function(e) {
          var n = 0;
          for (var r = t.length; n < r && !e.closed; n++) {
            e.next(t[n]);
          }
          if (!e.closed) {
            e.complete();
          }
        };
      };
      var N = function(t) {
        return function(e) {
          t
            .then(
              function(t) {
                if (!e.closed) {
                  e.next(t);
                  e.complete();
                }
              },
              function(t) {
                return e.error(t);
              }
            )
            .then(null, f);
          return e;
        };
      };
      var M = j();
      var D = function(t) {
        return function(e) {
          for (var n = t[M](); ; ) {
            var r = n.next();
            if (r.done) {
              e.complete();
              break;
            }
            e.next(r.value);
            if (e.closed) {
              break;
            }
          }
          if (typeof n.return == 'function') {
            e.add(function() {
              if (n.return) {
                n.return();
              }
            });
          }
          return e;
        };
      };
      var V = function(t) {
        return function(e) {
          var n = t[m]();
          if (typeof n.subscribe != 'function') {
            throw new TypeError(
              'Provided object does not correctly implement Symbol.observable'
            );
          }
          return n.subscribe(e);
        };
      };
      var U = function(t) {
        return t && typeof t.length == 'number' && typeof t != 'function';
      };
      var F = function(t) {
        if (t instanceof C) {
          return function(e) {
            if (t._isScalar) {
              e.next(t.value);
              e.complete();
              return;
            } else {
              return t.subscribe(e);
            }
          };
        }
        if (t && typeof t[m] == 'function') {
          return V(t);
        }
        if (U(t)) {
          return R(t);
        }
        if (L(t)) {
          return N(t);
        }
        if (t && typeof t[M] == 'function') {
          return D(t);
        }
        var e = i(t) ? 'an invalid object' : "'" + t + "'";
        throw new TypeError(
          'You provided ' +
            e +
            ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
        );
      };
      var z = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype.notifyNext = function(t, e, n, r, o) {
          this.destination.next(e);
        };
        e.prototype.notifyError = function(t, e) {
          this.destination.error(t);
        };
        e.prototype.notifyComplete = function(t) {
          this.destination.complete();
        };
        return e;
      })();
      var q = (function() {
        function t(t, e) {
          this.project = t;
          this.thisArg = e;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new Q(t, this.project, this.thisArg));
        };
        return t;
      })();
      var Q = (function() {
        function e(e, n, r) {
          var o = t.call(this, e) || this;
          o.project = n;
          o.count = 0;
          o.thisArg = r || o;
          return o;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          var e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            this.destination.error(n);
            return;
          }
          this.destination.next(e);
        };
        return e;
      })();
      var K = (function() {
        function t(t, e) {
          if (e === void 0) {
            e = Number.POSITIVE_INFINITY;
          }
          this.project = t;
          this.concurrent = e;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new $(t, this.project, this.concurrent));
        };
        return t;
      })();
      var $ = (function() {
        function e(e, n, r) {
          if (r === void 0) {
            r = Number.POSITIVE_INFINITY;
          }
          var o = t.call(this, e) || this;
          o.project = n;
          o.concurrent = r;
          o.hasCompleted = false;
          o.buffer = [];
          o.active = 0;
          o.index = 0;
          return o;
        }
        var t = z;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          if (this.active < this.concurrent) {
            this._tryNext(t);
          } else {
            this.buffer.push(t);
          }
        };
        e.prototype._tryNext = function(t) {
          var e;
          var n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            this.destination.error(r);
            return;
          }
          this.active++;
          this._innerSub(e, t, n);
        };
        e.prototype._innerSub = function(t, e, n) {
          var r = new I(this, void 0, void 0);
          this.destination.add(r);
          H(this, t, e, n, r);
        };
        e.prototype._complete = function() {
          this.hasCompleted = true;
          if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
          }
          this.unsubscribe();
        };
        e.prototype.notifyNext = function(t, e, n, r, o) {
          this.destination.next(e);
        };
        e.prototype.notifyComplete = function(t) {
          var e = this.buffer;
          this.remove(t);
          this.active--;
          if (e.length > 0) {
            this._next(e.shift());
          } else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
          }
        };
        return e;
      })();
      var tt = (function() {
        function t(t) {
          this.connectable = t;
        }
        t.prototype.call = function(t, e) {
          var n = this.connectable;
          n._refCount++;
          var r = new et(t, n);
          var o = e.subscribe(r);
          if (!r.closed) {
            r.connection = n.connect();
          }
          return o;
        };
        return t;
      })();
      var et = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.connectable = n;
          return r;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype._unsubscribe = function() {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._refCount;
            if (e <= 0) {
              this.connection = null;
            } else if (((t._refCount = e - 1), e > 1)) {
              this.connection = null;
            } else {
              var n = this.connection;
              var r = t._connection;
              this.connection = null;
              if (!!r && (!n || r === n)) {
                r.unsubscribe();
              }
            }
          } else {
            this.connection = null;
          }
        };
        return e;
      })();
      var nt = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r.source = e;
          r.subjectFactory = n;
          r._refCount = 0;
          r._isComplete = false;
          return r;
        }
        var t = C;
        r.__extends(e, t);
        e.prototype._subscribe = function(t) {
          return this.getSubject().subscribe(t);
        };
        e.prototype.getSubject = function() {
          var t = this._subject;
          if (!t || !!t.isStopped) {
            this._subject = this.subjectFactory();
          }
          return this._subject;
        };
        e.prototype.connect = function() {
          var t = this._connection;
          if (!t) {
            this._isComplete = false;
            (t = this._connection = new l()).add(
              this.source.subscribe(new ot(this.getSubject(), this))
            );
            if (t.closed) {
              this._connection = null;
              t = l.EMPTY;
            } else {
              this._connection = t;
            }
          }
          return t;
        };
        e.prototype.refCount = function() {
          return X()(this);
        };
        return e;
      })().prototype;
      var rt = {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: nt._subscribe },
        _isComplete: { value: nt._isComplete, writable: true },
        getSubject: { value: nt.getSubject },
        connect: { value: nt.connect },
        refCount: { value: nt.refCount },
      };
      var ot = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.connectable = n;
          return r;
        }
        var t = T;
        r.__extends(e, t);
        e.prototype._error = function(e) {
          this._unsubscribe();
          t.prototype._error.call(this, e);
        };
        e.prototype._complete = function() {
          this.connectable._isComplete = true;
          this._unsubscribe();
          t.prototype._complete.call(this);
        };
        e.prototype._unsubscribe = function() {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._connection;
            t._refCount = 0;
            t._subject = null;
            t._connection = null;
            if (e) {
              e.unsubscribe();
            }
          }
        };
        return e;
      })();
      var at = '__parameters__';
      var ut = '__prop__metadata__';
      var pt = lt('Inject', function(t) {
        return { token: t };
      });
      var ht = lt('Optional');
      var ft = lt('Self');
      var dt = lt('SkipSelf');
      var yt = (function() {
        var t = {};
        t[(t.Default = 0)] = 'Default';
        t[(t.Host = 1)] = 'Host';
        t[(t.Self = 2)] = 'Self';
        t[(t.SkipSelf = 4)] = 'SkipSelf';
        t[(t.Optional = 8)] = 'Optional';
        return t;
      })();
      var _t = vt({ ngInjectableDef: vt });
      var wt = vt({ __forward_ref__: vt });
      var Et;
      var St = typeof globalThis != 'undefined' && globalThis;
      var Ot = typeof window != 'undefined' && window;
      var Tt =
        typeof self != 'undefined' &&
        typeof WorkerGlobalScope != 'undefined' &&
        self instanceof WorkerGlobalScope &&
        self;
      var kt = typeof global != 'undefined' && global;
      var Pt = St || kt || Ot || Tt;
      var At = (function() {
        function t(t, e) {
          this._desc = t;
          this.ngMetadataName = 'InjectionToken';
          this.ngInjectableDef = void 0;
          if (typeof e == 'number') {
            this.__NG_ELEMENT_ID__ = e;
          } else if (e !== void 0) {
            this.ngInjectableDef = gt({
              token: this,
              providedIn: e.providedIn || 'root',
              factory: e.factory,
            });
          }
        }
        t.prototype.toString = function() {
          return 'InjectionToken ' + this._desc;
        };
        return t;
      })();
      var It = new At('INJECTOR', -1);
      var Rt = new Object();
      var Nt = /\n/gm;
      var jt = '\u0275';
      var Mt = '__source';
      var Dt = vt({ provide: String, useValue: vt });
      var Vt = void 0;
      var Ht = (function() {
        function t() {}
        t.prototype.get = function(t, e) {
          if (e === void 0) {
            e = Rt;
          }
          if (e === Rt) {
            var n = new Error(
              'NullInjectorError: No provider for ' + bt(t) + '!'
            );
            n.name = 'NullInjectorError';
            throw n;
          }
          return e;
        };
        return t;
      })();
      var Bt = function() {};
      var qt = function() {};
      var Wt = (function() {
        var t = {};
        t[(t.Emulated = 0)] = 'Emulated';
        t[(t.Native = 1)] = 'Native';
        t[(t.None = 2)] = 'None';
        t[(t.ShadowDom = 3)] = 'ShadowDom';
        return t;
      })();
      var Zt = (
        (typeof requestAnimationFrame != 'undefined' &&
          requestAnimationFrame) ||
        setTimeout
      ).bind(Pt);
      var Kt = 'ngDebugContext';
      var $t = 'ngOriginalError';
      var Jt = 'ngErrorLogger';
      var ee = (function() {
        function t() {
          this._console = console;
        }
        t.prototype.handleError = function(t) {
          var e = this._findOriginalError(t);
          var n = this._findContext(t);
          var r = (function(t) {
            return t[Jt] || te;
          })(t);
          r(this._console, 'ERROR', t);
          if (e) {
            r(this._console, 'ORIGINAL ERROR', e);
          }
          if (n) {
            r(this._console, 'ERROR CONTEXT', n);
          }
        };
        t.prototype._findContext = function(t) {
          if (t) {
            if (Yt(t)) {
              return Yt(t);
            } else {
              return this._findContext(Xt(t));
            }
          } else {
            return null;
          }
        };
        t.prototype._findOriginalError = function(t) {
          for (var e = Xt(t); e && Xt(e); ) {
            e = Xt(e);
          }
          return e;
        };
        return t;
      })();
      var ne = true;
      var re = false;
      var ie = (function() {
        function t(t) {
          this.defaultDoc = t;
          this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
            'sanitization-inert'
          );
          this.inertBodyElement = this.inertDocument.body;
          if (this.inertBodyElement == null) {
            var e = this.inertDocument.createElement('html');
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
                } catch (t) {
                  return false;
                }
              })()
                ? this.getInertBodyElement_DOMParser
                : this.getInertBodyElement_InertDocument;
          } else {
            this.getInertBodyElement = this.getInertBodyElement_XHR;
          }
        }
        t.prototype.getInertBodyElement_XHR = function(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            t = encodeURI(t);
          } catch (r) {
            return null;
          }
          var e = new XMLHttpRequest();
          e.responseType = 'document';
          e.open('GET', 'data:text/html;charset=utf-8,' + t, false);
          e.send(void 0);
          var n = e.response.body;
          n.removeChild(n.firstChild);
          return n;
        };
        t.prototype.getInertBodyElement_DOMParser = function(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            var e = new window.DOMParser().parseFromString(t, 'text/html').body;
            e.removeChild(e.firstChild);
            return e;
          } catch (n) {
            return null;
          }
        };
        t.prototype.getInertBodyElement_InertDocument = function(t) {
          var e = this.inertDocument.createElement('template');
          if ('content' in e) {
            e.innerHTML = t;
            return e;
          } else {
            this.inertBodyElement.innerHTML = t;
            if (this.defaultDoc.documentMode) {
              this.stripCustomNsAttrs(this.inertBodyElement);
            }
            return this.inertBodyElement;
          }
        };
        t.prototype.stripCustomNsAttrs = function(t) {
          var e = t.attributes;
          for (var n = e.length - 1; 0 < n; n--) {
            var r = e.item(n).name;
            if (r === 'xmlns:ns1' || r.indexOf('ns1:') === 0) {
              t.removeAttribute(r);
            }
          }
          for (var o = t.firstChild; o; ) {
            if (o.nodeType === Node.ELEMENT_NODE) {
              this.stripCustomNsAttrs(o);
            }
            o = o.nextSibling;
          }
        };
        return t;
      })();
      var ae = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
      var ue = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      var pe;
      var he = le('area,br,col,hr,img,wbr');
      var fe = le('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
      var de = le('rp,rt');
      var ye = ce(de, fe);
      var ve = ce(
        he,
        ce(
          fe,
          le(
            'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
          )
        ),
        ce(
          de,
          le(
            'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
          )
        ),
        ye
      );
      var ge = le(
        'background,cite,href,itemtype,longdesc,poster,src,xlink:href'
      );
      var me = le('srcset');
      var _e = ce(
        ge,
        me,
        le(
          'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
        ),
        le(
          'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
        )
      );
      var be = le('script,style,template');
      var we = (function() {
        function t() {
          this.sanitizedSomething = false;
          this.buf = [];
        }
        t.prototype.sanitizeChildren = function(t) {
          var e = t.firstChild;
          for (var n = true; e; ) {
            if (e.nodeType === Node.ELEMENT_NODE) {
              n = this.startElement(e);
            } else if (e.nodeType === Node.TEXT_NODE) {
              this.chars(e.nodeValue);
            } else {
              this.sanitizedSomething = true;
            }
            if (n && e.firstChild) {
              e = e.firstChild;
            } else {
              while (e) {
                if (e.nodeType === Node.ELEMENT_NODE) {
                  this.endElement(e);
                }
                var r = this.checkClobberedElement(e, e.nextSibling);
                if (r) {
                  e = r;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
            }
          }
          return this.buf.join('');
        };
        t.prototype.startElement = function(t) {
          var e;
          var n = t.nodeName.toLowerCase();
          if (!ve.hasOwnProperty(n)) {
            this.sanitizedSomething = true;
            return !be.hasOwnProperty(n);
          }
          this.buf.push('<');
          this.buf.push(n);
          var r = t.attributes;
          for (var o = 0; o < r.length; o++) {
            var i = r.item(o);
            var a = i.name;
            var u = a.toLowerCase();
            if (_e.hasOwnProperty(u)) {
              var s = i.value;
              if (ge[u]) {
                s = se(s);
              }
              if (me[u]) {
                e = s;
                s = (e = String(e))
                  .split(',')
                  .map(function(t) {
                    return se(t.trim());
                  })
                  .join(', ');
              }
              this.buf.push(' ', a, '="', Ee(s), '"');
            } else {
              this.sanitizedSomething = true;
            }
          }
          this.buf.push('>');
          return true;
        };
        t.prototype.endElement = function(t) {
          var e = t.nodeName.toLowerCase();
          if (ve.hasOwnProperty(e) && !he.hasOwnProperty(e)) {
            this.buf.push('</');
            this.buf.push(e);
            this.buf.push('>');
          }
        };
        t.prototype.chars = function(t) {
          this.buf.push(Ee(t));
        };
        t.prototype.checkClobberedElement = function(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          ) {
            throw new Error(
              'Failed to sanitize html because the element is clobbered: ' +
                t.outerHTML
            );
          }
          return e;
        };
        return t;
      })();
      var Ce = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      var xe = /([^\#-~ |!])/g;
      var Oe = (function() {
        var t = {};
        t[(t.NONE = 0)] = 'NONE';
        t[(t.HTML = 1)] = 'HTML';
        t[(t.STYLE = 2)] = 'STYLE';
        t[(t.SCRIPT = 3)] = 'SCRIPT';
        t[(t.URL = 4)] = 'URL';
        t[(t.RESOURCE_URL = 5)] = 'RESOURCE_URL';
        return t;
      })();
      var Te = function() {};
      var ke = new RegExp(
        '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
        'g'
      );
      var Pe = /^url\(([^)]+)\)$/;
      var Ae = /([A-Z])/g;
      var Re = (function() {
        function t() {}
        t.__NG_ELEMENT_ID__ = function() {
          return Ne();
        };
        return t;
      })();
      var Ne = function() {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
      };
      var je = new At(
        'The presence of this token marks an injector as being the root injector.'
      );
      var Me = function(t, e, n) {
        return new He(t, e, n);
      };
      var De = (function() {
        function t() {}
        t.create = function(t, e) {
          if (Array.isArray(t)) {
            return Me(t, e, '');
          } else {
            return Me(t.providers, t.parent, t.name || '');
          }
        };
        t.THROW_IF_NOT_FOUND = Rt;
        t.NULL = new Ht();
        t.ngInjectableDef = gt({
          token: t,
          providedIn: 'any',
          factory: function() {
            return Ft(It);
          },
        });
        t.__NG_ELEMENT_ID__ = -1;
        return t;
      })();
      var Ve = function(t) {
        return t;
      };
      var Ue = [];
      var Le = Ve;
      var Fe = function() {
        return Array.prototype.slice.call(arguments);
      };
      var He = (function() {
        function t(t, e, n) {
          if (e === void 0) {
            e = De.NULL;
          }
          if (n === void 0) {
            n = null;
          }
          this.parent = e;
          this.source = n;
          var r = (this._records = new Map());
          r.set(De, {
            token: De,
            fn: Ve,
            deps: Ue,
            value: this,
            useNew: false,
          });
          r.set(It, {
            token: It,
            fn: Ve,
            deps: Ue,
            value: this,
            useNew: false,
          });
          (function t(e, n) {
            if (n) {
              if ((n = xt(n)) instanceof Array) {
                for (var r = 0; r < n.length; r++) {
                  t(e, n[r]);
                }
              } else {
                if (typeof n == 'function') {
                  throw Be('Function/Class not supported', n);
                }
                if (!n || typeof n != 'object' || !n.provide) {
                  throw Be('Unexpected provider', n);
                }
                var o = xt(n.provide);
                var i = (function(t) {
                  var e = (function(t) {
                    var e = Ue;
                    var n = t.deps;
                    if (n && n.length) {
                      e = [];
                      for (var r = 0; r < n.length; r++) {
                        var o = 6;
                        if ((s = xt(n[r])) instanceof Array) {
                          var i = 0;
                          for (var a = s; i < a.length; i++) {
                            var u = a[i];
                            if (u instanceof ht || u == ht) {
                              o |= 1;
                            } else if (u instanceof dt || u == dt) {
                              o &= -3;
                            } else if (u instanceof ft || u == ft) {
                              o &= -5;
                            } else {
                              s = u instanceof pt ? u.token : xt(u);
                            }
                          }
                        }
                        e.push({ token: s, options: o });
                      }
                    } else if (t.useExisting) {
                      var s = xt(t.useExisting);
                      e = [{ token: s, options: 6 }];
                    } else if (!n && !(Dt in t)) {
                      throw Be("'deps' required", t);
                    }
                    return e;
                  })(t);
                  var n = Ve;
                  var r = Ue;
                  var o = false;
                  var i = xt(t.provide);
                  if (Dt in t) {
                    r = t.useValue;
                  } else if (t.useFactory) {
                    n = t.useFactory;
                  } else if (t.useExisting) {
                  } else if (t.useClass) {
                    o = true;
                    n = xt(t.useClass);
                  } else {
                    if (typeof i != 'function') {
                      throw Be(
                        'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                        t
                      );
                    }
                    o = true;
                    n = i;
                  }
                  return { deps: e, fn: n, useNew: o, value: r };
                })(n);
                if (n.multi === true) {
                  var a = e.get(o);
                  if (a) {
                    if (a.fn !== Fe) {
                      throw ze(o);
                    }
                  } else {
                    e.set(
                      o,
                      (a = {
                        token: n.provide,
                        deps: [],
                        useNew: false,
                        fn: Fe,
                        value: Ue,
                      })
                    );
                  }
                  a.deps.push({ token: (o = n), options: 6 });
                }
                var u = e.get(o);
                if (u && u.fn == Fe) {
                  throw ze(o);
                }
                e.set(o, i);
              }
            }
          })(r, t);
        }
        t.prototype.get = function(t, e, n) {
          if (n === void 0) {
            n = yt.Default;
          }
          var o = this._records.get(t);
          try {
            return (function t(e, n, o, i, a, u) {
              try {
                return (function(e, n, o, i, a, u) {
                  var s;
                  var l;
                  if (!n || u & yt.SkipSelf) {
                    if (!(u & yt.Self)) {
                      l = i.get(e, a, yt.Default);
                    }
                  } else {
                    if ((l = n.value) == Le) {
                      throw Error('\u0275Circular dependency');
                    }
                    if (l === Ue) {
                      n.value = Le;
                      var c = n.useNew;
                      var p = n.fn;
                      var h = n.deps;
                      var f = Ue;
                      if (h.length) {
                        f = [];
                        for (var d = 0; d < h.length; d++) {
                          var y = h[d];
                          var v = y.options;
                          var g = 2 & v ? o.get(y.token) : void 0;
                          f.push(
                            t(
                              y.token,
                              g,
                              o,
                              g || 4 & v ? i : De.NULL,
                              1 & v ? null : De.THROW_IF_NOT_FOUND,
                              yt.Default
                            )
                          );
                        }
                      }
                      n.value = l = c
                        ? new ((s = p).bind.apply(
                            s,
                            Object(r.__spread)([void 0], f)
                          ))()
                        : p.apply(void 0, f);
                    }
                  }
                  return l;
                })(e, n, o, i, a, u);
              } catch (s) {
                if (!(s instanceof Error)) {
                  s = new Error(s);
                }
                (s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(e);
                if (n && n.value == Le) {
                  n.value = Ue;
                }
                throw s;
              }
            })(t, o, this._records, this.parent, e, n);
          } catch (i) {
            return (function(t, e, n, r) {
              var o = t.ngTempTokenPath;
              if (e[Mt]) {
                o.unshift(e[Mt]);
              }
              t.message = zt('\n' + t.message, o, 'StaticInjectorError', r);
              t.ngTokenPath = o;
              t.ngTempTokenPath = null;
              throw t;
            })(i, t, 0, this.source);
          }
        };
        t.prototype.toString = function() {
          var t = [];
          this._records.forEach(function(e, n) {
            return t.push(bt(n));
          });
          return 'StaticInjector[' + t.join(', ') + ']';
        };
        return t;
      })();
      var qe = new At('AnalyzeForEntryComponents');
      var Qe = null;
      var Ke = (function() {
        function t(t) {
          this.wrapped = t;
        }
        t.wrap = function(e) {
          return new t(e);
        };
        t.unwrap = function(e) {
          if (t.isWrapped(e)) {
            return e.wrapped;
          } else {
            return e;
          }
        };
        t.isWrapped = function(e) {
          return e instanceof t;
        };
        return t;
      })();
      var tn = (function() {
        function t(t, e, n) {
          this.previousValue = t;
          this.currentValue = e;
          this.firstChange = n;
        }
        t.prototype.isFirstChange = function() {
          return this.firstChange;
        };
        return t;
      })();
      var en = function() {};
      var nn = function() {};
      var on = 'ngComponent';
      var an = (function() {
        function t() {}
        t.prototype.resolveComponentFactory = function(t) {
          throw rn(t);
        };
        return t;
      })();
      var un = (function() {
        function t() {}
        t.NULL = new an();
        return t;
      })();
      var sn = (function() {
        function t(t, e, n) {
          this._parent = e;
          this._ngModule = n;
          this._factories = new Map();
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            this._factories.set(o.componentType, o);
          }
        }
        t.prototype.resolveComponentFactory = function(t) {
          var e = this._factories.get(t);
          if (!e && this._parent) {
            e = this._parent.resolveComponentFactory(t);
          }
          if (!e) {
            throw rn(t);
          }
          return new ln(e, this._ngModule);
        };
        return t;
      })();
      var ln = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r.factory = e;
          r.ngModule = n;
          r.selector = e.selector;
          r.componentType = e.componentType;
          r.ngContentSelectors = e.ngContentSelectors;
          r.inputs = e.inputs;
          r.outputs = e.outputs;
          return r;
        }
        var t = nn;
        Object(r.__extends)(e, t);
        e.prototype.create = function(t, e, n, r) {
          return this.factory.create(t, e, n, r || this.ngModule);
        };
        return e;
      })();
      var pn = (function() {
        function t(t) {
          this.nativeElement = t;
        }
        t.__NG_ELEMENT_ID__ = function() {
          return hn(t);
        };
        return t;
      })();
      var hn = cn;
      var fn = function() {};
      var dn = function() {};
      var yn = (function() {
        var t = {};
        t[(t.Important = 1)] = 'Important';
        t[(t.DashCase = 2)] = 'DashCase';
        return t;
      })();
      var vn = (function() {
        function t() {}
        t.__NG_ELEMENT_ID__ = function() {
          return gn();
        };
        return t;
      })();
      var gn = cn;
      var mn = new function(t) {
        this.full = t;
        this.major = t.split('.')[0];
        this.minor = t.split('.')[1];
        this.patch = t
          .split('.')
          .slice(2)
          .join('.');
      }('8.2.14');
      var _n = (function() {
        function t() {}
        t.prototype.supports = function(t) {
          return $e(t);
        };
        t.prototype.create = function(t) {
          return new wn(t);
        };
        return t;
      })();
      var bn = function(t, e) {
        return e;
      };
      var wn = (function() {
        function t(t) {
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
          this._trackByFn = t || bn;
        }
        t.prototype.forEachItem = function(t) {
          for (var e = this._itHead; e !== null; e = e._next) {
            t(e);
          }
        };
        t.prototype.forEachOperation = function(t) {
          var e = this._itHead;
          var n = this._removalsHead;
          var r = 0;
          for (var o = null; e || n; ) {
            var i = !n || (e && e.currentIndex < Sn(n, r, o)) ? e : n;
            var a = Sn(i, r, o);
            var u = i.currentIndex;
            if (i === n) {
              r--;
              n = n._nextRemoved;
            } else if (((e = e._next), i.previousIndex == null)) {
              r++;
            } else {
              if (!o) {
                o = [];
              }
              var s = a - r;
              var l = u - r;
              if (s != l) {
                for (var c = 0; c < s; c++) {
                  var p = c < o.length ? o[c] : (o[c] = 0);
                  var h = p + c;
                  if (l <= h && h < s) {
                    o[c] = p + 1;
                  }
                }
                o[i.previousIndex] = l - s;
              }
            }
            if (a !== u) {
              t(i, a, u);
            }
          }
        };
        t.prototype.forEachPreviousItem = function(t) {
          for (var e = this._previousItHead; e !== null; e = e._nextPrevious) {
            t(e);
          }
        };
        t.prototype.forEachAddedItem = function(t) {
          for (var e = this._additionsHead; e !== null; e = e._nextAdded) {
            t(e);
          }
        };
        t.prototype.forEachMovedItem = function(t) {
          for (var e = this._movesHead; e !== null; e = e._nextMoved) {
            t(e);
          }
        };
        t.prototype.forEachRemovedItem = function(t) {
          for (var e = this._removalsHead; e !== null; e = e._nextRemoved) {
            t(e);
          }
        };
        t.prototype.forEachIdentityChange = function(t) {
          for (
            var e = this._identityChangesHead;
            e !== null;
            e = e._nextIdentityChange
          ) {
            t(e);
          }
        };
        t.prototype.diff = function(t) {
          if (t == null) {
            t = [];
          }
          if (!$e(t)) {
            throw new Error(
              "Error trying to diff '" +
                bt(t) +
                "'. Only arrays and iterables are allowed"
            );
          }
          if (this.check(t)) {
            return this;
          } else {
            return null;
          }
        };
        t.prototype.onDestroy = function() {};
        t.prototype.check = function(t) {
          var e = this;
          this._reset();
          var n;
          var r;
          var o;
          var i = this._itHead;
          var a = false;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (var u = 0; u < this.length; u++) {
              o = this._trackByFn(u, (r = t[u]));
              if (i !== null && We(i.trackById, o)) {
                if (a) {
                  i = this._verifyReinsertion(i, r, o, u);
                }
                if (!We(i.item, r)) {
                  this._addIdentityChange(i, r);
                }
              } else {
                i = this._mismatch(i, r, o, u);
                a = true;
              }
              i = i._next;
            }
          } else {
            n = 0;
            (function(t, e) {
              if (Array.isArray(t)) {
                for (var n = 0; n < t.length; n++) {
                  e(t[n]);
                }
              } else {
                var r = t[Ge()]();
                for (var o = void 0; !(o = r.next()).done; ) {
                  e(o.value);
                }
              }
            })(t, function(t) {
              o = e._trackByFn(n, t);
              if (i !== null && We(i.trackById, o)) {
                if (a) {
                  i = e._verifyReinsertion(i, t, o, n);
                }
                if (!We(i.item, t)) {
                  e._addIdentityChange(i, t);
                }
              } else {
                i = e._mismatch(i, t, o, n);
                a = true;
              }
              i = i._next;
              n++;
            });
            this.length = n;
          }
          this._truncate(i);
          this.collection = t;
          return this.isDirty;
        };
        Object.defineProperty(t.prototype, 'isDirty', {
          get: function() {
            return (
              this._additionsHead !== null ||
              this._movesHead !== null ||
              this._removalsHead !== null ||
              this._identityChangesHead !== null
            );
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype._reset = function() {
          if (this.isDirty) {
            var t = void 0;
            var e = void 0;
            for (
              t = this._previousItHead = this._itHead;
              t !== null;
              t = t._next
            ) {
              t._nextPrevious = t._next;
            }
            for (t = this._additionsHead; t !== null; t = t._nextAdded) {
              t.previousIndex = t.currentIndex;
            }
            this._additionsHead = this._additionsTail = null;
            for (t = this._movesHead; t !== null; t = e) {
              t.previousIndex = t.currentIndex;
              e = t._nextMoved;
            }
            this._movesHead = this._movesTail = null;
            this._removalsHead = this._removalsTail = null;
            this._identityChangesHead = this._identityChangesTail = null;
          }
        };
        t.prototype._mismatch = function(t, e, n, r) {
          var o;
          if (t === null) {
            o = this._itTail;
          } else {
            o = t._prev;
            this._remove(t);
          }
          if (
            (t =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(n, r)) === null
          ) {
            if (
              (t =
                this._unlinkedRecords === null
                  ? null
                  : this._unlinkedRecords.get(n, null)) === null
            ) {
              t = this._addAfter(new Cn(e, n), o, r);
            } else {
              if (!We(t.item, e)) {
                this._addIdentityChange(t, e);
              }
              this._reinsertAfter(t, o, r);
            }
          } else {
            if (!We(t.item, e)) {
              this._addIdentityChange(t, e);
            }
            this._moveAfter(t, o, r);
          }
          return t;
        };
        t.prototype._verifyReinsertion = function(t, e, n, r) {
          var o =
            this._unlinkedRecords === null
              ? null
              : this._unlinkedRecords.get(n, null);
          if (o === null) {
            if (t.currentIndex != r) {
              t.currentIndex = r;
              this._addToMoves(t, r);
            }
          } else {
            t = this._reinsertAfter(o, t._prev, r);
          }
          return t;
        };
        t.prototype._truncate = function(t) {
          while (t !== null) {
            var e = t._next;
            this._addToRemovals(this._unlink(t));
            t = e;
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
        };
        t.prototype._reinsertAfter = function(t, e, n) {
          if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.remove(t);
          }
          var r = t._prevRemoved;
          var o = t._nextRemoved;
          if (r === null) {
            this._removalsHead = o;
          } else {
            r._nextRemoved = o;
          }
          if (o === null) {
            this._removalsTail = r;
          } else {
            o._prevRemoved = r;
          }
          this._insertAfter(t, e, n);
          this._addToMoves(t, n);
          return t;
        };
        t.prototype._moveAfter = function(t, e, n) {
          this._unlink(t);
          this._insertAfter(t, e, n);
          this._addToMoves(t, n);
          return t;
        };
        t.prototype._addAfter = function(t, e, n) {
          this._insertAfter(t, e, n);
          this._additionsTail =
            this._additionsTail === null
              ? (this._additionsHead = t)
              : (this._additionsTail._nextAdded = t);
          return t;
        };
        t.prototype._insertAfter = function(t, e, n) {
          var r = e === null ? this._itHead : e._next;
          t._next = r;
          t._prev = e;
          if (r === null) {
            this._itTail = t;
          } else {
            r._prev = t;
          }
          if (e === null) {
            this._itHead = t;
          } else {
            e._next = t;
          }
          if (this._linkedRecords === null) {
            this._linkedRecords = new En();
          }
          this._linkedRecords.put(t);
          t.currentIndex = n;
          return t;
        };
        t.prototype._remove = function(t) {
          return this._addToRemovals(this._unlink(t));
        };
        t.prototype._unlink = function(t) {
          if (this._linkedRecords !== null) {
            this._linkedRecords.remove(t);
          }
          var e = t._prev;
          var n = t._next;
          if (e === null) {
            this._itHead = n;
          } else {
            e._next = n;
          }
          if (n === null) {
            this._itTail = e;
          } else {
            n._prev = e;
          }
          return t;
        };
        t.prototype._addToMoves = function(t, e) {
          if (t.previousIndex === e) {
            return t;
          } else {
            this._movesTail =
              this._movesTail === null
                ? (this._movesHead = t)
                : (this._movesTail._nextMoved = t);
            return t;
          }
        };
        t.prototype._addToRemovals = function(t) {
          if (this._unlinkedRecords === null) {
            this._unlinkedRecords = new En();
          }
          this._unlinkedRecords.put(t);
          t.currentIndex = null;
          t._nextRemoved = null;
          if (this._removalsTail === null) {
            this._removalsTail = this._removalsHead = t;
            t._prevRemoved = null;
          } else {
            t._prevRemoved = this._removalsTail;
            this._removalsTail = this._removalsTail._nextRemoved = t;
          }
          return t;
        };
        t.prototype._addIdentityChange = function(t, e) {
          t.item = e;
          this._identityChangesTail =
            this._identityChangesTail === null
              ? (this._identityChangesHead = t)
              : (this._identityChangesTail._nextIdentityChange = t);
          return t;
        };
        return t;
      })();
      var Cn = function(t, e) {
        this.item = t;
        this.trackById = e;
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
      };
      var xn = (function() {
        function t() {
          this._head = null;
          this._tail = null;
        }
        t.prototype.add = function(t) {
          if (this._head === null) {
            this._head = this._tail = t;
            t._nextDup = null;
            t._prevDup = null;
          } else {
            this._tail._nextDup = t;
            t._prevDup = this._tail;
            t._nextDup = null;
            this._tail = t;
          }
        };
        t.prototype.get = function(t, e) {
          for (var n = this._head; n !== null; n = n._nextDup) {
            if ((e === null || e <= n.currentIndex) && We(n.trackById, t)) {
              return n;
            }
          }
          return null;
        };
        t.prototype.remove = function(t) {
          var e = t._prevDup;
          var n = t._nextDup;
          if (e === null) {
            this._head = n;
          } else {
            e._nextDup = n;
          }
          if (n === null) {
            this._tail = e;
          } else {
            n._prevDup = e;
          }
          return this._head === null;
        };
        return t;
      })();
      var En = (function() {
        function t() {
          this.map = new Map();
        }
        t.prototype.put = function(t) {
          var e = t.trackById;
          var n = this.map.get(e);
          if (!n) {
            n = new xn();
            this.map.set(e, n);
          }
          n.add(t);
        };
        t.prototype.get = function(t, e) {
          var n = this.map.get(t);
          if (n) {
            return n.get(t, e);
          } else {
            return null;
          }
        };
        t.prototype.remove = function(t) {
          var e = t.trackById;
          if (this.map.get(e).remove(t)) {
            this.map.delete(e);
          }
          return t;
        };
        Object.defineProperty(t.prototype, 'isEmpty', {
          get: function() {
            return this.map.size === 0;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.clear = function() {
          this.map.clear();
        };
        return t;
      })();
      var On = (function() {
        function t() {}
        t.prototype.supports = function(t) {
          return t instanceof Map || Je(t);
        };
        t.prototype.create = function() {
          return new Tn();
        };
        return t;
      })();
      var Tn = (function() {
        function t() {
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
        Object.defineProperty(t.prototype, 'isDirty', {
          get: function() {
            return (
              this._additionsHead !== null ||
              this._changesHead !== null ||
              this._removalsHead !== null
            );
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.forEachItem = function(t) {
          for (var e = this._mapHead; e !== null; e = e._next) {
            t(e);
          }
        };
        t.prototype.forEachPreviousItem = function(t) {
          for (var e = this._previousMapHead; e !== null; e = e._nextPrevious) {
            t(e);
          }
        };
        t.prototype.forEachChangedItem = function(t) {
          for (var e = this._changesHead; e !== null; e = e._nextChanged) {
            t(e);
          }
        };
        t.prototype.forEachAddedItem = function(t) {
          for (var e = this._additionsHead; e !== null; e = e._nextAdded) {
            t(e);
          }
        };
        t.prototype.forEachRemovedItem = function(t) {
          for (var e = this._removalsHead; e !== null; e = e._nextRemoved) {
            t(e);
          }
        };
        t.prototype.diff = function(t) {
          if (t) {
            if (!(t instanceof Map) && !Je(t)) {
              throw new Error(
                "Error trying to diff '" +
                  bt(t) +
                  "'. Only maps and objects are allowed"
              );
            }
          } else {
            t = new Map();
          }
          if (this.check(t)) {
            return this;
          } else {
            return null;
          }
        };
        t.prototype.onDestroy = function() {};
        t.prototype.check = function(t) {
          var e = this;
          this._reset();
          var n = this._mapHead;
          this._appendAfter = null;
          this._forEach(t, function(t, r) {
            if (n && n.key === r) {
              e._maybeAddToChanges(n, t);
              e._appendAfter = n;
              n = n._next;
            } else {
              var o = e._getOrCreateRecordForKey(r, t);
              n = e._insertBeforeOrAppend(n, o);
            }
          });
          if (n) {
            if (n._prev) {
              n._prev._next = null;
            }
            this._removalsHead = n;
            for (var r = n; r !== null; r = r._nextRemoved) {
              if (r === this._mapHead) {
                this._mapHead = null;
              }
              this._records.delete(r.key);
              r._nextRemoved = r._next;
              r.previousValue = r.currentValue;
              r.currentValue = null;
              r._prev = null;
              r._next = null;
            }
          }
          if (this._changesTail) {
            this._changesTail._nextChanged = null;
          }
          if (this._additionsTail) {
            this._additionsTail._nextAdded = null;
          }
          return this.isDirty;
        };
        t.prototype._insertBeforeOrAppend = function(t, e) {
          if (t) {
            var n = t._prev;
            e._next = t;
            e._prev = n;
            t._prev = e;
            if (n) {
              n._next = e;
            }
            if (t === this._mapHead) {
              this._mapHead = e;
            }
            this._appendAfter = t;
            return t;
          }
          if (this._appendAfter) {
            this._appendAfter._next = e;
            e._prev = this._appendAfter;
          } else {
            this._mapHead = e;
          }
          this._appendAfter = e;
          return null;
        };
        t.prototype._getOrCreateRecordForKey = function(t, e) {
          if (this._records.has(t)) {
            var n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            var r = n._prev;
            var o = n._next;
            if (r) {
              r._next = o;
            }
            if (o) {
              o._prev = r;
            }
            n._next = null;
            n._prev = null;
            return n;
          }
          var i = new kn(t);
          this._records.set(t, i);
          i.currentValue = e;
          this._addToAdditions(i);
          return i;
        };
        t.prototype._reset = function() {
          if (this.isDirty) {
            var t = void 0;
            this._previousMapHead = this._mapHead;
            for (t = this._previousMapHead; t !== null; t = t._next) {
              t._nextPrevious = t._next;
            }
            for (t = this._changesHead; t !== null; t = t._nextChanged) {
              t.previousValue = t.currentValue;
            }
            for (t = this._additionsHead; t != null; t = t._nextAdded) {
              t.previousValue = t.currentValue;
            }
            this._changesHead = this._changesTail = null;
            this._additionsHead = this._additionsTail = null;
            this._removalsHead = null;
          }
        };
        t.prototype._maybeAddToChanges = function(t, e) {
          if (!We(e, t.currentValue)) {
            t.previousValue = t.currentValue;
            t.currentValue = e;
            this._addToChanges(t);
          }
        };
        t.prototype._addToAdditions = function(t) {
          if (this._additionsHead === null) {
            this._additionsHead = this._additionsTail = t;
          } else {
            this._additionsTail._nextAdded = t;
            this._additionsTail = t;
          }
        };
        t.prototype._addToChanges = function(t) {
          if (this._changesHead === null) {
            this._changesHead = this._changesTail = t;
          } else {
            this._changesTail._nextChanged = t;
            this._changesTail = t;
          }
        };
        t.prototype._forEach = function(t, e) {
          if (t instanceof Map) {
            t.forEach(e);
          } else {
            Object.keys(t).forEach(function(n) {
              return e(t[n], n);
            });
          }
        };
        return t;
      })();
      var kn = function(t) {
        this.key = t;
        this.previousValue = null;
        this.currentValue = null;
        this._nextPrevious = null;
        this._next = null;
        this._prev = null;
        this._nextAdded = null;
        this._nextRemoved = null;
        this._nextChanged = null;
      };
      var Pn = (function() {
        function t(t) {
          this.factories = t;
        }
        t.create = function(e, n) {
          if (n != null) {
            var r = n.factories.slice();
            e = e.concat(r);
          }
          return new t(e);
        };
        t.extend = function(e) {
          return {
            provide: t,
            useFactory: function(n) {
              if (!n) {
                throw new Error(
                  'Cannot extend IterableDiffers without a parent injector'
                );
              }
              return t.create(e, n);
            },
            deps: [[t, new dt(), new ht()]],
          };
        };
        t.prototype.find = function(t) {
          var e;
          var n = this.factories.find(function(e) {
            return e.supports(t);
          });
          if (n != null) {
            return n;
          }
          throw new Error(
            "Cannot find a differ supporting object '" +
              t +
              "' of type '" +
              ((e = t).name || typeof e) +
              "'"
          );
        };
        t.ngInjectableDef = gt({
          token: t,
          providedIn: 'root',
          factory: function() {
            return new t([new _n()]);
          },
        });
        return t;
      })();
      var An = (function() {
        function t(t) {
          this.factories = t;
        }
        t.create = function(e, n) {
          if (n) {
            var r = n.factories.slice();
            e = e.concat(r);
          }
          return new t(e);
        };
        t.extend = function(e) {
          return {
            provide: t,
            useFactory: function(n) {
              if (!n) {
                throw new Error(
                  'Cannot extend KeyValueDiffers without a parent injector'
                );
              }
              return t.create(e, n);
            },
            deps: [[t, new dt(), new ht()]],
          };
        };
        t.prototype.find = function(t) {
          var e = this.factories.find(function(e) {
            return e.supports(t);
          });
          if (e) {
            return e;
          }
          throw new Error("Cannot find a differ supporting object '" + t + "'");
        };
        t.ngInjectableDef = gt({
          token: t,
          providedIn: 'root',
          factory: function() {
            return new t([new On()]);
          },
        });
        return t;
      })();
      var In = [new On()];
      var Rn = new Pn([new _n()]);
      var Nn = new An(In);
      var jn = (function() {
        function t() {}
        t.__NG_ELEMENT_ID__ = function() {
          return Mn(t, pn);
        };
        return t;
      })();
      var Mn = cn;
      var Dn = (function() {
        function t() {}
        t.__NG_ELEMENT_ID__ = function() {
          return Vn(t, pn);
        };
        return t;
      })();
      var Vn = cn;
      var Zn = {
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
      var Kn = function() {};
      var $n = new Map();
      var Yn = '$$undefined';
      var Xn = '$$empty';
      var er = 0;
      var vr = new WeakMap();
      var xr = /^:([^:]+):(.+)$/;
      var Or = new Object();
      var Tr = Jn(De);
      var kr = Jn(It);
      var Pr = Jn(Bt);
      var Dr = new Object();
      var Ur = (function() {
        function e(e, n, r, o, i, a) {
          var u = t.call(this) || this;
          u.selector = e;
          u.componentType = n;
          u._inputs = o;
          u._outputs = i;
          u.ngContentSelectors = a;
          u.viewDefFactory = r;
          return u;
        }
        var t = nn;
        Object(r.__extends)(e, t);
        Object.defineProperty(e.prototype, 'inputs', {
          get: function() {
            var t = [];
            var e = this._inputs;
            for (var n in e) {
              t.push({ propName: n, templateName: e[n] });
            }
            return t;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'outputs', {
          get: function() {
            var t = [];
            for (var e in this._outputs) {
              t.push({ propName: e, templateName: this._outputs[e] });
            }
            return t;
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype.create = function(t, e, n, r) {
          if (!r) {
            throw new Error('ngModule should be provided');
          }
          var o = gr(this.viewDefFactory);
          var i = o.nodes[0].element.componentProvider.nodeIndex;
          var a = Zn.createRootView(t, e || [], n, o, r, Dr);
          var u = Qn(a, i).instance;
          if (n) {
            a.renderer.setAttribute(
              qn(a, 0).renderElement,
              'ng-version',
              mn.full
            );
          }
          return new Lr(a, new Br(a), u);
        };
        return e;
      })();
      var Lr = (function() {
        function e(e, n, r) {
          var o = t.call(this) || this;
          o._view = e;
          o._viewRef = n;
          o._component = r;
          o._elDef = o._view.def.nodes[0];
          o.hostView = n;
          o.changeDetectorRef = n;
          o.instance = r;
          return o;
        }
        var t = en;
        Object(r.__extends)(e, t);
        Object.defineProperty(e.prototype, 'location', {
          get: function() {
            return new pn(qn(this._view, this._elDef.nodeIndex).renderElement);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'injector', {
          get: function() {
            return new Wr(this._view, this._elDef);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'componentType', {
          get: function() {
            return this._component.constructor;
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype.destroy = function() {
          this._viewRef.destroy();
        };
        e.prototype.onDestroy = function(t) {
          this._viewRef.onDestroy(t);
        };
        return e;
      })();
      var Hr = (function() {
        function t(t, e, n) {
          this._view = t;
          this._elDef = e;
          this._data = n;
          this._embeddedViews = [];
        }
        Object.defineProperty(t.prototype, 'element', {
          get: function() {
            return new pn(this._data.renderElement);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'injector', {
          get: function() {
            return new Wr(this._view, this._elDef);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'parentInjector', {
          get: function() {
            var t = this._view;
            for (var e = this._elDef.parent; !e && t; ) {
              e = lr(t);
              t = t.parent;
            }
            if (t) {
              return new Wr(t, e);
            } else {
              return new Wr(this._view, null);
            }
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.clear = function() {
          for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
            var e = Nr(this._data, t);
            Zn.destroyView(e);
          }
        };
        t.prototype.get = function(t) {
          var e = this._embeddedViews[t];
          if (e) {
            var n = new Br(e);
            n.attachToViewContainerRef(this);
            return n;
          }
          return null;
        };
        Object.defineProperty(t.prototype, 'length', {
          get: function() {
            return this._embeddedViews.length;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.createEmbeddedView = function(t, e, n) {
          var r = t.createEmbeddedView(e || {});
          this.insert(r, n);
          return r;
        };
        t.prototype.createComponent = function(t, e, n, r, o) {
          var i = n || this.parentInjector;
          if (!o && !(t instanceof ln)) {
            o = i.get(Bt);
          }
          var a = t.create(i, r, void 0, o);
          this.insert(a.hostView, e);
          return a;
        };
        t.prototype.insert = function(t, e) {
          if (t.destroyed) {
            throw new Error(
              'Cannot insert a destroyed View in a ViewContainer!'
            );
          }
          var n;
          var r;
          var o;
          var a = t;
          var i = (n = this._data).viewContainer._embeddedViews;
          if ((r = e) == null) {
            r = i.length;
          }
          (o = a._view).viewContainerParent = this._view;
          Qt(i, r, o);
          (function(t, e) {
            var n = sr(e);
            if (n && n !== t && !(16 & e.state)) {
              e.state |= 16;
              var r = n.template._projectedViews;
              if (!r) {
                r = n.template._projectedViews = [];
              }
              r.push(e);
              (function(t, e) {
                if (!(4 & e.flags)) {
                  t.nodeFlags |= 4;
                  e.flags |= 4;
                  for (var n = e.parent; n; ) {
                    n.childFlags |= 4;
                    n = n.parent;
                  }
                }
              })(e.parent.def, e.parentNodeDef);
            }
          })(n, o);
          Zn.dirtyParentQueries(o);
          jr(n, r > 0 ? i[r - 1] : null, o);
          a.attachToViewContainerRef(this);
          return t;
        };
        t.prototype.move = function(t, e) {
          if (t.destroyed) {
            throw new Error('Cannot move a destroyed View in a ViewContainer!');
          }
          var n;
          var r;
          var i;
          var u = this._embeddedViews.indexOf(t._view);
          var o = e;
          var a = (i = (n = this._data).viewContainer._embeddedViews)[(r = u)];
          Gt(i, r);
          if (o == null) {
            o = i.length;
          }
          Qt(i, o, a);
          Zn.dirtyParentQueries(a);
          Mr(a);
          jr(n, o > 0 ? i[o - 1] : null, a);
          return t;
        };
        t.prototype.indexOf = function(t) {
          return this._embeddedViews.indexOf(t._view);
        };
        t.prototype.remove = function(t) {
          var e = Nr(this._data, t);
          if (e) {
            Zn.destroyView(e);
          }
        };
        t.prototype.detach = function(t) {
          var e = Nr(this._data, t);
          if (e) {
            return new Br(e);
          } else {
            return null;
          }
        };
        return t;
      })();
      var Br = (function() {
        function t(t) {
          this._view = t;
          this._viewContainerRef = null;
          this._appRef = null;
        }
        Object.defineProperty(t.prototype, 'rootNodes', {
          get: function() {
            mr(this._view, 0, void 0, void 0, (t = []));
            return t;
            var t;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'context', {
          get: function() {
            return this._view.context;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'destroyed', {
          get: function() {
            return (128 & this._view.state) != 0;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.markForCheck = function() {
          ir(this._view);
        };
        t.prototype.detach = function() {
          this._view.state &= -5;
        };
        t.prototype.detectChanges = function() {
          var t = this._view.root.rendererFactory;
          if (t.begin) {
            t.begin();
          }
          try {
            Zn.checkAndUpdateView(this._view);
          } finally {
            if (t.end) {
              t.end();
            }
          }
        };
        t.prototype.checkNoChanges = function() {
          Zn.checkNoChangesView(this._view);
        };
        t.prototype.reattach = function() {
          this._view.state |= 4;
        };
        t.prototype.onDestroy = function(t) {
          if (!this._view.disposables) {
            this._view.disposables = [];
          }
          this._view.disposables.push(t);
        };
        t.prototype.destroy = function() {
          if (this._appRef) {
            this._appRef.detachView(this);
          } else if (this._viewContainerRef) {
            this._viewContainerRef.detach(this._viewContainerRef.indexOf(this));
          }
          Zn.destroyView(this._view);
        };
        t.prototype.detachFromAppRef = function() {
          this._appRef = null;
          Mr(this._view);
          Zn.dirtyParentQueries(this._view);
        };
        t.prototype.attachToAppRef = function(t) {
          if (this._viewContainerRef) {
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          }
          this._appRef = t;
        };
        t.prototype.attachToViewContainerRef = function(t) {
          if (this._appRef) {
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          }
          this._viewContainerRef = t;
        };
        return t;
      })();
      var Qr = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r._parentView = e;
          r._def = n;
          return r;
        }
        var t = jn;
        Object(r.__extends)(e, t);
        e.prototype.createEmbeddedView = function(t) {
          return new Br(
            Zn.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              t
            )
          );
        };
        Object.defineProperty(e.prototype, 'elementRef', {
          get: function() {
            return new pn(
              qn(this._parentView, this._def.nodeIndex).renderElement
            );
          },
          enumerable: true,
          configurable: true,
        });
        return e;
      })();
      var Wr = (function() {
        function t(t, e) {
          this.view = t;
          this.elDef = e;
        }
        t.prototype.get = function(t, e) {
          if (e === void 0) {
            e = De.THROW_IF_NOT_FOUND;
          }
          return Zn.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && (33554432 & this.elDef.flags) != 0,
            { flags: 0, token: t, tokenKey: Jn(t) },
            e
          );
        };
        return t;
      })();
      var $r = (function() {
        function t(t) {
          this.delegate = t;
        }
        t.prototype.selectRootElement = function(t) {
          return this.delegate.selectRootElement(t);
        };
        t.prototype.createElement = function(t, e) {
          var n = Object(r.__read)(Er(e), 2);
          var o = this.delegate.createElement(n[1], n[0]);
          if (t) {
            this.delegate.appendChild(t, o);
          }
          return o;
        };
        t.prototype.createViewRoot = function(t) {
          return t;
        };
        t.prototype.createTemplateAnchor = function(t) {
          var e = this.delegate.createComment('');
          if (t) {
            this.delegate.appendChild(t, e);
          }
          return e;
        };
        t.prototype.createText = function(t, e) {
          var n = this.delegate.createText(e);
          if (t) {
            this.delegate.appendChild(t, n);
          }
          return n;
        };
        t.prototype.projectNodes = function(t, e) {
          for (var n = 0; n < e.length; n++) {
            this.delegate.appendChild(t, e[n]);
          }
        };
        t.prototype.attachViewAfter = function(t, e) {
          var n = this.delegate.parentNode(t);
          var r = this.delegate.nextSibling(t);
          for (var o = 0; o < e.length; o++) {
            this.delegate.insertBefore(n, e[o], r);
          }
        };
        t.prototype.detachView = function(t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e];
            var r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        };
        t.prototype.destroyView = function(t, e) {
          for (var n = 0; n < e.length; n++) {
            this.delegate.destroyNode(e[n]);
          }
        };
        t.prototype.listen = function(t, e, n) {
          return this.delegate.listen(t, e, n);
        };
        t.prototype.listenGlobal = function(t, e, n) {
          return this.delegate.listen(t, e, n);
        };
        t.prototype.setElementProperty = function(t, e, n) {
          this.delegate.setProperty(t, e, n);
        };
        t.prototype.setElementAttribute = function(t, e, n) {
          var o = Object(r.__read)(Er(e), 2);
          var i = o[0];
          var a = o[1];
          if (n == null) {
            this.delegate.removeAttribute(t, a, i);
          } else {
            this.delegate.setAttribute(t, a, n, i);
          }
        };
        t.prototype.setBindingDebugInfo = function(t, e, n) {};
        t.prototype.setElementClass = function(t, e, n) {
          if (n) {
            this.delegate.addClass(t, e);
          } else {
            this.delegate.removeClass(t, e);
          }
        };
        t.prototype.setElementStyle = function(t, e, n) {
          if (n == null) {
            this.delegate.removeStyle(t, e);
          } else {
            this.delegate.setStyle(t, e, n);
          }
        };
        t.prototype.invokeElementMethod = function(t, e, n) {
          t[e].apply(t, n);
        };
        t.prototype.setText = function(t, e) {
          this.delegate.setValue(t, e);
        };
        t.prototype.animate = function() {
          throw new Error('Renderer.animate is no longer supported!');
        };
        return t;
      })();
      var Yr = (function() {
        function t(t, e, n, r) {
          this._moduleType = t;
          this._parent = e;
          this._bootstrapComponents = n;
          this._def = r;
          this._destroyListeners = [];
          this._destroyed = false;
          this.injector = this;
          (function(t) {
            var e = t._def;
            var n = (t._providers = new Array(e.providers.length));
            for (var r = 0; r < e.providers.length; r++) {
              var o = e.providers[r];
              if (!(4096 & o.flags)) {
                if (n[r] === void 0) {
                  n[r] = Rr(t, o);
                }
              }
            }
          })(this);
        }
        t.prototype.get = function(t, e, n) {
          if (e === void 0) {
            e = De.THROW_IF_NOT_FOUND;
          }
          if (n === void 0) {
            n = yt.Default;
          }
          var r = 0;
          if (n & yt.SkipSelf) {
            r |= 1;
          } else if (n & yt.Self) {
            r |= 4;
          }
          return Ir(this, { token: t, tokenKey: Jn(t), flags: r }, e);
        };
        Object.defineProperty(t.prototype, 'instance', {
          get: function() {
            return this.get(this._moduleType);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'componentFactoryResolver', {
          get: function() {
            return this.get(un);
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.destroy = function() {
          if (this._destroyed) {
            throw new Error(
              'The ng module ' +
                bt(this.instance.constructor) +
                ' has already been destroyed.'
            );
          }
          this._destroyed = true;
          (function(t, e) {
            var n = t._def;
            var r = new Set();
            for (var o = 0; o < n.providers.length; o++) {
              if (131072 & n.providers[o].flags) {
                var i = t._providers[o];
                if (i && i !== Or) {
                  var a = i.ngOnDestroy;
                  if (typeof a == 'function' && !r.has(i)) {
                    a.apply(i);
                    r.add(i);
                  }
                }
              }
            }
          })(this);
          this._destroyListeners.forEach(function(t) {
            return t();
          });
        };
        t.prototype.onDestroy = function(t) {
          this._destroyListeners.push(t);
        };
        return t;
      })();
      var Xr = Jn(fn);
      var to = Jn(vn);
      var eo = Jn(pn);
      var no = Jn(Dn);
      var ro = Jn(jn);
      var oo = Jn(Re);
      var io = Jn(De);
      var ao = Jn(It);
      var go = {};
      var Eo = new At('SCHEDULER_TOKEN', {
        providedIn: 'root',
        factory: function() {
          return Zt;
        },
      });
      var So = {};
      var Oo = (function() {
        var t = {};
        t[(t.LocaleId = 0)] = 'LocaleId';
        t[(t.DayPeriodsFormat = 1)] = 'DayPeriodsFormat';
        t[(t.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone';
        t[(t.DaysFormat = 3)] = 'DaysFormat';
        t[(t.DaysStandalone = 4)] = 'DaysStandalone';
        t[(t.MonthsFormat = 5)] = 'MonthsFormat';
        t[(t.MonthsStandalone = 6)] = 'MonthsStandalone';
        t[(t.Eras = 7)] = 'Eras';
        t[(t.FirstDayOfWeek = 8)] = 'FirstDayOfWeek';
        t[(t.WeekendRange = 9)] = 'WeekendRange';
        t[(t.DateFormat = 10)] = 'DateFormat';
        t[(t.TimeFormat = 11)] = 'TimeFormat';
        t[(t.DateTimeFormat = 12)] = 'DateTimeFormat';
        t[(t.NumberSymbols = 13)] = 'NumberSymbols';
        t[(t.NumberFormats = 14)] = 'NumberFormats';
        t[(t.CurrencySymbol = 15)] = 'CurrencySymbol';
        t[(t.CurrencyName = 16)] = 'CurrencyName';
        t[(t.Currencies = 17)] = 'Currencies';
        t[(t.PluralCase = 18)] = 'PluralCase';
        t[(t.ExtraData = 19)] = 'ExtraData';
        return t;
      })();
      var To = void 0;
      var ko = [
        'en',
        [['a', 'p'], ['AM', 'PM'], To],
        [['AM', 'PM'], To, To],
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
        To,
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
        To,
        [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', To, "{1} 'at' {0}", To],
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
        function(t) {
          var e = Math.floor(Math.abs(t));
          var n = t.toString().replace(/^[^.]*\.?/, '').length;
          if (e === 1 && n === 0) {
            return 1;
          } else {
            return 5;
          }
        },
      ];
      var Po = 'en-US';
      var Io = (function() {
        function e(e) {
          if (e === void 0) {
            e = false;
          }
          var n = t.call(this) || this;
          n.__isAsync = e;
          return n;
        }
        var t = k;
        Object(r.__extends)(e, t);
        e.prototype.emit = function(e) {
          t.prototype.next.call(this, e);
        };
        e.prototype.subscribe = function(e, n, r) {
          var o;
          var i = function(t) {
            return null;
          };
          var a = function() {
            return null;
          };
          if (e && typeof e == 'object') {
            o = this.__isAsync
              ? function(t) {
                  setTimeout(function() {
                    return e.next(t);
                  });
                }
              : function(t) {
                  e.next(t);
                };
            if (e.error) {
              i = this.__isAsync
                ? function(t) {
                    setTimeout(function() {
                      return e.error(t);
                    });
                  }
                : function(t) {
                    e.error(t);
                  };
            }
            if (e.complete) {
              a = this.__isAsync
                ? function() {
                    setTimeout(function() {
                      return e.complete();
                    });
                  }
                : function() {
                    e.complete();
                  };
            }
          } else {
            o = this.__isAsync
              ? function(t) {
                  setTimeout(function() {
                    return e(t);
                  });
                }
              : function(t) {
                  e(t);
                };
            if (n) {
              i = this.__isAsync
                ? function(t) {
                    setTimeout(function() {
                      return n(t);
                    });
                  }
                : function(t) {
                    n(t);
                  };
            }
            if (r) {
              a = this.__isAsync
                ? function() {
                    setTimeout(function() {
                      return r();
                    });
                  }
                : function() {
                    r();
                  };
            }
          }
          var u = t.prototype.subscribe.call(this, o, i, a);
          if (e instanceof l) {
            e.add(u);
          }
          return u;
        };
        return e;
      })();
      var No = (function() {
        function t() {
          this.dirty = true;
          this._results = [];
          this.changes = new Io();
          this.length = 0;
          var e = Ge();
          var n = t.prototype;
          if (!n[e]) {
            n[e] = Ro;
          }
        }
        t.prototype.map = function(t) {
          return this._results.map(t);
        };
        t.prototype.filter = function(t) {
          return this._results.filter(t);
        };
        t.prototype.find = function(t) {
          return this._results.find(t);
        };
        t.prototype.reduce = function(t, e) {
          return this._results.reduce(t, e);
        };
        t.prototype.forEach = function(t) {
          this._results.forEach(t);
        };
        t.prototype.some = function(t) {
          return this._results.some(t);
        };
        t.prototype.toArray = function() {
          return this._results.slice();
        };
        t.prototype.toString = function() {
          return this._results.toString();
        };
        t.prototype.reset = function(t) {
          this._results = (function t(e, n) {
            if (n === void 0) {
              n = e;
            }
            for (var r = 0; r < e.length; r++) {
              var o = e[r];
              if (Array.isArray(o)) {
                if (n === e) {
                  n = e.slice(0, r);
                }
                t(o, n);
              } else if (n !== e) {
                n.push(o);
              }
            }
            return n;
          })(t);
          this.dirty = false;
          this.length = this._results.length;
          this.last = this._results[this.length - 1];
          this.first = this._results[0];
        };
        t.prototype.notifyOnChanges = function() {
          this.changes.emit(this);
        };
        t.prototype.setDirty = function() {
          this.dirty = true;
        };
        t.prototype.destroy = function() {
          this.changes.complete();
          this.changes.unsubscribe();
        };
        return t;
      })();
      var jo = ct('Input', function(t) {
        return { bindingPropertyName: t };
      });
      var Mo = ct('HostBinding', function(t) {
        return { hostPropertyName: t };
      });
      var Do = new At('Application Initializer');
      var Vo = (function() {
        function t(t) {
          var e = this;
          this.appInits = t;
          this.initialized = false;
          this.done = false;
          this.donePromise = new Promise(function(t, n) {
            e.resolve = t;
            e.reject = n;
          });
        }
        t.prototype.runInitializers = function() {
          var t = this;
          if (!this.initialized) {
            var e = [];
            var n = function() {
              t.done = true;
              t.resolve();
            };
            if (this.appInits) {
              for (var r = 0; r < this.appInits.length; r++) {
                var o = this.appInits[r]();
                if (Ye(o)) {
                  e.push(o);
                }
              }
            }
            Promise.all(e)
              .then(function() {
                n();
              })
              .catch(function(e) {
                t.reject(e);
              });
            if (e.length === 0) {
              n();
            }
            this.initialized = true;
          }
        };
        return t;
      })();
      var Uo = new At('AppId');
      var Ho = new At('Platform Initializer');
      var zo = new At('Platform ID');
      var Bo = new At('appBootstrapListener');
      var qo = (function() {
        function t() {}
        t.prototype.log = function(t) {
          console.log(t);
        };
        t.prototype.warn = function(t) {
          console.warn(t);
        };
        return t;
      })();
      var Qo = new At('LocaleId');
      var Go = false;
      var Zo;
      var Ko;
      var $o = Wo;
      var Jo = Wo;
      var Yo = Wo;
      var Xo = Wo;
      var ti = (function() {
        function t() {
          this.compileModuleSync = $o;
          this.compileModuleAsync = Jo;
          this.compileModuleAndAllComponentsSync = Yo;
          this.compileModuleAndAllComponentsAsync = Xo;
        }
        t.prototype.clearCache = function() {};
        t.prototype.clearCacheFor = function(t) {};
        t.prototype.getModuleId = function(t) {};
        return t;
      })();
      var ei = function() {};
      var ri = ni();
      var ii = ri
        ? function(t, e) {
            if (e === void 0) {
              e = null;
            }
            return Ko.createScope(t, e);
          }
        : function(t, e) {
            return oi;
          };
      var ai = ri
        ? function(t, e) {
            Zo.leaveScope(t, e);
            return e;
          }
        : function(t, e) {
            return e;
          };
      var ui = Promise.resolve(0);
      var li = (function() {
        function t(t) {
          var e;
          var n = t.enableLongStackTrace;
          var r = n !== void 0 && n;
          this.hasPendingMicrotasks = false;
          this.hasPendingMacrotasks = false;
          this.isStable = true;
          this.onUnstable = new Io(false);
          this.onMicrotaskEmpty = new Io(false);
          this.onStable = new Io(false);
          this.onError = new Io(false);
          if (typeof Zone == 'undefined') {
            throw new Error('In this configuration Angular requires Zone.js');
          }
          Zone.assertZonePatched();
          this._nesting = 0;
          this._outer = this._inner = Zone.current;
          if (Zone.wtfZoneSpec) {
            this._inner = this._inner.fork(Zone.wtfZoneSpec);
          }
          if (Zone.TaskTrackingZoneSpec) {
            this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec());
          }
          if (r && Zone.longStackTraceZoneSpec) {
            this._inner = this._inner.fork(Zone.longStackTraceZoneSpec);
          }
          (e = this)._inner = e._inner.fork({
            name: 'angular',
            properties: { isAngularZone: true },
            onInvokeTask: function(t, n, r, o, i, a) {
              try {
                fi(e);
                return t.invokeTask(r, o, i, a);
              } finally {
                di(e);
              }
            },
            onInvoke: function(t, n, r, o, i, a, u) {
              try {
                fi(e);
                return t.invoke(r, o, i, a, u);
              } finally {
                di(e);
              }
            },
            onHasTask: function(t, n, r, o) {
              t.hasTask(r, o);
              if (n === r) {
                if (o.change == 'microTask') {
                  e.hasPendingMicrotasks = o.microTask;
                  hi(e);
                } else if (o.change == 'macroTask') {
                  e.hasPendingMacrotasks = o.macroTask;
                }
              }
            },
            onHandleError: function(t, n, r, o) {
              t.handleError(r, o);
              e.runOutsideAngular(function() {
                return e.onError.emit(o);
              });
              return false;
            },
          });
        }
        t.isInAngularZone = function() {
          return Zone.current.get('isAngularZone') === true;
        };
        t.assertInAngularZone = function() {
          if (!t.isInAngularZone()) {
            throw new Error('Expected to be in Angular Zone, but it is not!');
          }
        };
        t.assertNotInAngularZone = function() {
          if (t.isInAngularZone()) {
            throw new Error('Expected to not be in Angular Zone, but it is!');
          }
        };
        t.prototype.run = function(t, e, n) {
          return this._inner.run(t, e, n);
        };
        t.prototype.runTask = function(t, e, n, r) {
          var o = this._inner;
          var i = o.scheduleEventTask('NgZoneEvent: ' + r, t, pi, ci, ci);
          try {
            return o.runTask(i, e, n);
          } finally {
            o.cancelTask(i);
          }
        };
        t.prototype.runGuarded = function(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        };
        t.prototype.runOutsideAngular = function(t) {
          return this._outer.run(t);
        };
        return t;
      })();
      var pi = {};
      var yi;
      var vi = (function() {
        function t() {
          this.hasPendingMicrotasks = false;
          this.hasPendingMacrotasks = false;
          this.isStable = true;
          this.onUnstable = new Io();
          this.onMicrotaskEmpty = new Io();
          this.onStable = new Io();
          this.onError = new Io();
        }
        t.prototype.run = function(t) {
          return t();
        };
        t.prototype.runGuarded = function(t) {
          return t();
        };
        t.prototype.runOutsideAngular = function(t) {
          return t();
        };
        t.prototype.runTask = function(t) {
          return t();
        };
        return t;
      })();
      var gi = (function() {
        function t(t) {
          var e = this;
          this._ngZone = t;
          this._pendingCount = 0;
          this._isZoneStable = true;
          this._didWork = false;
          this._callbacks = [];
          this.taskTrackingZone = null;
          this._watchAngularEvents();
          t.run(function() {
            e.taskTrackingZone =
              typeof Zone == 'undefined'
                ? null
                : Zone.current.get('TaskTrackingZone');
          });
        }
        t.prototype._watchAngularEvents = function() {
          var t = this;
          this._ngZone.onUnstable.subscribe({
            next: function() {
              t._didWork = true;
              t._isZoneStable = false;
            },
          });
          this._ngZone.runOutsideAngular(function() {
            t._ngZone.onStable.subscribe({
              next: function() {
                li.assertNotInAngularZone();
                si(function() {
                  t._isZoneStable = true;
                  t._runCallbacksIfReady();
                });
              },
            });
          });
        };
        t.prototype.increasePendingRequestCount = function() {
          this._pendingCount += 1;
          this._didWork = true;
          return this._pendingCount;
        };
        t.prototype.decreasePendingRequestCount = function() {
          this._pendingCount -= 1;
          if (this._pendingCount < 0) {
            throw new Error('pending async requests below zero');
          }
          this._runCallbacksIfReady();
          return this._pendingCount;
        };
        t.prototype.isStable = function() {
          return (
            this._isZoneStable &&
            this._pendingCount === 0 &&
            !this._ngZone.hasPendingMacrotasks
          );
        };
        t.prototype._runCallbacksIfReady = function() {
          var t = this;
          if (this.isStable()) {
            si(function() {
              while (t._callbacks.length !== 0) {
                var e = t._callbacks.pop();
                clearTimeout(e.timeoutId);
                e.doneCb(t._didWork);
              }
              t._didWork = false;
            });
          } else {
            var e = this.getPendingTasks();
            this._callbacks = this._callbacks.filter(function(t) {
              return (
                !t.updateCb ||
                !t.updateCb(e) ||
                (clearTimeout(t.timeoutId), false)
              );
            });
            this._didWork = true;
          }
        };
        t.prototype.getPendingTasks = function() {
          if (this.taskTrackingZone) {
            return this.taskTrackingZone.macroTasks.map(function(t) {
              return {
                source: t.source,
                creationLocation: t.creationLocation,
                data: t.data,
              };
            });
          } else {
            return [];
          }
        };
        t.prototype.addCallback = function(t, e, n) {
          var r = this;
          var o = -1;
          if (e && e > 0) {
            o = setTimeout(function() {
              r._callbacks = r._callbacks.filter(function(t) {
                return t.timeoutId !== o;
              });
              t(r._didWork, r.getPendingTasks());
            }, e);
          }
          this._callbacks.push({ doneCb: t, timeoutId: o, updateCb: n });
        };
        t.prototype.whenStable = function(t, e, n) {
          if (n && !this.taskTrackingZone) {
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          }
          this.addCallback(t, e, n);
          this._runCallbacksIfReady();
        };
        t.prototype.getPendingRequestCount = function() {
          return this._pendingCount;
        };
        t.prototype.findProviders = function(t, e, n) {
          return [];
        };
        return t;
      })();
      var mi = (function() {
        function t() {
          this._applications = new Map();
          _i.addToWindow(this);
        }
        t.prototype.registerApplication = function(t, e) {
          this._applications.set(t, e);
        };
        t.prototype.unregisterApplication = function(t) {
          this._applications.delete(t);
        };
        t.prototype.unregisterAllApplications = function() {
          this._applications.clear();
        };
        t.prototype.getTestability = function(t) {
          return this._applications.get(t) || null;
        };
        t.prototype.getAllTestabilities = function() {
          return Array.from(this._applications.values());
        };
        t.prototype.getAllRootElements = function() {
          return Array.from(this._applications.keys());
        };
        t.prototype.findTestabilityInTree = function(t, e) {
          if (e === void 0) {
            e = true;
          }
          return _i.findTestabilityInTree(this, t, e);
        };
        return Object(r.__decorate)(
          [Object(r.__metadata)('design:paramtypes', [])],
          t
        );
      })();
      var _i = new ((function() {
        function t() {}
        t.prototype.addToWindow = function(t) {};
        t.prototype.findTestabilityInTree = function(t, e, n) {
          return null;
        };
        return t;
      })())();
      var bi = new At('AllowMultipleToken');
      var wi = function(t, e) {
        this.name = t;
        this.token = e;
      };
      var Ei = (function() {
        function t(t) {
          this._injector = t;
          this._modules = [];
          this._destroyListeners = [];
          this._destroyed = false;
        }
        t.prototype.bootstrapModuleFactory = function(t, e) {
          var n;
          var r = this;
          var o =
            (n = e ? e.ngZone : void 0) === 'noop'
              ? new vi()
              : (n === 'zone.js' ? void 0 : n) ||
                new li({ enableLongStackTrace: oe() });
          var i = [{ provide: li, useValue: o }];
          return o.run(function() {
            var e = De.create({
              providers: i,
              parent: r.injector,
              name: t.moduleType.name,
            });
            var n = t.create(e);
            var a = n.injector.get(ee, null);
            if (!a) {
              throw new Error(
                'No ErrorHandler. Is platform module (BrowserModule) included?'
              );
            }
            if (Go) {
              Ao(n.injector.get(Qo, Po) || Po);
            }
            n.onDestroy(function() {
              return Ti(r._modules, n);
            });
            o.runOutsideAngular(function() {
              return o.onError.subscribe({
                next: function(t) {
                  a.handleError(t);
                },
              });
            });
            return (function(t, e, o) {
              try {
                (a = n.injector.get(Vo)).runInitializers();
                var i = a.donePromise.then(function() {
                  r._moduleDoBootstrap(n);
                  return n;
                });
                if (Ye(i)) {
                  return i.catch(function(n) {
                    e.runOutsideAngular(function() {
                      return t.handleError(n);
                    });
                    throw n;
                  });
                } else {
                  return i;
                }
              } catch (u) {
                e.runOutsideAngular(function() {
                  return t.handleError(u);
                });
                throw u;
              }
              var a;
            })(a, o);
          });
        };
        t.prototype.bootstrapModule = function(t, e) {
          var n = this;
          if (e === void 0) {
            e = [];
          }
          var r = Si({}, e);
          return (function(t, e, n) {
            return t
              .get(ei)
              .createCompiler([e])
              .compileModuleAsync(n);
          })(this.injector, r, t).then(function(t) {
            return n.bootstrapModuleFactory(t, r);
          });
        };
        t.prototype._moduleDoBootstrap = function(t) {
          var e = t.injector.get(Oi);
          if (t._bootstrapComponents.length > 0) {
            t._bootstrapComponents.forEach(function(t) {
              return e.bootstrap(t);
            });
          } else {
            if (!t.instance.ngDoBootstrap) {
              throw new Error(
                'The module ' +
                  bt(t.instance.constructor) +
                  ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
              );
            }
            t.instance.ngDoBootstrap(e);
          }
          this._modules.push(t);
        };
        t.prototype.onDestroy = function(t) {
          this._destroyListeners.push(t);
        };
        Object.defineProperty(t.prototype, 'injector', {
          get: function() {
            return this._injector;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.destroy = function() {
          if (this._destroyed) {
            throw new Error('The platform has already been destroyed!');
          }
          this._modules.slice().forEach(function(t) {
            return t.destroy();
          });
          this._destroyListeners.forEach(function(t) {
            return t();
          });
          this._destroyed = true;
        };
        Object.defineProperty(t.prototype, 'destroyed', {
          get: function() {
            return this._destroyed;
          },
          enumerable: true,
          configurable: true,
        });
        return t;
      })();
      var Oi = (function() {
        function t(t, e, n, r, o, i) {
          var a = this;
          this._zone = t;
          this._console = e;
          this._injector = n;
          this._exceptionHandler = r;
          this._componentFactoryResolver = o;
          this._initStatus = i;
          this._bootstrapListeners = [];
          this._views = [];
          this._runningTick = false;
          this._enforceNoNewChanges = false;
          this._stable = true;
          this.componentTypes = [];
          this.components = [];
          this._enforceNoNewChanges = oe();
          this._zone.onMicrotaskEmpty.subscribe({
            next: function() {
              a._zone.run(function() {
                a.tick();
              });
            },
          });
          var u = new C(function(t) {
            a._stable =
              a._zone.isStable &&
              !a._zone.hasPendingMacrotasks &&
              !a._zone.hasPendingMicrotasks;
            a._zone.runOutsideAngular(function() {
              t.next(a._stable);
              t.complete();
            });
          });
          var s = new C(function(t) {
            var e;
            a._zone.runOutsideAngular(function() {
              e = a._zone.onStable.subscribe(function() {
                li.assertNotInAngularZone();
                si(function() {
                  if (
                    !a._stable &&
                    !a._zone.hasPendingMacrotasks &&
                    !a._zone.hasPendingMicrotasks
                  ) {
                    a._stable = true;
                    t.next(true);
                  }
                });
              });
            });
            var n = a._zone.onUnstable.subscribe(function() {
              li.assertInAngularZone();
              if (a._stable) {
                a._stable = false;
                a._zone.runOutsideAngular(function() {
                  t.next(false);
                });
              }
            });
            return function() {
              e.unsubscribe();
              n.unsubscribe();
            };
          });
          this.isStable = (function() {
            var t = [];
            for (var e = 0; e < arguments.length; e++) {
              t[e] = arguments[e];
            }
            var n = Number.POSITIVE_INFINITY;
            var r = null;
            var o = t[t.length - 1];
            if (A(o)) {
              r = t.pop();
              if (t.length > 1 && typeof t[t.length - 1] == 'number') {
                n = t.pop();
              }
            } else if (typeof o == 'number') {
              n = t.pop();
            }
            if (r === null && t.length === 1 && t[0] instanceof C) {
              return t[0];
            } else {
              return Y(n)(G(t, r));
            }
          })(
            u,
            s.pipe(function(t) {
              return X()(
                ((e = it),
                function(t) {
                  var n =
                    typeof e == 'function'
                      ? e
                      : function() {
                          return e;
                        };
                  var r = Object.create(t, rt);
                  r.source = t;
                  r.subjectFactory = n;
                  return r;
                })(t)
              );
              var e;
            })
          );
        }
        var e = t;
        t.prototype.bootstrap = function(t, e) {
          var r = this;
          if (!this._initStatus.done) {
            throw new Error(
              'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
            );
          }
          var n =
            t instanceof nn
              ? t
              : this._componentFactoryResolver.resolveComponentFactory(t);
          this.componentTypes.push(n.componentType);
          var o = n instanceof ln ? null : this._injector.get(Bt);
          var i = n.create(De.NULL, [], e || n.selector, o);
          i.onDestroy(function() {
            r._unloadComponent(i);
          });
          var a = i.injector.get(gi, null);
          if (a) {
            i.injector.get(mi).registerApplication(i.location.nativeElement, a);
          }
          this._loadComponent(i);
          if (oe()) {
            this._console.log(
              'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
            );
          }
          return i;
        };
        t.prototype.tick = function() {
          var t;
          var n;
          var o;
          var i;
          var a = this;
          if (this._runningTick) {
            throw new Error('ApplicationRef.tick is called recursively');
          }
          var u = e._tickScope();
          try {
            this._runningTick = true;
            try {
              var s = Object(r.__values)(this._views);
              for (var l = s.next(); !l.done; l = s.next()) {
                l.value.detectChanges();
              }
            } catch (h) {
              t = { error: h };
            } finally {
              try {
                if (l && !l.done && (n = s.return)) {
                  n.call(s);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
            if (this._enforceNoNewChanges) {
              try {
                var c = Object(r.__values)(this._views);
                for (var p = c.next(); !p.done; p = c.next()) {
                  p.value.checkNoChanges();
                }
              } catch (f) {
                o = { error: f };
              } finally {
                try {
                  if (p && !p.done && (i = c.return)) {
                    i.call(c);
                  }
                } finally {
                  if (o) {
                    throw o.error;
                  }
                }
              }
            }
          } catch (d) {
            this._zone.runOutsideAngular(function() {
              return a._exceptionHandler.handleError(d);
            });
          } finally {
            this._runningTick = false;
            ai(u);
          }
        };
        t.prototype.attachView = function(t) {
          var e = t;
          this._views.push(e);
          e.attachToAppRef(this);
        };
        t.prototype.detachView = function(t) {
          var e = t;
          Ti(this._views, e);
          e.detachFromAppRef();
        };
        t.prototype._loadComponent = function(t) {
          this.attachView(t.hostView);
          this.tick();
          this.components.push(t);
          this._injector
            .get(Bo, [])
            .concat(this._bootstrapListeners)
            .forEach(function(e) {
              return e(t);
            });
        };
        t.prototype._unloadComponent = function(t) {
          this.detachView(t.hostView);
          Ti(this.components, t);
        };
        t.prototype.ngOnDestroy = function() {
          this._views.slice().forEach(function(t) {
            return t.destroy();
          });
        };
        Object.defineProperty(t.prototype, 'viewCount', {
          get: function() {
            return this._views.length;
          },
          enumerable: true,
          configurable: true,
        });
        t._tickScope = ii('ApplicationRef#tick()');
        return t;
      })();
      var ki = function() {};
      var Pi = function() {};
      var Ai = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      var Ii = (function() {
        function t(t, e) {
          this._compiler = t;
          this._config = e || Ai;
        }
        t.prototype.load = function(t) {
          if (!Go && this._compiler instanceof ti) {
            return this.loadFactory(t);
          } else {
            return this.loadAndCompile(t);
          }
        };
        t.prototype.loadAndCompile = function(t) {
          var e = this;
          var o = Object(r.__read)(t.split('#'), 2);
          var i = o[0];
          var a = o[1];
          if (a === void 0) {
            a = 'default';
          }
          return n('zn8P')(i)
            .then(function(t) {
              return t[a];
            })
            .then(function(t) {
              return Ri(t, i, a);
            })
            .then(function(t) {
              return e._compiler.compileModuleAsync(t);
            });
        };
        t.prototype.loadFactory = function(t) {
          var e = Object(r.__read)(t.split('#'), 2);
          var o = e[0];
          var i = e[1];
          var a = 'NgFactory';
          if (i === void 0) {
            i = 'default';
            a = '';
          }
          return n('zn8P')(
            this._config.factoryPathPrefix + o + this._config.factoryPathSuffix
          )
            .then(function(t) {
              return t[i + a];
            })
            .then(function(t) {
              return Ri(t, o, i);
            });
        };
        return t;
      })();
      var Ni = function(t, e) {
        this.name = t;
        this.callback = e;
      };
      var ji = (function() {
        function t(t, e, n) {
          this.listeners = [];
          this.parent = null;
          this._debugContext = n;
          this.nativeNode = t;
          if (e && e instanceof Mi) {
            e.addChild(this);
          }
        }
        Object.defineProperty(t.prototype, 'injector', {
          get: function() {
            return this._debugContext.injector;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'componentInstance', {
          get: function() {
            return this._debugContext.component;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'context', {
          get: function() {
            return this._debugContext.context;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'references', {
          get: function() {
            return this._debugContext.references;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'providerTokens', {
          get: function() {
            return this._debugContext.providerTokens;
          },
          enumerable: true,
          configurable: true,
        });
        return t;
      })();
      var Mi = (function() {
        function e(e, n, r) {
          var o = t.call(this, e, n, r) || this;
          o.properties = {};
          o.attributes = {};
          o.classes = {};
          o.styles = {};
          o.childNodes = [];
          o.nativeElement = e;
          return o;
        }
        var t = ji;
        Object(r.__extends)(e, t);
        e.prototype.addChild = function(t) {
          if (t) {
            this.childNodes.push(t);
            t.parent = this;
          }
        };
        e.prototype.removeChild = function(t) {
          var e = this.childNodes.indexOf(t);
          if (e !== -1) {
            t.parent = null;
            this.childNodes.splice(e, 1);
          }
        };
        e.prototype.insertChildrenAfter = function(t, e) {
          var n;
          var o = this;
          var i = this.childNodes.indexOf(t);
          if (i !== -1) {
            (n = this.childNodes).splice.apply(
              n,
              Object(r.__spread)([i + 1, 0], e)
            );
            e.forEach(function(e) {
              if (e.parent) {
                e.parent.removeChild(e);
              }
              t.parent = o;
            });
          }
        };
        e.prototype.insertBefore = function(t, e) {
          var n = this.childNodes.indexOf(t);
          if (n === -1) {
            this.addChild(e);
          } else {
            if (e.parent) {
              e.parent.removeChild(e);
            }
            e.parent = this;
            this.childNodes.splice(n, 0, e);
          }
        };
        e.prototype.query = function(t) {
          return this.queryAll(t)[0] || null;
        };
        e.prototype.queryAll = function(t) {
          var e = [];
          (function t(e, n, r) {
            e.childNodes.forEach(function(e) {
              if (e instanceof Mi) {
                if (n(e)) {
                  r.push(e);
                }
                t(e, n, r);
              }
            });
          })(this, t, e);
          return e;
        };
        e.prototype.queryAllNodes = function(t) {
          var e = [];
          (function t(e, n, r) {
            if (e instanceof Mi) {
              e.childNodes.forEach(function(e) {
                if (n(e)) {
                  r.push(e);
                }
                if (e instanceof Mi) {
                  t(e, n, r);
                }
              });
            }
          })(this, t, e);
          return e;
        };
        Object.defineProperty(e.prototype, 'children', {
          get: function() {
            return this.childNodes.filter(function(t) {
              return t instanceof e;
            });
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype.triggerEventHandler = function(t, e) {
          this.listeners.forEach(function(n) {
            if (n.name == t) {
              n.callback(e);
            }
          });
        };
        return e;
      })();
      var Di = new Map();
      var Vi = function(t) {
        return Di.get(t) || null;
      };
      var Li = Ci(null, 'core', [
        { provide: zo, useValue: 'unknown' },
        { provide: Ei, deps: [De] },
        { provide: mi, deps: [] },
        { provide: qo, deps: [] },
      ]);
      var qi = function(t) {};
      var Ea = (function() {
        var t = {};
        t[(t.CreateViewNodes = 0)] = 'CreateViewNodes';
        t[(t.CheckNoChanges = 1)] = 'CheckNoChanges';
        t[(t.CheckNoChangesProjectedViews = 2)] =
          'CheckNoChangesProjectedViews';
        t[(t.CheckAndUpdate = 3)] = 'CheckAndUpdate';
        t[(t.CheckAndUpdateProjectedViews = 4)] =
          'CheckAndUpdateProjectedViews';
        t[(t.Destroy = 5)] = 'Destroy';
        return t;
      })();
      var Aa = false;
      var Va = new Map();
      var Ua = new Map();
      var La = new Map();
      var Ka;
      var $a;
      var Ja;
      var Ya = (function() {
        var t = {};
        t[(t.create = 0)] = 'create';
        t[(t.detectChanges = 1)] = 'detectChanges';
        t[(t.checkNoChanges = 2)] = 'checkNoChanges';
        t[(t.destroy = 3)] = 'destroy';
        t[(t.handleEvent = 4)] = 'handleEvent';
        return t;
      })();
      var uu = (function() {
        function t(t, e) {
          this.view = t;
          this.nodeIndex = e;
          if (e == null) {
            this.nodeIndex = e = 0;
          }
          this.nodeDef = t.def.nodes[e];
          var n = this.nodeDef;
          for (var r = t; n && (1 & n.flags) == 0; ) {
            n = n.parent;
          }
          if (!n) {
            while (!n && r) {
              n = lr(r);
              r = r.parent;
            }
          }
          this.elDef = n;
          this.elView = r;
        }
        Object.defineProperty(t.prototype, 'elOrCompView', {
          get: function() {
            return (
              qn(this.elView, this.elDef.nodeIndex).componentView || this.view
            );
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'injector', {
          get: function() {
            return Gr(this.elView, this.elDef);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'component', {
          get: function() {
            return this.elOrCompView.component;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'context', {
          get: function() {
            return this.elOrCompView.context;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'providerTokens', {
          get: function() {
            var t = [];
            if (this.elDef) {
              for (
                var e = this.elDef.nodeIndex + 1;
                e <= this.elDef.nodeIndex + this.elDef.childCount;
                e++
              ) {
                var n = this.elView.def.nodes[e];
                if (20224 & n.flags) {
                  t.push(n.provider.token);
                }
                e += n.childCount;
              }
            }
            return t;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'references', {
          get: function() {
            var t = {};
            if (this.elDef) {
              lu(this.elView, this.elDef, t);
              for (
                var e = this.elDef.nodeIndex + 1;
                e <= this.elDef.nodeIndex + this.elDef.childCount;
                e++
              ) {
                var n = this.elView.def.nodes[e];
                if (20224 & n.flags) {
                  lu(this.elView, n, t);
                }
                e += n.childCount;
              }
            }
            return t;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'componentRenderElement', {
          get: function() {
            var t = (function(t) {
              while (t && !pr(t)) {
                t = t.parent;
              }
              if (t.parent) {
                return qn(t.parent, lr(t).nodeIndex);
              } else {
                return null;
              }
            })(this.elOrCompView);
            if (t) {
              return t.renderElement;
            } else {
              return;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'renderNode', {
          get: function() {
            if (2 & this.nodeDef.flags) {
              return cr(this.view, this.nodeDef);
            } else {
              return cr(this.elView, this.elDef);
            }
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.logError = function(t) {
          var e;
          var n;
          var o = [];
          for (var i = 1; i < arguments.length; i++) {
            o[i - 1] = arguments[i];
          }
          if (2 & this.nodeDef.flags) {
            e = this.view.def;
            n = this.nodeDef.nodeIndex;
          } else {
            e = this.elView.def;
            n = this.elDef.nodeIndex;
          }
          var a = su(e, n);
          var u = -1;
          var s = function() {
            var e;
            if (++u === a) {
              return (e = t.error).bind.apply(e, Object(r.__spread)([t], o));
            } else {
              return Kn;
            }
          };
          e.factory(s);
          if (u < a) {
            t.error(
              'Illegal state: the ViewDefinitionFactory did not call the logger!'
            );
            t.error.apply(t, Object(r.__spread)(o));
          }
        };
        return t;
      })();
      var hu = (function() {
        function t(t) {
          this.delegate = t;
        }
        t.prototype.createRenderer = function(t, e) {
          return new fu(this.delegate.createRenderer(t, e));
        };
        t.prototype.begin = function() {
          if (this.delegate.begin) {
            this.delegate.begin();
          }
        };
        t.prototype.end = function() {
          if (this.delegate.end) {
            this.delegate.end();
          }
        };
        t.prototype.whenRenderingDone = function() {
          if (this.delegate.whenRenderingDone) {
            return this.delegate.whenRenderingDone();
          } else {
            return Promise.resolve(null);
          }
        };
        return t;
      })();
      var fu = (function() {
        function t(t) {
          this.delegate = t;
          this.debugContextFactory = pu;
          this.data = this.delegate.data;
        }
        t.prototype.createDebugContext = function(t) {
          return this.debugContextFactory(t);
        };
        t.prototype.destroyNode = function(t) {
          var e = Vi(t);
          (function() {
            var t = e;
            Di.delete(t.nativeNode);
          })();
          if (e instanceof ji) {
            e.listeners.length = 0;
          }
          if (this.delegate.destroyNode) {
            this.delegate.destroyNode(t);
          }
        };
        t.prototype.destroy = function() {
          this.delegate.destroy();
        };
        t.prototype.createElement = function(t, e) {
          var n = this.delegate.createElement(t, e);
          var r = this.createDebugContext(n);
          if (r) {
            var o = new Mi(n, null, r);
            o.name = t;
            Ui(o);
          }
          return n;
        };
        t.prototype.createComment = function(t) {
          var e = this.delegate.createComment(t);
          var n = this.createDebugContext(e);
          if (n) {
            Ui(new ji(e, null, n));
          }
          return e;
        };
        t.prototype.createText = function(t) {
          var e = this.delegate.createText(t);
          var n = this.createDebugContext(e);
          if (n) {
            Ui(new ji(e, null, n));
          }
          return e;
        };
        t.prototype.appendChild = function(t, e) {
          var n = Vi(t);
          var r = Vi(e);
          if (n && r && n instanceof Mi) {
            n.addChild(r);
          }
          this.delegate.appendChild(t, e);
        };
        t.prototype.insertBefore = function(t, e, n) {
          var r = Vi(t);
          var o = Vi(e);
          var i = Vi(n);
          if (r && o && r instanceof Mi) {
            r.insertBefore(i, o);
          }
          this.delegate.insertBefore(t, e, n);
        };
        t.prototype.removeChild = function(t, e) {
          var n = Vi(t);
          var r = Vi(e);
          if (n && r && n instanceof Mi) {
            n.removeChild(r);
          }
          this.delegate.removeChild(t, e);
        };
        t.prototype.selectRootElement = function(t, e) {
          var n = this.delegate.selectRootElement(t, e);
          var r = pu();
          if (r) {
            Ui(new Mi(n, null, r));
          }
          return n;
        };
        t.prototype.setAttribute = function(t, e, n, r) {
          var o = Vi(t);
          if (o && o instanceof Mi) {
            o.attributes[r ? r + ':' + e : e] = n;
          }
          this.delegate.setAttribute(t, e, n, r);
        };
        t.prototype.removeAttribute = function(t, e, n) {
          var r = Vi(t);
          if (r && r instanceof Mi) {
            r.attributes[n ? n + ':' + e : e] = null;
          }
          this.delegate.removeAttribute(t, e, n);
        };
        t.prototype.addClass = function(t, e) {
          var n = Vi(t);
          if (n && n instanceof Mi) {
            n.classes[e] = true;
          }
          this.delegate.addClass(t, e);
        };
        t.prototype.removeClass = function(t, e) {
          var n = Vi(t);
          if (n && n instanceof Mi) {
            n.classes[e] = false;
          }
          this.delegate.removeClass(t, e);
        };
        t.prototype.setStyle = function(t, e, n, r) {
          var o = Vi(t);
          if (o && o instanceof Mi) {
            o.styles[e] = n;
          }
          this.delegate.setStyle(t, e, n, r);
        };
        t.prototype.removeStyle = function(t, e, n) {
          var r = Vi(t);
          if (r && r instanceof Mi) {
            r.styles[e] = null;
          }
          this.delegate.removeStyle(t, e, n);
        };
        t.prototype.setProperty = function(t, e, n) {
          var r = Vi(t);
          if (r && r instanceof Mi) {
            r.properties[e] = n;
          }
          this.delegate.setProperty(t, e, n);
        };
        t.prototype.listen = function(t, e, n) {
          if (typeof t != 'string') {
            var r = Vi(t);
            if (r) {
              r.listeners.push(new Ni(e, n));
            }
          }
          return this.delegate.listen(t, e, n);
        };
        t.prototype.parentNode = function(t) {
          return this.delegate.parentNode(t);
        };
        t.prototype.nextSibling = function(t) {
          return this.delegate.nextSibling(t);
        };
        t.prototype.setValue = function(t, e) {
          return this.delegate.setValue(t, e);
        };
        return t;
      })();
      var yu = (function() {
        function e(e, n, r) {
          var o = t.call(this) || this;
          o.moduleType = e;
          o._bootstrapComponents = n;
          o._ngModuleDefFactory = r;
          return o;
        }
        var t = qt;
        Object(r.__extends)(e, t);
        e.prototype.create = function(t) {
          (function() {
            if (!Aa) {
              Aa = true;
              var t = oe()
                ? {
                    setCurrentNode: Xa,
                    createRootView: Ra,
                    createEmbeddedView: ja,
                    createComponentView: Ma,
                    createNgModuleRef: Da,
                    overrideProvider: Fa,
                    overrideComponentView: Ha,
                    clearOverrides: za,
                    checkAndUpdateView: Ga,
                    checkNoChangesView: Wa,
                    destroyView: Za,
                    createDebugContext: function(t, e) {
                      return new uu(t, e);
                    },
                    handleEvent: tu,
                    updateDirectives: eu,
                    updateRenderer: nu,
                  }
                : {
                    setCurrentNode: function() {},
                    createRootView: Ia,
                    createEmbeddedView: pa,
                    createComponentView: fa,
                    createNgModuleRef: Jr,
                    overrideProvider: Kn,
                    overrideComponentView: Kn,
                    clearOverrides: Kn,
                    checkAndUpdateView: ma,
                    checkNoChangesView: ga,
                    destroyView: xa,
                    createDebugContext: function(t, e) {
                      return new uu(t, e);
                    },
                    handleEvent: function(t, e, n, r) {
                      return t.def.handleEvent(t, e, n, r);
                    },
                    updateDirectives: function(t, e) {
                      return t.def.updateDirectives(e === 0 ? qa : Qa, t);
                    },
                    updateRenderer: function(t, e) {
                      return t.def.updateRenderer(e === 0 ? qa : Qa, t);
                    },
                  };
              Zn.setCurrentNode = t.setCurrentNode;
              Zn.createRootView = t.createRootView;
              Zn.createEmbeddedView = t.createEmbeddedView;
              Zn.createComponentView = t.createComponentView;
              Zn.createNgModuleRef = t.createNgModuleRef;
              Zn.overrideProvider = t.overrideProvider;
              Zn.overrideComponentView = t.overrideComponentView;
              Zn.clearOverrides = t.clearOverrides;
              Zn.checkAndUpdateView = t.checkAndUpdateView;
              Zn.checkNoChangesView = t.checkNoChangesView;
              Zn.destroyView = t.destroyView;
              Zn.resolveDep = mo;
              Zn.createDebugContext = t.createDebugContext;
              Zn.handleEvent = t.handleEvent;
              Zn.updateDirectives = t.updateDirectives;
              Zn.updateRenderer = t.updateRenderer;
              Zn.dirtyParentQueries = Ji;
            }
          })();
          var e = (function(t) {
            var e = Array.from(t.providers);
            var n = Array.from(t.modules);
            var r = {};
            for (var o in t.providersByKey) {
              r[o] = t.providersByKey[o];
            }
            return {
              factory: t.factory,
              isRoot: t.isRoot,
              providers: e,
              modules: n,
              providersByKey: r,
            };
          })(gr(this._ngModuleDefFactory));
          return Zn.createNgModuleRef(
            this.moduleType,
            t || De.NULL,
            this._bootstrapComponents,
            e
          );
        };
        return e;
      })();
      var vu = function() {};
      var gu = new C(function(t) {
        return t.complete();
      });
      var xu = (function() {
        function t(t, e) {
          this.predicate = t;
          this.thisArg = e;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new Eu(t, this.predicate, this.thisArg));
        };
        return t;
      })();
      var Eu = (function() {
        function e(e, n, r) {
          var o = t.call(this, e) || this;
          o.predicate = n;
          o.thisArg = r;
          o.count = 0;
          return o;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          var e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            this.destination.error(n);
            return;
          }
          if (e) {
            this.destination.next(t);
          }
        };
        return e;
      })();
      var Su = function() {};
      var Ou = new At('Location Initialized');
      var Tu = function() {};
      var ku = new At('appBaseHref');
      var Pu = (function() {
        function t(t, n) {
          var r = this;
          this._subject = new Io();
          this._urlChangeListeners = [];
          this._platformStrategy = t;
          var o = this._platformStrategy.getBaseHref();
          this._platformLocation = n;
          this._baseHref = e.stripTrailingSlash(Au(o));
          this._platformStrategy.onPopState(function(t) {
            r._subject.emit({
              url: r.path(true),
              pop: true,
              state: t.state,
              type: t.type,
            });
          });
        }
        var e = t;
        t.prototype.path = function(t) {
          if (t === void 0) {
            t = false;
          }
          return this.normalize(this._platformStrategy.path(t));
        };
        t.prototype.getState = function() {
          return this._platformLocation.getState();
        };
        t.prototype.isCurrentPathEqualTo = function(t, n) {
          if (n === void 0) {
            n = '';
          }
          return this.path() == this.normalize(t + e.normalizeQueryParams(n));
        };
        t.prototype.normalize = function(t) {
          return e.stripTrailingSlash(
            (function(t, e) {
              if (t && e.startsWith(t)) {
                return e.substring(t.length);
              } else {
                return e;
              }
            })(this._baseHref, Au(t))
          );
        };
        t.prototype.prepareExternalUrl = function(t) {
          if (t && t[0] !== '/') {
            t = '/' + t;
          }
          return this._platformStrategy.prepareExternalUrl(t);
        };
        t.prototype.go = function(t, n, r) {
          if (n === void 0) {
            n = '';
          }
          if (r === void 0) {
            r = null;
          }
          this._platformStrategy.pushState(r, '', t, n);
          this._notifyUrlChangeListeners(
            this.prepareExternalUrl(t + e.normalizeQueryParams(n)),
            r
          );
        };
        t.prototype.replaceState = function(t, n, r) {
          if (n === void 0) {
            n = '';
          }
          if (r === void 0) {
            r = null;
          }
          this._platformStrategy.replaceState(r, '', t, n);
          this._notifyUrlChangeListeners(
            this.prepareExternalUrl(t + e.normalizeQueryParams(n)),
            r
          );
        };
        t.prototype.forward = function() {
          this._platformStrategy.forward();
        };
        t.prototype.back = function() {
          this._platformStrategy.back();
        };
        t.prototype.onUrlChange = function(t) {
          var e = this;
          this._urlChangeListeners.push(t);
          this.subscribe(function(t) {
            e._notifyUrlChangeListeners(t.url, t.state);
          });
        };
        t.prototype._notifyUrlChangeListeners = function(t, e) {
          if (t === void 0) {
            t = '';
          }
          this._urlChangeListeners.forEach(function(n) {
            return n(t, e);
          });
        };
        t.prototype.subscribe = function(t, e, n) {
          return this._subject.subscribe({ next: t, error: e, complete: n });
        };
        t.normalizeQueryParams = function(t) {
          if (t && t[0] !== '?') {
            return '?' + t;
          } else {
            return t;
          }
        };
        t.joinWithSlash = function(t, e) {
          if (t.length == 0) {
            return e;
          }
          if (e.length == 0) {
            return t;
          }
          var n = 0;
          if (t.endsWith('/')) {
            n++;
          }
          if (e.startsWith('/')) {
            n++;
          }
          if (n == 2) {
            return t + e.substring(1);
          } else if (n == 1) {
            return t + e;
          } else {
            return t + '/' + e;
          }
        };
        t.stripTrailingSlash = function(t) {
          var e = t.match(/#|\?|$/);
          var n = (e && e.index) || t.length;
          return t.slice(0, n - (t[n - 1] === '/' ? 1 : 0)) + t.slice(n);
        };
        return t;
      })();
      var Iu = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r._platformLocation = e;
          r._baseHref = '';
          if (n != null) {
            r._baseHref = n;
          }
          return r;
        }
        var t = Tu;
        Object(r.__extends)(e, t);
        e.prototype.onPopState = function(t) {
          this._platformLocation.onPopState(t);
          this._platformLocation.onHashChange(t);
        };
        e.prototype.getBaseHref = function() {
          return this._baseHref;
        };
        e.prototype.path = function(t) {
          if (t === void 0) {
            t = false;
          }
          var e = this._platformLocation.hash;
          if (e == null) {
            e = '#';
          }
          if (e.length > 0) {
            return e.substring(1);
          } else {
            return e;
          }
        };
        e.prototype.prepareExternalUrl = function(t) {
          var e = Pu.joinWithSlash(this._baseHref, t);
          if (e.length > 0) {
            return '#' + e;
          } else {
            return e;
          }
        };
        e.prototype.pushState = function(t, e, n, r) {
          var o = this.prepareExternalUrl(n + Pu.normalizeQueryParams(r));
          if (o.length == 0) {
            o = this._platformLocation.pathname;
          }
          this._platformLocation.pushState(t, e, o);
        };
        e.prototype.replaceState = function(t, e, n, r) {
          var o = this.prepareExternalUrl(n + Pu.normalizeQueryParams(r));
          if (o.length == 0) {
            o = this._platformLocation.pathname;
          }
          this._platformLocation.replaceState(t, e, o);
        };
        e.prototype.forward = function() {
          this._platformLocation.forward();
        };
        e.prototype.back = function() {
          this._platformLocation.back();
        };
        return e;
      })();
      var Ru = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r._platformLocation = e;
          if (n == null) {
            n = r._platformLocation.getBaseHrefFromDOM();
          }
          if (n == null) {
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          }
          r._baseHref = n;
          return r;
        }
        var t = Tu;
        Object(r.__extends)(e, t);
        e.prototype.onPopState = function(t) {
          this._platformLocation.onPopState(t);
          this._platformLocation.onHashChange(t);
        };
        e.prototype.getBaseHref = function() {
          return this._baseHref;
        };
        e.prototype.prepareExternalUrl = function(t) {
          return Pu.joinWithSlash(this._baseHref, t);
        };
        e.prototype.path = function(t) {
          if (t === void 0) {
            t = false;
          }
          var e =
            this._platformLocation.pathname +
            Pu.normalizeQueryParams(this._platformLocation.search);
          var n = this._platformLocation.hash;
          if (n && t) {
            return '' + e + n;
          } else {
            return e;
          }
        };
        e.prototype.pushState = function(t, e, n, r) {
          var o = this.prepareExternalUrl(n + Pu.normalizeQueryParams(r));
          this._platformLocation.pushState(t, e, o);
        };
        e.prototype.replaceState = function(t, e, n, r) {
          var o = this.prepareExternalUrl(n + Pu.normalizeQueryParams(r));
          this._platformLocation.replaceState(t, e, o);
        };
        e.prototype.forward = function() {
          this._platformLocation.forward();
        };
        e.prototype.back = function() {
          this._platformLocation.back();
        };
        return e;
      })();
      var Nu = (function() {
        var t = {};
        t[(t.Zero = 0)] = 'Zero';
        t[(t.One = 1)] = 'One';
        t[(t.Two = 2)] = 'Two';
        t[(t.Few = 3)] = 'Few';
        t[(t.Many = 4)] = 'Many';
        t[(t.Other = 5)] = 'Other';
        return t;
      })();
      var ju = new At('UseV4Plurals');
      var Mu = function() {};
      var Du = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r.locale = e;
          r.deprecatedPluralFn = n;
          return r;
        }
        var t = Mu;
        Object(r.__extends)(e, t);
        e.prototype.getPluralCategory = function(t, e) {
          switch (this.deprecatedPluralFn
            ? this.deprecatedPluralFn(e || this.locale, t)
            : (function(t) {
                return (function(t) {
                  var e = t.toLowerCase().replace(/_/g, '-');
                  var n = So[e];
                  if (n) {
                    return n;
                  }
                  var r = e.split('-')[0];
                  if ((n = So[r])) {
                    return n;
                  }
                  if (r === 'en') {
                    return ko;
                  }
                  throw new Error(
                    'Missing locale data for the locale "' + t + '".'
                  );
                })(t)[Oo.PluralCase];
              })(e || this.locale)(t)) {
            case Nu.Zero:
              return 'zero';
            case Nu.One:
              return 'one';
            case Nu.Two:
              return 'two';
            case Nu.Few:
              return 'few';
            case Nu.Many:
              return 'many';
            default:
              return 'other';
          }
        };
        return e;
      })();
      var Uu = (function() {
        function t(t, e, n, r) {
          this.$implicit = t;
          this.ngForOf = e;
          this.index = n;
          this.count = r;
        }
        Object.defineProperty(t.prototype, 'first', {
          get: function() {
            return this.index === 0;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'last', {
          get: function() {
            return this.index === this.count - 1;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'even', {
          get: function() {
            return this.index % 2 == 0;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'odd', {
          get: function() {
            return !this.even;
          },
          enumerable: true,
          configurable: true,
        });
        return t;
      })();
      var Lu = (function() {
        function t(t, e, n) {
          this._viewContainer = t;
          this._template = e;
          this._differs = n;
          this._ngForOfDirty = true;
          this._differ = null;
        }
        Object.defineProperty(t.prototype, 'ngForOf', {
          set: function(t) {
            this._ngForOf = t;
            this._ngForOfDirty = true;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'ngForTrackBy', {
          get: function() {
            return this._trackByFn;
          },
          set: function(t) {
            if (
              oe() &&
              t != null &&
              typeof t != 'function' &&
              console &&
              console.warn
            ) {
              console.warn(
                'trackBy must be a function, but received ' +
                  JSON.stringify(t) +
                  '. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
              );
            }
            this._trackByFn = t;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'ngForTemplate', {
          set: function(t) {
            if (t) {
              this._template = t;
            }
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.ngDoCheck = function() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = false;
            var t = this._ngForOf;
            if (!this._differ && t) {
              try {
                this._differ = this._differs.find(t).create(this.ngForTrackBy);
              } catch (r) {
                throw new Error(
                  "Cannot find a differ supporting object '" +
                    t +
                    "' of type '" +
                    ((e = t).name || typeof e) +
                    "'. NgFor only supports binding to Iterables such as Arrays."
                );
              }
            }
          }
          var e;
          if (this._differ) {
            var n = this._differ.diff(this._ngForOf);
            if (n) {
              this._applyChanges(n);
            }
          }
        };
        t.prototype._applyChanges = function(t) {
          var e = this;
          var n = [];
          t.forEachOperation(function(t, r, o) {
            if (t.previousIndex == null) {
              var i = e._viewContainer.createEmbeddedView(
                e._template,
                new Uu(null, e._ngForOf, -1, -1),
                o === null ? void 0 : o
              );
              var a = new Fu(t, i);
              n.push(a);
            } else if (o == null) {
              e._viewContainer.remove(r === null ? void 0 : r);
            } else if (r !== null) {
              i = e._viewContainer.get(r);
              e._viewContainer.move(i, o);
              a = new Fu(t, i);
              n.push(a);
            }
          });
          for (var r = 0; r < n.length; r++) {
            this._perViewChange(n[r].view, n[r].record);
          }
          r = 0;
          for (var o = this._viewContainer.length; r < o; r++) {
            var i = this._viewContainer.get(r);
            i.context.index = r;
            i.context.count = o;
            i.context.ngForOf = this._ngForOf;
          }
          t.forEachIdentityChange(function(t) {
            e._viewContainer.get(t.currentIndex).context.$implicit = t.item;
          });
        };
        t.prototype._perViewChange = function(t, e) {
          t.context.$implicit = e.item;
        };
        t.ngTemplateContextGuard = function(t, e) {
          return true;
        };
        return t;
      })();
      var Fu = function(t, e) {
        this.record = t;
        this.view = e;
      };
      var Hu = (function() {
        function t(t, e) {
          this._viewContainer = t;
          this._context = new zu();
          this._thenTemplateRef = null;
          this._elseTemplateRef = null;
          this._thenViewRef = null;
          this._elseViewRef = null;
          this._thenTemplateRef = e;
        }
        Object.defineProperty(t.prototype, 'ngIf', {
          set: function(t) {
            this._context.$implicit = this._context.ngIf = t;
            this._updateView();
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'ngIfThen', {
          set: function(t) {
            Bu('ngIfThen', t);
            this._thenTemplateRef = t;
            this._thenViewRef = null;
            this._updateView();
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'ngIfElse', {
          set: function(t) {
            Bu('ngIfElse', t);
            this._elseTemplateRef = t;
            this._elseViewRef = null;
            this._updateView();
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype._updateView = function() {
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
        };
        return t;
      })();
      var zu = function() {
        this.$implicit = null;
        this.ngIf = null;
      };
      var qu = (function() {
        function t() {}
        t.prototype.transform = function(t) {
          return JSON.stringify(t, null, 2);
        };
        return t;
      })();
      var Qu = function() {};
      var Gu = new At('DocumentToken');
      var Wu = 'server';
      var Zu = (function() {
        function t() {}
        t.ngInjectableDef = gt({
          token: t,
          providedIn: 'root',
          factory: function() {
            return new Ku(Ft(Gu), window, Ft(ee));
          },
        });
        return t;
      })();
      var Ku = (function() {
        function t(t, e, n) {
          this.document = t;
          this.window = e;
          this.errorHandler = n;
          this.offset = function() {
            return [0, 0];
          };
        }
        t.prototype.setOffset = function(t) {
          this.offset = Array.isArray(t)
            ? function() {
                return t;
              }
            : t;
        };
        t.prototype.getScrollPosition = function() {
          if (this.supportScrollRestoration()) {
            return [this.window.scrollX, this.window.scrollY];
          } else {
            return [0, 0];
          }
        };
        t.prototype.scrollToPosition = function(t) {
          if (this.supportScrollRestoration()) {
            this.window.scrollTo(t[0], t[1]);
          }
        };
        t.prototype.scrollToAnchor = function(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              var e = this.document.querySelector('#' + t);
              if (e) {
                this.scrollToElement(e);
                return;
              }
              var n = this.document.querySelector("[name='" + t + "']");
              if (n) {
                this.scrollToElement(n);
                return;
              }
            } catch (r) {
              this.errorHandler.handleError(r);
            }
          }
        };
        t.prototype.setHistoryScrollRestoration = function(t) {
          if (this.supportScrollRestoration()) {
            var e = this.window.history;
            if (e && e.scrollRestoration) {
              e.scrollRestoration = t;
            }
          }
        };
        t.prototype.scrollToElement = function(t) {
          var e = t.getBoundingClientRect();
          var n = e.left + this.window.pageXOffset;
          var r = e.top + this.window.pageYOffset;
          var o = this.offset();
          this.window.scrollTo(n - o[0], r - o[1]);
        };
        t.prototype.supportScrollRestoration = function() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return false;
          }
        };
        return t;
      })();
      var $u = function() {};
      var Ju = function() {};
      var Yu = (function() {
        function t(t) {
          var e = this;
          this.normalizedNames = new Map();
          this.lazyUpdate = null;
          if (t) {
            this.lazyInit =
              typeof t == 'string'
                ? function() {
                    e.headers = new Map();
                    t.split('\n').forEach(function(t) {
                      var n = t.indexOf(':');
                      if (n > 0) {
                        var r = t.slice(0, n);
                        var o = r.toLowerCase();
                        var i = t.slice(n + 1).trim();
                        e.maybeSetNormalizedName(r, o);
                        if (e.headers.has(o)) {
                          e.headers.get(o).push(i);
                        } else {
                          e.headers.set(o, [i]);
                        }
                      }
                    });
                  }
                : function() {
                    e.headers = new Map();
                    Object.keys(t).forEach(function(n) {
                      var r = t[n];
                      var o = n.toLowerCase();
                      if (typeof r == 'string') {
                        r = [r];
                      }
                      if (r.length > 0) {
                        e.headers.set(o, r);
                        e.maybeSetNormalizedName(n, o);
                      }
                    });
                  };
          } else {
            this.headers = new Map();
          }
        }
        t.prototype.has = function(t) {
          this.init();
          return this.headers.has(t.toLowerCase());
        };
        t.prototype.get = function(t) {
          this.init();
          var e = this.headers.get(t.toLowerCase());
          if (e && e.length > 0) {
            return e[0];
          } else {
            return null;
          }
        };
        t.prototype.keys = function() {
          this.init();
          return Array.from(this.normalizedNames.values());
        };
        t.prototype.getAll = function(t) {
          this.init();
          return this.headers.get(t.toLowerCase()) || null;
        };
        t.prototype.append = function(t, e) {
          return this.clone({ name: t, value: e, op: 'a' });
        };
        t.prototype.set = function(t, e) {
          return this.clone({ name: t, value: e, op: 's' });
        };
        t.prototype.delete = function(t, e) {
          return this.clone({ name: t, value: e, op: 'd' });
        };
        t.prototype.maybeSetNormalizedName = function(t, e) {
          if (!this.normalizedNames.has(e)) {
            this.normalizedNames.set(e, t);
          }
        };
        t.prototype.init = function() {
          var e = this;
          if (this.lazyInit) {
            if (this.lazyInit instanceof t) {
              this.copyFrom(this.lazyInit);
            } else {
              this.lazyInit();
            }
            this.lazyInit = null;
            if (this.lazyUpdate) {
              this.lazyUpdate.forEach(function(t) {
                return e.applyUpdate(t);
              });
              this.lazyUpdate = null;
            }
          }
        };
        t.prototype.copyFrom = function(t) {
          var e = this;
          t.init();
          Array.from(t.headers.keys()).forEach(function(n) {
            e.headers.set(n, t.headers.get(n));
            e.normalizedNames.set(n, t.normalizedNames.get(n));
          });
        };
        t.prototype.clone = function(e) {
          var n = new t();
          n.lazyInit =
            this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this;
          n.lazyUpdate = (this.lazyUpdate || []).concat([e]);
          return n;
        };
        t.prototype.applyUpdate = function(t) {
          var e = t.name.toLowerCase();
          switch (t.op) {
            case 'a':
            case 's':
              var n = t.value;
              if (typeof n == 'string') {
                n = [n];
              }
              if (n.length === 0) {
                return;
              }
              this.maybeSetNormalizedName(t.name, e);
              var o = (t.op === 'a' ? this.headers.get(e) : void 0) || [];
              o.push.apply(o, Object(r.__spread)(n));
              this.headers.set(e, o);
              break;
            case 'd':
              var i = t.value;
              if (i) {
                var a = this.headers.get(e);
                if (!a) {
                  return;
                }
                if (
                  (a = a.filter(function(t) {
                    return i.indexOf(t) === -1;
                  })).length === 0
                ) {
                  this.headers.delete(e);
                  this.normalizedNames.delete(e);
                } else {
                  this.headers.set(e, a);
                }
              } else {
                this.headers.delete(e);
                this.normalizedNames.delete(e);
              }
          }
        };
        t.prototype.forEach = function(t) {
          var e = this;
          this.init();
          Array.from(this.normalizedNames.keys()).forEach(function(n) {
            return t(e.normalizedNames.get(n), e.headers.get(n));
          });
        };
        return t;
      })();
      var Xu = (function() {
        function t() {}
        t.prototype.encodeKey = function(t) {
          return ts(t);
        };
        t.prototype.encodeValue = function(t) {
          return ts(t);
        };
        t.prototype.decodeKey = function(t) {
          return decodeURIComponent(t);
        };
        t.prototype.decodeValue = function(t) {
          return decodeURIComponent(t);
        };
        return t;
      })();
      var es = (function() {
        function t(t) {
          var e;
          var n;
          var o;
          var i = this;
          if (t === void 0) {
            t = {};
          }
          this.updates = null;
          this.cloneFrom = null;
          this.encoder = t.encoder || new Xu();
          if (t.fromString) {
            if (t.fromObject) {
              throw new Error('Cannot specify both fromString and fromObject.');
            }
            this.map = ((e = t.fromString),
            (n = this.encoder),
            (o = new Map()),
            e.length > 0 &&
              e.split('&').forEach(function(t) {
                var e = t.indexOf('=');
                var i = Object(r.__read)(
                  e == -1
                    ? [n.decodeKey(t), '']
                    : [
                        n.decodeKey(t.slice(0, e)),
                        n.decodeValue(t.slice(e + 1)),
                      ],
                  2
                );
                var a = i[0];
                var u = i[1];
                var s = o.get(a) || [];
                s.push(u);
                o.set(a, s);
              }),
            o);
          } else if (t.fromObject) {
            this.map = new Map();
            Object.keys(t.fromObject).forEach(function(e) {
              var n = t.fromObject[e];
              i.map.set(e, Array.isArray(n) ? n : [n]);
            });
          } else {
            this.map = null;
          }
        }
        t.prototype.has = function(t) {
          this.init();
          return this.map.has(t);
        };
        t.prototype.get = function(t) {
          this.init();
          var e = this.map.get(t);
          if (e) {
            return e[0];
          } else {
            return null;
          }
        };
        t.prototype.getAll = function(t) {
          this.init();
          return this.map.get(t) || null;
        };
        t.prototype.keys = function() {
          this.init();
          return Array.from(this.map.keys());
        };
        t.prototype.append = function(t, e) {
          return this.clone({ param: t, value: e, op: 'a' });
        };
        t.prototype.set = function(t, e) {
          return this.clone({ param: t, value: e, op: 's' });
        };
        t.prototype.delete = function(t, e) {
          return this.clone({ param: t, value: e, op: 'd' });
        };
        t.prototype.toString = function() {
          var t = this;
          this.init();
          return this.keys()
            .map(function(e) {
              var n = t.encoder.encodeKey(e);
              return t.map
                .get(e)
                .map(function(e) {
                  return n + '=' + t.encoder.encodeValue(e);
                })
                .join('&');
            })
            .join('&');
        };
        t.prototype.clone = function(e) {
          var n = new t({ encoder: this.encoder });
          n.cloneFrom = this.cloneFrom || this;
          n.updates = (this.updates || []).concat([e]);
          return n;
        };
        t.prototype.init = function() {
          var t = this;
          if (this.map === null) {
            this.map = new Map();
          }
          if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function(e) {
              return t.map.set(e, t.cloneFrom.map.get(e));
            });
            this.updates.forEach(function(e) {
              switch (e.op) {
                case 'a':
                case 's':
                  var n = (e.op === 'a' ? t.map.get(e.param) : void 0) || [];
                  n.push(e.value);
                  t.map.set(e.param, n);
                  break;
                case 'd':
                  if (e.value === void 0) {
                    t.map.delete(e.param);
                    break;
                  }
                  var r = t.map.get(e.param) || [];
                  var o = r.indexOf(e.value);
                  if (o !== -1) {
                    r.splice(o, 1);
                  }
                  if (r.length > 0) {
                    t.map.set(e.param, r);
                  } else {
                    t.map.delete(e.param);
                  }
              }
            });
            this.cloneFrom = this.updates = null;
          }
        };
        return t;
      })();
      var is = (function() {
        function t(t, e, n, r) {
          var o;
          this.url = e;
          this.body = null;
          this.reportProgress = false;
          this.withCredentials = false;
          this.responseType = 'json';
          this.method = t.toUpperCase();
          if (
            (function(t) {
              switch (t) {
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
            o = r;
          } else {
            o = n;
          }
          if (o) {
            this.reportProgress = !!o.reportProgress;
            this.withCredentials = !!o.withCredentials;
            if (o.responseType) {
              this.responseType = o.responseType;
            }
            if (o.headers) {
              this.headers = o.headers;
            }
            if (o.params) {
              this.params = o.params;
            }
          }
          if (!this.headers) {
            this.headers = new Yu();
          }
          if (this.params) {
            var i = this.params.toString();
            if (i.length === 0) {
              this.urlWithParams = e;
            } else {
              var a = e.indexOf('?');
              this.urlWithParams =
                e + (a === -1 ? '?' : a < e.length - 1 ? '&' : '') + i;
            }
          } else {
            this.params = new es();
            this.urlWithParams = e;
          }
        }
        t.prototype.serializeBody = function() {
          if (this.body === null) {
            return null;
          } else if (
            ns(this.body) ||
            rs(this.body) ||
            os(this.body) ||
            typeof this.body == 'string'
          ) {
            return this.body;
          } else if (this.body instanceof es) {
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
        };
        t.prototype.detectContentTypeHeader = function() {
          if (this.body === null) {
            return null;
          } else if (os(this.body)) {
            return null;
          } else if (rs(this.body)) {
            return this.body.type || null;
          } else if (ns(this.body)) {
            return null;
          } else if (typeof this.body == 'string') {
            return 'text/plain';
          } else if (this.body instanceof es) {
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
        };
        t.prototype.clone = function(e) {
          if (e === void 0) {
            e = {};
          }
          var n = e.method || this.method;
          var r = e.url || this.url;
          var o = e.responseType || this.responseType;
          var i = e.body !== void 0 ? e.body : this.body;
          var a =
            e.withCredentials !== void 0
              ? e.withCredentials
              : this.withCredentials;
          var u =
            e.reportProgress !== void 0
              ? e.reportProgress
              : this.reportProgress;
          var s = e.headers || this.headers;
          var l = e.params || this.params;
          if (e.setHeaders !== void 0) {
            s = Object.keys(e.setHeaders).reduce(function(t, n) {
              return t.set(n, e.setHeaders[n]);
            }, s);
          }
          if (e.setParams) {
            l = Object.keys(e.setParams).reduce(function(t, n) {
              return t.set(n, e.setParams[n]);
            }, l);
          }
          return new t(n, r, i, {
            params: l,
            headers: s,
            reportProgress: u,
            responseType: o,
            withCredentials: a,
          });
        };
        return t;
      })();
      var as = (function() {
        var t = {};
        t[(t.Sent = 0)] = 'Sent';
        t[(t.UploadProgress = 1)] = 'UploadProgress';
        t[(t.ResponseHeader = 2)] = 'ResponseHeader';
        t[(t.DownloadProgress = 3)] = 'DownloadProgress';
        t[(t.Response = 4)] = 'Response';
        t[(t.User = 5)] = 'User';
        return t;
      })();
      var us = function(t, e, n) {
        if (e === void 0) {
          e = 200;
        }
        if (n === void 0) {
          n = 'OK';
        }
        this.headers = t.headers || new Yu();
        this.status = t.status !== void 0 ? t.status : e;
        this.statusText = t.statusText || n;
        this.url = t.url || null;
        this.ok = this.status >= 200 && this.status < 300;
      };
      var ss = (function() {
        function e(e) {
          if (e === void 0) {
            e = {};
          }
          var n = t.call(this, e) || this;
          n.type = as.ResponseHeader;
          return n;
        }
        var t = us;
        Object(r.__extends)(e, t);
        e.prototype.clone = function(t) {
          if (t === void 0) {
            t = {};
          }
          return new e({
            headers: t.headers || this.headers,
            status: t.status !== void 0 ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        };
        return e;
      })();
      var ls = (function() {
        function e(e) {
          if (e === void 0) {
            e = {};
          }
          var n = t.call(this, e) || this;
          n.type = as.Response;
          n.body = e.body !== void 0 ? e.body : null;
          return n;
        }
        var t = us;
        Object(r.__extends)(e, t);
        e.prototype.clone = function(t) {
          if (t === void 0) {
            t = {};
          }
          return new e({
            body: t.body !== void 0 ? t.body : this.body,
            headers: t.headers || this.headers,
            status: t.status !== void 0 ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        };
        return e;
      })();
      var cs = (function() {
        function e(e) {
          var n = t.call(this, e, 0, 'Unknown Error') || this;
          n.name = 'HttpErrorResponse';
          n.ok = false;
          n.message =
            n.status >= 200 && n.status < 300
              ? 'Http failure during parsing for ' + (e.url || '(unknown url)')
              : 'Http failure response for ' +
                (e.url || '(unknown url)') +
                ': ' +
                e.status +
                ' ' +
                e.statusText;
          n.error = e.error || null;
          return n;
        }
        var t = us;
        Object(r.__extends)(e, t);
        return e;
      })();
      var hs = (function() {
        function t(t) {
          this.handler = t;
        }
        t.prototype.request = function(t, e, n) {
          var r;
          var o = this;
          if (n === void 0) {
            n = {};
          }
          if (t instanceof is) {
            r = t;
          } else {
            var i;
            i = n.headers instanceof Yu ? n.headers : new Yu(n.headers);
            var a = void 0;
            if (n.params) {
              a =
                n.params instanceof es
                  ? n.params
                  : new es({ fromObject: n.params });
            }
            r = new is(t, e, n.body !== void 0 ? n.body : null, {
              headers: i,
              params: a,
              reportProgress: n.reportProgress,
              responseType: n.responseType || 'json',
              withCredentials: n.withCredentials,
            });
          }
          var u = bu(r).pipe(
            wu(function(t) {
              return o.handler.handle(t);
            })
          );
          if (t instanceof is || n.observe === 'events') {
            return u;
          }
          var s = u.pipe(
            Cu(function(t) {
              return t instanceof ls;
            })
          );
          switch (n.observe || 'body') {
            case 'body':
              switch (r.responseType) {
                case 'arraybuffer':
                  return s.pipe(
                    B(function(t) {
                      if (t.body !== null && !(t.body instanceof ArrayBuffer)) {
                        throw new Error('Response is not an ArrayBuffer.');
                      }
                      return t.body;
                    })
                  );
                case 'blob':
                  return s.pipe(
                    B(function(t) {
                      if (t.body !== null && !(t.body instanceof Blob)) {
                        throw new Error('Response is not a Blob.');
                      }
                      return t.body;
                    })
                  );
                case 'text':
                  return s.pipe(
                    B(function(t) {
                      if (t.body !== null && typeof t.body != 'string') {
                        throw new Error('Response is not a string.');
                      }
                      return t.body;
                    })
                  );
                case 'json':
                default:
                  return s.pipe(
                    B(function(t) {
                      return t.body;
                    })
                  );
              }
            case 'response':
              return s;
            default:
              throw new Error(
                'Unreachable: unhandled observe type ' + n.observe + '}'
              );
          }
        };
        t.prototype.delete = function(t, e) {
          if (e === void 0) {
            e = {};
          }
          return this.request('DELETE', t, e);
        };
        t.prototype.get = function(t, e) {
          if (e === void 0) {
            e = {};
          }
          return this.request('GET', t, e);
        };
        t.prototype.head = function(t, e) {
          if (e === void 0) {
            e = {};
          }
          return this.request('HEAD', t, e);
        };
        t.prototype.jsonp = function(t, e) {
          return this.request('JSONP', t, {
            params: new es().append(e, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
          });
        };
        t.prototype.options = function(t, e) {
          if (e === void 0) {
            e = {};
          }
          return this.request('OPTIONS', t, e);
        };
        t.prototype.patch = function(t, e, n) {
          if (n === void 0) {
            n = {};
          }
          return this.request('PATCH', t, ps(n, e));
        };
        t.prototype.post = function(t, e, n) {
          if (n === void 0) {
            n = {};
          }
          return this.request('POST', t, ps(n, e));
        };
        t.prototype.put = function(t, e, n) {
          if (n === void 0) {
            n = {};
          }
          return this.request('PUT', t, ps(n, e));
        };
        return t;
      })();
      var fs = (function() {
        function t(t, e) {
          this.next = t;
          this.interceptor = e;
        }
        t.prototype.handle = function(t) {
          return this.interceptor.intercept(t, this.next);
        };
        return t;
      })();
      var ds = new At('HTTP_INTERCEPTORS');
      var ys = (function() {
        function t() {}
        t.prototype.intercept = function(t, e) {
          return e.handle(t);
        };
        return t;
      })();
      var vs = /^\)\]\}',?\n/;
      var gs = function() {};
      var ms = (function() {
        function t() {}
        t.prototype.build = function() {
          return new XMLHttpRequest();
        };
        return t;
      })();
      var _s = (function() {
        function t(t) {
          this.xhrFactory = t;
        }
        t.prototype.handle = function(t) {
          var e = this;
          if (t.method === 'JSONP') {
            throw new Error(
              'Attempted to construct Jsonp request without JsonpClientModule installed.'
            );
          }
          return new C(function(n) {
            var r = e.xhrFactory.build();
            r.open(t.method, t.urlWithParams);
            if (t.withCredentials) {
              r.withCredentials = true;
            }
            t.headers.forEach(function(t, e) {
              return r.setRequestHeader(t, e.join(','));
            });
            if (!t.headers.has('Accept')) {
              r.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            if (!t.headers.has('Content-Type')) {
              var o = t.detectContentTypeHeader();
              if (o !== null) {
                r.setRequestHeader('Content-Type', o);
              }
            }
            if (t.responseType) {
              var i = t.responseType.toLowerCase();
              r.responseType = i !== 'json' ? i : 'text';
            }
            var a = t.serializeBody();
            var u = null;
            var s = function() {
              if (u !== null) {
                return u;
              }
              var e = r.status === 1223 ? 204 : r.status;
              var n = r.statusText || 'OK';
              var o = new Yu(r.getAllResponseHeaders());
              var i =
                (function() {
                  var t = r;
                  if ('responseURL' in t && t.responseURL) {
                    return t.responseURL;
                  } else if (
                    /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                  ) {
                    return t.getResponseHeader('X-Request-URL');
                  } else {
                    return null;
                  }
                })() || t.url;
              return (u = new ss({
                headers: o,
                status: e,
                statusText: n,
                url: i,
              }));
            };
            var l = function() {
              var e = s();
              var o = e.headers;
              var i = e.status;
              var a = e.statusText;
              var u = e.url;
              var l = null;
              if (i !== 204) {
                l = r.response === void 0 ? r.responseText : r.response;
              }
              if (i === 0) {
                i = l ? 200 : 0;
              }
              var c = i >= 200 && i < 300;
              if (t.responseType === 'json' && typeof l == 'string') {
                var p = l;
                l = l.replace(vs, '');
                try {
                  l = l !== '' ? JSON.parse(l) : null;
                } catch (h) {
                  l = p;
                  if (c) {
                    c = false;
                    l = { error: h, text: l };
                  }
                }
              }
              if (c) {
                n.next(
                  new ls({
                    body: l,
                    headers: o,
                    status: i,
                    statusText: a,
                    url: u || void 0,
                  })
                );
                n.complete();
              } else {
                n.error(
                  new cs({
                    error: l,
                    headers: o,
                    status: i,
                    statusText: a,
                    url: u || void 0,
                  })
                );
              }
            };
            var c = function(t) {
              var e = s().url;
              var o = new cs({
                error: t,
                status: r.status || 0,
                statusText: r.statusText || 'Unknown Error',
                url: e || void 0,
              });
              n.error(o);
            };
            var p = false;
            var h = function(e) {
              if (!p) {
                n.next(s());
                p = true;
              }
              var o = { type: as.DownloadProgress, loaded: e.loaded };
              if (e.lengthComputable) {
                o.total = e.total;
              }
              if (t.responseType === 'text' && r.responseText) {
                o.partialText = r.responseText;
              }
              n.next(o);
            };
            var f = function(t) {
              var e = { type: as.UploadProgress, loaded: t.loaded };
              if (t.lengthComputable) {
                e.total = t.total;
              }
              n.next(e);
            };
            r.addEventListener('load', l);
            r.addEventListener('error', c);
            if (t.reportProgress) {
              r.addEventListener('progress', h);
              if (a !== null && r.upload) {
                r.upload.addEventListener('progress', f);
              }
            }
            r.send(a);
            n.next({ type: as.Sent });
            return function() {
              r.removeEventListener('error', c);
              r.removeEventListener('load', l);
              if (t.reportProgress) {
                r.removeEventListener('progress', h);
                if (a !== null && r.upload) {
                  r.upload.removeEventListener('progress', f);
                }
              }
              r.abort();
            };
          });
        };
        return t;
      })();
      var bs = new At('XSRF_COOKIE_NAME');
      var ws = new At('XSRF_HEADER_NAME');
      var Cs = function() {};
      var xs = (function() {
        function t(t, e, n) {
          this.doc = t;
          this.platform = e;
          this.cookieName = n;
          this.lastCookieString = '';
          this.lastToken = null;
          this.parseCount = 0;
        }
        t.prototype.getToken = function() {
          if (this.platform === 'server') {
            return null;
          }
          var t = this.doc.cookie || '';
          if (t !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Vu(t, this.cookieName);
            this.lastCookieString = t;
          }
          return this.lastToken;
        };
        return t;
      })();
      var Es = (function() {
        function t(t, e) {
          this.tokenService = t;
          this.headerName = e;
        }
        t.prototype.intercept = function(t, e) {
          var n = t.url.toLowerCase();
          if (
            t.method === 'GET' ||
            t.method === 'HEAD' ||
            n.startsWith('http://') ||
            n.startsWith('https://')
          ) {
            return e.handle(t);
          }
          var r = this.tokenService.getToken();
          if (r !== null && !t.headers.has(this.headerName)) {
            t = t.clone({ headers: t.headers.set(this.headerName, r) });
          }
          return e.handle(t);
        };
        return t;
      })();
      var Ss = (function() {
        function t(t, e) {
          this.backend = t;
          this.injector = e;
          this.chain = null;
        }
        t.prototype.handle = function(t) {
          if (this.chain === null) {
            var e = this.injector.get(ds, []);
            this.chain = e.reduceRight(function(t, e) {
              return new fs(t, e);
            }, this.backend);
          }
          return this.chain.handle(t);
        };
        return t;
      })();
      var Os = (function() {
        function t() {}
        var e = t;
        t.disable = function() {
          return { ngModule: e, providers: [{ provide: Es, useClass: ys }] };
        };
        t.withOptions = function(t) {
          if (t === void 0) {
            t = {};
          }
          return {
            ngModule: e,
            providers: [
              t.cookieName ? { provide: bs, useValue: t.cookieName } : [],
              t.headerName ? { provide: ws, useValue: t.headerName } : [],
            ],
          };
        };
        return t;
      })();
      var Ts = function() {};
      var ks = (function() {
        function t(t, e, n, r) {
          var o = this;
          this.ref = t;
          this.route = e;
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
            headers: new Yu({ 'Content-Type': 'application/json' }),
          };
          this.hasInitialized = false;
          this.txnsLoading = false;
          this.route.queryParams.subscribe(function(t) {
            console.log('CALLED: ' + o.counter);
            if (Object.keys(t).length === 0 && o.counter === 0) {
              o.counter++;
              setTimeout(function() {
                if (!o.hasInitialized) {
                  o.hasInitialized = true;
                  o._refreshParams(t);
                }
              }, 1e3);
              return;
            }
            o.hasInitialized = true;
            o._refreshParams(t);
          });
        }
        t.prototype._extractError = function(t) {
          if (t.error != null && t.error.Error != null) {
            return t.error.Error;
          } else if (t.status != null && t.status != 200) {
            return 'Error connecting to query node: ' + this.queryNode;
          } else {
            return 'Unknown error occurred: ' + JSON.stringify(t);
          }
        };
        t.prototype._refreshParams = function(t) {
          var e = this;
          this.publicKeyNotice = null;
          if (t['query-node'] != null) {
            this.queryNode = t['query-node'];
          }
          if (this.queryNode == null) {
            this.queryNode = 'https://api.bitclout.com';
          }
          if (t.mempool) {
            this.explorerQuery = 'mempool';
            this.submitQuery();
            console.log(this.explorerQuery);
            return;
          } else if (t['block-hash'] == null) {
            if (t['block-height'] == null) {
              if (t['transaction-id'] == null) {
                if (t['public-key'] == null) {
                  this.txnsLoading = true;
                  this.httpClient
                    .get(this.queryNode + '/api/v1')
                    .toPromise()
                    .then(
                      function(t) {
                        e.clearUnnecessaryFields(t);
                        e.blockRes = t;
                        e.blockRes.Header.DateTime = new Date(
                          1e3 * e.blockRes.Header.TstampSecs
                        );
                        if (t.Transactions != null) {
                          t.Transactions.reverse();
                          e.txnRes = { Transactions: e.blockRes.Transactions };
                        }
                        console.log(e.explorerQuery);
                        e.txnsLoading = false;
                      },
                      function(t) {
                        alert(e._extractError(t));
                        e.txnsLoading = false;
                      }
                    );
                  return;
                } else {
                  this.explorerQuery = t['public-key'];
                  this.publicKeyNotice = this.publicKeyNoticeStr;
                  this.submitQuery();
                  console.log(this.explorerQuery);
                  return;
                }
              } else {
                this.explorerQuery = t['transaction-id'];
                this.submitQuery();
                console.log(this.explorerQuery);
                return;
              }
            } else {
              this.explorerQuery = t['block-height'];
              this.submitQuery();
              console.log(this.explorerQuery);
              return;
            }
          } else {
            this.explorerQuery = t['block-hash'];
            this.submitQuery();
            console.log(this.explorerQuery);
            return;
          }
        };
        t.prototype.searchEnterPressed = function(t) {
          if (t.key === 'Enter') {
            this.relocateForQuery();
          }
        };
        t.prototype.copy = function(t) {
          var e = document.createElement('textarea');
          e.style.position = 'fixed';
          e.style.left = '0';
          e.style.top = '0';
          e.style.opacity = '0';
          e.value = t;
          document.body.appendChild(e);
          e.focus();
          e.select();
          document.execCommand('copy');
          document.body.removeChild(e);
        };
        t.prototype.relocateForQuery = function() {
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
        };
        t.prototype.clearUnnecessaryFields = function(t) {
          var e;
          var n;
          if (t.Transactions) {
            try {
              var o = r.__values(t.Transactions);
              for (var i = o.next(); !i.done; i = o.next()) {
                var a = i.value;
                if (
                  a &&
                  a.TransactionMetadata &&
                  a.TransactionMetadata.BasicTransferTxindexMetadata &&
                  a.TransactionMetadata.BasicTransferTxindexMetadata.UtxoOpsDump
                ) {
                  a.TransactionMetadata.BasicTransferTxindexMetadata.UtxoOpsDump =
                    'redacted';
                }
              }
            } catch (u) {
              e = { error: u };
            } finally {
              try {
                if (i && !i.done && (n = o.return)) {
                  n.call(o);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
          }
        };
        t.prototype.submitQuery = function() {
          var t = this;
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
                  function(e) {
                    t.clearUnnecessaryFields(e);
                    if (e.Transactions != null) {
                      e.Transactions.reverse();
                    }
                    t.txnRes = e;
                    t.ref.detectChanges();
                    t.txnsLoading = false;
                  },
                  function(e) {
                    alert(t._extractError(e));
                    t.txnsLoading = false;
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
                  function(e) {
                    t.clearUnnecessaryFields(e);
                    if (e.Transactions != null) {
                      e.Transactions.reverse();
                    }
                    t.txnRes = e;
                    t.ref.detectChanges();
                    t.txnsLoading = false;
                  },
                  function(e) {
                    alert(t._extractError(e));
                    t.txnsLoading = false;
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
                  function(e) {
                    t.clearUnnecessaryFields(e);
                    t.txnRes = e;
                    t.ref.detectChanges();
                    t.txnsLoading = false;
                  },
                  function(e) {
                    alert(t._extractError(e));
                    t.txnsLoading = false;
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
                  function(e) {
                    t.clearUnnecessaryFields(e);
                    t.blockRes = e;
                    t.blockRes.Header.DateTime = new Date(
                      1e3 * t.blockRes.Header.TstampSecs
                    );
                    if (e.Transactions != null) {
                      e.Transactions.reverse();
                      t.txnRes = { Transactions: t.blockRes.Transactions };
                    }
                    t.ref.detectChanges();
                    t.txnsLoading = false;
                  },
                  function(e) {
                    alert(t._extractError(e));
                    t.txnsLoading = false;
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
                  function(e) {
                    t.clearUnnecessaryFields(e);
                    t.blockRes = e;
                    t.blockRes.Header.DateTime = new Date(
                      1e3 * t.blockRes.Header.TstampSecs
                    );
                    if (e.Transactions != null) {
                      e.Transactions.reverse();
                      t.txnRes = { Transactions: t.blockRes.Transactions };
                    }
                    t.ref.detectChanges();
                    t.txnsLoading = false;
                  },
                  function(e) {
                    alert(t._extractError(e));
                    t.txnsLoading = false;
                  }
                );
            }
          }
          alert(this.errorStr);
        };
        t.prototype.ngOnInit = function() {};
        return t;
      })();
      var Ps = (function() {
        function e(e) {
          var n = t.call(this) || this;
          n._value = e;
          return n;
        }
        var t = k;
        r.__extends(e, t);
        Object.defineProperty(e.prototype, 'value', {
          get: function() {
            return this.getValue();
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype._subscribe = function(e) {
          var n = t.prototype._subscribe.call(this, e);
          if (n && !n.closed) {
            e.next(this._value);
          }
          return n;
        };
        e.prototype.getValue = function() {
          if (this.hasError) {
            throw this.thrownError;
          }
          if (this.closed) {
            throw new S();
          }
          return this._value;
        };
        e.prototype.next = function(e) {
          t.prototype.next.call(this, (this._value = e));
        };
        return e;
      })();
      As.prototype = Object.create(Error.prototype);
      var Is = As;
      var Rs = {};
      var js = (function() {
        function t(t) {
          this.resultSelector = t;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new Ms(t, this.resultSelector));
        };
        return t;
      })();
      var Ms = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.resultSelector = n;
          r.active = 0;
          r.values = [];
          r.observables = [];
          return r;
        }
        var t = z;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          this.values.push(Rs);
          this.observables.push(t);
        };
        e.prototype._complete = function() {
          var t = this.observables;
          var e = t.length;
          if (e === 0) {
            this.destination.complete();
          } else {
            this.active = e;
            this.toRespond = e;
            for (var n = 0; n < e; n++) {
              var r = t[n];
              this.add(H(this, r, r, n));
            }
          }
        };
        e.prototype.notifyComplete = function(t) {
          if ((this.active -= 1) == 0) {
            this.destination.complete();
          }
        };
        e.prototype.notifyNext = function(t, e, n, r, o) {
          var i = this.values;
          var a = this.toRespond
            ? i[n] === Rs ? --this.toRespond : this.toRespond
            : 0;
          i[n] = e;
          if (a === 0) {
            if (this.resultSelector) {
              this._tryResultSelector(i);
            } else {
              this.destination.next(i.slice());
            }
          }
        };
        e.prototype._tryResultSelector = function(t) {
          var e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            this.destination.error(n);
            return;
          }
          this.destination.next(e);
        };
        return e;
      })();
      Us.prototype = Object.create(Error.prototype);
      var Ls = Us;
      var Hs = (function() {
        function t(t) {
          this.total = t;
          if (this.total < 0) {
            throw new Ls();
          }
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new zs(t, this.total));
        };
        return t;
      })();
      var zs = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.total = n;
          r.ring = new Array();
          r.count = 0;
          return r;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          var e = this.ring;
          var n = this.total;
          var r = this.count++;
          if (e.length < n) {
            e.push(t);
          } else {
            e[r % n] = t;
          }
        };
        e.prototype._complete = function() {
          var t = this.destination;
          var e = this.count;
          if (e > 0) {
            var n = this.count >= this.total ? this.total : this.count;
            var r = this.ring;
            for (var o = 0; o < n; o++) {
              var i = e++ % n;
              t.next(r[i]);
            }
          }
          t.complete();
        };
        return e;
      })();
      var qs = (function() {
        function t(t, e, n) {
          this.nextOrObserver = t;
          this.error = e;
          this.complete = n;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(
            new Qs(t, this.nextOrObserver, this.error, this.complete)
          );
        };
        return t;
      })();
      var Qs = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e) || this;
          i._tapNext = _;
          i._tapError = _;
          i._tapComplete = _;
          i._tapError = r || _;
          i._tapComplete = o || _;
          if (a(n)) {
            i._context = i;
            i._tapNext = n;
          } else if (n) {
            i._context = n;
            i._tapNext = n.next || _;
            i._tapError = n.error || _;
            i._tapComplete = n.complete || _;
          }
          return i;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            this.destination.error(e);
            return;
          }
          this.destination.next(t);
        };
        e.prototype._error = function(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            this.destination.error(t);
            return;
          }
          this.destination.error(t);
        };
        e.prototype._complete = function() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            this.destination.error(t);
            return;
          }
          return this.destination.complete();
        };
        return e;
      })();
      var Gs = function(t) {
        if (t === void 0) {
          t = Ws;
        }
        return Bs({
          hasValue: false,
          next: function() {
            this.hasValue = true;
          },
          complete: function() {
            if (!this.hasValue) {
              throw t();
            }
          },
        });
      };
      var Ks = (function() {
        function t(t) {
          this.defaultValue = t;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new $s(t, this.defaultValue));
        };
        return t;
      })();
      var $s = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.defaultValue = n;
          r.isEmpty = true;
          return r;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          this.isEmpty = false;
          this.destination.next(t);
        };
        e.prototype._complete = function() {
          if (this.isEmpty) {
            this.destination.next(this.defaultValue);
          }
          this.destination.complete();
        };
        return e;
      })();
      var Xs = (function() {
        function t(t) {
          this.selector = t;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new tl(t, this.selector, this.caught));
        };
        return t;
      })();
      var tl = (function() {
        function e(e, n, r) {
          var o = t.call(this, e) || this;
          o.selector = n;
          o.caught = r;
          return o;
        }
        var t = z;
        r.__extends(e, t);
        e.prototype.error = function(e) {
          if (!this.isStopped) {
            var n = void 0;
            try {
              n = this.selector(e, this.caught);
            } catch (o) {
              t.prototype.error.call(this, o);
              return;
            }
            this._unsubscribeAndRecycle();
            var r = new I(this, void 0, void 0);
            this.add(r);
            H(this, n, void 0, void 0, r);
          }
        };
        return e;
      })();
      var nl = (function() {
        function t(t) {
          this.total = t;
          if (this.total < 0) {
            throw new Ls();
          }
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new rl(t, this.total));
        };
        return t;
      })();
      var rl = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.total = n;
          r.count = 0;
          return r;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          var e = this.total;
          var n = ++this.count;
          if (n <= e) {
            this.destination.next(t);
            if (n === e) {
              this.destination.complete();
              this.unsubscribe();
            }
          }
        };
        return e;
      })();
      var il = (function() {
        function t(t, e, n) {
          this.predicate = t;
          this.thisArg = e;
          this.source = n;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(
            new al(t, this.predicate, this.thisArg, this.source)
          );
        };
        return t;
      })();
      var al = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e) || this;
          i.predicate = n;
          i.thisArg = r;
          i.source = o;
          i.index = 0;
          i.thisArg = r || i;
          return i;
        }
        var t = v;
        r.__extends(e, t);
        e.prototype.notifyComplete = function(t) {
          this.destination.next(t);
          this.destination.complete();
        };
        e.prototype._next = function(t) {
          var e = false;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (n) {
            this.destination.error(n);
            return;
          }
          if (!e) {
            this.notifyComplete(false);
          }
        };
        e.prototype._complete = function() {
          this.notifyComplete(true);
        };
        return e;
      })();
      var sl = (function() {
        function t(t) {
          this.project = t;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new ll(t, this.project));
        };
        return t;
      })();
      var ll = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.project = n;
          r.index = 0;
          return r;
        }
        var t = z;
        r.__extends(e, t);
        e.prototype._next = function(t) {
          var e;
          var n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            this.destination.error(r);
            return;
          }
          this._innerSub(e, t, n);
        };
        e.prototype._innerSub = function(t, e, n) {
          var r = this.innerSubscription;
          if (r) {
            r.unsubscribe();
          }
          var o = new I(this, void 0, void 0);
          this.destination.add(o);
          this.innerSubscription = H(this, t, e, n, o);
        };
        e.prototype._complete = function() {
          var e = this.innerSubscription;
          if (!e || !!e.closed) {
            t.prototype._complete.call(this);
          }
          this.unsubscribe();
        };
        e.prototype._unsubscribe = function() {
          this.innerSubscription = null;
        };
        e.prototype.notifyComplete = function(e) {
          this.destination.remove(e);
          this.innerSubscription = null;
          if (this.isStopped) {
            t.prototype._complete.call(this);
          }
        };
        e.prototype.notifyNext = function(t, e, n, r, o) {
          this.destination.next(e);
        };
        return e;
      })();
      var hl = (function() {
        function t(t, e, n) {
          if (n === void 0) {
            n = false;
          }
          this.accumulator = t;
          this.seed = e;
          this.hasSeed = n;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(
            new fl(t, this.accumulator, this.seed, this.hasSeed)
          );
        };
        return t;
      })();
      var fl = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e) || this;
          i.accumulator = n;
          i._seed = r;
          i.hasSeed = o;
          i.index = 0;
          return i;
        }
        var t = v;
        r.__extends(e, t);
        Object.defineProperty(e.prototype, 'seed', {
          get: function() {
            return this._seed;
          },
          set: function(t) {
            this.hasSeed = true;
            this._seed = t;
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype._next = function(t) {
          if (this.hasSeed) {
            return this._tryNext(t);
          }
          this.seed = t;
          this.destination.next(t);
        };
        e.prototype._tryNext = function(t) {
          var e;
          var n = this.index++;
          try {
            e = this.accumulator(this.seed, t, n);
          } catch (r) {
            this.destination.error(r);
          }
          this.seed = e;
          this.destination.next(e);
        };
        return e;
      })();
      var dl = (function() {
        function t(t) {
          this.callback = t;
        }
        t.prototype.call = function(t, e) {
          return e.subscribe(new yl(t, this.callback));
        };
        return t;
      })();
      var yl = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.add(new l(n));
          return r;
        }
        var t = v;
        r.__extends(e, t);
        return e;
      })();
      var vl = null;
      var ml;
      var _l = (function() {
        function e() {
          var e = t.call(this) || this;
          e._animationPrefix = null;
          e._transitionEnd = null;
          try {
            var n = e.createElement('div', document);
            if (e.getStyle(n, 'animationName') == null) {
              var r = ['Webkit', 'Moz', 'O', 'ms'];
              for (var o = 0; o < r.length; o++) {
                if (e.getStyle(n, r[o] + 'AnimationName') != null) {
                  e._animationPrefix = '-' + r[o].toLowerCase() + '-';
                  break;
                }
              }
            } else {
              e._animationPrefix = '';
            }
            var i = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend',
            };
            Object.keys(i).forEach(function(t) {
              if (e.getStyle(n, t) != null) {
                e._transitionEnd = i[t];
              }
            });
          } catch (a) {
            e._animationPrefix = null;
            e._transitionEnd = null;
          }
          return e;
        }
        var t = (function() {
          function t() {
            this.resourceLoaderType = null;
          }
          Object.defineProperty(t.prototype, 'attrToPropMap', {
            get: function() {
              return this._attrToPropMap;
            },
            set: function(t) {
              this._attrToPropMap = t;
            },
            enumerable: true,
            configurable: true,
          });
          return t;
        })();
        Object(r.__extends)(e, t);
        e.prototype.getDistributedNodes = function(t) {
          return t.getDistributedNodes();
        };
        e.prototype.resolveAndSetHref = function(t, e, n) {
          t.href = n == null ? e : e + '/../' + n;
        };
        e.prototype.supportsDOMEvents = function() {
          return true;
        };
        e.prototype.supportsNativeShadowDOM = function() {
          return typeof document.body.createShadowRoot == 'function';
        };
        e.prototype.getAnimationPrefix = function() {
          if (this._animationPrefix) {
            return this._animationPrefix;
          } else {
            return '';
          }
        };
        e.prototype.getTransitionEnd = function() {
          if (this._transitionEnd) {
            return this._transitionEnd;
          } else {
            return '';
          }
        };
        e.prototype.supportsAnimation = function() {
          return this._animationPrefix != null && this._transitionEnd != null;
        };
        return e;
      })();
      var bl = {
        class: 'className',
        innerHtml: 'innerHTML',
        readonly: 'readOnly',
        tabindex: 'tabIndex',
      };
      var wl = {
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
      var Cl = {
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
      var xl = (function() {
        if (Pt.Node) {
          return (
            Pt.Node.prototype.contains ||
            function(t) {
              return !!(16 & this.compareDocumentPosition(t));
            }
          );
        }
      })();
      var El = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = _l;
        Object(r.__extends)(e, t);
        e.prototype.parse = function(t) {
          throw new Error('parse not implemented');
        };
        e.makeCurrent = function() {
          var t = new e();
          if (!vl) {
            vl = t;
          }
        };
        e.prototype.hasProperty = function(t, e) {
          return e in t;
        };
        e.prototype.setProperty = function(t, e, n) {
          t[e] = n;
        };
        e.prototype.getProperty = function(t, e) {
          return t[e];
        };
        e.prototype.invoke = function(t, e, n) {
          var o;
          (o = t)[e].apply(o, Object(r.__spread)(n));
        };
        e.prototype.logError = function(t) {
          if (window.console) {
            if (console.error) {
              console.error(t);
            } else {
              console.log(t);
            }
          }
        };
        e.prototype.log = function(t) {
          if (window.console && window.console.log) {
            window.console.log(t);
          }
        };
        e.prototype.logGroup = function(t) {
          if (window.console && window.console.group) {
            window.console.group(t);
          }
        };
        e.prototype.logGroupEnd = function() {
          if (window.console && window.console.groupEnd) {
            window.console.groupEnd();
          }
        };
        Object.defineProperty(e.prototype, 'attrToPropMap', {
          get: function() {
            return bl;
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype.contains = function(t, e) {
          return xl.call(t, e);
        };
        e.prototype.querySelector = function(t, e) {
          return t.querySelector(e);
        };
        e.prototype.querySelectorAll = function(t, e) {
          return t.querySelectorAll(e);
        };
        e.prototype.on = function(t, e, n) {
          t.addEventListener(e, n, false);
        };
        e.prototype.onAndCancel = function(t, e, n) {
          t.addEventListener(e, n, false);
          return function() {
            t.removeEventListener(e, n, false);
          };
        };
        e.prototype.dispatchEvent = function(t, e) {
          t.dispatchEvent(e);
        };
        e.prototype.createMouseEvent = function(t) {
          var e = this.getDefaultDocument().createEvent('MouseEvent');
          e.initEvent(t, true, true);
          return e;
        };
        e.prototype.createEvent = function(t) {
          var e = this.getDefaultDocument().createEvent('Event');
          e.initEvent(t, true, true);
          return e;
        };
        e.prototype.preventDefault = function(t) {
          t.preventDefault();
          t.returnValue = false;
        };
        e.prototype.isPrevented = function(t) {
          return (
            t.defaultPrevented || (t.returnValue != null && !t.returnValue)
          );
        };
        e.prototype.getInnerHTML = function(t) {
          return t.innerHTML;
        };
        e.prototype.getTemplateContent = function(t) {
          if ('content' in t && this.isTemplateElement(t)) {
            return t.content;
          } else {
            return null;
          }
        };
        e.prototype.getOuterHTML = function(t) {
          return t.outerHTML;
        };
        e.prototype.nodeName = function(t) {
          return t.nodeName;
        };
        e.prototype.nodeValue = function(t) {
          return t.nodeValue;
        };
        e.prototype.type = function(t) {
          return t.type;
        };
        e.prototype.content = function(t) {
          if (this.hasProperty(t, 'content')) {
            return t.content;
          } else {
            return t;
          }
        };
        e.prototype.firstChild = function(t) {
          return t.firstChild;
        };
        e.prototype.nextSibling = function(t) {
          return t.nextSibling;
        };
        e.prototype.parentElement = function(t) {
          return t.parentNode;
        };
        e.prototype.childNodes = function(t) {
          return t.childNodes;
        };
        e.prototype.childNodesAsList = function(t) {
          var e = t.childNodes;
          var n = new Array(e.length);
          for (var r = 0; r < e.length; r++) {
            n[r] = e[r];
          }
          return n;
        };
        e.prototype.clearNodes = function(t) {
          while (t.firstChild) {
            t.removeChild(t.firstChild);
          }
        };
        e.prototype.appendChild = function(t, e) {
          t.appendChild(e);
        };
        e.prototype.removeChild = function(t, e) {
          t.removeChild(e);
        };
        e.prototype.replaceChild = function(t, e, n) {
          t.replaceChild(e, n);
        };
        e.prototype.remove = function(t) {
          if (t.parentNode) {
            t.parentNode.removeChild(t);
          }
          return t;
        };
        e.prototype.insertBefore = function(t, e, n) {
          t.insertBefore(n, e);
        };
        e.prototype.insertAllBefore = function(t, e, n) {
          n.forEach(function(n) {
            return t.insertBefore(n, e);
          });
        };
        e.prototype.insertAfter = function(t, e, n) {
          t.insertBefore(n, e.nextSibling);
        };
        e.prototype.setInnerHTML = function(t, e) {
          t.innerHTML = e;
        };
        e.prototype.getText = function(t) {
          return t.textContent;
        };
        e.prototype.setText = function(t, e) {
          t.textContent = e;
        };
        e.prototype.getValue = function(t) {
          return t.value;
        };
        e.prototype.setValue = function(t, e) {
          t.value = e;
        };
        e.prototype.getChecked = function(t) {
          return t.checked;
        };
        e.prototype.setChecked = function(t, e) {
          t.checked = e;
        };
        e.prototype.createComment = function(t) {
          return this.getDefaultDocument().createComment(t);
        };
        e.prototype.createTemplate = function(t) {
          var e = this.getDefaultDocument().createElement('template');
          e.innerHTML = t;
          return e;
        };
        e.prototype.createElement = function(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        };
        e.prototype.createElementNS = function(t, e, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(t, e);
        };
        e.prototype.createTextNode = function(t, e) {
          return (e = e || this.getDefaultDocument()).createTextNode(t);
        };
        e.prototype.createScriptTag = function(t, e, n) {
          var r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
          r.setAttribute(t, e);
          return r;
        };
        e.prototype.createStyleElement = function(t, e) {
          var n = (e = e || this.getDefaultDocument()).createElement('style');
          this.appendChild(n, this.createTextNode(t, e));
          return n;
        };
        e.prototype.createShadowRoot = function(t) {
          return t.createShadowRoot();
        };
        e.prototype.getShadowRoot = function(t) {
          return t.shadowRoot;
        };
        e.prototype.getHost = function(t) {
          return t.host;
        };
        e.prototype.clone = function(t) {
          return t.cloneNode(true);
        };
        e.prototype.getElementsByClassName = function(t, e) {
          return t.getElementsByClassName(e);
        };
        e.prototype.getElementsByTagName = function(t, e) {
          return t.getElementsByTagName(e);
        };
        e.prototype.classList = function(t) {
          return Array.prototype.slice.call(t.classList, 0);
        };
        e.prototype.addClass = function(t, e) {
          t.classList.add(e);
        };
        e.prototype.removeClass = function(t, e) {
          t.classList.remove(e);
        };
        e.prototype.hasClass = function(t, e) {
          return t.classList.contains(e);
        };
        e.prototype.setStyle = function(t, e, n) {
          t.style[e] = n;
        };
        e.prototype.removeStyle = function(t, e) {
          t.style[e] = '';
        };
        e.prototype.getStyle = function(t, e) {
          return t.style[e];
        };
        e.prototype.hasStyle = function(t, e, n) {
          var r = this.getStyle(t, e) || '';
          if (n) {
            return r == n;
          } else {
            return r.length > 0;
          }
        };
        e.prototype.tagName = function(t) {
          return t.tagName;
        };
        e.prototype.attributeMap = function(t) {
          var e = new Map();
          var n = t.attributes;
          for (var r = 0; r < n.length; r++) {
            var o = n.item(r);
            e.set(o.name, o.value);
          }
          return e;
        };
        e.prototype.hasAttribute = function(t, e) {
          return t.hasAttribute(e);
        };
        e.prototype.hasAttributeNS = function(t, e, n) {
          return t.hasAttributeNS(e, n);
        };
        e.prototype.getAttribute = function(t, e) {
          return t.getAttribute(e);
        };
        e.prototype.getAttributeNS = function(t, e, n) {
          return t.getAttributeNS(e, n);
        };
        e.prototype.setAttribute = function(t, e, n) {
          t.setAttribute(e, n);
        };
        e.prototype.setAttributeNS = function(t, e, n, r) {
          t.setAttributeNS(e, n, r);
        };
        e.prototype.removeAttribute = function(t, e) {
          t.removeAttribute(e);
        };
        e.prototype.removeAttributeNS = function(t, e, n) {
          t.removeAttributeNS(e, n);
        };
        e.prototype.templateAwareRoot = function(t) {
          if (this.isTemplateElement(t)) {
            return this.content(t);
          } else {
            return t;
          }
        };
        e.prototype.createHtmlDocument = function() {
          return document.implementation.createHTMLDocument('fakeTitle');
        };
        e.prototype.getDefaultDocument = function() {
          return document;
        };
        e.prototype.getBoundingClientRect = function(t) {
          try {
            return t.getBoundingClientRect();
          } catch (e) {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0,
            };
          }
        };
        e.prototype.getTitle = function(t) {
          return t.title;
        };
        e.prototype.setTitle = function(t, e) {
          t.title = e || '';
        };
        e.prototype.elementMatches = function(t, e) {
          return (
            !!this.isElementNode(t) &&
            ((t.matches && t.matches(e)) ||
              (t.msMatchesSelector && t.msMatchesSelector(e)) ||
              (t.webkitMatchesSelector && t.webkitMatchesSelector(e)))
          );
        };
        e.prototype.isTemplateElement = function(t) {
          return this.isElementNode(t) && t.nodeName === 'TEMPLATE';
        };
        e.prototype.isTextNode = function(t) {
          return t.nodeType === Node.TEXT_NODE;
        };
        e.prototype.isCommentNode = function(t) {
          return t.nodeType === Node.COMMENT_NODE;
        };
        e.prototype.isElementNode = function(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        };
        e.prototype.hasShadowRoot = function(t) {
          return t.shadowRoot != null && t instanceof HTMLElement;
        };
        e.prototype.isShadowRoot = function(t) {
          return t instanceof DocumentFragment;
        };
        e.prototype.importIntoDoc = function(t) {
          return document.importNode(this.templateAwareRoot(t), true);
        };
        e.prototype.adoptNode = function(t) {
          return document.adoptNode(t);
        };
        e.prototype.getHref = function(t) {
          return t.getAttribute('href');
        };
        e.prototype.getEventKey = function(t) {
          var e = t.key;
          if (e == null) {
            if ((e = t.keyIdentifier) == null) {
              return 'Unidentified';
            }
            if (e.startsWith('U+')) {
              e = String.fromCharCode(parseInt(e.substring(2), 16));
              if (t.location === 3 && Cl.hasOwnProperty(e)) {
                e = Cl[e];
              }
            }
          }
          return wl[e] || e;
        };
        e.prototype.getGlobalEventTarget = function(t, e) {
          if (e === 'window') {
            return window;
          } else if (e === 'document') {
            return t;
          } else if (e === 'body') {
            return t.body;
          } else {
            return null;
          }
        };
        e.prototype.getHistory = function() {
          return window.history;
        };
        e.prototype.getLocation = function() {
          return window.location;
        };
        e.prototype.getBaseHref = function(t) {
          var e;
          var n =
            Sl || (Sl = document.querySelector('base'))
              ? Sl.getAttribute('href')
              : null;
          if (n == null) {
            return null;
          } else {
            e = n;
            if (!ml) {
              ml = document.createElement('a');
            }
            ml.setAttribute('href', e);
            if (ml.pathname.charAt(0) === '/') {
              return ml.pathname;
            } else {
              return '/' + ml.pathname;
            }
          }
        };
        e.prototype.resetBaseElement = function() {
          Sl = null;
        };
        e.prototype.getUserAgent = function() {
          return window.navigator.userAgent;
        };
        e.prototype.setData = function(t, e, n) {
          this.setAttribute(t, 'data-' + e, n);
        };
        e.prototype.getData = function(t, e) {
          return this.getAttribute(t, 'data-' + e);
        };
        e.prototype.getComputedStyle = function(t) {
          return getComputedStyle(t);
        };
        e.prototype.supportsWebAnimation = function() {
          return typeof Element.prototype.animate == 'function';
        };
        e.prototype.performanceNow = function() {
          if (window.performance && window.performance.now) {
            return window.performance.now();
          } else {
            return new Date().getTime();
          }
        };
        e.prototype.supportsCookies = function() {
          return true;
        };
        e.prototype.getCookie = function(t) {
          return Vu(document.cookie, t);
        };
        e.prototype.setCookie = function(t, e) {
          document.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(e);
        };
        return e;
      })();
      var Sl = null;
      var Tl = (function() {
        function e(e) {
          var n = t.call(this) || this;
          n._doc = e;
          n._init();
          return n;
        }
        var t = Su;
        Object(r.__extends)(e, t);
        e.prototype._init = function() {
          this.location = gl().getLocation();
          this._history = gl().getHistory();
        };
        e.prototype.getBaseHrefFromDOM = function() {
          return gl().getBaseHref(this._doc);
        };
        e.prototype.onPopState = function(t) {
          gl()
            .getGlobalEventTarget(this._doc, 'window')
            .addEventListener('popstate', t, false);
        };
        e.prototype.onHashChange = function(t) {
          gl()
            .getGlobalEventTarget(this._doc, 'window')
            .addEventListener('hashchange', t, false);
        };
        Object.defineProperty(e.prototype, 'href', {
          get: function() {
            return this.location.href;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'protocol', {
          get: function() {
            return this.location.protocol;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'hostname', {
          get: function() {
            return this.location.hostname;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'port', {
          get: function() {
            return this.location.port;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'pathname', {
          get: function() {
            return this.location.pathname;
          },
          set: function(t) {
            this.location.pathname = t;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'search', {
          get: function() {
            return this.location.search;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'hash', {
          get: function() {
            return this.location.hash;
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype.pushState = function(t, e, n) {
          if (Ol()) {
            this._history.pushState(t, e, n);
          } else {
            this.location.hash = n;
          }
        };
        e.prototype.replaceState = function(t, e, n) {
          if (Ol()) {
            this._history.replaceState(t, e, n);
          } else {
            this.location.hash = n;
          }
        };
        e.prototype.forward = function() {
          this._history.forward();
        };
        e.prototype.back = function() {
          this._history.back();
        };
        e.prototype.getState = function() {
          return this._history.state;
        };
        return Object(r.__decorate)(
          [
            Object(r.__param)(0, pt(Gu)),
            Object(r.__metadata)('design:paramtypes', [Object]),
          ],
          e
        );
      })();
      var kl = new At('TRANSITION_ID');
      var Pl = [
        {
          provide: Do,
          useFactory: function(t, e, n) {
            return function() {
              n.get(Vo).donePromise.then(function() {
                var n = gl();
                Array.prototype.slice
                  .apply(n.querySelectorAll(e, 'style[ng-transition]'))
                  .filter(function(e) {
                    return n.getAttribute(e, 'ng-transition') === t;
                  })
                  .forEach(function(t) {
                    return n.remove(t);
                  });
              });
            };
          },
          deps: [kl, Gu, De],
          multi: true,
        },
      ];
      var Al = (function() {
        function t() {}
        t.init = function() {
          var e = new t();
          _i = e;
        };
        t.prototype.addToWindow = function(t) {
          Pt.getAngularTestability = function(e, n) {
            if (n === void 0) {
              n = true;
            }
            var r = t.findTestabilityInTree(e, n);
            if (r == null) {
              throw new Error('Could not find testability for element.');
            }
            return r;
          };
          Pt.getAllAngularTestabilities = function() {
            return t.getAllTestabilities();
          };
          Pt.getAllAngularRootElements = function() {
            return t.getAllRootElements();
          };
          if (!Pt.frameworkStabilizers) {
            Pt.frameworkStabilizers = [];
          }
          Pt.frameworkStabilizers.push(function(t) {
            var e = Pt.getAllAngularTestabilities();
            var n = e.length;
            var r = false;
            var o = function(e) {
              r = r || e;
              if (--n == 0) {
                t(r);
              }
            };
            e.forEach(function(t) {
              t.whenStable(o);
            });
          });
        };
        t.prototype.findTestabilityInTree = function(t, e, n) {
          if (e == null) {
            return null;
          }
          var r = t.getTestability(e);
          if (r == null) {
            if (n) {
              if (gl().isShadowRoot(e)) {
                return this.findTestabilityInTree(t, gl().getHost(e), true);
              } else {
                return this.findTestabilityInTree(
                  t,
                  gl().parentElement(e),
                  true
                );
              }
            } else {
              return null;
            }
          } else {
            return r;
          }
        };
        return t;
      })();
      var Rl = { ApplicationRef: Oi, NgZone: li };
      var jl = new At('EventManagerPlugins');
      var Ml = (function() {
        function t(t, e) {
          var n = this;
          this._zone = e;
          this._eventNameToPlugin = new Map();
          t.forEach(function(t) {
            return (t.manager = n);
          });
          this._plugins = t.slice().reverse();
        }
        t.prototype.addEventListener = function(t, e, n) {
          return this._findPluginFor(e).addEventListener(t, e, n);
        };
        t.prototype.addGlobalEventListener = function(t, e, n) {
          return this._findPluginFor(e).addGlobalEventListener(t, e, n);
        };
        t.prototype.getZone = function() {
          return this._zone;
        };
        t.prototype._findPluginFor = function(t) {
          var e = this._eventNameToPlugin.get(t);
          if (e) {
            return e;
          }
          var n = this._plugins;
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            if (o.supports(t)) {
              this._eventNameToPlugin.set(t, o);
              return o;
            }
          }
          throw new Error('No event manager plugin found for event ' + t);
        };
        return t;
      })();
      var Dl = (function() {
        function t(t) {
          this._doc = t;
        }
        t.prototype.addGlobalEventListener = function(t, e, n) {
          var r = gl().getGlobalEventTarget(this._doc, t);
          if (!r) {
            throw new Error(
              'Unsupported event target ' + r + ' for event ' + e
            );
          }
          return this.addEventListener(r, e, n);
        };
        return t;
      })();
      var Vl = (function() {
        function t() {
          this._stylesSet = new Set();
        }
        t.prototype.addStyles = function(t) {
          var e = this;
          var n = new Set();
          t.forEach(function(t) {
            if (!e._stylesSet.has(t)) {
              e._stylesSet.add(t);
              n.add(t);
            }
          });
          this.onStylesAdded(n);
        };
        t.prototype.onStylesAdded = function(t) {};
        t.prototype.getAllStyles = function() {
          return Array.from(this._stylesSet);
        };
        return t;
      })();
      var Ul = (function() {
        function e(e) {
          var n = t.call(this) || this;
          n._doc = e;
          n._hostNodes = new Set();
          n._styleNodes = new Set();
          n._hostNodes.add(e.head);
          return n;
        }
        var t = Vl;
        Object(r.__extends)(e, t);
        e.prototype._addStylesToHost = function(t, e) {
          var n = this;
          t.forEach(function(t) {
            var r = n._doc.createElement('style');
            r.textContent = t;
            n._styleNodes.add(e.appendChild(r));
          });
        };
        e.prototype.addHost = function(t) {
          this._addStylesToHost(this._stylesSet, t);
          this._hostNodes.add(t);
        };
        e.prototype.removeHost = function(t) {
          this._hostNodes.delete(t);
        };
        e.prototype.onStylesAdded = function(t) {
          var e = this;
          this._hostNodes.forEach(function(n) {
            return e._addStylesToHost(t, n);
          });
        };
        e.prototype.ngOnDestroy = function() {
          this._styleNodes.forEach(function(t) {
            return gl().remove(t);
          });
        };
        return e;
      })();
      var Ll = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: 'http://www.w3.org/1999/xhtml',
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      };
      var Fl = /%COMP%/g;
      var Hl = '_nghost-%COMP%';
      var zl = '_ngcontent-%COMP%';
      var Ql = (function() {
        function t(t, e, n) {
          this.eventManager = t;
          this.sharedStylesHost = e;
          this.appId = n;
          this.rendererByCompId = new Map();
          this.defaultRenderer = new Gl(t);
        }
        t.prototype.createRenderer = function(t, e) {
          if (!t || !e) {
            return this.defaultRenderer;
          }
          switch (e.encapsulation) {
            case Wt.Emulated:
              var n = this.rendererByCompId.get(e.id);
              if (!n) {
                n = new Kl(
                  this.eventManager,
                  this.sharedStylesHost,
                  e,
                  this.appId
                );
                this.rendererByCompId.set(e.id, n);
              }
              n.applyToHost(t);
              return n;
            case Wt.Native:
            case Wt.ShadowDom:
              return new $l(this.eventManager, this.sharedStylesHost, t, e);
            default:
              if (!this.rendererByCompId.has(e.id)) {
                var r = Bl(e.id, e.styles, []);
                this.sharedStylesHost.addStyles(r);
                this.rendererByCompId.set(e.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        };
        t.prototype.begin = function() {};
        t.prototype.end = function() {};
        return t;
      })();
      var Gl = (function() {
        function t(t) {
          this.eventManager = t;
          this.data = Object.create(null);
        }
        t.prototype.destroy = function() {};
        t.prototype.createElement = function(t, e) {
          if (e) {
            return document.createElementNS(Ll[e] || e, t);
          } else {
            return document.createElement(t);
          }
        };
        t.prototype.createComment = function(t) {
          return document.createComment(t);
        };
        t.prototype.createText = function(t) {
          return document.createTextNode(t);
        };
        t.prototype.appendChild = function(t, e) {
          t.appendChild(e);
        };
        t.prototype.insertBefore = function(t, e, n) {
          if (t) {
            t.insertBefore(e, n);
          }
        };
        t.prototype.removeChild = function(t, e) {
          if (t) {
            t.removeChild(e);
          }
        };
        t.prototype.selectRootElement = function(t, e) {
          var n = typeof t == 'string' ? document.querySelector(t) : t;
          if (!n) {
            throw new Error(
              'The selector "' + t + '" did not match any elements'
            );
          }
          if (!e) {
            n.textContent = '';
          }
          return n;
        };
        t.prototype.parentNode = function(t) {
          return t.parentNode;
        };
        t.prototype.nextSibling = function(t) {
          return t.nextSibling;
        };
        t.prototype.setAttribute = function(t, e, n, r) {
          if (r) {
            e = r + ':' + e;
            var o = Ll[r];
            if (o) {
              t.setAttributeNS(o, e, n);
            } else {
              t.setAttribute(e, n);
            }
          } else {
            t.setAttribute(e, n);
          }
        };
        t.prototype.removeAttribute = function(t, e, n) {
          if (n) {
            var r = Ll[n];
            if (r) {
              t.removeAttributeNS(r, e);
            } else {
              t.removeAttribute(n + ':' + e);
            }
          } else {
            t.removeAttribute(e);
          }
        };
        t.prototype.addClass = function(t, e) {
          t.classList.add(e);
        };
        t.prototype.removeClass = function(t, e) {
          t.classList.remove(e);
        };
        t.prototype.setStyle = function(t, e, n, r) {
          if (r & yn.DashCase) {
            t.style.setProperty(e, n, r & yn.Important ? 'important' : '');
          } else {
            t.style[e] = n;
          }
        };
        t.prototype.removeStyle = function(t, e, n) {
          if (n & yn.DashCase) {
            t.style.removeProperty(e);
          } else {
            t.style[e] = '';
          }
        };
        t.prototype.setProperty = function(t, e, n) {
          Zl(e, 'property');
          t[e] = n;
        };
        t.prototype.setValue = function(t, e) {
          t.nodeValue = e;
        };
        t.prototype.listen = function(t, e, n) {
          Zl(e, 'listener');
          if (typeof t == 'string') {
            return this.eventManager.addGlobalEventListener(t, e, ql(n));
          } else {
            return this.eventManager.addEventListener(t, e, ql(n));
          }
        };
        return t;
      })();
      var Wl = '@'.charCodeAt(0);
      var Kl = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e) || this;
          i.component = r;
          var a = Bl(o + '-' + r.id, r.styles, []);
          n.addStyles(a);
          i.contentAttr = zl.replace(Fl, o + '-' + r.id);
          i.hostAttr = (function() {
            var t = o + '-' + r.id;
            return Hl.replace(Fl, t);
          })();
          return i;
        }
        var t = Gl;
        Object(r.__extends)(e, t);
        e.prototype.applyToHost = function(e) {
          t.prototype.setAttribute.call(this, e, this.hostAttr, '');
        };
        e.prototype.createElement = function(e, n) {
          var r = t.prototype.createElement.call(this, e, n);
          t.prototype.setAttribute.call(this, r, this.contentAttr, '');
          return r;
        };
        return e;
      })();
      var $l = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e) || this;
          i.sharedStylesHost = n;
          i.hostEl = r;
          i.component = o;
          i.shadowRoot =
            o.encapsulation === Wt.ShadowDom
              ? r.attachShadow({ mode: 'open' })
              : r.createShadowRoot();
          i.sharedStylesHost.addHost(i.shadowRoot);
          var a = Bl(o.id, o.styles, []);
          for (var u = 0; u < a.length; u++) {
            var s = document.createElement('style');
            s.textContent = a[u];
            i.shadowRoot.appendChild(s);
          }
          return i;
        }
        var t = Gl;
        Object(r.__extends)(e, t);
        e.prototype.nodeOrShadowRoot = function(t) {
          if (t === this.hostEl) {
            return this.shadowRoot;
          } else {
            return t;
          }
        };
        e.prototype.destroy = function() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        };
        e.prototype.appendChild = function(e, n) {
          return t.prototype.appendChild.call(
            this,
            this.nodeOrShadowRoot(e),
            n
          );
        };
        e.prototype.insertBefore = function(e, n, r) {
          return t.prototype.insertBefore.call(
            this,
            this.nodeOrShadowRoot(e),
            n,
            r
          );
        };
        e.prototype.removeChild = function(e, n) {
          return t.prototype.removeChild.call(
            this,
            this.nodeOrShadowRoot(e),
            n
          );
        };
        e.prototype.parentNode = function(e) {
          return this.nodeOrShadowRoot(
            t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e))
          );
        };
        return e;
      })();
      var Jl =
        (typeof Zone != 'undefined' && Zone.__symbol__) ||
        function(t) {
          return '__zone_symbol__' + t;
        };
      var Yl = Jl('addEventListener');
      var Xl = Jl('removeEventListener');
      var tc = {};
      var ec = '__zone_symbol__propagationStopped';
      var nc = (function() {
        var t = typeof Zone != 'undefined' && Zone[Jl('BLACK_LISTED_EVENTS')];
        if (t) {
          var e = {};
          t.forEach(function(t) {
            e[t] = t;
          });
          return e;
        }
      })();
      var rc = function(t) {
        return !!nc && nc.hasOwnProperty(t);
      };
      var oc = function(t) {
        var e = tc[t.type];
        if (e) {
          var n = this[e];
          if (n) {
            var r = [t];
            if (n.length === 1) {
              if ((a = n[0]).zone === Zone.current) {
                return a.handler.apply(this, r);
              } else {
                return a.zone.run(a.handler, this, r);
              }
            }
            var o = n.slice();
            for (var i = 0; i < o.length && t[ec] !== true; i++) {
              var a;
              if ((a = o[i]).zone === Zone.current) {
                a.handler.apply(this, r);
              } else {
                a.zone.run(a.handler, this, r);
              }
            }
          }
        }
      };
      var ic = (function() {
        function e(e, n, r) {
          var o = t.call(this, e) || this;
          o.ngZone = n;
          if (
            !r ||
            !(function() {
              var t = r;
              return t === Wu;
            })()
          ) {
            o.patchEvent();
          }
          return o;
        }
        var t = Dl;
        Object(r.__extends)(e, t);
        e.prototype.patchEvent = function() {
          if (
            typeof Event != 'undefined' &&
            Event &&
            Event.prototype &&
            !Event.prototype.__zone_symbol__stopImmediatePropagation
          ) {
            var t = (Event.prototype.__zone_symbol__stopImmediatePropagation =
              Event.prototype.stopImmediatePropagation);
            Event.prototype.stopImmediatePropagation = function() {
              if (this) {
                this[ec] = true;
              }
              if (t) {
                t.apply(this, arguments);
              }
            };
          }
        };
        e.prototype.supports = function(t) {
          return true;
        };
        e.prototype.addEventListener = function(t, e, n) {
          var r = this;
          var o = n;
          if (!t[Yl] || (li.isInAngularZone() && !rc(e))) {
            t.addEventListener(e, o, false);
          } else {
            var i = tc[e];
            if (!i) {
              i = tc[e] = Jl('ANGULAR' + e + 'FALSE');
            }
            var a = t[i];
            var u = a && a.length > 0;
            if (!a) {
              a = t[i] = [];
            }
            var s = rc(e) ? Zone.root : Zone.current;
            if (a.length === 0) {
              a.push({ zone: s, handler: o });
            } else {
              var l = false;
              for (var c = 0; c < a.length; c++) {
                if (a[c].handler === o) {
                  l = true;
                  break;
                }
              }
              if (!l) {
                a.push({ zone: s, handler: o });
              }
            }
            if (!u) {
              t[Yl](e, oc, false);
            }
          }
          return function() {
            return r.removeEventListener(t, e, o);
          };
        };
        e.prototype.removeEventListener = function(t, e, n) {
          var r = t[Xl];
          if (!r) {
            return t.removeEventListener.apply(t, [e, n, false]);
          }
          var o = tc[e];
          var i = o && t[o];
          if (!i) {
            return t.removeEventListener.apply(t, [e, n, false]);
          }
          var a = false;
          for (var u = 0; u < i.length; u++) {
            if (i[u].handler === n) {
              a = true;
              i.splice(u, 1);
              break;
            }
          }
          if (a) {
            if (i.length === 0) {
              r.apply(t, [e, oc, false]);
            }
          } else {
            t.removeEventListener.apply(t, [e, n, false]);
          }
        };
        return e;
      })();
      var ac = {
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
      var uc = new At('HammerGestureConfig');
      var sc = new At('HammerLoader');
      var lc = (function() {
        function t() {
          this.events = [];
          this.overrides = {};
        }
        t.prototype.buildHammer = function(t) {
          var e = new Hammer(t, this.options);
          for (var n in (e.get('pinch').set({ enable: true }),
          e.get('rotate').set({ enable: true }),
          this.overrides)) {
            e.get(n).set(this.overrides[n]);
          }
          return e;
        };
        return t;
      })();
      var cc = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e) || this;
          i._config = n;
          i.console = r;
          i.loader = o;
          return i;
        }
        var t = Dl;
        Object(r.__extends)(e, t);
        e.prototype.supports = function(t) {
          return (
            (!!ac.hasOwnProperty(t.toLowerCase()) || !!this.isCustomEvent(t)) &&
            (!!window.Hammer ||
              !!this.loader ||
              !(this.console.warn(
                'The "' +
                  t +
                  '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'
              ),
              1))
          );
        };
        e.prototype.addEventListener = function(t, e, n) {
          var r = this;
          var o = this.manager.getZone();
          e = e.toLowerCase();
          if (!window.Hammer && this.loader) {
            var i = false;
            var a = function() {
              i = true;
            };
            this.loader()
              .then(function() {
                if (!window.Hammer) {
                  r.console.warn(
                    'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                  );
                  a = function() {};
                  return;
                }
                if (!i) {
                  a = r.addEventListener(t, e, n);
                }
              })
              .catch(function() {
                r.console.warn(
                  'The "' +
                    e +
                    '" event cannot be bound because the custom Hammer.JS loader failed.'
                );
                a = function() {};
              });
            return function() {
              a();
            };
          }
          return o.runOutsideAngular(function() {
            var i = r._config.buildHammer(t);
            var a = function(t) {
              o.runGuarded(function() {
                n(t);
              });
            };
            i.on(e, a);
            return function() {
              i.off(e, a);
              if (typeof i.destroy == 'function') {
                i.destroy();
              }
            };
          });
        };
        e.prototype.isCustomEvent = function(t) {
          return this._config.events.indexOf(t) > -1;
        };
        return e;
      })();
      var pc = ['alt', 'control', 'meta', 'shift'];
      var hc = {
        alt: function(t) {
          return t.altKey;
        },
        control: function(t) {
          return t.ctrlKey;
        },
        meta: function(t) {
          return t.metaKey;
        },
        shift: function(t) {
          return t.shiftKey;
        },
      };
      var fc = (function() {
        function e(e) {
          return t.call(this, e) || this;
        }
        var t = Dl;
        Object(r.__extends)(e, t);
        var n = e;
        e.prototype.supports = function(t) {
          return n.parseEventName(t) != null;
        };
        e.prototype.addEventListener = function(t, e, r) {
          var o = n.parseEventName(e);
          var i = n.eventCallback(o.fullKey, r, this.manager.getZone());
          return this.manager.getZone().runOutsideAngular(function() {
            return gl().onAndCancel(t, o.domEventName, i);
          });
        };
        e.parseEventName = function(t) {
          var e = t.toLowerCase().split('.');
          var r = e.shift();
          if (e.length === 0 || (r !== 'keydown' && r !== 'keyup')) {
            return null;
          }
          var o = n._normalizeKey(e.pop());
          var i = '';
          pc.forEach(function(t) {
            var n = e.indexOf(t);
            if (n > -1) {
              e.splice(n, 1);
              i += t + '.';
            }
          });
          i += o;
          if (e.length != 0 || o.length === 0) {
            return null;
          }
          var a = {};
          a.domEventName = r;
          a.fullKey = i;
          return a;
        };
        e.getEventFullKey = function(t) {
          var e = '';
          var n = gl().getEventKey(t);
          if ((n = n.toLowerCase()) === ' ') {
            n = 'space';
          } else if (n === '.') {
            n = 'dot';
          }
          pc.forEach(function(r) {
            if (r != n && hc[r](t)) {
              e += r + '.';
            }
          });
          return (e += n);
        };
        e.eventCallback = function(t, e, r) {
          return function(o) {
            if (n.getEventFullKey(o) === t) {
              r.runGuarded(function() {
                return e(o);
              });
            }
          };
        };
        e._normalizeKey = function(t) {
          switch (t) {
            case 'esc':
              return 'escape';
            default:
              return t;
          }
        };
        return e;
      })();
      var dc = function() {};
      var yc = (function() {
        function e(e) {
          var n = t.call(this) || this;
          n._doc = e;
          return n;
        }
        var t = dc;
        Object(r.__extends)(e, t);
        e.prototype.sanitize = function(t, e) {
          if (e == null) {
            return null;
          }
          switch (t) {
            case Oe.NONE:
              return e;
            case Oe.HTML:
              if (e instanceof gc) {
                return e.changingThisBreaksApplicationSecurity;
              } else {
                this.checkNotSafeValue(e, 'HTML');
                return (function(t, e) {
                  var n = null;
                  try {
                    pe = pe || new ie(t);
                    var r = e ? String(e) : '';
                    n = pe.getInertBodyElement(r);
                    var o = 5;
                    var i = r;
                    do {
                      if (o === 0) {
                        throw new Error(
                          'Failed to sanitize html because the input is unstable'
                        );
                      }
                      o--;
                      r = i;
                      i = n.innerHTML;
                      n = pe.getInertBodyElement(r);
                    } while (r !== i);
                    var a = new we();
                    var u = a.sanitizeChildren(Se(n) || n);
                    if (oe() && a.sanitizedSomething) {
                      console.warn(
                        'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                      );
                    }
                    return u;
                  } finally {
                    if (n) {
                      for (var s = Se(n) || n; s.firstChild; ) {
                        s.removeChild(s.firstChild);
                      }
                    }
                  }
                })(this._doc, String(e));
              }
            case Oe.STYLE:
              if (e instanceof mc) {
                return e.changingThisBreaksApplicationSecurity;
              } else {
                this.checkNotSafeValue(e, 'Style');
                return (function(t) {
                  if (!(t = String(t).trim())) {
                    return '';
                  }
                  var e = t.match(Pe);
                  if (
                    (e && se(e[1]) === e[1]) ||
                    (t.match(ke) &&
                      (function(t) {
                        var e = true;
                        var n = true;
                        for (var r = 0; r < t.length; r++) {
                          var o = t.charAt(r);
                          if (o === "'" && n) {
                            e = !e;
                          } else if (o === '"' && e) {
                            n = !n;
                          }
                        }
                        return e && n;
                      })(t))
                  ) {
                    return t;
                  } else {
                    if (oe()) {
                      console.warn(
                        'WARNING: sanitizing unsafe style value ' +
                          t +
                          ' (see http://g.co/ng/security#xss).'
                      );
                    }
                    return 'unsafe';
                  }
                })(e);
              }
            case Oe.SCRIPT:
              if (e instanceof _c) {
                return e.changingThisBreaksApplicationSecurity;
              }
              this.checkNotSafeValue(e, 'Script');
              throw new Error('unsafe value used in a script context');
            case Oe.URL:
              if (e instanceof wc || e instanceof bc) {
                return e.changingThisBreaksApplicationSecurity;
              } else {
                this.checkNotSafeValue(e, 'URL');
                return se(String(e));
              }
            case Oe.RESOURCE_URL:
              if (e instanceof wc) {
                return e.changingThisBreaksApplicationSecurity;
              }
              this.checkNotSafeValue(e, 'ResourceURL');
              throw new Error(
                'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
              );
            default:
              throw new Error(
                'Unexpected SecurityContext ' +
                  t +
                  ' (see http://g.co/ng/security#xss)'
              );
          }
        };
        e.prototype.checkNotSafeValue = function(t, e) {
          if (t instanceof vc) {
            throw new Error(
              'Required a safe ' +
                e +
                ', got a ' +
                t.getTypeName() +
                ' (see http://g.co/ng/security#xss)'
            );
          }
        };
        e.prototype.bypassSecurityTrustHtml = function(t) {
          return new gc(t);
        };
        e.prototype.bypassSecurityTrustStyle = function(t) {
          return new mc(t);
        };
        e.prototype.bypassSecurityTrustScript = function(t) {
          return new _c(t);
        };
        e.prototype.bypassSecurityTrustUrl = function(t) {
          return new bc(t);
        };
        e.prototype.bypassSecurityTrustResourceUrl = function(t) {
          return new wc(t);
        };
        return e;
      })();
      var vc = (function() {
        function t(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        t.prototype.toString = function() {
          return (
            'SafeValue must use [property]=binding: ' +
            this.changingThisBreaksApplicationSecurity +
            ' (see http://g.co/ng/security#xss)'
          );
        };
        return t;
      })();
      var gc = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = vc;
        Object(r.__extends)(e, t);
        e.prototype.getTypeName = function() {
          return 'HTML';
        };
        return e;
      })();
      var mc = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = vc;
        Object(r.__extends)(e, t);
        e.prototype.getTypeName = function() {
          return 'Style';
        };
        return e;
      })();
      var _c = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = vc;
        Object(r.__extends)(e, t);
        e.prototype.getTypeName = function() {
          return 'Script';
        };
        return e;
      })();
      var bc = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = vc;
        Object(r.__extends)(e, t);
        e.prototype.getTypeName = function() {
          return 'URL';
        };
        return e;
      })();
      var wc = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = vc;
        Object(r.__extends)(e, t);
        e.prototype.getTypeName = function() {
          return 'ResourceURL';
        };
        return e;
      })();
      var Cc = Ci(Li, 'browser', [
        { provide: zo, useValue: 'browser' },
        {
          provide: Ho,
          useValue: function() {
            El.makeCurrent();
            Al.init();
          },
          multi: true,
        },
        { provide: Su, useClass: Tl, deps: [Gu] },
        {
          provide: Gu,
          useFactory: function() {
            return document;
          },
          deps: [],
        },
      ]);
      var Ec = (function() {
        function t(t) {
          if (t) {
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
          }
        }
        var e = t;
        t.withServerTransition = function(t) {
          return {
            ngModule: e,
            providers: [
              { provide: Uo, useValue: t.appId },
              { provide: kl, useExisting: Uo },
              Pl,
            ],
          };
        };
        return t;
      })();
      if (typeof window != 'undefined') {
        window;
      }
      var Sc = function(t, e) {
        this.id = t;
        this.url = e;
      };
      var Oc = (function() {
        function e(e, n, r, o) {
          if (r === void 0) {
            r = 'imperative';
          }
          if (o === void 0) {
            o = null;
          }
          var i = t.call(this, e, n) || this;
          i.navigationTrigger = r;
          i.restoredState = o;
          return i;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'NavigationStart(id: ' + this.id + ", url: '" + this.url + "')"
          );
        };
        return e;
      })();
      var Tc = (function() {
        function e(e, n, r) {
          var o = t.call(this, e, n) || this;
          o.urlAfterRedirects = r;
          return o;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'NavigationEnd(id: ' +
            this.id +
            ", url: '" +
            this.url +
            "', urlAfterRedirects: '" +
            this.urlAfterRedirects +
            "')"
          );
        };
        return e;
      })();
      var kc = (function() {
        function e(e, n, r) {
          var o = t.call(this, e, n) || this;
          o.reason = r;
          return o;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'NavigationCancel(id: ' + this.id + ", url: '" + this.url + "')"
          );
        };
        return e;
      })();
      var Pc = (function() {
        function e(e, n, r) {
          var o = t.call(this, e, n) || this;
          o.error = r;
          return o;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'NavigationError(id: ' +
            this.id +
            ", url: '" +
            this.url +
            "', error: " +
            this.error +
            ')'
          );
        };
        return e;
      })();
      var Ac = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e, n) || this;
          i.urlAfterRedirects = r;
          i.state = o;
          return i;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'RoutesRecognized(id: ' +
            this.id +
            ", url: '" +
            this.url +
            "', urlAfterRedirects: '" +
            this.urlAfterRedirects +
            "', state: " +
            this.state +
            ')'
          );
        };
        return e;
      })();
      var Ic = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e, n) || this;
          i.urlAfterRedirects = r;
          i.state = o;
          return i;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'GuardsCheckStart(id: ' +
            this.id +
            ", url: '" +
            this.url +
            "', urlAfterRedirects: '" +
            this.urlAfterRedirects +
            "', state: " +
            this.state +
            ')'
          );
        };
        return e;
      })();
      var Rc = (function() {
        function e(e, n, r, o, i) {
          var a = t.call(this, e, n) || this;
          a.urlAfterRedirects = r;
          a.state = o;
          a.shouldActivate = i;
          return a;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'GuardsCheckEnd(id: ' +
            this.id +
            ", url: '" +
            this.url +
            "', urlAfterRedirects: '" +
            this.urlAfterRedirects +
            "', state: " +
            this.state +
            ', shouldActivate: ' +
            this.shouldActivate +
            ')'
          );
        };
        return e;
      })();
      var Nc = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e, n) || this;
          i.urlAfterRedirects = r;
          i.state = o;
          return i;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'ResolveStart(id: ' +
            this.id +
            ", url: '" +
            this.url +
            "', urlAfterRedirects: '" +
            this.urlAfterRedirects +
            "', state: " +
            this.state +
            ')'
          );
        };
        return e;
      })();
      var jc = (function() {
        function e(e, n, r, o) {
          var i = t.call(this, e, n) || this;
          i.urlAfterRedirects = r;
          i.state = o;
          return i;
        }
        var t = Sc;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return (
            'ResolveEnd(id: ' +
            this.id +
            ", url: '" +
            this.url +
            "', urlAfterRedirects: '" +
            this.urlAfterRedirects +
            "', state: " +
            this.state +
            ')'
          );
        };
        return e;
      })();
      var Mc = (function() {
        function t(t) {
          this.route = t;
        }
        t.prototype.toString = function() {
          return 'RouteConfigLoadStart(path: ' + this.route.path + ')';
        };
        return t;
      })();
      var Dc = (function() {
        function t(t) {
          this.route = t;
        }
        t.prototype.toString = function() {
          return 'RouteConfigLoadEnd(path: ' + this.route.path + ')';
        };
        return t;
      })();
      var Vc = (function() {
        function t(t) {
          this.snapshot = t;
        }
        t.prototype.toString = function() {
          return (
            "ChildActivationStart(path: '" +
            ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
              '') +
            "')"
          );
        };
        return t;
      })();
      var Uc = (function() {
        function t(t) {
          this.snapshot = t;
        }
        t.prototype.toString = function() {
          return (
            "ChildActivationEnd(path: '" +
            ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
              '') +
            "')"
          );
        };
        return t;
      })();
      var Lc = (function() {
        function t(t) {
          this.snapshot = t;
        }
        t.prototype.toString = function() {
          return (
            "ActivationStart(path: '" +
            ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
              '') +
            "')"
          );
        };
        return t;
      })();
      var Fc = (function() {
        function t(t) {
          this.snapshot = t;
        }
        t.prototype.toString = function() {
          return (
            "ActivationEnd(path: '" +
            ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
              '') +
            "')"
          );
        };
        return t;
      })();
      var Hc = (function() {
        function t(t, e, n) {
          this.routerEvent = t;
          this.position = e;
          this.anchor = n;
        }
        t.prototype.toString = function() {
          return (
            "Scroll(anchor: '" +
            this.anchor +
            "', position: '" +
            (this.position
              ? this.position[0] + ', ' + this.position[1]
              : null) +
            "')"
          );
        };
        return t;
      })();
      var zc = function() {};
      var Bc = 'primary';
      var qc = (function() {
        function t(t) {
          this.params = t || {};
        }
        t.prototype.has = function(t) {
          return this.params.hasOwnProperty(t);
        };
        t.prototype.get = function(t) {
          if (this.has(t)) {
            var e = this.params[t];
            if (Array.isArray(e)) {
              return e[0];
            } else {
              return e;
            }
          }
          return null;
        };
        t.prototype.getAll = function(t) {
          if (this.has(t)) {
            var e = this.params[t];
            if (Array.isArray(e)) {
              return e;
            } else {
              return [e];
            }
          }
          return [];
        };
        Object.defineProperty(t.prototype, 'keys', {
          get: function() {
            return Object.keys(this.params);
          },
          enumerable: true,
          configurable: true,
        });
        return t;
      })();
      var Gc = 'ngNavigationCancelingError';
      var Kc = function(t, e) {
        this.routes = t;
        this.module = e;
      };
      var ap = (function() {
        function t(t, e, n) {
          this.root = t;
          this.queryParams = e;
          this.fragment = n;
        }
        Object.defineProperty(t.prototype, 'queryParamMap', {
          get: function() {
            if (!this._queryParamMap) {
              this._queryParamMap = Qc(this.queryParams);
            }
            return this._queryParamMap;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.toString = function() {
          return fp.serialize(this);
        };
        return t;
      })();
      var up = (function() {
        function t(t, e) {
          var n = this;
          this.segments = t;
          this.children = e;
          this.parent = null;
          rp(e, function(t, e) {
            return (t.parent = n);
          });
        }
        t.prototype.hasChildren = function() {
          return this.numberOfChildren > 0;
        };
        Object.defineProperty(t.prototype, 'numberOfChildren', {
          get: function() {
            return Object.keys(this.children).length;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.toString = function() {
          return dp(this);
        };
        return t;
      })();
      var sp = (function() {
        function t(t, e) {
          this.path = t;
          this.parameters = e;
        }
        Object.defineProperty(t.prototype, 'parameterMap', {
          get: function() {
            if (!this._parameterMap) {
              this._parameterMap = Qc(this.parameters);
            }
            return this._parameterMap;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.toString = function() {
          return bp(this);
        };
        return t;
      })();
      var pp = function() {};
      var hp = (function() {
        function t() {}
        t.prototype.parse = function(t) {
          var e = new Sp(t);
          return new ap(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        };
        t.prototype.serialize = function(t) {
          var e;
          var n;
          return (
            '/' +
            (function t(e, n) {
              if (!e.hasChildren()) {
                return dp(e);
              }
              if (n) {
                var r = e.children[Bc] ? t(e.children[Bc], false) : '';
                var o = [];
                rp(e.children, function(e, n) {
                  if (n !== Bc) {
                    o.push(n + ':' + t(e, false));
                  }
                });
                if (o.length > 0) {
                  return r + '(' + o.join('//') + ')';
                } else {
                  return r;
                }
              }
              var i = cp(e, function(n, r) {
                if (r === Bc) {
                  return [t(e.children[Bc], false)];
                } else {
                  return [r + ':' + t(n, false)];
                }
              });
              return dp(e) + '/(' + i.join('//') + ')';
            })(t.root, true) +
            ((e = t.queryParams),
            (n = Object.keys(e).map(function(t) {
              var n = e[t];
              if (Array.isArray(n)) {
                return n
                  .map(function(e) {
                    return vp(t) + '=' + vp(e);
                  })
                  .join('&');
              } else {
                return vp(t) + '=' + vp(n);
              }
            })).length
              ? '?' + n.join('&')
              : '') +
            (typeof t.fragment == 'string' ? '#' + encodeURI(t.fragment) : '')
          );
        };
        return t;
      })();
      var fp = new hp();
      var wp = /^[^\/()?;=#]+/;
      var xp = /^[^=?&#]+/;
      var Ep = /^[^?&#]+/;
      var Sp = (function() {
        function t(t) {
          this.url = t;
          this.remaining = t;
        }
        t.prototype.parseRootSegment = function() {
          this.consumeOptional('/');
          if (
            this.remaining === '' ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
          ) {
            return new up([], {});
          } else {
            return new up([], this.parseChildren());
          }
        };
        t.prototype.parseQueryParams = function() {
          var t = {};
          if (this.consumeOptional('?')) {
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          }
          return t;
        };
        t.prototype.parseFragment = function() {
          if (this.consumeOptional('#')) {
            return decodeURIComponent(this.remaining);
          } else {
            return null;
          }
        };
        t.prototype.parseChildren = function() {
          if (this.remaining === '') {
            return {};
          }
          this.consumeOptional('/');
          var t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          ) {
            this.capture('/');
            t.push(this.parseSegment());
          }
          var e = {};
          if (this.peekStartsWith('/(')) {
            this.capture('/');
            e = this.parseParens(true);
          }
          var n = {};
          if (this.peekStartsWith('(')) {
            n = this.parseParens(false);
          }
          if (t.length > 0 || Object.keys(e).length > 0) {
            n[Bc] = new up(t, e);
          }
          return n;
        };
        t.prototype.parseSegment = function() {
          var t = Cp(this.remaining);
          if (t === '' && this.peekStartsWith(';')) {
            throw new Error(
              "Empty path url segment cannot have parameters: '" +
                this.remaining +
                "'."
            );
          }
          this.capture(t);
          return new sp(mp(t), this.parseMatrixParams());
        };
        t.prototype.parseMatrixParams = function() {
          for (var t = {}; this.consumeOptional(';'); ) {
            this.parseParam(t);
          }
          return t;
        };
        t.prototype.parseParam = function(t) {
          var e = Cp(this.remaining);
          if (e) {
            this.capture(e);
            var n = '';
            if (this.consumeOptional('=')) {
              var r = Cp(this.remaining);
              if (r) {
                this.capture((n = r));
              }
            }
            t[mp(e)] = mp(n);
          }
        };
        t.prototype.parseQueryParam = function(t) {
          var e;
          var n = (e = this.remaining.match(xp)) ? e[0] : '';
          if (n) {
            this.capture(n);
            var r = '';
            if (this.consumeOptional('=')) {
              var o = (function(t) {
                var e = t.match(Ep);
                if (e) {
                  return e[0];
                } else {
                  return '';
                }
              })(this.remaining);
              if (o) {
                this.capture((r = o));
              }
            }
            var i = _p(n);
            var a = _p(r);
            if (t.hasOwnProperty(i)) {
              var u = t[i];
              if (!Array.isArray(u)) {
                t[i] = u = [u];
              }
              u.push(a);
            } else {
              t[i] = a;
            }
          }
        };
        t.prototype.parseParens = function(t) {
          var e = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            var n = Cp(this.remaining);
            var r = this.remaining[n.length];
            if (r !== '/' && r !== ')' && r !== ';') {
              throw new Error("Cannot parse url '" + this.url + "'");
            }
            var o = void 0;
            if (n.indexOf(':') > -1) {
              o = n.substr(0, n.indexOf(':'));
              this.capture(o);
              this.capture(':');
            } else if (t) {
              o = Bc;
            }
            var i = this.parseChildren();
            e[o] = Object.keys(i).length === 1 ? i[Bc] : new up([], i);
            this.consumeOptional('//');
          }
          return e;
        };
        t.prototype.peekStartsWith = function(t) {
          return this.remaining.startsWith(t);
        };
        t.prototype.consumeOptional = function(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), true)
          );
        };
        t.prototype.capture = function(t) {
          if (!this.consumeOptional(t)) {
            throw new Error('Expected "' + t + '".');
          }
        };
        return t;
      })();
      var Op = (function() {
        function t(t) {
          this._root = t;
        }
        Object.defineProperty(t.prototype, 'root', {
          get: function() {
            return this._root.value;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.parent = function(t) {
          var e = this.pathFromRoot(t);
          if (e.length > 1) {
            return e[e.length - 2];
          } else {
            return null;
          }
        };
        t.prototype.children = function(t) {
          var e = Tp(t, this._root);
          if (e) {
            return e.children.map(function(t) {
              return t.value;
            });
          } else {
            return [];
          }
        };
        t.prototype.firstChild = function(t) {
          var e = Tp(t, this._root);
          if (e && e.children.length > 0) {
            return e.children[0].value;
          } else {
            return null;
          }
        };
        t.prototype.siblings = function(t) {
          var e = kp(t, this._root);
          if (e.length < 2) {
            return [];
          } else {
            return e[e.length - 2].children
              .map(function(t) {
                return t.value;
              })
              .filter(function(e) {
                return e !== t;
              });
          }
        };
        t.prototype.pathFromRoot = function(t) {
          return kp(t, this._root).map(function(t) {
            return t.value;
          });
        };
        return t;
      })();
      var Pp = (function() {
        function t(t, e) {
          this.value = t;
          this.children = e;
        }
        t.prototype.toString = function() {
          return 'TreeNode(' + this.value + ')';
        };
        return t;
      })();
      var Ip = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.snapshot = n;
          Vp(r, e);
          return r;
        }
        var t = Op;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return this.snapshot.toString();
        };
        return e;
      })();
      var Np = (function() {
        function t(t, e, n, r, o, i, a, u) {
          this.url = t;
          this.params = e;
          this.queryParams = n;
          this.fragment = r;
          this.data = o;
          this.outlet = i;
          this.component = a;
          this._futureSnapshot = u;
        }
        Object.defineProperty(t.prototype, 'routeConfig', {
          get: function() {
            return this._futureSnapshot.routeConfig;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'root', {
          get: function() {
            return this._routerState.root;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'parent', {
          get: function() {
            return this._routerState.parent(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'firstChild', {
          get: function() {
            return this._routerState.firstChild(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'children', {
          get: function() {
            return this._routerState.children(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'pathFromRoot', {
          get: function() {
            return this._routerState.pathFromRoot(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'paramMap', {
          get: function() {
            if (!this._paramMap) {
              this._paramMap = this.params.pipe(
                B(function(t) {
                  return Qc(t);
                })
              );
            }
            return this._paramMap;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'queryParamMap', {
          get: function() {
            if (!this._queryParamMap) {
              this._queryParamMap = this.queryParams.pipe(
                B(function(t) {
                  return Qc(t);
                })
              );
            }
            return this._queryParamMap;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.toString = function() {
          if (this.snapshot) {
            return this.snapshot.toString();
          } else {
            return 'Future(' + this._futureSnapshot + ')';
          }
        };
        return t;
      })();
      var Mp = (function() {
        function t(t, e, n, r, o, i, a, u, s, l, c) {
          this.url = t;
          this.params = e;
          this.queryParams = n;
          this.fragment = r;
          this.data = o;
          this.outlet = i;
          this.component = a;
          this.routeConfig = u;
          this._urlSegment = s;
          this._lastPathIndex = l;
          this._resolve = c;
        }
        Object.defineProperty(t.prototype, 'root', {
          get: function() {
            return this._routerState.root;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'parent', {
          get: function() {
            return this._routerState.parent(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'firstChild', {
          get: function() {
            return this._routerState.firstChild(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'children', {
          get: function() {
            return this._routerState.children(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'pathFromRoot', {
          get: function() {
            return this._routerState.pathFromRoot(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'paramMap', {
          get: function() {
            if (!this._paramMap) {
              this._paramMap = Qc(this.params);
            }
            return this._paramMap;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'queryParamMap', {
          get: function() {
            if (!this._queryParamMap) {
              this._queryParamMap = Qc(this.queryParams);
            }
            return this._queryParamMap;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.toString = function() {
          return (
            "Route(url:'" +
            this.url
              .map(function(t) {
                return t.toString();
              })
              .join('/') +
            "', path:'" +
            (this.routeConfig ? this.routeConfig.path : '') +
            "')"
          );
        };
        return t;
      })();
      var Dp = (function() {
        function e(e, n) {
          var r = t.call(this, n) || this;
          r.url = e;
          Vp(r, n);
          return r;
        }
        var t = Op;
        Object(r.__extends)(e, t);
        e.prototype.toString = function() {
          return Up(this._root);
        };
        return e;
      })();
      var Bp = (function() {
        function t(t, e, n) {
          this.isAbsolute = t;
          this.numberOfDoubleDots = e;
          this.commands = n;
          if (t && n.length > 0 && Hp(n[0])) {
            throw new Error('Root segment cannot have matrix parameters');
          }
          var r = n.find(function(t) {
            return typeof t == 'object' && t != null && t.outlets;
          });
          if (r && r !== np(n)) {
            throw new Error('{outlets:{}} has to be the last command');
          }
        }
        t.prototype.toRoot = function() {
          return (
            this.isAbsolute &&
            this.commands.length === 1 &&
            this.commands[0] == '/'
          );
        };
        return t;
      })();
      var qp = function(t, e, n) {
        this.segmentGroup = t;
        this.processChildren = e;
        this.index = n;
      };
      var Yp = (function() {
        function t(t, e, n, r) {
          this.routeReuseStrategy = t;
          this.futureState = e;
          this.currState = n;
          this.forwardEvent = r;
        }
        t.prototype.activate = function(t) {
          var e = this.futureState._root;
          var n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t);
          Lp(this.futureState.root);
          this.activateChildRoutes(e, n, t);
        };
        t.prototype.deactivateChildRoutes = function(t, e, n) {
          var r = this;
          var o = Ap(e);
          t.children.forEach(function(t) {
            var e = t.value.outlet;
            r.deactivateRoutes(t, o[e], n);
            delete o[e];
          });
          rp(o, function(t, e) {
            r.deactivateRouteAndItsChildren(t, n);
          });
        };
        t.prototype.deactivateRoutes = function(t, e, n) {
          var r = t.value;
          var o = e ? e.value : null;
          if (r === o) {
            if (r.component) {
              var i = n.getContext(r.outlet);
              if (i) {
                this.deactivateChildRoutes(t, e, i.children);
              }
            } else {
              this.deactivateChildRoutes(t, e, n);
            }
          } else if (o) {
            this.deactivateRouteAndItsChildren(e, n);
          }
        };
        t.prototype.deactivateRouteAndItsChildren = function(t, e) {
          if (this.routeReuseStrategy.shouldDetach(t.value.snapshot)) {
            this.detachAndStoreRouteSubtree(t, e);
          } else {
            this.deactivateRouteAndOutlet(t, e);
          }
        };
        t.prototype.detachAndStoreRouteSubtree = function(t, e) {
          var n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            var r = n.outlet.detach();
            var o = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: r,
              route: t,
              contexts: o,
            });
          }
        };
        t.prototype.deactivateRouteAndOutlet = function(t, e) {
          var n = this;
          var r = e.getContext(t.value.outlet);
          if (r) {
            var o = Ap(t);
            var i = t.value.component ? r.children : e;
            rp(o, function(t, e) {
              return n.deactivateRouteAndItsChildren(t, i);
            });
            if (r.outlet) {
              r.outlet.deactivate();
              r.children.onOutletDeactivated();
            }
          }
        };
        t.prototype.activateChildRoutes = function(t, e, n) {
          var r = this;
          var o = Ap(e);
          t.children.forEach(function(t) {
            r.activateRoutes(t, o[t.value.outlet], n);
            r.forwardEvent(new Fc(t.value.snapshot));
          });
          if (t.children.length) {
            this.forwardEvent(new Uc(t.value.snapshot));
          }
        };
        t.prototype.activateRoutes = function(t, e, n) {
          var r = t.value;
          var o = e ? e.value : null;
          Lp(r);
          if (r === o) {
            if (r.component) {
              var i = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, i.children);
            } else {
              this.activateChildRoutes(t, e, n);
            }
          } else if (r.component) {
            i = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              var a = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null);
              i.children.onOutletReAttached(a.contexts);
              i.attachRef = a.componentRef;
              i.route = a.route.value;
              if (i.outlet) {
                i.outlet.attach(a.componentRef, a.route.value);
              }
              Xp(a.route);
            } else {
              var u = (function() {
                var t = r.snapshot;
                for (var e = t.parent; e; e = e.parent) {
                  var n = e.routeConfig;
                  if (n && n._loadedConfig) {
                    return n._loadedConfig;
                  }
                  if (n && n.component) {
                    return null;
                  }
                }
                return null;
              })();
              var s = u ? u.module.componentFactoryResolver : null;
              i.attachRef = null;
              i.route = r;
              i.resolver = s;
              if (i.outlet) {
                i.outlet.activateWith(r, s);
              }
              this.activateChildRoutes(t, null, i.children);
            }
          } else {
            this.activateChildRoutes(t, null, n);
          }
        };
        return t;
      })();
      var nh = function(t) {
        this.segmentGroup = t || null;
      };
      var rh = function(t) {
        this.urlTree = t;
      };
      var uh = (function() {
        function t(t, e, n, r, o) {
          this.configLoader = e;
          this.urlSerializer = n;
          this.urlTree = r;
          this.config = o;
          this.allowRedirects = true;
          this.ngModule = t.get(Bt);
        }
        t.prototype.apply = function() {
          var t = this;
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            Bc
          )
            .pipe(
              B(function(e) {
                return t.createUrlTree(
                  e,
                  t.urlTree.queryParams,
                  t.urlTree.fragment
                );
              })
            )
            .pipe(
              Ys(function(e) {
                if (e instanceof rh) {
                  t.allowRedirects = false;
                  return t.match(e.urlTree);
                }
                if (e instanceof nh) {
                  throw t.noMatchError(e);
                }
                throw e;
              })
            );
        };
        t.prototype.match = function(t) {
          var e = this;
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, Bc)
            .pipe(
              B(function(n) {
                return e.createUrlTree(n, t.queryParams, t.fragment);
              })
            )
            .pipe(
              Ys(function(t) {
                if (t instanceof nh) {
                  throw e.noMatchError(t);
                }
                throw t;
              })
            );
        };
        t.prototype.noMatchError = function(t) {
          return new Error(
            "Cannot match any routes. URL Segment: '" + t.segmentGroup + "'"
          );
        };
        t.prototype.createUrlTree = function(t, e, n) {
          var r;
          var o =
            t.segments.length > 0 ? new up([], (((r = {})[Bc] = t), r)) : t;
          return new ap(o, e, n);
        };
        t.prototype.expandSegmentGroup = function(t, e, n, r) {
          if (n.segments.length === 0 && n.hasChildren()) {
            return this.expandChildren(t, e, n).pipe(
              B(function(t) {
                return new up([], t);
              })
            );
          } else {
            return this.expandSegment(t, n, e, n.segments, r, true);
          }
        };
        t.prototype.expandChildren = function(t, e, n) {
          var r = this;
          return (function(n, o) {
            if (Object.keys(n).length === 0) {
              return bu({});
            }
            var i = [];
            var a = [];
            var u = {};
            rp(n, function(n, o) {
              var s;
              var l;
              var c = ((s = o), (l = n), r.expandSegmentGroup(t, e, l, s)).pipe(
                B(function(t) {
                  return (u[o] = t);
                })
              );
              if (o === Bc) {
                i.push(c);
              } else {
                a.push(c);
              }
            });
            return bu.apply(null, i.concat(a)).pipe(
              Vs(),
              Js(),
              B(function() {
                return u;
              })
            );
          })(n.children);
        };
        t.prototype.expandSegment = function(t, e, n, o, i, a) {
          var u = this;
          return bu.apply(void 0, Object(r.__spread)(n)).pipe(
            B(function(r) {
              return u.expandSegmentAgainstRoute(t, e, n, r, o, i, a).pipe(
                Ys(function(t) {
                  if (t instanceof nh) {
                    return bu(null);
                  }
                  throw t;
                })
              );
            }),
            Vs(),
            ol(function(t) {
              return !!t;
            }),
            Ys(function(t, n) {
              if (t instanceof Is || t.name === 'EmptyError') {
                if (u.noLeftoversInUrl(e, o, i)) {
                  return bu(new up([], {}));
                }
                throw new nh(e);
              }
              throw t;
            })
          );
        };
        t.prototype.noLeftoversInUrl = function(t, e, n) {
          return e.length === 0 && !t.children[n];
        };
        t.prototype.expandSegmentAgainstRoute = function(t, e, n, r, o, i, a) {
          if (ph(r) === i) {
            if (r.redirectTo === void 0) {
              return this.matchSegmentAgainstRoute(t, e, r, o);
            } else if (a && this.allowRedirects) {
              return this.expandSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                o,
                i
              );
            } else {
              return oh(e);
            }
          } else {
            return oh(e);
          }
        };
        t.prototype.expandSegmentAgainstRouteUsingRedirect = function(
          t,
          e,
          n,
          r,
          o,
          i
        ) {
          if (r.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(
              t,
              n,
              r,
              i
            );
          } else {
            return this.expandRegularSegmentAgainstRouteUsingRedirect(
              t,
              e,
              n,
              r,
              o,
              i
            );
          }
        };
        t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(
          t,
          e,
          n,
          r
        ) {
          var o = this;
          var i = this.applyRedirectCommands([], n.redirectTo, {});
          if (n.redirectTo.startsWith('/')) {
            return ih(i);
          } else {
            return this.lineralizeSegments(n, i).pipe(
              Z(function(n) {
                var i = new up(n, {});
                return o.expandSegment(t, i, e, n, r, false);
              })
            );
          }
        };
        t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(
          t,
          e,
          n,
          r,
          o,
          i
        ) {
          var a = this;
          var u = sh(e, r, o);
          var s = u.consumedSegments;
          var l = u.lastChild;
          var c = u.positionalParamSegments;
          if (!u.matched) {
            return oh(e);
          }
          var p = this.applyRedirectCommands(s, r.redirectTo, c);
          if (r.redirectTo.startsWith('/')) {
            return ih(p);
          } else {
            return this.lineralizeSegments(r, p).pipe(
              Z(function(r) {
                return a.expandSegment(t, e, n, r.concat(o.slice(l)), i, false);
              })
            );
          }
        };
        t.prototype.matchSegmentAgainstRoute = function(t, e, n, o) {
          var i = this;
          if (n.path === '**') {
            if (n.loadChildren) {
              return this.configLoader.load(t.injector, n).pipe(
                B(function(t) {
                  n._loadedConfig = t;
                  return new up(o, {});
                })
              );
            } else {
              return bu(new up(o, {}));
            }
          }
          var a = sh(e, n, o);
          var u = a.consumedSegments;
          var s = a.lastChild;
          if (!a.matched) {
            return oh(e);
          }
          var l = o.slice(s);
          return this.getChildConfig(t, n, o).pipe(
            Z(function(t) {
              var n = t.module;
              var o = t.routes;
              var a = (function(t, e, n, o) {
                if (
                  n.length > 0 &&
                  (function(t, e, n) {
                    return n.some(function(n) {
                      return ch(t, e, n) && ph(n) !== Bc;
                    });
                  })(t, n, o)
                ) {
                  return {
                    segmentGroup: lh(
                      new up(
                        e,
                        (function(t, e) {
                          var n;
                          var o;
                          var i = {};
                          i[Bc] = e;
                          try {
                            var a = Object(r.__values)(t);
                            for (var u = a.next(); !u.done; u = a.next()) {
                              var s = u.value;
                              if (s.path === '' && ph(s) !== Bc) {
                                i[ph(s)] = new up([], {});
                              }
                            }
                          } catch (l) {
                            n = { error: l };
                          } finally {
                            try {
                              if (u && !u.done && (o = a.return)) {
                                o.call(a);
                              }
                            } finally {
                              if (n) {
                                throw n.error;
                              }
                            }
                          }
                          return i;
                        })(o, new up(n, t.children))
                      )
                    ),
                    slicedSegments: [],
                  };
                } else if (
                  n.length === 0 &&
                  (function(t, e, n) {
                    return n.some(function(n) {
                      return ch(t, e, n);
                    });
                  })(t, n, o)
                ) {
                  return {
                    segmentGroup: lh(
                      new up(
                        t.segments,
                        (function(t, e, n, o) {
                          var i;
                          var a;
                          var u = {};
                          try {
                            var s = Object(r.__values)(n);
                            for (var l = s.next(); !l.done; l = s.next()) {
                              var c = l.value;
                              if (ch(t, e, c) && !o[ph(c)]) {
                                u[ph(c)] = new up([], {});
                              }
                            }
                          } catch (p) {
                            i = { error: p };
                          } finally {
                            try {
                              if (l && !l.done && (a = s.return)) {
                                a.call(s);
                              }
                            } finally {
                              if (i) {
                                throw i.error;
                              }
                            }
                          }
                          return Object(r.__assign)({}, o, u);
                        })(t, n, o, t.children)
                      )
                    ),
                    slicedSegments: n,
                  };
                } else {
                  return { segmentGroup: t, slicedSegments: n };
                }
              })(e, u, l, o);
              var s = a.segmentGroup;
              var c = a.slicedSegments;
              if (c.length === 0 && s.hasChildren()) {
                return i.expandChildren(n, o, s).pipe(
                  B(function(t) {
                    return new up(u, t);
                  })
                );
              } else if (o.length === 0 && c.length === 0) {
                return bu(new up(u, {}));
              } else {
                return i.expandSegment(n, s, o, c, Bc, true).pipe(
                  B(function(t) {
                    return new up(u.concat(t.segments), t.children);
                  })
                );
              }
            })
          );
        };
        t.prototype.getChildConfig = function(t, e, n) {
          var r = this;
          if (e.children) {
            return bu(new Kc(e.children, t));
          } else if (e.loadChildren) {
            if (e._loadedConfig === void 0) {
              return (function(t, e, n) {
                var r;
                var o = e.canLoad;
                if (o && o.length !== 0) {
                  return W(o)
                    .pipe(
                      B(function(r) {
                        var o;
                        var i = t.get(r);
                        if (
                          (function() {
                            var t = i;
                            return t && th(t.canLoad);
                          })()
                        ) {
                          o = i.canLoad(e, n);
                        } else {
                          if (!th(i)) {
                            throw new Error('Invalid CanLoad guard');
                          }
                          o = i(e, n);
                        }
                        return op(o);
                      })
                    )
                    .pipe(
                      Vs(),
                      ((r = function(t) {
                        return t === true;
                      }),
                      function(t) {
                        return t.lift(new il(r, void 0, t));
                      })
                    );
                } else {
                  return bu(true);
                }
              })(t.injector, e, n).pipe(
                Z(function(n) {
                  if (n) {
                    return r.configLoader.load(t.injector, e).pipe(
                      B(function(t) {
                        e._loadedConfig = t;
                        return t;
                      })
                    );
                  } else {
                    return (function() {
                      var t = e;
                      return new C(function(e) {
                        return e.error(
                          Wc(
                            'Cannot load children because the guard of the route "path: \'' +
                              t.path +
                              '\'" returned false'
                          )
                        );
                      });
                    })();
                  }
                })
              );
            } else {
              return bu(e._loadedConfig);
            }
          } else {
            return bu(new Kc([], t));
          }
        };
        t.prototype.lineralizeSegments = function(t, e) {
          var n = [];
          for (var r = e.root; ; ) {
            n = n.concat(r.segments);
            if (r.numberOfChildren === 0) {
              return bu(n);
            }
            if (r.numberOfChildren > 1 || !r.children[Bc]) {
              return ah(t.redirectTo);
            }
            r = r.children[Bc];
          }
        };
        t.prototype.applyRedirectCommands = function(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        };
        t.prototype.applyRedirectCreatreUrlTree = function(t, e, n, r) {
          var o = this.createSegmentGroup(t, e.root, n, r);
          return new ap(
            o,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        };
        t.prototype.createQueryParams = function(t, e) {
          var n = {};
          rp(t, function(t, r) {
            if (typeof t == 'string' && t.startsWith(':')) {
              var o = t.substring(1);
              n[r] = e[o];
            } else {
              n[r] = t;
            }
          });
          return n;
        };
        t.prototype.createSegmentGroup = function(t, e, n, r) {
          var o = this;
          var i = this.createSegments(t, e.segments, n, r);
          var a = {};
          rp(e.children, function(e, i) {
            a[i] = o.createSegmentGroup(t, e, n, r);
          });
          return new up(i, a);
        };
        t.prototype.createSegments = function(t, e, n, r) {
          var o = this;
          return e.map(function(e) {
            if (e.path.startsWith(':')) {
              return o.findPosParam(t, e, r);
            } else {
              return o.findOrReturn(e, n);
            }
          });
        };
        t.prototype.findPosParam = function(t, e, n) {
          var r = n[e.path.substring(1)];
          if (!r) {
            throw new Error(
              "Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'."
            );
          }
          return r;
        };
        t.prototype.findOrReturn = function(t, e) {
          var n;
          var o;
          var i = 0;
          try {
            var a = Object(r.__values)(e);
            for (var u = a.next(); !u.done; u = a.next()) {
              var s = u.value;
              if (s.path === t.path) {
                e.splice(i);
                return s;
              }
              i++;
            }
          } catch (l) {
            n = { error: l };
          } finally {
            try {
              if (u && !u.done && (o = a.return)) {
                o.call(a);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          return t;
        };
        return t;
      })();
      var hh = function(t) {
        this.path = t;
        this.route = this.path[this.path.length - 1];
      };
      var fh = function(t, e) {
        this.component = t;
        this.route = e;
      };
      var gh = Symbol('INITIAL_VALUE');
      var xh = function() {};
      var Eh = (function() {
        function t(t, e, n, r, o, i) {
          this.rootComponentType = t;
          this.config = e;
          this.urlTree = n;
          this.url = r;
          this.paramsInheritanceStrategy = o;
          this.relativeLinkResolution = i;
        }
        t.prototype.recognize = function() {
          try {
            var t = Th(
              this.urlTree.root,
              [],
              [],
              this.config,
              this.relativeLinkResolution
            ).segmentGroup;
            var e = this.processSegmentGroup(this.config, t, Bc);
            var n = new Mp(
              [],
              Object.freeze({}),
              Object.freeze(Object(r.__assign)({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              Bc,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            );
            var o = new Pp(n, e);
            var i = new Dp(this.url, o);
            this.inheritParamsAndData(i._root);
            return bu(i);
          } catch (a) {
            return new C(function(t) {
              return t.error(a);
            });
          }
        };
        t.prototype.inheritParamsAndData = function(t) {
          var e = this;
          var n = t.value;
          var r = jp(n, this.paramsInheritanceStrategy);
          n.params = Object.freeze(r.params);
          n.data = Object.freeze(r.data);
          t.children.forEach(function(t) {
            return e.inheritParamsAndData(t);
          });
        };
        t.prototype.processSegmentGroup = function(t, e, n) {
          if (e.segments.length === 0 && e.hasChildren()) {
            return this.processChildren(t, e);
          } else {
            return this.processSegment(t, e, e.segments, n);
          }
        };
        t.prototype.processChildren = function(t, e) {
          var r = this;
          var o = cp(e, function(e, n) {
            return r.processSegmentGroup(t, e, n);
          });
          var n = {};
          o.forEach(function(t) {
            var e = n[t.value.outlet];
            if (e) {
              var r = e.url
                .map(function(t) {
                  return t.toString();
                })
                .join('/');
              var o = t.value.url
                .map(function(t) {
                  return t.toString();
                })
                .join('/');
              throw new Error(
                "Two segments cannot have the same outlet name: '" +
                  r +
                  "' and '" +
                  o +
                  "'."
              );
            }
            n[t.value.outlet] = t.value;
          });
          (function() {
            var t = o;
            t.sort(function(t, e) {
              if (t.value.outlet === Bc) {
                return -1;
              } else if (e.value.outlet === Bc) {
                return 1;
              } else {
                return t.value.outlet.localeCompare(e.value.outlet);
              }
            });
          })();
          return o;
        };
        t.prototype.processSegment = function(t, e, n, o) {
          var i;
          var a;
          try {
            var u = Object(r.__values)(t);
            for (var s = u.next(); !s.done; s = u.next()) {
              var l = s.value;
              try {
                return this.processSegmentAgainstRoute(l, e, n, o);
              } catch (c) {
                if (!(c instanceof xh)) {
                  throw c;
                }
              }
            }
          } catch (p) {
            i = { error: p };
          } finally {
            try {
              if (s && !s.done && (a = u.return)) {
                a.call(u);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
          if (this.noLeftoversInUrl(e, n, o)) {
            return [];
          }
          throw new xh();
        };
        t.prototype.noLeftoversInUrl = function(t, e, n) {
          return e.length === 0 && !t.children[n];
        };
        t.prototype.processSegmentAgainstRoute = function(t, e, n, o) {
          if (t.redirectTo) {
            throw new xh();
          }
          if ((t.outlet || Bc) !== o) {
            throw new xh();
          }
          var i;
          var a = [];
          var u = [];
          if (t.path === '**') {
            var s = n.length > 0 ? np(n).parameters : {};
            i = new Mp(
              n,
              s,
              Object.freeze(Object(r.__assign)({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Ah(t),
              o,
              t.component,
              t,
              Sh(e),
              Oh(e) + n.length,
              Ih(t)
            );
          } else {
            var l = (function(t, e, n) {
              if (e.path === '') {
                if (
                  e.pathMatch === 'full' &&
                  (t.hasChildren() || n.length > 0)
                ) {
                  throw new xh();
                }
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              var o = (e.matcher || Zc)(n, t, e);
              if (!o) {
                throw new xh();
              }
              var i = {};
              rp(o.posParams, function(t, e) {
                i[e] = t.path;
              });
              var a =
                o.consumed.length > 0
                  ? Object(r.__assign)(
                      {},
                      i,
                      o.consumed[o.consumed.length - 1].parameters
                    )
                  : i;
              return {
                consumedSegments: o.consumed,
                lastChild: o.consumed.length,
                parameters: a,
              };
            })(e, t, n);
            a = l.consumedSegments;
            u = n.slice(l.lastChild);
            i = new Mp(
              a,
              l.parameters,
              Object.freeze(Object(r.__assign)({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Ah(t),
              o,
              t.component,
              t,
              Sh(e),
              Oh(e) + a.length,
              Ih(t)
            );
          }
          var c = (function(t) {
            if (t.children) {
              return t.children;
            } else if (t.loadChildren) {
              return t._loadedConfig.routes;
            } else {
              return [];
            }
          })(t);
          var p = Th(e, a, u, c, this.relativeLinkResolution);
          var h = p.segmentGroup;
          var f = p.slicedSegments;
          if (f.length === 0 && h.hasChildren()) {
            var d = this.processChildren(c, h);
            return [new Pp(i, d)];
          }
          if (c.length === 0 && f.length === 0) {
            return [new Pp(i, [])];
          }
          var y = this.processSegment(c, h, f, Bc);
          return [new Pp(i, y)];
        };
        return t;
      })();
      var jh = function() {};
      var Mh = (function() {
        function t() {}
        t.prototype.shouldDetach = function(t) {
          return false;
        };
        t.prototype.store = function(t, e) {};
        t.prototype.shouldAttach = function(t) {
          return false;
        };
        t.prototype.retrieve = function(t) {
          return null;
        };
        t.prototype.shouldReuseRoute = function(t, e) {
          return t.routeConfig === e.routeConfig;
        };
        return t;
      })();
      var Dh = new At('ROUTES');
      var Vh = (function() {
        function t(t, e, n, r) {
          this.loader = t;
          this.compiler = e;
          this.onLoadStartListener = n;
          this.onLoadEndListener = r;
        }
        t.prototype.load = function(t, e) {
          var n = this;
          if (this.onLoadStartListener) {
            this.onLoadStartListener(e);
          }
          return this.loadModuleFactory(e.loadChildren).pipe(
            B(function(r) {
              if (n.onLoadEndListener) {
                n.onLoadEndListener(e);
              }
              var o = r.create(t);
              return new Kc(ep(o.injector.get(Dh)).map(Xc), o);
            })
          );
        };
        t.prototype.loadModuleFactory = function(t) {
          var e = this;
          if (typeof t == 'string') {
            return W(this.loader.load(t));
          } else {
            return op(t()).pipe(
              Z(function(t) {
                if (t instanceof qt) {
                  return bu(t);
                } else {
                  return W(e.compiler.compileModuleAsync(t));
                }
              })
            );
          }
        };
        return t;
      })();
      var Uh = function() {};
      var Lh = (function() {
        function t() {}
        t.prototype.shouldProcessUrl = function(t) {
          return true;
        };
        t.prototype.extract = function(t) {
          return t;
        };
        t.prototype.merge = function(t, e) {
          return t;
        };
        return t;
      })();
      var Bh = (function() {
        function t(t, e, n, r, o, i, a, u) {
          var s = this;
          this.rootComponentType = t;
          this.urlSerializer = e;
          this.rootContexts = n;
          this.location = r;
          this.config = u;
          this.lastSuccessfulNavigation = null;
          this.currentNavigation = null;
          this.navigationId = 0;
          this.isNgZoneEnabled = false;
          this.events = new k();
          this.errorHandler = Fh;
          this.malformedUriErrorHandler = Hh;
          this.navigated = false;
          this.lastSuccessfulId = -1;
          this.hooks = { beforePreactivation: zh, afterPreactivation: zh };
          this.urlHandlingStrategy = new Lh();
          this.routeReuseStrategy = new Mh();
          this.onSameUrlNavigation = 'ignore';
          this.paramsInheritanceStrategy = 'emptyOnly';
          this.urlUpdateStrategy = 'deferred';
          this.relativeLinkResolution = 'legacy';
          this.ngModule = o.get(Bt);
          this.console = o.get(qo);
          var l = o.get(li);
          this.isNgZoneEnabled = l instanceof li;
          this.resetConfig(u);
          this.currentUrlTree = new ap(new up([], {}), {}, null);
          this.rawUrlTree = this.currentUrlTree;
          this.browserUrlTree = this.currentUrlTree;
          this.configLoader = new Vh(
            i,
            a,
            function(t) {
              return s.triggerEvent(new Mc(t));
            },
            function(t) {
              return s.triggerEvent(new Dc(t));
            }
          );
          this.routerState = Rp(this.currentUrlTree, this.rootComponentType);
          this.transitions = new Ps({
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
        t.prototype.setupNavigations = function(t) {
          var e = this;
          var n = this.events;
          return t.pipe(
            Cu(function(t) {
              return t.id !== 0;
            }),
            B(function(t) {
              return Object(
                r.__assign
              )({}, t, { extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl) });
            }),
            ul(function(t) {
              var o;
              var i;
              var a;
              var u;
              var s = false;
              var l = false;
              return bu(t).pipe(
                Bs(function(t) {
                  e.currentNavigation = {
                    id: t.id,
                    initialUrl: t.currentRawUrl,
                    extractedUrl: t.extractedUrl,
                    trigger: t.source,
                    extras: t.extras,
                    previousNavigation: e.lastSuccessfulNavigation
                      ? Object(r.__assign)({}, e.lastSuccessfulNavigation, {
                          previousNavigation: null,
                        })
                      : null,
                  };
                }),
                ul(function(t) {
                  var o;
                  var i;
                  var a;
                  var u;
                  var s =
                    !e.navigated ||
                    t.extractedUrl.toString() !== e.browserUrlTree.toString();
                  if (
                    (e.onSameUrlNavigation === 'reload' || s) &&
                    e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                  ) {
                    return bu(t).pipe(
                      ul(function(t) {
                        var r = e.transitions.getValue();
                        n.next(
                          new Oc(
                            t.id,
                            e.serializeUrl(t.extractedUrl),
                            t.source,
                            t.restoredState
                          )
                        );
                        if (r === e.transitions.getValue()) {
                          return [t];
                        } else {
                          return gu;
                        }
                      }),
                      ul(function(t) {
                        return Promise.resolve(t);
                      }),
                      ((o = e.ngModule.injector),
                      (i = e.configLoader),
                      (a = e.urlSerializer),
                      (u = e.config),
                      function(t) {
                        return t.pipe(
                          ul(function(t) {
                            return (function(t, e, n, r, o) {
                              return new uh(t, e, n, r, o).apply();
                            })(o, i, a, t.extractedUrl, u).pipe(
                              B(function(e) {
                                return Object(
                                  r.__assign
                                )({}, t, { urlAfterRedirects: e });
                              })
                            );
                          })
                        );
                      }),
                      Bs(function(t) {
                        e.currentNavigation = Object(r.__assign)(
                          {},
                          e.currentNavigation,
                          { finalUrl: t.urlAfterRedirects }
                        );
                      }),
                      (function() {
                        var t = e.rootComponentType;
                        var n = e.config;
                        var o = 0;
                        var i = e.paramsInheritanceStrategy;
                        var a = e.relativeLinkResolution;
                        return function(o) {
                          return o.pipe(
                            Z(function(o) {
                              return (function(t, e, n, r, o, i) {
                                if (o === void 0) {
                                  o = 'emptyOnly';
                                }
                                if (i === void 0) {
                                  i = 'legacy';
                                }
                                return new Eh(t, e, n, r, o, i).recognize();
                              })(
                                t,
                                n,
                                o.urlAfterRedirects,
                                ((u = o.urlAfterRedirects), e.serializeUrl(u)),
                                i,
                                a
                              ).pipe(
                                B(function(t) {
                                  return Object(
                                    r.__assign
                                  )({}, o, { targetSnapshot: t });
                                })
                              );
                              var u;
                            })
                          );
                        };
                      })(),
                      Bs(function(t) {
                        if (e.urlUpdateStrategy === 'eager') {
                          if (!t.extras.skipLocationChange) {
                            e.setBrowserUrl(
                              t.urlAfterRedirects,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            );
                          }
                          e.browserUrlTree = t.urlAfterRedirects;
                        }
                      }),
                      Bs(function(t) {
                        var r = new Ac(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          e.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        n.next(r);
                      })
                    );
                  }
                  if (
                    s &&
                    e.rawUrlTree &&
                    e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)
                  ) {
                    var l = t.extractedUrl;
                    var c = t.source;
                    var p = t.restoredState;
                    var h = t.extras;
                    var f = new Oc(t.id, e.serializeUrl(l), c, p);
                    n.next(f);
                    var d = Rp(l, e.rootComponentType).snapshot;
                    return bu(
                      Object(r.__assign)({}, t, {
                        targetSnapshot: d,
                        urlAfterRedirects: l,
                        extras: Object(r.__assign)({}, h, {
                          skipLocationChange: false,
                          replaceUrl: false,
                        }),
                      })
                    );
                  }
                  e.rawUrlTree = t.rawUrl;
                  e.browserUrlTree = t.urlAfterRedirects;
                  t.resolve(null);
                  return gu;
                }),
                Nh(function(t) {
                  var n = t.extras;
                  return e.hooks.beforePreactivation(t.targetSnapshot, {
                    navigationId: t.id,
                    appliedUrlTree: t.extractedUrl,
                    rawUrlTree: t.rawUrl,
                    skipLocationChange: !!n.skipLocationChange,
                    replaceUrl: !!n.replaceUrl,
                  });
                }),
                Bs(function(t) {
                  var n = new Ic(
                    t.id,
                    e.serializeUrl(t.extractedUrl),
                    e.serializeUrl(t.urlAfterRedirects),
                    t.targetSnapshot
                  );
                  e.triggerEvent(n);
                }),
                B(function(t) {
                  return Object(
                    r.__assign
                  )({}, t, { guards: ((n = t.targetSnapshot), (o = t.currentSnapshot), (i = e.rootContexts), (a = n._root), yh(a, o ? o._root : null, i, [a.value])) });
                  var n;
                  var o;
                  var i;
                  var a;
                }),
                (function(t, e) {
                  return function(n) {
                    return n.pipe(
                      Z(function(n) {
                        var o = n.targetSnapshot;
                        var i = n.currentSnapshot;
                        var a = n.guards;
                        var u = a.canActivateChecks;
                        var s = a.canDeactivateChecks;
                        if (s.length === 0 && u.length === 0) {
                          return bu(
                            Object(r.__assign)({}, n, { guardsResult: true })
                          );
                        } else {
                          return (function(t, e, n, r) {
                            return W(t).pipe(
                              Z(function(t) {
                                return (function(t, e, n, r, o) {
                                  var i =
                                    e && e.routeConfig
                                      ? e.routeConfig.canDeactivate
                                      : null;
                                  if (i && i.length !== 0) {
                                    return bu(
                                      i.map(function(i) {
                                        var a;
                                        var u = dh(i, e, o);
                                        if (
                                          (function() {
                                            var t = u;
                                            return t && th(t.canDeactivate);
                                          })()
                                        ) {
                                          a = op(u.canDeactivate(t, e, n, r));
                                        } else {
                                          if (!th(u)) {
                                            throw new Error(
                                              'Invalid CanDeactivate guard'
                                            );
                                          }
                                          a = op(u(t, e, n, r));
                                        }
                                        return a.pipe(ol());
                                      })
                                    ).pipe(mh());
                                  } else {
                                    return bu(true);
                                  }
                                })(t.component, t.route, n, e, r);
                              }),
                              ol(function(t) {
                                return t !== true;
                              }, true)
                            );
                          })(s, o, i, t).pipe(
                            Z(function(n) {
                              if (n && typeof n == 'boolean') {
                                return (function(t, e, n, r) {
                                  return W(e).pipe(
                                    wu(function(e) {
                                      return W([
                                        bh(e.route.parent, r),
                                        _h(e.route, r),
                                        Ch(t, e.path, n),
                                        wh(t, e.route, n),
                                      ]).pipe(
                                        Vs(),
                                        ol(function(t) {
                                          return t !== true;
                                        }, true)
                                      );
                                    }),
                                    ol(function(t) {
                                      return t !== true;
                                    }, true)
                                  );
                                })(o, u, t, e);
                              } else {
                                return bu(n);
                              }
                            }),
                            B(function(t) {
                              return Object(
                                r.__assign
                              )({}, n, { guardsResult: t });
                            })
                          );
                        }
                      })
                    );
                  };
                })(e.ngModule.injector, function(t) {
                  return e.triggerEvent(t);
                }),
                Bs(function(t) {
                  if (eh(t.guardsResult)) {
                    var n = Wc(
                      'Redirecting to "' + e.serializeUrl(t.guardsResult) + '"'
                    );
                    n.url = t.guardsResult;
                    throw n;
                  }
                }),
                Bs(function(t) {
                  var n = new Rc(
                    t.id,
                    e.serializeUrl(t.extractedUrl),
                    e.serializeUrl(t.urlAfterRedirects),
                    t.targetSnapshot,
                    !!t.guardsResult
                  );
                  e.triggerEvent(n);
                }),
                Cu(function(t) {
                  if (!t.guardsResult) {
                    e.resetUrlToCurrentUrlTree();
                    var r = new kc(t.id, e.serializeUrl(t.extractedUrl), '');
                    n.next(r);
                    t.resolve(false);
                    return false;
                  }
                  return true;
                }),
                Nh(function(t) {
                  if (t.guards.canActivateChecks.length) {
                    return bu(t).pipe(
                      Bs(function(t) {
                        var n = new Nc(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          e.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        e.triggerEvent(n);
                      }),
                      ((n = e.paramsInheritanceStrategy),
                      (o = e.ngModule.injector),
                      function(t) {
                        return t.pipe(
                          Z(function(t) {
                            var e = t.targetSnapshot;
                            var i = t.guards.canActivateChecks;
                            if (i.length) {
                              return W(i).pipe(
                                wu(function(t) {
                                  return (function(t, e, n, o) {
                                    return (function(t, e, n, r) {
                                      var o = Object.keys(t);
                                      if (o.length === 0) {
                                        return bu({});
                                      }
                                      if (o.length === 1) {
                                        var i = o[0];
                                        return Rh(t[i], e, n, r).pipe(
                                          B(function(t) {
                                            var e;
                                            (e = {})[i] = t;
                                            return e;
                                          })
                                        );
                                      }
                                      var a = {};
                                      return W(o)
                                        .pipe(
                                          Z(function(o) {
                                            return Rh(t[o], e, n, r).pipe(
                                              B(function(t) {
                                                a[o] = t;
                                                return t;
                                              })
                                            );
                                          })
                                        )
                                        .pipe(
                                          Js(),
                                          B(function() {
                                            return a;
                                          })
                                        );
                                    })(t._resolve, t, e, o).pipe(
                                      B(function(e) {
                                        t._resolvedData = e;
                                        t.data = Object(r.__assign)(
                                          {},
                                          t.data,
                                          jp(t, n).resolve
                                        );
                                        return null;
                                      })
                                    );
                                  })(t.route, e, n, o);
                                }),
                                (function(t, e) {
                                  if (arguments.length >= 2) {
                                    return function(n) {
                                      return b(pl(t, e), Fs(1), Zs(e))(n);
                                    };
                                  } else {
                                    return function(e) {
                                      return b(
                                        pl(function(e, n, r) {
                                          return t(e, n, r + 1);
                                        }),
                                        Fs(1)
                                      )(e);
                                    };
                                  }
                                })(function(t, e) {
                                  return t;
                                }),
                                B(function(e) {
                                  return t;
                                })
                              );
                            } else {
                              return bu(t);
                            }
                          })
                        );
                      }),
                      Bs(function(t) {
                        var n = new jc(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          e.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        e.triggerEvent(n);
                      })
                    );
                  }
                  var n;
                  var o;
                }),
                Nh(function(t) {
                  var n = t.extras;
                  return e.hooks.afterPreactivation(t.targetSnapshot, {
                    navigationId: t.id,
                    appliedUrlTree: t.extractedUrl,
                    rawUrlTree: t.rawUrl,
                    skipLocationChange: !!n.skipLocationChange,
                    replaceUrl: !!n.replaceUrl,
                  });
                }),
                B(function(t) {
                  var n;
                  var o;
                  var i = (function t(e, n, o) {
                    if (o && e.shouldReuseRoute(n.value, o.value.snapshot)) {
                      (l = o.value)._futureSnapshot = n.value;
                      var i = (function(e, n, o) {
                        return n.children.map(function(n) {
                          var i;
                          var a;
                          try {
                            var u = Object(r.__values)(o.children);
                            for (var s = u.next(); !s.done; s = u.next()) {
                              var l = s.value;
                              if (
                                e.shouldReuseRoute(l.value.snapshot, n.value)
                              ) {
                                return t(e, n, l);
                              }
                            }
                          } catch (c) {
                            i = { error: c };
                          } finally {
                            try {
                              if (s && !s.done && (a = u.return)) {
                                a.call(u);
                              }
                            } finally {
                              if (i) {
                                throw i.error;
                              }
                            }
                          }
                          return t(e, n);
                        });
                      })(e, n, o);
                      return new Pp(l, i);
                    }
                    var a = e.retrieve(n.value);
                    if (a) {
                      var u = a.route;
                      (function t() {
                        var e = n;
                        var n = u;
                        if (e.value.routeConfig !== n.value.routeConfig) {
                          throw new Error(
                            'Cannot reattach ActivatedRouteSnapshot created from a different route'
                          );
                        }
                        if (e.children.length !== n.children.length) {
                          throw new Error(
                            'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                          );
                        }
                        n.value._futureSnapshot = e.value;
                        for (var r = 0; r < e.children.length; ++r) {
                          t(e.children[r], n.children[r]);
                        }
                      })();
                      return u;
                    }
                    var s;
                    var l = new Np(
                      new Ps((s = n.value).url),
                      new Ps(s.params),
                      new Ps(s.queryParams),
                      new Ps(s.fragment),
                      new Ps(s.data),
                      s.outlet,
                      s.component,
                      s
                    );
                    i = n.children.map(function(n) {
                      return t(e, n);
                    });
                    return new Pp(l, i);
                  })(
                    e.routeReuseStrategy,
                    (n = t.targetSnapshot)._root,
                    (o = t.currentRouterState) ? o._root : void 0
                  );
                  var a = new Ip(i, n);
                  return Object(r.__assign)({}, t, { targetRouterState: a });
                }),
                Bs(function(t) {
                  e.currentUrlTree = t.urlAfterRedirects;
                  e.rawUrlTree = e.urlHandlingStrategy.merge(
                    e.currentUrlTree,
                    t.rawUrl
                  );
                  e.routerState = t.targetRouterState;
                  if (e.urlUpdateStrategy === 'deferred') {
                    if (!t.extras.skipLocationChange) {
                      e.setBrowserUrl(
                        e.rawUrlTree,
                        !!t.extras.replaceUrl,
                        t.id,
                        t.extras.state
                      );
                    }
                    e.browserUrlTree = t.urlAfterRedirects;
                  }
                }),
                ((i = e.rootContexts),
                (a = e.routeReuseStrategy),
                (u = function(t) {
                  return e.triggerEvent(t);
                }),
                B(function(t) {
                  new Yp(
                    a,
                    t.targetRouterState,
                    t.currentRouterState,
                    u
                  ).activate(i);
                  return t;
                })),
                Bs({
                  next: function() {
                    s = true;
                  },
                  complete: function() {
                    s = true;
                  },
                }),
                ((o = function() {
                  if (!s && !l) {
                    e.resetUrlToCurrentUrlTree();
                    var r = new kc(
                      t.id,
                      e.serializeUrl(t.extractedUrl),
                      'Navigation ID ' +
                        t.id +
                        ' is not equal to the current navigation id ' +
                        e.navigationId
                    );
                    n.next(r);
                    t.resolve(false);
                  }
                  e.currentNavigation = null;
                }),
                function(t) {
                  return t.lift(new dl(o));
                }),
                Ys(function(r) {
                  l = true;
                  if ((u = r) && u[Gc]) {
                    var o = eh(r.url);
                    if (!o) {
                      e.navigated = true;
                      e.resetStateAndUrl(
                        t.currentRouterState,
                        t.currentUrlTree,
                        t.rawUrl
                      );
                    }
                    var i = new kc(
                      t.id,
                      e.serializeUrl(t.extractedUrl),
                      r.message
                    );
                    n.next(i);
                    t.resolve(false);
                    if (o) {
                      e.navigateByUrl(r.url);
                    }
                  } else {
                    e.resetStateAndUrl(
                      t.currentRouterState,
                      t.currentUrlTree,
                      t.rawUrl
                    );
                    var a = new Pc(t.id, e.serializeUrl(t.extractedUrl), r);
                    n.next(a);
                    try {
                      t.resolve(e.errorHandler(r));
                    } catch (s) {
                      t.reject(s);
                    }
                  }
                  var u;
                  return gu;
                })
              );
            })
          );
        };
        t.prototype.resetRootComponentType = function(t) {
          this.rootComponentType = t;
          this.routerState.root.component = this.rootComponentType;
        };
        t.prototype.getTransition = function() {
          var t = this.transitions.value;
          t.urlAfterRedirects = this.browserUrlTree;
          return t;
        };
        t.prototype.setTransition = function(t) {
          this.transitions.next(
            Object(r.__assign)({}, this.getTransition(), t)
          );
        };
        t.prototype.initialNavigation = function() {
          this.setUpLocationChangeListener();
          if (this.navigationId === 0) {
            this.navigateByUrl(this.location.path(true), { replaceUrl: true });
          }
        };
        t.prototype.setUpLocationChangeListener = function() {
          var t = this;
          if (!this.locationSubscription) {
            this.locationSubscription = this.location.subscribe(function(e) {
              var n = t.parseUrl(e.url);
              var r = e.type === 'popstate' ? 'popstate' : 'hashchange';
              var o = e.state && e.state.navigationId ? e.state : null;
              setTimeout(function() {
                t.scheduleNavigation(n, r, o, { replaceUrl: true });
              }, 0);
            });
          }
        };
        Object.defineProperty(t.prototype, 'url', {
          get: function() {
            return this.serializeUrl(this.currentUrlTree);
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.getCurrentNavigation = function() {
          return this.currentNavigation;
        };
        t.prototype.triggerEvent = function(t) {
          this.events.next(t);
        };
        t.prototype.resetConfig = function(t) {
          $c(t);
          this.config = t.map(Xc);
          this.navigated = false;
          this.lastSuccessfulId = -1;
        };
        t.prototype.ngOnDestroy = function() {
          this.dispose();
        };
        t.prototype.dispose = function() {
          if (this.locationSubscription) {
            this.locationSubscription.unsubscribe();
            this.locationSubscription = null;
          }
        };
        t.prototype.createUrlTree = function(t, e) {
          if (e === void 0) {
            e = {};
          }
          var n = e.relativeTo;
          var o = e.queryParams;
          var i = e.fragment;
          var a = e.preserveQueryParams;
          var u = e.queryParamsHandling;
          var s = e.preserveFragment;
          if (oe() && a && console && console.warn) {
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            );
          }
          var l = n || this.routerState.root;
          var c = s ? this.currentUrlTree.fragment : i;
          var p = null;
          if (u) {
            switch (u) {
              case 'merge':
                p = Object(r.__assign)({}, this.currentUrlTree.queryParams, o);
                break;
              case 'preserve':
                p = this.currentUrlTree.queryParams;
                break;
              default:
                p = o || null;
            }
          } else {
            p = a ? this.currentUrlTree.queryParams : o || null;
          }
          if (p !== null) {
            p = this.removeEmptyProps(p);
          }
          return (function(t, e, n, o, i) {
            if (n.length === 0) {
              return zp(e.root, e.root, e, o, i);
            }
            var a = (function(t) {
              if (typeof t[0] == 'string' && t.length === 1 && t[0] === '/') {
                return new Bp(true, 0, t);
              }
              var e = 0;
              var n = false;
              var o = t.reduce(function(t, o, i) {
                if (typeof o == 'object' && o != null) {
                  if (o.outlets) {
                    var a = {};
                    rp(o.outlets, function(t, e) {
                      a[e] = typeof t == 'string' ? t.split('/') : t;
                    });
                    return Object(r.__spread)(t, [{ outlets: a }]);
                  }
                  if (o.segmentPath) {
                    return Object(r.__spread)(t, [o.segmentPath]);
                  }
                }
                if (typeof o == 'string') {
                  if (i === 0) {
                    o.split('/').forEach(function(r, o) {
                      if (o != 0 || r !== '.') {
                        if (o == 0 && r === '') {
                          n = true;
                        } else if (r === '..') {
                          e++;
                        } else if (r != '') {
                          t.push(r);
                        }
                      }
                    });
                    return t;
                  } else {
                    return Object(r.__spread)(t, [o]);
                  }
                } else {
                  return Object(r.__spread)(t, [o]);
                }
              }, []);
              return new Bp(n, e, o);
            })(n);
            if (a.toRoot()) {
              return zp(e.root, new up([], {}), e, o, i);
            }
            var u = (function(t, e, n) {
              if (t.isAbsolute) {
                return new qp(e.root, true, 0);
              }
              if (n.snapshot._lastPathIndex === -1) {
                return new qp(n.snapshot._urlSegment, true, 0);
              }
              var r = Hp(t.commands[0]) ? 0 : 1;
              return (function(t, e, n) {
                var r = t;
                var o = e;
                for (var i = n; i > o; ) {
                  i -= o;
                  if (!(r = r.parent)) {
                    throw new Error("Invalid number of '../'");
                  }
                  o = r.segments.length;
                }
                return new qp(r, false, o - i);
              })(
                n.snapshot._urlSegment,
                n.snapshot._lastPathIndex + r,
                t.numberOfDoubleDots
              );
            })(a, e, t);
            var s = u.processChildren
              ? Wp(u.segmentGroup, u.index, a.commands)
              : Gp(u.segmentGroup, u.index, a.commands);
            return zp(u.segmentGroup, s, e, o, i);
          })(l, this.currentUrlTree, t, p, c);
        };
        t.prototype.navigateByUrl = function(t, e) {
          if (e === void 0) {
            e = { skipLocationChange: false };
          }
          if (oe() && this.isNgZoneEnabled && !li.isInAngularZone()) {
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          }
          var n = eh(t) ? t : this.parseUrl(t);
          var r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, e);
        };
        t.prototype.navigate = function(t, e) {
          if (e === void 0) {
            e = { skipLocationChange: false };
          }
          (function(t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (n == null) {
                throw new Error(
                  'The requested path contains ' + n + ' segment at index ' + e
                );
              }
            }
          })(t);
          return this.navigateByUrl(this.createUrlTree(t, e), e);
        };
        t.prototype.serializeUrl = function(t) {
          return this.urlSerializer.serialize(t);
        };
        t.prototype.parseUrl = function(t) {
          var e;
          try {
            e = this.urlSerializer.parse(t);
          } catch (n) {
            e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
          }
          return e;
        };
        t.prototype.isActive = function(t, e) {
          if (eh(t)) {
            return ip(this.currentUrlTree, t, e);
          }
          var n = this.parseUrl(t);
          return ip(this.currentUrlTree, n, e);
        };
        t.prototype.removeEmptyProps = function(t) {
          return Object.keys(t).reduce(function(e, n) {
            var r = t[n];
            if (r != null) {
              e[n] = r;
            }
            return e;
          }, {});
        };
        t.prototype.processNavigations = function() {
          var t = this;
          this.navigations.subscribe(
            function(e) {
              t.navigated = true;
              t.lastSuccessfulId = e.id;
              t.events.next(
                new Tc(
                  e.id,
                  t.serializeUrl(e.extractedUrl),
                  t.serializeUrl(t.currentUrlTree)
                )
              );
              t.lastSuccessfulNavigation = t.currentNavigation;
              t.currentNavigation = null;
              e.resolve(true);
            },
            function(e) {
              t.console.warn('Unhandled Navigation Error: ');
            }
          );
        };
        t.prototype.scheduleNavigation = function(t, e, n, r) {
          var o = this.getTransition();
          if (
            o &&
            e !== 'imperative' &&
            o.source === 'imperative' &&
            o.rawUrl.toString() === t.toString()
          ) {
            return Promise.resolve(true);
          }
          if (
            o &&
            e == 'hashchange' &&
            o.source === 'popstate' &&
            o.rawUrl.toString() === t.toString()
          ) {
            return Promise.resolve(true);
          }
          if (
            o &&
            e == 'popstate' &&
            o.source === 'hashchange' &&
            o.rawUrl.toString() === t.toString()
          ) {
            return Promise.resolve(true);
          }
          var i = null;
          var a = null;
          var u = new Promise(function(t, e) {
            i = t;
            a = e;
          });
          var s = ++this.navigationId;
          this.setTransition({
            id: s,
            source: e,
            restoredState: n,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.rawUrlTree,
            rawUrl: t,
            extras: r,
            resolve: i,
            reject: a,
            promise: u,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          });
          return u.catch(function(t) {
            return Promise.reject(t);
          });
        };
        t.prototype.setBrowserUrl = function(t, e, n, o) {
          var i = this.urlSerializer.serialize(t);
          o = o || {};
          if (this.location.isCurrentPathEqualTo(i) || e) {
            this.location.replaceState(
              i,
              '',
              Object(r.__assign)({}, o, { navigationId: n })
            );
          } else {
            this.location.go(
              i,
              '',
              Object(r.__assign)({}, o, { navigationId: n })
            );
          }
        };
        t.prototype.resetStateAndUrl = function(t, e, n) {
          this.routerState = t;
          this.currentUrlTree = e;
          this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            n
          );
          this.resetUrlToCurrentUrlTree();
        };
        t.prototype.resetUrlToCurrentUrlTree = function() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            '',
            { navigationId: this.lastSuccessfulId }
          );
        };
        return t;
      })();
      var qh = (function() {
        function t(t, e, n) {
          var r = this;
          this.router = t;
          this.route = e;
          this.locationStrategy = n;
          this.commands = [];
          this.subscription = t.events.subscribe(function(t) {
            if (t instanceof Tc) {
              r.updateTargetUrlAndHref();
            }
          });
        }
        Object.defineProperty(t.prototype, 'routerLink', {
          set: function(t) {
            this.commands = t != null ? (Array.isArray(t) ? t : [t]) : [];
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'preserveQueryParams', {
          set: function(t) {
            if (oe() && console && console.warn) {
              console.warn(
                'preserveQueryParams is deprecated, use queryParamsHandling instead.'
              );
            }
            this.preserve = t;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.ngOnChanges = function(t) {
          this.updateTargetUrlAndHref();
        };
        t.prototype.ngOnDestroy = function() {
          this.subscription.unsubscribe();
        };
        t.prototype.onClick = function(t, e, n, r) {
          if (t !== 0 || e || n || r) {
            return true;
          }
          if (typeof this.target == 'string' && this.target != '_self') {
            return true;
          }
          var o = {
            skipLocationChange: Qh(this.skipLocationChange),
            replaceUrl: Qh(this.replaceUrl),
            state: this.state,
          };
          this.router.navigateByUrl(this.urlTree, o);
          return false;
        };
        t.prototype.updateTargetUrlAndHref = function() {
          this.href = this.locationStrategy.prepareExternalUrl(
            this.router.serializeUrl(this.urlTree)
          );
        };
        Object.defineProperty(t.prototype, 'urlTree', {
          get: function() {
            return this.router.createUrlTree(this.commands, {
              relativeTo: this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              preserveQueryParams: Qh(this.preserve),
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: Qh(this.preserveFragment),
            });
          },
          enumerable: true,
          configurable: true,
        });
        Object(r.__decorate)(
          [
            Mo('attr.target'),
            jo(),
            Object(r.__metadata)('design:type', String),
          ],
          t.prototype,
          'target',
          void 0
        );
        return t;
      })();
      var Gh = function() {
        this.outlet = null;
        this.route = null;
        this.resolver = null;
        this.children = new Wh();
        this.attachRef = null;
      };
      var Wh = (function() {
        function t() {
          this.contexts = new Map();
        }
        t.prototype.onChildOutletCreated = function(t, e) {
          var n = this.getOrCreateContext(t);
          n.outlet = e;
          this.contexts.set(t, n);
        };
        t.prototype.onChildOutletDestroyed = function(t) {
          var e = this.getContext(t);
          if (e) {
            e.outlet = null;
          }
        };
        t.prototype.onOutletDeactivated = function() {
          var t = this.contexts;
          this.contexts = new Map();
          return t;
        };
        t.prototype.onOutletReAttached = function(t) {
          this.contexts = t;
        };
        t.prototype.getOrCreateContext = function(t) {
          var e = this.getContext(t);
          if (!e) {
            e = new Gh();
            this.contexts.set(t, e);
          }
          return e;
        };
        t.prototype.getContext = function(t) {
          return this.contexts.get(t) || null;
        };
        return t;
      })();
      var Zh = (function() {
        function t(t, e, n, r, o) {
          this.parentContexts = t;
          this.location = e;
          this.resolver = n;
          this.changeDetector = o;
          this.activated = null;
          this._activatedRoute = null;
          this.activateEvents = new Io();
          this.deactivateEvents = new Io();
          this.name = r || Bc;
          t.onChildOutletCreated(this.name, this);
        }
        t.prototype.ngOnDestroy = function() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        };
        t.prototype.ngOnInit = function() {
          if (!this.activated) {
            var t = this.parentContexts.getContext(this.name);
            if (t && t.route) {
              if (t.attachRef) {
                this.attach(t.attachRef, t.route);
              } else {
                this.activateWith(t.route, t.resolver || null);
              }
            }
          }
        };
        Object.defineProperty(t.prototype, 'isActivated', {
          get: function() {
            return !!this.activated;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'component', {
          get: function() {
            if (!this.activated) {
              throw new Error('Outlet is not activated');
            }
            return this.activated.instance;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'activatedRoute', {
          get: function() {
            if (!this.activated) {
              throw new Error('Outlet is not activated');
            }
            return this._activatedRoute;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'activatedRouteData', {
          get: function() {
            if (this._activatedRoute) {
              return this._activatedRoute.snapshot.data;
            } else {
              return {};
            }
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.detach = function() {
          if (!this.activated) {
            throw new Error('Outlet is not activated');
          }
          this.location.detach();
          var t = this.activated;
          this.activated = null;
          this._activatedRoute = null;
          return t;
        };
        t.prototype.attach = function(t, e) {
          this.activated = t;
          this._activatedRoute = e;
          this.location.insert(t.hostView);
        };
        t.prototype.deactivate = function() {
          if (this.activated) {
            var t = this.component;
            this.activated.destroy();
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(t);
          }
        };
        t.prototype.activateWith = function(t, e) {
          if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
          }
          this._activatedRoute = t;
          var n = (e = e || this.resolver).resolveComponentFactory(
            t._futureSnapshot.routeConfig.component
          );
          var r = this.parentContexts.getOrCreateContext(this.name).children;
          var o = new Kh(t, r, this.location.injector);
          this.activated = this.location.createComponent(
            n,
            this.location.length,
            o
          );
          this.changeDetector.markForCheck();
          this.activateEvents.emit(this.activated.instance);
        };
        return t;
      })();
      var Kh = (function() {
        function t(t, e, n) {
          this.route = t;
          this.childContexts = e;
          this.parent = n;
        }
        t.prototype.get = function(t, e) {
          if (t === Np) {
            return this.route;
          } else if (t === Wh) {
            return this.childContexts;
          } else {
            return this.parent.get(t, e);
          }
        };
        return t;
      })();
      var $h = function() {};
      var Jh = (function() {
        function t() {}
        t.prototype.preload = function(t, e) {
          return e().pipe(
            Ys(function() {
              return bu(null);
            })
          );
        };
        return t;
      })();
      var Yh = (function() {
        function t() {}
        t.prototype.preload = function(t, e) {
          return bu(null);
        };
        return t;
      })();
      var Xh = (function() {
        function t(t, e, n, r, o) {
          this.router = t;
          this.injector = r;
          this.preloadingStrategy = o;
          this.loader = new Vh(
            e,
            n,
            function(e) {
              return t.triggerEvent(new Mc(e));
            },
            function(e) {
              return t.triggerEvent(new Dc(e));
            }
          );
        }
        t.prototype.setUpPreloading = function() {
          var t = this;
          this.subscription = this.router.events
            .pipe(
              Cu(function(t) {
                return t instanceof Tc;
              }),
              wu(function() {
                return t.preload();
              })
            )
            .subscribe(function() {});
        };
        t.prototype.preload = function() {
          var t = this.injector.get(Bt);
          return this.processRoutes(t, this.router.config);
        };
        t.prototype.ngOnDestroy = function() {
          this.subscription.unsubscribe();
        };
        t.prototype.processRoutes = function(t, e) {
          var n;
          var o;
          var i = [];
          try {
            var a = Object(r.__values)(e);
            for (var u = a.next(); !u.done; u = a.next()) {
              var s = u.value;
              if (s.loadChildren && !s.canLoad && s._loadedConfig) {
                var l = s._loadedConfig;
                i.push(this.processRoutes(l.module, l.routes));
              } else if (s.loadChildren && !s.canLoad) {
                i.push(this.preloadConfig(t, s));
              } else if (s.children) {
                i.push(this.processRoutes(t, s.children));
              }
            }
          } catch (c) {
            n = { error: c };
          } finally {
            try {
              if (u && !u.done && (o = a.return)) {
                o.call(a);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          return W(i).pipe(Y(), B(function(t) {}));
        };
        t.prototype.preloadConfig = function(t, e) {
          var n = this;
          return this.preloadingStrategy.preload(e, function() {
            return n.loader.load(t.injector, e).pipe(
              Z(function(t) {
                e._loadedConfig = t;
                return n.processRoutes(t.module, t.routes);
              })
            );
          });
        };
        return t;
      })();
      var tf = (function() {
        function t(t, e, n) {
          if (n === void 0) {
            n = {};
          }
          this.router = t;
          this.viewportScroller = e;
          this.options = n;
          this.lastId = 0;
          this.lastSource = 'imperative';
          this.restoredId = 0;
          this.store = {};
          n.scrollPositionRestoration =
            n.scrollPositionRestoration || 'disabled';
          n.anchorScrolling = n.anchorScrolling || 'disabled';
        }
        t.prototype.init = function() {
          if (this.options.scrollPositionRestoration !== 'disabled') {
            this.viewportScroller.setHistoryScrollRestoration('manual');
          }
          this.routerEventsSubscription = this.createScrollEvents();
          this.scrollEventsSubscription = this.consumeScrollEvents();
        };
        t.prototype.createScrollEvents = function() {
          var t = this;
          return this.router.events.subscribe(function(e) {
            if (e instanceof Oc) {
              t.store[t.lastId] = t.viewportScroller.getScrollPosition();
              t.lastSource = e.navigationTrigger;
              t.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
            } else if (e instanceof Tc) {
              t.lastId = e.id;
              t.scheduleScrollEvent(
                e,
                t.router.parseUrl(e.urlAfterRedirects).fragment
              );
            }
          });
        };
        t.prototype.consumeScrollEvents = function() {
          var t = this;
          return this.router.events.subscribe(function(e) {
            if (e instanceof Hc) {
              if (e.position) {
                if (t.options.scrollPositionRestoration === 'top') {
                  t.viewportScroller.scrollToPosition([0, 0]);
                } else if (t.options.scrollPositionRestoration === 'enabled') {
                  t.viewportScroller.scrollToPosition(e.position);
                }
              } else if (e.anchor && t.options.anchorScrolling === 'enabled') {
                t.viewportScroller.scrollToAnchor(e.anchor);
              } else if (t.options.scrollPositionRestoration !== 'disabled') {
                t.viewportScroller.scrollToPosition([0, 0]);
              }
            }
          });
        };
        t.prototype.scheduleScrollEvent = function(t, e) {
          this.router.triggerEvent(
            new Hc(
              t,
              this.lastSource === 'popstate'
                ? this.store[this.restoredId]
                : null,
              e
            )
          );
        };
        t.prototype.ngOnDestroy = function() {
          if (this.routerEventsSubscription) {
            this.routerEventsSubscription.unsubscribe();
          }
          if (this.scrollEventsSubscription) {
            this.scrollEventsSubscription.unsubscribe();
          }
        };
        return t;
      })();
      var ef = new At('ROUTER_CONFIGURATION');
      var nf = new At('ROUTER_FORROOT_GUARD');
      var rf = [
        Pu,
        { provide: pp, useClass: hp },
        {
          provide: Bh,
          useFactory: pf,
          deps: [
            Oi,
            pp,
            Wh,
            Pu,
            De,
            ki,
            ti,
            Dh,
            ef,
            [Uh, new ht()],
            [jh, new ht()],
          ],
        },
        Wh,
        { provide: Np, useFactory: hf, deps: [Bh] },
        { provide: ki, useClass: Ii },
        Xh,
        Yh,
        Jh,
        { provide: ef, useValue: { enableTracing: false } },
      ];
      var af = (function() {
        function t(t, e) {}
        var e = t;
        t.forRoot = function(t, n) {
          return {
            ngModule: e,
            providers: [
              rf,
              cf(t),
              { provide: nf, useFactory: lf, deps: [[Bh, new ht(), new dt()]] },
              { provide: ef, useValue: n || {} },
              {
                provide: Tu,
                useFactory: sf,
                deps: [Su, [new pt(ku), new ht()], ef],
              },
              { provide: tf, useFactory: uf, deps: [Bh, Zu, ef] },
              {
                provide: $h,
                useExisting:
                  n && n.preloadingStrategy ? n.preloadingStrategy : Yh,
              },
              { provide: wi, multi: true, useFactory: of },
              [
                ff,
                { provide: Do, multi: true, useFactory: df, deps: [ff] },
                { provide: vf, useFactory: yf, deps: [ff] },
                { provide: Bo, multi: true, useExisting: vf },
              ],
            ],
          };
        };
        t.forChild = function(t) {
          return { ngModule: e, providers: [cf(t)] };
        };
        return t;
      })();
      var ff = (function() {
        function t(t) {
          this.injector = t;
          this.initNavigation = false;
          this.resultOfPreactivationDone = new k();
        }
        t.prototype.appInitializer = function() {
          var t = this;
          return this.injector.get(Ou, Promise.resolve(null)).then(function() {
            var e = null;
            var n = new Promise(function(t) {
              return (e = t);
            });
            var r = t.injector.get(Bh);
            var o = t.injector.get(ef);
            if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) {
              e(true);
            } else if (o.initialNavigation === 'disabled') {
              r.setUpLocationChangeListener();
              e(true);
            } else {
              if (o.initialNavigation !== 'enabled') {
                throw new Error(
                  "Invalid initialNavigation options: '" +
                    o.initialNavigation +
                    "'"
                );
              }
              r.hooks.afterPreactivation = function() {
                if (t.initNavigation) {
                  return bu(null);
                } else {
                  t.initNavigation = true;
                  e(true);
                  return t.resultOfPreactivationDone;
                }
              };
              r.initialNavigation();
            }
            return n;
          });
        };
        t.prototype.bootstrapListener = function(t) {
          var e = this.injector.get(ef);
          var n = this.injector.get(Xh);
          var r = this.injector.get(tf);
          var o = this.injector.get(Bh);
          var i = this.injector.get(Oi);
          if (t === i.components[0]) {
            if (this.isLegacyEnabled(e)) {
              o.initialNavigation();
            } else if (this.isLegacyDisabled(e)) {
              o.setUpLocationChangeListener();
            }
            n.setUpPreloading();
            r.init();
            o.resetRootComponentType(i.componentTypes[0]);
            this.resultOfPreactivationDone.next(null);
            this.resultOfPreactivationDone.complete();
          }
        };
        t.prototype.isLegacyEnabled = function(t) {
          return (
            t.initialNavigation === 'legacy_enabled' ||
            t.initialNavigation === true ||
            t.initialNavigation === void 0
          );
        };
        t.prototype.isLegacyDisabled = function(t) {
          return (
            t.initialNavigation === 'legacy_disabled' ||
            t.initialNavigation === false
          );
        };
        return t;
      })();
      var vf = new At('Router Initializer');
      var gf = tr({ encapsulation: 2, styles: [], data: {} });
      var bf = Vr('ng-component', zc, _f, {}, {}, []);
      var wf = (function() {
        function e(e, n) {
          var r = t.call(this, e) || this;
          r.sources = n;
          r.completed = 0;
          r.haveValues = 0;
          var o = n.length;
          r.values = new Array(o);
          for (var i = 0; i < o; i++) {
            var a = H(r, n[i], null, i);
            if (a) {
              r.add(a);
            }
          }
          return r;
        }
        var t = z;
        r.__extends(e, t);
        e.prototype.notifyNext = function(t, e, n, r, o) {
          this.values[n] = e;
          if (!o._hasValue) {
            o._hasValue = true;
            this.haveValues++;
          }
        };
        e.prototype.notifyComplete = function(t) {
          var e = this.destination;
          var n = this.haveValues;
          var r = this.values;
          var o = r.length;
          if (t._hasValue) {
            this.completed++;
            if (this.completed === o) {
              if (n === o) {
                e.next(r);
              }
              e.complete();
            }
          } else {
            e.complete();
          }
        };
        return e;
      })();
      var Cf = new At('NgValueAccessor');
      var xf = (function() {
        function t(t, e) {
          this._renderer = t;
          this._elementRef = e;
          this.onChange = function(t) {};
          this.onTouched = function() {};
        }
        t.prototype.writeValue = function(t) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'checked',
            t
          );
        };
        t.prototype.registerOnChange = function(t) {
          this.onChange = t;
        };
        t.prototype.registerOnTouched = function(t) {
          this.onTouched = t;
        };
        t.prototype.setDisabledState = function(t) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            t
          );
        };
        return t;
      })();
      var Ef = new At('CompositionEventMode');
      var Sf = (function() {
        function t(t, e, n) {
          var r;
          this._renderer = t;
          this._elementRef = e;
          this._compositionMode = n;
          this.onChange = function(t) {};
          this.onTouched = function() {};
          this._composing = false;
          if (this._compositionMode == null) {
            this._compositionMode = ((r = gl() ? gl().getUserAgent() : ''),
            !/android (\d+)/.test(r.toLowerCase()));
          }
        }
        t.prototype.writeValue = function(t) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'value',
            t == null ? '' : t
          );
        };
        t.prototype.registerOnChange = function(t) {
          this.onChange = t;
        };
        t.prototype.registerOnTouched = function(t) {
          this.onTouched = t;
        };
        t.prototype.setDisabledState = function(t) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            t
          );
        };
        t.prototype._handleInput = function(t) {
          if (
            !this._compositionMode ||
            (this._compositionMode && !this._composing)
          ) {
            this.onChange(t);
          }
        };
        t.prototype._compositionStart = function() {
          this._composing = true;
        };
        t.prototype._compositionEnd = function(t) {
          this._composing = false;
          if (this._compositionMode) {
            this.onChange(t);
          }
        };
        return t;
      })();
      var Of = (function() {
        function t() {}
        Object.defineProperty(t.prototype, 'value', {
          get: function() {
            if (this.control) {
              return this.control.value;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'valid', {
          get: function() {
            if (this.control) {
              return this.control.valid;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'invalid', {
          get: function() {
            if (this.control) {
              return this.control.invalid;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'pending', {
          get: function() {
            if (this.control) {
              return this.control.pending;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'disabled', {
          get: function() {
            if (this.control) {
              return this.control.disabled;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'enabled', {
          get: function() {
            if (this.control) {
              return this.control.enabled;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'errors', {
          get: function() {
            if (this.control) {
              return this.control.errors;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'pristine', {
          get: function() {
            if (this.control) {
              return this.control.pristine;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'dirty', {
          get: function() {
            if (this.control) {
              return this.control.dirty;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'touched', {
          get: function() {
            if (this.control) {
              return this.control.touched;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'status', {
          get: function() {
            if (this.control) {
              return this.control.status;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'untouched', {
          get: function() {
            if (this.control) {
              return this.control.untouched;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'statusChanges', {
          get: function() {
            if (this.control) {
              return this.control.statusChanges;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'valueChanges', {
          get: function() {
            if (this.control) {
              return this.control.valueChanges;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'path', {
          get: function() {
            return null;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.reset = function(t) {
          if (t === void 0) {
            t = void 0;
          }
          if (this.control) {
            this.control.reset(t);
          }
        };
        t.prototype.hasError = function(t, e) {
          return !!this.control && this.control.hasError(t, e);
        };
        t.prototype.getError = function(t, e) {
          if (this.control) {
            return this.control.getError(t, e);
          } else {
            return null;
          }
        };
        return t;
      })();
      var Tf = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = Of;
        Object(r.__extends)(e, t);
        Object.defineProperty(e.prototype, 'formDirective', {
          get: function() {
            return null;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'path', {
          get: function() {
            return null;
          },
          enumerable: true,
          configurable: true,
        });
        return e;
      })();
      var Pf = (function() {
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e._parent = null;
          e.name = null;
          e.valueAccessor = null;
          e._rawValidators = [];
          e._rawAsyncValidators = [];
          return e;
        }
        var t = Of;
        Object(r.__extends)(e, t);
        Object.defineProperty(e.prototype, 'validator', {
          get: function() {
            return kf();
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'asyncValidator', {
          get: function() {
            return kf();
          },
          enumerable: true,
          configurable: true,
        });
        return e;
      })();
      var Af = (function() {
        function e(e) {
          return t.call(this, e) || this;
        }
        var t = (function() {
          function t(t) {
            this._cd = t;
          }
          Object.defineProperty(t.prototype, 'ngClassUntouched', {
            get: function() {
              return !!this._cd.control && this._cd.control.untouched;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(t.prototype, 'ngClassTouched', {
            get: function() {
              return !!this._cd.control && this._cd.control.touched;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(t.prototype, 'ngClassPristine', {
            get: function() {
              return !!this._cd.control && this._cd.control.pristine;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(t.prototype, 'ngClassDirty', {
            get: function() {
              return !!this._cd.control && this._cd.control.dirty;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(t.prototype, 'ngClassValid', {
            get: function() {
              return !!this._cd.control && this._cd.control.valid;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(t.prototype, 'ngClassInvalid', {
            get: function() {
              return !!this._cd.control && this._cd.control.invalid;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(t.prototype, 'ngClassPending', {
            get: function() {
              return !!this._cd.control && this._cd.control.pending;
            },
            enumerable: true,
            configurable: true,
          });
          return t;
        })();
        Object(r.__extends)(e, t);
        return e;
      })();
      var Rf = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      var Nf = (function() {
        function t() {}
        t.min = function(t) {
          return function(e) {
            if (If(e.value) || If(t)) {
              return null;
            }
            var n = parseFloat(e.value);
            if (!isNaN(n) && n < t) {
              return { min: { min: t, actual: e.value } };
            } else {
              return null;
            }
          };
        };
        t.max = function(t) {
          return function(e) {
            if (If(e.value) || If(t)) {
              return null;
            }
            var n = parseFloat(e.value);
            if (!isNaN(n) && n > t) {
              return { max: { max: t, actual: e.value } };
            } else {
              return null;
            }
          };
        };
        t.required = function(t) {
          if (If(t.value)) {
            return { required: true };
          } else {
            return null;
          }
        };
        t.requiredTrue = function(t) {
          if (t.value === true) {
            return null;
          } else {
            return { required: true };
          }
        };
        t.email = function(t) {
          if (If(t.value)) {
            return null;
          } else if (Rf.test(t.value)) {
            return null;
          } else {
            return { email: true };
          }
        };
        t.minLength = function(t) {
          return function(e) {
            if (If(e.value)) {
              return null;
            }
            var n = e.value ? e.value.length : 0;
            if (n < t) {
              return { minlength: { requiredLength: t, actualLength: n } };
            } else {
              return null;
            }
          };
        };
        t.maxLength = function(t) {
          return function(e) {
            var n = e.value ? e.value.length : 0;
            if (n > t) {
              return { maxlength: { requiredLength: t, actualLength: n } };
            } else {
              return null;
            }
          };
        };
        t.pattern = function(e) {
          if (e) {
            if (typeof e == 'string') {
              r = '';
              if (e.charAt(0) !== '^') {
                r += '^';
              }
              r += e;
              if (e.charAt(e.length - 1) !== '$') {
                r += '$';
              }
              n = new RegExp(r);
            } else {
              r = e.toString();
              n = e;
            }
            return function(t) {
              if (If(t.value)) {
                return null;
              }
              var e = t.value;
              if (n.test(e)) {
                return null;
              } else {
                return { pattern: { requiredPattern: r, actualValue: e } };
              }
            };
          } else {
            return t.nullValidator;
          }
          var n;
          var r;
        };
        t.nullValidator = function(t) {
          return null;
        };
        t.compose = function(t) {
          if (!t) {
            return null;
          }
          var e = t.filter(jf);
          if (e.length == 0) {
            return null;
          } else {
            return function(t) {
              return Df(
                (function(t, e) {
                  return e.map(function(e) {
                    return e(t);
                  });
                })(t, e)
              );
            };
          }
        };
        t.composeAsync = function(t) {
          if (!t) {
            return null;
          }
          var e = t.filter(jf);
          if (e.length == 0) {
            return null;
          } else {
            return function(t) {
              return (function t() {
                var e;
                var n = [];
                for (var r = 0; r < arguments.length; r++) {
                  n[r] = arguments[r];
                }
                if (typeof n[n.length - 1] == 'function') {
                  e = n.pop();
                }
                if (n.length === 1 && o(n[0])) {
                  n = n[0];
                }
                if (n.length === 0) {
                  return gu;
                } else if (e) {
                  return t(n).pipe(
                    B(function(t) {
                      return e.apply(void 0, t);
                    })
                  );
                } else {
                  return new C(function(t) {
                    return new wf(t, n);
                  });
                }
              })(
                (function(t, e) {
                  return e.map(function(e) {
                    return e(t);
                  });
                })(t, e).map(Mf)
              ).pipe(B(Df));
            };
          }
        };
        return t;
      })();
      var Lf = (function() {
        function t(t, e) {
          this._renderer = t;
          this._elementRef = e;
          this.onChange = function(t) {};
          this.onTouched = function() {};
        }
        t.prototype.writeValue = function(t) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'value',
            t == null ? '' : t
          );
        };
        t.prototype.registerOnChange = function(t) {
          this.onChange = function(e) {
            t(e == '' ? null : parseFloat(e));
          };
        };
        t.prototype.registerOnTouched = function(t) {
          this.onTouched = t;
        };
        t.prototype.setDisabledState = function(t) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            t
          );
        };
        return t;
      })();
      var Ff = (function() {
        function t() {
          this._accessors = [];
        }
        t.prototype.add = function(t, e) {
          this._accessors.push([t, e]);
        };
        t.prototype.remove = function(t) {
          for (var e = this._accessors.length - 1; e >= 0; --e) {
            if (this._accessors[e][1] === t) {
              this._accessors.splice(e, 1);
              return;
            }
          }
        };
        t.prototype.select = function(t) {
          var e = this;
          this._accessors.forEach(function(n) {
            if (e._isSameGroup(n, t) && n[1] !== t) {
              n[1].fireUncheck(t.value);
            }
          });
        };
        t.prototype._isSameGroup = function(t, e) {
          return (
            !!t[0].control &&
            t[0]._parent === e._control._parent &&
            t[1].name === e.name
          );
        };
        return t;
      })();
      var Hf = (function() {
        function t(t, e, n, r) {
          this._renderer = t;
          this._elementRef = e;
          this._registry = n;
          this._injector = r;
          this.onChange = function() {};
          this.onTouched = function() {};
        }
        t.prototype.ngOnInit = function() {
          this._control = this._injector.get(Pf);
          this._checkName();
          this._registry.add(this._control, this);
        };
        t.prototype.ngOnDestroy = function() {
          this._registry.remove(this);
        };
        t.prototype.writeValue = function(t) {
          this._state = t === this.value;
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'checked',
            this._state
          );
        };
        t.prototype.registerOnChange = function(t) {
          var e = this;
          this._fn = t;
          this.onChange = function() {
            t(e.value);
            e._registry.select(e);
          };
        };
        t.prototype.fireUncheck = function(t) {
          this.writeValue(t);
        };
        t.prototype.registerOnTouched = function(t) {
          this.onTouched = t;
        };
        t.prototype.setDisabledState = function(t) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            t
          );
        };
        t.prototype._checkName = function() {
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
        };
        t.prototype._throwNameError = function() {
          throw new Error(
            '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
          );
        };
        return t;
      })();
      var zf =
        '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });';
      var Bf =
        '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>';
      var $f = [
        xf,
        (function() {
          function t(t, e) {
            this._renderer = t;
            this._elementRef = e;
            this.onChange = function(t) {};
            this.onTouched = function() {};
          }
          t.prototype.writeValue = function(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              parseFloat(t)
            );
          };
          t.prototype.registerOnChange = function(t) {
            this.onChange = function(e) {
              t(e == '' ? null : parseFloat(e));
            };
          };
          t.prototype.registerOnTouched = function(t) {
            this.onTouched = t;
          };
          t.prototype.setDisabledState = function(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          };
          return t;
        })(),
        Lf,
        (function() {
          function t(t, e) {
            this._renderer = t;
            this._elementRef = e;
            this._optionMap = new Map();
            this._idCounter = 0;
            this.onChange = function(t) {};
            this.onTouched = function() {};
            this._compareWith = We;
          }
          Object.defineProperty(t.prototype, 'compareWith', {
            set: function(t) {
              if (typeof t != 'function') {
                throw new Error(
                  'compareWith must be a function, but received ' +
                    JSON.stringify(t)
                );
              }
              this._compareWith = t;
            },
            enumerable: true,
            configurable: true,
          });
          t.prototype.writeValue = function(t) {
            this.value = t;
            var e = this._getOptionId(t);
            if (e == null) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'selectedIndex',
                -1
              );
            }
            var n = (function(t, e) {
              if (t == null) {
                return '' + e;
              } else {
                if (e && typeof e == 'object') {
                  e = 'Object';
                }
                return (t + ': ' + e).slice(0, 50);
              }
            })(e, t);
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              n
            );
          };
          t.prototype.registerOnChange = function(t) {
            var e = this;
            this.onChange = function(n) {
              e.value = e._getOptionValue(n);
              t(e.value);
            };
          };
          t.prototype.registerOnTouched = function(t) {
            this.onTouched = t;
          };
          t.prototype.setDisabledState = function(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          };
          t.prototype._registerOption = function() {
            return (this._idCounter++).toString();
          };
          t.prototype._getOptionId = function(t) {
            var e;
            var n;
            try {
              var o = Object(r.__values)(Array.from(this._optionMap.keys()));
              for (var i = o.next(); !i.done; i = o.next()) {
                var a = i.value;
                if (this._compareWith(this._optionMap.get(a), t)) {
                  return a;
                }
              }
            } catch (u) {
              e = { error: u };
            } finally {
              try {
                if (i && !i.done && (n = o.return)) {
                  n.call(o);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
            return null;
          };
          t.prototype._getOptionValue = function(t) {
            var e = (function(t) {
              return t.split(':')[0];
            })(t);
            if (this._optionMap.has(e)) {
              return this._optionMap.get(e);
            } else {
              return t;
            }
          };
          return t;
        })(),
        (function() {
          function t(t, e) {
            this._renderer = t;
            this._elementRef = e;
            this._optionMap = new Map();
            this._idCounter = 0;
            this.onChange = function(t) {};
            this.onTouched = function() {};
            this._compareWith = We;
          }
          Object.defineProperty(t.prototype, 'compareWith', {
            set: function(t) {
              if (typeof t != 'function') {
                throw new Error(
                  'compareWith must be a function, but received ' +
                    JSON.stringify(t)
                );
              }
              this._compareWith = t;
            },
            enumerable: true,
            configurable: true,
          });
          t.prototype.writeValue = function(t) {
            var e;
            var n = this;
            this.value = t;
            if (Array.isArray(t)) {
              var r = t.map(function(t) {
                return n._getOptionId(t);
              });
              e = function(t, e) {
                t._setSelected(r.indexOf(e.toString()) > -1);
              };
            } else {
              e = function(t, e) {
                t._setSelected(false);
              };
            }
            this._optionMap.forEach(e);
          };
          t.prototype.registerOnChange = function(t) {
            var e = this;
            this.onChange = function(n) {
              var r = [];
              if (n.hasOwnProperty('selectedOptions')) {
                var o = n.selectedOptions;
                for (var i = 0; i < o.length; i++) {
                  var a = o.item(i);
                  var u = e._getOptionValue(a.value);
                  r.push(u);
                }
              } else {
                o = n.options;
                for (i = 0; i < o.length; i++) {
                  if ((a = o.item(i)).selected) {
                    u = e._getOptionValue(a.value);
                    r.push(u);
                  }
                }
              }
              e.value = r;
              t(r);
            };
          };
          t.prototype.registerOnTouched = function(t) {
            this.onTouched = t;
          };
          t.prototype.setDisabledState = function(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          };
          t.prototype._registerOption = function(t) {
            var e = (this._idCounter++).toString();
            this._optionMap.set(e, t);
            return e;
          };
          t.prototype._getOptionId = function(t) {
            var e;
            var n;
            try {
              var o = Object(r.__values)(Array.from(this._optionMap.keys()));
              for (var i = o.next(); !i.done; i = o.next()) {
                var a = i.value;
                if (this._compareWith(this._optionMap.get(a)._value, t)) {
                  return a;
                }
              }
            } catch (u) {
              e = { error: u };
            } finally {
              try {
                if (i && !i.done && (n = o.return)) {
                  n.call(o);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
            return null;
          };
          t.prototype._getOptionValue = function(t) {
            var e = (function(t) {
              return t.split(':')[0];
            })(t);
            if (this._optionMap.has(e)) {
              return this._optionMap.get(e)._value;
            } else {
              return t;
            }
          };
          return t;
        })(),
        Hf,
      ];
      var td = (function() {
        function t(t, e) {
          this.validator = t;
          this.asyncValidator = e;
          this._onCollectionChange = function() {};
          this.pristine = true;
          this.touched = false;
          this._onDisabledChange = [];
        }
        Object.defineProperty(t.prototype, 'parent', {
          get: function() {
            return this._parent;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'valid', {
          get: function() {
            return this.status === 'VALID';
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'invalid', {
          get: function() {
            return this.status === 'INVALID';
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'pending', {
          get: function() {
            return this.status == 'PENDING';
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'disabled', {
          get: function() {
            return this.status === 'DISABLED';
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'enabled', {
          get: function() {
            return this.status !== 'DISABLED';
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'dirty', {
          get: function() {
            return !this.pristine;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'untouched', {
          get: function() {
            return !this.touched;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'updateOn', {
          get: function() {
            if (this._updateOn) {
              return this._updateOn;
            } else if (this.parent) {
              return this.parent.updateOn;
            } else {
              return 'change';
            }
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype.setValidators = function(t) {
          this.validator = Jf(t);
        };
        t.prototype.setAsyncValidators = function(t) {
          this.asyncValidator = Yf(t);
        };
        t.prototype.clearValidators = function() {
          this.validator = null;
        };
        t.prototype.clearAsyncValidators = function() {
          this.asyncValidator = null;
        };
        t.prototype.markAsTouched = function(t) {
          if (t === void 0) {
            t = {};
          }
          this.touched = true;
          if (this._parent && !t.onlySelf) {
            this._parent.markAsTouched(t);
          }
        };
        t.prototype.markAllAsTouched = function() {
          this.markAsTouched({ onlySelf: true });
          this._forEachChild(function(t) {
            return t.markAllAsTouched();
          });
        };
        t.prototype.markAsUntouched = function(t) {
          if (t === void 0) {
            t = {};
          }
          this.touched = false;
          this._pendingTouched = false;
          this._forEachChild(function(t) {
            t.markAsUntouched({ onlySelf: true });
          });
          if (this._parent && !t.onlySelf) {
            this._parent._updateTouched(t);
          }
        };
        t.prototype.markAsDirty = function(t) {
          if (t === void 0) {
            t = {};
          }
          this.pristine = false;
          if (this._parent && !t.onlySelf) {
            this._parent.markAsDirty(t);
          }
        };
        t.prototype.markAsPristine = function(t) {
          if (t === void 0) {
            t = {};
          }
          this.pristine = true;
          this._pendingDirty = false;
          this._forEachChild(function(t) {
            t.markAsPristine({ onlySelf: true });
          });
          if (this._parent && !t.onlySelf) {
            this._parent._updatePristine(t);
          }
        };
        t.prototype.markAsPending = function(t) {
          if (t === void 0) {
            t = {};
          }
          this.status = 'PENDING';
          if (t.emitEvent !== false) {
            this.statusChanges.emit(this.status);
          }
          if (this._parent && !t.onlySelf) {
            this._parent.markAsPending(t);
          }
        };
        t.prototype.disable = function(t) {
          if (t === void 0) {
            t = {};
          }
          var e = this._parentMarkedDirty(t.onlySelf);
          this.status = 'DISABLED';
          this.errors = null;
          this._forEachChild(function(e) {
            e.disable(Object(r.__assign)({}, t, { onlySelf: true }));
          });
          this._updateValue();
          if (t.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
          }
          this._updateAncestors(
            Object(r.__assign)({}, t, { skipPristineCheck: e })
          );
          this._onDisabledChange.forEach(function(t) {
            return t(true);
          });
        };
        t.prototype.enable = function(t) {
          if (t === void 0) {
            t = {};
          }
          var e = this._parentMarkedDirty(t.onlySelf);
          this.status = 'VALID';
          this._forEachChild(function(e) {
            e.enable(Object(r.__assign)({}, t, { onlySelf: true }));
          });
          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: t.emitEvent,
          });
          this._updateAncestors(
            Object(r.__assign)({}, t, { skipPristineCheck: e })
          );
          this._onDisabledChange.forEach(function(t) {
            return t(false);
          });
        };
        t.prototype._updateAncestors = function(t) {
          if (this._parent && !t.onlySelf) {
            this._parent.updateValueAndValidity(t);
            if (!t.skipPristineCheck) {
              this._parent._updatePristine();
            }
            this._parent._updateTouched();
          }
        };
        t.prototype.setParent = function(t) {
          this._parent = t;
        };
        t.prototype.updateValueAndValidity = function(t) {
          if (t === void 0) {
            t = {};
          }
          this._setInitialStatus();
          this._updateValue();
          if (this.enabled) {
            this._cancelExistingSubscription();
            this.errors = this._runValidator();
            this.status = this._calculateStatus();
            if (this.status === 'VALID' || this.status === 'PENDING') {
              this._runAsyncValidator(t.emitEvent);
            }
          }
          if (t.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
          }
          if (this._parent && !t.onlySelf) {
            this._parent.updateValueAndValidity(t);
          }
        };
        t.prototype._updateTreeValidity = function(t) {
          if (t === void 0) {
            t = { emitEvent: true };
          }
          this._forEachChild(function(e) {
            return e._updateTreeValidity(t);
          });
          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: t.emitEvent,
          });
        };
        t.prototype._setInitialStatus = function() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        };
        t.prototype._runValidator = function() {
          if (this.validator) {
            return this.validator(this);
          } else {
            return null;
          }
        };
        t.prototype._runAsyncValidator = function(t) {
          var e = this;
          if (this.asyncValidator) {
            this.status = 'PENDING';
            var n = Mf(this.asyncValidator(this));
            this._asyncValidationSubscription = n.subscribe(function(n) {
              return e.setErrors(n, { emitEvent: t });
            });
          }
        };
        t.prototype._cancelExistingSubscription = function() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
          }
        };
        t.prototype.setErrors = function(t, e) {
          if (e === void 0) {
            e = {};
          }
          this.errors = t;
          this._updateControlsErrors(e.emitEvent !== false);
        };
        t.prototype.get = function(t) {
          return (function(t, e, n) {
            if (e == null) {
              return null;
            } else {
              if (!(e instanceof Array)) {
                e = e.split('.');
              }
              if (e instanceof Array && e.length === 0) {
                return null;
              } else {
                return e.reduce(function(t, e) {
                  if (t instanceof nd) {
                    if (t.controls.hasOwnProperty(e)) {
                      return t.controls[e];
                    } else {
                      return null;
                    }
                  } else {
                    return (t instanceof rd && t.at(e)) || null;
                  }
                }, t);
              }
            }
          })(this, t);
        };
        t.prototype.getError = function(t, e) {
          var n = e ? this.get(e) : this;
          if (n && n.errors) {
            return n.errors[t];
          } else {
            return null;
          }
        };
        t.prototype.hasError = function(t, e) {
          return !!this.getError(t, e);
        };
        Object.defineProperty(t.prototype, 'root', {
          get: function() {
            for (var t = this; t._parent; ) {
              t = t._parent;
            }
            return t;
          },
          enumerable: true,
          configurable: true,
        });
        t.prototype._updateControlsErrors = function(t) {
          this.status = this._calculateStatus();
          if (t) {
            this.statusChanges.emit(this.status);
          }
          if (this._parent) {
            this._parent._updateControlsErrors(t);
          }
        };
        t.prototype._initObservables = function() {
          this.valueChanges = new Io();
          this.statusChanges = new Io();
        };
        t.prototype._calculateStatus = function() {
          if (this._allControlsDisabled()) {
            return 'DISABLED';
          } else if (this.errors) {
            return 'INVALID';
          } else if (this._anyControlsHaveStatus('PENDING')) {
            return 'PENDING';
          } else if (this._anyControlsHaveStatus('INVALID')) {
            return 'INVALID';
          } else {
            return 'VALID';
          }
        };
        t.prototype._anyControlsHaveStatus = function(t) {
          return this._anyControls(function(e) {
            return e.status === t;
          });
        };
        t.prototype._anyControlsDirty = function() {
          return this._anyControls(function(t) {
            return t.dirty;
          });
        };
        t.prototype._anyControlsTouched = function() {
          return this._anyControls(function(t) {
            return t.touched;
          });
        };
        t.prototype._updatePristine = function(t) {
          if (t === void 0) {
            t = {};
          }
          this.pristine = !this._anyControlsDirty();
          if (this._parent && !t.onlySelf) {
            this._parent._updatePristine(t);
          }
        };
        t.prototype._updateTouched = function(t) {
          if (t === void 0) {
            t = {};
          }
          this.touched = this._anyControlsTouched();
          if (this._parent && !t.onlySelf) {
            this._parent._updateTouched(t);
          }
        };
        t.prototype._isBoxedValue = function(t) {
          return (
            typeof t == 'object' &&
            t !== null &&
            Object.keys(t).length === 2 &&
            'value' in t &&
            'disabled' in t
          );
        };
        t.prototype._registerOnCollectionChange = function(t) {
          this._onCollectionChange = t;
        };
        t.prototype._setUpdateStrategy = function(t) {
          if (Xf(t) && t.updateOn != null) {
            this._updateOn = t.updateOn;
          }
        };
        t.prototype._parentMarkedDirty = function(t) {
          return (
            !t &&
            this._parent &&
            this._parent.dirty &&
            !this._parent._anyControlsDirty()
          );
        };
        return t;
      })();
      var ed = (function() {
        function e(e, n, r) {
          if (e === void 0) {
            e = null;
          }
          var o = t.call(this, Jf(n), Yf(r, n)) || this;
          o._onChange = [];
          o._applyFormState(e);
          o._setUpdateStrategy(n);
          o.updateValueAndValidity({ onlySelf: true, emitEvent: false });
          o._initObservables();
          return o;
        }
        var t = td;
        Object(r.__extends)(e, t);
        e.prototype.setValue = function(t, e) {
          var n = this;
          if (e === void 0) {
            e = {};
          }
          this.value = this._pendingValue = t;
          if (this._onChange.length && e.emitModelToViewChange !== false) {
            this._onChange.forEach(function(t) {
              return t(n.value, e.emitViewToModelChange !== false);
            });
          }
          this.updateValueAndValidity(e);
        };
        e.prototype.patchValue = function(t, e) {
          if (e === void 0) {
            e = {};
          }
          this.setValue(t, e);
        };
        e.prototype.reset = function(t, e) {
          if (t === void 0) {
            t = null;
          }
          if (e === void 0) {
            e = {};
          }
          this._applyFormState(t);
          this.markAsPristine(e);
          this.markAsUntouched(e);
          this.setValue(this.value, e);
          this._pendingChange = false;
        };
        e.prototype._updateValue = function() {};
        e.prototype._anyControls = function(t) {
          return false;
        };
        e.prototype._allControlsDisabled = function() {
          return this.disabled;
        };
        e.prototype.registerOnChange = function(t) {
          this._onChange.push(t);
        };
        e.prototype._clearChangeFns = function() {
          this._onChange = [];
          this._onDisabledChange = [];
          this._onCollectionChange = function() {};
        };
        e.prototype.registerOnDisabledChange = function(t) {
          this._onDisabledChange.push(t);
        };
        e.prototype._forEachChild = function(t) {};
        e.prototype._syncPendingControls = function() {
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
        };
        e.prototype._applyFormState = function(t) {
          if (this._isBoxedValue(t)) {
            this.value = this._pendingValue = t.value;
            if (t.disabled) {
              this.disable({ onlySelf: true, emitEvent: false });
            } else {
              this.enable({ onlySelf: true, emitEvent: false });
            }
          } else {
            this.value = this._pendingValue = t;
          }
        };
        return e;
      })();
      var nd = (function() {
        function e(e, n, r) {
          var o = t.call(this, Jf(n), Yf(r, n)) || this;
          o.controls = e;
          o._initObservables();
          o._setUpdateStrategy(n);
          o._setUpControls();
          o.updateValueAndValidity({ onlySelf: true, emitEvent: false });
          return o;
        }
        var t = td;
        Object(r.__extends)(e, t);
        e.prototype.registerControl = function(t, e) {
          if (this.controls[t]) {
            return this.controls[t];
          } else {
            this.controls[t] = e;
            e.setParent(this);
            e._registerOnCollectionChange(this._onCollectionChange);
            return e;
          }
        };
        e.prototype.addControl = function(t, e) {
          this.registerControl(t, e);
          this.updateValueAndValidity();
          this._onCollectionChange();
        };
        e.prototype.removeControl = function(t) {
          if (this.controls[t]) {
            this.controls[t]._registerOnCollectionChange(function() {});
          }
          delete this.controls[t];
          this.updateValueAndValidity();
          this._onCollectionChange();
        };
        e.prototype.setControl = function(t, e) {
          if (this.controls[t]) {
            this.controls[t]._registerOnCollectionChange(function() {});
          }
          delete this.controls[t];
          if (e) {
            this.registerControl(t, e);
          }
          this.updateValueAndValidity();
          this._onCollectionChange();
        };
        e.prototype.contains = function(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        };
        e.prototype.setValue = function(t, e) {
          var n = this;
          if (e === void 0) {
            e = {};
          }
          this._checkAllValuesPresent(t);
          Object.keys(t).forEach(function(r) {
            n._throwIfControlMissing(r);
            n.controls[r].setValue(t[r], {
              onlySelf: true,
              emitEvent: e.emitEvent,
            });
          });
          this.updateValueAndValidity(e);
        };
        e.prototype.patchValue = function(t, e) {
          var n = this;
          if (e === void 0) {
            e = {};
          }
          Object.keys(t).forEach(function(r) {
            if (n.controls[r]) {
              n.controls[r].patchValue(t[r], {
                onlySelf: true,
                emitEvent: e.emitEvent,
              });
            }
          });
          this.updateValueAndValidity(e);
        };
        e.prototype.reset = function(t, e) {
          if (t === void 0) {
            t = {};
          }
          if (e === void 0) {
            e = {};
          }
          this._forEachChild(function(n, r) {
            n.reset(t[r], { onlySelf: true, emitEvent: e.emitEvent });
          });
          this._updatePristine(e);
          this._updateTouched(e);
          this.updateValueAndValidity(e);
        };
        e.prototype.getRawValue = function() {
          return this._reduceChildren({}, function(t, e, n) {
            t[n] = e instanceof ed ? e.value : e.getRawValue();
            return t;
          });
        };
        e.prototype._syncPendingControls = function() {
          var t = this._reduceChildren(false, function(t, e) {
            return !!e._syncPendingControls() || t;
          });
          if (t) {
            this.updateValueAndValidity({ onlySelf: true });
          }
          return t;
        };
        e.prototype._throwIfControlMissing = function(t) {
          if (!Object.keys(this.controls).length) {
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          }
          if (!this.controls[t]) {
            throw new Error('Cannot find form control with name: ' + t + '.');
          }
        };
        e.prototype._forEachChild = function(t) {
          var e = this;
          Object.keys(this.controls).forEach(function(n) {
            return t(e.controls[n], n);
          });
        };
        e.prototype._setUpControls = function() {
          var t = this;
          this._forEachChild(function(e) {
            e.setParent(t);
            e._registerOnCollectionChange(t._onCollectionChange);
          });
        };
        e.prototype._updateValue = function() {
          this.value = this._reduceValue();
        };
        e.prototype._anyControls = function(t) {
          var e = this;
          var n = false;
          this._forEachChild(function(r, o) {
            n = n || (e.contains(o) && t(r));
          });
          return n;
        };
        e.prototype._reduceValue = function() {
          var t = this;
          return this._reduceChildren({}, function(e, n, r) {
            if (n.enabled || t.disabled) {
              e[r] = n.value;
            }
            return e;
          });
        };
        e.prototype._reduceChildren = function(t, e) {
          var n = t;
          this._forEachChild(function(t, r) {
            n = e(n, t, r);
          });
          return n;
        };
        e.prototype._allControlsDisabled = function() {
          var t;
          var e;
          try {
            var n = Object(r.__values)(Object.keys(this.controls));
            for (var o = n.next(); !o.done; o = n.next()) {
              if (this.controls[o.value].enabled) {
                return false;
              }
            }
          } catch (i) {
            t = { error: i };
          } finally {
            try {
              if (o && !o.done && (e = n.return)) {
                e.call(n);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
          return Object.keys(this.controls).length > 0 || this.disabled;
        };
        e.prototype._checkAllValuesPresent = function(t) {
          this._forEachChild(function(e, n) {
            if (t[n] === void 0) {
              throw new Error(
                "Must supply a value for form control with name: '" + n + "'."
              );
            }
          });
        };
        return e;
      })();
      var rd = (function() {
        function e(e, n, r) {
          var o = t.call(this, Jf(n), Yf(r, n)) || this;
          o.controls = e;
          o._initObservables();
          o._setUpdateStrategy(n);
          o._setUpControls();
          o.updateValueAndValidity({ onlySelf: true, emitEvent: false });
          return o;
        }
        var t = td;
        Object(r.__extends)(e, t);
        e.prototype.at = function(t) {
          return this.controls[t];
        };
        e.prototype.push = function(t) {
          this.controls.push(t);
          this._registerControl(t);
          this.updateValueAndValidity();
          this._onCollectionChange();
        };
        e.prototype.insert = function(t, e) {
          this.controls.splice(t, 0, e);
          this._registerControl(e);
          this.updateValueAndValidity();
        };
        e.prototype.removeAt = function(t) {
          if (this.controls[t]) {
            this.controls[t]._registerOnCollectionChange(function() {});
          }
          this.controls.splice(t, 1);
          this.updateValueAndValidity();
        };
        e.prototype.setControl = function(t, e) {
          if (this.controls[t]) {
            this.controls[t]._registerOnCollectionChange(function() {});
          }
          this.controls.splice(t, 1);
          if (e) {
            this.controls.splice(t, 0, e);
            this._registerControl(e);
          }
          this.updateValueAndValidity();
          this._onCollectionChange();
        };
        Object.defineProperty(e.prototype, 'length', {
          get: function() {
            return this.controls.length;
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype.setValue = function(t, e) {
          var n = this;
          if (e === void 0) {
            e = {};
          }
          this._checkAllValuesPresent(t);
          t.forEach(function(t, r) {
            n._throwIfControlMissing(r);
            n.at(r).setValue(t, { onlySelf: true, emitEvent: e.emitEvent });
          });
          this.updateValueAndValidity(e);
        };
        e.prototype.patchValue = function(t, e) {
          var n = this;
          if (e === void 0) {
            e = {};
          }
          t.forEach(function(t, r) {
            if (n.at(r)) {
              n.at(r).patchValue(t, { onlySelf: true, emitEvent: e.emitEvent });
            }
          });
          this.updateValueAndValidity(e);
        };
        e.prototype.reset = function(t, e) {
          if (t === void 0) {
            t = [];
          }
          if (e === void 0) {
            e = {};
          }
          this._forEachChild(function(n, r) {
            n.reset(t[r], { onlySelf: true, emitEvent: e.emitEvent });
          });
          this._updatePristine(e);
          this._updateTouched(e);
          this.updateValueAndValidity(e);
        };
        e.prototype.getRawValue = function() {
          return this.controls.map(function(t) {
            if (t instanceof ed) {
              return t.value;
            } else {
              return t.getRawValue();
            }
          });
        };
        e.prototype.clear = function() {
          if (!(this.controls.length < 1)) {
            this._forEachChild(function(t) {
              return t._registerOnCollectionChange(function() {});
            });
            this.controls.splice(0);
            this.updateValueAndValidity();
          }
        };
        e.prototype._syncPendingControls = function() {
          var t = this.controls.reduce(function(t, e) {
            return !!e._syncPendingControls() || t;
          }, false);
          if (t) {
            this.updateValueAndValidity({ onlySelf: true });
          }
          return t;
        };
        e.prototype._throwIfControlMissing = function(t) {
          if (!this.controls.length) {
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          }
          if (!this.at(t)) {
            throw new Error('Cannot find form control at index ' + t);
          }
        };
        e.prototype._forEachChild = function(t) {
          this.controls.forEach(function(e, n) {
            t(e, n);
          });
        };
        e.prototype._updateValue = function() {
          var t = this;
          this.value = this.controls
            .filter(function(e) {
              return e.enabled || t.disabled;
            })
            .map(function(t) {
              return t.value;
            });
        };
        e.prototype._anyControls = function(t) {
          return this.controls.some(function(e) {
            return e.enabled && t(e);
          });
        };
        e.prototype._setUpControls = function() {
          var t = this;
          this._forEachChild(function(e) {
            return t._registerControl(e);
          });
        };
        e.prototype._checkAllValuesPresent = function(t) {
          this._forEachChild(function(e, n) {
            if (t[n] === void 0) {
              throw new Error(
                'Must supply a value for form control at index: ' + n + '.'
              );
            }
          });
        };
        e.prototype._allControlsDisabled = function() {
          var t;
          var e;
          try {
            var n = Object(r.__values)(this.controls);
            for (var o = n.next(); !o.done; o = n.next()) {
              if (o.value.enabled) {
                return false;
              }
            }
          } catch (i) {
            t = { error: i };
          } finally {
            try {
              if (o && !o.done && (e = n.return)) {
                e.call(n);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
          return this.controls.length > 0 || this.disabled;
        };
        e.prototype._registerControl = function(t) {
          t.setParent(this);
          t._registerOnCollectionChange(this._onCollectionChange);
        };
        return e;
      })();
      var od = Promise.resolve(null);
      var id = (function() {
        function e(e, n) {
          var r = t.call(this) || this;
          r.submitted = false;
          r._directives = [];
          r.ngSubmit = new Io();
          r.form = new nd({}, Zf(e), Kf(n));
          return r;
        }
        var t = Tf;
        Object(r.__extends)(e, t);
        e.prototype.ngAfterViewInit = function() {
          this._setUpdateStrategy();
        };
        Object.defineProperty(e.prototype, 'formDirective', {
          get: function() {
            return this;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'control', {
          get: function() {
            return this.form;
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'path', {
          get: function() {
            return [];
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'controls', {
          get: function() {
            return this.form.controls;
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype.addControl = function(t) {
          var e = this;
          od.then(function() {
            var n = e._findContainer(t.path);
            t.control = n.registerControl(t.name, t.control);
            Qf(t.control, t);
            t.control.updateValueAndValidity({ emitEvent: false });
            e._directives.push(t);
          });
        };
        e.prototype.getControl = function(t) {
          return this.form.get(t.path);
        };
        e.prototype.removeControl = function(t) {
          var e = this;
          od.then(function() {
            var n;
            var r;
            var o = e._findContainer(t.path);
            if (o) {
              o.removeControl(t.name);
            }
            if ((r = (n = e._directives).indexOf(t)) > -1) {
              n.splice(r, 1);
            }
          });
        };
        e.prototype.addFormGroup = function(t) {
          var e = this;
          od.then(function() {
            var n = e._findContainer(t.path);
            var r = new nd({});
            (function(t, e) {
              if (t == null) {
                Wf(e, 'Cannot find control with');
              }
              t.validator = Nf.compose([t.validator, e.validator]);
              t.asyncValidator = Nf.composeAsync([
                t.asyncValidator,
                e.asyncValidator,
              ]);
            })(r, t);
            n.registerControl(t.name, r);
            r.updateValueAndValidity({ emitEvent: false });
          });
        };
        e.prototype.removeFormGroup = function(t) {
          var e = this;
          od.then(function() {
            var n = e._findContainer(t.path);
            if (n) {
              n.removeControl(t.name);
            }
          });
        };
        e.prototype.getFormGroup = function(t) {
          return this.form.get(t.path);
        };
        e.prototype.updateModel = function(t, e) {
          var n = this;
          od.then(function() {
            n.form.get(t.path).setValue(e);
          });
        };
        e.prototype.setValue = function(t) {
          this.control.setValue(t);
        };
        e.prototype.onSubmit = function(t) {
          this.submitted = true;
          var e = this._directives;
          this.form._syncPendingControls();
          e.forEach(function(t) {
            var e = t.control;
            if (e.updateOn === 'submit' && e._pendingChange) {
              t.viewToModelUpdate(e._pendingValue);
              e._pendingChange = false;
            }
          });
          this.ngSubmit.emit(t);
          return false;
        };
        e.prototype.onReset = function() {
          this.resetForm();
        };
        e.prototype.resetForm = function(t) {
          if (t === void 0) {
            t = void 0;
          }
          this.form.reset(t);
          this.submitted = false;
        };
        e.prototype._setUpdateStrategy = function() {
          if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
          }
        };
        e.prototype._findContainer = function(t) {
          t.pop();
          if (t.length) {
            return this.form.get(t);
          } else {
            return this.form;
          }
        };
        return e;
      })();
      var ad = (function() {
        function t() {}
        t.modelParentException = function() {
          throw new Error(
            '\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
          );
        };
        t.formGroupNameException = function() {
          throw new Error(
            '\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ' +
              zf +
              "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " +
              Bf
          );
        };
        t.missingNameException = function() {
          throw new Error(
            'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
          );
        };
        t.modelGroupParentException = function() {
          throw new Error(
            '\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ' +
              zf +
              '\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ' +
              Bf
          );
        };
        t.ngFormWarning = function() {
          console.warn(
            "\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "
          );
        };
        return t;
      })();
      var ud = new At('NgFormSelectorWarning');
      var sd = (function() {
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        var t = Tf;
        Object(r.__extends)(e, t);
        e.prototype.ngOnInit = function() {
          this._checkParentType();
          this.formDirective.addFormGroup(this);
        };
        e.prototype.ngOnDestroy = function() {
          if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
          }
        };
        Object.defineProperty(e.prototype, 'control', {
          get: function() {
            return this.formDirective.getFormGroup(this);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'path', {
          get: function() {
            return qf(this.name, this._parent);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'formDirective', {
          get: function() {
            if (this._parent) {
              return this._parent.formDirective;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'validator', {
          get: function() {
            return Zf(this._validators);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'asyncValidator', {
          get: function() {
            return Kf(this._asyncValidators);
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype._checkParentType = function() {};
        return e;
      })();
      var ld = (function() {
        function e(e, n, r) {
          var o = t.call(this) || this;
          o._parent = e;
          o._validators = n;
          o._asyncValidators = r;
          return o;
        }
        var t = sd;
        Object(r.__extends)(e, t);
        var n = e;
        e.prototype._checkParentType = function() {
          if (!(this._parent instanceof n) && !(this._parent instanceof id)) {
            ad.modelGroupParentException();
          }
        };
        return e;
      })();
      var cd = Promise.resolve(null);
      var pd = (function() {
        function e(e, n, r, o) {
          var i = t.call(this) || this;
          i.control = new ed();
          i._registered = false;
          i.update = new Io();
          i._parent = e;
          i._rawValidators = n || [];
          i._rawAsyncValidators = r || [];
          i.valueAccessor = (function(t, e) {
            if (!e) {
              return null;
            }
            if (!Array.isArray(e)) {
              Wf(
                t,
                'Value accessor was not provided as an array for form control with'
              );
            }
            var n = void 0;
            var r = void 0;
            var o = void 0;
            e.forEach(function(e) {
              var i;
              if (e.constructor === Sf) {
                n = e;
              } else {
                i = e;
                if (
                  $f.some(function(t) {
                    return i.constructor === t;
                  })
                ) {
                  if (r) {
                    Wf(
                      t,
                      'More than one built-in value accessor matches form control with'
                    );
                  }
                  r = e;
                } else {
                  if (o) {
                    Wf(
                      t,
                      'More than one custom value accessor matches form control with'
                    );
                  }
                  o = e;
                }
              }
            });
            return (
              o ||
              r ||
              n ||
              (Wf(t, 'No valid value accessor for form control with'), null)
            );
          })(i, o);
          return i;
        }
        var t = Pf;
        Object(r.__extends)(e, t);
        e.prototype.ngOnChanges = function(t) {
          this._checkForErrors();
          if (!this._registered) {
            this._setUpControl();
          }
          if ('isDisabled' in t) {
            this._updateDisabled(t);
          }
          if (
            (function(t, e) {
              if (!t.hasOwnProperty('model')) {
                return false;
              }
              var n = t.model;
              return !!n.isFirstChange() || !We(e, n.currentValue);
            })(t, this.viewModel)
          ) {
            this._updateValue(this.model);
            this.viewModel = this.model;
          }
        };
        e.prototype.ngOnDestroy = function() {
          if (this.formDirective) {
            this.formDirective.removeControl(this);
          }
        };
        Object.defineProperty(e.prototype, 'path', {
          get: function() {
            if (this._parent) {
              return qf(this.name, this._parent);
            } else {
              return [this.name];
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'formDirective', {
          get: function() {
            if (this._parent) {
              return this._parent.formDirective;
            } else {
              return null;
            }
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'validator', {
          get: function() {
            return Zf(this._rawValidators);
          },
          enumerable: true,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'asyncValidator', {
          get: function() {
            return Kf(this._rawAsyncValidators);
          },
          enumerable: true,
          configurable: true,
        });
        e.prototype.viewToModelUpdate = function(t) {
          this.viewModel = t;
          this.update.emit(t);
        };
        e.prototype._setUpControl = function() {
          this._setUpdateStrategy();
          if (this._isStandalone()) {
            this._setUpStandalone();
          } else {
            this.formDirective.addControl(this);
          }
          this._registered = true;
        };
        e.prototype._setUpdateStrategy = function() {
          if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
          }
        };
        e.prototype._isStandalone = function() {
          return !this._parent || (!!this.options && !!this.options.standalone);
        };
        e.prototype._setUpStandalone = function() {
          Qf(this.control, this);
          this.control.updateValueAndValidity({ emitEvent: false });
        };
        e.prototype._checkForErrors = function() {
          if (!this._isStandalone()) {
            this._checkParentType();
          }
          this._checkName();
        };
        e.prototype._checkParentType = function() {
          if (!(this._parent instanceof ld) && this._parent instanceof sd) {
            ad.formGroupNameException();
          } else if (
            !(this._parent instanceof ld) &&
            !(this._parent instanceof id)
          ) {
            ad.modelParentException();
          }
        };
        e.prototype._checkName = function() {
          if (this.options && this.options.name) {
            this.name = this.options.name;
          }
          if (!this._isStandalone() && !this.name) {
            ad.missingNameException();
          }
        };
        e.prototype._updateValue = function(t) {
          var e = this;
          cd.then(function() {
            e.control.setValue(t, { emitViewToModelChange: false });
          });
        };
        e.prototype._updateDisabled = function(t) {
          var e = this;
          var n = t.isDisabled.currentValue;
          var r = n === '' || (n && n !== 'false');
          cd.then(function() {
            if (r && !e.control.disabled) {
              e.control.disable();
            } else if (!r && e.control.disabled) {
              e.control.enable();
            }
          });
        };
        return e;
      })();
      var hd = function() {};
      var fd = (function() {
        function t() {}
        var e = t;
        t.withConfig = function(t) {
          return {
            ngModule: e,
            providers: [
              { provide: ud, useValue: t.warnOnDeprecatedNgFormSelector },
            ],
          };
        };
        return t;
      })();
      var dd = tr({
        encapsulation: 0,
        styles: [
          [
            '.desktop[_ngcontent-%COMP%]{display:block}.mobile[_ngcontent-%COMP%]{display:none}@media screen and (max-width:768px){.desktop[_ngcontent-%COMP%]{display:none}.mobile[_ngcontent-%COMP%]{display:block}}.explorer-container[_ngcontent-%COMP%]{width:90%;padding-left:5%;padding-right:5%}.little-button[_ngcontent-%COMP%]{height:2.5rem;font-weight:700}.container-outer[_ngcontent-%COMP%]{width:100%;min-height:calc(100vh - 15rem);display:flex;justify-content:center}.container-inner[_ngcontent-%COMP%]{text-align:center}.welcome-top[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:2rem}.welcome[_ngcontent-%COMP%]{font-size:1.5rem}.signup[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.5rem;color:#fff}.title-logo-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:1rem}a[_ngcontent-%COMP%]{color:#1e324d;text-decoration:underline}.btn.btn-light.yes[_ngcontent-%COMP%]{color:#91c8a4;border-color:#91c8a4;font-weight:700;background-color:#5a7190}.footer[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.25rem;display:flex;justify-content:center}.footer-inner[_ngcontent-%COMP%]{text-align:center}.section-border[_ngcontent-%COMP%]{margin-top:2rem;margin-left:1rem;margin-right:1rem;border-bottom:1px solid #5a7190}.unit[_ngcontent-%COMP%]{color:#1e324d;font-weight:400}.content-container[_ngcontent-%COMP%]{margin-top:1rem;text-align:left;padding-left:3rem;padding-right:3rem}.section-heading[_ngcontent-%COMP%]{position:relative;z-index:-1;font-size:2rem;font-weight:400;text-decoration:none;text-align:center}.subsection-heading[_ngcontent-%COMP%]{color:#fff;font-size:2rem}.subcontent-container[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]{font-size:1.25rem;margin-top:.5rem}.subcontent-container[_ngcontent-%COMP%]   .subsection-content[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.25rem}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]{width:12.5rem;height:12.5rem;border:1px solid #5a7190;display:inline-block;margin-top:1rem;margin-right:3rem;vertical-align:top}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .intermediate[_ngcontent-%COMP%]{width:12.5rem;height:12.5rem;display:flex;align-items:center;justify-content:center}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .download-sub-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .download-sub-container[_ngcontent-%COMP%]   .operating-system[_ngcontent-%COMP%]{cursor:default;font-size:2.5rem;text-align:center}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .download-sub-container[_ngcontent-%COMP%]   .architecture-container[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem}.subcontent-container[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%]   .download-sub-container[_ngcontent-%COMP%]   .architecture-container[_ngcontent-%COMP%]   .architecture[_ngcontent-%COMP%]{cursor:pointer}a.btn[_ngcontent-%COMP%]{color:#fff;font-weight:700}.big-button[_ngcontent-%COMP%]{width:21rem}',
          ],
        ],
        data: {},
      });
      var Md = Vr('app-root', ks, jd, {}, {}, []);
      var Dd = function() {};
      var Vd = du(vu, [ks], function(t) {
        return (function(t) {
          var e = {};
          var n = [];
          var r = false;
          for (var o = 0; o < t.length; o++) {
            var i = t[o];
            if (i.token === je && i.value === true) {
              r = true;
            }
            if (1073741824 & i.flags) {
              n.push(i.token);
            }
            i.index = o;
            e[Jn(i.token)] = i;
          }
          return {
            factory: null,
            providersByKey: e,
            providers: t,
            modules: n,
            isRoot: r,
          };
        })([
          Ar(512, un, sn, [[8, [bf, Md]], [3, un], Bt]),
          Ar(5120, Qo, zi, [[3, Qo]]),
          Ar(4608, Mu, Du, [Qo, [2, ju]]),
          Ar(5120, Eo, Bi, [li]),
          Ar(5120, Uo, Lo, []),
          Ar(5120, Pn, Fi, []),
          Ar(5120, An, Hi, []),
          Ar(4608, dc, yc, [Gu]),
          Ar(6144, Te, null, [dc]),
          Ar(4608, uc, lc, []),
          Ar(
            5120,
            jl,
            function(t, e, n, r, o, i, a, u) {
              return [new ic(t, e, n), new fc(r), new cc(o, i, a, u)];
            },
            [Gu, li, zo, Gu, Gu, uc, qo, [2, sc]]
          ),
          Ar(4608, Ml, Ml, [jl, li]),
          Ar(135680, Ul, Ul, [Gu]),
          Ar(4608, Ql, Ql, [Ml, Ul, Uo]),
          Ar(6144, dn, null, [Ql]),
          Ar(6144, Vl, null, [Ul]),
          Ar(4608, gi, gi, [li]),
          Ar(4608, Ff, Ff, []),
          Ar(5120, Np, hf, [Bh]),
          Ar(4608, Yh, Yh, []),
          Ar(6144, $h, null, [Yh]),
          Ar(135680, Xh, Xh, [Bh, ki, ti, De, $h]),
          Ar(4608, Jh, Jh, []),
          Ar(5120, tf, uf, [Bh, Zu, ef]),
          Ar(5120, vf, yf, [ff]),
          Ar(
            5120,
            Bo,
            function(t) {
              return [t];
            },
            [vf]
          ),
          Ar(4608, Cs, xs, [Gu, zo, bs]),
          Ar(4608, Es, Es, [Cs, ws]),
          Ar(
            5120,
            ds,
            function(t) {
              return [t];
            },
            [Es]
          ),
          Ar(4608, ms, ms, []),
          Ar(6144, gs, null, [ms]),
          Ar(4608, _s, _s, [gs]),
          Ar(6144, Ju, null, [_s]),
          Ar(4608, $u, Ss, [Ju, De]),
          Ar(4608, hs, hs, [$u]),
          Ar(1073742336, Qu, Qu, []),
          Ar(1024, ee, xc, []),
          Ar(
            1024,
            wi,
            function() {
              return [of()];
            },
            []
          ),
          Ar(512, ff, ff, [De]),
          Ar(
            1024,
            Do,
            function(t, e) {
              return [
                ((n = t),
                Il('probe', Nl),
                Il(
                  'coreTokens',
                  Object(r.__assign)(
                    {},
                    Rl,
                    (n || []).reduce(function(t, e) {
                      t[e.name] = e.token;
                      return t;
                    }, {})
                  )
                ),
                function() {
                  return Nl;
                }),
                df(e),
              ];
              var n;
            },
            [[2, wi], ff]
          ),
          Ar(512, Vo, Vo, [[2, Do]]),
          Ar(131584, Oi, Oi, [li, qo, De, ee, un, Vo]),
          Ar(1073742336, qi, qi, [Oi]),
          Ar(1073742336, Ec, Ec, [[3, Ec]]),
          Ar(1073742336, hd, hd, []),
          Ar(1073742336, fd, fd, []),
          Ar(1024, nf, lf, [[3, Bh]]),
          Ar(512, pp, hp, []),
          Ar(512, Wh, Wh, []),
          Ar(256, ef, {}, []),
          Ar(1024, Tu, sf, [Su, [2, ku], ef]),
          Ar(512, Pu, Pu, [Tu, Su]),
          Ar(512, ti, ti, []),
          Ar(512, ki, Ii, [ti, [2, Pi]]),
          Ar(
            1024,
            Dh,
            function() {
              return [[]];
            },
            []
          ),
          Ar(1024, Bh, pf, [
            Oi,
            pp,
            Wh,
            Pu,
            De,
            ki,
            ti,
            Dh,
            ef,
            [2, Uh],
            [2, jh],
          ]),
          Ar(1073742336, af, af, [[2, nf], [2, Bh]]),
          Ar(1073742336, Dd, Dd, []),
          Ar(1073742336, Os, Os, []),
          Ar(1073742336, Ts, Ts, []),
          Ar(1073742336, vu, vu, []),
          Ar(256, je, true, []),
          Ar(256, bs, 'XSRF-TOKEN', []),
          Ar(256, ws, 'X-XSRF-TOKEN', []),
        ]);
      });
      (function() {
        if (re) {
          throw new Error('Cannot enable prod mode after platform setup.');
        }
        ne = false;
      })();
      Cc()
        .bootstrapModuleFactory(Vd)
        .catch(function(t) {
          return console.error(t);
        });
    },
    zn8P: function(t, e) {
      function n(t) {
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + t + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }
      n.keys = function() {
        return [];
      };
      n.resolve = n;
      t.exports = n;
      n.id = 'zn8P';
    },
  },
  [[0, 0]],
]);

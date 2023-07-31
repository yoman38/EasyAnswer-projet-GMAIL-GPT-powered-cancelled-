"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.6.3", jQuery3 = function(selector, context) {
          return new jQuery3.fn.init(selector, context);
        };
        jQuery3.fn = jQuery3.prototype = {
          jquery: version,
          constructor: jQuery3,
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          pushStack: function(elems) {
            var ret = jQuery3.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          each: function(callback) {
            return jQuery3.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery3.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery3.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery3.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery3.extend = jQuery3.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery3.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery3.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery3.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery3.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery3.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          guid: 1,
          support
        });
        if (typeof Symbol === "function") {
          jQuery3.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery3.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window3) {
          var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
            var i2 = 0, len = list.length;
            for (; i2 < len; i2++) {
              if (list[i2] === elem) {
                return i2;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace2 = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace2 + "*(" + identifier + ")(?:" + whitespace2 + "*([*^$|!~]?=)" + whitespace2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace2 + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace2 + "+", "g"), rtrim2 = new RegExp("^" + whitespace2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace2 + "+$", "g"), rcomma = new RegExp("^" + whitespace2 + "*," + whitespace2 + "*"), rcombinators = new RegExp("^" + whitespace2 + "*([>+~]|" + whitespace2 + ")" + whitespace2 + "*"), rdescend = new RegExp(whitespace2 + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace2 + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace2 + "*(?:([+-]|)" + whitespace2 + "*(\\d+)|))" + whitespace2 + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace2 + "*((?:-\\d)?\\d*)" + whitespace2 + "*\\)|)(?=[^-]|$)", "i")
          }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "\uFFFD";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
            },
            { dir: "parentNode", next: "legend" }
          );
          try {
            push2.apply(
              arr2 = slice2.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr2[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: arr2.length ? function(target, els) {
                pushNative.apply(target, slice2.call(els));
              } : function(target, els) {
                var j = target.length, i2 = 0;
                while (target[j++] = els[i2++]) {
                }
                target.length = j - 1;
              }
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext !== context || !support2.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    if (support2.cssSupportsSelector && !CSS.supports("selector(:is(" + newSelector + "))")) {
                      throw new Error();
                    }
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr3 = attrs.split("|"), i2 = arr3.length;
            while (i2--) {
              Expr.attrHandle[arr3[i2]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            docElem = document3.documentElement;
            documentIsHTML = !isXML(document3);
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }
            support2.scope = assert(function(el) {
              docElem.appendChild(el).appendChild(document3.createElement("div"));
              return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            support2.cssSupportsSelector = assert(function() {
              return CSS.supports("selector(*)") && document3.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))");
            });
            support2.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(el) {
              el.appendChild(document3.createComment(""));
              return !el.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
            support2.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document3.getElementsByName || !document3.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i2++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document3.querySelectorAll)) {
              assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace2 + `*(?:''|"")`);
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace2 + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                input = document3.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace2 + "*name" + whitespace2 + "*=" + whitespace2 + `*(?:''|"")`);
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                el.querySelectorAll("\\\f");
                rbuggyQSA.push("[\\r\\n\\f]");
              });
              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace2 + "*[*^$|!~]?=");
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            if (!support2.cssSupportsSelector) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 && a.documentElement || a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                  return -1;
                }
                if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a == document3 ? -1 : b == document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i2] === bp[i2]) {
                i2++;
              }
              return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : 0;
            };
            return document3;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle2(expr, document3, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace2 + ")" + className + "(" + whitespace2 + "|$)")) && classCache(
                  className,
                  function(elem) {
                    return pattern.test(
                      typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                    );
                  }
                );
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, _context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf2(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),
              "checked": function(elem) {
                var nodeName2 = elem.nodeName.toLowerCase();
                return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
          };
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            } : function(elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if (skip && skip === elem.nodeName.toLowerCase()) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      uniqueCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              Sizzle2(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrim2, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2);
        jQuery3.find = Sizzle;
        jQuery3.expr = Sizzle.selectors;
        jQuery3.expr[":"] = jQuery3.expr.pseudos;
        jQuery3.uniqueSort = jQuery3.unique = Sizzle.uniqueSort;
        jQuery3.text = Sizzle.getText;
        jQuery3.isXMLDoc = Sizzle.isXML;
        jQuery3.contains = Sizzle.contains;
        jQuery3.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery3(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery3.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery3.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery3.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery3.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery3.filter(qualifier, elements, not);
        }
        jQuery3.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery3.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery3.find.matches(expr, jQuery3.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery3.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery3(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery3.contains(self[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery3.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery3.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery3(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery3.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery3 ? context[0] : context;
                jQuery3.merge(this, jQuery3.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery3.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : selector(jQuery3);
          }
          return jQuery3.makeArray(selector, this);
        };
        init.prototype = jQuery3.fn;
        rootjQuery = jQuery3(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery3.fn.extend({
          has: function(target) {
            var targets = jQuery3(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery3.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery3(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery3.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery3.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery3(elem), this[0]);
            }
            return indexOf.call(
              this,
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery3.uniqueSort(
                jQuery3.merge(this.get(), jQuery3(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery3.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery3.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery3.fn[name] = function(until, selector) {
            var matched = jQuery3.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery3.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery3.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery3.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery3.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery3.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery3.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery3.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery3.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery3.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery3.extend({
          Deferred: function(func) {
            var tuples = [
              [
                "notify",
                "progress",
                jQuery3.Callbacks("memory"),
                jQuery3.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery3.Callbacks("once memory"),
                jQuery3.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery3.Callbacks("once memory"),
                jQuery3.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              pipe: function() {
                var fns = arguments;
                return jQuery3.Deferred(function(newDefer) {
                  jQuery3.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery3.Deferred.exceptionHook) {
                          jQuery3.Deferred.exceptionHook(
                            e,
                            process.stackTrace
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery3.Deferred.getStackHook) {
                        process.stackTrace = jQuery3.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery3.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery3.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery3.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  tuples[3 - i][2].disable,
                  tuples[3 - i][3].disable,
                  tuples[0][2].lock,
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery3.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery3.Deferred.exceptionHook = function(error, stack) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
          }
        };
        jQuery3.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery3.Deferred();
        jQuery3.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery3.readyException(error);
          });
          return this;
        };
        jQuery3.extend({
          isReady: false,
          readyWait: 1,
          ready: function(wait) {
            if (wait === true ? --jQuery3.readyWait : jQuery3.isReady) {
              return;
            }
            jQuery3.isReady = true;
            if (wait !== true && --jQuery3.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery3]);
          }
        });
        jQuery3.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery3.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery3.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery3(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery3.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery3.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery3.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery3.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery3.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery3.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery3.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery3.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery3._queueHooks(elem, type), next = function() {
              jQuery3.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery3.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery3.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery3.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery3.queue(this, type, data);
              jQuery3._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery3.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery3.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery3.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery3.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery3.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery3.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery3.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery3.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery3.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery3.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery3.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery3.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery3.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery3.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery3(this).show();
              } else {
                jQuery3(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery3.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery3.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery3.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery3.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery3.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery3().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery3.guid++);
          }
          return elem.each(function() {
            jQuery3.event.add(this, types, fn, data, selector);
          });
        }
        jQuery3.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery3.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery3.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery3 !== "undefined" && jQuery3.event.triggered !== e.type ? jQuery3.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery3.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery3.event.special[type] || {};
              handleObj = jQuery3.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery3.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery3.event.global[type] = true;
            }
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery3.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery3.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery3.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery3.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery3.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery3.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery3.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery3.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery3(sel, this).index(cur) > -1 : jQuery3.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery3.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery3.expando] ? originalEvent : new jQuery3.Event(originalEvent);
          },
          special: {
            load: {
              noBubble: true
            },
            click: {
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", returnTrue);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery3.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery3.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync2(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result && result.value;
                  }
                } else if ((jQuery3.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery3.event.trigger(
                    jQuery3.extend(saved[0], jQuery3.Event.prototype),
                    saved.slice(1),
                    this
                  )
                });
                event.stopImmediatePropagation();
              }
            }
          });
        }
        jQuery3.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery3.Event = function(src, props) {
          if (!(this instanceof jQuery3.Event)) {
            return new jQuery3.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery3.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery3.expando] = true;
        };
        jQuery3.Event.prototype = {
          constructor: jQuery3.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery3.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery3.event.addProp);
        jQuery3.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery3.event.special[type] = {
            setup: function() {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
        });
        jQuery3.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery3.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery3.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery3.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery3(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery3.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery3(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery3.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery3.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery3.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery3.clone(node, true, true);
                  if (hasScripts) {
                    jQuery3.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery3.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery3.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery3._evalUrl && !node.noModule) {
                        jQuery3._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery3.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery3.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery3.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery3.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery3.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery3.event.remove(elem, type);
                      } else {
                        jQuery3.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery3.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery3.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery3.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery3.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery3.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery3.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery3.inArray(this, ignored) < 0) {
                jQuery3.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery3.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery3.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery3(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery3(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery3.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery3.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery3.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              delta += jQuery3.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery3.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery3.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            )) || 0;
          }
          return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery3.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery3.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
            isBorderBox = jQuery3.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            val
          ) + "px";
        }
        jQuery3.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          cssProps: {},
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery3.cssHooks[name] || jQuery3.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery3.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery3.cssHooks[name] || jQuery3.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery3.each(["height", "width"], function(_i, dimension) {
          jQuery3.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery3.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery3.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery3.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery3.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery3.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery3.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery3.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery3.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery3.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery3.style(elem, name2, value2) : jQuery3.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery3.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery3.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery3.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery3.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery3.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery3.fx.step[tween.prop]) {
                jQuery3.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery3.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery3.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery3.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery3.fx = Tween.prototype.init;
        jQuery3.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery3.fx.interval);
            }
            jQuery3.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery3._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery3.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery3.style(elem, prop);
            }
          }
          propTween = !jQuery3.isEmptyObject(props);
          if (!propTween && jQuery3.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery3.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery3.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery3.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery3.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery3.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery3.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery3.extend({}, properties),
            opts: jQuery3.extend(true, {
              specialEasing: {},
              easing: jQuery3.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery3.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery3._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery3.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery3.fx.timer(
            jQuery3.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery3.Animation = jQuery3.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery3.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery3.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery3.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery3.fx.speeds) {
                opt.duration = jQuery3.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery3.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery3.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery3.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery3.isEmptyObject(prop), optall = jQuery3.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery3.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery3.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery3.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery3.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery3.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery3.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery3.fn[name];
          jQuery3.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery3.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery3.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery3.timers = [];
        jQuery3.fx.tick = function() {
          var timer, i = 0, timers = jQuery3.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery3.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery3.fx.timer = function(timer) {
          jQuery3.timers.push(timer);
          jQuery3.fx.start();
        };
        jQuery3.fx.interval = 13;
        jQuery3.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery3.fx.stop = function() {
          inProgress = null;
        };
        jQuery3.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery3.fn.delay = function(time, type) {
          time = jQuery3.fx ? jQuery3.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery3.expr.attrHandle;
        jQuery3.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery3.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery3.removeAttr(this, name);
            });
          }
        });
        jQuery3.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery3.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery3.isXMLDoc(elem)) {
              hooks = jQuery3.attrHooks[name.toLowerCase()] || (jQuery3.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery3.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery3.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery3.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery3.each(jQuery3.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery3.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery3.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery3.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery3.propFix[name] || name];
            });
          }
        });
        jQuery3.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery3.isXMLDoc(elem)) {
              name = jQuery3.propFix[name] || name;
              hooks = jQuery3.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery3.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery3.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery3.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery3.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery3.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery3(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery3(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery3(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self = jQuery3(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery3.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery3.valHooks[elem.type] || jQuery3.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery3(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery3.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery3.valHooks[this.type] || jQuery3.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery3.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery3.find.attr(elem, "value");
                return val != null ? val : stripAndCollapse(jQuery3.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery3(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery3.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery3.inArray(jQuery3.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery3.each(["radio", "checkbox"], function() {
          jQuery3.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery3.inArray(jQuery3(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery3.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery3.extend(jQuery3.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery3.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery3.expando] ? event : new jQuery3.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery3.makeArray(data, [event]);
            special = jQuery3.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery3.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery3.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          simulate: function(type, elem, event) {
            var e = jQuery3.extend(
              new jQuery3.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery3.event.trigger(e, null, elem);
          }
        });
        jQuery3.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery3.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery3.event.trigger(type, data, elem, true);
            }
          }
        });
        if (!support.focusin) {
          jQuery3.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery3.event.simulate(fix, event.target, jQuery3.event.fix(event));
            };
            jQuery3.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              }
            };
          });
        }
        var location = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery3.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery3.error("Invalid XML: " + (parserErrorElem ? jQuery3.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery3.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery3.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery3.isPlainObject(a)) {
            jQuery3.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery3.fn.extend({
          serialize: function() {
            return jQuery3.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery3.prop(this, "elements");
              return elements ? jQuery3.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery3(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery3(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery3.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery3.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery3.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery3.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery3.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": JSON.parse,
              "text xml": jQuery3.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery3.ajaxSettings), settings) : ajaxExtend(jQuery3.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery3.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery3(callbackContext) : jQuery3.event, deferred = jQuery3.Deferred(), completeDeferred = jQuery3.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery3.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery3.event && s.global;
            if (fireGlobals && jQuery3.active++ === 0) {
              jQuery3.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery3.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery3.lastModified[cacheURL]);
              }
              if (jQuery3.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery3.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery3.inArray("script", s.dataTypes) > -1 && jQuery3.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery3.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery3.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery3.active) {
                  jQuery3.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery3.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery3.get(url, void 0, callback, "script");
          }
        });
        jQuery3.each(["get", "post"], function(_i, method) {
          jQuery3[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery3.ajax(jQuery3.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery3.isPlainObject(url) && url));
          };
        });
        jQuery3.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery3._evalUrl = function(url, options, doc) {
          return jQuery3.ajax({
            url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery3.globalEval(response, options, doc);
            }
          });
        };
        jQuery3.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery3(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery3(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self = jQuery3(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery3(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery3(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery3.expr.pseudos.hidden = function(elem) {
          return !jQuery3.expr.pseudos.visible(elem);
        };
        jQuery3.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery3.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          0: 200,
          1223: 204
        }, xhrSupported = jQuery3.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery3.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery3.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery3.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery3.globalEval(text);
              return text;
            }
          }
        });
        jQuery3.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery3.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery3("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery3.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery3.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery3.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery3.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery3(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery3.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery3(scripts).remove();
          }
          return jQuery3.merge([], parsed.childNodes);
        };
        jQuery3.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery3.ajax({
              url,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? jQuery3("<div>").append(jQuery3.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery3.expr.pseudos.animated = function(elem) {
          return jQuery3.grep(jQuery3.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery3.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery3.css(elem, "position"), curElem = jQuery3(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery3.css(elem, "top");
            curCSSLeft = jQuery3.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery3.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery3.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery3.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery3.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery3.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery3(offsetParent).offset();
                parentOffset.top += jQuery3.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery3.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery3.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery3.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery3.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery3.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top2 = "pageYOffset" === prop;
          jQuery3.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top2 ? val2 : win.pageXOffset,
                  top2 ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery3.each(["top", "left"], function(_i, prop) {
          jQuery3.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery3(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery3.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery3.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery3.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? jQuery3.css(elem, type2, extra) : jQuery3.style(elem, type2, value2, extra);
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery3.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery3.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery3.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery3.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery3.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery3.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery3.guid++;
          return proxy;
        };
        jQuery3.holdReady = function(hold) {
          if (hold) {
            jQuery3.readyWait++;
          } else {
            jQuery3.ready(true);
          }
        };
        jQuery3.isArray = Array.isArray;
        jQuery3.parseJSON = JSON.parse;
        jQuery3.nodeName = nodeName;
        jQuery3.isFunction = isFunction;
        jQuery3.isWindow = isWindow;
        jQuery3.camelCase = camelCase;
        jQuery3.type = toType;
        jQuery3.now = Date.now;
        jQuery3.isNumeric = function(obj) {
          var type = jQuery3.type(obj);
          return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        };
        jQuery3.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery3;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery3.noConflict = function(deep) {
          if (window2.$ === jQuery3) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery3) {
            window2.jQuery = _jQuery;
          }
          return jQuery3;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery3;
        }
        return jQuery3;
      });
    }
  });

  // node_modules/gmail-js/src/gmail.js
  var require_gmail = __commonJS({
    "node_modules/gmail-js/src/gmail.js"(exports) {
      var Gmail = function(localJQuery) {
        var $;
        if (typeof localJQuery !== "undefined") {
          $ = localJQuery;
        } else if (typeof jQuery !== "undefined") {
          $ = jQuery;
        } else {
          try {
            $ = require_jquery();
          } catch (err) {
          }
        }
        var window_opener = typeof window !== "undefined" ? window.opener : null;
        if (window_opener) {
          try {
            var opener_domain = window_opener.document.domain;
            if (opener_domain !== window.document.domain) {
              console.warn("GmailJS: window.opener domain differs from window domain.");
              window_opener = null;
            }
          } catch (error) {
            console.warn("GmailJS: Unable to access window.opener!", error);
            window_opener = null;
          }
        }
        var api = {
          get: {},
          observe: {},
          check: { data: {} },
          tools: {},
          tracker: {},
          dom: {},
          chat: {},
          compose: {},
          helper: { get: {} }
        };
        api.DISABLE_OLD_GMAIL_API_DEPRECATION_WARNINGS = false;
        function oldGmailApiDeprecated(text = "Migrate to new API compatible with new Gmail to silence this warning!") {
          if (api.DISABLE_OLD_GMAIL_API_DEPRECATION_WARNINGS) {
            return;
          }
          console.warn("GmailJS: using deprecated API for old Gmail.", text);
        }
        api.version = "0.8.0";
        api.tracker.globals = typeof GLOBALS !== "undefined" ? GLOBALS : window_opener && window_opener.GLOBALS || [];
        api.tracker.view_data = typeof VIEW_DATA !== "undefined" ? VIEW_DATA : window_opener && window_opener.VIEW_DATA || [];
        api.tracker.ik = api.tracker.globals[9] || "";
        api.tracker.mla = void 0;
        api.tracker.hangouts = void 0;
        api.cache = {};
        api.cache.debug_xhr_fetch = false;
        api.cache.emailIdCache = {};
        api.cache.emailLegacyIdCache = {};
        api.cache.threadCache = {};
        api.get.last_active = function() {
          var data = api.tracker.globals[17][15];
          return {
            time: data[1],
            ip: data[3],
            mac_address: data[9],
            time_relative: data[10]
          };
        };
        api.get.loggedin_accounts = function() {
          const data = api.tracker.mla;
          if (!Array.isArray(data)) {
            return [];
          }
          return data[1].map((item) => ({
            name: item[4],
            email: item[0],
            index: item[3]
          }));
        };
        api.get.user_email = function() {
          return api.tracker.globals[10];
        };
        api.get.manager_email = function() {
          if (api.helper.get.is_delegated_inbox()) {
            return api.get.delegated_to_email();
          }
          return api.get.user_email();
        };
        api.get.delegated_to_email = function() {
          if (!api.helper.get.is_delegated_inbox()) {
            return null;
          }
          const userIndexPrefix = "/u/";
          const pathname = window.location.pathname;
          const delegatedToUserIndex = parseInt(pathname.substring(pathname.indexOf(userIndexPrefix) + userIndexPrefix.length), 10);
          const loggedInAccounts = api.get.loggedin_accounts();
          const loggedInAccount = loggedInAccounts.find((account) => account.index === delegatedToUserIndex);
          return loggedInAccount ? loggedInAccount.email : null;
        };
        api.helper.get.is_locale = function(locale) {
          if (!locale || typeof locale !== "string" || locale.length < 2) {
            return false;
          }
          if (locale.match(/[0-9]/)) {
            return false;
          }
          var localePrefix = locale.slice(0, 2);
          return localePrefix.toLowerCase() === localePrefix || localePrefix.toUpperCase() === localePrefix;
        };
        api.helper.filter_locale = function(locale) {
          if (!api.helper.get.is_locale(locale)) {
            return null;
          }
          return locale.substring(0, 2).toLowerCase();
        };
        api.helper.array_starts_with = function(list, item) {
          if (list && list.length > 0 && list[0] === item) {
            return true;
          } else {
            return false;
          }
        };
        api.helper.get.array_sublist = function(nestedArray, itemKey) {
          if (nestedArray) {
            for (var i = 0; i < nestedArray.length; i++) {
              var list = nestedArray[i];
              if (api.helper.array_starts_with(list, itemKey)) {
                return list;
              }
            }
          }
          return null;
        };
        api.helper.get.locale_from_url_params = function(value) {
          if (value && value.indexOf && (value.indexOf("https://") === 0 || value.indexOf("http://") === 0)) {
            var urlParts = value.split("?");
            if (urlParts.length > 1) {
              var hash = urlParts[1];
              var hashParts = hash.split("&");
              for (var i = 0; i < hashParts.length; i++) {
                var kvp = hashParts[i].split("=");
                if (kvp.length === 2 && kvp[0] === "hl") {
                  return kvp[1];
                }
              }
            }
          }
          return null;
        };
        api.helper.get.locale_from_globals_item = function(list) {
          if (!list) {
            return null;
          }
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var locale = api.helper.get.locale_from_url_params(item);
            if (locale) {
              return locale;
            }
          }
          return list[8];
        };
        api.get.localization = function() {
          var globals = api.tracker.globals;
          var localeList = api.helper.get.array_sublist(globals[17], "ui");
          if (localeList !== null && localeList.length > 8) {
            let locale = api.helper.get.locale_from_globals_item(localeList);
            locale = api.helper.filter_locale(locale);
            if (locale) {
              return locale;
            }
          }
          if (globals[12] !== null) {
            let locale = api.helper.get.locale_from_url_params(globals[12]);
            locale = api.helper.filter_locale(locale);
            if (locale) {
              return locale;
            }
          }
          if (globals[4]) {
            let locale = globals[4].split(".")[1];
            locale = api.helper.filter_locale(locale);
            if (locale) {
              return locale;
            }
          }
          return null;
        };
        api.check.is_new_data_layer = function() {
          return window["GM_SPT_ENABLED"] === "true";
        };
        api.check.is_new_gui = function() {
          return window.GM_RFT_ENABLED === "true";
        };
        api.check.is_thread = function() {
          var check_1 = $(".nH .if,.iY").children(":eq(1)").children().children(":eq(1)").children();
          var check_2 = api.get.email_ids();
          return check_1.length > 1 || check_2.length > 1;
        };
        api.check.is_peoplekit_compose = function(el) {
          return $(el).find("div[name=to] input[peoplekit-id]").length !== 0;
        };
        api.dom.inbox_content = function() {
          return $("div[role=main]:first");
        };
        api.check.is_preview_pane = function() {
          var dom = api.dom.inbox_content();
          var boxes = dom.find("[gh=tl]");
          var previewPaneFound = false;
          boxes.each(function() {
            if ($(this).hasClass("aia")) {
              previewPaneFound = true;
            }
          });
          return previewPaneFound;
        };
        api.check.is_multiple_inbox = function() {
          var dom = api.dom.inboxes();
          return dom.length > 1;
        };
        api.check.is_horizontal_split = function() {
          var dom = api.dom.inbox_content();
          var box = dom.find("[gh=tl]").find(".nn");
          return box.length === 0;
        };
        api.check.is_vertical_split = function() {
          return api.check.is_horizontal_split() === false;
        };
        api.check.is_tabbed_inbox = function() {
          return $(".aKh").length === 1;
        };
        api.check.is_right_side_chat = function() {
          var chat = $(".ApVoH");
          if (chat.length === 0) {
            return false;
          }
          return chat[0].getAttribute("aria-labelledby") === ":wf";
        };
        api.check.should_compose_fullscreen = function() {
          console.warn("gmail.js: This function is known to be unreliable, and may be deprecated in a future release.");
          var bx_scfs = [];
          try {
            bx_scfs = api.tracker.globals[17][4][1][32];
          } catch (er) {
            bx_scfs = ["bx_scfs", "false"];
          }
          return bx_scfs[1] === "true" ? true : false;
        };
        api.check.is_google_apps_user = function() {
          var email = api.get.user_email();
          return email.indexOf("gmail.com", email.length - "gmail.com".length) === -1;
        };
        api.get.storage_info = function() {
          var div = document.querySelector(".md.mj div");
          var used = div.querySelectorAll("span")[0].textContent.replace(/,/g, ".");
          var total = div.querySelectorAll("span")[1].textContent.replace(/,/g, ".");
          var percent = parseFloat(used.replace(/[^0-9\.]/g, "")) * 100 / parseFloat(total.replace(/[^0-9\.]/g, ""));
          return { used, total, percent: Math.floor(percent) };
        };
        api.dom.inboxes = function() {
          var dom = api.dom.inbox_content();
          return dom.find("[gh=tl]");
        };
        api.dom.email_subject = function() {
          var e = $(".hP");
          for (var i = 0; i < e.length; i++) {
            if ($(e[i]).is(":visible")) {
              return $(e[i]);
            }
          }
          return $();
        };
        api.get.email_subject = function() {
          var subject_dom = api.dom.email_subject();
          return subject_dom.text();
        };
        api.dom.email_body = function() {
          return $(".nH.hx");
        };
        api.dom.toolbar = function() {
          var tb = $("[gh='mtb']");
          while ($(tb).children().length === 1) {
            tb = $(tb).children().first();
          }
          return tb;
        };
        api.dom.right_toolbar = function() {
          var rtb = $("[gh='tm'] [gh='s']").parent();
          while ($(rtb).children().length === 1) {
            rtb = $(rtb).children().first();
          }
          return rtb;
        };
        api.check.is_inside_email = function() {
          if (api.get.current_page() !== "email" && !api.check.is_preview_pane()) {
            return false;
          }
          var items = $(".ii.gt .a3s");
          var ids = [];
          for (var i = 0; i < items.length; i++) {
            var mail_id = items[i].getAttribute("class").split(" ")[2];
            if (mail_id !== "undefined" && mail_id !== void 0) {
              ids.push(items[i]);
            }
          }
          return ids.length > 0;
        };
        api.check.is_plain_text = function() {
          var settings = api.tracker.globals[17][4][1];
          for (var i = 0; i < settings.length; i++) {
            var plain_text_setting = settings[i];
            if (plain_text_setting[0] === "bx_cm") {
              return plain_text_setting[1] === "0";
            }
          }
          return false;
        };
        api.dom.email_contents = function() {
          var items = $(".ii.gt div.a3s.aXjCH");
          var ids = [];
          for (var i = 0; i < items.length; i++) {
            var mail_id = items[i].getAttribute("class").split(" ")[2];
            var is_editable = items[i].getAttribute("contenteditable");
            if (mail_id !== "undefined" && mail_id !== void 0) {
              if (is_editable !== "true") {
                ids.push(items[i]);
              }
            }
          }
          return ids;
        };
        api.get.email_ids = function() {
          oldGmailApiDeprecated();
          if (api.check.is_inside_email()) {
            var data = api.get.email_data();
            return Object.keys(data.threads);
          }
          return [];
        };
        api.get.compose_ids = function() {
          var ret = [];
          var dom = $(".M9 [name=draft]");
          for (var i = 0; i < dom.length; i++) {
            if (dom[i].value !== "undefined") {
              ret.push(dom[i].value);
            }
          }
          return ret;
        };
        api.get.thread_id = function() {
          oldGmailApiDeprecated();
          const elem = document.querySelector("h2[data-legacy-thread-id]");
          if (elem !== null) {
            return elem.dataset.legacyThreadId;
          } else {
            return void 0;
          }
        };
        api.get.email_id = function() {
          oldGmailApiDeprecated();
          return api.get.thread_id();
        };
        api.check.is_priority_inbox = function() {
          return $(".qh").length > 0;
        };
        api.check.is_rapportive_installed = function() {
          return $("#rapportive-sidebar").length === 1;
        };
        api.check.is_streak_installed = function() {
          return $("[id^='bentoBox'],[id*=' bentoBox'],[class*=' bentoBox'],[class*='bentoBox']").length > 0;
        };
        api.check.is_anydo_installed = function() {
          return $("[id^='anydo'],[id*=' anydo'],[class*=' anydo'],[class*='anydo']").length > 0;
        };
        api.check.is_boomerang_installed = function() {
          return $("[id^='b4g_'],[id*=' b4g_'],[class*=' b4g_'],[class*='b4g_']").length > 0;
        };
        api.check.is_xobni_installed = function() {
          return $("#xobni_frame").length > 0;
        };
        api.check.is_signal_installed = function() {
          return $("[id^='Signal'],[id*=' Signal'],[class*=' signal'],[class*='signal']").length > 0;
        };
        api.check.are_shortcuts_enabled = function() {
          var flag_name = "bx_hs";
          var flag_value = void 0;
          var check = true;
          var array_with_flag = api.tracker.globals[17][4][1];
          for (var i = 0; i < array_with_flag.length; i++) {
            var current = array_with_flag[i];
            if (current[0] === flag_name) {
              flag_value = current[1];
              break;
            }
          }
          if (flag_value !== void 0) {
            var values = {
              "0": true,
              "1": false
            };
            check = values[flag_value];
          }
          return check;
        };
        api.dom.get_left_sidebar_links = function() {
          return $("div[role=navigation] [title]");
        };
        api.dom.header = function() {
          return $("#gb");
        };
        api.dom.search_bar = function() {
          return $("[gh=sb]");
        };
        api.get.search_query = function() {
          var dom = api.dom.search_bar();
          return dom.find("input")[0].value;
        };
        api.get.unread_inbox_emails = function() {
          return api.helper.get.navigation_count("inbox");
        };
        api.get.unread_draft_emails = function() {
          return api.helper.get.navigation_count("drafts");
        };
        api.get.unread_spam_emails = function() {
          return api.helper.get.navigation_count("spam");
        };
        api.get.unread_forum_emails = function() {
          return api.helper.get.navigation_count("forums");
        };
        api.get.unread_update_emails = function() {
          return api.helper.get.navigation_count("updates");
        };
        api.get.unread_promotion_emails = function() {
          return api.helper.get.navigation_count("promotions");
        };
        api.get.unread_social_emails = function() {
          return api.helper.get.navigation_count("social_updates");
        };
        api.helper.get.navigation_count = function(i18nName) {
          const title = api.tools.i18n(i18nName);
          const dom = $("div[role=navigation]").find("[title*='" + title + "']");
          if (dom || dom.length > 0) {
            if (dom[0].title.indexOf(title) !== -1) {
              const value = parseInt(dom[0].attributes["aria-label"].value.replace(/[^0-9]/g, ""));
              if (!isNaN(value)) {
                return value;
              }
            }
          }
          return 0;
        };
        api.get.beta = function() {
          var features = {
            "new_nav_bar": $("#gbz").length === 0
          };
          return features;
        };
        api.get.unread_emails = function() {
          return {
            inbox: api.get.unread_inbox_emails(),
            drafts: api.get.unread_draft_emails(),
            spam: api.get.unread_spam_emails(),
            forum: api.get.unread_forum_emails(),
            update: api.get.unread_update_emails(),
            promotions: api.get.unread_promotion_emails(),
            social: api.get.unread_social_emails()
          };
        };
        api.tools.error = function(str, ...args) {
          console.error(str, ...args);
        };
        api.tools.parse_url = function(url) {
          var regex = /[?&]([^=#]+)=([^&#]*)/g;
          var params = {};
          var match = regex.exec(url);
          while (match) {
            params[match[1]] = match[2];
            match = regex.exec(url);
          }
          return params;
        };
        api.tools.sleep = function(milliseconds) {
          var start = new Date().getTime();
          while (true) {
            if (new Date().getTime() - start > milliseconds) {
              break;
            }
          }
        };
        api.tools.multitry = function(delay, tries, func, check, counter, retval) {
          if (counter !== void 0 && counter >= tries) {
            return retval;
          }
          counter = counter === void 0 ? 0 : counter;
          var value = func();
          if (check(value)) {
            return value;
          } else {
            api.tools.sleep(delay);
            api.tools.multitry(delay, tries, func, check, counter + 1, value);
          }
        };
        api.tools.deparam = function(params, coerce) {
          var each = function(arr, fnc) {
            var data = [];
            for (var i = 0; i < arr.length; i++) {
              data.push(fnc(arr[i]));
            }
            return data;
          };
          var isArray = Array.isArray || function(obj2) {
            return Object.prototype.toString.call(obj2) === "[object Array]";
          };
          var obj = {}, coerce_types = {
            "true": true,
            "false": false,
            "null": null
          };
          each(params.replace(/\+/g, " ").split("&"), function(v, j) {
            var param = v.split("="), key = decodeURIComponent(param[0]), val, cur = obj, i = 0, keys = key.split("]["), keys_last = keys.length - 1;
            if (/\[/.test(keys[0]) && /\]$/.test(keys[keys_last])) {
              keys[keys_last] = keys[keys_last].replace(/\]$/, "");
              keys = keys.shift().split("[").concat(keys);
              keys_last = keys.length - 1;
            } else {
              keys_last = 0;
            }
            if (param.length === 2) {
              val = decodeURIComponent(param[1]);
              if (coerce) {
                val = val && !isNaN(val) ? +val : val === "undefined" ? void 0 : coerce_types[val] !== void 0 ? coerce_types[val] : val;
              }
              if (keys_last) {
                for (; i <= keys_last; i++) {
                  key = keys[i] === "" ? cur.length : keys[i];
                  cur = cur[key] = i < keys_last ? cur[key] || (keys[i + 1] && isNaN(keys[i + 1]) ? {} : []) : val;
                }
              } else {
                if (isArray(obj[key])) {
                  obj[key].push(val);
                } else if (obj[key] !== void 0) {
                  obj[key] = [obj[key], val];
                } else {
                  obj[key] = val;
                }
              }
            } else if (key) {
              obj[key] = coerce ? void 0 : "";
            }
          });
          return obj;
        };
        api.tools.get_pathname_from_url = function(url) {
          if (typeof document !== "undefined") {
            const a = document.createElement("a");
            a.href = url;
            return a.pathname;
          } else {
            return url;
          }
        };
        api.tools.parse_actions = function(params, xhr) {
          if (params.url.act === "fup" || params.url.act === "fuv" || params.body_is_object) {
            return params.body_is_object && api.observe.bound("upload_attachment") ? { upload_attachment: [params.body_params] } : false;
          }
          if (params.url.search !== void 0) {
          }
          var triggered = {};
          var action_map = {
            "tae": "add_to_tasks",
            "rc_^i": "archive",
            "tr": "delete",
            "dm": "delete_message_in_thread",
            "dl": "delete_forever",
            "dc_": "delete_label",
            "dr": "discard_draft",
            "el": "expand_categories",
            "cffm": "filter_messages_like_these",
            "arl": "label",
            "mai": "mark_as_important",
            "mani": "mark_as_not_important",
            "us": "mark_as_not_spam",
            "sp": "mark_as_spam",
            "mt": "move_label",
            "ib": "move_to_inbox",
            "ig": "mute",
            "rd": "read",
            "sd": "save_draft",
            "sm": "send_message",
            "mo": "show_newly_arrived_message",
            "st": "star",
            "cs": "undo_send",
            "ug": "unmute",
            "ur": "unread",
            "xst": "unstar",
            "new_mail": "new_email",
            "poll": "poll",
            "refresh": "refresh",
            "rtr": "restore_message_in_thread",
            "open_email": "open_email",
            "toggle_threads": "toggle_threads"
          };
          if (typeof params.url.ik === "string") {
            api.tracker.ik = params.url.ik;
          }
          if (typeof params.url.at === "string") {
            api.tracker.at = params.url.at;
          }
          if (typeof params.url.rid === "string") {
            if (params.url.rid.indexOf("mail") !== -1) {
              api.tracker.rid = params.url.rid;
            }
          }
          var action = decodeURIComponent(params.url.act);
          var sent_params = params.body_params;
          var email_ids = typeof sent_params.t === "string" ? [sent_params.t] : sent_params.t;
          var response = null;
          switch (action) {
            case "cs":
            case "ur":
            case "rd":
            case "tr":
            case "sp":
            case "us":
            case "ib":
            case "dl":
            case "st":
            case "xst":
            case "mai":
            case "mani":
            case "ig":
            case "ug":
            case "dr":
            case "mt":
            case "cffm":
            case "rc_^i":
              response = [email_ids, params.url, params.body];
              break;
            case "arl":
            case "dc_":
              response = [email_ids, params.url, params.body, params.url.acn];
              break;
            case "sd":
              response = [email_ids, params.url, sent_params];
              break;
            case "tae":
            case "sm":
              response = [params.url, params.body, sent_params];
              break;
            case "el":
              response = [params.url, params.body, sent_params.ex === "1"];
              break;
            case "dm":
            case "rtr":
            case "mo":
              response = [sent_params.m, params.url, params.body];
              break;
          }
          if (typeof params.url._reqid === "string" && params.url.view === "tl" && params.url.auto !== void 0) {
            response = [params.url.th, params.url, params.body];
            if (api.observe.bound("new_email")) {
              triggered.new_email = response;
            }
          }
          if ((params.url.view === "cv" || params.url.view === "ad") && typeof params.url.th === "string" && typeof params.url.search === "string" && params.url.rid === void 0) {
            response = [params.url.th, params.url, params.body];
            if (api.observe.bound("open_email")) {
              triggered.open_email = response;
            }
          }
          if ((params.url.view === "cv" || params.url.view === "ad") && typeof params.url.th === "object" && typeof params.url.search === "string" && params.url.rid !== void 0) {
            response = [params.url.th, params.url, params.body];
            if (api.observe.bound("toggle_threads")) {
              triggered.toggle_threads = response;
            }
          }
          if ((params.url.view === "cv" || params.url.view === "ad") && typeof params.url.th === "string" && typeof params.url.search === "string" && params.url.rid !== void 0) {
            if (params.url.msgs !== void 0) {
              response = [params.url.th, params.url, params.body];
              if (api.observe.bound("toggle_threads")) {
                triggered.toggle_threads = response;
              }
            }
          }
          if (typeof params.url.SID === "string" && typeof params.url.zx === "string" && params.body.indexOf("req0_") !== -1) {
            api.tracker.SID = params.url.SID;
            response = [params.url, params.body, sent_params];
            if (api.observe.bound("poll")) {
              triggered.poll = response;
            }
          }
          if (typeof params.url.ik === "string" && typeof params.url.search === "string" && params.body.length === 0 && typeof params.url._reqid === "string") {
            response = [params.url, params.body, sent_params];
            if (api.observe.bound("refresh")) {
              triggered.refresh = response;
            }
          }
          if (response && action_map[action] && api.observe.bound(action_map[action])) {
            triggered[action_map[action]] = response;
          }
          if (params.method === "POST") {
            triggered.http_event = [params];
          }
          if (api.check.is_new_data_layer()) {
            api.tools.parse_request_payload(params, triggered);
          }
          return triggered;
        };
        api.check.data.is_thread_id = function(id) {
          return id && typeof id === "string" && /^thread-[a|f]:/.test(id);
        };
        api.check.data.is_thread = function(obj) {
          return obj && typeof obj === "object" && obj["0"] && api.check.data.is_thread_id(obj["0"]);
        };
        api.check.data.is_email_id = function(id) {
          return id && typeof id === "string" && id.indexOf("bump-") === -1 && /^msg-[a|f]:/.test(id);
        };
        api.check.data.is_email = function(obj) {
          return obj && typeof obj === "object" && obj["0"] && api.check.data.is_email_id(obj["0"]);
        };
        api.check.data.is_email_new = function(obj) {
          return obj && obj[0] && api.check.data.is_email_id(obj[0]);
        };
        api.check.data.is_legacy_email_id = function(id) {
          return id && typeof id === "string" && /^[0-9a-f]{16,}$/.test(id);
        };
        api.check.data.is_action = function(obj) {
          return api.check.data.is_first_type_action(obj) || api.check.data.is_second_type_action(obj);
        };
        api.check.data.is_first_type_action = function(obj) {
          return obj && obj["1"] && Array.isArray(obj["1"]) && obj["1"].length === 1 && typeof obj["1"]["0"] === "string";
        };
        api.check.data.is_second_type_action = function(obj) {
          return obj && obj["2"] && Array.isArray(obj["2"]) && obj["2"].length && typeof obj["2"]["0"] === "string";
        };
        api.check.data.is_smartlabels_array = function(obj) {
          const isNotArray = !obj || !Array.isArray(obj) || obj.length === 0;
          if (isNotArray) {
            return false;
          }
          for (let item of obj) {
            if (typeof item !== "string") {
              return false;
            }
            if (!/^\^[a-z]+/.test(item)) {
              return false;
            }
          }
          return true;
        };
        api.check.data.is_json_string = function(obj) {
          if (!obj || typeof obj !== "string") {
            return false;
          }
          let str = obj.trim();
          return str.startsWith("{") && str.endsWith("}") || str.startsWith("[") && str.endsWith("]");
        };
        api.tools.get_thread_id = function(obj) {
          return api.check.data.is_thread(obj) && obj["1"];
        };
        api.tools.get_thread_data = function(obj) {
          return obj && obj["2"] && typeof obj["2"] === "object" && obj["2"]["7"] && typeof obj["2"]["7"] === "object" && obj["2"]["7"];
        };
        api.tools.get_action = function(obj) {
          return api.tools.get_first_type_action(obj) || api.tools.get_second_type_action(obj);
        };
        api.tools.get_first_type_action = function(obj) {
          return obj && obj[1] && obj[1].join("");
        };
        api.tools.get_second_type_action = function(obj) {
          return obj && obj[2] && obj[2].join("");
        };
        api.tools.get_message_ids = function(obj) {
          return obj && obj["3"] && Array.isArray(obj["3"]) && obj["3"];
        };
        api.tools.extract_from_graph = function(obj, predicate) {
          const result = [];
          const safePredicate = function(item) {
            try {
              return predicate(item);
            } catch (err) {
              return false;
            }
          };
          const forEachGraph = function(obj2) {
            if (safePredicate(obj2)) {
              result.push(obj2);
              return;
            }
            for (let key in obj2) {
              let item = obj2[key];
              if (safePredicate(item)) {
                result.push(item);
                continue;
              }
              if (Array.isArray(item)) {
                for (let listItem of item) {
                  forEachGraph(listItem, obj2);
                }
              } else if (typeof item === "object") {
                forEachGraph(item);
              }
            }
          };
          forEachGraph(obj);
          return result;
        };
        api.tools.check_event_type = function(threadObj) {
          const apply_label = "^x_";
          const action_map = {
            "^a": "archive",
            "^k": "delete",
            "^x_": "label",
            "^u^us": "read",
            "^u": "unread",
            "^us": "new_email",
            "^o": "open_email"
          };
          const threadData = api.tools.get_thread_data(threadObj);
          if (threadData && api.check.data.is_action(threadData)) {
            const action = api.tools.get_action(threadData);
            if (action.startsWith(apply_label) && api.check.data.is_first_type_action(threadData)) {
              return action_map[apply_label];
            } else {
              return action_map[action];
            }
          } else {
            return null;
          }
        };
        api.tools.parse_fd_bv_contacts = function(json) {
          if (!json || !Array.isArray(json)) {
            return [];
          }
          const res = [];
          for (let item of json) {
            res.push(api.tools.parse_fd_bv_contact(item));
          }
          return res;
        };
        api.tools.parse_fd_bv_is_draft = function(item) {
          try {
            if (!Array.isArray(item))
              return false;
            return item.includes("^r") && item.includes("^r_bt");
          } catch (e) {
            return false;
          }
        };
        api.tools.parse_fd_bv_contact = function(item) {
          try {
            return {
              name: item["2"],
              address: item["1"]
            };
          } catch (e) {
            return null;
          }
        };
        api.tools.parse_fd_attachments = function(json) {
          let res = [];
          if (Array.isArray(json)) {
            for (let item of json) {
              let data = item["0"]["3"] || "";
              res.push({
                attachment_id: item["0"]["1"],
                name: data["2"],
                type: data["3"],
                url: api.tools.check_fd_attachment_url(data["1"]),
                size: Number.parseInt(data["4"])
              });
            }
          }
          return res;
        };
        api.tools.parse_fd_embedded_json_attachments = function(json) {
          let res = [];
          if (Array.isArray(json)) {
            for (let item of json) {
              res.push({
                attachment_id: item[3],
                name: item[1],
                type: item[0],
                url: api.tools.check_fd_attachment_url(item[5]),
                size: item[2]
              });
            }
          }
          return res;
        };
        api.tools.check_fd_attachment_url = function(url) {
          var userAccountUrlPart = api.tracker.globals[7];
          if (url && userAccountUrlPart && url.indexOf(userAccountUrlPart) < 0) {
            url = url.replace("/mail/?", userAccountUrlPart + "?");
          }
          return url;
        };
        api.tools.parse_fd_request_html_payload = function(fd_email) {
          let fd_email_content_html = null;
          try {
            const fd_html_containers = fd_email["1"]["5"]["1"];
            for (let fd_html_container of fd_html_containers) {
              fd_email_content_html = (fd_email_content_html || "") + fd_html_container["2"]["1"];
            }
          } catch (e) {
          }
          return fd_email_content_html;
        };
        api.tools.parse_fd_embedded_json_content_html = function(fd_email) {
          let fd_email_content_html = null;
          try {
            const fd_html_containers = fd_email["8"]["1"];
            for (let fd_html_container of fd_html_containers) {
              fd_email_content_html = (fd_email_content_html || "") + fd_html_container["2"]["1"];
            }
          } catch (e) {
          }
          return fd_email_content_html;
        };
        api.tools.parse_fd_request_payload_get_email2 = function(fd_thread_container, fd_email_id) {
          try {
            const fd_emails2 = fd_thread_container["1"]["1"];
            const fd_email2 = fd_emails2.filter((i) => i["0"] === fd_email_id);
            return fd_email2[0];
          } catch (e) {
            return {};
          }
        };
        api.tools.parse_fd_embedded_json_get_email = function(fd_thread_container, fd_email_id) {
          try {
            const fd_emails2 = fd_thread_container["1"]["4"];
            const fd_email2 = fd_emails2.filter((i) => i["0"] === fd_email_id);
            return fd_email2[0];
          } catch (e) {
            return {};
          }
        };
        api.tools.parse_fd_request_payload = function(json) {
          let thread_root = json["1"];
          if (!thread_root || !Array.isArray(thread_root)) {
            return null;
          }
          try {
            const res = [];
            const fd_threads = thread_root;
            for (let fd_thread_container of fd_threads) {
              const fd_thread_id = fd_thread_container["0"];
              let fd_emails = fd_thread_container["2"];
              for (let fd_email of fd_emails) {
                const fd_email_id = fd_email["0"];
                const fd_email2 = api.tools.parse_fd_request_payload_get_email2(fd_thread_container, fd_email_id);
                const fd_legacy_email_id = fd_email["1"]["34"];
                const fd_email_smtp_id = fd_email["1"]["7"];
                const fd_email_subject = fd_email["1"]["4"];
                const fd_email_timestamp = Number.parseInt(fd_email["1"]["16"]);
                const fd_email_date = new Date(fd_email_timestamp);
                const fd_email_is_draft = api.tools.parse_fd_bv_is_draft(fd_email2["3"]);
                const fd_email_content_html = api.tools.parse_fd_request_html_payload(fd_email);
                const fd_attachments = api.tools.parse_fd_attachments(fd_email["1"]["13"]);
                const fd_email_sender_address = fd_email["1"]["10"]["16"];
                let fd_from = api.tools.parse_fd_bv_contact(fd_email2["1"]);
                if (!fd_from) {
                  fd_from = { address: fd_email_sender_address, name: "" };
                }
                const fd_to = api.tools.parse_fd_bv_contacts(fd_email["1"]["0"]);
                const fd_cc = api.tools.parse_fd_bv_contacts(fd_email["1"]["1"]);
                const fd_bcc = api.tools.parse_fd_bv_contacts(fd_email["1"]["2"]);
                const email = {
                  id: fd_email_id,
                  is_draft: fd_email_is_draft,
                  legacy_email_id: fd_legacy_email_id,
                  thread_id: fd_thread_id,
                  smtp_id: fd_email_smtp_id,
                  subject: fd_email_subject,
                  timestamp: fd_email_timestamp,
                  content_html: fd_email_content_html,
                  date: fd_email_date,
                  from: fd_from,
                  to: fd_to,
                  cc: fd_cc,
                  bcc: fd_bcc,
                  attachments: fd_attachments
                };
                if (api.cache.debug_xhr_fetch) {
                  email["$email_node"] = fd_email;
                  email["$thread_node"] = fd_thread_container;
                }
                res.push(email);
              }
            }
            return res;
          } catch (error) {
            console.warn("Gmail.js encountered an error trying to parse email-data on fd request!", error);
            return null;
          }
        };
        api.tools.parse_fd_embedded_json = function(json) {
          let thread_root = json["1"];
          if (!thread_root || !Array.isArray(thread_root)) {
            return null;
          }
          try {
            const res = [];
            const fd_threads = thread_root;
            for (let fd_thread_container of fd_threads) {
              const fd_thread_id = fd_thread_container["1"]["3"];
              let fd_emails = fd_thread_container["1"]["4"];
              for (let fd_email of fd_emails) {
                const fd_email_id = fd_email["0"];
                const fd_email2 = api.tools.parse_fd_embedded_json_get_email(fd_thread_container, fd_email_id);
                const fd_legacy_email_id = fd_email["55"];
                const fd_email_smtp_id = fd_email["13"];
                const fd_email_subject = fd_email["7"];
                const fd_email_is_draft = api.tools.parse_fd_bv_is_draft(fd_email["10"]);
                const fd_email_timestamp = Number.parseInt(fd_email["17"]);
                const fd_email_date = new Date(fd_email_timestamp);
                const fd_email_content_html = api.tools.parse_fd_embedded_json_content_html(fd_email);
                const fd_attachments = api.tools.parse_fd_embedded_json_attachments(fd_email["11"]);
                const fd_email_sender_address = fd_email["18"]["16"];
                let fd_from = api.tools.parse_fd_bv_contact(fd_email2["1"]);
                if (!fd_from) {
                  fd_from = {
                    address: fd_email_sender_address,
                    name: ""
                  };
                }
                const fd_to = api.tools.parse_fd_bv_contacts(fd_email["2"]);
                const fd_cc = api.tools.parse_fd_bv_contacts(fd_email["3"]);
                const fd_bcc = api.tools.parse_fd_bv_contacts(fd_email["4"]);
                const email = {
                  id: fd_email_id,
                  is_draft: fd_email_is_draft,
                  legacy_email_id: fd_legacy_email_id,
                  thread_id: fd_thread_id,
                  smtp_id: fd_email_smtp_id,
                  subject: fd_email_subject,
                  timestamp: fd_email_timestamp,
                  content_html: fd_email_content_html,
                  date: fd_email_date,
                  from: fd_from,
                  to: fd_to,
                  cc: fd_cc,
                  bcc: fd_bcc,
                  attachments: fd_attachments
                };
                if (api.cache.debug_xhr_fetch) {
                  email["$email_node"] = fd_email;
                  email["$thread_node"] = fd_thread_container;
                }
                res.push(email);
              }
            }
            return res;
          } catch (error) {
            console.warn("Gmail.js encountered an error trying to parse email-data on embedded json!", error);
            return null;
          }
        };
        api.tools.parse_bv_request_payload = function(json) {
          let thread_root = json["2"];
          if (!thread_root || !Array.isArray(thread_root)) {
            return null;
          }
          try {
            const res = [];
            const bv_threads = thread_root;
            for (let bv_thread_container of bv_threads) {
              const bv_thread_subject = bv_thread_container["0"]["0"];
              const bv_thread_id = bv_thread_container["0"]["3"];
              let bv_emails = bv_thread_container["0"]["4"];
              for (let bv_email of bv_emails) {
                const bv_email_id = bv_email["0"];
                const bv_legacy_email_id = bv_email["55"];
                const bv_email_smtp_id = "";
                const bv_email_subject = bv_thread_subject;
                const bv_email_timestamp = Number.parseInt(bv_email["17"]);
                const bv_email_date = new Date(bv_email_timestamp);
                const bv_email_content_html = "";
                const bv_email_is_draft = api.tools.parse_fd_bv_is_draft(bv_email["10"]);
                const bv_attachments = [];
                const bv_from = {
                  address: bv_email["1"]["1"] !== void 0 ? bv_email["1"]["1"] : "",
                  name: bv_email["1"]["2"] !== void 0 ? bv_email["1"]["2"] : ""
                };
                const bv_to = [];
                const bv_cc = [];
                const bv_bcc = [];
                const email = {
                  id: bv_email_id,
                  is_draft: bv_email_is_draft,
                  legacy_email_id: bv_legacy_email_id,
                  thread_id: bv_thread_id,
                  smtp_id: bv_email_smtp_id,
                  subject: bv_email_subject,
                  timestamp: bv_email_timestamp,
                  content_html: bv_email_content_html,
                  date: bv_email_date,
                  from: bv_from,
                  to: bv_to,
                  cc: bv_cc,
                  bcc: bv_bcc,
                  attachments: bv_attachments
                };
                if (api.cache.debug_xhr_fetch) {
                  email["$email_node"] = bv_email;
                  email["$thread_node"] = bv_thread_container;
                }
                res.push(email);
              }
            }
            return res;
          } catch (error) {
            console.warn("Gmail.js encountered an error trying to parse email-data on bv request!", error);
            return null;
          }
        };
        api.tools.parse_bv_embedded_json = function(json) {
          let thread_root = json["0"]["0"];
          if (!thread_root || !Array.isArray(thread_root)) {
            return null;
          }
          try {
            const res = [];
            const bv_threads = thread_root;
            for (let bv_thread_container of bv_threads) {
              const bv_thread_subject = bv_thread_container["4"]["0"];
              const bv_thread_id = bv_thread_container["4"]["3"];
              let bv_emails = bv_thread_container["4"]["4"];
              for (let bv_email of bv_emails) {
                const bv_email_id = bv_email["0"];
                const bv_legacy_email_id = bv_email["55"];
                const bv_email_smtp_id = "";
                const bv_email_subject = bv_thread_subject;
                const bv_email_timestamp = Number.parseInt(bv_email["17"]);
                const bv_email_date = new Date(bv_email_timestamp);
                const bv_email_content_html = "";
                const bv_email_is_draft = api.tools.parse_fd_bv_is_draft(bv_email["10"]);
                const bv_attachments = [];
                const bv_from = {
                  address: bv_email["1"]["1"] !== void 0 ? bv_email["1"]["1"] : "",
                  name: bv_email["1"]["2"] !== void 0 ? bv_email["1"]["2"] : ""
                };
                const bv_to = [];
                const bv_cc = [];
                const bv_bcc = [];
                const email = {
                  id: bv_email_id,
                  is_draft: bv_email_is_draft,
                  legacy_email_id: bv_legacy_email_id,
                  thread_id: bv_thread_id,
                  smtp_id: bv_email_smtp_id,
                  subject: bv_email_subject,
                  timestamp: bv_email_timestamp,
                  content_html: bv_email_content_html,
                  date: bv_email_date,
                  from: bv_from,
                  to: bv_to,
                  cc: bv_cc,
                  bcc: bv_bcc,
                  attachments: bv_attachments
                };
                if (api.cache.debug_xhr_fetch) {
                  email["$email_node"] = bv_email;
                  email["$thread_node"] = bv_thread_container;
                }
                res.push(email);
              }
            }
            return res;
          } catch (error) {
            console.warn("Gmail.js encountered an error trying to parse email-data on bv request!", error);
            return null;
          }
        };
        api.tools.parse_sent_message_html_payload = function(sent_email) {
          let sent_email_content_html = null;
          try {
            const sent_html_containers = sent_email["9"]["2"];
            for (let sent_html_container of sent_html_containers) {
              sent_email_content_html = (sent_email_content_html || "") + sent_html_container["2"];
            }
          } catch (e) {
          }
          return sent_email_content_html;
        };
        api.tools.parse_sent_message_attachments = function(json) {
          let res = [];
          if (Array.isArray(json)) {
            for (let item of json) {
              res.push({
                id: item["5"],
                name: item["2"],
                type: item["1"],
                url: item["6"],
                size: Number.parseInt(item["3"])
              });
            }
          }
          return res;
        };
        api.tools.parse_sent_message_payload = function(json) {
          try {
            let sent_email = json;
            const sent_email_id = sent_email["0"];
            const sent_email_subject = sent_email["7"];
            const sent_email_timestamp = Number.parseInt(sent_email["6"]);
            const sent_email_date = new Date(sent_email_timestamp);
            const sent_email_content_html = api.tools.parse_sent_message_html_payload(sent_email);
            const sent_email_ishtml = sent_email["8"]["6"];
            const sent_attachments = api.tools.parse_sent_message_attachments(sent_email["11"]);
            const sent_from = api.tools.parse_fd_bv_contact(sent_email["1"]);
            const sent_to = api.tools.parse_fd_bv_contacts(sent_email["2"]);
            const sent_cc = api.tools.parse_fd_bv_contacts(sent_email["3"]);
            const sent_bcc = api.tools.parse_fd_bv_contacts(sent_email["4"]);
            const email = {
              1: sent_email_id,
              id: sent_email_id,
              subject: sent_email_subject,
              timestamp: sent_email_timestamp,
              content_html: sent_email_content_html,
              ishtml: sent_email_ishtml,
              date: sent_email_date,
              from: sent_from,
              to: sent_to,
              cc: sent_cc,
              bcc: sent_bcc,
              attachments: sent_attachments,
              email_node: json
            };
            return email;
          } catch (error) {
            console.warn("Gmail.js encountered an error trying to parse sent message!", error);
            return null;
          }
        };
        api.tools.parse_sent_message_payload_new = function(json) {
          try {
            const parse_fd_bv_contact_new = (a) => {
              if (a && a[1]) {
                return { name: a[2] || "", address: a[1] };
              } else {
                return void 0;
              }
            };
            const parse_fd_bv_contacts_new = (a) => {
              if (Array.isArray(a)) {
                return a.map(parse_fd_bv_contact_new).filter((a2) => a2);
              } else {
                return [];
              }
            };
            const parse_sent_message_attachments_new = (json2) => {
              if (Array.isArray(json2)) {
                return json2.map((item) => ({
                  id: item[4],
                  name: item[1],
                  type: item[0],
                  url: item[5],
                  size: Number.parseInt(item[2])
                }));
              } else {
                return [];
              }
            };
            const parse_sent_message_html_payload_new = (sent_email2) => {
              let sent_email_content_html2 = null;
              try {
                const sent_html_containers = sent_email2[8][1];
                for (let sent_html_container of sent_html_containers) {
                  sent_email_content_html2 = (sent_email_content_html2 || "") + sent_html_container[1];
                }
              } catch (err) {
                api.tools.error("Failed to parse html", err);
              }
              return sent_email_content_html2;
            };
            let sent_email = json;
            const sent_email_id = sent_email[0];
            const sent_email_subject = sent_email[7];
            const sent_email_timestamp = sent_email[6];
            const sent_email_date = new Date(sent_email_timestamp);
            const sent_email_content_html = parse_sent_message_html_payload_new(sent_email);
            const sent_email_ishtml = sent_email[8][6];
            const sent_attachments = parse_sent_message_attachments_new(sent_email[11]);
            const sent_from = parse_fd_bv_contact_new(sent_email[1]);
            const sent_to = parse_fd_bv_contacts_new(sent_email[2]);
            const sent_cc = parse_fd_bv_contacts_new(sent_email[3]);
            const sent_bcc = parse_fd_bv_contacts_new(sent_email[4]);
            const email = {
              1: sent_email_id,
              id: sent_email_id,
              subject: sent_email_subject,
              timestamp: sent_email_timestamp,
              content_html: sent_email_content_html,
              ishtml: sent_email_ishtml,
              date: sent_email_date,
              from: sent_from,
              to: sent_to,
              cc: sent_cc,
              bcc: sent_bcc,
              attachments: sent_attachments,
              email_node: json
            };
            return email;
          } catch (error) {
            console.warn("Gmail.js encountered an error trying to parse sent message!", error);
            return null;
          }
        };
        api.tools.parse_request_payload = function(params, events, force) {
          const pathname = api.tools.get_pathname_from_url(params.url_raw);
          if (!force && !pathname) {
            return;
          }
          const isSynch = (pathname || "").endsWith("/i/s");
          const isFetch = (pathname || "").endsWith("/i/fd");
          if (!force && !isFetch && !isSynch) {
            return;
          }
          if (isFetch) {
            events.load_email_data = [null];
          }
          const threads = api.tools.extract_from_graph(params, api.check.data.is_thread);
          const emails = [
            ...api.tools.extract_from_graph(params.body_params, api.check.data.is_email),
            ...api.tools.extract_from_graph(params.body_params, api.check.data.is_email_new)
          ];
          for (let email of emails) {
            for (let key in email) {
              let prop = email[key];
              if (api.check.data.is_smartlabels_array(prop)) {
                let sent_email = api.check.data.is_email_new(email) ? api.tools.parse_sent_message_payload_new(email) : api.tools.parse_sent_message_payload(email);
                if (prop.indexOf("^pfg") !== -1) {
                  events.send_message = [params.url, params.body, sent_email];
                } else if (prop.indexOf("^scheduled") > -1) {
                  events.send_scheduled_message = [params.url, params.body, sent_email];
                }
              }
            }
          }
          try {
            if (Array.isArray(threads) && api.check.data.is_thread(threads[0])) {
              const actionType = api.tools.check_event_type(threads[0]);
              if (actionType) {
                const threadsData = threads.map((thread) => api.tools.get_thread_data(thread));
                const new_thread_ids = threads.map((thread) => api.tools.get_thread_id(thread));
                const new_email_ids = threadsData.map((threadData) => api.tools.get_message_ids(threadData)).reduce((a, b) => a.concat(b), []);
                events[actionType] = [null, params.url, params.body, new_email_ids, new_thread_ids];
              }
            }
          } catch (e) {
            console.error("Error: ", e);
          }
        };
        api.tools.parse_response = function(response) {
          if (api.check.data.is_json_string(response)) {
            try {
              let json = JSON.parse(response);
              return json;
            } catch (err) {
            }
          }
          if (response.startsWith("<!DOCTYPE html") || response.indexOf("display:inline-block") !== -1) {
            return [];
          }
          let parsedResponse = [];
          let originalResponse = response;
          try {
            response = response.replace(/\n/g, " ");
            response = response.substring(response.indexOf("'") + 1, response.length);
            while (response.replace(/\s/g, "").length > 1) {
              let dataLength = response.substring(0, response.indexOf("[")).replace(/\s/g, "");
              if (!dataLength) {
                dataLength = response.length;
              }
              let endIndex = parseInt(dataLength, 10) - 2 + response.indexOf("[");
              let data = response.substring(response.indexOf("["), endIndex);
              let json = JSON.parse(data);
              parsedResponse.push(json);
              response = response.substring(response.indexOf("["), response.length);
              response = response.substring(data.length, response.length);
            }
          } catch (e) {
          }
          return parsedResponse;
        };
        api.tools.parse_attachment_url = function(url) {
          var parts = url.split(":");
          return {
            type: parts[0],
            url: parts[2] + ":" + parts[3]
          };
        };
        var extend = function(target, extension) {
          for (var key in extension) {
            target[key] = extension[key];
          }
        };
        var merge = function(target, mergee) {
          for (var i = 0; i < mergee.length; i++) {
            var value = mergee[i];
            target.push(value);
          }
          return target;
        };
        api.tools.parse_requests = function(params, xhr) {
          params.url_raw = params.url;
          params.url = api.tools.parse_url(params.url);
          if (typeof params.body === "object") {
            params.body_params = params.body;
            params.body_is_object = true;
          } else if (api.check.data.is_json_string(params.body)) {
            params.body_params = JSON.parse(params.body);
          } else if (params.body !== void 0) {
            params.body_params = api.tools.deparam(params.body);
          } else {
            params.body_params = {};
          }
          if (typeof api.tracker.events !== "object" && typeof api.tracker.actions !== "object") {
            api.tracker.events = [];
            api.tracker.actions = [];
          }
          api.tracker.events.unshift(params);
          var events = api.tools.parse_actions(params, xhr);
          if (params.method === "POST" && typeof params.url.act === "string") {
            api.tracker.actions.unshift(params);
          }
          if (api.tracker.events.length > 50) {
            api.tracker.events.pop();
          }
          if (api.tracker.actions.length > 10) {
            api.tracker.actions.pop();
          }
          return events;
        };
        api.tools.patch = function(patchee, patch) {
          patch(patchee);
        };
        api.tools.cache_email_data = function(email_data, data_source) {
          if (email_data === null) {
            return;
          }
          const c = api.cache;
          let isUpdateAuthorized = false;
          if (data_source === "fd_request_payload" || data_source === "fd_embedded_json") {
            isUpdateAuthorized = true;
          }
          for (let email of email_data) {
            if (c.emailIdCache[email.id] === void 0) {
              c.emailIdCache[email.id] = email;
              c.emailLegacyIdCache[email.legacy_email_id] = email;
            } else if (isUpdateAuthorized) {
              c.emailIdCache[email.id] = email;
              c.emailLegacyIdCache[email.legacy_email_id] = email;
            }
            let thread = c.threadCache[email.thread_id];
            if (!thread) {
              thread = {
                thread_id: email.thread_id,
                emails: []
              };
              c.threadCache[email.thread_id] = thread;
            }
            if (thread.emails.filter((i) => i.id === email.id).length === 0) {
              thread.emails.push(email);
            } else if (isUpdateAuthorized) {
              let index = thread.emails.findIndex((i) => i.id === email.id);
              thread.emails[index] = email;
            }
          }
        };
        api.tools.xhr_watcher = function() {
          if (api.tracker.xhr_init) {
            return;
          }
          api.instanceId = Symbol("gmail-js-" + (performance ? performance.now() : Date.now()));
          api.tracker.xhr_init = true;
          const win = api.helper.get_xhr_window();
          api.tools.patch(win.XMLHttpRequest.prototype.open, (orig) => {
            win.XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
              var out = orig.apply(this, arguments);
              this.xhrParams = {
                method: method.toString(),
                url: url.toString()
              };
              Object.defineProperty(this, api.instanceId, {
                value: Object.freeze({
                  method: method.toString(),
                  url: url.toString()
                })
              });
              return out;
            };
          });
          api.tools.patch(win.XMLHttpRequest.prototype.send, (orig) => {
            win.XMLHttpRequest.prototype.send = function(body) {
              var events = false;
              if (this.xhrParams) {
                this.xhrParams.body = body;
                if (typeof this.xhrParams.url !== "string") {
                  if (this[api.instanceId] && this[api.instanceId].url) {
                    this.xhrParams.url = this[api.instanceId].url;
                    delete this.xhrParams.url_raw;
                    delete this.xhrParams.body_params;
                  }
                }
                events = api.tools.parse_requests(this.xhrParams, this);
              }
              if (api.observe.trigger("before", events, this)) {
                if (api.check.is_new_data_layer()) {
                  body = arguments[0] = this.xhrParams.body_is_object ? this.xhrParams.body_params : JSON.stringify(this.xhrParams.body_params);
                } else {
                  body = arguments[0] = this.xhrParams.body_is_object ? this.xhrParams.body_params : $.param(this.xhrParams.body_params, true).replace(/\+/g, "%20");
                }
              }
              if (api.observe.bound(events, "after") || api.check.is_new_data_layer()) {
                var curr_onreadystatechange = this.onreadystatechange;
                var xhr = this;
                this.onreadystatechange = function(progress) {
                  if (this.readyState === this.DONE) {
                    if (progress.target.responseType === "" || progress.target.responseType === "text") {
                      xhr.xhrResponse = api.tools.parse_response(progress.target.responseText);
                    } else {
                      xhr.xhrResponse = progress.target.response;
                    }
                    if (api.check.is_new_data_layer()) {
                      const pathName = api.tools.get_pathname_from_url(xhr.xhrParams.url_raw);
                      if (pathName.endsWith("/i/fd")) {
                        let parsed_emails = api.tools.parse_fd_request_payload(xhr.xhrResponse);
                        if (parsed_emails !== void 0 && parsed_emails !== null) {
                          api.tools.cache_email_data(parsed_emails, "fd_request_payload");
                          events.load_email_data = [parsed_emails];
                        }
                      }
                      if (pathName.endsWith("/i/bv")) {
                        let parsed_emails = api.tools.parse_bv_request_payload(xhr.xhrResponse);
                        if (parsed_emails !== void 0 && parsed_emails !== null) {
                          api.tools.cache_email_data(parsed_emails, "bv_request_payload");
                          events.load_email_data = [parsed_emails];
                        }
                      }
                    }
                    api.observe.trigger("after", events, xhr);
                  }
                  if (curr_onreadystatechange) {
                    curr_onreadystatechange.apply(this, arguments);
                  }
                };
              }
              var out = orig.apply(this, arguments);
              api.observe.trigger("on", events, this);
              return out;
            };
          });
        };
        api.tools.embedded_data_watcher = function() {
          if (api.tracker.embedded_data_init) {
            return;
          }
          api.tracker.embedded_data_init = true;
          var original_GM_setData = window._GM_setData;
          window._GM_setData = function(data) {
            if (data !== void 0 && data.Cl6csf !== void 0 && data.Cl6csf[0] !== void 0 && data.Cl6csf[0][2] !== void 0) {
              let parsed_emails = api.tools.parse_fd_embedded_json(JSON.parse(data.Cl6csf[0][2]));
              api.tools.cache_email_data(parsed_emails, "fd_embedded_json");
            }
            if (data !== void 0 && data.a6jdv !== void 0 && data.a6jdv[0] !== void 0 && data.a6jdv[0][2] !== void 0) {
              let parsed_emails = api.tools.parse_bv_embedded_json(JSON.parse(data.a6jdv[0][2]));
              api.tools.cache_email_data(parsed_emails, "bv_embedded_json");
            }
            if (data !== void 0 && data.sBEv4c !== void 0) {
              for (let item of data.sBEv4c) {
                if (item[0] === "mla") {
                  api.tracker.mla = item;
                }
              }
            }
            original_GM_setData(data);
          };
        };
        api.helper.get_xhr_window = function() {
          if (api.check.is_new_gui()) {
            return top;
          }
          var js_frame = null;
          if (top.document.getElementById("js_frame")) {
            js_frame = top.document.getElementById("js_frame");
          } else if (window_opener) {
            js_frame = window_opener.top.document.getElementById("js_frame");
          }
          if (!js_frame) {
            if (window_opener) {
              js_frame = window_opener.top;
            } else {
              js_frame = top;
            }
          }
          var win;
          if (js_frame.contentDocument) {
            win = js_frame.contentDocument.defaultView;
          } else {
            win = js_frame;
          }
          return win;
        };
        api.observe.http_requests = function() {
          return api.tracker.events;
        };
        api.observe.actions = function() {
          return api.tracker.actions;
        };
        api.observe.bind = function(type, action, callback) {
          if (typeof api.tracker.watchdog !== "object") {
            api.tracker.watchdog = {
              before: {},
              on: {},
              after: {},
              dom: {}
            };
            api.tracker.bound = {};
          }
          if (typeof api.tracker.watchdog[type] !== "object") {
            api.tools.error("api.observe.bind called with invalid type: " + type);
          }
          if (type !== "dom") {
            api.tools.xhr_watcher();
          }
          if (typeof api.tracker.watchdog[type][action] !== "object") {
            api.tracker.watchdog[type][action] = [];
          }
          api.tracker.watchdog[type][action].push(callback);
          api.tracker.bound[action] = typeof api.tracker.bound[action] === "undefined" ? 1 : api.tracker.bound[action] + 1;
          api.tracker.bound[type] = typeof api.tracker.bound[type] === "undefined" ? 1 : api.tracker.bound[type] + 1;
        };
        api.observe.on = function(action, callback, response_callback) {
          if (api.observe.on_dom(action, callback))
            return true;
          api.observe.bind("on", action, callback);
          if (response_callback) {
            api.observe.after(action, callback);
          }
        };
        api.observe.before = function(action, callback) {
          api.observe.bind("before", action, callback);
        };
        api.observe.after = function(action, callback) {
          api.observe.bind("after", action, callback);
        };
        api.observe.bound = function(action, type) {
          if (typeof api.tracker.watchdog !== "object")
            return false;
          if (action) {
            if (typeof action === "object") {
              var match = false;
              $.each(action, function(key, response) {
                if (typeof api.tracker.watchdog[type][key] === "object")
                  match = true;
              });
              return match;
            }
            if (type)
              return typeof api.tracker.watchdog[type][action] === "object";
            return api.tracker.bound[action] > 0;
          } else {
            if (type)
              return api.tracker.bound[type] > 0;
            api.tools.error("api.observe.bound called with invalid args");
          }
        };
        api.observe.off = function(action, type) {
          if (typeof api.tracker.watchdog !== "object")
            return true;
          var types = type ? [type] : ["before", "on", "after", "dom"];
          $.each(types, function(idx, type2) {
            if (typeof api.tracker.watchdog[type2] !== "object")
              return true;
            if (action) {
              if (typeof api.tracker.watchdog[type2][action] === "object") {
                api.tracker.bound[action] -= api.tracker.watchdog[type2][action].length;
                api.tracker.bound[type2] -= api.tracker.watchdog[type2][action].length;
                delete api.tracker.watchdog[type2][action];
              }
            } else {
              $.each(api.tracker.watchdog[type2], function(act, callbacks) {
                if (typeof api.tracker.watchdog[type2][act] === "object") {
                  api.tracker.bound[act] -= api.tracker.watchdog[type2][act].length;
                  api.tracker.bound[type2] -= api.tracker.watchdog[type2][act].length;
                  delete api.tracker.watchdog[type2][act];
                }
              });
            }
          });
        };
        api.observe.trigger = function(type, events, xhr) {
          if (!events)
            return false;
          var fired = false;
          $.each(events, function(action, response) {
            response = $.extend([], response);
            if (type === "after")
              response.push(xhr.xhrResponse);
            response.push(xhr);
            if (api.observe.bound(action, type)) {
              fired = true;
              $.each(api.tracker.watchdog[type][action], function(idx, callback) {
                callback.apply(void 0, response);
              });
            }
          });
          return fired;
        };
        api.observe.trigger_dom = function(observer, element, handler) {
          if (!handler) {
            handler = function(match, callback) {
              callback(match);
            };
          }
          if (!api.tracker.watchdog.dom[observer]) {
            return;
          }
          $.each(api.tracker.watchdog.dom[observer], function(idx, callback) {
            handler(element, callback);
          });
        };
        api.observe.initialize_dom_observers = function() {
          api.tracker.dom_observer_init = true;
          api.tracker.supported_observers = ["view_thread", "view_email", "load_email_menu", "recipient_change", "compose"];
          api.tracker.dom_observers = {
            "view_thread": {
              class: ["Bu", "nH"],
              sub_selector: "div.if,div.iY",
              handler: function(match, callback) {
                match = new api.dom.thread(match);
                callback(match);
              }
            },
            "view_email": {
              class: ["Bu", "nH", ""],
              sub_selector: "div.adn",
              handler: function(match, callback) {
                match = new api.dom.email(match);
                callback(match);
              }
            },
            "load_email_menu": {
              class: "J-N",
              selector: "div[role=menu] div[role=menuitem]:first-child",
              handler: function(match, callback) {
                match = match.closest("div[role=menu]");
                callback(match);
              }
            },
            "recipient_change": {
              class: ["vR", "afV"],
              handler: function(match, callback) {
                if (typeof api.tracker.recipient_matches !== "object") {
                  api.tracker.recipient_matches = [];
                }
                api.tracker.recipient_matches.push(match);
                setTimeout(function() {
                  if (!api.tracker.recipient_matches.length)
                    return;
                  let composeRoot = [];
                  api.tracker.recipient_matches.forEach((match2) => {
                    if (composeRoot.length === 0) {
                      composeRoot = match2.closest("div.M9");
                    }
                  });
                  if (composeRoot.length === 0) {
                    api.tools.error("Can't find composeRoot for " + match);
                  }
                  var compose = new api.dom.compose(composeRoot);
                  var recipients = compose.recipients();
                  callback(compose, recipients, api.tracker.recipient_matches);
                  api.tracker.recipient_matches = [];
                }, 100);
              }
            },
            "compose": {
              class: "An",
              handler: function(match, callback) {
                var originalMatch = match;
                match = match.closest("div.M9");
                if (!match.length)
                  return;
                match = new api.dom.compose(match);
                if (!match.is_inline()) {
                  var composeWindow = originalMatch.closest("div.AD");
                  composeWindow.find(".Ha").mouseup(function() {
                    if (api.tracker.composeCancelledCallback) {
                      api.tracker.composeCancelledCallback(match);
                    }
                    return true;
                  });
                }
                callback(match, match.type());
              }
            }
          };
          if (api.tracker.custom_supported_observers) {
            $.merge(api.tracker.supported_observers, api.tracker.custom_supported_observers);
            $.extend(true, api.tracker.dom_observers, api.tracker.custom_dom_observers);
          }
          api.tracker.dom_observer_map = {};
          $.each(api.tracker.dom_observers, function(act, config) {
            if (!$.isArray(config.class))
              config.class = [config.class];
            $.each(config.class, function(idx, className) {
              if (!api.tracker.dom_observer_map[className]) {
                api.tracker.dom_observer_map[className] = [];
              }
              api.tracker.dom_observer_map[className].push(act);
            });
          });
        };
        api.observe.register = function(action, args) {
          if (api.tracker.dom_observer_init) {
            api.tools.error("Error: Please register all custom DOM observers before binding handlers using gmail.observe.on etc");
          }
          if (!api.tracker.custom_supported_observers) {
            api.tracker.custom_supported_observers = [];
            api.tracker.custom_dom_observers = {};
          }
          var config = {};
          if (typeof args === "object" && !$.isArray(args)) {
            $.each(["class", "selector", "sub_selector", "handler"], function(idx, arg) {
              if (args[arg]) {
                config[arg] = args[arg];
              }
            });
          } else {
            config["class"] = args;
          }
          api.tracker.custom_supported_observers.push(action);
          api.tracker.custom_dom_observers[action] = config;
        };
        var getTarget = function(e) {
          if (e.path) {
            return e.path[0];
          } else {
            return e.target;
          }
        };
        var preventGmailJacking = function() {
          if (!api.tracker.jackPreventionInstalled) {
            window.addEventListener("click", (e) => {
              const target = getTarget(e);
              if (target && target !== document.body) {
                const gmailJsButton = target.querySelector(":scope > .gmailjs");
                if (gmailJsButton) {
                  gmailJsButton.click();
                  e.preventDefault();
                }
              }
            });
            api.tracker.jackPreventionInstalled = true;
          }
        };
        api.observe.on_dom = function(action, callback) {
          if (!api.tracker.dom_observer_init) {
            api.observe.initialize_dom_observers();
          }
          if ($.inArray(action, api.tracker.supported_observers) > -1) {
            if (!api.tracker.observing_dom) {
              api.tracker.observing_dom = true;
              $(window.document).on("DOMNodeInserted", function(e) {
                api.tools.insertion_observer(e.target, api.tracker.dom_observers, api.tracker.dom_observer_map);
              });
              var mutationObserver = new MutationObserver(function(mutations) {
                for (var i = 0; i < mutations.length; i++) {
                  var mutation = mutations[i];
                  var removedNodes = mutation.removedNodes;
                  for (var j = 0; j < removedNodes.length; j++) {
                    var removedNode = removedNodes[j];
                    if (removedNode.className === "agh" && removedNode.querySelector("div[data-hovercard-id]")) {
                      let observer = api.tracker.dom_observer_map["afV"];
                      let handler = api.tracker.dom_observers.recipient_change.handler;
                      api.observe.trigger_dom(observer, $(mutation.target), handler);
                    } else if (removedNode.className === "vR") {
                      let observer = api.tracker.dom_observer_map["vR"];
                      let handler = api.tracker.dom_observers.recipient_change.handler;
                      api.observe.trigger_dom(observer, $(mutation.target), handler);
                    }
                  }
                }
              });
              mutationObserver.observe(document.body, { subtree: true, childList: true });
            }
            api.observe.bind("dom", action, callback);
            return true;
          } else if (action === "compose_cancelled") {
            api.tracker.composeCancelledCallback = callback;
          } else if (action === "load") {
            if (api.dom.inbox_content().length) {
              preventGmailJacking();
              return callback();
            }
            var load_count = 0;
            var delay = 200;
            var attempts = 50;
            var timer = setInterval(function() {
              var test = api.dom.inbox_content().length;
              if (test > 0) {
                clearInterval(timer);
                preventGmailJacking();
                return callback();
              } else if (++load_count > attempts) {
                clearInterval(timer);
                setTimeout(callback, 5e3);
              }
            }, delay);
            return true;
          }
        };
        api.tools.insertion_observer = function(target, dom_observers, dom_observer_map, sub) {
          if (!dom_observer_map)
            return;
          var cn = target.className || "";
          var classes = cn.trim ? cn.trim().split(/\s+/) : [];
          if (!classes.length)
            classes.push("");
          $.each(classes, function(idx, className) {
            var observers = dom_observer_map[className];
            if (!observers) {
              return;
            }
            for (var observer of observers) {
              if (observer && api.tracker.watchdog && api.tracker.watchdog.dom[observer]) {
                var element = $(target);
                var config = dom_observers[observer];
                if (config.selector && !element.is(config.selector)) {
                  return;
                }
                if (config.sub_selector) {
                  element = element.find(config.sub_selector);
                }
                if (element.length) {
                  var handler = config.handler ? config.handler : function(match, callback) {
                    callback(match);
                  };
                  api.observe.trigger_dom(observer, element, handler);
                }
              }
            }
          });
        };
        api.tools.make_request = function(_link, method, disable_cache) {
          var link = decodeURIComponent(_link.replace(/%23/g, "#-#-#"));
          method = method || "GET";
          link = encodeURI(link).replace(/#-#-#/gi, "%23");
          var config = { type: method, url: link, async: false, dataType: "text" };
          if (disable_cache) {
            config.cache = false;
          }
          var request = $.ajax(config);
          return request.responseText;
        };
        api.tools.make_request_async = function(_link, method, callback, error_callback, disable_cache) {
          var link = decodeURIComponent(_link.replace(/%23/g, "#-#-#"));
          method = method || "GET";
          link = encodeURI(link).replace(/#-#-#/gi, "%23");
          var config = { type: method, url: link, async: true, dataType: "text" };
          if (disable_cache) {
            config.cache = false;
          }
          $.ajax(config).done(function(data, textStatus, jqxhr) {
            callback(jqxhr.responseText);
          }).fail(function(jqxhr, textStatus, errorThrown) {
            console.error("Request Failed", errorThrown);
            if (typeof error_callback === "function") {
              error_callback(jqxhr, textStatus, errorThrown);
            }
          });
        };
        api.tools.make_request_download_promise = function(url, preferBinary) {
          const timeStamp = Date.now();
          url += "&cacheCounter=" + timeStamp;
          let responseType = "text";
          if (preferBinary) {
            responseType = "arraybuffer";
          }
          return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = responseType;
            request.onreadystatechange = () => {
              if (request.readyState !== XMLHttpRequest.DONE) {
                return;
              }
              if (request.status >= 200 && request.status <= 302) {
                const result = request.response;
                if (result) {
                  if (preferBinary) {
                    const byteArray = new Uint8Array(result);
                    resolve(byteArray);
                  } else {
                    resolve(result);
                  }
                }
              }
            };
            request.onerror = (ev) => {
              reject(ev);
            };
            request.send();
          });
        };
        api.tools.parse_view_data = function(view_data) {
          var parsed = [];
          var data = [];
          for (var j = 0; j < view_data.length; j++) {
            if (view_data[j][0] === "tb") {
              for (var k = 0; k < view_data[j][2].length; k++) {
                data.push(view_data[j][2][k]);
              }
            }
          }
          for (var i = 0; i < data.length; i++) {
            var x = data[i];
            parsed.push({
              id: x[0],
              title: x[9],
              excerpt: x[10],
              time: x[15],
              sender: x[28],
              attachment: x[13],
              labels: x[5]
            });
          }
          return parsed;
        };
        api.helper.get.is_delegated_inbox = function() {
          return $(".gb_Da").length === 1;
        };
        api.helper.get.visible_emails_pre = function(customInboxQuery) {
          var page = api.get.current_page();
          var url = window.location.origin + window.location.pathname + "?ui=2&ik=" + api.tracker.ik + "&rid=" + api.tracker.rid + "&view=tl&num=120&rt=1";
          var start = $(".aqK:visible .Dj").find("span:first").text().replace(",", "").replace(".", "").split("\u2013")[0];
          if (start) {
            start = parseInt(start - 1);
            url += "&start=" + start + "&sstart=" + start;
          } else {
            url += "&start=0";
          }
          var cat_label = "";
          if (page.indexOf("label/") === 0) {
            url += "&cat=" + page.split("/")[1] + "&search=cat";
          } else if (page.indexOf("category/") === 0) {
            if (page.indexOf("forums") !== -1) {
              cat_label = "group";
            } else if (page.indexOf("updates") !== -1) {
              cat_label = "notification";
            } else if (page.indexOf("promotion") !== -1) {
              cat_label = "promo";
            } else if (page.indexOf("social") !== -1) {
              cat_label = "social";
            }
            url += "&cat=^smartlabel_" + cat_label + "&search=category";
          } else if (page.indexOf("search/") === 0) {
            var at = $("input[name=at]").val();
            url += "&qs=true&q=" + page.split("/")[1] + "&at=" + at + "&search=query";
          } else if (page === "inbox") {
            if ($("div[aria-label='Social']").attr("aria-selected") === "true") {
              cat_label = "social";
              url += "&cat=^smartlabel_" + cat_label + "&search=category";
            } else if ($("div[aria-label='Promotions']").attr("aria-selected") === "true") {
              cat_label = "promo";
              url += "&cat=^smartlabel_" + cat_label + "&search=category";
            } else if ($("div[aria-label='Updates']").attr("aria-selected") === "true") {
              cat_label = "notification";
              url += "&cat=^smartlabel_" + cat_label + "&search=category";
            } else if ($("div[aria-label='Forums']").attr("aria-selected") === "true") {
              cat_label = "group";
              url += "&cat=^smartlabel_" + cat_label + "&search=category";
            } else {
              if (customInboxQuery) {
                url += "&search=" + customInboxQuery;
              } else if (api.check.is_google_apps_user()) {
                url += "&search=inbox";
              } else {
                url += "&search=mbox";
              }
            }
          } else {
            url += "&search=" + page;
          }
          return url;
        };
        api.helper.get.visible_emails_post = function(get_data) {
          var emails = [];
          if (!get_data) {
            return emails;
          }
          var data = get_data.substring(get_data.indexOf("["), get_data.length);
          var json = JSON.parse(data);
          api.tracker.view_data = json;
          for (var i in api.tracker.view_data) {
            if (typeof api.tracker.view_data[i] === "function") {
              continue;
            }
            var cdata = api.tools.parse_view_data(api.tracker.view_data[i]);
            if (cdata.length > 0) {
              merge(emails, cdata);
            }
          }
          return emails;
        };
        api.get.visible_emails = function(customInboxQuery) {
          var url = api.helper.get.visible_emails_pre(customInboxQuery);
          var get_data = api.tools.make_request(url);
          var emails = api.helper.get.visible_emails_post(get_data);
          return emails;
        };
        api.get.visible_emails_async = function(callback, customInboxQuery) {
          var url = api.helper.get.visible_emails_pre(customInboxQuery);
          api.tools.make_request_async(url, "GET", function(get_data) {
            var emails = api.helper.get.visible_emails_post(get_data);
            callback(emails);
          });
        };
        api.get.selected_emails_data = function(customInboxQuery) {
          var selected_emails = [];
          if (!api.check.is_inside_email()) {
            if ($("[gh='tl'] div[role='checkbox'][aria-checked='true']").length) {
              var email = null;
              var emails = api.get.visible_emails(customInboxQuery);
              $("[gh='tl'] div[role='checkbox']").each(function(index) {
                if ($(this).attr("aria-checked") === "true") {
                  email = api.get.email_data(emails[index].id);
                  selected_emails.push(email);
                }
              });
            }
          } else {
            selected_emails.push(api.get.email_data());
          }
          return selected_emails;
        };
        api.get.current_page = function(hash) {
          hash = hash || window.location.hash;
          var hashPart = hash.split("#").pop().split("?").shift() || "inbox";
          if (hashPart.match(/\/[0-9a-zA-Z]{16,}$/gi)) {
            return "email";
          }
          var isTwopart = hashPart.indexOf("search/") === 0 || hashPart.indexOf("category/") === 0 || hashPart.indexOf("label/") === 0;
          var result = null;
          if (!isTwopart) {
            result = hashPart.split("/").shift();
            return result;
          } else {
            var parts = hashPart.split("/");
            result = parts[0] + "/" + parts[1];
            return result;
          }
        };
        api.tools.infobox = function(message, time, html) {
          var top2 = $(".b8.UC");
          if (top2.length > 0) {
            top2.stop(false, true);
            var info = top2.find(".vh");
            if (!html) {
              info.text(message);
            } else {
              info.html(message);
            }
            if (typeof time !== "undefined") {
              var initialInfoboxStyle = top2.attr("style");
              top2.removeAttr("style").fadeTo(time, 0, function() {
                $(this).attr("style", initialInfoboxStyle);
              });
            } else {
              top2.removeAttr("style");
            }
          }
        };
        api.tools.rerender = function(callback) {
          var url = window.location.href;
          var hash = window.location.hash;
          var tempUrl;
          if (hash.indexOf("/") !== -1) {
            tempUrl = url.replace(/#.*?\//, "#/");
          } else {
            tempUrl = url.replace(/#.*/, "#");
          }
          window.location.replace(tempUrl);
          setTimeout(function() {
            window.location.replace(url);
            window.history.back();
            if (callback)
              callback();
          }, 0);
        };
        api.tools.get_reply_to = function(ms13) {
          var reply_to = ms13 ? ms13[4] : [];
          if (reply_to.length !== 0) {
            return api.tools.extract_email_address(reply_to[0]);
          }
          return null;
        };
        api.tools.parse_attachment_data = function(x) {
          if (!x[7] || !x[7][0]) {
            return null;
          }
          var baseUrl = "";
          if (typeof window !== "undefined") {
            baseUrl = window.location.origin + window.location.pathname;
          }
          var ad = x[7][0];
          api.tracker.attachment_data = ad;
          var attachments = [];
          for (var i = 0; i < ad.length; i++) {
            var a = ad[i];
            attachments.push({
              attachment_id: a[0],
              name: a[1],
              type: a[2],
              size: a[3],
              url: baseUrl + a[9]
            });
          }
          return attachments;
        };
        api.tools.parse_email_data = function(email_data) {
          var data = {};
          for (var i in email_data) {
            var x = email_data[i];
            if (x[0] === "cs") {
              data.thread_id = x[1];
              data.first_email = x[8][0];
              data.last_email = x[2];
              data.total_emails = x[3];
              data.total_threads = x[8];
              data.people_involved = x[15];
              data.subject = x[23];
            }
            if (x[0] === "ms") {
              if (data.threads === void 0) {
                data.threads = {};
              }
              data.threads[x[1]] = {};
              data.threads[x[1]].is_deleted = x[9] && x[9].indexOf("^k") > -1;
              data.threads[x[1]].reply_to_id = x[2];
              data.threads[x[1]].from = x[5];
              data.threads[x[1]].from_email = x[6];
              data.threads[x[1]].timestamp = x[7];
              data.threads[x[1]].datetime = x[24];
              data.threads[x[1]].attachments = x[21].split(",");
              data.threads[x[1]].attachments_details = x[13] ? api.tools.parse_attachment_data(x[13]) : null;
              data.threads[x[1]].subject = x[12];
              data.threads[x[1]].content_html = x[13] ? x[13][6] : x[8];
              data.threads[x[1]].to = x[13] ? x[13][1] : x[37] !== void 0 ? x[37][1] : [];
              data.threads[x[1]].cc = x[13] ? x[13][2] : [];
              data.threads[x[1]].bcc = x[13] ? x[13][3] : [];
              data.threads[x[1]].reply_to = api.tools.get_reply_to(x[13]);
              data.threads[x[1]].labels = x[9];
              try {
                data.threads[x[1]].content_plain = x[13] ? $(x[13][6]).text() : x[8];
              } catch (e) {
                data.threads[x[1]].content_plain = x[13] ? x[13][6] : x[8];
              }
            }
          }
          return data;
        };
        api.helper.get.email_data_pre = function(thread_id) {
          oldGmailApiDeprecated("Migrate code to use gmail.new.get.email_data() to fix this problem.");
          if (api.check.is_inside_email() && thread_id === void 0) {
            thread_id = api.get.thread_id();
          }
          var url = null;
          if (thread_id !== void 0) {
            url = window.location.origin + window.location.pathname + "?ui=2&ik=" + api.tracker.ik + "&rid=" + api.tracker.rid + "&view=cv&th=" + thread_id + "&msgs=&mb=0&rt=1&search=inbox";
          }
          return url;
        };
        api.helper.get.email_data_post = function(get_data) {
          if (!get_data) {
            return {};
          }
          var data = get_data.substring(get_data.indexOf("["), get_data.length);
          var json = JSON.parse(data);
          api.tracker.email_data = json[0];
          return api.tools.parse_email_data(api.tracker.email_data);
        };
        api.get.email_data = function(thread_id) {
          var url = api.helper.get.email_data_pre(thread_id);
          if (url !== null) {
            var get_data = api.tools.make_request(url);
            var email_data = api.helper.get.email_data_post(get_data);
            return email_data;
          }
          return {};
        };
        api.get.email_data_async = function(email_id, callback) {
          var url = api.helper.get.email_data_pre(email_id);
          if (url !== null) {
            api.tools.make_request_async(url, "GET", function(get_data) {
              var email_data = api.helper.get.email_data_post(get_data);
              callback(email_data);
            });
          } else {
            callback({});
          }
        };
        api.helper.get.legacy_email_id = function(identifier) {
          if (!identifier) {
            return null;
          } else if (api.check.data.is_legacy_email_id(identifier)) {
            return identifier;
          } else if (identifier.legacy_email_id) {
            return identifier.legacy_email_id;
          } else if (api.check.data.is_email_id(identifier)) {
            console.warn("GmailJS: Warning! Using new-style ID in method expecting legacy-style IDs! Attempting to resolve via cache, but there's no guarantee this will work!");
            const emailData = api.cache.emailIdCache[identifier];
            return emailData && emailData.legacy_email_id;
          }
          if (identifier.$el && identifier.$el[0]) {
            identifier = identifier.$el[0];
          }
          if (identifier.dataset && identifier.dataset.legacyMessageId) {
            return identifier.dataset.legacyMessageId;
          }
          return null;
        };
        api.helper.get.new_email_id = function(identifier) {
          if (!identifier) {
            return null;
          } else if (api.check.data.is_email_id(identifier)) {
            return identifier;
          } else if (identifier.id && !identifier.$el) {
            return identifier.id;
          } else if (api.check.data.is_legacy_email_id(identifier)) {
            console.warn("GmailJS: Warning! Using legacy-style ID in method expecting new-style IDs! Attempting to resolve via cache, but there's no guarantee this will work!");
            const emailData = api.cache.emailLegacyIdCache[identifier];
            return emailData && emailData.id;
          }
          if (identifier.$el && identifier.$el[0]) {
            identifier = identifier.$el[0];
          }
          if (identifier.dataset && identifier.dataset.messageId) {
            let id = identifier.dataset.messageId;
            if (id.indexOf("#") === 0) {
              id = id.substring(1);
            }
            return id;
          }
          return null;
        };
        api.helper.get.thread_id = function(identifier) {
          if (!identifier) {
            return null;
          } else if (api.check.data.is_thread_id(identifier)) {
            return identifier;
          } else if (identifier.thread_id) {
            return identifier.thread_id;
          } else if (api.check.data.is_email_id(identifier)) {
            console.warn("GmailJS: Warning! Using email-ID in method expecting thread-ID! Attempting to resolve via cache, but there's no guarantee this will work!");
            const emailData = api.cache.emailIdCache[identifier];
            return emailData && emailData.thread_id;
          } else if (api.check.data.is_legacy_email_id(identifier)) {
            console.warn("GmailJS: Warning! Using legacy-style ID in method expecting thread-ID! Attempting to resolve via cache, but there's no guarantee this will work!");
            const emailData = api.cache.emailLegacyIdCache[identifier];
            return emailData && emailData.thread_id;
          }
          if (identifier.$el && identifier.$el[0]) {
            identifier = identifier.$el[0];
          }
          if (identifier.dataset && identifier.dataset.threadPermId) {
            let id = identifier.dataset.threadPermId;
            if (id.indexOf("#") === 0) {
              id = id.substring(1);
            }
            return id;
          }
          if (identifier.dataset && identifier.dataset.messageId) {
            let id = identifier.dataset.messageId;
            if (id.indexOf("#") === 0) {
              id = id.substring(1);
            }
            console.warn("GmailJS: Warning! Using DomEmail instance to lookup thread-ID. Attempting to resolve via cache, but there's no guarantee this will work!");
            const emailData = api.cache.emailIdCache[id];
            return emailData && emailData.thread_id;
          }
          return null;
        };
        api.helper.clean_thread_id = function(thread_id) {
          if (thread_id.startsWith("#")) {
            thread_id = thread_id.substring(1);
          }
          return thread_id;
        };
        api.helper.get.email_source_pre = function(identifier) {
          if (!identifier && api.check.is_inside_email()) {
            identifier = api.get.email_id();
          }
          if (api.check.data.is_legacy_email_id(identifier)) {
            return window.location.origin + window.location.pathname + "?view=att&th=" + identifier + "&attid=0&disp=comp&safe=1&zw";
          }
          const email_id = api.helper.get.new_email_id(identifier);
          if (email_id) {
            return window.location.origin + window.location.pathname + "?view=att&permmsgid=" + email_id + "&attid=0&disp=comp&safe=1&zw";
          } else {
            return null;
          }
        };
        api.get.email_source = function(identifier) {
          console.warn("Gmail.js: This function has been deprecated and will be removed in an upcoming release! Please migrate to email_source_async or email_source_promise!");
          var url = api.helper.get.email_source_pre(identifier);
          if (url !== null) {
            return api.tools.make_request(url, "GET", true);
          }
          return "";
        };
        api.get.email_source_async = function(identifier, callback, error_callback, preferBinary) {
          api.get.email_source_promise(identifier, preferBinary).then(callback).catch(error_callback);
        };
        api.get.email_source_promise = function(identifier, preferBinary) {
          const url = api.helper.get.email_source_pre(identifier);
          if (url !== null) {
            return api.tools.make_request_download_promise(url, preferBinary);
          } else {
            return new Promise((resolve, reject) => {
              reject("Unable to resolve URL for email source!");
            });
          }
        };
        api.get.displayed_email_data = function() {
          var email_data = api.get.email_data();
          if (api.check.is_conversation_view()) {
            return get_displayed_email_data_for_thread(email_data);
          } else {
            return get_displayed_email_data_for_single_email(email_data);
          }
        };
        api.get.displayed_email_data_async = function(callback) {
          api.get.email_data_async(void 0, function(email_data) {
            if (api.check.is_conversation_view()) {
              callback(get_displayed_email_data_for_thread(email_data));
            } else {
              callback(get_displayed_email_data_for_single_email(email_data));
            }
          });
        };
        var get_displayed_email_data_for_thread = function(email_data) {
          var displayed_email_data = email_data;
          var threads = displayed_email_data.threads;
          var total_threads = displayed_email_data.total_threads;
          var hash = window.location.hash.split("#")[1] || "";
          var is_in_trash = hash.indexOf("trash") === 0;
          for (var id in threads) {
            var email = threads[id];
            var keep_email = is_in_trash ? email.is_deleted : !email.is_deleted;
            if (!keep_email) {
              delete threads[id];
              total_threads.splice(total_threads.indexOf(id), 1);
              displayed_email_data.total_emails--;
            }
          }
          return displayed_email_data;
        };
        var get_displayed_email_data_for_single_email = function(email_data) {
          var displayed_email_data = {};
          for (var id in email_data.threads) {
            var displayed_email_element = document.querySelector("div[data-legacy-message-id='" + id + "']");
            if (displayed_email_element) {
              var email = email_data.threads[id];
              displayed_email_data.first_email = id;
              displayed_email_data.last_email = id;
              displayed_email_data.subject = email_data.subject;
              displayed_email_data.threads = {};
              displayed_email_data.threads[id] = email;
              displayed_email_data.total_emails = 1;
              displayed_email_data.total_threads = [id];
              displayed_email_data.people_involved = [];
              displayed_email_data.people_involved.push(
                [email.from, email.from_email]
              );
              email.to.forEach(function(recipient) {
                var address = api.tools.extract_email_address(recipient);
                var name = api.tools.extract_name(recipient.replace(address, "")) || "";
                displayed_email_data.people_involved.push(
                  [name, address]
                );
              });
              break;
            }
          }
          return displayed_email_data;
        };
        api.check.is_conversation_view = function() {
          if (api.check.is_new_data_layer()) {
            var conversation_flag = void 0;
            conversation_flag = api.tracker.globals[24].indexOf(7164);
            return conversation_flag !== -1;
          } else {
            var flag_name = "bx_vmb";
            var flag_value = void 0;
            var array_with_flag = api.tracker.globals[17][4][1];
            for (var i = 0; i < array_with_flag.length; i++) {
              var current = array_with_flag[i];
              if (current[0] === flag_name) {
                flag_value = current[1];
                break;
              }
            }
            return flag_value === "0" || flag_value === void 0;
          }
        };
        api.tools.extract_email_address = function(str) {
          var regex = /[\+a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+/gi;
          var matches = str ? str.match(regex) : void 0;
          return matches ? matches[0] : void 0;
        };
        api.tools.extract_name = function(str) {
          var regex = /[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF"._\s-]+/gi;
          var matches = str ? str.match(regex) : void 0;
          return matches && matches[0] ? matches[0].trim() : void 0;
        };
        api.tools.i18n = function(label) {
          var locale = api.get.localization();
          var dictionary;
          switch (locale) {
            case "fr":
              dictionary = {
                "inbox": "Bo\xEEte de r\xE9ception",
                "drafts": "Brouillons",
                "spam": "Spam",
                "forums": "Forums",
                "updates": "Mises \xE0 jour",
                "promotions": "Promotions",
                "social_updates": "R\xE9seaux sociaux"
              };
              break;
            case "no":
              dictionary = {
                "inbox": "Innboks",
                "drafts": "Utkast",
                "spam": "S\xF8ppelpost",
                "forums": "Forumer",
                "updates": "Oppdateringer",
                "promotions": "Reklame",
                "social_updates": "Sosialt"
              };
              break;
            case "nl":
              dictionary = {
                "inbox": "Postvak IN",
                "drafts": "Concepten",
                "spam": "Spam",
                "forums": "Forums",
                "updates": "Updates",
                "promotions": "Reclame",
                "social_updates": "Sociaal"
              };
              break;
            case "it":
              dictionary = {
                "inbox": "Posta in arrivo",
                "drafts": "Bozza",
                "spam": "Spam",
                "forums": "Forum",
                "updates": "Aggiornamenti",
                "promotions": "Promozioni",
                "social_updates": "Social"
              };
              break;
            case "en":
            default:
              dictionary = {
                "inbox": "Inbox",
                "drafts": "Drafts",
                "spam": "Spam",
                "forums": "Forums",
                "updates": "Updates",
                "promotions": "Promotions",
                "social_updates": "Social Updates"
              };
              break;
          }
          return dictionary[label];
        };
        var create_generic_toolbar_button = function(content_html, onClickFunction, basicStyle, defaultStyle, styleClass, selector) {
          var container = $(document.createElement("div"));
          container.attr("class", "G-Ni J-J5-Ji");
          var button = $(document.createElement("div"));
          var buttonClasses = "T-I J-J5-Ji gmailjs ";
          if (styleClass !== void 0 && styleClass !== null && styleClass !== "") {
            buttonClasses += basicStyle + styleClass;
          } else {
            buttonClasses += basicStyle + defaultStyle;
          }
          button.attr("class", buttonClasses);
          button.html(content_html);
          button.click(onClickFunction);
          var content = $(document.createElement("div"));
          content.attr("class", "asa");
          container.html(button);
          selector.append(container);
          return container;
        };
        api.tools.add_toolbar_button = function(content_html, onClickFunction, styleClass) {
          var basicLeftStyle = "lS ";
          var defaultLeftStyle = "T-I-ax7 ar7";
          return create_generic_toolbar_button(content_html, onClickFunction, basicLeftStyle, defaultLeftStyle, styleClass, api.dom.toolbar());
        };
        api.tools.add_right_toolbar_button = function(content_html, onClickFunction, styleClass) {
          var basicRightStyle = "ash ";
          var defaultRightStyle = "T-I-ax7 L3";
          return create_generic_toolbar_button(content_html, onClickFunction, basicRightStyle, defaultRightStyle, styleClass, api.dom.right_toolbar());
        };
        api.tools.add_compose_button = function(composeWindow, content_html, onClickFunction, styleClass) {
          var div = $(document.createElement("div"));
          div.attr("class", "gU Up");
          div.attr("style", "cursor: pointer !important; transform: translateY(1px);");
          var button = $(document.createElement("div"));
          var buttonClasses = "T-I J-J5-Ji aoO T-I-atl L3 gmailjs gmailjscomposebutton ";
          if (styleClass !== void 0) {
            buttonClasses += styleClass;
          }
          button.attr("class", buttonClasses);
          button.attr("style", "margin-left: 8px; max-width: 500px;");
          button.html(content_html);
          button.click(onClickFunction);
          div.append(button);
          var sendButton = composeWindow.find(".gU.Up").last();
          div.insertAfter(sendButton);
          return button;
        };
        api.tools.add_more_send_option = function(composeWindow, buttonText, onClickFunction, styleClass, imgClass) {
          var div = $(document.createElement("div"));
          div.attr("class", "J-N yr");
          div.attr("style", "user-select: none;");
          div.attr("role", "menuitem");
          var button = $(document.createElement("div"));
          var buttonClasses = "J-N-Jz ";
          if (styleClass !== void 0) {
            buttonClasses += styleClass;
          }
          button.attr("class", buttonClasses);
          button.attr("style", "user-select: none;");
          var img = $(document.createElement("img"));
          var imgClassFull = "J-N-JX";
          if (imgClass !== void 0) {
            imgClassFull = imgClass + " " + imgClassFull;
          }
          img.attr("class", imgClassFull);
          img.attr("style", "user-select: none;");
          img.attr("role", "menuitem");
          img.attr("src", "images/cleardot.gif");
          button.append(img);
          button.append(buttonText);
          button.click(onClickFunction);
          div.append(button);
          var scheduledSend = composeWindow.find(".J-N.yr").last();
          div.insertAfter(scheduledSend);
          return button;
        };
        api.tools.add_attachment_button = function(attachment, contentHtml, customCssClass, tooltip, onClickFunction) {
          var button = $(document.createElement("div"));
          button.attr("class", "T-I J-J5-Ji aQv T-I-ax7 L3");
          button.attr("style", "user-select: none;");
          button.attr("aria-label", tooltip);
          button.attr("data-tooltip", tooltip);
          var hoverClass = "T-I-JW";
          button.mouseover(function() {
            this.classList.add(hoverClass);
          });
          button.mouseout(function() {
            this.classList.remove(hoverClass);
          });
          var div = $(document.createElement("div"));
          var divClass = "wtScjd J-J5-Ji aYr";
          if (customCssClass) {
            divClass += " " + customCssClass;
          }
          div.attr("class", divClass);
          if (contentHtml) {
            div.html(contentHtml);
          }
          button.append(div);
          button.click(onClickFunction);
          attachment.$el.find("div.aQw").append(button);
          return button;
        };
        api.tools.remove_modal_window = function() {
          $("#gmailJsModalBackground").remove();
          $("#gmailJsModalWindow").remove();
        };
        api.tools.add_modal_window = function(title, content_html, onClickOk, onClickCancel, onClickClose, okText, cancelText) {
          onClickClose = onClickClose || api.tools.remove_modal_window;
          onClickCancel = onClickCancel || api.tools.remove_modal_window;
          okText = okText || "OK";
          cancelText = cancelText || "Cancel";
          var background = $(document.createElement("div"));
          background.attr("id", "gmailJsModalBackground");
          background.attr("class", "Kj-JD-Jh");
          background.attr("aria-hidden", "true");
          background.attr("style", "opacity:0.75;width:100%;height:100%;");
          var container = $(document.createElement("div"));
          container.attr("id", "gmailJsModalWindow");
          container.attr("class", "Kj-JD");
          container.attr("tabindex", "0");
          container.attr("role", "alertdialog");
          container.attr("aria-labelledby", "gmailJsModalWindowTitle");
          container.attr("style", "left:50%;top:50%;opacity:1;");
          var header = $(document.createElement("div"));
          header.attr("class", "Kj-JD-K7 Kj-JD-K7-GIHV4");
          var heading = $(document.createElement("span"));
          heading.attr("id", "gmailJsModalWindowTitle");
          heading.attr("class", "Kj-JD-K7-K0");
          heading.attr("role", "heading");
          heading.html(title);
          var closeButton = $(document.createElement("span"));
          closeButton.attr("id", "gmailJsModalWindowClose");
          closeButton.attr("class", "Kj-JD-K7-Jq");
          closeButton.attr("role", "button");
          closeButton.attr("tabindex", "0");
          closeButton.attr("aria-label", "Close");
          closeButton.click(onClickClose);
          header.append(heading);
          header.append(closeButton);
          var contents = $(document.createElement("div"));
          contents.attr("id", "gmailJsModalWindowContent");
          contents.attr("class", "Kj-JD-Jz");
          contents.html(content_html);
          var controls = $(document.createElement("div"));
          controls.attr("class", "Kj-JD-Jl");
          var okButton = $(document.createElement("button"));
          okButton.attr("id", "gmailJsModalWindowOk");
          okButton.attr("class", "J-at1-auR J-at1-atl");
          okButton.attr("name", "ok");
          okButton.text(okText);
          okButton.click(onClickOk);
          var cancelButton = $(document.createElement("button"));
          cancelButton.attr("id", "gmailJsModalWindowCancel");
          cancelButton.attr("name", "cancel");
          cancelButton.text(cancelText);
          cancelButton.click(onClickCancel);
          controls.append(okButton);
          controls.append(cancelButton);
          container.append(header);
          container.append(contents);
          container.append(controls);
          $(document.body).append(background);
          $(document.body).append(container);
          var center = function() {
            container.css({
              top: ($(window).height() - container.outerHeight()) / 2,
              left: ($(window).width() - container.outerWidth()) / 2
            });
          };
          center();
          container.on("DOMSubtreeModified", center);
          $(window).resize(center);
        };
        api.tools.toggle_minimize = function() {
          var minimizeButton = $("[alt='Minimize']")[0];
          if (minimizeButton) {
            minimizeButton.click();
            return true;
          }
          return false;
        };
        api.chat.is_hangouts = function() {
          if (api.tracker.hangouts !== void 0) {
            return api.tracker.hangouts;
          }
          var dwClasses = $(".dw");
          if (dwClasses.length > 1) {
            throw "Figuring out is hangouts - more than one dw classes found";
          }
          if (dwClasses.length === 0) {
            throw "Figuring out is hangouts - no dw classes found";
          }
          var dw = dwClasses[0];
          var chatWindows = $(".nH.aJl.nn", dw);
          if (chatWindows.length > 0) {
            api.tracker.hangouts = true;
            return true;
          }
          chatWindows = $(".nH.nn", dw);
          if (chatWindows.length > 2) {
            api.tracker.hangouts = false;
            return false;
          }
          return void 0;
        };
        api.dom.visible_messages = function() {
          const ret = [];
          $('tbody>tr.zA[role="row"]:visible', api.dom.inbox_content()).each((index, msgEle) => {
            const nameAndEmail = $("*[email][name]", msgEle);
            const linkAndSubject = $("*[role=link]", msgEle);
            const idNode = msgEle.querySelector("span[data-thread-id]");
            ret.push({
              from: {
                name: nameAndEmail.attr("name"),
                email: nameAndEmail.attr("email")
              },
              summary: linkAndSubject[0].innerText,
              thread_id: api.helper.clean_thread_id(idNode && idNode.dataset && idNode.dataset.threadId || ""),
              legacy_email_id: idNode && idNode.dataset && idNode.dataset.legacyMessageId || "",
              $el: $(msgEle)
            });
          });
          return ret;
        };
        api.dom.composes = function() {
          var objs = [];
          $("div.M9").each(function(idx, el) {
            objs.push(new api.dom.compose(el));
          });
          return objs;
        };
        api.dom.helper = {};
        api.dom.helper.trigger_address = function($el) {
          let el = $el[0];
          let event = new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: "Tab",
            shiftKey: true,
            keyCode: 9
          });
          el.focus();
          el.dispatchEvent(event);
        };
        api.dom.compose = function(element) {
          if (this.constructor !== api.dom.compose) {
            return new api.dom.compose(element);
          }
          element = $(element);
          if (!element || !element.hasClass("M9") && !element.hasClass("AD"))
            api.tools.error("api.dom.compose called with invalid element");
          this.$el = element;
          return this;
        };
        extend(api.dom.compose.prototype, {
          id: function() {
            return this.dom("id").val();
          },
          email_id: function() {
            let email_id = this.dom("draft").val();
            if (email_id && email_id.startsWith("#")) {
              return email_id.substring(1);
            } else {
              return email_id;
            }
          },
          thread_id: function() {
            let thread_id = this.dom("thread").val() || "";
            return api.helper.clean_thread_id(thread_id);
          },
          is_inline: function() {
            return this.$el.closest("td.Bu").length > 0;
          },
          type: function() {
            return this.is_inline() ? this.find("input[name=subject]").val().indexOf("Fw") === 0 ? "forward" : "reply" : "compose";
          },
          recipients: function(options) {
            if (typeof options !== "object")
              options = {};
            const peopleKit = api.check.is_peoplekit_compose(this.$el);
            const type_selector = options.type ? "[name=" + options.type + "]" : "";
            const found = peopleKit ? this.$el.find("tr.bzf " + (type_selector || "div[name]") + " div[data-hovercard-id]").map((_, el) => ({
              type: options.type || el.closest("div[name]").getAttribute("name"),
              email: el.getAttribute("data-hovercard-id")
            })) : this.$el.find(".GS input[type=hidden]" + type_selector).map((_, el) => ({
              type: el.name,
              email: el.value
            }));
            if (options.flat) {
              return found.toArray().map((r) => r.email);
            } else {
              let result = { to: [], cc: [], bcc: [] };
              if (options.type) {
                result[options.type] = found.toArray().filter((r) => r.type === options.type).map((r) => r.email);
              } else {
                ["to", "cc", "bcc"].forEach((type) => {
                  result[type] = found.toArray().filter((r) => r.type === type).map((r) => r.email);
                });
              }
              return result;
            }
          },
          to: function(to) {
            const $el = this.dom("to").val(to);
            api.dom.helper.trigger_address($el);
            return $el;
          },
          cc: function(cc) {
            if (cc) {
              const showCc = this.dom("show_cc");
              showCc.click();
            }
            const $el = this.dom("cc").val(cc);
            api.dom.helper.trigger_address($el);
            return $el;
          },
          bcc: function(bcc) {
            if (bcc) {
              const showBcc = this.dom("show_bcc");
              showBcc.click();
            }
            const $el = this.dom("bcc").val(bcc);
            api.dom.helper.trigger_address($el);
            return $el;
          },
          subject: function(subject) {
            if (subject)
              this.dom("all_subjects").val(subject);
            subject = this.dom("subjectbox").val();
            return subject ? subject : this.dom("subject").val();
          },
          from: function() {
            var el = this.dom("from");
            if (el.length) {
              var fromNameAndEmail = el.val();
              if (fromNameAndEmail) {
                return api.tools.extract_email_address(fromNameAndEmail);
              }
            }
            return api.get.user_email();
          },
          body: function(body) {
            var el = this.dom("body");
            if (body)
              el.html(body);
            return el.html();
          },
          attachments: function() {
            var out = [];
            var failed = false;
            this.dom("attachments").each(function() {
              var el = $(this);
              var result = {};
              result.$el = el;
              result.name = el.find("div.vI").html();
              result.size = el.find("div.vJ").html();
              result.url = el.find("a.dO").attr("href");
              result.type = "https";
              out.push(result);
            });
            if (failed) {
              return void 0;
            } else {
              return out;
            }
          },
          send: function() {
            return this.dom("send_button").click();
          },
          find: function(selector) {
            return this.$el.find(selector);
          },
          close: function() {
            const e = document.createEvent("Events");
            e.initEvent("keydown", true, true);
            e.which = 27;
            e.keyCode = 27;
            var $body = this.dom("body");
            $body.focus();
            $body[0].dispatchEvent(e);
          },
          dom: function(lookup) {
            if (!lookup)
              return this.$el;
            var config = {
              to: "textarea[name=to]",
              cc: "textarea[name=cc]",
              bcc: "textarea[name=bcc]",
              id: "input[name=composeid]",
              draft: "input[name=draft]",
              thread: "input[name=rt]",
              subject: "input[name=subject]",
              subjectbox: "input[name=subjectbox]",
              all_subjects: "input[name=subjectbox], input[name=subject]",
              body: "div[contenteditable=true]:not([id=subject])",
              quoted_reply: "input[name=uet]",
              reply: "M9",
              forward: "M9",
              from: "input[name=from]",
              attachments: "div.dL",
              send_button: "div.T-I.T-I-atl:not(.gmailjscomposebutton)",
              show_cc: "span.aB.gQ.pE",
              show_bcc: "span.aB.gQ.pB"
            };
            if (api.check.is_peoplekit_compose(this.$el)) {
              config = Object.assign(config, {
                to: "div[name=to] input",
                cc: "div[name=cc] input",
                bcc: "div[name=bcc] input"
              });
            }
            if (!config[lookup])
              api.tools.error('Dom lookup failed. Unable to find config for "' + lookup + '"', config, lookup, config[lookup]);
            return this.$el.find(config[lookup]);
          }
        });
        api.dom.email = function(element) {
          if (this.constructor !== api.dom.email) {
            return new api.dom.email(element);
          }
          if (typeof element === "string" && api.check.data.is_legacy_email_id(element)) {
            this.id = element;
            this.$el = $("div.adn[data-legacy-message-id='" + this.id + "']");
          } else if (typeof element === "string" && api.check.data.is_email_id(element)) {
            const elem = document.querySelector("div.adn[data-message-id='" + element.replace("msg-f:", "\\#msg-f\\:") + "']");
            this.id = elem.dataset.legacyMessageId;
            this.$el = $(elem);
          } else if (element && (element.classList && element.classList.contains("adn") || element.hasClass && element.hasClass("adn"))) {
            this.$el = $(element);
            this.id = this.$el.data("legacyMessageId");
          } else {
            api.tools.error("api.dom.email called with invalid element/id");
          }
          return this;
        };
        extend(api.dom.email.prototype, {
          body: function(body) {
            var el = this.dom("body");
            if (body) {
              el.html(body);
            }
            return el.html();
          },
          from: function(email, name) {
            var el = this.dom("from");
            if (email) {
              el.attr("email", email);
            }
            if (name) {
              el.attr("name", name);
              el.html(name);
            }
            return {
              email: el.attr("email"),
              name: el.attr("name"),
              el
            };
          },
          to: function(to_array) {
            if (to_array) {
              if (!$.isArray(to_array)) {
                to_array = [to_array];
              }
              var html = [];
              $.each(to_array, function(index, obj) {
                html.push($("<span />").attr({
                  dir: "ltr",
                  email: obj.email,
                  name: obj.name
                }).addClass("g2").html(obj.name).wrap("<p/>").parent().html());
              });
              this.dom("to_wrapper").html("to " + html.join(", "));
            }
            var out = [];
            this.dom("to").each(function() {
              var el = $(this);
              out.push({
                email: el.attr("email"),
                name: el.attr("name"),
                el
              });
            });
            return out;
          },
          attachments: function() {
            var out = [];
            var failed = false;
            this.dom("attachments").each(function() {
              var el = $(this);
              var result = {};
              result.$el = el;
              result.name = el.find(".aV3").html();
              result.size = el.find(".SaH2Ve").html();
              var url = el.attr("download_url");
              if (url) {
                var url_type = api.tools.parse_attachment_url(url);
                result.url = url_type.url;
                result.type = url_type.type;
              }
              out.push(result);
            });
            if (failed) {
              return void 0;
            } else {
              return out;
            }
          },
          data: function() {
            if (typeof api.dom.email_cache !== "object") {
              api.dom.email_cache = {};
            }
            if (!api.dom.email_cache[this.id]) {
              var data = api.get.email_data(this.id);
              $.each(data.threads, function(email_id, email_data) {
                api.dom.email_cache[email_id] = email_data;
              });
            }
            return api.dom.email_cache[this.id];
          },
          source: function() {
            return api.get.email_source(this.id);
          },
          dom: function(lookup) {
            if (!lookup)
              return this.$el;
            var config = {
              body: "div.a3s",
              from: "span[email].gD",
              to: "span[email].g2",
              to_wrapper: "span.hb",
              timestamp: "span.g3",
              star: "div.zd",
              attachments: "div.hq.gt div.aQH span.aZo",
              reply_button: "div[role=button].aaq",
              menu_button: "div[role=button].aap",
              details_button: "div[role=button].ajz"
            };
            if (!config[lookup])
              api.tools.error('Dom lookup failed. Unable to find config for "' + lookup + '"');
            return this.$el.find(config[lookup]);
          }
        });
        api.dom.thread = function(element) {
          if (this.constructor !== api.dom.thread) {
            return new api.dom.thread(element);
          }
          if (!element || !element.hasClass("if") && !element.hasClass("iY"))
            api.tools.error("api.dom.thread called with invalid element/id");
          this.$el = element;
          return this;
        };
        extend(api.dom.thread.prototype, {
          dom: function(lookup) {
            if (!lookup)
              return this.$el;
            var config = {
              opened_email: "div.adn",
              subject: "h2.hP",
              labels: "div.hN"
            };
            if (!config[lookup])
              api.tools.error('Dom lookup failed. Unable to find config for "' + lookup + '"');
            return this.$el.find(config[lookup]);
          }
        });
        api.compose.start_compose = function() {
          var composeEl = document.getElementsByClassName("T-I T-I-KE L3")[0];
          if (composeEl) {
            composeEl.click();
            return true;
          }
          return false;
        };
        api.old = {};
        api.old.get = api.get;
        api.new = {};
        api.new.get = {};
        api.new.get.email_id = function(emailElem) {
          if (!emailElem) {
            const emailElems = document.querySelectorAll(".adn[data-message-id]");
            if (!emailElems || emailElems.length === 0) {
              return null;
            }
            emailElem = emailElems[emailElems.length - 1];
          }
          return api.helper.get.new_email_id(emailElem);
        };
        api.new.get.thread_id = function() {
          const threadElem = document.querySelector("[data-thread-perm-id]");
          if (!threadElem) {
            return null;
          }
          return threadElem.dataset["threadPermId"];
        };
        api.new.get.email_data = function(identifier) {
          identifier = identifier || api.new.get.email_id();
          const email_id = api.helper.get.new_email_id(identifier);
          if (!email_id) {
            return null;
          } else {
            return api.cache.emailIdCache[email_id];
          }
        };
        api.new.get.thread_data = function(identifier) {
          identifier = identifier || api.new.get.thread_id();
          const thread_id = api.helper.get.thread_id(identifier);
          if (!thread_id) {
            return null;
          } else {
            return api.cache.threadCache[thread_id];
          }
        };
        if (typeof document !== "undefined") {
          api.tools.xhr_watcher();
        }
        if (typeof document !== "undefined") {
          api.tools.embedded_data_watcher();
        }
        return api;
      };
      if (typeof exports !== "undefined") {
        exports.Gmail = Gmail;
      }
    }
  });

  // src/gmailJsLoader.js
  var GmailFactory = require_gmail();
  var jQuery2 = require_jquery();
  window._gmailjs = window._gmailjs || new GmailFactory.Gmail(jQuery2);
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.6.3
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2022-12-20T21:28Z
   *)
*/
//# sourceMappingURL=gmailJsLoader.js.map

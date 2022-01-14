(function (t) {
  function e(e) {
    for (
      var n, s, l = e[0], c = e[1], u = e[2], d = 0, f = [];
      d < l.length;
      d++
    )
      (s = l[d]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && f.push(i[s][0]),
        (i[s] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    o && o(e);
    while (f.length) f.shift()();
    return r.push.apply(r, u || []), a();
  }
  function a() {
    for (var t, e = 0; e < r.length; e++) {
      for (var a = r[e], n = !0, l = 1; l < a.length; l++) {
        var c = a[l];
        0 !== i[c] && (n = !1);
      }
      n && (r.splice(e--, 1), (t = s((s.s = a[0]))));
    }
    return t;
  }
  var n = {},
    i = { app: 0 },
    r = [];
  function s(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = t),
    (s.c = n),
    (s.d = function (t, e, a) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (s.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function (t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          s.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "/");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var u = 0; u < l.length; u++) e(l[u]);
  var o = c;
  r.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "1bba": function (t, e, a) {
    var n = a("ded3").default,
      i = a("4082").default;
    a("99af"),
      (t.exports = {
        functional: !0,
        render: function (t, e) {
          var a = e._c,
            r = (e._v, e.data),
            s = e.children,
            l = void 0 === s ? [] : s,
            c = r.class,
            u = r.staticClass,
            o = r.style,
            d = r.staticStyle,
            f = r.attrs,
            p = void 0 === f ? {} : f,
            v = i(r, ["class", "staticClass", "style", "staticStyle", "attrs"]);
          return a(
            "svg",
            n(
              {
                class: [c, u],
                style: [o, d],
                attrs: Object.assign(
                  {
                    height: "25",
                    viewBox: "1 1 500 550",
                    width: "25",
                    xmlns: "http://www.w3.org/2000/svg"
                  },
                  p
                )
              },
              v
            ),
            l.concat([
              a("path", {
                attrs: {
                  d:
                    "M256 0C114.613 0 0 114.613 0 256c0 141.383 114.613 256 256 256 141.383 0 256-114.617 256-256C511.832 114.684 397.316.168 256 0zm0 480C132.29 480 32 379.71 32 256S132.29 32 256 32s224 100.29 224 224c-.133 123.656-100.344 223.867-224 224zm0 0"
                }
              }),
              a("path", {
                attrs: { d: "M240 128h32v176h-32zm0 0M240 352h32v32h-32zm0 0" }
              })
            ])
          );
        }
      });
  },
  "4e0f": function (t, e, a) {},
  "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n = a("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "app" } }, [a("CheckoutForm")], 1);
      },
      r = [],
      s = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "checkout" },
          [
            t.showResultText
              ? t._e()
              : [
                  a("h2", [t._v("Payment")]),
                  a(
                    "v-form",
                    { on: { submit: t.handleSubmit } },
                    [
                      a("div", { staticClass: "tabs" }, [
                        a("div", { staticClass: "tab" }, [
                          a(
                            "div",
                            {
                              staticClass: "tab__title",
                              on: {
                                click: function (e) {
                                  t.activeTab = 0;
                                }
                              }
                            },
                            [
                              a("input", {
                                attrs: {
                                  type: "radio",
                                  name: "tabs",
                                  id: "tab1"
                                },
                                domProps: { checked: 0 === t.activeTab }
                              }),
                              a("label", { attrs: { for: "tab1" } }, [
                                t._v("Paypal")
                              ])
                            ]
                          ),
                          0 === t.activeTab
                            ? a("div", { staticClass: "tab__content" }, [
                                t._v("Pay with paypal")
                              ])
                            : t._e()
                        ]),
                        a("div", { staticClass: "tab" }, [
                          a(
                            "div",
                            {
                              staticClass: "tab__title",
                              on: {
                                click: function (e) {
                                  t.activeTab = 1;
                                }
                              }
                            },
                            [
                              a("input", {
                                attrs: {
                                  type: "radio",
                                  name: "tabs",
                                  id: "tab2"
                                },
                                domProps: { checked: 1 === t.activeTab }
                              }),
                              a("label", { attrs: { for: "tab2" } }, [
                                t._v("Card")
                              ])
                            ]
                          ),
                          1 === t.activeTab
                            ? a(
                                "div",
                                { staticClass: "tab__content" },
                                [
                                  a("saved-cards", {
                                    attrs: { cards: t.cards },
                                    on: {
                                      select: function (e) {
                                        t.selectedCard = e;
                                      }
                                    }
                                  }),
                                  t.showAddModal
                                    ? a(
                                        "modal",
                                        {
                                          ref: "modal",
                                          on: {
                                            close: function (e) {
                                              t.showAddModal = !1;
                                            }
                                          }
                                        },
                                        [
                                          a("add-card-form", {
                                            on: { add: t.addCard }
                                          })
                                        ],
                                        1
                                      )
                                    : t._e(),
                                  a(
                                    "v-button",
                                    {
                                      on: {
                                        click: function (e) {
                                          t.showAddModal = !0;
                                        }
                                      }
                                    },
                                    [t._v("Add new card")]
                                  )
                                ],
                                1
                              )
                            : t._e()
                        ])
                      ]),
                      a(
                        "v-button",
                        { staticClass: "submit", attrs: { type: "submit" } },
                        [t._v("Submit order")]
                      )
                    ],
                    1
                  )
                ],
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.showResultText,
                    expression: "showResultText"
                  }
                ],
                staticClass: "checkout__result"
              },
              [t._v(t._s(t.resultText))]
            )
          ],
          2
        );
      },
      l = [],
      c =
        (a("caad"),
        a("2532"),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "form",
            { staticClass: "v-form", on: { submit: t.handleSubmit } },
            [t._t("default")],
            2
          );
        }),
      u = [],
      o =
        (a("159b"),
        a("b0c0"),
        {
          name: "VForm",
          props: {
            watchers: {
              type: Array,
              default: function () {
                return ["VInput"];
              }
            }
          },
          data: function () {
            return { children: {} };
          },
          mounted: function () {
            var t = this;
            this.$children.forEach(function (e, a) {
              e.hasOwnProperty("componentName") &&
                t.watchers.includes(e.componentName) &&
                (t.setChildData({ child: e, index: a }),
                t.$emit("change", t.children),
                e.$on("input", function () {
                  t.setChildData({ child: e, index: a }),
                    t.$emit("change", t.children);
                }));
            });
          },
          methods: {
            setChildData: function (t) {
              var e = t.child,
                a = t.index;
              this.$set(this.children, a, {
                valid: e.valid,
                value: e.currentValue,
                label: e.label,
                name: e.name
              });
            },
            handleSubmit: function (t) {
              t.preventDefault(), this.$emit("submit", this.children);
            }
          }
        }),
      d = o,
      f = a("2877"),
      p = Object(f["a"])(d, c, u, !1, null, "c879b600", null),
      v = p.exports,
      h = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "button",
          {
            staticClass: "v-button",
            class: { loading: t.loading },
            on: {
              click: function (e) {
                return t.$emit("click", e);
              }
            }
          },
          [
            t._t("default"),
            t.loading
              ? a(
                  "span",
                  { staticClass: "v-button__preloader" },
                  [
                    a("preloader", {
                      attrs: { width: "45px", viewBox: "0 0 122 30" }
                    })
                  ],
                  1
                )
              : t._e()
          ],
          2
        );
      },
      m = [],
      b = a("6eae"),
      _ = a.n(b),
      y = {
        name: "VButton",
        components: { Preloader: _.a },
        props: { loading: { type: Boolean, default: !1 } }
      },
      C = y,
      g = (a("8faa"), Object(f["a"])(C, h, m, !1, null, "4dbb8c50", null)),
      w = g.exports,
      V = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          {
            staticClass: "modal",
            on: {
              keydown: function (e) {
                return !e.type.indexOf("key") &&
                  t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                  ? null
                  : t.handleClose(e);
              }
            }
          },
          [
            a("div", { staticClass: "modal__content" }, [t._t("default")], 2),
            a("div", {
              staticClass: "modal__overlay",
              on: { click: t.handleClose }
            })
          ]
        );
      },
      x = [],
      k = {
        name: "Modal",
        created: function () {
          window.addEventListener("keydown", this.handleKeydown);
        },
        beforeDestroy: function () {
          window.removeEventListener("keydown", this.handleKeydown);
        },
        methods: {
          handleClose: function () {
            this.$emit("close");
          },
          handleKeydown: function (t) {
            "Escape" === t.key && this.handleClose();
          }
        }
      },
      O = k,
      M = (a("dd94"), Object(f["a"])(O, V, x, !1, null, "744cda1c", null)),
      $ = M.exports,
      S = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-form",
          { ref: "form", on: { submit: t.addCard } },
          [
            a("v-input", {
              attrs: {
                label: "Holder name",
                name: "name",
                id: "holder-name",
                required: ""
              }
            }),
            a("v-input", {
              attrs: {
                label: "Card number",
                name: "number",
                type: "number",
                id: "card-name",
                required: ""
              }
            }),
            a("v-input", {
              attrs: {
                label: "Expiry",
                name: "expiry",
                placeholder: "MM/YY",
                type: "number",
                id: "expiry",
                required: ""
              }
            }),
            a("v-input", {
              attrs: {
                label: "CVV",
                name: "cvv",
                type: "number",
                id: "cvv",
                required: ""
              }
            }),
            t.valid
              ? t._e()
              : a("div", { staticClass: "invalid" }, [t._v("Form not valid2")]),
            a(
              "v-button",
              {
                staticClass: "add",
                on: {
                  click: function (e) {
                    return t.$refs.form.submit();
                  }
                }
              },
              [t._v("Add card")]
            )
          ],
          1
        );
      },
      j = [],
      T =
        (a("07ac"),
        a("7db0"),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "label",
            {
              staticClass: "v-input",
              class: { focused: t.focused, invalid: t.invalid }
            },
            [
              t.label
                ? a("span", { staticClass: "v-input__label" }, [
                    t._v(" " + t._s(t.label) + " ")
                  ])
                : t._e(),
              "checkbox" === t.type
                ? a(
                    "input",
                    t._g(
                      t._b(
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.currentValue,
                              expression: "currentValue"
                            }
                          ],
                          ref: "input",
                          staticClass: "v-input__input",
                          attrs: {
                            placeholder: t.placeholder,
                            type: "checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(t.currentValue)
                              ? t._i(t.currentValue, null) > -1
                              : t.currentValue
                          },
                          on: {
                            change: function (e) {
                              var a = t.currentValue,
                                n = e.target,
                                i = !!n.checked;
                              if (Array.isArray(a)) {
                                var r = null,
                                  s = t._i(a, r);
                                n.checked
                                  ? s < 0 && (t.currentValue = a.concat([r]))
                                  : s > -1 &&
                                    (t.currentValue = a
                                      .slice(0, s)
                                      .concat(a.slice(s + 1)));
                              } else t.currentValue = i;
                            }
                          }
                        },
                        "input",
                        t.options,
                        !1
                      ),
                      t.inputListeners
                    )
                  )
                : "radio" === t.type
                ? a(
                    "input",
                    t._g(
                      t._b(
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.currentValue,
                              expression: "currentValue"
                            }
                          ],
                          ref: "input",
                          staticClass: "v-input__input",
                          attrs: { placeholder: t.placeholder, type: "radio" },
                          domProps: { checked: t._q(t.currentValue, null) },
                          on: {
                            change: function (e) {
                              t.currentValue = null;
                            }
                          }
                        },
                        "input",
                        t.options,
                        !1
                      ),
                      t.inputListeners
                    )
                  )
                : a(
                    "input",
                    t._g(
                      t._b(
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.currentValue,
                              expression: "currentValue"
                            }
                          ],
                          ref: "input",
                          staticClass: "v-input__input",
                          attrs: { placeholder: t.placeholder, type: t.type },
                          domProps: { value: t.currentValue },
                          on: {
                            input: function (e) {
                              e.target.composing ||
                                (t.currentValue = e.target.value);
                            }
                          }
                        },
                        "input",
                        t.options,
                        !1
                      ),
                      t.inputListeners
                    )
                  ),
              t.invalid
                ? a("span", { staticClass: "v-input__validation" }, [
                    t._v(" " + t._s(t.currentValidationMessage) + " ")
                  ])
                : t._e(),
              t.invalid
                ? a("warning-svg", { staticClass: "v-input__warning" })
                : t._e()
            ],
            1
          );
        }),
      P = [],
      A = a("5530"),
      E = a("1bba"),
      N = a.n(E),
      R = {
        name: "VInput",
        components: { WarningSvg: N.a },
        props: {
          type: { type: String, default: "text" },
          placeholder: { type: String, default: null },
          value: { type: String, default: null },
          label: { type: String, default: null },
          name: { type: String, default: null },
          options: {
            type: Object,
            default: function () {
              return {};
            }
          },
          validationRule: { type: Object, default: null },
          validationMessage: {
            type: String,
            default: "This field is required"
          },
          required: { type: Boolean, default: !1 }
        },
        data: function () {
          return {
            componentName: "VInput",
            currentValue: null,
            focused: !1,
            valid: !0,
            showValidation: !1,
            currentValidationMessage: null
          };
        },
        computed: {
          inputListeners: function () {
            var t = this;
            return Object(A["a"])(Object(A["a"])({}, this.$listeners), {
              focus: function (e) {
                (t.focused = !0), t.$emit("focus", e);
              },
              blur: function (e) {
                (t.focused = !1),
                  t.showValidation || (t.showValidation = !0),
                  t.$emit("blur", e);
              }
            });
          },
          invalid: function () {
            return !this.valid && this.showValidation;
          }
        },
        watch: {
          value: function (t) {
            this.currentValue = t;
          },
          currentValue: function () {
            this.setValid(), this.$emit("input", this.currentValue);
          }
        },
        created: function () {
          (this.currentValue = this.value),
            this.setValid(),
            this.$emit("input", this.currentValue);
        },
        methods: {
          setFocus: function () {
            this.$refs.input.focus();
          },
          setValid: function () {
            return this.required
              ? this.validateByValue()
                ? this.validateByRule()
                  ? (this.valid = !0)
                  : ((this.currentValidationMessage = this.validationRule.message),
                    (this.valid = !1))
                : ((this.currentValidationMessage = this.validationMessage),
                  (this.valid = !1))
              : (this.valid = !0);
          },
          validateByValue: function () {
            return this.currentValue && this.currentValue.length > 0;
          },
          validateByRule: function () {
            return (
              !this.validationRule ||
              this.validationRule.regex.test(this.currentValue)
            );
          }
        }
      },
      B = R,
      F = (a("9780"), Object(f["a"])(B, T, P, !1, null, "66143938", null)),
      q = F.exports,
      L = {
        name: "AddCardForm",
        components: { VButton: w, VInput: q, VForm: v },
        data: function () {
          return { fields: {}, valid: !0 };
        },
        methods: {
          addCard: function (t) {
            this.fields = t;
            var e = t && Object.values(t),
              a =
                null === e || void 0 === e
                  ? void 0
                  : e.every(function (t) {
                      var e = t.valid;
                      return e;
                    });
            if (a) {
              this.valid = !0;
              var n = e.find(function (t) {
                  var e = t.name;
                  return "number" === e;
                }),
                i = "".concat(n.value).substr("".concat(n.value).length - 4);
              this.$emit("add", i);
            } else this.valid = !1;
          }
        }
      },
      D = L,
      z = (a("784d"), Object(f["a"])(D, S, j, !1, null, null, null)),
      I = z.exports,
      K = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return t.cards
          ? a(
              "div",
              { staticClass: "saved-cards" },
              t._l(t.cards, function (e, n) {
                return a(
                  "div",
                  {
                    key: n,
                    staticClass: "card",
                    on: {
                      click: function (a) {
                        return t.handleSelect(e);
                      }
                    }
                  },
                  [
                    a("input", {
                      attrs: { type: "radio", name: "saved" },
                      domProps: { checked: t.selected === e }
                    }),
                    a("div", { staticClass: "card__title" }, [
                      t._v(" " + t._s(e) + " ")
                    ])
                  ]
                );
              }),
              0
            )
          : t._e();
      },
      J = [],
      Y = {
        name: "SavedCards",
        data: function () {
          return { selected: null };
        },
        props: {
          cards: {
            type: Array,
            default: function () {
              return [];
            }
          }
        },
        methods: {
          handleSelect: function (t) {
            (this.selected = t), this.$emit("select", t);
          }
        }
      },
      H = Y,
      W = (a("d351"), Object(f["a"])(H, K, J, !1, null, "1126632a", null)),
      G = W.exports,
      Q = {
        name: "CheckoutForm",
        components: {
          SavedCards: G,
          AddCardForm: I,
          Modal: $,
          VButton: w,
          VForm: v
        },
        data: function () {
          return {
            showAddModal: !1,
            activeTab: 0,
            cards: [],
            selectedCard: null,
            resultText: "Order sent! Thank you!",
            showResultText: !1
          };
        },
        methods: {
          addCard: function (t) {
            this.cards.includes(t) ||
              (this.cards.push(t), this.$refs.modal.handleClose());
          },
          handleSubmit: function () {
            var t = this;
            this.selectedCard &&
              ((this.showResultText = !0),
              this.clearOrder(),
              setTimeout(function () {
                t.showResultText = !1;
              }, 3e3));
          },
          clearOrder: function () {
            (this.cards = []), (this.selectedCard = null);
          }
        }
      },
      U = Q,
      X = (a("b0d0"), Object(f["a"])(U, s, l, !1, null, "0b358d81", null)),
      Z = X.exports,
      tt = { name: "App", components: { CheckoutForm: Z } },
      et = tt,
      at = (a("5c0b"), Object(f["a"])(et, i, r, !1, null, null, null)),
      nt = at.exports;
    (n["a"].config.productionTip = !1),
      new n["a"]({
        render: function (t) {
          return t(nt);
        }
      }).$mount("#app");
  },
  "5c0b": function (t, e, a) {
    "use strict";
    a("9c0c");
  },
  "5c8b": function (t, e, a) {},
  "5d7b": function (t, e, a) {},
  "6eae": function (t, e, a) {
    var n = a("ded3").default,
      i = a("4082").default;
    a("99af"),
      (t.exports = {
        functional: !0,
        render: function (t, e) {
          var a = e._c,
            r = (e._v, e.data),
            s = e.children,
            l = void 0 === s ? [] : s,
            c = r.class,
            u = r.staticClass,
            o = r.style,
            d = r.staticStyle,
            f = r.attrs,
            p = void 0 === f ? {} : f,
            v = i(r, ["class", "staticClass", "style", "staticStyle", "attrs"]);
          return a(
            "svg",
            n(
              {
                class: [c, u],
                style: [o, d],
                attrs: Object.assign(
                  { xmlns: "http://www.w3.org/2000/svg", fill: "#fff" },
                  p
                )
              },
              v
            ),
            l.concat([
              a("circle", { attrs: { cx: "15", cy: "15", r: "15" } }, [
                a("animate", {
                  attrs: {
                    attributeName: "r",
                    from: "15",
                    to: "15",
                    begin: "0s",
                    dur: "0.8s",
                    values: "15;9;15",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                  }
                }),
                a("animate", {
                  attrs: {
                    attributeName: "fill-opacity",
                    from: "1",
                    to: "1",
                    begin: "0s",
                    dur: "0.8s",
                    values: "1;.5;1",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                  }
                })
              ]),
              a(
                "circle",
                { attrs: { cx: "60", cy: "15", r: "9", "fill-opacity": ".3" } },
                [
                  a("animate", {
                    attrs: {
                      attributeName: "r",
                      from: "9",
                      to: "9",
                      begin: "0s",
                      dur: "0.8s",
                      values: "9;15;9",
                      calcMode: "linear",
                      repeatCount: "indefinite"
                    }
                  }),
                  a("animate", {
                    attrs: {
                      attributeName: "fill-opacity",
                      from: ".5",
                      to: ".5",
                      begin: "0s",
                      dur: "0.8s",
                      values: ".5;1;.5",
                      calcMode: "linear",
                      repeatCount: "indefinite"
                    }
                  })
                ]
              ),
              a("circle", { attrs: { cx: "105", cy: "15", r: "15" } }, [
                a("animate", {
                  attrs: {
                    attributeName: "r",
                    from: "15",
                    to: "15",
                    begin: "0s",
                    dur: "0.8s",
                    values: "15;9;15",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                  }
                }),
                a("animate", {
                  attrs: {
                    attributeName: "fill-opacity",
                    from: "1",
                    to: "1",
                    begin: "0s",
                    dur: "0.8s",
                    values: "1;.5;1",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                  }
                })
              ])
            ])
          );
        }
      });
  },
  "784d": function (t, e, a) {
    "use strict";
    a("8e38");
  },
  "89ed": function (t, e, a) {},
  "8e38": function (t, e, a) {},
  "8faa": function (t, e, a) {
    "use strict";
    a("f5c2");
  },
  9780: function (t, e, a) {
    "use strict";
    a("4e0f");
  },
  "9c0c": function (t, e, a) {},
  b0d0: function (t, e, a) {
    "use strict";
    a("5c8b");
  },
  d351: function (t, e, a) {
    "use strict";
    a("89ed");
  },
  dd94: function (t, e, a) {
    "use strict";
    a("5d7b");
  },
  f5c2: function (t, e, a) {}
});
//# sourceMappingURL=app.75d8feee.js.map

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[717], {
		9008: function(e, t, i) {
			e.exports = i(3121)
		},
		719: function(e, t, i) {
			"use strict";
			i.d(t, {
				tq: function() {
					return w
				},
				o5: function() {
					return y
				}
			});
			var s = i(7294),
				a = i(8116);

			function r(e) {
				return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
			}

			function n(e, t) {
				let i = ["__proto__", "constructor", "prototype"];
				Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
					void 0 === e[i] ? e[i] = t[i] : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : n(e[i], t[i]) : e[i] = t[i]
				})
			}

			function l(e = {}) {
				return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
			}

			function o(e = {}) {
				return e.pagination && void 0 === e.pagination.el
			}

			function d(e = {}) {
				return e.scrollbar && void 0 === e.scrollbar.el
			}

			function p(e = "") {
				let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
					i = [];
				return t.forEach(e => {
					0 > i.indexOf(e) && i.push(e)
				}), i.join(" ")
			}
			let u = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
				c = (e, t) => {
					let i = t.slidesPerView;
					if (t.breakpoints) {
						let e = a.ZP.prototype.getBreakpoint(t.breakpoints),
							s = e in t.breakpoints ? t.breakpoints[e] : void 0;
						s && s.slidesPerView && (i = s.slidesPerView)
					}
					let s = Math.ceil(parseFloat(t.loopedSlides || i, 10));
					return (s += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (s = e.length), s
				};

			function h(e) {
				return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
			}
			let f = e => {
				e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
			};

			function m(e, t) {
				return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
			}
			let g = (0, s.createContext)(null),
				v = (0, s.createContext)(null);

			function b() {
				return (b = Object.assign ? Object.assign.bind() : function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			let w = (0, s.forwardRef)(function(e, t) {
				let {
					className: i,
					tag: g = "div",
					wrapperTag: w = "div",
					children: C,
					onSwiper: y,
					...T
				} = void 0 === e ? {} : e, S = !1, [E, x] = (0, s.useState)("swiper"), [M, k] = (0, s.useState)(null), [P, $] = (0, s.useState)(!1), O = (0, s.useRef)(!1), L = (0, s.useRef)(null), _ = (0, s.useRef)(null), z = (0, s.useRef)(null), A = (0, s.useRef)(null), D = (0, s.useRef)(null), I = (0, s.useRef)(null), N = (0, s.useRef)(null), B = (0, s.useRef)(null), {
					params: G,
					passedParams: j,
					rest: F,
					events: H
				} = function(e = {}, t = !0) {
					let i = {
							on: {}
						},
						s = {},
						l = {};
					n(i, a.ZP.defaults), n(i, a.ZP.extendedDefaults), i._emitClasses = !0, i.init = !1;
					let o = {},
						d = u.map(e => e.replace(/_/, "")),
						p = Object.assign({}, e);
					return Object.keys(p).forEach(a => {
						void 0 !== e[a] && (d.indexOf(a) >= 0 ? r(e[a]) ? (i[a] = {}, l[a] = {}, n(i[a], e[a]), n(l[a], e[a])) : (i[a] = e[a], l[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : o[a] = e[a])
					}), ["navigation", "pagination", "scrollbar"].forEach(e => {
						!0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
					}), {
						params: i,
						passedParams: l,
						rest: o,
						events: s
					}
				}(T), {
					slides: R,
					slots: V
				} = function(e) {
					let t = [],
						i = {
							"container-start": [],
							"container-end": [],
							"wrapper-start": [],
							"wrapper-end": []
						};
					return s.Children.toArray(e).forEach(e => {
						if (h(e)) t.push(e);
						else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
						else if (e.props && e.props.children) {
							let a = function e(t) {
								let i = [];
								return s.Children.toArray(t).forEach(t => {
									h(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
								}), i
							}(e.props.children);
							a.length > 0 ? a.forEach(e => t.push(e)) : i["container-end"].push(e)
						} else i["container-end"].push(e)
					}), {
						slides: t,
						slots: i
					}
				}(C), W = () => {
					$(!P)
				};
				Object.assign(G.on, {
					_containerClasses(e, t) {
						x(t)
					}
				});
				let q = () => {
					if (Object.assign(G.on, H), S = !0, _.current = new a.ZP(G), _.current.loopCreate = () => {}, _.current.loopDestroy = () => {}, G.loop && (_.current.loopedSlides = c(R, G)), _.current.virtual && _.current.params.virtual.enabled) {
						_.current.virtual.slides = R;
						let e = {
							cache: !1,
							slides: R,
							renderExternal: k,
							renderExternalUpdate: !1
						};
						n(_.current.params.virtual, e), n(_.current.originalParams.virtual, e)
					}
				};
				L.current || q(), _.current && _.current.on("_beforeBreakpoint", W);
				let X = () => {
						!S && H && _.current && Object.keys(H).forEach(e => {
							_.current.on(e, H[e])
						})
					},
					Y = () => {
						H && _.current && Object.keys(H).forEach(e => {
							_.current.off(e, H[e])
						})
					};
				return (0, s.useEffect)(() => () => {
					_.current && _.current.off("_beforeBreakpoint", W)
				}), (0, s.useEffect)(() => {
					!O.current && _.current && (_.current.emitSlidesClasses(), O.current = !0)
				}), m(() => {
					if (t && (t.current = L.current), L.current) return _.current.destroyed && q(),
						function({
							el: e,
							nextEl: t,
							prevEl: i,
							paginationEl: s,
							scrollbarEl: a,
							swiper: r
						}, n) {
							l(n) && t && i && (r.params.navigation.nextEl = t, r.originalParams.navigation.nextEl = t, r.params.navigation.prevEl = i, r.originalParams.navigation.prevEl = i), o(n) && s && (r.params.pagination.el = s, r.originalParams.pagination.el = s), d(n) && a && (r.params.scrollbar.el = a, r.originalParams.scrollbar.el = a), r.init(e)
						}({
							el: L.current,
							nextEl: D.current,
							prevEl: I.current,
							paginationEl: N.current,
							scrollbarEl: B.current,
							swiper: _.current
						}, G), y && y(_.current), () => {
							_.current && !_.current.destroyed && _.current.destroy(!0, !1)
						}
				}, []), m(() => {
					X();
					let e = function(e, t, i, s, a) {
						let n = [];
						if (!t) return n;
						let l = e => {
							0 > n.indexOf(e) && n.push(e)
						};
						if (i && s) {
							let e = s.map(a),
								t = i.map(a);
							e.join("") !== t.join("") && l("children"), s.length !== i.length && l("children")
						}
						let o = u.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
						return o.forEach(i => {
							if (i in e && i in t) {
								if (r(e[i]) && r(t[i])) {
									let s = Object.keys(e[i]),
										a = Object.keys(t[i]);
									s.length !== a.length ? l(i) : (s.forEach(s => {
										e[i][s] !== t[i][s] && l(i)
									}), a.forEach(s => {
										e[i][s] !== t[i][s] && l(i)
									}))
								} else e[i] !== t[i] && l(i)
							}
						}), n
					}(j, z.current, R, A.current, e => e.key);
					return z.current = j, A.current = R, e.length && _.current && !_.current.destroyed && function({
						swiper: e,
						slides: t,
						passedParams: i,
						changedParams: s,
						nextEl: a,
						prevEl: l,
						scrollbarEl: o,
						paginationEl: d
					}) {
						let p, u, c, h, f;
						let m = s.filter(e => "children" !== e && "direction" !== e),
							{
								params: g,
								pagination: v,
								navigation: b,
								scrollbar: w,
								virtual: C,
								thumbs: y
							} = e;
						s.includes("thumbs") && i.thumbs && i.thumbs.swiper && g.thumbs && !g.thumbs.swiper && (p = !0), s.includes("controller") && i.controller && i.controller.control && g.controller && !g.controller.control && (u = !0), s.includes("pagination") && i.pagination && (i.pagination.el || d) && (g.pagination || !1 === g.pagination) && v && !v.el && (c = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (g.scrollbar || !1 === g.scrollbar) && w && !w.el && (h = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || a) && (g.navigation || !1 === g.navigation) && b && !b.prevEl && !b.nextEl && (f = !0);
						let T = t => {
							e[t] && (e[t].destroy(), "navigation" === t ? (g[t].prevEl = void 0, g[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (g[t].el = void 0, e[t].el = void 0))
						};
						if (m.forEach(e => {
								if (r(g[e]) && r(i[e])) n(g[e], i[e]);
								else {
									let t = i[e];
									(!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && T(e): g[e] = i[e]
								}
							}), m.includes("controller") && !u && e.controller && e.controller.control && g.controller && g.controller.control && (e.controller.control = g.controller.control), s.includes("children") && t && C && g.virtual.enabled ? (C.slides = t, C.update(!0)) : s.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), p) {
							let e = y.init();
							e && y.update(!0)
						}
						u && (e.controller.control = g.controller.control), c && (d && (g.pagination.el = d), v.init(), v.render(), v.update()), h && (o && (g.scrollbar.el = o), w.init(), w.updateSize(), w.setTranslate()), f && (a && (g.navigation.nextEl = a), l && (g.navigation.prevEl = l), b.init(), b.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), e.update()
					}({
						swiper: _.current,
						slides: R,
						passedParams: j,
						changedParams: e,
						nextEl: D.current,
						prevEl: I.current,
						scrollbarEl: B.current,
						paginationEl: N.current
					}), () => {
						Y()
					}
				}), m(() => {
					f(_.current)
				}, [M]), s.createElement(g, b({
					ref: L,
					className: p(`${E}${i?` ${i}`:""}`)
				}, F), s.createElement(v.Provider, {
					value: _.current
				}, V["container-start"], s.createElement(w, {
					className: "swiper-wrapper"
				}, V["wrapper-start"], G.virtual ? function(e, t, i) {
					if (!i) return null;
					let a = e.isHorizontal() ? {
						[e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
					} : {
						top: `${i.offset}px`
					};
					return t.filter((e, t) => t >= i.from && t <= i.to).map(t => s.cloneElement(t, {
						swiper: e,
						style: a
					}))
				}(_.current, R, M) : !G.loop || _.current && _.current.destroyed ? R.map(e => s.cloneElement(e, {
					swiper: _.current
				})) : function(e, t, i) {
					let a = t.map((t, i) => s.cloneElement(t, {
						swiper: e,
						"data-swiper-slide-index": i
					}));

					function r(e, t, a) {
						return s.cloneElement(e, {
							key: `${e.key}-duplicate-${t}-${a}`,
							className: `${e.props.className||""} ${i.slideDuplicateClass}`
						})
					}
					if (i.loopFillGroupWithBlank) {
						let e = i.slidesPerGroup - a.length % i.slidesPerGroup;
						if (e !== i.slidesPerGroup)
							for (let t = 0; t < e; t += 1) {
								let e = s.createElement("div", {
									className: `${i.slideClass} ${i.slideBlankClass}`
								});
								a.push(e)
							}
					}
					"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length);
					let n = c(a, i),
						l = [],
						o = [];
					for (let e = 0; e < n; e += 1) {
						let t = e - Math.floor(e / a.length) * a.length;
						o.push(r(a[t], e, "append")), l.unshift(r(a[a.length - t - 1], e, "prepend"))
					}
					return e && (e.loopedSlides = n), [...l, ...a, ...o]
				}(_.current, R, G), V["wrapper-end"]), l(G) && s.createElement(s.Fragment, null, s.createElement("div", {
					ref: I,
					className: "swiper-button-prev"
				}), s.createElement("div", {
					ref: D,
					className: "swiper-button-_next"
				})), d(G) && s.createElement("div", {
					ref: B,
					className: "swiper-scrollbar"
				}), o(G) && s.createElement("div", {
					ref: N,
					className: "swiper-pagination"
				}), V["container-end"]))
			});

			function C() {
				return (C = Object.assign ? Object.assign.bind() : function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			w.displayName = "Swiper";
			let y = (0, s.forwardRef)(function(e, t) {
				let {
					tag: i = "div",
					children: a,
					className: r = "",
					swiper: n,
					zoom: l,
					virtualIndex: o,
					...d
				} = void 0 === e ? {} : e, u = (0, s.useRef)(null), [c, h] = (0, s.useState)("swiper-slide");

				function f(e, t, i) {
					t === u.current && h(i)
				}
				m(() => {
					if (t && (t.current = u.current), u.current && n) {
						if (n.destroyed) {
							"swiper-slide" !== c && h("swiper-slide");
							return
						}
						return n.on("_slideClass", f), () => {
							n && n.off("_slideClass", f)
						}
					}
				}), m(() => {
					n && u.current && !n.destroyed && h(n.getSlideClasses(u.current))
				}, [n]);
				let v = {
						isActive: c.indexOf("swiper-slide-active") >= 0 || c.indexOf("swiper-slide-duplicate-active") >= 0,
						isVisible: c.indexOf("swiper-slide-visible") >= 0,
						isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
						isPrev: c.indexOf("swiper-slide-prev") >= 0 || c.indexOf("swiper-slide-duplicate-prev") >= 0,
						isNext: c.indexOf("swiper-slide-_next") >= 0 || c.indexOf("swiper-slide-duplicate-_next") >= 0
					},
					b = () => "function" == typeof a ? a(v) : a;
				return s.createElement(i, C({
					ref: u,
					className: p(`${c}${r?` ${r}`:""}`),
					"data-swiper-slide-index": o
				}, d), s.createElement(g.Provider, {
					value: v
				}, l ? s.createElement("div", {
					className: "swiper-zoom-container",
					"data-swiper-zoom": "number" == typeof l ? l : void 0
				}, b()) : b()))
			});
			y.displayName = "SwiperSlide"
		},
		8116: function(e, t, i) {
			"use strict";
			let s, a, r;

			function n(e) {
				return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
			}

			function l(e = {}, t = {}) {
				Object.keys(t).forEach(i => {
					void 0 === e[i] ? e[i] = t[i] : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 && l(e[i], t[i])
				})
			}
			i.d(t, {
				pt: function() {
					return X
				},
				xW: function() {
					return Y
				},
				Gk: function() {
					return H
				},
				W_: function() {
					return V
				},
				tl: function() {
					return q
				},
				ZP: function() {
					return F
				}
			});
			let o = {
				body: {},
				addEventListener() {},
				removeEventListener() {},
				activeElement: {
					blur() {},
					nodeName: ""
				},
				querySelector: () => null,
				querySelectorAll: () => [],
				getElementById: () => null,
				createEvent: () => ({
					initEvent() {}
				}),
				createElement: () => ({
					children: [],
					childNodes: [],
					style: {},
					setAttribute() {},
					getElementsByTagName: () => []
				}),
				createElementNS: () => ({}),
				importNode: () => null,
				location: {
					hash: "",
					host: "",
					hostname: "",
					href: "",
					origin: "",
					pathname: "",
					protocol: "",
					search: ""
				}
			};

			function d() {
				let e = "undefined" != typeof document ? document : {};
				return l(e, o), e
			}
			let p = {
				document: o,
				navigator: {
					userAgent: ""
				},
				location: {
					hash: "",
					host: "",
					hostname: "",
					href: "",
					origin: "",
					pathname: "",
					protocol: "",
					search: ""
				},
				history: {
					replaceState() {},
					pushState() {},
					go() {},
					back() {}
				},
				CustomEvent: function() {
					return this
				},
				addEventListener() {},
				removeEventListener() {},
				getComputedStyle: () => ({
					getPropertyValue: () => ""
				}),
				Image() {},
				Date() {},
				screen: {},
				setTimeout() {},
				clearTimeout() {},
				matchMedia: () => ({}),
				requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
				cancelAnimationFrame(e) {
					"undefined" != typeof setTimeout && clearTimeout(e)
				}
			};

			function u() {
				let e = "undefined" != typeof window ? window : {};
				return l(e, p), e
			}
			class c extends Array {
				constructor(e) {
					"number" == typeof e ? super(e) : (super(...e || []), function(e) {
						let t = e.__proto__;
						Object.defineProperty(e, "__proto__", {
							get: () => t,
							set(e) {
								t.__proto__ = e
							}
						})
					}(this))
				}
			}

			function h(e = []) {
				let t = [];
				return e.forEach(e => {
					Array.isArray(e) ? t.push(...h(e)) : t.push(e)
				}), t
			}

			function f(e, t) {
				return Array.prototype.filter.call(e, t)
			}

			function m(e, t) {
				let i = u(),
					s = d(),
					a = [];
				if (!t && e instanceof c) return e;
				if (!e) return new c(a);
				if ("string" == typeof e) {
					let i = e.trim();
					if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
						let e = "div";
						0 === i.indexOf("<li") && (e = "ul"), 0 === i.indexOf("<tr") && (e = "tbody"), (0 === i.indexOf("<td") || 0 === i.indexOf("<th")) && (e = "tr"), 0 === i.indexOf("<tbody") && (e = "table"), 0 === i.indexOf("<option") && (e = "select");
						let t = s.createElement(e);
						t.innerHTML = i;
						for (let e = 0; e < t.childNodes.length; e += 1) a.push(t.childNodes[e])
					} else a = function(e, t) {
						if ("string" != typeof e) return [e];
						let i = [],
							s = t.querySelectorAll(e);
						for (let e = 0; e < s.length; e += 1) i.push(s[e]);
						return i
					}(e.trim(), t || s)
				} else if (e.nodeType || e === i || e === s) a.push(e);
				else if (Array.isArray(e)) {
					if (e instanceof c) return e;
					a = e
				}
				return new c(function(e) {
					let t = [];
					for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
					return t
				}(a))
			}
			m.fn = c.prototype;
			let g = "resize scroll".split(" ");

			function v(e) {
				return function(...t) {
					if (void 0 === t[0]) {
						for (let t = 0; t < this.length; t += 1) 0 > g.indexOf(e) && (e in this[t] ? this[t][e]() : m(this[t]).trigger(e));
						return this
					}
					return this.on(e, ...t)
				}
			}
			v("click"), v("blur"), v("focus"), v("focusin"), v("focusout"), v("keyup"), v("keydown"), v("keypress"), v("submit"), v("change"), v("mousedown"), v("mousemove"), v("mouseup"), v("mouseenter"), v("mouseleave"), v("mouseout"), v("mouseover"), v("touchstart"), v("touchend"), v("touchmove"), v("resize"), v("scroll");
			let b = {
				addClass: function(...e) {
					let t = h(e.map(e => e.split(" ")));
					return this.forEach(e => {
						e.classList.add(...t)
					}), this
				},
				removeClass: function(...e) {
					let t = h(e.map(e => e.split(" ")));
					return this.forEach(e => {
						e.classList.remove(...t)
					}), this
				},
				hasClass: function(...e) {
					let t = h(e.map(e => e.split(" ")));
					return f(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
				},
				toggleClass: function(...e) {
					let t = h(e.map(e => e.split(" ")));
					this.forEach(e => {
						t.forEach(t => {
							e.classList.toggle(t)
						})
					})
				},
				attr: function(e, t) {
					if (1 == arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
					for (let i = 0; i < this.length; i += 1)
						if (2 == arguments.length) this[i].setAttribute(e, t);
						else
							for (let t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
					return this
				},
				removeAttr: function(e) {
					for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
					return this
				},
				transform: function(e) {
					for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
					return this
				},
				transition: function(e) {
					for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
					return this
				},
				on: function(...e) {
					let t, [i, s, a, r] = e;

					function n(e) {
						let t = e.target;
						if (!t) return;
						let i = e.target.dom7EventData || [];
						if (0 > i.indexOf(e) && i.unshift(e), m(t).is(s)) a.apply(t, i);
						else {
							let e = m(t).parents();
							for (let t = 0; t < e.length; t += 1) m(e[t]).is(s) && a.apply(e[t], i)
						}
					}

					function l(e) {
						let t = e && e.target && e.target.dom7EventData || [];
						0 > t.indexOf(e) && t.unshift(e), a.apply(this, t)
					}
					"function" == typeof e[1] && ([i, a, r] = e, s = void 0), r || (r = !1);
					let o = i.split(" ");
					for (let e = 0; e < this.length; e += 1) {
						let i = this[e];
						if (s)
							for (t = 0; t < o.length; t += 1) {
								let e = o[t];
								i.dom7LiveListeners || (i.dom7LiveListeners = {}), i.dom7LiveListeners[e] || (i.dom7LiveListeners[e] = []), i.dom7LiveListeners[e].push({
									listener: a,
									proxyListener: n
								}), i.addEventListener(e, n, r)
							} else
								for (t = 0; t < o.length; t += 1) {
									let e = o[t];
									i.dom7Listeners || (i.dom7Listeners = {}), i.dom7Listeners[e] || (i.dom7Listeners[e] = []), i.dom7Listeners[e].push({
										listener: a,
										proxyListener: l
									}), i.addEventListener(e, l, r)
								}
					}
					return this
				},
				off: function(...e) {
					let [t, i, s, a] = e;
					"function" == typeof e[1] && ([t, s, a] = e, i = void 0), a || (a = !1);
					let r = t.split(" ");
					for (let e = 0; e < r.length; e += 1) {
						let t = r[e];
						for (let e = 0; e < this.length; e += 1) {
							let r;
							let n = this[e];
							if (!i && n.dom7Listeners ? r = n.dom7Listeners[t] : i && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]), r && r.length)
								for (let e = r.length - 1; e >= 0; e -= 1) {
									let i = r[e];
									s && i.listener === s ? (n.removeEventListener(t, i.proxyListener, a), r.splice(e, 1)) : s && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === s ? (n.removeEventListener(t, i.proxyListener, a), r.splice(e, 1)) : s || (n.removeEventListener(t, i.proxyListener, a), r.splice(e, 1))
								}
						}
					}
					return this
				},
				trigger: function(...e) {
					let t = u(),
						i = e[0].split(" "),
						s = e[1];
					for (let a = 0; a < i.length; a += 1) {
						let r = i[a];
						for (let i = 0; i < this.length; i += 1) {
							let a = this[i];
							if (t.CustomEvent) {
								let i = new t.CustomEvent(r, {
									detail: s,
									bubbles: !0,
									cancelable: !0
								});
								a.dom7EventData = e.filter((e, t) => t > 0), a.dispatchEvent(i), a.dom7EventData = [], delete a.dom7EventData
							}
						}
					}
					return this
				},
				transitionEnd: function(e) {
					let t = this;
					return e && t.on("transitionend", function i(s) {
						s.target === this && (e.call(this, s), t.off("transitionend", i))
					}), this
				},
				outerWidth: function(e) {
					if (this.length > 0) {
						if (e) {
							let e = this.styles();
							return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
						}
						return this[0].offsetWidth
					}
					return null
				},
				outerHeight: function(e) {
					if (this.length > 0) {
						if (e) {
							let e = this.styles();
							return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
						}
						return this[0].offsetHeight
					}
					return null
				},
				styles: function() {
					let e = u();
					return this[0] ? e.getComputedStyle(this[0], null) : {}
				},
				offset: function() {
					if (this.length > 0) {
						let e = u(),
							t = d(),
							i = this[0],
							s = i.getBoundingClientRect(),
							a = t.body,
							r = i.clientTop || a.clientTop || 0,
							n = i.clientLeft || a.clientLeft || 0,
							l = i === e ? e.scrollY : i.scrollTop,
							o = i === e ? e.scrollX : i.scrollLeft;
						return {
							top: s.top + l - r,
							left: s.left + o - n
						}
					}
					return null
				},
				css: function(e, t) {
					let i;
					let s = u();
					if (1 == arguments.length) {
						if ("string" == typeof e) {
							if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
						} else {
							for (i = 0; i < this.length; i += 1)
								for (let t in e) this[i].style[t] = e[t];
							return this
						}
					}
					if (2 == arguments.length && "string" == typeof e)
						for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
					return this
				},
				each: function(e) {
					return e && this.forEach((t, i) => {
						e.apply(t, [t, i])
					}), this
				},
				html: function(e) {
					if (void 0 === e) return this[0] ? this[0].innerHTML : null;
					for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
					return this
				},
				text: function(e) {
					if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
					for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
					return this
				},
				is: function(e) {
					let t, i;
					let s = u(),
						a = d(),
						r = this[0];
					if (!r || void 0 === e) return !1;
					if ("string" == typeof e) {
						if (r.matches) return r.matches(e);
						if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
						if (r.msMatchesSelector) return r.msMatchesSelector(e);
						for (i = 0, t = m(e); i < t.length; i += 1)
							if (t[i] === r) return !0;
						return !1
					}
					if (e === a) return r === a;
					if (e === s) return r === s;
					if (e.nodeType || e instanceof c) {
						for (i = 0, t = e.nodeType ? [e] : e; i < t.length; i += 1)
							if (t[i] === r) return !0
					}
					return !1
				},
				index: function() {
					let e, t = this[0];
					if (t) {
						for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
						return e
					}
				},
				eq: function(e) {
					if (void 0 === e) return this;
					let t = this.length;
					if (e > t - 1) return m([]);
					if (e < 0) {
						let i = t + e;
						return i < 0 ? m([]) : m([this[i]])
					}
					return m([this[e]])
				},
				append: function(...e) {
					let t;
					let i = d();
					for (let s = 0; s < e.length; s += 1) {
						t = e[s];
						for (let e = 0; e < this.length; e += 1)
							if ("string" == typeof t) {
								let s = i.createElement("div");
								for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
							} else if (t instanceof c)
							for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
						else this[e].appendChild(t)
					}
					return this
				},
				prepend: function(e) {
					let t, i;
					let s = d();
					for (t = 0; t < this.length; t += 1)
						if ("string" == typeof e) {
							let a = s.createElement("div");
							for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
						} else if (e instanceof c)
						for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
					else this[t].insertBefore(e, this[t].childNodes[0]);
					return this
				},
				next: function(e) {
					if (this.length > 0) {
						if (e) return this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]);
						if (this[0].nextElementSibling) return m([this[0].nextElementSibling])
					}
					return m([])
				},
				nextAll: function(e) {
					let t = [],
						i = this[0];
					if (!i) return m([]);
					for (; i.nextElementSibling;) {
						let s = i.nextElementSibling;
						e ? m(s).is(e) && t.push(s) : t.push(s), i = s
					}
					return m(t)
				},
				prev: function(e) {
					if (this.length > 0) {
						let t = this[0];
						if (e) return t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]);
						if (t.previousElementSibling) return m([t.previousElementSibling])
					}
					return m([])
				},
				prevAll: function(e) {
					let t = [],
						i = this[0];
					if (!i) return m([]);
					for (; i.previousElementSibling;) {
						let s = i.previousElementSibling;
						e ? m(s).is(e) && t.push(s) : t.push(s), i = s
					}
					return m(t)
				},
				parent: function(e) {
					let t = [];
					for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
					return m(t)
				},
				parents: function(e) {
					let t = [];
					for (let i = 0; i < this.length; i += 1) {
						let s = this[i].parentNode;
						for (; s;) e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
					}
					return m(t)
				},
				closest: function(e) {
					let t = this;
					return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
				},
				find: function(e) {
					let t = [];
					for (let i = 0; i < this.length; i += 1) {
						let s = this[i].querySelectorAll(e);
						for (let e = 0; e < s.length; e += 1) t.push(s[e])
					}
					return m(t)
				},
				children: function(e) {
					let t = [];
					for (let i = 0; i < this.length; i += 1) {
						let s = this[i].children;
						for (let i = 0; i < s.length; i += 1)(!e || m(s[i]).is(e)) && t.push(s[i])
					}
					return m(t)
				},
				filter: function(e) {
					let t = f(this, e);
					return m(t)
				},
				remove: function() {
					for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
					return this
				}
			};

			function w(e, t = 0) {
				return setTimeout(e, t)
			}

			function C() {
				return Date.now()
			}

			function y(e) {
				return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
			}

			function T(...e) {
				let t = Object(e[0]),
					i = ["__proto__", "constructor", "prototype"];
				for (let s = 1; s < e.length; s += 1) {
					let a = e[s];
					if (null != a && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(a instanceof HTMLElement) : !a || 1 !== a.nodeType && 11 !== a.nodeType)) {
						let e = Object.keys(Object(a)).filter(e => 0 > i.indexOf(e));
						for (let i = 0, s = e.length; i < s; i += 1) {
							let s = e[i],
								r = Object.getOwnPropertyDescriptor(a, s);
							void 0 !== r && r.enumerable && (y(t[s]) && y(a[s]) ? a[s].__swiper__ ? t[s] = a[s] : T(t[s], a[s]) : !y(t[s]) && y(a[s]) ? (t[s] = {}, a[s].__swiper__ ? t[s] = a[s] : T(t[s], a[s])) : t[s] = a[s])
						}
					}
				}
				return t
			}

			function S(e, t, i) {
				e.style.setProperty(t, i)
			}

			function E({
				swiper: e,
				targetPosition: t,
				side: i
			}) {
				let s;
				let a = u(),
					r = -e.translate,
					n = null,
					l = e.params.speed;
				e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
				let o = t > r ? "next" : "prev",
					d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
					p = () => {
						s = new Date().getTime(), null === n && (n = s);
						let o = Math.max(Math.min((s - n) / l, 1), 0),
							u = r + (.5 - Math.cos(o * Math.PI) / 2) * (t - r);
						if (d(u, t) && (u = t), e.wrapperEl.scrollTo({
								[i]: u
							}), d(u, t)) {
							e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
								e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
									[i]: u
								})
							}), a.cancelAnimationFrame(e.cssModeFrameID);
							return
						}
						e.cssModeFrameID = a.requestAnimationFrame(p)
					};
				p()
			}

			function x() {
				return s || (s = function() {
					let e = u(),
						t = d();
					return {
						smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
						touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
						passiveListener: function() {
							let t = !1;
							try {
								let i = Object.defineProperty({}, "passive", {
									get() {
										t = !0
									}
								});
								e.addEventListener("testPassiveListener", null, i)
							} catch (e) {}
							return t
						}(),
						gestures: "ongesturestart" in e
					}
				}()), s
			}

			function M({
				swiper: e,
				runCallbacks: t,
				direction: i,
				step: s
			}) {
				let {
					activeIndex: a,
					previousIndex: r
				} = e, n = i;
				if (n || (n = a > r ? "next" : a < r ? "prev" : "reset"), e.emit(`transition${s}`), t && a !== r) {
					if ("reset" === n) {
						e.emit(`slideResetTransition${s}`);
						return
					}
					e.emit(`slideChangeTransition${s}`), "next" === n ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
				}
			}

			function k(e) {
				let t = this,
					i = d(),
					s = u(),
					a = t.touchEventsData,
					{
						params: r,
						touches: n,
						enabled: l
					} = t;
				if (!l || t.animating && r.preventInteractionOnTransition) return;
				!t.animating && r.cssMode && r.loop && t.loopFix();
				let o = e;
				o.originalEvent && (o = o.originalEvent);
				let p = m(o.target);
				if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length || (a.isTouchEvent = "touchstart" === o.type, !a.isTouchEvent && "which" in o && 3 === o.which || !a.isTouchEvent && "button" in o && o.button > 0 || a.isTouched && a.isMoved)) return;
				let c = !!r.noSwipingClass && "" !== r.noSwipingClass,
					h = e.composedPath ? e.composedPath() : e.path;
				c && o.target && o.target.shadowRoot && h && (p = m(h[0]));
				let f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
					g = !!(o.target && o.target.shadowRoot);
				if (r.noSwiping && (g ? function(e, t = this) {
						return function t(i) {
							if (!i || i === d() || i === u()) return null;
							i.assignedSlot && (i = i.assignedSlot);
							let s = i.closest(e);
							return s || i.getRootNode ? s || t(i.getRootNode().host) : null
						}(t)
					}(f, p[0]) : p.closest(f)[0])) {
					t.allowClick = !0;
					return
				}
				if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
				n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
				let v = n.currentX,
					b = n.currentY,
					w = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
					y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
				if (w && (v <= y || v >= s.innerWidth - y)) {
					if ("prevent" !== w) return;
					e.preventDefault()
				}
				if (Object.assign(a, {
						isTouched: !0,
						isMoved: !1,
						allowTouchCallbacks: !0,
						isScrolling: void 0,
						startMoving: void 0
					}), n.startX = v, n.startY = b, a.touchStartTime = C(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
					let e = !0;
					p.is(a.focusableElements) && (e = !1, "SELECT" === p[0].nodeName && (a.isTouched = !1)), i.activeElement && m(i.activeElement).is(a.focusableElements) && i.activeElement !== p[0] && i.activeElement.blur();
					let s = e && t.allowTouchMove && r.touchStartPreventDefault;
					(r.touchStartForcePreventDefault || s) && !p[0].isContentEditable && o.preventDefault()
				}
				t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o)
			}

			function P(e) {
				let t = d(),
					i = this,
					s = i.touchEventsData,
					{
						params: a,
						touches: r,
						rtlTranslate: n,
						enabled: l
					} = i;
				if (!l) return;
				let o = e;
				if (o.originalEvent && (o = o.originalEvent), !s.isTouched) {
					s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
					return
				}
				if (s.isTouchEvent && "touchmove" !== o.type) return;
				let p = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
					u = "touchmove" === o.type ? p.pageX : o.pageX,
					c = "touchmove" === o.type ? p.pageY : o.pageY;
				if (o.preventedByNestedSwiper) {
					r.startX = u, r.startY = c;
					return
				}
				if (!i.allowTouchMove) {
					m(o.target).is(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(r, {
						startX: u,
						startY: c,
						currentX: u,
						currentY: c
					}), s.touchStartTime = C());
					return
				}
				if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
					if (i.isVertical()) {
						if (c < r.startY && i.translate <= i.maxTranslate() || c > r.startY && i.translate >= i.minTranslate()) {
							s.isTouched = !1, s.isMoved = !1;
							return
						}
					} else if (u < r.startX && i.translate <= i.maxTranslate() || u > r.startX && i.translate >= i.minTranslate()) return
				}
				if (s.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(s.focusableElements)) {
					s.isMoved = !0, i.allowClick = !1;
					return
				}
				if (s.allowTouchCallbacks && i.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
				r.currentX = u, r.currentY = c;
				let h = r.currentX - r.startX,
					f = r.currentY - r.startY;
				if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold) return;
				if (void 0 === s.isScrolling) {
					let e;
					i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, s.isScrolling = i.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
				}
				if (s.isScrolling && i.emit("touchMoveOpposite", o), void 0 === s.startMoving && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling) {
					s.isTouched = !1;
					return
				}
				if (!s.startMoving) return;
				i.allowClick = !1, !a.cssMode && o.cancelable && o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), s.isMoved || (a.loop && !a.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, a.grabCursor && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), s.isMoved = !0;
				let g = i.isHorizontal() ? h : f;
				r.diff = g, g *= a.touchRatio, n && (g = -g), i.swipeDirection = g > 0 ? "prev" : "next", s.currentTranslate = g + s.startTranslate;
				let v = !0,
					b = a.resistanceRatio;
				if (a.touchReleaseOnEdges && (b = 0), g > 0 && s.currentTranslate > i.minTranslate() ? (v = !1, a.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + g) ** b)) : g < 0 && s.currentTranslate < i.maxTranslate() && (v = !1, a.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - g) ** b)), v && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), a.threshold > 0) {
					if (Math.abs(g) > a.threshold || s.allowThresholdMove) {
						if (!s.allowThresholdMove) {
							s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
							return
						}
					} else {
						s.currentTranslate = s.startTranslate;
						return
					}
				}
				a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && i.freeMode || a.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
			}

			function $(e) {
				let t;
				let i = this,
					s = i.touchEventsData,
					{
						params: a,
						touches: r,
						rtlTranslate: n,
						slidesGrid: l,
						enabled: o
					} = i;
				if (!o) return;
				let d = e;
				if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) {
					s.isMoved && a.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
					return
				}
				a.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
				let p = C(),
					u = p - s.touchStartTime;
				if (i.allowClick) {
					let e = d.path || d.composedPath && d.composedPath();
					i.updateClickedSlide(e && e[0] || d.target), i.emit("tap click", d), u < 300 && p - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", d)
				}
				if (s.lastClickTime = C(), w(() => {
						i.destroyed || (i.allowClick = !0)
					}), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) {
					s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
					return
				}
				if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = a.followFinger ? n ? i.translate : -i.translate : -s.currentTranslate, a.cssMode) return;
				if (i.params.freeMode && a.freeMode.enabled) {
					i.freeMode.onTouchEnd({
						currentPos: t
					});
					return
				}
				let c = 0,
					h = i.slidesSizesGrid[0];
				for (let e = 0; e < l.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
					let i = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
					void 0 !== l[e + i] ? t >= l[e] && t < l[e + i] && (c = e, h = l[e + i] - l[e]) : t >= l[e] && (c = e, h = l[l.length - 1] - l[l.length - 2])
				}
				let f = null,
					m = null;
				a.rewind && (i.isBeginning ? m = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (f = 0));
				let g = (t - l[c]) / h,
					v = c < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
				if (u > a.longSwipesMs) {
					if (!a.longSwipes) {
						i.slideTo(i.activeIndex);
						return
					}
					"next" === i.swipeDirection && (g >= a.longSwipesRatio ? i.slideTo(a.rewind && i.isEnd ? f : c + v) : i.slideTo(c)), "prev" === i.swipeDirection && (g > 1 - a.longSwipesRatio ? i.slideTo(c + v) : null !== m && g < 0 && Math.abs(g) > a.longSwipesRatio ? i.slideTo(m) : i.slideTo(c))
				} else {
					if (!a.shortSwipes) {
						i.slideTo(i.activeIndex);
						return
					}
					let e = i.navigation && (d.target === i.navigation.nextEl || d.target === i.navigation.prevEl);
					e ? d.target === i.navigation.nextEl ? i.slideTo(c + v) : i.slideTo(c) : ("next" === i.swipeDirection && i.slideTo(null !== f ? f : c + v), "prev" === i.swipeDirection && i.slideTo(null !== m ? m : c))
				}
			}

			function O() {
				let e = this,
					{
						params: t,
						el: i
					} = e;
				if (i && 0 === i.offsetWidth) return;
				t.breakpoints && e.setBreakpoint();
				let {
					allowSlideNext: s,
					allowSlidePrev: a,
					snapGrid: r
				} = e;
				e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = a, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
			}

			function L(e) {
				this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
			}

			function _() {
				let e = this,
					{
						wrapperEl: t,
						rtlTranslate: i,
						enabled: s
					} = e;
				if (!s) return;
				e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
				let a = e.maxTranslate() - e.minTranslate();
				(0 === a ? 0 : (e.translate - e.minTranslate()) / a) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
			}
			Object.keys(b).forEach(e => {
				Object.defineProperty(m.fn, e, {
					value: b[e],
					writable: !0
				})
			});
			let z = !1;

			function A() {}
			let D = (e, t) => {
					let i = d(),
						{
							params: s,
							touchEvents: a,
							el: r,
							wrapperEl: n,
							device: l,
							support: o
						} = e,
						p = !!s.nested,
						u = "on" === t ? "addEventListener" : "removeEventListener";
					if (o.touch) {
						let t = "touchstart" === a.start && !!o.passiveListener && !!s.passiveListeners && {
							passive: !0,
							capture: !1
						};
						r[u](a.start, e.onTouchStart, t), r[u](a.move, e.onTouchMove, o.passiveListener ? {
							passive: !1,
							capture: p
						} : p), r[u](a.end, e.onTouchEnd, t), a.cancel && r[u](a.cancel, e.onTouchEnd, t)
					} else r[u](a.start, e.onTouchStart, !1), i[u](a.move, e.onTouchMove, p), i[u](a.end, e.onTouchEnd, !1);
					(s.preventClicks || s.preventClicksPropagation) && r[u]("click", e.onClick, !0), s.cssMode && n[u]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e[t]("observerUpdate", O, !0)
				},
				I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
			var N = {
				init: !0,
				direction: "horizontal",
				touchEventsTarget: "wrapper",
				initialSlide: 0,
				speed: 300,
				cssMode: !1,
				updateOnWindowResize: !0,
				resizeObserver: !0,
				nested: !1,
				createElements: !1,
				enabled: !0,
				focusableElements: "input, select, option, textarea, button, video, label",
				width: null,
				height: null,
				preventInteractionOnTransition: !1,
				userAgent: null,
				url: null,
				edgeSwipeDetection: !1,
				edgeSwipeThreshold: 20,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				breakpoints: void 0,
				breakpointsBase: "window",
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerGroup: 1,
				slidesPerGroupSkip: 0,
				slidesPerGroupAuto: !1,
				centeredSlides: !1,
				centeredSlidesBounds: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				normalizeSlideIndex: !0,
				centerInsufficientSlides: !1,
				watchOverflow: !0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				allowTouchMove: !0,
				threshold: 0,
				touchMoveStopPropagation: !1,
				touchStartPreventDefault: !0,
				touchStartForcePreventDefault: !1,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				resistance: !0,
				resistanceRatio: .85,
				watchSlidesProgress: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				loopedSlidesLimit: !0,
				loopFillGroupWithBlank: !1,
				loopPreventsSlide: !0,
				rewind: !1,
				allowSlidePrev: !0,
				allowSlideNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				noSwipingSelector: null,
				passiveListeners: !0,
				maxBackfaceHiddenSlides: 10,
				containerModifierClass: "swiper-",
				slideClass: "swiper-slide",
				slideBlankClass: "swiper-slide-invisible-blank",
				slideActiveClass: "swiper-slide-active",
				slideDuplicateActiveClass: "swiper-slide-duplicate-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-_next",
				slideDuplicateNextClass: "swiper-slide-duplicate-_next",
				slidePrevClass: "swiper-slide-prev",
				slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
				wrapperClass: "swiper-wrapper",
				runCallbacksOnInit: !0,
				_emitClasses: !1
			};
			let B = {
					eventsEmitter: {
						on(e, t, i) {
							let s = this;
							if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
							let a = i ? "unshift" : "push";
							return e.split(" ").forEach(e => {
								s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
							}), s
						},
						once(e, t, i) {
							let s = this;
							if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

							function a(...i) {
								s.off(e, a), a.__emitterProxy && delete a.__emitterProxy, t.apply(s, i)
							}
							return a.__emitterProxy = t, s.on(e, a, i)
						},
						onAny(e, t) {
							return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
						},
						offAny(e) {
							if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
							let t = this.eventsAnyListeners.indexOf(e);
							return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
						},
						off(e, t) {
							let i = this;
							return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
								void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, a) => {
									(s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
								})
							}), i
						},
						emit(...e) {
							let t, i, s;
							let a = this;
							if (!a.eventsListeners || a.destroyed || !a.eventsListeners) return a;
							"string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), s = a) : (t = e[0].events, i = e[0].data, s = e[0].context || a), i.unshift(s);
							let r = Array.isArray(t) ? t : t.split(" ");
							return r.forEach(e => {
								a.eventsAnyListeners && a.eventsAnyListeners.length && a.eventsAnyListeners.forEach(t => {
									t.apply(s, [e, ...i])
								}), a.eventsListeners && a.eventsListeners[e] && a.eventsListeners[e].forEach(e => {
									e.apply(s, i)
								})
							}), a
						}
					},
					update: {
						updateSize: function() {
							let e, t;
							let i = this.$el;
							e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
								width: e,
								height: t,
								size: this.isHorizontal() ? e : t
							}))
						},
						updateSlides: function() {
							let e;
							let t = this;

							function i(e) {
								return t.isHorizontal() ? e : ({
									width: "height",
									"margin-top": "margin-left",
									"margin-bottom ": "margin-right",
									"margin-left": "margin-top",
									"margin-right": "margin-bottom",
									"padding-left": "padding-top",
									"padding-right": "padding-bottom",
									marginRight: "marginBottom"
								})[e]
							}

							function s(e, t) {
								return parseFloat(e.getPropertyValue(i(t)) || 0)
							}
							let a = t.params,
								{
									$wrapperEl: r,
									size: n,
									rtlTranslate: l,
									wrongRTL: o
								} = t,
								d = t.virtual && a.virtual.enabled,
								p = d ? t.virtual.slides.length : t.slides.length,
								u = r.children(`.${t.params.slideClass}`),
								c = d ? t.virtual.slides.length : u.length,
								h = [],
								f = [],
								m = [],
								g = a.slidesOffsetBefore;
							"function" == typeof g && (g = a.slidesOffsetBefore.call(t));
							let v = a.slidesOffsetAfter;
							"function" == typeof v && (v = a.slidesOffsetAfter.call(t));
							let b = t.snapGrid.length,
								w = t.slidesGrid.length,
								C = a.spaceBetween,
								y = -g,
								T = 0,
								E = 0;
							if (void 0 === n) return;
							"string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * n), t.virtualSize = -C, l ? u.css({
								marginLeft: "",
								marginBottom: "",
								marginTop: ""
							}) : u.css({
								marginRight: "",
								marginBottom: "",
								marginTop: ""
							}), a.centeredSlides && a.cssMode && (S(t.wrapperEl, "--swiper-centered-offset-before", ""), S(t.wrapperEl, "--swiper-centered-offset-after", ""));
							let x = a.grid && a.grid.rows > 1 && t.grid;
							x && t.grid.initSlides(c);
							let M = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(e => void 0 !== a.breakpoints[e].slidesPerView).length > 0;
							for (let r = 0; r < c; r += 1) {
								e = 0;
								let l = u.eq(r);
								if (x && t.grid.updateSlide(r, l, c, i), "none" !== l.css("display")) {
									if ("auto" === a.slidesPerView) {
										M && (u[r].style[i("width")] = "");
										let n = getComputedStyle(l[0]),
											o = l[0].style.transform,
											d = l[0].style.webkitTransform;
										if (o && (l[0].style.transform = "none"), d && (l[0].style.webkitTransform = "none"), a.roundLengths) e = t.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0);
										else {
											let t = s(n, "width"),
												i = s(n, "padding-left"),
												a = s(n, "padding-right"),
												r = s(n, "margin-left"),
												o = s(n, "margin-right"),
												d = n.getPropertyValue("box-sizing");
											if (d && "border-box" === d) e = t + r + o;
											else {
												let {
													clientWidth: s,
													offsetWidth: n
												} = l[0];
												e = t + i + a + r + o + (n - s)
											}
										}
										o && (l[0].style.transform = o), d && (l[0].style.webkitTransform = d), a.roundLengths && (e = Math.floor(e))
									} else e = (n - (a.slidesPerView - 1) * C) / a.slidesPerView, a.roundLengths && (e = Math.floor(e)), u[r] && (u[r].style[i("width")] = `${e}px`);
									u[r] && (u[r].swiperSlideSize = e), m.push(e), a.centeredSlides ? (y = y + e / 2 + T / 2 + C, 0 === T && 0 !== r && (y = y - n / 2 - C), 0 === r && (y = y - n / 2 - C), .001 > Math.abs(y) && (y = 0), a.roundLengths && (y = Math.floor(y)), E % a.slidesPerGroup == 0 && h.push(y), f.push(y)) : (a.roundLengths && (y = Math.floor(y)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && h.push(y), f.push(y), y = y + e + C), t.virtualSize += e + C, T = e, E += 1
								}
							}
							if (t.virtualSize = Math.max(t.virtualSize, n) + v, l && o && ("slide" === a.effect || "coverflow" === a.effect) && r.css({
									width: `${t.virtualSize+a.spaceBetween}px`
								}), a.setWrapperSize && r.css({
									[i("width")]: `${t.virtualSize+a.spaceBetween}px`
								}), x && t.grid.updateWrapperSize(e, h, i), !a.centeredSlides) {
								let e = [];
								for (let i = 0; i < h.length; i += 1) {
									let s = h[i];
									a.roundLengths && (s = Math.floor(s)), h[i] <= t.virtualSize - n && e.push(s)
								}
								h = e, Math.floor(t.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - n)
							}
							if (0 === h.length && (h = [0]), 0 !== a.spaceBetween) {
								let e = t.isHorizontal() && l ? "marginLeft" : i("marginRight");
								u.filter((e, t) => !a.cssMode || t !== u.length - 1).css({
									[e]: `${C}px`
								})
							}
							if (a.centeredSlides && a.centeredSlidesBounds) {
								let e = 0;
								m.forEach(t => {
									e += t + (a.spaceBetween ? a.spaceBetween : 0)
								}), e -= a.spaceBetween;
								let t = e - n;
								h = h.map(e => e < 0 ? -g : e > t ? t + v : e)
							}
							if (a.centerInsufficientSlides) {
								let e = 0;
								if (m.forEach(t => {
										e += t + (a.spaceBetween ? a.spaceBetween : 0)
									}), (e -= a.spaceBetween) < n) {
									let t = (n - e) / 2;
									h.forEach((e, i) => {
										h[i] = e - t
									}), f.forEach((e, i) => {
										f[i] = e + t
									})
								}
							}
							if (Object.assign(t, {
									slides: u,
									snapGrid: h,
									slidesGrid: f,
									slidesSizesGrid: m
								}), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
								S(t.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`), S(t.wrapperEl, "--swiper-centered-offset-after", `${t.size/2-m[m.length-1]/2}px`);
								let e = -t.snapGrid[0],
									i = -t.slidesGrid[0];
								t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
							}
							if (c !== p && t.emit("slidesLengthChange"), h.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== w && t.emit("slidesGridLengthChange"), a.watchSlidesProgress && t.updateSlidesOffset(), !d && !a.cssMode && ("slide" === a.effect || "fade" === a.effect)) {
								let e = `${a.containerModifierClass}backface-hidden`,
									i = t.$el.hasClass(e);
								c <= a.maxBackfaceHiddenSlides ? i || t.$el.addClass(e) : i && t.$el.removeClass(e)
							}
						},
						updateAutoHeight: function(e) {
							let t;
							let i = this,
								s = [],
								a = i.virtual && i.params.virtual.enabled,
								r = 0;
							"number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
							let n = e => a ? i.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : i.slides.eq(e)[0];
							if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
								if (i.params.centeredSlides)(i.visibleSlides || m([])).each(e => {
									s.push(e)
								});
								else
									for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
										let e = i.activeIndex + t;
										if (e > i.slides.length && !a) break;
										s.push(n(e))
									}
							} else s.push(n(i.activeIndex));
							for (t = 0; t < s.length; t += 1)
								if (void 0 !== s[t]) {
									let e = s[t].offsetHeight;
									r = e > r ? e : r
								}(r || 0 === r) && i.$wrapperEl.css("height", `${r}px`)
						},
						updateSlidesOffset: function() {
							let e = this.slides;
							for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
						},
						updateSlidesProgress: function(e = this && this.translate || 0) {
							let t = this,
								i = t.params,
								{
									slides: s,
									rtlTranslate: a,
									snapGrid: r
								} = t;
							if (0 === s.length) return;
							void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
							let n = -e;
							a && (n = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
							for (let e = 0; e < s.length; e += 1) {
								let l = s[e],
									o = l.swiperSlideOffset;
								i.cssMode && i.centeredSlides && (o -= s[0].swiperSlideOffset);
								let d = (n + (i.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + i.spaceBetween),
									p = (n - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + i.spaceBetween),
									u = -(n - o),
									c = u + t.slidesSizesGrid[e],
									h = u >= 0 && u < t.size - 1 || c > 1 && c <= t.size || u <= 0 && c >= t.size;
								h && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(i.slideVisibleClass)), l.progress = a ? -d : d, l.originalProgress = a ? -p : p
							}
							t.visibleSlides = m(t.visibleSlides)
						},
						updateProgress: function(e) {
							if (void 0 === e) {
								let t = this.rtlTranslate ? -1 : 1;
								e = this && this.translate && this.translate * t || 0
							}
							let t = this.params,
								i = this.maxTranslate() - this.minTranslate(),
								{
									progress: s,
									isBeginning: a,
									isEnd: r
								} = this,
								n = a,
								l = r;
							0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), Object.assign(this, {
								progress: s,
								isBeginning: a,
								isEnd: r
							}), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !l && this.emit("reachEnd toEdge"), (n && !a || l && !r) && this.emit("fromEdge"), this.emit("progress", s)
						},
						updateSlidesClasses: function() {
							let e;
							let {
								slides: t,
								params: i,
								$wrapperEl: s,
								activeIndex: a,
								realIndex: r
							} = this, n = this.virtual && i.virtual.enabled;
							t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), (e = n ? this.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${a}"]`) : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass));
							let l = e.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
							i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
							let o = e.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
							i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses()
						},
						updateActiveIndex: function(e) {
							let t;
							let i = this,
								s = i.rtlTranslate ? i.translate : -i.translate,
								{
									slidesGrid: a,
									snapGrid: r,
									params: n,
									activeIndex: l,
									realIndex: o,
									snapIndex: d
								} = i,
								p = e;
							if (void 0 === p) {
								for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? p = e : s >= a[e] && s < a[e + 1] && (p = e + 1) : s >= a[e] && (p = e);
								n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
							}
							if (r.indexOf(s) >= 0) t = r.indexOf(s);
							else {
								let e = Math.min(n.slidesPerGroupSkip, p);
								t = e + Math.floor((p - e) / n.slidesPerGroup)
							}
							if (t >= r.length && (t = r.length - 1), p === l) {
								t !== d && (i.snapIndex = t, i.emit("snapIndexChange"));
								return
							}
							let u = parseInt(i.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
							Object.assign(i, {
								snapIndex: t,
								realIndex: u,
								previousIndex: l,
								activeIndex: p
							}), i.emit("activeIndexChange"), i.emit("snapIndexChange"), o !== u && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
						},
						updateClickedSlide: function(e) {
							let t;
							let i = this,
								s = i.params,
								a = m(e).closest(`.${s.slideClass}`)[0],
								r = !1;
							if (a) {
								for (let e = 0; e < i.slides.length; e += 1)
									if (i.slides[e] === a) {
										r = !0, t = e;
										break
									}
							}
							if (a && r) i.clickedSlide = a, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(m(a).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t;
							else {
								i.clickedSlide = void 0, i.clickedIndex = void 0;
								return
							}
							s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
						}
					},
					translate: {
						getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
							let {
								params: t,
								rtlTranslate: i,
								translate: s,
								$wrapperEl: a
							} = this;
							if (t.virtualTranslate) return i ? -s : s;
							if (t.cssMode) return s;
							let r = function(e, t = "x") {
								let i, s, a;
								let r = u(),
									n = function(e) {
										let t;
										let i = u();
										return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
									}(e, null);
								return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
							}(a[0], e);
							return i && (r = -r), r || 0
						},
						setTranslate: function(e, t) {
							let i = this,
								{
									rtlTranslate: s,
									params: a,
									$wrapperEl: r,
									wrapperEl: n,
									progress: l
								} = i,
								o = 0,
								d = 0;
							i.isHorizontal() ? o = s ? -e : e : d = e, a.roundLengths && (o = Math.floor(o), d = Math.floor(d)), a.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : a.virtualTranslate || r.transform(`translate3d(${o}px, ${d}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : d;
							let p = i.maxTranslate() - i.minTranslate();
							(0 === p ? 0 : (e - i.minTranslate()) / p) !== l && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
						},
						minTranslate: function() {
							return -this.snapGrid[0]
						},
						maxTranslate: function() {
							return -this.snapGrid[this.snapGrid.length - 1]
						},
						translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, a) {
							let r;
							let n = this,
								{
									params: l,
									wrapperEl: o
								} = n;
							if (n.animating && l.preventInteractionOnTransition) return !1;
							let d = n.minTranslate(),
								p = n.maxTranslate();
							if (r = s && e > d ? d : s && e < p ? p : e, n.updateProgress(r), l.cssMode) {
								let e = n.isHorizontal();
								if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -r;
								else {
									if (!n.support.smoothScroll) return E({
										swiper: n,
										targetPosition: -r,
										side: e ? "left" : "top"
									}), !0;
									o.scrollTo({
										[e ? "left" : "top"]: -r,
										behavior: "smooth"
									})
								}
								return !0
							}
							return 0 === t ? (n.setTransition(0), n.setTranslate(r), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(r), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
								n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
							}), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
						}
					},
					transition: {
						setTransition: function(e, t) {
							this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
						},
						transitionStart: function(e = !0, t) {
							let {
								params: i
							} = this;
							i.cssMode || (i.autoHeight && this.updateAutoHeight(), M({
								swiper: this,
								runCallbacks: e,
								direction: t,
								step: "Start"
							}))
						},
						transitionEnd: function(e = !0, t) {
							let i = this,
								{
									params: s
								} = i;
							i.animating = !1, s.cssMode || (i.setTransition(0), M({
								swiper: i,
								runCallbacks: e,
								direction: t,
								step: "End"
							}))
						}
					},
					slide: {
						slideTo: function(e = 0, t = this.params.speed, i = !0, s, a) {
							let r;
							if ("number" != typeof e && "string" != typeof e) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
							if ("string" == typeof e) {
								let t = parseInt(e, 10),
									i = isFinite(t);
								if (!i) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
								e = t
							}
							let n = this,
								l = e;
							l < 0 && (l = 0);
							let {
								params: o,
								snapGrid: d,
								slidesGrid: p,
								previousIndex: u,
								activeIndex: c,
								rtlTranslate: h,
								wrapperEl: f,
								enabled: m
							} = n;
							if (n.animating && o.preventInteractionOnTransition || !m && !s && !a) return !1;
							let g = Math.min(n.params.slidesPerGroupSkip, l),
								v = g + Math.floor((l - g) / n.params.slidesPerGroup);
							v >= d.length && (v = d.length - 1);
							let b = -d[v];
							if (o.normalizeSlideIndex)
								for (let e = 0; e < p.length; e += 1) {
									let t = -Math.floor(100 * b),
										i = Math.floor(100 * p[e]),
										s = Math.floor(100 * p[e + 1]);
									void 0 !== p[e + 1] ? t >= i && t < s - (s - i) / 2 ? l = e : t >= i && t < s && (l = e + 1) : t >= i && (l = e)
								}
							if (n.initialized && l !== c && (!n.allowSlideNext && b < n.translate && b < n.minTranslate() || !n.allowSlidePrev && b > n.translate && b > n.maxTranslate() && (c || 0) !== l)) return !1;
							if (l !== (u || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(b), r = l > c ? "next" : l < c ? "prev" : "reset", h && -b === n.translate || !h && b === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(b), "reset" !== r && (n.transitionStart(i, r), n.transitionEnd(i, r)), !1;
							if (o.cssMode) {
								let e = n.isHorizontal(),
									i = h ? b : -b;
								if (0 === t) {
									let t = n.virtual && n.params.virtual.enabled;
									t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
										n.wrapperEl.style.scrollSnapType = "", n._swiperImmediateVirtual = !1
									})
								} else {
									if (!n.support.smoothScroll) return E({
										swiper: n,
										targetPosition: i,
										side: e ? "left" : "top"
									}), !0;
									f.scrollTo({
										[e ? "left" : "top"]: i,
										behavior: "smooth"
									})
								}
								return !0
							}
							return n.setTransition(t), n.setTranslate(b), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, r), 0 === t ? n.transitionEnd(i, r) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
								n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, r))
							}), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd)), !0
						},
						slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
							if ("string" == typeof e) {
								let t = parseInt(e, 10),
									i = isFinite(t);
								if (!i) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
								e = t
							}
							let a = e;
							return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
						},
						slideNext: function(e = this.params.speed, t = !0, i) {
							let s = this,
								{
									animating: a,
									enabled: r,
									params: n
								} = s;
							if (!r) return s;
							let l = n.slidesPerGroup;
							"auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
							let o = s.activeIndex < n.slidesPerGroupSkip ? 1 : l;
							if (n.loop) {
								if (a && n.loopPreventsSlide) return !1;
								s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
							}
							return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
						},
						slidePrev: function(e = this.params.speed, t = !0, i) {
							let s = this,
								{
									params: a,
									animating: r,
									snapGrid: n,
									slidesGrid: l,
									rtlTranslate: o,
									enabled: d
								} = s;
							if (!d) return s;
							if (a.loop) {
								if (r && a.loopPreventsSlide) return !1;
								s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
							}
							let p = o ? s.translate : -s.translate;

							function u(e) {
								return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
							}
							let c = u(p),
								h = n.map(e => u(e)),
								f = n[h.indexOf(c) - 1];
							if (void 0 === f && a.cssMode) {
								let e;
								n.forEach((t, i) => {
									c >= t && (e = i)
								}), void 0 !== e && (f = n[e > 0 ? e - 1 : e])
							}
							let m = 0;
							if (void 0 !== f && ((m = l.indexOf(f)) < 0 && (m = s.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (m = Math.max(m = m - s.slidesPerViewDynamic("previous", !0) + 1, 0))), a.rewind && s.isBeginning) {
								let a = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
								return s.slideTo(a, e, t, i)
							}
							return s.slideTo(m, e, t, i)
						},
						slideReset: function(e = this.params.speed, t = !0, i) {
							return this.slideTo(this.activeIndex, e, t, i)
						},
						slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
							let a = this.activeIndex,
								r = Math.min(this.params.slidesPerGroupSkip, a),
								n = r + Math.floor((a - r) / this.params.slidesPerGroup),
								l = this.rtlTranslate ? this.translate : -this.translate;
							if (l >= this.snapGrid[n]) {
								let e = this.snapGrid[n],
									t = this.snapGrid[n + 1];
								l - e > (t - e) * s && (a += this.params.slidesPerGroup)
							} else {
								let e = this.snapGrid[n - 1],
									t = this.snapGrid[n];
								l - e <= (t - e) * s && (a -= this.params.slidesPerGroup)
							}
							return a = Math.min(a = Math.max(a, 0), this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
						},
						slideToClickedSlide: function() {
							let e;
							let t = this,
								{
									params: i,
									$wrapperEl: s
								} = t,
								a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
								r = t.clickedIndex;
							if (i.loop) {
								if (t.animating) return;
								e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), w(() => {
									t.slideTo(r)
								})) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), w(() => {
									t.slideTo(r)
								})) : t.slideTo(r)
							} else t.slideTo(r)
						}
					},
					loop: {
						loopCreate: function() {
							let e = this,
								t = d(),
								{
									params: i,
									$wrapperEl: s
								} = e,
								a = s.children().length > 0 ? m(s.children()[0].parentNode) : s;
							a.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
							let r = a.children(`.${i.slideClass}`);
							if (i.loopFillGroupWithBlank) {
								let e = i.slidesPerGroup - r.length % i.slidesPerGroup;
								if (e !== i.slidesPerGroup) {
									for (let s = 0; s < e; s += 1) {
										let e = m(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
										a.append(e)
									}
									r = a.children(`.${i.slideClass}`)
								}
							}
							"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
							let n = [],
								l = [];
							r.each((e, t) => {
								let i = m(e);
								i.attr("data-swiper-slide-index", t)
							});
							for (let t = 0; t < e.loopedSlides; t += 1) {
								let e = t - Math.floor(t / r.length) * r.length;
								l.push(r.eq(e)[0]), n.unshift(r.eq(r.length - e - 1)[0])
							}
							for (let e = 0; e < l.length; e += 1) a.append(m(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
							for (let e = n.length - 1; e >= 0; e -= 1) a.prepend(m(n[e].cloneNode(!0)).addClass(i.slideDuplicateClass))
						},
						loopFix: function() {
							let e;
							let t = this;
							t.emit("beforeLoopFix");
							let {
								activeIndex: i,
								slides: s,
								loopedSlides: a,
								allowSlidePrev: r,
								allowSlideNext: n,
								snapGrid: l,
								rtlTranslate: o
							} = t;
							t.allowSlidePrev = !0, t.allowSlideNext = !0;
							let d = -l[i],
								p = d - t.getTranslate();
							if (i < a) {
								e = s.length - 3 * a + i + a;
								let r = t.slideTo(e, 0, !1, !0);
								r && 0 !== p && t.setTranslate((o ? -t.translate : t.translate) - p)
							} else if (i >= s.length - a) {
								e = -s.length + i + a + a;
								let r = t.slideTo(e, 0, !1, !0);
								r && 0 !== p && t.setTranslate((o ? -t.translate : t.translate) - p)
							}
							t.allowSlidePrev = r, t.allowSlideNext = n, t.emit("loopFix")
						},
						loopDestroy: function() {
							let {
								$wrapperEl: e,
								params: t,
								slides: i
							} = this;
							e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
						}
					},
					grabCursor: {
						setGrabCursor: function(e) {
							if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
							let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
							t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
						},
						unsetGrabCursor: function() {
							let e = this;
							e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
						}
					},
					events: {
						attachEvents: function() {
							let e = this,
								t = d(),
								{
									params: i,
									support: s
								} = e;
							e.onTouchStart = k.bind(e), e.onTouchMove = P.bind(e), e.onTouchEnd = $.bind(e), i.cssMode && (e.onScroll = _.bind(e)), e.onClick = L.bind(e), s.touch && !z && (t.addEventListener("touchstart", A), z = !0), D(e, "on")
						},
						detachEvents: function() {
							D(this, "off")
						}
					},
					breakpoints: {
						setBreakpoint: function() {
							let e = this,
								{
									activeIndex: t,
									initialized: i,
									loopedSlides: s = 0,
									params: a,
									$el: r
								} = e,
								n = a.breakpoints;
							if (!n || n && 0 === Object.keys(n).length) return;
							let l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
							if (!l || e.currentBreakpoint === l) return;
							let o = l in n ? n[l] : void 0,
								d = o || e.originalParams,
								p = I(e, a),
								u = I(e, d),
								c = a.enabled;
							p && !u ? (r.removeClass(`${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && u && (r.addClass(`${a.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === a.grid.fill) && r.addClass(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
								let i = a[t] && a[t].enabled,
									s = d[t] && d[t].enabled;
								i && !s && e[t].disable(), !i && s && e[t].enable()
							});
							let h = d.direction && d.direction !== a.direction,
								f = a.loop && (d.slidesPerView !== a.slidesPerView || h);
							h && i && e.changeDirection(), T(e.params, d);
							let m = e.params.enabled;
							Object.assign(e, {
								allowTouchMove: e.params.allowTouchMove,
								allowSlideNext: e.params.allowSlideNext,
								allowSlidePrev: e.params.allowSlidePrev
							}), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), f && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
						},
						getBreakpoint: function(e, t = "window", i) {
							if (!e || "container" === t && !i) return;
							let s = !1,
								a = u(),
								r = "window" === t ? a.innerHeight : i.clientHeight,
								n = Object.keys(e).map(e => {
									if ("string" == typeof e && 0 === e.indexOf("@")) {
										let t = parseFloat(e.substr(1));
										return {
											value: r * t,
											point: e
										}
									}
									return {
										value: e,
										point: e
									}
								});
							n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
							for (let e = 0; e < n.length; e += 1) {
								let {
									point: r,
									value: l
								} = n[e];
								"window" === t ? a.matchMedia(`(min-width: ${l}px)`).matches && (s = r) : l <= i.clientWidth && (s = r)
							}
							return s || "max"
						}
					},
					checkOverflow: {
						checkOverflow: function() {
							let e = this,
								{
									isLocked: t,
									params: i
								} = e,
								{
									slidesOffsetBefore: s
								} = i;
							if (s) {
								let t = e.slides.length - 1,
									i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
								e.isLocked = e.size > i
							} else e.isLocked = 1 === e.snapGrid.length;
							!0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
						}
					},
					classes: {
						addClasses: function() {
							let {
								classNames: e,
								params: t,
								rtl: i,
								$el: s,
								device: a,
								support: r
							} = this, n = function(e, t) {
								let i = [];
								return e.forEach(e => {
									"object" == typeof e ? Object.keys(e).forEach(s => {
										e[s] && i.push(t + s)
									}) : "string" == typeof e && i.push(t + e)
								}), i
							}(["initialized", t.direction, {
								"pointer-events": !r.touch
							}, {
								"free-mode": this.params.freeMode && t.freeMode.enabled
							}, {
								autoheight: t.autoHeight
							}, {
								rtl: i
							}, {
								grid: t.grid && t.grid.rows > 1
							}, {
								"grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
							}, {
								android: a.android
							}, {
								ios: a.ios
							}, {
								"css-mode": t.cssMode
							}, {
								centered: t.cssMode && t.centeredSlides
							}, {
								"watch-progress": t.watchSlidesProgress
							}], t.containerModifierClass);
							e.push(...n), s.addClass([...e].join(" ")), this.emitContainerClasses()
						},
						removeClasses: function() {
							let {
								$el: e,
								classNames: t
							} = this;
							e.removeClass(t.join(" ")), this.emitContainerClasses()
						}
					},
					images: {
						loadImage: function(e, t, i, s, a, r) {
							let n;
							let l = u();

							function o() {
								r && r()
							}
							let d = m(e).parent("picture")[0];
							d || e.complete && a ? o() : t ? ((n = new l.Image).onload = o, n.onerror = o, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : o()
						},
						preloadImages: function() {
							let e = this;

							function t() {
								null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
							}
							e.imagesToLoad = e.$el.find("img");
							for (let i = 0; i < e.imagesToLoad.length; i += 1) {
								let s = e.imagesToLoad[i];
								e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
							}
						}
					}
				},
				G = {};
			class j {
				constructor(...e) {
					let t, i;
					if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = T({}, i), t && !i.el && (i.el = t), i.el && m(i.el).length > 1) {
						let e = [];
						return m(i.el).each(t => {
							let s = T({}, i, {
								el: t
							});
							e.push(new j(s))
						}), e
					}
					let s = this;
					s.__swiper__ = !0, s.support = x(), s.device = function(e = {}) {
						return a || (a = function({
							userAgent: e
						} = {}) {
							let t = x(),
								i = u(),
								s = i.navigator.platform,
								a = e || i.navigator.userAgent,
								r = {
									ios: !1,
									android: !1
								},
								n = i.screen.width,
								l = i.screen.height,
								o = a.match(/(Android);?[\s\/]+([\d.]+)?/),
								d = a.match(/(iPad).*OS\s([\d_]+)/),
								p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
								c = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
								h = "MacIntel" === s;
							return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x${l}`) >= 0 && ((d = a.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), h = !1), o && "Win32" !== s && (r.os = "android", r.android = !0), (d || c || p) && (r.os = "ios", r.ios = !0), r
						}(e)), a
					}({
						userAgent: i.userAgent
					}), s.browser = (r || (r = function() {
						let e = u();
						return {
							isSafari: function() {
								let t = e.navigator.userAgent.toLowerCase();
								return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
							}(),
							isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
						}
					}()), r), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], i.modules && Array.isArray(i.modules) && s.modules.push(...i.modules);
					let n = {};
					s.modules.forEach(e => {
						var t;
						e({
							swiper: s,
							extendParams: (t = i, function(e = {}) {
								let i = Object.keys(e)[0],
									s = e[i];
								if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
										auto: !0
									}), !(i in t && "enabled" in s))) {
									T(n, e);
									return
								}!0 === t[i] && (t[i] = {
									enabled: !0
								}), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
									enabled: !1
								}), T(n, e)
							}),
							on: s.on.bind(s),
							once: s.once.bind(s),
							off: s.off.bind(s),
							emit: s.emit.bind(s)
						})
					});
					let l = T({}, N, n);
					return s.params = T({}, l, G, i), s.originalParams = T({}, s.params), s.passedParams = T({}, i), s.params && s.params.on && Object.keys(s.params.on).forEach(e => {
						s.on(e, s.params.on[e])
					}), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = m, Object.assign(s, {
						enabled: s.params.enabled,
						el: t,
						classNames: [],
						slides: m(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: () => "horizontal" === s.params.direction,
						isVertical: () => "vertical" === s.params.direction,
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: s.params.allowSlideNext,
						allowSlidePrev: s.params.allowSlidePrev,
						touchEvents: (s.touchEventsTouch = {
							start: "touchstart",
							move: "touchmove",
							end: "touchend",
							cancel: "touchcancel"
						}, s.touchEventsDesktop = {
							start: "pointerdown",
							move: "pointermove",
							end: "pointerup"
						}, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							focusableElements: s.params.focusableElements,
							lastClickTime: C(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: s.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), s.emit("_swiper"), s.params.init && s.init(), s
				}
				enable() {
					let e = this;
					e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
				}
				disable() {
					let e = this;
					e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
				}
				setProgress(e, t) {
					e = Math.min(Math.max(e, 0), 1);
					let i = this.minTranslate(),
						s = this.maxTranslate(),
						a = (s - i) * e + i;
					this.translateTo(a, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
				}
				emitContainerClasses() {
					let e = this;
					if (!e.params._emitClasses || !e.el) return;
					let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
					e.emit("_containerClasses", t.join(" "))
				}
				getSlideClasses(e) {
					let t = this;
					return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
				}
				emitSlidesClasses() {
					let e = this;
					if (!e.params._emitClasses || !e.el) return;
					let t = [];
					e.slides.each(i => {
						let s = e.getSlideClasses(i);
						t.push({
							slideEl: i,
							classNames: s
						}), e.emit("_slideClass", i, s)
					}), e.emit("_slideClasses", t)
				}
				slidesPerViewDynamic(e = "current", t = !1) {
					let {
						params: i,
						slides: s,
						slidesGrid: a,
						slidesSizesGrid: r,
						size: n,
						activeIndex: l
					} = this, o = 1;
					if (i.centeredSlides) {
						let e, t = s[l].swiperSlideSize;
						for (let i = l + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > n && (e = !0));
						for (let i = l - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > n && (e = !0))
					} else if ("current" === e)
						for (let e = l + 1; e < s.length; e += 1) {
							let i = t ? a[e] + r[e] - a[l] < n : a[e] - a[l] < n;
							i && (o += 1)
						} else
							for (let e = l - 1; e >= 0; e -= 1) {
								let t = a[l] - a[e] < n;
								t && (o += 1)
							}
					return o
				}
				update() {
					let e = this;
					if (!e || e.destroyed) return;
					let {
						snapGrid: t,
						params: i
					} = e;

					function s() {
						let t = e.rtlTranslate ? -1 * e.translate : e.translate,
							i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
						e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
					}
					i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
				}
				changeDirection(e, t = !0) {
					let i = this,
						s = i.params.direction;
					return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each(t => {
						"vertical" === e ? t.style.width = "" : t.style.height = ""
					}), i.emit("changeDirection"), t && i.update()), i
				}
				changeLanguageDirection(e) {
					let t = this;
					(!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
				}
				mount(e) {
					let t = this;
					if (t.mounted) return !0;
					let i = m(e || t.params.el);
					if (!(e = i[0])) return !1;
					e.swiper = t;
					let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
						a = (() => {
							if (e && e.shadowRoot && e.shadowRoot.querySelector) {
								let t = m(e.shadowRoot.querySelector(s()));
								return t.children = e => i.children(e), t
							}
							return i.children ? i.children(s()) : m(i).children(s())
						})();
					if (0 === a.length && t.params.createElements) {
						let e = d(),
							s = e.createElement("div");
						a = m(s), s.className = t.params.wrapperClass, i.append(s), i.children(`.${t.params.slideClass}`).each(e => {
							a.append(e)
						})
					}
					return Object.assign(t, {
						$el: i,
						el: e,
						$wrapperEl: a,
						wrapperEl: a[0],
						mounted: !0,
						rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
						rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
						wrongRTL: "-webkit-box" === a.css("display")
					}), !0
				}
				init(e) {
					let t = this;
					if (t.initialized) return t;
					let i = t.mount(e);
					return !1 === i || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
				}
				destroy(e = !0, t = !0) {
					let i = this,
						{
							params: s,
							$el: a,
							$wrapperEl: r,
							slides: n
						} = i;
					return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
						i.off(e)
					}), !1 !== e && (i.$el[0].swiper = null, function(e) {
						let t = e;
						Object.keys(t).forEach(e => {
							try {
								t[e] = null
							} catch (e) {}
							try {
								delete t[e]
							} catch (e) {}
						})
					}(i)), i.destroyed = !0), null
				}
				static extendDefaults(e) {
					T(G, e)
				}
				static get extendedDefaults() {
					return G
				}
				static get defaults() {
					return N
				}
				static installModule(e) {
					j.prototype.__modules__ || (j.prototype.__modules__ = []);
					let t = j.prototype.__modules__;
					"function" == typeof e && 0 > t.indexOf(e) && t.push(e)
				}
				static use(e) {
					return Array.isArray(e) ? (e.forEach(e => j.installModule(e)), j) : (j.installModule(e), j)
				}
			}
			Object.keys(B).forEach(e => {
				Object.keys(B[e]).forEach(t => {
					j.prototype[t] = B[e][t]
				})
			}), j.use([function({
				swiper: e,
				on: t,
				emit: i
			}) {
				let s = u(),
					a = null,
					r = null,
					n = () => {
						e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
					},
					l = () => {
						e && !e.destroyed && e.initialized && (a = new ResizeObserver(t => {
							r = s.requestAnimationFrame(() => {
								let {
									width: i,
									height: s
								} = e, a = i, r = s;
								t.forEach(({
									contentBoxSize: t,
									contentRect: i,
									target: s
								}) => {
									s && s !== e.el || (a = i ? i.width : (t[0] || t).inlineSize, r = i ? i.height : (t[0] || t).blockSize)
								}), (a !== i || r !== s) && n()
							})
						})).observe(e.el)
					},
					o = () => {
						r && s.cancelAnimationFrame(r), a && a.unobserve && e.el && (a.unobserve(e.el), a = null)
					},
					d = () => {
						e && !e.destroyed && e.initialized && i("orientationchange")
					};
				t("init", () => {
					if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
						l();
						return
					}
					s.addEventListener("resize", n), s.addEventListener("orientationchange", d)
				}), t("destroy", () => {
					o(), s.removeEventListener("resize", n), s.removeEventListener("orientationchange", d)
				})
			}, function({
				swiper: e,
				extendParams: t,
				on: i,
				emit: s
			}) {
				let a = [],
					r = u(),
					n = (e, t = {}) => {
						let i = r.MutationObserver || r.WebkitMutationObserver,
							n = new i(e => {
								if (1 === e.length) {
									s("observerUpdate", e[0]);
									return
								}
								let t = function() {
									s("observerUpdate", e[0])
								};
								r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
							});
						n.observe(e, {
							attributes: void 0 === t.attributes || t.attributes,
							childList: void 0 === t.childList || t.childList,
							characterData: void 0 === t.characterData || t.characterData
						}), a.push(n)
					},
					l = () => {
						if (e.params.observer) {
							if (e.params.observeParents) {
								let t = e.$el.parents();
								for (let e = 0; e < t.length; e += 1) n(t[e])
							}
							n(e.$el[0], {
								childList: e.params.observeSlideChildren
							}), n(e.$wrapperEl[0], {
								attributes: !1
							})
						}
					},
					o = () => {
						a.forEach(e => {
							e.disconnect()
						}), a.splice(0, a.length)
					};
				t({
					observer: !1,
					observeParents: !1,
					observeSlideChildren: !1
				}), i("init", l), i("destroy", o)
			}]);
			var F = j;

			function H({
				swiper: e,
				extendParams: t,
				on: i,
				emit: s
			}) {
				let a, r;
				let n = u();
				t({
					mousewheel: {
						enabled: !1,
						releaseOnEdges: !1,
						invert: !1,
						forceToAxis: !1,
						sensitivity: 1,
						eventsTarget: "container",
						thresholdDelta: null,
						thresholdTime: null
					}
				}), e.mousewheel = {
					enabled: !1
				};
				let l = C(),
					o = [];

				function d() {
					e.enabled && (e.mouseEntered = !0)
				}

				function p() {
					e.enabled && (e.mouseEntered = !1)
				}

				function c(t) {
					return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && C() - l < e.params.mousewheel.thresholdTime) && (!!(t.delta >= 6 && C() - l < 60) || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), s("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), s("scroll", t.raw)), l = new n.Date().getTime(), !1))
				}

				function h(t) {
					var i;
					let n, l, d, p, u = t;
					if (!e.enabled) return;
					let h = e.params.mousewheel;
					e.params.cssMode && u.preventDefault();
					let f = e.$el;
					if ("container" !== e.params.mousewheel.eventsTarget && (f = m(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !f[0].contains(u.target) && !h.releaseOnEdges) return !0;
					u.originalEvent && (u = u.originalEvent);
					let g = 0,
						v = e.rtlTranslate ? -1 : 1,
						b = (n = 0, l = 0, d = 0, p = 0, "detail" in (i = u) && (l = i.detail), "wheelDelta" in i && (l = -i.wheelDelta / 120), "wheelDeltaY" in i && (l = -i.wheelDeltaY / 120), "wheelDeltaX" in i && (n = -i.wheelDeltaX / 120), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (n = l, l = 0), d = 10 * n, p = 10 * l, "deltaY" in i && (p = i.deltaY), "deltaX" in i && (d = i.deltaX), i.shiftKey && !d && (d = p, p = 0), (d || p) && i.deltaMode && (1 === i.deltaMode ? (d *= 40, p *= 40) : (d *= 800, p *= 800)), d && !n && (n = d < 1 ? -1 : 1), p && !l && (l = p < 1 ? -1 : 1), {
							spinX: n,
							spinY: l,
							pixelX: d,
							pixelY: p
						});
					if (h.forceToAxis) {
						if (e.isHorizontal()) {
							if (!(Math.abs(b.pixelX) > Math.abs(b.pixelY))) return !0;
							g = -b.pixelX * v
						} else {
							if (!(Math.abs(b.pixelY) > Math.abs(b.pixelX))) return !0;
							g = -b.pixelY
						}
					} else g = Math.abs(b.pixelX) > Math.abs(b.pixelY) ? -b.pixelX * v : -b.pixelY;
					if (0 === g) return !0;
					h.invert && (g = -g);
					let y = e.getTranslate() + g * h.sensitivity;
					if (y >= e.minTranslate() && (y = e.minTranslate()), y <= e.maxTranslate() && (y = e.maxTranslate()), (e.params.loop || y !== e.minTranslate() && y !== e.maxTranslate()) && e.params.nested && u.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
						let t = {
								time: C(),
								delta: Math.abs(g),
								direction: Math.sign(g)
							},
							i = r && t.time < r.time + 500 && t.delta <= r.delta && t.direction === r.direction;
						if (!i) {
							r = void 0, e.params.loop && e.loopFix();
							let n = e.getTranslate() + g * h.sensitivity,
								l = e.isBeginning,
								d = e.isEnd;
							if (n >= e.minTranslate() && (n = e.minTranslate()), n <= e.maxTranslate() && (n = e.maxTranslate()), e.setTransition(0), e.setTranslate(n), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!l && e.isBeginning || !d && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
								clearTimeout(a), a = void 0, o.length >= 15 && o.shift();
								let i = o.length ? o[o.length - 1] : void 0,
									s = o[0];
								if (o.push(t), i && (t.delta > i.delta || t.direction !== i.direction)) o.splice(0);
								else if (o.length >= 15 && t.time - s.time < 500 && s.delta - t.delta >= 1 && t.delta <= 6) {
									let i = g > 0 ? .8 : .2;
									r = t, o.splice(0), a = w(() => {
										e.slideToClosest(e.params.speed, !0, void 0, i)
									}, 0)
								}
								a || (a = w(() => {
									r = t, o.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
								}, 500))
							}
							if (i || s("scroll", u), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), n === e.minTranslate() || n === e.maxTranslate()) return !0
						}
					} else {
						let i = {
							time: C(),
							delta: Math.abs(g),
							direction: Math.sign(g),
							raw: t
						};
						o.length >= 2 && o.shift();
						let s = o.length ? o[o.length - 1] : void 0;
						if (o.push(i), s ? (i.direction !== s.direction || i.delta > s.delta || i.time > s.time + 150) && c(i) : c(i), function(t) {
								let i = e.params.mousewheel;
								if (t.direction < 0) {
									if (e.isEnd && !e.params.loop && i.releaseOnEdges) return !0
								} else if (e.isBeginning && !e.params.loop && i.releaseOnEdges) return !0;
								return !1
							}(i)) return !0
					}
					return u.preventDefault ? u.preventDefault() : u.returnValue = !1, !1
				}

				function f(t) {
					let i = e.$el;
					"container" !== e.params.mousewheel.eventsTarget && (i = m(e.params.mousewheel.eventsTarget)), i[t]("mouseenter", d), i[t]("mouseleave", p), i[t]("wheel", h)
				}

				function g() {
					return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", h), !0) : !e.mousewheel.enabled && (f("on"), e.mousewheel.enabled = !0, !0)
				}

				function v() {
					return e.params.cssMode ? (e.wrapperEl.addEventListener(event, h), !0) : !!e.mousewheel.enabled && (f("off"), e.mousewheel.enabled = !1, !0)
				}
				i("init", () => {
					!e.params.mousewheel.enabled && e.params.cssMode && v(), e.params.mousewheel.enabled && g()
				}), i("destroy", () => {
					e.params.cssMode && g(), e.mousewheel.enabled && v()
				}), Object.assign(e.mousewheel, {
					enable: g,
					disable: v
				})
			}

			function R(e, t, i, s) {
				let a = d();
				return e.params.createElements && Object.keys(s).forEach(r => {
					if (!i[r] && !0 === i.auto) {
						let n = e.$el.children(`.${s[r]}`)[0];
						n || ((n = a.createElement("div")).className = s[r], e.$el.append(n)), i[r] = n, t[r] = n
					}
				}), i
			}

			function V({
				swiper: e,
				extendParams: t,
				on: i,
				emit: s
			}) {
				function a(t) {
					let i;
					return t && (i = m(t), e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.$el.find(t).length && (i = e.$el.find(t))), i
				}

				function r(t, i) {
					let s = e.params.navigation;
					t && t.length > 0 && (t[i ? "addClass" : "removeClass"](s.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
				}

				function n() {
					if (e.params.loop) return;
					let {
						$nextEl: t,
						$prevEl: i
					} = e.navigation;
					r(i, e.isBeginning && !e.params.rewind), r(t, e.isEnd && !e.params.rewind)
				}

				function l(t) {
					t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
				}

				function o(t) {
					t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
				}

				function d() {
					let t = e.params.navigation;
					if (e.params.navigation = R(e, e.originalParams.navigation, e.params.navigation, {
							nextEl: "swiper-button-_next",
							prevEl: "swiper-button-prev"
						}), !(t.nextEl || t.prevEl)) return;
					let i = a(t.nextEl),
						s = a(t.prevEl);
					i && i.length > 0 && i.on("click", o), s && s.length > 0 && s.on("click", l), Object.assign(e.navigation, {
						$nextEl: i,
						nextEl: i && i[0],
						$prevEl: s,
						prevEl: s && s[0]
					}), !e.enabled && (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass))
				}

				function p() {
					let {
						$nextEl: t,
						$prevEl: i
					} = e.navigation;
					t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(e.params.navigation.disabledClass))
				}
				t({
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: "swiper-button-disabled",
						hiddenClass: "swiper-button-hidden",
						lockClass: "swiper-button-lock",
						navigationDisabledClass: "swiper-navigation-disabled"
					}
				}), e.navigation = {
					nextEl: null,
					$nextEl: null,
					prevEl: null,
					$prevEl: null
				}, i("init", () => {
					!1 === e.params.navigation.enabled ? c() : (d(), n())
				}), i("toEdge fromEdge lock unlock", () => {
					n()
				}), i("destroy", () => {
					p()
				}), i("enable disable", () => {
					let {
						$nextEl: t,
						$prevEl: i
					} = e.navigation;
					t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
				}), i("click", (t, i) => {
					let {
						$nextEl: a,
						$prevEl: r
					} = e.navigation, n = i.target;
					if (e.params.navigation.hideOnClick && !m(n).is(r) && !m(n).is(a)) {
						let t;
						if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
						a ? t = a.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)), !0 === t ? s("navigationShow") : s("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)
					}
				});
				let u = () => {
						e.$el.removeClass(e.params.navigation.navigationDisabledClass), d(), n()
					},
					c = () => {
						e.$el.addClass(e.params.navigation.navigationDisabledClass), p()
					};
				Object.assign(e.navigation, {
					enable: u,
					disable: c,
					update: n,
					init: d,
					destroy: p
				})
			}

			function W(e = "") {
				return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
			}

			function q({
				swiper: e,
				extendParams: t,
				on: i,
				emit: s
			}) {
				let a;
				let r = "swiper-pagination";
				t({
					pagination: {
						el: null,
						bulletElement: "span",
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						progressbarOpposite: !1,
						type: "bullets",
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						formatFractionCurrent: e => e,
						formatFractionTotal: e => e,
						bulletClass: `${r}-bullet`,
						bulletActiveClass: `${r}-bullet-active`,
						modifierClass: `${r}-`,
						currentClass: `${r}-current`,
						totalClass: `${r}-total`,
						hiddenClass: `${r}-hidden`,
						progressbarFillClass: `${r}-progressbar-fill`,
						progressbarOppositeClass: `${r}-progressbar-opposite`,
						clickableClass: `${r}-clickable`,
						lockClass: `${r}-lock`,
						horizontalClass: `${r}-horizontal`,
						verticalClass: `${r}-vertical`,
						paginationDisabledClass: `${r}-disabled`
					}
				}), e.pagination = {
					el: null,
					$el: null,
					bullets: []
				};
				let n = 0;

				function l() {
					return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
				}

				function o(t, i) {
					let {
						bulletActiveClass: s
					} = e.params.pagination;
					t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
				}

				function d() {
					let t;
					let i = e.rtl,
						r = e.params.pagination;
					if (l()) return;
					let d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						p = e.pagination.$el,
						u = e.params.loop ? Math.ceil((d - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
					if (e.params.loop ? ((t = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > d - 1 - 2 * e.loopedSlides && (t -= d - 2 * e.loopedSlides), t > u - 1 && (t -= u), t < 0 && "bullets" !== e.params.paginationType && (t = u + t)) : t = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === r.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
						let s, l, d;
						let u = e.pagination.bullets;
						if (r.dynamicBullets && (a = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), p.css(e.isHorizontal() ? "width" : "height", `${a*(r.dynamicMainBullets+4)}px`), r.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((n += t - (e.previousIndex - e.loopedSlides || 0)) > r.dynamicMainBullets - 1 ? n = r.dynamicMainBullets - 1 : n < 0 && (n = 0)), d = ((l = (s = Math.max(t - n, 0)) + (Math.min(u.length, r.dynamicMainBullets) - 1)) + s) / 2), u.removeClass(["", "-_next", "-_next-_next", "-prev", "-prev-prev", "-main"].map(e => `${r.bulletActiveClass}${e}`).join(" ")), p.length > 1) u.each(e => {
							let i = m(e),
								a = i.index();
							a === t && i.addClass(r.bulletActiveClass), r.dynamicBullets && (a >= s && a <= l && i.addClass(`${r.bulletActiveClass}-main`), a === s && o(i, "prev"), a === l && o(i, "next"))
						});
						else {
							let i = u.eq(t),
								a = i.index();
							if (i.addClass(r.bulletActiveClass), r.dynamicBullets) {
								let t = u.eq(s),
									i = u.eq(l);
								for (let e = s; e <= l; e += 1) u.eq(e).addClass(`${r.bulletActiveClass}-main`);
								if (e.params.loop) {
									if (a >= u.length) {
										for (let e = r.dynamicMainBullets; e >= 0; e -= 1) u.eq(u.length - e).addClass(`${r.bulletActiveClass}-main`);
										u.eq(u.length - r.dynamicMainBullets - 1).addClass(`${r.bulletActiveClass}-prev`)
									} else o(t, "prev"), o(i, "next")
								} else o(t, "prev"), o(i, "next")
							}
						}
						if (r.dynamicBullets) {
							let t = Math.min(u.length, r.dynamicMainBullets + 4);
							u.css(e.isHorizontal() ? i ? "right" : "left" : "top", `${(a*t-a)/2-d*a}px`)
						}
					}
					if ("fraction" === r.type && (p.find(W(r.currentClass)).text(r.formatFractionCurrent(t + 1)), p.find(W(r.totalClass)).text(r.formatFractionTotal(u))), "progressbar" === r.type) {
						let i;
						i = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
						let s = (t + 1) / u,
							a = 1,
							n = 1;
						"horizontal" === i ? a = s : n = s, p.find(W(r.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${n})`).transition(e.params.speed)
					}
					"custom" === r.type && r.renderCustom ? (p.html(r.renderCustom(e, t + 1, u)), s("paginationRender", p[0])) : s("paginationUpdate", p[0]), e.params.watchOverflow && e.enabled && p[e.isLocked ? "addClass" : "removeClass"](r.lockClass)
				}

				function p() {
					let t = e.params.pagination;
					if (l()) return;
					let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						a = e.pagination.$el,
						r = "";
					if ("bullets" === t.type) {
						let s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
						e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && s > i && (s = i);
						for (let i = 0; i < s; i += 1) t.renderBullet ? r += t.renderBullet.call(e, i, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
						a.html(r), e.pagination.bullets = a.find(W(t.bulletClass))
					}
					"fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, a.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, a.html(r)), "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
				}

				function u() {
					e.params.pagination = R(e, e.originalParams.pagination, e.params.pagination, {
						el: "swiper-pagination"
					});
					let t = e.params.pagination;
					if (!t.el) return;
					let i = m(t.el);
					0 === i.length || (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)).length > 1 && (i = i.filter(t => m(t).parents(".swiper")[0] === e.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", W(t.bulletClass), function(t) {
						t.preventDefault();
						let i = m(this).index() * e.params.slidesPerGroup;
						e.params.loop && (i += e.loopedSlides), e.slideTo(i)
					}), Object.assign(e.pagination, {
						$el: i,
						el: i[0]
					}), e.enabled || i.addClass(t.lockClass))
				}

				function c() {
					let t = e.params.pagination;
					if (l()) return;
					let i = e.pagination.$el;
					i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", W(t.bulletClass))
				}
				i("init", () => {
					!1 === e.params.pagination.enabled ? f() : (u(), p(), d())
				}), i("activeIndexChange", () => {
					e.params.loop ? d() : void 0 === e.snapIndex && d()
				}), i("snapIndexChange", () => {
					e.params.loop || d()
				}), i("slidesLengthChange", () => {
					e.params.loop && (p(), d())
				}), i("snapGridLengthChange", () => {
					e.params.loop || (p(), d())
				}), i("destroy", () => {
					c()
				}), i("enable disable", () => {
					let {
						$el: t
					} = e.pagination;
					t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
				}), i("lock unlock", () => {
					d()
				}), i("click", (t, i) => {
					let a = i.target,
						{
							$el: r
						} = e.pagination;
					if (e.params.pagination.el && e.params.pagination.hideOnClick && r && r.length > 0 && !m(a).hasClass(e.params.pagination.bulletClass)) {
						if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
						let t = r.hasClass(e.params.pagination.hiddenClass);
						!0 === t ? s("paginationShow") : s("paginationHide"), r.toggleClass(e.params.pagination.hiddenClass)
					}
				});
				let h = () => {
						e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), u(), p(), d()
					},
					f = () => {
						e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), c()
					};
				Object.assign(e.pagination, {
					enable: h,
					disable: f,
					render: p,
					update: d,
					init: u,
					destroy: c
				})
			}

			function X({
				swiper: e,
				extendParams: t,
				on: i,
				emit: s
			}) {
				let a;

				function r() {
					if (!e.size) {
						e.autoplay.running = !1, e.autoplay.paused = !1;
						return
					}
					let t = e.slides.eq(e.activeIndex),
						i = e.params.autoplay.delay;
					t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(a), a = w(() => {
						let t;
						e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), s("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), s("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(0, e.params.speed, !0, !0), s("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), s("autoplay")), e.params.cssMode && e.autoplay.running ? r() : !1 === t && r()
					}, i)
				}

				function n() {
					return void 0 === a && !e.autoplay.running && (e.autoplay.running = !0, s("autoplayStart"), r(), !0)
				}

				function l() {
					return !!e.autoplay.running && void 0 !== a && (a && (clearTimeout(a), a = void 0), e.autoplay.running = !1, s("autoplayStop"), !0)
				}

				function o(t) {
					e.autoplay.running && (e.autoplay.paused || (a && clearTimeout(a), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(t => {
						e.$wrapperEl[0].addEventListener(t, u)
					}) : (e.autoplay.paused = !1, r())))
				}

				function p() {
					let t = d();
					"hidden" === t.visibilityState && e.autoplay.running && o(), "visible" === t.visibilityState && e.autoplay.paused && (r(), e.autoplay.paused = !1)
				}

				function u(t) {
					e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(t => {
						e.$wrapperEl[0].removeEventListener(t, u)
					}), e.autoplay.paused = !1, e.autoplay.running ? r() : l())
				}

				function c() {
					e.params.autoplay.disableOnInteraction ? l() : (s("autoplayPause"), o()), ["transitionend", "webkitTransitionEnd"].forEach(t => {
						e.$wrapperEl[0].removeEventListener(t, u)
					})
				}

				function h() {
					e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, s("autoplayResume"), r())
				}
				e.autoplay = {
					running: !1,
					paused: !1
				}, t({
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1,
						pauseOnMouseEnter: !1
					}
				}), i("init", () => {
					if (e.params.autoplay.enabled) {
						n();
						let t = d();
						t.addEventListener("visibilitychange", p), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", c), e.$el.on("mouseleave", h))
					}
				}), i("beforeTransitionStart", (t, i, s) => {
					e.autoplay.running && (s || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(i) : l())
				}), i("sliderFirstMove", () => {
					e.autoplay.running && (e.params.autoplay.disableOnInteraction ? l() : o())
				}), i("touchEnd", () => {
					e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && r()
				}), i("destroy", () => {
					e.$el.off("mouseenter", c), e.$el.off("mouseleave", h), e.autoplay.running && l();
					let t = d();
					t.removeEventListener("visibilitychange", p)
				}), Object.assign(e.autoplay, {
					pause: o,
					run: r,
					start: n,
					stop: l
				})
			}

			function Y({
				swiper: e,
				extendParams: t,
				on: i
			}) {
				t({
					fadeEffect: {
						crossFade: !1,
						transformEl: null
					}
				});
				let s = () => {
						let {
							slides: t
						} = e, i = e.params.fadeEffect;
						for (let s = 0; s < t.length; s += 1) {
							let t = e.slides.eq(s),
								a = t[0].swiperSlideOffset,
								r = -a;
							e.params.virtualTranslate || (r -= e.translate);
							let n = 0;
							e.isHorizontal() || (n = r, r = 0);
							let l = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0),
								o = i.transformEl ? t.find(i.transformEl).css({
									"backface-visibility": "hidden",
									"-webkit-backface-visibility": "hidden"
								}) : t;
							o.css({
								opacity: l
							}).transform(`translate3d(${r}px, ${n}px, 0px)`)
						}
					},
					a = t => {
						let {
							transformEl: i
						} = e.params.fadeEffect, s = i ? e.slides.find(i) : e.slides;
						s.transition(t),
							function({
								swiper: e,
								duration: t,
								transformEl: i,
								allSlides: s
							}) {
								let {
									slides: a,
									activeIndex: r,
									$wrapperEl: n
								} = e;
								if (e.params.virtualTranslate && 0 !== t) {
									let t = !1;
									(s ? i ? a.find(i) : a : i ? a.eq(r).find(i) : a.eq(r)).transitionEnd(() => {
										if (t || !e || e.destroyed) return;
										t = !0, e.animating = !1;
										let i = ["webkitTransitionEnd", "transitionend"];
										for (let e = 0; e < i.length; e += 1) n.trigger(i[e])
									})
								}
							}({
								swiper: e,
								duration: t,
								transformEl: i,
								allSlides: !0
							})
					};
				! function(e) {
					let t;
					let {
						effect: i,
						swiper: s,
						on: a,
						setTranslate: r,
						setTransition: n,
						overwriteParams: l,
						perspective: o,
						recreateShadows: d,
						getEffectParams: p
					} = e;
					a("beforeInit", () => {
						if (s.params.effect !== i) return;
						s.classNames.push(`${s.params.containerModifierClass}${i}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
						let e = l ? l() : {};
						Object.assign(s.params, e), Object.assign(s.originalParams, e)
					}), a("setTranslate", () => {
						s.params.effect === i && r()
					}), a("setTransition", (e, t) => {
						s.params.effect === i && n(t)
					}), a("transitionEnd", () => {
						s.params.effect === i && d && p && p().slideShadows && (s.slides.each(e => {
							let t = s.$(e);
							t.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
						}), d())
					}), a("virtualUpdate", () => {
						s.params.effect === i && (s.slides.length || (t = !0), requestAnimationFrame(() => {
							t && s.slides && s.slides.length && (r(), t = !1)
						}))
					})
				}({
					effect: "fade",
					swiper: e,
					on: i,
					setTranslate: s,
					setTransition: a,
					overwriteParams: () => ({
						slidesPerView: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: !0,
						spaceBetween: 0,
						virtualTranslate: !e.params.cssMode
					})
				})
			}
		}
	}
]);
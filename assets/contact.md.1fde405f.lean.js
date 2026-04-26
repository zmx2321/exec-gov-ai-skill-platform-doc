import { _ as _export_sfc, $ as reactive, h as ref, o as openBlock, c as createElementBlock, k as createBaseVNode, O as createStaticVNode, Y as withModifiers, a0 as withDirectives, a1 as vModelText, F as Fragment, B as renderList, t as toDisplayString, e as createCommentVNode, a2 as vModelCheckbox, a3 as vModelRadio } from "./chunks/framework.95052327.js";
const contact_md_vue_type_style_index_0_scoped_c2bd59a1_lang = "";
const _hoisted_1 = { class: "brand-page-shell brand-page-shell--contact" };
const _hoisted_2 = {
  id: "lead-form",
  class: "brand-grid brand-grid--two"
};
const _hoisted_3 = { class: "brand-card brand-card--lead-form" };
const _hoisted_4 = { class: "docs-lead-form__row docs-lead-form__row--two" };
const _hoisted_5 = { class: "docs-lead-form__field" };
const _hoisted_6 = { class: "docs-lead-form__field" };
const _hoisted_7 = { class: "docs-lead-form__row docs-lead-form__row--two" };
const _hoisted_8 = { class: "docs-lead-form__field" };
const _hoisted_9 = { class: "docs-lead-form__field" };
const _hoisted_10 = { class: "docs-lead-form__field" };
const _hoisted_11 = { class: "docs-lead-form__field" };
const _hoisted_12 = { class: "docs-lead-form__group" };
const _hoisted_13 = { class: "docs-lead-form__choice-grid" };
const _hoisted_14 = ["value"];
const _hoisted_15 = { class: "docs-lead-form__group" };
const _hoisted_16 = { class: "docs-lead-form__choice-grid" };
const _hoisted_17 = ["value"];
const _hoisted_18 = { class: "docs-lead-form__actions" };
const _hoisted_19 = ["disabled"];
const _hoisted_20 = {
  key: 0,
  "data-testid": "docs-lead-feedback",
  class: "docs-lead-form__feedback docs-lead-form__feedback--error"
};
const _hoisted_21 = {
  key: 1,
  "data-testid": "docs-lead-feedback",
  class: "docs-lead-form__feedback docs-lead-form__feedback--success"
};
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"aside":false,"outline":false,"lastUpdated":false},"headers":[],"relativePath":"contact.md","filePath":"contact.md","lastUpdated":1777008234000}');
const __default__ = { name: "contact.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const scriptLanguageOptions = ["Python", "Shell", "JavaScript / Node", "SQL", "VBA / Excel", "还没写脚本"];
    const weeklyTimeOptions = ["每周 < 1 小时", "每周 1-3 小时", "每周 3-8 小时", "每周 8-16 小时", "每周 16 小时以上"];
    const leadForm = reactive({
      name: "",
      companyName: "",
      title: "",
      contactPhone: "",
      contactEmail: "",
      demand: "",
      scriptLanguages: [],
      weeklyTime: ""
    });
    const submitting = ref(false);
    const submitError = ref("");
    const submitSuccess = ref("");
    function normalized(value) {
      return String(value || "").trim();
    }
    function getLeadApiUrl() {
      if (typeof window !== "undefined") {
        const hostname = String(window.location.hostname || "").toLowerCase();
        if (hostname === "localhost" || hostname === "127.0.0.1") {
          return "http://localhost:6089/experience/lead";
        }
      }
      return "https://execfabric.cn/prod-api/experience/lead";
    }
    function resetLeadForm() {
      leadForm.name = "";
      leadForm.companyName = "";
      leadForm.title = "";
      leadForm.contactPhone = "";
      leadForm.contactEmail = "";
      leadForm.demand = "";
      leadForm.scriptLanguages = [];
      leadForm.weeklyTime = "";
    }
    function validateLeadForm() {
      if (!normalized(leadForm.name)) {
        return "请先填写怎么称呼你";
      }
      if (!normalized(leadForm.title)) {
        return "请先填写你的角色";
      }
      if (!normalized(leadForm.demand)) {
        return "请先写下 1 个最具体的自动化问题";
      }
      if (!leadForm.scriptLanguages.length) {
        return "请至少选择一种常用脚本语言";
      }
      if (!normalized(leadForm.weeklyTime)) {
        return "请先选择每周大概花费的时间";
      }
      if (!normalized(leadForm.contactPhone) && !normalized(leadForm.contactEmail)) {
        return "请至少填写手机号或邮箱";
      }
      return "";
    }
    async function submitLeadForm() {
      var _a;
      submitError.value = "";
      submitSuccess.value = "";
      const validationMessage = validateLeadForm();
      if (validationMessage) {
        submitError.value = validationMessage;
        return;
      }
      submitting.value = true;
      try {
        const response = await fetch(getLeadApiUrl(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            ...leadForm,
            leadType: "beta_intake",
            source: "docs_execfabric_contact",
            path: "/contact"
          })
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || Number(payload.code) != 200) {
          throw new Error(String((payload == null ? void 0 : payload.msg) || "提交失败，请稍后重试"));
        }
        const customerId = (_a = payload == null ? void 0 : payload.data) == null ? void 0 : _a.customerId;
        submitSuccess.value = customerId ? `表单已提交，已进入我们的后台线索库（编号 ${customerId}）。` : String((payload == null ? void 0 : payload.msg) || "表单已提交，已进入我们的后台线索库。");
        resetLeadForm();
      } catch (error) {
        submitError.value = error instanceof Error ? error.message : "提交失败，请稍后重试";
      } finally {
        submitting.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[21] || (_cache[21] = createStaticVNode('<section class="brand-hero brand-hero--contact" data-v-c2bd59a1><div data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Lead Entry</p><h1 data-v-c2bd59a1>线索分流与咨询</h1><div class="brand-hero__panel" data-v-c2bd59a1><span class="brand-pill" data-v-c2bd59a1>Founder Signal</span><strong data-v-c2bd59a1>提交线索前，先判断你当前更像免费线体验、内测资格申请、正式团队协作，还是企业项目交付。</strong><p data-v-c2bd59a1>如果你已经有一个最具体的自动化问题，优先走内测资格页；如果你已经要谈交付边界、部署方式和预算，再走合作线索页。</p></div><p class="brand-lead" data-v-c2bd59a1> 面向高频重复流程自动化、已有脚本治理、文件与数据处理、小型正式交付和选择性私有化场景， 当前承接免费线判断、本地脚本位增购判断、团队版路径判断和企业版咨询。 </p><div class="brand-chip-list" data-v-c2bd59a1><span class="brand-chip" data-v-c2bd59a1>免费线判断</span><span class="brand-chip" data-v-c2bd59a1>内测资格申请</span><span class="brand-chip" data-v-c2bd59a1>本地脚本位增购</span><span class="brand-chip" data-v-c2bd59a1>团队版方案入口</span><span class="brand-chip" data-v-c2bd59a1>小型私有化咨询</span><span class="brand-chip" data-v-c2bd59a1>脚本治理 / 文件处理</span></div><div class="brand-actions" data-v-c2bd59a1><a class="cta-button cta-button--brand" href="#lead-form" data-v-c2bd59a1>申请内测资格</a><a class="cta-button" href="#lead-form" data-v-c2bd59a1>提交需求表单</a><a class="cta-button" href="./materials/service-packages.html" data-v-c2bd59a1>查看当前可承接服务</a><a class="cta-button" href="./product/implementation-training.html" data-v-c2bd59a1>看培训与实施安排</a><a class="cta-button" href="./materials/founder-profile.html" data-v-c2bd59a1>查看构建者背景</a><a class="cta-button" href="./product/" data-v-c2bd59a1>先看产品概览</a><a class="cta-button" href="https://github.com/zmx2321" target="_blank" rel="noreferrer" data-v-c2bd59a1>查看 GitHub</a></div><div class="contact-node-grid contact-hero-grid" data-v-c2bd59a1><article class="brand-hero__panel contact-node-card" data-v-c2bd59a1><span class="link-panel-label" data-v-c2bd59a1>Good Fit</span><strong data-v-c2bd59a1>更适合已经有脚本、流程或内网接入诉求的团队</strong><p data-v-c2bd59a1>如果你要判断权限边界、执行留痕、本地接入或正式交付怎么收口，这里会比继续抽象讨论更有效。</p></article><article class="brand-hero__panel contact-node-card" data-v-c2bd59a1><span class="link-panel-label" data-v-c2bd59a1>What You Get</span><strong data-v-c2bd59a1>沟通后会更快判断该先走免费线、先扩容、先走标准团队版，还是直接进入企业交付</strong><p data-v-c2bd59a1>重点是尽快明确下一步入口、准备材料和第一阶段怎么启动。</p></article></div></div><div class="brand-hero__media brand-hero__media--compact" data-v-c2bd59a1><div class="matrix-panel matrix-panel--contact" data-v-c2bd59a1><div class="matrix-panel__hud" data-v-c2bd59a1><span data-v-c2bd59a1>EXECFABRIC // CONTACT NODE</span><span data-v-c2bd59a1>OPEN</span></div><div class="matrix-panel__canvas" data-v-c2bd59a1><div class="matrix-panel__trace matrix-panel__trace--top" data-v-c2bd59a1></div><div class="matrix-panel__trace matrix-panel__trace--mid" data-v-c2bd59a1></div><div class="matrix-panel__trace matrix-panel__trace--bottom" data-v-c2bd59a1></div><div class="matrix-panel__stack" data-v-c2bd59a1><span class="matrix-panel__line" data-v-c2bd59a1><span class="matrix-panel__kw" data-v-c2bd59a1>const</span> <span class="matrix-panel__ident" data-v-c2bd59a1>leadEntry</span> <span class="matrix-panel__op" data-v-c2bd59a1>=</span> <span class="matrix-panel__punct" data-v-c2bd59a1>[</span><span class="matrix-panel__string" data-v-c2bd59a1>&#39;free_line&#39;</span><span class="matrix-panel__punct" data-v-c2bd59a1>,</span> <span class="matrix-panel__string" data-v-c2bd59a1>&#39;local_slots&#39;</span><span class="matrix-panel__punct" data-v-c2bd59a1>,</span> <span class="matrix-panel__string" data-v-c2bd59a1>&#39;team_saas&#39;</span><span class="matrix-panel__punct" data-v-c2bd59a1>,</span> <span class="matrix-panel__string" data-v-c2bd59a1>&#39;enterprise_delivery&#39;</span><span class="matrix-panel__punct" data-v-c2bd59a1>]</span></span><span class="matrix-panel__line" data-v-c2bd59a1><span class="matrix-panel__kw" data-v-c2bd59a1>const</span> <span class="matrix-panel__ident" data-v-c2bd59a1>contactMail</span> <span class="matrix-panel__op" data-v-c2bd59a1>=</span> <span class="matrix-panel__string" data-v-c2bd59a1>&#39;zmx2321@163.com&#39;</span></span><span class="matrix-panel__line" data-v-c2bd59a1><span class="matrix-panel__kw" data-v-c2bd59a1>const</span> <span class="matrix-panel__ident" data-v-c2bd59a1>focus</span> <span class="matrix-panel__op" data-v-c2bd59a1>=</span> <span class="matrix-panel__punct" data-v-c2bd59a1>[</span><span class="matrix-panel__string" data-v-c2bd59a1>&#39;delivery&#39;</span><span class="matrix-panel__punct" data-v-c2bd59a1>,</span> <span class="matrix-panel__string" data-v-c2bd59a1>&#39;product&#39;</span><span class="matrix-panel__punct" data-v-c2bd59a1>,</span> <span class="matrix-panel__string" data-v-c2bd59a1>&#39;private deployment&#39;</span><span class="matrix-panel__punct" data-v-c2bd59a1>]</span></span></div><div class="matrix-panel__callout" data-v-c2bd59a1>reply-window: async but stable</div></div><div class="matrix-panel__footer" data-v-c2bd59a1><span class="matrix-panel__tag" data-v-c2bd59a1><span class="matrix-panel__key" data-v-c2bd59a1>status</span><span class="matrix-panel__punct" data-v-c2bd59a1>:</span> <span class="matrix-panel__value" data-v-c2bd59a1>open</span></span><span class="matrix-panel__tag" data-v-c2bd59a1><span class="matrix-panel__key" data-v-c2bd59a1>mode</span><span class="matrix-panel__punct" data-v-c2bd59a1>:</span> <span class="matrix-panel__value" data-v-c2bd59a1>lead intake</span></span><span class="matrix-panel__tag" data-v-c2bd59a1><span class="matrix-panel__key" data-v-c2bd59a1>docs</span><span class="matrix-panel__punct" data-v-c2bd59a1>:</span> <span class="matrix-panel__value" data-v-c2bd59a1>public entry</span></span></div></div><div class="contact-node-grid" data-v-c2bd59a1><article class="brand-hero__panel contact-node-card" data-v-c2bd59a1><span class="link-panel-label" data-v-c2bd59a1>Reply Path</span><strong data-v-c2bd59a1>先留场景，再进入四层对应跟进</strong><p data-v-c2bd59a1>会按免费线判断、本地脚本位、团队版路径判断和企业咨询四个方向继续跟进，不会在第一轮就把问题谈得过宽。</p></article><article class="brand-hero__panel contact-node-card" data-v-c2bd59a1><span class="link-panel-label" data-v-c2bd59a1>Before Send</span><strong data-v-c2bd59a1>优先准备这三类信息</strong><p data-v-c2bd59a1>脚本或流程类型、预计使用人数，以及是否涉及内网、本地执行或私有化部署。</p></article></div></div></section><section class="brand-grid brand-grid--three" data-v-c2bd59a1><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Good Fit</p><h2 data-v-c2bd59a1>这些情况更适合继续沟通</h2><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>团队里已经有脚本、定时任务或文件流程，需要统一入口和权限边界</li><li data-v-c2bd59a1>希望确认执行留痕、结果回传、本地接入或私有化边界</li><li data-v-c2bd59a1>希望先判断第一阶段怎么启动、需要准备哪些环境和交付输入</li><li data-v-c2bd59a1>需要基于真实场景评估是走标准路径还是正式项目交付</li></ul></article><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Current Entry</p><h2 data-v-c2bd59a1>公开体验入口后的下一步</h2><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>你已经可以先运行公开体验入口，快速感受一次“AI 调度脚本”的完整链路。</li><li data-v-c2bd59a1>如果你想继续自己接脚本，下一步直接注册进入个人智能执行台。</li><li data-v-c2bd59a1>如果只是个人持续使用但还没进入正式协作，优先判断是否只需要本地脚本位扩容。</li><li data-v-c2bd59a1>如果你更关心多人协作、权限审计或本地接入，先判断是标准团队版还是企业交付，再进入沟通。</li></ul></article><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Before Contact</p><h2 data-v-c2bd59a1>沟通前建议准备这些信息</h2><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>你想让 AI 调度哪类脚本、流程或数据任务。</li><li data-v-c2bd59a1>是否需要多人协作、审批、权限控制或执行审计。</li><li data-v-c2bd59a1>是否涉及本地环境、内网资源或私有化部署要求。</li><li data-v-c2bd59a1>你更希望先走免费线、先扩容个人空间、先走团队版，还是直接沟通企业方案。</li></ul></article></section><section class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Lead Split</p><h2 data-v-c2bd59a1>提交线索前，先判断你属于哪一类</h2><table data-v-c2bd59a1><thead data-v-c2bd59a1><tr data-v-c2bd59a1><th data-v-c2bd59a1>你现在的状态</th><th data-v-c2bd59a1>更适合的下一步</th><th data-v-c2bd59a1>为什么</th><th data-v-c2bd59a1>建议入口</th></tr></thead><tbody data-v-c2bd59a1><tr data-v-c2bd59a1><td data-v-c2bd59a1>第一次接触平台，只想先感知产品</td><td data-v-c2bd59a1>先走免费线</td><td data-v-c2bd59a1>先确认这是不是值得继续了解的平台，不急着进入项目沟通</td><td data-v-c2bd59a1><a href="https://execfabric.cn/" data-v-c2bd59a1>快速开始</a></td></tr><tr data-v-c2bd59a1><td data-v-c2bd59a1>已经有一个非常具体的自动化问题，愿意先做首轮验证</td><td data-v-c2bd59a1>先申请内测资格</td><td data-v-c2bd59a1>结构化收集会比泛化咨询更容易判断适配度、优先级和第一步</td><td data-v-c2bd59a1><a href="#lead-form" data-v-c2bd59a1>申请内测资格</a></td></tr><tr data-v-c2bd59a1><td data-v-c2bd59a1>已经在个人空间持续接脚本，但还没进入多人协作</td><td data-v-c2bd59a1>先判断本地脚本位是否需要扩容</td><td data-v-c2bd59a1>这属于个人轻量增购，不等于正式团队租户</td><td data-v-c2bd59a1><a href="./materials/membership-benefits-pricing.html" data-v-c2bd59a1>会员权益与价格说明</a></td></tr><tr data-v-c2bd59a1><td data-v-c2bd59a1>准备进入多人协作、正式账号和更稳定周期</td><td data-v-c2bd59a1>先走团队版月租 / 年租方案入口</td><td data-v-c2bd59a1>当前标准团队版由共享 SaaS 前端承接，先判断标准路径和开通方式是否够用</td><td data-v-c2bd59a1><a href="./product/personal-billing-membership.html" data-v-c2bd59a1>支付与会员说明</a> / <a href="./product/team-tenant-payment.html" data-v-c2bd59a1>标准租户支付说明</a></td></tr><tr data-v-c2bd59a1><td data-v-c2bd59a1>涉及内网、本地桥接、更强隔离或正式项目验收</td><td data-v-c2bd59a1>直接进入企业项目 / 私有化沟通</td><td data-v-c2bd59a1>这类问题重点是部署、交付边界和治理要求，不是标准会员页</td><td data-v-c2bd59a1><a href="./materials/service-packages.html" data-v-c2bd59a1>启动方式 / 服务包</a> / <a href="./product/deployment.html" data-v-c2bd59a1>部署方式</a></td></tr></tbody></table></section>', 3)),
          createBaseVNode("section", _hoisted_2, [
            createBaseVNode("article", _hoisted_3, [
              _cache[17] || (_cache[17] = createBaseVNode("p", { class: "brand-kicker" }, "Direct Submit", -1)),
              _cache[18] || (_cache[18] = createBaseVNode("h2", null, "官网内测 / 需求表单", -1)),
              _cache[19] || (_cache[19] = createBaseVNode("p", { class: "brand-lead" }, " 现在可以直接在官网提交表单，内容会直接进入我们的后台 public 库，不再依赖邮件客户端或第三方表单中转。 如果你已经有一个明确问题，优先在这里留下信息。 ", -1)),
              createBaseVNode("form", {
                class: "docs-lead-form",
                "data-testid": "docs-lead-form",
                onSubmit: withModifiers(submitLeadForm, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("label", _hoisted_5, [
                    _cache[8] || (_cache[8] = createBaseVNode("span", null, "怎么称呼你", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => leadForm.name = $event),
                      type: "text",
                      autocomplete: "name",
                      placeholder: "例如：张三"
                    }, null, 512), [
                      [vModelText, leadForm.name]
                    ])
                  ]),
                  createBaseVNode("label", _hoisted_6, [
                    _cache[9] || (_cache[9] = createBaseVNode("span", null, "角色", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => leadForm.title = $event),
                      type: "text",
                      placeholder: "例如：开发、运营、技术负责人"
                    }, null, 512), [
                      [vModelText, leadForm.title]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("label", _hoisted_8, [
                    _cache[10] || (_cache[10] = createBaseVNode("span", null, "公司 / 团队", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => leadForm.companyName = $event),
                      type: "text",
                      placeholder: "例如：某数据团队，可不填"
                    }, null, 512), [
                      [vModelText, leadForm.companyName]
                    ])
                  ]),
                  createBaseVNode("label", _hoisted_9, [
                    _cache[11] || (_cache[11] = createBaseVNode("span", null, "手机号或微信", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => leadForm.contactPhone = $event),
                      type: "text",
                      inputmode: "tel",
                      placeholder: "例如：13800000000"
                    }, null, 512), [
                      [vModelText, leadForm.contactPhone]
                    ])
                  ])
                ]),
                createBaseVNode("label", _hoisted_10, [
                  _cache[12] || (_cache[12] = createBaseVNode("span", null, "邮箱（手机号和邮箱二选一即可）", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => leadForm.contactEmail = $event),
                    type: "email",
                    autocomplete: "email",
                    placeholder: "例如：you@example.com"
                  }, null, 512), [
                    [vModelText, leadForm.contactEmail]
                  ])
                ]),
                createBaseVNode("label", _hoisted_11, [
                  _cache[13] || (_cache[13] = createBaseVNode("span", null, "你最想解决的 1 个具体自动化问题", -1)),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => leadForm.demand = $event),
                    rows: "5",
                    placeholder: "例如：每周要手工整理多个 CSV 报表，再发一封固定格式的汇总邮件"
                  }, null, 512), [
                    [vModelText, leadForm.demand]
                  ])
                ]),
                createBaseVNode("fieldset", _hoisted_12, [
                  _cache[14] || (_cache[14] = createBaseVNode("legend", null, "常用脚本语言", -1)),
                  createBaseVNode("div", _hoisted_13, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(scriptLanguageOptions, (item) => {
                      return createBaseVNode("label", {
                        key: item,
                        class: "docs-choice-chip"
                      }, [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => leadForm.scriptLanguages = $event),
                          type: "checkbox",
                          value: item
                        }, null, 8, _hoisted_14), [
                          [vModelCheckbox, leadForm.scriptLanguages]
                        ]),
                        createBaseVNode("span", null, toDisplayString(item), 1)
                      ]);
                    }), 64))
                  ])
                ]),
                createBaseVNode("fieldset", _hoisted_15, [
                  _cache[15] || (_cache[15] = createBaseVNode("legend", null, "每周大概花多少时间在这类问题上", -1)),
                  createBaseVNode("div", _hoisted_16, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(weeklyTimeOptions, (item) => {
                      return createBaseVNode("label", {
                        key: item,
                        class: "docs-choice-chip docs-choice-chip--radio"
                      }, [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => leadForm.weeklyTime = $event),
                          type: "radio",
                          name: "weeklyTime",
                          value: item
                        }, null, 8, _hoisted_17), [
                          [vModelRadio, leadForm.weeklyTime]
                        ]),
                        createBaseVNode("span", null, toDisplayString(item), 1)
                      ]);
                    }), 64))
                  ])
                ]),
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("button", {
                    class: "cta-button cta-button--brand",
                    "data-testid": "docs-lead-submit",
                    type: "submit",
                    disabled: submitting.value
                  }, toDisplayString(submitting.value ? "提交中..." : "提交内测 / 需求表单"), 9, _hoisted_19),
                  _cache[16] || (_cache[16] = createBaseVNode("span", { class: "docs-lead-form__note" }, "至少填写称呼、角色、1 个具体问题，以及手机号或邮箱中的任意一个。", -1))
                ]),
                submitError.value ? (openBlock(), createElementBlock("p", _hoisted_20, toDisplayString(submitError.value), 1)) : createCommentVNode("", true),
                submitSuccess.value ? (openBlock(), createElementBlock("p", _hoisted_21, toDisplayString(submitSuccess.value), 1)) : createCommentVNode("", true)
              ], 32)
            ]),
            _cache[20] || (_cache[20] = createStaticVNode('<article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Route Guide</p><h2 data-v-c2bd59a1>从官网进入后，会怎样分流</h2><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>只想先感受产品：可以继续去免费线体验页。</li><li data-v-c2bd59a1>已经有一个明确问题：直接在当前页提交内测 / 需求表单。</li><li data-v-c2bd59a1>已经接近正式合作：也先用当前表单把场景收口，再继续沟通交付边界。</li><li data-v-c2bd59a1>需要脚本治理、本地接入、团队协作或企业交付：都可以先从这个表单统一入库。</li></ul><p class="brand-kicker" data-v-c2bd59a1>What To Prepare</p><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>公司 / 角色，或者至少说明你是谁、在什么上下文里提这个问题。</li><li data-v-c2bd59a1>一个最具体的自动化问题，而不是一串宽泛设想。</li><li data-v-c2bd59a1>常用脚本语言，以及每周会为它花多少时间。</li><li data-v-c2bd59a1>如果已经知道要多人协作、本地接入或私有化，也请一并写上。</li></ul><div class="brand-grid brand-grid--two" data-v-c2bd59a1><article class="brand-card brand-card--nested" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>First Message</p><h3 data-v-c2bd59a1>优先把最痛的一条流程说清楚</h3><p data-v-c2bd59a1>比起泛泛介绍团队情况，更有价值的是先说明当前最痛的任务链路、输入输出和频率。</p></article><article class="brand-card brand-card--nested" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Decision</p><h3 data-v-c2bd59a1>先判断是否值得启动第一步</h3><p data-v-c2bd59a1>通常会先收口一个最小闭环，确认是否真的省时间、是否能稳定交付，再决定是否进入第二阶段。</p></article></div><p class="lead-form-note" data-v-c2bd59a1> 当前官网表单提交后会直接写入我们的后台 public 库，并带上来源页与场景字段，后续跟进不再要求你配置邮件客户端。 </p><div class="brand-actions" data-v-c2bd59a1><a class="cta-button" href="https://execfabric.cn/#/experience" data-v-c2bd59a1>先看免费线体验</a><a class="cta-button" href="https://execfabric.cn/" data-v-c2bd59a1>进入个人免费入口</a></div></article>', 1))
          ]),
          _cache[22] || (_cache[22] = createStaticVNode('<section class="brand-grid brand-grid--four contact-path-grid" data-v-c2bd59a1><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Path 01</p><h2 data-v-c2bd59a1>个人体验 / 智能执行台</h2><p data-v-c2bd59a1>先让开发者和个体用户以更低门槛感知价值，再决定是否把自己的脚本正式接入执行台。</p></article><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Path 02</p><h2 data-v-c2bd59a1>个人继续使用 / 本地脚本位</h2><p data-v-c2bd59a1>适合已经在个人空间持续接脚本，但还没有进入多人正式协作的人。重点是扩容个人脚本位，不把它讲成正式团队版。</p></article><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Path 03</p><h2 data-v-c2bd59a1>团队版 SaaS</h2><p data-v-c2bd59a1>承接多人协作、共享执行能力、审批、权限控制和更稳定的产品订阅。当前优先走标准 SaaS 正式租户入口，由共享 SaaS 前端承接；如果需要更强隔离或更深定制，再转企业版 / 私有化。</p></article><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Path 04</p><h2 data-v-c2bd59a1>正式项目 / 私有化</h2><p data-v-c2bd59a1>承接更高隔离、更高安全要求、内网、本地 Agent 和正式交付需求，但只适合边界清晰的项目。</p></article></section><section class="brand-grid brand-grid--two" data-v-c2bd59a1><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Current Cooperation</p><h2 data-v-c2bd59a1>当前更适合优先沟通的合作类型</h2><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>先把一个重复流程做成最小自动化交付</li><li data-v-c2bd59a1>把已有 Python 脚本或 Skill 接入统一执行入口</li><li data-v-c2bd59a1>承接团队版 / 企业版试点、正式交付和私有轻部署</li><li data-v-c2bd59a1>帮助判断是先走共享 SaaS 正式租户路径，还是直接进入企业交付</li><li data-v-c2bd59a1>本地脚本、CLI、本地环境桥接和受控执行方案</li></ul><p data-v-c2bd59a1><a href="./materials/service-packages.html" data-v-c2bd59a1>查看合作方式 / 标准服务包</a></p></article><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>How To Start</p><h2 data-v-c2bd59a1>最推荐的起步方式</h2><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>优先提供一个最痛、最重复、规则相对明确的流程</li><li data-v-c2bd59a1>先按一个点收口范围，不建议一开始就按大而全的项目方式推进</li><li data-v-c2bd59a1>先把第一步跑通，再决定是否继续扩第二阶段</li><li data-v-c2bd59a1>如果还不确定值不值得做，也可以先做最小范围判断</li></ul></article></section><section class="brand-grid brand-grid--two" data-v-c2bd59a1><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Founder Background</p><h2 data-v-c2bd59a1>交付背景与公开资料</h2><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>长期主线是前端、GIS 可视化和政企交付。</li><li data-v-c2bd59a1>近两年持续补强 Python 自动化、数据处理和中小型后台支撑。</li><li data-v-c2bd59a1>当前做 璇络(ExecFabric)，不是停留在泛泛地讲 AI，而是想把脚本接入、权限边界、执行留痕和本地桥接做成真正能交付的产品。</li></ul><p data-v-c2bd59a1><a href="./materials/founder-profile.html" data-v-c2bd59a1>查看交付背景与项目经历</a></p></article><article class="brand-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Public Proof</p><h2 data-v-c2bd59a1>公开可查看的内容</h2><ul class="brand-list" data-v-c2bd59a1><li data-v-c2bd59a1>GitHub 公开仓库和工程结构</li><li data-v-c2bd59a1>博客里的项目记录和思考</li><li data-v-c2bd59a1>文档站里对产品、交付、合作方式的公开说明</li><li data-v-c2bd59a1>持续更新中的 璇络(ExecFabric) 文档和前端入口</li></ul></article></section><section class="brand-card contact-channels-card" data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Channels</p><h2 data-v-c2bd59a1>备用联系方式与公开入口</h2><div class="brand-link-grid" data-v-c2bd59a1><a class="brand-link-card" href="https://execfabric.cn/" data-v-c2bd59a1><span data-v-c2bd59a1>产品入口</span><strong data-v-c2bd59a1>execfabric.cn</strong><p data-v-c2bd59a1>现在优先从登录 / 注册页或免费线体验页提交需求，直接入库。</p></a><a class="brand-link-card" href="https://github.com/zmx2321" target="_blank" rel="noreferrer" data-v-c2bd59a1><span data-v-c2bd59a1>GitHub</span><strong data-v-c2bd59a1>zmx2321</strong><p data-v-c2bd59a1>查看公开仓库、代码风格和工程完成度。</p></a><a class="brand-link-card" href="https://github.com/zmx2321/exec-fabric-ai-skill-platform-doc" target="_blank" rel="noreferrer" data-v-c2bd59a1><span data-v-c2bd59a1>文档仓库</span><strong data-v-c2bd59a1>exec-fabric-ai-skill-platform-doc</strong><p data-v-c2bd59a1>查看当前文档站页面、样式和部署配置。</p></a><a class="brand-link-card" href="https://zmx2321.github.io/vite-blog" target="_blank" rel="noreferrer" data-v-c2bd59a1><span data-v-c2bd59a1>博客</span><strong data-v-c2bd59a1>vite-blog</strong><p data-v-c2bd59a1>继续了解项目记录、思考和公开文章。</p></a></div></section><section class="brand-card brand-card--cta" data-v-c2bd59a1><div class="brand-card__row" data-v-c2bd59a1><div data-v-c2bd59a1><p class="brand-kicker" data-v-c2bd59a1>Next Read</p><h2 data-v-c2bd59a1>继续了解平台与交付资料</h2><p class="brand-lead" data-v-c2bd59a1>可先查看产品概览、CLI 指引、核心能力和版本阶段与升级路径，再结合具体问题进入沟通。</p></div><div class="brand-link-grid brand-link-grid--compact" data-v-c2bd59a1><a class="brand-link-card" href="./product/" data-v-c2bd59a1><span data-v-c2bd59a1>Product</span><strong data-v-c2bd59a1>产品概览</strong></a><a class="brand-link-card" href="./product/cli.html" data-v-c2bd59a1><span data-v-c2bd59a1>CLI</span><strong data-v-c2bd59a1>CLI 指引</strong></a><a class="brand-link-card" href="./product/customer-flow.html" data-v-c2bd59a1><span data-v-c2bd59a1>Delivery</span><strong data-v-c2bd59a1>客户交付与使用说明</strong></a><a class="brand-link-card" href="./product/capabilities.html" data-v-c2bd59a1><span data-v-c2bd59a1>Capabilities</span><strong data-v-c2bd59a1>核心能力</strong></a><a class="brand-link-card" href="./product/architecture.html" data-v-c2bd59a1><span data-v-c2bd59a1>Architecture</span><strong data-v-c2bd59a1>架构说明</strong></a><a class="brand-link-card" href="./product/editions.html" data-v-c2bd59a1><span data-v-c2bd59a1>Roadmap</span><strong data-v-c2bd59a1>版本阶段与升级路径</strong></a></div></div></section>', 5))
        ])
      ]);
    };
  }
});
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2bd59a1"]]);
export {
  __pageData,
  contact as default
};

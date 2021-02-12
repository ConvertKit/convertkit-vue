import { h as h$1 } from 'vue';

const Minimal = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = false,
      showLabels = false,
      newTab = false,
      className = '',
      submitText = 'Subscribe',
      emailPlaceholder = 'Your email',
      namePlaceholder = 'Your first name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline'
    } = props;
    return h("form", {
      "attrs": {
        "action": action,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "className": className
      }
    }, [!hideName && h("div", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("input", {
      "attrs": {
        "type": "text",
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "aria-label": nameLabel,
        "id": "ck-first-name"
      }
    })]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("input", {
      "attrs": {
        "type": "email",
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "aria-label": emailLabel,
        "id": "ck-email"
      }
    }), h("button", {
      "attrs": {
        "type": "submit"
      }
    }, [submitText])]);
  }
};

var e = [],
    t = [];

function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();

    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }

  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = ".formkit-form.charlotte * {\n  box-sizing: border-box;\n}\n\n.formkit-form.charlotte {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.formkit-form.charlotte legend {\n  border: none;\n  font-size: inherit;\n  margin-bottom: 10px;\n  padding: 0;\n  position: relative;\n  display: table;\n}\n\n.formkit-form.charlotte fieldset {\n  border: 0;\n  padding: 0.01em 0 0 0;\n  margin: 0;\n  min-width: 0;\n}\n\n.formkit-form.charlotte body:not(:-moz-handler-blocked) fieldset {\n  display: table-cell;\n}\n\n.formkit-form.charlotte h1,\n.formkit-form.charlotte h2,\n.formkit-form.charlotte h3,\n.formkit-form.charlotte h4,\n.formkit-form.charlotte h5,\n.formkit-form.charlotte h6 {\n  color: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.formkit-form.charlotte p {\n  color: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.formkit-form.charlotte ol:not([template-default]),\n.formkit-form.charlotte ul:not([template-default]),\n.formkit-form.charlotte blockquote:not([template-default]) {\n  text-align: left;\n}\n\n.formkit-form.charlotte p:not([template-default]),\n.formkit-form.charlotte hr:not([template-default]),\n.formkit-form.charlotte blockquote:not([template-default]),\n.formkit-form.charlotte ol:not([template-default]),\n.formkit-form.charlotte ul:not([template-default]) {\n  color: inherit;\n  font-style: initial;\n}\n\n.formkit-form.charlotte[data-format=\"modal\"] {\n  display: none;\n}\n\n.formkit-form.charlotte[data-format=\"slide in\"] {\n  display: none;\n}\n\n.formkit-form.charlotte[data-format=\"sticky bar\"] {\n  display: none;\n}\n\n.formkit-sticky-bar .formkit-form.charlotte[data-format=\"sticky bar\"] {\n  display: block;\n}\n\n.formkit-form.charlotte .formkit-input,\n.formkit-form.charlotte .formkit-select,\n.formkit-form.charlotte .formkit-checkboxes {\n  width: 100%;\n}\n\n.formkit-form.charlotte .formkit-button,\n.formkit-form.charlotte .formkit-submit {\n  border: 0;\n  border-radius: 5px;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 15px;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  vertical-align: middle;\n}\n\n.formkit-form.charlotte .formkit-button:hover,\n.formkit-form.charlotte .formkit-submit:hover,\n.formkit-form.charlotte .formkit-button:focus,\n.formkit-form.charlotte .formkit-submit:focus {\n  outline: none;\n}\n\n.formkit-form.charlotte .formkit-button:hover>span,\n.formkit-form.charlotte .formkit-submit:hover>span,\n.formkit-form.charlotte .formkit-button:focus>span,\n.formkit-form.charlotte .formkit-submit:focus>span {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.formkit-form.charlotte .formkit-button>span,\n.formkit-form.charlotte .formkit-submit>span {\n  display: block;\n  -webkit-transition: all 300ms ease-in-out;\n  transition: all 300ms ease-in-out;\n  padding: 12px 24px;\n}\n\n.formkit-form.charlotte .formkit-input {\n  background: #ffffff;\n  font-size: 15px;\n  padding: 12px;\n  border: 1px solid #e3e3e3;\n  -webkit-flex: 1 0 auto;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  line-height: 1.4;\n  margin: 0;\n  -webkit-transition: border-color ease-out 300ms;\n  transition: border-color ease-out 300ms;\n}\n\n.formkit-form.charlotte .formkit-input:focus {\n  outline: none;\n  border-color: #1677be;\n  -webkit-transition: border-color ease 300ms;\n  transition: border-color ease 300ms;\n}\n\n.formkit-form.charlotte .formkit-input::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.8;\n}\n\n.formkit-form.charlotte .formkit-input::-moz-placeholder {\n  color: inherit;\n  opacity: 0.8;\n}\n\n.formkit-form.charlotte .formkit-input:-ms-input-placeholder {\n  color: inherit;\n  opacity: 0.8;\n}\n\n.formkit-form.charlotte .formkit-input::placeholder {\n  color: inherit;\n  opacity: 0.8;\n}\n\n.formkit-form.charlotte [data-group=\"dropdown\"] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n\n.formkit-form.charlotte [data-group=\"dropdown\"]::before {\n  content: \"\";\n  top: calc(50% - 2.5px);\n  right: 10px;\n  position: absolute;\n  pointer-events: none;\n  border-color: #4f4f4f transparent transparent transparent;\n  border-style: solid;\n  border-width: 6px 6px 0 6px;\n  height: 0;\n  width: 0;\n  z-index: 999;\n}\n\n.formkit-form.charlotte [data-group=\"dropdown\"] select {\n  height: auto;\n  width: 100%;\n  cursor: pointer;\n  color: #333333;\n  line-height: 1.4;\n  margin-bottom: 0;\n  padding: 0 6px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: 15px;\n  padding: 12px;\n  padding-right: 25px;\n  border: 1px solid #e3e3e3;\n  background: #ffffff;\n}\n\n.formkit-form.charlotte [data-group=\"dropdown\"] select:focus {\n  outline: none;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] {\n  text-align: left;\n  margin: 0;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] {\n  margin-bottom: 10px;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] * {\n  cursor: pointer;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"]:last-of-type {\n  margin-bottom: 0;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] input[type=\"checkbox\"] {\n  display: none;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] input[type=\"checkbox\"]+label::after {\n  content: none;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] input[type=\"checkbox\"]:checked+label::after {\n  border-color: #ffffff;\n  content: \"\";\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] input[type=\"checkbox\"]:checked+label::before {\n  background: #10bf7a;\n  border-color: #10bf7a;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] label {\n  position: relative;\n  display: inline-block;\n  padding-left: 28px;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] label::before,\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] label::after {\n  position: absolute;\n  content: \"\";\n  display: inline-block;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] label::before {\n  height: 16px;\n  width: 16px;\n  border: 1px solid #e3e3e3;\n  background: #ffffff;\n  left: 0px;\n  top: 3px;\n}\n\n.formkit-form.charlotte [data-group=\"checkboxes\"] [data-group=\"checkbox\"] label::after {\n  height: 4px;\n  width: 8px;\n  border-left: 2px solid #4d4d4d;\n  border-bottom: 2px solid #4d4d4d;\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  left: 4px;\n  top: 8px;\n}\n\n.formkit-form.charlotte .formkit-alert {\n  background: #f9fafb;\n  border: 1px solid #e3e3e3;\n  border-radius: 5px;\n  -webkit-flex: 1 0 auto;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  list-style: none;\n  margin: 25px auto;\n  padding: 12px;\n  text-align: center;\n  width: 100%;\n}\n\n.formkit-form.charlotte .formkit-alert:empty {\n  display: none;\n}\n\n.formkit-form.charlotte .formkit-alert-success {\n  background: #d3fbeb;\n  border-color: #10bf7a;\n  color: #0c905c;\n}\n\n.formkit-form.charlotte .formkit-alert-error {\n  background: #fde8e2;\n  border-color: #f2643b;\n  color: #ea4110;\n}\n\n.formkit-form.charlotte .formkit-spinner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 0px;\n  width: 0px;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0px;\n  overflow: hidden;\n  text-align: center;\n  -webkit-transition: all 300ms ease-in-out;\n  transition: all 300ms ease-in-out;\n}\n\n.formkit-form.charlotte .formkit-spinner>div {\n  margin: auto;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  opacity: 0.3;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: formkit-bouncedelay-formkit-form-data-uid-bad0d82b83- 1.4s infinite ease-in-out both;\n  animation: formkit-bouncedelay-formkit-form-data-uid-bad0d82b83- 1.4s infinite ease-in-out both;\n}\n\n.formkit-form.charlotte .formkit-spinner>div:nth-child(1) {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.formkit-form.charlotte .formkit-spinner>div:nth-child(2) {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n.formkit-form.charlotte .formkit-submit[data-active] .formkit-spinner {\n  opacity: 1;\n  height: 100%;\n  width: 50px;\n}\n\n.formkit-form.charlotte .formkit-submit[data-active] .formkit-spinner~span {\n  opacity: 0;\n}\n\n.formkit-form.charlotte .formkit-powered-by[data-active=\"false\"] {\n  opacity: 0.35;\n}\n\n.formkit-form.charlotte .formkit-powered-by-convertkit-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  z-index: 5;\n  margin: 10px 0;\n  position: relative;\n}\n\n.formkit-form.charlotte .formkit-powered-by-convertkit-container[data-active=\"false\"] {\n  opacity: 0.35;\n}\n\n.formkit-form.charlotte .formkit-powered-by-convertkit {\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background-color: #ffffff;\n  border: 0;\n  border-radius: 4px;\n  color: #373f45;\n  cursor: pointer;\n  display: block;\n  height: 36px;\n  margin: 0 auto;\n  opacity: 0.95;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  text-indent: 100%;\n  -webkit-transition: ease-in-out all 200ms;\n  transition: ease-in-out all 200ms;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 190px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='162' height='20' viewBox='0 0 162 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M83.0561 15.2457C86.675 15.2457 89.4722 12.5154 89.4722 9.14749C89.4722 5.99211 86.8443 4.06563 85.1038 4.06563C82.6801 4.06563 80.7373 5.76407 80.4605 8.28551C80.4092 8.75244 80.0387 9.14403 79.5686 9.14069C78.7871 9.13509 77.6507 9.12841 76.9314 9.13092C76.6217 9.13199 76.3658 8.88106 76.381 8.57196C76.4895 6.38513 77.2218 4.3404 78.618 2.76974C80.1695 1.02445 82.4289 0 85.1038 0C89.5979 0 93.8406 4.07791 93.8406 9.14749C93.8406 14.7608 89.1832 19.3113 83.1517 19.3113C78.8502 19.3113 74.5179 16.5041 73.0053 12.5795C72.9999 12.565 72.9986 12.5492 73.0015 12.534C73.0218 12.4179 73.0617 12.3118 73.1011 12.2074C73.1583 12.0555 73.2143 11.907 73.2062 11.7359L73.18 11.1892C73.174 11.0569 73.2075 10.9258 73.2764 10.8127C73.3452 10.6995 73.4463 10.6094 73.5666 10.554L73.7852 10.4523C73.9077 10.3957 74.0148 10.3105 74.0976 10.204C74.1803 10.0974 74.2363 9.97252 74.2608 9.83983C74.3341 9.43894 74.6865 9.14749 75.0979 9.14749C75.7404 9.14749 76.299 9.57412 76.5088 10.1806C77.5188 13.1 79.1245 15.2457 83.0561 15.2457Z' fill='%23373F45'/%3E%3Cpath d='M155.758 6.91365C155.028 6.91365 154.804 6.47916 154.804 5.98857C154.804 5.46997 154.986 5.06348 155.758 5.06348C156.53 5.06348 156.712 5.46997 156.712 5.98857C156.712 6.47905 156.516 6.91365 155.758 6.91365ZM142.441 12.9304V9.32833L141.415 9.32323V8.90392C141.415 8.44719 141.786 8.07758 142.244 8.07986L142.441 8.08095V6.55306L144.082 6.09057V8.08073H145.569V8.50416C145.569 8.61242 145.548 8.71961 145.506 8.81961C145.465 8.91961 145.404 9.01047 145.328 9.08699C145.251 9.16351 145.16 9.2242 145.06 9.26559C144.96 9.30698 144.853 9.32826 144.745 9.32822H144.082V12.7201C144.082 13.2423 144.378 13.4256 144.76 13.4887C145.209 13.5629 145.583 13.888 145.583 14.343V14.9626C144.029 14.9626 142.441 14.8942 142.441 12.9304Z' fill='%23373F45'/%3E%3Cpath d='M110.058 7.92554C108.417 7.88344 106.396 8.92062 106.396 11.5137C106.396 14.0646 108.417 15.0738 110.058 15.0318C111.742 15.0738 113.748 14.0646 113.748 11.5137C113.748 8.92062 111.742 7.88344 110.058 7.92554ZM110.07 13.7586C108.878 13.7586 108.032 12.8905 108.032 11.461C108.032 10.1013 108.878 9.20569 110.071 9.20569C111.263 9.20569 112.101 10.0995 112.101 11.459C112.101 12.8887 111.263 13.7586 110.07 13.7586Z' fill='%23373F45'/%3E%3Cpath d='M118.06 7.94098C119.491 7.94098 120.978 8.33337 120.978 11.1366V14.893H120.063C119.608 14.893 119.238 14.524 119.238 14.0689V10.9965C119.238 9.66506 118.747 9.16047 117.891 9.16047C117.414 9.16047 116.797 9.52486 116.502 9.81915V14.069C116.502 14.1773 116.481 14.2845 116.44 14.3845C116.398 14.4845 116.337 14.5753 116.261 14.6519C116.184 14.7284 116.093 14.7891 115.993 14.8305C115.893 14.8719 115.786 14.8931 115.678 14.8931H114.847V8.10918H115.773C115.932 8.10914 116.087 8.16315 116.212 8.26242C116.337 8.36168 116.424 8.50033 116.46 8.65577C116.881 8.19328 117.428 7.94098 118.06 7.94098ZM122.854 8.09713C123.024 8.09708 123.19 8.1496 123.329 8.2475C123.468 8.34541 123.574 8.48391 123.631 8.64405L125.133 12.8486L126.635 8.64415C126.692 8.48402 126.798 8.34551 126.937 8.2476C127.076 8.1497 127.242 8.09718 127.412 8.09724H128.598L126.152 14.3567C126.091 14.5112 125.986 14.6439 125.849 14.7374C125.711 14.831 125.549 14.881 125.383 14.8809H124.333L121.668 8.09713H122.854Z' fill='%23373F45'/%3E%3Cpath d='M135.085 14.5514C134.566 14.7616 133.513 15.0416 132.418 15.0416C130.496 15.0416 129.024 13.9345 129.024 11.4396C129.024 9.19701 130.451 7.99792 132.191 7.99792C134.338 7.99792 135.254 9.4378 135.158 11.3979C135.139 11.8029 134.786 12.0983 134.38 12.0983H130.679C130.763 13.1916 131.562 13.7662 132.615 13.7662C133.028 13.7662 133.462 13.7452 133.983 13.6481C134.535 13.545 135.085 13.9375 135.085 14.4985V14.5514ZM133.673 10.949C133.785 9.87621 133.061 9.28752 132.191 9.28752C131.321 9.28752 130.734 9.93979 130.679 10.9489L133.673 10.949Z' fill='%23373F45'/%3E%3Cpath d='M137.345 8.11122C137.497 8.11118 137.645 8.16229 137.765 8.25635C137.884 8.35041 137.969 8.48197 138.005 8.62993C138.566 8.20932 139.268 7.94303 139.759 7.94303C139.801 7.94303 140.068 7.94303 140.489 7.99913V8.7265C140.489 9.11748 140.15 9.4147 139.759 9.4147C139.31 9.4147 138.651 9.5829 138.131 9.8773V14.8951H136.462V8.11112L137.345 8.11122ZM156.6 14.0508V8.09104H155.769C155.314 8.09104 154.944 8.45999 154.944 8.9151V14.8748H155.775C156.23 14.8748 156.6 14.5058 156.6 14.0508ZM158.857 12.9447V9.34254H157.749V8.91912C157.749 8.46401 158.118 8.09506 158.574 8.09506H158.857V6.56739L160.499 6.10479V8.09506H161.986V8.51848C161.986 8.97359 161.617 9.34254 161.161 9.34254H160.499V12.7345C160.499 13.2566 160.795 13.44 161.177 13.503C161.626 13.5774 162 13.9024 162 14.3574V14.977C160.446 14.977 158.857 14.9086 158.857 12.9447ZM98.1929 10.1124C98.2033 6.94046 100.598 5.16809 102.895 5.16809C104.171 5.16809 105.342 5.44285 106.304 6.12953L105.914 6.6631C105.654 7.02011 105.16 7.16194 104.749 6.99949C104.169 6.7702 103.622 6.7218 103.215 6.7218C101.335 6.7218 99.9169 7.92849 99.9068 10.1123C99.9169 12.2959 101.335 13.5201 103.215 13.5201C103.622 13.5201 104.169 13.4717 104.749 13.2424C105.16 13.0799 105.654 13.2046 105.914 13.5615L106.304 14.0952C105.342 14.7819 104.171 15.0566 102.895 15.0566C100.598 15.0566 98.2033 13.2842 98.1929 10.1124ZM147.619 5.21768C148.074 5.21768 148.444 5.58663 148.444 6.04174V9.81968L151.82 5.58131C151.897 5.47733 151.997 5.39282 152.112 5.3346C152.227 5.27638 152.355 5.24607 152.484 5.24611H153.984L150.166 10.0615L153.984 14.8749H152.484C152.355 14.8749 152.227 14.8446 152.112 14.7864C151.997 14.7281 151.897 14.6436 151.82 14.5397L148.444 10.3025V14.0508C148.444 14.5059 148.074 14.8749 147.619 14.8749H146.746V5.21768H147.619Z' fill='%23373F45'/%3E%3Cpath d='M0.773438 6.5752H2.68066C3.56543 6.5752 4.2041 6.7041 4.59668 6.96191C4.99219 7.21973 5.18994 7.62695 5.18994 8.18359C5.18994 8.55859 5.09326 8.87061 4.8999 9.11963C4.70654 9.36865 4.42822 9.52539 4.06494 9.58984V9.63379C4.51611 9.71875 4.84717 9.88721 5.05811 10.1392C5.27197 10.3882 5.37891 10.7266 5.37891 11.1543C5.37891 11.7314 5.17676 12.1841 4.77246 12.5122C4.37109 12.8374 3.81152 13 3.09375 13H0.773438V6.5752ZM1.82373 9.22949H2.83447C3.27393 9.22949 3.59473 9.16064 3.79688 9.02295C3.99902 8.88232 4.1001 8.64502 4.1001 8.31104C4.1001 8.00928 3.99023 7.79102 3.77051 7.65625C3.55371 7.52148 3.20801 7.4541 2.7334 7.4541H1.82373V9.22949ZM1.82373 10.082V12.1167H2.93994C3.37939 12.1167 3.71045 12.0332 3.93311 11.8662C4.15869 11.6963 4.27148 11.4297 4.27148 11.0664C4.27148 10.7324 4.15723 10.4849 3.92871 10.3237C3.7002 10.1626 3.35303 10.082 2.88721 10.082H1.82373Z' fill='%23373F45'/%3E%3Cpath d='M13.011 6.5752V10.7324C13.011 11.207 12.9084 11.623 12.7034 11.9805C12.5012 12.335 12.2068 12.6089 11.8201 12.8022C11.4363 12.9927 10.9763 13.0879 10.4402 13.0879C9.6433 13.0879 9.02368 12.877 8.5813 12.4551C8.13892 12.0332 7.91772 11.4531 7.91772 10.7148V6.5752H8.9724V10.6401C8.9724 11.1704 9.09546 11.5615 9.34155 11.8135C9.58765 12.0654 9.96557 12.1914 10.4753 12.1914C11.4656 12.1914 11.9607 11.6714 11.9607 10.6313V6.5752H13.011Z' fill='%23373F45'/%3E%3Cpath d='M15.9146 13V6.5752H16.9649V13H15.9146Z' fill='%23373F45'/%3E%3Cpath d='M19.9255 13V6.5752H20.9758V12.0991H23.696V13H19.9255Z' fill='%23373F45'/%3E%3Cpath d='M28.2828 13H27.2325V7.47607H25.3428V6.5752H30.1724V7.47607H28.2828V13Z' fill='%23373F45'/%3E%3Cpath d='M41.9472 13H40.8046L39.7148 9.16796C39.6679 9.00097 39.6093 8.76074 39.539 8.44727C39.4687 8.13086 39.4262 7.91113 39.4116 7.78809C39.3823 7.97559 39.3339 8.21875 39.2665 8.51758C39.2021 8.81641 39.1479 9.03905 39.1039 9.18554L38.0405 13H36.8979L36.0673 9.7832L35.2236 6.5752H36.2958L37.2143 10.3193C37.3578 10.9199 37.4604 11.4502 37.5219 11.9102C37.5541 11.6611 37.6025 11.3828 37.6669 11.0752C37.7314 10.7676 37.79 10.5186 37.8427 10.3281L38.8886 6.5752H39.9301L41.0024 10.3457C41.1049 10.6943 41.2133 11.2158 41.3276 11.9102C41.3715 11.4912 41.477 10.958 41.644 10.3105L42.558 6.5752H43.6215L41.9472 13Z' fill='%23373F45'/%3E%3Cpath d='M45.7957 13V6.5752H46.846V13H45.7957Z' fill='%23373F45'/%3E%3Cpath d='M52.0258 13H50.9755V7.47607H49.0859V6.5752H53.9155V7.47607H52.0258V13Z' fill='%23373F45'/%3E%3Cpath d='M61.2312 13H60.1765V10.104H57.2146V13H56.1643V6.5752H57.2146V9.20312H60.1765V6.5752H61.2312V13Z' fill='%23373F45'/%3E%3C/svg%3E\");\n}\n\n.formkit-form.charlotte .formkit-powered-by-convertkit:hover,\n.formkit-form.charlotte .formkit-powered-by-convertkit:focus {\n  -webkit-transform: scale(1.025) perspective(1px);\n  -ms-transform: scale(1.025) perspective(1px);\n  transform: scale(1.025) perspective(1px);\n  opacity: 1;\n}\n\n@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-bad0d82b83- {\n\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n  }\n\n  40% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes formkit-bouncedelay-formkit-form-data-uid-bad0d82b83- {\n\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n  }\n\n  40% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.formkit-form.charlotte blockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  border-left: 5px solid #e1e1e1;\n}\n\n.formkit-form.charlotte {\n  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.15);\n  max-width: 700px !important;\n  overflow: hidden;\n}\n\n.formkit-form.charlotte [data-style=\"full\"] {\n  width: 100%;\n  display: block;\n}\n\n.formkit-form.charlotte .formkit-background {\n  position: relative !important;\n  background-position: center center;\n  background-size: cover;\n  min-height: 200px;\n  width: auto;\n  opacity: 1 !important;\n}\n\n.formkit-form.charlotte .formkit-column {\n  padding: 20px;\n  position: relative;\n}\n\n.formkit-form.charlotte .formkit-header {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\n.formkit-form.charlotte .formkit-field {\n  margin: 0 0 10px 0;\n}\n\n.formkit-form.charlotte .formkit-fields .formkit-submit {\n  margin-top: 15px;\n}\n\n.formkit-form.charlotte .formkit-disclaimer {\n  margin: 0 0 15px 0;\n}\n\n.formkit-form.charlotte .formkit-disclaimer>p {\n  margin: 0;\n}\n\n.formkit-form.charlotte .formkit-powered-by {\n  color: #7d7d7d;\n  display: block;\n  font-size: 11px;\n  margin-bottom: 0;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.formkit-form.charlotte[min-width~=\"600\"] [data-style=\"full\"],\n.formkit-form.charlotte[min-width~=\"700\"] [data-style=\"full\"],\n.formkit-form.charlotte[min-width~=\"800\"] [data-style=\"full\"] {\n  display: -ms-grid;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n.formkit-form.charlotte[min-width~=\"600\"] .formkit-column,\n.formkit-form.charlotte[min-width~=\"700\"] .formkit-column,\n.formkit-form.charlotte[min-width~=\"800\"] .formkit-column {\n  padding: 40px;\n}";
n(css,{"singleTag":true});

function Warning({
  message
}) {
  return h("div", {
    "attrs": {
      "id": "ck-warn"
    },
    "style": {
      border: 'solid medium #ccc',
      borderRadius: '4px',
      background: '#ddd',
      color: '#777',
      fontWeight: 'bold',
      padding: '10px'
    }
  }, [message]);
}

function _extends() {
  return _extends = Object.assign || function (a) {
    for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);

    return a;
  }, _extends.apply(this, arguments);
}

var normalMerge = ["attrs", "props", "domProps"],
    toArrayMerge = ["class", "style", "directives"],
    functionalMerge = ["on", "nativeOn"],
    mergeJsxProps = function (a) {
  return a.reduce(function (c, a) {
    for (var b in a) if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
      var d = c[b] instanceof Array ? c[b] : [c[b]],
          e = a[b] instanceof Array ? a[b] : [a[b]];
      c[b] = d.concat(e);
    } else if (-1 !== functionalMerge.indexOf(b)) {
      for (var f in a[b]) if (c[b][f]) {
        var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
            h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
        c[b][f] = g.concat(h);
      } else c[b][f] = a[b][f];
    } else if ("hook" == b) for (var i in a[b]) c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];else c[b] = a[b];

    return c;
  }, {});
},
    mergeFn = function (a, b) {
  return function () {
    a && a.apply(this, arguments), b && b.apply(this, arguments);
  };
};

var helper = mergeJsxProps;

var css$1 = ".formkit-powered-by-convertkit{\n  display: block;\n  width: 166px;\n  height: 36px;\n  margin: auto;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='162' height='20' viewBox='0 0 162 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M83.0561 15.2457C86.675 15.2457 89.4722 12.5154 89.4722 9.14749C89.4722 5.99211 86.8443 4.06563 85.1038 4.06563C82.6801 4.06563 80.7373 5.76407 80.4605 8.28551C80.4092 8.75244 80.0387 9.14403 79.5686 9.14069C78.7871 9.13509 77.6507 9.12841 76.9314 9.13092C76.6217 9.13199 76.3658 8.88106 76.381 8.57196C76.4895 6.38513 77.2218 4.3404 78.618 2.76974C80.1695 1.02445 82.4289 0 85.1038 0C89.5979 0 93.8406 4.07791 93.8406 9.14749C93.8406 14.7608 89.1832 19.3113 83.1517 19.3113C78.8502 19.3113 74.5179 16.5041 73.0053 12.5795C72.9999 12.565 72.9986 12.5492 73.0015 12.534C73.0218 12.4179 73.0617 12.3118 73.1011 12.2074C73.1583 12.0555 73.2143 11.907 73.2062 11.7359L73.18 11.1892C73.174 11.0569 73.2075 10.9258 73.2764 10.8127C73.3452 10.6995 73.4463 10.6094 73.5666 10.554L73.7852 10.4523C73.9077 10.3957 74.0148 10.3105 74.0976 10.204C74.1803 10.0974 74.2363 9.97252 74.2608 9.83983C74.3341 9.43894 74.6865 9.14749 75.0979 9.14749C75.7404 9.14749 76.299 9.57412 76.5088 10.1806C77.5188 13.1 79.1245 15.2457 83.0561 15.2457Z' fill='%23373F45'/%3E%3Cpath d='M155.758 6.91365C155.028 6.91365 154.804 6.47916 154.804 5.98857C154.804 5.46997 154.986 5.06348 155.758 5.06348C156.53 5.06348 156.712 5.46997 156.712 5.98857C156.712 6.47905 156.516 6.91365 155.758 6.91365ZM142.441 12.9304V9.32833L141.415 9.32323V8.90392C141.415 8.44719 141.786 8.07758 142.244 8.07986L142.441 8.08095V6.55306L144.082 6.09057V8.08073H145.569V8.50416C145.569 8.61242 145.548 8.71961 145.506 8.81961C145.465 8.91961 145.404 9.01047 145.328 9.08699C145.251 9.16351 145.16 9.2242 145.06 9.26559C144.96 9.30698 144.853 9.32826 144.745 9.32822H144.082V12.7201C144.082 13.2423 144.378 13.4256 144.76 13.4887C145.209 13.5629 145.583 13.888 145.583 14.343V14.9626C144.029 14.9626 142.441 14.8942 142.441 12.9304Z' fill='%23373F45'/%3E%3Cpath d='M110.058 7.92554C108.417 7.88344 106.396 8.92062 106.396 11.5137C106.396 14.0646 108.417 15.0738 110.058 15.0318C111.742 15.0738 113.748 14.0646 113.748 11.5137C113.748 8.92062 111.742 7.88344 110.058 7.92554ZM110.07 13.7586C108.878 13.7586 108.032 12.8905 108.032 11.461C108.032 10.1013 108.878 9.20569 110.071 9.20569C111.263 9.20569 112.101 10.0995 112.101 11.459C112.101 12.8887 111.263 13.7586 110.07 13.7586Z' fill='%23373F45'/%3E%3Cpath d='M118.06 7.94098C119.491 7.94098 120.978 8.33337 120.978 11.1366V14.893H120.063C119.608 14.893 119.238 14.524 119.238 14.0689V10.9965C119.238 9.66506 118.747 9.16047 117.891 9.16047C117.414 9.16047 116.797 9.52486 116.502 9.81915V14.069C116.502 14.1773 116.481 14.2845 116.44 14.3845C116.398 14.4845 116.337 14.5753 116.261 14.6519C116.184 14.7284 116.093 14.7891 115.993 14.8305C115.893 14.8719 115.786 14.8931 115.678 14.8931H114.847V8.10918H115.773C115.932 8.10914 116.087 8.16315 116.212 8.26242C116.337 8.36168 116.424 8.50033 116.46 8.65577C116.881 8.19328 117.428 7.94098 118.06 7.94098ZM122.854 8.09713C123.024 8.09708 123.19 8.1496 123.329 8.2475C123.468 8.34541 123.574 8.48391 123.631 8.64405L125.133 12.8486L126.635 8.64415C126.692 8.48402 126.798 8.34551 126.937 8.2476C127.076 8.1497 127.242 8.09718 127.412 8.09724H128.598L126.152 14.3567C126.091 14.5112 125.986 14.6439 125.849 14.7374C125.711 14.831 125.549 14.881 125.383 14.8809H124.333L121.668 8.09713H122.854Z' fill='%23373F45'/%3E%3Cpath d='M135.085 14.5514C134.566 14.7616 133.513 15.0416 132.418 15.0416C130.496 15.0416 129.024 13.9345 129.024 11.4396C129.024 9.19701 130.451 7.99792 132.191 7.99792C134.338 7.99792 135.254 9.4378 135.158 11.3979C135.139 11.8029 134.786 12.0983 134.38 12.0983H130.679C130.763 13.1916 131.562 13.7662 132.615 13.7662C133.028 13.7662 133.462 13.7452 133.983 13.6481C134.535 13.545 135.085 13.9375 135.085 14.4985V14.5514ZM133.673 10.949C133.785 9.87621 133.061 9.28752 132.191 9.28752C131.321 9.28752 130.734 9.93979 130.679 10.9489L133.673 10.949Z' fill='%23373F45'/%3E%3Cpath d='M137.345 8.11122C137.497 8.11118 137.645 8.16229 137.765 8.25635C137.884 8.35041 137.969 8.48197 138.005 8.62993C138.566 8.20932 139.268 7.94303 139.759 7.94303C139.801 7.94303 140.068 7.94303 140.489 7.99913V8.7265C140.489 9.11748 140.15 9.4147 139.759 9.4147C139.31 9.4147 138.651 9.5829 138.131 9.8773V14.8951H136.462V8.11112L137.345 8.11122ZM156.6 14.0508V8.09104H155.769C155.314 8.09104 154.944 8.45999 154.944 8.9151V14.8748H155.775C156.23 14.8748 156.6 14.5058 156.6 14.0508ZM158.857 12.9447V9.34254H157.749V8.91912C157.749 8.46401 158.118 8.09506 158.574 8.09506H158.857V6.56739L160.499 6.10479V8.09506H161.986V8.51848C161.986 8.97359 161.617 9.34254 161.161 9.34254H160.499V12.7345C160.499 13.2566 160.795 13.44 161.177 13.503C161.626 13.5774 162 13.9024 162 14.3574V14.977C160.446 14.977 158.857 14.9086 158.857 12.9447ZM98.1929 10.1124C98.2033 6.94046 100.598 5.16809 102.895 5.16809C104.171 5.16809 105.342 5.44285 106.304 6.12953L105.914 6.6631C105.654 7.02011 105.16 7.16194 104.749 6.99949C104.169 6.7702 103.622 6.7218 103.215 6.7218C101.335 6.7218 99.9169 7.92849 99.9068 10.1123C99.9169 12.2959 101.335 13.5201 103.215 13.5201C103.622 13.5201 104.169 13.4717 104.749 13.2424C105.16 13.0799 105.654 13.2046 105.914 13.5615L106.304 14.0952C105.342 14.7819 104.171 15.0566 102.895 15.0566C100.598 15.0566 98.2033 13.2842 98.1929 10.1124ZM147.619 5.21768C148.074 5.21768 148.444 5.58663 148.444 6.04174V9.81968L151.82 5.58131C151.897 5.47733 151.997 5.39282 152.112 5.3346C152.227 5.27638 152.355 5.24607 152.484 5.24611H153.984L150.166 10.0615L153.984 14.8749H152.484C152.355 14.8749 152.227 14.8446 152.112 14.7864C151.997 14.7281 151.897 14.6436 151.82 14.5397L148.444 10.3025V14.0508C148.444 14.5059 148.074 14.8749 147.619 14.8749H146.746V5.21768H147.619Z' fill='%23373F45'/%3E%3Cpath d='M0.773438 6.5752H2.68066C3.56543 6.5752 4.2041 6.7041 4.59668 6.96191C4.99219 7.21973 5.18994 7.62695 5.18994 8.18359C5.18994 8.55859 5.09326 8.87061 4.8999 9.11963C4.70654 9.36865 4.42822 9.52539 4.06494 9.58984V9.63379C4.51611 9.71875 4.84717 9.88721 5.05811 10.1392C5.27197 10.3882 5.37891 10.7266 5.37891 11.1543C5.37891 11.7314 5.17676 12.1841 4.77246 12.5122C4.37109 12.8374 3.81152 13 3.09375 13H0.773438V6.5752ZM1.82373 9.22949H2.83447C3.27393 9.22949 3.59473 9.16064 3.79688 9.02295C3.99902 8.88232 4.1001 8.64502 4.1001 8.31104C4.1001 8.00928 3.99023 7.79102 3.77051 7.65625C3.55371 7.52148 3.20801 7.4541 2.7334 7.4541H1.82373V9.22949ZM1.82373 10.082V12.1167H2.93994C3.37939 12.1167 3.71045 12.0332 3.93311 11.8662C4.15869 11.6963 4.27148 11.4297 4.27148 11.0664C4.27148 10.7324 4.15723 10.4849 3.92871 10.3237C3.7002 10.1626 3.35303 10.082 2.88721 10.082H1.82373Z' fill='%23373F45'/%3E%3Cpath d='M13.011 6.5752V10.7324C13.011 11.207 12.9084 11.623 12.7034 11.9805C12.5012 12.335 12.2068 12.6089 11.8201 12.8022C11.4363 12.9927 10.9763 13.0879 10.4402 13.0879C9.6433 13.0879 9.02368 12.877 8.5813 12.4551C8.13892 12.0332 7.91772 11.4531 7.91772 10.7148V6.5752H8.9724V10.6401C8.9724 11.1704 9.09546 11.5615 9.34155 11.8135C9.58765 12.0654 9.96557 12.1914 10.4753 12.1914C11.4656 12.1914 11.9607 11.6714 11.9607 10.6313V6.5752H13.011Z' fill='%23373F45'/%3E%3Cpath d='M15.9146 13V6.5752H16.9649V13H15.9146Z' fill='%23373F45'/%3E%3Cpath d='M19.9255 13V6.5752H20.9758V12.0991H23.696V13H19.9255Z' fill='%23373F45'/%3E%3Cpath d='M28.2828 13H27.2325V7.47607H25.3428V6.5752H30.1724V7.47607H28.2828V13Z' fill='%23373F45'/%3E%3Cpath d='M41.9472 13H40.8046L39.7148 9.16796C39.6679 9.00097 39.6093 8.76074 39.539 8.44727C39.4687 8.13086 39.4262 7.91113 39.4116 7.78809C39.3823 7.97559 39.3339 8.21875 39.2665 8.51758C39.2021 8.81641 39.1479 9.03905 39.1039 9.18554L38.0405 13H36.8979L36.0673 9.7832L35.2236 6.5752H36.2958L37.2143 10.3193C37.3578 10.9199 37.4604 11.4502 37.5219 11.9102C37.5541 11.6611 37.6025 11.3828 37.6669 11.0752C37.7314 10.7676 37.79 10.5186 37.8427 10.3281L38.8886 6.5752H39.9301L41.0024 10.3457C41.1049 10.6943 41.2133 11.2158 41.3276 11.9102C41.3715 11.4912 41.477 10.958 41.644 10.3105L42.558 6.5752H43.6215L41.9472 13Z' fill='%23373F45'/%3E%3Cpath d='M45.7957 13V6.5752H46.846V13H45.7957Z' fill='%23373F45'/%3E%3Cpath d='M52.0258 13H50.9755V7.47607H49.0859V6.5752H53.9155V7.47607H52.0258V13Z' fill='%23373F45'/%3E%3Cpath d='M61.2312 13H60.1765V10.104H57.2146V13H56.1643V6.5752H57.2146V9.20312H60.1765V6.5752H61.2312V13Z' fill='%23373F45'/%3E%3C/svg%3E\");\n  background-position: center;\n  background-repeat: no-repeat;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  white-space: nowrap;\n  transition: transform .4s cubic-bezier(.5,0,.5,1) !important;\n  will-change: transform;\n  text-decoration: none;\n  text-indent: 100%;\n  text-align: center;\n}";
n(css$1,{"singleTag":true});

function BuiltWith({
  href,
  ...props
}) {
  return h$1("a", helper([{
    "attrs": {
      "href": href,
      "className": "formkit-powered-by-convertkit",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "data-element": "powered-by"
    }
  }, props]), ["Built with ConvertKit"]);
}

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in'];
const bgImage = '//pages.convertkit.com/assets/charlotte/bg.jpg';
const Charlotte = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = true,
      showLabels = false,
      newTab = false,
      hideWarnings = false,
      className = '',
      submitText = 'Send me the guide',
      disclaimerText = 'We respect your privacy. Unsubscribe at any time.',
      emailPlaceholder = 'Your email',
      namePlaceholder = 'Your first name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      headingText = 'Get our how to guide',
      format = 'inline',
      backgroundImage = bgImage
    } = props;
    return h("div", [!hideWarnings && !ALLOWED_FORMATS.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form charlotte ${className}`,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      },
      "style": {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '6px'
      }
    }, [h("div", {
      "attrs": {
        "data-style": "full"
      }
    }, [h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-background"
      },
      "style": {
        backgroundImage: `url(${backgroundImage})`
      }
    }), h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      },
      "style": {
        color: 'rgb(83, 83, 83)',
        fontSize: '28px',
        fontWeight: 700
      }
    }, [h("h1", [headingText])]), h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("div", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": nameLabel,
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(139, 139, 139)',
        borderColor: 'rgb(221, 224, 228)',
        fontWeight: 400,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": emailLabel,
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email",
        "id": "ck-email"
      },
      "style": {
        color: 'rgb(139, 139, 139)',
        borderColor: 'rgb(221, 224, 228)',
        fontWeight: 400,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit"
      },
      "style": {
        width: '100%',
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(246, 166, 171)',
        borderRadius: '3px',
        fontWeight: 700
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), h("div", {
      "attrs": {
        "className": "formkit-disclaimer",
        "data-element": "disclaimer"
      },
      "style": {
        color: 'rgb(139, 139, 139)',
        fontSize: '13px'
      }
    }, [disclaimerText]), options.settings.powered_by.show ? h(BuiltWith, {
      "attrs": {
        "href": options.settings.powered_by.url,
        "data-variant": "dark"
      }
    }) : null])])])]);
  }
};

// import Cocoa from './templates/cocoa'
// import Mills from './templates/mills'
// import Monterey from './templates/monterey'
// import Pine from './templates/pine'
// import Poplar from './templates/poplar'
// import Powell from './templates/powell'
// import Rainier from './templates/rainier'

const options = {
  settings: {
    after_subscribe: {
      action: 'message',
      success_message: 'Success! Now check your email to confirm your subscription.',
      redirect_url: ''
    },
    analytics: {
      google: null,
      facebook: null,
      segment: null,
      pinterest: null
    },
    modal: {
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    powered_by: {
      show: true,
      url: 'https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form'
    },
    recaptcha: {
      enabled: false
    },
    return_visitor: {
      action: 'show',
      custom_content: ''
    },
    slide_in: {
      display_in: 'bottom_right',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    sticky_bar: {
      display_in: 'top',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    }
  },
  uid: '',
  version: '5'
};

const renderTemplate = template => {
  const templateName = template.toLowerCase();
  const allTemplates = {
    minimal: Minimal,
    charlotte: Charlotte // clare: Clare,
    // cocoa: Cocoa,
    // mills: Mills,
    // monterey: Monterey,
    // pine: Pine,
    // poplar: Poplar,
    // powell: Powell,
    // rainier: Rainier,

  };

  if (!allTemplates.hasOwnProperty(templateName)) {
    const errorMessage = `The chosen template "${template}" is not yet supported`;
    throw new ReferenceError(errorMessage);
  }

  return allTemplates[templateName];
};

const useTemplate = template => {
  console.log({
    template
  });
  return {
    options,
    Template: renderTemplate(template)
  };
};

function formFormat(format) {
  switch (format) {
    case 'slidein':
      return 'slide in';

    case 'sticky':
      return 'sticky bar';

    default:
      return format;
  }
}

const Form = {
  functional: true,
  render: (h, {
    props
  }) => {
    const template = props.template || 'minimal';
    const format = props.format || 'inline';
    const {
      options,
      Template
    } = useTemplate(template);
    return h(Template, {
      "props": { ...props
      },
      "attrs": {
        "options": options,
        "format": formFormat(format)
      }
    });
  }
};

const ConvertKitForm = {
  functional: true,
  render: (h, {
    props
  }) => {
    const action = `https://app.convertkit.com/forms/${props.formId}/subscriptions`;
    return h(Form, {
      "props": { ...props
      },
      "attrs": {
        "action": action,
        "formId": props.formId
      }
    });
  }
};

export default ConvertKitForm;

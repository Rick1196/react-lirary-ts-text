'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative; }\n\n.TextInput {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  color: #121212;\n  font-size: 28px;\n  align-self: stretch;\n  flex: 1 1 0%;\n  border: none;\n  background: transparent;\n  display: flex;\n  flex-direction: column; }\n\n.Rect2 {\n  height: 3px;\n  background-color: black;\n  align-self: stretch; }\n";
styleInject(css_248z);

var EmailInputComponent = /** @class */ (function (_super) {
    __extends(EmailInputComponent, _super);
    function EmailInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailInputComponent.prototype.render = function () {
        return jsxRuntime.jsxs("div", __assign({ className: "Container" }, this.props, { children: [jsxRuntime.jsx("label", __assign({ htmlFor: this.props.idInput || "email" }, { children: this.props.labelInput || "" }), void 0),
                jsxRuntime.jsx("input", { className: "TextInput", type: this.props.typeInput || "text", id: this.props.idInput || "email", name: this.props.nameInput || "email", placeholder: this.props.textInput || "Email" }, void 0),
                jsxRuntime.jsx("span", { className: "Rect2" }, void 0)] }), void 0);
    };
    return EmailInputComponent;
}(react.Component));

exports.EmailInputComponent = EmailInputComponent;

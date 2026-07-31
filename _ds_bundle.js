/* @ds-bundle: {"format":4,"namespace":"ProFilyDesignSystem_cdddaa","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"270a70ae9626","components/core/Button.jsx":"d45ea49ec82a","components/core/Card.jsx":"e713c60714ef","components/core/IconButton.jsx":"c92b873ff3e6","components/core/Tag.jsx":"f35aa260b106","components/feedback/Dialog.jsx":"0295ec95de1b","components/feedback/Toast.jsx":"31a76903ab27","components/feedback/Tooltip.jsx":"da9275a85877","components/forms/Checkbox.jsx":"b089dbad8e24","components/forms/Input.jsx":"cae141befb82","components/forms/Radio.jsx":"7255b230131e","components/forms/Select.jsx":"29b3f4f8ab62","components/forms/Switch.jsx":"affe5f6d2f05","components/navigation/Tabs.jsx":"bc1a3655ddd2","ui_kits/dashboard/ChatScreen.jsx":"36f57f537b21","ui_kits/dashboard/DocumentsScreen.jsx":"18faf3e682f3","ui_kits/dashboard/LoginScreen.jsx":"7c4e86f63612","ui_kits/dashboard/OverviewScreen.jsx":"f4661e7cb747","ui_kits/dashboard/SettingsScreen.jsx":"dab4048257c5","ui_kits/dashboard/Sidebar.jsx":"e6b15c842ea7","ui_kits/dashboard/TaxesScreen.jsx":"c5611e6e572e","ui_kits/dashboard/Topbar.jsx":"5d55586fbc11","ui_kits/dashboard/doc-page.js":"371bab66f42d","ui_kits/marketing-site/Features.jsx":"b87d93d77901","ui_kits/marketing-site/Hero.jsx":"f3ac7d07c136","ui_kits/marketing-site/Pricing.jsx":"671232079dfb","ui_kits/marketing-site/SiteFooter.jsx":"eb3af22674f8","ui_kits/marketing-site/SiteHeader.jsx":"f1c485b90379"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ProFilyDesignSystem_cdddaa = window.ProFilyDesignSystem_cdddaa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)'
  },
  info: {
    bg: 'var(--info-bg)',
    fg: 'var(--navy-700)'
  },
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success)'
  },
  warning: {
    bg: 'var(--warning-bg)',
    fg: '#8a611b'
  },
  danger: {
    bg: 'var(--danger-bg)',
    fg: 'var(--danger)'
  }
};
function Badge({
  tone = 'neutral',
  children
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      background: t.bg,
      color: t.fg
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--fs-body-sm)'
  },
  md: {
    padding: '12px 22px',
    fontSize: 'var(--fs-body)'
  },
  lg: {
    padding: '16px 28px',
    fontSize: 'var(--fs-body-lg)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick,
  style
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: `all var(--duration-fast) var(--ease-standard)`,
    opacity: disabled ? 0.5 : 1,
    ...SIZES[size],
    ...style
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-accent)'
    },
    dark: {
      background: 'var(--accent-dark)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--accent-dark)',
      border: '1.5px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-dark)'
    },
    danger: {
      background: 'var(--danger)',
      color: '#fff'
    }
  };
  const hover = {
    primary: {
      background: 'var(--accent-primary-hover)'
    },
    dark: {
      background: 'var(--accent-dark-hover)'
    },
    secondary: {
      background: 'var(--surface-sunken)'
    },
    ghost: {
      background: 'var(--surface-sunken)'
    },
    danger: {
      background: '#c9463f'
    }
  };
  const [isHover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(isHover && !disabled ? hover[variant] : {})
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  subtitle,
  children,
  footer,
  padded = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      padding: padded ? '24px' : 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-h5)',
      color: 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)',
      marginTop: '4px'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '12px'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  onClick,
  variant = 'ghost',
  size = 40,
  'aria-label': ariaLabel
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--accent-dark)'
    },
    solid: {
      background: 'var(--accent-primary)',
      color: '#fff'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--accent-dark)',
      border: '1.5px solid var(--border-default)'
    }
  };
  const [isHover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...variants[variant],
      ...(isHover ? {
        background: 'var(--surface-sunken)'
      } : {})
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 10px 5px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--sky-100)',
      color: 'var(--navy-700)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--navy-700)',
      cursor: 'pointer',
      fontSize: '14px',
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(8,36,48,0.5)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '28px',
      width: '420px',
      maxWidth: '90vw',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-h5)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      fontSize: '20px',
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--navy-900)',
    accent: 'var(--sky-400)'
  },
  success: {
    bg: 'var(--navy-900)',
    accent: 'var(--success)'
  },
  danger: {
    bg: 'var(--navy-900)',
    accent: 'var(--danger)'
  }
};
function Toast({
  tone = 'info',
  children,
  onClose
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: t.bg,
      color: '#fff',
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      borderLeft: `3px solid ${t.accent}`,
      maxWidth: '340px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,0.7)',
      cursor: 'pointer',
      fontSize: '16px'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--navy-900)',
      color: '#fff',
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--fs-caption)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '20px',
      height: '20px',
      borderRadius: '6px',
      border: `1.5px solid ${checked ? 'var(--accent-primary)' : 'var(--border-default)'}`,
      background: checked ? 'var(--accent-primary)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "white",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  helpText,
  error,
  icon
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '11px 16px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)'}`,
      background: 'var(--surface-card)',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, icon, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      border: 'none',
      outline: 'none',
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)',
      background: 'transparent'
    }
  })), (helpText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(),
    style: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--accent-primary)' : 'var(--border-default)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: 'none',
      width: '100%',
      padding: '11px 40px 11px 16px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${focused ? 'var(--border-focus)' : 'var(--border-default)'}`,
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '42px',
      height: '24px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-primary)' : 'var(--gray-300)',
      position: 'relative',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: checked ? '21px' : '3px',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1.5px solid var(--border-subtle)'
    }
  }, tabs.map(t => {
    const isActive = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange && onChange(t),
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '12px 18px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body)',
        fontWeight: isActive ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: isActive ? 'var(--accent-dark)' : 'var(--text-muted)',
        borderBottom: `2px solid ${isActive ? 'var(--accent-primary)' : 'transparent'}`,
        marginBottom: '-1.5px',
        transition: 'all var(--duration-fast) var(--ease-standard)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ChatScreen.jsx
try { (() => {
const {
  Card,
  Input,
  Button
} = window.ProFilyDesignSystem_cdddaa;
const msgs = [{
  from: 'them',
  text: 'Oi Marina! Recebi sua nota fiscal de julho, já está tudo certo.',
  time: '09:12'
}, {
  from: 'me',
  text: 'Perfeito! E sobre o DAS deste mês, já posso pagar?',
  time: '09:15'
}, {
  from: 'them',
  text: 'Pode sim, a guia já está disponível na aba Impostos. Qualquer dúvida me chama.',
  time: '09:16'
}];
function ChatScreen() {
  return /*#__PURE__*/React.createElement(Card, {
    padded: false,
    style: {
      height: '520px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '18px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--navy-900)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, "RS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Rafael Souza"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--success)'
    }
  }, "\u25CF Seu contador dedicado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      overflowY: 'auto'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start',
      maxWidth: '70%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: m.from === 'me' ? 'var(--accent-primary)' : 'var(--surface-sunken)',
      color: m.from === 'me' ? '#fff' : 'var(--text-primary)',
      padding: '12px 16px',
      borderRadius: '16px',
      borderBottomRightRadius: m.from === 'me' ? '4px' : '16px',
      borderBottomLeftRadius: m.from === 'me' ? '16px' : '4px',
      fontSize: '14px',
      lineHeight: 1.5
    }
  }, m.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)',
      marginTop: '4px',
      textAlign: m.from === 'me' ? 'right' : 'left'
    }
  }, m.time)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      padding: '16px 24px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Escreva uma mensagem..."
  })), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "send",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Enviar")));
}
window.ChatScreen = ChatScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ChatScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DocumentsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Tag,
  Input
} = window.ProFilyDesignSystem_cdddaa;
const rows = [{
  name: 'NF-e 00234.pdf',
  type: 'Nota Fiscal',
  date: '28/07/2026',
  status: 'success',
  label: 'Emitida'
}, {
  name: 'Boleto_DAS_Julho.pdf',
  type: 'Boleto',
  date: '20/07/2026',
  status: 'warning',
  label: 'A vencer'
}, {
  name: 'NF-e 00233.pdf',
  type: 'Nota Fiscal',
  date: '15/07/2026',
  status: 'success',
  label: 'Emitida'
}, {
  name: 'Extrato_Bancario_Jun.pdf',
  type: 'Extrato',
  date: '02/07/2026',
  status: 'neutral',
  label: 'Arquivado'
}, {
  name: 'DAS_Junho.pdf',
  type: 'Boleto',
  date: '05/07/2026',
  status: 'danger',
  label: 'Atrasado'
}];
function DocumentsScreen() {
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement(Card, {
    title: "Documentos",
    subtitle: "Notas fiscais, boletos e extratos",
    footer: null,
    padded: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '16px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '280px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar documento",
    value: q,
    onChange: e => setQ(e.target.value),
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search",
      style: {
        width: 16,
        height: 16,
        color: 'var(--text-muted)'
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Todos"), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Julho 2026"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "upload",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Enviar documento"))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: 'left',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 4px',
      fontWeight: 500
    }
  }, "Documento"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 4px',
      fontWeight: 500
    }
  }, "Tipo"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 4px',
      fontWeight: 500
    }
  }, "Data"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 4px',
      fontWeight: 500
    }
  }, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 4px',
      fontSize: '14px',
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, r.name), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 4px',
      fontSize: '14px',
      color: 'var(--text-secondary)'
    }
  }, r.type), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 4px',
      fontSize: '14px',
      color: 'var(--text-secondary)'
    }
  }, r.date), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 4px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r.status
  }, r.label)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 4px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "download",
    style: {
      width: 16,
      height: 16,
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  })))))));
}
window.DocumentsScreen = DocumentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DocumentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/LoginScreen.jsx
try { (() => {
const {
  Input,
  Button
} = window.ProFilyDesignSystem_cdddaa;
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      padding: '40px',
      width: '380px',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profily-mark.png",
    style: {
      height: '52px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px',
      color: 'var(--navy-900)'
    }
  }, "ProFily"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-muted)'
    }
  }, "Entre para acessar seu painel")), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    placeholder: "voce@empresa.com.br"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Senha",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: onLogin,
    style: {
      width: '100%'
    }
  }, "Entrar"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, "Esqueceu a senha? ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Recuperar acesso"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/OverviewScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button
} = window.ProFilyDesignSystem_cdddaa;
const docs = [{
  name: 'NF-e 00234',
  date: '28/07/2026',
  status: 'success',
  label: 'Emitida'
}, {
  name: 'Boleto Simples Nacional',
  date: '20/07/2026',
  status: 'warning',
  label: 'A vencer'
}, {
  name: 'NF-e 00233',
  date: '15/07/2026',
  status: 'success',
  label: 'Emitida'
}, {
  name: 'DAS - Julho',
  date: '05/07/2026',
  status: 'danger',
  label: 'Atrasado'
}];
function OverviewScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Faturamento do m\xEAs",
    subtitle: "Julho 2026"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '32px',
      color: 'var(--navy-900)'
    }
  }, "R$ 48.200"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--success)',
      marginTop: '4px'
    }
  }, "\u2191 12% vs. junho")), /*#__PURE__*/React.createElement(Card, {
    title: "Impostos a pagar",
    subtitle: "Pr\xF3ximos 30 dias"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '32px',
      color: 'var(--navy-900)'
    }
  }, "R$ 3.140"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      marginTop: '4px'
    }
  }, "2 guias pendentes")), /*#__PURE__*/React.createElement(Card, {
    title: "Documentos pendentes",
    subtitle: "Aguardando voc\xEA"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '32px',
      color: 'var(--navy-900)'
    }
  }, "3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      marginTop: '4px'
    }
  }, "Notas para conferir"))), /*#__PURE__*/React.createElement(Card, {
    title: "Atividade recente",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Ver tudo")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, docs.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: i < docs.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-text",
    style: {
      width: '18px',
      height: '18px',
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, d.date))), /*#__PURE__*/React.createElement(Badge, {
    tone: d.status
  }, d.label))))));
}
window.OverviewScreen = OverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SettingsScreen.jsx
try { (() => {
const {
  Card,
  Input,
  Switch,
  Button
} = window.ProFilyDesignSystem_cdddaa;
function SettingsScreen() {
  const [email, setEmail] = React.useState(true);
  const [whats, setWhats] = React.useState(true);
  const [dark, setDark] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '560px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Dados da empresa"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Raz\xE3o social",
    value: "Marina Costa Design LTDA",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CNPJ",
    value: "12.345.678/0001-90",
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Notifica\xE7\xF5es"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Notifica\xE7\xF5es por e-mail",
    checked: email,
    onChange: setEmail
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Notifica\xE7\xF5es por WhatsApp",
    checked: whats,
    onChange: setWhats
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Modo escuro",
    checked: dark,
    onChange: setDark
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Salvar altera\xE7\xF5es")));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
function Sidebar({
  active,
  onNavigate
}) {
  const items = [{
    id: 'overview',
    label: 'Visão Geral',
    icon: 'layout-dashboard'
  }, {
    id: 'documents',
    label: 'Documentos',
    icon: 'file-text'
  }, {
    id: 'taxes',
    label: 'Impostos',
    icon: 'receipt'
  }, {
    id: 'chat',
    label: 'Chat com contador',
    icon: 'message-circle'
  }, {
    id: 'settings',
    label: 'Configurações',
    icon: 'settings'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '240px',
      minWidth: '240px',
      background: 'var(--navy-900)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      gap: '28px',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profily-mark.png",
    style: {
      height: '32px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '20px'
    }
  }, "ProFily")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, items.map(it => {
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNavigate(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body)',
        fontWeight: isActive ? 600 : 500,
        background: isActive ? 'rgba(63,193,240,0.16)' : 'transparent',
        color: isActive ? 'var(--sky-400)' : 'rgba(255,255,255,0.75)',
        transition: 'all 120ms ease'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": it.icon,
      style: {
        width: '18px',
        height: '18px'
      }
    }), it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '14px',
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 'var(--radius-md)',
      fontSize: '13px',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Precisa de ajuda? Fale com seu contador dedicado a qualquer momento."));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/TaxesScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button
} = window.ProFilyDesignSystem_cdddaa;
const guides = [{
  name: 'DAS - Simples Nacional',
  competencia: 'Julho 2026',
  due: '20/08/2026',
  value: 'R$ 1.240',
  status: 'warning',
  label: 'A vencer'
}, {
  name: 'ISS',
  competencia: 'Julho 2026',
  due: '10/08/2026',
  value: 'R$ 620',
  status: 'warning',
  label: 'A vencer'
}, {
  name: 'FGTS',
  competencia: 'Junho 2026',
  due: '07/07/2026',
  value: 'R$ 980',
  status: 'danger',
  label: 'Atrasado'
}, {
  name: 'DAS - Simples Nacional',
  competencia: 'Junho 2026',
  due: '20/07/2026',
  value: 'R$ 1.180',
  status: 'success',
  label: 'Pago'
}];
function TaxesScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Calend\xE1rio de impostos",
    subtitle: "Vencimentos dos pr\xF3ximos 60 dias"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, guides.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderBottom: i < guides.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, g.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, "Compet\xEAncia ", g.competencia, " \xB7 vence em ", g.due)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '16px',
      color: 'var(--text-primary)'
    }
  }, g.value), /*#__PURE__*/React.createElement(Badge, {
    tone: g.status
  }, g.label), g.status !== 'success' && /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Pagar")))))));
}
window.TaxesScreen = TaxesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/TaxesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Topbar.jsx
try { (() => {
function Topbar({
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 32px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '22px',
      color: 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: '20px',
      height: '20px',
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      background: 'var(--sky-100)',
      color: 'var(--navy-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, "MC")));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Features.jsx
try { (() => {
const features = [{
  icon: 'file-text',
  title: 'Notas fiscais automáticas',
  desc: 'Emitimos suas notas fiscais e organizamos tudo em um só lugar.'
}, {
  icon: 'receipt',
  title: 'Impostos sem surpresas',
  desc: 'Calculamos e lembramos os vencimentos — você só aprova o pagamento.'
}, {
  icon: 'message-circle',
  title: 'Contador dedicado',
  desc: 'Fale direto com quem cuida da sua empresa, sem robôs de atendimento.'
}, {
  icon: 'trending-up',
  title: 'Relatórios claros',
  desc: 'Entenda a saúde financeira do seu negócio em poucos cliques.'
}];
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    style: {
      padding: '88px 64px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '34px',
      color: 'var(--navy-900)',
      textAlign: 'center',
      margin: '0 0 48px'
    }
  }, "Tudo que sua contabilidade precisa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '24px'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '48px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--sky-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": f.icon,
    style: {
      width: 22,
      height: 22,
      color: 'var(--navy-700)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '17px',
      color: 'var(--navy-900)'
    }
  }, f.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, f.desc)))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
const {
  Button,
  Badge
} = window.ProFilyDesignSystem_cdddaa;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '64px',
      padding: '96px 64px',
      background: 'var(--navy-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Contabilidade Digital"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '52px',
      lineHeight: 1.08,
      margin: 0
    }
  }, "Sua contabilidade, sempre em dia."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.8)',
      maxWidth: '480px',
      margin: 0
    }
  }, "ProFily cuida dos impostos, notas fiscais e obriga\xE7\xF5es da sua empresa \u2014 para voc\xEA focar no que faz seu neg\xF3cio crescer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Abrir minha conta"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    style: {
      background: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.3)'
    }
  }, "Falar com um especialista"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profily-mark.png",
    style: {
      height: '260px',
      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35))'
    }
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Pricing.jsx
try { (() => {
const {
  Button,
  Badge
} = window.ProFilyDesignSystem_cdddaa;
const plans = [{
  name: 'MEI',
  price: 'R$ 89',
  desc: 'Para microempreendedores individuais',
  features: ['1 nota fiscal/mês', 'Cálculo do DAS', 'Suporte por chat'],
  highlight: false
}, {
  name: 'Simples Nacional',
  price: 'R$ 249',
  desc: 'Para pequenas empresas em crescimento',
  features: ['Notas fiscais ilimitadas', 'Contador dedicado', 'Folha de pagamento', 'Relatórios financeiros'],
  highlight: true
}, {
  name: 'Empresarial',
  price: 'Sob consulta',
  desc: 'Para operações maiores e mais complexas',
  features: ['Lucro Presumido ou Real', 'Consultoria tributária', 'Atendimento prioritário'],
  highlight: false
}];
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      padding: '88px 64px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '34px',
      color: 'var(--navy-900)',
      textAlign: 'center',
      margin: '0 0 48px'
    }
  }, "Planos para cada fase do seu neg\xF3cio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '24px',
      maxWidth: '1040px',
      margin: '0 auto'
    }
  }, plans.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: p.highlight ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      boxShadow: p.highlight ? 'var(--shadow-md)' : 'none',
      position: 'relative'
    }
  }, p.highlight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-14px',
      left: '32px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Mais popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '20px',
      color: 'var(--navy-900)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '32px',
      color: 'var(--navy-900)'
    }
  }, p.price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, p.price.startsWith('R$') ? '/mês' : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, p.features.map((f, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: 'var(--success)'
    }
  }), f))), /*#__PURE__*/React.createElement(Button, {
    variant: p.highlight ? 'primary' : 'secondary',
    style: {
      marginTop: '8px'
    }
  }, "Escolher plano")))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SiteFooter.jsx
try { (() => {
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '48px 64px',
      background: 'var(--navy-900)',
      color: 'rgba(255,255,255,0.6)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profily-mark.png",
    style: {
      height: '22px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 600
    }
  }, "ProFily")), /*#__PURE__*/React.createElement("div", null, "\xA9 2026 ProFily Contabilidade Digital. Todos os direitos reservados."));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SiteHeader.jsx
try { (() => {
const {
  Button
} = window.ProFilyDesignSystem_cdddaa;
function SiteHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 64px',
      background: 'var(--surface-card)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profily-mark.png",
    style: {
      height: '34px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px',
      color: 'var(--navy-900)'
    }
  }, "ProFily")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '32px',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, "Recursos"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, "Planos"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, "Sobre")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Entrar"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Comece gr\xE1tis")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

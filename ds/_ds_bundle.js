/* @ds-bundle: {"format":4,"namespace":"AnsarDelPRamo_b0efe9","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"91f294840f59","components/core/Button.jsx":"dd57b96777b5","components/core/Card.jsx":"779d4ebd24b5","components/navigation/Nav.jsx":"a7d0d1b840bf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AnsarDelPRamo_b0efe9 = window.AnsarDelPRamo_b0efe9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'violet',
  style: extraStyle
}) {
  const variants = {
    violet: {
      background: 'rgba(90,53,152,0.22)',
      color: 'var(--color-violet-pastel)',
      border: '1px solid rgba(90,53,152,0.45)'
    },
    moss: {
      background: 'rgba(118,131,64,0.18)',
      color: 'var(--color-moss)',
      border: '1px solid rgba(118,131,64,0.4)'
    },
    deep: {
      background: 'rgba(81,55,91,0.3)',
      color: 'var(--color-violet-pastel)',
      border: '1px solid rgba(81,55,91,0.55)'
    },
    warm: {
      background: 'rgba(174,154,187,0.15)',
      color: 'var(--color-violet-pastel)',
      border: '1px solid rgba(174,154,187,0.3)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      lineHeight: 1.6,
      ...variants[variant],
      ...extraStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  href,
  style: extraStyle
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease',
    textDecoration: 'none',
    letterSpacing: '0.02em',
    border: '1.5px solid transparent',
    opacity: disabled ? 0.45 : 1,
    userSelect: 'none',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      fontSize: '13px',
      padding: '8px 16px'
    },
    md: {
      fontSize: '15px',
      padding: '11px 24px'
    },
    lg: {
      fontSize: '17px',
      padding: '15px 36px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-violet-blue)',
      color: '#fff',
      borderColor: 'var(--color-violet-blue)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-violet-pastel)',
      borderColor: 'var(--color-violet-pastel)'
    },
    accent: {
      background: 'transparent',
      color: 'var(--color-moss)',
      borderColor: 'var(--color-moss)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-violet-pastel)',
      borderColor: 'transparent'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...extraStyle
  };
  if (href) {
    return React.createElement('a', {
      href,
      style
    }, children);
  }
  return React.createElement('button', {
    onClick,
    disabled,
    style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  subtitle,
  body,
  image,
  tag,
  children,
  style: extraStyle
}) {
  const wrap = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-sm)',
    overflow: 'hidden',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    ...extraStyle
  };
  const inner = {
    padding: 'var(--padding-card)',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };
  return React.createElement('div', {
    style: wrap
  }, image && React.createElement('div', {
    style: {
      position: 'relative',
      height: '180px',
      flexShrink: 0
    }
  }, React.createElement('img', {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent 40%, var(--surface-card) 100%)'
    }
  })), React.createElement('div', {
    style: inner
  }, tag && React.createElement('span', {
    style: {
      fontSize: '11px',
      color: 'var(--color-moss)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontWeight: 600,
      marginBottom: '10px',
      display: 'block'
    }
  }, tag), title && React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      color: 'var(--text-primary)',
      margin: '0 0 4px',
      lineHeight: 1.2,
      fontWeight: 600
    }
  }, title), subtitle && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: '15px',
      color: 'var(--color-violet-pastel)',
      margin: '0 0 16px',
      lineHeight: 1.4
    }
  }, subtitle), body && React.createElement('p', {
    style: {
      fontSize: '14px',
      color: 'var(--text-secondary)',
      lineHeight: 1.75,
      margin: 0,
      flex: 1
    }
  }, body), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function Nav({
  links = [],
  activePath = '/',
  logoSrc,
  onLinkClick,
  style: extraStyle
}) {
  const nav = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 48px',
    height: '72px',
    background: 'rgba(6,4,9,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border-subtle)',
    fontFamily: 'var(--font-body)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    ...extraStyle
  };
  const logoWrap = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none'
  };
  const logoText = {
    fontFamily: 'var(--font-display)',
    fontSize: '18px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    letterSpacing: '0.03em',
    lineHeight: 1
  };
  const linkStyle = active => ({
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 500,
    color: active ? 'var(--color-moss)' : 'var(--color-violet-pastel)',
    textDecoration: 'none',
    letterSpacing: '0.04em',
    paddingBottom: '2px',
    borderBottom: active ? '1px solid var(--color-moss)' : '1px solid transparent',
    transition: 'color 0.18s, border-color 0.18s'
  });
  const linksWrap = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  };
  return React.createElement('nav', {
    style: nav
  }, React.createElement('a', {
    href: '/',
    style: logoWrap
  }, logoSrc && React.createElement('img', {
    src: logoSrc,
    alt: 'Ansar del Páramo',
    style: {
      height: '36px',
      width: 'auto'
    }
  }), !logoSrc && React.createElement('span', {
    style: logoText
  }, 'Ansar del Páramo')), React.createElement('div', {
    style: linksWrap
  }, links.map(link => React.createElement('a', {
    key: link.href,
    href: link.href,
    style: linkStyle(activePath === link.href),
    onClick: onLinkClick ? e => {
      e.preventDefault();
      onLinkClick(link);
    } : undefined
  }, link.label))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Nav = __ds_scope.Nav;

})();

import{r as l,R as S}from"./index-pP6CS22B.js";const B={xs:"0.25rem",sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.5rem","5xl":"3rem"},k={sm:"0.625rem",md:"0.875rem",lg:"1.125rem",xl:"1.5rem",pill:"999px"},T={fontSans:"'Plus Jakarta Sans', 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",fontDisplay:"'Plus Jakarta Sans', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",fontMono:"'IBM Plex Mono', monospace",textXs:"0.75rem",leadingXs:"1rem",textSm:"0.875rem",leadingSm:"1.25rem",textBase:"1rem",leadingBase:"1.5rem",textLg:"1.125rem",leadingLg:"1.75rem",textXl:"1.375rem",leadingXl:"1.875rem",text2xl:"1.75rem",leading2xl:"2.125rem",text3xl:"2.25rem",leading3xl:"2.75rem"};function p(d){return{colors:d,spacing:{...B},radius:{...k},typography:{...T}}}const v=[{id:"light",name:"Cloud",description:"Neutral enterprise surface with crisp blue brand accents.",tokens:p({background:"#f5f7fb",foreground:"#0f172a",surface:"#ffffff",surfaceElevated:"#ffffff",surfaceMuted:"#eef2f7",border:"#d8e0ea",input:"#cbd5e1",ring:"#2563eb",primary:"#2563eb",primaryForeground:"#ffffff",secondary:"#dbe7ff",secondaryForeground:"#16315f",accent:"#eaf2ff",accentForeground:"#17315d",muted:"#e8edf5",mutedForeground:"#5b6b82",destructive:"#dc2626",destructiveForeground:"#ffffff",destructiveSoft:"#fef2f2",destructiveBorder:"#fecaca",success:"#10b981",successForeground:"#ffffff",successSoft:"#ecfdf5",successBorder:"#a7f3d0",warning:"#f59e0b",warningForeground:"#422006",warningSoft:"#fffbeb",warningBorder:"#fde68a",info:"#0ea5e9",infoForeground:"#ffffff",infoSoft:"#f0f9ff",infoBorder:"#bae6fd",overlay:"#020617",shadow:"#020617",sidebar:"#ffffff",sidebarForeground:"#0f172a",sidebarAccent:"#eff6ff",sidebarBorder:"#d8e0ea"})},{id:"navy",name:"Navy",description:"Deep product shell inspired by finance and analytics dashboards.",tokens:p({background:"#061024",foreground:"#eef4ff",surface:"#0d1831",surfaceElevated:"#132244",surfaceMuted:"#172344",border:"#25365c",input:"#25365c",ring:"#7ab0ff",primary:"#7ab0ff",primaryForeground:"#081124",secondary:"#16213e",secondaryForeground:"#eef4ff",accent:"#172344",accentForeground:"#eef4ff",muted:"#14213a",mutedForeground:"#9fb1d1",destructive:"#ff7a7a",destructiveForeground:"#081124",destructiveSoft:"#35131a",destructiveBorder:"#6b2530",success:"#34d399",successForeground:"#042f1f",successSoft:"#0d3026",successBorder:"#185240",warning:"#fbbf24",warningForeground:"#3b2502",warningSoft:"#33240a",warningBorder:"#6b4e17",info:"#38bdf8",infoForeground:"#082f49",infoSoft:"#0d2e40",infoBorder:"#1f5572",overlay:"#010511",shadow:"#000000",sidebar:"#040a19",sidebarForeground:"#eef4ff",sidebarAccent:"#172344",sidebarBorder:"#25365c"})},{id:"graphite",name:"Graphite",description:"Subtle dark theme tuned for product teams and editorial tooling.",tokens:p({background:"#0e1116",foreground:"#f3f4f6",surface:"#161b22",surfaceElevated:"#1d2430",surfaceMuted:"#202938",border:"#313b4d",input:"#313b4d",ring:"#60a5fa",primary:"#60a5fa",primaryForeground:"#08111f",secondary:"#1d2430",secondaryForeground:"#f3f4f6",accent:"#263041",accentForeground:"#f3f4f6",muted:"#202938",mutedForeground:"#9ba4b4",destructive:"#f87171",destructiveForeground:"#1f1111",destructiveSoft:"#321616",destructiveBorder:"#5c2525",success:"#22c55e",successForeground:"#06260f",successSoft:"#122b1a",successBorder:"#245433",warning:"#fbbf24",warningForeground:"#3b2502",warningSoft:"#32270d",warningBorder:"#604c1e",info:"#38bdf8",infoForeground:"#082f49",infoSoft:"#102939",infoBorder:"#24556f",overlay:"#020617",shadow:"#000000",sidebar:"#11161d",sidebarForeground:"#f3f4f6",sidebarAccent:"#202938",sidebarBorder:"#313b4d"})}],M=Object.fromEntries(v.map(d=>[d.id,d])),y=l.createContext(null);function I(d,s,e){return Math.min(Math.max(d,s),e)}function F(d){const s=d.trim(),e=s.startsWith("#")?s.slice(1):s;return e.length===3?`#${e.split("").map(n=>`${n}${n}`).join("")}`:`#${e.slice(0,6)}`}function r(d){const s=F(d).replace("#",""),e=parseInt(s.slice(0,2),16)/255,n=parseInt(s.slice(2,4),16)/255,a=parseInt(s.slice(4,6),16)/255,o=Math.max(e,n,a),t=Math.min(e,n,a),i=(o+t)/2;if(o===t)return`0 0% ${Math.round(i*100)}%`;const f=o-t,b=i>.5?f/(2-o-t):f/(o+t);let u=0;switch(o){case e:u=(n-a)/f+(n<a?6:0);break;case n:u=(a-e)/f+2;break;default:u=(e-n)/f+4;break}return u/=6,`${Math.round(u*360)} ${Math.round(b*100)}% ${Math.round(i*100)}%`}function E(d,s){return{...d,tokens:{...d.tokens,colors:{...d.tokens.colors,...s.colors},radius:{...d.tokens.radius,...s.radius}}}}function N(d,s){const{colors:e,spacing:n,radius:a,typography:o}=s.tokens,t={"--background":r(e.background),"--foreground":r(e.foreground),"--surface":r(e.surface),"--surface-elevated":r(e.surfaceElevated),"--surface-muted":r(e.surfaceMuted),"--card":r(e.surface),"--card-foreground":r(e.foreground),"--popover":r(e.surfaceElevated),"--popover-foreground":r(e.foreground),"--border":r(e.border),"--input":r(e.input),"--ring":r(e.ring),"--primary":r(e.primary),"--primary-foreground":r(e.primaryForeground),"--secondary":r(e.secondary),"--secondary-foreground":r(e.secondaryForeground),"--accent":r(e.accent),"--accent-foreground":r(e.accentForeground),"--muted":r(e.muted),"--muted-foreground":r(e.mutedForeground),"--destructive":r(e.destructive),"--destructive-foreground":r(e.destructiveForeground),"--destructive-soft":r(e.destructiveSoft),"--destructive-border":r(e.destructiveBorder),"--success":r(e.success),"--success-foreground":r(e.successForeground),"--success-soft":r(e.successSoft),"--success-border":r(e.successBorder),"--warning":r(e.warning),"--warning-foreground":r(e.warningForeground),"--warning-soft":r(e.warningSoft),"--warning-border":r(e.warningBorder),"--info":r(e.info),"--info-foreground":r(e.infoForeground),"--info-soft":r(e.infoSoft),"--info-border":r(e.infoBorder),"--overlay":r(e.overlay),"--shadow-color":r(e.shadow),"--sidebar":r(e.sidebar),"--sidebar-foreground":r(e.sidebarForeground),"--sidebar-accent":r(e.sidebarAccent),"--sidebar-border":r(e.sidebarBorder),"--radius":a.md,"--ds-radius-sm":a.sm,"--ds-radius-md":a.md,"--ds-radius-lg":a.lg,"--ds-radius-xl":a.xl,"--ds-radius-pill":a.pill,"--ds-space-xs":n.xs,"--ds-space-sm":n.sm,"--ds-space-md":n.md,"--ds-space-lg":n.lg,"--ds-space-xl":n.xl,"--ds-space-2xl":n["2xl"],"--ds-space-3xl":n["3xl"],"--ds-space-4xl":n["4xl"],"--ds-space-5xl":n["5xl"],"--ds-font-sans":o.fontSans,"--ds-font-display":o.fontDisplay,"--ds-font-mono":o.fontMono,"--ds-text-xs":o.textXs,"--ds-leading-xs":o.leadingXs,"--ds-text-sm":o.textSm,"--ds-leading-sm":o.leadingSm,"--ds-text-base":o.textBase,"--ds-leading-base":o.leadingBase,"--ds-text-lg":o.textLg,"--ds-leading-lg":o.leadingLg,"--ds-text-xl":o.textXl,"--ds-leading-xl":o.leadingXl,"--ds-text-2xl":o.text2xl,"--ds-leading-2xl":o.leading2xl,"--ds-text-3xl":o.text3xl,"--ds-leading-3xl":o.leading3xl};d.dataset.theme=s.id,d.classList.toggle("dark",s.id!=="light"),Object.entries(t).forEach(([i,f])=>{d.style.setProperty(i,f)})}function $({children:d,defaultTheme:s="light",themes:e=v,storageKey:n="shubh-ui-theme"}){const[a,o]=l.useState(s),[t,i]=l.useState({}),[f,b]=l.useState(!1);l.useEffect(()=>{const c=window.localStorage.getItem(n),g=window.localStorage.getItem(`${n}:overrides`);if(c&&e.some(m=>m.id===c)&&o(c),g)try{i(JSON.parse(g))}catch{window.localStorage.removeItem(`${n}:overrides`)}b(!0)},[n,e]);const u=l.useMemo(()=>{const c=e.find(g=>g.id===a)??M[s]??e[0];return E(c,t)},[s,t,a,e]);l.useEffect(()=>{f&&(N(document.documentElement,u),window.localStorage.setItem(n,a),window.localStorage.setItem(`${n}:overrides`,JSON.stringify(t)))},[f,t,n,u,a]);const h=l.useMemo(()=>({themeId:a,theme:u,themes:e,overrides:t,setTheme:c=>o(c),updateColor:(c,g)=>{i(m=>({...m,colors:{...m.colors,[c]:F(g)}}))},updateRadius:(c,g)=>{const m=parseFloat(g),w=Number.isNaN(m)?g:`${I(m,2,40)}px`;i(x=>({...x,radius:{...x.radius,[c]:w}}))},resetOverrides:()=>i({})}),[t,u,a,e]);return f?S.createElement(y.Provider,{value:h},d):null}function R(){const d=l.useContext(y);if(!d)throw new Error("useTheme must be used within ThemeProvider");return d}$.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'light'",computed:!1}},themes:{required:!1,tsType:{name:"Array",elements:[{name:"DesignTheme"}],raw:"DesignTheme[]"},description:"",defaultValue:{value:`[\r
  {\r
    id: 'light',\r
    name: 'Cloud',\r
    description: 'Neutral enterprise surface with crisp blue brand accents.',\r
    tokens: createTokens({\r
      background: '#f5f7fb',\r
      foreground: '#0f172a',\r
      surface: '#ffffff',\r
      surfaceElevated: '#ffffff',\r
      surfaceMuted: '#eef2f7',\r
      border: '#d8e0ea',\r
      input: '#cbd5e1',\r
      ring: '#2563eb',\r
      primary: '#2563eb',\r
      primaryForeground: '#ffffff',\r
      secondary: '#dbe7ff',\r
      secondaryForeground: '#16315f',\r
      accent: '#eaf2ff',\r
      accentForeground: '#17315d',\r
      muted: '#e8edf5',\r
      mutedForeground: '#5b6b82',\r
      destructive: '#dc2626',\r
      destructiveForeground: '#ffffff',\r
      destructiveSoft: '#fef2f2',\r
      destructiveBorder: '#fecaca',\r
      success: '#10b981',\r
      successForeground: '#ffffff',\r
      successSoft: '#ecfdf5',\r
      successBorder: '#a7f3d0',\r
      warning: '#f59e0b',\r
      warningForeground: '#422006',\r
      warningSoft: '#fffbeb',\r
      warningBorder: '#fde68a',\r
      info: '#0ea5e9',\r
      infoForeground: '#ffffff',\r
      infoSoft: '#f0f9ff',\r
      infoBorder: '#bae6fd',\r
      overlay: '#020617',\r
      shadow: '#020617',\r
      sidebar: '#ffffff',\r
      sidebarForeground: '#0f172a',\r
      sidebarAccent: '#eff6ff',\r
      sidebarBorder: '#d8e0ea',\r
    }),\r
  },\r
  {\r
    id: 'navy',\r
    name: 'Navy',\r
    description: 'Deep product shell inspired by finance and analytics dashboards.',\r
    tokens: createTokens({\r
      background: '#061024',\r
      foreground: '#eef4ff',\r
      surface: '#0d1831',\r
      surfaceElevated: '#132244',\r
      surfaceMuted: '#172344',\r
      border: '#25365c',\r
      input: '#25365c',\r
      ring: '#7ab0ff',\r
      primary: '#7ab0ff',\r
      primaryForeground: '#081124',\r
      secondary: '#16213e',\r
      secondaryForeground: '#eef4ff',\r
      accent: '#172344',\r
      accentForeground: '#eef4ff',\r
      muted: '#14213a',\r
      mutedForeground: '#9fb1d1',\r
      destructive: '#ff7a7a',\r
      destructiveForeground: '#081124',\r
      destructiveSoft: '#35131a',\r
      destructiveBorder: '#6b2530',\r
      success: '#34d399',\r
      successForeground: '#042f1f',\r
      successSoft: '#0d3026',\r
      successBorder: '#185240',\r
      warning: '#fbbf24',\r
      warningForeground: '#3b2502',\r
      warningSoft: '#33240a',\r
      warningBorder: '#6b4e17',\r
      info: '#38bdf8',\r
      infoForeground: '#082f49',\r
      infoSoft: '#0d2e40',\r
      infoBorder: '#1f5572',\r
      overlay: '#010511',\r
      shadow: '#000000',\r
      sidebar: '#040a19',\r
      sidebarForeground: '#eef4ff',\r
      sidebarAccent: '#172344',\r
      sidebarBorder: '#25365c',\r
    }),\r
  },\r
  {\r
    id: 'graphite',\r
    name: 'Graphite',\r
    description: 'Subtle dark theme tuned for product teams and editorial tooling.',\r
    tokens: createTokens({\r
      background: '#0e1116',\r
      foreground: '#f3f4f6',\r
      surface: '#161b22',\r
      surfaceElevated: '#1d2430',\r
      surfaceMuted: '#202938',\r
      border: '#313b4d',\r
      input: '#313b4d',\r
      ring: '#60a5fa',\r
      primary: '#60a5fa',\r
      primaryForeground: '#08111f',\r
      secondary: '#1d2430',\r
      secondaryForeground: '#f3f4f6',\r
      accent: '#263041',\r
      accentForeground: '#f3f4f6',\r
      muted: '#202938',\r
      mutedForeground: '#9ba4b4',\r
      destructive: '#f87171',\r
      destructiveForeground: '#1f1111',\r
      destructiveSoft: '#321616',\r
      destructiveBorder: '#5c2525',\r
      success: '#22c55e',\r
      successForeground: '#06260f',\r
      successSoft: '#122b1a',\r
      successBorder: '#245433',\r
      warning: '#fbbf24',\r
      warningForeground: '#3b2502',\r
      warningSoft: '#32270d',\r
      warningBorder: '#604c1e',\r
      info: '#38bdf8',\r
      infoForeground: '#082f49',\r
      infoSoft: '#102939',\r
      infoBorder: '#24556f',\r
      overlay: '#020617',\r
      shadow: '#000000',\r
      sidebar: '#11161d',\r
      sidebarForeground: '#f3f4f6',\r
      sidebarAccent: '#202938',\r
      sidebarBorder: '#313b4d',\r
    }),\r
  },\r
]`,computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'shubh-ui-theme'",computed:!1}}}};export{$ as T,R as u};

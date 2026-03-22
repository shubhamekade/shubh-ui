import{C as c,a as n,b as o,c as m,B as h}from"./Card-D212nHEI.js";import{c as r,a as i,B as y}from"./Button-BJ2VQPJt.js";import{r as N}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=r("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=r("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=r("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=r("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),s=N.forwardRef(({className:e,sidebar:a,header:l,aside:d,children:b,contentClassName:g,...v},f)=>React.createElement("div",{ref:f,className:i("grid min-h-screen grid-cols-1 bg-background text-foreground lg:grid-cols-[18rem_minmax(0,1fr)]",e),...v},a?React.createElement("aside",{className:"hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col"},a):null,React.createElement("div",{className:"flex min-w-0 flex-col"},l?React.createElement("header",{className:"sticky top-0 z-30 border-b border-border bg-background/88 backdrop-blur-xl"},l):null,React.createElement("div",{className:i("grid flex-1 grid-cols-1 gap-2xl px-4 py-2xl sm:px-6 xl:grid-cols-[minmax(0,1fr)_20rem]",g)},React.createElement("main",{className:"min-w-0"},b),d?React.createElement("aside",{className:"hidden xl:block"},d):null))));s.displayName="DashboardShell";s.__docgenInfo={description:"",methods:[],displayName:"DashboardShell",props:{sidebar:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},aside:{required:!1,tsType:{name:"ReactNode"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const D={title:"Layouts/Dashboard Shell",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}},t={render:()=>React.createElement(s,{sidebar:React.createElement("div",{className:"flex h-full flex-col p-lg"},React.createElement("div",{className:"mb-xl flex items-center justify-between"},React.createElement("div",null,React.createElement("p",{className:"text-sm font-semibold"},"Enterprise UI"),React.createElement("p",{className:"text-xs text-sidebar-foreground/60"},"Runtime themed shell")),React.createElement(h,{variant:"primary"},"v2")),React.createElement("div",{className:"space-y-xs"},[E,w,R,C].map((e,a)=>React.createElement("button",{key:a,type:"button",className:"flex w-full items-center gap-sm rounded-xl px-md py-sm text-sm transition-colors hover:bg-sidebar-accent"},React.createElement(e,{className:"h-4 w-4"}),React.createElement("span",null,["Overview","Customers","Alerts","Settings"][a]))))),header:React.createElement("div",{className:"flex items-center justify-between px-6 py-4"},React.createElement("div",null,React.createElement("p",{className:"text-sm font-semibold"},"Operations"),React.createElement("p",{className:"text-xs text-muted-foreground"},"Composable navbar + sidebar + content shell")),React.createElement(y,{size:"sm"},"Invite user")),aside:React.createElement(c,null,React.createElement(n,null,React.createElement(o,{className:"text-base"},"Release Status")),React.createElement(m,{className:"space-y-sm"},React.createElement("div",{className:"rounded-xl border border-success-border bg-success-soft p-md text-success"},"18 services healthy"),React.createElement("div",{className:"rounded-xl border border-warning-border bg-warning-soft p-md text-warning-foreground"},"3 items need review")))},React.createElement("div",{className:"grid gap-lg md:grid-cols-2 xl:grid-cols-3"},["Revenue","Conversion","Retention"].map(e=>React.createElement(c,{key:e,variant:"elevated"},React.createElement(n,null,React.createElement(o,{className:"text-base"},e)),React.createElement(m,null,React.createElement("p",{className:"text-3xl font-semibold text-foreground"},"98.4%"),React.createElement("p",{className:"mt-2 text-sm text-muted-foreground"},"Token-based dashboard card content"))))))};var p,x,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DashboardShell sidebar={<div className="flex h-full flex-col p-lg">\r
          <div className="mb-xl flex items-center justify-between">\r
            <div>\r
              <p className="text-sm font-semibold">Enterprise UI</p>\r
              <p className="text-xs text-sidebar-foreground/60">Runtime themed shell</p>\r
            </div>\r
            <Badge variant="primary">v2</Badge>\r
          </div>\r
          <div className="space-y-xs">\r
            {[LayoutDashboard, Users, Bell, Settings].map((Icon, index) => <button key={index} type="button" className="flex w-full items-center gap-sm rounded-xl px-md py-sm text-sm transition-colors hover:bg-sidebar-accent">\r
                <Icon className="h-4 w-4" />\r
                <span>{['Overview', 'Customers', 'Alerts', 'Settings'][index]}</span>\r
              </button>)}\r
          </div>\r
        </div>} header={<div className="flex items-center justify-between px-6 py-4">\r
          <div>\r
            <p className="text-sm font-semibold">Operations</p>\r
            <p className="text-xs text-muted-foreground">Composable navbar + sidebar + content shell</p>\r
          </div>\r
          <Button size="sm">Invite user</Button>\r
        </div>} aside={<Card>\r
          <CardHeader>\r
            <CardTitle className="text-base">Release Status</CardTitle>\r
          </CardHeader>\r
          <CardContent className="space-y-sm">\r
            <div className="rounded-xl border border-success-border bg-success-soft p-md text-success">\r
              18 services healthy\r
            </div>\r
            <div className="rounded-xl border border-warning-border bg-warning-soft p-md text-warning-foreground">\r
              3 items need review\r
            </div>\r
          </CardContent>\r
        </Card>}>\r
      <div className="grid gap-lg md:grid-cols-2 xl:grid-cols-3">\r
        {['Revenue', 'Conversion', 'Retention'].map(title => <Card key={title} variant="elevated">\r
            <CardHeader>\r
              <CardTitle className="text-base">{title}</CardTitle>\r
            </CardHeader>\r
            <CardContent>\r
              <p className="text-3xl font-semibold text-foreground">98.4%</p>\r
              <p className="mt-2 text-sm text-muted-foreground">Token-based dashboard card content</p>\r
            </CardContent>\r
          </Card>)}\r
      </div>\r
    </DashboardShell>
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,D as default};

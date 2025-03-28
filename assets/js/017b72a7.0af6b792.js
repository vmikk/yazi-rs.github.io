"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[802],{379:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"plugins/overview","title":"Plugins (BETA)","description":"Learn how to extend Yazi with Lua plugins.","source":"@site/docs/plugins/overview.md","sourceDirName":"plugins","slug":"/plugins/overview","permalink":"/docs/plugins/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/plugins/overview.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"overview","sidebar_position":0,"sidebar_label":"Plugins (BETA)","description":"Learn how to extend Yazi with Lua plugins."},"sidebar":"docsSidebar","previous":{"title":"Image Preview","permalink":"/docs/image-preview"},"next":{"title":"Types","permalink":"/docs/plugins/types"}}');var t=s(3274),r=s(3623),l=s(4297),a=s(1218);const c={id:"overview",sidebar_position:0,sidebar_label:"Plugins (BETA)",description:"Learn how to extend Yazi with Lua plugins."},o="Plugins (BETA)",d={},h=[{value:"Usage",id:"usage",level:2},{value:"Functional plugin",id:"functional-plugin",level:3},{value:"Sync vs Async",id:"sync-vs-async",level:2},{value:"Sync context",id:"sync-context",level:3},{value:"Async context",id:"async-context",level:3},{value:"Annotations",id:"annotations",level:2},{value:"<code>@sync</code>",id:"@sync",level:3},{value:"<code>@since</code>",id:"@since",level:3},{value:"Interface",id:"interface",level:2},{value:"Previewer",id:"previewer",level:3},{value:"Preloader",id:"preloader",level:3},{value:"Sendable value",id:"sendable",level:2},{value:"Ownership transfer",id:"ownership",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Logging",id:"logging",level:3},{value:"Debugging preset plugins",id:"debugging-preset-plugins",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"plugins-beta",children:"Plugins (BETA)"})}),"\n",(0,t.jsxs)(n.p,{children:["You can extend Yazi's functionality through Lua plugins, which need to be placed in the ",(0,t.jsx)(n.code,{children:"plugins"})," subdirectory of Yazi's configuration directory, so either:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"~/.config/yazi/plugins/"})," on Unix-like systems."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"%AppData%\\yazi\\config\\plugins\\"})," on Windows."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"~/.config/yazi/\n\u251c\u2500\u2500 init.lua\n\u251c\u2500\u2500 plugins/\n\u2502\xa0\xa0 \u251c\u2500\u2500 foo.yazi/\n\u2502\xa0\xa0 \u2514\u2500\u2500 bar.yazi/\n\u2514\u2500\u2500 yazi.toml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Each plugin is a directory with a ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case",children:"kebab-case"})," name, ending in ",(0,t.jsx)(n.code,{children:".yazi"}),", and containing at least the following files:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"~/.config/yazi/plugins/bar.yazi/\n\u251c\u2500\u2500 main.lua\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 LICENSE\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"main.lua"})," is the entry point of this plugin."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"README.md"})," is the documentation of this plugin."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LICENSE"})," is the license file for this plugin."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"A plugin has two usages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#functional-plugin",children:"Functional plugin"}),": Bind the ",(0,t.jsx)(n.code,{children:"plugin"})," command to a key in ",(0,t.jsx)(n.code,{children:"keymap.toml"}),", and activate it by pressing the key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/configuration/yazi#plugin",children:"Custom previewers, preloaders"}),": Configure them as previewers or preloaders under ",(0,t.jsx)(n.code,{children:"[plugin]"})," of your ",(0,t.jsx)(n.code,{children:"yazi.toml"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"functional-plugin",children:"Functional plugin"}),"\n",(0,t.jsxs)(n.p,{children:["You can bind a ",(0,t.jsx)(n.code,{children:"plugin"})," command to a specific key in your ",(0,t.jsx)(n.code,{children:"keymap.toml"})," with:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument/Option"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[name]"})}),(0,t.jsx)(n.td,{children:"Required, the name of the plugin to run."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[args]"})}),(0,t.jsx)(n.td,{children:"Optional, shell-style arguments passed to the plugin."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.code,{children:"plugin test -- foo --bar --baz=qux"})," will run the ",(0,t.jsx)(n.code,{children:"test"})," plugin with the arguments ",(0,t.jsx)(n.code,{children:"foo --bar --baz=qux"})," in an async context."]}),"\n",(0,t.jsxs)(n.p,{children:["To access the arguments in the plugin, use ",(0,t.jsx)(n.code,{children:"job.args"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- ~/.config/yazi/plugins/test.yazi/main.lua\nreturn {\n\tentry = function(self, job)\n\t\tya.dbg(job.args[1])  -- "foo"\n\t\tya.dbg(job.args.bar) -- true\n\t\tya.dbg(job.args.baz) -- "qux"\n\tend,\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that currently Yazi only supports positional arguments (",(0,t.jsx)(n.code,{children:"foo"}),") and named arguments (",(0,t.jsx)(n.code,{children:"--bar"}),"), it does not support shorthand arguments like ",(0,t.jsx)(n.code,{children:"-a"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Shorthands will be treated as positional arguments at the moment, but as Yazi adds support for it in the future, their behavior will change. So please avoid using them to prevent any potential conflicts."}),"\n",(0,t.jsx)(n.h2,{id:"sync-vs-async",children:"Sync vs Async"}),"\n",(0,t.jsxs)(n.p,{children:["The plugin system is designed with an async-first philosophy. Therefore, unless specifically specified, such as the ",(0,t.jsxs)(n.a,{href:"/docs/plugins/overview#@sync",children:[(0,t.jsx)(n.code,{children:"@sync"})," annotation"]}),", all plugins run in an async context."]}),"\n",(0,t.jsxs)(n.p,{children:["There is one exception: the user's ",(0,t.jsx)(n.code,{children:"init.lua"})," is synchronous, since ",(0,t.jsx)(n.code,{children:"init.lua"})," is often used to initialize plugin configurations:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- ~/.config/yazi/init.lua\nrequire("my-plugin"):setup {\n\tkey1 = "value1",\n\tkey2 = "value2",\n\t-- ...\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"-- ~/.config/yazi/plugins/my-plugin.yazi/main.lua\nreturn {\n\tsetup = function(state, opts)\n\t\t-- Save the user configuration to the plugin's state\n\t\tstate.key1 = opts.key1\n\t\tstate.key2 = opts.key2\n\tend,\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sync-context",children:"Sync context"}),"\n",(0,t.jsxs)(n.p,{children:["The sync context accompanies the entire app lifecycle, which is active during UI rendering (UI plugins), and on executing ",(0,t.jsx)(n.a,{href:"/docs/plugins/overview#@sync",children:"sync functional plugins"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For better performance, the sync context is created only at the app's start and remains singular throughout. Thus, plugins running within this context share states,\nprompting plugin developers to use plugin-specific state persistence for their plugins to prevent global space contamination:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'--- @sync entry\n-- ~/.config/yazi/test.yazi/main.lua\nreturn {\n  entry = function(state)\n    state.i = state.i or 0\n    ya.dbg("i = " .. state.i)\n\n    state.i = state.i + 1\n  end,\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Yazi initializes the ",(0,t.jsx)(n.code,{children:"state"})," for each ",(0,t.jsx)(n.em,{children:"sync"})," plugin before running, and it exists independently for them throughout the entire lifecycle.\nDo the ",(0,t.jsx)(n.code,{children:"plugin test"})," three times, and you will see the log output:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"i = 0\ni = 1\ni = 2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"async-context",children:"Async context"}),"\n",(0,t.jsx)(n.p,{children:"When a plugin is executed asynchronously, an isolated async context is created for it automatically."}),"\n",(0,t.jsx)(n.p,{children:"In this context, you can use all the async functions supported by Yazi, and it operates concurrently with the main thread, ensuring that the main thread is not blocked."}),"\n",(0,t.jsxs)(n.p,{children:["You can also obtain ",(0,t.jsx)(n.a,{href:"#sendable",children:"a small amount"}),' of app data from the sync context by calling a "sync function":']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- ~/.config/yazi/plugins/my-async-plugin.yazi/main.lua\nlocal set_state = ya.sync(function(state, a)\n\t-- You can get/set the state of the plugin through `state` parameter\n\t-- in the `sync()` block\n\tstate.a = a\nend)\n\nlocal get_state = ya.sync(function(state, b)\n\t-- You can access all app data through the `cx`,\n\t-- within the `sync()` block, in an async plugin\n\tlocal h = cx.active.current.hovered\n\treturn h and state.a .. tostring(h.url) or b\nend)\n\nreturn {\n\tentry = function()\n\t\tset_state("hello from a")\n\t\tlocal h = get_state("hello from b")\n\t\t-- Do some time-consuming work, such as reading file, network request, etc.\n\t\t-- It will execute concurrently with the main thread\n\tend,\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"ya.sync()"})," call must be at the top level:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"-- Wrong !!!\nlocal get_state\nif some_condition then\n\tget_state = ya.sync(function(state)\n\t\t-- ...\n\tend)\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Passing data into and returning data from a ",(0,t.jsx)(n.code,{children:"ya.sync()"})," block involves cross-thread data exchange. If the data contains userdata, it causes ",(0,t.jsx)(n.a,{href:"/docs/plugins/overview#ownership",children:"Ownership transfer"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"annotations",children:"Annotations"}),"\n",(0,t.jsx)(n.p,{children:"Each plugin can contain zero or more annotations that specify the behavior of the plugin during runtime."}),"\n",(0,t.jsxs)(n.p,{children:["Each annotation starts with ",(0,t.jsx)(n.code,{children:"---"}),", followed by ",(0,t.jsx)(n.code,{children:"@"})," and the annotation name, and ends with the annotation's value."]}),"\n",(0,t.jsxs)(n.p,{children:["These annotations ",(0,t.jsx)(n.em,{children:"must"})," be at the very top of the file, with no content before them, and no non-annotation content should appear between annotations."]}),"\n",(0,t.jsx)(n.h3,{id:"@sync",children:(0,t.jsx)(n.code,{children:"@sync"})}),"\n",(0,t.jsx)(n.p,{children:"Specifies that a method in the plugin runs in a sync context instead of the default async context. Available values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entry"}),": Run the ",(0,t.jsx)(n.code,{children:"entry"})," method in a sync context."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"peek"}),": Run the ",(0,t.jsx)(n.code,{children:"peek"})," method in a sync context. (Nightly only)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"--- @sync entry\nreturn {\n\tentry = function() end\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"@since",children:(0,t.jsx)(n.code,{children:"@since"})}),"\n",(0,t.jsx)(n.p,{children:"Specifies the minimum Yazi version that the plugin supports."}),"\n",(0,t.jsx)(n.p,{children:"If specified, and the user's Yazi version is lower than the specified one, an error will be triggered to prompt the user to upgrade their Yazi version, preventing the plugin from being executed accidentally:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"--- @since 25.2.13\nreturn {\n\t--- ...\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.h3,{id:"previewer",children:"Previewer"}),"\n",(0,t.jsxs)(n.p,{children:["A previewer needs to return a table that implements the ",(0,t.jsx)(n.code,{children:"peek"})," and ",(0,t.jsx)(n.code,{children:"seek"})," methods. Both methods take a table parameter ",(0,t.jsx)(n.code,{children:"job"})," and do not return any values:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local M = {}\n\nfunction M:peek(job)\n\t-- ...\nend\n\nfunction M:seek(job)\n\t-- ...\nend\n\nreturn M\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the user presses ",(0,t.jsx)("kbd",{children:"j"})," or ",(0,t.jsx)("kbd",{children:"k"})," to switch between hovering files, ",(0,t.jsx)(n.code,{children:"peek"})," is called, with:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"area"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/plugins/layout#rect",children:"Rect"})," of the available preview area."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"args"})}),(0,t.jsx)(n.td,{children:"Arguments passed to the previewer."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"file"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/plugins/types#shared.file",children:"File"})," to be previewed."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"skip"})}),(0,t.jsx)(n.td,{children:"Number of units to skip. The units depend on your previewer, such as lines for code and percentages for videos."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["When the user presses ",(0,t.jsx)("kbd",{children:"J"})," or ",(0,t.jsx)("kbd",{children:"K"})," to scroll the preview of the file, ",(0,t.jsx)(n.code,{children:"seek"})," is called, with:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"file"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/plugins/types#shared.file",children:"File"})," being scrolled."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"area"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/plugins/layout#rect",children:"Rect"})," of the available preview area."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"units"})}),(0,t.jsx)(n.td,{children:"Number of units to scroll."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The task of ",(0,t.jsx)(n.code,{children:"peek"})," is to draw in the preview area based on the values of ",(0,t.jsx)(n.code,{children:"file"})," and ",(0,t.jsx)(n.code,{children:"skip"}),". This process is asynchronous."]}),"\n",(0,t.jsxs)(n.p,{children:["The task of ",(0,t.jsx)(n.code,{children:"seek"})," is to change the value of ",(0,t.jsx)(n.code,{children:"skip"})," based on user behavior and trigger ",(0,t.jsx)(n.code,{children:"peek"})," again. It is synchronous, meaning you can access ",(0,t.jsx)(n.a,{href:"/docs/plugins/types#app-data",children:"app data"})," through ",(0,t.jsx)(n.code,{children:"cx"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["There are some preset previewers and preloaders you can refer to: ",(0,t.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/tree/shipped/yazi-plugin/preset/plugins",children:"Yazi Preset Plugins"})]}),"\n",(0,t.jsx)(n.h3,{id:"preloader",children:"Preloader"}),"\n",(0,t.jsxs)(n.p,{children:["You need to return a table that implements the ",(0,t.jsx)(n.code,{children:"preload"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local M = {}\n\nfunction M:preload(job)\n\t-- ...\n\treturn false, Err("some error")\nend\n\nreturn M\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It receives a ",(0,t.jsx)(n.code,{children:"job"})," parameter, which is a table:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"area"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/plugins/layout#rect",children:"Rect"})," of the available preview area."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"args"})}),(0,t.jsx)(n.td,{children:"Arguments passed to the preloader."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"file"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/plugins/types#shared.file",children:"File"})," to be preloaded."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"skip"})}),(0,t.jsxs)(n.td,{children:["Always ",(0,t.jsx)(n.code,{children:"0"})]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["And returns a ",(0,t.jsx)(n.code,{children:"(complete, err)"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"complete"}),": Required, Whether the preloading is complete, which is a boolean.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"true"}),": Marks the task as complete, and the task will not be called again."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"false"}),": Marks the task as incomplete, and the task will be retried until it's complete (returns ",(0,t.jsx)(n.code,{children:"true"}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"err"}),": Optional, the error to be logged."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"complete = false"}),", the preloader will be re-triggered at the next time point, such as when the user scrolls leading to a page switch. This is usually done for either:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Retrying in case of file loading failure"}),"\n",(0,t.jsx)(n.li,{children:"Refreshing the file status upon successful loading"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Yazi will automatically invoke the ",(0,t.jsx)(n.code,{children:"preload"})," concurrently for each file that matches the preload rules on the page."]}),"\n",(0,t.jsx)(n.h2,{id:"sendable",children:"Sendable value"}),"\n",(0,t.jsx)(n.p,{children:"Yazi's plugin can run concurrently on multiple threads. For better performance, only the following types of combinations can be used for inter-thread data exchange:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nil"}),"\n",(0,t.jsx)(n.li,{children:"Boolean"}),"\n",(0,t.jsx)(n.li,{children:"Number"}),"\n",(0,t.jsx)(n.li,{children:"String"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/plugins/types#shared.url",children:"Url"})}),"\n",(0,t.jsx)(n.li,{children:"Table and nested tables, with the above types as values"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ownership",children:"Ownership transfer"}),"\n",(0,t.jsxs)(n.p,{children:["Yazi's plugin system inherits ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/nomicon/ownership.html",children:"Rust's ownership and lifetime"})," concepts."]}),"\n",(0,t.jsxs)(n.p,{children:["All ",(0,t.jsx)(n.a,{href:"https://www.lua.org/pil/28.1.html",children:"userdata"})," are native Rust types that have their own ownership to ensure safe and efficient transfers across different threads, avoiding any memory reallocation overhead. Specifically:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/plugins/types#shared.url",children:"Url"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Passing these userdata to a cross-thread function like ",(0,t.jsx)(n.a,{href:"/docs/plugins/utils#ya.mgr_emit",children:(0,t.jsx)(n.code,{children:"ya.mgr_emit()"})})," transfers ownership. After transfer, the original userdata is no longer available, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local target = Url("/tmp")\nya.mgr_emit("cd", { target })  -- Ownership transferred\n\nya.dbg(tostring(url)) -- Error: userdata has been destructed\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To keep the original, clone a new userdata and pass that instead, but this allocates extra memory - ",(0,t.jsx)(n.code,{children:"Url()"})," constructor can accept a ",(0,t.jsx)(n.code,{children:"Url"})," userdata (Nightly only) and return a new clone of that ",(0,t.jsx)(n.code,{children:"Url"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'- ya.mgr_emit("cd", { target })\n+ ya.mgr_emit("cd", { Url(target) })\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A smarter way is to reverse the order of execution, use the ",(0,t.jsx)(n.code,{children:"target"})," before it's transferred, to avoid the need for cloning:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local target = Url("/tmp")\nlocal target_str = tostring(target)\n\nya.mgr_emit("cd", { target })  -- Ownership transferred\nya.dbg(target_str) -- No error\n'})}),"\n",(0,t.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,t.jsxs)(n.p,{children:["Please ensure that your ",(0,t.jsx)(n.code,{children:"~/.config/yazi/init.lua"})," includes valid Lua code with the correct syntax, otherwise will result in Yazi being unable to parse and execute your ",(0,t.jsx)(n.code,{children:"init.lua"})," to initialize."]}),"\n",(0,t.jsxs)(n.p,{children:["We recommend installing a Lua plugin in your editor for syntax checking to avoid any syntax errors.\nFor example, install the ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=sumneko.lua",children:"Lua plugin"})," for VSCode, and for Neovim, use ",(0,t.jsx)(n.a,{href:"https://github.com/neovim/nvim-lspconfig",children:"nvim-lspconfig"})," to configure your Lua LSP."]}),"\n",(0,t.jsxs)(n.p,{children:["If you have no experience with Lua, you can quickly get started through ",(0,t.jsx)(n.a,{href:"https://learnxinyminutes.com/docs/lua/",children:"https://learnxinyminutes.com/docs/lua/"})]}),"\n",(0,t.jsx)(n.h3,{id:"logging",children:"Logging"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to debug some runtime data, use ",(0,t.jsx)(n.a,{href:"/docs/plugins/utils#ya.dbg",children:(0,t.jsx)(n.code,{children:"ya.dbg()"})})," and ",(0,t.jsx)(n.a,{href:"/docs/plugins/utils#ya.err",children:(0,t.jsx)(n.code,{children:"ya.err()"})})," to print what you want to debug to either:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"~/.local/state/yazi/yazi.log"})," on Unix-like systems."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"%AppData%\\yazi\\state\\yazi.log"})," on Windows."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to set the ",(0,t.jsx)(n.code,{children:"YAZI_LOG"})," environment variable before starting Yazi:"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(a.A,{value:"unix",label:"Unix-like",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"YAZI_LOG=debug yazi\n"})})}),(0,t.jsx)(a.A,{value:"powershell",label:"PowerShell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'$env:YAZI_LOG = "debug"; yazi\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"otherwise, no logs will be recorded. Its value can be (in descending order of verbosity):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"debug"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"info"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"warn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"error"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"debugging-preset-plugins",children:"Debugging preset plugins"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Clone the latest source code."}),"\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.code,{children:"yazi-plugin/preset"})," folder and find the plugin you want to debug, then make changes, such as ",(0,t.jsx)(n.a,{href:"/docs/plugins/overview#logging",children:"logging certain runtime data"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/installation#source",children:"Build from source"})," and run the output binary with an appropriate ",(0,t.jsx)(n.code,{children:"YAZI_LOG"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can build in debug mode (without the ",(0,t.jsx)(n.code,{children:"--release"})," flag) for faster compilation at the expense of runtime performance."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1218:(e,n,s)=>{s.d(n,{A:()=>l});s(9474);var i=s(3394);const t={tabItem:"tabItem_pyzt"};var r=s(3274);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,l),hidden:s,children:n})}},4297:(e,n,s)=>{s.d(n,{A:()=>w});var i=s(9474),t=s(3394),r=s(9335),l=s(241),a=s(4421),c=s(2392),o=s(2921),d=s(2475);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const t=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=u(e),[l,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[o,h]=x({queryString:s,groupId:t}),[g,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,d.Dv)(s);return[t,(0,i.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),f=(()=>{const e=o??g;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=s(6791);const f={tabList:"tabList_GyOH",tabItem:"tabItem_o4hv"};var y=s(3274);function m(e){let{className:n,block:s,selectedValue:i,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),t=a[s].value;t!==i&&(o(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...r,className:(0,t.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,y.jsx)(m,{...n,...e}),(0,y.jsx)(b,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(n))}},3623:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(9474);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
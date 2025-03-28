"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[814],{1319:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>h,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"quick-start","title":"Quick Start","description":"A quick guide on the basic usage of Yazi.","source":"@site/docs/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/docs/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/quick-start.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"A quick guide on the basic usage of Yazi."},"sidebar":"docsSidebar","previous":{"title":"Installation","permalink":"/docs/installation"},"next":{"title":"Configuration","permalink":"/docs/configuration/overview"}}');var r=s(3274),t=s(3623),i=s(4297),l=s(1218);const c={sidebar_position:2,description:"A quick guide on the basic usage of Yazi."},h="Quick Start",a={},o=[{value:"Shell wrapper",id:"shell-wrapper",level:2},{value:"Keybindings",id:"keybindings",level:2},{value:"Navigation",id:"navigation",level:3},{value:"Selection",id:"selection",level:3},{value:"File operations",id:"file-operations",level:3},{value:"Copy paths",id:"copy-paths",level:3},{value:"Filter files",id:"filter-files",level:3},{value:"Find files",id:"find-files",level:3},{value:"Search files",id:"search-files",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Multi-tab",id:"multi-tab",level:3},{value:"Flavors",id:"flavors",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,r.jsxs)(n.p,{children:["Once you've ",(0,r.jsx)(n.a,{href:"/docs/installation",children:"installed Yazi"}),", start the program with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yazi\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Press ",(0,r.jsx)("kbd",{children:"q"})," to quit, ",(0,r.jsx)("kbd",{children:"F1"})," or ",(0,r.jsx)("kbd",{children:"~"})," to open the help menu."]}),"\n",(0,r.jsx)(n.h2,{id:"shell-wrapper",children:"Shell wrapper"}),"\n",(0,r.jsxs)(n.p,{children:["We suggest using this ",(0,r.jsx)(n.code,{children:"y"})," shell wrapper that provides the ability to change the current working directory when exiting Yazi."]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"bash-zsh",label:"Bash / Zsh",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'function y() {\n\tlocal tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd\n\tyazi "$@" --cwd-file="$tmp"\n\tif cwd="$(command cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then\n\t\tbuiltin cd -- "$cwd"\n\tfi\n\trm -f -- "$tmp"\n}\n'})})}),(0,r.jsx)(l.A,{value:"fish",label:"Fish",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'function y\n\tset tmp (mktemp -t "yazi-cwd.XXXXXX")\n\tyazi $argv --cwd-file="$tmp"\n\tif set cwd (command cat -- "$tmp"); and [ -n "$cwd" ]; and [ "$cwd" != "$PWD" ]\n\t\tbuiltin cd -- "$cwd"\n\tend\n\trm -f -- "$tmp"\nend\n'})})}),(0,r.jsx)(l.A,{value:"nushell",label:"Nushell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'def --env y [...args] {\n\tlet tmp = (mktemp -t "yazi-cwd.XXXXXX")\n\tyazi ...$args --cwd-file $tmp\n\tlet cwd = (open $tmp)\n\tif $cwd != "" and $cwd != $env.PWD {\n\t\tcd $cwd\n\t}\n\trm -fp $tmp\n}\n'})})}),(0,r.jsx)(l.A,{value:"elvish",label:"Elvish",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-elvish",children:"edit:add-var y~ {|@argv|\n\tuse str\n\tuse os\n\tuse file\n\tvar tmp = (os:temp-file)\n\tyazi $@argv --cwd-file=$tmp[name]\n\tvar cwd = (str:trim-space (slurp < $tmp))\n\tfile:close $tmp\n\tos:remove $tmp[name]\n\tif (and (not-eq $cwd '') (not-eq $cwd $pwd)) {\n\t\tcd $cwd\n\t}\n}\n"})})}),(0,r.jsx)(l.A,{value:"powershell",label:"PowerShell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:'function y {\n    $tmp = [System.IO.Path]::GetTempFileName()\n    yazi $args --cwd-file="$tmp"\n    $cwd = Get-Content -Path $tmp -Encoding UTF8\n    if (-not [String]::IsNullOrEmpty($cwd) -and $cwd -ne $PWD.Path) {\n        Set-Location -LiteralPath ([System.IO.Path]::GetFullPath($cwd))\n    }\n    Remove-Item -Path $tmp\n}\n'})})}),(0,r.jsxs)(l.A,{value:"command-prompt",label:"Command Prompt",children:[(0,r.jsxs)(n.p,{children:["Create the file ",(0,r.jsx)(n.code,{children:"y.cmd"})," and place it in your ",(0,r.jsx)(n.code,{children:"%PATH%"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cmd",children:'@echo off\n\nset tmpfile=%TEMP%\\yazi-cwd.%random%\n\nyazi %* --cwd-file="%tmpfile%"\n\n:: If the file does not exist, then exit\nif not exist "%tmpfile%" exit /b 0\n\n:: If the file exist, then read the content and change the directory\nset /p cwd=<"%tmpfile%"\nif not "%cwd%"=="" (\n    cd /d "%cwd%"\n)\ndel "%tmpfile%"\n'})})]}),(0,r.jsx)(l.A,{value:"xonsh",label:"Xonsh",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xonsh",children:'def _y(args):\n    tmp = $(mktemp -t "yazi-cwd.XXXXXX")\n    args.append(f"--cwd-file={tmp}")\n    $[yazi @(args)]\n    with open(tmp) as f:\n        cwd = f.read().strip()\n    if cwd != $PWD:\n        cd @(cwd)\n    rm -f -- @(tmp)\n\naliases["y"] = _y\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"To use it, copy the function into the configuration file of your respective shell."}),"\n",(0,r.jsxs)(n.p,{children:["Then use ",(0,r.jsx)(n.code,{children:"y"})," instead of ",(0,r.jsx)(n.code,{children:"yazi"})," to start, and press ",(0,r.jsx)("kbd",{children:"q"})," to quit, you'll see the CWD changed. Sometimes, you don't want to change, press ",(0,r.jsx)("kbd",{children:"Q"})," to quit."]}),"\n",(0,r.jsx)(n.h2,{id:"keybindings",children:"Keybindings"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For all keybindings, see the ",(0,r.jsxs)(n.a,{href:"https://github.com/sxyazi/yazi/blob/shipped/yazi-config/preset/keymap-default.toml",children:["default ",(0,r.jsx)(n.code,{children:"keymap.toml"})," file"]}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"navigation",children:"Navigation"}),"\n",(0,r.jsxs)(n.p,{children:["To navigate between files and directories you can use the arrow keys ",(0,r.jsx)("kbd",{children:"\u2190"}),", ",(0,r.jsx)("kbd",{children:"\u2193"}),", ",(0,r.jsx)("kbd",{children:"\u2191"})," and ",(0,r.jsx)("kbd",{children:"\u2192"}),"\nor Vim-like keys such as ",(0,r.jsx)("kbd",{children:"h"}),", ",(0,r.jsx)("kbd",{children:"j"}),", ",(0,r.jsx)("kbd",{children:"k"}),", ",(0,r.jsx)("kbd",{children:"l"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Alternate key"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"k"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"\u2191"})}),(0,r.jsx)(n.td,{children:"Move the cursor up"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"j"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"\u2193"})}),(0,r.jsx)(n.td,{children:"Move the cursor down"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"l"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"\u2192"})}),(0,r.jsx)(n.td,{children:"Enter hovered directory"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"h"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"\u2190"})}),(0,r.jsx)(n.td,{children:"Leave the current directory and into its parent"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Further navigation commands can be found in the table below."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"K"})}),(0,r.jsx)(n.td,{children:"Seek up 5 units in the preview"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"J"})}),(0,r.jsx)(n.td,{children:"Seek down 5 units in the preview"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"g"})," \u21d2 ",(0,r.jsx)("kbd",{children:"g"})]}),(0,r.jsx)(n.td,{children:"Move cursor to the top"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"G"})}),(0,r.jsx)(n.td,{children:"Move cursor to the bottom"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"z"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/configuration/keymap#manager.cd",children:"Cd"})," to a directory via zoxide"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"Z"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/configuration/keymap#manager.cd",children:"Cd"})," to a directory or ",(0,r.jsx)(n.a,{href:"/docs/configuration/keymap#manager.reveal",children:"reveal"})," a file via fzf"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"selection",children:"Selection"}),"\n",(0,r.jsx)(n.p,{children:"To select files and directories, the following commands are available."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"Space"})}),(0,r.jsx)(n.td,{children:"Toggle selection of hovered file/directory"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"v"})}),(0,r.jsx)(n.td,{children:"Enter visual mode (selection mode)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"V"})}),(0,r.jsx)(n.td,{children:"Enter visual mode (unset mode)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"Ctrl"})," + ",(0,r.jsx)("kbd",{children:"a"})]}),(0,r.jsx)(n.td,{children:"Select all files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"Ctrl"})," + ",(0,r.jsx)("kbd",{children:"r"})]}),(0,r.jsx)(n.td,{children:"Inverse selection of all files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"Esc"})}),(0,r.jsx)(n.td,{children:"Cancel selection"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"file-operations",children:"File operations"}),"\n",(0,r.jsx)(n.p,{children:"To interact with selected files/directories use any of the commands below."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"o"})}),(0,r.jsx)(n.td,{children:"Open selected files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"O"})}),(0,r.jsx)(n.td,{children:"Open selected files interactively"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"Enter"})}),(0,r.jsx)(n.td,{children:"Open selected files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"Shift"})," + ",(0,r.jsx)("kbd",{children:"Enter"})]}),(0,r.jsx)(n.td,{children:"Open selected files interactively (some terminals don't support it yet)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"Tab"})}),(0,r.jsx)(n.td,{children:"Show the file information"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"y"})}),(0,r.jsx)(n.td,{children:"Yank selected files (copy)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"x"})}),(0,r.jsx)(n.td,{children:"Yank selected files (cut)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"p"})}),(0,r.jsx)(n.td,{children:"Paste yanked files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"P"})}),(0,r.jsx)(n.td,{children:"Paste yanked files (overwrite if the destination exists)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"Y"})," or ",(0,r.jsx)("kbd",{children:"X"})]}),(0,r.jsx)(n.td,{children:"Cancel the yank status"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"d"})}),(0,r.jsx)(n.td,{children:"Trash selected files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"D"})}),(0,r.jsx)(n.td,{children:"Permanently delete selected files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"a"})}),(0,r.jsx)(n.td,{children:"Create a file (ends with / for directories)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"r"})}),(0,r.jsx)(n.td,{children:"Rename selected file(s)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"."})}),(0,r.jsx)(n.td,{children:"Toggle the visibility of hidden files"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Further file operation commands can be found in the table below."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:";"})}),(0,r.jsx)(n.td,{children:"Run a shell command"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:":"})}),(0,r.jsx)(n.td,{children:"Run a shell command (block until finishes)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"-"})}),(0,r.jsx)(n.td,{children:"Symlink the absolute path of yanked files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"_"})}),(0,r.jsx)(n.td,{children:"Symlink the relative path of yanked files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"Ctrl"})," + ",(0,r.jsx)("kbd",{children:"-"})]}),(0,r.jsx)(n.td,{children:"Hardlink yanked files"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"copy-paths",children:"Copy paths"}),"\n",(0,r.jsx)(n.p,{children:"To copy paths, use any of the following commands below."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Observation: ",(0,r.jsx)("kbd",{children:"c"})," \u21d2 ",(0,r.jsx)("kbd",{children:"d"})," indicates pressing the ",(0,r.jsx)("kbd",{children:"c"})," key followed by pressing the ",(0,r.jsx)("kbd",{children:"d"})," key."]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"c"})," \u21d2 ",(0,r.jsx)("kbd",{children:"c"})]}),(0,r.jsx)(n.td,{children:"Copy the file path"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"c"})," \u21d2 ",(0,r.jsx)("kbd",{children:"d"})]}),(0,r.jsx)(n.td,{children:"Copy the directory path"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"c"})," \u21d2 ",(0,r.jsx)("kbd",{children:"f"})]}),(0,r.jsx)(n.td,{children:"Copy the filename"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"c"})," \u21d2 ",(0,r.jsx)("kbd",{children:"n"})]}),(0,r.jsx)(n.td,{children:"Copy the filename without extension"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"filter-files",children:"Filter files"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"f"})}),(0,r.jsx)(n.td,{children:"Filter files"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"find-files",children:"Find files"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"/"})}),(0,r.jsx)(n.td,{children:"Find next file"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"?"})}),(0,r.jsx)(n.td,{children:"Find previous file"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"n"})}),(0,r.jsx)(n.td,{children:"Go to the next found"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"N"})}),(0,r.jsx)(n.td,{children:"Go to the previous found"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"search-files",children:"Search files"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"s"})}),(0,r.jsxs)(n.td,{children:["Search files by name using ",(0,r.jsx)(n.a,{href:"https://github.com/sharkdp/fd",children:"fd"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"S"})}),(0,r.jsxs)(n.td,{children:["Search files by content using ",(0,r.jsx)(n.a,{href:"https://github.com/BurntSushi/ripgrep",children:"ripgrep"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"Ctrl"})," + ",(0,r.jsx)("kbd",{children:"s"})]}),(0,r.jsx)(n.td,{children:"Cancel the ongoing search"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sorting",children:"Sorting"}),"\n",(0,r.jsx)(n.p,{children:"To sort files/directories use the following commands."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Observation: ",(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"a"})," indicates pressing the ",(0,r.jsx)("kbd",{children:","})," key followed by pressing the ",(0,r.jsx)("kbd",{children:"a"})," key."]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"m"})]}),(0,r.jsx)(n.td,{children:"Sort by modified time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"M"})]}),(0,r.jsx)(n.td,{children:"Sort by modified time (reverse)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"b"})]}),(0,r.jsx)(n.td,{children:"Sort by birth time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"B"})]}),(0,r.jsx)(n.td,{children:"Sort by birth time (reverse)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"e"})]}),(0,r.jsx)(n.td,{children:"Sort by file extension"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"E"})]}),(0,r.jsx)(n.td,{children:"Sort by file extension (reverse)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"a"})]}),(0,r.jsx)(n.td,{children:"Sort alphabetically"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"A"})]}),(0,r.jsx)(n.td,{children:"Sort alphabetically (reverse)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"n"})]}),(0,r.jsx)(n.td,{children:"Sort naturally"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"N"})]}),(0,r.jsx)(n.td,{children:"Sort naturally (reverse)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"s"})]}),(0,r.jsx)(n.td,{children:"Sort by size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"S"})]}),(0,r.jsx)(n.td,{children:"Sort by size (reverse)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:","})," \u21d2 ",(0,r.jsx)("kbd",{children:"r"})]}),(0,r.jsx)(n.td,{children:"Sort randomly"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"multi-tab",children:"Multi-tab"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key binding"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"t"})}),(0,r.jsx)(n.td,{children:"Create a new tab with CWD"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"1"}),", ",(0,r.jsx)("kbd",{children:"2"}),", ..., ",(0,r.jsx)("kbd",{children:"9"})]}),(0,r.jsx)(n.td,{children:"Switch to the N-th tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"["})}),(0,r.jsx)(n.td,{children:"Switch to the previous tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"]"})}),(0,r.jsx)(n.td,{children:"Switch to the next tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"{"})}),(0,r.jsx)(n.td,{children:"Swap current tab with previous tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"}"})}),(0,r.jsx)(n.td,{children:"Swap current tab with next tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("kbd",{children:"Ctrl"})," + ",(0,r.jsx)("kbd",{children:"c"})]}),(0,r.jsx)(n.td,{children:"Close the current tab"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"flavors",children:"Flavors"}),"\n",(0,r.jsxs)(n.p,{children:["Pick a color scheme you like from our ",(0,r.jsx)(n.a,{href:"https://github.com/yazi-rs/flavors",children:"flavors repository"}),", or ",(0,r.jsx)(n.a,{href:"/docs/flavors/overview#cooking",children:"cooking a flavor"}),"!"]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},1218:(e,n,s)=>{s.d(n,{A:()=>i});s(9474);var d=s(3394);const r={tabItem:"tabItem_pyzt"};var t=s(3274);function i(e){let{children:n,hidden:s,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,d.A)(r.tabItem,i),hidden:s,children:n})}},4297:(e,n,s)=>{s.d(n,{A:()=>g});var d=s(9474),r=s(3394),t=s(9335),i=s(241),l=s(4421),c=s(2392),h=s(2921),a=s(2475);function o(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:s}=e;return(0,d.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:s,attributes:d,default:r}}=e;return{value:n,label:s,attributes:d,default:r}}))}(s);return function(e){const n=(0,h.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(t),(0,d.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,t=x(e),[i,c]=(0,d.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const d=s.find((e=>e.default))??s[0];if(!d)throw new Error("Unexpected error: 0 tabValues");return d.value}({defaultValue:n,tabValues:t}))),[h,o]=u({queryString:s,groupId:r}),[b,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,a.Dv)(s);return[r,(0,d.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),f=(()=>{const e=h??b;return j({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,d.useCallback)((e=>{if(!j({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),p(e)}),[o,p,t]),tabValues:t}}var p=s(6791);const f={tabList:"tabList_GyOH",tabItem:"tabItem_o4hv"};var m=s(3274);function k(e){let{className:n,block:s,selectedValue:d,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,t.a_)(),a=e=>{const n=e.currentTarget,s=c.indexOf(n),r=l[s].value;r!==d&&(h(n),i(r))},o=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:d===n?0:-1,"aria-selected":d===n,ref:e=>{c.push(e)},onKeyDown:o,onClick:a,...t,className:(0,r.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":d===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:t}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,d.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,d.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=b(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,m.jsx)(k,{...n,...e}),(0,m.jsx)(y,{...n,...e})]})}function g(e){const n=(0,p.A)();return(0,m.jsx)(v,{...e,children:o(e.children)},String(n))}},3623:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var d=s(9474);const r={},t=d.createContext(r);function i(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);
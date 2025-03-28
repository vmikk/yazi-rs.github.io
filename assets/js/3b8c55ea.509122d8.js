"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[803],{8757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"installation","title":"Installation","description":"How to install Yazi on various operating systems.","source":"@site/docs/installation.md","sourceDirName":".","slug":"/installation","permalink":"/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"How to install Yazi on various operating systems."},"sidebar":"docsSidebar","next":{"title":"Quick Start","permalink":"/docs/quick-start"}}');var a=t(3274),s=t(3623),r=t(4297),l=t(1218);const o={sidebar_position:1,description:"How to install Yazi on various operating systems."},c="Installation",h={},d=[{value:"Packaging status",id:"packaging",level:2},{value:"Arch Linux",id:"arch",level:2},{value:"Nix",id:"nix",level:2},{value:"Nix flakes",id:"flakes",level:2},{value:"Cache",id:"cache",level:3},{value:"Homebrew",id:"homebrew",level:2},{value:"MacPorts",id:"macports",level:2},{value:"NetBSD",id:"netbsd",level:2},{value:"Windows",id:"windows",level:2},{value:"Install with Scoop",id:"install-with-scoop",level:3},{value:"Install with WinGet",id:"install-with-winget",level:3},{value:"Debian based Linux",id:"debian",level:2},{value:"Snapcraft",id:"snapcraft",level:2},{value:"Flatpak",id:"flatpak",level:2},{value:"AOSC OS",id:"aosc",level:2},{value:"x-cmd",id:"x-cmd",level:2},{value:"Official binaries",id:"binaries",level:2},{value:"crates.io",id:"crates",level:2},{value:"Build from source",id:"source",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,a.jsx)(n.p,{children:"To use Yazi, you must have the following prerequisites installed:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/file/file",children:(0,a.jsx)(n.code,{children:"file"})})," (for file type detection)"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Yazi can be ",(0,a.jsx)(n.strong,{children:"optionally"})," extended with other command line tools to enable additional features."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.nerdfonts.com/",children:"nerd-fonts"})," (",(0,a.jsx)(n.a,{href:"/docs/faq#dont-like-nerd-fonts",children:(0,a.jsx)(n.em,{children:"recommended"})}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.ffmpeg.org/",children:(0,a.jsx)(n.code,{children:"ffmpeg"})})," (for video thumbnails)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.7-zip.org/",children:"7-Zip"})," (for archive extraction and preview)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://jqlang.github.io/jq/",children:(0,a.jsx)(n.code,{children:"jq"})})," (for JSON preview)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://poppler.freedesktop.org/",children:(0,a.jsx)(n.code,{children:"poppler"})})," (for PDF preview)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/sharkdp/fd",children:(0,a.jsx)(n.code,{children:"fd"})})," (for file searching)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/BurntSushi/ripgrep",children:(0,a.jsx)(n.code,{children:"rg"})})," (for file content searching)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/junegunn/fzf",children:(0,a.jsx)(n.code,{children:"fzf"})})," (for quick file subtree navigation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/ajeetdsouza/zoxide",children:(0,a.jsx)(n.code,{children:"zoxide"})})," (for historical directories navigation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://imagemagick.org/",children:"ImageMagick"})," (for SVG, Font, HEIC, and JPEG XL preview)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/astrand/xclip",children:(0,a.jsx)(n.code,{children:"xclip"})})," / ",(0,a.jsx)(n.a,{href:"https://github.com/bugaevc/wl-clipboard",children:(0,a.jsx)(n.code,{children:"wl-clipboard"})})," / ",(0,a.jsx)(n.a,{href:"https://github.com/kfish/xsel",children:(0,a.jsx)(n.code,{children:"xsel"})})," (for Linux clipboard support)"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If the functions are not working properly, please try upgrading them to the latest version."}),"\n",(0,a.jsx)(n.h2,{id:"packaging",children:"Packaging status"}),"\n",(0,a.jsxs)(n.p,{children:["Most packages on this page are maintained by the community, and they ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"may not always be the latest"})}),". Please check their versions before installation:"]}),"\n",(0,a.jsx)("a",{alt:"Yazi packaging status",href:"https://repology.org/project/yazi/versions",children:(0,a.jsx)("img",{alt:"Yazi packaging status",height:"685",src:"https://repology.org/badge/vertical-allrepos/yazi.svg"})}),"\n",(0,a.jsx)(n.h2,{id:"arch",children:"Arch Linux"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sudo pacman -S yazi ffmpeg 7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to use the latest Git version, you can install it from ",(0,a.jsx)(n.a,{href:"https://aur.archlinux.org/packages/yazi-git/",children:"AUR"})," or ",(0,a.jsx)(n.a,{href:"https://github.com/archlinuxcn/repo/",children:"Arch Linux CN"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"paru -S yazi-git ffmpeg 7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also install the ",(0,a.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/releases/tag/nightly",children:"official nightly release binary"})," from ",(0,a.jsx)(n.a,{href:"https://aur.archlinux.org/packages/yazi-nightly-bin",children:"AUR"}),",\nwhich is built from the latest code within the past 6 hours:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"paru -S yazi-nightly-bin ffmpeg 7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,a.jsx)(n.h2,{id:"nix",children:"Nix"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.a,{href:"https://search.nixos.org/packages?channel=unstable&show=yazi",children:"Nix package"})," for Yazi is available."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# NixOS:\nnix-env -iA nixos.yazi\n\n# Not NixOS:\nnix-env -iA nixpkgs.yazi\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or add the following to your configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nix",children:"# configuration.nix\nenvironment.systemPackages = with pkgs; [\n\tyazi\n];\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also manage Yazi's configuration using ",(0,a.jsx)(n.a,{href:"https://nix-community.github.io/home-manager/options.xhtml#opt-programs.yazi.enable",children:"home-manager"}),", here is a configuration template example:"]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Demonstrate configuring Yazi with home-manager"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nix",children:'{pkgs, ...}: let\n\tyazi-plugins = pkgs.fetchFromGitHub {\n\t\towner = "yazi-rs";\n\t\trepo = "plugins";\n\t\trev = "...";\n\t\thash = "sha256-...";\n\t};\nin {\n\tprograms.yazi = {\n\t\tenable = true;\n\t\tenableZshIntegration = true;\n\t\tshellWrapperName = "y";\n\n\t\tsettings = {\n\t\t\tmanager = {\n\t\t\t\tshow_hidden = true;\n\t\t\t};\n\t\t\tpreview = {\n\t\t\t\tmax_width = 1000;\n\t\t\t\tmax_height = 1000;\n\t\t\t};\n\t\t};\n\n\t\tplugins = {\n\t\t\tchmod = "${yazi-plugins}/chmod.yazi";\n\t\t\tfull-border = "${yazi-plugins}/full-border.yazi";\n\t\t\ttoggle-pane = "${yazi-plugins}/toggle-pane.yazi";\n\t\t\tstarship = pkgs.fetchFromGitHub {\n\t\t\t\towner = "Rolv-Apneseth";\n\t\t\t\trepo = "starship.yazi";\n\t\t\t\trev = "...";\n\t\t\t\tsha256 = "sha256-...";\n\t\t\t};\n\t\t};\n\n\t\tinitLua = \'\'\n\t\t\trequire("full-border"):setup()\n\t\t\trequire("starship"):setup()\n\t\t\'\';\n\n\t\tkeymap = {\n\t\t\tmanager.prepend_keymap = [\n\t\t\t\t{\n\t\t\t\t\ton = "T";\n\t\t\t\t\trun = "plugin toggle-pane max-preview";\n\t\t\t\t\tdesc = "Maximize or restore the preview pane";\n\t\t\t\t}\n\t\t\t\t{\n\t\t\t\t\ton = ["c" "m"];\n\t\t\t\t\trun = "plugin chmod";\n\t\t\t\t\tdesc = "Chmod on selected files";\n\t\t\t\t}\n\t\t\t];\n\t\t};\n\t};\n}\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"flakes",children:"Nix flakes"}),"\n",(0,a.jsxs)(n.p,{children:["The upstream repository provides a flake so that Nix users can easily keep up with the bleeding edge. A basic ",(0,a.jsx)(n.code,{children:"flake.nix"})," setup to get you started:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nix",children:'{\n\tinputs = {\n\t\tnixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";\n\n\t\thome-manager = {\n\t\t\turl = "github:nix-community/home-manager/release-23.11";\n\t\t\tinputs.nixpkgs.follows = "nixpkgs";\n\t\t};\n\n\t\tyazi.url = "github:sxyazi/yazi";\n\t};\n\n\toutputs = { nixpkgs, home-manager, yazi, ... }: {\n\t\t# To install Yazi system-wide:\n\t\tnixosConfigurations = {\n\t\t\tnixos = nixpkgs.lib.nixosSystem {\n\t\t\t\tmodules = [\n\t\t\t\t\t({ pkgs, ... }: {\n\t\t\t\t\t\tenvironment.systemPackages = [ yazi.packages.${pkgs.system}.default ];\n\t\t\t\t\t})\n\t\t\t\t];\n\t\t\t};\n\t\t};\n\n\t\t# To install it for a specific user:\n\t\thomeConfigurations = {\n\t\t\t"alice@nixos" = home-manager.lib.homeManagerConfiguration {\n\t\t\t\tpkgs = nixpkgs.legacyPackages.x86_64-linux;\n\t\t\t\tmodules = [\n\t\t\t\t\t({ pkgs, ... }: {\n\t\t\t\t\t\thome.packages = [ yazi.packages.${pkgs.system}.default ];\n\t\t\t\t\t})\n\t\t\t\t];\n\t\t\t};\n\t\t};\n\t};\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"If you want to override the package inside nixpkgs with the one from the flake, you can use overlays:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nix",children:"nixpkgs.overlays = [ yazi.overlays.default ];\n"})}),"\n",(0,a.jsx)(n.p,{children:"A module is also available for both NixOS and home-manager:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nix",children:"programs.yazi = {\n\tenable = true;\n\tpackage = yazi.packages.${pkgs.system}.default; # if you use overlays, you can omit this\n};\n"})}),"\n",(0,a.jsx)(n.h3,{id:"cache",children:"Cache"}),"\n",(0,a.jsxs)(n.p,{children:["Pre-built artifacts are served at ",(0,a.jsx)(n.a,{href:"https://yazi.cachix.org",children:"https://yazi.cachix.org"}),", so that Nix users don't have to build Yazi on their machine.\nYou can make use of it by adding the following options to ",(0,a.jsx)(n.code,{children:"nix.settings"}),", either in your NixOS or home-manager configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nix",children:'extra-substituters = [ "https://yazi.cachix.org" ];\nextra-trusted-public-keys = [ "yazi.cachix.org-1:Dcdz63NZKfvUCbDGngQDAZq6kOroIrFoyO064uvLh8k=" ];\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the cache will only be applied ",(0,a.jsx)(n.em,{children:"after"})," you rebuild your Nix config. If you want to ensure that the cache gets applied right away, add the options above to your flake's ",(0,a.jsx)(n.code,{children:"nixConfig"})," attribute."]}),"\n",(0,a.jsxs)(n.p,{children:["If you're having any problems, refer to this ",(0,a.jsx)(n.a,{href:"https://docs.cachix.org/faq#why-is-nix-not-picking-up-on-any-of-the-pre-built-artifacts",children:"entry"})," from Cachix's FAQ."]}),"\n",(0,a.jsx)(n.h2,{id:"homebrew",children:"Homebrew"}),"\n",(0,a.jsxs)(n.p,{children:["First, make sure that Homebrew is fully up-to-date with ",(0,a.jsx)(n.code,{children:"brew update"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Then you can install Yazi (and the optional dependencies):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"brew install yazi ffmpeg sevenzip jq poppler fd ripgrep fzf zoxide imagemagick font-symbols-only-nerd-font\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you prefer to use the most recent code, use the ",(0,a.jsx)(n.code,{children:"--HEAD"})," flag when installing Yazi."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"brew install yazi --HEAD\n"})}),"\n",(0,a.jsx)(n.h2,{id:"macports",children:"MacPorts"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo port install yazi ffmpeg 7zip jq poppler fd ripgrep fzf zoxide ImageMagick\n"})}),"\n",(0,a.jsx)(n.h2,{id:"netbsd",children:"NetBSD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"pkgin install yazi ffmpeg7 p7zip jq poppler fd ripgrep fzf zoxide ImageMagick\n"})}),"\n",(0,a.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,a.jsxs)(n.p,{children:["Yazi relies on ",(0,a.jsx)(n.code,{children:"file(1)"})," to detect the mime-type of the file, and the easiest and most reliable way to get it on Windows is to install Git for Windows and use the ",(0,a.jsx)(n.code,{children:"file.exe"})," that comes with it."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Install Git for Windows by running ",(0,a.jsx)(n.a,{href:"https://git-scm.com/download/win",children:"the official installer"}),", or through your package manager of choice."]}),"\n",(0,a.jsxs)(n.li,{children:["To allow Yazi to use ",(0,a.jsx)(n.code,{children:"file(1)"}),", add ",(0,a.jsx)(n.code,{children:"<Git_Installed_Directory>\\usr\\bin\\file.exe"})," to your ",(0,a.jsx)(n.code,{children:"YAZI_FILE_ONE"})," environment variable, which differs depending on how you installed Git:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you installed Git with the installer, it would be ",(0,a.jsx)(n.code,{children:"C:\\Program Files\\Git\\usr\\bin\\file.exe"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If you installed Git with Scoop, it would be ",(0,a.jsx)(n.code,{children:"C:\\Users\\<Username>\\scoop\\apps\\git\\current\\usr\\bin\\file.exe"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Restart your terminal."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This is ",(0,a.jsx)(n.strong,{children:"the ONLY way we recommend"}),". We do not recommend install ",(0,a.jsx)(n.code,{children:"file"})," via Scoop or Chocolatey, since they cannot handle Unicode filenames (such as ",(0,a.jsx)(n.code,{children:"oliver-sjo\u0308stro\u0308m.jpg"}),") properly and lack some required parameters."]}),"\n",(0,a.jsxs)(n.p,{children:["Most users already have Git installed, and Yazi is also hosted via Git, so this usually isn't an issue. But if you really don't have/want to install it, the ",(0,a.jsx)(n.a,{href:"https://github.com/yazi-rs/plugins/tree/main/mime-ext.yazi",children:(0,a.jsx)(n.code,{children:"mime-ext.yazi"})})," plugin can help, which use a extension database instead of relying on the ",(0,a.jsx)(n.code,{children:"file(1)"})," binary."]}),"\n",(0,a.jsx)(n.h3,{id:"install-with-scoop",children:"Install with Scoop"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"scoop install yazi\n# Install the optional dependencies (recommended):\nscoop install ffmpeg 7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,a.jsx)(n.h3,{id:"install-with-winget",children:"Install with WinGet"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"winget install sxyazi.yazi\n# Install the optional dependencies (recommended):\nwinget install Gyan.FFmpeg 7zip.7zip jqlang.jq sharkdp.fd BurntSushi.ripgrep.MSVC junegunn.fzf ajeetdsouza.zoxide ImageMagick.ImageMagick\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Poppler is not yet on WinGet, install with Scoop or manually download from ",(0,a.jsx)(n.a,{href:"https://github.com/oschwartz10612/poppler-windows",children:"poppler-windows"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"debian",children:"Debian based Linux"}),"\n",(0,a.jsxs)(n.p,{children:["In Debian/Ubuntu, you currently need to ",(0,a.jsx)(n.a,{href:"/docs/installation#source",children:"manually build Yazi"})," or ",(0,a.jsx)(n.a,{href:"/docs/installation#binaries",children:"download our official binary release"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You can install the optional dependencies with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"apt install ffmpeg 7zip jq poppler-utils fd-find ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that these dependencies are quite old on some Debian/Ubuntu versions and may cause Yazi to malfunction. In that case, you will need to manually build them from the latest source."}),"\n",(0,a.jsxs)(n.p,{children:["If you know how to package Yazi for Debian/Ubuntu and would like to help us submit it, please ",(0,a.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/issues/new/choose",children:"file an issue"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"snapcraft",children:"Snapcraft"}),"\n",(0,a.jsx)("a",{href:"https://snapcraft.io/yazi",children:(0,a.jsx)("img",{height:"40",alt:"Install Yazi from Snapcraft",src:"https://snapcraft.io/en/dark/install.svg"})}),"\n",(0,a.jsxs)(n.p,{children:["You can install Yazi from the ",(0,a.jsx)(n.a,{href:"https://snapcraft.io/yazi",children:"Snap Store"})," with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sudo snap install yazi --classic\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you want to keep up with the bleeding edge, get the nightly version with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sudo snap install yazi --classic --edge\n"})}),"\n",(0,a.jsx)(n.h2,{id:"flatpak",children:"Flatpak"}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsxs)(n.p,{children:["The Flatpak edition comes with many limitations due to sandboxing - see its ",(0,a.jsx)(n.a,{href:"https://github.com/flathub/io.github.sxyazi.yazi",children:"README"})," for details."]}),(0,a.jsx)(n.p,{children:"Power users are recommended to transition to an alternative installation to avoid unexpected breakages."})]}),"\n",(0,a.jsx)("a",{href:"https://flathub.org/apps/io.github.sxyazi.yazi",children:(0,a.jsx)("img",{height:"40",alt:"Install Yazi from Flathub",src:"https://flathub.org/api/badge?locale=en"})}),"\n",(0,a.jsxs)(n.p,{children:["After ",(0,a.jsx)(n.a,{href:"https://flathub.org/apps/io.github.sxyazi.yazi",children:"installation"}),", you can run Yazi in the terminal with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"flatpak run io.github.sxyazi.yazi\n"})}),"\n",(0,a.jsx)(n.p,{children:"You may want to create a shell alias:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'alias yazi="flatpak run io.github.sxyazi.yazi"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["See the Flatpak edition's ",(0,a.jsx)(n.a,{href:"https://github.com/flathub/io.github.sxyazi.yazi",children:"README"})," for more information."]}),"\n",(0,a.jsx)(n.h2,{id:"aosc",children:"AOSC OS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sudo oma install yazi ffmpeg p7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,a.jsx)(n.h2,{id:"x-cmd",children:"x-cmd"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"x env use yazi ffmpeg 7zz jq fd rg fzf zoxide magick\n"})}),"\n",(0,a.jsx)(n.h2,{id:"binaries",children:"Official binaries"}),"\n",(0,a.jsxs)(n.p,{children:["You can download the latest official binaries from GitHub Releases: ",(0,a.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/releases",children:"https://github.com/sxyazi/yazi/releases"})]}),"\n",(0,a.jsx)(n.p,{children:"On this page, we offer GNU/Musl builds to meet the needs of different users."}),"\n",(0,a.jsxs)(n.p,{children:["This page also includes a ",(0,a.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/releases/tag/nightly",children:"nightly release"}),", which is built from the latest code within the past 6 hours."]}),"\n",(0,a.jsx)(n.h2,{id:"crates",children:"crates.io"}),"\n",(0,a.jsxs)(n.p,{children:["Yazi is available as ",(0,a.jsx)(n.a,{href:"https://crates.io/crates/yazi-fm",children:(0,a.jsx)(n.code,{children:"yazi-fm"})})," and ",(0,a.jsx)(n.a,{href:"https://crates.io/crates/yazi-cli",children:(0,a.jsx)(n.code,{children:"yazi-cli"})})," on ",(0,a.jsx)(n.a,{href:"https://crates.io/",children:"crates.io"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["To install them, setup the latest stable Rust toolchain via ",(0,a.jsx)(n.a,{href:"https://rustup.rs/",children:"rustup"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nrustup update\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now you can install Yazi via ",(0,a.jsx)(n.code,{children:"cargo"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cargo install --locked yazi-fm yazi-cli\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or install the latest Git version:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cargo install --locked --git https://github.com/sxyazi/yazi.git yazi-fm yazi-cli\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If it fails to build, please check if ",(0,a.jsx)(n.code,{children:"make"})," and ",(0,a.jsx)(n.code,{children:"gcc"})," is installed on your system."]}),"\n",(0,a.jsx)(n.h2,{id:"source",children:"Build from source"}),"\n",(0,a.jsxs)(n.p,{children:["Setup the latest stable Rust toolchain via ",(0,a.jsx)(n.a,{href:"https://rustup.rs/",children:"rustup"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nrustup update\n"})}),"\n",(0,a.jsx)(n.p,{children:"Clone the repository and build Yazi:"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"non-windows",label:"non-Windows",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/sxyazi/yazi.git\ncd yazi\ncargo build --release --locked\n"})})}),(0,a.jsx)(l.A,{value:"windows",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/sxyazi/yazi.git\ncd yazi\ncargo build --profile release-windows --locked\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Then, add ",(0,a.jsx)(n.code,{children:"yazi"})," and ",(0,a.jsx)(n.code,{children:"ya"})," to your ",(0,a.jsx)(n.code,{children:"$PATH"}),":"]}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"non-windows",label:"non-Windows",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mv target/release/yazi target/release/ya /usr/local/bin/\n"})})}),(0,a.jsx)(l.A,{value:"windows",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'move target\\release-windows\\yazi.exe "%ProgramFiles%\\yazi.exe"\nmove target\\release-windows\\ya.exe "%ProgramFiles%\\ya.exe"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["If it fails to build, please check if ",(0,a.jsx)(n.code,{children:"make"})," and ",(0,a.jsx)(n.code,{children:"gcc"})," is installed on your system."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1218:(e,n,t)=>{t.d(n,{A:()=>r});t(9474);var i=t(3394);const a={tabItem:"tabItem_pyzt"};var s=t(3274);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,r),hidden:t,children:n})}},4297:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(9474),a=t(3394),s=t(9335),r=t(241),l=t(4421),o=t(2392),c=t(2921),h=t(2475);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=u(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:a}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,h.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(6791);const m={tabList:"tabList_GyOH",tabItem:"tabItem_o4hv"};var j=t(3274);function y(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==i&&(c(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:h,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function z(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,j.jsx)(y,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(z,{...e,children:d(e.children)},String(n))}},3623:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(9474);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
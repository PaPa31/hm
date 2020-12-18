---
id: powerline-in-powershell
title: Powerline in PowerShell
---


Powerline uses glyphs in order to style the prompt. If your font does not include Powerline glyphs, you may see several Unicode replacement characters '▯' throughout your prompt. Though [Cascadia Mono](https://docs.microsoft.com/en-us/windows/terminal/cascadia-code) does not include Powerline glyphs, you can install Cascadia Code PL or Cascadia Mono PL, which have the Powerline glyphs included. These fonts can be installed from the [Cascadia Code GitHub releases page](https://github.com/microsoft/cascadia-code/releases).

### PowerShell prerequisites

If you don't already have it, [install Git for Windows](https://git-scm.com/downloads).

Using PowerShell, install Posh-Git and Oh-My-Posh:

```sh title="PowerShell"
Install-Module posh-git -Scope CurrentUser
Install-Module oh-my-posh -Scope CurrentUser
```

:::tip
You may need to install NuGet if you don't already have it. Your PowerShell command line will ask if you want to install NuGet if this is the case. Select [Y] Yes. You may also need to approve that you are installing modules from PSGallery, an 'untrusted repository'. Select [Y] Yes.
:::

Posh-Git adds Git status information to your prompt as well as tab-completion for Git commands, parameters, remotes, and branch names. Oh-My-Posh provides theme capabilities for your PowerShell prompt.

If you are using PowerShell Core, install PSReadline:

```shell title="PowerShell"
Install-Module -Name PSReadLine -Scope CurrentUser -Force -SkipPublisherCheck
```
### Customize your PowerShell prompt

Open your PowerShell profile with `notepad $PROFILE` or the text editor of your choice. This is not your Windows Terminal profile. Your PowerShell profile is a script that runs every time PowerShell starts. [Learn more about PowerShell profiles](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles).

In your PowerShell profile, add the following to the end of the file:

```ps title="PowerShell"
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme Paradox
```

## Set Cascadia Code PL as fontFace in settings

To set the Cascadia Code PL font for use with PowerLine (after [downloading, unzipping, and installing](new-windows-setup#installing-fonts) on your system), you will need to open your profile settings in your settings.json file by selecting Settings (Ctrl+,) from your Windows Terminal drop-down menu.

:::info
To see default.json you must hold Alt key and click Settings in Windows Terminal menu. 
:::

Once your settings.json file opens, find the Windows PowerShell profile and add: "fontFace": "Cascadia Code PL" to designate Cascadia Code PL as the font. This will provide those nice Cascadia Code Powerline glyphs. You should notice the change in your terminal as soon as you select Save in your editor.

Your Windows PowerShell profile settings.json file should now look like this:

```json title="JSON"
{
    // Make changes here to the powershell.exe profile.
    "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "name": "Windows PowerShell",
    "commandline": "powershell.exe",
    "fontFace": "Cascadia Code PL",
    "hidden": false
},
```


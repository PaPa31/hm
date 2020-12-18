---
id: new-windows-setup
title: New Windows Setup
---

## Folders

`super` - 6 starter apps installers (**OneDrive**)

`middle` - rest of others apps (**1th Yandex.disk**)

`down` - working files (**GoogleDrive**)


## Microsoft Edge

Added link in collection `Super`:  
1. [Download Google Chrome](https://www.google.com/chrome/)


## Google Chrome 

following links are located in the bookmark folder `Super` Google Chrome:

2. [***Yandex.Disk***](https://disk.yandex.com/download#pc "direct download link") <sup>10Gb free</sup>  
Needs to select the folder location: `F:\Yandex.disk-visi` in the settings. 

:::info Folder Location
You can change it at any time after installation.
:::

3. [***GoogleDrive***](https://www.google.com/drive/download/ "direct download link") <sup>15Gb free</sup>  
During installation you need to set your GoogleDrive folder location to `F:\GoogleDrive`

:::info Folder Location
After installation you can't change the folder location. To do this you must uninstall and reinstal GoogleDrive.
:::

4. [***OneDrive***](https://www.microsoft.com/en-us/microsoft-365/onedrive/download "direct download link") <sup>5Gb free</sup>

:::info Folder Location
To set the correct folder location on OneDrive you need to go into Settings and select `unlink this PC`.
:::

:::tip Remember
After the initial default installation of one of the cloude services, you will get a folder with the default location set to `C:\User\user-name`. 

And if after that you change the location of this folder, you'll have to manually delete the default folders with all the contents.  
:::


If you are facing with permissions issue when  deleting the default OneDrive folder, follow these steps. Run `cmd.exe` as admin and run in cmd terminal these commands :

```cmd
taskkill /im explorer.exe
explorer.exe
```

:::danger This is dangerous! 
To avoid data loss, do not forcefully empty the remote cloud storage trash when you change the location of your local storages.
:::

5. [***VS Code***](https://code.visualstudio.com/download "direct download link")  
choose `System Installer`, installation to `F:\Program Files\VS Code` 
    

6. [***Git-Bash***](https://git-scm.com/download/win "direct download link")  
choose `Portable`, to `F:\Portable\Git` 

Even if you choose the non-portable version it will not atomatically put a Git-Bash entry in `settings.json` of Windows Terminal.

## Two Fonts

7. [***Cascadia Code Font***](https://github.com/tonsky/FiraCode/releases "release page")  
Mainly for PowerShell terminal (git)

8. [***Fira Code Font***](https://github.com/microsoft/cascadia-code/releases "release page")  
Mainly for VS Code

### Installing Fonts

Both fonts installing similar:

1. Download zip
2. Unzip
3. Open ttf folder
4. Select all files
5. Right-click
6. Select Install


## bats, sys & regs

In this folders contains scripts to automate the configuration.

Need to set storage folders in Windows Settings menu. And set right-click context menus. To avoid the errors when set the folders.

## Yandex.Disk

In my Yandex.Disk-visi lays the `Super` folder. But this folder must be in the OneDrive folder and be very light. With couple programms (installers). The others I can found by another ways (via `hm` site, for example).

TODO: Install Yandex.Disk, dowloads all Yandex.Disk-visi files. Make another folder: `Middle`. Move not relevant files from the `Super` folder to `Middle`. Move `Super` folder to OneDrive.

1. Install Yandex.disk:  
[https://disk.yandex.com/download/YandexDiskSetup.exe?src=Yandex.Landing](https://disk.yandex.com/download/YandexDiskSetup.exe?src=Yandex.Landing)



## Desktop Icons

After copying the F: disk the Descktop Icons is shown. 

But after copying 

## Red Dead Redemption 2

RDR2 can started without the additonal steps. But it started from the begining (if you press `ok` when popup about graphic driver). To avoid this and to start from 'game map' you need copy/past one file (for example, `SRDR30015`) from this folder:  
```
F:\parsh\Documents\RDR2-backup-to-Users-parsh-AppData-Roaming-Golderg-RDR2\0F74F4C4
```

to folder in the above folder name:

```
C:\Users\parsh\AppData\Roaming\Golderg-bla-bla-bla\RDR2\0F74F4C4
```

The game stars but suddenly aborts after 10 minutes.

:::tip RDR2
The work around is to change the system date to 2019.
:::

## VS Code

VS Code started well (exept font), but I've got this:

```
Looking for git in: C:\Program Files\Git\cmd\git.exe
Looking for git in: C:\Program Files (x86)\Git\cmd\git.exe
Looking for git in: C:\Program Files\Git\cmd\git.exe
Looking for git in: C:\Users\parsh\AppData\Local\Programs\Git\cmd\git.exe
Git installation not found.
```
And GitLens plugin gave the error about Git absense.

Need to reinstall the portable Git-Bash version to my default folder 'F:'?

Another error massage:

```
Git not found. Install it or configure the git.path
``` 

I opened VS-Code `setting.json` and add the line:

```json
"git.path": "F:\\Portable\\Git\\cmd\\git.exe"
```
And if VS Code terminal doesn't want to work, add the following to the end of your System Environment Variable:

```
F:\Portable\Git\bin
```
:::note Environment Variable

:::

This line works but you won't need it if you have installed a non-portable version of Git-Bash.

> All apps requiring customization after copy/paste from cloud service cannot be portable. 
>
> If a workflow requires communication between app, portability is irrelevant.

## Git-Bash

Git-Bash doesn't work fine out-of-the-box. Pushing to remote doesn't work. Need ssh setup.

### SSH Setup

Every new machine need to be verificated through a new pair keys? Yes, most likely.




## Windows Terminal






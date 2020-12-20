---
id: new-windows-setup
title: New Windows Setup
---

### 4 Folders

```bash
F:\OneDrive\super   # starter apps
```

```bash
F:\Yandex.Disk-visi\middle   # additional apps
```

```bash
F:\Yandex.Disk-parsh\hm   # doc files
```

```bash
F:\GoogleDrive\down   # working files 
```

### Directory Tree
```bash
F:\ # root directory of second partition
│
├── OneDrive
│   └── super
│
├── Yandex.Disk-visi
│   └── middle
│
├── Yandex.Disk-parsh
│   └── hm
│
├── GoogleDrive
│   └── down
│
├── ...
```
## starter apps

---

### 1. [Google Chrome](https://www.google.com/chrome/) 
`Default install --> C:\Program Files\Google`

Open your Microsoft Edge browser (Windows installs it by default). Look the link in the collection `Super` of browser. 

:::note
When you installed **Google Chrome**, the following links are located in the `Super` bookmark folder of your Google Chrome.
:::

### 2. [Yandex.Disk](https://disk.yandex.com/download#pc "direct download link") <sup>10Gb free</sup>

:::tip Linking Yandex Accounts
You can connect/reconnect Yandex.Disk to any Yandex account. Firstly, you need to be logged in, and secondly, configure the location of your local folder. 

Later you can logout and login to another Yandex account.
:::


```bash title="Linking to two Yandex accounts"
1. Force install --> F:\Yandex.disk-visi    # with 10Gb size
2. Force install --> F:\Yandex.disk-parsh   # with 30Gb size
```

:::info Yandex.Disk Folder Location
You can change `Folder location` in Yandex.Disk at any time after installation. Which is very convenient! To do that, open Yandex.Disk Settings and click **Change folder location...**
:::

### 3. [GoogleDrive](https://www.google.com/drive/download/ "direct download link") <sup>15Gb free</sup>  
`Force install --> F:\GoogleDrive`

:::caution Google Drive Folder Location
After installation you can't change the folder location. To do this you must uninstall and reinstall GoogleDrive.
:::

### 4. [OneDrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/download "direct download link") <sup>5Gb free</sup>

`Force install --> F:\OneDrive`

:::info One Drive Folder Location
If you need to fix the folder location on OneDrive, you need to open the OneDrive Settings and select `unlink this PC`.
:::
---
## Avoid Duplication

:::note Remember
After the initial **default installation** of one of the cloude services, you will get a folder with the **default location** set to `C:\User\user-name`. 

And if you later change the location of this folder, you'll have to **manually delete** the default folders with all the contents to avoid duplication.  
:::

## Permission Issue During Removing

If you are facing with permissions issue when  deleting the default OneDrive folder, follow these steps. Run `cmd.exe` as admin and run in cmd terminal these commands :

```cmd
taskkill /im explorer.exe
explorer.exe
```

:::danger This is dangerous! 
To avoid data loss, do not forcefully empty the remote cloud storage trash when you change the location of your local storages.
:::

## starter apps (continued)
---
### 5. [VS Code](https://code.visualstudio.com/download "direct download link")  
~~choose `System Installer`, installation to `F:\Program Files\VS Code`~~

[Download VS Code for Windows](https://code.visualstudio.com/)

To sync VS Code I chose PaPa31(GitHub) account
    

### 6. [Git-Bash](https://git-scm.com/download/win "direct download link")  
~~choose `Portable`, to `F:\Portable\Git`~~ 

:::tip See 
[Install Git-Bash, node and ssh setup](git-bash-node-ssh)
:::

:::note
If you choose the ***non-portable*** version it will not atomatically put a Git-Bash entry in `settings.json` of Windows Terminal. Manual configuration required.
:::

### 7. [Cascadia Code Font](https://github.com/tonsky/FiraCode/releases "release page")  
With Powerline glyphs. Mainly for PowerShell terminal (git).

:::tip 
See [Installing Fonts](#installing-fonts) below.
:::


### 8. [Fira Code Font](https://github.com/microsoft/cascadia-code/releases "release page")  
Mainly for VS Code


### Installing Fonts

Both above fonts installing similar:

1. Download zip
2. Unzip
3. Open ttf folder
4. Select all files
5. Right-click
6. Select Install

---

[additional apps](additional-apps) #todo

## Optional Configuration

:::tip
This section is my experience.
:::

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

But after copying from another disk (cloning) the Descktop Icons disappear.

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






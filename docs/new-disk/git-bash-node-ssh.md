---
id: git-bash-node-ssh
title: Git Bash with Node & SSH
---

## Git-Bash

Download `Git for Windows` ~~Portable~~:

https://git-scm.com/download/win

## Nodejs

Download `npm with node`:

https://nodejs.org/en/download/releases/

:::note
As of today (20\12\2020), I initially install **nodejs** version `10.23.0` due to compatibility issues.
:::

:::caution 
Last time I installed the non-portable version. See [**Non-portable nodejs**](#non-portable-nodejs) section.
:::

### Portable nodejs

:::tip 
Download `.zip` file and unzip it (for example, **node-v10.23.0-win-x64.zip**) to `F:\Portable` folder.
:::

Create a config file `/etc/node_env.conf` (WIndows location `F:\Portable\git\etc\node_env.conf`) and add to it:

```vim title="\etc\node_env.conf"
# Include node PATH
PATH=$PATH:/f/Portable/node-v10.23.0
```

Add the following to `/etc/profile` (Windows location `F:\Portable\git\etc\profile`) just before exporting the PATH:

```bash title="/etc/profile"
source "/etc/node_env.conf"
```

Restart shell.

Test:

```bash title="Git-Bash"
node --version
```
v10.23.0

### Non-Portable nodejs

:::tip MSI installer
You needs to download `.msi` file (for example, **node-v10.23.0-x64.msi**) and run it with default settings. No other setting are required (you may need to restart your terminal or VS Code).
:::
## SSH

Generate new ssh keys:

```bash title="Git-Bash"
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

When prompt `"Enter a file..."` press Enter.  
When prompt `"Enter passphrase..."` press Enter.

Starting ssh-agent:

```bash
eval $(ssh-agent -s)
```

Adding ssh-key to ssh-agent:

```bash
ssh-add ~/.ssh/id_rsa
```

Open ssh pub-key:

```bash
cat ~/.ssh/id_rsa.pub
```

Copy/past the output to the GitHub personal setting (new SSH key).

## Git author identity

to set your account's default identity, run:

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

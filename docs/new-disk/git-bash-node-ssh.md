---
id: git-bash-node-ssh
title: Git Bash with Node & SSH
---

## Git-Bash

Download `Git for Windows` Portable:

https://git-scm.com/download/win

## node

Download npm with node:

https://nodejs.org/en/download/releases/

Create a config file `/etc/node_env.conf` and add to it:

```vi title="F:\Portable\git\etc\node_env.conf"
# Include node PATH
PATH=$PATH:/f/Portable/node-v10.23.0
```

Add the following to `/etc/profile` (Windows location `F:\Portable\git\etc\profile`) just before exporting the PATH:

```bash
source "/etc/node_env.conf"
```

Restart shell.

Test:

```bash
node --version
```

## SSH

Generate new ssh keys:

```bash
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

---
id: git-bash-node-ssh
title: Git Bash with Node & SSH
---

## Git-Bash

Download `Git for Windows` ~~Portable~~:

<https://git-scm.com/download/win>

## Nodejs

Download `npm with node`:

<https://nodejs.org/en/download/releases/>

:::note

As of today (20\12\2020), I initially install **nodejs** version `10.23.0` due to compatibility issues.

:::

:::caution

Last time I installed the non-portable version. See [**Non-portable nodejs**](#non-portable-nodejs) section. Main reason: When and if you install a new Windows, you lose all the old `environment variables`. And you need to reinstall all the `git-linked` apps.

:::

### Portable nodejs

:::tip

Download `.zip` file and unzip it (for example, **node-v10.23.0-win-x64.zip**) to `F:\Portable` folder.

:::

Create a config file `/etc/node_env.conf` (Windows location `F:\Portable\git\etc\node_env.conf`) and add to it:

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

:::tip

MSI installer You needs to download `.msi` file (for example, **node-v10.23.0-x64.msi**) and run it with default settings. No other setting are required (you may need to restart your terminal or VS Code).

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

## Check Connection

Source: <a href='https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection' class='external'>docs.github.com: Testing Your SSH Connection</a>

After saving the new SSH key to GitHub, open Git-Bash and run the command:

```bash title="Git-Bash"
ssh -T git@github.com
```

You may see a warning like this:

```bash
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
> Are you sure you want to continue connecting (yes/no)?
```

Enter `Yes` and then run `git push` from any folder connected to GitHub. You will see a GitHub checkout popup. Choose the second method using `code` and copy/past the suggested code into the provided link.
